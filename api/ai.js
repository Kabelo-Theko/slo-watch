const ENDPOINT = "https://integrate.api.nvidia.com/v1/chat/completions";
const MODELS = {
  flash:   { id: "deepseek-ai/deepseek-v4-flash", keys: ["NVIDIA_API_KEY_FLASH", "NVIDIA_API_KEY"], extra: { chat_template_kwargs: { thinking: false } } },
  pro:     { id: "deepseek-ai/deepseek-v4-pro",   keys: ["NVIDIA_API_KEY_PRO", "NVIDIA_API_KEY"],   extra: { chat_template_kwargs: { thinking: false } } },
  minimax: { id: "minimaxai/minimax-m3",          keys: ["NVIDIA_API_KEY_MINIMAX", "NVIDIA_API_KEY"], extra: {} },
};
const cfgFor = (m) => MODELS[m] || MODELS.flash;
const keyFor = (c) => { for (const e of c.keys) { if (process.env[e]) return process.env[e]; } return null; };

async function readBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (req.body && typeof req.body === "string") {
    try { return JSON.parse(req.body); } catch { return {}; }
  }
  return new Promise((resolve) => {
    let raw = "";
    req.on("data", (chunk) => { raw += chunk.toString(); });
    req.on("end", () => {
      try { resolve(JSON.parse(raw)); } catch { resolve({}); }
    });
    req.on("error", () => resolve({}));
  });
}

function jsonFrom(t) {
  const start = t.indexOf("{");
  const end = t.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error("No JSON object found");
  return JSON.parse(t.slice(start, end + 1));
}

async function callModel(cfg, key, messages, max_tokens, temperature) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 55000);
  try {
    const resp = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: cfg.id,
        messages,
        max_tokens,
        temperature,
        stream: false,
        ...cfg.extra,
      }),
      signal: controller.signal,
    });
    if (!resp.ok) {
      const txt = await resp.text().catch(() => "");
      return { error: `Upstream ${resp.status}: ${txt.slice(0, 200)}` };
    }
    const data = await resp.json();
    const text = data?.choices?.[0]?.message?.content || "";
    return { text };
  } catch (err) {
    return { error: err.message || "Request failed" };
  } finally {
    clearTimeout(timer);
  }
}

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const body = await readBody(req);
  const cfg = cfgFor(body.model);
  const key = keyFor(cfg);

  if (!key) {
    res.status(503).json({ error: "No API key configured for this model" });
    return;
  }

  const task = body.task || "";

  if (task === "summary") {
    const metrics = (body.metrics || "").slice(0, 1500);
    if (!metrics) {
      res.status(400).json({ error: "metrics field is required" });
      return;
    }

    const systemPrompt = `You are an IT service manager writing a short monthly service report from PRE-COMPUTED metrics. You are given the numbers; do not invent or change any number. Respond ONLY with compact JSON {"summary":"<3 to 5 plain sentences naming the top 3 operational risks for next month and a recommended intervention for each>"}. No fluff, no em dashes.`;

    const messages = [
      { role: "system", content: systemPrompt },
      { role: "user", content: `Here are the pre-computed metrics:\n${metrics}` },
    ];

    const result = await callModel(cfg, key, messages, 360, 0.4);

    if (result.error) {
      res.status(502).json({ error: result.error });
      return;
    }

    let parsed;
    try {
      parsed = jsonFrom(result.text);
    } catch {
      res.status(502).json({ error: "Could not parse model response as JSON", raw: result.text.slice(0, 300) });
      return;
    }

    res.status(200).json({ summary: parsed.summary || "", model: cfg.id });
    return;
  }

  res.status(400).json({ error: `Unknown task: ${task}` });
};
