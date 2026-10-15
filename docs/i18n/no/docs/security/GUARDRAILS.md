# Guardrails (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sannhetskilde:** `src/lib/guardrails/`
> **Sist oppdatert:** 2026-08-29 — v3.8.51 (opprinnelsen til Video Bridge-transkripsjoner oppgis av kalleren,
> og er ennå ikke verifisert av serveren — presisert i henhold til #11661)

Sikkerhetsmekanismer håndhever sikkerhet, retningslinjer og innholdstransformasjoner i grensesnittet
mellom OmniRoute og oppstrømsleverandører. Hver sikkerhetsmekanisme kan inspisere (og
eventuelt avvise, transformere eller annotere) forespørselsnyttelaster (`preCall`) og
oppstrømssvar (`postCall`).

Systemet er **fail-open**: Hvis en sikkerhetsmekanisme utløser et unntak under kjøring, registrerer
registeret feilen og fortsetter med neste sikkerhetsmekanisme i stedet for å la
forespørselen mislykkes. Blokkering er en eksplisitt beslutning (`block: true`), aldri et uhell.

## Innebygde sikkerhetsmekanismer

Registeret laster automatisk inn seks sikkerhetsmekanismer i prioritert rekkefølge ved import
(se `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Navn                | Trinn          | Fil                   |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lavere prioritetstall kjøres **først**.

### Vision Bridge (`visionBridge.ts`) — Modalitetsbro PR-1

Fanger opp forespørsler som inneholder bilder og er rettet mot **modeller uten bildestøtte**, og enten
omdirigerer hele forespørselen til en modell med bildestøtte eller erstatter
bildedelene med tekstbeskrivelser produsert av en konfigurerbar bildemodell før
oppstrømskallet. Dette gjør at leverandører som bare støtter tekst, kan håndtere
multimodale nyttelaster på en transparent måte.

Flyt:

1. Hopp over hvis målmodellen allerede støtter bilder (med mindre den finnes i
   listen over modeller som alltid skal bruke broen, `isVisionBridgeForcedModel`).
2. Trekk ut bildedeler via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), som delegerer til den **felles mediedetektoren**
   `detectMediaParts()` i `open-sse/utils/mediaParts.ts` — den
   eneste sannhetskilden som deles med kompatibilitetsfilteret for kombinasjonsmodeller.
   Uttrekk er begrenset til godkjente deler på toppnivå med formater som
   `replaceImageParts` kan sette inn igjen (uttrekk↔erstatning-kontrakten): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` og Responses API `input_image`. Nøstede treff og
   formater som bare fungerer som indikatorer, tilhører kombinasjonsfilteret og trekkes aldri ut.
   Hopp over hvis ingen blir funnet.
3. Fastsett kjøretidskonfigurasjonen via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nye innstillingsnøkler for `modalityBridge*`
   har forrang; eldre nøkler for `visionBridge*` beholdes som en **reserve i én syklus**
   (vindu for tilbakerulling). Hopp over før gjennomgang av medier hvis
   broen er deaktivert.
4. Modusvelgeren (`modalityBridgeVisionMode`, se tabellen nedenfor) avgjør
   om forespørselen skal omdirigeres eller beskrives. Omdirigering returnerer `modifiedPayload` med bare `model`
   byttet ut, samt metadata `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beskrivelsesforløp: begrens antall bilder til `maxImages`, sett sammen den oppgavebevisste ledeteksten,
   slå opp i beskrivelsesbufferen, kall bildemodellen **parallelt**
   (`Promise.allSettled`), og sett inn tekstdeler av typen `[Bilde N]: <beskrivelse>`
   i stedet. En mislykket beskrivelse gir `null`, og den opprinnelige bildedelen
   **bevares** (#4012) — unntatt i kombinasjonsmodellens beskrivelsesforløp når alle
   beskrivelser mislyktes, der en bekreftet oppstrømstjeneste uten bildestøtte får en
   `(utilgjengelig — ingen leverandør med bildestøtte er tilkoblet)`-plassholder i stedet (#8430).
6. Returner `modifiedPayload` + metadata (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Modusvelger (`modalityBridgeVisionMode`)

| Modus      | Standard | Virkemåte                                                                                                                                                                                                                                                                                                      |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Eldre heuristikk, uendret (#6640/#7204): modeller som ikke er kombinasjonsmodeller, samt `auto/`-modeller, omdirigeres til den beste bildemodellen med mindre den opprinnelige modellen allerede har brukbar legitimasjon (da beskrives bildene); kombinasjonsmål beskriver alltid.                            |
| `describe` |          | Beskriv alltid — omdirigeringsblokken hoppes fullstendig over; modellen brukeren valgte, svarer alltid.                                                                                                                                                                                                        |
| `reroute`  |          | Tving omdirigering: vernet som beholder modellen med legitimasjon, omgås. Legitimasjonsvernet for omdirigerings-**målet** gjelder fortsatt — når det ikke finnes noe brukbart bildemål, går forespørselen videre til beskrivelse, slik at råbilder aldri når en bakendtjeneste som bare støtter tekst (#8430). |

Tvungne moduser avbryter **før** den automatiske heuristikken kjøres. Oppførselen til `auto`
er byteidentisk med sikkerhetsmekanismen fra før PR-1.

#### API-nøkkelomfang (`visionBridgeKeyScope.ts`)

Når innringerens API-nøkkel begrenser `allowedConnections`, kvotepuljer
(`allowedQuotas`) eller modeller (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), velger broen bare
omdirigerings- og beskrivelsesmodeller som nøkkelen har tillatelse til å bruke, på tilkoblinger nøkkelen
har tillatelse til å bruke. Beskrivelseskallet går deretter alltid gjennom OmniRoute-selvsløyfen med
`x-omniroute-self-loop-key-id`-hodet, slik at den mottakende chatteforespørselen
håndhever nøkkelens tilkoblings- og modellpolicy på nytt. `enforceApiKeyPolicy()`
respekterer dette hodet bare sammen med selvsløyfens bearer-token, slik at det bare
kan begrense tilgangen, og en id som ikke kan slås opp, blir avvist.

Hvis ingen bildemodell er tillatt for nøkkelen, trer beskrivelsesforløpet til side og
forespørselen sendes gjennom uendret, med samme feiltolerante oppførsel som en deaktivert
sikkerhetsmekanisme (metadata `{ skipped: true, reason: "no_permitted_vision_model" }`).
Forespørsler uten nøkkel, og nøkler uten disse begrensningene, oppfører seg nøyaktig som
før.

#### Oppgavebevisst beskrivelsesledetekst (`modalityBridgeVisionTaskAware`)

Standardverdien er **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) legger til
teksten fra den **siste brukermeldingen** (avkortet til 500 tegn) i den
grunnleggende beskrivelsesinstruksen, slik at beskrivelsen styres mot det brukeren faktisk
spurte om (codex-vision-proxy-mønsteret), og ber synsmodellen om å transkribere synlig
tekst. Når flagget er slått av — eller det ikke finnes brukertekst — brukes den grunnleggende instruksen uendret.

Beskrivelses-selvsløyfens egen OpenAI-kompatible forespørsel (`callVisionModelSingle()`
i `visionBridgeHelpers.ts`) ber alltid om `image_url.detail: "high"` —
uten unntak, for alle kallere/leverandører, og ikke betinget av noe klientsignal.
Sampling med lav detaljgrad reduserer OCR-nøyaktigheten for nettopp
teksttranskriberingsoppgaven denne instruksen ber om, så selve beskrivelseskallet ber alltid om høy
detaljgrad uavhengig av detaljnivået den opprinnelige innkommende forespørselen brukte. Dette
påvirker bare den interne forespørselskroppen for beskrivelsen; det endrer ikke hvordan
OmniRoute videresender kallerens egen `image_url.detail` i hovedforespørselen —
den standardverdien brukes separat, og bare for oppdagede OpenCode-klienter, i
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Grenen for
Anthropic-wireformatet i beskrivelses-selvsløyfen har ikke noe `detail`-felt
og påvirkes ikke av noen av standardverdiene.

#### Grense for beskrivelsesresultat (`modalityBridgeVisionMaxChars`)

| Nøkkel                         | Standardverdi | Område              |
| ------------------------------ | ------------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`           | `0` eller 100–50000 |

`0` (standardverdien) betyr **ingen grense** — beskrivelsen som returneres av
`callVisionModel()`, sendes videre uendret, slik at eksisterende
oppførsel bevares. Enhver verdi i området 100–50000 avkorter beskrivelsen med et
`…`-suffiks før den settes inn igjen som `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` i `src/lib/guardrails/visionBridge.ts`).
Øk denne for OCR-oppgaver med mye detaljer, der modellen nedstrøms trenger hele
transkripsjonen; reduser den for å begrense tokenbruk fra pratsomme synsmodeller.
Kontrollpanelfeltet finnes i Avansert-panelet på Syn-fanen
(`modality-bridge-max-chars` i `ModalityBridgeVisionTab.tsx`) og justerer enhver
verdi mellom 1 og 99 opp til minimumsverdien 100, samtidig som en eksplisitt `0`
forblir urørt — `0` er en gyldig Zod-verdi i seg selv
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ikke bare
standardverdien for «ikke angitt».

#### Beskrivelsesbuffer (`modalityBridge/bridgeCache.ts`)

Prosessomfattende delt LRU- og TTL-buffer i minnet for beskrivelsesresultater.
Nøkkel = `sha256(imageRef + composedPrompt + configuredBridgeModel)` med
lengdeprefiksramming (ingen kollisjoner mellom feltgrenser). Modellkomponenten er
den **konfigurerte** bromodellen, ikke modellen som faktisk svarte —
`callVisionModel` kan bruke en reservemodell internt, og nøkkelbruk per forsøk ville
fragmentere bufferen. Mislykkede beskrivelser bufres aldri. Innstillinger:

| Nøkkel                          | Standardverdi | Område  |
| ------------------------------- | ------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`        | —       |
| `modalityBridgeCacheTtlMinutes` | `60`          | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`         | 10–5000 |

#### Normalisering av eksterne bilder (selvsløyfebeskrivelse/base64-henting)

Når broen selv henter et **eksternt** bilde — Anthropics interne beskrivelseskall
og base64-konverteringen for claude-wireformat
(`ensureBase64ImagesForClaudeWire`), begge via
`fetchRemoteImageAsDataUri()` i `visionBridgeHelpers.ts` — sendes den resulterende
data-URI-en gjennom `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) før den bygges inn i forespørselen til
synsmodellen. For store bilder skaleres ned til en **langside på 2048 px** (tilsvarende
grensen for størrelsesendring som OpenAI/Anthropic allerede bruker på serversiden), noe som reduserer
opplastingsmengde og ventetid uten å endre hva synsmodellen ser. Størrelsesendringen
bruker `sharp`, lastet via dynamisk import: på en plattform der den systemspesifikke
binærfilen ikke kan lastes, **kaster aldri** `normalizeDataUri()` en feil — den faller tilbake
til å sende de opprinnelige bytene uendret videre, slik at banen for beskrivelse/base64-konvertering
alltid fortsetter å fungere. Byte som ikke utgjør et bilde (en henting som ikke returnerte et
dekodbart bilde), sendes også videre uendret. Denne normaliseringen er
begrenset til bilder broen henter for sitt eget interne kall — den brukes aldri
på kallerens rå nyttelast som sendes videre, i samsvar med prinsippet om
kun eksplisitt valgte endringer (Hard regel #20).

#### Innstillingsskjema + migrering

De nye `modalityBridge*`-nøklene Zod-valideres i `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*`-trioen og
`modalityBridgeAudio*`-gruppen som brukes av lydbroen. Migreringen
`141_modality_bridge_settings.sql` kopierer eksisterende eldre
`visionBridge*`-verdier til de tilsvarende nye nøklene (idempotent og overskriver aldri
en `modalityBridge*`-verdi angitt av en operatør); de eldre nøklene forblir
godtatt som reserve ved lesing i én utgivelsessyklus.

#### Transparenshode + statistikk

Svar som er transformert av beskrivelsesfunksjonen, inneholder
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(bygd av `buildModalityBridgeHeader()` i `modalityBridge/bridgeStats.ts`,
lagt til av `withModalityBridgeHeader()` i `src/sse/handlers/chatHelpers.ts`).
Omdirigerte forespørsler får **ikke** noe hode — nyttelasten var urørt, og modellbyttet
er allerede synlig i `model`-feltet i responskroppen.

`GET /api/modality-bridge/stats` (administrasjonsautentisering, samme nivå som
`GET /api/settings`) returnerer minnebaserte tellere per modalitet
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` for `vision`, `audio` og
`video`. `averageLatencyMs` bruker `latencySamples`, ikke alle forsøk, som
nevner. En operasjon uten tidsmåling oppretter ikke en kunstig måling på null
millisekunder. `bridged` forblir det bakoverkompatible aliaset for vellykkede
konverteringer; mislykkede forsøk øker det ikke.
Tellerne nullstilles ved omstart av prosessen etter hensikten
(telemetri, ikke regnskapsføring).

#### Konfigurasjon av kontrollpanelet

Den dedikerte kontrollpanelsiden er
`/dashboard/settings/modality-bridge`. Fanene `Vision`, `Audio` og
`Video`, som kan adresseres via URL, bevarer spørringsparametere når `tab`-verdien
endres. Vision-fanen tilbyr aktivering, modus, modellvalg (inkludert den automatiske
standarden), oppgavebevisst prompting, avanserte grenser for tidsavbrudd, bilder,
beskrivelseslengde og hurtigbuffer, kjøretidstellere og en beskyttet
eksempelforespørsel. Audio-fanen er også aktiv: den tilbyr aktivering, en
modellvelger kun for STT med Auto, grenser for tidsavbrudd og maksimal klipplengde,
lydtellere og en `input_audio`-eksempeltest. Video-fanen er funksjonell: den viser
kjøretidstilstanden for FFmpeg/ffprobe – én av fire eksplisitte grensesnitttilstander
(`unknown` mens kontrollen pågår eller ikke kunne fullføres, `restricted` på en
kontrollpanelvert som ikke er loopback, der kontrollen hoppes over på klientsiden,
`unavailable` når kontrollen er utført og manglende tilgjengelighet er bekreftet,
eller `available` med FFmpeg/ffprobe-versjonene) – lagrer grenser for aktivering,
modell, bilderammer, video og tidsavbrudd, filtrerer modellvelgeren til modeller med
støtte for bildebehandling og viser videotellere.

Det tidligere Vision Bridge-kortet under AI-innstillinger er en kompatibilitetslenke
til den nye siden; det har ikke lenger en separat kopi av skjemaet. Media Providers
lenker også arbeidsflytene Image-to-Text og Speech-to-Text til de tilsvarende
Modality Bridge-fanene uten å fjerne den eksisterende Speech-to-Text-lekeplassen.

**Omgåelse av tilgangskontroll for selvløkke:** Når describe-kallet rutes gjennom
OmniRoutes egen `/v1`-selvløkke (leverandørmodell som ikke er standard), sender
underforespørselen `x-omniroute-admission-bypass: internal` og autentiseres med den
fastsatte legitimasjonen for selvløkken – den lokale `sk_omniroute`-sentinelen i
lokal modus, eller den operatørkonfigurerte miljønøkkelen `OMNIROUTE_API_KEY` /
`ROUTER_API_KEY` (#1350), slik at distribusjoner med `REQUIRE_API_KEY=true`
fortsatt kan kjøre describe-kallet. Omgåelsen godtas bare for akkurat denne
legitimasjonen, slik at eksterne klienter ikke kan bruke headeren til å hoppe over
tilgangskontrollen.

Eldre standardverdier ligger i `src/shared/constants/visionBridgeDefaults.ts`;
de nye standardverdiene for modus, oppgavebevissthet og hurtigbuffer samt
innstillingsløseren ligger i
`src/shared/constants/modalityBridgeDefaults.ts`. Beskyttelsesmekanismen tilbyr
konstruktøralternativet `deps`, slik at tester kan injisere falske implementasjoner
av `getSettings` og `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) – Modality Bridge PR-3

Fanger opp chatforespørsler som inneholder lyd, før de når et mål som ikke er
kjent for å godta lydinndata. Den omruter aldri chatforespørselen: lyddeler
transkriberes gjennom det eksisterende OpenAI-kompatible multipart-endepunktet,
og den valgte chatmodellen fortsetter med teksttranskripsjoner.

Flyt:

1. Fastsett `supportsAudio` gjennom `getResolvedModelCapabilities()`. Eksplisitte
   metadata fra leverandørregisteret har forrang, deretter statiske modellmetadata
   og til slutt synkroniserte `modalities_input`. En deklarert inndataliste uten
   `audio` er `false`; hvis det ikke finnes informasjon om egenskapen, forblir
   verdien `null`. Både `false` og `null` aktiverer den konservative broen, mens
   `true` omgår den.
2. Fastsett `modalityBridgeAudio*`-innstillinger, og hent ut utskiftbare
   lyddeler på toppnivå fra hver melding gjennom den delte
   `detectMediaParts()`-detektoren. Støttede overføringsformater er OpenAI
   `input_audio`, `audio_url` og `source.media_type: "audio/*"`. Nestet lyd
   oppdages for ruting, men fjernes ikke av utskiftingsbanen. Arbeidet begrenses
   av `modalityBridgeAudioMaxClips`; senere deler forblir urørt.
3. Bruk en konfigurert `provider/model`, eller la `selectAudioBridgeModel()` gå
   gjennom `AUDIO_TRANSCRIPTION_PROVIDERS` i stabil katalogrekkefølge og velge
   den første modellen med brukbar, aktiv leverandørlegitimasjon.
4. `callAudioTranscription()` konverterer base64-/data-URI-lyd til en multipart-
   `file`, eller laster ned en ekstern `audio_url` gjennom den utgående
   beskyttelsesmekanismen som bare tillater offentlige adresser, med DNS-binding
   og en grense på 25 MB. Deretter POST-er den filen og den valgte modellen til
   den lokale `/v1/audio/transcriptions`-selvløkken, autentisert med
   `resolveSelfLoopBearer()`. Den eksisterende transkripsjonsruten utfører
   normalt oppslag av legitimasjon, håndtering av nedkjølingsperioder og
   hastighetsbegrensning samt videresending til leverandøren.
5. Vellykkede kall erstatter delene sine med `[Audio N]: <transcript>`. Kallene
   kjøres med `Promise.allSettled`: En enkeltfeil bevarer den opprinnelige
   lyddelen (#4012-kontrakten). Hvis alle kall mislykkes og målet beviselig har
   `supportsAudio === false`, blir delene
   `[Audio N]: (unavailable — no STT provider connected)` (#8430-kontrakten). For
   et ukjent mål (`null`) forblir innholdet urørt hvis alle kall mislykkes. Et
   mål som beviselig kun støtter tekst og ikke har brukbar STT-legitimasjon, får
   den samme eksplisitte plassholderen uten at det foretas et nettverkskall.

Vellykkede transkripsjoner bruker den prosessomfattende LRU/TTL-hurtigbufferen
for Modality Bridge. Nøkkelen kombinerer lydreferansen, den stabile
operasjonsetiketten `audio-transcription` og den valgte STT-modellen. Feil
hurtigbufres aldri. Lydforsøk oppdaterer de delte tellerne `bridged`, `cacheHits`,
`failures` og `lastUsedAt`. Transformerte svar inneholder
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; urørte
forespørsler mottar ikke et Audio Bridge-segment.

Kjøretidsinnstillingene er databasebaserte og validert med Zod:

| Nøkkel                        | Standardverdi | Område                  |
| ----------------------------- | ------------- | ----------------------- |
| `modalityBridgeAudioEnabled`  | `true`        | —                       |
| `modalityBridgeAudioModel`    | `""`          | Automatisk eller STT-ID |
| `modalityBridgeAudioTimeout`  | `60000`       | 1000–300000             |
| `modalityBridgeAudioMaxClips` | `3`           | 1–10                    |

Den delte hurtigbufferen styres fortsatt av `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` og `modalityBridgeCacheMaxEntries`.

### Videobro (`videoBridge.ts`, `videoBridgePipeline.ts`)

Fanger opp videodeler på toppnivå i Chat Completions-`messages` og Responses
API-`input` før et mål uten kjent innebygd videostøtte kalles.
Støttede formater er `input_video`, `video_url`, `video_source`, HTTPS-URL-er
og `data:video/*;base64,...`-data-URI-er. Vanlige filnavn i tekst behandles ikke
som video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) håndterer gjennomgang av forespørselen,
kapasitets-/policykontrollen, aggregering per forespørsel og responsnyttelasten.
Arbeid per video – innhenting, hurtigbufferen for hele resultatet, beskrivelse av en
bildesekvens (som slår sammen eventuell lydtranskripsjon oppgitt av kalleren), samt
målinger/avbrudd/opprydding per forsøk – er skjult bak `processVideoPart` i
`videoBridgePipeline.ts`, som kalles én gang per videodel i `preCall`-løkken.
Denne modulen definerer også de eksplisitte portgrensene `VideoMediaBrokerPort`
(innhenting av byte og uttrekking av utvalgte bilder), `VideoAudioTranscriptionPort`
(sammenslåing av en lydtranskripsjon oppgitt av kalleren med de utvalgte bildetekstene) og
`VideoDrilldownPort` (persistensgrensen for detaljert bildeanalyse; ennå ikke koblet
til `processVideoPart` – bare den separate ruten `/api/modality-bridge/video/drilldown`
skriver detaljanalyseoppføringer i dag).

Den offentlige `/v1`-forespørselsbanen importerer eller starter aldri en underprosess.
Eksterne videoer lastes ned med en grense på 50 MiB; innebygde base64-videoer har en
konservativ grense på 36 MiB dekodet per video, slik at modell-/meldings-/innrammingskonvolutten
kan holdes innenfor grensen på 50 MiB for godkjenning av offentlige JSON-forespørsler.
Innebygd lengde og anslag for dekodet størrelse kontrolleres før allokering. HTTPS
kreves for den opprinnelige eksterne URL-en og for hver omdirigering, ved bruk av det
eksisterende utgående vernet som kun tillater offentlige mål og bruker DNS-festing.
Bytene krysser deretter den nøyaktige interne meglergrensen
`POST /api/modality-bridge/video/extract`. Denne ruten er både
`LOCAL_ONLY` og `SPAWN_CAPABLE`, godtar bare en autentisert forespørsel per prosess
fra en klarert loopback-adresse og godtar aldri en URL, filsystembane, kjørbar fil
eller argumentliste. API-pipelinen for brødtekststørrelse og behandlerens inkrementelle
brødtekstleser håndhever uavhengig av hverandre en inngangsgrense på 50 MiB for megleren.
Den avgrensede køen kjører én uttrekking om gangen, tillater fire ventende jobber og
begrenser ventende inndata til 100 MiB.

I megleren leser `ffprobe` en privat lokal fil; den faste tillatelseslisten for
formater utelukker spilleliste- og manifestformater. For tillatte beholdere i
MOV-familien forblir eksterne MOV-datareferanser deaktivert som standard, og den
faste kommandoen aktiverer dem ikke. Både `ffprobe` og `ffmpeg` bruker
protokolltillatelseslisten som kun tillater `file`, én tråd, faste argumentmatriser,
ingen shell og kjørbare filer funnet via `PATH`. Omslagsstrømmer med vedlagte bilder
er ikke avspillbare kandidater. Alle avspillbare strømmer må overholde grensene, og en
eksplisitt standardstrøm foretrekkes før det deterministiske tilbakefallet til laveste
indeks. Videoer er begrenset til 600 sekunder, 8 192 piksler per dimensjon og
33 554 432 kildepiksler. FFmpeg henter 1–16 JPEG-bilder fra midtpunkter, skalerer ned
den lengste kanten til maksimalt 1 024 piksler uten å oppskalere mindre inndata og
mottar aldri en URL. Utvalget er som standard `uniform`. De valgfrie policyene
`scene_aware` og eksperimentelle `segment_aware` utfører én ekstra fast FFmpeg-passering
over den allerede validerte lokale strømmen, velger avgrensede `showinfo`-scenetidsstempler
og faller deterministisk tilbake til de samme uniforme midtpunktene ved detektorfeil,
tidsavbrudd, feilformatert utdata eller et tomt kandidatsett. Segmentbevisst modus
fordeler midtpunktutvalg proporsjonalt mellom de validerte sceneintervallene;
segmentbevisst evidens og tilbakefallsatferd beskrives nedenfor. Den absolutte grensen
på 16 bilder brukes etter utvalget i alle policyer. Når en scenebevisst forespørsel
bare har et budsjett på ett bilde, bruker den det uniforme midtpunktet i det aktive
helvideo- eller fokusvinduet og rapporterer `policyEffective: uniform`: Ett enkelt
valgt scenebilde kan ikke bevare begge tidsmessige ender. En kaller kan valgfritt angi
et endelig fokusvindu (`start`/`end` i sekunder); grensene begrenses til mediets
varighet, omvendte eller ikke-endelige vinduer avvises, og alle utvalgspolicyer
utføres bare innenfor det normaliserte intervallet. Det resulterende vinduet
inkluderes i utvalgsmetadataene og i det ikke-klarerte beskrivelsesprefikset, slik at
nedstrømsmodeller kan skille et fokusert utdrag fra hele tidslinjen.

Semantisk fokus for bildetekster er en separat, eksplisitt innstilling. Standardmodusen
`full` for analyse beholder den eksisterende bildeledeteksten og videresender aldri
forespørselstekst til bildetekstmodellen. I `focused`-modus leser broen bare den siste
ikke-tomme, brukerforfattede `text`/`input_text` fra samme Chat- eller
Responses-beholder, normaliserer den til NFC, slår sammen kontrolltegn og mellomrom
og begrenser den til 500 Unicode-kodepunkter. Et tomt resultat faller tilbake til den
nøyaktige `full`-ledeteksten. Et brukbart hint serialiseres som JSON i en egen blokk
for ikke-klarert brukerkontekst og kan bare prioritere observerbare detaljer; det kan
ikke overstyre den separate advarselen mot å følge instruksjoner som er synlige eller
hørbare i mediet. Tekstlig fokus utleder aldri `start`/`end` eller endrer den
tidsmessige utvalgsfunksjonen.

#### FU-07 strukturell segmentevidens

`segment_aware` bruker én avgrenset forhåndsanalysepassering over den allerede validerte
lokale videostrømmen. Den faste filterkjeden skalerer først til maksimalt 320 piksler
i bredden, oppdager sceneendringer og frosne intervaller, og sampler deretter med 1 bilde per
sekund for uskarphet, gjennomsnittlig luminans og romlig/temporal informasjon. Passeringen er
begrenset til 600 strukturelle sampler, én FFmpeg-/filtertråd, de samme
tillatelseslistene for kun `file`-protokollen og containere, en grense på 1 MiB for prosessutdata
og maksimalt 30 sekunder innenfor meglerens delte avbrudds-/tidsfrist. Den
godtar aldri en kommando, et filter, en bane eller en URL fra forespørselen.

De strukturelle verdiene er deterministiske samplingsbevis, ikke semantisk
videoforståelse. De utleder ikke motiver, handlinger, bildetekster, tale eller brukerens
hensikt. Scene- og frysegrenser danner segmenter. Frysedekning, uskarphet,
eksponering, romlige detaljer og temporale endringer påvirker bare hvordan det eksisterende
budsjettet på 1–16 bilder fordeles. Et fullstendig frosset segment begrenses til ett bilde,
mens segmenter som ikke er frosset, konkurrerer om det gjenværende budsjettet. Når antallet grenser
overstiger antallet bilder, beholdes jevn dekning av tidslinjen, slik at raske klipp tidlig
ikke kan skjule et langt avsluttende segment. Scenegrenser innenfor analysens
oppløsning på 1 sekund fra en frysegrense slås sammen.

Manglende filtre, ugyldige/tomme bevis, en detektorfeil eller tidsavbrudd i den
avgrensede forhåndsanalysen faller tilbake til den nøyaktige policyen med jevnt fordelte midtpunkter. Et avbrudd
fra den som kaller, eller en tidsfrist fra megleren, faller ikke tilbake: Det avslutter den kjørende
underprosessen, forhindrer senere bildeuttrekking, og det private midlertidige treet
fjernes i `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genererer deterministiske, reelle FFmpeg-
testgrunnlag for besparelser i bildetekstkall etter deduplisering, budsjettfordeling for
tettpakket bevegelse, bevis for uskarphet/eksponering/SI-TI, raske klipp med en lang hale og
falske positiver ved gradvis toning. Skriptet registrerer veggklokketid for forhåndsanalysen og,
der `/usr/bin/time` er tilgjengelig, underprosessens CPU-bruk og maksimale RSS. Kvalitetskontrollene
er kun strukturelle orakler. Kvaliteten til den reelle bildetekstmodellen forblir `HOLD` fordi denne testbenken
ikke har noe autorisert endepunkt eller noen fastlåst bedømmer. Økonomiske besparelser forblir også `HOLD`
med mindre `--caption-cost-per-call-usd` oppgir et eksplisitt positivt kostnadsestimat
per kall. Skriptet fabrikerer aldri noen av resultatene.

Hvert bilde er begrenset til 4 MiB, alle råbilder samlet til 23 MiB, og det
serialiserte meglersvaret til 32 MiB. En privat midlertidig katalog fjernes
i `finally`. OmniRoute inkluderer ikke FFmpeg og godtar ikke en egendefinert
bane til den kjørbare filen. Før generering av bildetekster utfører broen en konservativ visuell
dedupliseringspassering: Hvert JPEG-bilde reduseres til en 16×16 gråtonebuffer og
sammenlignes bare med det sist beholdte bildet. For et forespurt bildetekstbudsjett
på mer enn ett bilde leverer uttrekkingen et
avgrenset kandidatsett på opptil det dobbelte av budsjettet, men aldri mer enn 16 bilder.
Den forespurte grensen brukes først etter deduplisering, og den første og siste
valgte kandidaten bevares under den endelige uttynningen når budsjettet er minst
to. Den versjonerte policyen
`grayscale-16x16-mean-cells-v2` bruker den største verdien av gjennomsnittlig luminansdifferanse og
andelen miniatyrbildeceller med en normalisert differanse på minst 0,05.
Duplikatterskelen er konstanten 0,04, valgt for forutsigbarhet fremfor
å være eksponert som en kjøretidsinnstilling. Dette sekundære
høykontrastsignalet bevarer små bevegelser og endringer i synlig tekst som en
sammenligning basert kun på gjennomsnitt kan skjule. Feil i sammenligningsfunksjonen eller dekoderen faller tilbake og
beholder dekningen. Utdatametadata skiller mellom uttrukne kandidater, bilder som ble brukt,
og visuelle duplikater som ble forkastet.

En eksplisitt merket videodel kan be om et tidsstemplet kontaktark. Broen
bygger et JPEG-rutenett med maksimalt 4 kolonner og 16 bilder. Hver celle på 512 piksler brenner inn
kildens tidsstempel i et bunnfelt med høy kontrast, mens de samme tidsstemplene
beholdes i tekstmetadata for nedstrøms assosiering og revisjon. Hele
JPEG-bildet er fortsatt begrenset til 32 MiB. Hvis `sharp` ikke kan dekode eller sette sammen rutenettet,
faller broen tilbake til de individuelle JPEG-bildene. Et klientavbrudd forplanter seg fortsatt
gjennom kontaktarkoperasjonen.

Dokumentasjon for lansering holdes bevisst atskilt fra den syntetiske mikroyteprøven
for komposisjon. `scripts/perf/video-bridge-contact-sheet-eval.ts` definerer en
skjemaversjonert A/B-testbenk for reelle OpenAI-kompatible synsmodeller. Den måler
tokens rapportert av leverandøren, ende-til-ende-veggklokkelatens (inkludert sammensetting av kontaktarket),
antall modellkall og bevaring av fakta definert i manifestet. Rå modelsvar
skrives ikke til rapporten. Bare SHA-256-digester og samsvarende fakta-ID-er beholdes. Testbenken
utfører ingen nettverkskall eller kall til betalte modeller med mindre `--execute-real` angis og
`--model`, `OMNIROUTE_BASE_URL` og `OMNIROUTE_API_KEY` er konfigurert. Uten
den eksplisitte reelle kjøringen forblir den maskinlesbare vurderingen `HOLD`. Syntetiske
målinger av nyttelast/antall kall alene er ikke dokumentasjon for lansering.

De som kaller, kan legge ved en valgfri `transcript.cues`-tabell i en støttet videodel
når de allerede har synkronisert tekst. Hvert signal må inneholde `text`, et
endelig `start`-/`end`-intervall innenfor den sonderte varigheten, og en tillatt
`source` (`client`, `embedded` eller `audio-bridge`). `confidence` har som standard
verdien `1` og må være mellom `0` og `1`. Helt identiske signaler slås sammen.
OmniRoute starter aldri transkripsjon fra disse metadataene: Validerte signaler
kopieres til det beskrevne resultatet med kilde, konfidens og intervall, og
gjengis som ikke-klarerte observasjoner sammen med bildetekstene. Ugyldig tekst,
tekst utenfor intervallet eller tekst uten opphavsinformasjon avvises fremfor å bli blandet inn i
bildetekststrømmen. Feltet `source` deklareres for øyeblikket av den som kaller, og er ikke
verifisert av serveren: OmniRoute håndhever at verdien er én av de tre
tillatte strengene, men bekrefter ennå ikke kryptografisk at en
`embedded`- eller `audio-bridge`-etikett faktisk stammer fra et uttrekk eid av serveren.
Behandle `source` som et ikke-klarert hint frem til denne verifiseringen
er på plass. Ikke baser autorisasjonsbeslutninger på det.

En avansert oppkaller kan oppgi et allerede autorisert `audioTranscript`-spor
for den samme videoen. Sammenføyningspunktet kjører visuelle observasjoner og
lydobservasjoner med én felles tidsfrist og ett avbruddssignal, sorterer dem på
en felles tidslinje, slår sammen identiske duplikater og rapporterer et delvis
resultat når bare én side lykkes. Et ugyldig `audioTranscript` reduseres til
dette delvise resultatet — den visuelle beskrivelsen beholdes, og lydgrenen
registrerer en sanert feilkode — i stedet for at hele videoen mislykkes.
Tilgjengelighet per gren, delvis-flagget og de sanerte feilkodene bevares i
beskrivelsesresultatet, i guardrail-metadataene (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), i metadataene for resultatbufferen og i Bridge-
sammenføyningstellerne. Standardbanen for Video Bridge starter ikke
tale-til-tekst eller laster ned en ny kopi av mediet. Uten dette eksplisitte
sporet forblir den begrenset til video.

**Bevaring av transkripsjoner (#12150 P1).** Dette gjelder automatisk når Video
Bridge (som selv er valgfri) gjengir et transkripsjonssignal — det finnes ikke
noe separat bevaringsflagg. Når en forespørsel gjengir et transkripsjonssignal
(et oppgitt `transcript` eller et sammenføyd `audioTranscript`), merker
guardrail-funksjonen den som `videoBridgeObserved` og lager en sladdet
skyggekopi av videobeskrivelsen — en identisk gjengivelse der fritekstinnholdet
i hvert signal erstattes med `[redacted-video-transcript]`. Denne bygges ved å
erstatte det strukturerte signalfeltet før strengen settes sammen (aldri ved å
analysere den utflatete teksten, slik at intet signalinnhold — ondsinnet eller
ordinært, inkludert innhold med `]`, som `[inaudible]`/`[music]` — kan bli
bevart). Forespørselsinnholdet i den lagrede kalloggen bytter ut hver
videoavledede tekstdel med denne sladdede skyggekopien, samsvart ved hjelp av
innholdslikhet. `fullText`-ankeret leses på nytt fra den ferdige
guardrail-nyttelasten før kallet, slik at samsvaret fortsatt lykkes etter at
senere guardrails i kjeden (maskørene for PII og påloggingsopplysninger, med
prioritet 10/95) har skrevet om beskrivelsesteksten på stedet, og etter at
innsetting av systemprompt, overlevering og minne har omformet meldingsmatrisen.
Innholdet som sendes oppstrøms til modellen, forblir uendret. En observert
forespørsel fyller heller ikke ut noe varig minne (både forespørsels- og
svaravledet uthenting hoppes over), slik at modellens eget svar ikke kan gjenta
transkripsjonstekst i minnet.

**Rå videofelt (#12430).** Når Bridge-funksjonen er aktivert og innebygd videostøtte er ukjent eller fraværende, aktiverer definerte `transcript`-/`audioTranscript`-felt også `videoBridgeObserved`, selv etter en feil i beskrivelsen eller en `maxVideos`-grense. `null` og tomme strenger teller; manglende felt og metadata som ikke gjelder video, gjør det ikke. Bevarte kopier sladder disse feltene eller utelater forespørselen, og buffere/minne forbigås. Leverandørens nyttelast forblir uendret.

Ytterligere bevarte kopier bruker det samme signalet for observerte forespørsler.
Det rå øyeblikksbildet av klientforespørselen før guardrails, den ventende
forespørselen i minnet og loggen for tidlig avviste forespørsler erstatter
transkripsjonsfeltene strukturelt i videodeler. Strengprompter som genereres av
trinn i pipeline og kontekstoverlevering, sladdes der det lagrede
forespørselsinnholdet skrives. Den lagrede `video_content_removed`-markøren gjør
at fortsettelse med `previous_response_id` avvises på en sikker måte i stedet
for å rekonstruere tekst som med hensikt ble forkastet. Hvis en observert
forespørsel mister den delspesifikke sladdingsskyggen før logging, eller hvis
bare én av flere videoskygger ikke samsvarer etter senere endringer av
forespørselen, utelates det bevarte forespørselsinnholdet i sin helhet i stedet
for å bevare en delvis sladdet transkripsjon.

For en observert forespørsel kan et modellsvar sitere en hvilken som helst del
av transkripsjonen uten en strukturert signalgrense. Den lagrede kalloggverdien
`responseBody` erstattes derfor med en utelatelsesmarkør. Den detaljerte
pipeline-artefakten (som kan inneholde oppstrøms-/klientinnhold og
strømmedeler) bevares ikke. Semantiske buffere, idempotensbuffere og buffere for
resonneringsavspilling forbigår lesing og skriving for denne forespørselen.
Leverandørforespørselen og svaret som er synlig for klienten, forblir uendret.
Tidlige keepalive-byte tømmes fra den midlertidige bufferen når den detaljerte
artefakten utelates. Kiros advarsel om feilformatert EventStream rapporterer
bare antallet byte i nyttelasten, aldri innholdet eller JSON-parserens rå feil.
Dette innebærer ikke at alle urelaterte diagnoser fra leverandører eller
programtillegg er revidert. Den bredere gjennomgangen av lagrede datasluk
spores i #11658.

Den interne livssyklusen `/api/modality-bridge/video/drilldown` er et separat,
tilbakekoblings-/tokenautentisert buffersubstrat. Hver operasjon krever også en
kanonisk, ugjennomsiktig principal-ID. Før en produksjonsoppkaller aktiveres,
må den avlede denne ID-en fra den autentiserte leietakeren og må aldri
videresende en verdi valgt av klienten. Buffernøkler binder denne principalen
til kanoniske ID-er for økt og videoreferanse, lagrer bare de SHA-256-avledede
nøklene deres og avgrenser både lesing og sletting til den samme principalen.
Bufferen lagrer maksimalt 16 avledede JPEG-bilder per oppføring, lar dem utløpe
etter ti minutter og støtter avgrensede `start`-/`end`-lesinger eller eksplisitt
sletting av økter.

Hver principal er begrenset til 16 oppføringer og 64 MiB med kanoniske JPEG-data.
Disse grensene er uavhengige av den globale grensen på 64 oppføringer/256 MiB:
Kvotepress for en principal fjerner bare den principalens minst nylig brukte
oppføringer før global LRU-fjerning vurderes. Utløpte oppføringer fjernes fra
både principalens og den globale regnskapsføringen ved bufferaktivitet, mens
avbrytelse og valideringsfeil ikke lagrer en delvis erstatning.

Hurtigbufferen avviser ikke-kanonisk Base64, overflødig utfylling, medier som ikke er JPEG, ugyldige eller
avkortede JPEG-filer samt JPEG-filer som genererer en advarsel under en avgrenset fullstendig `sharp`-dekoding
av bildet. Hvert godkjente bilde kodes på nytt som en kanonisk JPEG, bredde og høyde utledes
fra de dekodede bytene i stedet for å stole på feltene fra den som kaller, og eventuelle etterfølgende
polyglott-bytter forkastes i stedet for å beholdes. Bare den avgrensede kanoniske komprimerte bufferen
belastes begge kvotene. JSON-grensen over nettverket inkluderer Base64-overhead for taket på 32 MiB
for dekodede inndata. Hver
lagrede derivasjon registrerer validert JPEG-format/-oppløsning, samplingspolicy,
derivasjonsversjon, opprettelsestidspunkt, serverberegnet innholdshash og hashet
overordnet referanse samt den klarerte innringerens hash av det overordnede innholdet. Kansellering kontrolleres
mellom asynkrone dekodings-/hashfaser før den atomiske lagringen i hurtigbufferen.

Denne leveransen kobler ennå ikke en produksjonsprodusent til ruten og tilbyr ikke
valg av varianter med flere oppløsninger. Den transparente forespørselsbanen for Video Bridge
medfører derfor ikke noe ekstra arbeid, mens prinsipalderivasjon knyttet til leietaker og
hele FU-08-livssyklusen for flere oppløsninger fortsatt er uttrykkelig oppfølgingsarbeid og
ikke dokumentert som ferdig funksjonalitet.

Bilder tekstes sekvensielt med den konfigurerte Video-modellen. En tom
Video-overstyring arver Vision-innstillingen. Hvis begge er tomme, velger Vision-
autoruteren den effektive modellen med støtte for syn. Vellykkede bildetekster
erstatter den opprinnelige delen med et stabilt `[Video description:`-prefiks som også
merker teksten som en ikke-klarert observasjon utledet fra medier, og instruerer nedstrøms
modeller om ikke å følge instruksjoner som finnes i mediene. Hurtigbuffernøkler for bildetekster
inkluderer JPEG-bytene, ledeteksten, tidsstempelet og den effektive modellen. Bare vellykkede
bildetekster hurtigbufres. Hurtigbufferoppføringer beholder den faktiske produsentmodellen som lyktes,
inkludert en reservemodell. Broen rapporterer `mixed` når forskjellige bilder
ble produsert av forskjellige modeller. Et hurtigbuffertreff gjenbruker denne produsentidentiteten
i stedet for å merke den på nytt som den forespurte rutingsplanen. Resultathurtigbufferen
for hele videoen nøkkelsettes med alle inndata som endrer resultatet — ledetekst, effektiv
modell, samplingspolicy, antall bilder, modus for semantisk analyse, SHA-256-
fingeravtrykket av det normaliserte fokushintet, fokusvindu, `transcript`,
`audioTranscript` og kontaktarkflagget — slik at en endring i hvilken som helst av disse
dimensjonene gir en hurtigbuffermiss, aldri gjenbruk av foreldede data. Versjonen,
terskelen og det avgrensede antallet kandidatbilder i policyen for visuell deduplisering er også eksplisitt angitt i
resultathurtigbuffernøkkelen og metadataene. En policyendring kan derfor ikke gjenbruke en foreldet
beskrivelse av hele videoen. Metadata for resultathurtigbuffer v4 beholder modusen og
fingeravtrykket, aldri den ubehandlede brukeroppgaven. Metadata for sikkerhetsmekanismen rapporterer både
forespurt og effektiv analysemodus. En forespurt `focused`-modus uten
brukbar brukertekst rapporteres som effektivt `full`.

Sikkerhetsmekanismen trekker ut alle støttede videodeler, men beskriver ikke flere enn
`modalityBridgeVideoMaxVideos`. For et mål som beviselig har
`supportsVideo === false`, blir mislykkede videoer og videoer over grensen gjort om til eksplisitte, sikre
tekstmarkører, slik at ingen rå video blir værende. Når egenskapen er ukjent, forblir disse delene
urørt. Mål med `supportsVideo === true` omgår broen.
Avbruddssignalet fra klientforespørselen videreføres gjennom nedlasting, meglerkø,
underprosesser og tekstingskall. Avbrudd stopper mellom videoer og feiler aldri åpent
slik at råmedier slipper gjennom.

Kjøretidsinnstillingene er DB-støttede og Zod-validerte:

| Nøkkel                              | Standardverdi | Område / virkemåte                                                                                        |
| ----------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`       | Valgfri kjøretidsfunksjon, må aktiveres eksplisitt                                                        |
| `modalityBridgeVideoAnalysisMode`   | `"full"`      | `full` bevarer generiske bildetekster; `focused` bruker avgrenset, ikke-klarert kontekst fra siste bruker |
| `modalityBridgeVideoModel`          | `""`          | Arver Vision Bridge-modellen                                                                              |
| `modalityBridgeVideoFrameCount`     | `8`           | 1–16                                                                                                      |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`   | `uniform`, `scene_aware` eller proporsjonal `segment_aware`; detektorfeil faller tilbake til `uniform`    |
| `modalityBridgeVideoMaxVideos`      | `1`           | 1–4                                                                                                       |
| `modalityBridgeVideoTimeout`        | `120000`      | 1000–120000 ms                                                                                            |

Eldre lagrede verdier for Video-tidsavbrudd over 120 sekunder begrenses til
meglerens tidsfrist. Nye innstillingsskrivinger over denne grensen avvises.
`GET /api/modality-bridge/video/runtime` krever klarert, stemplet loopback-
lokalitet før autentisering eller sondering av kjøretidsmiljøet, og krever deretter administrasjons-
autentisering. Det returnerer bare `available`, rensede FFmpeg-/ffprobe-versjoner og en fast
årsak når kjøretidsmiljøet er utilgjengelig. Det interne endepunktet for uttrekking er ikke
et offentlig API for opplasting: kømetning returnerer `503` pluss `Retry-After`, en frakobling
fra innringeren returnerer `499`, og meglerens faste tidsfrist returnerer `504`. Konverterte svar legger til
`video->text;model=<visionModel>;parts=<videos>` i den sentrale
`x-omniroute-modality-bridge`-headeren uten å fjerne Vision- eller Audio-segmenter.

### PII-maskering (`piiMasker.ts`)

Kjøres i **begge** trinn.

- **`preCall`** kloner nyttelasten, går gjennom `system`, `messages`, `input` og
  `prompt` (inkludert elementer som er vanlige strenger), og bruker `processPII()` (fra
  `@/shared/utils/inputSanitizer`) på `content`-/`text`-felt som er strenger. Når
  `PII_REDACTION_ENABLED=true`, blir oppdagede personopplysninger maskert i den utgående
  nyttelasten. Dette er uavhengig av `INPUT_SANITIZER_MODE` (som bare styrer
  policyen for promptinjeksjon). Når maskering er slått av, registrerer kallet antall
  oppdagelser uten å skrive om innholdet.
- **`postCall`** dybdekloner responsen, kjører `sanitizePIIResponse()` samt
  maskeringen for Responses API-formatet (`maskResponsesOutput` — dekker
  `output_text` og `output[].content[].text`). Hvis noe blir maskert, erstatter den
  endrede responsen originalen.

Sikkerhetsregelen blokkerer aldri; den legger bare til merknader (`meta.detections`,
`meta.redacted`) eller skriver om innhold.

### Promptinjeksjon (`promptInjection.ts`)

Oppdager manipulerende strukturer i brukerlevert innhold og håndhever den
konfigurerte policyen. Virkemåten styres av miljøvariabler og
konstruktøralternativer:

| Innstilling        | Miljøvariabel                                                                                               | Standardverdi | Effekt                                                                                                                                                                                                                          |
| ------------------ | ----------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktivert           | `INPUT_SANITIZER_ENABLED`                                                                                   | `true`        | Når den er `false`, avsluttes sikkerhetsregelen umiddelbart.                                                                                                                                                                    |
| Modus              | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                             | `warn`        | Injeksjonspolicy: `block`, `warn` eller `log`. (`redact` støttes av hensyn til bakoverkompatibilitet, men fjerner **ikke** injeksjonstekst; omskriving av personopplysninger i forespørsler styres av `PII_REDACTION_ENABLED`.) |
| Blokkeringsterskel | Alternativet `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`        | Laveste alvorlighetsgrad som kreves for blokkering. Med standardinnstillingen blir middels alvorlighetsgrad bare observert.                                                                                                     |

**Modusrekkefølge** (`getMode`): kallerens `options.mode` →
**DB-overstyring med funksjonsflagg** for `INJECTION_GUARD_MODE` (Kontrollpanel → Innstillinger →
Funksjonsflagg) → miljøvariabelen `INJECTION_GUARD_MODE` → miljøvariabelen `INPUT_SANITIZER_MODE` →
`warn`. En overstyring fra kontrollpanelet har derfor forrang over miljøvariablene, slik at
grensesnittet for funksjonsflagg styrer den kjørende sikkerhetsregelen direkte (uten omstart).
Lesing fra databasen er feilsikker: Hvis det oppstår en feil, faller sikkerhetsregelen tilbake
på den miljøvariabelbaserte virkemåten, og når ingen overstyring er angitt, er virkemåten
identisk med oppløsning som bare bruker miljøvariabler.

Oppdagelseskilder:

1. `sanitizeRequest()` fra `@/shared/utils/inputSanitizer` (delt sett med detektorer
   som brukes andre steder i behandlingskjeden).
2. Innebygde `DEFAULT_GUARD_PATTERNS` (for øyeblikket `system_override_inline` og
   `markdown_system_block`, begge med alvorlighetsgrad `high`).
3. Valgfrie `customPatterns` som sendes via konstruktøralternativer (strenger, regulære
   uttrykk eller poster av typen `{ name, pattern, severity }`).

Når `mode === "block"` **og** minst én oppdagelse oppfyller terskelen for
alvorlighetsgrad, returnerer `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }`. I modusene `warn`/`log` logger sikkerhetsregelen
hendelsen, men tillater kallet. Den delte hjelpefunksjonen `evaluatePromptInjection()`
eksporteres også for kallere som må evaluere prompter uten å gå gjennom registeret.

**Skannegrense (v3.8.20):** Detektoren undersøker bare de **første 16 KB** av
den sammenføyde promptteksten — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) i
`src/shared/utils/inputSanitizer.ts`. Både `detectInjection()` og
`evaluatePromptInjection()` bruker `slice(0, MAX_INJECTION_SCAN_BYTES)` før
mønsterløkken kjøres. Injeksjonsdirektiver ligger nær starten av inndataene, så dette
begrenser CPU-/GC-bruken for regulære uttrykk i nyttelaster på flere hundre KB uten å
svekke oppdagelsen (jf. #3932, #4041).

### Maskering av legitimasjon (`credentialMasker.ts`)

Kjøres i **begge** faser, sist i standardkjeden (prioritet `95`). Maskerer
velkjente mønstre for API-nøkler / hemmelige tokener fra den utgående nyttelasten (meldingsinnhold,
verktøykallargumenter og verktøyresultater) **og** leverandørresponsen, slik at
legitimasjon som limes inn i en prompt (eller returneres av et verktøyresultat), ikke lekker
til den eksterne leverandøren eller tilbake til klienten.

- **Kun eksplisitt aktivering**, samme konvensjon som maskering av PII (Hard Rule #20-tilstøtende):
  deaktivert med mindre `settings.credentialRedactionEnabled === true` **eller**
  `CREDENTIAL_REDACTION_ENABLED=true`. Når den er slått av, gjør beskyttelsesmekanismen ingenting —
  den blokkerer aldri og omskriver aldri.
- `redactCredentials()` går gjennom hele nyttelast-/responstreet (`walkValue()`,
  sikkert mot prototype pollution, og syklussikkert via `WeakSet`) og erstatter treff med
  en `[REDACTED:<type>]`-plassholder, samtidig som bare grenene som faktisk
  er endret, klones.
- `CREDENTIAL_PATTERNS` dekker nøkler for LLM-leverandører (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS-/SaaS-tokener (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), betalingsnøkler (Stripe, Square), sky-
  nøkler (AWS-tilgangsnøkkel, Twilio, SendGrid, Mailgun), private nøkler / JWT-er,
  tilkoblingsstrenger som inneholder påloggingsinformasjon (`mongodb://user:pass@...`, osv.), og
  et generisk mønster for headerverdier av typen `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Header-formede nøkler (`authorization`, `x-api-key`, `api-key`,
  `apikey`) maskeres strukturelt (bare verdien, mens skjemaprefikser som
  `Bearer `/`Basic ` bevares) i stedet for via det generiske tekst-regulæruttrykket.
- Beskyttelsesmekanismen blokkerer aldri; den omskriver bare (`modifiedPayload` /
  `modifiedResponse`) og legger til annotasjoner (`meta.credentialsRedacted`, `meta.count`).

Regresjonsvern: `tests/unit/credential-masker-guardrail.test.ts`.

## Basiskontrakt (`base.ts`)

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
  block?: boolean; // true kortslutter kjeden
  message?: string; // vises ved blokkering
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // returneres av preCall for å omskrive forespørselen
  modifiedResponse?: TValue; // returneres av postCall for å omskrive svaret
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

En sikkerhetsmekanisme signaliserer «ingen endring» ved å returnere enten `void`, `{}` eller
`{ block: false }`. Hvis en `modifiedPayload`/`modifiedResponse` returneres, erstattes
verdien som flyter gjennom kjeden for etterfølgende sikkerhetsmekanismer.
`signal?: AbortSignal` viderefører livssyklusen til den som kaller, inn i sikkerhetsmekanismene. Avbrudd av en forespørsel er det tilsiktede fail-open-unntaket: mediebroer stopper arbeidet og rydder opp uten å gjenopprette råmedier til et mål som man vet ikke støtter dem.

## Register (`registry.ts`)

Singleton-objektet `guardrailRegistry` eksponerer:

- `register(guardrail)` — legger til en sikkerhetsmekanisme (eller erstatter etter normalisert navn) og
  sorterer på nytt etter stigende `priority`.
- `clear()` / `list()` — administrative hjelpefunksjoner.
- `runPreCallHooks(payload, context)` — itererer gjennom aktive sikkerhetsmekanismer, fører
  nyttelasten videre gjennom `modifiedPayload` og stopper ved den første `block: true`.
- `runPostCallHooks(response, context)` — samme flyt på svarsiden.
- `resetGuardrailsForTests({ registerDefaults })` — tømmer tilstanden og registrerer eventuelt
  standardinnstillingene på nytt for ren testisolasjon.

Begge kjørerne returnerer `{ blocked, payload|response, results, guardrail?, message? }`,
der `results` er en matrise med `GuardrailExecutionResult`-oppføringer som inneholder
feltene `blocked`, `skipped`, `modified`, `error` og `meta` per sikkerhetsmekanisme,
noe som er nyttig for sporing.

### Deaktivere sikkerhetsmekanismer per forespørsel

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` samler en
duplikatfri liste over navn på sikkerhetsmekanismer som skal hoppes over for den gjeldende
forespørselen. Kilder (alle valgfrie, alle slås sammen):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` i forespørselskroppen (på toppnivå)
- `metadata.disabledGuardrails` i forespørselskroppen
- Headeren `x-omniroute-disabled-guardrails` (eller den eldre
  `x-disabled-guardrails`)

Verdier kan være matriser med strenger eller en kommaseparert streng. Navn
normaliseres til kebab-case med små bokstaver (`pii_masker` → `pii-masker`). Resultatet
sendes via `context.disabledGuardrails` til registeret, som hopper over
samsvarende sikkerhetsmekanismer (`skipped: true` i `results`).

## Utførelsesrekkefølge

For hver forespørsel som går gjennom `src/sse/handlers/chat.ts` og
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` bygger listen over elementer som skal hoppes over, basert på API-nøkkel, body
   og headere.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` kjører sikkerhetsmekanismene i stigende
   prioritetsrekkefølge:
   - Deaktiverte sikkerhetsmekanismer registreres som `skipped`.
   - Hver sikkerhetsmekanismes `preCall` kan skrive om payloaden via `modifiedPayload`.
   - Den første `block: true` avbryter kjeden, og handleren returnerer
     et avvisningssvar fra sikkerhetsmekanismen.
3. Den (potensielt omskrevne) payloaden går videre til kombinasjonsruting og oppstrøms
   videresending.
4. Etter at svaret er satt sammen, kjører `guardrailRegistry.runPostCallHooks(...)`
   den samme kjeden på svaret. `block: true` her forkaster det oppstrøms
   svaret.

Sikkerhetsmekanismer som utløser unntak, registreres med `error: <message>` og logges via
`logger.warn`, men kjeden fortsetter — fail-open med hensikt.

## Konfigurasjon

Miljøvariabler som leses av de innebygde sikkerhetsmekanismene:

| Variabel                              | Brukes av                | Effekt                                                                                                                |
| ------------------------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Sett til `false` for å deaktivere deteksjon fullstendig.                                                              |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Retningslinje for injeksjon: `warn`, `block` eller `log`. Den eldre verdien `redact` skriver ikke om injeksjonstekst. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Modus for injeksjonsbeskyttelsen; også et funksjonsflagg i databasen som **overstyrer** miljøvariablene (DB > ENV).   |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | Laveste alvorlighetsgrad som `MODE=block` avviser: `high` (standard), `medium` eller `low`.                           |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | Eldre alias for `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                    |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | Når satt til `true`, blir PII i forespørselen sladdet (uavhengig av injeksjonsmodus).                                 |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nedstrøms) | Styrer maskeringsatferd på svarsiden.                                                                                 |

Sikkerhetsmekanismene i Modality Bridge leser kjøretidskonfigurasjon fra det databasebaserte innstillingslageret
(`getSettings()`), ikke fra miljøvariabler. De primære nøklene for Vision er
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` og
`modalityBridgeCacheMaxEntries`. De eldre
`visionBridge*`-nøklene godtas bare som den dokumenterte reservemekanismen for lesing i én syklus;
skriving fra kontrollpanelet bruker de primære nøklene. Standardverdier og fallback-resolveren
finnes i `src/shared/constants/modalityBridgeDefaults.ts`, mens eldre
konstanter beholdes i `src/shared/constants/visionBridgeDefaults.ts`.

Audio bruker `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` og `modalityBridgeAudioMaxClips`, i tillegg til de delte
`modalityBridgeCache*`-innstillingene. Audio har ingen fallback til eldre nøkler fordi disse
nøklene ble introdusert med Modality Bridge-skjemaet.

Video bruker `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` og
`modalityBridgeVideoTimeout`, i tillegg til de delte `modalityBridgeCache*`-innstillingene.
Den er deaktivert som standard fordi FFmpeg/ffprobe er valgfrie driftsavhengigheter,
og teksting av bilderammer øker latensen og modellkostnaden.

## Egendefinerte sikkerhetsmekanismer

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

Trinn:

1. Opprett `src/lib/guardrails/myGuardrail.ts` som utvider `BaseGuardrail`.
2. Implementer `preCall` og/eller `postCall`.
3. Registrer enten ved importtidspunktet (legg til fra `registerDefaultGuardrails`), eller
   kall `guardrailRegistry.register(...)` under kjøring — registeret erstatter
   eventuelle tidligere sikkerhetsmekanismer med samme normaliserte navn.
4. Legg til tester under `tests/unit/` (eksisterende eksempler:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testing

Bruk `resetGuardrailsForTests()` mellom testene for å starte fra en kjent tilstand.
Send `{ registerDefaults: false }` for å starte med et tomt register og
registrere bare sikkerhetsmekanismene som testes. Vision Bridge støtter avhengighets-
injeksjon (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge tilbyr
tilsvarende koblingspunkter for innstillinger, funksjonalitet, valg av STT-modell, kontroll
av legitimasjon og transkribering. Testene kan derfor kjøre begge flytene uten tilgang
til database eller nettverk.

## Se også

- `src/lib/guardrails/` — implementasjon
- `src/shared/utils/inputSanitizer.ts` — delt detektor som driver
  beskyttelse mot promptinjeksjon og maskering av personopplysninger
- `src/shared/constants/visionBridgeDefaults.ts` — standardinnstillinger for Vision Bridge og
  modelliste for tvungen brokobling
- `src/shared/constants/modalityBridgeDefaults.ts` — delte standardinnstillinger for kjøring av Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalt lag (automatsikring, nedkjølingsperioder)
- `docs/reference/ENVIRONMENT.md` — fullstendig referanse for miljøvariabler

## Rutedekning og red-team-testing for injeksjonsbeskyttelse (fase 8 · blokk D)

Injeksjonsbeskyttelsen (`createInjectionGuard` / `withInjectionGuard`) dekker alle ruter
som godtar brukerprompter. Den tar hensyn til `INJECTION_GUARD_MODE` (standardverdien `warn` = bare logging;
`block` = returnerer HTTP 400 `SECURITY_001`).

| Type                 | Ruter                                                                                                                                                | Standardmodus |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Tekst (eksisterende) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generativ            | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Data                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Tekstuttrekk (`extractMessageContents`) dekker `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (hver natt, `nightly-llm-security.yml`):** promptfoo validerer at hver rute blokkerer
OWASP-LLM-korpuset i `INJECTION_GUARD_MODE=block`; garak kjører sonder (hoppes over uten hemmelighet).
`moderations` er inkludert for konsistens — operatører i blokkeringsmodus kan unnta den via
`resolveDisabledGuardrails`.

Den nattlige arbeidsflyten (`.github/workflows/nightly-llm-security.yml`, cron + manuell
utløsning) har to jobber:

- **`promptfoo-guard` (blokkerende)** — kjører `promptfoo eval -c promptfooconfig.yaml`
  med `INJECTION_GUARD_MODE=block`. Hvert angrepstilfelle (f.eks. «ignorer alle
  tidligere instruksjoner …», jailbreaks i DAN-stil) kontrollerer at svaret inneholder
  `error.code === "SECURITY_001"`, dvs. at sikkerhetsmekanismen faktisk avviste forespørselen.
- **`garak` (rådgivende)** — kjører garak `--probes promptinject,dan,leakreplay`
  mot en lokal OmniRoute-instans (`http://localhost:20128/v1`). Avhenger av en
  leverandørhemmelighet (`PROMPTFOO_PROVIDER_KEY`); hoppes kontrollert over og har suffikset
  `|| true`, slik at den rapporterer uten at CI feiler.

Dekningen av hjelpefunksjonen for beskyttelse (`createInjectionGuard` / `withInjectionGuard`)
omfatter alle `/v1`-ruter som inneholder prompter; prompttekst hentes fra
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` av
`extractMessageContents()` i `src/shared/utils/inputSanitizer.ts`.
