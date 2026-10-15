# Guardrails (Kiswahili)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Chanzo rasmi:** `src/lib/guardrails/`
> **Ilisasishwa mwisho:** 2026-08-29 — v3.8.51 (asili ya nakala ya Video Bridge hutangazwa na mpigaji,
> bado haijathibitishwa na seva — imefafanuliwa kulingana na #11661)

Vizuizi vya ulinzi hutekeleza usalama, sera na mageuzi ya maudhui kwenye mpaka
kati ya OmniRoute na watoa huduma wa ngazi ya juu. Kila kizuizi cha ulinzi kinaweza kukagua (na
kwa hiari kukataa, kubadilisha au kuweka ufafanuzi kwenye) data za ombi (`preCall`) na
majibu ya mtoa huduma wa ngazi ya juu (`postCall`).

Mfumo ni wa **fail-open**: ikiwa kizuizi cha ulinzi kitatupa hitilafu kinapotekelezwa, sajili
hurekodi hitilafu hiyo na kuendelea na kizuizi kinachofuata badala ya kusababisha
ombi lishindwe. Kuzuia ni uamuzi wa moja kwa moja (`block: true`), kamwe si ajali.

## Vizuizi vya Ulinzi Vilivyojengewa Ndani

Sajili hupakia kiotomatiki vizuizi sita vya ulinzi kwa mpangilio wa kipaumbele wakati wa uingizaji
(angalia `registry.ts` → `registerDefaultGuardrails()`):

| Kipaumbele | Jina                | Hatua          | Faili                 |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nambari ndogo za kipaumbele hutekelezwa **kwanza**.

### Daraja la Maono (`visionBridge.ts`) — Daraja la Modaliti PR-1

Huzuia maombi yenye picha yanayoelekezwa kwa **miundo isiyo na uwezo wa kuona** na ama
huelekeza upya ombi zima kwa muundo wenye uwezo wa kuona au hubadilisha sehemu za
picha kwa maelezo ya maandishi yanayotolewa na muundo wa maono unaoweza kusanidiwa kabla
ya wito wa kwenda juu ya mfumo. Hii huwezesha watoa huduma wa maandishi pekee kushughulikia
mizigo yenye modaliti nyingi bila mabadiliko yanayoonekana.

Mtiririko:

1. Ruka ikiwa muundo lengwa tayari una uwezo wa kuona (isipokuwa kama uko katika
   orodha ya daraja la lazima `isVisionBridgeForcedModel`).
2. Toa sehemu za picha kupitia `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), ambayo hukabidhi jukumu kwa **kitambuzi kilichounganishwa cha
   midia** `detectMediaParts()` katika `open-sse/utils/mediaParts.ts` — chanzo
   kimoja cha ukweli kinachoshirikiwa na kichujio cha uoanifu cha combo.
   Utoaji unaruhusiwa tu kwa sehemu za kiwango cha juu zenye miundo ambayo
   `replaceImageParts` inaweza kuingiza tena (mkataba wa toa↔badilisha): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, na Responses API `input_image`. Matokeo yaliyopachikwa ndani na
   miundo ya viashiria pekee ni nyenzo za kichujio cha combo na kamwe hazitolewi.
   Ruka ikiwa hakuna iliyopatikana.
3. Tatua usanidi wa wakati wa utekelezaji kupitia `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): vitufe vipya vya mipangilio vya `modalityBridge*`
   vinapewa kipaumbele; vitufe vya zamani vya `visionBridge*` hubaki kama **mbadala wa mzunguko
   mmoja** (dirisha la kurejesha nyuma). Ruka kabla ya kupitia midia yoyote wakati
   daraja limezimwa.
4. Kiteuzi cha hali (`modalityBridgeVisionMode`, angalia jedwali hapa chini) huamua
   kuelekeza upya au kuelezea. Uelekezaji upya hurejesha `modifiedPayload` ambapo
   `model` pekee ndiyo imebadilishwa, pamoja na meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Njia ya kuelezea: punguza picha hadi `maxImages`, unda kidokezo kinachozingatia jukumu,
   kagua akiba ya maelezo, ita muundo wa maono **kwa sambamba**
   (`Promise.allSettled`), na uingize sehemu za maandishi za `[Image N]: <description>`
   mahali pake. Ufafanuzi ulioshindwa hutoa `null` na sehemu asili ya picha
   **huhifadhiwa** (#4012) — isipokuwa kwenye njia ya ufafanuzi ya combo wakati
   kila ufafanuzi umeshindwa, ambapo mfumo wa juu uliothibitishwa kutokuwa na uwezo wa kuona hupokea
   kishikilia nafasi cha `(unavailable — no vision-capable provider connected)` badala yake (#8430).
6. Rejesha `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Kiteuzi cha hali (`modalityBridgeVisionMode`)

| Hali       | Chaguomsingi | Tabia                                                                                                                                                                                                                                                                                                                      |
| ---------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔            | Heuristiki ya zamani, haijaguswa (#6640/#7204): miundo isiyo ya combo/`auto/` huelekezwa upya kwa muundo bora wa maono isipokuwa muundo asili tayari una vitambulisho vinavyoweza kutumika (hapo huelezewa); malengo ya combo huelezewa kila wakati.                                                                       |
| `describe` |              | Elezea kila wakati — sehemu ya uelekezaji upya inarukwa kabisa; muundo uliochaguliwa na mtumiaji hujibu kila wakati.                                                                                                                                                                                                       |
| `reroute`  |              | Lazimisha uelekezaji upya: kinga ya kudumisha muundo wenye vitambulisho inapitwa. Kinga ya vitambulisho vya **lengo** la uelekezaji upya bado inatumika — ikiwa hakuna lengo la maono linaloweza kutumika, ombi huendelea hadi kwenye ufafanuzi ili picha ghafi zisifikie kamwe mfumo wa nyuma wa maandishi pekee (#8430). |

Hali zilizolazimishwa hukatisha mchakato **kabla** ya heuristiki ya kiotomatiki kutekelezwa; tabia ya `auto`
inafanana baiti kwa baiti na kizuizi cha ulinzi cha kabla ya PR-1.

#### Upeo wa ufunguo wa API (`visionBridgeKeyScope.ts`)

Wakati ufunguo wa API wa mpigaji simu unawekea vikwazo `allowedConnections`, makundi ya mgao
(`allowedQuotas`) au miundo (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), daraja huchagua tu
miundo ya uelekezaji upya na maelezo ambayo ufunguo unaruhusiwa kutumia, kwenye miunganisho ambayo ufunguo
unaruhusiwa kutumia. Kisha wito wa maelezo hupitia kila wakati kitanzi binafsi cha OmniRoute chenye
kichwa cha `x-omniroute-self-loop-key-id`, ili ombi la gumzo linalopokea
litekeleze tena sera ya muunganisho na muundo ya ufunguo huo. `enforceApiKeyPolicy()`
huheshimu kichwa hicho tu pamoja na tokeni ya bearer ya kitanzi binafsi, hivyo kinaweza tu
kupunguza ufikiaji, na kitambulisho ambacho hakiwezi kutatuliwa hukataliwa.

Ikiwa hakuna muundo wa maono unaoruhusiwa kwa ufunguo huo, njia ya maelezo hujiweka kando na
ombi hupitishwa bila kubadilishwa, tabia ileile ya kuendelea bila kuzuia kama ilivyo kwa kizuizi cha ulinzi
kilichozimwa (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Maombi yasiyo na ufunguo, na funguo zisizo na vikwazo hivi, hutenda sawasawa
na hapo awali.

#### Kidokezo cha maelezo kinachozingatia jukumu (`modalityBridgeVisionTaskAware`)

Chaguo-msingi ni **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) huongeza
maandishi ya **ujumbe wa mwisho wa mtumiaji** (yaliyofupishwa hadi herufi 500) kwenye kidokezo
cha msingi cha maelezo, hivyo kuelekeza maelezo kwenye kile ambacho mtumiaji aliuliza
hasa (muundo wa codex-vision-proxy) na kuiomba modeli ya maono kunakili maandishi
yanayoonekana. Alama ikiwa imezimwa — au ikiwa hakuna maandishi ya mtumiaji — kidokezo cha msingi
hutumiwa bila kubadilishwa.

Ombi la self-loop la maelezo lenyewe linalooana na OpenAI (`callVisionModelSingle()`
katika `visionBridgeHelpers.ts`) kila mara huomba `image_url.detail: "high"` —
bila masharti, kwa kila mwitaji/mtoa huduma, bila kutegemea ishara yoyote ya kiteja.
Usampulishaji wa kiwango cha chini cha maelezo hupunguza usahihi wa OCR kwa kazi hii hasa ya
kunakili maandishi ambayo kidokezo hiki huomba, kwa hivyo mwito wa maelezo wenyewe kila mara huomba
kiwango cha juu cha maelezo bila kujali kiwango cha maelezo kilichotumiwa na ombi asili
lililoingia. Hii huathiri tu mwili wa ombi la ndani la maelezo; haibadilishi jinsi
OmniRoute inavyosambaza `image_url.detail` ya mwitaji mwenyewe kwenye ombi la msingi —
chaguo-msingi hilo hutumika kando, na kwa viteja vya OpenCode vilivyotambuliwa pekee, katika
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Tawi la
umbizo la waya la Anthropic la self-loop ya maelezo halina uga wa `detail`
na haliathiriwi na chaguo-msingi lolote kati ya hayo.

#### Kikomo cha matokeo ya maelezo (`modalityBridgeVisionMaxChars`)

| Ufunguo                        | Chaguo-msingi | Masafa           |
| ------------------------------ | ------------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`           | `0` au 100–50000 |

`0` (chaguo-msingi) humaanisha **hakuna kikomo** — maelezo yanayorejeshwa na
`callVisionModel()` hupitishwa bila kubadilishwa, hivyo kuhifadhi tabia iliyopo.
Thamani yoyote katika masafa ya 100–50000 hufupisha maelezo kwa kiambishi
`…` kabla hayajaunganishwa tena kama `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` katika `src/lib/guardrails/visionBridge.ts`).
Ongeza kiwango hiki kwa kazi za OCR zenye maelezo mengi ambapo modeli ya hatua inayofuata
inahitaji unakili kamili; kipunguze ili kuweka kikomo cha matumizi ya tokeni kwenye modeli za
maono zenye maelezo mengi. Uga wa dashibodi upo katika paneli ya Advanced ya kichupo cha Vision
(`modality-bridge-max-chars` katika `ModalityBridgeVisionTab.tsx`) na huinua thamani yoyote
kati ya 1 na 99 hadi kiwango cha chini cha 100 huku ukiacha `0` iliyowekwa wazi
bila kuguswa — `0` ni thamani halali ya Zod kivyake
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), si tu
chaguo-msingi la "haijawekwa".

#### Akiba ya maelezo (`modalityBridge/bridgeCache.ts`)

Akiba ya LRU + TTL ya ndani ya kumbukumbu kwa matokeo ya maelezo, inayoshirikiwa katika mchakato mzima.
Ufunguo = `sha256(imageRef + composedPrompt + configuredBridgeModel)` pamoja na
uundaji wa fremu wenye kiambishi cha urefu (hakuna migongano ya mipaka ya uga). Kipengele cha modeli ni
modeli ya daraja **iliyosidiwa**, si modeli iliyojibu kwa hakika —
`callVisionModel` inaweza kutumia mbadala ndani yake, na kuweka ufunguo kwa kila jaribio
kungesambaratisha akiba. Maelezo yaliyoshindwa kamwe hayahifadhiwi kwenye akiba. Mipangilio:

| Ufunguo                         | Chaguo-msingi | Masafa  |
| ------------------------------- | ------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`        | —       |
| `modalityBridgeCacheTtlMinutes` | `60`          | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`         | 10–5000 |

#### Urekebishaji wa picha za mbali (self-loop ya maelezo/uletaji wa base64)

Daraja linapoleta picha ya **mbali** lenyewe — mwito wa ndani wa maelezo wa Anthropic
na ubadilishaji wa base64 wa umbizo la waya la claude
(`ensureBase64ImagesForClaudeWire`), zote kupitia
`fetchRemoteImageAsDataUri()` katika `visionBridgeHelpers.ts` — URI ya data inayotokana
hupitishwa kupitia `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) kabla ya kupachikwa katika ombi la modeli ya
maono. Picha kubwa kupita kiasi hupunguzwa hadi **upande mrefu wa 2048px** (kulingana
na kikomo cha kubadilisha ukubwa ambacho OpenAI/Anthropic tayari hutumia upande wa seva), jambo linalopunguza
baiti/muda wa kusubiri wa upakiaji bila kubadilisha kile ambacho modeli ya maono huona. Kubadilisha ukubwa
hutumia `sharp`, inayopakiwa kupitia uletaji badilifu: kwenye mfumo ambapo faili yake ya asili
ya binary inashindwa kupakiwa, `normalizeDataUri()` **haitupi hitilafu kamwe** — badala yake
hupitisha baiti asili bila kubadilishwa, ili njia ya maelezo/ubadilishaji wa base64
iendelee kufanya kazi kila mara. Baiti zisizo za picha (uletaji ambao haukurejesha picha
inayoweza kusimbuliwa) pia hupitishwa bila kuguswa. Urekebishaji huu unahusu tu picha
ambazo daraja huleta kwa ajili ya mwito wake wa ndani — hautumiki kamwe kwenye mzigo ghafi
unaopitishwa moja kwa moja wa mwitaji, kulingana na kanuni ya kubadilisha tu baada ya
idhini (Hard Rule #20).

#### Schema ya mipangilio + uhamishaji

Funguo mpya za `modalityBridge*` huthibitishwa na Zod katika `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, utatu wa `modalityBridgeCache*`, na kundi la
`modalityBridgeAudio*` linalotumiwa na Audio Bridge. Uhamishaji
`141_modality_bridge_settings.sql` hunakili thamani zilizopo za zamani za
`visionBridge*` kwenda kwenye funguo mpya zinazolingana (unaweza kutekelezwa mara nyingi bila athari,
na kamwe hauandiki juu ya thamani ya `modalityBridge*` iliyowekwa na mwendeshaji); funguo za zamani
zinaendelea kukubalika kama mbadala wa usomaji kwa mzunguko mmoja wa toleo.

#### Kichwa cha uwazi + takwimu

Majibu yaliyobadilishwa na maelezo hubeba
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(kinachoundwa na `buildModalityBridgeHeader()` katika `modalityBridge/bridgeStats.ts`,
na kuwekwa na `withModalityBridgeHeader()` katika `src/sse/handlers/chatHelpers.ts`).
Maombi yaliyoelekezwa upya hayapati kichwa **chochote** — mzigo haukuguswa na ubadilishaji wa
modeli tayari unaonekana katika uga wa `model` wa mwili wa jibu.

`GET /api/modality-bridge/stats` (uthibitishaji wa usimamizi, kiwango sawa na
`GET /api/settings`) hurejesha vihesabu vya kila aina ya modali vilivyo kwenye kumbukumbu
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` kwa `vision`, `audio`, na
`video`. `averageLatencyMs` hutumia `latencySamples`, si majaribio yote, kama
kigawanyo chake; operesheni isiyo na kipimo cha muda haitengenezi sampuli bandia ya
milisekunde sifuri. `bridged` hubaki kuwa lakabu inayooana na matoleo ya awali kwa
ubadilishaji uliofanikiwa; majaribio yaliyoshindikana hayaiongezi.
Vihesabu huwekwa upya mchakato unapoanzishwa upya kimakusudi
(telemetria, si uhasibu).

#### Usanidi wa dashibodi

Ukurasa maalumu wa dashibodi ni
`/dashboard/settings/modality-bridge`. Vichupo vyake vya `Vision`, `Audio`,
na `Video` vinavyoweza kufikiwa kupitia URL huhifadhi vigezo vya hoja wakati wa kubadilisha thamani ya `tab`.
Kichupo cha Vision huonyesha uwezeshaji, hali, uteuzi wa modeli (ikiwemo chaguo-msingi la
kiotomatiki), utoaji wa maelekezo unaozingatia jukumu, vikomo vya kina vya muda wa kusubiri/picha/urefu wa maelezo/kache,
vihesabu vya wakati wa utekelezaji, na ombi la sampuli lenye ulinzi. Kichupo cha Audio pia
kinafanya kazi: huonyesha uwezeshaji, kiteua modeli za STT pekee chenye Auto, vikomo vya muda wa kusubiri/urefu wa juu wa klipu, vihesabu vya
sauti, na jaribio la sampuli ya `input_audio`. Kichupo cha Video kinafanya kazi: huripoti
hali ya wakati wa utekelezaji ya FFmpeg/ffprobe — mojawapo ya hali nne bayana za UI (`unknown` wakati
uchunguzi unaendelea au haukuweza kukamilika, `restricted` kwenye mpangishaji wa dashibodi usio wa loopback
ambapo uchunguzi unarukwa upande wa mteja, `unavailable` baada ya kuchunguzwa
na kuthibitishwa kuwa haupo, au `available` pamoja na matoleo ya FFmpeg/ffprobe) — huhifadhi
vikomo vya uwezeshaji/modeli/fremu/video/muda wa kusubiri, huchuja kiteua modeli ili kuonyesha modeli zenye uwezo wa
kuona, na huonyesha vihesabu vya video.

Kadi ya zamani ya Vision Bridge chini ya mipangilio ya AI ni kiungo cha uoanifu kinachoelekea kwenye
ukurasa mpya; haimiliki tena nakala ya pili ya fomu. Media Providers pia
huunganisha mitiririko ya kazi ya Image-to-Text na Speech-to-Text na vichupo husika vya Modality
Bridge bila kuondoa mazingira yaliyopo ya majaribio ya Speech-to-Text.

**Upitaji wa udhibiti wa uingizaji kwa self-loop:** wakati mwito wa kuelezea unapopitishwa kupitia
`/v1` self-loop ya OmniRoute yenyewe (modeli isiyo ya kawaida ya mtoa huduma), ombi dogo hutuma
`x-omniroute-admission-bypass: internal` na huthibitishwa kwa kitambulisho kilichotatuliwa cha
self-loop — kiashiria cha ndani cha `sk_omniroute` katika hali ya ndani, au
ufunguo wa mazingira wa `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` uliosanidiwa na mwendeshaji (#1350) ili
usambazaji wenye `REQUIRE_API_KEY=true` bado uweze kutekeleza mwito wa kuelezea. Upitaji huo
unakubaliwa kwa vitambulisho hivyo mahususi pekee, kwa hivyo wateja wa nje hawawezi kutumia
kichwa hicho kuruka udhibiti wa uingizaji.

Chaguo-msingi za zamani zipo katika `src/shared/constants/visionBridgeDefaults.ts`;
chaguo-msingi mpya za hali/uzingatiaji wa jukumu/kache na kitatuzi cha mipangilio zipo katika
`src/shared/constants/modalityBridgeDefaults.ts`. Kinga hiyo huonyesha chaguo la konstrakta la
`deps` ili majaribio yaweze kuingiza utekelezaji bandia wa `getSettings` na
`callVisionModel`.

### Daraja la Sauti (`audioBridge.ts`) — Modality Bridge PR-3

Huzuia maombi ya gumzo yenye sauti kabla hayajafika kwenye lengwa ambalo
halijulikani kuwa linakubali ingizo la sauti. Kamwe haibadilishi njia ya ombi la gumzo: sehemu za sauti
hunakiliwa kupitia sehemu-ncha iliyopo ya multipart inayooana na OpenAI na
modeli ya gumzo iliyochaguliwa huendelea na nakala za maandishi.

Mtiririko:

1. Tatua `supportsAudio` kupitia `getResolvedModelCapabilities()`. Metadata bayana ya
   sajili ya watoa huduma hupewa kipaumbele, ikifuatiwa na metadata tuli ya modeli, kisha
   `modalities_input` iliyosawazishwa. Orodha ya ingizo iliyotangazwa isiyo na `audio` ni `false`;
   kutokuwepo kwa ushahidi wa uwezo hubaki `null`. `false` na `null` zote huamilisha
   daraja la tahadhari, huku `true` ikilipita.
2. Tatua mipangilio ya `modalityBridgeAudio*` na utoe sehemu za sauti za kiwango cha juu
   zinazoweza kuunganishwa kutoka kila ujumbe kupitia kigunduzi cha pamoja cha `detectMediaParts()`.
   Miundo ya mawasiliano inayotumika ni OpenAI `input_audio`, `audio_url`, na
   `source.media_type: "audio/*"`. Sauti iliyopachikwa hugunduliwa kwa ajili ya uelekezaji lakini
   haiondolewi na njia ya kuunganisha. Kazi huwekewa kikomo na `modalityBridgeAudioMaxClips`;
   sehemu zinazofuata huachwa bila kubadilishwa.
3. Heshimu `provider/model` iliyosanidiwa, au uruhusu `selectAudioBridgeModel()` kupitia
   `AUDIO_TRANSCRIPTION_PROVIDERS` kwa mpangilio thabiti wa katalogi na kuchagua
   modeli ya kwanza yenye kitambulisho kinachoweza kutumika cha mtoa huduma anayetumika.
4. `callAudioTranscription()` hubadilisha sauti ya base64/data-URI kuwa `file` ya multipart,
   au hupakua `audio_url` ya mbali kupitia kinga ya miunganisho ya nje inayoruhusu tu anwani za umma,
   pamoja na ufungaji wa DNS na kikomo cha MB 25. Kisha hutuma faili na modeli iliyochaguliwa kwa POST
   kwenda kwenye `/v1/audio/transcriptions` self-loop ya ndani, ikithibitishwa kwa
   `resolveSelfLoopBearer()`. Njia iliyopo ya unakili hutekeleza utafutaji wa kawaida wa
   vitambulisho, ushughulikiaji wa kipindi cha kusubiri/kikomo cha kiwango, na usambazaji kwa mtoa huduma.
5. Miito iliyofanikiwa hubadilisha sehemu zake kuwa `[Audio N]: <transcript>`. Miito
   huendeshwa kwa `Promise.allSettled`: hitilafu ya mwito mmoja huhifadhi sehemu hiyo ya awali ya
   sauti (mkataba wa #4012). Ikiwa kila mwito utashindwa na imethibitishwa kuwa lengwa lina
   `supportsAudio === false`, sehemu hizo huwa
   `[Audio N]: (haipatikani — hakuna mtoa huduma wa STT aliyeunganishwa)` (mkataba wa #8430). Kwa
   lengwa lisilojulikana (`null`), matokeo ambayo yote yameshindwa huachwa bila kubadilishwa. Lengwa
   lililothibitishwa kuwa la maandishi pekee bila kitambulisho cha STT kinachoweza kutumika hupokea ujumbe huo huo
   bayana wa mbadala bila kutoa mwito wa mtandao.

Nakala zilizofanikiwa hutumia kache ya LRU/TTL ya Modality Bridge inayotumika katika mchakato mzima.
Ufunguo huunganisha rejeleo la sauti, lebo thabiti ya operesheni ya `audio-transcription`,
na modeli ya STT iliyochaguliwa; hitilafu kamwe hazihifadhiwi kwenye kache. Majaribio ya sauti husasisha
vihesabu vya pamoja vya `bridged`, `cacheHits`, `failures`, na `lastUsedAt`.
Majibu yaliyobadilishwa hubeba
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; maombi ambayo
hayajabadilishwa hayapokei sehemu ya Audio Bridge.

Mipangilio ya wakati wa utekelezaji huhifadhiwa kwenye DB na kuthibitishwa kwa Zod:

| Ufunguo                       | Chaguomsingi | Masafa                 |
| ----------------------------- | ------------ | ---------------------- |
| `modalityBridgeAudioEnabled`  | `true`       | —                      |
| `modalityBridgeAudioModel`    | `""`         | Otomatiki au ID ya STT |
| `modalityBridgeAudioTimeout`  | `60000`      | 1000–300000            |
| `modalityBridgeAudioMaxClips` | `3`          | 1–10                   |

Akiba ya pamoja inaendelea kudhibitiwa na `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, na `modalityBridgeCacheMaxEntries`.

### Daraja la Video (`videoBridge.ts`, `videoBridgePipeline.ts`)

Huzuia sehemu za video za kiwango cha juu katika `messages` za Chat Completions na
`input` ya Responses API kabla ya lengo lisilo na usaidizi asilia wa video
unaojulikana kuitwa. Miundo inayotumika ni `input_video`, `video_url`,
`video_source`, URL za HTTPS, na URI za data za `data:video/*;base64,...`.
Majina ya kawaida ya faili yaliyo kwenye maandishi hayachukuliwi kuwa video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) inamiliki upitiaji wa ombi,
ukaguzi wa uwezo/sera, ujumlishaji wa kila ombi, na data ya majibu. Kazi ya kila
video — upatikanaji, akiba ya matokeo yote, ufafanuzi wa mfuatano wa fremu
(ambao huunganisha nakala yoyote ya sauti iliyotangazwa na mwombaji), pamoja na
vipimo/ughairi/usafishaji wa kila jaribio — imefichwa nyuma ya `processVideoPart`
katika `videoBridgePipeline.ts`, ambayo huitwa mara moja kwa kila sehemu ya video
ndani ya kitanzi cha `preCall`. Moduli hiyo pia hufafanua mipaka bayana ya porti
`VideoMediaBrokerPort` (kupata baiti na kutoa fremu zilizochaguliwa),
`VideoAudioTranscriptionPort` (kuunganisha nakala ya sauti iliyotangazwa na
mwombaji na maelezo mafupi ya fremu zilizochaguliwa), na `VideoDrilldownPort`
(mpaka wa uhifadhi wa uchanganuzi wa kina wa fremu; bado haujaunganishwa kwenye
`processVideoPart` — ni njia tofauti ya `/api/modality-bridge/video/drilldown`
pekee inayoandika maingizo ya uchanganuzi wa kina kwa sasa).

Njia ya umma ya ombi ya `/v1` haiingizi wala kuanzisha mchakato tanzu. Video za
mbali hupakuliwa chini ya kikomo cha MiB 50; video za base64 zilizopachikwa zina
kikomo cha kihafidhina cha MiB 36 kilichosimbuliwa kwa kila video ili bahasha ya
modeli/ujumbe/uundaji wa fremu iweze kusalia ndani ya kikomo cha upokeaji wa ombi
la umma la JSON cha MiB 50. Urefu uliopachikwa na makadirio ya ukubwa
uliosimbuliwa hukaguliwa kabla ya kutengewa kumbukumbu. HTTPS inahitajika kwenye
URL ya awali ya mbali na kila uelekezaji upya, kwa kutumia kinga iliyopo ya
miunganisho ya nje ya umma pekee yenye ubandikaji wa DNS. Kisha baiti huvuka mpaka
halisi wa ndani wa dalali wa `POST /api/modality-bridge/video/extract`. Njia hiyo
ni `LOCAL_ONLY` na `SPAWN_CAPABLE`, hukubali tu ombi lililothibitishwa kwa kila
mchakato kutoka kwenye loopback inayoaminika, na kamwe haikubali URL, njia ya
mfumo wa faili, faili tekelezi, au orodha ya hoja. Mchakato wa ukubwa wa kiini cha
API na kisomaji endelevu cha kiini cha kidhibiti hutekeleza kwa kujitegemea
kikomo cha ingizo la dalali cha MiB 50. Foleni yake yenye mipaka huendesha utoaji
mmoja kwa wakati mmoja, huruhusu kazi nne zinazosubiri, na huweka kikomo cha
ingizo linalosubiri kuwa MiB 100.

Ndani ya dalali, `ffprobe` husoma faili ya ndani ya faragha; orodha isiyobadilika
ya miundo inayoruhusiwa haijumuishi miundo ya orodha za kucheza na manifesti.
Kwa kontena zinazoruhusiwa za familia ya MOV, marejeleo ya nje ya data ya MOV
husalia yamezimwa kwa chaguomsingi, na amri isiyobadilika haiwashi matumizi yake.
`ffprobe` na `ffmpeg` zote hutumia orodha ya itifaki zinazoruhusiwa ya `file`
pekee, uzi mmoja, safu za hoja zisizobadilika, bila shell, na faili tekelezi
zinazotafutwa kutoka `PATH`. Mitiririko ya picha za jalada zilizoambatishwa si
viteuliwa vinavyoweza kuchezwa. Mitiririko yote inayoweza kuchezwa lazima itimize
vikomo, na mtiririko chaguomsingi uliobainishwa hupendelewa kabla ya mbadala
thabiti wa faharasa ya chini zaidi. Video zinawekewa kikomo cha sekunde 600,
pikseli 8,192 kwa kila kipimo, na pikseli chanzo 33,554,432. FFmpeg huchagua
fremu 1–16 za JPEG za sehemu za kati, hupunguza ukingo mrefu hadi pikseli 1,024
bila kukuza ingizo dogo, na kamwe haipokei URL. Uteuzi ni `uniform` kwa
chaguomsingi. Sera ya hiari ya `scene_aware` na sera ya majaribio ya
`segment_aware` hufanya pitio moja la ziada lisilobadilika la FFmpeg kwenye
mtiririko wa ndani ambao tayari umethibitishwa, huteua mihuri ya muda ya mandhari
ya `showinfo` yenye mipaka, na hurudi kwa njia thabiti kwenye sehemu zilezile za
kati zilizosambazwa kwa usawa iwapo kitambuzi kitashindwa, muda utaisha, towe
litakuwa na muundo usio sahihi, au seti ya viteuliwa itakuwa tupu. Hali ya
kutambua sehemu hugawa sampuli za sehemu za kati kwa uwiano wa vipindi vya
mandhari vilivyothibitishwa; ushahidi wa kutambua sehemu na mwenendo wa kurudi
kwenye mbadala umefafanuliwa hapa chini. Kikomo kisichozidi cha fremu 16
hutumika baada ya uteuzi katika kila sera. Wakati ombi linalotambua mandhari lina
bajeti ya fremu moja pekee, hutumia sehemu ya kati iliyosambazwa kwa usawa ya
video nzima inayotumika au dirisha la umakini na huripoti
`policyEffective: uniform`: fremu moja ya mandhari iliyoteuliwa haiwezi kuhifadhi
ncha zote mbili za muda. Mwombaji anaweza kwa hiari kutoa dirisha lenye mwisho
la umakini (sekunde za `start`/`end`); mipaka hubanwa kwa muda wa media, madirisha
yaliyogeuzwa au yasiyo na ukomo hukataliwa, na sera zote za uteuzi hutekelezwa
tu ndani ya kipindi kilichosanifishwa. Dirisha linalotokana hujumuishwa katika
metadata ya uteuzi na katika kiambishi awali kisichoaminika cha maelezo ili
modeli za hatua zinazofuata ziweze kutofautisha dondoo iliyolengwa na ratiba
nzima ya wakati.

Umakini wa kisemantiki wa maelezo mafupi ni mpangilio tofauti na bayana. Hali
chaguomsingi ya uchanganuzi ya `full` huhifadhi kidokezo kilichopo cha fremu na
kamwe haisambazi maandishi ya ombi kwa modeli ya maelezo mafupi. Katika hali ya
`focused`, daraja husoma tu `text`/`input_text` ya karibuni zaidi, isiyo tupu na
iliyoandikwa na mtumiaji kutoka kwenye kontena lilelile la Chat au Responses,
huisanifisha kuwa NFC, hukusanya vibambo dhibiti na nafasi nyeupe, na huiwekea
kikomo cha nukta 500 za msimbo wa Unicode. Matokeo tupu hurudi kwenye kidokezo
halisi cha `full`. Dokezo linaloweza kutumika huwasilishwa kama JSON katika bloku
maalumu ya muktadha wa mtumiaji usioaminika na linaweza tu kutanguliza maelezo
yanayoonekana; haliwezi kubatilisha onyo tofauti dhidi ya kufuata maagizo
yanayoonekana au kusikika kwenye media. Umakini wa maandishi kamwe haukadirii
`start`/`end` wala kubadilisha kichagua sampuli cha muda.

#### Ushahidi wa kimuundo wa sehemu wa FU-07

`segment_aware` hutumia pitio moja la uchanganuzi wa awali lenye mipaka kwenye
mtiririko wa video wa ndani ambao tayari umethibitishwa. Msururu thabiti wa vichujio kwanza hupunguza ukubwa hadi upana usiozidi pikseli 320,
hugundua mabadiliko ya mandhari na vipindi vilivyoganda, kisha huchukua sampuli ya fremu 1 kwa
sekunde ili kupima ukungu, wastani wa luma, na taarifa za anga/muda. Pitio hilo
limewekewa kikomo cha sampuli 600 za kimuundo, uzi mmoja wa FFmpeg/kichujio, orodha zilezile za ruhusa za
itifaki ya `file` pekee na kontena, kikomo cha MiB 1 cha matokeo ya mchakato,
na muda usiozidi sekunde 30 ndani ya usitishaji/mwisho wa muda unaoshirikiwa wa broker. Halikubali kamwe
amri, kichujio, njia, au URL kutoka kwenye ombi.

Thamani za kimuundo ni ushahidi wa sampuli unaoweza kurudiwa kwa uthabiti, si uelewa wa kisemantiki wa
video. Hazibaini mada, vitendo, manukuu, usemi, au dhamira ya mtumiaji.
Mipaka ya mandhari na kuganda huunda sehemu; kiwango cha kuganda, ukungu,
mwangaza, undani wa anga, na mabadiliko ya muda huathiri tu jinsi bajeti iliyopo ya
fremu 1–16 inavyogawiwa. Sehemu iliyoganda kabisa huwekewa kikomo cha fremu moja,
ilhali sehemu ambazo hazijaganda hushindania bajeti iliyobaki. Mipaka
inapozidi idadi ya fremu, ufunikaji sawia wa mstari wa muda hudumishwa ili mikato ya haraka ya mwanzo
isifiche sehemu ndefu ya mwisho. Mipaka ya mandhari iliyo ndani ya mwonekano wa uchanganuzi wa sekunde 1
kutoka kwenye mpaka wa kuganda huunganishwa.

Vichujio vinavyokosekana, ushahidi wenye muundo mbaya/mtupu, hitilafu ya kigunduzi, au kuisha kwa muda wa
uchanganuzi wa awali wenye mipaka husababisha mfumo kuruhusu matumizi ya sera ileile ya sehemu za kati zilizo sawia. Usitishaji wa
mpigaji au mwisho wa muda wa broker hausababishi hali hiyo ya kuruhusu: husitisha mchakato mdogo
unaoendelea, huzuia uchomoaji wa fremu unaofuata, na mti binafsi wa muda
huondolewa katika `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` hutengeneza vielelezo halisi vya FFmpeg vinavyoweza kurudiwa kwa uthabiti
kwa ajili ya kuokoa miito ya manukuu baada ya kuondoa nakala, ugawaji wa bajeti kwa mwendo msongamano,
ushahidi wa ukungu/mwangaza/SI-TI, mikato ya haraka yenye sehemu ndefu ya mwisho, na
matokeo chanya ya uongo ya kufifia taratibu. Hurekodi muda halisi wa uchanganuzi wa awali na,
mahali ambapo `/usr/bin/time` inapatikana, CPU ya mchakato mtoto na kiwango cha juu cha RSS. Ukaguzi wake wa ubora ni vigezo
vya kimuundo pekee. Ubora wa modeli halisi ya manukuu unabaki `HOLD` kwa sababu zana hii haina
endpoint iliyoidhinishwa wala mwamuzi aliyefungwa. Uokoaji wa fedha pia unabaki `HOLD`
isipokuwa `--caption-cost-per-call-usd` itoe makadirio bayana chanya ya gharama kwa kila mwito;
skripti haitungi kamwe matokeo yoyote kati ya hayo.

Kila fremu imewekewa kikomo cha MiB 4, fremu zote ghafi kwa pamoja MiB 23, na
jibu la broker lililoserialishwa MiB 32. Saraka binafsi ya muda huondolewa
katika `finally`. OmniRoute haijumuishi FFmpeg na haikubali njia maalum ya
programu tekelezi. Kabla ya kuweka manukuu, daraja hutekeleza pitio la kihafidhina la kuondoa nakala za
mwonekano: kila JPEG hupunguzwa kuwa bafa ya kijivu ya 16×16 na
hulinganishwa tu na fremu ya mwisho iliyohifadhiwa. Kwa bajeti ya manukuu iliyoombwa
inayozidi fremu moja, uchomoaji hutoa
mkusanyiko wenye mipaka wa fremu teule wa hadi mara mbili ya bajeti hiyo na kamwe hauzidi fremu 16.
Kikomo kilichoombwa hutumika tu baada ya kuondoa nakala, huku fremu teule za kwanza na za mwisho
zikihifadhiwa wakati wa upunguzaji wa mwisho ikiwa bajeti ni angalau
mbili. Sera yenye toleo la
`grayscale-16x16-mean-cells-v2` hutumia thamani kubwa zaidi kati ya wastani wa tofauti ya luma na
uwiano wa seli za kijipicha ambazo tofauti yake iliyorekebishwa ni angalau 0.05. Kizingiti cha
nakala ni thamani thabiti ya 0.04, iliyochaguliwa kwa ajili ya kutabirika badala ya
kuwekwa wazi kama mpangilio wa wakati wa utekelezaji. Ishara hii ya pili ya
utofautishaji wa juu huhifadhi mwendo mdogo na mabadiliko ya maandishi yanayoonekana ambayo
ulinganishaji wa wastani pekee unaweza kuficha. Hitilafu za kilinganishi au kisimbuaji husababisha mfumo kuruhusu kuendelea na kudumisha
ufunikaji. Metadata ya matokeo hutenganisha fremu teule zilizochomolewa, fremu zilizotumiwa kwa mafanikio,
na nakala za mwonekano zilizoondolewa.

Sehemu ya video iliyowekewa alama bayana inaweza kuomba jedwali la mawasiliano lenye mihuri ya muda.
Daraja huunda gridi ya JPEG yenye hadi safu wima 4 na fremu 16. Kila seli ya pikseli 512 huandika
muhuri wa muda wa chanzo chake ndani ya ukanda wa chini wenye utofautishaji wa juu, huku mihuri hiyo ya muda
ikiendelea kuwepo katika metadata ya maandishi kwa ajili ya uhusishaji na ukaguzi wa baadaye. JPEG kamili
inaendelea kuwekewa kikomo cha MiB 32. Ikiwa `sharp` haiwezi kusimbua au kuunda gridi,
daraja hurudi kutumia fremu mahususi za JPEG; usitishaji wa mteja bado huenezwa
kupitia operesheni ya jedwali.

Ushahidi wa kupandishwa hadhi umetenganishwa kimakusudi na kipimo kidogo cha utendaji cha utungaji wa sintetiki.
`scripts/perf/video-bridge-contact-sheet-eval.ts` hufafanua zana ya A/B yenye toleo la schema
kwa modeli halisi za kuona zinazooana na OpenAI. Hupima
tokeni zilizoripotiwa na mtoa huduma, ucheleweshaji wa muda halisi kutoka mwanzo hadi mwisho (ikiwemo uundaji wa jedwali),
idadi ya miito ya modeli, na uhifadhi wa mambo yaliyofafanuliwa kwenye manifest. Majibu ghafi ya modeli
hayaandikwi kwenye ripoti; ni dondoo za SHA-256 na vitambulisho vya mambo yaliyolingana pekee vinavyohifadhiwa. Zana
haifanyi mwito wowote wa mtandao au wa modeli inayolipiwa isipokuwa `--execute-real` ipitishwe na
`--model`, `OMNIROUTE_BASE_URL`, na `OMNIROUTE_API_KEY` zisanidiwe. Bila
utekelezaji huo halisi ulioidhinishwa wazi, uamuzi wake unaosomeka na mashine hubaki `HOLD`; vipimo vya
mzigo wa sintetiki/idadi ya miito pekee si ushahidi wa kupandishwa hadhi.

Wapigaji wanaweza kuambatisha safu ya hiari ya `transcript.cues` kwenye sehemu ya video
inayotumika ikiwa tayari wana maandishi yaliyopangiliwa kwa muda. Kila kidokezo lazima kiwe na `text`, kipindi
chenye kikomo cha `start`/`end` kilicho ndani ya muda uliopimwa, na `source` iliyoruhusiwa
(`client`, `embedded`, au `audio-bridge`); `confidence` huwa `1` kwa chaguo-msingi
na lazima ibaki kati ya `0` na `1`. Vidokezo vinavyofanana kabisa huunganishwa.
OmniRoute haianzishi kamwe unukuzi kutokana na metadata hii: vidokezo vilivyothibitishwa
hunakiliwa kwenye matokeo yaliyoelezwa pamoja na chanzo, kiwango cha uhakika, na kipindi, na
huonyeshwa kama uchunguzi usioaminika sambamba na manukuu ya fremu. Maandishi yasiyo sahihi,
yaliyo nje ya masafa, au yasiyo na asili inayojulikana hukataliwa badala ya kuchanganywa kwenye
mtiririko wa manukuu. Kwa sasa uga wa `source` hutangazwa na mpigaji, si
kuthibitishwa na seva: OmniRoute huhakikisha kwamba thamani hiyo ni mojawapo ya mifuatano mitatu
inayoruhusiwa, lakini bado haithibitishi kikriptografia kwamba lebo ya
`embedded` au `audio-bridge` ilitoka kweli kwenye uchomoaji unaomilikiwa na seva.
Chukulia `source` kama kidokezo kisichoaminika hadi uthibitishaji huo utakapotekelezwa;
usijenge maamuzi ya uidhinishaji juu yake.

Mpigaji wa kiwango cha juu anaweza kutoa track ya `audioTranscript` iliyoidhinishwa tayari
kwa video hiyo hiyo. Kiunganishi cha muunganiko huendesha uchunguzi wa picha na sauti chini ya
kikomo kimoja cha muda na ishara moja ya kusitisha, huupanga kwenye ratiba moja ya wakati, huondoa
nakala zinazofanana kabisa, na huripoti matokeo ya sehemu wakati upande mmoja tu unapofaulu.
`audioTranscript` isiyo halali husababisha matokeo hayo ya sehemu — maelezo ya picha
huhifadhiwa na tawi la sauti hurekodi msimbo wa hitilafu uliosafishwa —
badala ya kufanya video nzima ishindwe. Upatikanaji wa kila tawi, alama ya sehemu,
na misimbo ya hitilafu iliyosafishwa huhifadhiwa katika matokeo yaliyoelezwa, katika
metadata ya vizuizi vya usalama (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), katika metadata ya akiba ya matokeo, na katika vihesabio vya
muunganiko vya daraja. Njia chaguo-msingi ya Video Bridge haiombi ubadilishaji wa matamshi kuwa maandishi
wala kupakua nakala ya pili ya media; bila track hiyo iliyotolewa waziwazi, hubaki
ya video pekee.

**Uhifadhi wa nakala ya mazungumzo (#12150 P1).** Hii hutumika kiotomatiki wakati wowote
Video Bridge (ambayo yenyewe ni ya hiari) inapowasilisha kidokezo cha nakala ya mazungumzo — hakuna
alama tofauti ya uhifadhi. Ombi linapowasilisha kidokezo chochote cha nakala ya mazungumzo (`transcript` iliyotangazwa na mpigaji
au `audioTranscript` iliyounganishwa), kizuizi cha usalama hukitia alama
`videoBridgeObserved` na kutengeneza kivuli kilichofichwa cha maelezo ya video —
uwasilishaji unaofanana ambapo sehemu ya maandishi huru ya kila kidokezo hubadilishwa na
`[redacted-video-transcript]`, kwa kubadilisha sehemu ya kidokezo yenye muundo
kabla ya tungo kuundwa (kamwe si kwa kuchanganua maandishi yaliyosawazishwa, kwa hivyo hakuna maudhui ya kidokezo
— ya kihasama au ya kawaida, ikijumuisha sehemu zenye `]` kama vile
`[inaudible]`/`[music]` — yanayoweza kubaki). Mwili wa ombi wa kumbukumbu ya simu unaohifadhiwa hubadilisha
kila sehemu ya maandishi inayotokana na video kwa kivuli hicho kilichofichwa, kwa kulinganisha usawa wa
maudhui; nanga ya `fullText` husomwa upya kutoka kwenye payload iliyokamilika ya kizuizi cha usalama cha kabla ya simu,
ili ulinganishaji uendelee kufaulu baada ya vizuizi vya usalama vya baadaye katika mnyororo (vifichaji vya PII na
vitambulisho vya siri, vipaumbele 10/95) kuandika upya maandishi ya maelezo papo hapo na
baada ya uingizaji wa kidokezo cha mfumo/makabidhiano/kumbukumbu kubadilisha muundo wa safu ya ujumbe. Mwili
unaotumwa juu ya mkondo kwa modeli haubadilishwi. Ombi lililochunguzwa pia halijazi
Memory yoyote ya kudumu (uchimbaji unaotokana na ombi na majibu hurukwa),
kwa hivyo jibu lenyewe la modeli haliwezi kunakili maandishi ya nakala ya mazungumzo kwenye Memory.

**Sehemu ghafi za video (#12430).** Daraja linapowashwa na uwezo asilia wa video haujulikani au haupo, sehemu zilizobainishwa za `transcript`/`audioTranscript` pia huamilisha `videoBridgeObserved`, hata baada ya kushindwa kwa maelezo au kikomo cha `maxVideos`. `null` na tungo tupu huhesabiwa; sehemu zisizokuwepo na metadata isiyo ya video hazihesabiwi. Nakala zinazohifadhiwa huficha sehemu hizi au huacha ombi, na akiba/Memory hupitwa. Payload ya mtoa huduma hubaki bila kubadilishwa.

Nakala za ziada zinazohifadhiwa hutumia ishara hiyo hiyo ya ombi lililochunguzwa. Taswira ya awali
ghafi ya ombi la mteja kabla ya kizuizi cha usalama, ombi linalosubiri ndani ya kumbukumbu, na kumbukumbu ya mapema
ya ombi lililokataliwa hubadilisha kwa muundo sehemu za nakala ya mazungumzo katika sehemu za video;
vidokezo vya tungo vinavyoundwa na hatua za pipeline na makabidhiano ya muktadha hufichwa
kwenye sehemu ya kuhifadhi mwili wa ombi. Alama ya `video_content_removed` iliyohifadhiwa
husababisha mwendelezo wa `previous_response_id` kufungwa kwa usalama badala ya kuunda upya
maandishi yaliyotupwa kimakusudi. Ikiwa ombi lililochunguzwa litapoteza
kivuli chake cha ufichaji cha kila sehemu kabla ya kuandikwa kwenye kumbukumbu, au hata kivuli kimoja kati ya vivuli kadhaa vya video
kikose kulingana baada ya mabadiliko ya baadaye ya ombi, mwili wa ombi unaohifadhiwa
huachwa kabisa badala ya kuhifadhi nakala ya mazungumzo iliyofichwa kwa sehemu tu.

Kwa ombi lililochunguzwa, jibu la modeli linaweza kunukuu sehemu yoyote ya
nakala ya mazungumzo bila mpaka wa kidokezo wenye muundo. Kwa hiyo, `responseBody` yake ya kumbukumbu ya simu
inayohifadhiwa hubadilishwa na alama ya kuachwa; artefakti ya kina ya
pipeline (ambayo inaweza kujumuisha miili ya upstream/mteja na vipande vya mtiririko)
haihifadhiwi. Akiba za kisemantiki, za idempotency, na za uchezaji upya wa hoja
hupita usomaji na uandishi kwa ombi hilo. Ombi la mtoa huduma na jibu linaloonekana kwa
mteja hubaki bila kubadilishwa. Baiti za mapema za keepalive huondolewa kwenye buffer ya muda
artefakti ya kina inapoachwa. Onyo la EventStream iliyoharibika la Kiro
huripoti idadi ya baiti za payload pekee, kamwe si maudhui yake wala hitilafu ghafi ya
kichanganuzi cha JSON.
Hii haidai kwamba kila uchunguzi usiohusiana wa mtoa huduma/plugin umekaguliwa;
ukaguzi mpana zaidi wa sehemu za kuhifadhi unafuatiliwa katika #11658.

Mzunguko wa ndani wa `/api/modality-bridge/video/drilldown` ni mfumo tofauti wa akiba,
unaothibitishwa kwa loopback/token. Kila operesheni pia huhitaji
kitambulisho sanifu kisichoonyesha maana cha mhusika mkuu. Kabla ya mpigaji wa uzalishaji kuwashwa, lazima
atengeneze kitambulisho hicho kutoka kwa mpangaji aliyethibitishwa na kamwe asipeleke mbele thamani
iliyochaguliwa na mteja. Vifunguo vya akiba hufunga mhusika mkuu huyo kwa vitambulisho sanifu vya kipindi na
marejeleo ya video, huhifadhi funguo zake zinazotokana na SHA-256 pekee, na huwekea upeo usomaji
na ufutaji kwa mhusika mkuu huyo huyo. Akiba huhifadhi upeo wa fremu 16 za JPEG
zilizotokana kwa kila ingizo, huzifuta baada ya dakika kumi, na hutumia usomaji wenye mipaka wa
`start`/`end` au ufutaji wa kipindi uliobainishwa wazi.

Kila mhusika mkuu anawekewa kikomo cha maingizo 16 na MiB 64 za data sanifu ya JPEG. Vikomo hivyo
vinajitegemea na kikomo cha jumla cha maingizo 64/MiB 256: shinikizo la mgao wa
mhusika mkuu huondoa tu maingizo ya mhusika huyo mkuu yaliyotumika muda mrefu zaidi uliopita kabla ya
uondoaji wa jumla wa LRU kuzingatiwa. Maingizo yaliyokwisha muda huondolewa kutoka kwenye uhasibu wa
mhusika mkuu na wa jumla wakati wa shughuli za akiba, huku kughairi na kushindwa kwa uthibitishaji
hakuhifadhi mbadala wa sehemu.

Akiba-kasi hukataa Base64 isiyo kanuni, ujazaji wa ziada, midia isiyo JPEG, JPEG zilizoharibika au
zilizokatwa, na JPEG zinazosababisha onyo wakati wa usimbuaji wa picha nzima wenye kikomo kwa kutumia `sharp`.
Husimba upya kila picha inayokubaliwa kama JPEG ya kikanuni, hupata upana na urefu
kutoka kwa baiti zilizosimbuliwa badala ya kuamini sehemu za mpigaji, na hutupa
baiti zozote za ziada za polyglot badala ya kuzihifadhi. Ni bafa iliyobanwa ya kikanuni yenye kikomo pekee
inayohesabiwa katika vikomo vyote viwili. Kikomo cha JSON kinachopitishwa kwenye mtandao kinajumuisha ukubwa wa ziada wa Base64 kwa kikomo cha
ingizo lililosimbuliwa cha MiB 32. Kila
tokeo lililohifadhiwa hurekodi umbizo/azimio lake la JPEG lililothibitishwa, sera ya uchukuaji wa sampuli,
toleo la tokeo, muda wa kuundwa, heshi ya maudhui iliyokokotolewa na seva, na rejeleo la mzazi
lililoheshiwa pamoja na heshi ya maudhui ya mzazi kutoka kwa mpigaji anayeaminika. Ughairi hukaguliwa
kati ya awamu zisawazishaji za usimbuaji/uhesabuji heshi kabla ya hifadhi ya atomiki kwenye akiba-kasi.

Sehemu hii bado haiunganishi mzalishaji wa uzalishaji kwenye njia na haitoi
uchaguzi wa vibadala vya maazimio mengi. Kwa hivyo, njia ya ombi la Video Bridge iliyo wazi
haiongezi kazi yoyote, huku utoaji wa mhusika aliyefungwa kwa mpangaji na
mzunguko kamili wa maisha wa maazimio mengi wa FU-08 vikisalia kuwa kazi dhahiri za ufuatiliaji
badala ya kuandikwa kama tabia iliyokamilika.

Fremu hupewa maelezo mafupi kwa mfuatano kwa kutumia modeli ya Video iliyosanidiwa. Batilisho tupu la
Video hurithi mpangilio wa Vision; ikiwa zote mbili ni tupu, kipanga-njia kiotomatiki cha Vision
huchagua modeli halisi yenye uwezo wa kuona. Maelezo mafupi yaliyofaulu
hubadilisha sehemu asili kwa kiambishi awali thabiti cha `[Video description:` ambacho pia
hutambulisha maandishi kama uchunguzi usioaminika uliotokana na midia na kuziambia modeli za
baadaye zisifuate maagizo yaliyopatikana kwenye midia. Funguo za akiba-kasi za maelezo mafupi ya fremu
hujumuisha baiti za JPEG, kidokezo, muhuri wa muda, na modeli halisi; ni maelezo mafupi
yaliyofaulu pekee yanayohifadhiwa kwenye akiba-kasi. Rekodi za akiba-kasi huhifadhi modeli halisi ya mzalishaji iliyofaulu,
ikiwa ni pamoja na modeli mbadala; daraja huripoti `mixed` wakati fremu tofauti
zilitolewa na modeli tofauti. Rekodi inayopatikana kwenye akiba-kasi hutumia tena utambulisho huo wa mzalishaji
badala ya kuupa upya lebo ya mpango wa upangaji njia ulioombwa. Akiba-kasi ya matokeo ya
video nzima huwekewa ufunguo kwa kila ingizo linalobadilisha towe — kidokezo, modeli
halisi, sera ya uchukuaji wa sampuli, idadi ya fremu, hali ya uchanganuzi wa kisemantiki, alama ya kidijitali ya SHA-256
ya dokezo la kulenga lililosawazishwa, dirisha la kulenga, `transcript`,
`audioTranscript`, na bendera ya laha ya mawasiliano — kwa hivyo kubadilisha kipimo chochote kati ya hivyo
husababisha kutopatikana kwenye akiba-kasi, wala si matumizi tena ya data iliyopitwa na wakati. Toleo la sera ya uondoaji wa
nakala rudufu za mwonekano, kizingiti, na idadi ya fremu teule yenye kikomo pia huwekwa wazi katika
ufunguo na metadata ya akiba-kasi ya matokeo; kwa hivyo mabadiliko ya sera hayawezi kutumia tena maelezo ya
video nzima yaliyopitwa na wakati. Metadata ya v4 ya akiba-kasi ya matokeo huhifadhi hali na
alama ya kidijitali, kamwe si jukumu ghafi la mtumiaji. Metadata ya vizuizi vya usalama huripoti hali zote mbili za
uchanganuzi, iliyoombwa na halisi; hali ya `focused` iliyoombwa bila
maandishi yanayoweza kutumika ya mtumiaji huripotiwa kuwa `full` kwa uhalisia.

Kizuizi cha usalama huchopoa kila sehemu ya video inayotumika lakini hakielezi zaidi ya
`modalityBridgeVideoMaxVideos`. Kwa lengwa lililothibitishwa kuwa na
`supportsVideo === false`, video zilizoshindwa na zilizozidi kikomo hugeuzwa kuwa viashiria dhahiri vya
maandishi salama ili kusiwe na video ghafi inayosalia. Uwezo unapokuwa haujulikani, sehemu hizo
hubaki bila kubadilishwa. Malengo yenye `supportsVideo === true` hupita bila kutumia daraja.
Ishara ya ughairi wa ombi la mteja huenezwa kupitia upakuaji, foleni ya dalali,
michakato midogo, na miito ya maelezo mafupi; ughairi husimamisha kati ya video na kamwe
hauruhusu midia ghafi kupita baada ya hitilafu.

Mipangilio ya wakati wa utekelezaji huhifadhiwa kwenye DB na huthibitishwa kwa Zod:

| Ufunguo                             | Chaguo-msingi | Masafa / tabia                                                                                                                |
| ----------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`       | Wakati wa utekelezaji wa hiari, huwashwa kwa uamuzi wa mtumiaji                                                               |
| `modalityBridgeVideoAnalysisMode`   | `"full"`      | `full` huhifadhi maelezo mafupi ya jumla; `focused` hutumia muktadha wenye kikomo na usioaminika wa mtumiaji wa hivi karibuni |
| `modalityBridgeVideoModel`          | `""`          | Hurithi modeli ya Vision Bridge                                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`           | 1–16                                                                                                                          |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`   | `uniform`, `scene_aware`, au `segment_aware` ya uwiano; kushindwa kwa kigunduzi hurudisha matumizi ya `uniform`               |
| `modalityBridgeVideoMaxVideos`      | `1`           | 1–4                                                                                                                           |
| `modalityBridgeVideoTimeout`        | `120000`      | ms 1000–120000                                                                                                                |

Thamani za zamani zilizohifadhiwa za muda wa kuisha wa Video zinazozidi sekunde 120 hupunguzwa hadi
kikomo cha muda cha dalali; majaribio mapya ya kuandika mipangilio yanayozidi kikomo hicho hukataliwa.
`GET /api/modality-bridge/video/runtime` huhitaji eneo la loopback lililowekwa muhuri na kuaminika
kabla ya uthibitishaji au uchunguzi wa wakati wa utekelezaji, kisha huhitaji uthibitishaji wa usimamizi.
Hurejesha tu `available`, matoleo yaliyosafishwa ya FFmpeg/ffprobe, na sababu isiyobadilika
wakati mazingira ya utekelezaji hayapatikani. Endpoint ya ndani ya uchopoaji si
API ya umma ya upakiaji: kujaa kwa foleni hurejesha `503` pamoja na `Retry-After`, kukatika kwa
muunganisho wa mpigaji hurejesha `499`, na kikomo cha muda kisichobadilika cha dalali hurejesha `504`. Majibu yaliyobadilishwa huongeza
`video->text;model=<visionModel>;parts=<videos>` kwenye kichwa cha kati cha
`x-omniroute-modality-bridge` bila kuondoa visehemu vya Vision au Audio.

### Kificha PII (`piiMasker.ts`)

Huendeshwa katika hatua **zote mbili**.

- **`preCall`** huunda nakala ya payload, hupitia `system`, `messages`, `input`, na
  `prompt` (ikiwa ni pamoja na vipengee vya mifuatano ya kawaida), na hutumia `processPII()` (kutoka
  `@/shared/utils/inputSanitizer`) kwenye sehemu za mifuatano za `content`/`text`. Wakati
  `PII_REDACTION_ENABLED=true`, PII iliyogunduliwa hufichwa kwenye payload
  inayotumwa. Hii haitegemei `INPUT_SANITIZER_MODE` (ambayo hudhibiti tu
  sera ya udukuzi wa prompt). Wakati ufichaji umezimwa, mwito hurekodi idadi ya
  ugunduzi bila kuandika upya maudhui.
- **`postCall`** huunda nakala ya kina ya jibu, huendesha `sanitizePIIResponse()` pamoja na
  kificha cha muundo wa Responses API (`maskResponsesOutput` — hushughulikia
  `output_text` na `output[].content[].text`). Ikiwa ufichaji wowote utafanyika,
  jibu lililorekebishwa huchukua nafasi ya lile la awali.

Guardrail haizuii kamwe; huweka tu ufafanuzi (`meta.detections`,
`meta.redacted`) au huandika upya.

### Udukuzi wa Prompt (`promptInjection.ts`)

Hugundua miundo hasidi katika maudhui yaliyotolewa na mtumiaji na kutekeleza
sera iliyosanidiwa. Tabia huongozwa na vigezo vya mazingira na chaguo za
constructor:

| Mpangilio            | Kigezo cha mazingira                                                                                      | Chaguo-msingi | Athari                                                                                                                                                                                                  |
| -------------------- | --------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Imewashwa            | `INPUT_SANITIZER_ENABLED`                                                                                 | `true`        | Wakati ni `false`, guardrail hukatisha mchakato mapema.                                                                                                                                                 |
| Hali                 | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                           | `warn`        | Sera ya udukuzi: `block`, `warn`, au `log`. (`redact` inakubaliwa kwa uoanifu wa nyuma lakini **haiondoi** maandishi ya udukuzi; uandikaji upya wa PII ya ombi hudhibitiwa na `PII_REDACTION_ENABLED`.) |
| Kizingiti cha kuzuia | chaguo la `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (lakabu `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`        | Kiwango cha chini cha ukali kinachohitajika ili kuzuia. Kiwango cha kati ni cha uangalizi pekee kwa chaguo-msingi.                                                                                      |

**Kipaumbele cha hali** (`getMode`): `options.mode` ya mwitaji →
ubatilishaji wa **alama ya kipengele cha DB** ya `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → mazingira ya `INJECTION_GUARD_MODE` → mazingira ya `INPUT_SANITIZER_MODE` →
`warn`. Kwa hiyo, ubatilishaji wa dashboard una kipaumbele kuliko vigezo vya mazingira, hivyo UI ya Feature
Flags hudhibiti guard inayoendeshwa papo hapo (bila kuwasha upya). Usomaji wa DB ni salama unaposhindwa:
ukipata hitilafu, guard hurudi kwenye tabia inayotegemea mazingira, na wakati hakuna
ubatilishaji uliowekwa, tabia hufanana na utatuzi wa mazingira pekee.

Vyanzo vya ugunduzi:

1. `sanitizeRequest()` kutoka `@/shared/utils/inputSanitizer` (seti ya kigunduzi
   inayoshirikiwa na kutumika sehemu nyingine katika pipeline).
2. `DEFAULT_GUARD_PATTERNS` zilizojengewa ndani (kwa sasa `system_override_inline` na
   `markdown_system_block`, zote zikiwa na ukali wa `high`).
3. `customPatterns` za hiari zinazopitishwa kupitia chaguo za constructor (mifuatano, regex,
   au rekodi za `{ name, pattern, severity }`).

Wakati `mode === "block"` **na** angalau ugunduzi mmoja unafikia kizingiti cha
ukali, `preCall` hurejesha `{ block: true, message: "Request rejected:
suspicious content detected" }`. Katika hali za `warn`/`log`, guardrail huandika kumbukumbu lakini
huruhusu mwito. Kisaidizi kinachoshirikiwa cha `evaluatePromptInjection()` pia husafirishwa
kwa waitaji wanaohitaji kutathmini prompt bila kupitia registry.

**Kikomo cha uchanganuzi (v3.8.20):** kigunduzi hukagua tu **KB 16 za kwanza** za
maandishi ya prompt yaliyounganishwa — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (baiti 16 384) katika
`src/shared/utils/inputSanitizer.ts`. `detectInjection()` na
`evaluatePromptInjection()` zote hutumia `slice(0, MAX_INJECTION_SCAN_BYTES)` kabla ya kuendesha
kitanzi cha ruwaza. Maagizo ya udukuzi huwa karibu na mwanzo wa ingizo, kwa hivyo hii
huwekea kikomo matumizi ya CPU/GC ya regex kwenye payload za mamia kadhaa ya KB bila kudhoofisha ugunduzi (taz.
#3932, #4041).

### Kificha Vitambulisho (`credentialMasker.ts`)

Huendeshwa katika hatua **zote mbili**, ikiwa ya mwisho katika msururu chaguo-msingi (kipaumbele `95`). Huficha
ruwaza zinazojulikana za funguo za API / tokeni za siri kutoka kwenye payload inayotumwa (maudhui ya ujumbe,
hoja za mwito wa zana, matokeo ya zana) **na** jibu la mtoa huduma, ili
kitambulisho kilichobandikwa kwenye prompt (au kurudiwa na matokeo ya zana) kisivuje
kwa mtoa huduma wa upstream au kurudi kwa mteja.

- **Ni kwa hiari tu**, kwa kufuata kanuni sawa na ufichaji wa PII (karibu na Kanuni Ngumu #20):
  imezimwa isipokuwa `settings.credentialRedactionEnabled === true` **au**
  `CREDENTIAL_REDACTION_ENABLED=true`. Ikiwa imezimwa, guardrail haifanyi chochote —
  haizuii wala haiandiki upya kamwe.
- `redactCredentials()` hupitia mti mzima wa payload/jibu (`walkValue()`,
  kwa usalama dhidi ya prototype pollution, na kwa usalama dhidi ya mizunguko kupitia `WeakSet`) na hubadilisha sehemu zinazolingana kwa
  kishikilia nafasi cha `[REDACTED:<type>]`, huku ikinakili matawi yaliyobadilika
  pekee.
- `CREDENTIAL_PATTERNS` inajumuisha funguo za watoa huduma wa LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokeni za VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), funguo za malipo (Stripe, Square), funguo za
  huduma za wingu (funguo ya ufikiaji ya AWS, Twilio, SendGrid, Mailgun), funguo binafsi / JWT,
  mifuatano ya muunganisho yenye vitambulisho (`mongodb://user:pass@...`, n.k.), na
  ruwaza ya jumla ya thamani ya kichwa `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Funguo zenye muundo wa kichwa (`authorization`, `x-api-key`, `api-key`,
  `apikey`) hufichwa kimuundo (thamani pekee, huku kiambishi awali cha mpango kama
  `Bearer `/`Basic ` kikihifadhiwa) badala ya kutumia regular expression ya jumla ya maandishi.
- Guardrail haizuii kamwe; huandika upya tu (`modifiedPayload` /
  `modifiedResponse`) na kuongeza maelezo (`meta.credentialsRedacted`, `meta.count`).

Kinga dhidi ya hitilafu zinazojirudia: `tests/unit/credential-masker-guardrail.test.ts`.

## Mkataba wa Msingi (`base.ts`)

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
  block?: boolean; // true husitisha mnyororo mara moja
  message?: string; // huonyeshwa wakati wa kuzuia
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // hurejeshwa na preCall ili kuandika upya ombi
  modifiedResponse?: TValue; // hurejeshwa na postCall ili kuandika upya jibu
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

Kizuizi huashiria "hakuna mabadiliko" kwa kurejesha mojawapo ya `void`, `{}`, au
`{ block: false }`. Kurejesha `modifiedPayload`/`modifiedResponse` hubadilisha
thamani inayopita kwenye mnyororo kwenda kwenye vizuizi vinavyofuata.
`signal?: AbortSignal` hubeba mzunguko wa maisha wa mpigaji hadi kwenye vizuizi. Kughairi ombi ni hali maalumu ya kimakusudi ya kuendelea licha ya hitilafu: madaraja ya midia husimamisha kazi na kufanya usafishaji bila kurejesha midia ghafi kwa lengo linalojulikana kuwa halitumii muundo huo.

## Sajili (`registry.ts`)

`guardrailRegistry` ya singleton hutoa:

- `register(guardrail)` — huongeza kizuizi (au kukibadilisha kulingana na jina lililosawazishwa) na
  kupanga upya kwa `priority` ya kupanda.
- `clear()` / `list()` — zana saidizi za usimamizi.
- `runPreCallHooks(payload, context)` — hupitia vizuizi amilifu, hupitisha
  payload kupitia `modifiedPayload`, na kusimama inapokutana na `block: true` ya kwanza.
- `runPostCallHooks(response, context)` — mtiririko huohuo upande wa jibu.
- `resetGuardrailsForTests({ registerDefaults })` — hufuta hali na kwa hiari
  kusajili upya chaguo-msingi ili kutenga majaribio kwa usafi.

Viendeshaji vyote viwili hurejesha `{ blocked, payload|response, results, guardrail?, message? }`
ambapo `results` ni safu ya rekodi za `GuardrailExecutionResult` zinazojumuisha
sehemu za `blocked`, `skipped`, `modified`, `error`, na `meta` kwa kila kizuizi,
ambazo ni muhimu kwa ufuatiliaji.

### Kuzima Vizuizi kwa Kila Ombi

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` hukusanya orodha
isiyorudiwa ya majina ya vizuizi ambavyo vinapaswa kurukwa kwa ombi la sasa.
Vyanzo (vyote ni vya hiari, vyote vinaunganishwa):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` katika mwili wa ombi (kiwango cha juu)
- `metadata.disabledGuardrails` katika mwili wa ombi
- Kichwa `x-omniroute-disabled-guardrails` (au cha zamani
  `x-disabled-guardrails`)

Thamani zinaweza kuwa safu za mifuatano au mfuatano uliotenganishwa kwa koma; majina
husawazishwa kuwa herufi ndogo za kebab-case (`pii_masker` → `pii-masker`). Tokeo
hupitishwa kupitia `context.disabledGuardrails` hadi kwenye sajili, ambayo huruka
vizuizi vinavyolingana (`skipped: true` katika `results`).

## Mpangilio wa Utekelezaji

Kwa kila ombi linalopitia `src/sse/handlers/chat.ts` na
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` huunda orodha ya kurukwa kutokana na ufunguo wa API, mwili wa ombi,
   na vichwa.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` huendesha vizuizi kwa mpangilio wa kipaumbele
   kuanzia cha chini kwenda juu:
   - Vizuizi vilivyozimwa hurekodiwa kama `skipped`.
   - `preCall` ya kila kizuizi inaweza kuandika upya data ya ombi kupitia `modifiedPayload`.
   - `block: true` ya kwanza husitisha mfuatano mara moja na kishughulikiaji hurejesha
     jibu la kukataliwa na kizuizi.
3. Data ya ombi (ambayo huenda imeandikwa upya) hupelekwa kwenye uelekezaji wa mchanganyiko na
   utumaji kwa huduma ya juu.
4. Baada ya jibu kuundwa, `guardrailRegistry.runPostCallHooks(...)`
   huendesha mfuatano huo huo kwenye jibu. `block: true` hapa huondoa jibu la
   huduma ya juu.

Vizuizi vinavyotupa hitilafu hurekodiwa kwa `error: <message>` na kuandikwa kwenye kumbukumbu kupitia
`logger.warn`, lakini mfuatano huendelea — kwa muundo, mfumo huruhusu ombi kuendelea hitilafu ikitokea.

## Usanidi

Vigeu vya mazingira vinavyosomwa na vizuizi vilivyojengewa ndani:

| Kigeu                                 | Kinachokitumia            | Athari                                                                                                                                     |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Weka `false` ili kuzima utambuzi kabisa.                                                                                                   |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Sera ya udungaji: `warn`, `block`, au `log`. Thamani ya zamani `redact` haiandiki upya maandishi ya udungaji.                              |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Hali ya kizuizi cha udungaji; pia ni alama ya kipengele katika DB ambayo **hupuuza na kuchukua nafasi ya** vigeu vya mazingira (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Kiwango cha chini cha ukali kinachokataliwa na `MODE=block`: `high` (chaguo-msingi), `medium`, au `low`.                                   |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Jina mbadala la zamani la `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Ikiwa `true`, PII katika ombi hufichwa (bila kutegemea hali ya udungaji).                                                                  |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Hudhibiti tabia ya kifichaji kwenye upande wa jibu.                                                                                        |

Vizuizi vya Modality Bridge husoma usanidi wa wakati wa utekelezaji kutoka kwenye hifadhi ya mipangilio
inayotegemea DB (`getSettings()`), si vigeu vya mazingira. Funguo kuu za Vision ni
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, na
`modalityBridgeCacheMaxEntries`. Funguo za zamani za
`visionBridge*` zinakubaliwa tu kama mbadala wa usomaji wa mzunguko mmoja ulioandikwa
kwenye nyaraka; uandishi kutoka dashibodi hutumia funguo kuu. Chaguo-msingi na kitatuzi cha mbadala
vinapatikana katika `src/shared/constants/modalityBridgeDefaults.ts`, huku konstanti za zamani
zikihifadhiwa katika `src/shared/constants/visionBridgeDefaults.ts`.

Sauti hutumia `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, na `modalityBridgeAudioMaxClips`, pamoja na mipangilio ya pamoja ya
`modalityBridgeCache*`. Sauti haina mbadala wa funguo za zamani kwa sababu funguo hizi
zilianzishwa pamoja na skima ya Modality Bridge.

Video hutumia `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, na
`modalityBridgeVideoTimeout`, pamoja na mipangilio ya pamoja ya `modalityBridgeCache*`.
Imezimwa kwa chaguo-msingi kwa sababu FFmpeg/ffprobe ni vitegemezi vya hiari vya
uendeshaji, na uundaji wa maelezo ya fremu huongeza muda wa kusubiri na gharama ya modeli.

## Vizuizi Maalum

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

Hatua:

1. Unda `src/lib/guardrails/myGuardrail.ts` inayopanua `BaseGuardrail`.
2. Tekeleza `preCall` na/au `postCall`.
3. Ama isajili wakati wa kuingiza (isukume kutoka `registerDefaultGuardrails`) au
   uite `guardrailRegistry.register(...)` wakati wa utekelezaji — sajili hubadilisha
   kizuizi chochote cha awali chenye jina lilelile lililosawazishwa.
4. Ongeza majaribio chini ya `tests/unit/` (mifano iliyopo:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Majaribio

Tumia `resetGuardrailsForTests()` kati ya majaribio ili kuanza kutoka hali inayojulikana.
Pitisha `{ registerDefaults: false }` ili kuanza na sajili tupu na
kusajili tu vizuizi vinavyojaribiwa. Vision Bridge inakubali uingizaji wa vitegemezi
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge hutoa sehemu
sawa za mipangilio, uwezo, uteuzi wa modeli ya STT, ukaguzi wa vitambulisho,
na unukuzi. Kwa hivyo, majaribio yanaweza kutekeleza mitiririko yote miwili bila ufikiaji wa DB
au mtandao.

## Angalia Pia

- `src/lib/guardrails/` — utekelezaji
- `src/shared/utils/inputSanitizer.ts` — kigunduzi kinachoshirikiwa kinachowezesha
  ugunduzi wa udukuzi wa prompt na ufichaji wa PII
- `src/shared/constants/visionBridgeDefaults.ts` — chaguomsingi za Vision Bridge na
  orodha ya modeli zinazolazimishwa kutumia bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — chaguomsingi za pamoja za wakati wa utekelezaji za Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — safu huru (kivunja mzunguko, vipindi vya kusubiri)
- `docs/reference/ENVIRONMENT.md` — rejeleo kamili la vigeu vya mazingira

## Ufikivu wa njia wa kizuizi cha udukuzi na red-team (Awamu ya 8 · Sehemu D)

Kizuizi cha udukuzi (`createInjectionGuard` / `withInjectionGuard`) kinashughulikia njia zote
zinazokubali prompt za watumiaji. Kinaheshimu `INJECTION_GUARD_MODE` (chaguomsingi `warn` = kumbukumbu pekee;
`block` = hurudisha HTTP 400 `SECURITY_001`).

| Aina                 | Njia                                                                                                                                                 | Hali chaguomsingi |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Maandishi (zilizopo) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn              |
| Uzalishaji           | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn              |
| Data                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn              |

Uchimbaji wa maandishi (`extractMessageContents`) hushughulikia `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (kila usiku, `nightly-llm-security.yml`):** promptfoo huthibitisha kuwa kila njia huzuia
mkusanyiko wa OWASP-LLM katika `INJECTION_GUARD_MODE=block`; garak huendesha uchunguzi (huruka bila siri).
`moderations` imejumuishwa kwa ajili ya uthabiti — waendeshaji katika hali ya kuzuia wanaweza kuiondoa kupitia
`resolveDisabledGuardrails`.

Mtiririko wa kazi wa kila usiku (`.github/workflows/nightly-llm-security.yml`, cron + uanzishaji wa
mkono) una kazi mbili:

- **`promptfoo-guard` (inayozuia)** — huendesha `promptfoo eval -c promptfooconfig.yaml`
  pamoja na `INJECTION_GUARD_MODE=block`. Kila tukio hasidi (k.m. "puuza
  maagizo yote ya awali…", uvunjaji wa vizuizi wa mtindo wa DAN) huhakikisha kuwa jibu lina
  `error.code === "SECURITY_001"`, yaani, kizuizi kilikataa ombi hilo kwa hakika.
- **`garak` (ya ushauri)** — huendesha garak `--probes promptinject,dan,leakreplay`
  dhidi ya instansi ya ndani ya OmniRoute (`http://localhost:20128/v1`). Hudhibitiwa na
  siri ya mtoa huduma (`PROMPTFOO_PROVIDER_KEY`); huruka kwa utaratibu bila hitilafu na huongezewa
  `|| true`, kwa hivyo huripoti bila kusababisha CI ishindwe.

Ufikivu wa kisaidizi cha kizuizi (`createInjectionGuard` / `withInjectionGuard`)
unahusisha kila njia ya `/v1` yenye prompt; maandishi ya prompt huchukuliwa kutoka
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` na
`extractMessageContents()` katika `src/shared/utils/inputSanitizer.ts`.
