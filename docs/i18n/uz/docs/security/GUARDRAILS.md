# Guardrails (Oʻzbekcha)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Haqiqatning asosiy manbasi:** `src/lib/guardrails/`
> **Soʻnggi yangilanish:** 2026-08-29 — v3.8.51 (Video Bridge transkriptining kelib chiqishi chaqiruvchi tomonidan eʼlon qilinadi,
> server tomonidan hali tasdiqlanmaydi — #11661 ga muvofiq aniqlashtirildi)

Guardrail’lar OmniRoute va yuqori oqim provayderlari oʻrtasidagi chegarada xavfsizlik, siyosat va kontent oʻzgartirishlarini taʼminlaydi. Har bir guardrail soʻrov yuklamalarini (`preCall`) va yuqori oqim javoblarini (`postCall`) tekshirishi (hamda ixtiyoriy ravishda rad etishi, oʻzgartirishi yoki izoh bilan belgilashi) mumkin.

Tizim **xatoda ochiq qoladi**: agar guardrail bajarilish vaqtida istisno chiqarsa, registr xatoni qayd etadi va soʻrovni muvaffaqiyatsiz yakunlash oʻrniga keyingi guardrail bilan davom etadi. Bloklash tasodif emas, balki aniq qarordir (`block: true`).

## Oʻrnatilgan himoya cheklovlari

Registr import paytida ustuvorlik tartibida oltita himoya cheklovini avtomatik yuklaydi
(`registry.ts` → `registerDefaultGuardrails()` ga qarang):

| Ustuvorlik | Nomi                | Bosqich(lar)   | Fayl                  |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Ustuvorlik raqami kichikroq boʻlganlar **birinchi** bajariladi.

### Tasvir koʻprigi (`visionBridge.ts`) — Modallik koʻprigi PR-1

**Tasvirlarni qoʻllamaydigan modellarga** yoʻnaltirilgan, tasvirlarni oʻz ichiga olgan
soʻrovlarni ushlab qoladi va butun soʻrovni tasvirlarni qoʻllaydigan modelga
qayta yoʻnaltiradi yoki yuqori oqim chaqiruvidan oldin tasvir qismlarini
sozlanadigan tasvir modeli yaratgan matnli tavsiflar bilan almashtiradi. Bu faqat
matn bilan ishlaydigan provayderlarga multimodal foydali yuklamalarni shaffof tarzda
qayta ishlash imkonini beradi.

Oqim:

1. Maqsad model allaqachon tasvirlarni qoʻllasa, oʻtkazib yuboriladi (u
   majburiy koʻprik roʻyxati `isVisionBridgeForcedModel` ichida boʻlmasa).
2. Tasvir qismlarini `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`) orqali ajratib oladi; u combo moslik filtri bilan
   baham koʻriladigan yagona ishonchli manba — `open-sse/utils/mediaParts.ts`
   ichidagi **yagona media detektori** `detectMediaParts()` ga vakolat beradi.
   Ajratib olish faqat `replaceImageParts` qayta joylashtira oladigan shakllarning
   yuqori darajadagi qismlari bilan cheklangan (ajratish↔almashtirish shartnomasi):
   OpenAI `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` va Responses API `input_image`. Ichma-ich topilmalar va
   faqat indikatorli shakllar combo filtri uchun material hisoblanadi va hech
   qachon ajratib olinmaydi. Hech narsa topilmasa, oʻtkazib yuboriladi.
3. Ishlash vaqti konfiguratsiyasini `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) orqali aniqlaydi: yangi
   `modalityBridge*` sozlama kalitlari ustunlik qiladi; eski `visionBridge*`
   kalitlari **bir siklli zaxira variant** (orqaga qaytish oynasi) sifatida
   saqlanadi. Koʻprik oʻchirilgan boʻlsa, har qanday media boʻylab yurishdan
   oldin oʻtkazib yuboriladi.
4. Rejim selektori (`modalityBridgeVisionMode`, quyidagi jadvalga qarang)
   qayta yoʻnaltirish yoki tavsiflashni tanlaydi. Qayta yoʻnaltirish faqat `model`
   almashtirilgan `modifiedPayload` va `{ rerouted, fromModel, toModel, imagesKept }`
   metamaʼlumotlarini qaytaradi.
5. Tavsiflash yoʻli: tasvirlar sonini `maxImages` bilan cheklaydi, vazifani hisobga
   oluvchi promptni tuzadi, tavsif keshini tekshiradi, tasvir modelini **parallel**
   (`Promise.allSettled`) chaqiradi va ularning oʻrniga `[Image N]: <description>`
   matn qismlarini kiritadi. Muvaffaqiyatsiz tavsiflash `null` qaytaradi va asl
   tasvir qismi **saqlanadi** (#4012), combo tavsiflash yoʻlida barcha tavsiflashlar
   muvaffaqiyatsiz boʻlgan holat bundan mustasno: bunda tasvirlarni qoʻllamasligi
   tasdiqlangan yuqori oqimga uning oʻrniga
   `(mavjud emas — tasvirlarni qoʻllaydigan provayder ulanmagan)` toʻldiruvchisi
   yuboriladi (#8430).
6. `modifiedPayload` va metamaʼlumotlarni (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) qaytaradi.

#### Rejim selektori (`modalityBridgeVisionMode`)

| Rejim      | Standart | Xatti-harakat                                                                                                                                                                                                                                                                                                                                                 |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Eski evristika, oʻzgartirilmagan (#6640/#7204): combo boʻlmagan/`auto/` modellar eng yaxshi tasvir modeliga qayta yoʻnaltiriladi, asl modelda foydalanishga yaroqli hisob maʼlumotlari mavjud boʻlgan holat bundan mustasno (bunda tavsiflanadi); combo maqsadlar doimo tavsiflanadi.                                                                         |
| `describe` |          | Doimo tavsiflaydi — qayta yoʻnaltirish bloki butunlay oʻtkazib yuboriladi; har doim foydalanuvchi tanlagan model javob beradi.                                                                                                                                                                                                                                |
| `reroute`  |          | Majburiy qayta yoʻnaltirish: hisob maʼlumotlariga ega modelni saqlash tekshiruvi chetlab oʻtiladi. Qayta yoʻnaltirish **maqsadi** uchun hisob maʼlumotlari tekshiruvi hali ham qoʻllanadi — foydalanishga yaroqli tasvir maqsadi mavjud boʻlmasa, xom tasvirlar faqat matnli backendga hech qachon yetib bormasligi uchun soʻrov tavsiflashga oʻtadi (#8430). |

Majburiy rejimlar avtomatik evristika ishga tushishidan **oldin** bajarilishni
qisqa tutashtiradi; `auto` xatti-harakati PR-1 dan oldingi himoya cheklovi bilan
bayt darajasida bir xil.

#### API kaliti qamrovi (`visionBridgeKeyScope.ts`)

Chaqiruvchining API kaliti `allowedConnections`, kvota havzalari
(`allowedQuotas`) yoki modellarni (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) cheklaganda, koʻprik
faqat kalit foydalanishi mumkin boʻlgan, kalit foydalanishi mumkin boʻlgan
ulanishlardagi qayta yoʻnaltirish va tavsiflash modellarini tanlaydi. Shundan soʻng
tavsiflash chaqiruvi har doim OmniRoute oʻz-oʻziga aylanishi orqali
`x-omniroute-self-loop-key-id` sarlavhasi bilan oʻtadi, shu sababli qabul qiluvchi
chat soʻrovi ushbu kalitning ulanish va model siyosatini yana bir bor majburiy
qoʻllaydi. `enforceApiKeyPolicy()` ushbu sarlavhani faqat oʻz-oʻziga aylanish
bearer’i bilan birga tan oladi, shu sababli u faqat kirishni toraytirishi mumkin;
topilmaydigan id esa rad etiladi.

Agar kalit uchun hech qanday tasvir modeliga ruxsat berilmagan boʻlsa, tavsiflash
yoʻli chetga chiqadi va soʻrov oʻzgartirilmasdan oʻtadi; bu oʻchirilgan himoya
cheklovidagi kabi ochiq qoldirish xatti-harakatidir (metamaʼlumot:
`{ skipped: true, reason: "no_permitted_vision_model" }`).
Kalitsiz soʻrovlar va ushbu cheklovlarga ega boʻlmagan kalitlar avvalgidek
ishlaydi.

#### Vazifani hisobga oluvchi tavsiflash prompti (`modalityBridgeVisionTaskAware`)

Standart qiymat — **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) asosiy tavsiflash promptiga **foydalanuvchining oxirgi xabari** matnini (500 ta belgigacha qisqartirib) qoʻshadi, shu orqali tavsifni foydalanuvchi haqiqatda soʻragan narsaga yoʻnaltiradi (codex-vision-proxy andozasi) va vision modelidan koʻrinib turgan matnni transkripsiya qilishni soʻraydi. Bayroq oʻchirilgan boʻlsa yoki foydalanuvchi matni mavjud boʻlmasa, asosiy prompt oʻzgartirilmasdan ishlatiladi.

Tavsiflash self-loop’ining OpenAI bilan mos keluvchi oʻz soʻrovi (`visionBridgeHelpers.ts` ichidagi `callVisionModelSingle()`) har doim `image_url.detail: "high"` qiymatini soʻraydi — barcha chaqiruvchilar/provayderlar uchun shartsiz, hech qanday mijoz signaliga bogʻlanmagan holda. Past tafsilotli namuna olish aynan ushbu prompt soʻraydigan matn transkripsiyasi vazifasi uchun OCR aniqligini pasaytiradi, shu sababli dastlabki kiruvchi soʻrovda qanday tafsilot darajasi ishlatilganidan qatʼi nazar, tavsiflash chaqiruvi doimo yuqori tafsilot darajasini soʻraydi. Bu faqat ichki tavsiflash soʻrovi tanasiga taʼsir qiladi; OmniRoute chaqiruvchining asosiy soʻrovdagi oʻz `image_url.detail` qiymatini qanday uzatishini oʻzgartirmaydi — bu standart qiymat alohida ravishda va faqat aniqlangan OpenCode mijozlari uchun `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`) ichida qoʻllanadi. Tavsiflash self-loop’ining Anthropic wire-format tarmogʻida `detail` maydoni yoʻq va unga ikkala standart qiymat ham taʼsir qilmaydi.

#### Tavsif chiqishi cheklovi (`modalityBridgeVisionMaxChars`)

| Kalit                          | Standart qiymat | Oraliq             |
| ------------------------------ | --------------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`             | `0` yoki 100–50000 |

`0` (standart qiymat) **cheklov yoʻq** degan maʼnoni anglatadi — `callVisionModel()` qaytargan tavsif oʻzgartirilmasdan uzatiladi va mavjud xatti-harakat saqlanadi. 100–50000 oraligʻidagi har qanday qiymat tavsif `[Image N]: <description>` koʻrinishida qayta qoʻshilishidan oldin uni `…` suffiksi bilan qisqartiradi (`src/lib/guardrails/visionBridge.ts` ichidagi `VisionBridgeGuardrail.preCall()`). Quyi oqim modeli toʻliq transkripsiyaga muhtoj boʻlgan tafsilotlarga boy OCR vazifalari uchun bu qiymatni oshiring; koʻp matn chiqaradigan vision modellarida token sarfini cheklash uchun uni kamaytiring. Boshqaruv panelidagi maydon Vision yorligʻining Advanced panelida joylashgan (`ModalityBridgeVisionTab.tsx` ichidagi `modality-bridge-max-chars`) va aniq koʻrsatilgan `0` qiymatiga tegmagan holda 1 dan 99 gacha boʻlgan har qanday qiymatni eng kam 100 qiymatigacha oshiradi — `0` shunchaki “oʻrnatilmagan” standart qiymat emas, balki mustaqil ravishda yaroqli Zod qiymatidir (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`).

#### Tavsif keshi (`modalityBridge/bridgeCache.ts`)

Tavsif natijalari uchun xotiradagi LRU + TTL keshi; butun jarayon miqyosida umumiy ishlatiladi. Kalit = `sha256(imageRef + composedPrompt + configuredBridgeModel)`, uzunlik prefiksli freyming bilan (maydon chegaralari toʻqnashuvi yoʻq). Model komponenti amalda javob bergan model emas, balki **sozlangan** bridge modelidir — `callVisionModel` ichki ravishda zaxira variantga oʻtishi mumkin va har bir urinish boʻyicha kalit yaratish keshni parchalab yuboradi. Muvaffaqiyatsiz tavsiflar hech qachon keshlanmaydi. Sozlamalar:

| Kalit                           | Standart qiymat | Oraliq  |
| ------------------------------- | --------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`          | —       |
| `modalityBridgeCacheTtlMinutes` | `60`            | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`           | 10–5000 |

#### Masofaviy tasvirni normallashtirish (self-loop tavsifi/base64 yuklab olish)

Bridge **masofaviy** tasvirni oʻzi yuklab olganda — Anthropic tavsiflash self-call’i va claude-wire-format uchun base64 konvertatsiyasi (`ensureBase64ImagesForClaudeWire`), ikkalasi ham `visionBridgeHelpers.ts` ichidagi `fetchRemoteImageAsDataUri()` orqali — hosil boʻlgan data URI vision modeli soʻroviga joylashtirilishidan oldin `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) orqali oʻtkaziladi. Haddan tashqari katta tasvirlarning **uzun qirrasi 2048px** boʻlguncha oʻlchami kichraytiriladi (OpenAI/Anthropic server tomonida allaqachon qoʻllaydigan oʻlcham chekloviga mos), bu vision modeli koʻradigan narsani oʻzgartirmasdan yuklash baytlari va kechikishini kamaytiradi. Oʻlchamni oʻzgartirish dinamik import orqali yuklanadigan `sharp` yordamida amalga oshiriladi: uning native binary fayli yuklanmaydigan platformada `normalizeDataUri()` **hech qachon xato tashlamaydi** — u asl baytlarni oʻzgartirmasdan uzatishga qaytadi, shu sababli tavsiflash/base64-konvertatsiya yoʻli doimo ishlashda davom etadi. Tasvir boʻlmagan baytlar (dekodlanadigan tasvir qaytarmagan yuklab olish natijasi) ham oʻzgartirilmasdan uzatiladi. Bu normallashtirish faqat bridge oʻz self-call’i uchun yuklab oladigan tasvirlarga tatbiq etiladi — u chaqiruvchining oʻzgartirilmasdan uzatiladigan xom payload’iga hech qachon qoʻllanmaydi, bu faqat ixtiyoriy mutatsiya tamoyiliga mos keladi (Hard Rule #20).

#### Sozlamalar sxemasi + migratsiya

Yangi `modalityBridge*` kalitlari `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`) ichida Zod orqali validatsiya qilinadi: `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCache*` uchligi va Audio Bridge ishlatadigan `modalityBridgeAudio*` guruhi. `141_modality_bridge_settings.sql` migratsiyasi mavjud eski `visionBridge*` qiymatlarini mos keluvchi yangi kalitlarga nusxalaydi (idempotent, operator oʻrnatgan `modalityBridge*` qiymatini hech qachon qayta yozmaydi); eski kalitlar bir reliz sikli davomida oʻqish uchun zaxira variant sifatida qabul qilinishda davom etadi.

#### Shaffoflik sarlavhasi + statistika

Tavsiflash orqali oʻzgartirilgan javoblarda
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
sarlavhasi mavjud (`modalityBridge/bridgeStats.ts` ichidagi `buildModalityBridgeHeader()` tomonidan yaratiladi, `src/sse/handlers/chatHelpers.ts` ichidagi `withModalityBridgeHeader()` tomonidan qoʻshiladi).
Qayta yoʻnaltirilgan soʻrovlar **hech qanday** sarlavha olmaydi — payload oʻzgartirilmagan va modelning almashtirilgani javob tanasidagi `model` maydonida allaqachon koʻrinadi.

`GET /api/modality-bridge/stats` (`GET /api/settings` bilan bir xil darajadagi
boshqaruv autentifikatsiyasi) `vision`, `audio` va `video` uchun xotirada
saqlanadigan har bir modallikka oid
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` hisoblagichlarini qaytaradi.
`averageLatencyMs` maxraji sifatida barcha urinishlardan emas, `latencySamples`dan
foydalanadi; vaqt o‘lchanmagan operatsiya soxta nol millisekundlik namuna
yaratmaydi. `bridged` muvaffaqiyatli konvertatsiyalar uchun orqaga mos taxallus
bo‘lib qoladi; muvaffaqiyatsiz urinishlar uni oshirmaydi.
Hisoblagichlar dizayn bo‘yicha jarayon qayta ishga tushirilganda tiklanadi
(bu hisob-kitob emas, telemetriya).

#### Boshqaruv paneli konfiguratsiyasi

Maxsus boshqaruv paneli sahifasi:
`/dashboard/settings/modality-bridge`. Uning URL orqali boshqariladigan `Vision`,
`Audio` va `Video` varaqlari `tab` qiymatini almashtirishda so‘rov parametrlarini
saqlab qoladi. Vision varag‘i yoqish/o‘chirish, rejim, model tanlash (jumladan
avtomatik standart), vazifani hisobga oluvchi ko‘rsatmalar, kengaytirilgan
vaqt tugashi/rasm/tavsif uzunligi/kesh cheklovlari, ish vaqti
hisoblagichlari va himoyalangan namuna so‘rovini taqdim etadi. Audio varag‘i ham
ishlaydi: u yoqish/o‘chirish, Auto variantiga ega faqat STT uchun model tanlagichi,
vaqt tugashi/klipning maksimal davomiyligi cheklovlari, audio hisoblagichlari va
`input_audio` namuna sinovini taqdim etadi. Video varag‘i to‘liq ishlaydi: u
FFmpeg/ffprobe ish vaqti holatini — to‘rtta aniq UI holatidan birini (`unknown`,
tekshiruv bajarilayotgan yoki yakunlana olmagan paytda; `restricted`, boshqaruv
paneli hosti loopback bo‘lmagani sababli tekshiruv mijoz tomonida o‘tkazib
yuborilganda; `unavailable`, tekshirilib, mavjud emasligi tasdiqlanganda; yoki
FFmpeg/ffprobe versiyalari bilan `available`) — ko‘rsatadi, yoqish/model/kadr/video/
vaqt tugashi cheklovlarini saqlaydi, model tanlagichini tasvirni qo‘llaydigan
modellar bilan cheklaydi va video hisoblagichlarini taqdim etadi.

AI sozlamalari ostidagi avvalgi Vision Bridge kartasi endi yangi sahifaga
moslik havolasi hisoblanadi; u endi formaning ikkinchi nusxasiga egalik qilmaydi.
Media Providers ham mavjud Speech-to-Text sinov maydonini olib tashlamasdan,
Image-to-Text va Speech-to-Text ish jarayonlarini tegishli Modality Bridge
varaqlariga bog‘laydi.

**O‘z-o‘ziga loop uchun qabulni chetlab o‘tish:** describe chaqiruvi OmniRoute’ning
o‘z `/v1` self-loop’i (nostandart provayder modeli) orqali yo‘naltirilganda,
ichki so‘rov `x-omniroute-admission-bypass: internal` yuboradi va aniqlangan
self-loop hisob ma’lumoti bilan autentifikatsiya qilinadi — lokal rejimdagi
mahalliy `sk_omniroute` sentinel qiymati yoki operator sozlagan
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` muhit kaliti (#1350); shu tariqa
`REQUIRE_API_KEY=true` o‘rnatmalari ham describe chaqiruvini bajara oladi.
Chetlab o‘tish faqat aynan shu hisob ma’lumotlari uchun qabul qilinadi, shuning
uchun tashqi mijozlar qabulni o‘tkazib yuborish uchun bu sarlavhadan foydalana
olmaydi.

Eski standart qiymatlar `src/shared/constants/visionBridgeDefaults.ts` ichida;
yangi rejim/vazifani hisobga olish/kesh standartlari va sozlamalar resolver’i
`src/shared/constants/modalityBridgeDefaults.ts` ichida joylashgan. Himoya
mexanizmi `deps` konstruktor parametrini taqdim etadi, shunda testlar soxta
`getSettings` va `callVisionModel` implementatsiyalarini kiritishi mumkin.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Audio kiritishni qabul qilishi ma’lum bo‘lmagan nishonga yetib borishidan oldin
audio mavjud chat so‘rovlarini tutib qoladi. U chat so‘rovini hech qachon boshqa
yo‘nalishga yubormaydi: audio qismlari mavjud OpenAI bilan mos multipart endpoint
orqali transkripsiya qilinadi va tanlangan chat modeli matnli transkriptlar bilan
davom etadi.

Jarayon:

1. `supportsAudio` qiymatini `getResolvedModelCapabilities()` orqali aniqlang.
   Avval provayder reyestridagi aniq metama’lumotlar, keyin statik model
   metama’lumotlari, undan so‘ng sinxronlangan `modalities_input` ustunlik qiladi.
   `audio` mavjud bo‘lmagan e’lon qilingan kirish ro‘yxati `false` hisoblanadi;
   imkoniyatga oid dalil bo‘lmasa, qiymat `null` bo‘lib qoladi. `false` va `null`
   qiymatlarining ikkalasi ham konservativ ko‘prikni faollashtiradi, `true` esa
   uni chetlab o‘tadi.
2. `modalityBridgeAudio*` sozlamalarini aniqlang va umumiy `detectMediaParts()`
   detektori orqali har bir xabardan biriktirish mumkin bo‘lgan yuqori darajadagi
   audio qismlarini ajratib oling. Qo‘llab-quvvatlanadigan uzatish formatlari:
   OpenAI `input_audio`, `audio_url` va `source.media_type: "audio/*"`.
   Ichma-ich audio yo‘naltirish uchun aniqlanadi, ammo biriktirish yo‘li tomonidan
   olib tashlanmaydi. Ish hajmi `modalityBridgeAudioMaxClips` bilan cheklanadi;
   undan keyingi qismlar o‘zgarishsiz qoladi.
3. Sozlangan `provider/model`dan foydalaning yoki `selectAudioBridgeModel()`ga
   `AUDIO_TRANSCRIPTION_PROVIDERS` bo‘ylab barqaror katalog tartibida yurib,
   foydalanish mumkin bo‘lgan faol provayder hisob ma’lumotiga ega birinchi
   modelni tanlashga ruxsat bering.
4. `callAudioTranscription()` base64/data-URI audioni multipart `file`ga
   aylantiradi yoki masofaviy `audio_url`ni DNS pinning va 25 MB chekloviga ega,
   faqat ommaviy manbalarga ruxsat beruvchi chiquvchi trafik himoyasi orqali
   yuklab oladi. Keyin u fayl va tanlangan modelni `resolveSelfLoopBearer()`
   yordamida autentifikatsiya qilingan mahalliy `/v1/audio/transcriptions`
   self-loop’iga POST qiladi. Mavjud transkripsiya yo‘nalishi odatiy hisob
   ma’lumotini qidirish, cooldown/tezlik cheklovini boshqarish va provayderga
   yuborishni bajaradi.
5. Muvaffaqiyatli chaqiruvlar o‘z qismlarini `[Audio N]: <transcript>` bilan
   almashtiradi. Chaqiruvlar `Promise.allSettled` bilan bajariladi: alohida
   muvaffaqiyatsizlik asl audio qismini saqlab qoladi (#4012 shartnomasi). Agar
   barcha chaqiruvlar muvaffaqiyatsiz tugasa va nishon uchun
   `supportsAudio === false` ekanligi isbotlangan bo‘lsa, qismlar
   `[Audio N]: (mavjud emas — hech qanday STT provayderi ulanmagan)`ga aylanadi
   (#8430 shartnomasi). Noma’lum nishon (`null`) uchun barcha chaqiruvlar
   muvaffaqiyatsiz bo‘lsa, natija o‘zgarishsiz qoladi. Faqat matnni qo‘llashi
   isbotlangan, foydalanish mumkin bo‘lgan STT hisob ma’lumoti yo‘q nishon tarmoq
   chaqiruvini bajarmasdan xuddi shu aniq o‘rinbosarni oladi.

Muvaffaqiyatli transkriptlar butun jarayon bo‘ylab umumiy Modality Bridge LRU/TTL
keshidan foydalanadi. Kalit audio havolasi, barqaror `audio-transcription`
operatsiya yorlig‘i va tanlangan STT modelini birlashtiradi; muvaffaqiyatsizliklar
hech qachon keshlanmaydi. Audio urinishlari umumiy `bridged`, `cacheHits`,
`failures` va `lastUsedAt` hisoblagichlarini yangilaydi.
O‘zgartirilgan javoblarda
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` mavjud
bo‘ladi; o‘zgartirilmagan so‘rovlar Audio Bridge segmentini olmaydi.

Ish vaqti sozlamalari DB’da saqlanadi va Zod orqali tekshiriladi:

| Kalit                         | Standart qiymat | Oraliq                |
| ----------------------------- | --------------- | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`          | —                     |
| `modalityBridgeAudioModel`    | `""`            | Avtomatik yoki STT ID |
| `modalityBridgeAudioTimeout`  | `60000`         | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`             | 1–10                  |

Umumiy kesh `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` va `modalityBridgeCacheMaxEntries` orqali boshqariladi.

### Video ko‘prigi (`videoBridge.ts`, `videoBridgePipeline.ts`)

Maʼlum mahalliy video qo‘llab-quvvatlash imkoniyatiga ega bo‘lmagan maqsad chaqirilishidan oldin Chat Completions `messages` va Responses API `input` ichidagi yuqori darajali video qismlarini tutib qoladi.
Qo‘llab-quvvatlanadigan shakllar: `input_video`, `video_url`, `video_source`, HTTPS URL manzillari
va `data:video/*;base64,...` maʼlumot URI’lari. Matndagi oddiy fayl nomlari video sifatida
qabul qilinmaydi.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) so‘rovni ko‘rib chiqish, imkoniyat/siyosat
tekshiruvi, har bir so‘rov bo‘yicha jamlash va javob foydali yukini boshqaradi.
Har bir video bo‘yicha ishlar — olish, to‘liq natija keshi, kadrlar
ketma-ketligini tavsiflash (bunda chaqiruvchi eʼlon qilgan har qanday audio transkript birlashtiriladi)
hamda har bir urinish uchun metrikalar/bekor qilish/tozalash — `videoBridgePipeline.ts` ichidagi
`processVideoPart` ortida yashirilgan bo‘lib, `preCall` sikli ichida har bir video qismi uchun
bir marta chaqiriladi. Ushbu modul, shuningdek, aniq port chegaralarini belgilaydi:
`VideoMediaBrokerPort` (baytlarni olish va namunaviy kadrlarni ajratib olish),
`VideoAudioTranscriptionPort` (chaqiruvchi eʼlon qilgan audio transkriptni namunaviy subtitrlar bilan birlashtirish) va
`VideoDrilldownPort` (kadrlarni batafsil ko‘rib chiqish uchun saqlash chegarasi; u hali
`processVideoPart` bilan ulanmagan — hozirda batafsil ko‘rib chiqish yozuvlarini faqat alohida
`/api/modality-bridge/video/drilldown` marshruti yozadi).

Ommaviy `/v1` so‘rov yo‘li hech qachon quyi jarayonni import qilmaydi yoki chaqirmaydi. Masofaviy
videolar 50 MiB chegarasi ostida yuklab olinadi; ichki base64 videolar uchun har bir video bo‘yicha
dekodlangan hajmga konservativ 36 MiB cheklovi qo‘yiladi, shunda model/xabarlar/kadrlash qobig‘i
ommaviy JSON so‘rovlarini qabul qilishning 50 MiB chegarasi ichida qolishi mumkin. Ichki
uzunlik va dekodlangan hajm taxminlari xotira ajratilishidan oldin tekshiriladi. Dastlabki masofaviy URL
va har bir qayta yo‘naltirish uchun HTTPS talab qilinadi; bunda DNS mahkamlashga ega mavjud
faqat ommaviy chiquvchi ulanish himoyasi ishlatiladi. Keyin baytlar aynan ichki
`POST /api/modality-bridge/video/extract` broker chegarasidan o‘tadi. Ushbu marshrut ham
`LOCAL_ONLY`, ham `SPAWN_CAPABLE` bo‘lib, faqat har bir jarayon uchun autentifikatsiya qilingan,
ishonchli loopback so‘rovini qabul qiladi va hech qachon URL, fayl tizimi yo‘li, bajariladigan fayl
yoki argumentlar ro‘yxatini qabul qilmaydi. API tanasi hajmini boshqarish zanjiri va ishlov beruvchining
tanani bosqichma-bosqich o‘qish mexanizmi mustaqil ravishda broker kirishiga 50 MiB cheklovini
qo‘llaydi. Uning cheklangan navbati bir vaqtda bitta ajratib olish amalini bajaradi, to‘rtta
kutilayotgan vazifaga ruxsat beradi va kutilayotgan kirish maʼlumotlarini 100 MiB bilan cheklaydi.

Broker ichida `ffprobe` xususiy mahalliy faylni o‘qiydi; qatʼiy formatlar ruxsat ro‘yxati
pleylist va manifest formatlarini istisno qiladi. Ruxsat etilgan MOV oilasidagi konteynerlar uchun
tashqi MOV maʼlumot havolalari standart holatda o‘chirilgan bo‘lib qoladi va qatʼiy buyruq ularni
yoqmaydi. `ffprobe` ham, `ffmpeg` ham faqat `file` protokoli ruxsat ro‘yxati, bitta oqim,
qatʼiy argument massivlari, shellsiz ishlash va `PATH` orqali aniqlanadigan bajariladigan fayllardan
foydalanadi. Biriktirilgan rasm-muqova oqimlari ijro etiladigan nomzodlar hisoblanmaydi.
Barcha ijro etiladigan oqimlar cheklovlarga mos kelishi kerak va deterministik tarzda eng kichik
indeksga qaytishdan oldin aniq standart oqimga ustunlik beriladi. Videolar 600 soniya,
har bir o‘lchamda 8 192 piksel va 33 554 432 manba pikseli bilan cheklangan. FFmpeg 1–16 ta
o‘rta nuqtadagi JPEG kadrlarni namuna sifatida oladi, kichikroq kirishlarni kattalashtirmasdan
uzun qirrasini ko‘pi bilan 1 024 pikselgacha kichraytiradi va hech qachon URL qabul qilmaydi.
Namuna olish standart holatda `uniform`. Ixtiyoriy `scene_aware` va tajribaviy
`segment_aware` siyosatlari allaqachon tekshirilgan mahalliy oqim ustida yana bitta
qatʼiy FFmpeg o‘tishini bajaradi, cheklangan `showinfo` sahna vaqt belgilarini tanlaydi va
detektor xatosi, vaqt tugashi, noto‘g‘ri shakllangan chiqish yoki bo‘sh nomzodlar to‘plami yuz berganda
deterministik tarzda ayni bir xil tekis o‘rta nuqtalarga qaytadi. Segmentdan xabardor rejim
o‘rta nuqta namunalarini tekshirilgan sahna intervallariga mutanosib ravishda taqsimlaydi;
segmentdan xabardor dalillar va zaxira xatti-harakati quyida batafsil bayon qilingan. Qatʼiy
16 kadrli cheklov har bir siyosatda tanlashdan keyin qo‘llanadi. Sahna kontekstini hisobga oluvchi
so‘rovda faqat bitta kadr byudjeti bo‘lsa, u faol to‘liq video yoki fokus oynasining tekis
o‘rta nuqtasidan foydalanadi va `policyEffective: uniform` deb xabar beradi: tanlangan bitta
sahna kadri vaqt oralig‘ining har ikki chetini ham saqlay olmaydi. Chaqiruvchi ixtiyoriy ravishda
cheklangan fokus oynasini (`start`/`end` soniyalar) taqdim etishi mumkin; chegaralar media
davomiyligiga moslab cheklanadi, teskari yoki chekli bo‘lmagan oynalar rad etiladi va barcha
namuna olish siyosatlari faqat normallashtirilgan interval ichida bajariladi. Natijaviy
oyna namuna olish metamaʼlumotlariga va ishonchsiz tavsif prefiksiga kiritiladi, shunda keyingi
modellar fokuslangan parchani to‘liq vaqt chizig‘idan farqlay oladi.

Semantik subtitr fokusi alohida, aniq sozlamadir. Standart `full`
tahlil rejimi mavjud kadr so‘rovini saqlaydi va so‘rov matnini hech qachon subtitr modeliga
uzatmaydi. `focused` rejimida ko‘prik ayni Chat yoki Responses konteyneridan faqat foydalanuvchi
tomonidan yozilgan eng so‘nggi bo‘sh bo‘lmagan `text`/`input_text` qiymatini o‘qiydi, uni NFC
formatiga normallashtiradi, boshqaruv belgilarini va bo‘sh joylarni birlashtiradi hamda
500 ta Unicode kod nuqtasi bilan cheklaydi. Bo‘sh natija aynan `full` so‘roviga qaytadi.
Foydalanishga yaroqli ko‘rsatma maxsus ishonchsiz-foydalanuvchi-konteksti blokida JSON sifatida
serializatsiya qilinadi va faqat kuzatiladigan tafsilotlarga ustunlik berishi mumkin; u mediada
ko‘rinadigan yoki eshitiladigan ko‘rsatmalarga amal qilmaslik haqidagi alohida ogohlantirishni
bekor qila olmaydi. Matnli fokus hech qachon `start`/`end` qiymatlarini taxmin qilmaydi yoki
vaqt bo‘yicha namuna oluvchini o‘zgartirmaydi.

#### FU-07 tuzilmaviy segment dalillari

`segment_aware` allaqachon tekshirilgan mahalliy video oqimi ustida chegaralangan bitta dastlabki tahlil bosqichidan foydalanadi. Oʻzgarmas filtrlar zanjiri avval kenglikni koʻpi bilan 320 pikselgacha masshtablaydi, sahna oʻzgarishlari va qotib qolgan intervallarni aniqlaydi, soʻng xiralik, oʻrtacha yorqinlik hamda fazoviy/vaqtga oid axborot uchun soniyasiga 1 kadrdan namuna oladi. Bu bosqich 600 ta strukturaviy namuna, bitta FFmpeg/filtr oqimi, faqat `file` protokoli va ayni konteyner ruxsat roʻyxatlari, jarayon chiqishi uchun 1 MiB chegara hamda brokerning umumiy bekor qilish/muddat chegarasi ichida koʻpi bilan 30 soniya bilan cheklangan. U hech qachon soʻrovdan buyruq, filtr, yoʻl yoki URL qabul qilmaydi.

Strukturaviy qiymatlar videoni semantik tushunish emas, balki deterministik namuna olish dalillaridir. Ular subyektlar, harakatlar, subtitrlar, nutq yoki foydalanuvchi niyatini aniqlamaydi. Sahna va qotib qolish chegaralari segmentlarni hosil qiladi; qotib qolish qamrovi, xiralik, ekspozitsiya, fazoviy tafsilotlar va vaqt boʻyicha oʻzgarish faqat mavjud 1–16 kadrli budjet qanday taqsimlanishiga taʼsir qiladi. Toʻliq qotib qolgan segment koʻpi bilan bitta kadr bilan cheklanadi, qotib qolmagan segmentlar esa qolgan budjet uchun raqobatlashadi. Chegaralar soni kadrlar sonidan oshganda, vaqt shkalasi boʻylab bir tekis qamrov saqlanadi, shunda boshidagi tezkor kesimlar uzoq yakuniy segmentni yashira olmaydi. Qotib qolish chegarasidan 1 soniyalik tahlil aniqligi doirasida joylashgan sahna chegaralari birlashtiriladi.

Filtrlarning mavjud emasligi, notoʻgʻri shakllangan yoki boʻsh dalillar, detektor xatosi yoxud chegaralangan dastlabki tahlilning vaqt chegarasidan oshishi aynan bir tekis oraliq nuqtalar siyosatiga ochiq tarzda qaytadi. Chaqiruvchining bekor qilishi yoki broker muddatining tugashi ochiq tarzda davom etmaydi: u bajarilayotgan quyi jarayonni tugatadi, keyingi kadrlarni ajratib olishga yoʻl qoʻymaydi va xususiy vaqtinchalik daraxt `finally` ichida oʻchiriladi.

`scripts/perf/video-bridge-fu07-eval.ts` deduplikatsiyadan keyingi subtitr chaqiruvlari tejalishi, zich harakat uchun budjet taqsimoti, xiralik/ekspozitsiya/SI-TI dalillari, uzun yakuniy qismli tezkor kesimlar va asta-sekin soʻnishdagi yolgʻon musbat natijalar uchun deterministik haqiqiy FFmpeg sinov maʼlumotlarini yaratadi. U dastlabki tahlilning real vaqtini va `/usr/bin/time` mavjud boʻlsa, quyi jarayonning CPU sarfi hamda RSS choʻqqisini qayd etadi. Uning sifat tekshiruvlari faqat strukturaviy orakullardir. Haqiqiy subtitr modelining sifati `HOLD` holatida qoladi, chunki bu sinov vositasida vakolatli oxirgi nuqta yoki muzlatilgan baholovchi yoʻq. Pul tejalishi ham `--caption-cost-per-call-usd` har bir chaqiruv uchun aniq musbat xarajat bahosini taqdim etmasa, `HOLD` holatida qoladi; skript bu natijalarning hech birini toʻqib chiqarmaydi.

Har bir kadr 4 MiB, barcha xom kadrlar birgalikda 23 MiB va serializatsiya qilingan broker javobi 32 MiB bilan cheklangan. Xususiy vaqtinchalik katalog `finally` ichida oʻchiriladi. OmniRoute FFmpeg paketini oʻz ichiga olmaydi va maxsus bajariladigan fayl yoʻlini qabul qilmaydi. Subtitr yaratishdan oldin koʻprik ehtiyotkor vizual deduplikatsiya bosqichini qoʻllaydi: har bir JPEG 16×16 oʻlchamli kulrang shkala buferiga kichraytiriladi va faqat oxirgi saqlab qolingan kadr bilan taqqoslanadi. Birdan ortiq kadrli soʻralgan subtitr budjeti uchun ajratib olish shu budjetdan koʻpi bilan ikki baravar katta va hech qachon 16 kadrdan oshmaydigan chegaralangan nomzodlar toʻplamini taqdim etadi. Soʻralgan chegara faqat deduplikatsiyadan keyin qoʻllanadi; budjet kamida ikkita boʻlsa, yakuniy siyraklashtirish vaqtida birinchi va oxirgi tanlangan nomzodlar saqlab qolinadi. Versiyalangan
`grayscale-16x16-mean-cells-v2` siyosati oʻrtacha yorqinlik farqi bilan normallashtirilgan farqi kamida 0.05 boʻlgan kichik tasvir kataklari nisbatidan kattasini ishlatadi. Dublikat chegarasi 0.04 doimiysi boʻlib, bajarilish vaqti sozlamasi sifatida taqdim etishdan koʻra oldindan bashorat qilish mumkinligi uchun tanlangan. Bu ikkilamchi yuqori kontrastli signal faqat oʻrtacha qiymatga asoslangan taqqoslash yashirishi mumkin boʻlgan kichik harakatlar va koʻrinadigan matn oʻzgarishlarini saqlab qoladi. Taqqoslagich yoki dekoder xatolari ochiq tarzda davom etib, qamrovni saqlaydi. Chiqish metamaʼlumotlari ajratib olingan nomzodlar, muvaffaqiyatli ishlatilgan kadrlar va olib tashlangan vizual dublikatlarni alohida koʻrsatadi.

Aniq belgilangan video qismi vaqt tamgʻalari qoʻyilgan kontakt varagʻini soʻrashi mumkin. Koʻprik koʻpi bilan 4 ustunli, 16 kadrli JPEG panjarasini yaratadi. Har bir 512 pikselli katak manba vaqt tamgʻasini yuqori kontrastli pastki tasmaga joylaydi, ayni vaqt tamgʻalari esa keyingi bogʻlash va audit uchun matnli metamaʼlumotlarda saqlanadi. Toʻliq JPEG hajmi 32 MiB bilan cheklanadi. Agar `sharp` panjarani dekodlay yoki yigʻa olmasa, koʻprik alohida JPEG kadrlarga qaytadi; mijozning bekor qilishi esa kontakt varagʻi amali orqali ham tarqaladi.

Ishga chiqarish dalillari ataylab sintetik kompozitsiya mikrobencmarkidan ajratilgan. `scripts/perf/video-bridge-contact-sheet-eval.ts` haqiqiy OpenAI-mos koʻrish modellari uchun sxema versiyasiga ega A/B sinov vositasini belgilaydi. U provayder xabar qilgan tokenlar, boshidan oxirigacha real kechikish (kontakt varagʻini yigʻish bilan birga), model chaqiruvlari soni va manifestda belgilangan faktlarning saqlanishini oʻlchaydi. Modelning xom javoblari hisobotga yozilmaydi; faqat SHA-256 dayjestlari va mos kelgan fakt identifikatorlari saqlanadi. `--execute-real` uzatilmasa hamda `--model`, `OMNIROUTE_BASE_URL` va `OMNIROUTE_API_KEY` sozlanmasa, sinov vositasi hech qanday tarmoq yoki pulli model chaqiruvini amalga oshirmaydi. Bunday aniq haqiqiy ishga tushirishsiz uning mashina oʻqiy oladigan hukmi `HOLD` holatida qoladi; sintetik foydali yuk/chaqiruvlar soni oʻlchovlarining oʻzi ishga chiqarish uchun dalil emas.

Chaqiruvchilar allaqachon moslashtirilgan matnga ega boʻlsa, qoʻllab-quvvatlanadigan video qismiga ixtiyoriy `transcript.cues` massivini biriktirishi mumkin. Har bir signalda `text`, tekshirilgan davomiylik ichidagi chekli `start`/`end` intervali va ruxsat roʻyxatidagi `source` (`client`, `embedded` yoki `audio-bridge`) boʻlishi kerak; `confidence` qiymati sukut boʻyicha `1` boʻlib, `0` va `1` oraligʻida qolishi shart. Aynan bir xil signallar birlashtiriladi. OmniRoute bu metamaʼlumotlar asosida hech qachon transkripsiyani boshlamaydi: tekshirilgan signallar manba, ishonchlilik va interval bilan birga tavsiflangan natijaga koʻchiriladi hamda kadr subtitrlari yonida ishonchsiz kuzatuvlar sifatida koʻrsatiladi. Notoʻgʻri, diapazondan tashqaridagi yoki kelib chiqish manbasi koʻrsatilmagan matn subtitrlar oqimiga aralashtirilmay, rad etiladi. Hozirda `source` maydoni server tomonidan tekshirilmaydi, balki chaqiruvchi tomonidan eʼlon qilinadi: OmniRoute qiymat ruxsat etilgan uchta satrdan biri boʻlishini taʼminlaydi, biroq `embedded` yoki `audio-bridge` yorligʻi haqiqatan ham serverga tegishli ajratib olish jarayonidan kelganini hali kriptografik tarzda tasdiqlamaydi. Bu tekshiruv joriy etilguncha `source` qiymatini ishonchsiz koʻrsatma deb hisoblang; unga asoslanib avtorizatsiya qarorlarini qabul qilmang.

Ilgʻor chaqiruvchi ayni video uchun allaqachon avtorizatsiya qilingan `audioTranscript` trekini taqdim etishi mumkin. Birlashtirish chegarasi vizual va audio kuzatuvlarni yagona muddat va bekor qilish signali ostida ishga tushiradi, ularni umumiy vaqt shkalasi boʻyicha tartiblaydi, aynan bir xil nusxalarni birlashtiradi va faqat bir tomon muvaffaqiyatli boʻlganda qisman natijani qaytaradi. Notoʻgʻri `audioTranscript` shu qisman natijaga tushiriladi — vizual tavsif saqlanadi, audio tarmogʻi esa tozalangan xatolik kodini qayd etadi — butun videoni xato bilan yakunlash oʻrniga. Har bir tarmoqning mavjudligi, qismanlik bayrogʻi va tozalangan xatolik kodlari tavsiflangan natijada, himoya cheklovi metamaʼlumotlarida (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), natija keshi metamaʼlumotlarida va koʻprikning birlashtirish hisoblagichlarida saqlanadi. Standart Video Bridge yoʻli nutqni matnga aylantirishni ishga tushirmaydi yoki medianing ikkinchi nusxasini yuklab olmaydi; bunday aniq trek boʻlmasa, u faqat video rejimida qoladi.

**Transkriptni saqlash (#12150 P1).** Bu Video Bridge (uning oʻzi ixtiyoriy yoqiladi) transkript belgisini render qilgan har qanday holatda avtomatik qoʻllanadi — alohida saqlash bayrogʻi mavjud emas. Soʻrov istalgan transkript belgisini (chaqiruvchi eʼlon qilgan `transcript` yoki birlashtirilgan `audioTranscript`) render qilganda, himoya cheklovi uni `videoBridgeObserved` deb belgilaydi va video tavsifining tahrirlangan soyaviy nusxasini yaratadi — unda har bir belgining erkin matnli tanasi `[redacted-video-transcript]` bilan almashtirilgan aynan bir xil render; bu satr yigʻilishidan oldin tuzilmaviy belgi maydonini almashtirish orqali quriladi (hech qachon tekislangan matnni tahlil qilish orqali emas, shuning uchun hech qanday belgi mazmuni — zararli yoki odatiy, jumladan `[inaudible]`/`[music]` kabi `]` belgisini oʻz ichiga olgan tanalar — saqlanib qolmaydi). Saqlanadigan chaqiruv jurnali soʻrov tanasi kontent tengligi boʻyicha moslashtirib, videodan olingan har bir matn qismini shu tahrirlangan soyaviy nusxaga almashtiradi; `fullText` tayanch qiymati chaqiruvdan oldingi yakunlangan himoya cheklovi foydali yukidan qayta oʻqiladi, shuning uchun keyingi zanjir himoya cheklovlari (PII va hisob maʼlumotlarini maskalovchilar, ustuvorliklari 10/95) tavsif matnini joyida qayta yozganidan hamda tizim prompti/topshirish/xotira kiritilishi xabarlar massivining shaklini oʻzgartirganidan keyin ham moslik muvaffaqiyatli boʻladi. Modelga yuqori oqim boʻylab yuboriladigan tana oʻzgarmaydi. Kuzatilgan soʻrov doimiy Memoryʼni ham toʻldirmaydi (soʻrov va javobdan olinadigan ajratib chiqarishning har ikkisi oʻtkazib yuboriladi), shu sababli modelning oʻz javobi transkript matnini Memoryʼga aks-sado qilib yozolmaydi.

**Xom video maydonlari (#12430).** Koʻprik yoqilgan va mahalliy video qoʻllab-quvvatlashi nomaʼlum yoki mavjud boʻlmaganida, belgilangan `transcript`/`audioTranscript` maydonlari, hatto tavsif xatosi yoki `maxVideos` cheklovidan keyin ham, `videoBridgeObserved`ni faollashtiradi. `null` va boʻsh satrlar hisobga olinadi; mavjud boʻlmagan maydonlar va videoga aloqador boʻlmagan metamaʼlumotlar hisobga olinmaydi. Saqlanadigan nusxalar bu maydonlarni tahrirlaydi yoki soʻrovni tashlab yuboradi, keshlar/Memory esa chetlab oʻtiladi. Provayder foydali yuki oʻzgarmaydi.

Qoʻshimcha saqlanadigan nusxalar ayni kuzatilgan soʻrov signalidan foydalanadi. Himoya cheklovidan oldingi xom mijoz soʻrovi surati, xotiradagi kutilayotgan soʻrov va erta rad etilgan soʻrov jurnali video qismlaridagi transkript maydonlarini tuzilmaviy tarzda almashtiradi; konveyer bosqichlari va kontekstni topshirish tomonidan yaratilgan satrli promptlar saqlanadigan soʻrov tanasi qabul qiluvchisida tahrirlanadi. Saqlanadigan `video_content_removed` markeri `previous_response_id` orqali davom ettirishni ataylab tashlab yuborilgan matnni qayta tiklash oʻrniga yopiq tarzda xato bilan yakunlashga majbur qiladi. Agar kuzatilgan soʻrov jurnallashdan oldin har bir qismga tegishli tahrirlash soyaviy nusxasini yoʻqotsa yoki keyingi soʻrov oʻzgarishlaridan soʻng bir nechta video soyaviy nusxalaridan hatto bittasi mos kelmasa, qisman tahrirlangan transkriptni saqlash oʻrniga saqlanadigan soʻrov tanasi butunlay tashlab yuboriladi.

Kuzatilgan soʻrov uchun model javobi transkriptning istalgan qismini tuzilmaviy belgi chegarasisiz iqtibos qilishi mumkin. Shu sababli uning saqlanadigan chaqiruv jurnali `responseBody` maydoni tashlab yuborish markeriga almashtiriladi; batafsil konveyer artefakti (u yuqori oqim/mijoz tanalari va oqim qismlarini oʻz ichiga olishi mumkin) saqlanmaydi. Semantik, idempotentlik va mulohazani qayta ijro etish keshlari bu soʻrov uchun oʻqish va yozishlarni chetlab oʻtadi. Provayder soʻrovi va mijozga koʻrinadigan javob oʻzgarmaydi. Batafsil artefakt tashlab yuborilganda, dastlabki keepalive baytlari vaqtinchalik buferdan chiqarib tashlanadi. Kiroʼning notoʻgʻri shakllangan EventStream ogohlantirishi faqat foydali yuk baytlari sonini bildiradi, uning mazmunini yoki JSON tahlil qiluvchisining xom xatosini hech qachon bildirmaydi.
Bu har bir aloqasiz provayder/plagin diagnostikasi tekshirilganini anglatmaydi; saqlanadigan qabul qiluvchilarni kengroq koʻlamda tekshirish #11658 da kuzatiladi.

Ichki `/api/modality-bridge/video/drilldown` hayot sikli alohida, loopback/token orqali autentifikatsiya qilinadigan kesh substratidir. Har bir amal, shuningdek, kanonik shaffof boʻlmagan principal IDʼni talab qiladi. Ishlab chiqarishdagi chaqiruvchi yoqilishidan oldin u ushbu IDʼni autentifikatsiya qilingan tenantdan hosil qilishi va mijoz tanlagan qiymatni hech qachon uzatmasligi kerak. Kesh kalitlari ushbu principalni kanonik seans va video havolasi IDʼlariga bogʻlaydi, ularning faqat SHA-256 orqali hosil qilingan kalitlarini saqlaydi hamda oʻqish va oʻchirish amallarining har ikkalasini ayni principal doirasida cheklaydi. Kesh har bir yozuv uchun koʻpi bilan 16 ta hosil qilingan JPEG kadrini saqlaydi, ularning amal qilish muddatini oʻn daqiqadan keyin tugatadi hamda chegaralangan `start`/`end` oʻqishlarini yoki seansni aniq oʻchirishni qoʻllab-quvvatlaydi.

Har bir principal 16 ta yozuv va 64 MiB kanonik JPEG maʼlumoti bilan cheklanadi. Bu cheklovlar 64 ta yozuv/256 MiB miqyosidagi global chegaradan mustaqil: principal kvotasi bosimi global LRU chiqarib tashlashi koʻrib chiqilishidan oldin faqat shu principalning eng uzoq vaqtdan beri ishlatilmagan yozuvlarini chiqarib tashlaydi. Muddati tugagan yozuvlar kesh faolligi vaqtida ham principal, ham global hisobdan tozalanadi, bekor qilish va tekshiruv xatosi esa qisman almashtirishni qayd etmaydi.

Kesh kanonik bo‘lmagan Base64’ni, ortiqcha to‘ldirishni, JPEG bo‘lmagan mediani, noto‘g‘ri shakllangan yoki
kesilgan JPEG’larni hamda chegaralangan to‘liq tasvir `sharp` dekodlashi davomida ogohlantirish hosil qiladigan JPEG’larni
rad etadi. U har bir qabul qilingan tasvirni kanonik JPEG sifatida qayta kodlaydi, kenglik va balandlikni
chaqiruvchi maydonlariga ishonish o‘rniga dekodlangan baytlardan aniqlaydi hamda oxiriga qo‘shilgan
poliglot baytlarni saqlab qolmay, tashlab yuboradi. Har ikkala kvotaga faqat chegaralangan kanonik siqilgan bufer
hisoblanadi. JSON uzatish cheklovi dekodlangan kirish uchun 32 MiB
yuqori chegaraning Base64 ustama hajmini ham o‘z ichiga oladi. Har bir
saqlangan hosila uning tekshirilgan JPEG formati/aniqligi, namuna olish siyosati,
hosila versiyasi, yaratilgan vaqti, server hisoblagan kontent xeshi va xeshlangan ota obyekt
havolasi hamda ishonchli chaqiruvchining ota kontent xeshini qayd etadi. Bekor qilish holati
atomar keshga yozishdan oldin asinxron dekodlash/xeshlash bosqichlari orasida tekshiriladi.

Ushbu qism hali ishlab chiqarishdagi ma’lumot yaratuvchini marshrutga ulamaydi va
bir nechta aniqlik variantini tanlash imkonini bermaydi. Shu sababli shaffof Video Bridge so‘rov
yo‘li qo‘shimcha ish bajarmaydi, tenantga bog‘langan asosiy subyekt hosilasi va
to‘liq FU-08 ko‘p aniqlikli hayot sikli esa yakunlangan xatti-harakat sifatida
hujjatlashtirilmay, keyingi alohida ishlar bo‘lib qoladi.

Kadrlar sozlangan Video modeli yordamida ketma-ket tavsiflanadi. Bo‘sh
Video qayta belgilashi Vision sozlamasini meros qilib oladi; agar ikkalasi ham bo‘sh bo‘lsa, Vision
avtomatik marshrutizatori mos, tasvirlarni qayta ishlay oladigan modelni tanlaydi. Muvaffaqiyatli tavsiflar
asl qismni barqaror `[Video description:` prefiksiga ega matn bilan almashtiradi; bu prefiks matnni
ishonchsiz, media asosida olingan kuzatuv sifatida belgilaydi va quyi oqimdagi
modellarga mediadagi ko‘rsatmalarga amal qilmaslikni bildiradi. Kadr tavsifi keshi kalitlari
JPEG baytlari, prompt, vaqt belgisi va amaldagi modelni o‘z ichiga oladi; faqat muvaffaqiyatli
tavsiflar keshlanadi. Kesh yozuvlari amalda muvaffaqiyatli ishlagan yaratuvchi modelni,
jumladan zaxira modelni saqlaydi; turli kadrlar turli modellar tomonidan
yaratilganida bridge `mixed` deb xabar beradi. Kesh mosligi yaratuvchi identifikatorini
so‘ralgan marshrutlash rejasi sifatida qayta belgilash o‘rniga qayta ishlatadi. Butun video natijasi
keshi chiqishni o‘zgartiradigan har bir kirish bo‘yicha kalitlanadi — prompt, amaldagi
model, namuna olish siyosati, kadrlar soni, semantik tahlil rejimi, normallashtirilgan
fokus ishorasining SHA-256 barmoq izi, fokus oynasi, `transcript`,
`audioTranscript` va kontakt varaqasi bayrog‘i — shuning uchun bu
o‘lchamlardan istalganining o‘zgarishi eskirgan ma’lumotni qayta ishlatish emas, balki kesh mos kelmasligiga olib keladi. Vizual deduplikatsiya siyosatining
versiyasi, chegarasi va chegaralangan nomzod kadrlar soni ham
natijalar keshi kaliti va metama’lumotlarida aniq ko‘rsatiladi; shu sababli siyosat o‘zgarishi eskirgan
butun video tavsifidan qayta foydalana olmaydi. Natijalar keshi v4 metama’lumotlari rejim va
barmoq izini saqlaydi, lekin foydalanuvchining xom vazifasini hech qachon saqlamaydi. Himoya cheklovi metama’lumotlari ham
so‘ralgan, ham amaldagi tahlil rejimlarini bildiradi; foydalanishga yaroqli foydalanuvchi matnisiz so‘ralgan `focused` rejimi
amalda `full` sifatida ko‘rsatiladi.

Himoya cheklovi qo‘llab-quvvatlanadigan barcha video qismlarni ajratib oladi, ammo
`modalityBridgeVideoMaxVideos` qiymatidan ortig‘ini tavsiflamaydi.
`supportsVideo === false` ekani isbotlangan maqsad uchun ishlov berilishi muvaffaqiyatsiz bo‘lgan va limitdan ortiq videolar
aniq xavfsiz matn belgilariga aylantiriladi, shuning uchun hech qanday xom video saqlanib qolmaydi.
Imkoniyat noma’lum bo‘lsa, bu qismlar o‘zgartirilmaydi. `supportsVideo === true`
bo‘lgan maqsadlar bridge’ni chetlab o‘tadi.
Mijoz so‘rovining bekor qilish signali yuklab olish, broker navbati,
quyi jarayonlar va tavsiflash chaqiruvlari bo‘ylab uzatiladi; bekor qilish videolar orasidagi ishlovni to‘xtatadi va hech qachon
xom mediaga ochiq holda davom etmaydi.

Ish vaqti sozlamalari DB’da saqlanadi va Zod orqali tekshiriladi:

| Kalit                               | Standart    | Diapazon / xatti-harakat                                                                                                   |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Ixtiyoriy ish vaqti funksiyasi, alohida yoqiladi                                                                           |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` umumiy tavsiflarni saqlaydi; `focused` chegaralangan, ishonchsiz eng so‘nggi foydalanuvchi kontekstidan foydalanadi |
| `modalityBridgeVideoModel`          | `""`        | Vision Bridge modelini meros qilib oladi                                                                                   |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                       |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` yoki proporsional `segment_aware`; detektor xatosida `uniform`’ga qaytiladi                       |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                        |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                             |

Avval saqlangan 120 soniyadan yuqori Video kutish vaqti qiymatlari
broker muddatigacha cheklanadi; bu limitdan yuqori yangi sozlama yozuvlari rad etiladi.
`GET /api/modality-bridge/video/runtime` autentifikatsiya yoki ish vaqtini tekshirishdan oldin
ishonchli tamg‘alangan loopback lokalligini, so‘ngra boshqaruv
autentifikatsiyasini talab qiladi. U faqat `available`, tozalangan FFmpeg/ffprobe versiyalari va ish vaqti muhiti mavjud bo‘lmagandagi qat’iy
sababni qaytaradi. Ichki ajratib olish yakuniy nuqtasi ommaviy
yuklash API’si emas: navbat to‘lib qolsa `503` va `Retry-After`, chaqiruvchi
uzilib qolsa `499`, brokerning qat’iy muddati tugasa esa `504` qaytariladi. O‘zgartirilgan javoblar
Vision yoki Audio segmentlarini olib tashlamasdan, markaziy
`x-omniroute-modality-bridge` sarlavhasiga `video->text;model=<visionModel>;parts=<videos>` qo‘shadi.

### PII niqoblagichi (`piiMasker.ts`)

**Har ikkala** bosqichda ishlaydi.

- **`preCall`** foydali yuklamani klonlaydi, `system`, `messages`, `input` va
  `prompt` bo‘ylab (jumladan, oddiy satr elementlari bo‘ylab ham) o‘tadi hamda
  `content`/`text` satr maydonlariga (`@/shared/utils/inputSanitizer` modulidagi)
  `processPII()` funksiyasini qo‘llaydi. `PII_REDACTION_ENABLED=true` bo‘lganda,
  aniqlangan PII chiquvchi foydali yuklamada berkitiladi. Bu
  `INPUT_SANITIZER_MODE` dan mustaqil (u faqat prompt-inyeksiya siyosatini
  boshqaradi). Berkitish o‘chirilganida, chaqiruv kontentni qayta yozmasdan
  aniqlashlar sonini qayd etadi.
- **`postCall`** javobni chuqur klonlaydi, `sanitizePIIResponse()` hamda
  Responses API shakli maskalagichini (`maskResponsesOutput` — `output_text`
  va `output[].content[].text` ni qamrab oladi) ishga tushiradi. Agar biror
  berkitish amalga oshirilsa, o‘zgartirilgan javob asl javobning o‘rnini
  egallaydi.

Himoya mexanizmi hech qachon bloklamaydi; u faqat izohlaydi
(`meta.detections`, `meta.redacted`) yoki qayta yozadi.

### Prompt inyeksiyasi (`promptInjection.ts`)

Foydalanuvchi taqdim etgan kontentdagi zararli tuzilmalarni aniqlaydi va
sozlangan siyosatni qo‘llaydi. Xatti-harakat muhit o‘zgaruvchilari va
konstruktor parametrlariga bog‘liq:

| Sozlama            | Muhit o‘zgaruvchisi                                                                                          | Standart qiymat | Ta’siri                                                                                                                                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------ | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Yoqilgan           | `INPUT_SANITIZER_ENABLED`                                                                                    | `true`          | `false` bo‘lganda, himoya mexanizmi darhol yakunlanadi.                                                                                                                                                                 |
| Rejim              | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                              | `warn`          | Inyeksiya siyosati: `block`, `warn` yoki `log`. (`redact` orqaga moslik uchun qabul qilinadi, ammo inyeksiya matnini **olib tashlamaydi**; so‘rovdagi PII’ni qayta yozish `PII_REDACTION_ENABLED` orqali boshqariladi.) |
| Bloklash chegarasi | `blockThreshold` parametri / `INPUT_SANITIZER_BLOCK_THRESHOLD` (`INJECTION_GUARD_BLOCK_THRESHOLD` taxallusi) | `high`          | Bloklash uchun talab qilinadigan minimal jiddiylik darajasi. Standart holatda o‘rta daraja faqat kuzatiladi.                                                                                                            |

**Rejim ustuvorligi** (`getMode`): chaqiruvchining `options.mode` qiymati →
`INJECTION_GUARD_MODE` uchun **DB xususiyat bayrog‘i orqali almashtirish**
(Boshqaruv paneli → Sozlamalar → Xususiyat bayroqlari) →
`INJECTION_GUARD_MODE` muhit o‘zgaruvchisi → `INPUT_SANITIZER_MODE` muhit
o‘zgaruvchisi → `warn`. Shu sababli boshqaruv panelidagi almashtirish muhit
o‘zgaruvchilaridan ustun turadi va Xususiyat bayroqlari interfeysi ishlayotgan
himoya mexanizmini jonli ravishda boshqaradi (qayta ishga tushirish talab
qilinmaydi). DB’dan o‘qish xatolarga chidamli: agar xato yuz bersa, himoya
mexanizmi muhitga asoslangan xatti-harakatga qaytadi; almashtirish o‘rnatilmagan
bo‘lsa, xatti-harakat faqat muhit orqali aniqlanadigan holat bilan bir xil
bo‘ladi.

Aniqlash manbalari:

1. `@/shared/utils/inputSanitizer` modulidagi `sanitizeRequest()` (konveyerning
   boshqa qismlarida ham ishlatiladigan umumiy detektorlar to‘plami).
2. Ichki `DEFAULT_GUARD_PATTERNS` (hozirda `system_override_inline` va
   `markdown_system_block`, ikkalasi ham `high` jiddiylik darajasiga ega).
3. Konstruktor parametrlari orqali uzatilgan ixtiyoriy `customPatterns`
   (satrlar, muntazam ifodalar yoki `{ name, pattern, severity }` yozuvlari).

`mode === "block"` **va** kamida bitta aniqlash jiddiylik chegarasiga yetgan
bo‘lsa, `preCall` `{ block: true, message: "Request rejected: suspicious content detected" }`
qiymatini qaytaradi. `warn`/`log` rejimlarida himoya mexanizmi jurnalga yozadi,
ammo chaqiruvga ruxsat beradi. Registr orqali o‘tmasdan promptlarni baholashi
kerak bo‘lgan chaqiruvchilar uchun umumiy `evaluatePromptInjection()` yordamchi
funksiyasi ham eksport qilinadi.

**Tekshirish chegarasi (v3.8.20):** detektor birlashtirilgan prompt matnining
faqat **dastlabki 16 KB** qismini tekshiradi —
`MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bayt),
`src/shared/utils/inputSanitizer.ts` faylida. `detectInjection()` ham,
`evaluatePromptInjection()` ham naqshlar siklini ishga tushirishdan oldin
`slice(0, MAX_INJECTION_SCAN_BYTES)` ni qo‘llaydi. Inyeksiya ko‘rsatmalari
kiritmaning yuqori qismiga yaqin joylashadi, shu sababli bu aniqlash
samaradorligini pasaytirmasdan yuzlab KB hajmdagi foydali yuklamalarda muntazam
ifodalar CPU/GC sarfini cheklaydi (qarang: #3932, #4041).

### Hisob ma’lumotlarini maskalagich (`credentialMasker.ts`)

**Har ikki** bosqichda, standart zanjirning oxirida (`95` ustuvorlik bilan)
ishlaydi. Chiquvchi foydali yuklamadagi (xabar kontenti, vosita chaqiruvi
argumentlari, vosita natijalari) **hamda** provayder javobidagi taniqli API
kaliti / maxfiy token naqshlarini berkitadi. Shu tariqa promptga joylangan (yoki
vosita natijasi tomonidan qaytarilgan) hisob ma’lumotlari yuqori oqimdagi
provayderga yoki mijozga qayta sizib chiqmaydi.

- **Faqat ixtiyoriy yoqiladi**, PII maʼlumotlarini niqoblash bilan bir xil qoida (Qatʼiy qoida #20 ga yondosh):
  `settings.credentialRedactionEnabled === true` **yoki**
  `CREDENTIAL_REDACTION_ENABLED=true` bo‘lmasa, o‘chirib qo‘yilgan. U o‘chiq bo‘lsa, himoya mexanizmi hech qanday amal bajarmaydi —
  u hech qachon bloklamaydi va hech qachon qayta yozmaydi.
- `redactCredentials()` butun foydali yuk/javob daraxtini kezib chiqadi (`walkValue()`,
  prototip ifloslanishidan himoyalangan, `WeakSet` orqali sikllardan himoyalangan) va mosliklarni
  `[REDACTED:<type>]` o‘rinbosari bilan almashtiradi, faqat amalda
  o‘zgargan shoxlarni klonlaydi.
- `CREDENTIAL_PATTERNS` LLM provayder kalitlarini (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokenlarini (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), to‘lov kalitlarini (Stripe, Square), bulut
  kalitlarini (AWS kirish kaliti, Twilio, SendGrid, Mailgun), yopiq kalitlar / JWTlarni,
  hisobga olish maʼlumotlarini o‘z ichiga olgan ulanish satrlarini (`mongodb://user:pass@...` va hokazo) hamda
  umumiy `Authorization`/`x-api-key`/`api-key`/`apikey` sarlavha qiymati
  andozasini qamrab oladi. Sarlavha shaklidagi kalitlar (`authorization`, `x-api-key`, `api-key`,
  `apikey`) umumiy matn regexi orqali emas, balki tuzilmaviy tarzda niqoblanadi (faqat qiymat,
  `Bearer `/`Basic ` kabi sxema prefiksi saqlanadi).
- Himoya mexanizmi hech qachon bloklamaydi; u faqat qayta yozadi (`modifiedPayload` /
  `modifiedResponse`) va izoh metamaʼlumotlarini qo‘shadi (`meta.credentialsRedacted`, `meta.count`).

Regressiyadan himoya testi: `tests/unit/credential-masker-guardrail.test.ts`.

## Asosiy kontrakt (`base.ts`)

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
  block?: boolean; // true zanjir bajarilishini darhol toʻxtatadi
  message?: string; // bloklanganda koʻrsatiladi
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // soʻrovni qayta yozish uchun preCall tomonidan qaytariladi
  modifiedResponse?: TValue; // javobni qayta yozish uchun postCall tomonidan qaytariladi
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

Himoya cheklovi `void`, `{}` yoki `{ block: false }` qiymatlaridan birini
qaytarish orqali «oʻzgarish yoʻq» holatini bildiradi. `modifiedPayload`/`modifiedResponse`
qaytarilishi zanjir boʻylab keyingi himoya cheklovlariga uzatilayotgan qiymatni
almashtiradi. `signal?: AbortSignal` chaqiruvchining hayot siklini himoya
cheklovlariga uzatadi. Soʻrovning bekor qilinishi ataylab qoʻllanadigan ochiq
oʻtkazish istisnosidir: media koʻpriklari ishni toʻxtatadi va tozalashni amalga
oshiradi, bunda xom media uni qoʻllab-quvvatlamasligi maʼlum boʻlgan maqsadga
qayta tiklanmaydi.

## Reestr (`registry.ts`)

Yagona `guardrailRegistry` nusxasi quyidagilarni taqdim etadi:

- `register(guardrail)` — himoya cheklovini qoʻshadi (yoki normallashtirilgan
  nom boʻyicha almashtiradi) va roʻyxatni `priority` qiymatining oʻsish tartibida
  qayta saralaydi.
- `clear()` / `list()` — maʼmuriy yordamchi funksiyalar.
- `runPreCallHooks(payload, context)` — faol himoya cheklovlarini ketma-ket
  bajaradi, foydali yuklamani `modifiedPayload` orqali uzatadi va birinchi
  `block: true` holatida toʻxtaydi.
- `runPostCallHooks(response, context)` — javob tomonida xuddi shu oqimni
  bajaradi.
- `resetGuardrailsForTests({ registerDefaults })` — holatni tozalaydi va
  testlarni izolyatsiya qilish uchun ixtiyoriy ravishda standart himoya
  cheklovlarini qayta roʻyxatdan oʻtkazadi.

Har ikkala bajaruvchi ham `{ blocked, payload|response, results, guardrail?, message? }`
qiymatini qaytaradi, bunda `results` har bir himoya cheklovi uchun `blocked`,
`skipped`, `modified`, `error` va `meta` maydonlarini oʻz ichiga olgan
`GuardrailExecutionResult` yozuvlari massivi boʻlib, kuzatuv uchun foydalidir.

### Har bir soʻrov uchun himoya cheklovlarini oʻchirish

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` joriy soʻrov uchun
oʻtkazib yuborilishi kerak boʻlgan himoya cheklovlari nomlarining takrorlanmaydigan
roʻyxatini jamlaydi. Manbalar (barchasi ixtiyoriy, barchasi birlashtiriladi):

- `apiKeyInfo.disabledGuardrails`
- Soʻrov tanasidagi `disabledGuardrails` (yuqori darajada)
- Soʻrov tanasidagi `metadata.disabledGuardrails`
- `x-omniroute-disabled-guardrails` sarlavhasi (yoki eski
  `x-disabled-guardrails`)

Qiymatlar satrlar massivi yoki vergul bilan ajratilgan satr boʻlishi mumkin;
nomlar kichik harflardagi kebab-case formatiga normallashtiriladi
(`pii_masker` → `pii-masker`). Natija `context.disabledGuardrails` orqali
reestrga uzatiladi va reestr mos keluvchi himoya cheklovlarini oʻtkazib yuboradi
(`results` ichida `skipped: true`).

## Bajarilish tartibi

`src/sse/handlers/chat.ts` va `open-sse/handlers/chatCore.ts` orqali oʻtadigan har bir soʻrov uchun:

1. `resolveDisabledGuardrails(...)` API kaliti, soʻrov tanasi va sarlavhalar asosida oʻtkazib yuboriladigan himoya mexanizmlari roʻyxatini tuzadi.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` himoya mexanizmlarini ustuvorlikning oʻsish tartibida ishga tushiradi:
   - Oʻchirilgan himoya mexanizmlari `skipped` sifatida qayd etiladi.
   - Har bir himoya mexanizmining `preCall` funksiyasi `modifiedPayload` orqali foydali yuklamani qayta yozishi mumkin.
   - Birinchi `block: true` zanjirni muddatidan oldin toʻxtatadi va ishlov beruvchi himoya mexanizmi tomonidan rad etilganlik javobini qaytaradi.
3. (Qayta yozilgan boʻlishi mumkin boʻlgan) foydali yuklama kombinatsiyalangan marshrutlash va yuqori oqimga joʻnatish jarayoniga oʻtadi.
4. Javob shakllantirilgach, `guardrailRegistry.runPostCallHooks(...)` javob ustida ayni zanjirni ishga tushiradi. Bu yerda `block: true` yuqori oqim javobini bekor qiladi.

Istisno chiqaradigan himoya mexanizmlari `error: <message>` bilan qayd etiladi va `logger.warn` orqali jurnalga yoziladi, ammo zanjir davom etadi — bu ataylab ochiq xato siyosati asosida ishlaydi.

## Konfiguratsiya

Ichki himoya mexanizmlari oʻqiydigan muhit oʻzgaruvchilari:

| Oʻzgaruvchi                           | Foydalanadigan mexanizm  | Taʼsiri                                                                                                                             |
| ------------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Aniqlashni butunlay oʻchirish uchun `false` qiymatini belgilang.                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Inʼeksiya siyosati: `warn`, `block` yoki `log`. Eski `redact` qiymati inʼeksiya matnini qayta yozmaydi.                             |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Inʼeksiya himoyasi rejimi; shuningdek, muhit oʻzgaruvchilarini **ustunlik bilan almashtiradigan** MB xususiyat bayrogʻi (MB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | `MODE=block` rad etadigan minimal jiddiylik darajasi: `high` (standart), `medium` yoki `low`.                                       |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | `INPUT_SANITIZER_BLOCK_THRESHOLD` uchun eski muqobil nom.                                                                           |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | `true` boʻlganda, soʻrovdagi PII tahrirlanadi (inʼeksiya rejimidan mustaqil ravishda).                                              |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (quyi oqim) | Javob tomonidagi niqoblash mexanizmi xatti-harakatini boshqaradi.                                                                   |

Modality Bridge himoya mexanizmlari ish vaqti konfiguratsiyasini muhit oʻzgaruvchilaridan emas, MB tomonidan qoʻllab-quvvatlanadigan sozlamalar omboridan (`getSettings()`) oʻqiydi. Vision uchun asosiy kalitlar:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` va
`modalityBridgeCacheMaxEntries`. Eski
`visionBridge*` kalitlari faqat hujjatlashtirilgan bir siklli oʻqish
zaxira varianti sifatida qabul qilinadi; boshqaruv panelidagi yozuvlar asosiy kalitlardan foydalanadi. Standart qiymatlar va zaxira variantni aniqlovchi
`src/shared/constants/modalityBridgeDefaults.ts` faylida joylashgan, eski
konstantalar esa `src/shared/constants/visionBridgeDefaults.ts` faylida saqlab qolingan.

Audio `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` va `modalityBridgeAudioMaxClips`, shuningdek, umumiy
`modalityBridgeCache*` sozlamalaridan foydalanadi. Audio uchun eski kalitlarga qaytish imkoniyati yoʻq, chunki bu
kalitlar Modality Bridge sxemasi bilan birga joriy etilgan.

Video `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` va
`modalityBridgeVideoTimeout`, shuningdek, umumiy `modalityBridgeCache*` sozlamalaridan foydalanadi.
U standart holatda oʻchirilgan, chunki FFmpeg/ffprobe ixtiyoriy operatsion
bogʻliqliklar hisoblanadi va kadrlarga tavsif yaratish kechikish hamda model xarajatini oshiradi.

## Maxsus Guardrail’lar

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

Qadamlar:

1. `BaseGuardrail`ni kengaytiruvchi `src/lib/guardrails/myGuardrail.ts` faylini yarating.
2. `preCall` va/yoki `postCall`ni amalga oshiring.
3. Import vaqtida roʻyxatdan oʻtkazing (`registerDefaultGuardrails`dan qoʻshing) yoki
   bajarilish vaqtida `guardrailRegistry.register(...)`ni chaqiring — registr
   bir xil normallashtirilgan nomga ega oldingi guardrail’ni almashtiradi.
4. Testlarni `tests/unit/` ichiga qoʻshing (mavjud misollar:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testlash

Maʼlum holatdan boshlash uchun testlar orasida `resetGuardrailsForTests()`dan foydalaning.
Boʻsh registr bilan boshlash va faqat test qilinayotgan guardrail’larni roʻyxatdan
oʻtkazish uchun `{ registerDefaults: false }`ni uzating. Vision Bridge bogʻliqliklarni
kiritishni (`deps.getSettings`, `deps.callVisionModel`) qabul qiladi; Audio Bridge esa
sozlamalar, imkoniyatlar, STT modelini tanlash, hisob maʼlumotlarini tekshirish va
transkripsiya uchun mos ekvivalent ulanish nuqtalarini taqdim etadi. Shu sababli testlar
har ikkala oqimni ham maʼlumotlar bazasi yoki tarmoqqa ulanmasdan sinashi mumkin.

## Shuningdek qarang

- `src/lib/guardrails/` — amalga oshirish
- `src/shared/utils/inputSanitizer.ts` — prompt-injection va PII niqoblashni
  taʼminlovchi umumiy detektor
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge standartlari va
  majburiy bridge modellari roʻyxati
- `src/shared/constants/modalityBridgeDefaults.ts` — umumiy Vision/Audio bajarilish muhiti standartlari
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonal qatlam (circuit breaker, kutish davrlari)
- `docs/reference/ENVIRONMENT.md` — muhit oʻzgaruvchilarining toʻliq maʼlumotnomasi

## Injection-guard marshrut qamrovi va red-team (8-bosqich · D blok)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) foydalanuvchi promptlarini
qabul qiladigan barcha marshrutlarni qamrab oladi. U `INJECTION_GUARD_MODE`ga amal qiladi
(standart `warn` = faqat jurnalga yozish; `block` = HTTP 400 `SECURITY_001`ni qaytaradi).

| Tur           | Marshrutlar                                                                                                                                          | Standart rejim |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Matn (mavjud) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Generativ     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Maʼlumotlar   | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Matnni ajratib olish (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`ni qamrab oladi.

**Red-team (har kecha, `nightly-llm-security.yml`):** promptfoo har bir marshrut
`INJECTION_GUARD_MODE=block` holatida OWASP-LLM korpusini bloklashini tekshiradi; garak
probelarni ishga tushiradi (maxfiy kalit boʻlmasa, oʻtkazib yuboradi).
Izchillik uchun `moderations` ham kiritilgan — `block` rejimidagi operatorlar uni
`resolveDisabledGuardrails` orqali istisno qilishi mumkin.

Har kechalik ish jarayoni (`.github/workflows/nightly-llm-security.yml`, cron + qoʻlda
ishga tushirish) ikkita vazifaga ega:

- **`promptfoo-guard` (bloklovchi)** — `INJECTION_GUARD_MODE=block` bilan
  `promptfoo eval -c promptfooconfig.yaml`ni ishga tushiradi. Har bir zararli holat
  (masalan, "barcha oldingi koʻrsatmalarni eʼtiborsiz qoldir…", DAN uslubidagi
  jailbreak’lar) javobda `error.code === "SECURITY_001"` mavjudligini, yaʼni guard
  soʻrovni amalda rad etganini tekshiradi.
- **`garak` (tavsiyaviy)** — lokal OmniRoute nusxasiga
  (`http://localhost:20128/v1`) qarshi garak’ni `--probes promptinject,dan,leakreplay`
  bilan ishga tushiradi. U provayder maxfiy kalitiga (`PROMPTFOO_PROVIDER_KEY`)
  bogʻlangan; kalit boʻlmasa muammosiz oʻtkazib yuboradi va `|| true` bilan
  yakunlanadi, shu sababli CI’ni muvaffaqiyatsiz qilmasdan hisobot beradi.

Guard yordamchisining (`createInjectionGuard` / `withInjectionGuard`) qamrovi
prompt qabul qiluvchi har bir `/v1` marshrutini oʻz ichiga oladi; prompt matni
`src/shared/utils/inputSanitizer.ts` ichidagi `extractMessageContents()` tomonidan
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`dan olinadi.
