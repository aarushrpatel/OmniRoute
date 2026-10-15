# Guardrails (Bosanski)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Izvor istine:** `src/lib/guardrails/`
> **Posljednje ažuriranje:** 2026-08-29 — v3.8.51 (Porijeklo transkripta Video Bridge-a je deklarisano od strane pozivaoca,
> još nije verifikovano od strane servera — pojašnjeno po #11661)

Zaštitne ograde (Guardrails) nameću sigurnost, politiku i transformacije sadržaja na granici
između OmniRoute-a i uzvodnih provajdera. Svaka zaštitna ograda može pregledati (i
opcionalno odbiti, transformisati ili anotirati) zahtjeve (`preCall`) i
uzvodne odgovore (`postCall`).

Sistem je **fail-open**: ako zaštitna ograda baci grešku tokom izvršavanja, registar
bilježi grešku i nastavlja sa sljedećom zaštitnom ogradom umjesto da odbije
zahtjev. Blokiranje je eksplicitna odluka (`block: true`), nikada slučajnost.

## Ugrađene zaštitne mjere

Registar pri uvozu automatski učitava šest zaštitnih mjera prema redoslijedu prioriteta
(pogledajte `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Naziv               | Faza/faze      | Datoteka              |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Niži brojevi prioriteta izvršavaju se **prvi**.

### Premosnik za vid (`visionBridge.ts`) — Premosnik modaliteta PR-1

Presreće zahtjeve koji sadrže slike i usmjereni su na **modele bez podrške za vid** te cijeli zahtjev preusmjerava na model koji podržava vid ili zamjenjuje dijelove sa slikama tekstualnim opisima koje generira podesivi model za vid prije poziva uzvodnog sistema. To omogućava pružaocima koji podržavaju samo tekst da transparentno obrađuju multimodalne podatke.

Tok:

1. Preskočite ako ciljni model već podržava vid (osim ako se nalazi na listi modela s prisilnim korištenjem premosnika `isVisionBridgeForcedModel`).
2. Izdvojite dijelove sa slikama putem `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), koji obradu delegira **objedinjenom detektoru
   medija** `detectMediaParts()` u `open-sse/utils/mediaParts.ts` — jedinom
   izvoru istine koji se dijeli s kombinovanim filterom kompatibilnosti.
   Izdvajanje je ograničeno listom dopuštenih dijelova najvišeg nivoa oblika
   koje `replaceImageParts` može umetnuti nazad (ugovor izdvajanje↔zamjena): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` i Responses API `input_image`. Ugniježđeni rezultati i
   oblici koji sadrže samo indikatore predstavljaju materijal za kombinovani filter i nikada se ne izdvajaju.
   Preskočite ako nijedan nije pronađen.
3. Razriješite konfiguraciju tokom izvršavanja putem `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): novi ključevi postavki `modalityBridge*`
   imaju prednost; naslijeđeni ključevi `visionBridge*` ostaju **rezervna opcija za
   jedan ciklus** (period za vraćanje prethodne verzije). Preskočite prije bilo kakvog obilaska medija kada je
   premosnik onemogućen.
4. Birač režima (`modalityBridgeVisionMode`, pogledajte tabelu ispod) odlučuje
   između preusmjeravanja i opisivanja. Preusmjeravanje vraća `modifiedPayload` u kojem je zamijenjen samo
   `model`, uz metapodatke `{ rerouted, fromModel, toModel, imagesKept }`.
5. Putanja opisivanja: ograničava broj slika na `maxImages`, sastavlja upit prilagođen zadatku,
   provjerava predmemoriju opisa, poziva model za vid **paralelno**
   (`Promise.allSettled`) i na njihovo mjesto umeće tekstualne dijelove
   `[Image N]: <description>`. Neuspješno opisivanje daje `null`, a originalni dio sa slikom se
   **zadržava** (#4012) — osim na kombinovanoj putanji opisivanja kada su sva
   opisivanja neuspješna, gdje potvrđeni uzvodni sistem bez podrške za vid dobija
   zamjenski tekst `(unavailable — no vision-capable provider connected)` (#8430).
6. Vratite `modifiedPayload` + metapodatke (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Birač režima (`modalityBridgeVisionMode`)

| Režim      | Zadano | Ponašanje                                                                                                                                                                                                                                                                                                                                        |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔      | Naslijeđena heuristika, neizmijenjena (#6640/#7204): nekombinovani/`auto/` modeli preusmjeravaju se na najbolji model za vid, osim ako originalni model već ima upotrebljive vjerodajnice (tada se opisuje); kombinovani ciljevi uvijek opisuju.                                                                                                 |
| `describe` |        | Uvijek opisuje — blok za preusmjeravanje u potpunosti se preskače; model koji je korisnik odabrao uvijek odgovara.                                                                                                                                                                                                                               |
| `reroute`  |        | Prisilno preusmjeravanje: zaobilazi se zaštita koja zadržava model s vjerodajnicama. Zaštita vjerodajnica **cilja** preusmjeravanja i dalje se primjenjuje — kada ne postoji upotrebljiv ciljni model za vid, zahtjev prelazi na opisivanje kako neobrađene slike nikada ne bi dospjele do pozadinskog sistema koji podržava samo tekst (#8430). |

Prisilni režimi završavaju obradu **prije** pokretanja automatske heuristike; ponašanje režima `auto`
identično je, na nivou bajtova, zaštitnoj mjeri prije PR-1.

#### Opseg API ključa (`visionBridgeKeyScope.ts`)

Kada API ključ pozivaoca ograničava `allowedConnections`, skupove kvota
(`allowedQuotas`) ili modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), premosnik bira samo
modele za preusmjeravanje i opisivanje koje ključ smije koristiti, na vezama koje ključ smije
koristiti. Poziv za opisivanje zatim uvijek prolazi kroz OmniRoute samopetlju sa
zaglavljem `x-omniroute-self-loop-key-id`, tako da primljeni zahtjev za razgovor
ponovo primjenjuje pravila tog ključa za veze i modele. `enforceApiKeyPolicy()`
uvažava to zaglavlje samo zajedno sa samopetljom nosioca, tako da ono može samo
sužavati pristup, a ID koji se ne može razriješiti biva odbijen.

Ako za ključ nije dopušten nijedan model za vid, putanja opisivanja se povlači i
zahtjev prolazi neizmijenjen, uz isto ponašanje otvorenog propuštanja kao kod onemogućene
zaštitne mjere (metapodaci `{ skipped: true, reason: "no_permitted_vision_model" }`).
Zahtjevi bez ključa i ključevi bez ovih ograničenja ponašaju se potpuno isto kao
i ranije.

#### Upit za opisivanje prilagođen zadatku (`modalityBridgeVisionTaskAware`)

Zadana vrijednost je **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) osnovnom
promptu za opisivanje dodaje tekst **posljednje korisničke poruke** (skraćen na 500 znakova),
usmjeravajući opis prema onome što je korisnik zaista pitao
(obrazac codex-vision-proxy) i tražeći od vision modela da transkribuje vidljivi
tekst. Kada je zastavica isključena — ili nema korisničkog teksta — osnovni prompt koristi se neizmijenjen.

Vlastiti OpenAI-kompatibilni zahtjev describe samopetlje (`callVisionModelSingle()`
u `visionBridgeHelpers.ts`) uvijek zahtijeva `image_url.detail: "high"` —
bezuslovno, za svakog pozivaoca/provajdera, bez zavisnosti od bilo kojeg signala klijenta.
Uzorkovanje s niskim nivoom detalja smanjuje preciznost OCR-a upravo za zadatak
transkripcije teksta koji ovaj prompt zahtijeva, pa sam describe poziv uvijek traži visok
nivo detalja bez obzira na to koji je nivo detalja koristio izvorni dolazni zahtjev. Ovo
utiče samo na tijelo internog describe zahtjeva; ne mijenja način na koji
OmniRoute prosljeđuje pozivaočev vlastiti `image_url.detail` u primarnom zahtjevu —
ta zadana vrijednost primjenjuje se zasebno i samo za detektovane OpenCode klijente, u
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Grana
describe samopetlje s Anthropic formatom prijenosa nema polje `detail`
i nijedna zadana vrijednost ne utiče na nju.

#### Ograničenje describe izlaza (`modalityBridgeVisionMaxChars`)

| Ključ                          | Zadano | Raspon            |
| ------------------------------ | ------ | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` ili 100–50000 |

`0` (zadano) znači **bez ograničenja** — opis koji vrati
`callVisionModel()` prosljeđuje se neizmijenjen, čime se zadržava postojeće
ponašanje. Svaka vrijednost u rasponu 100–50000 skraćuje opis uz
sufiks `…` prije nego što se umetne kao `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` u `src/lib/guardrails/visionBridge.ts`).
Povećajte ovu vrijednost za OCR zadatke s mnogo detalja kada je modelu koji slijedi potreban
potpun prijepis; smanjite je kako biste ograničili potrošnju tokena kod opširnih vision modela.
Polje na nadzornoj ploči nalazi se u panelu Advanced kartice Vision
(`modality-bridge-max-chars` u `ModalityBridgeVisionTab.tsx`) i svaku
vrijednost između 1 i 99 podiže na minimalnih 100, dok eksplicitnu vrijednost `0`
ostavlja netaknutom — `0` je samostalno važeća Zod vrijednost
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), a ne samo
zadana vrijednost za „nije postavljeno“.

#### Describe keš (`modalityBridge/bridgeCache.ts`)

LRU + TTL keš u memoriji za describe izlaze, zajednički za cijeli proces.
Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` s
uokvirivanjem prefiksom dužine (bez kolizija granica polja). Komponenta modela je
**konfigurisani** bridge model, a ne model koji je zaista odgovorio —
`callVisionModel` može interno koristiti rezervni model, a kreiranje ključa za svaki pokušaj
fragmentiralo bi keš. Neuspjeli opisi nikada se ne keširaju. Postavke:

| Ključ                           | Zadano | Raspon  |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Normalizacija udaljenih slika (describe samopetlja/base64 dohvaćanje)

Kada bridge sam dohvata **udaljenu** sliku — za Anthropic describe
samopoziv i base64 konverziju za claude format prijenosa
(`ensureBase64ImagesForClaudeWire`), oboje putem
`fetchRemoteImageAsDataUri()` u `visionBridgeHelpers.ts` — rezultirajući podatkovni
URI prolazi kroz `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) prije ugrađivanja u zahtjev vision modela.
Prevelike slike smanjuju se na **2048px po dužoj ivici** (što odgovara
ograničenju promjene veličine koje OpenAI/Anthropic već primjenjuju na serverskoj strani), čime se smanjuju
količina prenesenih bajtova i kašnjenje bez promjene onoga što vision model vidi. Promjena veličine
koristi `sharp`, učitan dinamičkim uvozom: na platformi na kojoj se njegova nativna
binarna datoteka ne uspije učitati, `normalizeDataUri()` **nikada ne baca izuzetak** — vraća se
na direktno prosljeđivanje izvornih bajtova, tako da putanja za describe/base64 konverziju
uvijek nastavlja raditi. Bajtovi koji nisu slika (dohvaćanje koje nije vratilo
sliku koja se može dekodirati) također se prosljeđuju netaknuti. Ova normalizacija
ograničena je na slike koje bridge dohvata za vlastiti samopoziv — nikada se
ne primjenjuje na neobrađeni payload pozivaoca koji se direktno prosljeđuje, u skladu s
principom izmjene samo uz izričitu saglasnost (Strogo pravilo #20).

#### Shema postavki + migracija

Novi ključevi `modalityBridge*` validiraju se pomoću Zoda u `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*` i grupa
`modalityBridgeAudio*` koju koristi Audio Bridge. Migracija
`141_modality_bridge_settings.sql` kopira postojeće naslijeđene
vrijednosti `visionBridge*` u odgovarajuće nove ključeve (idempotentno, nikada ne prepisuje
vrijednost `modalityBridge*` koju je postavio operater); naslijeđeni ključevi ostaju prihvaćeni kao
rezervna opcija za čitanje tokom jednog ciklusa izdanja.

#### Zaglavlje transparentnosti + statistika

Odgovori transformisani describe postupkom sadrže
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(izrađuje ga `buildModalityBridgeHeader()` u `modalityBridge/bridgeStats.ts`,
a postavlja `withModalityBridgeHeader()` u `src/sse/handlers/chatHelpers.ts`).
Preusmjereni zahtjevi **nemaju** zaglavlje — payload nije mijenjan, a zamjena modela
već je vidljiva u polju `model` tijela odgovora.

`GET /api/modality-bridge/stats` (autentifikacija za upravljanje, isti nivo kao
`GET /api/settings`) vraća brojače po modalitetu koji se čuvaju u memoriji
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` za `vision`, `audio` i
`video`. `averageLatencyMs` koristi `latencySamples`, a ne sve pokušaje, kao
nazivnik; operacija bez mjerenja vremena ne generiše lažni uzorak od nula
milisekundi. `bridged` ostaje unazad kompatibilan pseudonim za uspješne
konverzije; neuspjeli pokušaji ga ne povećavaju.
Brojači se namjerno resetuju pri ponovnom pokretanju procesa
(telemetrija, a ne računovodstvo).

#### Konfiguracija kontrolne ploče

Namjenska stranica kontrolne ploče je
`/dashboard/settings/modality-bridge`. Njene kartice `Vision`, `Audio` i
`Video`, kojima se može pristupiti putem URL-a, zadržavaju parametre upita pri promjeni vrijednosti `tab`.
Kartica Vision nudi omogućavanje, režim rada, odabir modela (uključujući automatski
zadani model), upite prilagođene zadatku, napredna ograničenja vremena čekanja/slike/dužine
opisa/keša, brojače tokom izvršavanja i zaštićeni ogledni zahtjev. Kartica Audio je također
aktivna: nudi omogućavanje, birač modela samo za STT sa opcijom Auto, ograničenja vremena
čekanja/maksimalnog trajanja snimka, brojače za zvuk i ogledni test `input_audio`. Kartica
Video je funkcionalna: prikazuje stanje FFmpeg/ffprobe okruženja za izvršavanje — jedno od
četiri eksplicitna stanja korisničkog interfejsa (`unknown` dok je provjera u toku ili se nije
mogla završiti, `restricted` na hostu kontrolne ploče koji nije povratna petlja, gdje se provjera
preskače na klijentskoj strani, `unavailable` nakon što provjera potvrdi da nedostaje ili
`available` s verzijama FFmpeg/ffprobe) — trajno čuva ograničenja
omogućavanja/modela/kadrova/videa/vremena čekanja, filtrira birač modela na modele koji
podržavaju vid i prikazuje brojače za video.

Prethodna kartica Vision Bridge u postavkama umjetne inteligencije sada je veza za
kompatibilnost prema novoj stranici; više ne sadrži drugu kopiju obrasca. Media Providers
također povezuje tokove rada Image-to-Text i Speech-to-Text s odgovarajućim karticama Modality
Bridgea bez uklanjanja postojećeg okruženja za isprobavanje funkcije Speech-to-Text.

**Zaobilaženje kontrole prijema za vlastitu petlju:** kada se poziv za opis usmjerava kroz
OmniRouteovu vlastitu `/v1` petlju (nestandardni model pružaoca), podzahtjev šalje
`x-omniroute-admission-bypass: internal` i autentificira se razrijeđenom
vjerodajnicom vlastite petlje — lokalnom kontrolnom vrijednošću `sk_omniroute` u lokalnom režimu ili
ključem okruženja `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` koji je konfigurirao operater (#1350), kako bi
implementacije s `REQUIRE_API_KEY=true` i dalje mogle izvršiti poziv za opis. Zaobilaženje
se prihvata samo za te tačne vjerodajnice, pa vanjski klijenti ne mogu koristiti
zaglavlje da preskoče kontrolu prijema.

Naslijeđene zadane vrijednosti nalaze se u `src/shared/constants/visionBridgeDefaults.ts`;
zadane vrijednosti novog režima/prilagođavanja zadatku/keša i razrješivač postavki nalaze se u
`src/shared/constants/modalityBridgeDefaults.ts`. Zaštitni mehanizam nudi opciju konstruktora
`deps` kako bi testovi mogli umetnuti lažne implementacije `getSettings` i
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Presreće zahtjeve za razgovor koji sadrže zvuk prije nego što stignu do odredišta za koje
nije poznato da prihvata zvučni ulaz. Nikada ne preusmjerava zahtjev za razgovor: zvučni dijelovi
se transkribuju putem postojećeg multipart krajnjeg interfejsa kompatibilnog s OpenAI-jem, a
odabrani model za razgovor nastavlja raditi s tekstualnim transkriptima.

Tok:

1. Razriješite `supportsAudio` putem `getResolvedModelCapabilities()`. Eksplicitni
   metapodaci registra pružalaca imaju prednost, zatim slijede statički metapodaci modela, pa
   sinhronizirani `modalities_input`. Deklarirana lista ulaza bez `audio` ima vrijednost `false`;
   ako nema dokaza o mogućnostima, vrijednost ostaje `null`. I `false` i `null` aktiviraju
   konzervativni most, dok ga `true` zaobilazi.
2. Razriješite postavke `modalityBridgeAudio*` i izdvojite zamjenjive zvučne dijelove najvišeg nivoa
   iz svake poruke putem zajedničkog detektora `detectMediaParts()`.
   Podržani mrežni oblici su OpenAI `input_audio`, `audio_url` i
   `source.media_type: "audio/*"`. Ugniježđeni zvuk otkriva se za usmjeravanje, ali ga
   putanja zamjene ne uklanja. Količina obrade ograničena je postavkom `modalityBridgeAudioMaxClips`;
   kasniji dijelovi ostaju nepromijenjeni.
3. Poštujte konfigurirani `provider/model` ili dopustite da `selectAudioBridgeModel()` prođe kroz
   `AUDIO_TRANSCRIPTION_PROVIDERS` stabilnim kataloškim redoslijedom i odabere prvi
   model s upotrebljivom aktivnom vjerodajnicom pružaoca.
4. `callAudioTranscription()` pretvara base64/data-URI zvuk u multipart
   `file` ili preuzima udaljeni `audio_url` putem zaštite za izlazni saobraćaj koja dopušta samo
   javne adrese, uz DNS vezivanje i ograničenje od 25 MB. Zatim POST-om šalje datoteku i odabrani
   model lokalnoj vlastitoj petlji `/v1/audio/transcriptions`, autentificiranoj pomoću
   `resolveSelfLoopBearer()`. Postojeća ruta za transkripciju obavlja uobičajeno
   pronalaženje vjerodajnica, obradu perioda mirovanja/ograničenja brzine i prosljeđivanje pružaocu.
5. Uspješni pozivi zamjenjuju svoje dijelove sa `[Audio N]: <transcript>`. Pozivi
   se izvršavaju pomoću `Promise.allSettled`: pojedinačni neuspjeh zadržava izvorni
   zvučni dio (ugovor #4012). Ako svi pozivi ne uspiju, a dokazano je da odredište ima
   `supportsAudio === false`, dijelovi postaju
   `[Audio N]: (unavailable — no STT provider connected)` (ugovor #8430). Za
   nepoznato odredište (`null`), rezultat u kojem su svi pozivi neuspješni ostaje nepromijenjen. Dokazano
   tekstualno odredište bez upotrebljive STT vjerodajnice prima isti eksplicitni
   zamjenski tekst bez upućivanja mrežnog poziva.

Uspješni transkripti koriste LRU/TTL keš Modality Bridgea na nivou cijelog procesa. Ključ
kombinira referencu zvuka, stabilnu oznaku operacije `audio-transcription`
i odabrani STT model; neuspjesi se nikada ne keširaju. Pokušaji obrade zvuka ažuriraju
zajedničke brojače `bridged`, `cacheHits`, `failures` i `lastUsedAt`.
Transformirani odgovori sadrže
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; nepromijenjeni
zahtjevi ne dobijaju segment Audio Bridgea.

Postavke tokom izvršavanja pohranjene su u bazi podataka i validirane pomoću Zoda:

| Ključ                         | Zadano  | Raspon                |
| ----------------------------- | ------- | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                     |
| `modalityBridgeAudioModel`    | `""`    | Automatski ili STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                  |

Dijeljena predmemorija i dalje se kontroliše putem `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` i `modalityBridgeCacheMaxEntries`.

### Video most (`videoBridge.ts`, `videoBridgePipeline.ts`)

Presreće videodijelove najvišeg nivoa u `messages` zahtjeva Chat Completions i
`input` API-ja Responses prije pozivanja cilja za koji nije poznato da izvorno
podržava video. Podržani oblici su `input_video`, `video_url`, `video_source`,
HTTPS URL-ovi i podatkovni URI-ji `data:video/*;base64,...`. Obični nazivi
datoteka u tekstu ne tretiraju se kao videozapisi.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) upravlja prolaskom kroz zahtjev,
provjerom mogućnosti/politike, agregacijom po zahtjevu i korisnim sadržajem
odgovora. Obrada pojedinačnog videozapisa — preuzimanje, predmemorija cjelokupnog
rezultata, opisivanje sekvence kadrova (koje objedinjuje svaki zvučni transkript
koji je naveo pozivalac) te metrike/prekid/čišćenje za svaki pokušaj — skrivena
je iza `processVideoPart` u `videoBridgePipeline.ts`, koji se poziva jednom za
svaki videodio unutar petlje metode `preCall`. Taj modul također definiše
eksplicitne granice portova `VideoMediaBrokerPort` (preuzimanje bajtova i
izdvajanje uzorkovanih kadrova), `VideoAudioTranscriptionPort` (objedinjavanje
zvučnog transkripta koji je naveo pozivalac s opisima uzorkovanih kadrova) i
`VideoDrilldownPort` (granica trajne pohrane za detaljnu analizu kadrova; još
nije povezana s `processVideoPart` — trenutno samo zasebna ruta
`/api/modality-bridge/video/drilldown` zapisuje unose detaljne analize).

Javna putanja zahtjeva `/v1` nikada ne uvozi niti pokreće potproces. Udaljeni
videozapisi preuzimaju se uz ograničenje od 50 MiB; ugrađeni base64 videozapisi
imaju konzervativno ograničenje od 36 MiB dekodiranih podataka po videozapisu
kako bi omotnica modela/poruka/uokvirivanja ostala unutar javnog ograničenja od
50 MiB za prihvatanje JSON zahtjeva. Dužina ugrađenih podataka i procjene
dekodirane veličine provjeravaju se prije alokacije. HTTPS je obavezan za
početni udaljeni URL i svako preusmjeravanje, uz korištenje postojećeg zaštitnog
mehanizma za isključivo javni odlazni saobraćaj s DNS vezivanjem. Bajtovi zatim
prelaze tačno definisanu internu brokersku granicu
`POST /api/modality-bridge/video/extract`. Ta ruta je istovremeno `LOCAL_ONLY` i
`SPAWN_CAPABLE`, prihvata samo autentificiran zahtjev iz pouzdane povratne petlje
specifičan za proces i nikada ne prihvata URL, putanju datotečnog sistema,
izvršnu datoteku ili listu argumenata. Cjevovod za veličinu tijela API zahtjeva
i inkrementalni čitač tijela unutar obrađivača nezavisno primjenjuju
ograničenje brokerskog ulaza od 50 MiB. Njegov ograničeni red obrađuje jedno
izdvajanje istovremeno, dopušta četiri zadatka na čekanju i ograničava ulazne
podatke na čekanju na 100 MiB.

Unutar brokera `ffprobe` čita privatnu lokalnu datoteku; fiksna lista dopuštenih
formata isključuje formate lista za reprodukciju i manifesta. Za dopuštene
kontejnere iz porodice MOV vanjske reference na MOV podatke ostaju
podrazumijevano onemogućene, a fiksna naredba ih ne uključuje. I `ffprobe` i
`ffmpeg` koriste listu dopuštenih protokola koja sadrži samo `file`, jednu nit,
fiksne nizove argumenata, bez ljuske, a izvršne datoteke razrješavaju se iz
`PATH`. Tokovi naslovnih slika priloženih datoteci nisu kandidati za
reprodukciju. Svi tokovi koji se mogu reproducirati moraju zadovoljiti
ograničenja, a eksplicitni zadani tok ima prednost pred determinističkim
rezervnim odabirom toka s najnižim indeksom. Videozapisi su ograničeni na 600
sekundi, 8.192 piksela po dimenziji i 33.554.432 izvorna piksela. FFmpeg
uzorkuje 1–16 srednjih JPEG kadrova, smanjuje dužu ivicu na najviše 1.024
piksela bez povećavanja manjih ulaznih sadržaja i nikada ne prima URL.
Uzorkovanje je podrazumijevano `uniform`. Opcionalna politika `scene_aware` i
eksperimentalna politika `segment_aware` izvršavaju jedan dodatni fiksni FFmpeg
prolaz nad već potvrđenim lokalnim tokom, odabiru ograničene vremenske oznake
scena iz `showinfo` i deterministički se vraćaju na iste ravnomjerne srednje
tačke u slučaju greške detektora, isteka vremena, neispravnog izlaza ili praznog
skupa kandidata. Režim svjestan segmenata proporcionalno dodjeljuje uzorke
srednjih tačaka potvrđenim intervalima scena; dokazi za režim svjestan segmenata
i ponašanje rezervnog mehanizma detaljno su opisani u nastavku. Čvrsto
ograničenje od 16 kadrova primjenjuje se nakon odabira u svakoj politici. Kada
zahtjev svjestan scena ima budžet od samo jednog kadra, koristi ravnomjernu
srednju tačku aktivnog prozora cijelog videozapisa ili fokusnog prozora i
prijavljuje `policyEffective: uniform`: jedan odabrani kadar scene ne može
sačuvati oba vremenska kraja. Pozivalac može opcionalno navesti konačan fokusni
prozor (`start`/`end` u sekundama); granice se prilagođavaju trajanju medija,
obrnuti ili nekonačni prozori se odbijaju, a sve politike uzorkovanja izvršavaju
se samo unutar normaliziranog intervala. Dobijeni prozor uključuje se u
metapodatke uzorkovanja i u prefiks nepouzdanog opisa kako bi nizvodni modeli
mogli razlikovati fokusirani isječak od cijele vremenske linije.

Semantički fokus opisa zasebna je, eksplicitna postavka. Zadani način analize
`full` zadržava postojeći upit za kadrove i nikada ne prosljeđuje tekst zahtjeva
modelu za opisivanje. U načinu `focused` most čita samo najnoviji neprazni
`text`/`input_text` koji je unio korisnik iz istog kontejnera Chat ili
Responses, normalizira ga u NFC, sažima kontrolne znakove i bjeline te ga
ograničava na 500 Unicode kodnih tačaka. Prazan rezultat vraća se na potpuno
isti upit kao `full`. Upotrebljiva smjernica serijalizira se kao JSON u
namjenskom bloku nepouzdanog korisničkog konteksta i smije samo odrediti
prioritet detaljima koji se mogu uočiti; ne može nadjačati zasebno upozorenje
protiv praćenja uputa koje su vidljive ili čujne u mediju. Tekstualni fokus
nikada ne zaključuje `start`/`end` niti mijenja vremenski uzorkivač.

#### FU-07 strukturni dokazi o segmentima

`segment_aware` koristi jedan ograničeni prolaz predanalize nad već validiranim
lokalnim videostreamom. Fiksni lanac filtera prvo skalira video na širinu od
najviše 320 piksela, otkriva promjene scena i zamrznute intervale, a zatim
uzima uzorke brzinom od 1 kadra u sekundi radi analize zamućenja, prosječne
luminanse te prostornih/vremenskih informacija. Prolaz je ograničen na 600
strukturnih uzoraka, jednu FFmpeg/filter nit, iste liste dozvoljenih protokola
isključivo za `file` i formata spremnika, ograničenje izlaza procesa od 1 MiB
te najviše 30 sekundi unutar zajedničkog prekida/roka brokera. Nikada ne
prihvata naredbu, filter, putanju ili URL iz zahtjeva.

Strukturne vrijednosti predstavljaju determinističke dokaze uzorkovanja, a ne
semantičko razumijevanje videa. One ne zaključuju o subjektima, radnjama,
natpisima, govoru ili namjeri korisnika. Granice scena i zamrzavanja formiraju
segmente; pokrivenost zamrzavanjem, zamućenje, ekspozicija, prostorni detalji i
vremenske promjene utiču samo na način raspodjele postojećeg budžeta od 1–16
kadrova. Potpuno zamrznuti segment ograničen je na jedan kadar, dok se
nezamrznuti segmenti nadmeću za preostali budžet. Kada broj granica premašuje
broj kadrova, zadržava se ravnomjerna pokrivenost vremenske linije kako brzi
rani rezovi ne bi mogli sakriti dugi završni segment. Granice scena koje su
unutar 1-sekundne rezolucije analize od granice zamrzavanja objedinjuju se.

Nedostajući filteri, neispravni/prazni dokazi, greška detektora ili istek
vremena ograničene predanalize otvoreno se vraćaju na potpuno istu politiku
ravnomjernih srednjih tačaka. Prekid pozivaoca ili rok brokera ne dovodi do
takvog otvorenog povratka: prekida podproces u toku, sprečava naknadno
izdvajanje kadrova, a privatno privremeno stablo uklanja se u `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generira determinističke stvarne FFmpeg
testne ulaze za uštede poziva za opise nakon deduplikacije, raspodjelu budžeta
za gusto kretanje, dokaze o zamućenju/ekspoziciji/SI-TI, brze rezove s dugim
završnim dijelom i lažno pozitivne rezultate postepenog pretapanja. Bilježi
vrijeme predanalize prema zidnom satu te, gdje je `/usr/bin/time` dostupan,
CPU vrijeme podređenog procesa i vršnu vrijednost RSS-a. Njegove provjere
kvaliteta predstavljaju samo strukturna mjerila. Kvalitet stvarnog modela za
opise ostaje `HOLD` jer ovaj testni okvir nema ovlaštenu krajnju tačku ni
fiksirano mjerilo. Novčane uštede također ostaju `HOLD`, osim ako
`--caption-cost-per-call-usd` ne navede eksplicitnu pozitivnu procjenu troška
po pozivu; skripta nikada ne izmišlja nijedan od tih rezultata.

Svaki kadar ograničen je na 4 MiB, svi neobrađeni kadrovi zajedno na 23 MiB, a
serijalizirani odgovor brokera na 32 MiB. Privatni privremeni direktorij uklanja
se u `finally`. OmniRoute ne uključuje FFmpeg u paket i ne prihvata prilagođenu
putanju izvršne datoteke. Prije izrade opisa, most primjenjuje konzervativni
prolaz vizuelne deduplikacije: svaki JPEG svodi se na bafer sivih tonova
veličine 16×16 i poredi samo s posljednjim zadržanim kadrom. Za zatraženi budžet
opisa veći od jednog kadra, izdvajanje daje ograničeni skup kandidata od najviše
dvostrukog iznosa tog budžeta, ali nikada više od 16 kadrova. Zatraženo
ograničenje primjenjuje se tek nakon deduplikacije, pri čemu se tokom konačnog
prorjeđivanja zadržavaju prvi i posljednji odabrani kandidati kada budžet iznosi
najmanje dva. Verzijska politika
`grayscale-16x16-mean-cells-v2` koristi veću vrijednost između srednje razlike
luminanse i omjera ćelija sličice čija je normalizirana razlika najmanje 0.05.
Prag za duplikate je konstanta 0.04, odabrana radi predvidljivosti umjesto da
bude izložena kao postavka tokom izvršavanja. Ovaj sekundarni signal visokog
kontrasta zadržava male pokrete i promjene vidljivog teksta koje poređenje samo
na osnovu srednje vrijednosti može sakriti. Greške komparatora ili dekodera
otvoreno zadržavaju pokrivenost. Izlazni metapodaci odvojeno prikazuju izdvojene
kandidate, uspješno korištene kadrove i odbačene vizuelne duplikate.

Eksplicitno označeni videodio može zatražiti kontaktni list s vremenskim
oznakama. Most izrađuje JPEG mrežu s najviše 4 kolone i 16 kadrova. Svaka
ćelija od 512 piksela utiskuje vremensku oznaku izvora u donju traku visokog
kontrasta, dok iste vremenske oznake ostaju u tekstualnim metapodacima radi
naknadnog povezivanja i revizije. Kompletni JPEG ostaje ograničen na 32 MiB.
Ako `sharp` ne može dekodirati ili sastaviti mrežu, most se vraća na pojedinačne
JPEG kadrove; prekid klijenta i dalje se prenosi kroz operaciju izrade lista.

Dokazi za promociju namjerno su odvojeni od sintetičkog mikromjerila
kompozicije. `scripts/perf/video-bridge-contact-sheet-eval.ts` definira A/B
testni okvir s verzioniranom shemom za stvarne modele vida kompatibilne s
OpenAI-jem. Mjeri tokene koje prijavi pružalac usluge, ukupno vrijeme odziva
prema zidnom satu (uključujući sastavljanje lista), broj poziva modela i
zadržavanje činjenica definiranih manifestom. Neobrađeni odgovori modela ne
zapisuju se u izvještaj; zadržavaju se samo SHA-256 sažeci i ID-jevi podudarnih
činjenica. Testni okvir ne upućuje mrežni poziv niti poziv plaćenom modelu osim
ako je proslijeđen `--execute-real` i ako su konfigurirani `--model`,
`OMNIROUTE_BASE_URL` i `OMNIROUTE_API_KEY`. Bez takvog eksplicitnog stvarnog
pokretanja, njegov mašinski čitljiv rezultat ostaje `HOLD`; sintetička mjerenja
korisnog sadržaja/broja poziva sama po sebi nisu dokaz za promociju.

Pozivaoci mogu priložiti opcionalni niz `transcript.cues` podržanom videodijelu
kada već posjeduju poravnati tekst. Svaka stavka mora sadržavati `text`, konačan
interval `start`/`end` unutar ispitivanog trajanja i `source` s liste dozvoljenih
vrijednosti (`client`, `embedded` ili `audio-bridge`); `confidence` ima zadanu
vrijednost `1` i mora ostati između `0` i `1`. Potpuno jednake stavke se
objedinjuju. OmniRoute nikada ne pokreće transkripciju iz ovih metapodataka:
validirane stavke kopiraju se u opisani rezultat zajedno s izvorom, pouzdanošću
i intervalom te se prikazuju kao nepouzdana zapažanja uz opise kadrova.
Neispravan tekst, tekst izvan raspona ili tekst bez porijekla odbacuje se umjesto
da se miješa u tok opisa. Polje `source` trenutno deklarira pozivalac i server
ga ne provjerava: OmniRoute osigurava da je vrijednost jedan od tri dozvoljena
stringa, ali još uvijek kriptografski ne potvrđuje da oznaka `embedded` ili
`audio-bridge` zaista potiče iz izdvajanja kojim upravlja server. Tretirajte
`source` kao nepouzdanu naznaku dok se ta provjera ne implementira; nemojte na
njemu zasnivati odluke o autorizaciji.

Napredni pozivalac može dostaviti već autorizovanu stazu `audioTranscript`
za isti videozapis. Spoj za objedinjavanje pokreće vizuelna i zvučna zapažanja
uz zajednički rok i signal prekida, raspoređuje ih na zajedničkoj vremenskoj osi,
sažima potpuno jednake duplikate i prijavljuje djelimičan rezultat kada uspije
samo jedna strana. Nevažeći `audioTranscript` degradira se na taj djelimični
rezultat — vizuelni opis se zadržava, a zvučna grana bilježi sanitizirani kôd
greške — umjesto da cijeli videozapis završi neuspješno. Dostupnost po granama,
oznaka djelimičnog rezultata i sanitizirani kodovi grešaka čuvaju se u opisanom
rezultatu, u metapodacima zaštitnih mehanizama (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), u metapodacima predmemorije rezultata i u brojačima
objedinjavanja mosta. Zadana putanja Video Bridgea ne poziva pretvaranje govora
u tekst niti preuzima drugu kopiju medija; bez te izričito navedene staze ostaje
ograničena samo na videozapis.

**Zadržavanje transkripta (#12150 P1).** Ovo se automatski primjenjuje kad god
Video Bridge (koji se i sam mora izričito uključiti) prikaže oznaku transkripta —
ne postoji zasebna oznaka za zadržavanje. Kada zahtjev prikaže bilo koju oznaku
transkripta (`transcript` koji je deklarirao pozivalac ili objedinjeni
`audioTranscript`), zaštitni mehanizam označava ga kao `videoBridgeObserved` i
proizvodi redigovanu kopiju opisa videozapisa — identičan prikaz u kojem je
slobodni tekst svake oznake zamijenjen tekstom
`[redacted-video-transcript]`, što se izrađuje zamjenom strukturiranog polja
oznake prije sastavljanja niza znakova (nikad raščlanjivanjem poravnatog teksta,
tako da nijedan sadržaj oznake — zlonamjeran ili običan, uključujući sadržaje
koji sadrže `]`, kao što su `[inaudible]`/`[music]` — ne može ostati).
Tijelo zahtjeva u trajno sačuvanom zapisniku poziva zamjenjuje svaki tekstualni
dio izveden iz videozapisa tom redigovanom kopijom, uparenom prema jednakosti
sadržaja; sidro `fullText` ponovo se učitava iz dovršenog sadržaja zaštitnog
mehanizma prije poziva, tako da je uparivanje i dalje uspješno nakon što kasniji
lančani zaštitni mehanizmi (maskeri PII podataka i akreditiva, prioriteti 10/95)
izmijene tekst opisa na licu mjesta te nakon što umetanje sistemskog upita,
primopredaje i memorije preoblikuje niz poruka. Tijelo poslano uzvodno modelu
ostaje nepromijenjeno. Posmatrani zahtjev također ne popunjava trajnu memoriju
Memory (preskače se izdvajanje izvedeno i iz zahtjeva i iz odgovora), tako da
vlastiti odgovor modela ne može prenijeti tekst transkripta u Memory.

**Neobrađena polja videozapisa (#12430).** Kada je most omogućen, a izvorna podrška za videozapis nepoznata ili nedostupna, definirana polja `transcript`/`audioTranscript` također aktiviraju `videoBridgeObserved`, čak i nakon neuspjelog opisivanja ili ograničenja `maxVideos`. Vrijednost `null` i prazni nizovi znakova se računaju; odsutna polja i metapodaci koji nisu povezani s videozapisom ne računaju se. Sačuvane kopije rediguju ta polja ili izostavljaju zahtjev, a predmemorije/Memory se zaobilaze. Sadržaj za pružaoca usluge ostaje nepromijenjen.

Dodatne sačuvane kopije koriste isti signal posmatranog zahtjeva. Neobrađeni
snimak klijentskog zahtjeva prije zaštitnih mehanizama, zahtjev na čekanju u
memoriji i zapisnik rano odbijenog zahtjeva strukturno zamjenjuju polja
transkripta u dijelovima videozapisa; tekstualni upiti koje sintetiziraju faze
cjevovoda i primopredaja konteksta rediguju se na odredištu trajno sačuvanog
tijela zahtjeva. Trajno sačuvana oznaka `video_content_removed` uzrokuje da se
nastavak putem `previous_response_id` sigurno odbije umjesto da rekonstruiše
tekst koji je namjerno odbačen. Ako posmatrani zahtjev izgubi svoju kopiju za
redigovanje po dijelovima prije zapisivanja ili ako se čak samo jedna od više
kopija videozapisa ne uspije upariti nakon kasnijih izmjena zahtjeva, sačuvano
tijelo zahtjeva u potpunosti se izostavlja umjesto da se zadrži djelimično
redigovan transkript.

Za posmatrani zahtjev odgovor modela može citirati bilo koji dio transkripta bez
strukturirane granice oznake. Njegov `responseBody` u trajno sačuvanom zapisniku
poziva stoga se zamjenjuje oznakom izostavljanja; detaljni artefakt cjevovoda
(koji može sadržavati uzvodna/klijentska tijela i dijelove toka) ne zadržava se.
Semantičke predmemorije, predmemorije idempotentnosti i predmemorije ponavljanja
zaključivanja zaobilaze čitanja i pisanja za taj zahtjev. Zahtjev pružaoca usluge
i odgovor vidljiv klijentu ostaju nepromijenjeni. Rani keepalive bajtovi
uklanjaju se iz privremenog međuspremnika kada se detaljni artefakt izostavi.
Kirovo upozorenje o neispravnom EventStreamu prijavljuje samo broj bajtova
sadržaja, a nikad njegov sadržaj niti neobrađenu grešku JSON raščlanjivača.
Ovim se ne tvrdi da je provjerena svaka nepovezana dijagnostika pružaoca
usluge/dodatka; šira provjera odredišta sačuvanih podataka prati se u #11658.

Interni životni ciklus `/api/modality-bridge/video/drilldown` zaseban je
predmemorijski supstrat koji radi preko loopback veze i autentifikacije tokenom.
Svaka operacija također zahtijeva kanonski neprozirni ID principala. Prije nego
što se omogući produkcijski pozivalac, on mora izvesti taj ID iz autentificiranog
zakupca i nikad ne smije proslijediti vrijednost koju je odabrao klijent.
Ključevi predmemorije vežu taj principal za kanonske ID-ove sesije i reference
videozapisa, pohranjuju samo njihove ključeve izvedene pomoću SHA-256 te
ograničavaju i čitanja i brisanje na isti principal. Predmemorija pohranjuje
najviše 16 izvedenih JPEG kadrova po unosu, ističe ih nakon deset minuta i
podržava ograničena čitanja pomoću `start`/`end` ili izričito brisanje sesije.

Svaki principal ograničen je na 16 unosa i 64 MiB kanonskih JPEG podataka. Ta
ograničenja nezavisna su od globalne gornje granice od 64 unosa/256 MiB:
pritisak kvote principala uklanja samo najmanje nedavno korištene unose tog
principala prije nego što se razmotri globalno LRU uklanjanje. Istekli unosi
uklanjaju se i iz obračuna po principalu i iz globalnog obračuna tokom aktivnosti
predmemorije, dok otkazivanje i neuspjela validacija ne potvrđuju djelimičnu
zamjenu.

Keš odbacuje nekanonski Base64, suvišno popunjavanje, medije koji nisu JPEG, neispravne ili
skraćene JPEG-ove i JPEG-ove koji izazovu upozorenje tokom ograničenog dekodiranja cijele slike pomoću alata `sharp`.
Svaku prihvaćenu sliku ponovo kodira kao kanonski JPEG, izvodi širinu i visinu
iz dekodiranih bajtova umjesto da vjeruje poljima pozivaoca te odbacuje sve prateće
poliglotske bajtove umjesto da ih zadrži. Samo se ograničeni kanonski komprimirani bafer
uračunava u obje kvote. Ograničenje JSON prijenosa uključuje Base64 dodatak za gornju granicu
dekodiranog ulaza od 32 MiB. Svaka
pohranjena izvedenica bilježi svoj validirani JPEG format/rezoluciju, politiku uzorkovanja,
verziju izvedenice, vrijeme kreiranja, hash sadržaja koji je izračunao server i hashiranu referencu
na nadređeni element zajedno s hashom sadržaja nadređenog elementa pouzdanog pozivaoca. Otkazivanje se provjerava
između asinhronih faza dekodiranja/hashiranja prije atomskog upisivanja u keš.

Ova etapa još ne povezuje produkcijskog proizvođača s rutom i ne
omogućava odabir varijante s više rezolucija. Transparentna putanja zahtjeva za Video Bridge
stoga ne stvara dodatno opterećenje, dok izvođenje principala vezanog za zakupca i
potpuni FU-08 životni ciklus s više rezolucija ostaju eksplicitni naknadni zadaci,
umjesto da budu dokumentirani kao dovršeno ponašanje.

Okviri se redom opisuju pomoću konfiguriranog Video modela. Prazno
Video nadjačavanje nasljeđuje Vision postavku; ako su oba prazna, Vision
automatski usmjerivač odabire efektivni model koji podržava obradu slika. Uspješni opisi
zamjenjuju izvorni dio stabilnim prefiksom `[Video description:` koji također
označava tekst kao nepouzdano zapažanje izvedeno iz medija i nalaže nizvodnim
modelima da ne slijede upute pronađene u mediju. Ključevi keša opisa okvira
uključuju JPEG bajtove, upit, vremensku oznaku i efektivni model; u keš se pohranjuju samo
uspješni opisi. Unosi u kešu zadržavaju stvarni model proizvođača koji je uspješno izvršio obradu,
uključujući rezervni model; most prijavljuje `mixed` kada su različite okvire
proizveli različiti modeli. Pogodak u kešu ponovo koristi taj identitet proizvođača
umjesto da ga preimenuje u traženi plan usmjeravanja. Keš rezultata
cijelog videa koristi ključ zasnovan na svakom ulazu koji mijenja izlaz — upitu, efektivnom
modelu, politici uzorkovanja, broju okvira, režimu semantičke analize, SHA-256
otisku normaliziranog nagovještaja fokusa, prozoru fokusa, `transcript`,
`audioTranscript` i zastavici kontaktne ploče — tako da promjena bilo koje od tih
dimenzija uzrokuje promašaj keša, a nikada ponovnu upotrebu zastarjelog rezultata. Verzija,
prag i ograničeni broj okvira kandidata politike vizuelne deduplikacije također su eksplicitno navedeni u
ključu i metapodacima keša rezultata; promjena politike stoga ne može ponovo koristiti zastarjeli
opis cijelog videa. Metapodaci keša rezultata v4 zadržavaju režim i
otisak, ali nikada neobrađeni korisnički zadatak. Metapodaci zaštitnih ograda prijavljuju i
traženi i efektivni režim analize; traženi režim `focused` bez
upotrebljivog korisničkog teksta prijavljuje se kao efektivno `full`.

Zaštitna ograda izdvaja svaki podržani video dio, ali ne opisuje više od
`modalityBridgeVideoMaxVideos`. Za cilj za koji je dokazano da ima
`supportsVideo === false`, neuspjeli videozapisi i oni preko ograničenja postaju eksplicitne sigurne
tekstualne oznake kako nijedan neobrađeni video ne bi preostao. Kada sposobnost nije poznata, ti dijelovi
ostaju neizmijenjeni. Ciljevi s `supportsVideo === true` zaobilaze most.
Signal za prekid klijentskog zahtjeva prenosi se kroz preuzimanje, red posrednika,
potprocese i pozive za opisivanje; prekidi zaustavljaju obradu između videozapisa i nikada se ne ponašaju
otvoreno propuštajući neobrađene medije.

Postavke izvršnog okruženja pohranjene su u bazi podataka i validirane pomoću Zod-a:

| Ključ                               | Zadano      | Raspon / ponašanje                                                                                       |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Opcionalno u izvršnom okruženju, zahtijeva izričito uključivanje                                         |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` zadržava generičke opise; `focused` koristi ograničeni, nepouzdani kontekst posljednjeg korisnika |
| `modalityBridgeVideoModel`          | `""`        | Nasljeđuje model Vision Bridgea                                                                          |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                     |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` ili proporcionalni `segment_aware`; neuspjeh detektora vraća se na `uniform`    |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                      |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                           |

Naslijeđene trajno pohranjene vrijednosti isteka vremena za Video iznad 120 sekundi ograničavaju se na
rok posrednika; novi upisi postavki iznad tog ograničenja odbacuju se.
`GET /api/modality-bridge/video/runtime` zahtijeva pouzdanu, označenu lokalnost povratne petlje
prije autentifikacije ili ispitivanja izvršnog okruženja, a zatim zahtijeva upravljačku
autorizaciju. Vraća samo `available`, pročišćene verzije FFmpeg-a/ffprobe-a i fiksni
razlog kada izvršno okruženje nije dostupno. Interna krajnja tačka za izdvajanje nije
javni API za otpremanje: zasićenje reda vraća `503` uz `Retry-After`, prekid veze
pozivaoca vraća `499`, a fiksni rok posrednika vraća `504`. Konvertirani odgovori dodaju
`video->text;model=<visionModel>;parts=<videos>` u centralno
`x-omniroute-modality-bridge` zaglavlje bez uklanjanja Vision ili Audio segmenata.

### Masker ličnih identifikacijskih podataka (`piiMasker.ts`)

Izvršava se u **obje** faze.

- **`preCall`** klonira sadržaj zahtjeva, prolazi kroz `system`, `messages`, `input` i
  `prompt` (uključujući obične tekstualne stavke) te primjenjuje `processPII()` (iz
  `@/shared/utils/inputSanitizer`) na tekstualna polja `content`/`text`. Kada je
  `PII_REDACTION_ENABLED=true`, otkriveni lični podaci rediguju se u odlaznom
  sadržaju zahtjeva. Ovo ne zavisi od `INPUT_SANITIZER_MODE` (koji kontrolira
  samo politiku za ubacivanje instrukcija u upit). Kada je redigovanje isključeno, poziv bilježi broj
  detekcija bez prepravljanja sadržaja.
- **`postCall`** dubinski klonira odgovor, pokreće `sanitizePIIResponse()` zajedno s
  maskiranjem oblika Responses API-ja (`maskResponsesOutput` — obuhvata
  `output_text` i `output[].content[].text`). Ako dođe do bilo kakvog redigovanja,
  izmijenjeni odgovor zamjenjuje originalni.

Zaštitna mjera nikada ne blokira; ona samo dodaje oznake (`meta.detections`,
`meta.redacted`) ili prepravlja sadržaj.

### Ubacivanje instrukcija u upit (`promptInjection.ts`)

Otkriva zlonamjerne strukture u sadržaju koji je dostavio korisnik i primjenjuje
konfiguriranu politiku. Ponašanje se određuje varijablama okruženja i opcijama
konstruktora:

| Postavka        | Varijabla okruženja                                                                                       | Zadano | Efekat                                                                                                                                                                                                                                      |
| --------------- | --------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omogućeno       | `INPUT_SANITIZER_ENABLED`                                                                                 | `true` | Kada je `false`, zaštitna mjera odmah prekida obradu.                                                                                                                                                                                       |
| Način rada      | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                           | `warn` | Politika ubacivanja instrukcija: `block`, `warn` ili `log`. (`redact` se prihvata radi kompatibilnosti unazad, ali **ne** uklanja tekst ubačenih instrukcija; prepravljanje ličnih podataka u zahtjevu kontrolira `PII_REDACTION_ENABLED`.) |
| Prag blokiranja | Opcija `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (pseudonim `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Minimalni nivo ozbiljnosti potreban za blokiranje. Srednji nivo se sa zadanom postavkom samo prati.                                                                                                                                         |

**Prioritet načina rada** (`getMode`): pozivateljev `options.mode` →
**zamjena putem DB zastavice funkcionalnosti** `INJECTION_GUARD_MODE` (Kontrolna tabla → Postavke →
Zastavice funkcionalnosti) → varijabla okruženja `INJECTION_GUARD_MODE` → varijabla okruženja `INPUT_SANITIZER_MODE` →
`warn`. Zamjena putem kontrolne table stoga ima prednost nad varijablama okruženja, pa korisničko sučelje Zastavice
funkcionalnosti upravlja aktivnom zaštitom u stvarnom vremenu (bez ponovnog pokretanja). Čitanje iz baze podataka je sigurno u slučaju greške:
ako dođe do greške, zaštita se vraća na ponašanje zasnovano na varijablama okruženja, a kada
zamjena nije postavljena, ponašanje je identično određivanju isključivo putem varijabli okruženja.

Izvori detekcije:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (zajednički skup detektora
   koji se koristi i drugdje u procesnom lancu).
2. Ugrađeni `DEFAULT_GUARD_PATTERNS` (trenutno `system_override_inline` i
   `markdown_system_block`, oba nivoa ozbiljnosti `high`).
3. Opcionalni `customPatterns` proslijeđeni putem opcija konstruktora (tekstualni nizovi, regularni izrazi
   ili zapisi `{ name, pattern, severity }`).

Kada je `mode === "block"` **i** najmanje jedna detekcija zadovoljava prag
ozbiljnosti, `preCall` vraća `{ block: true, message: "Request rejected:
suspicious content detected" }`. U načinima rada `warn`/`log` zaštitna mjera bilježi događaj, ali
dozvoljava poziv. Zajednička pomoćna funkcija `evaluatePromptInjection()` također se izvozi
za pozivatelje koji trebaju procijeniti upite bez prolaska kroz registar.

**Ograničenje skeniranja (v3.8.20):** detektor pregleda samo **prvih 16 KB**
spojenog teksta upita — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajta) u
`src/shared/utils/inputSanitizer.ts`. I `detectInjection()` i
`evaluatePromptInjection()` primjenjuju `slice(0, MAX_INJECTION_SCAN_BYTES)` prije pokretanja
petlje obrazaca. Direktive za ubacivanje instrukcija nalaze se blizu početka unosa, pa se time
ograničava CPU/GC opterećenje regularnih izraza na sadržajima od više stotina KB bez slabljenja detekcije (usp.
#3932, #4041).

### Maskiranje vjerodajnica (`credentialMasker.ts`)

Pokreće se u **obje** faze, posljednje u zadanom lancu (prioritet `95`). Rediguje
poznate obrasce API ključeva / tajnih tokena iz odlaznog sadržaja zahtjeva (sadržaja poruka,
argumenata poziva alata, rezultata alata) **i** odgovora pružaoca usluge, tako da se
vjerodajnica zalijepljena u upit (ili vraćena u rezultatu alata) ne prosljeđuje
pružaocu usluge niti nazad klijentu.

- **Samo uz izričito uključivanje**, prema istoj konvenciji kao redigovanje PII podataka (u vezi sa strogim pravilom #20):
  onemogućeno je osim ako je `settings.credentialRedactionEnabled === true` **ili**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kada je isključeno, zaštitna mjera je no-op —
  nikada ne blokira niti prepisuje.
- `redactCredentials()` prolazi kroz cijelo stablo korisnog sadržaja/odgovora (`walkValue()`,
  sigurno od zagađivanja prototipa, sigurno pri ciklusima putem `WeakSet`) i zamjenjuje podudaranja
  rezerviranim tekstom `[REDACTED:<type>]`, klonirajući samo grane koje su se zaista
  promijenile.
- `CREDENTIAL_PATTERNS` obuhvata ključeve LLM pružalaca usluga (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokene (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ključeve za plaćanje (Stripe, Square), ključeve za usluge
  u oblaku (AWS pristupni ključ, Twilio, SendGrid, Mailgun), privatne ključeve / JWT-ove,
  konekcijske stringove koji sadrže vjerodajnice (`mongodb://user:pass@...` itd.) i
  generički obrazac vrijednosti zaglavlja `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Ključevi u obliku zaglavlja (`authorization`, `x-api-key`, `api-key`,
  `apikey`) rediguju se strukturno (samo vrijednost, dok se prefiks šeme poput
  `Bearer `/`Basic ` zadržava), a ne putem generičkog tekstualnog regularnog izraza.
- Zaštitna mjera nikada ne blokira; samo prepisuje (`modifiedPayload` /
  `modifiedResponse`) i dodaje anotacije (`meta.credentialsRedacted`, `meta.count`).

Regresijska zaštita: `tests/unit/credential-masker-guardrail.test.ts`.

## Osnovni ugovor (`base.ts`)

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
  block?: boolean; // true prekida lanac
  message?: string; // prikazuje se prilikom blokiranja
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vraća ga preCall radi izmjene zahtjeva
  modifiedResponse?: TValue; // vraća ga postCall radi izmjene odgovora
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

Zaštitna ograda signalizira „bez promjene“ vraćanjem vrijednosti `void`, `{}` ili
`{ block: false }`. Vraćanje vrijednosti `modifiedPayload`/`modifiedResponse` zamjenjuje
vrijednost koja prolazi kroz lanac za naredne zaštitne ograde.
`signal?: AbortSignal` prenosi životni ciklus pozivaoca u zaštitne ograde. Prekid zahtjeva predstavlja namjerni izuzetak otvorenog propuštanja: medijski mostovi zaustavljaju obradu i obavljaju čišćenje bez vraćanja neobrađenog medijskog sadržaja cilju za koji je poznato da ga ne podržava.

## Registar (`registry.ts`)

Singleton `guardrailRegistry` izlaže:

- `register(guardrail)` — dodaje (ili zamjenjuje normaliziranim imenom) zaštitnu ogradu i
  ponovno sortira po rastućem `priority`.
- `clear()` / `list()` — administrativni pomoćnici.
- `runPreCallHooks(payload, context)` — iterira kroz aktivne zaštitne ograde, provlači
  `payload` kroz `modifiedPayload` i zaustavlja se na prvom `block: true`.
- `runPostCallHooks(response, context)` — isti tok na strani odgovora.
- `resetGuardrailsForTests({ registerDefaults })` — briše stanje i opcionalno
  ponovno registrira zadane vrijednosti za čistu izolaciju testova.

Oba pokretača vraćaju `{ blocked, payload|response, results, guardrail?, message? }`
gdje je `results` niz zapisa `GuardrailExecutionResult` koji uključuju
polja `blocked`, `skipped`, `modified`, `error` i `meta` po zaštitnoj ogradi,
korisna za praćenje.

### Onemogućavanje zaštitnih ograda po zahtjevu

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agregira
dedupliciranu listu imena zaštitnih ograda koje treba preskočiti za trenutni
zahtjev. Izvori (svi opcionalni, svi spojeni):

- `apiKeyInfo.disabledGuardrails`
- Tijelo zahtjeva `disabledGuardrails` (na najvišem nivou)
- Tijelo zahtjeva `metadata.disabledGuardrails`
- Zaglavlje `x-omniroute-disabled-guardrails` (ili zastarjelo
  `x-disabled-guardrails`)

Vrijednosti mogu biti nizovi stringova ili string odvojen zarezima; imena su
normalizirana u mala slova kebab-case (`pii_masker` → `pii-masker`). Rezultat
se prosljeđuje kroz `context.disabledGuardrails` registru, koji preskače
odgovarajuće zaštitne ograde (`skipped: true` u `results`).

## Redoslijed izvršavanja

Za svaki zahtjev koji prolazi kroz `src/sse/handlers/chat.ts` i
`open-sse/handlers/chatCore.ts`:

1.  `resolveDisabledGuardrails(...)` gradi listu za preskakanje iz API ključa, tijela i zaglavlja.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` pokreće zaštitne ograde (guardrails) u rastućem redoslijedu prioriteta:
    - Onemogućene zaštitne ograde se bilježe kao `skipped`.
    - `preCall` svake zaštitne ograde može prepisati payload putem `modifiedPayload`.
    - Prvi `block: true` prekida lanac i rukovatelj vraća odgovor o odbijanju zaštitne ograde.
3.  (Potencijalno prepisan) payload ulazi u kombinovano rutiranje i uzvodno slanje.
4.  Nakon što je odgovor sastavljen, `guardrailRegistry.runPostCallHooks(...)` pokreće isti lanac na odgovoru. `block: true` ovdje odbacuje uzvodni odgovor.

Zaštitne ograde koje izbace grešku bilježe se sa `error: <message>` i loguju putem
`logger.warn`, ali lanac se nastavlja — dizajnirano da bude "fail-open".

## Konfiguracija

Varijable okruženja koje čitaju ugrađene zaštitne ograde:

| Varijabla                             | Koristi                 | Efekat                                                                                                                          |
| :------------------------------------ | :---------------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`      | Postavite `false` da potpuno onemogućite detekciju.                                                                             |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`      | Politika injekcije: `warn`, `block`, ili `log`. Stara vrijednost `redact` ne prepisuje tekst injekcije.                         |
| `INJECTION_GUARD_MODE`                | `prompt-injection`      | Način rada za zaštitu od injekcije; također zastavica funkcije baze podataka koja **nadjačava** varijable okruženja (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`      | Minimalna ozbiljnost koju `MODE=block` odbija: `high` (podrazumijevano), `medium`, ili `low`.                                   |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`      | Stari alias za `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`            | Kada je `true`, PII zahtjeva se rediguje (nezavisno od načina injekcije).                                                       |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nizvodno) | Kontroliše ponašanje maskera na strani odgovora.                                                                                |

Zaštitne ograde Modality Bridge čitaju konfiguraciju vremena izvođenja iz skladišta postavki podržanog bazom podataka (`getSettings()`), a ne iz varijabli okruženja. Primarni ključevi za Vision su
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, i
`modalityBridgeCacheMaxEntries`. Stari
`visionBridge*` ključevi su prihvaćeni samo kao dokumentovani jednociklični rezervni mehanizam za čitanje; upisi na kontrolnoj tabli koriste primarne ključeve. Podrazumijevane vrijednosti i rezervni rješavač nalaze se u `src/shared/constants/modalityBridgeDefaults.ts`, sa starim konstantama zadržanim u `src/shared/constants/visionBridgeDefaults.ts`.

Audio koristi `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, i `modalityBridgeAudioMaxClips`, plus zajedničke
`modalityBridgeCache*` postavke. Audio nema rezervni mehanizam za stare ključeve jer su ovi ključevi uvedeni sa Modality Bridge shemom.

Video koristi `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, i
`modalityBridgeVideoTimeout`, plus zajedničke `modalityBridgeCache*` postavke.
Podrazumijevano je onemogućeno jer su FFmpeg/ffprobe opcionalne operativne zavisnosti, a titlovanje okvira dodaje kašnjenje i troškove modela.

## Prilagođeni Guardrails

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

Koraci:

1.  Kreirajte `src/lib/guardrails/myGuardrail.ts` koji proširuje `BaseGuardrail`.
2.  Implementirajte `preCall` i/ili `postCall`.
3.  Registrujte prilikom uvoza (push iz `registerDefaultGuardrails`) ili
    pozovite `guardrailRegistry.register(...)` tokom izvršavanja — registar zamjenjuje
    bilo koji prethodni guardrail sa istim normalizovanim imenom.
4.  Dodajte testove pod `tests/unit/` (postojeći primjeri:
    `tests/unit/guardrails-registry.test.ts`,
    `tests/unit/prompt-injection-guard.test.ts`,
    `tests/unit/guardrails/visionBridge.test.ts`).

## Testiranje

Koristite `resetGuardrailsForTests()` između testova da biste počeli iz poznatog stanja.
Proslijedite `{ registerDefaults: false }` da biste počeli sa praznim registrom i
registrovali samo guardraile koji se testiraju. Vision Bridge prihvata ubrizgavanje zavisnosti
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge izlaže ekvivalentne šavove za postavke,
mogućnosti, odabir STT modela, provjere akreditiva i transkripciju. Testovi stoga mogu
izvršavati oba toka bez pristupa bazi podataka ili mreži.

## Pogledajte takođe

- `src/lib/guardrails/` — implementacija
- `src/shared/utils/inputSanitizer.ts` — dijeljeni detektor koji pokreće
  prompt-injection i PII maskiranje
- `src/shared/constants/visionBridgeDefaults.ts` — podrazumijevane postavke Vision Bridge-a i
  lista modela sa prisilnim premošćavanjem
- `src/shared/constants/modalityBridgeDefaults.ts` — dijeljene podrazumijevane postavke Vision/Audio runtime-a
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalni sloj (prekidač strujnog kruga, hlađenja)
- `docs/reference/ENVIRONMENT.md` — potpuna referenca varijabli okruženja

## Pokrivenost rute za zaštitu od ubrizgavanja i crveni tim (Faza 8 · Blok D)

Zaštita od ubrizgavanja (`createInjectionGuard` / `withInjectionGuard`) pokriva sve rute
koje prihvataju korisničke upite. Poštuje `INJECTION_GUARD_MODE` (podrazumijevano `warn` = samo bilježenje;
`block` = vraća HTTP 400 `SECURITY_001`).

| Tip               | Rute                                                                                                                                                 | Podrazumijevani način rada |
| :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| Tekst (postojeći) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                       |
| Generativni       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                       |
| Podaci            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                       |

Ekstrakcija teksta (`extractMessageContents`) pokriva `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Crveni tim (noćno, `nightly-llm-security.yml`):** promptfoo provjerava da svaka ruta blokira
OWASP-LLM korpus u `INJECTION_GUARD_MODE=block`; garak pokreće sonde (preskače bez tajne).
`moderations` je uključen radi dosljednosti — operatori u blok-modu ga mogu izuzeti putem
`resolveDisabledGuardrails`.

Noćni radni tok (`.github/workflows/nightly-llm-security.yml`, cron + ručno
pokretanje) ima dva posla:

- **`promptfoo-guard` (blokiranje)** — pokreće `promptfoo eval -c promptfooconfig.yaml`
  sa `INJECTION_GUARD_MODE=block`. Svaki adversarijalni slučaj (npr. "zanemari sve
  prethodne instrukcije...", DAN-stil jailbreakovi) potvrđuje da odgovor nosi
  `error.code === "SECURITY_001"`, tj. da je zaštita zaista odbila zahtjev.
- **`garak` (savjetodavno)** — pokreće garak `--probes promptinject,dan,leakreplay`
  protiv lokalne OmniRoute instance (`http://localhost:20128/v1`). Ograničeno tajnom
  dobavljača (`PROMPTFOO_PROVIDER_KEY`); graciozno preskače i ima sufiks
  `|| true`, tako da izvještava bez pada CI-ja.

Pokrivenost pomoćnika za zaštitu (`createInjectionGuard` / `withInjectionGuard`)
obuhvata svaku `/v1` rutu koja nosi upit; tekst upita se izvlači iz
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomoću
`extractMessageContents()` u `src/shared/utils/inputSanitizer.ts`.
