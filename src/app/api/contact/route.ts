import { NextResponse } from "next/server";

type ContactPayload = {
  topic: string;
  name: string;
  company: string;
  email: string;
  honeypot?: string;
  startedAt?: number;
  chatNote?: string;
  workflowHelp?: string[];
  workflowAssets?: string[];
  websiteType?: string;
  cmsType?: string;
  otherCms?: string;
};

function buildEmailText(payload: ContactPayload) {
  const lines: string[] = [
    `Topic: ${payload.topic}`,
    `Name: ${payload.name}`,
    `Company: ${payload.company}`,
    `Email: ${payload.email}`
  ];

  if (payload.topic === "chat") {
    lines.push("", `Chat focus: ${payload.chatNote || "Not provided"}`);
  }

  if (payload.topic === "workflow") {
    const help = payload.workflowHelp?.length ? payload.workflowHelp.map((item) => `- ${item}`).join("\n") : "- Not selected";
    const assets = payload.workflowAssets?.length ? payload.workflowAssets.map((item) => `- ${item}`).join("\n") : "- Not selected";
    lines.push("", "Workflow help:", help, "", "Current assets:", assets);
  }

  if (payload.topic === "content-os") {
    lines.push("", `Website: ${payload.websiteType || "Not selected"}`);
    if (payload.websiteType && payload.websiteType !== "all-code") {
      lines.push(`CMS: ${payload.cmsType || "Not selected"}`);
      if (payload.cmsType === "other") {
        lines.push(`Other CMS: ${payload.otherCms || "Not provided"}`);
      }
    }
  }

  return lines.join("\n");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;

  if (!apiKey || !from) {
    return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (payload.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const startedAt = typeof payload.startedAt === "number" ? payload.startedAt : 0;
  if (!startedAt || Date.now() - startedAt < 3000) {
    return NextResponse.json({ error: "Request blocked." }, { status: 400 });
  }

  if (!payload?.name || !payload?.company || !payload?.email || !payload?.topic) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const subject =
    payload.topic === "workflow"
      ? "Deadwater contact — workflow build"
      : payload.topic === "content-os"
        ? "Deadwater contact — content OS install"
        : "Deadwater contact — chat";

  const emailText = buildEmailText(payload);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: ["hello@deadwater.ai"],
      reply_to: payload.email,
      subject,
      text: emailText
    })
  });

  if (!response.ok) {
    let details = "Email failed to send.";
    try {
      const data = await response.json();
      if (data?.error?.message) {
        details = data.error.message;
      }
    } catch {
      // ignore parsing errors
    }

    return NextResponse.json({ error: details }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
