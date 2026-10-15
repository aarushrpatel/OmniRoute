# Guardrails (Igbo)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Isi mmalite nke eziokwu:** `src/lib/guardrails/`
> **Emelitere ikpeazụ:** 2026-08-29 — v3.8.51 (Video Bridge transcript provenance bụ nke onye kpọrọ ọrụ kwupụtara,
> sava enyochabeghị ya — akọwapụtara nke ọma dịka #11661)

Guardrails na-amanye nchekwa, amụma, na mgbanwe ọdịnaya n'ókè dị
n'etiti OmniRoute na ndị na-eweta ọrụ upstream. Guardrail ọ bụla nwere ike inyocha (ma
ọ bụrụ na achọrọ, jụ, gbanwee, ma ọ bụ tinye nkọwa na) payload arịrịọ (`preCall`) na
nzaghachi upstream (`postCall`).

Sistemụ ahụ bụ **fail-open**: ọ bụrụ na guardrail atụpụta njehie mgbe ọ na-arụ ọrụ, registry
na-edekọ njehie ahụ ma gaa n'ihu na guardrail na-esote kama ime ka
arịrịọ ahụ daa. Igbochi bụ mkpebi doro anya (`block: true`), ọ bụghị ihe mberede.

## Nchedo Ewunyere N'ime Sistemụ

Registry ahụ na-ebunye nchedo isii na-akpaghị aka dịka usoro mkpa ha si dị mgbe a na-eme import
(lee `registry.ts` → `registerDefaultGuardrails()`):

| Mkpa | Aha                 | Oge            | Faịlụ                 |
| ---- | ------------------- | -------------- | --------------------- |
| `5`  | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`  | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`  | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10` | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20` | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95` | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nọmba mkpa ndị dị ala na-arụ ọrụ **mbụ**.

### Àkwà Mmiri Ọhụụ (`visionBridge.ts`) — Àkwà Mmiri Modality PR-1

Ọ na-egbochi arịrịọ ndị nwere onyonyo e zigara na **ụdịdị na-anaghị akwado ọhụụ** ma
na-emegharị ụzọ arịrịọ ahụ dum gaa na ụdịdị nwere ikike ọhụụ, ma ọ bụ jiri
nkọwa ederede nke ụdịdị ọhụụ a pụrụ ịhazi mepụtara dochie akụkụ onyonyo ndị ahụ
tupu oku upstream ahụ. Nke a na-eme ka ndị na-eweta ọrụ na-akwado naanị ederede
nwee ike ijikwa payload multimodal n'ụzọ doro anya.

Usoro:

1. Mafere ma ọ bụrụ na ụdịdị ezubere iche akwadolarị ọhụụ (belụsọ ma ọ bụrụ na ọ dị na
   ndepụta àkwà mmiri mmanye `isVisionBridgeForcedModel`).
2. Wepụta akụkụ onyonyo site na `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), nke na-enyefe ọrụ ahụ n'aka **ihe nchọpụta mgbasa ozi
   ejikọtara ọnụ** `detectMediaParts()` dị na `open-sse/utils/mediaParts.ts` — nke bụ
   otu isi iyi eziokwu a na-ekekọrịta ya na combo compatibility filter.
   A na-eji allowlist gbochie mmepụta ahụ ka ọ bụrụ naanị akụkụ ndị nọ n'elu nke nwere ọdịdị
   `replaceImageParts` nwere ike iweghachi n'ime payload (nkwekọrịta extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, na Responses API `input_image`. Ihe achọpụtara n'ime ihe ndị ọzọ na
   ọdịdị ndị na-egosi naanị ihe bụ ihe combo-filter ga-eji, ọ dịghịkwa mgbe a na-ewepụta ha.
   Mafere ma ọ bụrụ na ahụghị nke ọ bụla.
3. Kpebie nhazi runtime site na `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): igodo ntọala `modalityBridge*`
   ọhụrụ na-ebute ụzọ; igodo `visionBridge*` ochie ka na-adị dịka **fallback nke otu cycle**
   (ohere rollback). Mafere tupu ịgagharị mgbasa ozi ọ bụla ma ọ bụrụ na agbanyụrụ
   àkwà mmiri ahụ.
4. Onye nhọpụta mode (`modalityBridgeVisionMode`, lee tebụl dị n'okpuru) na-ekpebi
   ma a ga-eme reroute ka ọ bụ describe. Reroute na-eweghachi `modifiedPayload` ebe naanị
   `model` ka agbanwere, tinyere meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Ụzọ describe: kpachie onyonyo na `maxImages`, jikọta prompt maara ọrụ ahụ,
   lelee cache describe, kpọọ ụdịdị ọhụụ **n'otu oge**
   (`Promise.allSettled`), ma tinye akụkụ ederede `[Image N]: <description>` n'ọnọdụ
   ha. Describe nke dara ada na-ewepụta `null`, a na-echekwakwa akụkụ onyonyo mbụ ahụ
   **ka ọ dị** (#4012) — belụsọ n'ụzọ combo describe mgbe describe niile
   dara ada, ebe upstream ekwenyere na ọ naghị akwado ọhụụ na-enweta stub
   `(adịghị — enweghị onye na-eweta ọrụ nwere ikike ọhụụ ejikọrọ)` kama nke ahụ (#8430).
6. Weghachite `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Onye nhọpụta mode (`modalityBridgeVisionMode`)

| Mode       | Ndabara | Omume                                                                                                                                                                                                                                                               |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Heuristic ochie, agbanweghị ya (#6640/#7204): ụdịdị ndị na-abụghị combo/`auto/` na-eme reroute gaa na ụdịdị ọhụụ kacha mma belụsọ ma ụdịdị mbụ ahụ enweelarị credentials a pụrụ iji (mgbe ahụ, mee describe); ebumnuche combo na-eme describe mgbe niile.           |
| `describe` |         | Na-eme describe mgbe niile — a na-amafere ngọngọ reroute kpamkpam; ụdịdị onye ọrụ họọrọ na-aza mgbe niile.                                                                                                                                                          |
| `reroute`  |         | Manye reroute: a na-agafe nchedo keep-credentialed-model. Nchedo credential nke **ebumnuche** reroute ka na-arụ ọrụ — mgbe enweghị ebumnuche ọhụụ a pụrụ iji, arịrịọ ahụ na-aga n'ihu na describe ka onyonyo raw ghara iru backend na-akwado naanị ederede (#8430). |

Mode ndị a manyere na-eme short-circuit **tupu** heuristic auto amalite; omume `auto`
bụ otu byte n'otu byte na nchedo dị tupu PR-1.

#### Oke API-key (`visionBridgeKeyScope.ts`)

Mgbe API key nke onye na-akpọ ọrụ na-amachi `allowedConnections`, ọdọ mmiri quota
(`allowedQuotas`) ma ọ bụ ụdịdị (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), àkwà mmiri ahụ na-ahọrọ
naanị ụdịdị reroute na describe igodo ahụ nwere ike iji, n'elu njikọ ndị igodo ahụ nwere
ike iji. Oku describe ahụ na-agafe mgbe niile na OmniRoute self-loop yana header
`x-omniroute-self-loop-key-id`, ka arịrịọ chat nke na-anabata ya wee tinye iwu njikọ
na ụdịdị nke igodo ahụ n'ọrụ ọzọ. `enforceApiKeyPolicy()` na-asọpụrụ header ahụ naanị
mgbe ọ dịnyere self-loop bearer, yabụ naanị ibelata ohere ka o nwere ike ime, a ga-ajụkwa
id nke a na-apụghị ịchọta.

Ọ bụrụ na e kweghị ka igodo ahụ jiri ụdịdị ọhụụ ọ bụla, ụzọ describe ahụ na-apụ n'akụkụ,
arịrịọ ahụ agafekwa n'enweghị mgbanwe, nke bụ otu omume fail-open dịka nchedo
agbanyụrụ (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Arịrịọ ndị na-enweghị igodo, na igodo ndị na-enweghị mmachi ndị a, na-eme kpọmkwem dịka
ha si eme na mbụ.

#### Prompt Describe Maara Ọrụ (`modalityBridgeVisionTaskAware`)

Ndabara bụ **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) na-agbakwụnye
ederede nke **ozi onye ọrụ ikpeazụ** (nke e belatara ruo mkpụrụedemede 500) na prompt
nkọwa bụ isi, na-eduzi nkọwa ahụ n’ihe onye ọrụ jụrụ n’ezie
(usoro codex-vision-proxy) ma na-arịọ vision model ka o depụta ederede a na-ahụ anya.
Mgbe agbanyụrụ ọkọlọtọ ahụ — ma ọ bụ mgbe ederede onye ọrụ adịghị — a na-eji prompt
bụ isi ahụ n’enweghị mgbanwe.

Arịrịọ OpenAI-compatible nke describe self-loop n’onwe ya (`callVisionModelSingle()`
n’ime `visionBridgeHelpers.ts`) na-arịọ `image_url.detail: "high"` mgbe niile —
n’enweghị ọnọdụ ọ bụla, maka caller/provider ọ bụla, na-adabereghị n’akara ọ bụla
sitere n’aka client. Nlele low-detail na-ebelata izi ezi OCR kpọmkwem maka ọrụ
ntụgharị ederede prompt a na-arịọ, ya mere describe call n’onwe ya na-arịọ
high detail mgbe niile n’agbanyeghị detail level arịrịọ inbound mbụ jiri. Nke a
na-emetụta naanị request body nke describe dị n’ime; ọ naghị agbanwe ụzọ
OmniRoute si eziga `image_url.detail` nke caller n’onwe ya na arịrịọ bụ isi —
a na-etinye ndabara ahụ iche, naanị maka OpenCode clients achọpụtara, n’ime
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Alaka
Anthropic wire-format nke describe self-loop enweghị field `detail`, ya mere
ndabara abụọ ahụ anaghị emetụta ya.

#### Oke mmepụta describe (`modalityBridgeVisionMaxChars`)

| Igodo                          | Ndabara | Oke                   |
| ------------------------------ | ------- | --------------------- |
| `modalityBridgeVisionMaxChars` | `0`     | `0` ma ọ bụ 100–50000 |

`0` (ndabara) pụtara **enweghị oke** — a na-ebufe nkọwa nke
`callVisionModel()` weghachiri n’enweghị mgbanwe, nke na-echekwa
omume dị ugbu a. Uru ọ bụla dị n’etiti 100–50000 na-ebelata nkọwa ahụ ma tinye
suffix `…` tupu etinyeghachi ya dị ka `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` n’ime `src/lib/guardrails/visionBridge.ts`).
Bulie nke a maka ọrụ OCR nwere ọtụtụ nkọwa ebe downstream model chọrọ
ntụgharị ederede zuru ezu; wedata ya iji kpachie ojiji token na vision models
na-ekwu ọtụtụ okwu. Field dashboard ahụ dị na Advanced panel nke taabụ Vision
(`modality-bridge-max-chars` n’ime `ModalityBridgeVisionTab.tsx`) ma na-ebuli uru
ọ bụla dị n’etiti 1 na 99 ruo opekempe 100, ebe ọ na-ahapụ `0` e nyere kpọmkwem
n’enweghị mgbanwe — `0` bụ uru Zod ziri ezi n’onwe ya
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ọ bụghị naanị
ndabara "unset".

#### Cache describe (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL dị na memory maka mmepụta describe, nke process dum na-ekekọrịta.
Igodo = `sha256(imageRef + composedPrompt + configuredBridgeModel)` nke nwere
length-prefix framing (enweghị nkukota n’ókè field). Akụkụ model ahụ bụ bridge
model **ahaziri**, ọ bụghị model zara n’ezie —
`callVisionModel` nwere ike iji fallback n’ime ya, ma iji attempt ọ bụla mepụta
igodo ga-ekewasị cache ahụ. A naghị etinye describe ndị dara ada na cache. Ntọala:

| Igodo                           | Ndabara | Oke     |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Nhazigharị onyonyo remote (self-loop describe/base64 fetch)

Mgbe bridge n’onwe ya na-eweta onyonyo **remote** — ma Anthropic describe
self-call ma claude-wire-format base64 conversion
(`ensureBase64ImagesForClaudeWire`), ha abụọ site na
`fetchRemoteImageAsDataUri()` n’ime `visionBridgeHelpers.ts` — a na-ebufe data
URI e nwetara site na `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) tupu etinye ya n’ime arịrịọ vision-model.
A na-ebelata onyonyo buru oke ibu ruo **2048px n’akụkụ kachasị ogologo** (nke
dabara na resize cap OpenAI/Anthropic tinyegoro n’akụkụ server), nke na-ebelata
upload bytes/latency n’agbanweghị ihe vision model na-ahụ. Resize na-eji `sharp`,
nke a na-ebubata site na dynamic import: n’elu platform ebe native binary ya
anaghị ebuli, `normalizeDataUri()` **anaghị atụpụ exception ma ọlị** — ọ na-eji
passthrough nke bytes mbụ dị ka fallback, ka ụzọ describe/base64-conversion
wee na-arụ ọrụ mgbe niile. A na-ebufekwa bytes ndị na-abụghị onyonyo (fetch
nke na-eweghachighị onyonyo a pụrụ decode) n’enweghị mgbanwe. Nhazigharị a
metụtara naanị onyonyo bridge wetara maka self-call nke ya — anaghị etinye ya
na raw passthrough payload nke caller, dịka ụkpụrụ mgbanwe opt-in-only si dị
(Iwu Siri Ike #20).

#### Schema ntọala + migration

A na-eji Zod enyocha igodo `modalityBridge*` ọhụrụ n’ime `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, atọ `modalityBridgeCache*`, na otu
`modalityBridgeAudio*` nke Audio Bridge na-eji. Migration
`141_modality_bridge_settings.sql` na-edepụta uru `visionBridge*` ochie dị ugbu a
gaa na igodo ọhụrụ kwekọrọ na ha (idempotent, ọ naghị edegharị uru
`modalityBridge*` nke operator setịpụrụ); a ka na-anabata igodo ochie dị ka
read fallback maka otu release cycle.

#### Header nghọta doro anya + stats

Nzaghachi describe gbanwere na-ebu
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(nke `buildModalityBridgeHeader()` wuru n’ime `modalityBridge/bridgeStats.ts`,
ma `withModalityBridgeHeader()` tinye n’ime `src/sse/handlers/chatHelpers.ts`).
Arịrịọ rerouted anaghị enweta header **ọ bụla** — emetụghị payload ahụ aka,
ma a hụlarị mgbanwe model ahụ n’ime field `model` nke response body.

`GET /api/modality-bridge/stats` (njirimara njikwa, otu ọkwa ahụ dị ka
`GET /api/settings`) na-eweghachi ihe-agụta kwa modality dị na ebe nchekwa
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` maka `vision`, `audio`, na
`video`. `averageLatencyMs` na-eji `latencySamples`, ọ bụghị mbọ niile, dịka
ọnụọgụ e ji ekewa; ọrụ na-enweghị oge e tụrụ anaghị emepụta nlele efu-millisecond
nke adịgboroja. `bridged` ka bụ aha nnọchi dakọtara na ụdị ochie maka ntụgharị
gara nke ọma; mbọ dara ada anaghị abawanye ya.
A na-emegharị ihe-agụta ndị a mgbe process malitegharịrị dịka e zubere
(telemetry, ọ bụghị ndekọ ego).

#### Nhazi dashboard

Ibe dashboard a raara nye ya bụ
`/dashboard/settings/modality-bridge`. Taabụ `Vision`, `Audio`,
na `Video` ya ndị URL nwere ike ịkpọ na-echekwa query parameters mgbe ha na-agbanwe uru `tab`.
Taabụ Vision na-egosi ikike ime ka ọ rụọ ọrụ, mode, nhọpụta model (gụnyere nke ndabara
akpaka), prompting dabere na task, oke timeout/image/description-length/cache
dị elu, ihe-agụta runtime,
na sample request nwere nchedo. Taabụ Audio dịkwa ndụ: ọ na-egosi
ikike ime ka ọ rụọ ọrụ, ihe-ahọrọ model nke bụ naanị STT nwere Auto, oke timeout/max-clip,
ihe-agụta audio, na ule sample `input_audio`. Taabụ Video na-arụ ọrụ: ọ na-akọ
ọnọdụ runtime FFmpeg/ffprobe — otu n'ime ọnọdụ UI anọ akọwapụtara (`unknown` mgbe
probe ka na-aga n'ihu ma ọ bụ enweghị ike imecha, `restricted` n'elu dashboard host
na-abụghị loopback ebe a na-awụ probe ahụ client-side, `unavailable` mgbe e mechara probe
ma kwenye na ọ dịghị, ma ọ bụ `available` yana ụdị FFmpeg/ffprobe) — ọ na-echekwa
oke enable/model/frame/video/timeout, na-enyocha ihe-ahọrọ model ka ọ hapụ naanị
model ndị nwere ikike vision, ma na-egosi ihe-agụta video.

Kaadị Vision Bridge ochie dị n'okpuru ntọala AI bụ njikọ ndakọrịta gaa na
ibe ọhụrụ ahụ; ọ naghịzi enwe oyiri form nke abụọ. Media Providers na-ejikọkwa
usoro ọrụ Image-to-Text na Speech-to-Text na taabụ Modality
Bridge kwekọrọ ekwekọ, n'ewepụghị ebe nnwale Speech-to-Text dịbu.

**Ịgafe nnabata self-loop:** mgbe oku describe gafere self-loop
`/v1` nke OmniRoute n'onwe ya (model provider na-abụghị ọkọlọtọ), sub-request ahụ na-eziga
`x-omniroute-admission-bypass: internal` ma jiri credential self-loop
a chọpụtara mee njirimara — sentinel `sk_omniroute` mpaghara na local mode, ma ọ bụ
env key `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` nke operator haziri (#1350), ka
deployment ndị nwere `REQUIRE_API_KEY=true` nwee ike ịkpọ oku describe ahụ. A na-anabata bypass
naanị maka credential ndị ahụ kpọmkwem, ya mere client ndị dị n'èzí enweghị ike iji
header ahụ wụfee nnabata.

Ndabara ochie dị na `src/shared/constants/visionBridgeDefaults.ts`;
ndabara mode/task-aware/cache ọhụrụ na settings resolver dị na
`src/shared/constants/modalityBridgeDefaults.ts`. Guardrail ahụ na-enye
nhọrọ constructor `deps` ka ule nwee ike itinye mmejuputa `getSettings` na
`callVisionModel` adịgboroja.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Ọ na-egbochi chat request nwere audio tupu ha eruo target a na-amaghị
ma ọ na-anabata input audio. Ọ dịghị mgbe ọ na-atụgharị ụzọ chat request ahụ: a na-edegharị
akụkụ audio ka ọ bụrụ ederede site na endpoint multipart dakọtara na OpenAI dịbu, model
chat ahọrọ ahọrọ na-agakwa n'ihu na transcript ederede.

Usoro:

1. Chọpụta `supportsAudio` site na `getResolvedModelCapabilities()`. Metadata
   provider-registry akọwapụtara nwere mbụ, metadata model static esochie ya, emesịa
   `modalities_input` emekọrịtara. Ndepụta input ekwuputara nke na-enweghị `audio` bụ `false`;
   enweghị ihe akaebe capability ga-abụ `null`. Ma `false` ma `null` na-eme ka
   bridge nchedo rụọ ọrụ, ebe `true` na-agafe ya.
2. Chọpụta settings `modalityBridgeAudio*` ma wepụta akụkụ audio top-level
   ndị enwere ike ịtinye site na message ọ bụla site n'iji detector `detectMediaParts()`
   nke a na-ekekọrịta. Ụdị wire akwadoro bụ OpenAI `input_audio`, `audio_url`, na
   `source.media_type: "audio/*"`. A na-achọpụta audio nested maka routing mana
   splice path anaghị ewepụ ya. `modalityBridgeAudioMaxClips` na-amachi ọrụ;
   akụkụ ndị na-abịa n'ikpeazụ anaghị agbanwe.
3. Soro `provider/model` ahaziri, ma ọ bụ kwe ka `selectAudioBridgeModel()` gagharịa
   `AUDIO_TRANSCRIPTION_PROVIDERS` n'usoro catalog kwụsiri ike wee họrọ model mbụ
   nwere credential provider nọ n'ọrụ nke enwere ike iji.
4. `callAudioTranscription()` na-atụgharị audio base64/data-URI ka ọ bụrụ `file`
   multipart, ma ọ bụ budata `audio_url` dị anya site na guard outbound nke bụ naanị
   public, yana DNS pinning na oke 25 MB. Mgbe ahụ, ọ na-eji POST ziga faịlụ ahụ na model
   ahọrọ ahọrọ na self-loop `/v1/audio/transcriptions` mpaghara, jiri
   `resolveSelfLoopBearer()` mee njirimara. Route transcription dịbu na-eme
   nyocha credential nkịtị, njikwa cooldown/rate-limit, na iziga ọrụ nye provider.
5. Oku gara nke ọma na-eji `[Audio N]: <transcript>` dochie akụkụ ha. Oku ndị ahụ
   na-eji `Promise.allSettled` arụ ọrụ: ọdịda nke otu n'ime ha na-echekwa akụkụ
   audio mbụ ahụ (nkwekọrịta #4012). Ọ bụrụ na oku niile ada ma gosipụta na target
   ahụ bụ `supportsAudio === false`, akụkụ ndị ahụ ga-abụ
   `[Audio N]: (unavailable — no STT provider connected)` (nkwekọrịta #8430). Maka
   target a na-amaghị (`null`), nsonaazụ ebe ihe niile dara ada anaghị agbanwe. Target
   e gosipụtara na ọ bụ naanị ederede, nke na-enweghị credential STT enwere ike iji,
   na-enweta otu stub ahụ akọwapụtara n'emeghị oku network.

Transcript gara nke ọma na-eji cache LRU/TTL Modality Bridge nke process niile.
Key ahụ na-ejikọta ntụaka audio, label ọrụ `audio-transcription` kwụsiri ike,
na model STT ahọrọ ahọrọ; anaghị echekwa ọdịda na cache. Mbọ audio na-emelite
ihe-agụta `bridged`, `cacheHits`, `failures`, na `lastUsedAt` a na-ekekọrịta.
Response a gbanwere na-ebu
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; request
ndị emetụghị aka anaghị enweta segment Audio Bridge.

Settings runtime dabere na DB ma Zod na-enyocha ha:

| Igodo                         | Ndabara | Oke                    |
| ----------------------------- | ------- | ---------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                      |
| `modalityBridgeAudioModel`    | `""`    | Akpaaka ma ọ bụ ID STT |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000            |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                   |

A ka na-ejikwa `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, na `modalityBridgeCacheMaxEntries` achịkwa cache a na-ekekọrịta.

### Njikọ Vidio (`videoBridge.ts`, `videoBridgePipeline.ts`)

Ọ na-egbochi akụkụ vidio ndị dị n'ọkwa kachasị elu n'ime Chat Completions `messages` na Responses
API `input` tupu a kpọọ ebumnuche na-enweghị nkwado vidio nke amaara na ọ bụ nke e wuru n'ime ya.
Ụdị ndị a na-akwado bụ `input_video`, `video_url`, `video_source`, URL HTTPS,
na URI data `data:video/*;base64,...`. A naghị ewere naanị aha faịlụ dị n'ime ederede
dị ka vidio.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) na-ahụ maka ịgagharị arịrịọ, nyocha
ikike/amụma, nchịkọta nke arịrịọ ọ bụla, na payload nzaghachi.
Ọrụ maka vidio ọ bụla — inweta ya, cache nke nsonaazụ dum, ịkọwa usoro fremụ
(nke na-ejikọta transcript ọdịyo ọ bụla onye kpọrọ ọrụ kwupụtara), yana
metrik/nkwụsị/mmicha nke nnwale ọ bụla — zoro n'azụ `processVideoPart` n'ime
`videoBridgePipeline.ts`, nke a na-akpọ otu ugboro maka akụkụ vidio ọ bụla n'ime loop nke `preCall`.
Modul ahụ na-akọwakwa oke port doro anya `VideoMediaBrokerPort`
(inweta bytes na iwepụta fremụ ndị e mere sample), `VideoAudioTranscriptionPort`
(ijikọta transcript ọdịyo onye kpọrọ ọrụ kwupụtara na caption ndị e mere sample), na
`VideoDrilldownPort` (oke nchekwa data drill-down fremụ; ejikọtabeghị ya
na `processVideoPart` — naanị route `/api/modality-bridge/video/drilldown` dị iche
na-ede ndenye drill-down ugbu a).

Ụzọ arịrịọ `/v1` ọha anaghị ebubata ma ọ bụ kpọọ subprocess.
A na-ebudata vidio dịpụrụ adịpụ n'okpuru oke 50 MiB; vidio base64 inline nwere
oke nchekwa 36 MiB mgbe e dechara ya maka vidio ọ bụla ka envelopu model/ozi/framing
wee nwee ike ịnọ n'ime oke nnabata arịrịọ JSON ọha nke 50 MiB. A na-enyocha
ogologo inline na atụmatụ nha mgbe e dechara ya tupu ekenye ebe nchekwa. A chọrọ HTTPS
na URL izizi dịpụrụ adịpụ na redirect ọ bụla, site n'iji ihe nche outbound
maka ọha naanị nke dị ugbu a tinyere DNS pinning. Mgbe ahụ, bytes ndị ahụ na-agafe kpọmkwem oke broker ime
`POST /api/modality-bridge/video/extract`. Route ahụ bụ ma
`LOCAL_ONLY` ma `SPAWN_CAPABLE`, ọ na-anabata naanị arịrịọ trusted-loopback
nke e ji nkwenye maka process ọ bụla chebe, ọ dịghịkwa mgbe ọ na-anabata URL, ụzọ faịlụ, executable,
ma ọ bụ ndepụta argument. Pipeline nha body nke API na incremental body
reader nke handler na-amanye oke ntinye broker 50 MiB n'onwe ha. Queue ya nwere oke
na-eme otu extraction n'otu oge, na-ekwe ka ọrụ anọ na-echere, ma na-amachi ntinye
na-echere na 100 MiB.

N'ime broker ahụ, `ffprobe` na-agụ faịlụ local nzuzo; allowlist format a kapịrị ọnụ
na-ewepụ format playlist na manifest. Maka container ndị ezinụlọ MOV e kwere,
a na-ahapụ external MOV data reference ka ha bụrụ ndị agbanyụrụ na ndabara, command
a kapịrị ọnụ anaghịkwa ahọrọ ịgbanye ha. Ma `ffprobe` ma `ffmpeg` na-eji
whitelist protocol nke bụ naanị `file`, otu thread, array argument ndị a kapịrị ọnụ, enweghị shell,
na executable ndị e si na `PATH` chọta. Stream cover attached-picture abụghị
ndị a pụrụ ịhọrọ ka a kpọọ. Stream niile a pụrụ ịkpọ aghaghị imezu oke ndị ahụ, a na-ahọrọkwa
stream ndabara akọwapụtara tupu deterministic fallback nke index kacha ala.
A na-amachi vidio na sekọnd 600, pikselụ 8,192 n'akụkụ ọ bụla, na
pikselụ isi mmalite 33,554,432. FFmpeg na-eme sample nke fremụ JPEG etiti 1–16, na-ebelata
akụkụ ogologo ruo pikselụ 1,024 kachasị elu na-enweghị ịgbasa ntinye ndị pere mpe, ọ dịghịkwa
mgbe ọ na-enweta URL. Sampling bụ `uniform` na ndabara. Amụma `scene_aware`
nhọrọ na `segment_aware` nnwale na-eme otu pass FFmpeg ọzọ a kapịrị ọnụ
n'elu stream local a kwadoro, họrọ timestamp scene `showinfo` nwere oke,
ma laghachi n'ụzọ deterministic n'otu midpoint uniform ahụ ma detector daa,
oge agwụ, output mebie, ma ọ bụ candidate set tọgbọ chakoo. Ụdị segment-aware
na-ekesa sample midpoint n'ụzọ kwekọrọ na interval scene ndị a kwadoro; a kọwara
ihe akaebe segment-aware na omume fallback n'ụzọ zuru ezu n'okpuru. A na-etinye
oke siri ike nke fremụ 16 mgbe emechara nhọrọ n'amụma ọ bụla. Mgbe arịrịọ scene-aware
nwere naanị ikike otu fremụ, ọ na-eji midpoint uniform nke vidio zuru ezu na-arụ ọrụ
ma ọ bụ windo focus, ma na-akọ `policyEffective: uniform`: otu fremụ scene ahọpụtara
enweghị ike idobe nsọtụ oge abụọ ahụ. Onye kpọrọ ọrụ nwere ike ịnye
windo focus nwere oke (`start`/`end` na sekọnd); a na-amachi oke ya n'ogologo media,
a na-ajụ windo e tụgharịrị ma ọ bụ nke na-abụghị finite, a na-emekwa amụma
sampling niile naanị n'ime interval e mere normalize. A na-etinye windo
pụtara na metadata sampling yana na prefix nkọwa a na-atụkwasịghị obi
ka model ndị na-esote nwee ike ịmata ọdịiche dị n'etiti iberibe e lekwasịrị anya na
timeline zuru ezu.

Focus caption semantic bụ ntọala dị iche, nke akọwapụtara nke ọma. Ụdị nyocha `full`
nke ndabara na-echekwa prompt fremụ dị ugbu a, ọ dịghịkwa mgbe ọ na-ebuga ederede arịrịọ
na model caption. N'ụdị `focused`, bridge ahụ na-agụ naanị `text`/`input_text`
kacha ọhụrụ nke na-abụghị efu, nke onye ọrụ dere, site n'otu container Chat ma ọ bụ Responses,
na-eme ya normalize gaa na NFC, na-achịkọta mkpụrụedemede njikwa na whitespace,
ma na-amachi ya na code point Unicode 500. Nsonaazụ efu na-alaghachi na
prompt `full` ahụ kpọmkwem. A na-serialize hint bara uru dị ka JSON n'ime block
untrusted-user-context pụrụ iche, ọ nwekwara ike naanị ibute nkọwa ndị a pụrụ ịhụ ụzọ;
ọ pụghị ịkagbu ịdọ aka ná ntị dị iche megide ịgbaso ntụziaka ndị a na-ahụ anya
ma ọ bụ a na-anụ n'ime media. Focus ederede anaghị echepụta `start`/`end` ma ọ bụ gbanwee
sampler oge.

#### Ihe akaebe segment nhazi FU-07

`segment_aware` na-eji otu ngafe nyocha-mbụ nwere oke n'elu iyi vidiyo mpaghara a kwadororị. Usoro nzacha a kapịrị ọnụ na-ebu ụzọ belata obosara ka ọ ghara ịgafe pikselụ 320, chọpụta mgbanwe ọnọdụ na oge ndị oyi kpọnwụrụ, ma mesịa na-ewere nlele na fremụ 1 kwa sekọnd maka nhịahụ, nkezi luma, na ozi oghere/oge. E debere ngafe ahụ na nlele nhazi 600, otu eriri FFmpeg/nzacha, otu ndepụta ikike protokol `file` naanị na nke akpa faịlụ, oke mmepụta usoro nke 1 MiB, nakwa karịa sekọnd 30 n'ime nkwụsị/oge-ngwụkọ broker a na-ekekọrịta. Ọ dịghị mgbe ọ na-anabata iwu, nzacha, ụzọ faịlụ, ma ọ bụ URL sitere na arịrịọ ahụ.

Ụkpụrụ nhazi ndị ahụ bụ ihe akaebe nlele a pụrụ imegharị otu ihe ahụ, ọ bụghị nghọta gbasara ihe vidiyo pụtara. Ha anaghị achọpụta isiokwu, omume, nkọwa, okwu ọnụ, ma ọ bụ ebumnuche onye ọrụ. Oke ọnọdụ na oke oyi kpọnwụrụ na-emepụta ngalaba; mkpuchi oyi kpọnwụrụ, nhịahụ, mkpughe ọkụ, nkọwa oghere, na mgbanwe oge na-emetụta naanị otu e si ekenye mmefu fremụ 1–16 dị ugbu a. A na-amachi ngalaba oyi kpọnwụrụ kpamkpam na otu fremụ, ebe ngalaba ndị na-abụghị nke oyi kpọnwụrụ na-asọrịta mpi maka mmefu fọdụrụ. Mgbe oke dị ọtụtụ karịa fremụ, a na-edobe mkpuchi ahịrị oge nwere nkesa hà nhata ka mbepụ ngwa ngwa n'isi ghara izochi ogologo ngalaba dị n'azụ. A na-ejikọta oke ọnọdụ ndị nọ n'ime mkpebi nyocha sekọnd 1 nke oke oyi kpọnwụrụ.

Nzacha na-efu efu, ihe akaebe e mebiri emebi/efu efu, njehie ihe nchọpụta, ma ọ bụ oge-ngwụkọ nyocha-mbụ nwere oke na-adaghachi n'atụmatụ kpọmkwem nke etiti oge nwere nkesa hà nhata. Nkwụsị onye kpọrọ ya ma ọ bụ oge-ngwụkọ broker anaghị adaghachi n'atụmatụ ahụ: ọ na-akwụsị usoro nta na-aga n'ihu, gbochie iwepụta fremụ emechaa, a na-ewepụkwa osisi nwa oge nzuzo n'ime `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` na-emepụta ihe nnwale FFmpeg n'ezie a pụrụ imegharị otu ihe ahụ maka mbelata oku nkọwa mgbe iwepụtaghachara oyiri, nkesa mmefu maka ngagharị juru eju, ihe akaebe nhịahụ/mkpughe/SI-TI, mbepụ ngwa ngwa nwere ogologo ọdụ, na nchọpụta ụgha nke nwayọọ-nwayọọ ịda ọchịchịrị. Ọ na-edekọ oge mgbidi nyocha-mbụ na, ebe `/usr/bin/time` dị, CPU usoro nwa na RSS kachasị elu. Nlele ogo ya bụ naanị ndị ntụaka nhazi. Ogo ụdị nkọwa n'ezie ka bụ `HOLD` n'ihi na ngwa nnwale a enweghị endpoint e nyere ikike ma ọ bụ onye ọkaikpe a kpụkọrọ akpụkọ. Nchekwa ego ka bụkwa `HOLD` belụsọ ma `--caption-cost-per-call-usd` enye atụmatụ doro anya, dị mma, nke ọnụ ahịa kwa oku; skripti ahụ anaghị echepụta nke ọ bụla n'ime nsonaazụ ndị ahụ.

A na-amachi fremụ ọ bụla na 4 MiB, fremụ raw niile ọnụ na 23 MiB, na nzaghachi broker a haziri n'usoro na 32 MiB. A na-ewepụ ndekọ nwa oge nzuzo n'ime `finally`. OmniRoute anaghị etinye FFmpeg n'ime ngwugwu ma ọ naghị anabata ụzọ executable ahaziri iche. Tupu ịkọwa, bridge ahụ na-etinye ngafe iwepụ oyiri anya nke na-akpachapụ anya: a na-ebelata JPEG ọ bụla ka ọ bụrụ buffer grayscale 16×16 ma jiri naanị fremụ ikpeazụ e debere tụnyere ya. Maka mmefu nkọwa a rịọrọ nke karịrị otu fremụ, mwepụta na-enye ọdọ ndị ga-ekwe omume nwere oke ruru okpukpu abụọ nke mmefu ahụ ma ọ dịghị mgbe ọ gafere fremụ 16. A na-etinye oke a rịọrọ naanị mgbe iwepụtaghachara oyiri, ebe a na-echekwa nke mbụ na nke ikpeazụ n'ime ndị a họọrọ n'oge mbelata ikpeazụ mgbe mmefu ahụ dịkarịa ala abụọ. Atụmatụ nwere ụdị mbipute
`grayscale-16x16-mean-cells-v2` na-eji nke ka ukwuu n'etiti mgbanwe nkezi luma na oke sel thumbnail nke mgbanwe normalized ha dịkarịa ala 0.05. Oke oyiri bụ constant 0.04, nke a họọrọ maka ịdị mfe ịkọ amụma kama ikpughe ya dịka ntọala runtime. Ihe mgbaàmà nke abụọ a nwere nnukwu ọdịiche na-echekwa obere ngagharị na mgbanwe ederede a na-ahụ anya nke ntụnyere naanị-nkezi nwere ike izochi. Njehie comparator ma ọ bụ decoder na-adaghachi n'atụmatụ mepere emepe ma debe mkpuchi. Metadata mmepụta na-ekewa ndị ga-ekwe omume e wepụtara, fremụ ejiri nke ọma, na oyiri anya ndị ewepụrụ.

Akụkụ vidiyo akara ya nke ọma nwere ike ịrịọ contact sheet nwere timestamp. Bridge ahụ na-ewu grid JPEG nke nwere kọlụm kachasị 4 na fremụ 16. Sel pikselụ 512 ọ bụla na-etinye timestamp nke isi mmalite ya n'ime eriri ala nwere nnukwu ọdịiche, ebe otu timestamp ndị ahụ ka dị na metadata ederede maka njikọ na nyocha e mesịrị. JPEG zuru ezu ka na-enwe oke 32 MiB. Ọ bụrụ na `sharp` enweghị ike decode ma ọ bụ jikọta grid ahụ, bridge ahụ na-alaghachi na fremụ JPEG n'otu n'otu; nkwụsị onye ahịa ka na-agafe site na ọrụ sheet ahụ.

Ihe akaebe nkwalite dị iche kpamkpam na microbenchmark njikọta sịntetik. `scripts/perf/video-bridge-contact-sheet-eval.ts` na-akọwa ngwa nnwale A/B nwere ụdị schema maka ụdị ọhụụ OpenAI-compatible n'ezie. Ọ na-atụ token ndị provider kọrọ, oge mgbidi site na mmalite ruo na njedebe (gụnyere njikọta sheet), ọnụọgụ oku ụdị, na njigide eziokwu akọwapụtara na manifest. A naghị ede nzaghachi raw nke ụdị ahụ na akụkọ ahụ; naanị digest SHA-256 na ID eziokwu dabara adaba ka a na-edebe. Ngwa nnwale ahụ anaghị eme oku netwọk ma ọ bụ oku ụdị a na-akwụ ụgwọ belụsọ ma e nyefee `--execute-real` ma hazie `--model`, `OMNIROUTE_BASE_URL`, na `OMNIROUTE_API_KEY`. Na-enweghị ọsọ n'ezie ahụ e nyere iwu kpọmkwem, mkpebi ya igwe nwere ike ịgụ ka bụ `HOLD`; nha payload/ọnụọgụ oku sịntetik naanị abụghị ihe akaebe nkwalite.

Ndị na-akpọ ya nwere ike itinye array `transcript.cues` nhọrọ na akụkụ vidiyo akwadoro mgbe ha nwere ederede e mekọrịtara oge. Cue ọ bụla ga-enwerịrị `text`, interval `start`/`end` nwere njedebe nke dị n'ime oge a nyochara, na `source` dị na whitelist (`client`, `embedded`, ma ọ bụ `audio-bridge`); `confidence` na-eji `1` dịka ndabara ma ga-adị n'etiti `0` na `1`. A na-ejikọta cue ndị bụ oyiri kpọmkwem. OmniRoute anaghị amalite transcription site na metadata a: a na-edepụta cue ndị akwadoro n'ime nsonaazụ akọwara ya tinyere isi mmalite, ntụkwasị obi, na interval, ma gosipụta ha dịka nchọpụta a na-apụghị ịtụkwasị obi n'akụkụ nkọwa fremụ. A na-ajụ ederede na-adịghị mma, gafere oke, ma ọ bụ nke na-enweghị provenance kama ịgwakọta ya n'ime iyi nkọwa. Ubi `source` bụ ugbu a nke onye kpọrọ ya kwupụtara, ọ bụghị nke sava kwadoro: OmniRoute na-amanye ka uru ahụ bụrụ otu n'ime eriri atọ e kwere, mana ọ kabeghị akwado site na cryptography na akara `embedded` ma ọ bụ `audio-bridge` sitere n'ezie na mwepụta sava nwe. Were `source` dịka ntụnye a na-apụghị ịtụkwasị obi ruo mgbe nkwado ahụ rutere; ewula mkpebi ikike n'elu ya.

Onye na-akpọ nke nwere nka dị elu nwere ike ịnye track `audioTranscript` e nyere ikike ugbua
maka otu vidio ahụ. Njikọ fusion ahụ na-eme ka nlele anya na nke ọdịyo rụọ ọrụ n'okpuru
otu oge ngwụcha na akara nkwụsị, na-ahazi ha n'otu usoro oge, na-ejikọta
oyiri zuru oke ka ha bụrụ otu, ma na-akọ nsonaazụ ezughị ezu mgbe naanị otu akụkụ gara nke ọma.
`audioTranscript` na-adịghị irè na-agbadata gaa na nsonaazụ ezughị ezu ahụ — a na-edobe
nkọwa anya ahụ, ebe alaka ọdịyo na-edekọ koodu ọdịda e sachapụrụ —
kama ime ka vidio ahụ dum daa. A na-echekwa nnweta nke alaka ọ bụla, akara ezughị ezu,
na koodu ọdịda ndị e sachapụrụ n'ime nsonaazụ akọwara, n'ime
metadata guardrail (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), n'ime metadata cache nsonaazụ, nakwa n'ime counter
fusion nke bridge. Ụzọ ndabara Video Bridge anaghị akpọ speech-to-text
ma ọ bụ budata oyiri mgbasa ozi nke abụọ; ma ọ bụrụ na enweghị track ahụ e nyere n'ụzọ doro anya, ọ na-anọgide
na-abụ naanị vidio.

**Njigide transcript (#12150 P1).** Nke a na-emetụta ozugbo mgbe ọ bụla
Video Bridge (nke n'onwe ya bụ opt-in) gosipụtara cue transcript — enweghị
akara njigide dị iche. Mgbe arịrịọ gosipụtara cue transcript ọ bụla (ma ọ bụ
`transcript` onye na-akpọ kwupụtara ma ọ bụ `audioTranscript` e jikọtara), guardrail ahụ na-akara ya
`videoBridgeObserved` ma mepụta onyinyo e degharịrị nke nkọwa vidio ahụ —
ngosipụta yiri ya kpọmkwem ebe e ji
`[redacted-video-transcript]` dochie ahụ ederede nnwere onwe nke cue ọ bụla, nke e wuru site n'iji dochie field cue ahaziri
tupu e jikọta string ahụ (ọ bụghị site n'ịtụle ederede e mere ka ọ dị larịị, yabụ ọdịnaya cue ọ bụla —
ma nke aghụghọ ma nke nkịtị, gụnyere ahụ nwere `]` dịka
`[inaudible]`/`[music]` — enweghị ike ịlanarị). Ahụ arịrịọ call-log echekwara na-eji
onyinyo ahụ e degharịrị dochie akụkụ ederede ọ bụla sitere na vidio, site n'ịdakọ ha
dabere na nha anya ọdịnaya; a na-agụgharị anchor `fullText` site na payload guardrail
tupu ọkpụkpọ ahụ emechara, yabụ ndakọrịta ahụ ka na-aga nke ọma mgbe guardrail ndị ọzọ sochiri n'usoro
(ndị na-ekpuchi PII na credential, priorities 10/95) degharịrị ederede nkọwa ahụ n'otu ebe na
mgbe ntinye system-prompt/handoff/memory gbanwere nhazi array ozi ahụ. Ahụ
e zigara model n'elu anaghị agbanwe. Arịrịọ a hụrụ anaghịkwa etinye
Memory na-adịgide adịgide ọ bụla (a na-awụpụ extraction sitere ma na arịrịọ ma na nzaghachi),
ka nzaghachi nke model n'onwe ya ghara ịtụgharị ederede transcript n'ime Memory.

**Field vidio raw (#12430).** Mgbe agbanyere bridge ma amaghị ma ọ bụ enweghị nkwado vidio native, field `transcript`/`audioTranscript` akọwapụtara na-emekwa ka `videoBridgeObserved` rụọ ọrụ, ọbụna mgbe nkọwa dara ma ọ bụ mgbe oke `maxVideos` gasịrị. `null` na string efu na-agụta; field ndị na-adịghị na metadata na-abụghị vidio anaghị agụta. Oyiri echekwara na-edegharị field ndị a ma ọ bụ hapụ arịrịọ ahụ, a na-agafekwa caches/Memory. Payload provider anaghị agbanwe.

Oyiri ndị ọzọ echekwara na-eji otu akara arịrịọ a hụrụ. Snapshot arịrịọ client raw
tupu guardrail, arịrịọ pending dị na memory, na log arịrịọ a jụrụ n'oge mbụ
na-eji nhazi dochie field transcript dị n'akụkụ vidio;
a na-edegharị string prompt ndị pipeline stages na context handoff mepụtara
n'ebe nnabata ahụ arịrịọ echekwara. Marker `video_content_removed` echekwara
na-eme ka continuation `previous_response_id` mechie n'ụzọ nchekwa kama iwughachi
ederede a kpachapụrụ anya tụfuo. Ọ bụrụ na arịrịọ a hụrụ efunahụ onyinyo redaction
nke akụkụ ya tupu logging, ma ọ bụ ọbụna otu n'ime ọtụtụ onyinyo vidio
adabaghị mgbe e mechara mgbanwe arịrịọ ndị ọzọ, a na-ahapụ ahụ arịrịọ echekwara
kpamkpam kama idobe transcript e degharịrị naanị n'akụkụ ụfọdụ.

Maka arịrịọ a hụrụ, nzaghachi model nwere ike ikwughachi akụkụ ọ bụla nke
transcript na-enweghị ókè cue ahaziri. Ya mere, a na-eji marker nkwụsị dochie
`responseBody` call-log ya echekwara; a naghị echekwa artifact pipeline zuru ezu
(nke nwere ike ịgụnye ahụ upstream/client na chunk stream).
Semantic, idempotency, na reasoning-replay caches na-agafe ma ọgụgụ ma odide
maka arịrịọ ahụ. Arịrịọ provider na nzaghachi client na-ahụ anaghị agbanwe.
A na-ewepụ byte keepalive mbụ site na buffer nwa oge mgbe a hapụrụ artifact
zuru ezu ahụ. Ịdọ aka ná ntị EventStream na-adịghị mma nke Kiro na-akọ naanị
ọnụọgụ byte payload, ọ dịghị mgbe ọ na-akọ ọdịnaya ya ma ọ bụ njehie raw nke parser JSON.
Nke a anaghị ekwu na a nyochala diagnostic provider/plugin niile na-enweghị njikọ;
a na-esochi nyocha sara mbara nke ebe nnabata echekwara na #11658.

Usoro ndụ `/api/modality-bridge/video/drilldown` dị n'ime bụ substrate cache dị iche,
nke loopback/token na-enye nkwenye njirimara. Ọrụ ọ bụla chọkwara
ID principal opaque canonical. Tupu e mee ka onye na-akpọ production nwee ike iji ya, ọ ga-
esite na tenant e kwadoro njirimara nweta ID ahụ, ọ gaghịkwa eziga
uru client họpụtara. Igodo cache na-ejikọta principal ahụ na ID session na
video-reference canonical, na-echekwa naanị igodo ha sitere na SHA-256,
ma na-amachi ma ọgụgụ ma nhichapụ n'otu principal ahụ. Cache na-echekwa
ọtụtụ kachasị bụ frame JPEG 16 ewepụtara n'otu entry, na-eme ka ha kubie ume mgbe nkeji iri gachara,
ma na-akwado ọgụgụ `start`/`end` nwere oke ma ọ bụ nhichapụ session doro anya.

A na-amachi principal ọ bụla na entry 16 na data JPEG canonical 64 MiB. Oke ndị ahụ
dị iche na oke zuru ụwa ọnụ nke entry 64/256 MiB: nrụgide quota principal
na-achụpụ naanị entry principal ahụ ndị ejighị kemgbe ogologo oge tupu e tụlee
nchụpụ LRU zuru ụwa ọnụ. A na-ekpochapụ entry kubiela ume na ndekọ principal na
nke zuru ụwa ọnụ mgbe cache na-arụ ọrụ, ebe nkwụsị na ọdịda validation anaghị
etinye nnọchi ezughị ezu.

Cache ahụ na-ajụ Base64 na-abụghị canonical, padding karịrị akarị, mgbasa ozi na-abụghị JPEG, JPEG ndị e mebiri emebi ma ọ bụ ndị ezughị ezu, yana JPEG ndị na-ebute ịdọ aka ná ntị mgbe a na-eji `sharp` eme bounded full-image decode. Ọ na-atụgharị onyonyo ọ bụla a nabatara ọzọ ka ọ bụrụ JPEG canonical, na-enweta obosara na ịdị elu site na bytes e decode-rịrị kama ịtụkwasị fields nke onye kpọrọ ya obi, ma na-atụfu bytes polyglot ọ bụla dị n'azụ kama idowe ha. Naanị bounded canonical compressed buffer ka a na-agụnye na quotas abụọ ahụ. Oke JSON wire na-agụnye Base64 overhead maka decoded-input ceiling nke 32 MiB. Derivation ọ bụla e chekwara na-edekọ JPEG format/resolution ya a kwadoro, sampling policy, derivation version, oge e kere ya, content hash nke server gbakọrọ, yana parent reference e hash-rịrị tinyere parent-content hash nke onye kpọrọ ya a tụkwasịrị obi. A na-enyocha cancellation n'etiti asynchronous decode/hash phases tupu atomic cache commit.

Tranche a ejikọbeghị production producer na route ahụ ma ọ naghị enye multi-resolution variant selection. Ya mere, transparent Video Bridge request path anaghị ebute ọrụ agbakwunyere, ebe tenant-bound principal derivation na lifecycle multi-resolution zuru ezu nke FU-08 ka bụ ọrụ ndị doro anya a ga-eme n'ọdịnihu kama ịkọwa ha dị ka omume emechara.

A na-enye frames nkọwa n'usoro n'usoro site na iji Video model ahaziri. Video override efu na-eketa ntọala Vision; ọ bụrụ na ha abụọ tọgbọ chakoo, Vision auto-router na-ahọrọ model nwere ikike vision nke a ga-eji. Nkọwa ndị gara nke ọma na-eji prefix kwụsiri ike `[Video description:` dochie part mbụ ahụ; prefix a na-akakwa text ahụ dị ka observation sitere na media a na-atụkwasịghị obi ma na-agwa downstream models ka ha ghara iso ntuziaka ndị dị na media ahụ. Frame-caption cache keys na-agụnye JPEG bytes, prompt, timestamp, na effective model; naanị captions gara nke ọma ka a na-echekwa na cache. Cache entries na-edowe actual successful producer model, gụnyere fallback model; bridge ahụ na-akọ `mixed` mgbe models dị iche iche mepụtara frames dị iche iche. Cache hit na-eji producer identity ahụ ọzọ kama ịkpọgharị ya requested routing plan. Whole-video result cache na-eji input ọ bụla na-agbanwe output dị ka key — prompt, effective model, sampling policy, frame count, semantic analysis mode, SHA-256 fingerprint nke normalized focus hint, focus window, `transcript`, `audioTranscript`, na contact-sheet flag — ya mere, ịgbanwe nke ọ bụla n'ime dimensions ndị ahụ bụ cache miss, ọ bụghị iji data ochie eme ihe ọzọ. Visual dedup policy version, threshold, na bounded candidate-frame count pụtakwara ìhè na result-cache key na metadata; ya mere, mgbanwe policy enweghị ike iji whole-video description ochie mee ihe ọzọ. Result-cache v4 metadata na-edowe mode na fingerprint, ọ dịghị mgbe ọ na-edowe raw user task. Guardrail metadata na-akọ ma requested analysis mode ma effective analysis mode; requested `focused` mode na-enweghị user text bara uru ka a na-akọ dị ka `full` n'ụzọ effective.

Guardrail ahụ na-ewepụta video part ọ bụla a na-akwado mana ọ naghị akọwa karịa `modalityBridgeVideoMaxVideos`. Maka target e gosipụtara na o nwere `supportsVideo === false`, videos ndị dara ada na ndị gafere oke na-aghọ explicit safe text markers ka raw video ọ bụla ghara ịlanarị. Mgbe amaghị capability ahụ, parts ndị ahụ anaghị agbanwe. Targets nwere `supportsVideo === true` na-agafe bridge ahụ. Client request abort signal na-aga n'ihu site na download, broker queue, subprocesses, na caption calls; aborts na-akwụsị n'etiti videos ma ọ dịghị mgbe ha na-eme fail open gaa na raw media.

Runtime settings na-eji DB echekwa ma jiri Zod kwado:

| Key                                 | Ndabara     | Oke / omume                                                                                              |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Runtime nhọrọ, a ga-ahọrọ ịgbalite ya                                                                    |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` na-edowe generic captions; `focused` na-eji bounded, untrusted latest-user context                |
| `modalityBridgeVideoModel`          | `""`        | Keta model nke Vision Bridge                                                                             |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                     |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, ma ọ bụ proportional `segment_aware`; ọdịda detector na-alaghachi na `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                      |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                           |

A na-amachibido legacy persisted Video timeout values karịrị sekọnd 120 ruo broker deadline; a na-ajụ settings ọhụrụ e dere karịrị oke ahụ. `GET /api/modality-bridge/video/runtime` chọrọ trusted stamped loopback locality tupu authentication ma ọ bụ runtime probing, emesịa ọ chọrọ management auth. Ọ na-eweghachi naanị `available`, ụdị FFmpeg/ffprobe e sachara, na fixed reason mgbe runtime adịghị. Internal extraction endpoint ahụ abụghị public upload API: queue saturation na-eweghachi `503` tinyere `Retry-After`, nkwụsị njikọ onye kpọrọ ya na-eweghachi `499`, ebe fixed broker deadline na-eweghachi `504`. Converted responses na-agbakwunye `video->text;model=<visionModel>;parts=<videos>` na central `x-omniroute-modality-bridge` header n'ewepụghị Vision ma ọ bụ Audio segments.

### Ihe mkpuchi PII (`piiMasker.ts`)

Ọ na-arụ ọrụ na stages **abụọ ahụ**.

- **`preCall`** na-eme oyiri payload ahụ, na-agafe `system`, `messages`, `input`, na
  `prompt` (gụnyere ihe ndị bụ eriri ederede nkịtị), ma tinye `processPII()` (sitere na
  `@/shared/utils/inputSanitizer`) n'ubi `content`/`text` ndị bụ eriri ederede. Mgbe
  `PII_REDACTION_ENABLED=true`, a na-ekpuchi PII achọpụtara n'ime payload
  a na-ezipụ. Nke a anaghị adabere na `INPUT_SANITIZER_MODE` (nke na-achịkwa naanị
  iwu prompt-injection). Mgbe agbanyụrụ ikpuchi ozi, oku ahụ na-edekọ ọnụọgụ
  nchọpụta na-edegharịghị ọdịnaya.
- **`postCall`** na-eme oyiri miri emi nke nzaghachi ahụ, na-agba `sanitizePIIResponse()` yana
  ihe nkpuchi ọdịdị Responses-API (`maskResponsesOutput` — na-ekpuchi
  `output_text` na `output[].content[].text`). Ọ bụrụ na e nwere ihe ọ bụla e kpuchiri,
  nzaghachi ahụ a gbanwere na-anọchi nke mbụ.

Nchedo a anaghị egbochi oku; ọ na-agbakwụnye naanị nkọwa (`meta.detections`,
`meta.redacted`) ma ọ bụ na-edegharị ọdịnaya.

### Ntinye Prompt (`promptInjection.ts`)

Na-achọpụta usoro aghụghọ n'ime ọdịnaya onye ọrụ nyere ma na-amanye
iwu ahaziri. Omume ya na-adabere na mgbanwe gburugburu na nhọrọ
constructor:

| Ntọala      | Mgbanwe gburugburu                                                                                     | Ndabara | Mmetụta                                                                                                                                                                                  |
| ----------- | ------------------------------------------------------------------------------------------------------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agbanyere   | `INPUT_SANITIZER_ENABLED`                                                                              | `true`  | Mgbe ọ bụ `false`, nchedo ahụ na-akwụsị ozugbo.                                                                                                                                          |
| Ọnọdụ       | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`  | Iwu ntinye: `block`, `warn`, ma ọ bụ `log`. (A na-anabata `redact` maka ndakọrịta ochie, mana ọ **naghị** ewepụ ederede ntinye; `PII_REDACTION_ENABLED` na-achịkwa idegharị PII arịrịọ.) |
| Oke mgbochi | Nhọrọ `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (aha ọzọ `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Ogo ihe ize ndụ kacha nta achọrọ iji gbochie. Na ndabara, a na-eleba ọkwa etiti anya naanị.                                                                                              |

**Usoro ibu ụzọ nke ọnọdụ** (`getMode`): `options.mode` nke onye na-akpọ nyere →
**mgbanwe feature-flag DB** nke `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → mgbanwe gburugburu `INJECTION_GUARD_MODE` → mgbanwe gburugburu `INPUT_SANITIZER_MODE` →
`warn`. Ya mere, mgbanwe sitere na dashboard na-emeri mgbanwe gburugburu, nke pụtara na UI Feature
Flags na-achịkwa nchedo na-agba ọsọ ozugbo (enweghị ịmalitegharị). Ọgụgụ DB ahụ na-echekwa megide ọdịda:
ọ bụrụ na njehie emee, nchedo ahụ na-alaghachi n'omume dabere na mgbanwe gburugburu, ma mgbe
enweghị mgbanwe ahaziri, omume ya na mkpebi sitere naanị na mgbanwe gburugburu bụ otu.

Isi mmalite nchọpụta:

1. `sanitizeRequest()` sitere na `@/shared/utils/inputSanitizer` (otu ihe nchọpụta
   a na-ejikwa n'ebe ndị ọzọ n'ime pipeline).
2. `DEFAULT_GUARD_PATTERNS` ndị arụnyere n'ime ya (ugbu a bụ `system_override_inline` na
   `markdown_system_block`, ha abụọ nwere ogo `high`).
3. `customPatterns` ndị nhọrọ ebufere site na nhọrọ constructor (eriri ederede, regex,
   ma ọ bụ ndekọ `{ name, pattern, severity }`).

Mgbe `mode === "block"` **ma** opekata mpe otu nchọpụta ruru oke ogo
ihe ize ndụ ahụ, `preCall` na-eweghachi `{ block: true, message: "Ajụrụ arịrịọ:
achọpụtara ọdịnaya na-enyo enyo" }`. N'ọnọdụ `warn`/`log`, nchedo ahụ na-edekọ ihe ahụ mana
na-ekwe ka oku ahụ gaa n'ihu. A na-ebupụkwa ihe enyemaka nkịtị `evaluatePromptInjection()`
maka ndị na-akpọ chọrọ ịtụle prompt n'agafeghị registry.

**Oke nyocha (v3.8.20):** ihe nchọpụta ahụ na-enyocha naanị **16 KB mbụ** nke
ederede prompt ejikọtara ọnụ — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) n'ime
`src/shared/utils/inputSanitizer.ts`. Ma `detectInjection()` ma
`evaluatePromptInjection()` na-eji `slice(0, MAX_INJECTION_SCAN_BYTES)` tupu ha agbaa
loop pattern ahụ. Ntuziaka ntinye na-adịkarị nso n'elu input, ya mere nke a
na-amachi regex CPU/GC n'elu payload ndị nwere ọtụtụ narị KB n'emeghị ka nchọpụta daa mbà (lee
#3932, #4041).

### Ihe Nkpuchi Nzere (`credentialMasker.ts`)

Na-agba n'ọkwa **abụọ ahụ**, nke ikpeazụ n'usoro ndabara (ibu ụzọ `95`). Ọ na-ekpuchi
usoro API-key / secret-token ndị ama ama n'ime payload a na-ezipụ (ọdịnaya ozi,
arụmụka tool-call, nsonaazụ tool) **yana** nzaghachi provider, ka nzere
e tinyere na prompt (ma ọ bụ nke nsonaazụ tool weghachiri) ghara ịpụ
gakwuru provider dị n'elu ma ọ bụ laghachikwuru client.

- **Naanị mgbe ahọpụtara ya**, otu usoro ahụ dị ka ihichapụ PII (Hard Rule #20 dị ya nso):
  a na-agbanyụ ya ma ọ bụrụ na `settings.credentialRedactionEnabled === true` **ma ọ bụ**
  `CREDENTIAL_REDACTION_ENABLED=true` abụghị eziokwu. Mgbe agbanyụrụ ya, guardrail ahụ anaghị eme ihe ọ bụla —
  ọ naghị egbochi ma ọ bụ degharịa.
- `redactCredentials()` na-agafe n'osisi payload/response niile (`walkValue()`,
  nke echekwara pụọ na prototype pollution, ma chekwaa pụọ na cycle site na `WeakSet`) ma jiri
  placeholder `[REDACTED:<type>]` dochie ihe ndị dabara, na-eme clone naanị alaka ndị
  gbanwere n'ezie.
- `CREDENTIAL_PATTERNS` na-ekpuchi igodo ndị na-enye ọrụ LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), token VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), igodo ịkwụ ụgwọ (Stripe, Square), igodo
  cloud (AWS access key, Twilio, SendGrid, Mailgun), private keys / JWTs,
  connection strings ndị nwere credential (`mongodb://user:pass@...`, wdg.), yana
  pattern izugbe maka uru header `Authorization`/`x-api-key`/`api-key`/`apikey`.
  A na-ehichapụ igodo ndị yiri header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) n'ụzọ nhazi (naanị uru ya, ebe a na-echekwa prefix scheme dịka
  `Bearer `/`Basic `) kama iji regex ederede izugbe.
- Guardrail ahụ anaghị egbochi mgbe ọ bụla; ọ na-edegharị naanị (`modifiedPayload` /
  `modifiedResponse`) ma na-agbakwunye nkọwa (`meta.credentialsRedacted`, `meta.count`).

Nchedo regression: `tests/unit/credential-masker-guardrail.test.ts`.

## Nkwekọrịta Ntọala (`base.ts`)

```typescript
class BaseGuardrail {
  enabled: boolean;
  name: string;
  priority: number;

  constructor(name: string, options?: { enabled?: boolean; priority?: number });

  async preCall(payload: unknown, context: GuardrailContext): Promise<GuardrailResult | void>;

  async postCall(response: unknown, context: GuardrailContext): Promise<GuardrailResult | void>;
}

interface GuardrailResult<TValue = unknown> {
  block?: boolean; // true na-akwụsị usoro ahụ ozugbo
  message?: string; // a na-egosi ya mgbe a na-egbochi
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall na-eweghachi ya iji degharịa arịrịọ ahụ
  modifiedResponse?: TValue; // postCall na-eweghachi ya iji degharịa nzaghachi ahụ
}

interface GuardrailContext {
  apiKeyInfo?: Record<string, unknown> | null;
  disabledGuardrails?: string[] | null;
  endpoint?: string | null;
  headers?: Headers | Record<string, unknown> | null;
  log?: GuardrailLog | Console | null;
  method?: string | null;
  model?: string | null;
  provider?: string | null;
  signal?: AbortSignal;
  sourceFormat?: string | null;
  stream?: boolean;
  targetFormat?: string | null;
}
```

Guardrail na-egosi “enweghị mgbanwe” site n'ịweghachi `void`, `{}`, ma ọ bụ
`{ block: false }`. Iweghachi `modifiedPayload`/`modifiedResponse` na-eji uru ahụ
dochie uru na-agafe n'usoro ahụ maka guardrail ndị na-esote.
`signal?: AbortSignal` na-ebunye usoro ndụ onye kpọrọ ọrụ ahụ n'ime guardrail. Ịkwụsị arịrịọ bụ ọnọdụ pụrụ iche fail-open e kpachapụrụ anya: àkwà mmiri mgbasa ozi na-akwụsị ọrụ ma na-ehichapụ ihe ndị fọdụrụ n'enweghị iweghachi mgbasa ozi raw n'ebe a maara na ọ naghị akwado ya.

## Ndebanye (`registry.ts`)

Singleton `guardrailRegistry` na-enye:

- `register(guardrail)` — na-agbakwụnye guardrail (ma ọ bụ jiri aha ahaziri dochie nke dị adị) ma
  hazie ha ọzọ dịka `priority` na-arịgo.
- `clear()` / `list()` — ngwa enyemaka nchịkwa.
- `runPreCallHooks(payload, context)` — na-agafe guardrail ndị na-arụ ọrụ, na-ebufe
  payload ahụ site na `modifiedPayload`, ma kwụsị na `block: true` mbụ.
- `runPostCallHooks(response, context)` — otu usoro ahụ n'akụkụ nzaghachi.
- `resetGuardrailsForTests({ registerDefaults })` — na-ehichapụ ọnọdụ ma, ma ọ bụrụ na ahọrọ ya,
  debanyeghachi ntọala ndabara iji kewapụ ule nke ọma.

Ndị na-agba ọsọ abụọ ahụ na-eweghachi `{ blocked, payload|response, results, guardrail?, message? }`
ebe `results` bụ n'usoro ndekọ `GuardrailExecutionResult` nke gụnyere mpaghara
`blocked`, `skipped`, `modified`, `error`, na `meta` maka guardrail ọ bụla,
nke bara uru maka nsuso.

### Ịgbanyụ Guardrail Maka Arịrịọ Ọ Bụla

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` na-achịkọta ndepụta
aha guardrail na-enweghị oyiri nke a ga-awụli maka arịrịọ dị ugbu a. Isi mmalite
(ha niile bụ nhọrọ, a na-ejikọta ha niile):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` dị n'ahụ arịrịọ (n'ọkwa kachasị elu)
- `metadata.disabledGuardrails` dị n'ahụ arịrịọ
- Header `x-omniroute-disabled-guardrails` (ma ọ bụ nke ochie
  `x-disabled-guardrails`)

Uru nwere ike ịbụ n'usoro string ma ọ bụ string nke rikoma kewara; a na-ahazi
aha ka ha bụrụ lowercase kebab-case (`pii_masker` → `pii-masker`). A na-ebufe
nsonaazụ ahụ site na `context.disabledGuardrails` gaa na ndebanye ahụ, nke na-awụli
guardrail ndị dabara (`skipped: true` n'ime `results`).

## Usoro Mmezu

Maka arịrịọ ọ bụla na-agafe na `src/sse/handlers/chat.ts` na
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` na-emepụta ndepụta ihe a ga-amafe site na API key, body,
   na headers.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` na-eme guardrails n'usoro priority
   na-arị elu:
   - A na-edekọ guardrails ndị agbanyụrụ dịka `skipped`.
   - `preCall` nke guardrail ọ bụla nwere ike idegharị payload site na `modifiedPayload`.
   - `block: true` mbụ na-akwụsị usoro ahụ ozugbo, handler ahụ wee weghachite
     nzaghachi ọjụjụ guardrail.
3. Payload ahụ (nke enwere ike idegharị) na-abanye na combo routing na upstream
   dispatch.
4. Mgbe ahaziri nzaghachi ahụ, `guardrailRegistry.runPostCallHooks(...)`
   na-eme otu usoro ahụ na nzaghachi ahụ. `block: true` n'ebe a na-ewepụ nzaghachi
   upstream ahụ.

A na-edekọ guardrails ndị tụbara mperi na `error: <message>`, a na-edekwa ha na log site na
`logger.warn`, mana usoro ahụ na-aga n'ihu — nke a bụ nhazi fail-open e mere ụma.

## Nhazi

Environment variables ndị guardrails arụnyere n'ime sistemụ na-agụ:

| Variable                              | Ihe na-eji ya             | Mmetụta                                                                                                 |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Tọọ ya ka ọ bụrụ `false` iji gbanyụọ nchọpụta kpamkpam.                                                 |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Iwu injection: `warn`, `block`, ma ọ bụ `log`. Legacy value `redact` anaghị edegharị ederede injection. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Mode maka injection guard; ọ bụkwa DB feature flag nke **na-akagbu** env vars (DB > ENV).               |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Severity kacha nta nke `MODE=block` na-ajụ: `high` (ndabara), `medium`, ma ọ bụ `low`.                  |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Legacy alias maka `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                    |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Mgbe ọ bụ `true`, a na-ekpuchi PII dị na request (n'adabereghị na injection mode).                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Na-achịkwa omume masker n'akụkụ response.                                                               |

Guardrails nke Modality Bridge na-agụ runtime config site na settings store
nke DB na-akwado (`getSettings()`), ọ bụghị env vars. Primary keys nke Vision bụ
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, na
`modalityBridgeCacheMaxEntries`. A na-anabata legacy
`visionBridge*` keys naanị dịka documented one-cycle read
fallback; ihe dashboard na-ede na-eji primary keys. Defaults na fallback
resolver dị na `src/shared/constants/modalityBridgeDefaults.ts`, ebe a ka na-edobe legacy
constants na `src/shared/constants/visionBridgeDefaults.ts`.

Audio na-eji `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, na `modalityBridgeAudioMaxClips`, tinyere settings
`modalityBridgeCache*` ndị a na-ekekọrịta. Audio enweghị legacy-key fallback n'ihi na e
webatara keys ndị a na schema nke Modality Bridge.

Video na-eji `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, na
`modalityBridgeVideoTimeout`, tinyere settings `modalityBridgeCache*` ndị a na-ekekọrịta.
A na-agbanyụ ya na ndabara n'ihi na FFmpeg/ffprobe bụ operational
dependencies ndị nhọrọ, na frame captioning na-agbakwunye latency na model cost.

## Guardrail Ahaziri

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "Daily budget exceeded" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Nzọụkwụ:

1. Mepụta `src/lib/guardrails/myGuardrail.ts` nke na-agbatị `BaseGuardrail`.
2. Mejuputa `preCall` na/ma ọ bụ `postCall`.
3. Debanye ya n'oge mbubata (tinye site na `registerDefaultGuardrails`) ma ọ bụ
   kpọọ `guardrailRegistry.register(...)` n'oge sistemụ na-arụ ọrụ — ndekọ ahụ na-eji
   guardrail ọhụrụ dochie nke ọ bụla dịbu nke nwere otu aha ahaziri ahazi.
4. Tinye ule n'okpuru `tests/unit/` (ihe atụ ndị dị ugbu a:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Nnwale

Jiri `resetGuardrailsForTests()` n'etiti ule iji malite site n'ọnọdụ a maara.
Nyefee `{ registerDefaults: false }` iji malite na ndekọ efu ma
debanye naanị guardrail ndị a na-anwale. Vision Bridge na-anabata ntinye
ndabere (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge na-ekpughe
ebe ntinye yiri ya maka ntọala, ike, nhọrọ ụdị STT, nyocha
nzere, na ntụgharị okwu ọdịyo gaa na ederede. Ya mere, ule nwere ike ịnwale usoro abụọ ahụ na-enweghị ohere
ịnweta DB ma ọ bụ netwọkụ.

## Hụkwa

- `src/lib/guardrails/` — mmejuputa
- `src/shared/utils/inputSanitizer.ts` — ihe nchọpụta a na-ekekọrịta nke na-akwado
  igbochi ntinye prompt na ikpuchi PII
- `src/shared/constants/visionBridgeDefaults.ts` — ndabara Vision Bridge na
  ndepụta ụdị nke a na-amanye iji bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — ndabara runtime Vision/Audio a na-ekekọrịta
- `docs/architecture/RESILIENCE_GUIDE.md` — oyi akwa kwụụrụ onwe ya (circuit breaker, oge nchere)
- `docs/reference/ENVIRONMENT.md` — ntụaka zuru ezu nke env var

## Mkpuchi route nke injection-guard & red-team (Oge 8 · Blọk D)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) na-ekpuchi route niile
na-anabata prompt ndị ọrụ. Ọ na-asọpụrụ `INJECTION_GUARD_MODE` (ndabara `warn` = naanị dekọọ;
`block` = weghachite HTTP 400 `SECURITY_001`).

| Ụdị                 | Route                                                                                                                                                | Ọnọdụ ndabara |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Ederede (dị ugbu a) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Mmepụta             | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Data                | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Mwepụta ederede (`extractMessageContents`) na-ekpuchi `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (kwa abalị, `nightly-llm-security.yml`):** promptfoo na-akwado na route ọ bụla na-egbochi
corpus OWASP-LLM mgbe `INJECTION_GUARD_MODE=block`; garak na-agba probes (ọ na-awụfe ma ọ bụrụ na secret adịghị).
Agụnyere `moderations` maka ịdị n'otu — ndị na-ahụ maka sistemụ nọ na block-mode nwere ike iwepụ ya site na
`resolveDisabledGuardrails`.

Workflow nke abalị (`.github/workflows/nightly-llm-security.yml`, cron + iji aka
malite) nwere ọrụ abụọ:

- **`promptfoo-guard` (na-egbochi)** — na-agba `promptfoo eval -c promptfooconfig.yaml`
  na `INJECTION_GUARD_MODE=block`. Ọnọdụ mmegide ọ bụla (dịka "leghara
  ntuziaka niile gara aga anya…", jailbreak ụdị DAN) na-akwado na nzaghachi ahụ nwere
  `error.code === "SECURITY_001"`, ya bụ, na guard ahụ jụrụ arịrịọ ahụ n'ezie.
- **`garak` (ndụmọdụ)** — na-agba garak `--probes promptinject,dan,leakreplay`
  megide instance OmniRoute mpaghara (`http://localhost:20128/v1`). A na-achịkwa ya site na
  secret onye na-eweta (`PROMPTFOO_PROVIDER_KEY`); ọ na-awụfe n'enweghị nsogbu ma tinye
  `|| true` na njedebe, ya mere ọ na-enye akụkọ na-emeghị ka CI daa.

Mkpuchi nke ihe enyemaka guard (`createInjectionGuard` / `withInjectionGuard`)
na-erute route `/v1` ọ bụla nwere prompt; a na-ewepụta ederede prompt site na
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` site na
`extractMessageContents()` dị na `src/shared/utils/inputSanitizer.ts`.
