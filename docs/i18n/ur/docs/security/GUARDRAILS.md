# Guardrails (اردو)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **مستند ماخذ:** `src/lib/guardrails/`
> **آخری تازہ کاری:** 2026-08-29 — v3.8.51 (Video Bridge ٹرانسکرپٹ کا ماخذ کالر کی جانب سے بیان کیا جاتا ہے،
> ابھی سرور سے تصدیق شدہ نہیں — #11661 کے مطابق وضاحت کی گئی)

Guardrails، OmniRoute اور اپ اسٹریم فراہم کنندگان کے درمیان حد پر حفاظت، پالیسی، اور مواد کی تبدیلیوں کو نافذ کرتے ہیں۔ ہر guardrail درخواست کے پے لوڈز (`preCall`) اور
اپ اسٹریم جوابات (`postCall`) کا معائنہ کر سکتا ہے (اور اختیاری طور پر انہیں مسترد، تبدیل، یا تشریح شدہ کر سکتا ہے)۔

سسٹم **fail-open** ہے: اگر عمل درآمد کے دوران کوئی guardrail استثنا پیدا کرے، تو رجسٹری
خرابی ریکارڈ کرتی ہے اور درخواست کو ناکام کرنے کے بجائے اگلے guardrail کے ساتھ جاری رہتی ہے۔
بلاک کرنا ایک واضح فیصلہ (`block: true`) ہے، کبھی بھی اتفاقی نتیجہ نہیں۔

## بلٹ اِن حفاظتی حدود

رجسٹری import کے وقت ترجیحی ترتیب میں چھ حفاظتی حدود خودکار طور پر لوڈ کرتی ہے
(`registry.ts` → `registerDefaultGuardrails()` دیکھیں):

| ترجیح | نام                 | مرحلہ/مراحل    | فائل                  |
| ----- | ------------------- | -------------- | --------------------- |
| `5`   | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`   | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`   | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`  | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`  | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`  | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

کم ترجیحی نمبر **پہلے** چلتے ہیں۔

### وژن برج (`visionBridge.ts`) — موڈیلٹی برج PR-1

یہ **نان وژن ماڈلز** کو بھیجی جانے والی، تصاویر پر مشتمل درخواستوں کو روک کر یا تو
پوری درخواست کو وژن کی صلاحیت رکھنے والے ماڈل کی طرف دوبارہ بھیجتا ہے، یا upstream
کال سے پہلے تصاویر کے حصوں کو ایک قابلِ ترتیب وژن ماڈل کے تیار کردہ متنی بیانات
سے بدل دیتا ہے۔ اس سے صرف متن والے providers ملٹی موڈل payloads کو شفاف طریقے
سے سنبھال سکتے ہیں۔

بہاؤ:

1. اگر ہدف ماڈل پہلے ہی وژن کو سپورٹ کرتا ہو تو چھوڑ دیں (سوائے اس صورت کے کہ وہ
   جبری برج فہرست `isVisionBridgeForcedModel` میں موجود ہو)۔
2. `extractImageParts(messages)` کے ذریعے تصویری حصے اخذ کریں
   (`visionBridgeHelpers.ts`)، جو `open-sse/utils/mediaParts.ts` میں موجود
   **متحدہ میڈیا شناخت کار** `detectMediaParts()` کو ذمہ داری سونپتا ہے — یہی
   combo compatibility filter کے ساتھ مشترک واحد مستند ماخذ ہے۔
   اخذ کرنے کا عمل صرف ان بالائی سطح کے حصوں کی منظور شدہ فہرست تک محدود ہے
   جنہیں `replaceImageParts` دوبارہ جوڑ سکتا ہے (extract↔replace معاہدہ): OpenAI
   `image_url`، Anthropic base64 `source.type:"base64"`، Anthropic URL
   `source.type:"url"`، اور Responses API `input_image`۔ اندرونی سطح پر ملنے
   والے نتائج اور صرف indicator والی ساختیں combo-filter کا مواد ہیں اور کبھی
   اخذ نہیں کی جاتیں۔ اگر کچھ نہ ملے تو چھوڑ دیں۔
3. `resolveVisionBridgeRuntimeSettings()` کے ذریعے runtime config حل کریں
   (`src/shared/constants/modalityBridgeDefaults.ts`): نئی `modalityBridge*`
   settings keys کو ترجیح حاصل ہے؛ پرانی `visionBridge*` keys **ایک سائیکل کے
   fallback** (rollback window) کے طور پر برقرار رہتی ہیں۔ برج غیر فعال ہونے
   کی صورت میں کسی بھی میڈیا traversal سے پہلے چھوڑ دیں۔
4. موڈ selector (`modalityBridgeVisionMode`، ذیل کا جدول دیکھیں) reroute یا
   describe کا فیصلہ کرتا ہے۔ Reroute صرف `model` تبدیل کر کے
   `modifiedPayload`، نیز meta `{ rerouted, fromModel, toModel, imagesKept }`
   واپس کرتا ہے۔
5. Describe کا راستہ: تصاویر کو `maxImages` تک محدود کریں، کام سے آگاہ prompt
   مرتب کریں، describe cache سے رجوع کریں، وژن ماڈل کو **متوازی طور پر**
   (`Promise.allSettled`) کال کریں، اور ان کی جگہ
   `[Image N]: <description>` متنی حصے داخل کریں۔ ناکام describe سے `null`
   حاصل ہوتا ہے اور اصل تصویری حصہ **محفوظ** رہتا ہے (#4012) — سوائے combo
   describe راستے کے، جب تمام describes ناکام ہوں؛ اس صورت میں تصدیق شدہ
   نان وژن upstream کو
   `(دستیاب نہیں — وژن کی صلاحیت رکھنے والا کوئی provider منسلک نہیں)` stub
   دیا جاتا ہے (#8430)۔
6. `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) واپس کریں۔

#### موڈ selector (`modalityBridgeVisionMode`)

| موڈ        | ڈیفالٹ | رویہ                                                                                                                                                                                                                                                                                                |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | پرانی heuristic، بغیر تبدیلی کے (#6640/#7204): نان combo/`auto/` ماڈلز کو بہترین وژن ماڈل کی طرف reroute کیا جاتا ہے، سوائے اس صورت کے جب اصل ماڈل کے پاس پہلے ہی قابلِ استعمال credentials ہوں (تب describe کیا جاتا ہے)؛ combo اہداف ہمیشہ describe کرتے ہیں۔                                     |
| `describe` |        | ہمیشہ describe کریں — reroute بلاک مکمل طور پر چھوڑ دیا جاتا ہے؛ صارف کا منتخب کردہ ماڈل ہمیشہ جواب دیتا ہے۔                                                                                                                                                                                        |
| `reroute`  |        | جبری reroute: credential رکھنے والے ماڈل کو برقرار رکھنے والا guard نظرانداز کیا جاتا ہے۔ reroute کے **ہدف** کا credential guard پھر بھی لاگو ہوتا ہے — جب کوئی قابلِ استعمال وژن ہدف موجود نہ ہو، تو درخواست describe پر آ جاتی ہے تاکہ خام تصاویر کبھی صرف متن والے backend تک نہ پہنچیں (#8430)۔ |

جبری modes، auto heuristic چلنے سے **پہلے** ہی مختصر راستہ اختیار کرتے ہیں؛
`auto` کا رویہ PR-1 سے پہلے والی guardrail سے byte-identical ہے۔

#### API-key کا دائرۂ کار (`visionBridgeKeyScope.ts`)

جب caller کی API key، `allowedConnections`، quota pools
(`allowedQuotas`) یا models (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) کو محدود کرتی ہے،
تو برج صرف انہی connections پر reroute اور describe models منتخب کرتا ہے جنہیں
استعمال کرنے کی key کو اجازت ہو۔ اس کے بعد describe کال ہمیشہ
`x-omniroute-self-loop-key-id` header کے ساتھ OmniRoute self-loop سے گزرتی ہے،
تاکہ وصول کنندہ chat request اس key کی connection اور model policy کو دوبارہ
نافذ کرے۔ `enforceApiKeyPolicy()` اس header کو صرف self-loop bearer کے ساتھ
قبول کرتا ہے، اس لیے یہ صرف رسائی کو مزید محدود کر سکتا ہے، اور ایسا id مسترد
کر دیا جاتا ہے جو resolve نہ ہو۔

اگر key کے لیے کسی وژن ماڈل کی اجازت نہ ہو تو describe راستہ الگ ہو جاتا ہے اور
درخواست بغیر تبدیلی کے گزر جاتی ہے، جو غیر فعال guardrail جیسا ہی fail-open
رویہ ہے (meta `{ skipped: true, reason: "no_permitted_vision_model" }`)۔
key کے بغیر درخواستیں، اور ایسی keys جن پر یہ پابندیاں نہ ہوں، بالکل پہلے کی
طرح کام کرتی ہیں۔

#### کام سے آگاہ describe prompt (`modalityBridgeVisionTaskAware`)

ڈیفالٹ **true** ہے۔ `composeVisionPrompt()` (`visionBridgeHelpers.ts`) بنیادی
describe پرامپٹ کے ساتھ **آخری صارف کے پیغام** کا متن (500 حروف تک محدود) منسلک
کرتا ہے، جس سے تفصیل کو صارف کے اصل سوال کی سمت دی جاتی ہے
(codex-vision-proxy پیٹرن)، اور vision ماڈل سے نظر آنے والے متن کی نقل نویسی کرنے
کو کہا جاتا ہے۔ فلیگ بند ہونے — یا صارف کا متن موجود نہ ہونے — کی صورت میں بنیادی
پرامپٹ بغیر کسی تبدیلی کے استعمال ہوتا ہے۔

describe self-loop کی اپنی OpenAI-compatible درخواست (`callVisionModelSingle()`
در `visionBridgeHelpers.ts`) ہمیشہ `image_url.detail: "high"` کی درخواست کرتی ہے —
بلاشرط، ہر caller/provider کے لیے، اور کسی client signal سے مشروط نہیں۔
کم تفصیل والی sampling عین اسی متن کی نقل نویسی کے کام کے لیے OCR کی درستگی
گھٹا دیتی ہے جس کا یہ پرامپٹ تقاضا کرتا ہے، اس لیے describe کال ہمیشہ اعلیٰ
تفصیل کی درخواست کرتی ہے، چاہے اصل inbound درخواست نے تفصیل کی کوئی بھی سطح
استعمال کی ہو۔ یہ صرف اندرونی describe درخواست کی body کو متاثر کرتا ہے؛ اس سے
یہ تبدیل نہیں ہوتا کہ OmniRoute بنیادی درخواست پر caller کی اپنی
`image_url.detail` کو کیسے آگے بھیجتا ہے — وہ ڈیفالٹ الگ سے، اور صرف شناخت شدہ
OpenCode clients کے لیے، `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`) میں لاگو کیا جاتا ہے۔ describe
self-loop کی Anthropic wire-format شاخ میں کوئی `detail` فیلڈ نہیں ہے اور وہ
دونوں ڈیفالٹس سے غیر متاثر رہتی ہے۔

#### Describe آؤٹ پٹ کی حد (`modalityBridgeVisionMaxChars`)

| کلید                           | ڈیفالٹ | حد               |
| ------------------------------ | ------ | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` یا 100–50000 |

`0` (ڈیفالٹ) کا مطلب ہے **کوئی حد نہیں** — `callVisionModel()` کی واپس کردہ
تفصیل بغیر تبدیلی کے آگے بھیجی جاتی ہے، جس سے موجودہ طرزِ عمل برقرار رہتا ہے۔
100–50000 کی حد میں کوئی بھی قدر، تفصیل کو دوبارہ
`[Image N]: <description>` کے طور پر شامل کیے جانے سے پہلے `…` لاحقے کے ساتھ
مختصر کرتی ہے (`VisionBridgeGuardrail.preCall()` در
`src/lib/guardrails/visionBridge.ts`)۔ ایسی تفصیل-مرکوز OCR سرگرمیوں کے لیے اسے
بڑھائیں جہاں downstream ماڈل کو مکمل نقل نویسی درکار ہو؛ زیادہ گفتگو کرنے والے
vision ماڈلز پر token کے استعمال کو محدود رکھنے کے لیے اسے گھٹائیں۔
dashboard فیلڈ Vision ٹیب کے Advanced پینل پر موجود ہے
(`modality-bridge-max-chars` در `ModalityBridgeVisionTab.tsx`) اور 1 سے 99 کے
درمیان کسی بھی قدر کو کم از کم 100 تک بڑھا دیتی ہے، جبکہ واضح `0` کو جوں کا توں
رکھتی ہے — `0` بذاتِ خود ایک درست Zod قدر ہے
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`)، محض
"unset" ڈیفالٹ نہیں۔

#### Describe کیش (`modalityBridge/bridgeCache.ts`)

describe آؤٹ پٹس کے لیے in-memory LRU + TTL کیش، جو پورے process میں مشترک ہے۔
کلید = `sha256(imageRef + composedPrompt + configuredBridgeModel)`، جس میں
length-prefix framing استعمال ہوتی ہے (فیلڈ کی حدود کا کوئی تصادم نہیں)۔ ماڈل
کا جزو **configured** bridge ماڈل ہے، نہ کہ وہ ماڈل جس نے حقیقتاً جواب دیا —
`callVisionModel` اندرونی طور پر fallback کر سکتا ہے، اور ہر کوشش کے لحاظ سے
کلید بنانے سے کیش بکھر جائے گا۔ ناکام describe نتائج کبھی کیش نہیں کیے جاتے۔
ترتیبات:

| کلید                            | ڈیفالٹ | حد      |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### ریموٹ تصویر کی normalization (self-loop describe/base64 fetch)

جب bridge خود کوئی **remote** تصویر fetch کرتا ہے — Anthropic describe
self-call اور claude-wire-format base64 conversion
(`ensureBase64ImagesForClaudeWire`) دونوں، `visionBridgeHelpers.ts` میں
`fetchRemoteImageAsDataUri()` کے ذریعے — تو نتیجے میں حاصل ہونے والی data URI کو
vision-model درخواست میں شامل کرنے سے پہلے `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) سے گزارا جاتا ہے۔ حد سے بڑی تصاویر کو
**2048px طویل کنارے** تک downscale کیا جاتا ہے (OpenAI/Anthropic کی پہلے سے
server-side لاگو کردہ resize حد کے مطابق)، جس سے vision ماڈل کو دکھائی دینے والی
چیز تبدیل کیے بغیر upload bytes/latency کم ہو جاتی ہے۔ Resizing کے لیے `sharp`
استعمال ہوتا ہے، جسے dynamic import کے ذریعے لوڈ کیا جاتا ہے: ایسے platform پر
جہاں اس کی native binary لوڈ ہونے میں ناکام ہو، `normalizeDataUri()` **کبھی
throw نہیں کرتا** — یہ اصل bytes کو جوں کا توں آگے بھیجنے پر fallback کرتا ہے،
لہٰذا describe/base64-conversion کا راستہ ہمیشہ کام کرتا رہتا ہے۔ غیر تصویری
bytes (ایسا fetch جس نے قابلِ decoding تصویر واپس نہ کی ہو) بھی بغیر تبدیلی کے
آگے بھیج دیے جاتے ہیں۔ یہ normalization صرف ان تصاویر تک محدود ہے جنہیں bridge
اپنی self-call کے لیے fetch کرتا ہے — اسے caller کے raw passthrough payload پر
کبھی لاگو نہیں کیا جاتا، جو opt-in-only mutation اصول (Hard Rule #20) سے ہم
آہنگ ہے۔

#### ترتیبات کا schema + migration

نئی `modalityBridge*` کلیدیں `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`) میں Zod-validated ہیں:
`modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`، `modalityBridgeCache*` کی تین کلیدیں، اور
Audio Bridge کے زیرِ استعمال `modalityBridgeAudio*` گروپ۔ Migration
`141_modality_bridge_settings.sql` موجودہ legacy
`visionBridge*` اقدار کو مماثل نئی کلیدوں میں نقل کرتی ہے (idempotent، اور
operator کی مقرر کردہ `modalityBridge*` قدر کو کبھی overwrite نہیں کرتی)؛
legacy کلیدیں ایک release cycle تک read fallback کے طور پر قابلِ قبول رہیں گی۔

#### شفافیت کا header + stats

Describe-transformed responses میں
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
شامل ہوتا ہے (`modalityBridge/bridgeStats.ts` میں
`buildModalityBridgeHeader()` کے ذریعے بنایا اور
`src/sse/handlers/chatHelpers.ts` میں `withModalityBridgeHeader()` کے ذریعے
لگایا جاتا ہے)۔ Rerouted درخواستوں کو **کوئی** header نہیں ملتا — payload کو
چھوا نہیں گیا تھا اور ماڈل کی تبدیلی response body کے `model` فیلڈ میں پہلے ہی
نظر آتی ہے۔

`GET /api/modality-bridge/stats` (management auth، وہی درجہ جو
`GET /api/settings` کا ہے) `vision`، `audio`، اور `video` کے لیے اِن میموری فی-موڈیلٹی کاؤنٹرز
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` واپس کرتا ہے۔
`averageLatencyMs` اپنے مخرج کے طور پر تمام attempts نہیں بلکہ `latencySamples`
استعمال کرتا ہے؛ ٹائمنگ کے بغیر کوئی آپریشن فرضی صفر ملی سیکنڈ کا نمونہ تخلیق
نہیں کرتا۔ `bridged` کامیاب تبدیلیوں کے لیے پسماندہ مطابقت رکھنے والا عرف ہی
رہتا ہے؛ ناکام attempts اسے نہیں بڑھاتے۔
ڈیزائن کے مطابق پراسیس کے دوبارہ شروع ہونے پر کاؤنٹرز ری سیٹ ہو جاتے ہیں
(ٹیلی میٹری، اکاؤنٹنگ نہیں)۔

#### ڈیش بورڈ کی تشکیل

مخصوص ڈیش بورڈ صفحہ
`/dashboard/settings/modality-bridge` ہے۔ اس کے URL کے ذریعے قابلِ رسائی `Vision`، `Audio`،
اور `Video` ٹیبز `tab` کی قدر تبدیل کرتے ہوئے query parameters برقرار رکھتے ہیں۔
Vision ٹیب فعال کاری، موڈ، ماڈل کا انتخاب (بشمول خودکار
ڈیفالٹ)، ٹاسک سے آگاہ prompting، timeout/image/description-length/cache کی جدید
حدود، رن ٹائم
کاؤنٹرز، اور حفاظتی پابندی والی نمونہ درخواست فراہم کرتا ہے۔ Audio ٹیب بھی فعال ہے: یہ
فعال کاری، Auto کے ساتھ صرف STT ماڈل picker، timeout/max-clip کی حدود، آڈیو
کاؤنٹرز، اور ایک `input_audio` نمونہ ٹیسٹ فراہم کرتا ہے۔ Video ٹیب فعال ہے: یہ
FFmpeg/ffprobe کی رن ٹائم حالت رپورٹ کرتا ہے — چار واضح UI حالتوں میں سے ایک (`unknown` جب
probe جاری ہو یا مکمل نہ ہو سکے، کسی non-loopback
ڈیش بورڈ host پر `restricted` جہاں probe کو client-side پر چھوڑ دیا جاتا ہے، probe کیے جانے
اور عدم دستیابی کی تصدیق کے بعد `unavailable`، یا FFmpeg/ffprobe ورژنز کے ساتھ `available`) — فعال کاری/model/frame/video/timeout
حدود محفوظ رکھتا ہے، ماڈل picker کو vision-capable
ماڈلز تک محدود کرتا ہے، اور ویڈیو کاؤنٹرز فراہم کرتا ہے۔

AI settings کے تحت سابقہ Vision Bridge کارڈ نئے صفحے کے لیے ایک compatibility link ہے؛
اب یہ فارم کی دوسری نقل کا مالک نہیں رہا۔ Media Providers بھی
موجودہ Speech-to-Text playground کو ہٹائے بغیر Image-to-Text اور Speech-to-Text workflows کو متعلقہ Modality
Bridge ٹیبز سے منسلک کرتا ہے۔

**Self-loop admission bypass:** جب describe کال OmniRoute کے
اپنے `/v1` self-loop (غیر معیاری provider model) کے ذریعے route ہوتی ہے، تو ذیلی درخواست
`x-omniroute-admission-bypass: internal` بھیجتی ہے اور resolve شدہ
self-loop credential کے ذریعے authenticated ہوتی ہے — local mode میں مقامی `sk_omniroute` sentinel، یا
operator کے ذریعے ترتیب دی گئی `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env key (#1350)، تاکہ
`REQUIRE_API_KEY=true` deployments بھی describe کال چلا سکیں۔ bypass
صرف انہی عین credentials کے لیے قبول کیا جاتا ہے، لہٰذا بیرونی clients اس
header کو admission چھوڑنے کے لیے استعمال نہیں کر سکتے۔

Legacy defaults، `src/shared/constants/visionBridgeDefaults.ts` میں موجود ہیں؛
نئے mode/task-aware/cache defaults اور settings resolver
`src/shared/constants/modalityBridgeDefaults.ts` میں موجود ہیں۔ guardrail ایک
`deps` constructor option فراہم کرتا ہے تاکہ tests جعلی `getSettings` اور
`callVisionModel` implementations داخل کر سکیں۔

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

آڈیو پر مشتمل chat requests کو ایسے target تک پہنچنے سے پہلے روک لیتا ہے جس کے بارے میں
معلوم نہیں کہ وہ audio input قبول کرتا ہے۔ یہ chat request کو کبھی reroute نہیں کرتا: audio parts کو
موجودہ OpenAI-compatible multipart endpoint کے ذریعے transcribe کیا جاتا ہے اور
منتخب کردہ chat model متنی transcripts کے ساتھ جاری رہتا ہے۔

بہاؤ:

1. `getResolvedModelCapabilities()` کے ذریعے `supportsAudio` کو resolve کریں۔ واضح
   provider-registry metadata کو ترجیح حاصل ہے، پھر static model metadata کو، اور پھر sync شدہ
   `modalities_input` کو۔ `audio` کے بغیر اعلان کردہ input list کی قدر `false` ہے؛ اگر
   capability کا کوئی ثبوت نہ ہو تو قدر `null` رہتی ہے۔ `false` اور `null` دونوں
   محتاط bridge کو فعال کرتے ہیں، جبکہ `true` اسے bypass کرتا ہے۔
2. `modalityBridgeAudio*` settings کو resolve کریں اور مشترکہ `detectMediaParts()`
   detector کے ذریعے ہر message سے splice کیے جا سکنے والے top-level
   audio parts اخذ کریں۔ معاونت یافتہ wire shapes میں OpenAI کا `input_audio`، `audio_url`، اور
   `source.media_type: "audio/*"` شامل ہیں۔ Nested audio کو routing کے لیے شناخت کیا جاتا ہے مگر
   splice path اسے نہیں ہٹاتا۔ کام کو `modalityBridgeAudioMaxClips` کے ذریعے محدود کیا جاتا ہے؛
   بعد کے parts بغیر تبدیلی کے رہتے ہیں۔
3. ترتیب دیے گئے `provider/model` کا احترام کریں، یا `selectAudioBridgeModel()` کو
   مستحکم catalog ترتیب میں `AUDIO_TRANSCRIPTION_PROVIDERS` پر چلنے دیں اور پہلا
   ایسا model منتخب کریں جس کے پاس قابلِ استعمال فعال provider credential ہو۔
4. `callAudioTranscription()`، base64/data-URI audio کو multipart
   `file` میں تبدیل کرتا ہے، یا DNS pinning اور 25 MB کی حد کے ساتھ public-only outbound
   guard کے ذریعے remote `audio_url` download کرتا ہے۔ پھر یہ file اور منتخب
   model کو مقامی `/v1/audio/transcriptions` self-loop پر POST کرتا ہے، جس کی
   authentication `resolveSelfLoopBearer()` کے ذریعے ہوتی ہے۔ موجودہ transcription route معمول کے مطابق
   credential lookup، cooldown/rate-limit handling، اور provider dispatch انجام دیتا ہے۔
5. کامیاب calls اپنے parts کو `[Audio N]: <transcript>` سے بدل دیتی ہیں۔ Calls
   کو `Promise.allSettled` کے ساتھ چلایا جاتا ہے: کوئی انفرادی failure اصل
   audio part محفوظ رکھتا ہے (#4012 contract)۔ اگر ہر call ناکام ہو جائے اور target کے لیے
   `supportsAudio === false` ثابت ہو، تو parts
   `[Audio N]: (دستیاب نہیں — کوئی STT provider منسلک نہیں)` بن جاتے ہیں (#8430 contract)۔
   نامعلوم target (`null`) کے لیے، مکمل ناکامی کا نتیجہ بغیر تبدیلی کے رہتا ہے۔ ثابت شدہ
   text-only target کو، جس کے پاس قابلِ استعمال STT credential نہ ہو، network call کیے بغیر
   یہی واضح stub موصول ہوتا ہے۔

کامیاب transcripts پراسیس بھر میں مشترک Modality Bridge LRU/TTL cache استعمال کرتے ہیں۔
key میں audio reference، مستحکم `audio-transcription` operation
label، اور منتخب STT model شامل ہوتے ہیں؛ failures کبھی cache نہیں کیے جاتے۔ Audio attempts
مشترکہ `bridged`، `cacheHits`، `failures`، اور `lastUsedAt` کاؤنٹرز کو update کرتے ہیں۔
تبدیل شدہ responses میں
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` شامل ہوتا ہے؛ بغیر تبدیلی والی
requests کو Audio Bridge segment موصول نہیں ہوتا۔

رن ٹائم settings DB-backed اور Zod-validated ہیں:

| کلید                          | ڈیفالٹ  | حد               |
| ----------------------------- | ------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                |
| `modalityBridgeAudioModel`    | `""`    | خودکار یا STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10             |

مشترکہ کیش اب بھی `modalityBridgeCacheEnabled`،
`modalityBridgeCacheTtlMinutes`، اور `modalityBridgeCacheMaxEntries` کے ذریعے کنٹرول کیا جاتا ہے۔

### ویڈیو برج (`videoBridge.ts`, `videoBridgePipeline.ts`)

ایسے ہدف کو کال کرنے سے پہلے، جس کے لیے مقامی ویڈیو معاونت معلوم نہ ہو، Chat Completions کے `messages` اور Responses API کے `input` میں اعلیٰ سطحی ویڈیو حصوں کو روک لیتا ہے۔
معاونت یافتہ ساختیں `input_video`، `video_url`، `video_source`، HTTPS URLs،
اور `data:video/*;base64,...` ڈیٹا URIs ہیں۔ متن میں موجود سادہ فائل ناموں کو
ویڈیو نہیں سمجھا جاتا۔

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) درخواست کی ٹریورسل،
صلاحیت/پالیسی کی جانچ، فی درخواست تجمیع، اور جوابی پے لوڈ کا ذمہ دار ہے۔
فی ویڈیو کام — حصول، مکمل نتیجے کا کیش، فریم سلسلے کی وضاحت (جو کالر کی فراہم کردہ آڈیو ٹرانسکرپٹ کو یکجا کرتی ہے)، اور فی کوشش
میٹرکس/اسقاط/صفائی — `videoBridgePipeline.ts` میں `processVideoPart` کے پیچھے پوشیدہ ہے،
جسے `preCall` کے لوپ کے اندر ہر ویڈیو حصے کے لیے ایک بار کال کیا جاتا ہے۔
یہ ماڈیول واضح پورٹ حدود `VideoMediaBrokerPort`
(بائٹس حاصل کرنا اور نمونہ شدہ فریم نکالنا)، `VideoAudioTranscriptionPort`
(کالر کی فراہم کردہ آڈیو ٹرانسکرپٹ کو نمونہ شدہ کیپشنز کے ساتھ یکجا کرنا)، اور
`VideoDrilldownPort` (فریم ڈرل ڈاؤن کی استقلالی حد؛ ابھی تک
`processVideoPart` سے منسلک نہیں — فی الحال صرف علیحدہ `/api/modality-bridge/video/drilldown`
روٹ ڈرل ڈاؤن اندراجات لکھتا ہے) کی بھی تعریف کرتا ہے۔

عوامی `/v1` درخواست کا راستہ کبھی کسی ذیلی عمل کو امپورٹ یا طلب نہیں کرتا۔ ریموٹ
ویڈیوز 50 MiB کی حد کے تحت ڈاؤن لوڈ کی جاتی ہیں؛ ان لائن base64 ویڈیوز کے لیے
فی ویڈیو ڈی کوڈ شدہ حجم کی محتاط حد 36 MiB ہے، تاکہ ماڈل/پیغامات/فریمنگ انویلوپ
عوامی JSON درخواست کی 50 MiB داخلہ حد کے اندر رہ سکے۔ مختص کرنے سے پہلے ان لائن
لمبائی اور ڈی کوڈ شدہ حجم کے تخمینوں کی جانچ کی جاتی ہے۔ ابتدائی ریموٹ URL اور ہر ری ڈائریکٹ پر HTTPS
لازمی ہے، جس کے لیے DNS پننگ کے ساتھ موجودہ صرف-عوامی آؤٹ باؤنڈ گارڈ استعمال ہوتا ہے۔ پھر بائٹس عین داخلی
`POST /api/modality-bridge/video/extract` بروکر حد عبور کرتی ہیں۔ یہ روٹ
`LOCAL_ONLY` اور `SPAWN_CAPABLE` دونوں ہے، صرف فی عمل توثیق شدہ،
قابل اعتماد لوپ بیک درخواست قبول کرتا ہے، اور کبھی کوئی URL، فائل سسٹم پاتھ، قابل نفاذ فائل،
یا آرگیومنٹ فہرست قبول نہیں کرتا۔ API باڈی-سائز پائپ لائن اور ہینڈلر کا تدریجی باڈی
ریڈر آزادانہ طور پر بروکر ان پٹ پر 50 MiB کی حد نافذ کرتے ہیں۔ اس کی محدود قطار
ایک وقت میں ایک اخراج چلاتی ہے، چار زیر التوا جابز کی اجازت دیتی ہے، اور زیر التوا ان پٹ
کو 100 MiB تک محدود کرتی ہے۔

بروکر کے اندر، `ffprobe` ایک نجی مقامی فائل پڑھتا ہے؛ مقررہ فارمیٹ
اجازت فہرست پلے لسٹ اور مینی فیسٹ فارمیٹس کو خارج کرتی ہے۔ اجازت یافتہ MOV-خاندان
کنٹینرز کے لیے، بیرونی MOV ڈیٹا حوالہ جات ڈیفالٹ طور پر غیر فعال رہتے ہیں، اور
مقررہ کمانڈ انہیں فعال نہیں کرتی۔ `ffprobe` اور `ffmpeg` دونوں
صرف-`file` پروٹوکول اجازت فہرست، ایک تھریڈ، مقررہ آرگیومنٹ اریز، بغیر شیل،
اور `PATH` سے حل کیے گئے قابل نفاذ پروگرام استعمال کرتے ہیں۔ منسلک تصویری کور اسٹریمز
قابل پلے امیدوار نہیں ہیں۔ تمام قابل پلے اسٹریمز کو حدود پوری کرنا ضروری ہے، اور
تعیّناتی کم ترین انڈیکس والے فال بیک سے پہلے ایک واضح ڈیفالٹ اسٹریم کو ترجیح دی جاتی ہے۔
ویڈیوز 600 سیکنڈ، فی بُعد 8,192 پکسلز، اور
33,554,432 ماخذ پکسلز تک محدود ہیں۔ FFmpeg درمیانی نقطوں سے 1–16 JPEG فریمز کا نمونہ لیتا ہے، طویل
کنارے کو زیادہ سے زیادہ 1,024 پکسلز تک چھوٹا کرتا ہے، چھوٹے ان پٹس کو بڑا نہیں کرتا، اور
اسے کبھی کوئی URL نہیں دیا جاتا۔ نمونہ کاری ڈیفالٹ طور پر `uniform` ہے۔ اختیاری
`scene_aware` اور تجرباتی `segment_aware` پالیسیاں پہلے سے توثیق شدہ مقامی اسٹریم پر
ایک اضافی مقررہ FFmpeg پاس انجام دیتی ہیں، محدود
`showinfo` منظر ٹائم اسٹیمپس منتخب کرتی ہیں، اور ڈیٹیکٹر کی ناکامی، ٹائم آؤٹ، ناقص آؤٹ پٹ، یا خالی
امیدوار مجموعے کی صورت میں تعیّناتی طور پر انہی یکساں درمیانی نقطوں پر واپس آتی ہیں۔
سیگمنٹ آگاہ موڈ درمیانی نقطے کے نمونوں کو توثیق شدہ منظر وقفوں کے تناسب سے مختص کرتا ہے؛
سیگمنٹ آگاہ شواہد اور فال بیک رویّے کی تفصیل ذیل میں دی گئی ہے۔ ہر پالیسی میں
انتخاب کے بعد 16 فریم کی سخت حد
لاگو کی جاتی ہے۔ جب منظر آگاہ درخواست کے پاس صرف ایک فریم کا بجٹ ہو،
تو یہ فعال مکمل ویڈیو یا فوکس ونڈو کا یکساں درمیانی نقطہ استعمال کرتی ہے
اور `policyEffective: uniform` رپورٹ کرتی ہے: ایک منتخب منظر فریم
دونوں زمانی سروں کو برقرار نہیں رکھ سکتا۔ کالر اختیاری طور پر
ایک محدود فوکس ونڈو (`start`/`end` سیکنڈ) فراہم کر سکتا ہے؛ حدود کو میڈیا
کے دورانیے کے مطابق محدود کیا جاتا ہے، الٹی یا غیر محدود ونڈوز مسترد کی جاتی ہیں، اور تمام نمونہ کاری
پالیسیاں صرف معمول پر لائے گئے وقفے کے اندر انجام دی جاتی ہیں۔ نتیجے کی
ونڈو کو نمونہ کاری میٹا ڈیٹا اور غیر معتبر وضاحتی
پریفکس میں شامل کیا جاتا ہے، تاکہ زیریں دھارے کے ماڈلز ایک مرکوز اقتباس کو مکمل
ٹائم لائن سے ممتاز کر سکیں۔

معنوی کیپشن فوکس ایک علیحدہ، واضح ترتیب ہے۔ ڈیفالٹ `full`
تجزیاتی موڈ موجودہ فریم پرامپٹ کو برقرار رکھتا ہے اور درخواست کا متن کبھی
کیپشن ماڈل کو نہیں بھیجتا۔ `focused` موڈ میں، برج صرف اسی Chat یا Responses
کنٹینر سے صارف کے تازہ ترین غیر خالی تحریر کردہ `text`/`input_text` کو پڑھتا ہے،
اسے NFC پر معمول پر لاتا ہے، کنٹرول حروف اور خالی جگہ کو سکیڑتا ہے،
اور اسے 500 Unicode کوڈ پوائنٹس تک محدود کرتا ہے۔ خالی نتیجہ عین
`full` پرامپٹ پر واپس آتا ہے۔ قابل استعمال اشارے کو ایک مخصوص
غیر معتبر-صارف-سیاق بلاک میں JSON کے طور پر سیریلائز کیا جاتا ہے اور وہ صرف قابل مشاہدہ تفصیلات کو
ترجیح دے سکتا ہے؛ وہ میڈیا میں نظر آنے والی یا سنائی دینے والی ہدایات پر عمل نہ کرنے سے متعلق
علیحدہ تنبیہ کو منسوخ نہیں کر سکتا۔ متنی فوکس کبھی `start`/`end` اخذ نہیں کرتا اور نہ ہی
زمانی سیمپلر کو تبدیل کرتا ہے۔

#### FU-07 ساختی سیگمنٹ شواہد

`segment_aware` پہلے سے توثیق شدہ مقامی ویڈیو اسٹریم پر ایک محدود پیشگی تجزیاتی پاس استعمال کرتا ہے۔ مقررہ فلٹر چین پہلے چوڑائی کو زیادہ سے زیادہ 320 پکسل تک اسکیل کرتی ہے، منظر کی تبدیلیوں اور منجمد وقفوں کا سراغ لگاتی ہے، پھر دھندلاہٹ، اوسط لُوما، اور مکانی/زمانی معلومات کے لیے 1 فریم فی سیکنڈ کی شرح سے نمونے لیتی ہے۔ یہ پاس 600 ساختی نمونوں، ایک FFmpeg/فلٹر تھریڈ، انہی صرف-`file` پروٹوکول اور کنٹینر کی اجازت یافتہ فہرستوں، 1 MiB عمل-آؤٹ پٹ کی حد، اور بروکر کی مشترکہ منسوخی/آخری مہلت کے اندر زیادہ سے زیادہ 30 سیکنڈ تک محدود ہے۔ یہ درخواست سے کبھی کوئی کمانڈ، فلٹر، پاتھ، یا URL قبول نہیں کرتا۔

ساختی اقدار قطعی نمونہ جاتی شواہد ہیں، ویڈیو کی معنوی تفہیم نہیں۔ یہ موضوعات، افعال، کیپشنز، گفتگو، یا صارف کے ارادے کا استنباط نہیں کرتیں۔ منظر اور انجماد کی حدیں سیگمنٹس بناتی ہیں؛ انجماد کی کوریج، دھندلاہٹ، ایکسپوژر، مکانی تفصیل، اور زمانی تبدیلی صرف اس بات پر اثر انداز ہوتی ہیں کہ موجودہ 1–16 فریم بجٹ کیسے مختص کیا جاتا ہے۔ مکمل طور پر منجمد سیگمنٹ زیادہ سے زیادہ ایک فریم تک محدود ہوتا ہے، جبکہ غیر منجمد سیگمنٹس باقی بجٹ کے لیے مقابلہ کرتے ہیں۔ جب حدود کی تعداد فریموں سے زیادہ ہو، تو ٹائم لائن کی یکساں کوریج برقرار رکھی جاتی ہے تاکہ ابتدائی تیز کٹس ایک طویل آخری سیگمنٹ کو نہ چھپا سکیں۔ کسی انجماد کی حد کی 1 سیکنڈ کی تجزیاتی ریزولیوشن کے اندر آنے والی منظر کی حدود کو یکجا کر دیا جاتا ہے۔

غائب فلٹرز، ناقص/خالی شواہد، ڈیٹیکٹر کی خرابی، یا محدود پیشگی تجزیے کا ٹائم آؤٹ عین یکساں وسطی نقطہ پالیسی کی طرف کھلی ناکامی اختیار کرتے ہیں۔ کالر کی منسوخی یا بروکر کی آخری مہلت کھلی ناکامی اختیار نہیں کرتی: یہ زیرِ عمل ذیلی عمل کو ختم کرتی ہے، بعد میں فریم اخذ کرنے سے روکتی ہے، اور نجی عارضی درخت کو `finally` میں ہٹا دیا جاتا ہے۔

`scripts/perf/video-bridge-fu07-eval.ts` تکرار ختم کرنے کے بعد کیپشن کال کی بچت، کثیف حرکت کے بجٹ کی تخصیص، دھندلاہٹ/ایکسپوژر/SI-TI شواہد، طویل آخری حصے کے ساتھ تیز کٹس، اور تدریجی فیڈ کے غلط مثبت نتائج کے لیے قطعی حقیقی FFmpeg فکسچرز تیار کرتا ہے۔ یہ پیشگی تجزیے کا حقیقی دورانیہ ریکارڈ کرتا ہے اور، جہاں `/usr/bin/time` دستیاب ہو، ذیلی عمل کا CPU اور بلند ترین RSS بھی ریکارڈ کرتا ہے۔ اس کی معیار کی جانچیں صرف ساختی اوریکلز ہیں۔ حقیقی کیپشن ماڈل کا معیار `HOLD` ہی رہتا ہے کیونکہ اس ہارنس کے پاس کوئی مجاز اینڈ پوائنٹ یا منجمد جج نہیں ہے۔ مالی بچت بھی `HOLD` رہتی ہے، جب تک `--caption-cost-per-call-usd` فی کال لاگت کا کوئی واضح مثبت تخمینہ فراہم نہ کرے؛ اسکرپٹ کبھی بھی ان میں سے کوئی نتیجہ خود ساختہ طور پر تیار نہیں کرتا۔

ہر فریم 4 MiB، تمام خام فریم مجموعی طور پر 23 MiB، اور سیریلائز شدہ بروکر جواب 32 MiB تک محدود ہے۔ ایک نجی عارضی ڈائریکٹری کو `finally` میں ہٹا دیا جاتا ہے۔ OmniRoute کے ساتھ FFmpeg شامل نہیں ہوتا اور یہ کسٹم قابلِ اجرا پاتھ قبول نہیں کرتا۔ کیپشننگ سے پہلے، برج محتاط بصری تکرار ختم کرنے کا پاس لاگو کرتا ہے: ہر JPEG کو 16×16 گرے اسکیل بفر تک گھٹایا جاتا ہے اور اس کا موازنہ صرف آخری برقرار رکھے گئے فریم سے کیا جاتا ہے۔ ایک فریم سے زیادہ کے مطلوبہ کیپشن بجٹ کے لیے، اخذ کرنے کا عمل اس بجٹ سے زیادہ سے زیادہ دو گنا اور کبھی بھی 16 فریموں سے زیادہ نہ ہونے والا محدود امیدوار پول فراہم کرتا ہے۔ مطلوبہ حد صرف تکرار ختم کرنے کے بعد لاگو کی جاتی ہے، اور جب بجٹ کم از کم دو ہو تو حتمی چھانٹی کے دوران پہلے اور آخری منتخب امیدواروں کو برقرار رکھا جاتا ہے۔ ورژن شدہ
`grayscale-16x16-mean-cells-v2` پالیسی اوسط لُوما ڈیلٹا اور ان تھمب نیل سیلز کے تناسب میں سے بڑی قدر استعمال کرتی ہے جن کا معمول بند ڈیلٹا کم از کم 0.05 ہو۔ تکرار کی حد مستقل 0.04 ہے، جسے رن ٹائم ترتیب کے طور پر ظاہر کرنے کے بجائے پیش گوئی پذیری کے لیے منتخب کیا گیا ہے۔ یہ ثانوی
زیادہ کنٹراسٹ والا سگنل چھوٹی حرکات اور مرئی متن کی تبدیلیوں کو محفوظ رکھتا ہے جنہیں صرف اوسط پر مبنی موازنہ چھپا سکتا ہے۔ موازنہ کار یا ڈیکوڈر کی خرابیاں کھلی ناکامی اختیار کرتی ہیں اور کوریج برقرار رکھتی ہیں۔ آؤٹ پٹ میٹا ڈیٹا اخذ شدہ امیدواروں، کامیابی سے استعمال شدہ فریموں، اور خارج کی گئی بصری تکراروں کو الگ الگ دکھاتا ہے۔

واضح طور پر نشان زدہ ویڈیو حصہ ٹائم اسٹیمپ شدہ کانٹیکٹ شیٹ کی درخواست کر سکتا ہے۔ برج زیادہ سے زیادہ 4 کالموں اور 16 فریموں پر مشتمل JPEG گرڈ بناتا ہے۔ ہر 512 پکسل سیل اپنے ماخذ کا ٹائم اسٹیمپ ایک زیادہ کنٹراسٹ والی نچلی پٹی میں ثبت کرتا ہے، جبکہ یہی ٹائم اسٹیمپس بعد کے مرحلے میں ربط اور آڈٹ کے لیے متنی میٹا ڈیٹا میں بھی برقرار رہتے ہیں۔ مکمل JPEG بدستور 32 MiB تک محدود رہتا ہے۔ اگر `sharp` گرڈ کو ڈی کوڈ یا مرتب نہ کر سکے، تو برج انفرادی JPEG فریموں پر واپس چلا جاتا ہے؛ کلائنٹ کی منسوخی پھر بھی شیٹ کے عمل کے ذریعے آگے منتقل ہوتی ہے۔

ترقی کے شواہد کو دانستہ طور پر مصنوعی ترکیبی مائیکروبینچ مارک سے الگ رکھا گیا ہے۔ `scripts/perf/video-bridge-contact-sheet-eval.ts` حقیقی OpenAI-مطابق وژن ماڈلز کے لیے اسکیما-ورژن شدہ A/B ہارنس متعین کرتا ہے۔ یہ فراہم کنندہ کی رپورٹ کردہ ٹوکنز، ابتدا سے انتہا تک حقیقی تاخیر (بشمول شیٹ کی ترکیب)، ماڈل کال کی تعداد، اور مینی فیسٹ میں متعین حقائق کے برقرار رہنے کی پیمائش کرتا ہے۔ خام ماڈل جوابات رپورٹ میں نہیں لکھے جاتے؛ صرف SHA-256 ڈائجسٹس اور مماثل فیکٹ IDs برقرار رکھی جاتی ہیں۔ ہارنس کوئی نیٹ ورک یا بامعاوضہ ماڈل کال نہیں کرتا جب تک `--execute-real` پاس نہ کیا جائے اور `--model`، `OMNIROUTE_BASE_URL`، اور `OMNIROUTE_API_KEY` ترتیب نہ دیے گئے ہوں۔ اس واضح حقیقی رن کے بغیر، اس کا مشین کے قابلِ مطالعہ فیصلہ `HOLD` رہتا ہے؛ صرف مصنوعی پے لوڈ/کال-تعداد کی پیمائشیں ترقی کے شواہد نہیں ہیں۔

کالرز کسی معاونت یافتہ ویڈیو حصے کے ساتھ اختیاری `transcript.cues` ارے منسلک کر سکتے ہیں، جب ان کے پاس پہلے سے ہم وقت متن موجود ہو۔ ہر کیو میں `text`، جانچی گئی مدت کے اندر محدود `start`/`end` وقفہ، اور اجازت یافتہ فہرست میں شامل `source` (`client`، `embedded`، یا `audio-bridge`) ہونا ضروری ہے؛ `confidence` کی ڈیفالٹ قدر `1` ہے اور اسے `0` اور `1` کے درمیان رہنا چاہیے۔ بالکل یکساں کیوز کو یکجا کر دیا جاتا ہے۔ OmniRoute اس میٹا ڈیٹا سے کبھی ٹرانسکرپشن شروع نہیں کرتا: توثیق شدہ کیوز کو ماخذ، اعتماد، اور وقفے سمیت بیان کردہ نتیجے میں نقل کیا جاتا ہے، اور فریم کیپشنز کے ساتھ غیر معتبر مشاہدات کے طور پر پیش کیا جاتا ہے۔ غلط، حد سے باہر، یا ماخذی نسبت سے محروم متن کو کیپشن اسٹریم میں ملانے کے بجائے مسترد کر دیا جاتا ہے۔ `source` فیلڈ فی الحال کالر کی جانب سے بیان کردہ ہے، سرور سے توثیق شدہ نہیں: OmniRoute یہ نافذ کرتا ہے کہ قدر تین اجازت یافتہ اسٹرنگز میں سے ایک ہو، لیکن ابھی تک رمز نگاری سے اس بات کی تصدیق نہیں کرتا کہ `embedded` یا `audio-bridge` لیبل واقعی سرور کی ملکیت والے اخذ کرنے کے عمل سے آیا ہے۔ اس توثیق کے دستیاب ہونے تک `source` کو غیر معتبر اشارہ سمجھیں؛ اس کی بنیاد پر اجازت سے متعلق فیصلے نہ کریں۔

ایک اعلیٰ درجے کا کالر اسی ویڈیو کے لیے پہلے سے مجاز `audioTranscript` ٹریک
فراہم کر سکتا ہے۔ فیوژن جوڑ بصری اور آڈیو مشاہدات کو ایک ہی آخری مہلت اور
منسوخی سگنل کے تحت چلاتا ہے، انہیں ایک مشترکہ ٹائم لائن پر ترتیب دیتا ہے،
بالکل یکساں نقول کو یکجا کرتا ہے، اور جب صرف ایک جانب کامیاب ہو تو جزوی نتیجہ
رپورٹ کرتا ہے۔ ایک نامعتبر `audioTranscript` پورے ویڈیو کو ناکام کرنے کے بجائے
اسی جزوی نتیجے تک تنزل کرتا ہے — بصری تفصیل برقرار رہتی ہے اور آڈیو شاخ ایک
صاف کیا ہوا ناکامی کوڈ ریکارڈ کرتی ہے۔ ہر شاخ کی دستیابی، جزوی پرچم، اور صاف
کیے ہوئے ناکامی کوڈز بیان کردہ نتیجے، گارڈ ریل میٹا ڈیٹا
(`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`)، نتیجہ-کیش میٹا ڈیٹا، اور برج فیوژن کاؤنٹرز میں
محفوظ رکھے جاتے ہیں۔ پہلے سے طے شدہ Video Bridge راستہ اسپیچ ٹو ٹیکسٹ کو طلب
نہیں کرتا اور نہ ہی میڈیا کی دوسری نقل ڈاؤن لوڈ کرتا ہے؛ اس واضح ٹریک کے بغیر،
یہ صرف ویڈیو تک محدود رہتا ہے۔

**ٹرانسکرپٹ برقرار رکھنا (#12150 P1)۔** جب بھی Video Bridge (جو خود اختیاری ہے)
کوئی ٹرانسکرپٹ کیو رینڈر کرتا ہے تو یہ خودکار طور پر لاگو ہوتا ہے — برقرار رکھنے
کے لیے کوئی علیحدہ پرچم نہیں ہے۔ جب کوئی درخواست کسی بھی ٹرانسکرپٹ کیو (کالر کی
طرف سے اعلان کردہ `transcript` یا فیوز شدہ `audioTranscript`) کو رینڈر کرتی ہے،
تو گارڈ ریل اسے `videoBridgeObserved` کے طور پر نشان زد کرتی ہے اور ویڈیو تفصیل
کا حذف شدہ سایہ تیار کرتی ہے — ایک یکساں رینڈرنگ جس میں ہر کیو کے آزاد متن والے
حصے کو `[redacted-video-transcript]` سے بدل دیا جاتا ہے، اور یہ کام اسٹرنگ بنائے
جانے سے پہلے ساختی کیو فیلڈ کو تبدیل کر کے کیا جاتا ہے (کبھی بھی چپٹے متن کو
پارْس کر کے نہیں، لہٰذا کیو کا کوئی بھی مواد — خواہ مخاصمانہ ہو یا معمول کا،
بشمول `]` پر مشتمل حصوں جیسے `[inaudible]`/`[music]` — باقی نہیں رہ سکتا)۔
محفوظ کیے گئے کال لاگ کا درخواست باڈی، مواد کی برابری کی بنیاد پر مماثلت کرتے
ہوئے، ویڈیو سے اخذ کردہ ہر متنی حصے کو اس حذف شدہ سائے سے بدل دیتا ہے؛
`fullText` اینکر کو مکمل شدہ پری کال گارڈ ریل پے لوڈ سے دوبارہ پڑھا جاتا ہے،
اس لیے بعد کی چین گارڈ ریلز (PII اور اسناد ماسکرز، ترجیحات 10/95) کے تفصیلی متن
کو موقع پر دوبارہ لکھنے اور سسٹم پرامپٹ/ہینڈ آف/میموری انجیکشن کے پیغامات کی
صف کو نئی شکل دینے کے بعد بھی مماثلت کامیاب رہتی ہے۔ ماڈل کو اپ اسٹریم بھیجا
گیا باڈی تبدیل نہیں ہوتا۔ ایک مشاہدہ شدہ درخواست کوئی پائیدار Memory بھی آباد
نہیں کرتی (درخواست اور جواب دونوں سے اخذ کی جانے والی معلومات کو چھوڑ دیا جاتا
ہے)، اس لیے ماڈل کا اپنا جواب ٹرانسکرپٹ متن کو Memory میں بازگشت نہیں دے سکتا۔

**خام ویڈیو فیلڈز (#12430)۔** جب برج فعال ہو اور مقامی ویڈیو معاونت نامعلوم یا
غیر موجود ہو، تو متعین `transcript`/`audioTranscript` فیلڈز بھی
`videoBridgeObserved` کو فعال کرتی ہیں، حتیٰ کہ تفصیل کی ناکامی یا `maxVideos`
حد کے بعد بھی۔ `null` اور خالی اسٹرنگز شمار ہوتی ہیں؛ غیر موجود فیلڈز اور غیر
ویڈیو میٹا ڈیٹا شمار نہیں ہوتے۔ محفوظ رکھی گئی نقول میں ان فیلڈز کو حذف کر دیا
جاتا ہے یا درخواست کو شامل نہیں کیا جاتا، اور کیشز/Memory کو بائی پاس کیا جاتا
ہے۔ فراہم کنندہ کا پے لوڈ تبدیل نہیں ہوتا۔

اضافی محفوظ رکھی گئی نقول بھی یہی مشاہدہ شدہ درخواست سگنل استعمال کرتی ہیں۔
خام پری گارڈ ریل کلائنٹ درخواست اسنیپ شاٹ، اِن میموری زیر التوا درخواست، اور
ابتدائی مسترد شدہ درخواست لاگ، ویڈیو حصوں میں ٹرانسکرپٹ فیلڈز کو ساختی طور پر
بدل دیتے ہیں؛ پائپ لائن مراحل اور سیاقی ہینڈ آف کے ذریعے بنائے گئے اسٹرنگ
پرامپٹس کو محفوظ شدہ درخواست باڈی سنک پر حذف کیا جاتا ہے۔ محفوظ شدہ
`video_content_removed` مارکر، `previous_response_id` تسلسل کو جان بوجھ کر
ضائع کیے گئے متن کی تعمیر نو کرنے کے بجائے محفوظ انداز میں ناکام کر دیتا ہے۔
اگر کسی مشاہدہ شدہ درخواست کا فی حصہ حذف شدہ سایہ لاگنگ سے پہلے ضائع ہو جائے،
یا درخواست میں بعد کی تبدیلیوں کے بعد متعدد ویڈیو سائے میں سے حتیٰ کہ ایک بھی
مماثل نہ ہو سکے، تو جزوی طور پر حذف شدہ ٹرانسکرپٹ محفوظ رکھنے کے بجائے محفوظ
شدہ درخواست باڈی کو مکمل طور پر شامل نہیں کیا جاتا۔

کسی مشاہدہ شدہ درخواست کے لیے، ماڈل کا جواب کسی ساختی کیو حد کے بغیر ٹرانسکرپٹ
کے کسی بھی حصے کا اقتباس دے سکتا ہے۔ لہٰذا اس کے محفوظ شدہ کال لاگ
`responseBody` کو عدم شمولیت کے مارکر سے بدل دیا جاتا ہے؛ تفصیلی پائپ لائن
آرٹیفیکٹ (جس میں اپ اسٹریم/کلائنٹ باڈیز اور اسٹریم چنکس شامل ہو سکتے ہیں) محفوظ
نہیں رکھا جاتا۔ اس درخواست کے لیے معنوی، آئیڈیم پوٹینسی، اور استدلالی ری پلے
کیشز کے پڑھنے اور لکھنے کو بائی پاس کیا جاتا ہے۔ فراہم کنندہ کی درخواست اور
کلائنٹ کو نظر آنے والا جواب تبدیل نہیں ہوتے۔ جب تفصیلی آرٹیفیکٹ شامل نہ کیا
جائے تو ابتدائی کیپ الائیو بائٹس عارضی بفر سے نکال دی جاتی ہیں۔ Kiro کی خراب
ساخت والی EventStream تنبیہ صرف پے لوڈ بائٹس کی تعداد رپورٹ کرتی ہے، کبھی بھی
اس کا مواد یا JSON پارسر کی خام خرابی نہیں۔
یہ دعویٰ نہیں کیا جاتا کہ ہر غیر متعلقہ فراہم کنندہ/پلگ اِن تشخیصی پیغام کا
آڈٹ کیا گیا ہے؛ محفوظ شدہ سنکس کی وسیع تر جانچ کو #11658 میں ٹریک کیا جاتا ہے۔

داخلی `/api/modality-bridge/video/drilldown` لائف سائیکل ایک علیحدہ،
لوپ بیک/ٹوکن سے تصدیق شدہ کیش سبسٹریٹ ہے۔ ہر عمل کے لیے ایک کینونیکل مبہم
پرنسپل ID بھی درکار ہے۔ کسی پروڈکشن کالر کو فعال کرنے سے پہلے، اسے وہ ID تصدیق
شدہ ٹیننٹ سے اخذ کرنا چاہیے اور کبھی بھی کلائنٹ کا منتخب کردہ قدر آگے نہیں بھیجنا
چاہیے۔ کیش کلیدیں اس پرنسپل کو کینونیکل سیشن اور ویڈیو حوالہ IDs سے منسلک کرتی
ہیں، صرف ان کی SHA-256 سے اخذ کردہ کلیدیں محفوظ کرتی ہیں، اور پڑھنے اور حذف کرنے
دونوں کو اسی پرنسپل تک محدود کرتی ہیں۔ کیش فی اندراج زیادہ سے زیادہ 16 اخذ شدہ
JPEG فریمز محفوظ کرتی ہے، انہیں دس منٹ بعد زائد المیعاد کرتی ہے، اور محدود
`start`/`end` ریڈز یا واضح سیشن حذف کرنے کی معاونت کرتی ہے۔

ہر پرنسپل زیادہ سے زیادہ 16 اندراجات اور 64 MiB کینونیکل JPEG ڈیٹا تک محدود ہے۔
یہ حدود 64 اندراجات/256 MiB کی عالمی حد سے آزاد ہیں: پرنسپل کوٹے کا دباؤ عالمی
LRU اخراج پر غور کیے جانے سے پہلے صرف اسی پرنسپل کے سب سے کم حالیہ استعمال شدہ
اندراجات کو خارج کرتا ہے۔ کیش سرگرمی کے دوران زائد المیعاد اندراجات کو پرنسپل
اور عالمی دونوں حسابات سے صاف کر دیا جاتا ہے، جبکہ منسوخی اور توثیقی ناکامی
کسی جزوی متبادل کو کمٹ نہیں کرتیں۔

کیش غیر معیاری Base64، اضافی padding، غیر JPEG میڈیا، ناقص یا
نامکمل JPEGs، اور ایسے JPEGs کو مسترد کرتا ہے جو محدود مکمل-تصویر `sharp`
decode کے دوران انتباہ پیدا کریں۔ یہ ہر منظور شدہ تصویر کو ایک معیاری JPEG کے طور پر دوبارہ encode کرتا ہے، caller کی فراہم کردہ fields پر بھروسا کرنے کے بجائے decoded bytes سے width اور height اخذ کرتا ہے، اور کسی بھی trailing
polyglot bytes کو برقرار رکھنے کے بجائے ضائع کر دیتا ہے۔ دونوں quotas میں صرف محدود معیاری compressed buffer
شمار کیا جاتا ہے۔ JSON wire limit میں 32 MiB
decoded-input حد کے لیے Base64 overhead شامل ہے۔ ہر
محفوظ شدہ derivation اس کے توثیق شدہ JPEG format/resolution، sampling policy،
derivation version، creation time، server-computed content hash، اور hashed parent
reference کے ساتھ trusted caller کا parent-content hash ریکارڈ کرتا ہے۔ Atomic cache commit سے پہلے asynchronous decode/hash مراحل کے درمیان cancellation کی جانچ کی جاتی ہے۔

یہ tranche ابھی production producer کو route سے منسلک نہیں کرتا اور
multi-resolution variant selection فراہم نہیں کرتا۔ اس لیے transparent Video Bridge request
path پر کوئی اضافی کام نہیں ہوتا، جبکہ tenant-bound principal derivation اور
مکمل FU-08 multi-resolution lifecycle کو مکمل رویے کے طور پر دستاویز کرنے کے بجائے واضح follow-up work رکھا گیا ہے۔

Frames کو ترتیب وار configured Video model کے ذریعے caption کیا جاتا ہے۔ خالی
Video override، Vision setting کو inherit کرتا ہے؛ اگر دونوں خالی ہوں، تو Vision
auto-router مؤثر vision-capable model منتخب کرتا ہے۔ کامیاب captions
اصل part کو ایک مستحکم `[Video description:` prefix سے بدل دیتے ہیں، جو متن کو ایک untrusted media-derived observation کے طور پر بھی نشان زد کرتا ہے اور downstream
models کو میڈیا میں پائی جانے والی ہدایات پر عمل نہ کرنے کی ہدایت دیتا ہے۔ Frame-caption cache keys میں
JPEG bytes، prompt، timestamp، اور effective model شامل ہوتے ہیں؛ صرف کامیاب
captions کو cache کیا جاتا ہے۔ Cache entries اصل کامیاب producer model کو برقرار رکھتی ہیں،
جس میں fallback model بھی شامل ہے؛ جب مختلف frames مختلف models کے ذریعے تیار کیے گئے ہوں تو bridge
`mixed` رپورٹ کرتا ہے۔ Cache hit اس producer identity کو requested routing plan کے طور پر دوبارہ label کرنے کے بجائے دوبارہ استعمال کرتا ہے۔ Whole-video result
cache کی key ہر اس input پر مبنی ہے جو output تبدیل کرتا ہے — prompt، effective
model، sampling policy، frame count، semantic analysis mode، normalized focus hint کا SHA-256
fingerprint، focus window، `transcript`،
`audioTranscript`، اور contact-sheet flag — لہٰذا ان میں سے کسی بھی
dimension کی تبدیلی cache miss ہے، کبھی stale reuse نہیں۔ Visual dedup policy
version، threshold، اور محدود candidate-frame count بھی
result-cache key اور metadata میں واضح ہوتے ہیں؛ اس لیے policy میں تبدیلی stale
whole-video description کو دوبارہ استعمال نہیں کر سکتی۔ Result-cache v4 metadata، mode اور
fingerprint محفوظ رکھتا ہے، خام user task کبھی نہیں۔ Guardrail metadata requested اور effective analysis modes دونوں رپورٹ کرتا ہے؛ قابلِ استعمال user text کے بغیر requested `focused` mode کو مؤثر طور پر `full` رپورٹ کیا جاتا ہے۔

Guardrail ہر supported video part کو extract کرتا ہے، مگر
`modalityBridgeVideoMaxVideos` سے زیادہ کو describe نہیں کرتا۔ کسی ایسے target کے لیے جس کے بارے میں ثابت ہو کہ
`supportsVideo === false` ہے، failed اور over-limit videos واضح safe
text markers بن جاتے ہیں تاکہ کوئی raw video باقی نہ رہے۔ جب capability نامعلوم ہو، تو وہ parts
بغیر تبدیلی کے رہتے ہیں۔ `supportsVideo === true` رکھنے والے targets bridge کو bypass کرتے ہیں۔
Client request کا abort signal، download، broker queue،
subprocesses، اور caption calls تک propagate ہوتا ہے؛ aborts ویڈیوز کے درمیان processing روک دیتے ہیں اور کبھی raw media کے لیے fail open نہیں ہوتے۔

Runtime settings، DB-backed اور Zod-validated ہیں:

| Key                                 | Default     | حد / رویہ                                                                                                  |
| ----------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | اختیاری runtime، opt-in                                                                                    |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` عمومی captions محفوظ رکھتا ہے؛ `focused` محدود، untrusted latest-user context استعمال کرتا ہے       |
| `modalityBridgeVideoModel`          | `""`        | Vision Bridge model کو inherit کرتا ہے                                                                     |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                       |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`، `scene_aware`، یا proportional `segment_aware`؛ detector کی ناکامی پر `uniform` استعمال ہوتا ہے |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                        |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                             |

120 seconds سے زیادہ کی legacy persisted Video timeout values کو
broker deadline تک clamp کیا جاتا ہے؛ اس حد سے زیادہ نئی settings writes مسترد کر دی جاتی ہیں۔
`GET /api/modality-bridge/video/runtime` کو authentication یا runtime probing سے پہلے trusted stamped loopback
locality، اور پھر management
auth درکار ہے۔ Runtime دستیاب نہ ہونے پر یہ صرف `available`، sanitized FFmpeg/ffprobe versions، اور ایک fixed
reason واپس کرتا ہے۔ Internal extraction endpoint کوئی
public upload API نہیں ہے: queue saturation پر `503` کے ساتھ `Retry-After` واپس ہوتا ہے، caller
disconnect پر `499`، اور fixed broker deadline پر `504` واپس ہوتا ہے۔ Converted responses،
Vision یا Audio segments کو ہٹائے بغیر central
`x-omniroute-modality-bridge` header میں
`video->text;model=<visionModel>;parts=<videos>` شامل کرتے ہیں۔

### PII Masker (`piiMasker.ts`)

**دونوں** stages پر چلتا ہے۔

- **`preCall`** پے لوڈ کو کلون کرتا ہے، `system`، `messages`، `input`، اور
  `prompt` (سادہ اسٹرنگ آئٹمز سمیت) سے گزرتا ہے، اور اسٹرنگ `content`/`text`
  فیلڈز پر (`@/shared/utils/inputSanitizer` سے) `processPII()` لاگو کرتا ہے۔
  جب `PII_REDACTION_ENABLED=true` ہو، تو شناخت شدہ PII کو باہر جانے والے
  پے لوڈ میں مخفی کر دیا جاتا ہے۔ یہ `INPUT_SANITIZER_MODE` سے آزاد ہے (جو صرف
  پرامپٹ انجیکشن پالیسی کو کنٹرول کرتا ہے)۔ جب مخفی کرنا بند ہو، تو کال مواد کو
  دوبارہ لکھے بغیر شناخت کی تعداد ریکارڈ کرتی ہے۔
- **`postCall`** رسپانس کو ڈیپ کلون کرتا ہے، `sanitizePIIResponse()` کے ساتھ
  Responses-API ساخت کا ماسکر (`maskResponsesOutput` — جو
  `output_text` اور `output[].content[].text` کا احاطہ کرتا ہے) چلاتا ہے۔ اگر
  کوئی مخفی کاری واقع ہو، تو ترمیم شدہ رسپانس اصل رسپانس کی جگہ لے لیتا ہے۔

گارڈ ریل کبھی بلاک نہیں کرتی؛ یہ صرف تشریحات شامل کرتی ہے (`meta.detections`،
`meta.redacted`) یا دوبارہ لکھتی ہے۔

### پرامپٹ انجیکشن (`promptInjection.ts`)

صارف کے فراہم کردہ مواد میں مخالفانہ ساختوں کا پتہ لگاتا ہے اور تشکیل شدہ
پالیسی نافذ کرتا ہے۔ رویہ ماحولیاتی متغیرات اور کنسٹرکٹر آپشنز سے متعین ہوتا
ہے:

| ترتیب      | ماحولیاتی متغیر                                                                                   | ڈیفالٹ | اثر                                                                                                                                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| فعال       | `INPUT_SANITIZER_ENABLED`                                                                         | `true` | `false` ہونے پر، گارڈ ریل فوری طور پر واپس آ جاتی ہے۔                                                                                                                                                       |
| موڈ        | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                   | `warn` | انجیکشن پالیسی: `block`، `warn`، یا `log`۔ (`redact` پسماندہ مطابقت کے لیے قبول کیا جاتا ہے، مگر انجیکشن متن کو **نہیں** ہٹاتا؛ درخواست میں PII کی دوبارہ تحریر `PII_REDACTION_ENABLED` سے کنٹرول ہوتی ہے۔) |
| بلاک کی حد | `blockThreshold` آپشن / `INPUT_SANITIZER_BLOCK_THRESHOLD` (عرف `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | بلاک کرنے کے لیے درکار کم از کم شدت۔ ڈیفالٹ طور پر درمیانی شدت صرف مشاہدے کے لیے ہے۔                                                                                                                        |

**موڈ کی ترجیح** (`getMode`): کالر `options.mode` →
`INJECTION_GUARD_MODE` **DB فیچر فلیگ اوور رائیڈ** (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`۔ لہٰذا ڈیش بورڈ اوور رائیڈ ماحولیاتی متغیرات پر فوقیت رکھتا ہے، اس لیے
Feature Flags UI چلتے ہوئے گارڈ کو براہ راست کنٹرول کرتا ہے (ری اسٹارٹ کے بغیر)۔
DB ریڈ فیل-سیف ہے: اگر اس میں خرابی آئے، تو گارڈ env پر مبنی رویے کی طرف واپس
آ جاتا ہے، اور جب کوئی اوور رائیڈ مقرر نہ ہو تو رویہ صرف env والی ریزولوشن کے
عین مطابق ہوتا ہے۔

شناخت کے ذرائع:

1. `@/shared/utils/inputSanitizer` سے `sanitizeRequest()` (پائپ لائن میں دیگر
   جگہوں پر استعمال ہونے والا مشترکہ ڈیٹیکٹر سیٹ)۔
2. بلٹ اِن `DEFAULT_GUARD_PATTERNS` (فی الحال `system_override_inline` اور
   `markdown_system_block`، دونوں `high` شدت کے ساتھ)۔
3. کنسٹرکٹر آپشنز کے ذریعے پاس کیے گئے اختیاری `customPatterns` (اسٹرنگز، ریگیکس،
   یا `{ name, pattern, severity }` ریکارڈز)۔

جب `mode === "block"` ہو **اور** کم از کم ایک شناخت شدت کی حد پوری کرے، تو
`preCall` یہ واپس کرتا ہے: `{ block: true, message: "Request rejected:
suspicious content detected" }`۔ `warn`/`log` موڈز میں گارڈ ریل لاگ کرتی ہے مگر
کال کی اجازت دیتی ہے۔ مشترکہ ہیلپر `evaluatePromptInjection()` بھی ان کالرز کے
لیے ایکسپورٹ کیا جاتا ہے جنہیں رجسٹری سے گزرے بغیر پرامپٹس کا جائزہ لینا ہو۔

**اسکین کی حد (v3.8.20):** ڈیٹیکٹر جوڑے گئے پرامپٹ متن کے صرف **پہلے 16 KB**
کا معائنہ کرتا ہے — `src/shared/utils/inputSanitizer.ts` میں
`MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 بائٹس)۔ پیٹرن لوپ چلانے سے پہلے
`detectInjection()` اور `evaluatePromptInjection()` دونوں
`slice(0, MAX_INJECTION_SCAN_BYTES)` استعمال کرتے ہیں۔ انجیکشن ہدایات عموماً
ان پٹ کے آغاز کے قریب ہوتی ہیں، اس لیے یہ کثیر-صد-KB پے لوڈز پر ریگیکس CPU/GC
کو محدود کرتا ہے، جبکہ شناخت کو کمزور نہیں کرتا (ملاحظہ کریں #3932، #4041)۔

### اسناد ماسکر (`credentialMasker.ts`)

**دونوں** مراحل میں چلتا ہے، اور ڈیفالٹ چین میں آخر میں آتا ہے (ترجیح `95`)۔
باہر جانے والے پے لوڈ (پیغام کے مواد، ٹول کال کے آرگیومنٹس، ٹول کے نتائج)
**اور** فراہم کنندہ کے رسپانس سے معروف API-key / secret-token پیٹرنز کو مخفی
کرتا ہے، تاکہ کسی پرامپٹ میں پیسٹ کی گئی سند (یا ٹول کے نتیجے میں واپس دہرائی
گئی سند) اپ اسٹریم فراہم کنندہ یا کلائنٹ کو واپس لیک نہ ہو۔

- **صرف آپٹ اِن پر فعال**، PII ریڈیکشن کے ہی طریقۂ کار کے مطابق (Hard Rule #20 سے ملحق):
  اس وقت تک غیر فعال رہتا ہے جب تک `settings.credentialRedactionEnabled === true` **یا**
  `CREDENTIAL_REDACTION_ENABLED=true` نہ ہو۔ غیر فعال ہونے پر guardrail کوئی کارروائی نہیں کرتا —
  یہ کبھی بلاک نہیں کرتا اور نہ ہی دوبارہ تحریر کرتا ہے۔
- `redactCredentials()` مکمل payload/response درخت میں گردش کرتا ہے (`walkValue()`،
  prototype pollution سے محفوظ، اور `WeakSet` کے ذریعے cycles سے محفوظ) اور مماثلتوں کو
  `[REDACTED:<type>]` placeholder سے بدل دیتا ہے، جبکہ صرف انہی branches کو clone کرتا ہے جو
  واقعی تبدیل ہوئی ہوں۔
- `CREDENTIAL_PATTERNS` میں LLM provider keys (OpenAI، OpenAI-proj،
  Anthropic، Google، Hugging Face، Replicate)، VCS/SaaS tokens (GitHub، Slack،
  Linear، Notion، npm، Postman، Discord)، payment keys (Stripe، Square)، cloud
  keys (AWS access key، Twilio، SendGrid، Mailgun)، private keys / JWTs،
  credentials پر مشتمل connection strings (`mongodb://user:pass@...` وغیرہ)، اور
  عمومی `Authorization`/`x-api-key`/`api-key`/`apikey` header-value
  pattern شامل ہیں۔ Header کی شکل والی keys (`authorization`، `x-api-key`، `api-key`،
  `apikey`) کو عمومی text regex کے بجائے ساختی طور پر redacted کیا جاتا ہے (صرف value،
  جبکہ `Bearer `/`Basic ` جیسے scheme prefix محفوظ رکھے جاتے ہیں)۔
- guardrail کبھی بلاک نہیں کرتا؛ یہ صرف دوبارہ تحریر (`modifiedPayload` /
  `modifiedResponse`) اور تشریح (`meta.credentialsRedacted`، `meta.count`) کرتا ہے۔

Regression guard: `tests/unit/credential-masker-guardrail.test.ts`۔

## بنیادی کنٹریکٹ (`base.ts`)

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
  block?: boolean; // true چین کو فوری طور پر روک دیتا ہے
  message?: string; // بلاک ہونے پر ظاہر کیا جاتا ہے
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // درخواست کو دوبارہ لکھنے کے لیے preCall کے ذریعے واپس کیا جاتا ہے
  modifiedResponse?: TValue; // جواب کو دوبارہ لکھنے کے لیے postCall کے ذریعے واپس کیا جاتا ہے
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

ایک گارڈ ریل `void`، `{}`، یا `{ block: false }` واپس کرکے "کوئی تبدیلی نہیں" کا اشارہ دیتی ہے۔ `modifiedPayload`/`modifiedResponse` واپس کرنے سے چین میں آگے آنے والی گارڈ ریلز تک پہنچنے والی قدر تبدیل ہو جاتی ہے۔
`signal?: AbortSignal` کالر کے لائف سائیکل کو گارڈ ریلز تک پہنچاتا ہے۔ درخواست کا منسوخ ہونا دانستہ fail-open استثنا ہے: میڈیا برجز کام روک دیتے ہیں اور صفائی کرتے ہیں، مگر خام میڈیا کو ایسے ہدف کے لیے بحال نہیں کرتے جس کے بارے میں معلوم ہو کہ وہ اسے سپورٹ نہیں کرتا۔

## رجسٹری (`registry.ts`)

سنگلٹن `guardrailRegistry` درج ذیل سہولیات فراہم کرتی ہے:

- `register(guardrail)` — ایک گارڈ ریل شامل کرتی ہے (یا نارملائزڈ نام کے لحاظ سے تبدیل کرتی ہے) اور
  صعودی `priority` کے مطابق دوبارہ ترتیب دیتی ہے۔
- `clear()` / `list()` — انتظامی معاون فنکشنز۔
- `runPreCallHooks(payload, context)` — فعال گارڈ ریلز پر تکرار کرتی ہے، پے لوڈ کو
  `modifiedPayload` کے ذریعے آگے بڑھاتی ہے، اور پہلے `block: true` پر رک جاتی ہے۔
- `runPostCallHooks(response, context)` — جواب کی جانب بھی یہی بہاؤ استعمال کرتی ہے۔
- `resetGuardrailsForTests({ registerDefaults })` — حالت صاف کرتی ہے اور صاف ستھری ٹیسٹ علیحدگی کے لیے، اختیاری طور پر
  ڈیفالٹس کو دوبارہ رجسٹر کرتی ہے۔

دونوں رنرز `{ blocked, payload|response, results, guardrail?, message? }`
واپس کرتے ہیں، جہاں `results`، `GuardrailExecutionResult` ریکارڈز کی ایک ارے ہے جس میں
ہر گارڈ ریل کے `blocked`، `skipped`، `modified`، `error`، اور `meta` فیلڈز شامل ہوتے ہیں،
جو ٹریسنگ کے لیے مفید ہیں۔

### ہر درخواست کے لیے گارڈ ریلز کو غیر فعال کرنا

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` گارڈ ریل ناموں کی ایک
نقل سے پاک فہرست یکجا کرتا ہے جنہیں موجودہ درخواست کے لیے چھوڑ دینا چاہیے۔
ذرائع (سب اختیاری، سب ضم کیے جاتے ہیں):

- `apiKeyInfo.disabledGuardrails`
- درخواست کی باڈی کا `disabledGuardrails` (اعلیٰ سطح پر)
- درخواست کی باڈی کا `metadata.disabledGuardrails`
- ہیڈر `x-omniroute-disabled-guardrails` (یا قدیمی
  `x-disabled-guardrails`)

اقدار اسٹرنگز کی ارے یا کوما سے جدا کی گئی اسٹرنگ ہو سکتی ہیں؛ ناموں کو
لوئرکیس kebab-case میں نارملائز کیا جاتا ہے (`pii_masker` → `pii-masker`)۔ نتیجہ
`context.disabledGuardrails` کے ذریعے رجسٹری کو دیا جاتا ہے، جو مماثل
گارڈ ریلز کو چھوڑ دیتی ہے (`results` میں `skipped: true`)۔

## عمل درآمد کی ترتیب

`src/sse/handlers/chat.ts` اور `open-sse/handlers/chatCore.ts` سے گزرنے والی ہر درخواست کے لیے:

1. `resolveDisabledGuardrails(...)`، API کلید، باڈی، اور ہیڈرز سے نظر انداز کیے جانے والے عناصر کی فہرست بناتا ہے۔
2. `guardrailRegistry.runPreCallHooks(body, ctx)` ترجیح کی صعودی ترتیب میں گارڈ ریلز چلاتا ہے:
   - غیر فعال گارڈ ریلز کو `skipped` کے طور پر ریکارڈ کیا جاتا ہے۔
   - ہر گارڈ ریل کا `preCall`، `modifiedPayload` کے ذریعے پے لوڈ دوبارہ لکھ سکتا ہے۔
   - پہلا `block: true` سلسلے کو فوری طور پر روک دیتا ہے اور ہینڈلر گارڈ ریل کی جانب سے مسترد کیے جانے کا جواب واپس کرتا ہے۔
3. (ممکنہ طور پر دوبارہ لکھا گیا) پے لوڈ کومبو روٹنگ اور اپ اسٹریم ڈسپیچ میں جاتا ہے۔
4. جواب تیار ہونے کے بعد، `guardrailRegistry.runPostCallHooks(...)` جواب پر یہی سلسلہ چلاتا ہے۔ یہاں `block: true` اپ اسٹریم جواب کو خارج کر دیتا ہے۔

خرابی پیدا کرنے والی گارڈ ریلز کو `error: <message>` کے ساتھ ریکارڈ کیا جاتا ہے اور `logger.warn` کے ذریعے لاگ کیا جاتا ہے، لیکن سلسلہ جاری رہتا ہے — یہ ڈیزائن کے لحاظ سے فیل-اوپن ہے۔

## کنفیگریشن

بلٹ اِن گارڈ ریلز کے ذریعے پڑھے جانے والے ماحولیاتی متغیرات:

| متغیر                                 | استعمال کنندہ              | اثر                                                                                                    |
| ------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`         | تشخیص کو مکمل طور پر غیر فعال کرنے کے لیے `false` مقرر کریں۔                                           |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`         | انجیکشن پالیسی: `warn`، `block`، یا `log`۔ پرانی قدر `redact` انجیکشن متن کو دوبارہ نہیں لکھتی۔        |
| `INJECTION_GUARD_MODE`                | `prompt-injection`         | انجیکشن گارڈ کا موڈ؛ یہ DB فیچر فلیگ بھی ہے جو ماحولیاتی متغیرات کو **اوور رائیڈ** کرتا ہے (DB > ENV)۔ |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`         | کم از کم شدت جسے `MODE=block` مسترد کرتا ہے: `high` (ڈیفالٹ)، `medium`، یا `low`۔                      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`         | `INPUT_SANITIZER_BLOCK_THRESHOLD` کا پرانا عرف۔                                                        |
| `PII_REDACTION_ENABLED`               | `pii-masker`               | `true` ہونے پر، درخواست کا PII حذف کر دیا جاتا ہے (انجیکشن موڈ سے آزاد)۔                               |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (ڈاؤن اسٹریم) | جواب کی جانب ماسکر کے رویے کو کنٹرول کرتا ہے۔                                                          |

Modality Bridge گارڈ ریلز ماحولیاتی متغیرات کے بجائے DB کی معاونت والے سیٹنگز اسٹور (`getSettings()`) سے رن ٹائم کنفیگریشن پڑھتی ہیں۔ Vision کی بنیادی کلیدیں `modalityBridgeVisionEnabled`، `modalityBridgeVisionMode`، `modalityBridgeVisionModel`، `modalityBridgeVisionTaskAware`، `modalityBridgeVisionPrompt`، `modalityBridgeVisionTimeout`، `modalityBridgeVisionMaxImages`، `modalityBridgeVisionMaxChars`، `modalityBridgeCacheEnabled`، `modalityBridgeCacheTtlMinutes`، اور `modalityBridgeCacheMaxEntries` ہیں۔ پرانی `visionBridge*` کلیدیں صرف دستاویزی، ایک سائیکل کے ریڈ فال بیک کے طور پر قبول کی جاتی ہیں؛ ڈیش بورڈ رائٹس بنیادی کلیدیں استعمال کرتی ہیں۔ ڈیفالٹس اور فال بیک ریزالور `src/shared/constants/modalityBridgeDefaults.ts` میں موجود ہیں، جبکہ پرانے کانسٹنٹس `src/shared/constants/visionBridgeDefaults.ts` میں برقرار رکھے گئے ہیں۔

Audio، `modalityBridgeAudioEnabled`، `modalityBridgeAudioModel`، `modalityBridgeAudioTimeout`، اور `modalityBridgeAudioMaxClips` کے ساتھ مشترکہ `modalityBridgeCache*` سیٹنگز استعمال کرتا ہے۔ Audio کے لیے پرانی کلیدوں کا کوئی فال بیک نہیں ہے کیونکہ یہ کلیدیں Modality Bridge اسکیما کے ساتھ متعارف کرائی گئی تھیں۔

Video، `modalityBridgeVideoEnabled`، `modalityBridgeVideoAnalysisMode`، `modalityBridgeVideoModel`، `modalityBridgeVideoFrameCount`، `modalityBridgeVideoSamplingPolicy`، `modalityBridgeVideoMaxVideos`، اور `modalityBridgeVideoTimeout` کے ساتھ مشترکہ `modalityBridgeCache*` سیٹنگز استعمال کرتا ہے۔ یہ ڈیفالٹ طور پر غیر فعال ہے کیونکہ FFmpeg/ffprobe اختیاری آپریشنل انحصارات ہیں اور فریم کیپشننگ تاخیر اور ماڈل کی لاگت میں اضافہ کرتی ہے۔

## حسبِ ضرورت Guardrails

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

مراحل:

1. `BaseGuardrail` کو توسیع دیتے ہوئے `src/lib/guardrails/myGuardrail.ts` بنائیں۔
2. `preCall` اور/یا `postCall` نافذ کریں۔
3. یا تو import کے وقت رجسٹر کریں (`registerDefaultGuardrails` سے push کریں) یا
   runtime پر `guardrailRegistry.register(...)` کو کال کریں — registry اسی normalized نام والے
   کسی بھی سابقہ guardrail کو بدل دیتی ہے۔
4. `tests/unit/` کے تحت ٹیسٹ شامل کریں (موجودہ مثالیں:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`)۔

## ٹیسٹنگ

معلوم حالت سے آغاز کرنے کے لیے ٹیسٹس کے درمیان `resetGuardrailsForTests()` استعمال کریں۔
خالی registry سے آغاز کرنے اور صرف زیرِ ٹیسٹ guardrails رجسٹر کرنے کے لیے
`{ registerDefaults: false }` پاس کریں۔ Vision Bridge dependency
injection (`deps.getSettings`, `deps.callVisionModel`) قبول کرتا ہے؛ Audio Bridge
settings، capabilities، STT model کے انتخاب، credential
کی جانچ، اور transcription کے لیے مساوی seams فراہم کرتا ہے۔ اس طرح ٹیسٹس DB
یا network تک رسائی کے بغیر دونوں flows کو آزما سکتے ہیں۔

## مزید دیکھیے

- `src/lib/guardrails/` — نفاذ
- `src/shared/utils/inputSanitizer.ts` — مشترکہ detector جو
  prompt-injection اور PII masking کو تقویت دیتا ہے
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge کی defaults اور
  forced-bridge model کی فہرست
- `src/shared/constants/modalityBridgeDefaults.ts` — مشترکہ Vision/Audio runtime defaults
- `docs/architecture/RESILIENCE_GUIDE.md` — متعامد layer (circuit breaker، cooldowns)
- `docs/reference/ENVIRONMENT.md` — env vars کا مکمل حوالہ

## Injection-guard route coverage اور red-team (مرحلہ 8 · بلاک D)

injection-guard (`createInjectionGuard` / `withInjectionGuard`) ان تمام routes کا احاطہ کرتا ہے
جو user prompts قبول کرتے ہیں۔ یہ `INJECTION_GUARD_MODE` کا احترام کرتا ہے (default `warn` = صرف log؛
`block` = HTTP 400 `SECURITY_001` واپس کرتا ہے)۔

| قسم          | Routes                                                                                                                                               | Default mode |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| متن (موجودہ) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn         |
| تخلیقی       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn         |
| ڈیٹا         | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn         |

متن اخذ کرنا (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` کا احاطہ کرتا ہے۔

**Red-team (ہر شب، `nightly-llm-security.yml`):** promptfoo تصدیق کرتا ہے کہ ہر route
`INJECTION_GUARD_MODE=block` میں OWASP-LLM corpus کو block کرتا ہے؛ garak probes چلاتا ہے (secret نہ ہونے پر چھوڑ دیتا ہے)۔
`moderations` کو یکسانیت کے لیے شامل کیا گیا ہے — block-mode میں operators اسے
`resolveDisabledGuardrails` کے ذریعے مستثنیٰ کر سکتے ہیں۔

ہر شب چلنے والے workflow (`.github/workflows/nightly-llm-security.yml`، cron + دستی
dispatch) میں دو jobs ہیں:

- **`promptfoo-guard` (blocking)** — `INJECTION_GUARD_MODE=block` کے ساتھ
  `promptfoo eval -c promptfooconfig.yaml` چلاتا ہے۔ ہر مخالفانہ case (مثلاً "ignore all
  previous instructions…"، DAN-style jailbreaks) تصدیق کرتا ہے کہ response میں
  `error.code === "SECURITY_001"` موجود ہے، یعنی guard نے واقعی request مسترد کی۔
- **`garak` (مشاورتی)** — مقامی OmniRoute instance (`http://localhost:20128/v1`) کے خلاف
  garak کو `--probes promptinject,dan,leakreplay` کے ساتھ چلاتا ہے۔ اسے provider
  secret (`PROMPTFOO_PROVIDER_KEY`) کے ذریعے مشروط کیا گیا ہے؛ یہ مؤدبانہ طور پر چھوڑ دیتا ہے اور اس کے آخر میں
  `|| true` شامل ہے، لہٰذا یہ CI کو ناکام کیے بغیر رپورٹ کرتا ہے۔

guard helper (`createInjectionGuard` / `withInjectionGuard`) کی coverage
ہر prompt رکھنے والے `/v1` route تک پھیلی ہوئی ہے؛ prompt کا متن
`src/shared/utils/inputSanitizer.ts` میں موجود `extractMessageContents()` کے ذریعے
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` سے حاصل کیا جاتا ہے۔
