import { NextResponse } from "next/server";

type LeadType = "contact" | "professional";

type LeadPayload = {
  type?: LeadType;
  name?: string;
  email?: string;
  company?: string;
  partnerType?: string;
  volume?: string;
  location?: string;
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validateLead(payload: LeadPayload) {
  const type = payload.type;
  const name = sanitize(payload.name);
  const email = sanitize(payload.email);
  const company = sanitize(payload.company);
  const partnerType = sanitize(payload.partnerType);
  const volume = sanitize(payload.volume);
  const location = sanitize(payload.location);
  const message = sanitize(payload.message);

  const errors: string[] = [];

  if (type !== "contact" && type !== "professional") {
    errors.push("Type de demande invalide.");
  }

  if (name.length < 2) {
    errors.push("Le nom est requis.");
  }

  if (!EMAIL_REGEX.test(email)) {
    errors.push("Email invalide.");
  }

  if (message.length < 10) {
    errors.push("Le message est trop court.");
  }

  if (type === "professional" && partnerType.length === 0) {
    errors.push("Le type de partenaire est requis.");
  }

  return {
    valid: errors.length === 0,
    errors,
    data: {
      type,
      name,
      email,
      company,
      partnerType,
      volume,
      location,
      message,
      createdAt: new Date().toISOString()
    }
  };
}

export async function POST(request: Request) {
  const payload = (await request.json()) as LeadPayload;
  const validation = validateLead(payload);

  if (!validation.valid) {
    return NextResponse.json(
      {
        ok: false,
        errors: validation.errors
      },
      { status: 400 }
    );
  }

  // TODO: intégrer ici un provider email ou webhook CRM.
  // Ex: await sendgrid.send(...)
  // Ex: await fetch(process.env.CRM_WEBHOOK_URL!, { method: 'POST', body: JSON.stringify(validation.data) })

  return NextResponse.json({
    ok: true,
    message: "Demande reçue avec succès.",
    lead: validation.data
  });
}
