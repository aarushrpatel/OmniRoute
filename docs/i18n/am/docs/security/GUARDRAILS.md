# Guardrails (አማርኛ)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **ዋና የእውነት ምንጭ:** `src/lib/guardrails/`
> **መጨረሻ የተዘመነው:** 2026-08-29 — v3.8.51 (የVideo Bridge ትራንስክሪፕት መነሻ በጠሪው የሚገለጽ ነው፣
> እስካሁን በሰርቨሩ አልተረጋገጠም — በ#11661 መሠረት ግልጽ ተደርጓል)

Guardrails በOmniRoute እና በላይኛ ደረጃ አቅራቢዎች መካከል ባለው ወሰን ላይ
ደኅንነትን፣ ፖሊሲን እና የይዘት ለውጦችን ያስፈጽማሉ። እያንዳንዱ guardrail
የጥያቄ payload-ዎችን (`preCall`) እና የላይኛ ደረጃ ምላሾችን (`postCall`)
መመርመር (እንዲሁም እንደአማራጭ ውድቅ ማድረግ፣ መለወጥ ወይም ማብራሪያ መጨመር) ይችላል።

ስርዓቱ **fail-open** ነው፦ guardrail በሚፈጸምበት ጊዜ exception ካስነሳ፣ registryው
ጥያቄውን ከማሳካት ይልቅ ስህተቱን መዝግቦ ወደሚቀጥለው guardrail
ይቀጥላል። ማገድ ግልጽ ውሳኔ (`block: true`) እንጂ በአጋጣሚ የሚከሰት አይደለም።

## አብረው የተካተቱ መከላከያዎች

registry ሲመጣ ስድስት መከላከያዎችን በቅድሚያ ቅደም ተከተል በራስ-ሰር ይጭናል
(`registry.ts` → `registerDefaultGuardrails()` ይመልከቱ)፦

| ቅድሚያ | ስም                  | ደረጃ(ዎች)        | ፋይል                   |
| ---- | ------------------- | -------------- | --------------------- |
| `5`  | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`  | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`  | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10` | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20` | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95` | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

ዝቅተኛ የቅድሚያ ቁጥሮች **መጀመሪያ** ይሰራሉ።

### የምስል ድልድይ (`visionBridge.ts`) — የሞዳሊቲ ድልድይ PR-1

ወደ **ምስልን የማይደግፉ ሞዴሎች** የተላኩ ምስሎችን የያዙ ጥያቄዎችን ያቋርጣል፤ ከዚያም ጥያቄውን በሙሉ ምስልን ወደሚደግፍ ሞዴል እንደገና ይመራል ወይም upstream ጥሪው ከመደረጉ በፊት የምስል ክፍሎቹን በሚዋቀር የምስል ሞዴል በተፈጠሩ የጽሑፍ መግለጫዎች ይተካል። ይህም ጽሑፍ-ብቻ አቅራቢዎች ባለብዙ ሞዳሊቲ payload-ዎችን ያለምንም ተጨማሪ ሂደት እንዲያስተናግዱ ያስችላል።

ፍሰቱ፦

1. ዒላማው ሞዴል አስቀድሞ ምስልን የሚደግፍ ከሆነ ይዝለሉት (በግዳጅ-ድልድይ ዝርዝሩ `isVisionBridgeForcedModel` ውስጥ ካልተካተተ በስተቀር)።
2. `extractImageParts(messages)` (`visionBridgeHelpers.ts`) በመጠቀም የምስል ክፍሎችን ያውጡ፤ ይህም በ`open-sse/utils/mediaParts.ts` ውስጥ ላለው **የተዋሃደ የሚዲያ ማወቂያ** `detectMediaParts()` ኃላፊነቱን ያስተላልፋል — ይህም ከcombo ተኳኋኝነት ማጣሪያ ጋር የሚጋራው ብቸኛው የእውነት ምንጭ ነው። ማውጣቱ `replaceImageParts` መልሶ ሊያገናኛቸው በሚችላቸው ቅርጾች ከፍተኛ-ደረጃ ክፍሎች ብቻ ተፈቅዶለታል (የማውጣት↔የመተካት ውል)፦ OpenAI `image_url`፣ Anthropic base64 `source.type:"base64"`፣ Anthropic URL `source.type:"url"` እና Responses API `input_image`። ውስጥ የተዋቀሩ ተዛማጆች እና አመልካች-ብቻ ቅርጾች የcombo ማጣሪያ ግብዓቶች ስለሆኑ ፈጽሞ አይወጡም። ምንም ካልተገኘ ይዝለሉት።
3. የአሂድ-ጊዜ ውቅርን በ`resolveVisionBridgeRuntimeSettings()` (`src/shared/constants/modalityBridgeDefaults.ts`) ይፍቱ፦ አዲሶቹ `modalityBridge*` የቅንብር ቁልፎች ቅድሚያ ያገኛሉ፤ የቀድሞዎቹ `visionBridge*` ቁልፎች እንደ **የአንድ-ዙር ተተኪ** (የመመለሻ ጊዜ መስኮት) ይቆያሉ። ድልድዩ ከተሰናከለ ማንኛውም የሚዲያ ዝውውር ከመደረጉ በፊት ይዝለሉት።
4. የሁነታ መራጩ (`modalityBridgeVisionMode`፣ ከታች ያለውን ሰንጠረዥ ይመልከቱ) እንደገና መምራት ወይም መግለጽ መካከል ይወስናል። እንደገና መምራት `model` ብቻ የተቀየረበትን `modifiedPayload` ከmeta `{ rerouted, fromModel, toModel, imagesKept }` ጋር ይመልሳል።
5. የመግለጫ መንገድ፦ ምስሎችን በ`maxImages` ይገድባል፣ ለተግባሩ ተስማሚ የሆነውን prompt ያቀናብራል፣ የመግለጫ cache-ውን ያማክራል፣ የምስል ሞዴሉን **በትይዩ** (`Promise.allSettled`) ይጠራል እና በምስሎቹ ቦታ `[Image N]: <description>` የጽሑፍ ክፍሎችን ያስገባል። ያልተሳካ መግለጫ `null` ይሰጣል እና የመጀመሪያው የምስል ክፍል **እንዳለ ይጠበቃል** (#4012) — ሁሉም መግለጫዎች በማይሳኩበት የcombo መግለጫ መንገድ ላይ ግን፣ ምስልን እንደማይደግፍ የተረጋገጠ upstream በምትኩ `(አይገኝም — ምስልን የሚደግፍ አቅራቢ አልተገናኘም)` stub ያገኛል (#8430)።
6. `modifiedPayload` + meta (`imagesProcessed`፣ `descriptions`፣ `processingTimeMs`፣ `visionModel`) ይመልሱ።

#### የሁነታ መራጭ (`modalityBridgeVisionMode`)

| ሁነታ        | ነባሪ | ባህሪ                                                                                                                                                                                                                     |
| ---------- | --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔   | ያልተነካ የቆየው ሂዩሪስቲክ (#6640/#7204)፦ combo ያልሆኑ/`auto/` ሞዴሎች፣ የመጀመሪያው ሞዴል ጥቅም ላይ የሚውሉ ማረጋገጫዎች ከሌሉት፣ ወደ ምርጡ የምስል ሞዴል እንደገና ይመራሉ (ካሉት ይገልጻሉ)፤ combo ዒላማዎች ሁልጊዜ ይገለጻሉ።                                                         |
| `describe` |     | ሁልጊዜ ይገልጻል — የእንደገና መምራት ክፍሉ ሙሉ በሙሉ ይዘለላል፤ ሁልጊዜ ተጠቃሚው የመረጠው ሞዴል መልስ ይሰጣል።                                                                                                                                               |
| `reroute`  |     | በግዳጅ እንደገና ይምሩ፦ የማረጋገጫ መረጃ ያለውን ሞዴል ለማቆየት የሚያገለግለው guard ይታለፋል። የእንደገና መምራት-**ዒላማ** የማረጋገጫ guard ግን አሁንም ተፈጻሚ ነው — ጥቅም ላይ የሚውል የምስል ዒላማ በማይኖርበት ጊዜ፣ ጥሬ ምስሎች ጽሑፍ-ብቻ ወደሆነ backend ፈጽሞ እንዳይደርሱ ጥያቄው ወደ መግለጫ ይቀጥላል (#8430)። |

የግዳጅ ሁነታዎች የ`auto` ሂዩሪስቲክ ከመስራቱ **በፊት** በአጭር ያቋርጣሉ፤ የ`auto` ባህሪ ከPR-1 በፊት ከነበረው መከላከያ ጋር በባይት ደረጃ ተመሳሳይ ነው።

#### የAPI ቁልፍ ወሰን (`visionBridgeKeyScope.ts`)

የጠሪው API ቁልፍ `allowedConnections`ን፣ የኮታ ስብስቦችን (`allowedQuotas`) ወይም ሞዴሎችን (`allowedModels` / `blockedModels` / `modelAccessMode: "restricted"` / `disableNonPublicModels`) ሲገድብ፣ ድልድዩ ቁልፉ ሊጠቀምባቸው በሚችልባቸው ግንኙነቶች ላይ ቁልፉ ሊጠቀምባቸው የሚችላቸውን የእንደገና መምሪያ እና የመግለጫ ሞዴሎች ብቻ ይመርጣል። ከዚያም የመግለጫ ጥሪው ሁልጊዜ በOmniRoute ራስ-ዙር በኩል `x-omniroute-self-loop-key-id` header-ን ይዞ ያልፋል፤ በዚህም ተቀባዩ የውይይት ጥያቄ የዚያን ቁልፍ የግንኙነት እና የሞዴል ፖሊሲ እንደገና ያስፈጽማል። `enforceApiKeyPolicy()` ያንን header የሚያከብረው ከራስ-ዙር bearer ጋር ብቻ ነው፤ ስለዚህ መዳረሻን ማጥበብ ብቻ ይችላል፣ እና የማይፈታ id ውድቅ ይደረጋል።

ለቁልፉ የተፈቀደ የምስል ሞዴል ከሌለ፣ የመግለጫ መንገዱ ወደ ጎን ይለያል እና ጥያቄው ሳይቀየር ያልፋል፤ ይህም ከተሰናከለ መከላከያ ጋር ተመሳሳይ የfail-open ባህሪ ነው (meta `{ skipped: true, reason: "no_permitted_vision_model" }`)። ቁልፍ የሌላቸው ጥያቄዎች እና እነዚህ ገደቦች የሌሉባቸው ቁልፎች ልክ እንደበፊቱ ይሰራሉ።

#### ተግባርን የሚያገናዝብ የመግለጫ prompt (`modalityBridgeVisionTaskAware`)

ነባሪው **true** ነው። `composeVisionPrompt()` (`visionBridgeHelpers.ts`) የ**መጨረሻውን የተጠቃሚ መልዕክት** ጽሑፍ (እስከ 500 ቁምፊዎች የተቆረጠ) ወደ መሠረታዊው
የመግለጫ ፕሮምፕት ይጨምራል፤ በዚህም መግለጫውን ተጠቃሚው በትክክል ወደጠየቀው
ነገር ይመራዋል (`codex-vision-proxy` ንድፍ)፣ እንዲሁም የራዕይ ሞዴሉ የሚታየውን
ጽሑፍ እንዲገለብጥ ይጠይቃል። ጥቆማው ከጠፋ — ወይም የተጠቃሚ ጽሑፍ ከሌለ — መሠረታዊው ፕሮምፕት ሳይለወጥ ጥቅም ላይ ይውላል።

የመግለጫ ራስ-ዙሩ የራሱ OpenAI-ተኳሃኝ ጥያቄ (`callVisionModelSingle()`
በ `visionBridgeHelpers.ts` ውስጥ) ሁልጊዜ `image_url.detail: "high"` ይጠይቃል —
ያለምንም ቅድመ ሁኔታ፣ ለእያንዳንዱ ጠሪ/አቅራቢ፣ እና በማንኛውም የደንበኛ ምልክት ላይ ሳይመሠረት።
ዝቅተኛ-ዝርዝር ናሙና መውሰድ ይህ ፕሮምፕት በትክክል ለሚጠይቀው የጽሑፍ-ቅጂ
ተግባር የOCR ትክክለኛነትን ያዳክማል፤ ስለዚህ ዋናው የገቢ ጥያቄ ምንም
ዓይነት የዝርዝር ደረጃ ቢጠቀምም የመግለጫ ጥሪው ራሱ ሁልጊዜ ከፍተኛ
ዝርዝር ይጠይቃል። ይህ የሚነካው የውስጣዊውን የመግለጫ ጥያቄ አካል ብቻ ነው፤
OmniRoute በዋናው ጥያቄ ላይ የጠሪውን የራሱን `image_url.detail` እንዴት
እንደሚያስተላልፍ አይለውጥም — ያ ነባሪ በተናጠል የሚተገበር ሲሆን፣
በ`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`) ውስጥ
የሚተገበረውም ለተገኙ OpenCode ደንበኞች ብቻ ነው። የመግለጫ ራስ-ዙሩ
የAnthropic የሽቦ-ቅርጸት ቅርንጫፍ የ`detail` መስክ የለውም፣ እና በሁለቱም ነባሪዎች
አይነካም።

#### የመግለጫ ውጤት ገደብ (`modalityBridgeVisionMaxChars`)

| ቁልፍ                            | ነባሪ | ክልል               |
| ------------------------------ | --- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0` | `0` ወይም 100–50000 |

`0` (ነባሪ) ማለት **ምንም ገደብ የለም** ማለት ነው — በ
`callVisionModel()` የተመለሰው መግለጫ ሳይለወጥ ይተላለፋል፣ ይህም ነባሩን
ባህሪ ይጠብቃል። በ100–50000 ክልል ውስጥ ያለ ማንኛውም እሴት መግለጫው
እንደ `[Image N]: <description>` ተመልሶ ከመጣመሩ በፊት በ`…` ቅጥያ
ይቆርጠዋል (`VisionBridgeGuardrail.preCall()` በ
`src/lib/guardrails/visionBridge.ts` ውስጥ)። የታችኛው ሞዴል ሙሉውን ቅጂ
ለሚፈልግባቸው ብዙ ዝርዝር ያላቸው የOCR ተግባራት ይህን ከፍ ያድርጉት፤
ብዙ ለሚያወሩ የራዕይ ሞዴሎች የቶከን አጠቃቀምን ለመገደብ ደግሞ ዝቅ ያድርጉት።
የዳሽቦርድ መስኩ በVision ትሩ Advanced ፓነል ላይ ይገኛል
(`modality-bridge-max-chars` በ `ModalityBridgeVisionTab.tsx` ውስጥ)፣ እና ግልጽ
የሆነውን `0` ሳይነካ በ1 እና 99 መካከል ያለን ማንኛውንም እሴት ወደ 100
ዝቅተኛ ገደብ ያሳድጋል — `0` በራሱ ትክክለኛ የZod እሴት ነው
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`)፣ የ"unset"
ነባሪ ብቻ አይደለም።

#### የመግለጫ መሸጎጫ (`modalityBridge/bridgeCache.ts`)

ለመግለጫ ውጤቶች በማህደረ ትውስታ ውስጥ ያለ LRU + TTL መሸጎጫ፣ በሂደቱ አቀፍ
የሚጋራ። ቁልፍ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` ሲሆን
የርዝመት-ቅድመ ቅጥያ ማቀፍን ይጠቀማል (የመስክ-ድንበር ግጭቶች የሉም)። የሞዴሉ ክፍል
**የተዋቀረው** የድልድይ ሞዴል እንጂ በትክክል መልስ የሰጠው ሞዴል አይደለም —
`callVisionModel` በውስጥ ወደ አማራጭ ሊወርድ ይችላል፣ እና በእያንዳንዱ ሙከራ ቁልፍ
ማድረግ መሸጎጫውን ይበታትነዋል። ያልተሳኩ መግለጫዎች ፈጽሞ አይሸጎጡም። ቅንብሮች፦

| ቁልፍ                             | ነባሪ    | ክልል     |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### የርቀት ምስል መደበኛ ማድረግ (ራስ-ዙር መግለጫ/base64 ማምጣት)

ድልድዩ አንድን **የርቀት** ምስል በራሱ ሲያመጣ — የAnthropic መግለጫ
ራስ-ጥሪ እና የclaude-ሽቦ-ቅርጸት base64 ልወጣ
(`ensureBase64ImagesForClaudeWire`)፣ ሁለቱም በ
`visionBridgeHelpers.ts` ውስጥ ባለው `fetchRemoteImageAsDataUri()` በኩል —
የሚፈጠረው data URI በራዕይ-ሞዴል ጥያቄ ውስጥ ከመካተቱ በፊት በ
`normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) በኩል ያልፋል።
ከመጠን በላይ የሆኑ ምስሎች ወደ **2048px ረጅም ጠርዝ** ይቀነሳሉ
(OpenAI/Anthropic ቀድሞውኑ በሰርቨር-በኩል ከሚተገብሩት የመጠን ለውጥ ገደብ ጋር
የሚዛመድ)፣ ይህም የራዕይ ሞዴሉ የሚያየውን ሳይለውጥ የሰቀላ ባይቶችን/መዘግየትን
ይቀንሳል። መጠን መቀየር `sharp`ን ይጠቀማል፣ እሱም በተለዋዋጭ import ይጫናል፦
ቤተኛ ሁለትዮሽ ፋይሉ መጫን በሚያቅተው መድረክ ላይ `normalizeDataUri()`
**ፈጽሞ ስህተት አይጥልም** — ወደ መጀመሪያዎቹ ባይቶች ቀጥታ ማስተላለፍ ይመለሳል፣
ስለዚህ የመግለጫ/base64-ልወጣ መንገዱ ሁልጊዜ መሥራቱን ይቀጥላል። ምስል ያልሆኑ
ባይቶች (ዲኮድ ሊደረግ የሚችል ምስል ያልመለሰ ማምጣት) እንዲሁም ሳይነኩ
ይተላለፋሉ። ይህ መደበኛ ማድረግ ድልድዩ ለራሱ ራስ-ጥሪ በሚያመጣቸው ምስሎች
ብቻ የተገደበ ነው — በፈቃድ-መርጦ-መግባት ብቻ ከሚደረግ የለውጥ መርህ
(Hard Rule #20) ጋር በሚስማማ መልኩ፣ በጠሪው ጥሬ ቀጥታ-ማስተላለፊያ payload ላይ
ፈጽሞ አይተገበርም።

#### የቅንብሮች ንድፍ + ፍልሰት

አዲሶቹ `modalityBridge*` ቁልፎች በ`updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`) ውስጥ በZod የተረጋገጡ ናቸው፦
`modalityBridgeVisionEnabled`፣ `modalityBridgeVisionMode`፣
`modalityBridgeVisionModel`፣ `modalityBridgeVisionTaskAware`፣
`modalityBridgeVisionPrompt`፣ `modalityBridgeVisionTimeout`፣
`modalityBridgeVisionMaxImages`፣ `modalityBridgeVisionMaxChars`፣ የ
`modalityBridgeCache*` ሶስትዮሽ፣ እና በAudio Bridge ጥቅም ላይ የሚውለው
የ`modalityBridgeAudio*` ቡድን። ፍልሰት
`141_modality_bridge_settings.sql` ነባር የቆዩ `visionBridge*` እሴቶችን
ወደ ተዛማጅ አዲስ ቁልፎች ይቀዳል (በተደጋጋሚ መሮጥ የሚችል እና ኦፕሬተር ያዘጋጀውን
የ`modalityBridge*` እሴት ፈጽሞ የማይተካ)፤ የቆዩት ቁልፎች ለአንድ የልቀት ዑደት
እንደ የንባብ አማራጭ ተቀባይነታቸውን ይቀጥላሉ።

#### የግልጽነት ራስጌ + ስታቲስቲክስ

በመግለጫ የተለወጡ ምላሾች
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
ይይዛሉ (በ`modalityBridge/bridgeStats.ts` ውስጥ ባለው
`buildModalityBridgeHeader()` የተገነባ፣ በ
`src/sse/handlers/chatHelpers.ts` ውስጥ ባለው `withModalityBridgeHeader()`
የታተመ)። እንደገና የተመሩ ጥያቄዎች **ምንም** ራስጌ አያገኙም — payload አልተነካም፣
እና የሞዴሉ መቀየር ቀድሞውኑ በምላሹ አካል `model` መስክ ውስጥ ይታያል።

`GET /api/modality-bridge/stats` (`GET /api/settings` ከሚጠቀመው ጋር ተመሳሳይ ደረጃ ያለው የአስተዳደር ማረጋገጫ)
በማህደረ ትውስታ ውስጥ ያሉትን የእያንዳንዱ ሞዳሊቲ ቆጣሪዎች
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` ለ`vision`፣ `audio` እና
`video` ይመልሳል። `averageLatencyMs` እንደ መከፋፈያው `latencySamples`ን
ይጠቀማል፣ ሁሉንም ሙከራዎች አይጠቀምም፤ የጊዜ መለኪያ የሌለው ክወና
ዜሮ-ሚሊሰከንድ ናሙና አይፈጥርም። `bridged` ለተሳኩ ልወጣዎች
ከቀድሞው ስሪት ጋር ተኳሃኝ የሆነ ተለዋጭ ስም ሆኖ ይቆያል፤
ያልተሳኩ ሙከራዎች አይጨምሩትም።
ቆጣሪዎች በንድፍ መሠረት ፕሮሰሱ እንደገና ሲጀመር ዳግም ይጀምራሉ
(ቴሌሜትሪ እንጂ የሂሳብ አያያዝ አይደለም)።

#### የዳሽቦርድ ውቅር

ለዚህ የተመደበው የዳሽቦርድ ገጽ
`/dashboard/settings/modality-bridge` ነው። በURL ሊደረስባቸው የሚችሉት `Vision`፣ `Audio`
እና `Video` ትሮች የ`tab` እሴቱን ሲቀይሩ የጥያቄ መለኪያዎችን ይጠብቃሉ።
የVision ትሩ ማንቃትን፣ ሁነታን፣ የሞዴል ምርጫን (አውቶማቲክ
ነባሪውን ጨምሮ)፣ ተግባር-ተኮር ፕሮምፕት ማድረግን፣ የላቁ የጊዜ ገደብ/ምስል/የመግለጫ-ርዝመት/መሸጎጫ
ገደቦችን፣ የአሂድ ጊዜ
ቆጣሪዎችን እና ጥበቃ ያለው የናሙና ጥያቄን ያቀርባል። የAudio ትሩም ንቁ ነው፤
ማንቃትን፣ Auto ያለው STT-ብቻ የሞዴል መራጭን፣ የጊዜ ገደብ/ከፍተኛ-የቅንጥብ ገደቦችን፣ የድምፅ
ቆጣሪዎችን እና የ`input_audio` ናሙና ሙከራን ያቀርባል። የVideo ትሩ ተግባራዊ ነው፤
የFFmpeg/ffprobe የአሂድ ጊዜ ሁኔታን ዘገባ ያደርጋል — ከአራት ግልጽ የUI ሁኔታዎች አንዱን (`unknown` ምርመራው
እየተካሄደ እያለ ወይም መጠናቀቅ ካልቻለ፣ `restricted` loopback ባልሆነ
የዳሽቦርድ አስተናጋጅ ላይ ምርመራው በደንበኛው በኩል ሲታለፍ፣ `unavailable` ከተመረመረ
እና አለመኖሩ ከተረጋገጠ በኋላ፣ ወይም `available` ከFFmpeg/ffprobe ስሪቶች ጋር) — ያሳያል፣
የማንቃት/ሞዴል/ፍሬም/ቪዲዮ/የጊዜ ገደብ ቅንብሮችን ያስቀምጣል፣ የሞዴል መራጩን የምስል ችሎታ ወዳላቸው
ሞዴሎች ይገድባል፣ እና የቪዲዮ ቆጣሪዎችን ያቀርባል።

ቀድሞ በAI ቅንብሮች ስር የነበረው Vision Bridge ካርድ አሁን ወደ
አዲሱ ገጽ የሚወስድ የተኳሃኝነት አገናኝ ነው፤ ከእንግዲህ ሁለተኛ የቅጹን ቅጂ አይዝም። Media Providersም
ነባሩን የSpeech-to-Text መሞከሪያ ሳያስወግድ
የImage-to-Text እና Speech-to-Text የሥራ ፍሰቶችን ከሚዛመዱት Modality
Bridge ትሮች ጋር ያገናኛል።

**የራስ-ዙር መግቢያ ማለፊያ፦** የመግለጫ ጥሪው በOmniRoute የራሱ
`/v1` ራስ-ዙር (መደበኛ ያልሆነ የአቅራቢ ሞዴል) ሲተላለፍ፣ ንዑስ-ጥያቄው
`x-omniroute-admission-bypass: internal` ይልካል እና በተፈታው
የራስ-ዙር ምስክርነት ይረጋገጣል — በአካባቢያዊ ሁነታ የአካባቢው `sk_omniroute` መለያ፣ ወይም
በኦፕሬተሩ የተዋቀረው `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` የአካባቢ ቁልፍ (#1350)፣ ስለዚህ
የ`REQUIRE_API_KEY=true` ስርጭቶችም የመግለጫ ጥሪውን ማስኬድ ይችላሉ። ማለፊያው
ለእነዚህ ትክክለኛ ምስክርነቶች ብቻ ይፈቀዳል፣ ስለዚህ ውጫዊ ደንበኞች
መግቢያን ለመዝለል ራስጌውን መጠቀም አይችሉም።

የድሮ ነባሪዎች በ`src/shared/constants/visionBridgeDefaults.ts` ውስጥ ይገኛሉ፤
አዲሶቹ የሁነታ/ተግባር-ተኮር/መሸጎጫ ነባሪዎች እና የቅንብሮች ፈቺው በ
`src/shared/constants/modalityBridgeDefaults.ts` ውስጥ ይገኛሉ። የጥበቃ ስርዓቱ
ሙከራዎች ሐሰተኛ `getSettings` እና
`callVisionModel` ትግበራዎችን እንዲያስገቡ የ`deps` constructor አማራጭን ያቀርባል።

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

ድምፅ የያዙ የውይይት ጥያቄዎች የድምፅ ግቤትን እንደማይቀበል ወደሚታወቅ
ዒላማ ከመድረሳቸው በፊት ያቋርጣቸዋል። የውይይት ጥያቄውን በፍጹም እንደገና አያሰራጭም፤ የድምፅ ክፍሎች
ባለው OpenAI-ተኳሃኝ multipart endpoint በኩል ወደ ጽሑፍ ይቀየራሉ፣ እና
የተመረጠው የውይይት ሞዴል በጽሑፍ ቅጂዎቹ ይቀጥላል።

ፍሰት፦

1. `supportsAudio`ን በ`getResolvedModelCapabilities()` ይፍቱ። ግልጽ
   የprovider-registry ሜታዳታ ቅድሚያ ያገኛል፣ ከዚያ ቋሚ የሞዴል ሜታዳታ፣ ቀጥሎም የተመሳሰለው
   `modalities_input`። `audio`ን ያላካተተ የታወጀ የግቤት ዝርዝር `false` ነው፤
   የችሎታ ማስረጃ ከሌለ `null` ይሆናል። `false` እና `null` ሁለቱም
   ጥንቃቄ የሚያደርገውን ድልድይ ያነቃሉ፣ `true` ግን ያልፈዋል።
2. የ`modalityBridgeAudio*` ቅንብሮችን ይፍቱ እና በጋራው `detectMediaParts()`
   ፈላጊ አማካኝነት ከእያንዳንዱ መልዕክት ሊቆራረጡ የሚችሉ የከፍተኛ-ደረጃ
   የድምፅ ክፍሎችን ያውጡ። የሚደገፉ የመረጃ ማስተላለፊያ ቅርጾች OpenAI `input_audio`፣ `audio_url` እና
   `source.media_type: "audio/*"` ናቸው። የተካተተ ድምፅ ለማሰራጨት ይገኛል፣ ነገር ግን
   በመቆራረጫ መንገዱ አይወገድም። ሥራው በ`modalityBridgeAudioMaxClips` ይገደባል፤
   በኋላ ያሉ ክፍሎች ሳይነኩ ይቆያሉ።
3. የተዋቀረ `provider/model`ን ያክብሩ፣ ወይም `selectAudioBridgeModel()` በ
   `AUDIO_TRANSCRIPTION_PROVIDERS` ውስጥ በቋሚ የካታሎግ ቅደም ተከተል እንዲያልፍ እና ጥቅም ላይ የሚውል ንቁ የአቅራቢ ምስክርነት
   ያለውን የመጀመሪያ ሞዴል እንዲመርጥ ይፍቀዱ።
4. `callAudioTranscription()` base64/data-URI ድምፅን ወደ multipart
   `file` ይቀይራል፣ ወይም DNS pinning እና የ25 MB ገደብ ባለው ለህዝብ-ብቻ የወጪ
   ጥበቃ በኩል የርቀት `audio_url`ን ያወርዳል። ከዚያም ፋይሉን እና የተመረጠውን
   ሞዴል በ`resolveSelfLoopBearer()` ተረጋግጦ ወደ አካባቢያዊው `/v1/audio/transcriptions`
   ራስ-ዙር POST ያደርጋል። ነባሩ የጽሑፍ ቅጂ መንገድ መደበኛ
   የምስክርነት ፍለጋን፣ የእረፍት-ጊዜ/የፍጥነት-ገደብ አያያዝን እና የአቅራቢ ማሰማራትን ያከናውናል።
5. የተሳኩ ጥሪዎች ክፍሎቻቸውን በ`[Audio N]: <transcript>` ይተካሉ። ጥሪዎች
   በ`Promise.allSettled` ይሰራሉ፤ የአንድ ጥሪ አለመሳካት ያንኑ የመጀመሪያ
   የድምፅ ክፍል ይጠብቃል (#4012 ውል)። ሁሉም ጥሪዎች ካልተሳኩ እና ዒላማው
   `supportsAudio === false` መሆኑ ከተረጋገጠ፣ ክፍሎቹ
   `[Audio N]: (unavailable — no STT provider connected)` ይሆናሉ (#8430 ውል)።
   ዒላማው ያልታወቀ (`null`) ከሆነ፣ ሁሉም ያልተሳካበት ውጤት ሳይነካ ይቆያል። ጥቅም ላይ የሚውል
   የSTT ምስክርነት የሌለው፣ ጽሑፍ-ብቻ እንደሚቀበል የተረጋገጠ ዒላማ የኔትወርክ ጥሪ ሳያደርግ ተመሳሳይ
   ግልጽ stub ይቀበላል።

የተሳኩ የጽሑፍ ቅጂዎች በፕሮሰሱ ሁሉ የጋራ የሆነውን Modality Bridge LRU/TTL መሸጎጫ ይጠቀማሉ።
ቁልፉ የድምፅ ማጣቀሻውን፣ ቋሚውን `audio-transcription` የክወና
መለያ እና የተመረጠውን STT ሞዴል ያጣምራል፤ ያልተሳኩ ውጤቶች በፍጹም አይሸጎጡም። የድምፅ ሙከራዎች
የጋራዎቹን `bridged`፣ `cacheHits`፣ `failures` እና `lastUsedAt` ቆጣሪዎች ያዘምናሉ።
የተለወጡ ምላሾች
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`ን ይይዛሉ፤ ያልተነኩ
ጥያቄዎች የAudio Bridge ክፍል አይቀበሉም።

የአሂድ ጊዜ ቅንብሮች በDB የሚደገፉ እና በZod የተረጋገጡ ናቸው፦

| ቁልፍ                           | ነባሪ     | ክልል              |
| ----------------------------- | ------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                |
| `modalityBridgeAudioModel`    | `""`    | ራስ-ሰር ወይም STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10             |

የጋራ መሸጎጫው አሁንም በ`modalityBridgeCacheEnabled`፣
`modalityBridgeCacheTtlMinutes` እና `modalityBridgeCacheMaxEntries` ይቆጣጠራል።

### የቪዲዮ ድልድይ (`videoBridge.ts`, `videoBridgePipeline.ts`)

የታወቀ አገርኛ የቪዲዮ ድጋፍ የሌለው ዒላማ ከመጠራቱ በፊት፣ በChat Completions
`messages` እና Responses API `input` ውስጥ ያሉ ከፍተኛ-ደረጃ የቪዲዮ ክፍሎችን ይይዛል።
የሚደገፉ ቅርጾች `input_video`፣ `video_url`፣ `video_source`፣ HTTPS URLs
እና `data:video/*;base64,...` data URIs ናቸው። በጽሑፍ ውስጥ ያሉ ተራ የፋይል ስሞች
እንደ ቪዲዮ አይቆጠሩም።

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) የጥያቄውን አሰሳ፣
የችሎታ/ፖሊሲ ማረጋገጫ፣ በእያንዳንዱ ጥያቄ የሚደረገውን ድምር እና የምላሽ ጭነቱን ይቆጣጠራል።
በእያንዳንዱ ቪዲዮ ላይ የሚከናወነው ሥራ — ማግኘት፣ የሙሉ ውጤት መሸጎጫ፣ የፍሬም
ቅደም ተከተልን መግለጽ (ይህም በጠሪው የተገለጸ የድምፅ ግልባጭ ካለ ያዋህዳል)፣ እና በእያንዳንዱ ሙከራ
መለኪያዎች/ማቋረጥ/ማጽዳት — በ`videoBridgePipeline.ts` ውስጥ ባለው
`processVideoPart` ጀርባ ተደብቋል፤ ይህም በ`preCall` ድግግሞሽ ውስጥ ለእያንዳንዱ የቪዲዮ ክፍል አንድ ጊዜ ይጠራል።
ያ ሞጁል ግልጽ የወደብ ወሰኖችንም ይገልጻል፦ `VideoMediaBrokerPort`
(ባይቶችን ማግኘት እና ናሙና የተወሰዱ ፍሬሞችን ማውጣት)፣ `VideoAudioTranscriptionPort`
(በጠሪው የተገለጸ የድምፅ ግልባጭን ከናሙና መግለጫ ጽሑፎች ጋር ማዋሃድ)፣ እና
`VideoDrilldownPort` (የፍሬም ዝርዝር መመርመሪያ ቋሚ ማከማቻ ወሰን፤ እስካሁን ከ`processVideoPart` ጋር
አልተገናኘም — ዛሬ ዝርዝር መመርመሪያ ግቤቶችን የሚጽፈው የተለየው `/api/modality-bridge/video/drilldown`
መስመር ብቻ ነው)።

ይፋዊው `/v1` የጥያቄ መንገድ ንዑስ ሂደትን ፈጽሞ አያስመጣም ወይም አይጠራም።
የርቀት ቪዲዮዎች በ50 MiB ገደብ ውስጥ ይወርዳሉ፤ inline base64 ቪዲዮዎች ግን
ሞዴሉ/መልዕክቶቹ/የፍሬም ማዕቀፉ በ50 MiB ይፋዊ የJSON ጥያቄ መቀበያ ገደብ
ውስጥ እንዲቆዩ በእያንዳንዱ ቪዲዮ ላይ ጥንቃቄ የተሞላበት 36 MiB ዲኮድ የተደረገ ገደብ አላቸው።
inline ርዝመት እና የዲኮድ መጠን ግምቶች ማህደረ ትውስታ ከመመደቡ በፊት ይረጋገጣሉ።
በመጀመሪያው የርቀት URL እና በእያንዳንዱ redirect ላይ HTTPS ያስፈልጋል፤ ይህም DNS pinning
ያለውን ነባሩን ለይፋዊ መድረሻዎች ብቻ የሚፈቅድ የወጪ ግንኙነት ጥበቃ ይጠቀማል። ከዚያም ባይቶቹ ትክክለኛውን ውስጣዊ
`POST /api/modality-bridge/video/extract` የbroker ወሰን ያቋርጣሉ። ያ መስመር `LOCAL_ONLY`
እና `SPAWN_CAPABLE` ነው፣ በእያንዳንዱ ሂደት የተረጋገጠና
የታመነ-loopback ጥያቄን ብቻ ይቀበላል፣ እንዲሁም URL፣ የፋይል ስርዓት መንገድ፣ executable
ወይም የargument ዝርዝርን ፈጽሞ አይቀበልም። የAPI body-size pipeline እና የhandler ቀስ በቀስ የሚያነብ body
እያንዳንዳቸው በተናጥል 50 MiB የbroker ግቤት ገደብን ያስፈጽማሉ። ገደብ ያለው queue
በአንድ ጊዜ አንድ extraction ያከናውናል፣ አራት በመጠባበቅ ላይ ያሉ ሥራዎችን ይፈቅዳል፣ እና በመጠባበቅ ላይ ያለውን ግቤት
በ100 MiB ይገድባል።

በbroker ውስጥ `ffprobe` የግል አካባቢያዊ ፋይልን ያነባል፤ ቋሚው የformat
ፍቃድ ዝርዝር playlist እና manifest formatsን አያካትትም። ለተፈቀዱ MOV-family
containers፣ ውጫዊ MOV data references በነባሪነት እንደተሰናከሉ ይቆያሉ፣ እና ቋሚው command አያነቃቸውም።
`ffprobe` እና `ffmpeg` ሁለቱም `file`-ብቻ protocol whitelist፣ አንድ thread፣ ቋሚ argument arrays፣ shell የሌለው አሠራር፣
እና ከ`PATH` የተፈቱ executablesን ይጠቀማሉ። Attached-picture cover streams ሊጫወቱ የሚችሉ
እጩዎች አይደሉም። ሊጫወቱ የሚችሉ ሁሉም streams ገደቦቹን ማሟላት አለባቸው፣ እና ግልጽ default stream
ከወሳኙ ዝቅተኛ-index fallback በፊት ይመረጣል። ቪዲዮዎች በ600 ሰከንዶች፣ በእያንዳንዱ ልኬት
8,192 pixels፣ እና 33,554,432 የምንጭ pixels ይገደባሉ። FFmpeg 1–16 የመሃል-ነጥብ JPEG framesን ናሙና ይወስዳል፣
ትናንሽ ግቤቶችን ሳያሳድግ ረጅሙን ጠርዝ ቢበዛ ወደ1,024 pixels ያሳንሳል፣ እና URL
ፈጽሞ አይቀበልም። Sampling በነባሪ `uniform` ነው። አማራጭ የሆኑት
`scene_aware` እና የሙከራ `segment_aware` policies አስቀድሞ በተረጋገጠው አካባቢያዊ stream ላይ አንድ ተጨማሪ
ቋሚ የFFmpeg pass ያከናውናሉ፣ ገደብ ያላቸውን `showinfo` scene timestamps ይመርጣሉ፣ እና detector failure፣ timeout፣
የተበላሸ output ወይም ባዶ candidate set ሲኖር በወሳኝ ሁኔታ ወደ ተመሳሳዩ uniform midpoints ይመለሳሉ።
Segment-aware mode የmidpoint samplesን ከተረጋገጡት scene intervals ጋር በተመጣጣኝ ሁኔታ ይመድባል፤
segment-aware evidence እና fallback ባህሪ ከዚህ በታች በዝርዝር ቀርበዋል። ጥብቁ የ16-frame ገደብ
በእያንዳንዱ policy ውስጥ ከምርጫው በኋላ ይተገበራል። scene-aware ጥያቄ የአንድ-frame በጀት ብቻ ሲኖረው፣
የንቁውን ሙሉ-ቪዲዮ ወይም focus window uniform midpoint ይጠቀማል እና `policyEffective: uniform` ብሎ ሪፖርት ያደርጋል፦
አንድ የተመረጠ scene frame ሁለቱንም የጊዜ ጫፎች ማቆየት አይችልም። ጠሪው ከፈለገ
ውስን focus window (`start`/`end` ሰከንዶች) ማቅረብ ይችላል፤ ወሰኖቹ ከmedia duration ጋር እንዲጣጣሙ ይገደባሉ፣
የተገለበጡ ወይም ወሰን-አልባ windows ውድቅ ይደረጋሉ፣ እና ሁሉም sampling
policies የሚከናወኑት በnormalized interval ውስጥ ብቻ ነው። የተገኘው
window በsampling metadata እና እምነት በማይጣልበት description
prefix ውስጥ ይካተታል፣ በዚህም downstream models ትኩረት የተደረገበትን excerpt ከሙሉ
timeline መለየት ይችላሉ።

የsemantic caption ትኩረት የተለየና ግልጽ setting ነው። ነባሪው `full`
analysis mode ነባሩን frame prompt ይጠብቃል እና የጥያቄ ጽሑፍን ወደ caption model ፈጽሞ አያስተላልፍም።
በ`focused` mode፣ bridge የሚያነበው ከተመሳሳዩ Chat ወይም Responses
container ውስጥ ያለውን፣ በተጠቃሚው የተጻፈ የቅርብ ጊዜ ባዶ ያልሆነ `text`/`input_text` ብቻ ነው፤ ወደ NFC
normalize ያደርገዋል፣ control characters እና whitespaceን ያጠቃልላል፣ እና በ500 Unicode code points ይገድበዋል።
ባዶ ውጤት ወደ ትክክለኛው `full` prompt ይመለሳል። ጥቅም ላይ ሊውል የሚችል hint
በተለየ እምነት በማይጣልበት-user-context block ውስጥ እንደ JSON ይቀመጣል፣ እና በእይታ ሊረጋገጡ ለሚችሉ ዝርዝሮች ብቻ
ቅድሚያ ሊሰጥ ይችላል፤ በmedia ውስጥ የሚታዩ ወይም የሚሰሙ መመሪያዎችን አለመከተል የሚለውን የተለየ ማስጠንቀቂያ
መሻር አይችልም። Textual focus `start`/`end`ን ፈጽሞ አይገምትም ወይም
temporal samplerን አይለውጥም።

#### FU-07 መዋቅራዊ የsegment ማስረጃ

`segment_aware` አስቀድሞ በተረጋገጠው የአካባቢ ቪዲዮ ዥረት ላይ አንድ የተገደበ ቅድመ-ትንተና ዙር ይጠቀማል። ቋሚው የማጣሪያ ሰንሰለት በመጀመሪያ ስፋቱን ከ320 ፒክሰሎች ያልበለጠ እንዲሆን ያመጣጥናል፣ የትዕይንት ለውጦችን እና የቀዘቀዙ ክፍተቶችን ይለያል፣ ከዚያም ለብዥታ፣ ለአማካይ የብርሃን መጠን እና ለቦታዊ/ጊዜያዊ መረጃ በሰከንድ 1 ፍሬም ናሙና ይወስዳል። ዙሩ በ600 መዋቅራዊ ናሙናዎች፣ በአንድ FFmpeg/ማጣሪያ ክር፣ በተመሳሳዩ `file`-ብቻ ፕሮቶኮል እና የኮንቴይነር ፈቃድ ዝርዝሮች፣ በ1 MiB የሂደት ውጤት ገደብ እና በደላላው የጋራ ማቋረጫ/የጊዜ ገደብ ውስጥ ቢበዛ በ30 ሰከንዶች የተገደበ ነው። ከጥያቄው ምንም ትዕዛዝ፣ ማጣሪያ፣ ዱካ ወይም URL ፈጽሞ አይቀበልም።

መዋቅራዊ እሴቶቹ የሚወሰኑ የናሙና ማስረጃዎች እንጂ የቪዲዮውን ትርጉም መረዳት አይደሉም። ርዕሰ ጉዳዮችን፣ ድርጊቶችን፣ መግለጫ ጽሑፎችን፣ ንግግርን ወይም የተጠቃሚ ዓላማን አይገምቱም። የትዕይንት እና የመቀዝቀዝ ድንበሮች ክፍሎችን ይመሰርታሉ፤ የመቀዝቀዝ ሽፋን፣ ብዥታ፣ የብርሃን መጋለጥ፣ ቦታዊ ዝርዝር እና ጊዜያዊ ለውጥ በነባሩ የ1–16 ፍሬሞች በጀት አመዳደብ ላይ ብቻ ተጽዕኖ ያሳድራሉ። ሙሉ በሙሉ የቀዘቀዘ ክፍል በአንድ ፍሬም ይገደባል፣ ያልቀዘቀዙ ክፍሎች ግን ለቀሪው በጀት ይወዳደራሉ። ድንበሮች ከፍሬሞች በቁጥር ሲበልጡ፣ በመጀመሪያ የሚከሰቱ ፈጣን ቅየራዎች ረጅም የመጨረሻ ክፍልን እንዳይደብቁ ወጥ የጊዜ መስመር ሽፋን ይጠበቃል። ከመቀዝቀዝ ድንበር የ1 ሰከንድ የትንተና ጥራት ውስጥ ያሉ የትዕይንት ድንበሮች ይዋሃዳሉ።

የጎደሉ ማጣሪያዎች፣ በተሳሳተ ቅርጽ ያለ/ባዶ ማስረጃ፣ የመለያ ስህተት ወይም የተገደበው የቅድመ-ትንተና ጊዜ ማብቃት በክፍት ሁኔታ በትክክል ወደ ወጥ የመካከለኛ ነጥብ ፖሊሲ እንዲመለስ ያደርጋሉ። የጠሪ ማቋረጥ ወይም የደላላ የጊዜ ገደብ ግን በክፍት ሁኔታ አያሳልፍም፦ በሂደት ላይ ያለውን ንዑስ ሂደት ያቋርጣል፣ ቀጣይ የፍሬም ማውጣትን ይከለክላል፣ እና የግል ጊዜያዊ ማውጫው በ`finally` ውስጥ ይወገዳል።

`scripts/perf/video-bridge-fu07-eval.ts` ከድግግሞሽ ማስወገድ በኋላ የመግለጫ ጽሑፍ ጥሪ ቁጠባን፣ የጥቅጥቅ እንቅስቃሴ በጀት አመዳደብን፣ የብዥታ/የብርሃን መጋለጥ/SI-TI ማስረጃን፣ ረጅም መጨረሻ ያላቸውን ፈጣን ቅየራዎች እና ቀስ በቀስ የመደብዘዝ የውሸት አዎንታዊ ውጤቶችን ለመፈተሽ የሚወሰኑ እውነተኛ FFmpeg የሙከራ ንብረቶችን ያመነጫል። የቅድመ-ትንተና አጠቃላይ ጊዜን እና `/usr/bin/time` በሚገኝበት ቦታ የልጅ ሂደቱን CPU እና ከፍተኛውን RSS ይመዘግባል። የጥራት ፍተሻዎቹ መዋቅራዊ መመዘኛዎች ብቻ ናቸው። ይህ የሙከራ ስርዓት የተፈቀደለት መዳረሻ ነጥብ ወይም የተቀመጠ ዳኛ ስለሌለው፣ የእውነተኛው የመግለጫ ጽሑፍ ሞዴል ጥራት `HOLD` ሆኖ ይቆያል። `--caption-cost-per-call-usd` ግልጽ አዎንታዊ የእያንዳንዱን ጥሪ ወጪ ግምት ካላቀረበ በስተቀር፣ የገንዘብ ቁጠባም `HOLD` ሆኖ ይቆያል፤ ስክሪፕቱ ከሁለቱም ውጤቶች አንዱንም አይፈበርክም።

እያንዳንዱ ፍሬም በ4 MiB፣ ሁሉም ጥሬ ፍሬሞች በአንድ ላይ በ23 MiB፣ እና ተከታታይ የተደረገው የደላላ ምላሽ በ32 MiB የተገደበ ነው። የግል ጊዜያዊ ማውጫ በ`finally` ውስጥ ይወገዳል። OmniRoute FFmpegን አብሮ አያካትትም እና ብጁ የሚፈጸም ፋይል ዱካ አይቀበልም። የመግለጫ ጽሑፍ ከማዘጋጀቱ በፊት፣ ድልድዩ ጥንቃቄ የተሞላበት የምስል ድግግሞሽ ማስወገጃ ዙር ይተገብራል፦ እያንዳንዱ JPEG ወደ 16×16 ግራጫ-ደረጃ ቋት ይቀነሳል እና ከመጨረሻው ከተያዘው ፍሬም ጋር ብቻ ይነጻጸራል። ከአንድ ፍሬም በላይ ለሆነ የመግለጫ ጽሑፍ በጀት፣ የማውጣት ሂደቱ እስከ በጀቱ እጥፍ ድረስ እና ፈጽሞ ከ16 ፍሬሞች ያልበለጠ የተገደበ የእጩዎች ስብስብ ያቀርባል። የተጠየቀው ከፍተኛ ገደብ የሚተገበረው ድግግሞሽ ከተወገደ በኋላ ብቻ ሲሆን፣ በጀቱ ቢያንስ ሁለት ሲሆን በመጨረሻው ቅነሳ ወቅት የመጀመሪያው እና የመጨረሻው የተመረጡ እጩዎች ይጠበቃሉ። ስሪት ያለው `grayscale-16x16-mean-cells-v2` ፖሊሲ ከአማካይ የብርሃን መጠን ልዩነት እና መደበኛ የተደረገው ልዩነታቸው ቢያንስ 0.05 ከሆነው የድንክዬ ምስል ሕዋሳት ጥምርታ መካከል ትልቁን ይጠቀማል። የድግግሞሽ መጠነ-ገደቡ ቋሚው 0.04 ሲሆን፣ እንደ የአሂድ ጊዜ ቅንብር ከመቅረብ ይልቅ ሊተነበይ ስለሚችል የተመረጠ ነው። ይህ ሁለተኛ ከፍተኛ-ንፅፅር ምልክት፣ በአማካይ ብቻ የሚደረግ ንጽጽር ሊደብቃቸው የሚችላቸውን ትንንሽ እንቅስቃሴዎች እና የሚታይ ጽሑፍ ለውጦችን ይጠብቃል። የማነጻጸሪያ ወይም የመፍቻ ስህተቶች በክፍት ሁኔታ በማለፍ ሽፋኑን ይጠብቃሉ። የውጤት ሜታዳታ የተወጡ እጩዎችን፣ በተሳካ ሁኔታ ጥቅም ላይ የዋሉ ፍሬሞችን እና የተወገዱ የምስል ድግግሞሾችን ለይቶ ያሳያል።

በግልጽ ሁኔታ ምልክት የተደረገበት የቪዲዮ ክፍል የጊዜ ማህተም ያለው የእውቂያ ሉህ ሊጠይቅ ይችላል። ድልድዩ ቢበዛ ባለ4-ዓምድ፣ ባለ16-ፍሬም JPEG ፍርግርግ ይገነባል። እያንዳንዱ ባለ512-ፒክሰል ሕዋስ የምንጩን የጊዜ ማህተም ከፍተኛ-ንፅፅር ባለው የታችኛው ክፍል ላይ ያትማል፣ ተመሳሳይ የጊዜ ማህተሞችም በቀጣይ ለሚደረግ ግንኙነት እና ኦዲት በጽሑፋዊ ሜታዳታ ውስጥ ይቆያሉ። ሙሉው JPEG በ32 MiB የተገደበ ሆኖ ይቆያል። `sharp` ፍርግርጉን መፍታት ወይም ማቀናበር ካልቻለ፣ ድልድዩ ወደ ነጠላ JPEG ፍሬሞች ይመለሳል፤ የደንበኛ ማቋረጥ ግን አሁንም በሉሁ ክዋኔ ውስጥ ይተላለፋል።

የማስተዋወቂያ ማስረጃ ከተቀነባበረው ጥቃቅን የአፈጻጸም ሙከራ ሆን ተብሎ ተለይቷል። `scripts/perf/video-bridge-contact-sheet-eval.ts` ለእውነተኛ OpenAI-ተኳሃኝ የእይታ ሞዴሎች ስኪማ-ስሪት ያለው የA/B የሙከራ ስርዓት ይገልጻል። በአቅራቢው የተዘገቡ ቶከኖችን፣ ከጫፍ እስከ ጫፍ ያለውን አጠቃላይ መዘግየትን (የሉህ ማቀናበርን ጨምሮ)፣ የሞዴል ጥሪዎችን ብዛት እና በማኒፌስት የተገለጸውን የእውነታ ማቆየት ይለካል። ጥሬ የሞዴል ምላሾች ወደ ሪፖርቱ አይጻፉም፤ የሚቀመጡት SHA-256 ዲጄስቶች እና ተዛማጅ የእውነታ መታወቂያዎች ብቻ ናቸው። `--execute-real` ካልተላለፈ እና `--model`፣ `OMNIROUTE_BASE_URL` እና `OMNIROUTE_API_KEY` ካልተዋቀሩ በስተቀር፣ የሙከራ ስርዓቱ ምንም የአውታረ መረብ ወይም የሚከፈልበት የሞዴል ጥሪ አያደርግም። ያለዚያ ግልጽ እውነተኛ ሙከራ፣ በማሽን የሚነበበው ውሳኔው `HOLD` ሆኖ ይቆያል፤ የተቀነባበረ የመረጃ ጭነት/የጥሪ ብዛት መለኪያዎች ብቻቸውን የማስተዋወቂያ ማስረጃ አይደሉም።

ጠሪዎች አስቀድመው የተመሳሰለ ጽሑፍ ካላቸው፣ አማራጭ የሆነ `transcript.cues` ድርድር ከሚደገፍ የቪዲዮ ክፍል ጋር ማያያዝ ይችላሉ። እያንዳንዱ ፍንጭ `text`፣ በተመረመረው ቆይታ ውስጥ ያለ ውሱን `start`/`end` ክፍተት እና በፈቃድ ዝርዝር የተካተተ `source` (`client`፣ `embedded` ወይም `audio-bridge`) መያዝ አለበት፤ `confidence` በነባሪ `1` ሲሆን በ`0` እና `1` መካከል መቆየት አለበት። ፍጹም ተመሳሳይ ፍንጮች ይዋሃዳሉ። OmniRoute ከዚህ ሜታዳታ የጽሑፍ ቅጂ ማዘጋጀትን ፈጽሞ አይጀምርም፦ የተረጋገጡ ፍንጮች ከምንጫቸው፣ ከእምነት ደረጃቸው እና ከጊዜ ክፍተታቸው ጋር ወደ ተገለጸው ውጤት ይገለበጣሉ፣ እና ከፍሬም መግለጫ ጽሑፎች ጎን እንደ የማይታመኑ ምልከታዎች ይቀርባሉ። ልክ ያልሆነ፣ ከክልል ውጪ የሆነ ወይም የመነሻ ማረጋገጫ የሌለው ጽሑፍ ከመግለጫ ጽሑፍ ዥረቱ ጋር ከመቀላቀል ይልቅ ውድቅ ይደረጋል። የ`source` መስኩ በአሁኑ ጊዜ በጠሪው የሚገለጽ እንጂ በአገልጋዩ የተረጋገጠ አይደለም፦ OmniRoute እሴቱ ከሦስቱ የተፈቀዱ ሕብረቁምፊዎች አንዱ እንዲሆን ያስገድዳል፣ ነገር ግን የ`embedded` ወይም `audio-bridge` መለያ በእርግጥ በአገልጋዩ ባለቤትነት ካለው የማውጣት ሂደት መምጣቱን እስካሁን በምስጠራ አያረጋግጥም። ያ ማረጋገጫ እስኪተገበር ድረስ `source`ን እንደማይታመን ፍንጭ ይመልከቱት፤ የፈቃድ ውሳኔዎችን በእሱ ላይ አይመስርቱ።

የላቀ ጠሪ ለተመሳሳዩ ቪዲዮ አስቀድሞ ፈቃድ የተሰጠውን `audioTranscript` ትራክ ሊያቀርብ ይችላል። የውህደት ማገናኛው የእይታ እና የድምፅ ምልከታዎችን በአንድ የጊዜ ገደብ እና የማቋረጫ ምልክት ስር ያስኬዳል፣ በአንድ የጋራ የጊዜ መስመር ላይ ይደረድራቸዋል፣ ፍጹም ተመሳሳይ ቅጂዎችን ያጣምራል፣ እና አንድ ወገን ብቻ ሲሳካ ከፊል ውጤት ሪፖርት ያደርጋል። ልክ ያልሆነ `audioTranscript` ወደዚያ ከፊል ውጤት ዝቅ ይላል — የእይታ መግለጫው ይቀመጣል፣ የድምፅ ቅርንጫፉም የጸዳ የውድቀት ኮድ ይመዘግባል — ሙሉውን ቪዲዮ ከማሳካት ይልቅ። የእያንዳንዱ ቅርንጫፍ ተገኝነት፣ የከፊል ውጤት ምልክት፣ እና የጸዱ የውድቀት ኮዶች በተገለጸው ውጤት፣ በመከላከያ ደንብ ዲበ-ውሂብ (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`)፣ በውጤት-መሸጎጫ ዲበ-ውሂብ፣ እና በማገናኛው የውህደት ቆጣሪዎች ውስጥ ይጠበቃሉ። ነባሪው የVideo Bridge መንገድ ንግግር-ወደ-ጽሑፍን አይጠራም ወይም ሁለተኛ የሚዲያ ቅጂን አያወርድም፤ ያለዚያ ግልጽ ትራክ፣ ለቪዲዮ-ብቻ ሆኖ ይቆያል።

**የጽሑፍ ቅጂ ማቆየት (#12150 P1)።** Video Bridge (ራሱ በምርጫ የሚነቃ) የጽሑፍ ቅጂ ምልክትን ባቀረበ ቁጥር ይህ በራስ-ሰር ተግባራዊ ይሆናል — የተለየ የማቆያ ምልክት የለም። አንድ ጥያቄ ማንኛውንም የጽሑፍ ቅጂ ምልክት (በጠሪ የታወጀ `transcript` ወይም የተዋሃደ `audioTranscript`) ሲያቀርብ፣ መከላከያ ደንቡ `videoBridgeObserved` ብሎ ምልክት ያደርግበታል እና የቪዲዮ መግለጫውን የተደበቀ ጥላ ቅጂ ያዘጋጃል — የእያንዳንዱ ምልክት ነፃ-ጽሑፍ አካል በ`[redacted-video-transcript]` የተተካበት ተመሳሳይ አቀራረብ፤ ይህም ሕብረቁምፊው ከመገጣጠሙ በፊት የተዋቀረውን የምልክት መስክ በመተካት የሚገነባ ነው (የተዘረጋውን ጽሑፍ በመተንተን ፈጽሞ አይደለም፤ ስለዚህ `]` የያዙ እንደ `[inaudible]`/`[music]` ያሉ አካላትን ጨምሮ፣ ጠላትነት ያለውም ሆነ መደበኛ የምልክት ይዘት ሊተርፍ አይችልም)። የሚቆየው የጥሪ-ምዝግብ ጥያቄ አካል ከቪዲዮ የተገኘውን እያንዳንዱን የጽሑፍ ክፍል በይዘት እኩልነት ከሚዛመደው የተደበቀ ጥላ ቅጂ ጋር ይለውጣል፤ የ`fullText` መልሕቅ ከተጠናቀቀው የቅድመ-ጥሪ መከላከያ ደንብ ጭነት እንደገና ይነበባል፣ በመሆኑም ቀጣይ የሰንሰለት መከላከያ ደንቦች (የPII እና የማረጋገጫ መረጃ ደባቂዎች፣ ቅድሚያዎች 10/95) የመግለጫውን ጽሑፍ በቦታው ላይ እንደገና ከጻፉ በኋላ እና የስርዓት-ጥያቄ/ርክክብ/ማህደረ ትውስታ ማስገባት የመልዕክት ድርድሩን ከቀየረ በኋላም ማዛመዱ ይሳካል። ወደ ሞዴሉ የሚላከው አካል አይለወጥም። የታየ ጥያቄ ዘላቂ Memory አይሞላም (ከጥያቄም ሆነ ከምላሽ የሚመነጭ ማውጣት ይዘለላል)፣ ስለዚህ የሞዴሉ የራሱ ምላሽ የጽሑፍ ቅጂውን ጽሑፍ ወደ Memory እንደገና ሊያስተጋባ አይችልም።

**ጥሬ የቪዲዮ መስኮች (#12430)።** ማገናኛው ሲነቃ እና ቤተኛ የቪዲዮ ድጋፍ ያልታወቀ ወይም የሌለ ሲሆን፣ የተገለጹ `transcript`/`audioTranscript` መስኮችም፣ የመግለጫ ውድቀት ወይም የ`maxVideos` ገደብ ከተከሰተ በኋላም፣ `videoBridgeObserved`ን ያነቃሉ። `null` እና ባዶ ሕብረቁምፊዎች ይቆጠራሉ፤ የሌሉ መስኮች እና ቪዲዮ-ያልሆነ ዲበ-ውሂብ አይቆጠሩም። የሚቆዩ ቅጂዎች እነዚህን መስኮች ይደብቃሉ ወይም ጥያቄውን ይተዋሉ፣ እና መሸጎጫዎች/Memory ይታለፋሉ። የአቅራቢው ጭነት ሳይለወጥ ይቆያል።

ተጨማሪ የሚቆዩ ቅጂዎች ተመሳሳዩን የታየ-ጥያቄ ምልክት ይጠቀማሉ። ጥሬው የቅድመ-መከላከያ-ደንብ የደንበኛ-ጥያቄ ቅጽበተ-ምስል፣ በማህደረ ትውስታ ያለው በመጠባበቅ ላይ ያለ ጥያቄ፣ እና ቀደም ብሎ የተቀበለው ውድቅ-የተደረገ-ጥያቄ ምዝግብ በቪዲዮ ክፍሎች ውስጥ ያሉ የጽሑፍ ቅጂ መስኮችን በመዋቅር ይተካሉ፤ በፓይፕላይን ደረጃዎች እና በዐውድ ርክክብ የሚፈጠሩ የሕብረቁምፊ ጥያቄዎች በሚቆየው-የጥያቄ-አካል መዳረሻ ላይ ይደበቃሉ። የሚቆየው `video_content_removed` ምልክት፣ `previous_response_id` ቀጣይነት ሆን ተብሎ የተወገደውን ጽሑፍ እንደገና ከመገንባት ይልቅ በደህንነት ዝግ እንዲሆን ያደርጋል። አንድ የታየ ጥያቄ ከመመዝገቡ በፊት የእያንዳንዱን ክፍል የድበቃ ጥላ ቅጂ ካጣ፣ ወይም ከብዙ የቪዲዮ ጥላ ቅጂዎች አንዱ እንኳ ከቀጣይ የጥያቄ ለውጦች በኋላ መዛመድ ካልቻለ፣ በከፊል የተደበቀ የጽሑፍ ቅጂ ከማቆየት ይልቅ የሚቆየው የጥያቄ አካል ሙሉ በሙሉ ይተዋል።

ለታየ ጥያቄ፣ የሞዴል ምላሽ ያለ የተዋቀረ የምልክት ድንበር የጽሑፍ ቅጂውን ማንኛውንም ክፍል ሊጠቅስ ይችላል። ስለዚህ የሚቆየው የጥሪ-ምዝግብ `responseBody` በመተው ምልክት ይተካል፤ ዝርዝር የፓይፕላይን ቅርስ (የአቅራቢ/ደንበኛ አካላትን እና የዥረት ቁርጥራጮችን ሊያካትት የሚችል) አይቆይም። የፍቺ፣ የድጋሚ-ጥሪ-ደህንነት፣ እና የአመክንዮ-ድጋሚ-ማጫወት መሸጎጫዎች ለዚያ ጥያቄ ንባብን እና ጽሑፍን ያልፋሉ። የአቅራቢው ጥያቄ እና ለደንበኛው የሚታየው ምላሽ ሳይለወጡ ይቆያሉ። ዝርዝር ቅርሱ ሲተው፣ ቀደም ብለው የሚመጡ የkeepalive ባይቶች ከጊዜያዊው ቋት ይፈስሳሉ። የKiro ያልተስተካከለ EventStream ማስጠንቀቂያ የጭነቱን የባይት ብዛት ብቻ ያሳውቃል፤ ይዘቱን ወይም የJSON ተንታኙን ጥሬ ስህተት ፈጽሞ አያሳውቅም።
ይህ እያንዳንዱ ያልተዛመደ የአቅራቢ/ፕለጊን ምርመራ ኦዲት ተደርጓል ብሎ አይናገርም፤ ሰፊው የሚቆዩ-መዳረሻዎች ፍተሻ በ#11658 ውስጥ ክትትል ይደረግበታል።

ውስጣዊው `/api/modality-bridge/video/drilldown` የሕይወት ዑደት የተለየ፣ በloopback/token ማረጋገጫ የተጠበቀ የመሸጎጫ መሠረት ነው። እያንዳንዱ ክዋኔ ቀኖናዊ ግልጽ ያልሆነ የዋና ተጠቃሚ መለያንም ይፈልጋል። አንድ የምርት ጠሪ ከመንቃቱ በፊት፣ ያንን መለያ ከተረጋገጠው ተከራይ ማመንጨት አለበት፣ እና ደንበኛው የመረጠውን እሴት ፈጽሞ ማስተላለፍ የለበትም። የመሸጎጫ ቁልፎች ያንን ዋና ተጠቃሚ ከቀኖናዊ የክፍለ-ጊዜ እና የቪዲዮ-ማጣቀሻ መለያዎች ጋር ያስተሳስራሉ፣ በSHA-256 የተመነጩ ቁልፎቻቸውን ብቻ ያከማቻሉ፣ እና ንባብንም ሆነ ስረዛን ለተመሳሳዩ ዋና ተጠቃሚ ይገድባሉ። መሸጎጫው በእያንዳንዱ ግቤት ከተመነጩ የJPEG ፍሬሞች ቢበዛ 16 ያከማቻል፣ ከአሥር ደቂቃ በኋላ ጊዜያቸውን ያሳልፋል፣ እና የተገደቡ `start`/`end` ንባቦችን ወይም ግልጽ የክፍለ-ጊዜ ስረዛን ይደግፋል።

እያንዳንዱ ዋና ተጠቃሚ በ16 ግቤቶች እና 64 MiB ቀኖናዊ የJPEG ውሂብ ይገደባል። እነዚያ ገደቦች ከዓለም-አቀፉ የ64-ግቤት/256 MiB ጣሪያ ነጻ ናቸው፤ የዋና ተጠቃሚ ኮታ ጫና፣ ዓለም-አቀፍ የLRU ማስወጣት ከመታሰቡ በፊት፣ የዚያን ዋና ተጠቃሚ በቅርብ ጊዜ በትንሹ ጥቅም ላይ የዋሉ ግቤቶችን ብቻ ያስወጣል። ጊዜያቸው ያለፈባቸው ግቤቶች በመሸጎጫ እንቅስቃሴ ጊዜ ከዋና ተጠቃሚውም ሆነ ከዓለም-አቀፍ ሂሳብ ይጸዳሉ፣ ማቋረጥ እና የማረጋገጫ ውድቀት ግን ከፊል ምትክን አያጸድቁም።

መሸጎጫው መደበኛ ያልሆነ Base64ን፣ ከመጠን ያለፈ paddingን፣ JPEG ያልሆነ ሚዲያን፣ የተበላሹ ወይም
የተቆረጡ JPEGዎችን፣ እንዲሁም ገደብ ባለው የሙሉ ምስል `sharp`
decode ወቅት ማስጠንቀቂያ የሚያስከትሉ JPEGዎችን አይቀበልም። እያንዳንዱን ተቀባይነት ያገኘ ምስል እንደ መደበኛ JPEG ዳግም encode ያደርጋል፣ በጠሪው መስኮች ከመተማመን ይልቅ ስፋትንና ቁመትን
ከdecoded bytes ያገኛል፣ እንዲሁም ተከታይ polyglot bytesን ከማቆየት ይልቅ ያስወግዳል። በገደብ ውስጥ ያለው መደበኛ compressed buffer ብቻ
በሁለቱም ኮታዎች ላይ ይቆጠራል። የJSON wire ገደቡ ለ32 MiB
decoded-input ከፍተኛ ገደብ የBase64 overheadን ያካትታል። እያንዳንዱ
የተከማቸ derivation የተረጋገጠውን የJPEG ቅርጸት/ጥራት፣ የsampling ፖሊሲ፣
የderivation ስሪት፣ የመፍጠሪያ ጊዜ፣ በserver የተሰላ content hash፣ እና hashed parent
referenceን ከታመነው ጠሪ parent-content hash ጋር ይመዘግባል። ከatomic cache commit በፊት ባሉ
asynchronous decode/hash ደረጃዎች መካከል cancellation ይፈተሻል።

ይህ tranche እስካሁን የproduction producerን ከroute ጋር አላገናኘም፣ እንዲሁም
multi-resolution variant selectionን አያቀርብም። ስለዚህ transparent Video Bridge request
path ምንም ተጨማሪ ሥራ አያስከትልም፤ tenant-bound principal derivation እና
ሙሉው የFU-08 multi-resolution lifecycle እንደ የተጠናቀቀ ባህሪ ከመመዝገብ ይልቅ
ግልጽ የተከታይ ሥራዎች ሆነው ይቀራሉ።

ፍሬሞች በተዋቀረው የVideo ሞዴል በቅደም ተከተል caption ይደረጋሉ። ባዶ
የVideo override የVision ቅንብሩን ይወርሳል፤ ሁለቱም ባዶ ከሆኑ፣ የVision
auto-router ውጤታማውን vision-capable ሞዴል ይመርጣል። የተሳኩ captions
ዋናውን part በቋሚ `[Video description:` prefix ይተካሉ፤ ይህም
ጽሑፉን ያልታመነ ከሚዲያ የመነጨ ምልከታ እንደሆነ ይለያል እና downstream
ሞዴሎች በሚዲያው ውስጥ ያሉ መመሪያዎችን እንዳይከተሉ ይነግራቸዋል። የframe-caption cache keys
የJPEG bytesን፣ promptን፣ timestampን እና ውጤታማውን ሞዴል ያካትታሉ፤ የተሳኩ
captions ብቻ በመሸጎጫ ይቀመጣሉ። የመሸጎጫ ግቤቶች fallback modelን ጨምሮ
በትክክል የተሳካውን producer model ይይዛሉ፤ የተለያዩ ፍሬሞች
በተለያዩ ሞዴሎች ሲፈጠሩ bridgeው `mixed` ብሎ ሪፖርት ያደርጋል። cache hit
ያንን producer identity እንደተጠየቀው routing plan ዳግም ሳይሰይም እንደገና ይጠቀምበታል። የሙሉ ቪዲዮ ውጤት
መሸጎጫው ውጤቱን በሚቀይሩ ሁሉም ግብዓቶች — prompt፣ ውጤታማ
ሞዴል፣ sampling policy፣ frame count፣ semantic analysis mode፣ የnormalized focus hint
SHA-256 fingerprint፣ focus window፣ `transcript`፣
`audioTranscript`፣ እና contact-sheet flag — ላይ key ይደረጋል፤ ስለዚህ ከእነዚህ
መጠኖች ማናቸውንም መቀየር cache miss እንጂ አሮጌ ውጤትን ዳግም መጠቀም አይሆንም። የvisual dedup policy
ስሪት፣ threshold፣ እና ገደብ ያለው candidate-frame count በ
result-cache key እና metadata ውስጥም በግልጽ ይካተታሉ፤ ስለዚህ የፖሊሲ ለውጥ አሮጌ
የሙሉ ቪዲዮ መግለጫን እንደገና መጠቀም አይችልም። የResult-cache v4 metadata modeን እና
fingerprintን ይይዛል፣ ጥሬውን የተጠቃሚ ተግባር ግን ፈጽሞ አይዝም። የGuardrail metadata የተጠየቀውንም ሆነ
ውጤታማውን analysis mode ሪፖርት ያደርጋል፤ ጥቅም ላይ የሚውል የተጠቃሚ ጽሑፍ የሌለው የተጠየቀ `focused` mode
በውጤታማነት `full` እንደሆነ ሪፖርት ይደረጋል።

guardrailው እያንዳንዱን የሚደገፍ video part ያወጣል፣ ነገር ግን ከ
`modalityBridgeVideoMaxVideos` በላይ አይገልጽም።
`supportsVideo === false` እንዳለው ለተረጋገጠ target፣ ያልተሳኩ እና ከገደብ በላይ የሆኑ ቪዲዮዎች
ጥሬ ቪዲዮ እንዳይቀር ግልጽ ወደሆኑ safe text markers ይቀየራሉ። capabilityው የማይታወቅ ሲሆን፣ እነዚያ parts
ሳይነኩ ይቀራሉ። `supportsVideo === true` ያላቸው targets bridgeውን ያልፋሉ።
የclient request abort signal በdownload፣ broker queue፣
subprocesses እና caption calls በኩል ይተላለፋል፤ aborts በቪዲዮዎች መካከል ያቆማሉ እና ፈጽሞ ወደ ጥሬ
ሚዲያ fail open አያደርጉም።

የRuntime ቅንብሮች DB-backed እና Zod-validated ናቸው፦

| ቁልፍ                                 | ነባሪ         | ክልል / ባህሪ                                                                                |
| ----------------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | አማራጭ runtime፣ በምርጫ የሚነቃ                                                                  |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` አጠቃላይ captionsን ይጠብቃል፤ `focused` ገደብ ያለውን፣ ያልታመነ የቅርብ ጊዜ የተጠቃሚ አውድ ይጠቀማል          |
| `modalityBridgeVideoModel`          | `""`        | የVision Bridge ሞዴልን ይወርሳል                                                                |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                     |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`፣ `scene_aware`፣ ወይም ተመጣጣኝ `segment_aware`፤ detector failure ወደ `uniform` ይመለሳል |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                      |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                           |

ከ120 ሰከንድ በላይ የሆኑ Legacy persisted Video timeout እሴቶች በ
broker deadline ላይ ይገደባሉ፤ ከዚያ ገደብ በላይ የሆኑ አዳዲስ settings writes ውድቅ ይደረጋሉ።
`GET /api/modality-bridge/video/runtime` ከauthentication ወይም runtime probing
በፊት trusted stamped loopback localityን ይጠይቃል፣ ከዚያም management
authን ይጠይቃል። runtimeው በማይገኝበት ጊዜ `available`ን፣ የተጣሩ FFmpeg/ffprobe versionsን እና ቋሚ
ምክንያትን ብቻ ይመልሳል። ውስጣዊው extraction endpoint ይፋዊ upload API
አይደለም፦ queue saturation `503`ን ከ`Retry-After` ጋር ይመልሳል፣ የጠሪ
disconnect `499`ን ይመልሳል፣ እና ቋሚው broker deadline `504`ን ይመልሳል። የተቀየሩ responses
Vision ወይም Audio segmentsን ሳያስወግዱ `video->text;model=<visionModel>;parts=<videos>`ን ወደ ማዕከላዊው
`x-omniroute-modality-bridge` header ያክላሉ።

### PII መሸፈኛ (`piiMasker.ts`)

በ**ሁለቱም** ደረጃዎች ላይ ይሰራል።

- **`preCall`** ፔይሎዱን clone በማድረግ `system`፣ `messages`፣ `input` እና
  `prompt`ን (ተራ የሕብረቁምፊ ንጥሎችንም ጨምሮ) ይዳስሳል፣ እንዲሁም በሕብረቁምፊ
  `content`/`text` መስኮች ላይ `processPII()`ን (ከ
  `@/shared/utils/inputSanitizer`) ይተገብራል። `PII_REDACTION_ENABLED=true`
  ሲሆን፣ የተገኘ PII ከውጭ በሚላከው ፔይሎድ ውስጥ ይደበቃል። ይህ
  ከ`INPUT_SANITIZER_MODE` (የፕሮምፕት-ኢንጀክሽን ፖሊሲን ብቻ ከሚቆጣጠረው)
  ነፃ ነው። መደበቅ ሲጠፋ፣ ጥሪው ይዘቱን ሳይቀይር የተገኙትን ብዛቶች
  ይመዘግባል።
- **`postCall`** ምላሹን deep-clone በማድረግ `sanitizePIIResponse()`ን እና
  የResponses-API ቅርጽ መደበቂያውን (`maskResponsesOutput` —
  `output_text`ን እና `output[].content[].text`ን ይሸፍናል) ያስኬዳል። ማንኛውም
  መደበቅ ከተከሰተ፣ የተሻሻለው ምላሽ ዋናውን ይተካል።

የጥበቃ መስመሩ ፈጽሞ አያግድም፤ ማብራሪያ ብቻ ያክላል
(`meta.detections`፣ `meta.redacted`) ወይም እንደገና ይጽፋል።

### የፕሮምፕት ኢንጀክሽን (`promptInjection.ts`)

በተጠቃሚ በቀረበ ይዘት ውስጥ ያሉ ጠላትነት ያላቸውን አወቃቀሮች ያገኛል እና
የተዋቀረውን ፖሊሲ ያስፈጽማል። ባህሪው በአካባቢ ተለዋዋጮች እና በconstructor
አማራጮች ይወሰናል፦

| ቅንብር     | የአካባቢ ተለዋዋጭ                                                                                           | ነባሪ    | ተጽዕኖ                                                                                                                                                         |
| -------- | ----------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ነቅቷል     | `INPUT_SANITIZER_ENABLED`                                                                             | `true` | `false` ሲሆን፣ የጥበቃ መስመሩ ሂደቱን በአጭሩ ያቋርጣል።                                                                                                                      |
| ሁነታ      | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn` | የኢንጀክሽን ፖሊሲ፦ `block`፣ `warn` ወይም `log`። (`redact` ለኋላ-ተኳኋኝነት ተቀባይነት አለው፣ ነገር ግን የኢንጀክሽን ጽሑፍን **አያስወግድም**፤ የጥያቄ PII ዳግም መጻፍ በ`PII_REDACTION_ENABLED` ይቆጣጠራል።) |
| የማገድ ገደብ | `blockThreshold` አማራጭ / `INPUT_SANITIZER_BLOCK_THRESHOLD` (ተለዋጭ ስም `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | ለማገድ የሚያስፈልገው ዝቅተኛው የክብደት ደረጃ። መካከለኛ በነባሪው የምልከታ-ብቻ ነው።                                                                                                      |

**የሁነታ ቅድሚያ** (`getMode`)፦ የጠሪው `options.mode` →
`INJECTION_GUARD_MODE` **የDB feature-flag ሽረት** (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` አካባቢ → `INPUT_SANITIZER_MODE` አካባቢ →
`warn`። ስለዚህ የDashboard ሽረት ከአካባቢ ተለዋዋጮቹ ይቀድማል፤ በዚህም Feature
Flags UI እየሠራ ያለውን ጥበቃ ወዲያውኑ ይቆጣጠራል (ዳግም ማስጀመር አያስፈልግም)።
የDB ንባብ fail-safe ነው፦ ስህተት ካጋጠመው፣ ጥበቃው በአካባቢ-ላይ ወደተመሠረተው
ባህሪ ይመለሳል፤ ሽረት ባልተዘጋጀበት ጊዜ ደግሞ ባህሪው ከአካባቢ-ብቻ ውሳኔ ጋር
ተመሳሳይ ነው።

የማግኛ ምንጮች፦

1. `sanitizeRequest()` ከ`@/shared/utils/inputSanitizer` (በpipeline ውስጥ
   በሌላ ቦታ ጥቅም ላይ የሚውል የጋራ የመመርመሪያ ስብስብ)።
2. አብሮገነብ `DEFAULT_GUARD_PATTERNS` (በአሁኑ ጊዜ
   `system_override_inline` እና `markdown_system_block`፣ ሁለቱም `high`
   የክብደት ደረጃ አላቸው)።
3. በconstructor አማራጮች በኩል የሚተላለፉ አማራጭ `customPatterns`
   (ሕብረቁምፊዎች፣ regex ወይም `{ name, pattern, severity }` መዝገቦች)።

`mode === "block"` ሲሆን **እና** ቢያንስ አንድ ግኝት የክብደት ገደቡን
ሲያሟላ፣ `preCall` `{ block: true, message: "ጥያቄው ውድቅ ተደርጓል፦
አጠራጣሪ ይዘት ተገኝቷል" }`ን ይመልሳል። በ`warn`/`log` ሁነታዎች የጥበቃ
መስመሩ መዝገብ ያስቀምጣል፣ ነገር ግን ጥሪውን ይፈቅዳል። በregistry ውስጥ
ሳያልፉ ፕሮምፕቶችን መገምገም ለሚፈልጉ ጠሪዎች የጋራ ረዳቱ
`evaluatePromptInjection()` እንዲሁ ወደ ውጭ ይላካል።

**የፍተሻ ወሰን (v3.8.20)፦** መመርመሪያው ከተጣመረው የፕሮምፕት ጽሑፍ
ውስጥ **የመጀመሪያውን 16 KB** ብቻ ይመረምራል — በ
`src/shared/utils/inputSanitizer.ts` ውስጥ
`MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes)።
`detectInjection()` እና `evaluatePromptInjection()` ሁለቱም የpattern loopን
ከማስኬዳቸው በፊት `slice(0, MAX_INJECTION_SCAN_BYTES)`ን ይጠቀማሉ።
የኢንጀክሽን መመሪያዎች ከግቤት አናት አካባቢ ስለሚገኙ፣ ይህ የማግኘት ብቃትን
ሳያዳክም ባለብዙ-መቶ-KB ፔይሎዶች ላይ የregex CPU/GCን ይገድባል
(#3932፣ #4041ን ይመልከቱ)።

### የማረጋገጫ መረጃ መደበቂያ (`credentialMasker.ts`)

በ**ሁለቱም** ደረጃዎች ላይ፣ በነባሪው ሰንሰለት መጨረሻ (ቅድሚያ `95`)
ይሠራል። በሰፊው የሚታወቁ የAPI-key / secret-token patternsን ከውጭ
በሚላከው ፔይሎድ (የመልዕክት ይዘት፣ የtool-call arguments፣ የtool ውጤቶች)
**እና** ከአቅራቢው ምላሽ ውስጥ ይደብቃል፤ ስለዚህ ወደ ፕሮምፕት የተለጠፈ
የማረጋገጫ መረጃ (ወይም በtool ውጤት ተመልሶ የተላከ) ወደላይ ላለው
አቅራቢ ወይም ወደ ደንበኛው ተመልሶ አይጋለጥም።

- **በግልጽ ፈቃድ ብቻ የሚነቃ**, ከPII ማደብዘዝ ጋር ተመሳሳይ ስምምነት (ከHard Rule #20 ጋር የተያያዘ)፦
  `settings.credentialRedactionEnabled === true` **ወይም**
  `CREDENTIAL_REDACTION_ENABLED=true` ካልሆነ በስተቀር የተሰናከለ ነው። ሲጠፋ መከላከያው ምንም ድርጊት አይፈጽምም —
  ፈጽሞ አያግድም እና ፈጽሞ እንደገና አይጽፍም።
- `redactCredentials()` ሙሉውን የpayload/response ዛፍ (`walkValue()`፣
  ከprototype pollution የተጠበቀ፣ `WeakSet`ን በመጠቀም ከዑደት የተጠበቀ) ይዳስሳል፣ እና የተዛመዱ እሴቶችን
  በ`[REDACTED:<type>]` ቦታ ያዥ ይተካል፤ በትክክል የተለወጡትን ቅርንጫፎች ብቻ
  ይቀዳል።
- `CREDENTIAL_PATTERNS` የLLM አቅራቢ ቁልፎችን (OpenAI፣ OpenAI-proj፣
  Anthropic፣ Google፣ Hugging Face፣ Replicate)፣ የVCS/SaaS ቶከኖችን (GitHub፣ Slack፣
  Linear፣ Notion፣ npm፣ Postman፣ Discord)፣ የክፍያ ቁልፎችን (Stripe፣ Square)፣ የcloud
  ቁልፎችን (AWS access key፣ Twilio፣ SendGrid፣ Mailgun)፣ private keys / JWTs፣
  የመግቢያ መረጃ ያካተቱ connection strings (`mongodb://user:pass@...`፣ ወዘተ)፣ እና
  አጠቃላይ የ`Authorization`/`x-api-key`/`api-key`/`apikey` header-value
  patternን ይሸፍናል። Header-ቅርጽ ያላቸው ቁልፎች (`authorization`፣ `x-api-key`፣ `api-key`፣
  `apikey`) በአጠቃላይ የጽሑፍ regex ከመደብዘዝ ይልቅ በመዋቅራዊ መንገድ ይደበዝዛሉ (እሴቱ ብቻ፣ እንደ
  `Bearer `/`Basic ` ያለ የscheme ቅድመ ቅጥያ ይጠበቃል)።
- መከላከያው ፈጽሞ አያግድም፤ እንደገና የሚጽፈው (`modifiedPayload` /
  `modifiedResponse`) እና ማብራሪያ የሚያክለው (`meta.credentialsRedacted`፣ `meta.count`) ብቻ ነው።

የRegression መከላከያ፦ `tests/unit/credential-masker-guardrail.test.ts`።

## መሠረታዊ ውል (`base.ts`)

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
  block?: boolean; // true ሰንሰለቱን ወዲያውኑ ያቋርጣል
  message?: string; // ሲታገድ ይታያል
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // ጥያቄውን እንደገና ለመጻፍ በ-preCall ይመለሳል
  modifiedResponse?: TValue; // ምላሹን እንደገና ለመጻፍ በ-postCall ይመለሳል
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

አንድ guardrail `void`፣ `{}` ወይም `{ block: false }` በመመለስ "ለውጥ የለም" የሚል ምልክት ይሰጣል። `modifiedPayload`/`modifiedResponse` መመለስ በሰንሰለቱ ውስጥ ወደ ታችኛዎቹ guardrails የሚተላለፈውን እሴት ይተካል።
`signal?: AbortSignal` የጠሪውን የሕይወት ዑደት ወደ guardrails ያስተላልፋል። የጥያቄ ማቋረጥ ሆን ተብሎ የተደረገው ክፍት-በመተው የሚሳካ ልዩ ሁኔታ ነው፦ የሚዲያ ማገናኛዎች ሥራቸውን ያቆማሉ እና ያጸዳሉ፤ ጥሬ ሚዲያን እንደማይደግፈው ወደሚታወቅ ዒላማ ግን አይመልሱም።

## መዝገብ (`registry.ts`)

ብቸኛው `guardrailRegistry` የሚከተሉትን ያቀርባል፦

- `register(guardrail)` — guardrail ያክላል (ወይም በመደበኛ የስም ቅርጹ መሠረት ይተካል)፣ ከዚያም በ`priority` ከዝቅተኛ ወደ ከፍተኛ እንደገና ይደረድራል።
- `clear()` / `list()` — የአስተዳደር ረዳት መሣሪያዎች።
- `runPreCallHooks(payload, context)` — ንቁ guardrailsን በየተራ ያካሂዳል፣ payloadን በ`modifiedPayload` በኩል ያስተላልፋል፣ እና በመጀመሪያው `block: true` ላይ ያቆማል።
- `runPostCallHooks(response, context)` — በምላሹ በኩል ተመሳሳይ ፍሰትን ይከተላል።
- `resetGuardrailsForTests({ registerDefaults })` — ለንጹሕ የሙከራ ማግለል ሁኔታውን ያጸዳል፣ እና እንደ አማራጭ ነባሪዎቹን እንደገና ይመዘግባል።

ሁለቱም አስኪያጆች `{ blocked, payload|response, results, guardrail?, message? }` ይመልሳሉ፤ በዚህ ውስጥ `results` ለእያንዳንዱ guardrail `blocked`፣ `skipped`፣ `modified`፣ `error` እና `meta` መስኮችን የሚያካትቱ የ`GuardrailExecutionResult` መዝገቦች ድርድር ሲሆን፣ ለክትትል ጠቃሚ ነው።

### Guardrailsን በእያንዳንዱ ጥያቄ ማሰናከል

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` ለአሁኑ ጥያቄ መዝለል ያለባቸውን የguardrail ስሞች ድግግሞሽ የተወገደለት ዝርዝር ያሰባስባል። ምንጮቹ (ሁሉም አማራጭ፣ ሁሉም የሚዋሃዱ)፦

- `apiKeyInfo.disabledGuardrails`
- የጥያቄ አካል `disabledGuardrails` (ከፍተኛ ደረጃ)
- የጥያቄ አካል `metadata.disabledGuardrails`
- ራስጌ `x-omniroute-disabled-guardrails` (ወይም የቀድሞው
  `x-disabled-guardrails`)

እሴቶቹ የሕብረቁምፊዎች ድርድር ወይም በኮማ የተለየ ሕብረቁምፊ ሊሆኑ ይችላሉ፤ ስሞች ወደ ትንሽ ፊደል kebab-case (`pii_masker` → `pii-masker`) ይደበኛሉ። ውጤቱ በ`context.disabledGuardrails` በኩል ወደ መዝገቡ ይተላለፋል፤ መዝገቡም ተዛማጅ guardrailsን ይዘላል (`skipped: true` በ`results` ውስጥ)።

## የአፈጻጸም ቅደም ተከተል

በ`src/sse/handlers/chat.ts` እና
`open-sse/handlers/chatCore.ts` በኩል ለሚያልፍ ለእያንዳንዱ ጥያቄ፦

1. `resolveDisabledGuardrails(...)` ከAPI ቁልፍ፣ ከbody እና
   ከheaders የመዝለያ ዝርዝሩን ይገነባል።
2. `guardrailRegistry.runPreCallHooks(body, ctx)` guardrailsን በቅድሚያ
   ደረጃቸው ከዝቅተኛ ወደ ከፍተኛ ቅደም ተከተል ያስኬዳል፦
   - የተሰናከሉ guardrails እንደ `skipped` ይመዘገባሉ።
   - የእያንዳንዱ guardrail `preCall` በ`modifiedPayload` አማካኝነት payloadን እንደገና ሊጽፍ ይችላል።
   - የመጀመሪያው `block: true` ሰንሰለቱን ወዲያውኑ ያቋርጣል፣ እና handlerው
     የguardrail ውድቅ ማድረጊያ ምላሽ ይመልሳል።
3. (ሊሻሻል የሚችለው) payload ወደ combo routing እና upstream
   dispatch ይገባል።
4. ምላሹ ከተዋቀረ በኋላ፣ `guardrailRegistry.runPostCallHooks(...)`
   በምላሹ ላይ ያንኑ ሰንሰለት ያስኬዳል። እዚህ ያለ `block: true` የupstream
   ምላሹን ይጥላል።

ስህተት የሚያስነሱ guardrails በ`error: <message>` ይመዘገባሉ፣ እንዲሁም በ
`logger.warn` በኩል log ይደረጋሉ፤ ነገር ግን ሰንሰለቱ ይቀጥላል — ይህ በንድፍ fail-open ነው።

## ውቅር

አብሮ በተሰሩት guardrails የሚነበቡ የአካባቢ ተለዋዋጮች፦

| ተለዋዋጭ                                 | የሚጠቀምበት                   | ውጤት                                                                                        |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | ማወቂያውን ሙሉ በሙሉ ለማሰናከል `false` ያድርጉ።                                                         |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | የinjection ፖሊሲ፦ `warn`፣ `block` ወይም `log`። የቀድሞው `redact` እሴት የinjection ጽሑፍን እንደገና አይጽፍም። |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | የinjection guard ሁነታ፤ እንዲሁም የenv varsን **የሚሽር** የDB feature flag ነው (DB > ENV)።            |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | `MODE=block` ውድቅ የሚያደርገው ዝቅተኛው የከባድነት ደረጃ፦ `high` (ነባሪ)፣ `medium` ወይም `low`።               |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | የ`INPUT_SANITIZER_BLOCK_THRESHOLD` የቀድሞ alias።                                             |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | `true` ሲሆን፣ በጥያቄው ውስጥ ያለ PII ይሰወራል (ከinjection ሁነታ ነጻ ነው)።                                 |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | በምላሽ በኩል ያለውን masker ባህሪ ይቆጣጠራል።                                                           |

የModality Bridge guardrails የruntime ውቅርን ከDB-backed settings
store (`getSettings()`) ያነባሉ፣ ከenv vars አይደለም። የVision ዋና ቁልፎች
`modalityBridgeVisionEnabled`፣ `modalityBridgeVisionMode`፣
`modalityBridgeVisionModel`፣ `modalityBridgeVisionTaskAware`፣
`modalityBridgeVisionPrompt`፣ `modalityBridgeVisionTimeout`፣
`modalityBridgeVisionMaxImages`፣ `modalityBridgeVisionMaxChars`፣
`modalityBridgeCacheEnabled`፣ `modalityBridgeCacheTtlMinutes` እና
`modalityBridgeCacheMaxEntries` ናቸው። የቀድሞዎቹ
`visionBridge*` ቁልፎች በሰነድ እንደተገለጸው ለአንድ ዑደት የንባብ
fallback ብቻ ተቀባይነት አላቸው፤ dashboard ጽሁፎች ዋና ቁልፎቹን ይጠቀማሉ። ነባሪዎቹ እና fallback
resolverው በ`src/shared/constants/modalityBridgeDefaults.ts` ውስጥ ይገኛሉ፣ የቀድሞ
constants ደግሞ በ`src/shared/constants/visionBridgeDefaults.ts` ውስጥ ተይዘዋል።

Audio `modalityBridgeAudioEnabled`፣ `modalityBridgeAudioModel`፣
`modalityBridgeAudioTimeout` እና `modalityBridgeAudioMaxClips`ን፣ እንዲሁም የጋራ
`modalityBridgeCache*` settingsን ይጠቀማል። እነዚህ
ቁልፎች ከModality Bridge schema ጋር ስለተዋወቁ፣ Audio የቀድሞ ቁልፍ fallback የለውም።

Video `modalityBridgeVideoEnabled`፣ `modalityBridgeVideoAnalysisMode`፣
`modalityBridgeVideoModel`፣
`modalityBridgeVideoFrameCount`፣ `modalityBridgeVideoSamplingPolicy`፣
`modalityBridgeVideoMaxVideos` እና
`modalityBridgeVideoTimeout`ን፣ እንዲሁም የጋራ `modalityBridgeCache*` settingsን ይጠቀማል።
FFmpeg/ffprobe አማራጭ የክወና
ጥገኞች በመሆናቸው፣ እንዲሁም የframe captioning መዘግየትን እና የmodel ወጪን ስለሚጨምር፣ በነባሪ ተሰናክሏል።

## ብጁ መከላከያዎች

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

ደረጃዎች፦

1. `BaseGuardrail`ን የሚወርስ `src/lib/guardrails/myGuardrail.ts` ይፍጠሩ።
2. `preCall` እና/ወይም `postCall`ን ይተግብሩ።
3. በመጫን ጊዜ ይመዝግቡ (`registerDefaultGuardrails` ውስጥ ያክሉ) ወይም
   በአሂድ ጊዜ `guardrailRegistry.register(...)`ን ይጥሩ — መዝገቡ ተመሳሳይ መደበኛ የተደረገ ስም ያለውን
   ቀደምት መከላከያ ይተካል።
4. ሙከራዎችን በ`tests/unit/` ስር ያክሉ (ያሉ ምሳሌዎች፦
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`)።

## ሙከራ

ከታወቀ ሁኔታ ለመጀመር በሙከራዎች መካከል `resetGuardrailsForTests()`ን ይጠቀሙ።
ባዶ መዝገብ ለመጀመር `{ registerDefaults: false }`ን ያስተላልፉ እና
በሙከራ ላይ ያሉትን መከላከያዎች ብቻ ይመዝግቡ። Vision Bridge የጥገኝነት
ማስገባትን (`deps.getSettings`, `deps.callVisionModel`) ይቀበላል፤ Audio Bridge ደግሞ
ለቅንብሮች፣ ችሎታዎች፣ የSTT ሞዴል ምርጫ፣ የማረጋገጫ መረጃ
ፍተሻዎች እና ወደ ጽሑፍ መቀየር ተመጣጣኝ የማስገቢያ ነጥቦችን ያቀርባል። ስለዚህ ሙከራዎች ያለ DB
ወይም የአውታረ መረብ መዳረሻ ሁለቱንም ፍሰቶች ሊፈትኑ ይችላሉ።

## በተጨማሪ ይመልከቱ

- `src/lib/guardrails/` — ትግበራ
- `src/shared/utils/inputSanitizer.ts` — የprompt-injection እና PII መሸፈኛን የሚያንቀሳቅስ
  የጋራ ማወቂያ
- `src/shared/constants/visionBridgeDefaults.ts` — የVision Bridge ነባሪዎች እና
  የግዳጅ-ድልድይ ሞዴል ዝርዝር
- `src/shared/constants/modalityBridgeDefaults.ts` — የጋራ Vision/Audio የአሂድ ጊዜ ነባሪዎች
- `docs/architecture/RESILIENCE_GUIDE.md` — ራሱን የቻለ ንብርብር (የወረዳ መቋረጫ፣ የማቀዝቀዣ ጊዜያት)
- `docs/reference/ENVIRONMENT.md` — ሙሉ የenv var ማጣቀሻ

## የInjection-guard መስመር ሽፋን እና red-team (Phase 8 · Block D)

injection-guard (`createInjectionGuard` / `withInjectionGuard`) የተጠቃሚ መጠየቂያዎችን የሚቀበሉ ሁሉንም መስመሮች
ይሸፍናል። `INJECTION_GUARD_MODE`ን ያከብራል (ነባሪ `warn` = መዝገብ ላይ ማስፈር ብቻ፤
`block` = HTTP 400 `SECURITY_001`ን ይመልሳል)።

| ዓይነት     | መስመሮች                                                                                                                                                | ነባሪ ሁነታ |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| ጽሑፍ (ያለ) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn    |
| አመንጪ     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn    |
| ውሂብ      | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn    |

የጽሑፍ ማውጣት (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`ን ይሸፍናል።

**Red-team (በየሌሊቱ፣ `nightly-llm-security.yml`)፦** promptfoo እያንዳንዱ መስመር
በ`INJECTION_GUARD_MODE=block` ውስጥ የOWASP-LLM ኮርፐስን እንደሚከለክል ያረጋግጣል፤ garak ምርመራዎችን ያካሂዳል (ሚስጥር ከሌለ ይዘላል)።
`moderations` ለወጥነት ተካትቷል — በblock-mode ያሉ ኦፕሬተሮች
በ`resolveDisabledGuardrails` በኩል ነፃ ሊያደርጉት ይችላሉ።

የሌሊቱ የስራ ፍሰት (`.github/workflows/nightly-llm-security.yml`፣ cron + በእጅ
ማስጀመሪያ) ሁለት ስራዎች አሉት፦

- **`promptfoo-guard` (ከልካይ)** — `promptfoo eval -c promptfooconfig.yaml`ን
  በ`INJECTION_GUARD_MODE=block` ያሂዳል። እያንዳንዱ ተቃዋሚ የሙከራ ሁኔታ (ለምሳሌ፣ "ignore all
  previous instructions…", የDAN ቅጥ ያላቸው jailbreaks) ምላሹ
  `error.code === "SECURITY_001"`ን እንደያዘ ያረጋግጣል፣ ማለትም መከላከያው ጥያቄውን በትክክል ውድቅ አድርጓል።
- **`garak` (አማካሪ)** — garakን ከአካባቢያዊ OmniRoute አጋጣሚ (`http://localhost:20128/v1`) ጋር
  `--probes promptinject,dan,leakreplay` በመጠቀም ያሂዳል። በአቅራቢ ሚስጥር
  (`PROMPTFOO_PROVIDER_KEY`) ላይ የተመሠረተ ነው፤ ሚስጥሩ ከሌለ ያለችግር ይዘላል እና
  `|| true` ይታከልበታል፣ ስለዚህ CIን ሳያሳክት ሪፖርት ያደርጋል።

የመከላከያ ረዳቱ (`createInjectionGuard` / `withInjectionGuard`) ሽፋን
መጠየቂያ የያዙ ሁሉንም `/v1` መስመሮች ያካትታል፤ የመጠየቂያ ጽሑፍ በ
`src/shared/utils/inputSanitizer.ts` ውስጥ ባለው `extractMessageContents()` አማካኝነት ከ
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ይወጣል።
