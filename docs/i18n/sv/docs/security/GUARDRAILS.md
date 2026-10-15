# Guardrails (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sanningskälla:** `src/lib/guardrails/`
> **Senast uppdaterad:** 2026-08-29 — v3.8.51 (Video Bridge-transkriptets ursprung deklareras av anroparen,
> ännu inte serververifierat — förtydligat enligt #11661)

Guardrails upprätthåller säkerhet, policy och innehållstransformationer vid gränsen
mellan OmniRoute och uppströmsleverantörer. Varje guardrail kan inspektera (och
valfritt avvisa, transformera eller kommentera) begärans nyttolaster (`preCall`) och
uppströms svar (`postCall`).

Systemet är **fail-open**: om en guardrail kastar ett fel under exekvering,
registrerar registret felet och fortsätter med nästa guardrail istället för att
misslyckas med begäran. Blockering är ett explicit beslut (`block: true`),
aldrig en olycka.

## Inbyggda skyddsmekanismer

Registret läser automatiskt in sex skyddsmekanismer i prioritetsordning vid import
(se `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Namn                | Steg           | Fil                   |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lägre prioritetsnummer körs **först**.

### Bildbrygga (`visionBridge.ts`) — Modalitetsbrygga PR-1

Fångar upp förfrågningar som innehåller bilder och är riktade till **modeller utan bildstöd** och omdirigerar antingen hela förfrågan till en modell med bildstöd eller ersätter bilddelarna med textbeskrivningar som producerats av en konfigurerbar bildmodell före det uppströms anropet. Detta gör att leverantörer som endast stöder text transparent kan hantera multimodala nyttolaster.

Flöde:

1. Hoppa över om målmodellen redan stöder bilder (såvida den inte finns i listan över modeller med framtvingad brygga `isVisionBridgeForcedModel`).
2. Extrahera bilddelar via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), som delegerar till den **enhetliga mediedetektorn**
   `detectMediaParts()` i `open-sse/utils/mediaParts.ts` — den enda sanningskällan
   som delas med kombinationskompatibilitetsfiltret.
   Extraheringen är begränsad genom en tillåtelselista till delar på toppnivå med de former
   som `replaceImageParts` kan infoga igen (kontraktet extrahera↔ersätt): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic-URL
   `source.type:"url"` och Responses API `input_image`. Kapslade träffar och
   former som endast fungerar som indikatorer är material för kombinationsfiltret och extraheras aldrig.
   Hoppa över om inga hittas.
3. Lös upp körningskonfigurationen via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nya inställningsnycklar av typen `modalityBridge*`
   har företräde; äldre nycklar av typen `visionBridge*` kvarstår som en **reservlösning under en cykel**
   (återställningsfönster). Hoppa över före all mediegenomsökning när
   bryggan är inaktiverad.
4. Lägesväljaren (`modalityBridgeVisionMode`, se tabellen nedan) avgör
   omdirigering eller beskrivning. Omdirigering returnerar `modifiedPayload` där endast `model`
   har bytts ut, plus metadata `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beskrivningsflödet: begränsa antalet bilder till `maxImages`, skapa den uppgiftsanpassade prompten,
   konsultera beskrivningscachen, anropa bildmodellen **parallellt**
   (`Promise.allSettled`) och infoga textdelar av typen `[Bild N]: <beskrivning>` på
   deras plats. En misslyckad beskrivning ger `null` och den ursprungliga bilddelen
   **bevaras** (#4012) — utom i kombinationsflödets beskrivningsgren när samtliga
   beskrivningar misslyckades, där en bekräftat bildinkompatibel uppströmsmodell får en
   `(otillgänglig — ingen leverantör med bildstöd är ansluten)`-platshållare i stället (#8430).
6. Returnera `modifiedPayload` + metadata (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Lägesväljare (`modalityBridgeVisionMode`)

| Läge       | Standard | Beteende                                                                                                                                                                                                                                                                                                                              |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Äldre heuristik, oförändrad (#6640/#7204): modeller som inte är kombinationsmodeller samt `auto/`-modeller omdirigeras till den bästa bildmodellen, såvida den ursprungliga modellen inte redan har användbara autentiseringsuppgifter (då beskrivs bilderna); kombinationsmål beskriver alltid.                                      |
| `describe` |          | Beskriv alltid — omdirigeringsblocket hoppas över helt; användarens valda modell svarar alltid.                                                                                                                                                                                                                                       |
| `reroute`  |          | Framtvinga omdirigering: skyddet som behåller en modell med autentiseringsuppgifter kringgås. Autentiseringsskyddet för omdirigerings**målet** gäller fortfarande — när det inte finns något användbart bildmål fortsätter förfrågan till beskrivningsflödet, så att råa bilder aldrig når en backend som endast stöder text (#8430). |

Framtvingade lägen kortsluter **innan** den automatiska heuristiken körs; beteendet för `auto`
är byte-identiskt med skyddsmekanismen före PR-1.

#### API-nyckelns omfång (`visionBridgeKeyScope.ts`)

När anroparens API-nyckel begränsar `allowedConnections`, kvotpooler
(`allowedQuotas`) eller modeller (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) väljer bryggan endast
omdirigerings- och beskrivningsmodeller som nyckeln får använda, via anslutningar som nyckeln får
använda. Beskrivningsanropet går sedan alltid genom OmniRoutes självslinga med
headern `x-omniroute-self-loop-key-id`, så att den mottagande chattförfrågan
återigen tillämpar nyckelns anslutnings- och modellpolicy. `enforceApiKeyPolicy()`
respekterar endast den headern tillsammans med självslingans bearer-token, så den kan endast
begränsa åtkomsten, och ett id som inte kan slås upp avvisas.

Om ingen bildmodell är tillåten för nyckeln träder beskrivningsflödet åt sidan och
förfrågan släpps igenom oförändrad, med samma fail-open-beteende som en inaktiverad
skyddsmekanism (metadata `{ skipped: true, reason: "no_permitted_vision_model" }`).
Förfrågningar utan nyckel och nycklar utan dessa begränsningar beter sig exakt som
tidigare.

#### Uppgiftsanpassad beskrivningsprompt (`modalityBridgeVisionTaskAware`)

Standardvärdet är **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) lägger till
texten från det **senaste användarmeddelandet** (förkortad till 500 tecken) i den
grundläggande beskrivningsprompten, vilket styr beskrivningen mot det som användaren faktiskt
frågade efter (codex-vision-proxy-mönstret) och ber visionsmodellen att transkribera synlig
text. När flaggan är avstängd — eller när användartext saknas — används grundprompten oförändrad.

Beskrivningssjälvloopens egen OpenAI-kompatibla begäran (`callVisionModelSingle()`
i `visionBridgeHelpers.ts`) begär alltid `image_url.detail: "high"` —
ovillkorligen, för varje anropare/leverantör, utan att styras av någon klientsignal.
Sampling med låg detaljnivå försämrar OCR-noggrannheten för just den texttranskriberingsuppgift
som denna prompt efterfrågar, så själva beskrivningsanropet begär alltid hög
detaljnivå oavsett vilken detaljnivå den ursprungliga inkommande begäran använde. Detta
påverkar endast den interna beskrivningsbegärans kropp; det ändrar inte hur
OmniRoute vidarebefordrar anroparens egen `image_url.detail` i den primära begäran —
det standardvärdet tillämpas separat och endast för identifierade OpenCode-klienter i
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Grenen för
Anthropic-överföringsformatet i beskrivningssjälvloopen har inget `detail`-fält
och påverkas inte av något av standardvärdena.

#### Utmatningsgräns för beskrivningar (`modalityBridgeVisionMaxChars`)

| Nyckel                         | Standardvärde | Intervall           |
| ------------------------------ | ------------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`           | `0` eller 100–50000 |

`0` (standardvärdet) betyder **ingen gräns** — beskrivningen som returneras av
`callVisionModel()` skickas vidare oförändrad, vilket bevarar det befintliga
beteendet. Alla värden i intervallet 100–50000 förkortar beskrivningen med ett
`…`-suffix innan den infogas som `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` i `src/lib/guardrails/visionBridge.ts`).
Höj detta för detaljrika OCR-uppgifter där modellen nedströms behöver den
fullständiga transkriberingen; sänk det för att begränsa tokenanvändningen hos pratsamma visionsmodeller.
Instrumentpanelsfältet finns i panelen Avancerat på fliken Vision
(`modality-bridge-max-chars` i `ModalityBridgeVisionTab.tsx`) och justerar alla
värden mellan 1 och 99 uppåt till minimivärdet 100, samtidigt som ett uttryckligt `0`
lämnas orört — `0` är ett giltigt Zod-värde i sig
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), inte bara
standardvärdet för ”inte angivet”.

#### Beskrivningscache (`modalityBridge/bridgeCache.ts`)

Processgemensam minnesbaserad LRU- och TTL-cache för beskrivningsutdata.
Nyckel = `sha256(imageRef + composedPrompt + configuredBridgeModel)` med
längdprefixbaserad inramning (inga kollisioner vid fältgränser). Modellkomponenten är
den **konfigurerade** bryggmodellen, inte modellen som faktiskt svarade —
`callVisionModel` kan använda en reservmodell internt, och nycklar per försök skulle
fragmentera cachen. Misslyckade beskrivningar cachelagras aldrig. Inställningar:

| Nyckel                          | Standardvärde | Intervall |
| ------------------------------- | ------------- | --------- |
| `modalityBridgeCacheEnabled`    | `true`        | —         |
| `modalityBridgeCacheTtlMinutes` | `60`          | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`         | 10–5000   |

#### Normalisering av fjärrbilder (självloopsbeskrivning/base64-hämtning)

När bryggan själv hämtar en **fjärrbild** — Anthropics egna beskrivningsanrop
och base64-konverteringen för claude-överföringsformatet
(`ensureBase64ImagesForClaudeWire`), båda via
`fetchRemoteImageAsDataUri()` i `visionBridgeHelpers.ts` — skickas den resulterande
data-URI:n genom `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) innan den bäddas in i begäran till
visionsmodellen. För stora bilder skalas ned till en **långsida på 2048px** (vilket motsvarar
storleksgränsen som OpenAI/Anthropic redan tillämpar på serversidan), vilket minskar
uppladdningsstorlek/latens utan att ändra vad visionsmodellen ser. Storleksändringen
använder `sharp`, som läses in via dynamisk import: på en plattform där dess systemspecifika
binärfil inte kan läsas in kastar `normalizeDataUri()` **aldrig ett undantag** — den faller tillbaka
på att skicka originalbyten vidare oförändrade, så sökvägen för beskrivning/base64-konvertering
fortsätter alltid att fungera. Byte som inte är bilder (en hämtning som inte returnerade en
avkodningsbar bild) skickas också vidare oförändrade. Den här normaliseringen
är begränsad till bilder som bryggan hämtar för sitt eget självanrop — den tillämpas aldrig
på anroparens råa vidarebefordrade nyttolast, i enlighet med principen att endast göra
ändringar efter aktivt val (hård regel nr 20).

#### Inställningsschema + migrering

De nya `modalityBridge*`-nycklarna Zod-valideras i `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trion `modalityBridgeCache*` och gruppen
`modalityBridgeAudio*` som används av Audio Bridge. Migreringen
`141_modality_bridge_settings.sql` kopierar befintliga äldre
`visionBridge*`-värden till motsvarande nya nycklar (idempotent och skriver aldrig över
ett `modalityBridge*`-värde som angetts av en operatör); de äldre nycklarna fortsätter att
accepteras som reserv vid läsning under en versionscykel.

#### Transparensheader + statistik

Beskrivningstransformerade svar innehåller
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(skapad av `buildModalityBridgeHeader()` i `modalityBridge/bridgeStats.ts`,
tillagd av `withModalityBridgeHeader()` i `src/sse/handlers/chatHelpers.ts`).
Omdirigerade begäranden får **ingen** header — nyttolasten var orörd och modellbytet
är redan synligt i svarskroppens `model`-fält.

`GET /api/modality-bridge/stats` (hanteringsautentisering, samma nivå som
`GET /api/settings`) returnerar de minneslagrade räknarna per modalitet
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` för `vision`, `audio` och
`video`. `averageLatencyMs` använder `latencySamples`, inte alla försök, som
nämnare; en åtgärd utan tidsmätning skapar inte ett artificiellt exempel på noll
millisekunder. `bridged` förblir det bakåtkompatibla aliaset för lyckade
konverteringar; misslyckade försök ökar det inte.
Räknarna återställs avsiktligt när processen startas om
(telemetri, inte redovisning).

#### Konfiguration av kontrollpanelen

Den dedikerade sidan i kontrollpanelen finns på
`/dashboard/settings/modality-bridge`. Dess URL-adresserbara flikar `Vision`,
`Audio` och `Video` bevarar frågeparametrarna när värdet för `tab` ändras.
Fliken Vision visar aktivering, läge, modellval (inklusive det automatiska
standardvalet), uppgiftsmedvetna instruktioner, avancerade gränser för
tidsgräns/bild/beskrivningslängd/cache, körningsräknare och en skyddad
exempelförfrågan. Fliken Audio är också aktiv: den visar aktivering, en
modellväljare enbart för STT med Auto, gränser för tidsgräns/maximal klipplängd,
ljudräknare och ett `input_audio`-exempeltest. Fliken Video är funktionell: den
rapporterar körningsstatus för FFmpeg/ffprobe — ett av fyra uttryckliga
gränssnittstillstånd (`unknown` medan kontrollen pågår eller inte kunde
slutföras, `restricted` på en kontrollpanelsvärd som inte är loopback där
kontrollen hoppas över på klientsidan, `unavailable` efter att kontrollen har
utförts och verktygen bekräftats saknas, eller `available` med versionerna för
FFmpeg/ffprobe) — sparar gränser för aktivering/modell/bildrutor/video/tidsgräns,
filtrerar modellväljaren till modeller med stöd för bildindata och visar
videoräknare.

Det tidigare Vision Bridge-kortet under AI-inställningar är en kompatibilitetslänk
till den nya sidan; det innehåller inte längre en andra kopia av formuläret.
Media Providers länkar också arbetsflödena Image-to-Text och Speech-to-Text till
motsvarande Modality Bridge-flikar utan att ta bort den befintliga
Speech-to-Text-testmiljön.

**Kringgående av åtkomstkontroll för självloop:** när beskrivningsanropet dirigeras
genom OmniRoutes egen `/v1`-självloop (modell från en icke-standardiserad
leverantör) skickar underförfrågan `x-omniroute-admission-bypass: internal` och
autentiseras med den matchade autentiseringsuppgiften för självloopen — den
lokala platshållaren `sk_omniroute` i lokalt läge eller den operatörskonfigurerade
miljönyckeln `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), så att
distributioner med `REQUIRE_API_KEY=true` fortfarande kan köra
beskrivningsanropet. Kringgåendet tillåts endast för exakt dessa
autentiseringsuppgifter, så externa klienter kan inte använda headern för att
hoppa över åtkomstkontrollen.

Äldre standardvärden finns i `src/shared/constants/visionBridgeDefaults.ts`; de
nya standardvärdena för läge/uppgiftsmedvetenhet/cache samt
inställningsresolvern finns i
`src/shared/constants/modalityBridgeDefaults.ts`. Skyddsmekanismen exponerar ett
`deps`-alternativ i konstruktorn så att tester kan injicera falska
implementationer av `getSettings` och `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Fångar upp chattförfrågningar som innehåller ljud innan de når ett mål som inte
är känt för att acceptera ljudindata. Den omdirigerar aldrig chattförfrågan:
ljuddelar transkriberas via den befintliga OpenAI-kompatibla multipart-endpointen
och den valda chattmodellen fortsätter med texttranskriptioner.

Flöde:

1. Matcha `supportsAudio` via `getResolvedModelCapabilities()`. Explicit
   metadata i leverantörsregistret har företräde, följt av statisk modellmetadata
   och därefter synkroniserade `modalities_input`. En deklarerad indatalista utan
   `audio` ger `false`; om belägg för kapaciteten saknas blir värdet `null`. Både
   `false` och `null` aktiverar den försiktiga bryggan, medan `true` kringgår den.
2. Matcha inställningarna `modalityBridgeAudio*` och extrahera skarvbara
   ljuddelar på toppnivå från varje meddelande via den delade detektorn
   `detectMediaParts()`. Trådformat som stöds är OpenAI `input_audio`,
   `audio_url` och `source.media_type: "audio/*"`. Kapslat ljud identifieras för
   dirigering men tas inte bort av skarvningssökvägen. Arbetsmängden begränsas av
   `modalityBridgeAudioMaxClips`; senare delar lämnas orörda.
3. Respektera en konfigurerad `provider/model`, eller låt
   `selectAudioBridgeModel()` gå igenom `AUDIO_TRANSCRIPTION_PROVIDERS` i stabil
   katalogordning och välja den första modellen med en användbar aktiv
   leverantörsautentiseringsuppgift.
4. `callAudioTranscription()` konverterar base64-/data-URI-ljud till en multipart-
   `file`, eller hämtar en fjärrresurs från `audio_url` via det utgående skyddet
   som endast tillåter offentliga adresser, med DNS-bindning och en gräns på
   25 MB. Därefter POSTas filen och den valda modellen till den lokala
   `/v1/audio/transcriptions`-självloopen, autentiserad med
   `resolveSelfLoopBearer()`. Den befintliga transkriptionsrutten utför normal
   uppslagning av autentiseringsuppgifter, hantering av nedkylning/hastighetsgränser
   och dirigering till leverantören.
5. Lyckade anrop ersätter sina delar med `[Audio N]: <transcript>`. Anropen körs
   med `Promise.allSettled`: ett enskilt fel bevarar den ursprungliga ljuddelen
   (avtal #4012). Om alla anrop misslyckas och målet bevisligen har
   `supportsAudio === false` blir delarna
   `[Audio N]: (unavailable — no STT provider connected)` (avtal #8430). För ett
   okänt mål (`null`) lämnas innehållet orört om alla anrop misslyckas. Ett
   bevisligen textbaserat mål utan användbara STT-autentiseringsuppgifter får
   samma explicita platshållare utan att något nätverksanrop utförs.

Lyckade transkriptioner använder den processomfattande LRU/TTL-cachen för
Modality Bridge. Nyckeln kombinerar ljudreferensen, den stabila åtgärdsetiketten
`audio-transcription` och den valda STT-modellen; fel cachas aldrig. Ljudförsök
uppdaterar de delade räknarna `bridged`, `cacheHits`, `failures` och
`lastUsedAt`. Transformerade svar innehåller
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; orörda
förfrågningar får inget Audio Bridge-segment.

Körningsinställningarna lagras i databasen och valideras med Zod:

| Nyckel                        | Standardvärde | Intervall         |
| ----------------------------- | ------------- | ----------------- |
| `modalityBridgeAudioEnabled`  | `true`        | —                 |
| `modalityBridgeAudioModel`    | `""`          | Auto eller STT-ID |
| `modalityBridgeAudioTimeout`  | `60000`       | 1000–300000       |
| `modalityBridgeAudioMaxClips` | `3`           | 1–10              |

Den delade cachen styrs fortfarande av `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` och `modalityBridgeCacheMaxEntries`.

### Videobrygga (`videoBridge.ts`, `videoBridgePipeline.ts`)

Fångar upp videodelar på toppnivå i Chat Completions `messages` och Responses
API `input` innan ett mål utan känt inbyggt videostöd anropas.
Format som stöds är `input_video`, `video_url`, `video_source`, HTTPS-URL:er
och `data:video/*;base64,...`-data-URI:er. Vanliga filnamn i text behandlas inte
som video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) hanterar traversering av begäran,
kontrollen av funktionalitet/policy, aggregering per begäran och svarslasten.
Arbetet per video — hämtning, cachen för hela resultat, beskrivning av en
bildrutesekvens (som sammanfogar eventuell ljudtranskription som angetts av anroparen)
samt mätvärden/avbrott/resursrensning per försök — döljs bakom `processVideoPart` i
`videoBridgePipeline.ts`, som anropas en gång per videodel inifrån loopen i `preCall`.
Den modulen definierar även de explicita portgränserna `VideoMediaBrokerPort`
(hämtning av byte och extrahering av samplade bildrutor), `VideoAudioTranscriptionPort`
(sammanfogning av en ljudtranskription som angetts av anroparen med de samplade
bildtexterna) och `VideoDrilldownPort` (persistensgränsen för detaljgranskning av
bildrutor; ännu inte ansluten till `processVideoPart` — endast den separata
`/api/modality-bridge/video/drilldown`-rutten skriver för närvarande poster för
detaljgranskning).

Den publika `/v1`-sökvägen för begäranden importerar eller anropar aldrig en
underprocess. Fjärrvideor hämtas med en gräns på 50 MiB; infogade base64-videor har
ett konservativt tak på 36 MiB avkodad data per video, så att omslutningen för
modell/meddelanden/inramning kan hållas inom den publika gränsen på 50 MiB för
godkännande av JSON-begäranden. Infogad längd och uppskattad avkodad storlek
kontrolleras före allokering. HTTPS krävs för den ursprungliga fjärr-URL:en och
varje omdirigering, med det befintliga skyddet för enbart publika utgående
anslutningar och DNS-fästning. Byten passerar sedan den exakta interna
mäklargränsen `POST /api/modality-bridge/video/extract`. Den rutten är både
`LOCAL_ONLY` och `SPAWN_CAPABLE`, accepterar endast en autentiserad begäran per
process från en betrodd loopback-adress och accepterar aldrig en URL, sökväg i
filsystemet, körbar fil eller argumentlista. API-pipelinen för brödtextstorlek och
hanterarens inkrementella läsare av brödtext tillämpar oberoende av varandra ett
tak på 50 MiB för mäklarens indata. Dess begränsade kö kör en extrahering åt gången,
tillåter fyra väntande jobb och begränsar väntande indata till 100 MiB.

Inuti mäklaren läser `ffprobe` en privat lokal fil; den fasta tillåtelselistan för
format utesluter spelliste- och manifestformat. För tillåtna behållare i MOV-familjen
är externa MOV-datareferenser fortsatt inaktiverade som standard, och det fasta
kommandot aktiverar dem inte. Både `ffprobe` och `ffmpeg` använder en protokollista
som endast tillåter `file`, en tråd, fasta argumentmatriser, inget skal och körbara
filer som matchas via `PATH`. Omslagsströmmar med bifogade bilder är inte
uppspelningsbara kandidater. Alla uppspelningsbara strömmar måste uppfylla
gränserna, och en explicit standardström föredras före den deterministiska
reservlösningen med lägst index. Videor är begränsade till 600 sekunder, 8 192
bildpunkter per dimension och 33 554 432 källbildpunkter. FFmpeg samplar 1–16
JPEG-bildrutor vid mittpunkter, skalar ned den långa kanten till högst 1 024
bildpunkter utan att skala upp mindre indata och tar aldrig emot en URL. Samplingen
är som standard `uniform`. De valfria policyerna `scene_aware` och experimentella
`segment_aware` utför ytterligare en fast FFmpeg-passering över den redan validerade
lokala strömmen, väljer ett begränsat antal scenens tidsstämplar från `showinfo` och
återgår deterministiskt till samma likformiga mittpunkter vid detektorfel, timeout,
felaktigt formaterade utdata eller en tom kandidatuppsättning. Segmentmedvetet läge
fördelar mittpunktssamplingar proportionellt mellan de validerade scenintervallen;
evidens och reservbeteende för segmentmedvetet läge beskrivs nedan. Det hårda taket
på 16 bildrutor tillämpas efter valet i varje policy. När en scenmedveten begäran
endast har en budget på en bildruta använder den den likformiga mittpunkten i det
aktiva helvideo- eller fokusfönstret och rapporterar `policyEffective: uniform`: en
enda vald scenbildruta kan inte bevara båda tidsmässiga ändarna. En anropare kan
valfritt ange ett ändligt fokusfönster (`start`/`end` i sekunder); gränserna
begränsas till mediets längd, omvända eller icke-ändliga fönster avvisas och alla
samplingspolicyer utförs endast inom det normaliserade intervallet. Det resulterande
fönstret inkluderas i samplingsmetadata och i det ej betrodda beskrivningsprefixet,
så att efterföljande modeller kan skilja ett fokuserat utdrag från hela tidslinjen.

Semantiskt bildtextfokus är en separat, explicit inställning. Standardläget `full`
för analys bevarar den befintliga bildruteprompten och vidarebefordrar aldrig
text från begäran till bildtextmodellen. I läget `focused` läser bryggan endast den
senaste icke-tomma, användarskapade `text`/`input_text` från samma Chat- eller
Responses-behållare, normaliserar den till NFC, komprimerar kontrolltecken och
blanktecken och begränsar den till 500 Unicode-kodpunkter. Ett tomt resultat
återgår till den exakta `full`-prompten. En användbar ledtråd serialiseras som JSON
i ett särskilt block för ej betrodd användarkontext och får endast prioritera
observerbara detaljer; den kan inte åsidosätta den separata varningen mot att följa
instruktioner som syns eller hörs i mediet. Textfokus härleder aldrig `start`/`end`
eller ändrar den tidsmässiga samplaren.

#### FU-07 strukturevidens för segment

`segment_aware` använder en enda begränsad föranalysomgång av den redan validerade
lokala videoströmmen. Den fasta filterkedjan skalar först till högst 320 pixlars
bredd, identifierar scenbyten och frysta intervall och samplar sedan 1 bildruta per
sekund för oskärpa, genomsnittlig luminans samt spatial och temporal information. Omgången är
begränsad till 600 strukturella sampel, en FFmpeg-/filtertråd, samma
protokollbegränsning till endast `file` och tillåtelselistor för behållare, en gräns på
1 MiB för processutdata samt högst 30 sekunder inom förmedlarens gemensamma
avbrotts-/tidsfrist. Den tar aldrig emot ett kommando, filter, sökväg eller en URL
från begäran.

De strukturella värdena är deterministiska samplingsbelägg, inte semantisk
videoförståelse. De drar inga slutsatser om motiv, handlingar, bildtexter, tal eller
användarens avsikt. Scen- och frysningsgränser bildar segment; frysningstäckning,
oskärpa, exponering, spatial detaljnivå och temporal förändring påverkar endast hur den
befintliga budgeten på 1–16 bildrutor fördelas. Ett helt fryst segment begränsas till
en bildruta, medan icke-frysta segment konkurrerar om den återstående budgeten. När
antalet gränser överstiger antalet bildrutor bibehålls en jämn täckning av tidslinjen,
så att snabba tidiga klipp inte kan dölja ett långt avslutande segment. Scengränser
inom föranalysens upplösning på 1 sekund från en frysningsgräns slås samman.

Saknade filter, felaktiga/tomma belägg, ett detektorfel eller tidsgränsen för den
begränsade föranalysen leder till en öppen reservlösning med exakt den enhetliga
mittpunktspolicyn. Ett avbrott från anroparen eller förmedlarens tidsfrist leder inte
till en öppen reservlösning: det avslutar den pågående underprocessen, förhindrar
senare extrahering av bildrutor och det privata temporära trädet tas bort i `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genererar deterministiska verkliga
FFmpeg-fixturer för besparingar av bildtextanrop efter deduplicering, budgetfördelning
vid tät rörelse, belägg för oskärpa/exponering/SI-TI, snabba klipp med en lång
avslutning samt falska positiva resultat från gradvisa toningar. Det registrerar
väggklockstid för föranalysen och, där `/usr/bin/time` är tillgängligt, underprocessens
CPU-tid och maximala RSS. Dess kvalitetskontroller är endast strukturella orakel.
Kvaliteten hos verkliga bildtextmodeller förblir `HOLD` eftersom detta testverktyg
saknar en auktoriserad slutpunkt eller en fryst bedömare. Monetära besparingar förblir
också `HOLD` om inte `--caption-cost-per-call-usd` anger en uttrycklig positiv
kostnadsuppskattning per anrop; skriptet fabricerar aldrig något av resultaten.

Varje bildruta är begränsad till 4 MiB, alla råa bildrutor tillsammans till 23 MiB
och det serialiserade förmedlarsvaret till 32 MiB. En privat temporär katalog tas bort
i `finally`. OmniRoute inkluderar inte FFmpeg och accepterar inte en anpassad sökväg
till den körbara filen. Före bildtextgenereringen tillämpar bryggan en konservativ
visuell dedupliceringsomgång: varje JPEG reduceras till en gråskalebuffert på 16×16
och jämförs endast med den senast behållna bildrutan. För en begärd bildtextbudget
över en bildruta tillhandahåller extraheringen en
begränsad kandidatpool på upp till dubbla budgeten och aldrig fler än 16 bildrutor.
Det begärda taket tillämpas först efter dedupliceringen, och den första och sista
valda kandidaten bevaras under den slutliga gallringen när budgeten är minst två.
Den versionshanterade policyn
`grayscale-16x16-mean-cells-v2` använder det större värdet av genomsnittlig
luminansskillnad och andelen miniatyrceller vars normaliserade skillnad är minst 0.05.
Tröskelvärdet för dubbletter är konstanten 0.04, vald för förutsägbarhet snarare än
exponerad som en körningsinställning. Denna sekundära
högkontrastsignal bevarar små rörelser och ändringar i synlig text som en jämförelse
baserad enbart på medelvärden kan dölja. Fel i jämförare eller avkodare leder till en
öppen reservlösning och bibehåller täckningen. Utmatningens metadata särskiljer
extraherade kandidater, bildrutor som användes utan fel och visuella dubbletter som
togs bort.

En uttryckligen markerad videodel kan begära en kontaktkarta med tidsstämplar. Bryggan
bygger ett JPEG-rutnät med högst 4 kolumner och 16 bildrutor. Varje cell på 512 pixlar
bränner in källans tidsstämpel i ett bottenband med hög kontrast, medan samma
tidsstämplar finns kvar i textmetadata för efterföljande associering och granskning.
Den fullständiga JPEG-bilden förblir begränsad till 32 MiB. Om `sharp` inte kan avkoda
eller sätta samman rutnätet återgår bryggan till de enskilda JPEG-bildrutorna; ett
klientavbrott fortplantas fortfarande genom kontaktkarteåtgärden.

Belägg för lansering hålls avsiktligt åtskilda från det syntetiska mikroriktmärket för
sammansättning. `scripts/perf/video-bridge-contact-sheet-eval.ts` definierar ett
schemaversionshanterat A/B-testverktyg för verkliga OpenAI-kompatibla visionsmodeller.
Det mäter leverantörsrapporterade token, total väggklockslatens (inklusive
sammansättningen av kontaktkartan), antal modellanrop och manifestdefinierad
faktabevaring. Råa modellsvar skrivs inte till rapporten; endast SHA-256-sammandrag
och matchade fakta-ID:n behålls. Testverktyget gör inga nätverksanrop eller anrop till
betalda modeller om inte `--execute-real` anges och `--model`, `OMNIROUTE_BASE_URL`
samt `OMNIROUTE_API_KEY` har konfigurerats. Utan denna uttryckliga verkliga körning
förblir dess maskinläsbara utfall `HOLD`; enbart syntetiska mätningar av nyttolast och
antal anrop utgör inte lanseringsbelägg.

Anropare kan bifoga en valfri `transcript.cues`-matris till en videodel som stöds
när de redan har tidsanpassad text. Varje cue måste innehålla `text`, ett ändligt
`start`-/`end`-intervall inom den fastställda längden samt en vitlistad `source`
(`client`, `embedded` eller `audio-bridge`); `confidence` har standardvärdet
`1` och måste ligga mellan `0` och `1`. Exakta dubbletter av cues slås samman.
OmniRoute startar aldrig transkribering från dessa metadata: validerade cues
kopieras till det beskrivna resultatet tillsammans med källa, konfidens och intervall
och återges som ej betrodda observationer bredvid bildrutornas bildtexter. Ogiltig
text, text utanför intervallet eller text utan proveniens avvisas i stället för att
blandas in i bildtextströmmen. Fältet `source` anges för närvarande av anroparen och
verifieras inte av servern: OmniRoute säkerställer att värdet är en av de tre
tillåtna strängarna, men bekräftar ännu inte kryptografiskt att en etikett som
`embedded` eller `audio-bridge` faktiskt kommer från en serverägd
extrahering. Behandla `source` som en ej betrodd ledtråd tills denna verifiering
har införts; basera inte auktoriseringsbeslut på det.

En avancerad anropare kan tillhandahålla ett redan auktoriserat `audioTranscript`-spår
för samma video. Fusionsgränssnittet kör visuella observationer och ljudobservationer med
samma tidsgräns och avbrottssignal, ordnar dem på en gemensam tidslinje, slår samman
exakta dubbletter och rapporterar ett partiellt resultat när endast den ena sidan lyckas.
Ett ogiltigt `audioTranscript` degraderas till detta partiella resultat – den visuella
beskrivningen behålls och ljudgrenen registrerar en sanerad felkod –
i stället för att hela videon misslyckas. Tillgänglighet per gren, flaggan för partiellt resultat
och de sanerade felkoderna bevaras i det beskrivna resultatet, i
skyddsräckets metadata (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), i resultatcachemetadata och i bryggans
fusionsräknare. Standardsökvägen för Video Bridge anropar inte tal-till-text
och hämtar inte en andra kopia av mediet; utan detta uttryckliga spår förblir den
endast för video.

**Bevarande av transkription (#12150 P1).** Detta tillämpas automatiskt när
Video Bridge (som i sig är valfri) renderar en transkriptionsmarkör – det finns ingen separat
bevarandeflagga. När en begäran renderar någon transkriptionsmarkör (ett av anroparen deklarerat
`transcript` eller ett fusionerat `audioTranscript`) markerar skyddsräcket den som
`videoBridgeObserved` och skapar en redigerad skuggversion av videobeskrivningen –
en identisk rendering där fritextinnehållet i varje markör ersätts med
`[redacted-video-transcript]`, skapad genom att det strukturerade markörfältet ersätts
innan strängen sätts samman (aldrig genom parsning av den utplattade texten, så inget
markörinnehåll – fientligt eller normalt, inklusive innehåll som har `]`, såsom
`[inaudible]`/`[music]` – kan finnas kvar). Den beständiga anropsloggens begärandetext
ersätter varje videohärledd textdel med denna redigerade skuggversion, matchad genom
innehållslikhet; `fullText`-ankaret läses på nytt från det färdigställda skyddsräckets nyttolast
före anropet, så matchningen lyckas fortfarande efter att senare kedjeskyddsräcken (maskerarna
för personuppgifter och autentiseringsuppgifter, prioriteterna 10/95) skriver om beskrivningstexten
på plats och efter att injicering av systemprompt, överlämning och minne omformar meddelandematrisen.
Innehållet som skickas uppströms till modellen är oförändrat. En observerad begäran fyller inte
heller i något beständigt minne (både begärande- och svarshärledd extrahering hoppas över),
så modellens eget svar kan inte återge transkriptionstext i minnet.

**Råa videofält (#12430).** När bryggan är aktiverad och inbyggt videostöd är okänt eller saknas aktiverar även definierade `transcript`-/`audioTranscript`-fält `videoBridgeObserved`, även efter ett beskrivningsfel eller en `maxVideos`-gräns. `null` och tomma strängar räknas; frånvarande fält och metadata som inte gäller video gör det inte. Bevarade kopior redigerar dessa fält eller utelämnar begäran, och cacheminnen/minne kringgås. Leverantörens nyttolast förblir oförändrad.

Ytterligare bevarade kopior använder samma signal för observerad begäran. Den råa
ögonblicksbilden av klientbegäran före skyddsräcket, den väntande begäran i minnet och loggen
över tidigt avvisade begäranden ersätter strukturellt transkriptionsfält i videodelar;
strängprompter som syntetiseras av pipelinefaser och kontextöverlämning redigeras
vid lagringsmålet för den beständiga begärandetexten. Den beständiga markören
`video_content_removed` gör att fortsättning med `previous_response_id` stängs vid fel
i stället för att återskapa text som avsiktligt har tagits bort. Om en observerad begäran
förlorar sin redigerade skuggversion per del före loggning, eller om ens en av flera
videoskuggversioner inte längre matchar efter senare ändringar av begäran, utelämnas
den bevarade begärandetexten helt i stället för att en delvis redigerad transkription bevaras.

För en observerad begäran kan ett modellsvar citera valfri del av
transkriptionen utan en strukturerad markörgräns. Dess beständiga anropsloggs
`responseBody` ersätts därför med en utelämningsmarkör; den detaljerade
pipelineartefakten (som kan innehålla uppströms-/klientinnehåll och strömningssegment)
bevaras inte. Semantiska cacheminnen, idempotenscacheminnen och cacheminnen för resonemangsåteruppspelning
kringgår både läsningar och skrivningar för den begäran. Leverantörsbegäran och det
klientsynliga svaret förblir oförändrade. Tidiga keepalive-byte töms från den tillfälliga
bufferten när den detaljerade artefakten utelämnas. Kiros varning om felaktigt EventStream-format
rapporterar endast antalet byte i nyttolasten, aldrig dess innehåll eller JSON-tolkarens
råa fel.
Detta innebär inte att alla orelaterade leverantörs-/plugin-diagnoser har
granskats; den bredare genomgången av beständiga lagringsmål spåras i #11658.

Den interna livscykeln `/api/modality-bridge/video/drilldown` är ett separat,
loopback-/tokenautentiserat cacheunderlag. Varje åtgärd kräver också ett
kanoniskt ogenomskinligt huvudmannavärde. Innan en produktionsanropare aktiveras måste den
härleda detta ID från den autentiserade klientorganisationen och får aldrig vidarebefordra ett
värde som klienten har valt. Cachenycklar binder huvudmannen till kanoniska sessions- och
videoreferens-ID:n, lagrar endast deras SHA-256-härledda nycklar och avgränsar både läsningar
och borttagningar till samma huvudman. Cachen lagrar högst 16 härledda JPEG-bildrutor
per post, låter dem löpa ut efter tio minuter och stöder begränsade
`start`-/`end`-läsningar eller uttrycklig borttagning av sessionen.

Varje huvudman begränsas till 16 poster och 64 MiB kanoniska JPEG-data. Dessa
gränser är oberoende av det globala taket på 64 poster/256 MiB: belastning på en
huvudmans kvot avlägsnar endast den huvudmannens minst nyligen använda poster innan global
LRU-avlägsning övervägs. Utgångna poster rensas från både huvudmannens och
den globala redovisningen vid cacheaktivitet, medan avbrytande och valideringsfel inte
verkställer en partiell ersättning.

Cacheminnet avvisar icke-kanonisk Base64, överflödig utfyllnad, media som inte är JPEG, felaktiga eller
avkortade JPEG-filer samt JPEG-filer som genererar en varning under en begränsad avkodning av hela bilden med `sharp`.
Varje godkänd bild kodas om som en kanonisk JPEG, bredd och höjd härleds
från de avkodade bytevärdena i stället för att anroparens fält betros, och eventuella efterföljande
polyglot-byte kasseras i stället för att behållas. Endast den begränsade kanoniska komprimerade bufferten
belastas mot båda kvoterna. JSON-gränsen för överföring inkluderar Base64-påslaget för taket på 32 MiB
för avkodade indata. Varje
lagrad härledning registrerar sitt validerade JPEG-format och sin upplösning, samplingspolicy,
härledningsversion, skapelsetid, serverberäknade innehållshash och hashade överordnade
referens samt den betrodda anroparens innehållshash för den överordnade posten. Avbrytning kontrolleras
mellan asynkrona avkodnings-/hashfaser före den atomära lagringen i cacheminnet.

Den här leveransen ansluter ännu inte en produktionsproducent till routen och tillhandahåller inte
val av varianter med flera upplösningar. Den transparenta sökvägen för Video Bridge-begäranden
medför därför inget ytterligare arbete, medan huvudmanshärledning bunden till klientorganisationen och
hela FU-08-livscykeln för flera upplösningar förblir uttryckligt uppföljningsarbete i stället
för dokumenterat, komplett beteende.

Bildrutor textbeskrivs sekventiellt med den konfigurerade Video-modellen. En tom
Video-åsidosättning ärver Vision-inställningen. Om båda är tomma väljer Visions
automatiska router den effektiva modellen med stöd för bildanalys. Lyckade textbeskrivningar
ersätter den ursprungliga delen med ett stabilt `[Video description:`-prefix som även
markerar texten som en ej betrodd observation härledd från media och instruerar efterföljande
modeller att inte följa instruktioner som hittas i mediet. Cachenycklar för textbeskrivningar av bildrutor
inkluderar JPEG-bytedata, prompt, tidsstämpel och effektiv modell. Endast lyckade
textbeskrivningar cachelagras. Cacheposter bevarar den faktiska producentmodell som lyckades,
inklusive en reservmodell. Bryggan rapporterar `mixed` när olika bildrutor
producerades av olika modeller. En cacheträff återanvänder producentens identitet
i stället för att märka om den som den begärda routningsplanen. Resultatcacheminnet
för hela videon har en nyckel baserad på varje indata som ändrar utdata — prompt, effektiv
modell, samplingspolicy, antal bildrutor, semantiskt analysläge, SHA-256-
fingeravtrycket för den normaliserade fokusledtråden, fokusfönster, `transcript`,
`audioTranscript` och kontaktkartsflaggan — så en ändring av någon av dessa
dimensioner innebär en cachemiss, aldrig återanvändning av inaktuella data. Versionen,
tröskelvärdet och det begränsade antalet kandidatbildrutor för den visuella dedupliceringspolicyn anges också uttryckligen i
resultatcacheminnets nyckel och metadata. En policyändring kan därför inte återanvända en inaktuell
beskrivning av hela videon. Metadata för resultatcache v4 behåller läget och
fingeravtrycket, aldrig användarens råa uppgift. Skyddsräckesmetadata rapporterar både det
begärda och det effektiva analysläget. Ett begärt `focused`-läge utan
användbar användartext rapporteras med `full` som effektivt läge.

Skyddsräcket extraherar alla videodelar som stöds men beskriver inte fler än
`modalityBridgeVideoMaxVideos`. För ett mål som bevisligen har
`supportsVideo === false` blir misslyckade videor och videor över gränsen uttryckliga säkra
textmarkörer så att ingen råvideo finns kvar. När kapaciteten är okänd lämnas dessa delar
orörda. Mål med `supportsVideo === true` kringgår bryggan.
Klientbegärans avbrytningssignal fortplantas genom hämtning, broker-kö,
underprocesser och anrop för textbeskrivningar. Avbrytningar stoppar mellan videor och växlar aldrig öppet
till råmedia vid fel.

Körningsinställningarna lagras i databasen och valideras med Zod:

| Nyckel                              | Standardvärde | Intervall/beteende                                                                                                       |
| ----------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`       | Valfri körning, kräver aktivt val                                                                                        |
| `modalityBridgeVideoAnalysisMode`   | `"full"`      | `full` bevarar generiska textbeskrivningar; `focused` använder begränsad, ej betrodd kontext från den senaste användaren |
| `modalityBridgeVideoModel`          | `""`          | Ärv modellen från Vision Bridge                                                                                          |
| `modalityBridgeVideoFrameCount`     | `8`           | 1–16                                                                                                                     |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`   | `uniform`, `scene_aware` eller proportionell `segment_aware`; detektorfel faller tillbaka på `uniform`                   |
| `modalityBridgeVideoMaxVideos`      | `1`           | 1–4                                                                                                                      |
| `modalityBridgeVideoTimeout`        | `120000`      | 1000–120000 ms                                                                                                           |

Äldre sparade Video-timeoutvärden över 120 sekunder begränsas till
broker-deadlinen. Nya skrivningar av inställningar över den gränsen avvisas.
`GET /api/modality-bridge/video/runtime` kräver betrodd, stämplad lokalitet på loopback
före autentisering eller kontroll av körningsmiljön och kräver därefter hanteringsautentisering.
Det returnerar endast `available`, sanerade FFmpeg-/ffprobe-versioner och en fast
orsak när körningsmiljön inte är tillgänglig. Den interna extraheringsendpointen är inte
ett offentligt uppladdnings-API: mättnad i kön returnerar `503` plus `Retry-After`, en
frånkoppling från anroparen returnerar `499` och den fasta broker-deadlinen returnerar `504`. Konverterade svar lägger till
`video->text;model=<visionModel>;parts=<videos>` i det centrala
`x-omniroute-modality-bridge`-huvudet utan att ta bort Vision- eller Audio-segment.

### PII-maskerare (`piiMasker.ts`)

Körs i **båda** stegen.

- **`preCall`** klonar nyttolasten, går igenom `system`, `messages`, `input` och
  `prompt` (inklusive element som är vanliga strängar) och tillämpar `processPII()` (från
  `@/shared/utils/inputSanitizer`) på strängfälten `content`/`text`. När
  `PII_REDACTION_ENABLED=true` maskeras identifierade personuppgifter i den utgående
  nyttolasten. Detta är oberoende av `INPUT_SANITIZER_MODE` (som endast styr
  policyn för promptinjektion). När maskering är avstängd registrerar anropet antalet
  identifieringar utan att skriva om innehållet.
- **`postCall`** djupklonar svaret, kör `sanitizePIIResponse()` samt
  maskeraren för Responses API-formatet (`maskResponsesOutput` — omfattar
  `output_text` och `output[].content[].text`). Om någon maskering sker ersätter det
  modifierade svaret originalet.

Skyddsmekanismen blockerar aldrig; den annoterar endast (`meta.detections`,
`meta.redacted`) eller skriver om.

### Promptinjektion (`promptInjection.ts`)

Identifierar fientliga strukturer i innehåll som tillhandahållits av användaren och tillämpar den
konfigurerade policyn. Beteendet styrs av miljövariabler och
konstruktoralternativ:

| Inställning        | Miljövariabel                                                                                               | Standardvärde | Effekt                                                                                                                                                                                                    |
| ------------------ | ----------------------------------------------------------------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktiverad          | `INPUT_SANITIZER_ENABLED`                                                                                   | `true`        | När värdet är `false` avslutas skyddsmekanismen direkt.                                                                                                                                                   |
| Läge               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                             | `warn`        | Injektionspolicy: `block`, `warn` eller `log`. (`redact` godtas för bakåtkompatibilitet men tar **inte** bort injektionstext; omskrivning av personuppgifter i begäran styrs av `PII_REDACTION_ENABLED`.) |
| Blockeringströskel | alternativet `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`        | Lägsta allvarlighetsgrad som krävs för blockering. Medium observeras endast med standardinställningen.                                                                                                    |

**Lägesprioritet** (`getMode`): anroparens `options.mode` →
**åsidosättning via DB-funktionsflagga** för `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → miljövariabeln `INJECTION_GUARD_MODE` → miljövariabeln `INPUT_SANITIZER_MODE` →
`warn`. En åsidosättning via kontrollpanelen har därför företräde framför miljövariablerna, så gränssnittet
Feature Flags styr den aktiva skyddsmekanismen i realtid (ingen omstart krävs). DB-läsningen är felsäker:
om den misslyckas återgår skyddsmekanismen till det miljövariabelbaserade beteendet, och när ingen
åsidosättning har angetts är beteendet identiskt med en lösning som endast använder miljövariabler.

Identifieringskällor:

1. `sanitizeRequest()` från `@/shared/utils/inputSanitizer` (gemensam uppsättning
   detektorer som används på andra platser i pipelinen).
2. Inbyggda `DEFAULT_GUARD_PATTERNS` (för närvarande `system_override_inline` och
   `markdown_system_block`, båda med allvarlighetsgraden `high`).
3. Valfria `customPatterns` som skickas via konstruktoralternativ (strängar, reguljära
   uttryck eller poster av typen `{ name, pattern, severity }`).

När `mode === "block"` **och** minst en identifiering uppfyller tröskeln för
allvarlighetsgrad returnerar `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }`. I lägena `warn`/`log` loggar skyddsmekanismen men
tillåter anropet. Den gemensamma hjälpfunktionen `evaluatePromptInjection()` exporteras också
för anropare som behöver utvärdera prompter utan att gå via registret.

**Genomsökningsgräns (v3.8.20):** detektorn granskar endast de **första 16 KB** av
den sammanfogade prompttexten — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) i
`src/shared/utils/inputSanitizer.ts`. Både `detectInjection()` och
`evaluatePromptInjection()` använder `slice(0, MAX_INJECTION_SCAN_BYTES)` innan
mönsterloopen körs. Injektionsdirektiv finns nära början av indata, så detta
begränsar regexrelaterad CPU-/GC-användning för nyttolaster på flera hundra KB utan att försvaga identifieringen (se
#3932, #4041).

### Maskering av autentiseringsuppgifter (`credentialMasker.ts`)

Körs i **båda** stegen, sist i standardkedjan (prioritet `95`). Maskerar
välkända mönster för API-nycklar/hemliga token från den utgående nyttolasten (meddelandeinnehåll,
argument till verktygsanrop, verktygsresultat) **och** leverantörens svar, så att en
autentiseringsuppgift som klistrats in i en prompt (eller returnerats av ett verktygsresultat) inte läcks
till den överordnade leverantören eller tillbaka till klienten.

- **Endast opt-in**, enligt samma princip som maskering av PII (i anslutning till hård regel nr 20):
  inaktiverat om inte `settings.credentialRedactionEnabled === true` **eller**
  `CREDENTIAL_REDACTION_ENABLED=true`. När det är avstängt gör skyddsmekanismen ingenting —
  den blockerar aldrig och skriver aldrig om något.
- `redactCredentials()` går igenom hela nyttolast-/svarsträdet (`walkValue()`,
  säkert mot prototypförorening och cykelsäkert via `WeakSet`) och ersätter träffar med
  en platshållare av typen `[REDACTED:<type>]`, samtidigt som endast de grenar som faktiskt
  har ändrats klonas.
- `CREDENTIAL_PATTERNS` omfattar nycklar för LLM-leverantörer (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS-/SaaS-token (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), betalningsnycklar (Stripe, Square), nycklar
  för molntjänster (AWS-åtkomstnyckel, Twilio, SendGrid, Mailgun), privata nycklar/JWT:er,
  anslutningssträngar som innehåller autentiseringsuppgifter (`mongodb://user:pass@...` osv.) samt
  ett generiskt mönster för huvudvärdena `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Nycklar i huvudformat (`authorization`, `x-api-key`, `api-key`,
  `apikey`) maskeras strukturellt (endast värdet, medan schemaprefix som
  `Bearer `/`Basic ` bevaras) i stället för via det generiska reguljära uttrycket för text.
- Skyddsmekanismen blockerar aldrig; den skriver endast om (`modifiedPayload` /
  `modifiedResponse`) och lägger till metadata (`meta.credentialsRedacted`, `meta.count`).

Regressionsskydd: `tests/unit/credential-masker-guardrail.test.ts`.

## Baskontrakt (`base.ts`)

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
  block?: boolean; // true kortsluter kedjan
  message?: string; // visas vid blockering
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // returneras av preCall för att skriva om begäran
  modifiedResponse?: TValue; // returneras av postCall för att skriva om svaret
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

En "guardrail" signalerar "ingen ändring" genom att returnera antingen `void`, `{}`, eller
`{ block: false }`. Att returnera en `modifiedPayload`/`modifiedResponse` ersätter
värdet som flödar genom kedjan för nedströms "guardrails".
`signal?: AbortSignal` överför anroparens livscykel till "guardrails". En avbruten begäran är det avsiktliga "fail-open"-undantaget: mediabryggor stoppar arbetet och rensar upp utan att återställa råmedia till ett mål som inte förväntas stödja det.

## Register (`registry.ts`)

Singleton-objektet `guardrailRegistry` exponerar:

- `register(guardrail)` — lägger till (eller ersätter med normaliserat namn) en "guardrail" och
  sorterar om efter stigande `priority`.
- `clear()` / `list()` — administrativa hjälpfunktioner.
- `runPreCallHooks(payload, context)` — itererar aktiva "guardrails", skickar
  "payload" genom `modifiedPayload`, och stoppar vid den första `block: true`.
- `runPostCallHooks(response, context)` — samma flöde på svarsidan.
- `resetGuardrailsForTests({ registerDefaults })` — rensar tillstånd och registrerar
  valfritt om standardinställningarna för ren testisolering.

Båda körarna returnerar `{ blocked, payload|response, results, guardrail?, message? }`
där `results` är en array av `GuardrailExecutionResult`-poster som inkluderar
`blocked`, `skipped`, `modified`, `error` och `meta`-fält per "guardrail",
användbara för spårning.

### Inaktivera Guardrails per Begäran

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` aggregerar en
avdubblerad lista över "guardrail"-namn som ska hoppas över för den aktuella
begäran. Källor (alla valfria, alla sammanfogade):

- `apiKeyInfo.disabledGuardrails`
- Begärans kropp `disabledGuardrails` (högsta nivån)
- Begärans kropp `metadata.disabledGuardrails`
- Rubrik `x-omniroute-disabled-guardrails` (eller äldre
  `x-disabled-guardrails`)

Värden kan vara arrayer av strängar eller en kommaavgränsad sträng; namn
normaliseras till gemener kebab-case (`pii_masker` → `pii-masker`). Resultatet
skickas via `context.disabledGuardrails` till registret, som hoppar över
matchande "guardrails" (`skipped: true` i `results`).

## Exekveringsordning

För varje förfrågan som flödar genom `src/sse/handlers/chat.ts` och
`open-sse/handlers/chatCore.ts`:

1.  `resolveDisabledGuardrails(...)` bygger hopplistan från API-nyckel, brödtext
    och rubriker.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` kör skyddsräcken i stigande
    prioritetsordning:
    - Inaktiverade skyddsräcken registreras som `skipped`.
    - Varje skyddsräckes `preCall` kan skriva om nyttolasten via `modifiedPayload`.
    - Den första `block: true` kortsluter kedjan och hanteraren returnerar
      ett avvisningssvar från skyddsräcket.
3.  Den (potentiellt omskrivna) nyttolasten flödar in i kombinationsdirigering och uppströms
    vidarebefordran.
4.  Efter att svaret har sammanställts kör `guardrailRegistry.runPostCallHooks(...)`
    samma kedja på svaret. `block: true` här släpper det uppströms
    svaret.

Skyddsräcken som kastar ett fel registreras med `error: <message>` och loggas via
`logger.warn`, men kedjan fortsätter – fail-open per design.

## Konfiguration

Miljövariabler som läses av de inbyggda skyddsräckena:

| Variabel                              | Används av               | Effekt                                                                                                   |
| :------------------------------------ | :----------------------- | :------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Sätt `false` för att helt inaktivera detektering.                                                        |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Injektionspolicy: `warn`, `block` eller `log`. Det äldre värdet `redact` skriver inte om injektionstext. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Läge för injektionsskyddet; även en DB-funktionsflagga som **åsidosätter** miljövariablerna (DB > ENV).  |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | Minsta allvarlighetsgrad som `MODE=block` avvisar: `high` (standard), `medium` eller `low`.              |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | Äldre alias för `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                       |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | När `true` redigeras PII i förfrågan (oberoende av injektionsläge).                                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nedströms) | Styr maskeringsbeteendet på svarssidan.                                                                  |

Modality Bridge-skyddsräckena läser körningskonfiguration från den DB-stödda inställningsbutiken
(`getSettings()`), inte miljövariabler. Visions primära nycklar är
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` och
`modalityBridgeCacheMaxEntries`. De äldre
`visionBridge*`-nycklarna accepteras endast som den dokumenterade en-cykels läs-
fallbacken; instrumentpanelsskrivningar använder de primära nycklarna. Standardvärden och fallback-
upplösaren finns i `src/shared/constants/modalityBridgeDefaults.ts`, med äldre
konstanter bevarade i `src/shared/constants/visionBridgeDefaults.ts`.

Ljud använder `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` och `modalityBridgeAudioMaxClips`, plus de delade
`modalityBridgeCache*`-inställningarna. Ljud har ingen fallback för äldre nycklar eftersom dessa
nycklar introducerades med Modality Bridge-schemat.

Video använder `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` och
`modalityBridgeVideoTimeout`, plus de delade `modalityBridgeCache*`-inställningarna.
Det är inaktiverat som standard eftersom FFmpeg/ffprobe är valfria operativa
beroenden och bildtextning av ramar lägger till latens och modellkostnad.

## Anpassade Guardrails

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

Steg:

1.  Skapa `src/lib/guardrails/myGuardrail.ts` som utökar `BaseGuardrail`.
2.  Implementera `preCall` och/eller `postCall`.
3.  Registrera antingen vid importtillfället (push från `registerDefaultGuardrails`) eller
    anropa `guardrailRegistry.register(...)` vid körning – registret ersätter
    alla tidigare guardrails med samma normaliserade namn.
4.  Lägg till tester under `tests/unit/` (befintliga exempel:
    `tests/unit/guardrails-registry.test.ts`,
    `tests/unit/prompt-injection-guard.test.ts`,
    `tests/unit/guardrails/visionBridge.test.ts`).

## Testning

Använd `resetGuardrailsForTests()` mellan tester för att starta från ett känt tillstånd.
Skicka `{ registerDefaults: false }` för att starta med ett tomt register och
registrera endast de guardrails som testas. Vision Bridge accepterar beroendeinjektion
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge exponerar motsvarande
gränssnitt för inställningar, funktioner, STT-modellval, autentiseringskontroller och transkription.
Tester kan därför utföra båda flödena utan DB- eller nätverksåtkomst.

## Se även

- `src/lib/guardrails/` — implementering
- `src/shared/utils/inputSanitizer.ts` — delad detektor som driver
  prompt-injektion och PII-maskering
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge standardinställningar och
  lista över tvingade-bryggmodeller
- `src/shared/constants/modalityBridgeDefaults.ts` — delade Vision/Audio körningsstandardinställningar
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalt lager (strömbrytare, nedkylningstider)
- `docs/reference/ENVIRONMENT.md` — fullständig referens för miljövariabler

## Täckning av injektionsskyddsrutter & red-team (Fas 8 · Block D)

Injektionsskyddet (`createInjectionGuard` / `withInjectionGuard`) täcker alla rutter
som accepterar användarprompter. Det respekterar `INJECTION_GUARD_MODE` (standard `warn` = logga endast;
`block` = returnerar HTTP 400 `SECURITY_001`).

| Typ              | Rutter                                                                                                                                               | Standardläge |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :----------- |
| Text (befintlig) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | varna        |
| Generativ        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | varna        |
| Data             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | varna        |

Textutvinning (`extractMessageContents`) täcker `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (nattlig, `nightly-llm-security.yml`):** promptfoo validerar att varje rutt blockerar
OWASP-LLM-korpusen i `INJECTION_GUARD_MODE=block`; garak kör sonder (hoppar över utan hemlighet).
`moderations` inkluderas för konsekvens – operatörer i block-läge kan undanta den via
`resolveDisabledGuardrails`.

Det nattliga arbetsflödet (`.github/workflows/nightly-llm-security.yml`, cron + manuell
dispatch) har två jobb:

- **`promptfoo-guard` (blockerande)** – kör `promptfoo eval -c promptfooconfig.yaml`
  med `INJECTION_GUARD_MODE=block`. Varje fientligt fall (t.ex. "ignorera alla
  tidigare instruktioner...", DAN-liknande jailbreaks) bekräftar att svaret innehåller
  `error.code === "SECURITY_001"`, dvs. att skyddet faktiskt avvisade begäran.
- **`garak` (rådgivande)** – kör garak `--probes promptinject,dan,leakreplay`
  mot en lokal OmniRoute-instans (`http://localhost:20128/v1`). Begränsas av en
  leverantörshemlighet (`PROMPTFOO_PROVIDER_KEY`); hoppar över graciöst och är suffixerat
  `|| true`, så det rapporterar utan att CI misslyckas.

Täckningen av skyddshjälpen (`createInjectionGuard` / `withInjectionGuard`)
spänner över varje promptbärande `/v1`-rutt; prompttext hämtas från
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` av
`extractMessageContents()` i `src/shared/utils/inputSanitizer.ts`.
