# Guardrails (Hausa)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Madogaran gaskiya:** `src/lib/guardrails/`
> **An sabunta ta karshe:** 2026-08-29 — v3.8.51 (Asalin fassarar Video Bridge an bayyana shi ne ta hanyar mai kiran,
> ba a tabbatar da shi ta server ba tukuna — an yi bayani gwargwadon #11661)

Guardrails suna aiwatar da tsaro, dokoki, da sauye-sauyen abun ciki a iyakar
tsakanin OmniRoute da masu ba da sabis na sama (upstream providers). Kowace guardrail na iya bincika (kuma
da zabi ta ki, ta sauya, ko ta sanya bayani a kan) buƙatun kaya (`preCall`) da
martanin sama (`postCall`).

Tsarin **fail-open** ne: idan wani guardrail ya fadi yayin aiwatarwa, tsarin
rajista (registry) yana rubuta kuskuren kuma ya ci gaba da sauran guardrail maimakon ya sa buƙatar ta fadi.
Tabbatar da block yanke shawara ce ta zahiri (`block: true`), ba ta faru ta kuskure ba.

## Ginannun Shingayen Kariya

Rijistar tana loda shingayen kariya guda shida ta atomatik bisa tsarin fifiko lokacin shigo da ita
(duba `registry.ts` → `registerDefaultGuardrails()`):

| Fifiko | Suna                | Mataki/matakai | Fayil                 |
| ------ | ------------------- | -------------- | --------------------- |
| `5`    | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`    | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`    | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`   | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`   | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`   | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lambobin fifiko mafi ƙanƙanta ne suke aiki **da farko**.

### Gadar Hoto (`visionBridge.ts`) — Gadar Nau'in Bayanai PR-1

Tana katse buƙatun da ke ɗauke da hotuna waɗanda aka nufa ga **samfuran da ba sa iya sarrafa hoto**, sannan ko dai ta sake karkatar da dukkan buƙatar zuwa samfurin da ke iya sarrafa hoto, ko kuma ta maye gurbin sassan hoton da bayanan rubutu da wani samfurin hoto mai iya daidaitawa ya samar kafin kiran sabis na sama. Wannan yana ba masu samar da sabis na rubutu kaɗai damar sarrafa bayanan da suka haɗa nau'o'i da yawa ba tare da mai amfani ya lura ba.

Tsarin aiki:

1. Tsallake idan samfurin da aka nufa ya riga ya goyi bayan hoto (sai dai idan yana cikin
   jerin samfuran da aka tilasta amfani da gada `isVisionBridgeForcedModel`).
2. Ciro sassan hotuna ta hanyar `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), wanda ke miƙa aikin ga **haɗaɗɗen mai gano kafofin watsa bayanai**
   `detectMediaParts()` a cikin `open-sse/utils/mediaParts.ts` — madogara guda ɗaya
   ta gaskiya da ake amfani da ita tare da matatar dacewar combo.
   Ana taƙaita cirewar zuwa sassan matakin sama masu siffofin da
   `replaceImageParts` zai iya mayarwa wuri ɗaya (yarjejeniyar cirewa↔maye gurbi): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, da Responses API `input_image`. Abubuwan da aka samu a cikin wasu sassa
   da siffofin alamomi kawai na matatar combo ne, kuma ba a taɓa cire su.
   Tsallake idan ba a sami ko ɗaya ba.
3. Tantance saitunan lokacin aiki ta hanyar `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): sabbin maɓallan saitunan `modalityBridge*`
   suna da fifiko; tsofaffin maɓallan `visionBridge*` suna ci gaba da zama **madadin zagaye guda**
   (lokacin komawa baya). Tsallake kafin bincika kowane kafar watsa bayanai idan
   an kashe gadar.
4. Mai zaɓin yanayi (`modalityBridgeVisionMode`, duba teburin da ke ƙasa) yana yanke shawarar
   sake karkatarwa ko bayyanawa. Sake karkatarwa yana mayar da `modifiedPayload` inda aka sauya
   `model` kawai, tare da meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Hanyar bayyanawa: ta iyakance hotuna zuwa `maxImages`, ta haɗa umarnin da ya dace da aikin,
   ta bincika ma'ajiyar bayanan bayani, ta kira samfurin hoto **a layi ɗaya**
   (`Promise.allSettled`), sannan ta saka sassan rubutun `[Image N]: <description>` a
   wurarensu. Bayanin da ya gaza yana samar da `null`, kuma ana
   **adana** asalin ɓangaren hoton (#4012) — sai dai a hanyar bayanin combo idan duk
   bayanan sun gaza, inda tabbataccen sabis na sama da ba ya iya sarrafa hoto zai sami
   madadin `(unavailable — no vision-capable provider connected)` a maimakonsa (#8430).
6. Mayar da `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Mai zaɓin yanayi (`modalityBridgeVisionMode`)

| Yanayi     | Na asali | Halayya                                                                                                                                                                                                                                                                                                                   |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Tsohuwar dabarar tantancewa, ba a taɓa ta ba (#6640/#7204): samfuran da ba combo ba/`auto/` suna sake karkata zuwa mafi kyawun samfurin hoto sai dai idan asalin samfurin ya riga yana da sahihan bayanan shaida (sannan a bayyana); manufofin combo koyaushe ana bayyana su.                                             |
| `describe` |          | Koyaushe a bayyana — ana tsallake tubalin sake karkatarwa gaba ɗaya; samfurin da mai amfani ya zaɓa ne koyaushe yake ba da amsa.                                                                                                                                                                                          |
| `reroute`  |          | Tilasta sake karkatarwa: ana ƙetare kariyar riƙe samfurin da ke da bayanan shaida. Kariyar bayanan shaidar **manufar** sake karkatarwa har yanzu tana aiki — idan babu sahihin samfurin hoto da za a nufa, buƙatar tana koma wa hanyar bayyanawa don kada ɗanyen hotuna su isa tsarin bayan-fage na rubutu kaɗai (#8430). |

Yanayin da aka tilasta suna dakatar da aiki **kafin** tsohuwar dabarar tantancewa ta `auto` ta gudana; halayyar `auto`
daidai take a matakin byte da shingen kariyar da ke gabanin PR-1.

#### Iyakokin maɓallin API (`visionBridgeKeyScope.ts`)

Lokacin da maɓallin API na mai kira ya taƙaita `allowedConnections`, tarin kaso
(`allowedQuotas`) ko samfura (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), gadar tana zaɓar
samfuran sake karkatarwa da bayyanawa waɗanda maɓallin zai iya amfani da su kawai, a kan haɗin da maɓallin zai iya
amfani da su. Daga nan kiran bayyanawa koyaushe yana bi ta madauwar kai ta OmniRoute tare da
taken `x-omniroute-self-loop-key-id`, domin buƙatar tattaunawa da ke karɓa
ta sake aiwatar da manufofin haɗi da samfuri na wannan maɓallin. `enforceApiKeyPolicy()`
yana mutunta wannan taken ne kawai tare da bearer na madauwar kai, don haka zai iya
ƙara taƙaita damar shiga kawai, kuma ana ƙin id da ba a iya warwarewa.

Idan babu samfurin hoto da aka yarda wa maɓallin, hanyar bayyanawa tana janye kanta kuma
buƙatar tana wucewa ba tare da sauyi ba, daidai da halayyar barin abu ya wuce lokacin da
aka kashe shingen kariya (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Buƙatun da ba su da maɓalli, da maɓallan da ba su da waɗannan ƙuntatawa, suna aiki daidai kamar
yadda suke yi a baya.

#### Umarnin bayyanawa mai la'akari da aiki (`modalityBridgeVisionTaskAware`)

Tsoho shi ne **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) yana haɗa
rubutun **saƙon mai amfani na ƙarshe** (wanda aka taƙaita zuwa haruffa 500) da tushen
umarnin bayani, yana karkatar da bayanin zuwa ga abin da mai amfani ya tambaya a zahiri
(tsarin codex-vision-proxy), sannan yana neman samfurin hangen nesa ya kwafe rubutun da ake gani.
Idan an kashe tutar — ko kuma babu rubutun mai amfani — ana amfani da tushen umarnin ba tare da canji ba.

Buƙatar OpenAI-mai-jituwa ta madauwariyar bayyana kanta (`callVisionModelSingle()`
a cikin `visionBridgeHelpers.ts`) koyaushe tana neman `image_url.detail: "high"` —
ba tare da wani sharadi ba, ga kowane mai kira/mai samarwa, kuma ba a ɗaure ta da wata alamar abokin ciniki ba.
Samfurin ƙaramin daki-daki yana rage daidaiton OCR ga ainihin aikin
kwafe rubutu da wannan umarni yake nema, don haka kiran bayyana da kansa koyaushe yana neman
babban daki-daki ba tare da la’akari da matakin daki-dakin da asalin buƙatar mai shigowa ta yi amfani da shi ba. Wannan
yana shafar jikin buƙatar bayyana ta ciki ne kawai; ba ya canza yadda
OmniRoute ke tura `image_url.detail` na mai kira a kan buƙatar farko —
ana amfani da wannan tsohon ƙimar daban, kuma ga abokan cinikin OpenCode da aka gano kawai, a cikin
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Reshen
tsarin waya na Anthropic na madauwariyar bayyana kanta ba shi da filin `detail`
kuma babu ɗayan tsoffin ƙimomin da ke shafarsa.

#### Iyakar fitarwar bayani (`modalityBridgeVisionMaxChars`)

| Maɓalli                        | Tsoho | Kewayo           |
| ------------------------------ | ----- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`   | `0` ko 100–50000 |

`0` (tsoho) yana nufin **babu iyaka** — bayanin da
`callVisionModel()` ya dawo da shi ana tura shi ba tare da gyara ba, don kiyaye halin
da ake da shi. Duk wata ƙima a kewayon 100–50000 tana taƙaita bayanin tare da
ƙarin `…` kafin a saka shi a matsayin `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` a cikin `src/lib/guardrails/visionBridge.ts`).
Ƙara wannan ga ayyukan OCR masu cike da daki-daki inda samfurin da ke gaba yake buƙatar
cikakken rubutun da aka kwafe; rage shi don iyakance amfani da token daga samfuran hangen nesa masu yawan magana.
Filin dashboard yana cikin sashen Advanced na shafin Vision
(`modality-bridge-max-chars` a cikin `ModalityBridgeVisionTab.tsx`) kuma yana ɗaga duk wata
ƙima tsakanin 1 da 99 zuwa mafi ƙarancin 100, yayin da yake barin `0` da aka sa a fili
ba tare da taɓawa ba — `0` ƙimar Zod ce ingantacciya da kanta
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ba kawai
tsohuwar ƙimar "ba a saita ba" ba.

#### Ma’ajiyar wucin gadi ta bayani (`modalityBridge/bridgeCache.ts`)

Ma’ajiyar wucin gadi ta LRU + TTL a cikin ƙwaƙwalwa don fitarwar bayani, wadda ake rabawa a faɗin tsarin.
Maɓalli = `sha256(imageRef + composedPrompt + configuredBridgeModel)` tare da
tsarin firam mai gabatar da tsayi (babu karo a iyakokin filaye). Bangaren samfurin shi ne
samfurin gada da **aka saita**, ba samfurin da ya bayar da amsa a zahiri ba —
`callVisionModel` na iya koma wa wani samfurin a ciki, kuma ƙirƙirar maɓalli ga kowane yunƙuri zai
rarraba ma’ajiyar. Ba a taɓa adana bayanan bayyana da suka gaza ba. Saituna:

| Maɓalli                         | Tsoho  | Kewayo  |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Daidaita hoton nesa (madauwariyar bayyana/ɗauko base64)

Lokacin da gadar ta ɗauko hoton **nesa** da kanta — kiran bayyana na Anthropic
zuwa kanta da sauyawar base64 ta tsarin waya na claude
(`ensureBase64ImagesForClaudeWire`), duka ta hanyar
`fetchRemoteImageAsDataUri()` a cikin `visionBridgeHelpers.ts` — ana wuce URI na bayanan da aka samu
ta cikin `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) kafin a saka shi a cikin buƙatar samfurin
hangen nesa. Ana rage girman hotuna masu girma fiye da kima zuwa **gefe mai tsawo na 2048px** (daidai da
iyakar sauya girman da OpenAI/Anthropic suke amfani da ita a ɓangaren uwar garke), wanda ke rage
bytes/jinkirin lodawa ba tare da canza abin da samfurin hangen nesa yake gani ba. Sauya girman
yana amfani da `sharp`, wanda ake lodawa ta dynamic import: a dandali inda native
binary ɗinsa ya kasa loduwa, `normalizeDataUri()` **ba ya taɓa jefa kuskure** — yana koma wa
tura bytes na asali kai tsaye, don haka hanyar bayyana/sauya-base64
koyaushe tana ci gaba da aiki. Haka kuma ana wuce bytes marasa hoto (ɗaukowa da bai dawo da
hoton da za a iya warwarewa ba) ba tare da taɓawa ba. Wannan daidaitawa
ya takaita ga hotunan da gadar ke ɗaukowa don kiranta zuwa kanta — ba a taɓa
amfani da shi ga ainihin payload ɗin mai kira da ake tura kai tsaye ba, daidai da
ƙa’idar sauyi-na-yarda-kawai (Doka Mai Tsauri #20).

#### Tsarin saituna + ƙaura

Sabbin maɓallan `modalityBridge*` suna samun tabbacin Zod a cikin `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, ukun `modalityBridgeCache*`, da kuma
rukunin `modalityBridgeAudio*` da Audio Bridge ke amfani da shi. Ƙaura
`141_modality_bridge_settings.sql` tana kwafin ƙimomin tsoffin
`visionBridge*` zuwa sabbin maɓallan da suka dace (ana iya maimaitawa ba tare da illa ba, kuma ba ta taɓa maye gurbin
ƙimar `modalityBridge*` da mai gudanarwa ya saita ba); ana ci gaba da karɓar tsoffin maɓallan a matsayin
madadin karantawa na zagayen sakin guda ɗaya.

#### Taken bayyana gaskiya + ƙididdiga

Amsoshin da bayani ya sauya suna ɗauke da
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(wanda `buildModalityBridgeHeader()` ke ginawa a cikin `modalityBridge/bridgeStats.ts`,
kuma `withModalityBridgeHeader()` ke liƙawa a cikin `src/sse/handlers/chatHelpers.ts`).
Buƙatun da aka sake karkatarwa ba sa samun **wani** take — ba a taɓa payload ɗin ba, kuma sauyin samfurin
ya riga ya bayyana a filin `model` na jikin amsar.

`GET /api/modality-bridge/stats` (tare da tantancewar gudanarwa, a mataki ɗaya da
`GET /api/settings`) yana dawo da ƙididdigun kowane nau'in modality da ke cikin ƙwaƙwalwa
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` don `vision`, `audio`, da
`video`. `averageLatencyMs` yana amfani da `latencySamples`, ba duk attempts ba, a matsayin
mai rabawa; aiki marar bayanin lokaci ba ya ƙirƙirar samfurin mili-daƙiƙa sifili na ƙarya.
`bridged` ya ci gaba da kasancewa sunan laƙabi mai dacewa da tsoffin sigogi don sauye-sauyen
da suka yi nasara; yunƙurin da ya gaza ba ya ƙara shi.
An tsara ƙididdigun su sake farawa idan aka sake kunna process
(telemetry ne, ba lissafin kuɗi ba).

#### Daidaitawar dashboard

Shafin dashboard na musamman shi ne
`/dashboard/settings/modality-bridge`. Shafukansa na `Vision`, `Audio`,
da `Video`, waɗanda URL zai iya nuna kai tsaye, suna riƙe query parameters yayin sauya ƙimar `tab`.
Shafin Vision yana bayar da damar kunna fasalin, mode, zaɓin model (ciki har da tsohon zaɓi
na atomatik), prompting mai la'akari da task, iyakokin timeout/image/description-length/cache
na ci-gaba, ƙididdigun lokacin aiki, da sample request mai kariya. Shafin Audio ma yana aiki:
yana bayar da damar kunna fasalin, mai zaɓin model na STT kaɗai tare da Auto, iyakokin
timeout/max-clip, ƙididdigun audio, da gwajin sample na `input_audio`. Shafin Video yana aiki:
yana bayar da rahoton halin lokacin aiki na FFmpeg/ffprobe — ɗaya daga cikin takamaiman
halayen UI guda huɗu (`unknown` yayin da probe ke gudana ko bai iya kammalawa ba,
`restricted` a kan dashboard host da ba na loopback ba inda ake tsallake probe a gefen client,
`unavailable` bayan an yi probe kuma aka tabbatar babu shi, ko `available` tare da sigogin
FFmpeg/ffprobe) — yana adana iyakokin enable/model/frame/video/timeout, yana tace mai
zaɓin model zuwa models masu iya vision, kuma yana nuna ƙididdigun video.

Tsohon katin Vision Bridge da ke ƙarƙashin saitunan AI yanzu mahaɗin dacewa ne zuwa sabon
shafin; ba ya ƙara mallakar kwafi na biyu na form ɗin. Media Providers kuma yana haɗa
workflow na Image-to-Text da Speech-to-Text zuwa shafukan Modality Bridge da suka dace ba
tare da cire playground na Speech-to-Text da ake da shi ba.

**Tsallake tantance self-loop:** idan kiran describe ya bi ta self-loop na
OmniRoute na `/v1` (model na provider wanda ba na daidaitaccen tsari ba), sub-request ɗin yana aika
`x-omniroute-admission-bypass: internal` kuma ana tantance shi da credential na self-loop
da aka warware — sentinel na gida `sk_omniroute` a local mode, ko env key da operator ya
daidaita na `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), ta yadda deployments masu
`REQUIRE_API_KEY=true` za su iya ci gaba da gudanar da kiran describe. Ana amincewa da bypass
ɗin ne kawai don waɗannan takamaiman credentials, saboda haka clients na waje ba za su iya
amfani da header ɗin don tsallake tantancewa ba.

Tsoffin defaults suna cikin `src/shared/constants/visionBridgeDefaults.ts`; sabbin defaults
na mode/task-aware/cache da settings resolver suna cikin
`src/shared/constants/modalityBridgeDefaults.ts`. Guardrail ɗin yana bayar da zaɓin constructor
na `deps` domin tests su iya shigar da implementations na ƙarya na `getSettings` da
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Yana katse chat requests masu ɗauke da audio kafin su isa target wanda ba a san yana karɓar
audio input ba. Ba ya taɓa sake karkatar da chat request: ana fassara sassan audio zuwa rubutu
ta hanyar multipart endpoint mai dacewa da OpenAI da ake da shi, sannan model ɗin chat da aka
zaɓa ya ci gaba da transcripts na rubutu.

Tsarin aiki:

1. Warware `supportsAudio` ta hanyar `getResolvedModelCapabilities()`. Bayanin
   provider-registry da aka fayyace yana da fifiko, sai static model metadata, sannan
   `modalities_input` da aka daidaita. Input list da aka ayyana amma babu `audio` a ciki
   yana zama `false`; idan babu wata shaida ta capability, yana zama `null`. Duka `false`
   da `null` suna kunna bridge mai taka-tsantsan, yayin da `true` yake tsallake shi.
2. Warware saitunan `modalityBridgeAudio*` sannan a ciro top-level audio parts masu
   iya splicing daga kowane message ta shared detector na `detectMediaParts()`.
   Wire shapes da ake goyon baya su ne OpenAI `input_audio`, `audio_url`, da
   `source.media_type: "audio/*"`. Ana gano nested audio don routing amma ba a cire shi
   ta splice path. Ana iyakance aikin da `modalityBridgeAudioMaxClips`; sassan da suka zo
   daga baya suna nan ba tare da an taɓa su ba.
3. Bi `provider/model` da aka daidaita, ko kuma bari `selectAudioBridgeModel()` ya bi
   `AUDIO_TRANSCRIPTION_PROVIDERS` bisa tsayayyen tsarin catalog ya zaɓi model na farko
   mai active provider credential da za a iya amfani da shi.
4. `callAudioTranscription()` yana sauya audio na base64/data-URI zuwa multipart
   `file`, ko ya sauke `audio_url` na nesa ta public-only outbound guard tare da DNS pinning
   da iyakar 25 MB. Sannan yana yin POST na file ɗin da model da aka zaɓa zuwa self-loop na
   gida `/v1/audio/transcriptions`, tare da tantancewa ta `resolveSelfLoopBearer()`.
   Transcription route da ake da shi yana aiwatar da credential lookup na yau da kullum,
   sarrafa cooldown/rate-limit, da provider dispatch.
5. Kiran da ya yi nasara yana maye gurbin sassansa da `[Audio N]: <transcript>`.
   Kiraye-kirayen suna gudana da `Promise.allSettled`: gazawar ɗaya tana barin asalin
   audio part ɗin yadda yake (#4012 contract). Idan duk kiraye-kirayen sun gaza kuma an
   tabbatar target ɗin yana da `supportsAudio === false`, sassan suna zama
   `[Audio N]: (babu — babu STT provider da aka haɗa)` (#8430 contract). Ga target da ba
   a san halinsa ba (`null`), idan komai ya gaza ba a taɓa shi. Target da aka tabbatar
   text-only ne kuma ba shi da STT credential mai amfani yana karɓar wannan explicit stub
   ɗin ba tare da yin network call ba.

Transcripts da suka yi nasara suna amfani da cache na LRU/TTL na Modality Bridge na gaba
ɗaya a process. Key ɗin yana haɗa audio reference, tsayayyen operation label na
`audio-transcription`, da STT model da aka zaɓa; ba a taɓa caching na gazawa. Yunƙurin audio
yana sabunta shared counters na `bridged`, `cacheHits`, `failures`, da `lastUsedAt`.
Responses da aka sauya suna ɗauke da
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; requests da ba a
taɓa ba ba sa samun segment na Audio Bridge.

Saitunan lokacin aiki suna samun goyon bayan DB kuma Zod yana tabbatar da ingancinsu:

| Maɓalli                       | Tsoho   | Iyaka          |
| ----------------------------- | ------- | -------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —              |
| `modalityBridgeAudioModel`    | `""`    | Auto ko STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10           |

Har yanzu ana sarrafa ma'ajiyar cache ta haɗin gwiwa da `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, da `modalityBridgeCacheMaxEntries`.

### Gadar Bidiyo (`videoBridge.ts`, `videoBridgePipeline.ts`)

Tana katse sassan bidiyo na matakin sama a cikin `messages` na Chat Completions da
`input` na Responses API kafin a kira wani manufa da ba a san yana da tallafin bidiyo
na asali ba. Tsarukan da ake tallafawa su ne `input_video`, `video_url`,
`video_source`, URLs na HTTPS, da URI na bayanai na
`data:video/*;base64,...`. Ba a ɗaukar sunayen fayil kawai da ke cikin rubutu
a matsayin bidiyo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) ne ke da alhakin bi cikin buƙata,
binciken iyawa/manufa, tattarawa ta kowace buƙata, da payload ɗin amsa.
Aikin kowane bidiyo — samo shi, cache na cikakken sakamako, bayyana jerin firam
(wanda ke haɗa duk wani rubutaccen jawabin sauti da mai kira ya bayyana), da
ma'auni/soke aiki/tsaftacewa na kowace yunƙuri — an ɓoye shi a bayan
`processVideoPart` a cikin `videoBridgePipeline.ts`, wanda ake kira sau ɗaya
ga kowane ɓangaren bidiyo a cikin madauwar `preCall`. Wannan module ɗin kuma
yana ayyana bayyanannun iyakokin tashoshin `VideoMediaBrokerPort`
(samo bytes da fitar da firam ɗin da aka ɗauki samfurinsu), `VideoAudioTranscriptionPort`
(haɗa rubutaccen jawabin sauti da mai kira ya bayyana da taken firam ɗin da aka ɗauki
samfurinsu), da `VideoDrilldownPort` (iyakar adana bayanan zurfafa binciken firam;
har yanzu ba a haɗa shi da `processVideoPart` ba — hanyar
`/api/modality-bridge/video/drilldown` dabam ce kawai ke rubuta shigarwar zurfafa
bincike a halin yanzu).

Hanyar buƙatar `/v1` ta jama'a ba ta taɓa shigo da ko kiran subprocess ba. Ana
sauke bidiyoyin nesa ƙarƙashin iyakar 50 MiB; bidiyoyin base64 na cikin layi suna
da ƙayyadaddiyar iyakar 36 MiB bayan decoding ga kowane bidiyo domin samfurin
model/messages/framing ya iya kasancewa cikin iyakar karɓar buƙatar JSON ta
jama'a ta 50 MiB. Ana bincika tsawon bayanan cikin layi da kimantawar girman bayan
decoding kafin ware ƙwaƙwalwa. Ana buƙatar HTTPS a URL na nesa na farko da kowane
redirect, ta amfani da kariyar fitarwa zuwa jama'a kawai da ake da ita tare da
DNS pinning. Sannan bytes ɗin suna ketare ainihin iyakar broker ta ciki ta
`POST /api/modality-bridge/video/extract`. Wannan hanyar duka `LOCAL_ONLY` ce da
`SPAWN_CAPABLE`, tana karɓar buƙatar trusted-loopback kawai wadda aka tantance
ta hanyar sirri na kowane process, kuma ba ta taɓa karɓar URL, hanyar tsarin
fayil, executable, ko jerin arguments ba. Pipeline na iyakar girman body na API
da incremental body reader na handler suna tilasta iyakar shigarwar broker ta
50 MiB daban-daban. Layinsa mai iyaka yana gudanar da extraction ɗaya a lokaci
guda, yana ba da damar ayyuka huɗu masu jiran aiki, kuma yana iyakance shigarwar
da ke jiran aiki zuwa 100 MiB.

A cikin broker, `ffprobe` yana karanta fayil na sirri na gida; ƙayyadadden jerin
formats da aka yarda da su bai haɗa da tsarin playlist da manifest ba. Ga
containers na dangin MOV da aka yarda da su, external MOV data references suna
ci gaba da kasancewa a kashe ta tsohuwa, kuma ƙayyadadden command ɗin ba ya kunna
su. Dukansu `ffprobe` da `ffmpeg` suna amfani da jerin protocols da aka yarda
da su na `file` kawai, thread ɗaya, ƙayyadaddun argument arrays, babu shell,
kuma ana samo executables daga `PATH`. Attached-picture cover streams ba
playable candidates ba ne. Dole ne duk playable streams su cika iyakokin, kuma
ana fifita explicit default stream kafin deterministic lowest-index fallback.
An iyakance bidiyoyi zuwa daƙiƙa 600, pixels 8,192 a kowace dimension, da source
pixels 33,554,432. FFmpeg yana ɗaukar samfurin firam ɗin JPEG 1–16 a midpoint,
yana rage ma'aunin long edge zuwa pixels 1,024 aƙalla ba tare da upscaling
ƙananan inputs ba, kuma ba a taɓa ba shi URL. Sampling ɗin `uniform` ne ta
tsohuwa. Manufofin `scene_aware` na zaɓi da `segment_aware` na gwaji suna yin
ƙarin fixed FFmpeg pass guda ɗaya a kan local stream da aka riga aka tabbatar,
suna zaɓar iyakantattun timestamps na scene na `showinfo`, kuma suna komawa
ta hanyar deterministic zuwa uniform midpoints iri ɗaya idan detector ya gaza,
lokaci ya ƙare, output ya lalace, ko candidate set ya zama fanko. Yanayin
segment-aware yana rarraba midpoint samples daidai gwargwado ga validated scene
intervals; an yi bayanin segment-aware evidence da fallback behavior dalla-dalla
a ƙasa. Ana amfani da tsayayyen iyakar firam 16 bayan selection a kowace manufa.
Idan buƙatar scene-aware tana da budget na firam ɗaya kawai, tana amfani da
uniform midpoint na cikakken bidiyo mai aiki ko focus window kuma tana bayar da
rahoton `policyEffective: uniform`: firam ɗaya na scene da aka zaɓa ba zai iya
kiyaye dukkan temporal ends biyun ba. Mai kira na iya bayar da finite focus
window (`start`/`end` seconds) idan yana so; ana clamp bounds zuwa duration na
media, ana ƙin windows da aka juya ko waɗanda ba finite ba, kuma ana aiwatar da
duk sampling policies a cikin normalized interval kawai. Ana haɗa window ɗin
da aka samu a cikin sampling metadata da untrusted description prefix domin
downstream models su iya bambance focused excerpt da cikakken timeline.

Mayar da hankali na semantic caption wani keɓantaccen, bayyanannen setting ne.
Yanayin analysis na `full` na tsohuwa yana kiyaye frame prompt da ake da shi kuma
ba ya taɓa tura request text zuwa caption model. A yanayin `focused`, bridge ɗin
yana karanta sabon `text`/`input_text` marar fanko da mai amfani ya rubuta kawai
daga container ɗin Chat ko Responses iri ɗaya, yana normalize shi zuwa NFC,
yana collapse control characters da whitespace, kuma yana iyakance shi zuwa
Unicode code points 500. Sakamako marar komai yana komawa ga ainihin `full`
prompt. Ana serialize usable hint a matsayin JSON a cikin keɓantaccen
untrusted-user-context block kuma yana iya fifita observable details kawai; ba
zai iya soke gargaɗin dabam na ƙin bin umarnin da ake gani ko ji a cikin media
ba. Textual focus ba ya taɓa infer `start`/`end` ko canza temporal sampler.

#### Shaidar ɓangaren tsari ta FU-07

`segment_aware` yana amfani da zagayen nazarin-farko guda ɗaya mai iyaka a kan
rafi na bidiyon gida da aka riga aka tabbatar. Tsayayyen jerin matata da farko
yana rage sikeli zuwa faɗin da bai wuce pixels 320 ba, yana gano sauye-sauyen
fage da lokutan daskarewa, sannan yana ɗaukar samfuri a frame 1 a kowace
daƙiƙa don dusashewa, matsakaicin luma, da bayanan sarari/lokaci. Zagayen yana
da iyaka zuwa samfuran tsari 600, thread ɗin FFmpeg/matata guda ɗaya, jerin
izinin protocol na `file` kawai da na container iri ɗaya, iyakar fitowar
process ta 1 MiB, da aƙalla daƙiƙa 30 a cikin shared abort/deadline na broker.
Ba ya taɓa karɓar command, filter, path, ko URL daga request.

Ƙimomin tsarin shaidar ɗaukar samfuri ce mai sakamako tabbatacce, ba fahimtar
ma’anar bidiyo ba. Ba sa hasashen batutuwa, ayyuka, captions, magana, ko niyyar
mai amfani. Iyakokin fage da daskarewa suna samar da segments; yawan daskarewa,
dusashewa, exposure, cikakken bayanin sarari, da sauyin lokaci kawai suke shafar
yadda ake rarraba kasafin frames 1–16 da ake da shi. Segment da ya daskare gaba
ɗaya yana da iyakar frame guda ɗaya, yayin da segments marasa daskarewa suke
gasa don sauran kasafin. Idan iyakoki sun fi frames yawa, ana kiyaye daidaitaccen
rufe timeline domin saurin cuts na farko kada su ɓoye dogon segment na ƙarshe.
Ana haɗe iyakokin fage da suke cikin ƙudurin nazari na daƙiƙa 1 daga iyakar
daskarewa.

Rashin filters, shaida marar tsari/mara komai, kuskuren detector, ko ƙarewar
lokacin nazarin-farko mai iyaka suna komawa ba tare da toshewa ba zuwa ainihin
manufar uniform midpoint. Abort daga caller ko deadline na broker ba ya komawa
ba tare da toshewa ba: yana dakatar da subprocess da ke gudana, yana hana fitar
da frames daga baya, kuma ana cire private temporary tree a cikin `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` yana samar da deterministic real FFmpeg
fixtures don tanadin kiran caption bayan dedup, rarraba kasafin dense-motion,
shaidar blur/exposure/SI-TI, rapid cuts masu dogon tail, da gradual-fade false
positives. Yana rubuta lokacin bango na nazarin-farko kuma, inda
`/usr/bin/time` yake samuwa, child CPU da peak RSS. Gwaje-gwajen ingancinsa
structural oracles ne kawai. Ingancin ainihin caption-model yana nan `HOLD`
saboda wannan harness ba shi da endpoint mai izini ko frozen judge. Tanadin
kuɗi ma yana nan `HOLD` sai dai idan `--caption-cost-per-call-usd` ya bayar da
bayyanannen ƙiyasin kuɗin kowane kira mai ƙima ta tabbatacciya; script ɗin ba ya
ƙirƙirar ɗaya daga cikin sakamakon biyu.

Kowane frame yana da iyakar 4 MiB, duk raw frames tare suna da iyakar 23 MiB,
kuma serialized response na broker yana da iyakar 32 MiB. Ana cire private
temporary directory a cikin `finally`. OmniRoute ba ya haɗa FFmpeg a cikinsa
kuma ba ya karɓar custom executable path. Kafin captioning, bridge yana aiwatar
da conservative visual deduplication pass: ana rage kowane JPEG zuwa buffer na
grayscale 16×16 kuma ana kwatanta shi kawai da frame na ƙarshe da aka riƙe. Don
kasafin caption da aka nema wanda ya fi frame guda ɗaya, extraction yana samar
da bounded candidate pool da bai wuce ninkin kasafin ba kuma bai taɓa wuce
frames 16 ba. Ana amfani da iyakar da aka nema ne kawai bayan deduplication,
tare da kiyaye candidates na farko da na ƙarshe da aka zaɓa yayin final thinning
idan kasafin ya kai aƙalla biyu. Manufar da aka ba da sigar
`grayscale-16x16-mean-cells-v2` tana amfani da mafi girma tsakanin mean luma
delta da rabon thumbnail cells waɗanda normalized delta ɗinsu ya kai aƙalla
0.05. Duplicate threshold shi ne constant 0.04, wanda aka zaɓa don sauƙin
hasashen sakamako maimakon a bayyana shi a matsayin runtime setting. Wannan
secondary high-contrast signal yana kiyaye ƙananan motsi da sauye-sauyen rubutu
da ake iya gani waɗanda kwatancin mean-only zai iya ɓoyewa. Kuskuren comparator
ko decoder yana komawa ba tare da toshewa ba kuma yana kiyaye coverage. Output
metadata yana ware extracted candidates, frames da aka yi amfani da su cikin
nasara, da visual duplicates da aka yar.

Video part da aka yi masa alama a bayyane na iya neman timestamped contact
sheet. Bridge yana gina JPEG grid mai columns 4 da frames 16 aƙalla. Kowace
cell mai pixels 512 tana ƙona source timestamp ɗinta a cikin high-contrast
bottom band, yayin da timestamps iri ɗaya suke ci gaba da kasancewa a textual
metadata don downstream association da audit. Cikakken JPEG yana ci gaba da
kasancewa ƙarƙashin iyakar 32 MiB. Idan `sharp` ba zai iya decode ko compose
grid ɗin ba, bridge yana komawa ga individual JPEG frames; abort daga client
har yanzu yana wucewa ta cikin aikin sheet.

An ware shaidar promotion da gangan daga synthetic composition microbenchmark.
`scripts/perf/video-bridge-contact-sheet-eval.ts` yana ayyana schema-versioned
A/B harness don ainihin OpenAI-compatible vision models. Yana auna
provider-reported tokens, end-to-end wall latency (ciki har da sheet composition),
yawan model-call, da manifest-defined fact retention. Ba a rubuta raw model
responses cikin report; SHA-256 digests da matched fact IDs kawai ake riƙewa.
Harness ba ya yin network ko paid model call sai an tura `--execute-real` kuma
an saita `--model`, `OMNIROUTE_BASE_URL`, da `OMNIROUTE_API_KEY`. Ba tare da
wannan bayyanannen real run ba, machine-readable verdict ɗinsa yana nan `HOLD`;
synthetic payload/call-count measurements kaɗai ba shaidar promotion ba ce.

Callers za su iya haɗa optional `transcript.cues` array zuwa supported video
part idan sun riga sun mallaki aligned text. Kowane cue dole ne ya ɗauki `text`,
finite `start`/`end` interval da ke cikin probed duration, da whitelisted
`source` (`client`, `embedded`, ko `audio-bridge`); `confidence` yana default
zuwa `1` kuma dole ya kasance tsakanin `0` da `1`. Ana haɗe exact duplicate
cues. OmniRoute ba ya taɓa fara transcription daga wannan metadata: ana kwafe
validated cues zuwa described result tare da source, confidence, da interval,
kuma ana nuna su a matsayin untrusted observations tare da frame captions.
Ana ƙin rubutu mara inganci, wanda ya fita daga range, ko wanda ba shi da
provenance maimakon a gauraya shi cikin caption stream. A halin yanzu caller ne
yake ayyana filin `source`, ba server ne yake tabbatar da shi ba: OmniRoute
yana tilasta cewa ƙimar ta kasance ɗaya daga cikin strings uku da aka yarda da
su, amma har yanzu ba ya tabbatarwa ta cryptographic cewa alamar `embedded` ko
`audio-bridge` da gaske ta fito daga extraction mallakar server. A ɗauki
`source` a matsayin untrusted hint har sai an samar da wannan verification;
kada a gina authorization decisions a kansa.

Mai kira na ci-gaba zai iya samar da waƙar `audioTranscript` da aka riga aka ba da izini
don bidiyon guda. Mahaɗin haɗawa yana gudanar da lura na gani da na sauti ƙarƙashin
wa’adin ƙarshe da siginar katsewa guda, yana jera su a kan tsarin lokaci na bai ɗaya, yana haɗe
kwafi masu daidai iri ɗaya, sannan yana bayar da sakamako na wani ɓangare idan ɓangare ɗaya kawai ya yi nasara.
`audioTranscript` mara inganci yana sauka zuwa wannan sakamako na wani ɓangare — ana riƙe
bayanin gani kuma reshen sauti yana rubuta lambar gazawa da aka tsabtace —
maimakon a sa duk bidiyon ya gaza. Samuwar kowane reshe, tutar sakamako na wani ɓangare,
da lambobin gazawa da aka tsabtace ana kiyaye su a cikin sakamakon da aka bayyana, a cikin
metadata na kariya (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), a cikin metadata na ma’ajiyar sakamako, da kuma a cikin
ƙididdigogin haɗawa na bridge. Tsohuwar hanyar Video Bridge ba ta kiran speech-to-text
ko sauke wani kwafin media na biyu; idan babu wannan waƙa da aka bayar a sarari, tana ci gaba
da zama ta bidiyo kawai.

**Riƙe transcript (#12150 P1).** Wannan yana aiki ta atomatik duk lokacin da
Video Bridge (wanda shi kansa sai an zaɓi amfani da shi) ya render wata alamar transcript — babu wata
tutar riƙewa ta daban. Lokacin da buƙata ta render kowace alamar transcript (wani
`transcript` da mai kira ya bayyana ko wani `audioTranscript` da aka haɗa), kariyar tana yi masa alama da
`videoBridgeObserved` sannan ta samar da inuwar bayanin bidiyo da aka rufe bayananta —
rendering iri ɗaya wanda aka maye gurbin jikin rubutun-sake na kowace alama da
`[redacted-video-transcript]`, wanda aka gina ta hanyar maye gurbin filin alama mai tsari
kafin a haɗa string ɗin (ba a taɓa yin hakan ta hanyar parse na flattened text ba, don haka babu
abun cikin alama — ko na ƙeta ko na yau da kullum, ciki har da jikunan da ke ɗauke da `]` kamar
`[inaudible]`/`[music]` — da zai iya tsira). Jikin buƙatar call-log da aka adana yana musanya
kowane ɓangaren rubutu da aka samo daga bidiyo da wannan inuwa da aka rufe bayananta, ta hanyar daidaiton
abun ciki; ana sake karanta maƙallin `fullText` daga cikakken payload na kariyar kafin kira,
don haka daidaitawar har yanzu tana yin nasara bayan kariyoyin chain na gaba (masu rufe PII da
bayanan shaida, fifiko 10/95) sun sake rubuta bayanin a wurinsa da kuma
bayan shigar da system-prompt/handoff/memory ta sake fasalin message array. Jikin
da aka aika zuwa upstream ga model bai canza ba. Haka kuma, buƙatar da aka lura da ita ba ta cika
Memory mai ɗorewa da komai ba (ana tsallake extraction da aka samo daga buƙata da wanda aka samo daga amsa),
don haka amsar model ɗin kansa ba za ta iya maimaita rubutun transcript cikin Memory ba.

**Filayen bidiyo marasa sarrafawa (#12430).** Lokacin da aka kunna bridge kuma ba a san ko akwai tallafin bidiyo na asali ba ko kuma babu shi, filayen `transcript`/`audioTranscript` da aka ayyana su ma suna kunna `videoBridgeObserved`, ko da bayan gazawar bayani ko iyakar `maxVideos`. `null` da strings marasa komai suna ƙirgawa; filayen da ba su nan da metadata da ba na bidiyo ba ba sa ƙirgawa. Kwafe da aka riƙe suna rufe waɗannan filayen ko su bar buƙatar gaba ɗaya, kuma ana kewaye caches/Memory. Payload na provider bai canza ba.

Ƙarin kwafe da aka riƙe suna amfani da siginar buƙatar da aka lura da ita iri ɗaya. Snapshot na buƙatar client marar sarrafawa
kafin kariya, buƙatar da ke jiran aiki a memory, da log na buƙatar da aka ƙi tun da wuri
suna maye gurbin filayen transcript a cikin sassan bidiyo bisa tsari;
string prompts da matakan pipeline da context handoff suka ƙirƙira ana rufe bayanansu
a sink na jikin buƙatar da aka adana. Alamar `video_content_removed` da aka adana
tana sa ci gaba ta `previous_response_id` ya gaza cikin aminci maimakon sake gina
rubutun da aka yi watsi da shi da gangan. Idan buƙatar da aka lura da ita ta rasa
inuwar rufe bayanai ta kowane ɓangare kafin logging, ko ma inuwa ɗaya daga cikin inuwar bidiyo da yawa
ta kasa dacewa bayan gyare-gyaren buƙata na gaba, ana barin jikin buƙatar da za a riƙe
gaba ɗaya maimakon riƙe transcript da aka rufe wani ɓangare kawai.

Ga buƙatar da aka lura da ita, amsar model na iya ambaton kowane ɓangare na
transcript ba tare da iyakar alama mai tsari ba. Saboda haka ana maye gurbin
`responseBody` na call-log da aka adana da alamar tsallakewa; cikakken
artifact na pipeline (wanda zai iya haɗa jikunan upstream/client da stream chunks)
ba a riƙe shi. Semantic, idempotency, da reasoning-replay caches suna kewaye
karatu da rubutu don wannan buƙatar. Buƙatar provider da amsar da client ke gani
ba su canza ba. Ana zubar da early keepalive bytes daga buffer na wucin gadi
lokacin da aka tsallake cikakken artifact. Gargadin malformed EventStream na Kiro
yana bayar da rahoton adadin payload bytes kawai, ba abun cikinsa ko raw error na
JSON parser ba.
Wannan ba iƙirarin cewa an binciki kowane diagnostic na provider/plugin marar alaƙa ba ne;
ana bin diddigin faɗaɗa binciken retained-sink a #11658.

Tsarin rayuwar `/api/modality-bridge/video/drilldown` na ciki wani keɓantaccen
cache substrate ne da aka tantance ta loopback/token. Kowace operation kuma tana buƙatar
canonical opaque principal ID. Kafin a kunna wani mai kira na production, dole ne ya
samo wannan ID daga tenant da aka tantance kuma kada ya taɓa tura ƙimar da
client ya zaɓa. Cache keys suna ɗaure wannan principal da canonical session da
video-reference IDs, suna adana keys da aka samo daga SHA-256 kawai, sannan suna iyakance duka karatu
da gogewa ga principal ɗin guda. Cache ɗin yana adana aƙalla derived JPEG
frames 16 kacal ga kowace entry, yana sa wa’adinsu ya ƙare bayan mintuna goma, kuma yana tallafa wa
karatun `start`/`end` mai iyaka ko gogewar session a sarari.

Kowane principal an iyakance shi zuwa entries 16 da canonical JPEG data mai 64 MiB. Waɗannan
iyakoki sun zaman kansu daga matsakaicin duniya na entries 64/256 MiB: matsin quota na
principal yana fitar da entries na principal ɗin kawai da aka fi daɗewa ba a yi amfani da su ba kafin a
yi la’akari da fitarwa ta global LRU. Ana share entries da wa’adinsu ya ƙare daga lissafin
principal da na duniya yayin ayyukan cache, yayin da sokewa da gazawar validation ba sa
commit na partial replacement.

Ma’ajiyar cache tana ƙin Base64 marar canonical, padding mai yawa, kafofin da ba JPEG ba, JPEG marasa inganci ko waɗanda aka yanke, da JPEG waɗanda ke haifar da gargadi yayin cikakken decode na hoto mai iyaka ta `sharp`. Tana sake encode kowane hoto da aka karɓa zuwa JPEG na canonical, tana samo faɗi da tsawo daga bytes da aka decode maimakon amincewa da filayen mai kira, sannan tana watsar da duk wasu bytes na polyglot da ke biye maimakon riƙe su. Buffer ɗin da aka matsa na canonical mai iyaka kaɗai ake lissafawa a cikin quota biyun. Iyakar JSON na wire tana haɗa da ƙarin nauyin Base64 don iyakar shigarwar da aka decode ta 32 MiB. Kowane
derivation da aka adana yana rubuta ingantaccen tsarin JPEG/resolution ɗinsa, sampling policy,
derivation version, lokacin ƙirƙira, content hash da uwar garken ya ƙididdige, da hashed parent
reference tare da parent-content hash na amintaccen mai kira. Ana bincika sokewa
tsakanin matakan asynchronous na decode/hash kafin atomic cache commit.

Wannan rukuni bai haɗa production producer da route ba tukuna kuma ba ya
samar da zaɓin variant mai resolution iri-iri. Saboda haka, hanyar buƙatar
Video Bridge mai gaskiya ba ta jawo ƙarin aiki, yayin da tenant-bound principal derivation da
cikakken tsarin rayuwar FU-08 mai resolution iri-iri suke nan a matsayin aikin bin-diddigi bayyananne
maimakon a rubuta su a matsayin halayen da aka kammala.

Ana yi wa frames caption ɗaya bayan ɗaya da tsarin Video model da aka saita. Video override
mara komai yana gaji saitin Vision; idan dukansu babu komai, Vision
auto-router yana zaɓar ingantaccen model mai goyon bayan vision. Captions da suka yi nasara
suna maye gurbin ainihin part da tabbataccen prefix na `[Video description:` wanda kuma
ke nuna rubutun a matsayin observation da aka samo daga media wanda ba a amince da shi ba, sannan ya gaya wa
models na gaba kada su bi umarnin da aka samu a cikin media. Frame-caption cache keys
sun haɗa da JPEG bytes, prompt, timestamp, da effective model; captions da suka yi nasara
kaɗai ake adanawa a cache. Cache entries suna riƙe ainihin producer model da ya yi nasara,
har da fallback model; bridge yana bayar da rahoton `mixed` idan frames daban-daban
models daban-daban ne suka samar da su. Cache hit yana sake amfani da wannan producer identity
maimakon sake masa lakabi a matsayin routing plan da aka nema. Cache na sakamakon
dukkan bidiyo yana amfani da key bisa kowane input da ke canza output — prompt, effective
model, sampling policy, frame count, semantic analysis mode, SHA-256
fingerprint na normalized focus hint, focus window, `transcript`,
`audioTranscript`, da contact-sheet flag — don haka canza kowane ɗaya daga cikin waɗannan
dimensions yana haifar da cache miss, ba sake amfani da tsohon abu ba. Visual dedup policy
version, threshold, da bounded candidate-frame count su ma suna bayyane a cikin
result-cache key da metadata; saboda haka sauyin policy ba zai iya sake amfani da tsohon
bayanin dukkan bidiyo ba. Result-cache v4 metadata yana riƙe mode da
fingerprint, amma ba ya taɓa riƙe raw user task. Guardrail metadata yana bayar da rahoton duka
requested da effective analysis modes; requested `focused` mode wanda ba shi da
rubutun mai amfani mai amfani ana bayar da rahotonsa a matsayin effective `full`.

Guardrail yana cire kowane video part da ake goyon baya amma ba ya bayyana fiye da
`modalityBridgeVideoMaxVideos`. Ga target da aka tabbatar yana da
`supportsVideo === false`, bidiyoyin da suka gaza da waɗanda suka wuce iyaka suna zama bayyanannun safe
text markers domin kada wani raw video ya tsira. Idan capability ba a sani ba, waɗannan parts
suna nan yadda suke. Targets masu `supportsVideo === true` suna wuce bridge.
Client request abort signal yana isa ta download, broker queue,
subprocesses, da caption calls; aborts suna dakatarwa tsakanin bidiyoyi kuma ba sa taɓa fail open
zuwa raw media.

Runtime settings suna da tallafin DB kuma Zod-validated ne:

| Key                                 | Default     | Iyāka / halayya                                                                                      |
| ----------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Optional runtime, opt-in                                                                             |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` yana kiyaye generic captions; `focused` yana amfani da bounded, untrusted latest-user context |
| `modalityBridgeVideoModel`          | `""`        | Yana gaji Vision Bridge model                                                                        |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                 |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, ko proportional `segment_aware`; gazawar detector tana koma wa `uniform`   |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                  |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                       |

Legacy persisted Video timeout values da suka wuce daƙiƙa 120 ana clamp ɗinsu zuwa
broker deadline; ana ƙin sabbin settings writes da suka wuce wannan iyaka.
`GET /api/modality-bridge/video/runtime` yana buƙatar trusted stamped loopback
locality kafin authentication ko runtime probing, sannan yana buƙatar management
auth. Yana dawo da `available` kawai, tsarkakakkun FFmpeg/ffprobe versions, da tabbataccen
dalili idan runtime ba ya samuwa. Internal extraction endpoint ba
public upload API ba ne: cikewar queue tana dawo da `503` tare da `Retry-After`, yankewar haɗin
mai kira tana dawo da `499`, sannan tabbataccen broker deadline yana dawo da `504`. Converted responses suna ƙara
`video->text;model=<visionModel>;parts=<videos>` zuwa central
`x-omniroute-modality-bridge` header ba tare da cire Vision ko Audio segments ba.

### Mai Rufe PII (`piiMasker.ts`)

Yana gudana a matakai **biyu**.

- **`preCall`** yana kwafe payload ɗin, yana bi ta cikin `system`, `messages`, `input`, da
  `prompt` (har da abubuwan da suke tsantsar string), sannan yana amfani da `processPII()` (daga
  `@/shared/utils/inputSanitizer`) a kan filayen string na `content`/`text`. Lokacin da
  `PII_REDACTION_ENABLED=true`, ana ɓoye PII da aka gano a cikin payload ɗin da
  za a aika. Wannan ba ya dogara da `INPUT_SANITIZER_MODE` (wanda ke sarrafa
  manufar prompt-injection kawai). Lokacin da aka kashe ɓoyewa, kiran yana rubuta
  adadin abubuwan da aka gano ba tare da sake rubuta abun ciki ba.
- **`postCall`** yana yin deep-clone na amsar, sannan yana gudanar da `sanitizePIIResponse()` tare da
  abin rufe tsarin Responses-API (`maskResponsesOutput` — yana rufe
  `output_text` da `output[].content[].text`). Idan wani ɓoyewa ya faru,
  amsar da aka gyara za ta maye gurbin ta asali.

Guardrail ɗin ba ya taɓa toshewa; yana ƙara bayanai ne kawai (`meta.detections`,
`meta.redacted`) ko kuma ya sake rubutawa.

### Shigar da Umarni na Yaudara (`promptInjection.ts`)

Yana gano tsarin yaudara a cikin abun ciki da mai amfani ya bayar sannan ya aiwatar da
manufar da aka saita. Halayensa suna ƙarƙashin sarrafa environment variables da zaɓuɓɓukan
constructor:

| Saiti          | Env var                                                                                                     | Tsoho  | Tasiri                                                                                                                                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| An kunna       | `INPUT_SANITIZER_ENABLED`                                                                                   | `true` | Lokacin da yake `false`, guardrail ɗin yana dakatar da aiki nan take.                                                                                                                                      |
| Yanayi         | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                             | `warn` | Manufar injection: `block`, `warn`, ko `log`. (Ana karɓar `redact` don dacewa da tsoffin sigogi, amma **ba** ya cire rubutun injection; `PII_REDACTION_ENABLED` ne ke sarrafa sake rubuta PII na request.) |
| Iyakar toshewa | zaɓin `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (sunan madadi `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Mafi ƙarancin matakin haɗari da ake buƙata don toshewa. A saitin tsoho, Medium na sa ido ne kawai.                                                                                                         |

**Fifikon yanayi** (`getMode`): `options.mode` na mai kira →
override na **DB feature-flag** na `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → env na `INJECTION_GUARD_MODE` → env na `INPUT_SANITIZER_MODE` →
`warn`. Saboda haka, override na dashboard yana fin environment variables, don haka UI na Feature
Flags yana sarrafa guard ɗin da ke gudana kai tsaye (ba sai an sake farawa ba). Karatun DB yana da kariyar gazawa:
idan kuskure ya faru, guard ɗin zai koma ga halayen da suka dogara da env, kuma idan ba a
saita override ba, halayen za su kasance iri ɗaya da warwarewar da ke amfani da env kawai.

Tushen ganowa:

1. `sanitizeRequest()` daga `@/shared/utils/inputSanitizer` (rukunin detector na bai ɗaya
   da ake amfani da shi a wasu wurare cikin pipeline).
2. `DEFAULT_GUARD_PATTERNS` na ciki (a halin yanzu `system_override_inline` da
   `markdown_system_block`, duka suna da matakin haɗari na `high`).
3. `customPatterns` na zaɓi da aka bayar ta zaɓuɓɓukan constructor (strings, regex,
   ko records na `{ name, pattern, severity }`).

Lokacin da `mode === "block"` **kuma** aƙalla abu ɗaya da aka gano ya kai matakin
haɗarin da aka ƙayyade, `preCall` yana dawo da `{ block: true, message: "An ƙi request:
an gano abun ciki mai tayar da shakku" }`. A yanayen `warn`/`log`, guardrail ɗin yana yin logging amma
yana barin kiran ya gudana. Ana kuma export na helper na bai ɗaya `evaluatePromptInjection()`
don masu kira da ke buƙatar tantance prompts ba tare da bi ta registry ba.

**Iyakar dubawa (v3.8.20):** detector ɗin yana bincika **16 KB na farko** kawai na
rubutun prompt da aka haɗa — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) a cikin
`src/shared/utils/inputSanitizer.ts`. Dukansu `detectInjection()` da
`evaluatePromptInjection()` suna yin `slice(0, MAX_INJECTION_SCAN_BYTES)` kafin gudanar da
pattern loop. Umarnin injection kan kasance kusa da saman input, don haka wannan
yana iyakance regex CPU/GC a payloads masu ɗaruruwan KB ba tare da raunana ganowa ba (duba
#3932, #4041).

### Mai Rufe Bayanan Shiga (`credentialMasker.ts`)

Yana aiki a **dukkan** matakai biyu, a ƙarshe cikin jerin tsoho (priority `95`). Yana ɓoye
sanannun tsarin API-key / secret-token daga payload ɗin da za a aika (abun cikin message,
arguments na tool-call, sakamakon tool) **da kuma** amsar provider, don kada
credential da aka manna a cikin prompt (ko sakamakon tool ya maimaita) ya fallasa
ga upstream provider ko kuma ya koma ga client.

- **Sai an kunna da gangan kawai**, bisa ƙa'ida iri ɗaya da ɓoye PII (kusa da Hard Rule #20):
  yana a kashe sai dai idan `settings.credentialRedactionEnabled === true` **ko**
  `CREDENTIAL_REDACTION_ENABLED=true`. Idan yana kashe, tsarin kariyar ba ya yin komai —
  ba ya taɓa toshewa kuma ba ya taɓa sake rubutawa.
- `redactCredentials()` yana bi ta dukan bishiyar payload/response (`walkValue()`,
  cikin kariya daga gurɓata prototype, kuma cikin kariya daga zagayowar bayanai ta amfani da `WeakSet`) sannan ya maye gurbin abubuwan da suka dace da
  alamar `[REDACTED:<type>]`, yana kwafi rassan da ainihin
  suka canza kawai.
- `CREDENTIAL_PATTERNS` yana rufe maɓallan masu samar da LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), token na VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maɓallan biyan kuɗi (Stripe, Square), maɓallan
  cloud (AWS access key, Twilio, SendGrid, Mailgun), private keys / JWTs,
  connection strings masu ɗauke da bayanan shiga (`mongodb://user:pass@...`, da sauransu), da kuma
  tsarin ƙimar header na gama-gari na `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Ana ɓoye maɓallan da ke da siffar header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) bisa tsari (ƙimar kawai, ana kiyaye prefix na scheme kamar
  `Bearer `/`Basic `) maimakon amfani da generic text regex.
- Tsarin kariyar ba ya taɓa toshewa; sake rubutawa kawai yake yi (`modifiedPayload` /
  `modifiedResponse`) tare da ƙara bayani (`meta.credentialsRedacted`, `meta.count`).

Kariyar regression: `tests/unit/credential-masker-guardrail.test.ts`.

## Kwangilar Tushe (`base.ts`)

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
  block?: boolean; // true yana dakatar da sarkar nan take
  message?: string; // ana nuna shi lokacin da aka toshe
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall ne ke mayar da shi don sake fasalin buƙatar
  modifiedResponse?: TValue; // postCall ne ke mayar da shi don sake fasalin amsar
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

Guardrail yana nuna cewa “babu canji” ta hanyar mayar da ko dai `void`, `{}`, ko
`{ block: false }`. Mayar da `modifiedPayload`/`modifiedResponse` yana maye gurbin
ƙimar da ke gudana cikin sarkar zuwa guardrails na gaba.
`signal?: AbortSignal` yana isar da zagayowar rayuwar mai kira zuwa guardrails. Soke buƙata shi ne keɓantaccen yanayin fail-open da aka yi da gangan: gadajen kafofin watsa bayanai suna dakatar da aiki kuma su share abubuwan wucin gadi ba tare da dawo da ɗanyen kafofin watsa bayanai zuwa manufa da aka san ba ta goyon bayansu ba.

## Rajista (`registry.ts`)

Singleton `guardrailRegistry` yana bayyana:

- `register(guardrail)` — yana ƙara (ko maye gurbin ta sunan da aka daidaita) guardrail kuma
  yana sake tsarawa ta hanyar hawan `priority`.
- `clear()` / `list()` — masu taimakawa gudanarwa.
- `runPreCallHooks(payload, context)` — yana maimaita guardrails masu aiki, yana wuce da
  payload ta hanyar `modifiedPayload`, kuma yana tsayawa a farkon `block: true`.
- `runPostCallHooks(response, context)` — tsarin guda ɗaya a gefen amsa.
- `resetGuardrailsForTests({ registerDefaults })` — yana share yanayi kuma a zaɓi
  yana sake yin rajistar tsoffin abubuwan don tsabtataccen keɓewar gwaji.

Duk masu gudu suna dawo da `{ blocked, payload|response, results, guardrail?, message? }`
inda `results` shine jerin bayanan `GuardrailExecutionResult` waɗanda suka haɗa da
filayen `blocked`, `skipped`, `modified`, `error`, da `meta` na kowane guardrail,
masu amfani don bin diddigi.

### Kashe Guardrails Ga Kowane Buƙata

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` yana tattara
jerin sunayen guardrail da aka cire kwafi waɗanda ya kamata a tsallake su don
buƙatar yanzu. Tushen (duk na zaɓi, duk an haɗa su):

- `apiKeyInfo.disabledGuardrails`
- Jikin buƙata `disabledGuardrails` (matakin sama)
- Jikin buƙata `metadata.disabledGuardrails`
- Header `x-omniroute-disabled-guardrails` (ko tsohon
  `x-disabled-guardrails`)

Ƙimar na iya zama jerin igiyoyi ko igiya mai raba-koma; ana daidaita sunaye
zuwa ƙananan haruffa kebab-case (`pii_masker` → `pii-masker`). Ana wuce da
sakamakon ta hanyar `context.disabledGuardrails` zuwa rajista, wanda ke
tsallake guardrails masu dacewa (`skipped: true` a cikin `results`).

## Tsarin Aiki

Ga kowane buƙata da ke gudana ta `src/sse/handlers/chat.ts` da
`open-sse/handlers/chatCore.ts`:

1.  `resolveDisabledGuardrails(...)` yana gina jerin abubuwan da za a tsallake daga maɓallin API, jiki,
    da kuma kanun labarai.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` yana gudanar da guardrails a cikin tsarin fifiko mai hawa:
    - Guardrails da aka kashe ana rubuta su a matsayin `skipped`.
    - Kowane `preCall` na guardrail na iya sake rubuta bayanan da aka ɗora ta hanyar `modifiedPayload`.
    - `block: true` na farko yana dakatar da sarkar kuma mai sarrafawa yana mayar da
      martanin kin amincewa da guardrail.
3.  Bayanan da aka ɗora (watakila an sake rubuta su) suna shiga cikin hanyar haɗin gwiwa da kuma
    aikin aika zuwa sama.
4.  Bayan an haɗa martanin, `guardrailRegistry.runPostCallHooks(...)`
    yana gudanar da sarkar iri ɗaya akan martanin. `block: true` anan yana jefar da martanin daga sama.

Guardrails da suka jefa kuskure ana rubuta su da `error: <message>` kuma ana shigar da su ta hanyar
`logger.warn`, amma sarkar tana ci gaba – an tsara ta don ta ci gaba duk da kuskure.

## Saita

Ma'aunin muhalli da guardrails na ciki ke karantawa:

| Variable                              | Wanda ke amfani da shi      | Tasiri                                                                                              |
| :------------------------------------ | :-------------------------- | :-------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`          | Saita `false` don kashe gano gaba ɗaya.                                                             |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`          | Manufar allura: `warn`, `block`, ko `log`. Tsohon darajar `redact` baya sake rubuta rubutun allura. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`          | Yanayin don kariyar allura; kuma alamar fasalin DB da **ke mamaye** ma'aunin muhalli (DB > ENV).    |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`          | Mafi ƙarancin tsanani da `MODE=block` ke ƙi: `high` (tsoho), `medium`, ko `low`.                    |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`          | Tsohon suna ga `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`                | Lokacin da `true`, PII na buƙata ana gyara shi (mai zaman kansa daga yanayin allura).               |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (ƙasa da ruwa) | Yana sarrafa halayen masker na gefen martani.                                                       |

Guardrails na Modality Bridge suna karanta saitin lokacin aiki daga ma'ajiyar saitunan da DB ke tallafawa
(`getSettings()`), ba ma'aunin muhalli ba. Maɓallan farko na Vision sune
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, da
`modalityBridgeCacheMaxEntries`. Tsoffin maɓallan
`visionBridge*` ana karɓar su ne kawai a matsayin abin da aka rubuta na sake karantawa na zagaye ɗaya;
rubuce-rubucen dashboard suna amfani da maɓallan farko. Abubuwan tsoho da mai warwarewa na sake karantawa suna zaune a
`src/shared/constants/modalityBridgeDefaults.ts`, tare da tsoffin ma'auni da aka riƙe a
`src/shared/constants/visionBridgeDefaults.ts`.

Audio yana amfani da `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, da `modalityBridgeAudioMaxClips`, tare da saitunan
`modalityBridgeCache*` da aka raba. Audio bashi da tsohon maɓallin sake karantawa saboda an gabatar da waɗannan maɓallan tare da tsarin Modality Bridge.

Video yana amfani da `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, da
`modalityBridgeVideoTimeout`, tare da saitunan `modalityBridgeCache*` da aka raba.
An kashe shi ta tsohuwa saboda FFmpeg/ffprobe sune zaɓin dogaro na aiki kuma
ƙara rubutun firam yana ƙara jinkiri da farashin samfuri.

## Tsare-tsare na Musamman

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "An wuce kasafin kuɗi na yau da kullun" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Matakai:

1. Ƙirƙiri `src/lib/guardrails/myGuardrail.ts` yana faɗaɗa `BaseGuardrail`.
2. Aiwatar da `preCall` da/ko `postCall`.
3. Ko dai a yi rajista a lokacin shigo da kaya (tura daga `registerDefaultGuardrails`) ko
   kiran `guardrailRegistry.register(...)` a lokacin gudu — rajistar tana maye gurbin
   kowane tsarin tsaro na baya da suna ɗaya.
4. Ƙara gwaje-gwaje a ƙarƙashin `tests/unit/` (misalai masu akwai:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Gwaji

Yi amfani da `resetGuardrailsForTests()` tsakanin gwaje-gwaje don farawa daga sanannen yanayi.
Wuce `{ registerDefaults: false }` don farawa da rajista mara komai kuma
yi rajistar tsare-tsaren tsaro kawai da ake gwadawa. Vision Bridge yana karɓar allurar dogaro (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge yana bayyana
daidaitattun abubuwan da suka dace don saituna, iyawa, zaɓin samfurin STT, binciken takardun shaida,
da rubutawa. Don haka gwaje-gwaje na iya yin amfani da duka hanyoyin ba tare da DB
ko samun damar hanyar sadarwa ba.

## Duba Kuma

- `src/lib/guardrails/` — aiwatarwa
- `src/shared/utils/inputSanitizer.ts` — mai gano abubuwan da aka raba wanda ke ba da ƙarfi
  allurar saƙo da rufe PII
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge tsoffin saituna da
  jerin samfuran da aka tilasta-gada
- `src/shared/constants/modalityBridgeDefaults.ts` — Vision/Audio tsoffin saitunan lokacin gudu
- `docs/architecture/RESILIENCE_GUIDE.md` — Layer na orthogonal (mai karya kewaye, sanyaya)
- `docs/reference/ENVIRONMENT.md` — cikakken bayanin env var

## Rufin hanyar kariya daga allura & ƙungiyar ja (Mataki na 8 · Block D)

Kariyar allura (`createInjectionGuard` / `withInjectionGuard`) tana rufe duk hanyoyin
da ke karɓar saƙonnin mai amfani. Tana mutunta `INJECTION_GUARD_MODE` (tsoho `warn` = log kawai;
`block` = yana dawo da HTTP 400 `SECURITY_001`).

| Nau'i | Hanyoyi | Yanayin tsoho |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | warn |
| Rubutu (mai akwai) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions` | warn |
| Generative | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn |
| Data | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations` | warn |

Cire rubutu (`extractMessageContents`) yana rufe `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Ƙungiyar ja (dare, `nightly-llm-security.yml`):** promptfoo yana tabbatar da cewa kowace hanya tana toshe
corpus na OWASP-LLM a cikin `INJECTION_GUARD_MODE=block`; garak yana gudanar da bincike (yana tsallake ba tare da sirri ba).
An haɗa `moderations` don daidaito — masu aiki a yanayin toshewa na iya keɓe shi ta hanyar
`resolveDisabledGuardrails`.

Aikin dare (`.github/workflows/nightly-llm-security.yml`, cron + manual
dispatch) yana da ayyuka biyu:

- **`promptfoo-guard` (toshewa)** — yana gudanar da `promptfoo eval -c promptfooconfig.yaml`
  tare da `INJECTION_GUARD_MODE=block`. Kowace shari'ar adawa (misali "yi watsi da duk
  umarnin da suka gabata…", DAN-style jailbreaks) yana tabbatar da cewa amsar tana ɗauke da
  `error.code === "SECURITY_001"`, wato, mai gadi ya ƙi buƙatar.
- **`garak` (shawara)** — yana gudanar da garak `--probes promptinject,dan,leakreplay`
  akan wani misali na OmniRoute na gida (`http://localhost:20128/v1`). An rufe shi da
  sirrin mai bayarwa (`PROMPTFOO_PROVIDER_KEY`); yana tsallake da kyau kuma an haɗa shi da
  `|| true`, don haka yana bayar da rahoto ba tare da gazawar CI ba.

Rufin mai taimakon gadi (`createInjectionGuard` / `withInjectionGuard`)
yana rufe kowace hanyar `/v1` mai ɗauke da saƙo; ana cire rubutun saƙo daga
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ta hanyar
`extractMessageContents()` a cikin `src/shared/utils/inputSanitizer.ts`.
