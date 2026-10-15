# Guardrails (Latviešu)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Patiesības avots:** `src/lib/guardrails/`
> **Pēdējoreiz atjaunināts:** 2026-08-29 — v3.8.51 (Video Bridge transkripta izcelsmi deklarē izsaucējs,
> serveris to vēl nepārbauda — precizēts saskaņā ar #11661)

Aizsargmehānismi nodrošina drošības, politiku un satura transformāciju ievērošanu uz robežas
starp OmniRoute un augšupējiem pakalpojumu sniedzējiem. Katrs aizsargmehānisms var pārbaudīt (un
pēc izvēles noraidīt, transformēt vai anotēt) pieprasījumu lietderīgo slodzi (`preCall`) un
augšupējās atbildes (`postCall`).

Sistēma ir **kļūmju gadījumā atvērta**: ja aizsargmehānisma izpildes laikā rodas izņēmums, reģistrs
reģistrē kļūdu un turpina ar nākamo aizsargmehānismu, nevis izraisa pieprasījuma
kļūmi. Bloķēšana ir apzināts lēmums (`block: true`), nevis nejaušība.

## Iebūvētie aizsargmehānismi

Reģistrs importēšanas laikā automātiski ielādē sešus aizsargmehānismus prioritātes secībā
(skatiet `registry.ts` → `registerDefaultGuardrails()`):

| Prioritāte | Nosaukums           | Posms(-i)      | Fails                 |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Mazāki prioritātes skaitļi tiek izpildīti **vispirms**.

### Redzes tilts (`visionBridge.ts`) — Modalitātes tilts PR-1

Pārtver attēlus saturošus pieprasījumus, kas paredzēti **modeļiem bez redzes atbalsta**, un vai nu
novirza visu pieprasījumu uz modeli ar redzes atbalstu, vai pirms
augšupstraumes izsaukuma aizstāj attēlu daļas ar teksta aprakstiem, kurus ģenerējis
konfigurējams redzes modelis. Tas ļauj tikai tekstu atbalstošiem pakalpojumu sniedzējiem nemanāmi apstrādāt
multimodālas lietderīgās slodzes.

Plūsma:

1. Izlaist, ja mērķa modelis jau atbalsta redzi (ja vien tas nav iekļauts
   piespiedu tilta sarakstā `isVisionBridgeForcedModel`).
2. Izgūt attēlu daļas, izmantojot `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), kas deleģē šo uzdevumu **vienotajam multivides
   detektoram** `detectMediaParts()` failā `open-sse/utils/mediaParts.ts` — vienīgajam
   patiesības avotam, kas tiek koplietots ar combo saderības filtru.
   Izgūšana ir ierobežota ar atļauto augšējā līmeņa daļu formu sarakstu, kuras
   `replaceImageParts` var ievietot atpakaļ (izgūšanas↔aizstāšanas līgums): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` un Responses API `input_image`. Ligzdotas atbilstības un
   tikai indikatorus saturošas formas ir combo filtra materiāls un nekad netiek izgūtas.
   Izlaist, ja nekas nav atrasts.
3. Atrisināt izpildlaika konfigurāciju, izmantojot `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): jaunajām `modalityBridge*`
   iestatījumu atslēgām ir priekšroka; mantotās `visionBridge*` atslēgas saglabājas kā
   **viena cikla atkāpšanās variants** (atritināšanas logs). Ja tilts ir atspējots, izlaist
   pirms jebkādas multivides pārskatīšanas.
4. Režīma atlasītājs (`modalityBridgeVisionMode`, skatiet tabulu tālāk) nosaka,
   vai veikt novirzīšanu vai aprakstīšanu. Novirzīšana atgriež `modifiedPayload`, kurā
   nomainīts tikai `model`, kā arī metadatus `{ rerouted, fromModel, toModel, imagesKept }`.
5. Aprakstīšanas ceļš: ierobežot attēlu skaitu līdz `maxImages`, izveidot uzdevumam
   pielāgotu uzvedni, pārbaudīt aprakstu kešatmiņu, izsaukt redzes modeli **paralēli**
   (`Promise.allSettled`) un attēlu vietā ievietot teksta daļas
   `[Image N]: <description>`. Neizdevies aprakstīšanas mēģinājums dod `null`, un sākotnējā
   attēla daļa tiek **saglabāta** (#4012), izņemot combo aprakstīšanas ceļu, kad
   neizdevās visi aprakstīšanas mēģinājumi; šādā gadījumā apstiprināta augšupstraume bez
   redzes atbalsta saņem aizstājēju
   `(unavailable — no vision-capable provider connected)` (#8430).
6. Atgriezt `modifiedPayload` un metadatus (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Režīma atlasītājs (`modalityBridgeVisionMode`)

| Režīms     | Noklusējums | Darbība                                                                                                                                                                                                                                                                                                                                             |
| ---------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔           | Mantotā heiristika bez izmaiņām (#6640/#7204): modeļi, kas nav combo/`auto/` modeļi, tiek novirzīti uz labāko redzes modeli, ja vien sākotnējam modelim jau nav izmantojamu akreditācijas datu (tad tiek veikta aprakstīšana); combo mērķiem vienmēr tiek veikta aprakstīšana.                                                                      |
| `describe` |             | Vienmēr aprakstīt — novirzīšanas bloks tiek pilnībā izlaists; vienmēr atbild lietotāja izvēlētais modelis.                                                                                                                                                                                                                                          |
| `reroute`  |             | Piespiedu novirzīšana: akreditācijas datus saņēmušā modeļa saglabāšanas pārbaude tiek apieta. Novirzīšanas **mērķa** akreditācijas datu pārbaude joprojām tiek piemērota — ja nav pieejams izmantojams redzes mērķis, pieprasījums pāriet uz aprakstīšanu, lai neapstrādāti attēli nekad nenonāktu tikai tekstu atbalstošā aizmugursistēmā (#8430). |

Piespiedu režīmi veic īsslēgumu **pirms** automātiskās heiristikas izpildes; `auto` darbība
baitu līmenī ir identiska aizsargmehānismam pirms PR-1.

#### API atslēgas tvērums (`visionBridgeKeyScope.ts`)

Ja izsaucēja API atslēga ierobežo `allowedConnections`, kvotu pūlus
(`allowedQuotas`) vai modeļus (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), tilts novirzīšanai
un aprakstīšanai izvēlas tikai modeļus, kurus atslēga drīkst izmantot, izmantojot
savienojumus, kurus atslēga drīkst izmantot. Pēc tam aprakstīšanas izsaukums vienmēr
notiek caur OmniRoute pašcilpu ar galveni `x-omniroute-self-loop-key-id`, lai
saņemošais tērzēšanas pieprasījums vēlreiz piemērotu šīs atslēgas savienojumu un modeļu
politiku. `enforceApiKeyPolicy()` ņem šo galveni vērā tikai kopā ar pašcilpas
nesēja pilnvarojumu, tāpēc tā var tikai sašaurināt piekļuvi, un identifikators, kuru
nevar atrisināt, tiek noraidīts.

Ja atslēgai nav atļauts neviens redzes modelis, aprakstīšanas ceļš atkāpjas un
pieprasījums tiek nodots tālāk bez izmaiņām — tāda pati kļūmju gadījumā atvērta darbība
kā atspējotam aizsargmehānismam (metadati `{ skipped: true, reason: "no_permitted_vision_model" }`).
Pieprasījumi bez atslēgas un atslēgas bez šiem ierobežojumiem darbojas tieši tāpat kā
iepriekš.

#### Uzdevumam pielāgota aprakstīšanas uzvedne (`modalityBridgeVisionTaskAware`)

Noklusējums ir **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) pamata
aprakstīšanas uzvednei pievieno **pēdējā lietotāja ziņojuma** tekstu (saīsinātu līdz 500 rakstzīmēm),
virzot aprakstu uz to, ko lietotājs patiesībā jautāja
(codex-vision-proxy pieeja), un lūdzot redzes modelim pārrakstīt redzamo
tekstu. Ja karodziņš ir izslēgts vai lietotāja teksta nav, pamata uzvedne tiek izmantota nemainīta.

Aprakstīšanas pašcilpa savā OpenAI saderīgajā pieprasījumā (`callVisionModelSingle()`
failā `visionBridgeHelpers.ts`) vienmēr pieprasa `image_url.detail: "high"` —
bez nosacījumiem visiem izsaucējiem un nodrošinātājiem, nebalstoties ne uz vienu klienta signālu.
Zemas detalizācijas paraugu ņemšana pasliktina OCR precizitāti tieši tam teksta pārrakstīšanas
uzdevumam, ko pieprasa šī uzvedne, tāpēc pats aprakstīšanas izsaukums vienmēr pieprasa augstu
detalizāciju neatkarīgi no tā, kādu detalizācijas līmeni izmantoja sākotnējais ienākošais pieprasījums. Tas
ietekmē tikai iekšējā aprakstīšanas pieprasījuma ķermeni; tas nemaina veidu, kā
OmniRoute pārsūta izsaucēja paša `image_url.detail` primārajā pieprasījumā —
šī noklusējuma vērtība tiek piemērota atsevišķi un tikai konstatētiem OpenCode klientiem
funkcijā `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Aprakstīšanas
pašcilpas Anthropic vadu formāta atzaram nav lauka `detail`, un neviens no šiem noklusējumiem
to neietekmē.

#### Apraksta izvades ierobežojums (`modalityBridgeVisionMaxChars`)

| Atslēga                        | Noklusējums | Diapazons         |
| ------------------------------ | ----------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`         | `0` vai 100–50000 |

`0` (noklusējums) nozīmē **bez ierobežojuma** — `callVisionModel()` atgrieztais apraksts
tiek nodots tālāk nemainīts, saglabājot esošo darbību. Jebkura vērtība diapazonā
100–50000 saīsina aprakstu, pievienojot sufiksu `…`, pirms tas tiek ievietots atpakaļ kā
`[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` failā
`src/lib/guardrails/visionBridge.ts`). Palieliniet šo vērtību detalizētiem OCR uzdevumiem,
kuros pakārtotajam modelim nepieciešama pilna transkripcija; samaziniet to, lai ierobežotu
marķieru lietojumu runīgiem redzes modeļiem. Informācijas paneļa lauks atrodas cilnes Vision
panelī Advanced (`modality-bridge-max-chars` failā `ModalityBridgeVisionTab.tsx`) un
jebkuru vērtību no 1 līdz 99 palielina līdz minimālajai vērtībai 100, vienlaikus atstājot
skaidri norādītu `0` nemainītu — `0` pati par sevi ir derīga Zod vērtība
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nevis tikai
noklusējums “nav iestatīts”.

#### Aprakstu kešatmiņa (`modalityBridge/bridgeCache.ts`)

Atmiņā glabāta LRU + TTL kešatmiņa aprakstīšanas izvadēm, kas ir koplietota visa procesa mērogā.
Atslēga = `sha256(imageRef + composedPrompt + configuredBridgeModel)` ar
garuma prefiksu kadrēšanu (bez lauku robežu kolīzijām). Modeļa komponents ir
**konfigurētais** tilta modelis, nevis modelis, kas faktiski atbildēja —
`callVisionModel` var iekšēji izmantot atkāpšanās variantu, un atslēgas veidošana katram
mēģinājumam sadrumstalotu kešatmiņu. Neveiksmīgi apraksti nekad netiek ievietoti kešatmiņā. Iestatījumi:

| Atslēga                         | Noklusējums | Diapazons |
| ------------------------------- | ----------- | --------- |
| `modalityBridgeCacheEnabled`    | `true`      | —         |
| `modalityBridgeCacheTtlMinutes` | `60`        | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`       | 10–5000   |

#### Attālo attēlu normalizēšana (pašcilpas aprakstīšana/base64 ielāde)

Kad tilts pats ielādē **attālu** attēlu — Anthropic aprakstīšanas pašizsaukumam un
claude-wire-format base64 pārveidošanai (`ensureBase64ImagesForClaudeWire`), abos gadījumos
izmantojot `fetchRemoteImageAsDataUri()` failā `visionBridgeHelpers.ts`, — iegūtais datu
URI tiek nodots caur `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`), pirms tas tiek iegults redzes modeļa
pieprasījumā. Pārāk lieli attēli tiek samazināti līdz **2048px garākajai malai** (atbilstoši
izmēra ierobežojumam, ko OpenAI/Anthropic jau piemēro servera pusē), tādējādi samazinot
augšupielādes baitu apjomu/latentumu, nemainot to, ko redz redzes modelis. Izmēru maiņai
tiek izmantota pakotne `sharp`, kas tiek ielādēta ar dinamisku importēšanu: platformā, kur tās
vietējo bināro failu neizdodas ielādēt, `normalizeDataUri()` **nekad neizmet izņēmumu** —
tā atkāpjas uz sākotnējo baitu nodošanu bez izmaiņām, tāpēc aprakstīšanas/base64 pārveidošanas
ceļš vienmēr turpina darboties. Baiti, kas nav attēls (ielāde, kura neatgrieza
atkodējamu attēlu), arī tiek nodoti tālāk nemainīti. Šī normalizēšana
attiecas tikai uz attēliem, kurus tilts ielādē savam pašizsaukumam — tā nekad
netiek piemērota izsaucēja neapstrādātajai, tieši nodotajai slodzei, ievērojot
principu, ka izmaiņas veicamas tikai ar piekrišanu (Stingrais noteikums #20).

#### Iestatījumu shēma + migrācija

Jaunās `modalityBridge*` atslēgas tiek validētas ar Zod shēmā `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*` trijotne un
`modalityBridgeAudio*` grupa, ko izmanto Audio Bridge. Migrācija
`141_modality_bridge_settings.sql` kopē esošās mantotās
`visionBridge*` vērtības uz atbilstošajām jaunajām atslēgām (idempotenti, nekad nepārrakstot
operatora iestatītu `modalityBridge*` vērtību); mantotās atslēgas vienu laidiena ciklu
joprojām tiek pieņemtas kā rezerves lasīšanas avots.

#### Caurspīdīguma galvene + statistika

Aprakstīšanas rezultātā pārveidotajās atbildēs ir
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(to izveido `buildModalityBridgeHeader()` failā `modalityBridge/bridgeStats.ts`,
bet pievieno `withModalityBridgeHeader()` failā `src/sse/handlers/chatHelpers.ts`).
Pārmaršrutēti pieprasījumi **nesaņem** galveni — slodze netika mainīta, un modeļa
nomaiņa jau ir redzama atbildes ķermeņa laukā `model`.

`GET /api/modality-bridge/stats` (pārvaldības autentifikācija, tāds pats līmenis kā
`GET /api/settings`) atgriež atmiņā glabātos katras modalitātes skaitītājus
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` modalitātēm `vision`, `audio` un
`video`. `averageLatencyMs` kā saucēju izmanto `latencySamples`, nevis visus
mēģinājumus; operācija bez laika mērījuma nerada mākslīgu nulles milisekunžu
paraugu. `bridged` joprojām ir atpakaļsaderīgs sekmīgo
pārveidojumu aizstājvārds; neveiksmīgi mēģinājumi to nepalielina.
Pēc procesa restartēšanas skaitītāji pēc konstrukcijas tiek atiestatīti
(telemetrija, nevis uzskaite).

#### Informācijas paneļa konfigurācija

Atsevišķā informācijas paneļa lapa atrodas
`/dashboard/settings/modality-bridge`. Tās ar URL adresējamās cilnes `Vision`, `Audio`
un `Video`, pārslēdzot `tab` vērtību, saglabā vaicājuma parametrus.
Cilne Vision piedāvā iespējošanu, režīmu, modeļa izvēli (tostarp automātisko
noklusējumu), uzdevumam pielāgotas uzvednes, papildu noildzes/attēla/apraksta garuma/kešatmiņas
ierobežojumus, izpildlaika
skaitītājus un aizsargātu parauga pieprasījumu. Arī cilne Audio darbojas: tā piedāvā
iespējošanu, tikai STT paredzētu modeļa atlasītāju ar Auto, noildzes/maksimālā klipa ierobežojumus, audio
skaitītājus un `input_audio` parauga testu. Cilne Video ir funkcionāla: tā parāda
FFmpeg/ffprobe izpildlaika stāvokli — vienu no četriem skaidri definētiem UI stāvokļiem (`unknown`, kamēr
pārbaude notiek vai to nevarēja pabeigt, `restricted`, ja informācijas paneļa resursdators nav atgriezeniskās cilpas
resursdators un pārbaude tiek izlaista klienta pusē, `unavailable`, kad pārbaude ir veikta
un ir apstiprināts, ka rīki nav pieejami, vai `available` ar FFmpeg/ffprobe versijām) — saglabā
iespējošanas/modeļa/kadru/video/noildzes ierobežojumus, filtrē modeļa atlasītāju, atstājot modeļus ar
redzes atbalstu, un piedāvā video skaitītājus.

Iepriekšējā Vision Bridge kartīte AI iestatījumos ir saderības saite uz
jauno lapu; tajā vairs neatrodas otra veidlapas kopija. Media Providers arī
savieno Image-to-Text un Speech-to-Text darbplūsmas ar atbilstošajām Modality
Bridge cilnēm, nenoņemot esošo Speech-to-Text izmēģinājumu vidi.

**Pašcilpas piekļuves pārbaudes apiešana:** kad aprakstīšanas izsaukums tiek maršrutēts caur paša OmniRoute
`/v1` pašcilpu (nestandarta nodrošinātāja modelis), apakšpieprasījums nosūta
`x-omniroute-admission-bypass: internal` un tiek autentificēts ar atrisināto
pašcilpas akreditācijas informāciju — lokālo `sk_omniroute` marķieri lokālajā režīmā vai
operatora konfigurēto `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` vides atslēgu (#1350), lai
izvietojumi ar `REQUIRE_API_KEY=true` joprojām varētu izpildīt aprakstīšanas izsaukumu. Apiešana
tiek ievērota tikai ar tieši šo akreditācijas informāciju, tāpēc ārējie klienti nevar izmantot
galveni, lai izlaistu piekļuves pārbaudi.

Mantotās noklusējuma vērtības atrodas `src/shared/constants/visionBridgeDefaults.ts`;
jaunā režīma/uzdevumam pielāgoto/kešatmiņas noklusējuma vērtības un iestatījumu atrisinātājs atrodas
`src/shared/constants/modalityBridgeDefaults.ts`. Aizsargmehānisms piedāvā
`deps` konstruktora opciju, lai testos varētu ievadīt viltotas `getSettings` un
`callVisionModel` implementācijas.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Pārtver tērzēšanas pieprasījumus ar audio, pirms tie sasniedz mērķi, par kuru nav
zināms, ka tas pieņem audio ievadi. Tas nekad nepārmaršrutē tērzēšanas pieprasījumu: audio daļas tiek
transkribētas, izmantojot esošo ar OpenAI saderīgo vairākdaļu galapunktu, un
izvēlētais tērzēšanas modelis turpina darbu ar teksta transkriptiem.

Plūsma:

1. Atrisiniet `supportsAudio`, izmantojot `getResolvedModelCapabilities()`. Priekšroka ir tiešiem
   nodrošinātāju reģistra metadatiem, pēc tam statiskajiem modeļa metadatiem un tad sinhronizētajam
   `modalities_input`. Deklarēts ievades saraksts bez `audio` nozīmē `false`; ja nav
   iespēju apliecinošu datu, vērtība paliek `null`. Gan `false`, gan `null` aktivizē
   konservatīvo tiltu, savukārt `true` to apiet.
2. Atrisiniet `modalityBridgeAudio*` iestatījumus un no katra ziņojuma iegūstiet savienojamas augstākā līmeņa
   audio daļas, izmantojot kopīgo `detectMediaParts()`
   detektoru. Atbalstītie datu pārraides formāti ir OpenAI `input_audio`, `audio_url` un
   `source.media_type: "audio/*"`. Ligzdots audio tiek noteikts maršrutēšanai, bet
   savienošanas ceļš to nenoņem. Darba apjomu ierobežo `modalityBridgeAudioMaxClips`;
   turpmākās daļas paliek nemainītas.
3. Izmantojiet konfigurētu `provider/model` vai ļaujiet `selectAudioBridgeModel()` pārskatīt
   `AUDIO_TRANSCRIPTION_PROVIDERS` stabilā kataloga secībā un atlasīt pirmo
   modeli ar izmantojamu aktīva nodrošinātāja akreditācijas informāciju.
4. `callAudioTranscription()` pārveido base64/data-URI audio par vairākdaļu
   `file` vai lejupielādē attālu `audio_url`, izmantojot tikai publiskiem resursiem paredzētu izejošo savienojumu
   aizsargmehānismu ar DNS piesaisti un 25 MB ierobežojumu. Pēc tam tas ar POST nosūta failu un atlasīto
   modeli lokālajai `/v1/audio/transcriptions` pašcilpai, autentificējoties ar
   `resolveSelfLoopBearer()`. Esošais transkripcijas maršruts veic parasto
   akreditācijas informācijas meklēšanu, atdzišanas perioda/ātruma ierobežojuma apstrādi un nosūtīšanu nodrošinātājam.
5. Sekmīgi izsaukumi aizstāj savas daļas ar `[Audio N]: <transcript>`. Izsaukumi
   tiek izpildīti ar `Promise.allSettled`: atsevišķas kļūmes gadījumā sākotnējā
   audio daļa tiek saglabāta (#4012 līgums). Ja visi izsaukumi neizdodas un ir pierādīts, ka mērķim
   `supportsAudio === false`, daļas kļūst par
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 līgums). Nezināmam
   mērķim (`null`) pilnībā neveiksmīgs rezultāts paliek nemainīts. Pierādīts
   tikai teksta mērķis bez izmantojamas STT akreditācijas informācijas saņem to pašu skaidro
   aizstājēju bez tīkla izsaukuma veikšanas.

Sekmīgi transkripti izmanto visa procesa Modality Bridge LRU/TTL kešatmiņu.
Atslēga apvieno audio atsauci, stabilo `audio-transcription` operācijas
etiķeti un atlasīto STT modeli; kļūmes nekad netiek saglabātas kešatmiņā. Audio mēģinājumi atjaunina
kopīgos `bridged`, `cacheHits`, `failures` un `lastUsedAt` skaitītājus.
Pārveidotajās atbildēs ir
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; nemainīti
pieprasījumi nesaņem Audio Bridge segmentu.

Izpildlaika iestatījumi tiek glabāti DB un validēti ar Zod:

| Atslēga                       | Noklusējums | Diapazons              |
| ----------------------------- | ----------- | ---------------------- |
| `modalityBridgeAudioEnabled`  | `true`      | —                      |
| `modalityBridgeAudioModel`    | `""`        | Automātiski vai STT ID |
| `modalityBridgeAudioTimeout`  | `60000`     | 1000–300000            |
| `modalityBridgeAudioMaxClips` | `3`         | 1–10                   |

Koplietojamo kešatmiņu joprojām kontrolē `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` un `modalityBridgeCacheMaxEntries`.

### Video tilts (`videoBridge.ts`, `videoBridgePipeline.ts`)

Pārtver augstākā līmeņa video daļas Chat Completions `messages` un Responses
API `input`, pirms tiek izsaukts mērķis bez zināma vietējā video atbalsta.
Atbalstītie formāti ir `input_video`, `video_url`, `video_source`, HTTPS URL
un `data:video/*;base64,...` datu URI. Vienkārši failu nosaukumi tekstā netiek
uzskatīti par video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) pārvalda pieprasījuma
caurskatīšanu, iespēju/politikas pārbaudi, katra pieprasījuma apkopošanu un
atbildes derīgo slodzi. Darbs ar katru video — iegūšana, visa rezultāta
kešatmiņa, kadru secības aprakstīšana (apvienojot arī jebkuru izsaucēja norādīto
audio transkripciju), kā arī katra mēģinājuma metrika, pārtraukšana un tīrīšana —
ir paslēpts aiz `processVideoPart` funkcijā `videoBridgePipeline.ts`, kas
`preCall` ciklā tiek izsaukta vienu reizi katrai video daļai. Šis modulis
definē arī skaidrās portu robežas `VideoMediaBrokerPort` (baitu iegūšana un
atlasīto kadru izvilkšana), `VideoAudioTranscriptionPort` (izsaucēja norādītās
audio transkripcijas apvienošana ar atlasīto kadru parakstiem) un
`VideoDrilldownPort` (kadru detalizētās izpētes pastāvīgās glabāšanas robeža;
vēl nav savienota ar `processVideoPart` — pašlaik detalizētās izpētes ierakstus
veido tikai atsevišķais `/api/modality-bridge/video/drilldown` maršruts).

Publiskais `/v1` pieprasījuma ceļš nekad neimportē un neizsauc apakšprocesu.
Attālie video tiek lejupielādēti ar 50 MiB ierobežojumu; iekļautajiem base64
video ir konservatīvs 36 MiB dekodētā satura ierobežojums katram video, lai
modeļa, ziņojumu un ietvarstruktūras aploksne varētu palikt publiskā JSON
pieprasījuma pieņemšanas 50 MiB ierobežojumā. Iekļautā satura garums un
dekodētā izmēra aplēses tiek pārbaudītas pirms atmiņas piešķiršanas. HTTPS ir
obligāts gan sākotnējam attālajam URL, gan katrai pāradresācijai, izmantojot
esošo tikai publiskām adresēm paredzēto izejošo savienojumu aizsardzību ar DNS
piesaisti. Pēc tam baiti šķērso precīzo iekšējo
`POST /api/modality-bridge/video/extract` starpnieka robežu. Šis maršruts ir gan
`LOCAL_ONLY`, gan `SPAWN_CAPABLE`, pieņem tikai katram procesam autentificētu,
uzticamu lokālās atgriezeniskās saites pieprasījumu un nekad nepieņem URL,
failu sistēmas ceļu, izpildāmo failu vai argumentu sarakstu. API pamatteksta
izmēra apstrādes konveijers un apstrādātāja inkrementālais pamatteksta lasītājs
neatkarīgi viens no otra ievieš 50 MiB starpnieka ievades ierobežojumu. Tā
ierobežotā rinda vienlaikus izpilda vienu izvilkšanas uzdevumu, pieļauj četrus
gaidošus uzdevumus un ierobežo gaidošo ievadi līdz 100 MiB.

Starpnieka iekšienē `ffprobe` nolasa privātu lokālu failu; fiksētais formātu
atļauju saraksts neietver atskaņošanas sarakstu un manifestu formātus.
Atļautajiem MOV saimes konteineriem ārējās MOV datu atsauces pēc noklusējuma
paliek atspējotas, un fiksētā komanda tās neiespējo. Gan `ffprobe`, gan `ffmpeg`
izmanto tikai `file` protokola atļauju sarakstu, vienu pavedienu, fiksētus
argumentu masīvus, neizmanto čaulu, un izpildāmie faili tiek atrasti, izmantojot
`PATH`. Pievienoto attēlu vāku straumes nav atskaņojamas kandidātes. Visām
atskaņojamajām straumēm jāatbilst ierobežojumiem, un pirms deterministiskās
atkāpes uz straumi ar mazāko indeksu priekšroka tiek dota skaidri norādītai
noklusējuma straumei. Video ilgums ir ierobežots līdz 600 sekundēm, katras
dimensijas izmērs — līdz 8,192 pikseļiem, bet avota kopējais izmērs — līdz
33,554,432 pikseļiem. FFmpeg atlasa 1–16 viduspunkta JPEG kadrus, samazina
garāko malu līdz ne vairāk kā 1,024 pikseļiem, nepalielinot mazākus ievades
attēlus, un nekad nesaņem URL. Pēc noklusējuma atlase ir `uniform`. Neobligātās
`scene_aware` un eksperimentālā `segment_aware` politikas veic vienu papildu
fiksētu FFmpeg izpildi jau validētajā lokālajā straumē, atlasa ierobežotas
`showinfo` ainu laikzīmes un detektora kļūmes, taimauta, nepareizi veidotas
izvades vai tukšas kandidātu kopas gadījumā deterministiski atkāpjas uz tiem
pašiem vienmērīgajiem viduspunktiem. Segmentus ņemošais režīms viduspunkta
paraugus sadala proporcionāli validētajiem ainu intervāliem; uz segmentiem
balstītie pierādījumi un atkāpšanās darbība ir detalizēti aprakstīti tālāk.
Stingrais 16 kadru ierobežojums katrā politikā tiek piemērots pēc atlases. Ja
ainas ņemošam pieprasījumam ir tikai viena kadra budžets, tas izmanto aktīvā
pilnā video vai fokusa loga vienmērīgo viduspunktu un ziņo
`policyEffective: uniform`: viens atlasīts ainas kadrs nevar saglabāt abus
laika diapazona galus. Izsaucējs pēc izvēles var norādīt galīgu fokusa logu
(`start`/`end` sekundēs); robežas tiek ierobežotas atbilstoši multivides
ilgumam, apgriezti vai negalīgi logi tiek noraidīti, un visas atlases politikas
tiek izpildītas tikai normalizētajā intervālā. Iegūtais logs tiek iekļauts
atlases metadatos un neuzticamajā apraksta prefiksā, lai pakārtotie modeļi
varētu atšķirt fokusētu fragmentu no pilnās laika skalas.

Semantiskais parakstu fokuss ir atsevišķs, skaidri norādāms iestatījums.
Noklusējuma `full` analīzes režīms saglabā esošo kadru uzvedni un nekad nepārsūta
pieprasījuma tekstu parakstu modelim. Režīmā `focused` tilts nolasa tikai pēdējo
netukšo lietotāja izveidoto `text`/`input_text` no tā paša Chat vai Responses
konteinera, normalizē to uz NFC, sakļauj vadības rakstzīmes un atstarpes un
ierobežo to līdz 500 Unicode koda punktiem. Tukšs rezultāts izraisa atkāpšanos
uz precīzo `full` uzvedni. Izmantojama norāde tiek serializēta kā JSON īpašā
neuzticamā lietotāja konteksta blokā un drīkst tikai noteikt novērojamo detaļu
prioritāti; tā nevar ignorēt atsevišķo brīdinājumu nesekot multivides saturā
redzamiem vai dzirdamiem norādījumiem. Tekstuālais fokuss nekad neizsecina
`start`/`end` un nemaina temporālo atlases mehānismu.

#### FU-07 strukturālie segmentu pierādījumi

`segment_aware` izmanto vienu ierobežotu priekšanalīzes gājienu jau validētajai
lokālajai video straumei. Fiksētā filtru ķēde vispirms mērogo video līdz ne vairāk
kā 320 pikseļu platumam, nosaka ainu maiņas un sastingušus intervālus un pēc tam
ņem paraugus ar ātrumu 1 kadrs sekundē, lai noteiktu izplūdumu, vidējo spilgtumu,
kā arī telpisko un laika informāciju. Gājiens ir ierobežots līdz 600
strukturālajiem paraugiem, vienam FFmpeg/filtru pavedienam, tam pašam tikai
`file` protokolam un atļauto konteineru sarakstiem, 1 MiB procesa izvades
ierobežojumam un ne vairāk kā 30 sekundēm starpnieka kopīgā
pārtraukšanas/termiņa ietvaros. Tas nekad nepieņem komandu, filtru, ceļu vai URL
no pieprasījuma.

Strukturālās vērtības ir deterministiski paraugu ņemšanas pierādījumi, nevis
video semantiska izpratne. Tās nenosaka subjektus, darbības, parakstus, runu vai
lietotāja nolūku. Ainu un sastinguma robežas veido segmentus; sastinguma
pārklājums, izplūdums, ekspozīcija, telpiskā detalizācija un laika izmaiņas
ietekmē tikai to, kā tiek sadalīts esošais 1–16 kadru budžets. Pilnībā sastingušam
segmentam ir noteikts ne vairāk kā viens kadrs, savukārt nesastingušie segmenti
konkurē par atlikušo budžetu. Ja robežu ir vairāk nekā kadru, tiek saglabāts
vienmērīgs laika skalas pārklājums, lai strauji agrīnie montāžas griezumi
nevarētu paslēpt garu beigu segmentu. Ainu robežas, kas atrodas 1 sekundes
analīzes izšķirtspējas ietvaros no sastinguma robežas, tiek apvienotas.

Trūkstoši filtri, nepareizi veidoti/tukši pierādījumi, detektora kļūda vai
ierobežotās priekšanalīzes noildze izraisa atkāpšanos tieši uz vienmērīgo
viduspunktu politiku. Izsaucēja veikta pārtraukšana vai starpnieka termiņa
iestāšanās neizraisa šādu atkāpšanos: tā pārtrauc izpildē esošo apakšprocesu,
novērš turpmāku kadru izgūšanu, un privātais pagaidu direktoriju koks tiek
noņemts blokā `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` ģenerē deterministiskas reālas FFmpeg
testa datnes, lai novērtētu parakstu izsaukumu ietaupījumu pēc dublikātu
noņemšanas, kadru budžeta sadalījumu blīvas kustības gadījumā,
izplūduma/ekspozīcijas/SI-TI pierādījumus, straujus montāžas griezumus ar garu
beigu daļu un pakāpeniskas pārejas kļūdaini pozitīvos rezultātus. Tas reģistrē
priekšanalīzes faktisko izpildes laiku un, ja ir pieejams `/usr/bin/time`, arī
apakšprocesa CPU laiku un maksimālo RSS. Tā kvalitātes pārbaudes ir tikai
strukturālas etalonpārbaudes. Reālā parakstu modeļa kvalitātes statuss paliek
`HOLD`, jo šai testēšanas sistēmai nav autorizēta galapunkta vai fiksēta
vērtētāja. Arī monetāro ietaupījumu statuss paliek `HOLD`, ja vien
`--caption-cost-per-call-usd` nenorāda skaidru pozitīvu vienas izsaukšanas
izmaksu aplēsi; skripts nekad neizdomā nevienu no šiem rezultātiem.

Katrs kadrs ir ierobežots līdz 4 MiB, visi neapstrādātie kadri kopā — līdz
23 MiB, bet serializētā starpnieka atbilde — līdz 32 MiB. Privātais pagaidu
direktorijs tiek noņemts blokā `finally`. OmniRoute neietver FFmpeg un nepieņem
pielāgotu izpildāmā faila ceļu. Pirms parakstu ģenerēšanas tilts veic
konservatīvu vizuālo dublikātu noņemšanas gājienu: katrs JPEG tiek samazināts
līdz 16×16 pelēktoņu buferim un salīdzināts tikai ar pēdējo saglabāto kadru. Ja
pieprasītais parakstu budžets pārsniedz vienu kadru, izgūšana nodrošina
ierobežotu kandidātu kopu, kas nepārsniedz divkāršu budžetu un nekad nav lielāka
par 16 kadriem. Pieprasītais ierobežojums tiek piemērots tikai pēc dublikātu
noņemšanas; ja budžets ir vismaz divi kadri, galīgās retināšanas laikā tiek
saglabāts pirmais un pēdējais atlasītais kandidāts. Versijotā
`grayscale-16x16-mean-cells-v2` politika izmanto lielāko vērtību no vidējās
spilgtuma starpības un to sīktēla šūnu īpatsvara, kuru normalizētā starpība ir
vismaz 0.05. Dublikāta slieksnis ir konstante 0.04, kas izvēlēta
prognozējamības dēļ, nevis padarīta pieejama kā izpildlaika iestatījums. Šis
sekundārais augsta kontrasta signāls saglabā nelielas kustības un redzamā teksta
izmaiņas, kuras var paslēpt salīdzinājums, kas balstīts tikai uz vidējo vērtību.
Salīdzinātāja vai dekodētāja kļūdu gadījumā sistēma turpina darbu, saglabājot
pārklājumu. Izvades metadatos atsevišķi tiek norādīti izgūtie kandidāti,
veiksmīgi izmantotie kadri un atmestie vizuālie dublikāti.

Skaidri atzīmēta video daļa var pieprasīt ar laikspiedoliem apzīmētu
kontaktlapu. Tilts izveido JPEG režģi ar ne vairāk kā 4 kolonnām un 16 kadriem.
Katrā 512 pikseļu šūnā avota laikspiedols tiek iededzināts augsta kontrasta
joslā apakšdaļā, un tie paši laikspiedoli paliek teksta metadatos turpmākai
saistīšanai un auditēšanai. Pilnā JPEG faila ierobežojums joprojām ir 32 MiB.
Ja `sharp` nevar dekodēt vai izveidot režģi, tilts atkāpjas uz atsevišķajiem
JPEG kadriem; klienta veikta pārtraukšana joprojām tiek izplatīta caur
kontaktlapas operāciju.

Produkcijas ieviešanas pierādījumi ir apzināti nodalīti no sintētiskā
kompozīcijas mikroetalonmērījuma. `scripts/perf/video-bridge-contact-sheet-eval.ts`
definē pēc shēmas versijotu A/B testēšanas sistēmu reāliem ar OpenAI saderīgiem
redzes modeļiem. Tā mēra pakalpojuma sniedzēja uzrādīto marķieru skaitu, pilna
cikla faktisko latentumu (tostarp kontaktlapas izveidi), modeļa izsaukumu skaitu
un manifestā definēto faktu saglabāšanu. Neapstrādātās modeļa atbildes netiek
ierakstītas pārskatā; tiek saglabāti tikai SHA-256 kontrolsummu īssavilkumi un
atbilstošo faktu ID. Testēšanas sistēma neveic tīkla vai maksas modeļa izsaukumu,
ja vien nav nodots `--execute-real` un nav konfigurēti `--model`,
`OMNIROUTE_BASE_URL` un `OMNIROUTE_API_KEY`. Bez šādas skaidri pieprasītas
reālas izpildes tās mašīnlasāmā sprieduma statuss paliek `HOLD`; sintētiski
lietderīgās slodzes vai izsaukumu skaita mērījumi vien nav produkcijas
ieviešanas pierādījumi.

Izsaucēji atbalstītai video daļai var pievienot neobligātu `transcript.cues`
masīvu, ja tiem jau ir sinhronizēts teksts. Katram fragmentam jāietver `text`,
galīga `start`/`end` vērtību intervāla robeža izpētītā ilguma ietvaros un
atļautajā sarakstā iekļauts `source` (`client`, `embedded` vai
`audio-bridge`); `confidence` noklusējuma vērtība ir `1`, un tai jāpaliek
diapazonā no `0` līdz `1`. Pilnīgi identiski fragmenti tiek apvienoti.
OmniRoute nekad nesāk transkribēšanu, pamatojoties uz šiem metadatiem:
validētie fragmenti tiek kopēti aprakstītajā rezultātā kopā ar avotu,
pārliecības līmeni un intervālu un tiek attēloti kā neuzticami novērojumi līdzās
kadru parakstiem. Nederīgs, ārpus diapazona esošs teksts vai teksts bez
izcelsmes informācijas tiek noraidīts, nevis sajaukts ar parakstu straumi.
Lauku `source` pašlaik deklarē izsaucējs, un serveris to nepārbauda: OmniRoute
nodrošina, ka vērtība ir viena no trim atļautajām virknēm, taču vēl
kriptogrāfiski neapstiprina, ka `embedded` vai `audio-bridge` etiķete patiešām
radusies servera pārvaldītā izgūšanas procesā. Līdz šādas pārbaudes ieviešanai
uzskatiet `source` par neuzticamu norādi; nebalstiet uz to autorizācijas
lēmumus.

Pieredzējis izsaucējs tam pašam videoklipam var nodrošināt jau autorizētu `audioTranscript` celiņu. Apvienošanas robežslānis izpilda vizuālos un audio novērojumus ar vienotu izpildes termiņu un pārtraukšanas signālu, sakārto tos kopīgā laika skalā, apvieno pilnīgi identiskus dublikātus un ziņo daļēju rezultātu, ja izdodas tikai viena puse. Nederīgs `audioTranscript` tiek pazemināts līdz šādam daļējam rezultātam — vizuālais apraksts tiek saglabāts, bet audio zars reģistrē sanitizētu kļūmes kodu — tā vietā, lai viss videoklips tiktu apstrādāts kā neveiksmīgs. Katra zara pieejamība, daļēja rezultāta karodziņš un sanitizētie kļūmju kodi tiek saglabāti aprakstītajā rezultātā, aizsargmehānismu metadatos (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), rezultātu kešatmiņas metadatos un tilta apvienošanas skaitītājos. Noklusējuma Video Bridge ceļš neizsauc runas pārveidošanu tekstā un nelejupielādē otru multivides kopiju; bez šī skaidri norādītā celiņa tas turpina apstrādāt tikai video.

**Transkripcijas saglabāšana (#12150 P1).** Tas tiek lietots automātiski ikreiz, kad Video Bridge (kas pats ir jāiespējo) atveido transkripcijas norādi — atsevišķa saglabāšanas karodziņa nav. Kad pieprasījums atveido jebkādu transkripcijas norādi (izsaucēja deklarētu `transcript` vai apvienotu `audioTranscript`), aizsargmehānisms to atzīmē kā `videoBridgeObserved` un izveido rediģētu video apraksta ēnkopiju — identisku atveidojumu, kurā katras norādes brīvā teksta saturs tiek aizstāts ar `[redacted-video-transcript]`; tā tiek veidota, aizstājot strukturēto norādes lauku pirms virknes izveides (nekad neparsējot saplacināto tekstu, tāpēc nekāds norādes saturs — nedz ļaunprātīgs, nedz parasts, tostarp saturs ar `]`, piemēram, `[inaudible]`/`[music]` — nevar saglabāties). Saglabātā izsaukumu žurnāla pieprasījuma pamattekstā katra no video atvasinātā teksta daļa tiek aizstāta ar šo rediģēto ēnkopiju, izmantojot satura vienādības pārbaudi; `fullText` enkurs tiek atkārtoti nolasīts no pabeigtās pirmsizsaukuma aizsargmehānisma slodzes, tāpēc atbilstības noteikšana joprojām izdodas pēc tam, kad vēlākie ķēdes aizsargmehānismi (personas datu un akreditācijas datu maskētāji ar prioritātēm 10/95) pārraksta apraksta tekstu uz vietas, kā arī pēc tam, kad sistēmas uzvednes, nodošanas vai atmiņas ievade pārveido ziņojumu masīvu. Modelim augšup nosūtītais pamatteksts netiek mainīts. Novērots pieprasījums arī nepapildina pastāvīgo Memory (tiek izlaista gan no pieprasījuma, gan no atbildes atvasināta izgūšana), tāpēc paša modeļa atbilde nevar atkārtoti ierakstīt transkripcijas tekstu Memory.

**Neapstrādāti video lauki (#12430).** Kad tilts ir iespējots un vietējais video atbalsts nav zināms vai nav pieejams, definēti `transcript`/`audioTranscript` lauki arī aktivizē `videoBridgeObserved`, pat pēc apraksta izveides kļūmes vai `maxVideos` ierobežojuma sasniegšanas. `null` un tukšas virknes tiek ņemtas vērā; neesoši lauki un metadati, kas nav saistīti ar video, netiek ņemti vērā. Saglabātajās kopijās šie lauki tiek rediģēti vai arī pieprasījums tiek izlaists, un kešatmiņas/Memory tiek apietas. Pakalpojumu sniedzēja slodze paliek nemainīta.

Papildu saglabātās kopijas izmanto to pašu novērotā pieprasījuma signālu. Neapstrādātais pirms aizsargmehānismiem uzņemtais klienta pieprasījuma momentuzņēmums, atmiņā esošais gaidošais pieprasījums un agrīni noraidītā pieprasījuma žurnāls strukturāli aizstāj transkripcijas laukus video daļās; konveijera posmu un konteksta nodošanas sintezētās virkņu uzvednes tiek rediģētas saglabātā pieprasījuma pamatteksta izvadē. Saglabātais `video_content_removed` marķieris liek `previous_response_id` turpinājumam droši beigties ar kļūmi, nevis rekonstruēt tekstu, kas tika apzināti atmests. Ja novērots pieprasījums pirms reģistrēšanas zaudē katrai daļai paredzēto rediģēšanas ēnkopiju vai kaut viena no vairākām video ēnkopijām pēc vēlākām pieprasījuma izmaiņām vairs neatbilst, saglabātais pieprasījuma pamatteksts tiek pilnībā izlaists, nevis tiek saglabāta tikai daļēji rediģēta transkripcija.

Novērota pieprasījuma gadījumā modeļa atbilde var citēt jebkuru transkripcijas daļu bez strukturētas norādes robežas. Tāpēc tās saglabātā izsaukumu žurnāla `responseBody` tiek aizstāts ar izlaiduma marķieri; detalizētais konveijera artefakts (kas var ietvert augšupstraumes/klienta pamattekstus un straumes fragmentus) netiek saglabāts. Semantiskās, idempotences un spriešanas atkārtotas izpildes kešatmiņas šim pieprasījumam apiet lasīšanu un rakstīšanu. Pakalpojumu sniedzēja pieprasījums un klientam redzamā atbilde paliek nemainīti. Agrīnie savienojuma uzturēšanas baiti tiek iztukšoti no pagaidu bufera, kad detalizētais artefakts tiek izlaists. Kiro brīdinājums par nepareizi veidotu EventStream ziņo tikai slodzes baitu skaitu, nekad ne tās saturu vai JSON parsētāja neapstrādāto kļūdu.
Tas neapgalvo, ka ir auditēta katra nesaistīta pakalpojumu sniedzēja/spraudņa diagnostika; plašāka saglabāto izvažu pārbaude tiek izsekota #11658.

Iekšējais `/api/modality-bridge/video/drilldown` dzīves cikls ir atsevišķs, ar lokālās atgriezeniskās cilpas/tokena autentifikāciju aizsargāts kešatmiņas substrāts. Katrai darbībai ir nepieciešams arī kanonisks, necaurspīdīgs subjekta ID. Pirms tiek iespējots produkcijas izsaucējs, tam šis ID ir jāatvasina no autentificētā nomnieka un tas nekad nedrīkst pārsūtīt klienta izvēlētu vērtību. Kešatmiņas atslēgas piesaista šo subjektu kanoniskajiem sesijas un video atsauces ID, glabā tikai no tiem ar SHA-256 atvasinātās atslēgas un ierobežo gan lasīšanu, gan dzēšanu ar to pašu subjektu. Kešatmiņa katrā ierakstā glabā ne vairāk kā 16 atvasinātus JPEG kadrus, dzēš tos pēc desmit minūtēm un atbalsta ierobežotu `start`/`end` lasīšanu vai nepārprotamu sesijas dzēšanu.

Katram subjektam ir noteikts 16 ierakstu un 64 MiB kanonisko JPEG datu ierobežojums. Šie ierobežojumi nav atkarīgi no globālā 64 ierakstu/256 MiB maksimālā apjoma: subjekta kvotas pārsniegšanas gadījumā pirms globālās LRU izstumšanas apsvēršanas tiek izstumti tikai šī subjekta visilgāk neizmantotie ieraksti. Kešatmiņas darbības laikā ieraksti ar beigušos derīguma termiņu tiek izņemti gan no subjekta, gan globālās uzskaites, savukārt atcelšanas un validācijas kļūmes gadījumā daļēja aizstāšana netiek fiksēta.

Kešatmiņa noraida nekanonisku Base64, pārmērīgu aizpildījumu, multividi, kas nav JPEG formātā, bojātus vai
aprautus JPEG failus un JPEG failus, kas ierobežotas pilna attēla `sharp`
dekodēšanas laikā rada brīdinājumu. Katrs pieņemtais attēls tiek atkārtoti kodēts kā kanonisks JPEG, platums un augstums
tiek iegūts no dekodētajiem baitiem, nevis uzticoties izsaucēja laukiem, un visi beigās pievienotie
poliglota baiti tiek atmesti, nevis saglabāti. Abās kvotās tiek ieskaitīts tikai ierobežotais kanoniskais saspiestais buferis.
JSON pārsūtīšanas ierobežojums ietver Base64 papildu apjomu 32 MiB
dekodētās ievades maksimālajam apjomam. Katrs
saglabātais atvasinājums reģistrē tā validēto JPEG formātu/izšķirtspēju, iztveršanas politiku,
atvasinājuma versiju, izveides laiku, servera aprēķināto satura jaucējvērtību un sajaukto vecākelementa
atsauci kopā ar uzticamā izsaucēja norādīto vecākelementa satura jaucējvērtību. Atcelšana tiek pārbaudīta
starp asinhronajām dekodēšanas/jaucējvērtības aprēķināšanas fāzēm pirms atomārās kešatmiņas izmaiņu apstiprināšanas.

Šī izstrādes daļa vēl nesavieno produkcijas producentu ar maršrutu un nenodrošina
vairāku izšķirtspēju variantu atlasi. Tādēļ caurspīdīgais Video Bridge pieprasījuma
ceļš nerada papildu darbu, savukārt nomniekam piesaistīta galvenās entītijas atvasināšana un
pilns FU-08 vairāku izšķirtspēju dzīves cikls joprojām ir skaidri norādīts kā turpmākais darbs,
nevis dokumentēts kā pabeigta funkcionalitāte.

Kadriem secīgi tiek izveidoti apraksti, izmantojot konfigurēto Video modeli. Tukša
Video pārdefinēšanas vērtība manto Vision iestatījumu; ja abi ir tukši, Vision
automātiskais maršrutētājs atlasa faktiski izmantojamo modeli ar attēlu apstrādes iespējām. Veiksmīgi izveidotie apraksti
aizstāj sākotnējo daļu ar stabilu `[Video description:` prefiksu, kas arī
atzīmē tekstu kā neuzticamu, no multivides atvasinātu novērojumu un norāda pakārtotajiem
modeļiem nesekot multividē atrastajām instrukcijām. Kadru aprakstu kešatmiņas atslēgas
ietver JPEG baitus, uzvedni, laikspiedolu un faktiski izmantojamo modeli; kešatmiņā tiek saglabāti tikai veiksmīgi
apraksti. Kešatmiņas ieraksti saglabā faktisko veiksmīgo producenta modeli,
tostarp atkāpšanās modeli; tilts ziņo `mixed`, ja dažādus kadrus
izveidojuši dažādi modeļi. Kešatmiņas trāpījums atkārtoti izmanto šo producenta identitāti,
nevis pārdēvē to atbilstoši pieprasītajam maršrutēšanas plānam. Visa video rezultātu
kešatmiņas atslēgu veido katra ievade, kas maina izvadi — uzvedne, faktiski izmantojamais
modelis, iztveršanas politika, kadru skaits, semantiskās analīzes režīms, normalizētā
fokusa padoma SHA-256 digitālnospiedums, fokusa logs, `transcript`,
`audioTranscript` un kontaktlapas karodziņš — tādēļ jebkuras šīs
dimensijas maiņa izraisa kešatmiņas netrāpījumu, nevis novecojuša ieraksta atkārtotu izmantošanu. Vizuālās deduplikācijas politikas
versija, slieksnis un ierobežotais kandidātkadru skaits arī ir skaidri iekļauti
rezultātu kešatmiņas atslēgā un metadatos; tādēļ politikas maiņa nevar atkārtoti izmantot novecojušu
visa video aprakstu. Rezultātu kešatmiņas v4 metadati saglabā režīmu un
digitālnospiedumu, bet nekad neapstrādāto lietotāja uzdevumu. Aizsargmehānisma metadati norāda gan
pieprasīto, gan faktiski izmantoto analīzes režīmu; pieprasītais `focused` režīms bez
izmantojama lietotāja teksta tiek uzrādīts kā faktiski `full`.

Aizsargmehānisms izgūst katru atbalstīto video daļu, bet apraksta ne vairāk par
`modalityBridgeVideoMaxVideos`. Mērķim, par kuru pierādīts, ka tam ir
`supportsVideo === false`, neveiksmīgi apstrādāti un ierobežojumu pārsniedzoši video kļūst par skaidriem, drošiem
teksta marķieriem, lai neviens neapstrādāts video netiktu saglabāts. Ja iespēja nav zināma, šīs daļas
paliek nemainītas. Mērķi ar `supportsVideo === true` apiet tiltu.
Klienta pieprasījuma pārtraukšanas signāls tiek izplatīts caur lejupielādi, brokera rindu,
apakšprocesiem un aprakstu izveides izsaukumiem; pārtraukšana aptur apstrādi starp video un nekad kļūmes gadījumā
nepieļauj neapstrādātas multivides izmantošanu.

Izpildlaika iestatījumi tiek glabāti DB un validēti ar Zod:

| Atslēga                             | Noklusējums | Diapazons / darbība                                                                                         |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Neobligāts izpildlaikā, jāpiesaka dalība                                                                    |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` saglabā vispārīgus aprakstus; `focused` izmanto ierobežotu, neuzticamu jaunāko lietotāja kontekstu   |
| `modalityBridgeVideoModel`          | `""`        | Manto Vision Bridge modeli                                                                                  |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                        |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` vai proporcionāls `segment_aware`; detektora kļūmes gadījumā atkāpjas uz `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                         |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                              |

Mantotās saglabātās Video noildzes vērtības, kas pārsniedz 120 sekundes, tiek ierobežotas līdz
brokera termiņam; jauni iestatījumu ieraksti, kas pārsniedz šo ierobežojumu, tiek noraidīti.
`GET /api/modality-bridge/video/runtime` pirms autentifikācijas vai izpildlaika pārbaudes
pieprasa uzticamu, apzīmogotu lokālās atgriezeniskās saites atrašanās vietu un pēc tam pieprasa pārvaldības
autorizāciju. Tas atgriež tikai `available`, attīrītas FFmpeg/ffprobe versijas un fiksētu
iemeslu, ja izpildlaiks nav pieejams. Iekšējais izgūšanas galapunkts nav
publiska augšupielādes API: rindas pārslodze atgriež `503` kopā ar `Retry-After`, izsaucēja
atvienošanās atgriež `499`, un fiksētā brokera termiņa pārsniegšana atgriež `504`. Konvertētās atbildes centrālajai
`x-omniroute-modality-bridge` galvenei pievieno
`video->text;model=<visionModel>;parts=<videos>`, nenoņemot Vision vai Audio segmentus.

### PII maskētājs (`piiMasker.ts`)

Darbojas **abos** posmos.

- **`preCall`** klonē lietderīgo slodzi, apstaigā `system`, `messages`, `input` un
  `prompt` (tostarp vienkāršas virknes elementus) un virknes `content`/`text`
  laukiem piemēro `processPII()` (no `@/shared/utils/inputSanitizer`). Ja
  `PII_REDACTION_ENABLED=true`, konstatētie PII tiek aizklāti izejošajā
  lietderīgajā slodzē. Tas nav atkarīgs no `INPUT_SANITIZER_MODE` (kas kontrolē
  tikai uzvedņu ievadīšanas politiku). Ja aizklāšana ir izslēgta, izsaukums
  reģistrē konstatēšanas gadījumu skaitu, nepārrakstot saturu.
- **`postCall`** veic atbildes dziļo klonēšanu, palaiž `sanitizePIIResponse()`,
  kā arī Responses API formas maskētāju (`maskResponsesOutput` — aptver
  `output_text` un `output[].content[].text`). Ja tiek veikta jebkāda aizklāšana,
  modificētā atbilde aizstāj sākotnējo.

Aizsargmehānisms nekad nebloķē; tas tikai pievieno anotācijas (`meta.detections`,
`meta.redacted`) vai pārraksta saturu.

### Uzvedņu ievadīšana (`promptInjection.ts`)

Konstatē pretinieciskas struktūras lietotāja nodrošinātajā saturā un piemēro
konfigurēto politiku. Darbību nosaka vides mainīgie un konstruktora opcijas:

| Iestatījums          | Vides mainīgais                                                                                              | Noklusējums | Ietekme                                                                                                                                                                                           |
| -------------------- | ------------------------------------------------------------------------------------------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Iespējots            | `INPUT_SANITIZER_ENABLED`                                                                                    | `true`      | Ja `false`, aizsargmehānisms nekavējoties pārtrauc izpildi.                                                                                                                                       |
| Režīms               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                              | `warn`      | Ievadīšanas politika: `block`, `warn` vai `log`. (`redact` tiek pieņemts atpakaļsaderībai, taču **neizņem** ievadīšanas tekstu; pieprasījuma PII pārrakstīšanu kontrolē `PII_REDACTION_ENABLED`.) |
| Bloķēšanas slieksnis | `blockThreshold` opcija / `INPUT_SANITIZER_BLOCK_THRESHOLD` (aizstājvārds `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`      | Minimālais nopietnības līmenis, kas nepieciešams bloķēšanai. Ar noklusējuma iestatījumu vidējs līmenis tiek tikai novērots.                                                                       |

**Režīma prioritāte** (`getMode`): izsaucēja `options.mode` →
`INJECTION_GUARD_MODE` **DB funkcijas karodziņa pārrakstījums** (Dashboard →
Settings → Feature Flags) → `INJECTION_GUARD_MODE` vides mainīgais →
`INPUT_SANITIZER_MODE` vides mainīgais → `warn`. Tādējādi informācijas paneļa
pārrakstījums ir prioritārāks par vides mainīgajiem, tāpēc Feature Flags
lietotāja saskarne kontrolē darbojošos aizsargmehānismu reāllaikā (bez
restartēšanas). DB nolasīšana ir kļūmjdroša: ja rodas kļūda, aizsargmehānisms
atgriežas pie uz vidi balstītas darbības, un, ja pārrakstījums nav iestatīts,
darbība ir identiska risināšanai tikai pēc vides mainīgajiem.

Konstatēšanas avoti:

1. `sanitizeRequest()` no `@/shared/utils/inputSanitizer` (kopīga detektoru
   kopa, kas tiek izmantota arī citviet konveijerā).
2. Iebūvētie `DEFAULT_GUARD_PATTERNS` (pašlaik `system_override_inline` un
   `markdown_system_block`, abiem nopietnības līmenis ir `high`).
3. Neobligāti `customPatterns`, kas nodoti ar konstruktora opcijām (virknes,
   regulārās izteiksmes vai `{ name, pattern, severity }` ieraksti).

Ja `mode === "block"` **un** vismaz viens konstatējums sasniedz nopietnības
slieksni, `preCall` atgriež `{ block: true, message: "Pieprasījums noraidīts:
konstatēts aizdomīgs saturs" }`. Režīmos `warn`/`log` aizsargmehānisms reģistrē
notikumu žurnālā, bet atļauj izsaukumu. Kopīgais palīgs
`evaluatePromptInjection()` arī tiek eksportēts izsaucējiem, kuriem uzvednes
jānovērtē, neizmantojot reģistru.

**Skenēšanas ierobežojums (v3.8.20):** detektors pārbauda tikai apvienotā
uzvednes teksta **pirmos 16 KB** — `MAX_INJECTION_SCAN_BYTES = 16 * 1024`
(16 384 baiti) failā `src/shared/utils/inputSanitizer.ts`. Gan
`detectInjection()`, gan `evaluatePromptInjection()` pirms šablonu cikla
izpildes izmanto `slice(0, MAX_INJECTION_SCAN_BYTES)`. Ievadīšanas direktīvas
atrodas tuvu ievades sākumam, tāpēc tas ierobežo regulāro izteiksmju CPU/GC
patēriņu vairāku simtu KB lietderīgajām slodzēm, nemazinot konstatēšanas spēju
(sk. #3932, #4041).

### Akreditācijas datu maskētājs (`credentialMasker.ts`)

Darbojas **abos** posmos un noklusējuma ķēdē ir pēdējais (prioritāte `95`).
Aizklāj labi zināmus API atslēgu / slepeno pilnvaru rakstus izejošajā
lietderīgajā slodzē (ziņojumu saturā, rīku izsaukumu argumentos, rīku
rezultātos) **un** pakalpojuma sniedzēja atbildē, lai uzvednē ielīmēti
akreditācijas dati (vai rīka rezultātā atkārtoti izvadīti dati) nenoplūstu ne
augšupējam pakalpojuma sniedzējam, ne atpakaļ klientam.

- **Tikai pēc izvēles**, ievērojot tādu pašu principu kā PII rediģēšanai (saistīts ar stingro noteikumu Nr. 20):
  atspējots, ja vien `settings.credentialRedactionEnabled === true` **vai**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kad tas ir izslēgts, aizsargmehānisms neveic nekādas darbības —
  tas nekad nebloķē un neko nepārraksta.
- `redactCredentials()` apstaigā visu lietderīgās slodzes/atbildes koku (`walkValue()`,
  droši pret prototipa piesārņošanu un cikliem, izmantojot `WeakSet`) un aizstāj atbilstības ar
  vietturi `[REDACTED:<type>]`, klonējot tikai tos zarus, kas faktiski
  ir mainījušies.
- `CREDENTIAL_PATTERNS` aptver LLM nodrošinātāju atslēgas (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS pilnvaras (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maksājumu atslēgas (Stripe, Square), mākoņpakalpojumu
  atslēgas (AWS piekļuves atslēga, Twilio, SendGrid, Mailgun), privātās atslēgas / JWT,
  savienojumu virknes, kas satur akreditācijas datus (`mongodb://user:pass@...` utt.), un
  vispārīgu `Authorization`/`x-api-key`/`api-key`/`apikey` galvenes vērtības
  šablonu. Galvenēm līdzīgas atslēgas (`authorization`, `x-api-key`, `api-key`,
  `apikey`) tiek rediģētas strukturāli (tikai vērtība, saglabājot shēmas prefiksu, piemēram,
  `Bearer `/`Basic `), nevis izmantojot vispārīgo teksta regulāro izteiksmi.
- Aizsargmehānisms nekad nebloķē; tas tikai pārraksta (`modifiedPayload` /
  `modifiedResponse`) un pievieno anotācijas (`meta.credentialsRedacted`, `meta.count`).

Regresiju aizsardzība: `tests/unit/credential-masker-guardrail.test.ts`.

## Pamatkontrakts (`base.ts`)

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
  block?: boolean; // true pārtrauc ķēdes izpildi
  message?: string; // tiek parādīts bloķēšanas gadījumā
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall atgriež šo vērtību, lai pārrakstītu pieprasījumu
  modifiedResponse?: TValue; // postCall atgriež šo vērtību, lai pārrakstītu atbildi
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

Drošības mehānisms norāda, ka „nav izmaiņu”, atgriežot `void`, `{}` vai
`{ block: false }`. Atgriežot `modifiedPayload`/`modifiedResponse`, tiek aizstāta
vērtība, kas ķēdē tiek nodota tālāk nākamajiem drošības mehānismiem.
`signal?: AbortSignal` nodod izsaucēja dzīves ciklu drošības mehānismiem. Pieprasījuma pārtraukšana ir apzināts atvērtas kļūmes izņēmums: multivides tilti pārtrauc darbu un veic tīrīšanu, neatjaunojot sākotnējo multividi mērķim, par kuru ir zināms, ka tas to neatbalsta.

## Reģistrs (`registry.ts`)

Vienīgā `guardrailRegistry` instance nodrošina:

- `register(guardrail)` — pievieno drošības mehānismu (vai aizstāj to pēc normalizētā nosaukuma) un
  atkārtoti sakārto pēc `priority` augošā secībā.
- `clear()` / `list()` — administratīvas palīgfunkcijas.
- `runPreCallHooks(payload, context)` — secīgi izpilda aktīvos drošības mehānismus, nododot
  lietderīgo slodzi caur `modifiedPayload`, un apstājas pie pirmā `block: true`.
- `runPostCallHooks(response, context)` — tāda pati plūsma atbildes pusē.
- `resetGuardrailsForTests({ registerDefaults })` — notīra stāvokli un pēc izvēles
  atkārtoti reģistrē noklusējuma mehānismus tīrai testu izolācijai.

Abas izpildfunkcijas atgriež `{ blocked, payload|response, results, guardrail?, message? }`,
kur `results` ir `GuardrailExecutionResult` ierakstu masīvs, kas ietver katra
drošības mehānisma laukus `blocked`, `skipped`, `modified`, `error` un `meta`,
kas ir noderīgi trasēšanai.

### Drošības mehānismu atspējošana katram pieprasījumam

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` apkopo
drošības mehānismu nosaukumu sarakstu bez dublikātiem, kuri pašreizējam
pieprasījumam ir jāizlaiž. Avoti (visi neobligāti, visi tiek apvienoti):

- `apiKeyInfo.disabledGuardrails`
- Pieprasījuma ķermeņa `disabledGuardrails` (augšējā līmenī)
- Pieprasījuma ķermeņa `metadata.disabledGuardrails`
- Galvene `x-omniroute-disabled-guardrails` (vai mantotā
  `x-disabled-guardrails`)

Vērtības var būt virkņu masīvi vai ar komatiem atdalīta virkne; nosaukumi tiek
normalizēti uz mazo burtu kebab-case formātu (`pii_masker` → `pii-masker`). Rezultāts
caur `context.disabledGuardrails` tiek nodots reģistram, kas izlaiž
atbilstošos drošības mehānismus (`skipped: true` laukā `results`).

## Izpildes secība

Katram pieprasījumam, kas tiek apstrādāts caur `src/sse/handlers/chat.ts` un
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` izveido izlaižamo aizsargmehānismu sarakstu no API atslēgas, pieprasījuma pamatteksta
   un galvenēm.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` izpilda aizsargmehānismus augošā
   prioritātes secībā:
   - Atspējotie aizsargmehānismi tiek reģistrēti kā `skipped`.
   - Katra aizsargmehānisma `preCall` var pārrakstīt lietderīgo slodzi, izmantojot `modifiedPayload`.
   - Pirmais `block: true` priekšlaicīgi pārtrauc ķēdi, un apstrādātājs atgriež
     aizsargmehānisma noraidījuma atbildi.
3. (Iespējams, pārrakstītā) lietderīgā slodze tiek nodota kombinētajai maršrutēšanai un augšupstraumes
   nosūtīšanai.
4. Pēc atbildes izveides `guardrailRegistry.runPostCallHooks(...)`
   izpilda to pašu ķēdi atbildei. `block: true` šajā posmā atmet augšupstraumes
   atbildi.

Aizsargmehānismi, kas izmet kļūdu, tiek reģistrēti ar `error: <message>` un ierakstīti žurnālā, izmantojot
`logger.warn`, taču ķēdes izpilde turpinās — pēc konstrukcijas kļūmes gadījumā pieprasījums tiek atļauts.

## Konfigurācija

Iebūvēto aizsargmehānismu nolasītie vides mainīgie:

| Mainīgais                             | Izmanto                     | Ietekme                                                                                                                    |
| ------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`          | Iestatiet uz `false`, lai pilnībā atspējotu noteikšanu.                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`          | Injekciju politika: `warn`, `block` vai `log`. Mantotā vērtība `redact` nepārraksta injekcijas tekstu.                     |
| `INJECTION_GUARD_MODE`                | `prompt-injection`          | Injekciju aizsargmehānisma režīms; arī DB funkcionalitātes karodziņš, kas **ignorē un aizstāj** vides mainīgos (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`          | Minimālais nopietnības līmenis, kuru `MODE=block` noraida: `high` (noklusējums), `medium` vai `low`.                       |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`          | Mantots `INPUT_SANITIZER_BLOCK_THRESHOLD` aizstājvārds.                                                                    |
| `PII_REDACTION_ENABLED`               | `pii-masker`                | Ja vērtība ir `true`, pieprasījumā esošā PII tiek aizklāta (neatkarīgi no injekciju režīma).                               |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (lejupstraume) | Kontrolē maskētāja darbību atbildes pusē.                                                                                  |

Modalitātes tilta aizsargmehānismi izpildlaika konfigurāciju nolasa no DB nodrošinātās iestatījumu
krātuves (`getSettings()`), nevis no vides mainīgajiem. Attēlu apstrādes primārās atslēgas ir
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` un
`modalityBridgeCacheMaxEntries`. Mantotās
`visionBridge*` atslēgas tiek pieņemtas tikai kā dokumentētā viena cikla lasīšanas
atkāpšanās iespēja; informācijas paneļa veiktajai rakstīšanai tiek izmantotas primārās atslēgas. Noklusējuma vērtības un atkāpšanās
risinātājs atrodas `src/shared/constants/modalityBridgeDefaults.ts`, bet mantotās
konstantes ir saglabātas failā `src/shared/constants/visionBridgeDefaults.ts`.

Audio apstrāde izmanto `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` un `modalityBridgeAudioMaxClips`, kā arī koplietotos
`modalityBridgeCache*` iestatījumus. Audio apstrādei nav mantoto atslēgu atkāpšanās iespējas, jo šīs
atslēgas tika ieviestas kopā ar Modalitātes tilta shēmu.

Video apstrāde izmanto `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` un
`modalityBridgeVideoTimeout`, kā arī koplietotos `modalityBridgeCache*` iestatījumus.
Tā pēc noklusējuma ir atspējota, jo FFmpeg/ffprobe ir neobligātas darbības
atkarības, bet kadru aprakstu ģenerēšana palielina latentumu un modeļa izmaksas.

## Pielāgotas aizsargbarjeras

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

Darbības:

1. Izveidojiet `src/lib/guardrails/myGuardrail.ts`, paplašinot `BaseGuardrail`.
2. Implementējiet `preCall` un/vai `postCall`.
3. Vai nu reģistrējiet importēšanas laikā (pievienojiet no `registerDefaultGuardrails`), vai
   izsauciet `guardrailRegistry.register(...)` izpildlaikā — reģistrs aizstāj
   jebkuru iepriekšējo aizsargbarjeru ar tādu pašu normalizēto nosaukumu.
4. Pievienojiet testus direktorijā `tests/unit/` (esošie piemēri:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testēšana

Starp testiem izmantojiet `resetGuardrailsForTests()`, lai sāktu no zināma stāvokļa.
Nododiet `{ registerDefaults: false }`, lai sāktu ar tukšu reģistru un
reģistrētu tikai testējamās aizsargbarjeras. Vision Bridge atbalsta atkarību
ievadīšanu (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge nodrošina
līdzvērtīgus paplašinājuma punktus iestatījumiem, iespējām, STT modeļa atlasei, akreditācijas datu
pārbaudēm un transkripcijai. Tādēļ testos var pārbaudīt abas plūsmas bez piekļuves
DB vai tīklam.

## Skatiet arī

- `src/lib/guardrails/` — implementācija
- `src/shared/utils/inputSanitizer.ts` — koplietots detektors, kas nodrošina
  uzvedņu injekciju noteikšanu un PII maskēšanu
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge noklusējuma vērtības un
  piespiedu tilta modeļu saraksts
- `src/shared/constants/modalityBridgeDefaults.ts` — koplietoti Vision/Audio izpildlaika noklusējumi
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonāls slānis (ķēdes pārtraucējs, nogaidīšanas periodi)
- `docs/reference/ENVIRONMENT.md` — pilna vides mainīgo atsauce

## Injekciju aizsarga maršrutu pārklājums un red-team testēšana (8. posms · D bloks)

Injekciju aizsargs (`createInjectionGuard` / `withInjectionGuard`) aptver visus maršrutus,
kas pieņem lietotāju uzvednes. Tas ievēro `INJECTION_GUARD_MODE` (noklusējuma vērtība `warn` = tikai reģistrē žurnālā;
`block` = atgriež HTTP 400 `SECURITY_001`).

| Tips            | Maršruti                                                                                                                                             | Noklusējuma režīms |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Teksts (esošie) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn               |
| Ģeneratīvie     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn               |
| Dati            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn               |

Teksta izgūšana (`extractMessageContents`) aptver `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testēšana (katru nakti, `nightly-llm-security.yml`):** promptfoo pārbauda, vai katrs maršruts bloķē
OWASP-LLM korpusu režīmā `INJECTION_GUARD_MODE=block`; garak izpilda pārbaudes (izlaiž, ja nav noslēpuma).
`moderations` ir iekļauts konsekvences labad — operatori bloķēšanas režīmā to var izslēgt, izmantojot
`resolveDisabledGuardrails`.

Nakts darbplūsmai (`.github/workflows/nightly-llm-security.yml`, cron + manuāla
palaišana) ir divi darbi:

- **`promptfoo-guard` (bloķējošs)** — izpilda `promptfoo eval -c promptfooconfig.yaml`
  ar `INJECTION_GUARD_MODE=block`. Katrs pretiniecisks gadījums (piemēram, "ignorē visus
  iepriekšējos norādījumus…", DAN stila ierobežojumu apiešanas mēģinājumi) pārbauda, vai atbilde satur
  `error.code === "SECURITY_001"`, proti, vai aizsargs patiešām noraidīja pieprasījumu.
- **`garak` (konsultatīvs)** — izpilda garak `--probes promptinject,dan,leakreplay`
  pret lokālu OmniRoute instanci (`http://localhost:20128/v1`). Tā izpilde ir atkarīga no
  pakalpojumu sniedzēja noslēpuma (`PROMPTFOO_PROVIDER_KEY`); ja tā nav, darbs tiek korekti izlaists, un tam ir pievienots
  `|| true`, tādēļ tas sniedz pārskatu, neizraisot CI kļūmi.

Aizsarga palīgfunkcijas (`createInjectionGuard` / `withInjectionGuard`) pārklājums
aptver katru `/v1` maršrutu, kas pieņem uzvednes; uzvednes teksts tiek iegūts no
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`, izmantojot
`extractMessageContents()` failā `src/shared/utils/inputSanitizer.ts`.
