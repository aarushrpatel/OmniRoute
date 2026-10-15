import { NextResponse } from "next/server";
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";
import { validateChatGptWebProvider } from "@/lib/providers/validation/chatgptWeb";
import { validateProviderApiKeySchema } from "@/shared/validation/schemas";

/**
 * Remote-safe ChatGPT Web Clean Room credential format validation.
 * Never launches Chrome, spawns a process, calls a provider, or returns cookies.
 * The generic /api/providers/validate stays LOCAL_ONLY for spawn-capable providers.
 */
export async function POST(request: Request) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = validateProviderApiKeySchema.safeParse(body);
  if (!parsed.success || parsed.data.provider !== "chatgpt-web") {
    return NextResponse.json(
      { error: "Only ChatGPT Web storage-state credentials are accepted" },
      { status: 400 }
    );
  }

  if (typeof parsed.data.apiKey === "string" && parsed.data.apiKey.length > 100_000) {
    return NextResponse.json({ error: "Credential input exceeds size limit" }, { status: 413 });
  }

  const result = validateChatGptWebProvider({ apiKey: parsed.data.apiKey });
  return NextResponse.json(result);
}
