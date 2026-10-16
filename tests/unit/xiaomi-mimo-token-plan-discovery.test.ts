import test from "node:test";
import assert from "node:assert/strict";

import { xiaomi_mimo_token_planProvider } from "../../open-sse/config/providers/registry/xiaomi-mimo-token-plan/index.ts";
import { deriveConfigFromRegistryModelsUrl } from "../../src/app/api/providers/[id]/models/discoveryConfig.ts";

const SPEC_MODELS_URL = "https://token-plan-sgp.xiaomimimo.com/v1/models";

test("xiaomi-mimo-token-plan registry entry exposes the live /v1/models URL", () => {
  assert.equal(xiaomi_mimo_token_planProvider.id, "xiaomi-mimo-token-plan");
  // Without modelsUrl, deriveConfigFromRegistryModelsUrl() returns undefined and
  // model discovery falls back to the local catalog
  // ("API unavailable — using local catalog"), so the provider never refreshes.
  assert.equal(xiaomi_mimo_token_planProvider.modelsUrl, SPEC_MODELS_URL);
});

test("deriveConfigFromRegistryModelsUrl covers xiaomi-mimo-token-plan", () => {
  const config = deriveConfigFromRegistryModelsUrl("xiaomi-mimo-token-plan");
  assert.ok(config, "expected a discovery config derived from the registry modelsUrl");
  assert.equal(config.url, SPEC_MODELS_URL);
  assert.equal(config.method, "GET");
  assert.equal(config.authHeader, "Authorization");
  assert.equal(config.authPrefix, "Bearer ");
});

test("derived config parses the token-plan model list response", () => {
  const config = deriveConfigFromRegistryModelsUrl("xiaomi-mimo-token-plan");
  assert.ok(config);
  // Shape verified against the live endpoint: {"id","object","owned_by"} entries,
  // no pagination. Lingering non-chat ids (asr/tts) stay in the list.
  const live = {
    object: "list",
    data: [
      { id: "mimo-v2.5", object: "model", owned_by: "xiaomi" },
      { id: "mimo-v2.5-pro", object: "model", owned_by: "xiaomi" },
      { id: "mimo-v2.5-asr", object: "model", owned_by: "xiaomi" },
      { id: "mimo-v2.5-tts", object: "model", owned_by: "xiaomi" },
      { id: "mimo-v2.6-flash", object: "model", owned_by: "xiaomi" },
      { id: "mimo-v2.6-pro", object: "model", owned_by: "xiaomi" },
    ],
  };
  const models = config.parseResponse(live);
  assert.deepEqual(
    models.map((model) => model.id),
    ["mimo-v2.5", "mimo-v2.5-pro", "mimo-v2.5-asr", "mimo-v2.5-tts", "mimo-v2.6-flash", "mimo-v2.6-pro"]
  );
});
