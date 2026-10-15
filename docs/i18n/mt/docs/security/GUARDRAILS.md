# Guardrails (Malti)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sors awtorevoli:** `src/lib/guardrails/`
> **Aġġornat l-aħħar:** 2026-08-29 — v3.8.51 (il-provenjenza tat-traskrizzjoni ta’ Video Bridge tiġi ddikjarata minn min isejjaħ,
> u għadha mhix ivverifikata mis-server — iċċarat skont #11661)

Il-guardrails jinfurzaw is-sikurezza, il-politiki u t-trasformazzjonijiet tal-kontenut fil-konfini
bejn OmniRoute u l-fornituri upstream. Kull guardrail jista’ jispezzjona (u,
b’mod fakultattiv, jirrifjuta, jittrasforma jew jannota) il-payloads tat-talbiet (`preCall`) u
r-risposti upstream (`postCall`).

Is-sistema hija **fail-open**: jekk guardrail jitfa’ eċċezzjoni waqt l-eżekuzzjoni, ir-reġistru
jirreġistra l-iżball u jkompli bil-guardrail li jmiss minflok ifalli
t-talba. L-imblukkar huwa deċiżjoni espliċita (`block: true`), qatt aċċident.

## Mekkaniżmi ta' Protezzjoni Integrati

Ir-reġistru jgħabbi awtomatikament sitt mekkaniżmi ta' protezzjoni skont l-ordni ta' prijorità waqt l-importazzjoni
(ara `registry.ts` → `registerDefaultGuardrails()`):

| Prijorità | Isem                | Stadju/i       | Fajl                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Numri ta' prijorità aktar baxxi jitħaddmu **l-ewwel**.

### Pont tal-Viżjoni (`visionBridge.ts`) — Pont tal-Mmodalità PR-1

Jinterċetta talbiet li jkun fihom immaġnijiet u li jkunu mmirati lejn **mudelli mingħajr viżjoni**, u jew
jerġa' jidderieġi t-talba kollha lejn mudell li jappoġġja l-viżjoni, jew jissostitwixxi l-partijiet
tal-immaġni b'deskrizzjonijiet testwali prodotti minn mudell tal-viżjoni konfigurabbli qabel
is-sejħa upstream. Dan jippermetti lill-fornituri li jaħdmu bit-test biss jittrattaw
payloads multimodali b'mod trasparenti.

Fluss:

1. Aqbeż jekk il-mudell fil-mira diġà jappoġġja l-viżjoni (sakemm ma jidhirx fil-
   lista ta' pontijiet sfurzati `isVisionBridgeForcedModel`).
2. Oħroġ il-partijiet tal-immaġnijiet permezz ta' `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), li tiddelega lid-**detettur unifikat tal-media**
   `detectMediaParts()` f'`open-sse/utils/mediaParts.ts` — is-sors uniku
   tal-verità kondiviż mal-filtru tal-kompatibbiltà combo.
   L-estrazzjoni hija limitata permezz ta' allowlist għal partijiet tal-ogħla livell bil-forom li
   `replaceImageParts` jista' jerġa' jdaħħal (il-kuntratt extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, u Responses API `input_image`. Riżultati annidati u
   forom li jindikaw biss huma materjal għall-filtru combo u qatt ma jiġu estratti.
   Aqbeż jekk ma jinstab xejn.
3. Irrisolvi l-konfigurazzjoni waqt it-tħaddim permezz ta' `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): il-kjavi l-ġodda tas-settings `modalityBridge*`
   jieħdu preċedenza; il-kjavi legati `visionBridge*` jibqgħu bħala **fallback għal
   ċiklu wieħed** (tieqa ta' rollback). Aqbeż qabel kwalunkwe traversar tal-media meta
   l-pont ikun diżattivat.
4. Is-selettur tal-modalità (`modalityBridgeVisionMode`, ara t-tabella hawn taħt) jiddeċiedi
   bejn direzzjoni mill-ġdid u deskrizzjoni. Id-direzzjoni mill-ġdid tirritorna `modifiedPayload` fejn jinbidel biss `model`,
   flimkien mal-meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Mogħdija tad-deskrizzjoni: illimita l-immaġnijiet għal `maxImages`, ikkomponi l-prompt konxju tal-kompitu,
   ikkonsulta l-cache tad-deskrizzjonijiet, sejjaħ il-mudell tal-viżjoni **b'mod parallel**
   (`Promise.allSettled`), u daħħal partijiet testwali `[Image N]: <description>`
   minflokhom. Deskrizzjoni li tfalli tipproduċi `null` u l-parti oriġinali tal-immaġni tiġi
   **ppreservata** (#4012) — ħlief fil-mogħdija combo tad-deskrizzjoni meta
   kull deskrizzjoni tkun falliet, fejn upstream ikkonfermat mingħajr viżjoni jirċievi placeholder
   `(unavailable — no vision-capable provider connected)` minflok (#8430).
6. Irritorna `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selettur tal-modalità (`modalityBridgeVisionMode`)

| Modalità   | Default | Imġiba                                                                                                                                                                                                                                                                                                                                                                           |
| ---------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Euristika legata, mhux mibdula (#6640/#7204): mudelli mhux combo/`auto/` jiġu diretti mill-ġdid lejn l-aħjar mudell tal-viżjoni sakemm il-mudell oriġinali ma jkollux kredenzjali li jistgħu jintużaw (f'dak il-każ jiddeskrivi); miri combo dejjem jiddeskrivu.                                                                                                                 |
| `describe` |         | Dejjem iddeskrivi — il-blokka tad-direzzjoni mill-ġdid tinqabeż kompletament; il-mudell magħżul mill-utent dejjem iwieġeb.                                                                                                                                                                                                                                                       |
| `reroute`  |         | Sforza d-direzzjoni mill-ġdid: il-protezzjoni li żżomm mudell bi kredenzjali tiġi evitata. Il-protezzjoni tal-kredenzjali tal-**mira** tad-direzzjoni mill-ġdid xorta tapplika — meta ma teżisti l-ebda mira tal-viżjoni li tista' tintuża, it-talba tgħaddi għad-deskrizzjoni sabiex immaġnijiet mhux ipproċessati qatt ma jaslu għand backend li jaħdem bit-test biss (#8430). |

Il-modalitajiet sfurzati jagħmlu short-circuit **qabel** ma titħaddem l-euristika auto; l-imġiba ta' `auto`
hija identika byte b'byte għall-mekkaniżmu ta' protezzjoni ta' qabel PR-1.

#### Ambitu tal-kjavi tal-API (`visionBridgeKeyScope.ts`)

Meta l-kjavi tal-API ta' min jagħmel is-sejħa tirrestrinġi `allowedConnections`, pools ta' kwota
(`allowedQuotas`) jew mudelli (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), il-pont jagħżel biss
mudelli għad-direzzjoni mill-ġdid u għad-deskrizzjoni li l-kjavi tista' tuża, fuq konnessjonijiet li l-kjavi tista'
tuża. Is-sejħa tad-deskrizzjoni mbagħad dejjem tgħaddi mis-self-loop ta' OmniRoute bl-
header `x-omniroute-self-loop-key-id`, sabiex it-talba chat li tirċeviha
terġa' tinforza l-politika tal-konnessjonijiet u tal-mudelli ta' dik il-kjavi. `enforceApiKeyPolicy()`
tirrispetta dak il-header biss flimkien mas-self-loop bearer, għalhekk dan jista' biss
jirrestrinġi aktar l-aċċess, u id li ma tistax tiġi riżolta tiġi rrifjutata.

Jekk l-ebda mudell tal-viżjoni ma jkun permess għall-kjavi, il-mogħdija tad-deskrizzjoni twarrab u
t-talba tgħaddi mingħajr tibdil, bl-istess imġiba fail-open bħal mekkaniżmu ta' protezzjoni diżattivat
(meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Talbiet mingħajr kjavi, u kjavi mingħajr dawn ir-restrizzjonijiet, iġibu ruħhom eżattament kif
kienu qabel.

#### Prompt ta' deskrizzjoni konxju tal-kompitu (`modalityBridgeVisionTaskAware`)

Il-valur predefinit huwa **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) iżżid
it-test tal-**aħħar messaġġ tal-utent** (imqassar għal 500 karattru) mal-prompt
bażi tad-deskrizzjoni, biex tidderieġi d-deskrizzjoni lejn dak li fil-fatt talab
l-utent (il-mudell codex-vision-proxy) u titlob lill-mudell tal-viżjoni jittraskrivi
t-test viżibbli. Meta l-flag ikun mitfi — jew ma jkun hemm ebda test tal-utent —
il-prompt bażi jintuża mingħajr tibdil.

It-talba proprja kompatibbli ma’ OpenAI tas-self-loop tad-deskrizzjoni (`callVisionModelSingle()`
f’`visionBridgeHelpers.ts`) dejjem titlob `image_url.detail: "high"` —
mingħajr ebda kundizzjoni, għal kull min isejjaħha/fornitur, u mhux ikkontrollata
minn xi sinjal tal-klijent. It-teħid ta’ kampjuni b’dettall baxx inaqqas
il-preċiżjoni tal-OCR proprju għall-kompitu ta’ traskrizzjoni tat-test li jitlob
dan il-prompt, għalhekk is-sejħa tad-deskrizzjoni nnifisha dejjem titlob livell
għoli ta’ dettall irrispettivament mil-livell ta’ dettall użat fit-talba oriġinali
li tkun daħlet. Dan jaffettwa biss il-body tat-talba interna tad-deskrizzjoni;
ma jibdilx kif OmniRoute jgħaddi `image_url.detail` tal-persuna li tagħmel
is-sejħa fit-talba primarja — dak il-valur predefinit jiġi applikat separatament,
u għal klijenti OpenCode identifikati biss, f’`defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Il-fergħa bil-format tal-wire
ta’ Anthropic tas-self-loop tad-deskrizzjoni ma għandhiex field `detail` u ma
tiġix affettwata minn ebda wieħed minn dawn il-valuri predefiniti.

#### Limitu tal-output tad-deskrizzjoni (`modalityBridgeVisionMaxChars`)

| Ċavetta                        | Valur predefinit | Medda             |
| ------------------------------ | ---------------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`              | `0` jew 100–50000 |

`0` (il-valur predefinit) ifisser **ebda limitu** — id-deskrizzjoni rritornata
minn `callVisionModel()` tgħaddi mingħajr tibdil, biex jinżamm l-aġir eżistenti.
Kwalunkwe valur fil-medda 100–50000 iqassar id-deskrizzjoni b’suffiss `…`
qabel ma terġa’ tiddaħħal bħala `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` f’`src/lib/guardrails/visionBridge.ts`).
Żid dan għal kompiti tal-OCR b’ħafna dettalji fejn il-mudell downstream jeħtieġ
it-traskrizzjoni sħiħa; naqqsu biex tillimita l-użu tat-tokens fuq mudelli
tal-viżjoni li jipproduċu ħafna test. Il-field tad-dashboard jinsab fil-panel
Avvanzat tat-tab Vision (`modality-bridge-max-chars` f’`ModalityBridgeVisionTab.tsx`)
u jgħolli kwalunkwe valur bejn 1 u 99 sal-limitu minimu ta’ 100 filwaqt li jħalli
`0` espliċitu mhux mittiefes — `0` huwa valur Zod validu fih innifsu
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), mhux sempliċement
il-valur predefinit ta’ “mhux issettjat”.

#### Cache tad-deskrizzjoni (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL fil-memorja għall-outputs tad-deskrizzjoni, kondiviża mal-proċess
kollu. Ċavetta = `sha256(imageRef + composedPrompt + configuredBridgeModel)`
b’qafas ibbażat fuq prefiss tat-tul (mingħajr kolliżjonijiet fil-konfini bejn
il-fields). Il-komponent tal-mudell huwa l-mudell tal-bridge **ikkonfigurat**,
mhux il-mudell li fil-fatt wieġeb — `callVisionModel` jista’ jaqleb internament
għal alternattiva, u l-użu ta’ ċavetta għal kull tentattiv jifframmenta l-cache.
Deskrizzjonijiet li jfallu qatt ma jinħażnu fil-cache. Settings:

| Ċavetta                         | Valur predefinit | Medda   |
| ------------------------------- | ---------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`           | —       |
| `modalityBridgeCacheTtlMinutes` | `60`             | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`            | 10–5000 |

#### Normalizzazzjoni ta’ immaġnijiet remoti (deskrizzjoni self-loop/fetch base64)

Meta l-bridge jġib immaġni **remota** huwa stess — is-self-call tad-deskrizzjoni
ta’ Anthropic u l-konverżjoni base64 bil-format tal-wire ta’ claude
(`ensureBase64ImagesForClaudeWire`), it-tnejn permezz ta’
`fetchRemoteImageAsDataUri()` f’`visionBridgeHelpers.ts` — id-data URI li
tirriżulta tgħaddi minn `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) qabel ma tiddaħħal fit-talba tal-mudell
tal-viżjoni. Immaġnijiet kbar wisq jitnaqqsu għal **tarf twil ta’ 2048px**
(biex jaqbel mal-limitu tat-tibdil tad-daqs li OpenAI/Anthropic diġà japplikaw
fuq in-naħa tas-server), u b’hekk jitnaqqsu l-bytes tal-upload/il-latenza
mingħajr ma jinbidel dak li jara l-mudell tal-viżjoni. It-tibdil tad-daqs juża
`sharp`, mgħobbi permezz ta’ import dinamiku: fuq pjattaforma fejn il-binary
nattiv tiegħu jonqos milli jitgħabba, `normalizeDataUri()` **qatt ma tarmi
eċċezzjoni** — minflok tgħaddi l-bytes oriġinali mingħajr tibdil, biex il-path
tad-deskrizzjoni/tal-konverżjoni base64 dejjem jibqa’ jaħdem. Bytes li mhumiex
ta’ immaġni (fetch li ma rritornax immaġni dekodifikabbli) wkoll jgħaddu
mingħajr tibdil. Din in-normalizzazzjoni hija limitata għall-immaġnijiet li
l-bridge iġib għas-self-call tiegħu stess — qatt ma tiġi applikata għall-payload
mhux mibdul tal-persuna li tagħmel is-sejħa, b’mod konsistenti mal-prinċipju li
t-tibdil isir biss b’opt-in (Regola Stretta #20).

#### Skema tas-settings + migrazzjoni

Iċ-ċwievet il-ġodda `modalityBridge*` jiġu vvalidati minn Zod f’`updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, it-triju `modalityBridgeCache*`, u l-grupp
`modalityBridgeAudio*` użat mill-Audio Bridge. Il-migrazzjoni
`141_modality_bridge_settings.sql` tikkopja l-valuri eżistenti tal-legat
`visionBridge*` fiċ-ċwievet il-ġodda korrispondenti (hija idempotenti u qatt ma
tissostitwixxi valur `modalityBridge*` issettjat minn operatur); iċ-ċwievet
tal-legat jibqgħu aċċettati bħala fallback għall-qari għal ċiklu wieħed ta’
rilaxx.

#### Header tat-trasparenza + statistika

Ir-responses trasformati mid-deskrizzjoni jġorru
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(maħluq minn `buildModalityBridgeHeader()` f’`modalityBridge/bridgeStats.ts`,
u ttimbrat minn `withModalityBridgeHeader()` f’`src/sse/handlers/chatHelpers.ts`).
Talbiet li jiġu rrutati mill-ġdid ma jingħataw **ebda** header — il-payload ma
ġiex mibdul u l-bidla tal-mudell diġà tidher fil-field `model` tal-body
tar-response.

`GET /api/modality-bridge/stats` (awtentikazzjoni tal-ġestjoni, fl-istess livell bħal
`GET /api/settings`) jirritorna l-counters fil-memorja għal kull modalità
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` għal `vision`, `audio`, u
`video`. `averageLatencyMs` juża `latencySamples`, mhux it-tentattivi kollha, bħala
d-denominatur tiegħu; operazzjoni mingħajr kejl tal-ħin ma toħloqx kampjun falz
ta' żero millisekondi. `bridged` jibqa' l-alias kompatibbli b'lura għal
konverżjonijiet li rnexxew; tentattivi li fallew ma jżiduhx.
Il-counters jerġgħu jiġu ssettjati mal-istartjar mill-ġdid tal-proċess b'disinn
(telemetrija, mhux kontabbiltà).

#### Konfigurazzjoni tad-dashboard

Il-paġna ddedikata tad-dashboard hija
`/dashboard/settings/modality-bridge`. It-tabs tagħha `Vision`, `Audio`,
u `Video`, li jistgħu jiġu indirizzati permezz tal-URL, iżommu l-parametri tal-query waqt li jibdlu l-valur `tab`.
It-tab Vision jesponi l-attivazzjoni, il-modalità, l-għażla tal-mudell (inkluż il-valur
awtomatiku predefinit), prompting konxju tal-kompitu, limiti avvanzati għat-timeout/l-immaġni/it-tul
tad-deskrizzjoni/il-cache, counters waqt l-eżekuzzjoni,
u talba ta' kampjun protetta. It-tab Audio huwa wkoll attiv: jesponi
l-attivazzjoni, selettur tal-mudell għal STT biss b'Auto, limiti tat-timeout/tat-tul massimu tal-klipp, counters
tal-awdjo, u test kampjun `input_audio`. It-tab Video huwa funzjonali: jirrapporta
l-istat waqt l-eżekuzzjoni ta' FFmpeg/ffprobe — wieħed minn erba' stati espliċiti tal-UI (`unknown` waqt li
l-probe jkun għadu għaddej jew ma setax jitlesta, `restricted` fuq host tad-dashboard li mhuwiex loopback
fejn il-probe jinqabeż min-naħa tal-klijent, `unavailable` ladarba jkun sar il-probe
u jkun ġie kkonfermat li huwa nieqes, jew `available` bil-verżjonijiet ta' FFmpeg/ffprobe) — jippersisti
l-limiti tal-attivazzjoni/tal-mudell/tal-frames/tal-video/tat-timeout, jiffiltra s-selettur tal-mudell għal mudelli
li jappoġġjaw il-viżjoni, u jesponi l-counters tal-video.

Il-card preċedenti Vision Bridge taħt is-settings tal-AI hija link ta' kompatibbiltà għall-
paġna l-ġdida; ma għadhiex iżżomm it-tieni kopja tal-formola. Media Providers ukoll
jillinkja l-flussi tax-xogħol Image-to-Text u Speech-to-Text mat-tabs korrispondenti ta' Modality
Bridge mingħajr ma jneħħi l-playground eżistenti ta' Speech-to-Text.

**Bypass tal-ammissjoni għal self-loop:** meta s-sejħa describe tgħaddi mis-
self-loop `/v1` ta' OmniRoute stess (mudell ta' provider mhux standard), is-sub-talba tibgħat
`x-omniroute-admission-bypass: internal` u tiġi awtentikata bil-kredenzjali tas-self-loop
riżolta — is-sentinel lokali `sk_omniroute` fil-modalità lokali, jew iċ-ċavetta tal-env
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` ikkonfigurata mill-operatur (#1350) sabiex
deployments b'`REQUIRE_API_KEY=true` xorta jkunu jistgħu jeżegwixxu s-sejħa describe. Il-bypass
jiġi rrispettat biss għal dawk il-kredenzjali eżatti, għalhekk klijenti esterni ma jistgħux jużaw il-
header biex jaqbżu l-ammissjoni.

Il-valuri predefiniti legacy jinsabu f'`src/shared/constants/visionBridgeDefaults.ts`; il-
valuri predefiniti l-ġodda tal-modalità/tal-għarfien tal-kompitu/tal-cache u r-resolver tas-settings jinsabu f'
`src/shared/constants/modalityBridgeDefaults.ts`. Il-guardrail jesponi opzjoni tal-kostruttur
`deps` sabiex it-testijiet ikunu jistgħu jinjettaw implimentazzjonijiet foloz ta' `getSettings` u
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Jinterċetta talbiet taċ-chat li fihom awdjo qabel ma jilħqu target li mhuwiex
magħruf li jaċċetta input tal-awdjo. Qatt ma jibdel ir-rotta tat-talba taċ-chat: il-partijiet tal-awdjo jiġu
traskritti permezz tal-endpoint multipart eżistenti kompatibbli ma' OpenAI u l-
mudell taċ-chat magħżul ikompli bit-traskrizzjonijiet testwali.

Fluss:

1. Irrisolvi `supportsAudio` permezz ta' `getResolvedModelCapabilities()`. Il-metadata espliċita
   tar-reġistru tal-provider tieħu preċedenza, imbagħad il-metadata statika tal-mudell, imbagħad
   `modalities_input` sinkronizzat. Lista ddikjarata tal-input mingħajr `audio` hija `false`; jekk ma jkun hemm
   l-ebda evidenza tal-kapaċità, il-valur jibqa' `null`. Kemm `false` kif ukoll `null` jattivaw il-
   bridge konservattiv, filwaqt li `true` jaqbżu.
2. Irrisolvi s-settings `modalityBridgeAudio*` u estratta l-partijiet tal-awdjo tal-ogħla livell
   li jistgħu jitwaħħlu minn kull messaġġ permezz tad-detector kondiviż `detectMediaParts()`.
   Il-forom tal-wire appoġġjati huma `input_audio`, `audio_url` ta' OpenAI, u
   `source.media_type: "audio/*"`. Awdjo nested jiġi identifikat għar-routing iżda ma
   jitneħħiex mill-mogħdija tal-isplice. Ix-xogħol huwa limitat minn `modalityBridgeAudioMaxClips`;
   il-partijiet ta' wara jibqgħu mhux mibdula.
3. Irrispetta `provider/model` ikkonfigurat, jew ħalli lil `selectAudioBridgeModel()` jgħaddi minn
   `AUDIO_TRANSCRIPTION_PROVIDERS` skont l-ordni stabbli tal-katalgu u jagħżel l-ewwel
   mudell bi kredenzjali attiva u li tista' tintuża tal-provider.
4. `callAudioTranscription()` jikkonverti awdjo base64/data-URI għal `file` multipart,
   jew iniżżel `audio_url` remot permezz tal-guard pubbliku biss għall-konnessjonijiet 'il barra,
   b'DNS pinning u limitu ta' 25 MB. Imbagħad jibgħat il-file u l-mudell magħżul permezz ta' POST
   lis-self-loop lokali `/v1/audio/transcriptions`, awtentikat b'
   `resolveSelfLoopBearer()`. Ir-rotta eżistenti tat-traskrizzjoni twettaq it-tfittxija normali
   tal-kredenzjali, il-ġestjoni tal-cooldown/tal-limitu tar-rata, u d-dispatch lejn il-provider.
5. Sejħiet li jirnexxu jissostitwixxu l-partijiet tagħhom b'`[Audio N]: <transcript>`. Is-sejħiet
   jitwettqu b'`Promise.allSettled`: falliment individwali jippreserva dik il-parti oriġinali
   tal-awdjo (kuntratt #4012). Jekk kull sejħa tfalli u jkun ippruvat li t-target għandu
   `supportsAudio === false`, il-partijiet isiru
   `[Audio N]: (unavailable — no STT provider connected)` (kuntratt #8430). Għal
   target mhux magħruf (`null`), riżultat fejn kollox ifalli jibqa' mhux mibdul. Target li jkun ippruvat
   li jaċċetta test biss u li ma jkollux kredenzjali STT li tista' tintuża jirċievi l-istess
   placeholder espliċitu mingħajr ma ssir sejħa tan-network.

Traskrizzjonijiet li jirnexxu jużaw il-cache LRU/TTL tal-Modality Bridge għall-proċess kollu. Iċ-
ċavetta tgħaqqad ir-referenza tal-awdjo, it-tikketta stabbli tal-operazzjoni `audio-transcription`,
u l-mudell STT magħżul; il-fallimenti qatt ma jinħażnu fil-cache. It-tentattivi tal-awdjo jaġġornaw
il-counters kondiviżi `bridged`, `cacheHits`, `failures`, u `lastUsedAt`.
Risposti trasformati jinkludu
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; talbiet mhux mibdula
ma jirċevux segment Audio Bridge.

Is-settings waqt l-eżekuzzjoni huma appoġġjati mid-DB u vvalidati b'Zod:

| Ċavetta                       | Default | Firxa           |
| ----------------------------- | ------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —               |
| `modalityBridgeAudioModel`    | `""`    | Auto jew ID STT |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10            |

Il-cache kondiviż jibqa' kkontrollat minn `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, u `modalityBridgeCacheMaxEntries`.

### Pont tal-Vidjo (`videoBridge.ts`, `videoBridgePipeline.ts`)

Jinterċetta partijiet tal-vidjo tal-ogħla livell f'`messages` ta' Chat Completions u
f'`input` tal-API Responses qabel ma tissejjaħ destinazzjoni mingħajr appoġġ nattiv
magħruf għall-vidjo. Il-forom appoġġati huma `input_video`, `video_url`,
`video_source`, URLs HTTPS, u URIs tad-data `data:video/*;base64,...`. Ismijiet
sempliċi ta' fajls fit-test ma jiġux ittrattati bħala vidjo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) jieħu ħsieb il-perkors tat-talba,
il-verifika tal-kapaċità/politika, l-aggregazzjoni għal kull talba, u l-payload
tar-rispons. Ix-xogħol għal kull vidjo — l-akkwist, il-cache tar-riżultat sħiħ,
id-deskrizzjoni ta' sekwenza ta' frejms (li tintegra kwalunkwe traskrizzjoni
tal-awdjo ddikjarata minn min jagħmel is-sejħa), u l-metriki/abort/tindif għal
kull tentattiv — huwa moħbi wara `processVideoPart` f'
`videoBridgePipeline.ts`, li jissejjaħ darba għal kull parti tal-vidjo fiċ-ċiklu
ta' `preCall`. Dak il-modulu jiddefinixxi wkoll il-konfini espliċiti tal-portijiet
`VideoMediaBrokerPort` (l-akkwist tal-bytes u l-estrazzjoni ta' frejms
kampjunati), `VideoAudioTranscriptionPort` (l-integrazzjoni ta' traskrizzjoni
tal-awdjo ddikjarata minn min jagħmel is-sejħa mal-captions kampjunati), u
`VideoDrilldownPort` (il-konfini tal-persistenza għall-analiżi dettaljata tal-frejms;
għadu mhux konness ma' `processVideoPart` — illum hija biss ir-rotta separata
`/api/modality-bridge/video/drilldown` li tikteb entrati ta' analiżi dettaljata).

Il-perkors pubbliku tat-talba `/v1` qatt ma jimporta jew jinvoka sottoproċess.
Vidjos remoti jitniżżlu taħt limitu ta' 50 MiB; vidjos base64 inline għandhom
limitu konservattiv ta' 36 MiB dekodifikati għal kull vidjo sabiex l-envelop
tal-mudell/messaġġi/framing ikun jista' jibqa' fil-limitu pubbliku ta' ammissjoni
għal talbiet JSON ta' 50 MiB. It-tul inline u l-istimi tad-daqs dekodifikat jiġu
vverifikati qabel l-allokazzjoni. HTTPS huwa meħtieġ fuq il-URL remot inizjali
u fuq kull direzzjoni mill-ġdid, bl-użu tal-kontroll eżistenti għall-ħruġ pubbliku
biss u bl-iffissar tad-DNS. Imbagħad il-bytes jaqsmu l-konfini interni eżatti
tal-broker `POST /api/modality-bridge/video/extract`. Dik ir-rotta hija kemm
`LOCAL_ONLY` kif ukoll `SPAWN_CAPABLE`, taċċetta biss talba awtentikata għal kull
proċess minn loopback fdat, u qatt ma taċċetta URL, perkors tas-sistema tal-fajls,
eżegwibbli, jew lista ta' argumenti. Il-pipeline tal-limitu tad-daqs tal-body
tal-API u l-qarrej inkrementali tal-body tal-handler jinfurzaw b'mod indipendenti
limitu ta' input ta' 50 MiB għall-broker. Il-kju limitat tiegħu jmexxi estrazzjoni
waħda kull darba, jippermetti erba' xogħlijiet pendenti, u jillimita l-input
pendenti għal 100 MiB.

Fi ħdan il-broker, `ffprobe` jaqra fajl lokali privat; il-lista fissa ta' formati
permessi teskludi formati ta' playlists u manifests. Għal containers permessi
tal-familja MOV, ir-referenzi għal data MOV esterna jibqgħu diżattivati
b'mod default, u l-kmand fiss ma jattivahomx. Kemm `ffprobe` kif ukoll `ffmpeg`
jużaw il-lista ta' protokolli permessi limitata għal `file`, thread wieħed,
arrays fissi ta' argumenti, l-ebda shell, u eżegwibbli riżolti minn `PATH`.
Streams ta' covers b'ritratti mehmuża mhumiex kandidati li jistgħu jintlagħbu.
L-streams kollha li jistgħu jintlagħbu jridu jissodisfaw il-limiti, u stream
default espliċitu jingħata preferenza qabel l-għażla deterministika tal-indiċi
l-aktar baxx. Il-vidjos huma limitati għal 600 sekonda, 8,192 pixel għal kull
dimensjoni, u 33,554,432 pixel tas-sors. FFmpeg jieħu kampjuni ta' 1–16-il frejm
JPEG fil-punti tan-nofs, inaqqas it-tarf it-twil għal mhux aktar minn 1,024 pixel
mingħajr ma jkabbar inputs iżgħar, u qatt ma jirċievi URL. Il-kampjunar huwa
`uniform` b'mod default. Il-politiki fakultattiva `scene_aware` u sperimentali
`segment_aware` iwettqu pass fiss addizzjonali wieħed ta' FFmpeg fuq l-stream
lokali li jkun diġà ġie vvalidat, jagħżlu timestamps limitati tax-xeni minn
`showinfo`, u jerġgħu lura b'mod deterministiku għall-istess punti tan-nofs
uniformi jekk id-detector ifalli, jiskadi ż-żmien, l-output ikun ifformattjat
ħażin, jew is-sett tal-kandidati jkun vojt. Il-modalità konxja tas-segmenti
talloka kampjuni tal-punti tan-nofs proporzjonalment għall-intervalli vvalidati
tax-xeni; l-evidenza konxja tas-segmenti u l-imġiba ta' fallback huma
ddettaljati hawn taħt. Il-limitu assolut ta' 16-il frejm jiġi applikat wara
l-għażla f'kull politika. Meta talba konxja tax-xeni jkollha baġit ta' frejm
wieħed biss, tuża l-punt tan-nofs uniformi tat-tieqa attiva tal-vidjo sħiħ jew
tat-tieqa ffokata u tirrapporta `policyEffective: uniform`: frejm wieħed magħżul
minn xena ma jistax jippreserva ż-żewġt itruf temporali. Min jagħmel is-sejħa
jista' b'mod fakultattiv jipprovdi tieqa ta' fokus finita (`start`/`end`
f'sekondi); il-limiti jiġu ristretti għad-durata tal-midja, twieqi maqluba jew
mhux finiti jiġu rrifjutati, u l-politiki kollha ta' kampjunar jitwettqu biss
fl-intervall normalizzat. It-tieqa li tirriżulta tiġi inkluża fil-metadata
tal-kampjunar u fil-prefiss tad-deskrizzjoni mhux fdata sabiex il-mudelli
downstream ikunu jistgħu jiddistingwu silta ffokata mil-linja tal-ħin sħiħa.

Il-fokus semantiku tal-captions huwa setting separat u espliċitu. Il-modalità
default ta' analiżi `full` tippreserva l-prompt eżistenti tal-frejms u qatt ma
tibgħat it-test tat-talba lill-mudell tal-captions. Fil-modalità `focused`,
il-pont jaqra biss l-aħħar `text`/`input_text` mhux vojt miktub mill-utent
mill-istess container ta' Chat jew Responses, jinnormalizzah għal NFC, jiġbor
flimkien il-karattri ta' kontroll u l-ispazji, u jillimitah għal 500 punt ta'
kodiċi Unicode. Riżultat vojt jerġa' lura għall-prompt `full` eżatt. Ħjiel li
jista' jintuża jiġi sserjalizzat bħala JSON fi blokka ddedikata ta' kuntest
mhux fdat tal-utent u jista' biss jagħti prijorità lil dettalji osservabbli;
ma jistax jegħleb it-twissija separata kontra s-segwitu ta' struzzjonijiet
viżibbli jew li jinstemgħu fil-midja. Il-fokus testwali qatt ma jiddeduċi
`start`/`end` jew ibiddel il-kampjunatur temporali.

#### Evidenza strutturali tas-segmenti FU-07

`segment_aware` juża pass wieħed limitat ta’ qabel l-analiżi fuq il-fluss tal-vidjo
lokali li jkun diġà ġie vvalidat. Il-katina fissa ta’ filtri l-ewwel tiskala għal
wisa’ massimu ta’ 320 pixel, tindividwa tibdiliet fix-xena u intervalli ffriżati,
imbagħad tieħu kampjun ta’ frame wieħed kull sekonda biex tanalizza ċ-ċajpir,
il-luma medja, u l-informazzjoni spazjali/temporali. Il-pass huwa limitat għal
600 kampjun strutturali, thread wieħed ta’ FFmpeg/filtru, l-istess protokoll
`file` biss u listi ta’ containers permessi, limitu ta’ 1 MiB għall-output
tal-proċess, u mhux aktar minn 30 sekonda fi ħdan l-abort/skadenza kondiviża
tal-broker. Qatt ma jaċċetta kmand, filtru, path, jew URL mit-talba.

Il-valuri strutturali huma evidenza deterministika mit-teħid ta’ kampjuni, mhux
fehim semantiku tal-vidjo. Ma jiddeduċux suġġetti, azzjonijiet, captions, diskors,
jew l-intenzjoni tal-utent. Il-konfini tax-xeni u tal-iffriżar jiffurmaw segmenti;
il-kopertura tal-iffriżar, iċ-ċajpir, l-esponiment, id-dettall spazjali, u t-tibdil
temporali jinfluwenzaw biss kif jitqassam il-baġit eżistenti ta’ 1–16-il frame.
Segment kompletament iffriżat ikun limitat għal frame wieħed, filwaqt li segmenti
mhux iffriżati jikkompetu għall-baġit li jifdal. Meta l-konfini jkunu aktar
mill-frames, tinżamm kopertura uniformi tat-timeline sabiex qtugħ bikri u rapidu
ma jkunx jista’ jaħbi segment twil fit-tmiem. Konfini tax-xeni li jkunu fir-riżoluzzjoni
ta’ analiżi ta’ sekonda minn konfini tal-iffriżar jingħaqdu flimkien.

Filtri neqsin, evidenza malformata/vojta, żball tad-detector, jew timeout tal-pass
limitat ta’ qabel l-analiżi jfallu b’mod miftuħ għall-politika eżatta tal-punti
tan-nofs uniformi. Abort minn min jagħmel it-talba jew skadenza tal-broker ma
jfallux b’mod miftuħ: itemmu s-subprocess li jkun għaddej, jipprevjenu estrazzjoni
sussegwenti tal-frames, u s-siġra temporanja privata titneħħa f’`finally`.

`scripts/perf/video-bridge-fu07-eval.ts` jiġġenera fixtures reali u deterministiċi
ta’ FFmpeg għall-iffrankar ta’ sejħiet ta’ caption wara d-deduplication,
allokazzjoni tal-baġit għal moviment dens, evidenza ta’ ċajpir/esponiment/SI-TI,
qtugħ rapidu b’denb twil, u pożittivi foloz minn sfumar gradwali. Jirreġistra
l-ħin reali tal-preanaliżi u, fejn `/usr/bin/time` ikun disponibbli, is-CPU
tal-proċess child u l-ogħla RSS. Il-kontrolli tal-kwalità tiegħu huma biss orakli
strutturali. Il-kwalità reali tal-mudell tal-captions tibqa’ `HOLD` minħabba li
dan il-harness ma għandu ebda endpoint awtorizzat jew ġudikatur iffriżat.
L-iffrankar monetarju jibqa’ wkoll `HOLD` sakemm
`--caption-cost-per-call-usd` ma jipprovdix stima pożittiva u espliċita
tal-ispiża għal kull sejħa; l-iskript qatt ma jiffabrika xi wieħed minn dawn
ir-riżultati.

Kull frame huwa limitat għal 4 MiB, il-frames mhux ipproċessati kollha flimkien
għal 23 MiB, u r-rispons serjalizzat tal-broker għal 32 MiB. Direttorju temporanju
privat jitneħħa f’`finally`. OmniRoute ma jinkludix FFmpeg u ma jaċċettax path
personalizzat għall-eżekutibbli. Qabel il-ħolqien tal-captions, il-bridge japplika
pass konservattiv ta’ deduplication viżiv: kull JPEG jitnaqqas għal buffer
grayscale ta’ 16×16 u jitqabbel biss mal-aħħar frame miżmum. Għal baġit mitlub
ta’ captions ta’ aktar minn frame wieħed, l-estrazzjoni tipprovdi pool limitat
ta’ kandidati sa darbtejn dak il-baġit u qatt aktar minn 16-il frame.
Il-limitu massimu mitlub jiġi applikat biss wara d-deduplication, filwaqt li
l-ewwel u l-aħħar kandidati magħżula jinżammu matul it-tnaqqis finali meta
l-baġit ikun ta’ mill-inqas tnejn. Il-politika b’verżjoni
`grayscale-16x16-mean-cells-v2` tuża l-akbar valur bejn id-differenza medja
tal-luma u l-proporzjon ta’ ċelloli tat-thumbnail li d-differenza normalizzata
tagħhom hija mill-inqas 0.05. Il-livell limitu tad-duplikati huwa l-kostanti
0.04, magħżul għall-prevedibbiltà aktar milli espost bħala setting waqt
l-eżekuzzjoni. Dan is-sinjal sekondarju b’kuntrast għoli jippreserva moviment
żgħir u tibdiliet fit-test viżibbli li paragun ibbażat biss fuq il-medja jista’
jaħbi. Żbalji tal-comparator jew tad-decoder ifallu b’mod miftuħ u jżommu
l-kopertura. Il-metadata tal-output tissepara l-kandidati estratti, il-frames
użati b’suċċess, u d-duplikati viżivi mwarrba.

Parti tal-vidjo mmarkata b’mod espliċitu tista’ titlob contact sheet b’timestamps.
Il-bridge jibni grilja JPEG b’massimu ta’ 4 kolonni u 16-il frame. Kull ċellola
ta’ 512-il pixel timmarka t-timestamp tas-sors tagħha f’faxxa t’isfel b’kuntrast
għoli, filwaqt li l-istess timestamps jibqgħu fil-metadata testwali għall-assoċjazzjoni
u l-awditjar downstream. Il-JPEG sħiħ jibqa’ limitat għal 32 MiB. Jekk `sharp`
ma jkunx jista’ jiddekowdja jew jikkomponi l-grilja, il-bridge jirrikorri
għall-frames JPEG individwali; abort mill-klijent xorta jibqa’ jinfirex
fl-operazzjoni tas-sheet.

L-evidenza għall-promozzjoni hija deliberatament separata mill-mikrobenchmark
sintetiku tal-kompożizzjoni. `scripts/perf/video-bridge-contact-sheet-eval.ts`
jiddefinixxi harness A/B b’verżjoni tal-iskema għal mudelli reali tal-viżjoni
kompatibbli ma’ OpenAI. Dan ikejjel it-tokens irrappurtati mill-provider,
il-latenza reali minn tarf sa tarf (inkluża l-kompożizzjoni tas-sheet),
l-għadd ta’ sejħiet lill-mudell, u ż-żamma ta’ fatti ddefiniti mill-manifest.
Ir-risposti mhux ipproċessati tal-mudell ma jinkitbux fir-rapport; jinżammu
biss id-digests SHA-256 u l-IDs tal-fatti mqabbla. Il-harness ma jagħmel ebda
sejħa bin-network jew lil mudell bi ħlas sakemm ma jiġix mgħoddi
`--execute-real` u sakemm `--model`, `OMNIROUTE_BASE_URL`, u
`OMNIROUTE_API_KEY` ma jkunux ikkonfigurati. Mingħajr dik l-eżekuzzjoni reali
u espliċita, il-verdett tiegħu li jista’ jinqara mill-magni jibqa’ `HOLD`;
il-kejl sintetiku tal-payload/tal-għadd tas-sejħiet waħdu mhuwiex evidenza
għall-promozzjoni.

Min jagħmel it-talba jista’ jehmeż array fakultattiv `transcript.cues` ma’
parti tal-vidjo appoġġata meta diġà jkollu test allinjat. Kull cue għandu jkollu
`text`, intervall finit `start`/`end` fi ħdan it-tul ivverifikat, u `source`
mil-lista permessa (`client`, `embedded`, jew `audio-bridge`); `confidence`
jkun `1` b’mod awtomatiku u għandu jibqa’ bejn `0` u `1`. Cues duplikati eżatti
jingħaqdu. OmniRoute qatt ma jibda traskrizzjoni minn din il-metadata: cues
ivvalidati jiġu kkupjati fir-riżultat deskritt flimkien mas-sors, il-kunfidenza,
u l-intervall, u jiġu rrappreżentati bħala osservazzjonijiet mhux fdati flimkien
mal-captions tal-frames. Test invalidu, barra mill-medda, jew mingħajr provenjenza
jiġi miċħud minflok jitħallat fil-fluss tal-captions. Il-field `source` bħalissa
jiġi ddikjarat minn min jagħmel it-talba, mhux ivverifikat mis-server: OmniRoute
jiżgura li l-valur ikun wieħed mit-tliet strings permessi, iżda għadu ma
jikkonfermax kriptografikament li tikketta `embedded` jew `audio-bridge`
effettivament ġiet minn estrazzjoni proprjetà tas-server. Ittratta `source`
bħala indikazzjoni mhux fdata sakemm tiżdied dik il-verifika; tibnix
deċiżjonijiet ta’ awtorizzazzjoni fuqu.

Min jagħmel sejħa b’mod avvanzat jista’ jipprovdi track `audioTranscript` diġà awtorizzat
għall-istess vidjo. Il-punt ta’ fużjoni jmexxi l-osservazzjonijiet viżivi u awdjo taħt
l-istess skadenza u sinjal ta’ abort, jordnahom fuq kronoloġija komuni, jiġbor
id-duplikati eżatti, u jirrapporta riżultat parzjali meta jirnexxi naħa waħda biss.
`audioTranscript` invalidu jiddegrada għal dak ir-riżultat parzjali — id-deskrizzjoni
viżiva tinżamm u l-fergħa awdjo tirreġistra kodiċi ta’ falliment sanitizzat —
minflok ma jfalli l-vidjo kollu. Id-disponibbiltà għal kull fergħa, il-bandiera parzjali,
u l-kodiċijiet ta’ falliment sanitizzati jinżammu fir-riżultat deskritt, fil-metadata
tal-miżuri ta’ protezzjoni (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), fil-metadata tal-cache tar-riżultati, u fil-counters
tal-fużjoni tal-bridge. Il-mogħdija predefinita tal-Video Bridge ma tinvokax speech-to-text
u lanqas ma tniżżel kopja oħra tal-midja; mingħajr dak it-track espliċitu, tibqa’
għall-vidjo biss.

**Żamma tat-traskrizzjoni (#12150 P1).** Dan japplika awtomatikament kull meta
l-Video Bridge (li fih innifsu huwa opt-in) jirrendi indikazzjoni tat-traskrizzjoni — ma hemm
l-ebda bandiera separata għaż-żamma. Meta talba tirrendi kwalunkwe indikazzjoni tat-traskrizzjoni
(`transcript` iddikjarat minn min jagħmel is-sejħa jew `audioTranscript` magħqud), il-miżura ta’
protezzjoni timmarkaha bħala `videoBridgeObserved` u tipproduċi kopja parallela redatta
tad-deskrizzjoni tal-vidjo — rendering identiku li fih il-korp ta’ test liberu ta’ kull indikazzjoni
jiġi sostitwit b’`[redacted-video-transcript]`, mibni billi jiġi sostitwit il-qasam strutturat
tal-indikazzjoni qabel ma tiġi assemblata s-sekwenza (qatt billi jiġi analizzat it-test iċċattjat,
biex l-ebda kontenut tal-indikazzjoni — avversarju jew ordinarju, inklużi korpi li fihom `]`
bħal `[inaudible]`/`[music]` — ma jkun jista’ jibqa’). Il-korp tat-talba tal-call-log persistit
jissostitwixxi kull parti ta’ test derivata mill-vidjo b’dik il-kopja parallela redatta, imqabbla
skont l-ugwaljanza tal-kontenut; l-ankra `fullText` terġa’ tinqara mill-payload komplut
tal-miżura ta’ protezzjoni ta’ qabel is-sejħa, sabiex it-tqabbil jibqa’ jirnexxi wara li miżuri
ta’ protezzjoni aktar tard fil-katina (il-maskers tal-PII u tal-kredenzjali, prijoritajiet 10/95)
jiktbu mill-ġdid it-test tad-deskrizzjoni fil-post u wara li l-injezzjoni tas-system-prompt,
tal-handoff, jew tal-Memory tibdel il-forma tal-array tal-messaġġi. Il-korp mibgħut upstream
lill-mudell ma jinbidilx. Talba osservata lanqas ma timla xi Memory durabbli (kemm l-estrazzjoni
derivata mit-talba kif ukoll dik derivata mir-rispons jinqabżu), sabiex it-tweġiba tal-mudell
stess ma tkunx tista’ tirrepeti test tat-traskrizzjoni fil-Memory.

**Oqsma mhux ipproċessati tal-vidjo (#12430).** Meta l-bridge ikun attivat u l-appoġġ nattiv għall-vidjo ma jkunx magħruf jew ikun nieqes, l-oqsma definiti `transcript`/`audioTranscript` jattivaw ukoll `videoBridgeObserved`, anki wara falliment fid-deskrizzjoni jew limitu `maxVideos`. `null` u sekwenzi vojta jgħoddu; oqsma assenti u metadata mhux tal-vidjo ma jgħoddux. Il-kopji miżmuma jirredattu dawn l-oqsma jew iħallu barra t-talba, u l-caches/Memory jinqabżu. Il-payload tal-fornitur jibqa’ l-istess.

Kopji miżmuma addizzjonali jużaw l-istess sinjal ta’ talba osservata. L-istampa mhux
ipproċessata tat-talba tal-klijent ta’ qabel il-miżura ta’ protezzjoni, it-talba pendenti
fil-memorja, u l-log bikri tat-talba miċħuda jissostitwixxu strutturalment l-oqsma
tat-traskrizzjoni fil-partijiet tal-vidjo; prompts bħala sekwenzi ġġenerati mill-istadji
tal-pipeline u mill-context handoff jiġu redatti fis-sink tal-korp tat-talba persistita.
Il-markatur persistit `video_content_removed` iġiegħel lill-kontinwazzjoni
`previous_response_id` tfalli b’mod magħluq minflok ma tibni mill-ġdid test li jkun
intrema intenzjonalment. Jekk talba osservata titlef il-kopja parallela ta’ redazzjoni
tagħha għal kull parti qabel il-logging, jew jekk anki waħda minn diversi kopji paralleli
tal-vidjo tonqos milli taqbel wara mutazzjonijiet sussegwenti tat-talba, il-korp tat-talba
miżmum jitħalla barra kompletament minflok ma tinżamm traskrizzjoni redatta parzjalment.

Għal talba osservata, rispons tal-mudell jista’ jikkwota kwalunkwe parti
mit-traskrizzjoni mingħajr limitu strutturat tal-indikazzjoni. Għalhekk, il-`responseBody`
tal-call-log persistit tagħha jiġi sostitwit b’markatur ta’ ommissjoni; l-artefatt dettaljat
tal-pipeline (li jista’ jinkludi korpi upstream/tal-klijent u biċċiet tal-stream) ma jinżammx.
Il-caches semantiċi, tal-idempotenza, u tar-reasoning-replay jaqbżu l-qari u l-kitba
għal dik it-talba. It-talba tal-fornitur u r-rispons viżibbli għall-klijent jibqgħu l-istess.
Il-bytes bikrin tal-keepalive jitneħħew mill-buffer temporanju meta l-artefatt dettaljat
jitħalla barra. It-twissija ta’ EventStream iffurmat ħażin ta’ Kiro tirrapporta biss
l-għadd ta’ bytes tal-payload, u qatt il-kontenut tiegħu jew l-iżball mhux ipproċessat
tal-parser tal-JSON.
Dan ma jsostnix li kull dijanjostika mhux relatata tal-fornitur/plugin ġiet
awditjata; l-ispezzjoni usa’ tas-sinks miżmuma hija ssorveljata f’#11658.

Iċ-ċiklu tal-ħajja intern ta’ `/api/modality-bridge/video/drilldown` huwa substrat
separat tal-cache awtentikat permezz ta’ loopback/token. Kull operazzjoni teħtieġ ukoll
ID prinċipali opak u kanoniku. Qabel ma min jagħmel sejħa ta’ produzzjoni jiġi attivat,
irid jidderiva dak l-ID mit-tenant awtentikat u qatt ma għandu jgħaddi valur magħżul
mill-klijent. Iċ-ċwievet tal-cache jorbtu dak il-prinċipal ma’ IDs kanoniċi tas-sessjoni
u tar-referenza tal-vidjo, jaħżnu biss iċ-ċwievet derivati tagħhom permezz ta’ SHA-256,
u jillimitaw kemm il-qari kif ukoll it-tħassir għall-istess prinċipal. Il-cache taħżen
mhux aktar minn 16-il frame JPEG derivat għal kull entrata, tiskadihom wara għaxar
minuti, u tappoġġja qari limitat b’`start`/`end` jew tħassir espliċitu tas-sessjoni.

Kull prinċipal huwa limitat għal 16-il entrata u 64 MiB ta’ data JPEG kanonika. Dawk
il-limiti huma indipendenti mil-limitu globali ta’ 64 entrata/256 MiB: il-pressjoni
tal-kwota tal-prinċipal tneħħi biss l-entrati l-inqas użati reċentement ta’ dak il-prinċipal
qabel ma tiġi kkunsidrata t-tneħħija globali skont LRU. L-entrati skaduti jitneħħew kemm
mill-kontabbiltà tal-prinċipal kif ukoll minn dik globali waqt l-attività tal-cache, filwaqt
li kanċellazzjoni u falliment tal-validazzjoni ma jikkonfermawx sostituzzjoni parzjali.

Il-cache jirrifjuta Base64 mhux kanoniku, padding żejjed, media li mhijiex JPEG, JPEGs ifformattjati ħażin jew maqtugħin, u JPEGs li jipproduċu twissija waqt dekodifikazzjoni sħiħa u limitata tal-immaġni permezz ta’ `sharp`. Jerġa’ jikkodifika kull immaġni aċċettata bħala JPEG kanoniku, jiddetermina l-wisa’ u l-għoli mill-bytes dekodifikati minflok ma jafda l-fields tal-invokatur, u jarmi kwalunkwe bytes polyglot żejda fit-tarf minflok ma jżommhom. Il-buffer ikkompressat, kanoniku u limitat biss jingħadd maż-żewġ kwoti. Il-limitu JSON fuq il-wire jinkludi l-overhead ta’ Base64 għal-limitu massimu ta’ 32 MiB tal-input dekodifikat. Kull
derivazzjoni maħżuna tirreġistra l-format u r-riżoluzzjoni JPEG ivvalidati tagħha, il-politika tat-teħid tal-kampjuni,
il-verżjoni tad-derivazzjoni, il-ħin tal-ħolqien, il-hash tal-kontenut ikkalkulat mis-server, u
r-referenza hashed tal-element ġenitur flimkien mal-hash tal-kontenut ġenitur tal-invokatur affidabbli. Il-kanċellazzjoni tiġi ċċekkjata
bejn il-fażijiet asinkroniċi tad-dekodifikazzjoni u tal-hashing qabel il-commit atomiku fil-cache.

Din it-tranche għadha ma tqabbadx produttur tal-produzzjoni mar-route u ma
tipprovdix għażla ta’ varjanti b’riżoluzzjonijiet multipli. Għalhekk, il-path trasparenti tat-talba
tal-Video Bridge ma jġarrab ebda xogħol addizzjonali, filwaqt li d-derivazzjoni tal-prinċipal marbuta
mat-tenant u ċ-ċiklu tal-ħajja sħiħ b’riżoluzzjonijiet multipli ta’ FU-08 jibqgħu xogħol ta’ segwitu espliċitu
minflok ma jiġu ddokumentati bħala mġiba kompluta.

Il-frames jingħataw captions b’mod sekwenzjali bil-mudell Video kkonfigurat. Override vojt
ta’ Video jiret l-issettjar ta’ Vision; jekk it-tnejn ikunu vojta, l-auto-router ta’ Vision
jagħżel il-mudell effettiv li jappoġġja l-viżjoni. Captions li jirnexxu
jissostitwixxu l-parti oriġinali bi prefiss stabbli `[Video description:` li wkoll
jimmarka t-test bħala osservazzjoni mhux affidabbli derivata mill-media u jgħid lill-mudelli downstream
biex ma jsegwux struzzjonijiet misjuba fil-media. Iċ-ċwievet tal-cache tal-captions tal-frames
jinkludu l-bytes JPEG, il-prompt, it-timestamp, u l-mudell effettiv; jiġu cached biss
captions li jirnexxu. L-entrati tal-cache jżommu l-mudell produttur li effettivament irnexxa,
inkluż mudell fallback; il-bridge jirrapporta `mixed` meta frames differenti
jkunu ġew prodotti minn mudelli differenti. Cache hit jerġa’ juża dik l-identità tal-produttur
minflok ma jerġa’ jittikkettaha bħala l-pjan ta’ routing mitlub. Il-cache tar-riżultat tal-vidjo kollu
għandu ċavetta bbażata fuq kull input li jibdel l-output — il-prompt, il-mudell
effettiv, il-politika tat-teħid tal-kampjuni, l-għadd ta’ frames, il-modalità tal-analiżi semantika, il-fingerprint SHA-256
tal-ħjiel ta’ fokus normalizzat, it-tieqa tal-fokus, `transcript`,
`audioTranscript`, u l-flag tal-contact sheet — sabiex bidla fi kwalunkwe waħda minn dawk
id-dimensjonijiet tirriżulta f’cache miss, u qatt f’użu mill-ġdid ta’ riżultat skadut. Il-verżjoni
tal-politika tad-deduplikazzjoni viżiva, it-threshold, u l-għadd limitat ta’ frames kandidati huma wkoll espliċiti fiċ-ċavetta
u fil-metadata tal-cache tar-riżultati; għalhekk bidla fil-politika ma tistax terġa’ tuża deskrizzjoni
skaduta tal-vidjo kollu. Il-metadata v4 tal-cache tar-riżultati żżomm il-modalità u
l-fingerprint, iżda qatt il-kompitu mhux ipproċessat tal-utent. Il-metadata tal-guardrail tirrapporta kemm il-modalità
tal-analiżi mitluba kif ukoll dik effettiva; modalità `focused` mitluba mingħajr
test tal-utent li jista’ jintuża tiġi rrappurtata bħala effettivament `full`.

Il-guardrail jiġbed kull parti tal-vidjo appoġġjata iżda ma jiddeskrivix aktar minn
`modalityBridgeVideoMaxVideos`. Għal target li jkun ġie ppruvat li għandu
`supportsVideo === false`, vidjows li fallew jew li qabżu l-limitu jsiru markers ta’ test sikuri u espliċiti
sabiex l-ebda vidjo mhux ipproċessat ma jibqa’. Meta l-kapaċità ma tkunx magħrufa, dawk il-partijiet
jibqgħu mhux mibdula. Targets b’`supportsVideo === true` jaqbżu l-bridge.
Is-sinjal tal-abort tat-talba tal-klijent jiġi propagat permezz tad-download, il-kju tal-broker,
is-subprocesses, u s-sejħiet għall-captions; l-aborts iwaqqfu l-ipproċessar bejn vidjo u ieħor u qatt ma jfallu b’mod miftuħ
billi jgħaddu media mhux ipproċessata.

Is-settings tar-runtime huma appoġġjati mid-DB u vvalidati b’Zod:

| Ċavetta                             | Default     | Firxa / mġiba                                                                                                 |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Runtime fakultattiv, b’opt-in                                                                                 |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` iżomm captions ġeneriċi; `focused` juża l-kuntest limitat u mhux affidabbli tal-aħħar utent            |
| `modalityBridgeVideoModel`          | `""`        | Jiret il-mudell tal-Vision Bridge                                                                             |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                          |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, jew `segment_aware` proporzjonali; falliment tad-detector jaqa’ lura għal `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                           |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                |

Valuri legacy persistiti tat-timeout ta’ Video li jaqbżu l-120 sekonda jiġu limitati sad-deadline
tal-broker; kitbiet ġodda tas-settings li jaqbżu dak il-limitu jiġu rrifjutati.
`GET /api/modality-bridge/video/runtime` jeħtieġ lokalità loopback affidabbli u ttimbrata
qabel l-awtentikazzjoni jew l-istħarriġ tar-runtime, u mbagħad jeħtieġ awtorizzazzjoni
ta’ ġestjoni. Jirritorna biss `available`, verżjonijiet sanitizzati ta’ FFmpeg/ffprobe, u raġuni fissa
meta r-runtime ma jkunx disponibbli. L-endpoint intern tal-estrazzjoni mhuwiex
API pubblika għall-uploads: saturazzjoni tal-kju tirritorna `503` flimkien ma’ `Retry-After`, skonnessjoni
tal-invokatur tirritorna `499`, u d-deadline fiss tal-broker jirritorna `504`. Risposti kkonvertiti jżidu
`video->text;model=<visionModel>;parts=<videos>` mal-header ċentrali
`x-omniroute-modality-bridge` mingħajr ma jneħħu s-segmenti ta’ Vision jew Audio.

### Masker tal-PII (`piiMasker.ts`)

Jitħaddem fiż-**żewġ** stadji.

- **`preCall`** jikklona l-payload, jgħaddi minn `system`, `messages`, `input`, u
  `prompt` (inklużi elementi li huma strings sempliċi), u japplika `processPII()` (minn
  `@/shared/utils/inputSanitizer`) għall-fields `content`/`text` li huma strings. Meta
  `PII_REDACTION_ENABLED=true`, il-PII misjuba tiġi moħbija fil-payload
  li jintbagħat. Dan huwa indipendenti minn `INPUT_SANITIZER_MODE` (li jikkontrolla
  biss il-politika dwar l-injezzjoni fil-prompt). Meta l-ħabi jkun mitfi, is-sejħa
  tirreġistra l-għadd ta' każijiet misjuba mingħajr ma terġa' tikteb il-kontenut.
- **`postCall`** jagħmel klonu profond tar-rispons, iħaddem `sanitizePIIResponse()` flimkien
  mal-masker għall-forma tal-Responses API (`maskResponsesOutput` — ikopri
  `output_text` u `output[].content[].text`). Jekk iseħħ xi ħabi, ir-rispons
  modifikat jieħu post l-oriġinali.

Il-guardrail qatt ma jimblokka; huwa biss iżid annotazzjonijiet (`meta.detections`,
`meta.redacted`) jew jerġa' jikteb il-kontenut.

### Injezzjoni fil-Prompt (`promptInjection.ts`)

Jindividwa strutturi avversarji fil-kontenut ipprovdut mill-utent u jinforza
l-politika kkonfigurata. L-imġiba hija rregolata minn varjabbli tal-ambjent u
għażliet tal-kostruttur:

| Setting                | Env var                                                                                               | Default | Effect                                                                                                                                                                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Attivat                | `INPUT_SANITIZER_ENABLED`                                                                             | `true`  | Meta jkun `false`, il-guardrail jieqaf minnufih.                                                                                                                                                                                               |
| Modalità               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`  | Politika tal-injezzjoni: `block`, `warn`, jew `log`. (`redact` huwa aċċettat għall-kompatibbiltà retroattiva iżda **ma** jneħħix it-test tal-injezzjoni; il-kitba mill-ġdid tal-PII fit-talba hija kkontrollata minn `PII_REDACTION_ENABLED`.) |
| Limitu għall-imblukkar | Għażla `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Is-severità minima meħtieġa għall-imblukkar. B'mod awtomatiku, is-severità medja hija biss għall-osservazzjoni.                                                                                                                                |

**Preċedenza tal-modalità** (`getMode`): `options.mode` ta' min jagħmel is-sejħa →
override tal-feature flag fid-DB għal `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → env `INJECTION_GUARD_MODE` → env `INPUT_SANITIZER_MODE` →
`warn`. Għaldaqstant, override mid-dashboard jieħu preċedenza fuq l-env vars, u għalhekk
l-UI tal-Feature Flags tikkontrolla l-guard attiv direttament (mingħajr restart).
Il-qari mid-DB huwa fail-safe: jekk iseħħ żball, il-guard jerġa' lura għall-imġiba
bbażata fuq l-env, u meta ma jkun issettjat l-ebda override, l-imġiba tkun identika
għar-riżoluzzjoni bbażata biss fuq l-env.

Sorsi ta' detezzjoni:

1. `sanitizeRequest()` minn `@/shared/utils/inputSanitizer` (sett komuni ta'
   detectors li jintuża wkoll f'partijiet oħra tal-pipeline).
2. `DEFAULT_GUARD_PATTERNS` integrati (attwalment `system_override_inline` u
   `markdown_system_block`, it-tnejn b'severità `high`).
3. `customPatterns` fakultattivi mgħoddija permezz tal-għażliet tal-kostruttur (strings, regex,
   jew records `{ name, pattern, severity }`).

Meta `mode === "block"` **u** mill-inqas każ wieħed misjub jilħaq il-limitu
tas-severità, `preCall` jirritorna `{ block: true, message: "Talba miċħuda:
instab kontenut suspettuż" }`. Fil-modalitajiet `warn`/`log`, il-guardrail
jirreġistra l-każ iżda jippermetti s-sejħa. Il-helper komuni
`evaluatePromptInjection()` huwa esportat ukoll għal min jeħtieġ jevalwa
prompts mingħajr ma jgħaddi mir-registry.

**Limitu tal-iskannjar (v3.8.20):** id-detector jispezzjona biss l-**ewwel 16 KB**
tat-test magħqud tal-prompt — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) f'
`src/shared/utils/inputSanitizer.ts`. Kemm `detectInjection()` kif ukoll
`evaluatePromptInjection()` jużaw `slice(0, MAX_INJECTION_SCAN_BYTES)` qabel ma jħaddmu
l-loop tal-patterns. Id-direttivi ta' injezzjoni jinsabu qrib il-bidu ta' input,
għalhekk dan jillimita l-użu tas-CPU/GC mir-regex fuq payloads ta' mijiet ta' KB
mingħajr ma jdgħajjef id-detezzjoni (ara #3932, #4041).

### Masker tal-Kredenzjali (`credentialMasker.ts`)

Jaħdem fiż-**żewġ** stadji, l-aħħar fil-katina awtomatika (prijorità `95`). Jaħbi
patterns magħrufa ta' API keys / tokens sigrieti mill-payload li jintbagħat
(kontenut tal-messaġġi, argumenti tas-sejħiet tal-għodod, riżultati tal-għodod) **u**
mir-rispons tal-provider, sabiex kredenzjali mwaħħla fi prompt (jew ripetuti minn
riżultat ta' għodda) ma jiġux żvelati lill-provider upstream jew lura lill-klijent.

- **Attivazzjoni volontarja biss**, bl-istess konvenzjoni bħaċ-ċensura tal-PII (qrib ir-Regola Stretta #20):
  diżattivata sakemm `settings.credentialRedactionEnabled === true` **jew**
  `CREDENTIAL_REDACTION_ENABLED=true`. Meta tkun mitfija, il-miżura protettiva ma tagħmel xejn —
  qatt ma timblokka u qatt ma tikteb mill-ġdid.
- `redactCredentials()` jgħaddi mis-siġra sħiħa tal-payload/tat-tweġiba (`walkValue()`,
  protett kontra t-tniġġis tal-prototip, u sikur kontra ċ-ċikli permezz ta’ `WeakSet`) u jissostitwixxi t-taqbiliet
  bi placeholder `[REDACTED:<type>]`, filwaqt li jikklona biss il-friegħi li
  effettivament inbidlu.
- `CREDENTIAL_PATTERNS` ikopri ċ-ċwievet tal-fornituri tal-LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens tal-VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ċwievet tal-ħlas (Stripe, Square), ċwievet tal-cloud
  (ċavetta tal-aċċess tal-AWS, Twilio, SendGrid, Mailgun), ċwievet privati / JWTs,
  strings ta’ konnessjoni li jinkludu kredenzjali (`mongodb://user:pass@...`, eċċ.), u
  mudell ġeneriku għall-valur tal-header `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Ċwievet fil-forma ta’ headers (`authorization`, `x-api-key`, `api-key`,
  `apikey`) jiġu ċċensurati strutturalment (il-valur biss, bil-prefiss tal-iskema bħal
  `Bearer `/`Basic ` ippreservat) minflok permezz tar-regex ġenerika tat-test.
- Il-miżura protettiva qatt ma timblokka; hija tikteb mill-ġdid biss (`modifiedPayload` /
  `modifiedResponse`) u żżid annotazzjonijiet (`meta.credentialsRedacted`, `meta.count`).

Protezzjoni kontra r-rigressjonijiet: `tests/unit/credential-masker-guardrail.test.ts`.

## Kuntratt Bażiku (`base.ts`)

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
  block?: boolean; // true jwaqqaf il-katina immedjatament
  message?: string; // jintwera meta jsir imblukkar
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // jiġi rritornat minn preCall biex jerġa' jikteb it-talba
  modifiedResponse?: TValue; // jiġi rritornat minn postCall biex jerġa' jikteb ir-rispons
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

Guardrail jindika "l-ebda bidla" billi jirritorna jew `void`, `{}`, jew
`{ block: false }`. Ir-ritorn ta' `modifiedPayload`/`modifiedResponse` jissostitwixxi
l-valur li jgħaddi mill-katina għall-guardrails sussegwenti.
`signal?: AbortSignal` jittrasmetti ċ-ċiklu tal-ħajja ta' min jagħmel is-sejħa lill-guardrails. L-abort ta' talba huwa l-eċċezzjoni intenzjonata ta' fail-open: il-pontijiet tal-midja jwaqqfu x-xogħol u jagħmlu t-tindif mingħajr ma jirrestawraw il-midja mhux ipproċessata lejn mira li hu magħruf li ma tappoġġjahiex.

## Reġistru (`registry.ts`)

Is-singleton `guardrailRegistry` jesponi:

- `register(guardrail)` — iżid guardrail (jew jissostitwih skont l-isem normalizzat) u
  jerġa' jordna skont `priority` axxendenti.
- `clear()` / `list()` — għodod ta' għajnuna amministrattivi.
- `runPreCallHooks(payload, context)` — jgħaddi mill-guardrails attivi, jgħaddi l-
  payload minn `modifiedPayload`, u jieqaf mal-ewwel `block: true`.
- `runPostCallHooks(response, context)` — l-istess fluss fuq in-naħa tar-rispons.
- `resetGuardrailsForTests({ registerDefaults })` — ineħħi l-istat u, b'mod fakultattiv,
  jerġa' jirreġistra l-valuri predefiniti għal iżolament nadif tat-testijiet.

Iż-żewġ runners jirritornaw `{ blocked, payload|response, results, guardrail?, message? }`
fejn `results` huwa array ta' rekords `GuardrailExecutionResult` li jinkludu
l-fields `blocked`, `skipped`, `modified`, `error`, u `meta` għal kull guardrail,
utli għat-traċċar.

### Diżattivazzjoni tal-Guardrails Għal Kull Talba

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` jiġbor lista
mingħajr duplikati ta' ismijiet ta' guardrails li għandhom jinqabżu għat-talba
attwali. Is-sorsi (kollha fakultattivi, kollha magħquda) huma:

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` fil-body tat-talba (fl-ogħla livell)
- `metadata.disabledGuardrails` fil-body tat-talba
- Il-header `x-omniroute-disabled-guardrails` (jew dak legat
  `x-disabled-guardrails`)

Il-valuri jistgħu jkunu arrays ta' strings jew string separata b'virgoli; l-ismijiet jiġu
normalizzati għal kebab-case b'ittri żgħar (`pii_masker` → `pii-masker`). Ir-riżultat
jgħaddi permezz ta' `context.disabledGuardrails` lir-reġistru, li jaqbeż
il-guardrails korrispondenti (`skipped: true` f'`results`).

## Ordni tal-Eżekuzzjoni

Għal kull talba li tgħaddi minn `src/sse/handlers/chat.ts` u
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` jibni l-lista ta’ elementi li għandhom jinqabżu mill-API key, mill-body,
   u mill-headers.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` iħaddem il-guardrails f’ordni axxendenti
   ta’ prijorità:
   - Il-guardrails diżattivati jiġu rreġistrati bħala `skipped`.
   - Il-`preCall` ta’ kull guardrail jista’ jerġa’ jikteb il-payload permezz ta’ `modifiedPayload`.
   - L-ewwel `block: true` iwaqqaf il-katina immedjatament u l-handler jirritorna
     risposta ta’ rifjut mill-guardrail.
3. Il-payload (li potenzjalment ikun inkiteb mill-ġdid) jgħaddi għar-routing ikkombinat u
   għad-dispatch upstream.
4. Wara li tiġi assemblata r-risposta, `guardrailRegistry.runPostCallHooks(...)`
   iħaddem l-istess katina fuq ir-risposta. `block: true` hawnhekk iwarrab ir-risposta
   upstream.

Guardrails li joħolqu eċċezzjoni jiġu rreġistrati b’`error: <message>` u jiddaħħlu fil-log permezz ta’
`logger.warn`, iżda l-katina tkompli — bid-disinn, f’każ ta’ falliment tippermetti li l-proċess ikompli.

## Konfigurazzjoni

Varjabbli tal-ambjent moqrija mill-guardrails integrati:

| Varjabbli                             | Użata minn                | Effett                                                                                                                        |
| ------------------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Issettja għal `false` biex tiddiżattiva kompletament id-detezzjoni.                                                           |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Politika tal-injezzjoni: `warn`, `block`, jew `log`. Il-valur legacy `redact` ma jerġax jikteb it-test tal-injezzjoni.        |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Modalità għall-guard tal-injezzjoni; huwa wkoll feature flag fid-DB li **jissostitwixxi** l-varjabbli tal-ambjent (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Is-severità minima li `MODE=block` jirrifjuta: `high` (default), `medium`, jew `low`.                                         |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Alias legacy għal `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                          |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Meta jkun `true`, il-PII tat-talba jiġi redatt (indipendentement mill-modalità tal-injezzjoni).                               |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Jikkontrolla l-imġiba tal-masker fuq in-naħa tar-risposta.                                                                    |

Il-guardrails tal-Modality Bridge jaqraw il-konfigurazzjoni waqt l-eżekuzzjoni mill-ħażna tas-settings
ibbażata fuq id-DB (`getSettings()`), mhux mill-varjabbli tal-ambjent. Il-keys primarji ta’ Vision huma
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, u
`modalityBridgeCacheMaxEntries`. Il-keys legacy
`visionBridge*` jiġu aċċettati biss bħala l-fallback dokumentat għall-qari għal ċiklu wieħed;
il-kitbiet mid-dashboard jużaw il-keys primarji. Il-valuri default u r-resolver tal-fallback
jinsabu f’`src/shared/constants/modalityBridgeDefaults.ts`, filwaqt li l-kostanti legacy
jinżammu f’`src/shared/constants/visionBridgeDefaults.ts`.

Audio juża `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, u `modalityBridgeAudioMaxClips`, flimkien mas-settings kondiviżi
`modalityBridgeCache*`. Audio m’għandux fallback għal keys legacy minħabba li dawn
il-keys ġew introdotti mal-iskema tal-Modality Bridge.

Video juża `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, u
`modalityBridgeVideoTimeout`, flimkien mas-settings kondiviżi `modalityBridgeCache*`.
Huwa diżattivat b’mod default minħabba li FFmpeg/ffprobe huma dipendenzi operazzjonali
fakultattivi u l-ħolqien ta’ captions għall-frames iżid il-latenza u l-ispiża tal-mudell.

## Guardrails Personalizzati

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

Passi:

1. Oħloq `src/lib/guardrails/myGuardrail.ts` li jestendi `BaseGuardrail`.
2. Implimenta `preCall` u/jew `postCall`.
3. Jew irreġistrah waqt l-importazzjoni (żidu minn `registerDefaultGuardrails`) jew
   sejjaħ `guardrailRegistry.register(...)` waqt l-eżekuzzjoni — ir-reġistru jissostitwixxi
   kwalunkwe guardrail preċedenti bl-istess isem normalizzat.
4. Żid testijiet taħt `tests/unit/` (eżempji eżistenti:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Ittestjar

Uża `resetGuardrailsForTests()` bejn it-testijiet biex tibda minn stat magħruf.
Għaddi `{ registerDefaults: false }` biex tibda b’reġistru vojt u
rreġistra biss il-guardrails li qed jiġu ttestjati. Vision Bridge jaċċetta l-injezzjoni
tad-dipendenzi (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge jesponi
l-punti ta’ separazzjoni ekwivalenti għas-settings, il-kapaċitajiet, l-għażla tal-mudell STT, il-kontrolli
tal-kredenzjali, u t-traskrizzjoni. Għalhekk, it-testijiet jistgħu jeżerċitaw iż-żewġ flussi mingħajr aċċess
għad-DB jew għan-network.

## Ara Wkoll

- `src/lib/guardrails/` — implimentazzjoni
- `src/shared/utils/inputSanitizer.ts` — detettur kondiviż li jħaddem
  il-protezzjoni kontra l-injezzjoni fil-prompt u l-maskra tal-PII
- `src/shared/constants/visionBridgeDefaults.ts` — valuri predefiniti ta’ Vision Bridge u
  lista ta’ mudelli b’bridge obbligatorju
- `src/shared/constants/modalityBridgeDefaults.ts` — valuri predefiniti kondiviżi waqt l-eżekuzzjoni għal Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — saff ortogonali (circuit breaker, perjodi ta’ stennija)
- `docs/reference/ENVIRONMENT.md` — referenza sħiħa tal-varjabbli tal-ambjent

## Kopertura tar-rotot tal-protezzjoni kontra l-injezzjoni u red-team (Fażi 8 · Blokka D)

Il-protezzjoni kontra l-injezzjoni (`createInjectionGuard` / `withInjectionGuard`) tkopri r-rotot kollha
li jaċċettaw prompts tal-utenti. Tirrispetta `INJECTION_GUARD_MODE` (il-valur predefinit `warn` = tirreġistra biss;
`block` = tirritorna HTTP 400 `SECURITY_001`).

| Tip              | Rotot                                                                                                                                                | Modalità predefinita |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| Test (eżistenti) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                 |
| Ġenerattiv       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                 |
| Data             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                 |

L-estrazzjoni tat-test (`extractMessageContents`) tkopri `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (kull lejl, `nightly-llm-security.yml`):** promptfoo jivvalida li kull rotta timblokka
l-korpus OWASP-LLM meta `INJECTION_GUARD_MODE=block`; garak iħaddem probes (jinqabeż mingħajr secret).
`moderations` huwa inkluż għall-konsistenza — l-operaturi fil-modalità ta’ mblukkar jistgħu jeżentawh permezz ta’
`resolveDisabledGuardrails`.

Il-workflow ta’ kull lejl (`.github/workflows/nightly-llm-security.yml`, cron + attivazzjoni
manwali) għandu żewġ jobs:

- **`promptfoo-guard` (blokkanti)** — iħaddem `promptfoo eval -c promptfooconfig.yaml`
  b’`INJECTION_GUARD_MODE=block`. Kull każ avversarju (eż. "ignore all
  previous instructions…", jailbreaks tal-istil DAN) jivverifika li r-risposta ġġorr
  `error.code === "SECURITY_001"`, jiġifieri li l-protezzjoni fil-fatt irrifjutat it-talba.
- **`garak` (konsultattiv)** — iħaddem garak `--probes promptinject,dan,leakreplay`
  kontra istanza lokali ta’ OmniRoute (`http://localhost:20128/v1`). Huwa kkundizzjonat minn
  secret tal-fornitur (`PROMPTFOO_PROVIDER_KEY`); jinqabeż mingħajr problemi u għandu s-suffiss
  `|| true`, għalhekk jirrapporta mingħajr ma jfalli s-CI.

Il-kopertura tal-helper tal-protezzjoni (`createInjectionGuard` / `withInjectionGuard`)
testendi għal kull rotta `/v1` li ġġorr prompt; it-test tal-prompt jittieħed minn
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` minn
`extractMessageContents()` f’`src/shared/utils/inputSanitizer.ts`.
