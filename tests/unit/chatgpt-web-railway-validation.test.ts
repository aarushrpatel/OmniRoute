import assert from "node:assert/strict";
import test from "node:test";

import { normalizeChatGptWebStorageState } from "../../open-sse/utils/chatgptWebExecutorAdapter.ts";
import { validateChatGptWebProvider } from "../../src/lib/providers/validation/chatgptWeb.ts";
import { isLocalOnlyPath } from "../../src/server/authz/routeGuard.ts";

const sessionCookie = {
  name: "__Secure-next-auth.session-token.0",
  value: "unit-test-fixture-not-a-real-session",
  domain: "chatgpt.com",
  path: "/",
  httpOnly: true,
  secure: true,
  sameSite: "Lax",
};

test("ChatGPT Web session cookies exported without expires normalize to -1", () => {
  const input = { cookies: [sessionCookie], origins: [] };
  const normalized = normalizeChatGptWebStorageState(input);
  assert.equal(normalized.cookies[0]?.expires, -1);
  assert.equal(Object.hasOwn(sessionCookie, "expires"), false);
  assert.equal(validateChatGptWebProvider({ apiKey: JSON.stringify(input) }).valid, true);
});

test("ChatGPT Web storage-state validation rejects foreign cookie domains", () => {
  const input = {
    cookies: [{ ...sessionCookie, domain: "attacker.example" }],
    origins: [],
  };
  const result = validateChatGptWebProvider({ apiKey: JSON.stringify(input) });
  assert.equal(result.valid, false);
  assert.equal(result.unsupported, false);
  assert.equal(JSON.stringify(result).includes(sessionCookie.value), false);
});

test("ChatGPT Web storage-state validation rejects malformed cookies", () => {
  const input = { cookies: [{ ...sessionCookie, expires: "invalid" }], origins: [] };
  assert.equal(validateChatGptWebProvider({ apiKey: JSON.stringify(input) }).valid, false);
});

test("only the scoped non-spawning validator is accessible remotely", () => {
  assert.equal(isLocalOnlyPath("/api/providers/validate", "POST"), true);
  assert.equal(isLocalOnlyPath("/api/providers/import", "POST"), true);
  assert.equal(isLocalOnlyPath("/api/providers/bulk", "POST"), true);
  assert.equal(isLocalOnlyPath("/api/providers/abc/login", "POST"), true);
  assert.equal(isLocalOnlyPath("/api/providers/abc/chatgpt-web-codex-doctor", "POST"), true);
  assert.equal(isLocalOnlyPath("/api/providers/chatgpt-web/validate-storage-state", "POST"), false);
});
