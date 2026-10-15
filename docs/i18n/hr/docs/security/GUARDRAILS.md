# Guardrails (Hrvatski)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Izvor istine:** `src/lib/guardrails/`
> **Zadnje ažurirano:** 2026-08-29 — v3.8.51 (Podrijetlo transkripta Video Bridgea deklarira pozivatelj,
> još nije potvrđeno od strane poslužitelja — pojašnjeno prema #11661)

Guardrails (zaštitne ograde) provode sigurnost, pravila i transformacije sadržaja na granici
između OmniRoute-a i uzvodnih (upstream) pružatelja usluga. Svaki guardrail može pregledati (i
opcionalno odbiti, transformirati ili anotirati) terete zahtjeva (`preCall`) i
uzvodne odgovore (`postCall`).

Sustav je **fail-open**: ako guardrail izbaci pogrešku tijekom izvršavanja, registar
bilježi pogrešku i nastavlja sa sljedećim guardrailom umjesto prekidanja
zahtjeva. Blokiranje je eksplicitna odluka (`block: true`), nikada slučajnost.

## Ugrađene zaštitne mjere

Registar pri uvozu automatski učitava šest zaštitnih mjera prema redoslijedu prioriteta
(pogledajte `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Naziv               | Faza/e         | Datoteka              |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Niži brojevi prioriteta izvršavaju se **prvi**.

### Most za vizualni sadržaj (`visionBridge.ts`) — Most modaliteta PR-1

Presreće zahtjeve koji sadrže slike i usmjereni su prema **modelima bez podrške za vizualni sadržaj** te cijeli zahtjev preusmjerava na model koji podržava vizualni sadržaj ili zamjenjuje slikovne dijelove tekstualnim opisima koje prije poziva nadređenog sustava generira podesivi model za vizualni sadržaj. Time se pružateljima koji podržavaju samo tekst omogućuje transparentna obrada multimodalnih korisnih sadržaja.

Tijek:

1. Preskoči ako ciljni model već podržava vizualni sadržaj (osim ako se pojavljuje na
   popisu za prisilnu upotrebu mosta `isVisionBridgeForcedModel`).
2. Izdvoji slikovne dijelove putem `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), koji obradu delegira **objedinjenom detektoru
   medija** `detectMediaParts()` u `open-sse/utils/mediaParts.ts` — jedinstvenom
   izvoru istine koji se dijeli s kombiniranim filtrom kompatibilnosti.
   Izdvajanje je ograničeno popisom dopuštenih oblika dijelova najviše razine koje
   `replaceImageParts` može ponovno umetnuti (ugovor izdvajanje↔zamjena): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` i Responses API `input_image`. Ugniježđena podudaranja i
   oblici koji sadrže samo indikator materijal su za kombinirani filtar i nikad se
   ne izdvajaju. Preskoči ako ništa nije pronađeno.
3. Razriješi konfiguraciju tijekom izvođenja putem `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): novi ključevi postavki
   `modalityBridge*` imaju prednost; naslijeđeni ključevi `visionBridge*` ostaju kao
   **rezervna opcija tijekom jednog ciklusa** (razdoblje za vraćanje prethodne
   verzije). Preskoči prije bilo kakvog prolaska kroz medije kada je most
   onemogućen.
4. Birač načina rada (`modalityBridgeVisionMode`, pogledajte tablicu u nastavku)
   odlučuje između preusmjeravanja i opisivanja. Preusmjeravanje vraća
   `modifiedPayload` u kojem je zamijenjen samo `model`, uz metapodatke
   `{ rerouted, fromModel, toModel, imagesKept }`.
5. Put opisivanja: ograničava broj slika na `maxImages`, sastavlja upit prilagođen
   zadatku, provjerava predmemoriju opisa, poziva model za vizualni sadržaj
   **paralelno** (`Promise.allSettled`) i umjesto slika umeće tekstualne dijelove
   `[Slika N]: <opis>`. Neuspjelo opisivanje daje `null`, a izvorni slikovni dio
   ostaje **sačuvan** (#4012) — osim na kombiniranom putu opisivanja kada sva
   opisivanja ne uspiju, pri čemu nadređeni sustav za koji je potvrđeno da ne
   podržava vizualni sadržaj dobiva zamjenski tekst
   `(nedostupno — nije povezan nijedan pružatelj s podrškom za vizualni sadržaj)`
   (#8430).
6. Vrati `modifiedPayload` + metapodatke (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Birač načina rada (`modalityBridgeVisionMode`)

| Način rada | Zadano | Ponašanje                                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Naslijeđena heuristika, nepromijenjena (#6640/#7204): modeli koji nisu kombinirani/`auto/` preusmjeravaju se na najbolji model za vizualni sadržaj, osim ako izvorni model već ima upotrebljive vjerodajnice (tada se opisuje); kombinirani ciljevi uvijek se opisuju.                                                                                          |
| `describe` |        | Uvijek opisuj — blok za preusmjeravanje u potpunosti se preskače; uvijek odgovara model koji je korisnik odabrao.                                                                                                                                                                                                                                               |
| `reroute`  |        | Prisilno preusmjeravanje: zaobilazi se zaštita koja zadržava model s vjerodajnicama. Zaštita vjerodajnica **cilja** preusmjeravanja i dalje se primjenjuje — kada ne postoji upotrebljiv cilj s podrškom za vizualni sadržaj, zahtjev prelazi na opisivanje kako neobrađene slike nikad ne bi dospjele do pozadinskog sustava koji podržava samo tekst (#8430). |

Prisilni načini rada završavaju obradu **prije** pokretanja automatske heuristike;
ponašanje načina `auto` identično je, na razini bajtova, zaštitnoj mjeri prije
PR-1.

#### Opseg API ključa (`visionBridgeKeyScope.ts`)

Kada API ključ pozivatelja ograničava `allowedConnections`, skupove kvota
(`allowedQuotas`) ili modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most odabire samo
modele za preusmjeravanje i opisivanje koje ključ smije upotrebljavati, na vezama
koje ključ smije upotrebljavati. Poziv za opisivanje tada uvijek prolazi kroz
OmniRoute samopetlju sa zaglavljem `x-omniroute-self-loop-key-id`, tako da
zaprimljeni zahtjev za razgovor ponovno provodi pravila tog ključa za veze i
modele. `enforceApiKeyPolicy()` uvažava to zaglavlje samo zajedno s nositeljem
samopetlje, pa ono može samo suziti pristup, a ID koji se ne može razriješiti
biva odbijen.

Ako za ključ nije dopušten nijedan model za vizualni sadržaj, put opisivanja
povlači se, a zahtjev prolazi nepromijenjen, uz isto ponašanje otvorenog prolaza
u slučaju pogreške kao kod onemogućene zaštitne mjere (metapodaci
`{ skipped: true, reason: "no_permitted_vision_model" }`). Zahtjevi bez ključa i
ključevi bez tih ograničenja ponašaju se potpuno jednako kao prije.

#### Upit za opisivanje prilagođen zadatku (`modalityBridgeVisionTaskAware`)

Zadano **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) dodaje
tekst **posljednje korisničke poruke** (skraćen na 500 znakova) osnovnom
upitu za opisivanje, usmjeravajući opis prema onome što je korisnik doista
zatražio (obrazac codex-vision-proxy) i tražeći od vision modela da prepiše
vidljivi tekst. Kad je zastavica isključena — ili nema korisničkog teksta —
osnovni se upit koristi bez izmjena.

Vlastiti OpenAI-kompatibilni zahtjev samopetlje za opisivanje (`callVisionModelSingle()`
u `visionBridgeHelpers.ts`) uvijek zahtijeva `image_url.detail: "high"` —
bezuvjetno, za svakog pozivatelja/pružatelja, neovisno o bilo kojem signalu
klijenta. Uzorkovanje s niskom razinom detalja smanjuje točnost OCR-a upravo
za zadatak prijepisa teksta koji ovaj upit traži, pa sam poziv za opisivanje
uvijek zahtijeva visoku razinu detalja, neovisno o razini detalja izvorno
zaprimljenog zahtjeva. To utječe samo na interno tijelo zahtjeva za opisivanje;
ne mijenja način na koji OmniRoute prosljeđuje pozivateljev vlastiti
`image_url.detail` u primarnom zahtjevu — ta se zadana vrijednost primjenjuje
zasebno i samo za prepoznate OpenCode klijente, u `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Grana samopetlje za opisivanje
koja koristi Anthropic wire format nema polje `detail` i nijedna zadana
vrijednost ne utječe na nju.

#### Ograničenje izlaza opisa (`modalityBridgeVisionMaxChars`)

| Ključ                          | Zadano | Raspon            |
| ------------------------------ | ------ | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` ili 100–50000 |

`0` (zadano) znači **bez ograničenja** — opis koji vrati
`callVisionModel()` prosljeđuje se bez izmjena, čime se zadržava postojeće
ponašanje. Svaka vrijednost u rasponu 100–50000 skraćuje opis uz sufiks
`…` prije nego što se umetne natrag kao `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` u `src/lib/guardrails/visionBridge.ts`).
Povećajte ovu vrijednost za OCR zadatke s mnogo detalja, u kojima je modelu
u nastavku potreban cijeli prijepis; smanjite je kako biste ograničili
potrošnju tokena kod opširnih vision modela. Polje na nadzornoj ploči nalazi
se u ploči Advanced kartice Vision
(`modality-bridge-max-chars` u `ModalityBridgeVisionTab.tsx`) i podiže svaku
vrijednost između 1 i 99 na donju granicu od 100, dok izričitu vrijednost `0`
ostavlja netaknutom — `0` je samostalno valjana Zod vrijednost
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), a ne samo
zadana vrijednost koja označava da postavka „nije postavljena”.

#### Predmemorija opisa (`modalityBridge/bridgeCache.ts`)

LRU + TTL predmemorija u memoriji za izlaze opisivanja, zajednička cijelom
procesu. Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` s
uokvirivanjem prefiksom duljine (bez kolizija na granicama polja). Komponenta
modela jest **konfigurirani** bridge model, a ne model koji je stvarno
odgovorio — `callVisionModel` može interno prijeći na pričuvni model, a
određivanje ključa prema svakom pokušaju fragmentiralo bi predmemoriju.
Neuspjeli opisi nikada se ne spremaju u predmemoriju. Postavke:

| Ključ                           | Zadano | Raspon  |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Normalizacija udaljenih slika (samopetlja za opisivanje/dohvaćanje base64 podataka)

Kad bridge sam dohvaća **udaljenu** sliku — za Anthropic samopoziv opisivanja
i base64 pretvorbu za claude-wire-format
(`ensureBase64ImagesForClaudeWire`), oboje putem
`fetchRemoteImageAsDataUri()` u `visionBridgeHelpers.ts` — dobiveni podatkovni
URI prosljeđuje se kroz `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) prije ugrađivanja u zahtjev vision
modelu. Prevelike slike smanjuju se na **2048px po duljem rubu** (što odgovara
ograničenju promjene veličine koje OpenAI/Anthropic već primjenjuju na
strani poslužitelja), čime se smanjuje broj prenesenih bajtova i latencija bez
promjene onoga što vision model vidi. Za promjenu veličine koristi se `sharp`,
učitan dinamičkim uvozom: na platformi na kojoj se njegova nativna binarna
datoteka ne uspije učitati, `normalizeDataUri()` **nikada ne izbacuje
iznimku** — umjesto toga prosljeđuje izvorne bajtove bez izmjena, pa putanja
opisivanja/base64 pretvorbe uvijek nastavlja raditi. Bajtovi koji nisu slika
(dohvaćanje koje nije vratilo sliku koju je moguće dekodirati) također se
prosljeđuju bez izmjena. Ova normalizacija ograničena je na slike koje bridge
dohvaća za vlastiti samopoziv — nikada se ne primjenjuje na pozivateljev
neobrađeni payload koji se izravno prosljeđuje, u skladu s načelom izmjene
samo uz izričit pristanak (Hard Rule #20).

#### Shema postavki + migracija

Novi ključevi `modalityBridge*` provjeravaju se Zodom u
`updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trojka `modalityBridgeCache*` i grupa
`modalityBridgeAudio*` koju koristi Audio Bridge. Migracija
`141_modality_bridge_settings.sql` kopira postojeće naslijeđene vrijednosti
`visionBridge*` u odgovarajuće nove ključeve (idempotentno, bez prepisivanja
vrijednosti `modalityBridge*` koju je postavio operater); naslijeđeni ključevi
ostaju prihvaćeni kao pričuvni izvor za čitanje tijekom jednog ciklusa izdanja.

#### Zaglavlje transparentnosti + statistika

Odgovori transformirani opisivanjem sadrže
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(izrađuje ga `buildModalityBridgeHeader()` u `modalityBridge/bridgeStats.ts`,
a postavlja `withModalityBridgeHeader()` u `src/sse/handlers/chatHelpers.ts`).
Preusmjereni zahtjevi **nemaju** zaglavlje — payload nije izmijenjen, a
zamjena modela već je vidljiva u polju `model` tijela odgovora.

`GET /api/modality-bridge/stats` (autorizacija za upravljanje, ista razina kao
`GET /api/settings`) vraća brojače po modalitetu pohranjene u memoriji
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` za `vision`, `audio` i
`video`. `averageLatencyMs` kao nazivnik koristi `latencySamples`, a ne sve
pokušaje; operacija bez mjerenja vremena ne stvara lažni uzorak od nula
milisekundi. `bridged` ostaje unatrag kompatibilan pseudonim za uspješne
pretvorbe; neuspjeli pokušaji ne povećavaju njegovu vrijednost.
Brojači se namjerno poništavaju pri ponovnom pokretanju procesa
(telemetrija, a ne obračun).

#### Konfiguracija nadzorne ploče

Namjenska stranica nadzorne ploče nalazi se na
`/dashboard/settings/modality-bridge`. Njezine kartice `Vision`, `Audio` i
`Video`, kojima se može pristupiti putem URL-a, pri prebacivanju čuvaju parametre
upita uz promjenu vrijednosti `tab`.
Kartica Vision nudi omogućavanje, način rada, odabir modela (uključujući
automatsku zadanu vrijednost), sastavljanje upita prilagođeno zadatku, napredna
ograničenja vremena čekanja/slike/duljine opisa/predmemorije, brojače tijekom
izvođenja i zaštićeni ogledni zahtjev. Kartica Audio također je aktivna: nudi
omogućavanje, birač modela isključivo za STT s opcijom Auto, ograničenja vremena
čekanja/maksimalnog trajanja isječka, brojače zvuka i ogledni test `input_audio`.
Kartica Video je funkcionalna: prikazuje stanje okruženja FFmpeg/ffprobe — jedno
od četiriju izričitih stanja korisničkog sučelja (`unknown` dok je provjera u
tijeku ili se nije mogla dovršiti, `restricted` na hostu nadzorne ploče koji nije
povratna adresa i na kojem se provjera preskače na strani klijenta, `unavailable`
nakon provedene provjere i potvrde da alati nedostaju ili `available` s verzijama
FFmpeg/ffprobe) — trajno sprema ograničenja omogućavanja/modela/broja
kadrova/videozapisa/vremena čekanja, filtrira birač modela na modele koji
podržavaju vid i prikazuje brojače videozapisa.

Prijašnja kartica Vision Bridge u postavkama umjetne inteligencije sada je
poveznica radi kompatibilnosti na novu stranicu; više ne sadrži drugu kopiju
obrasca. Media Providers također povezuje tijekove rada Image-to-Text i
Speech-to-Text s odgovarajućim karticama Modality Bridge bez uklanjanja
postojećeg okruženja za isprobavanje Speech-to-Text.

**Zaobilaženje provjere prihvata za vlastitu petlju:** kada se poziv za opisivanje
usmjerava kroz vlastitu `/v1` petlju OmniRoutea (nestandardni model pružatelja),
podzahtjev šalje `x-omniroute-admission-bypass: internal` i autentificira se
razriješenom vjerodajnicom vlastite petlje — lokalnim sentinelom `sk_omniroute`
u lokalnom načinu rada ili ključem okruženja `OMNIROUTE_API_KEY` /
`ROUTER_API_KEY` koji je konfigurirao operator (#1350), tako da implementacije s
`REQUIRE_API_KEY=true` i dalje mogu izvršiti poziv za opisivanje. Zaobilaženje se
uvažava samo za te točne vjerodajnice, pa vanjski klijenti ne mogu upotrijebiti
zaglavlje kako bi preskočili provjeru prihvata.

Naslijeđene zadane vrijednosti nalaze se u
`src/shared/constants/visionBridgeDefaults.ts`; nove zadane vrijednosti za
način rada/zadatke/predmemoriju i razrješivač postavki nalaze se u
`src/shared/constants/modalityBridgeDefaults.ts`. Zaštitni mehanizam izlaže
opciju konstruktora `deps` kako bi testovi mogli umetnuti lažne implementacije
`getSettings` i `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Presreće zahtjeve za razgovor koji sadrže zvuk prije nego što dosegnu odredište
za koje nije poznato da prihvaća zvučni ulaz. Nikada ne preusmjerava zahtjev za
razgovor: zvučni se dijelovi transkribiraju putem postojećeg višedijelnog krajnjeg
čvora kompatibilnog s OpenAI-jem, a odabrani model za razgovor nastavlja rad s
tekstualnim transkriptima.

Tijek:

1. Razriješite `supportsAudio` putem `getResolvedModelCapabilities()`. Prednost
   imaju izričiti metapodaci registra pružatelja, zatim statični metapodaci modela
   pa sinkronizirani `modalities_input`. Deklarirani popis ulaza bez `audio` ima
   vrijednost `false`; ako nema dokaza o mogućnostima, vrijednost ostaje `null`.
   I `false` i `null` aktiviraju konzervativni most, dok ga `true` zaobilazi.
2. Razriješite postavke `modalityBridgeAudio*` i izdvojite zamjenjive zvučne
   dijelove najviše razine iz svake poruke putem zajedničkog detektora
   `detectMediaParts()`. Podržani oblici prijenosa jesu OpenAI `input_audio`,
   `audio_url` i `source.media_type: "audio/*"`. Ugniježđeni zvuk otkriva se radi
   usmjeravanja, ali ga putanja zamjene ne uklanja. Količina posla ograničena je
   postavkom `modalityBridgeAudioMaxClips`; kasniji dijelovi ostaju netaknuti.
3. Poštujte konfigurirani `provider/model` ili dopustite funkciji
   `selectAudioBridgeModel()` da prođe kroz `AUDIO_TRANSCRIPTION_PROVIDERS`
   stabilnim redoslijedom kataloga i odabere prvi model s upotrebljivom aktivnom
   vjerodajnicom pružatelja.
4. `callAudioTranscription()` pretvara zvuk u obliku base64/data-URI u
   višedijelni `file` ili preuzima udaljeni `audio_url` putem zaštite za izlazni
   promet samo prema javnim odredištima, uz DNS prikvačivanje i ograničenje od
   25 MB. Zatim POST-om šalje datoteku i odabrani model lokalnoj vlastitoj petlji
   `/v1/audio/transcriptions`, autentificiranoj putem `resolveSelfLoopBearer()`.
   Postojeća ruta za transkripciju obavlja uobičajeno pronalaženje vjerodajnica,
   rukovanje razdobljima mirovanja/ograničenjem brzine i otpremu pružatelju.
5. Uspješni pozivi zamjenjuju svoje dijelove tekstom
   `[Audio N]: <transcript>`. Pozivi se izvršavaju pomoću `Promise.allSettled`:
   pojedinačni neuspjeh zadržava izvorni zvučni dio (ugovor #4012). Ako svi
   pozivi ne uspiju, a dokazano je da odredište ima `supportsAudio === false`,
   dijelovi postaju
   `[Audio N]: (unavailable — no STT provider connected)` (ugovor #8430). Za
   nepoznato odredište (`null`) rezultat u kojem svi pozivi ne uspiju ostaje
   netaknut. Dokazano tekstualno odredište bez upotrebljive STT vjerodajnice
   prima isti izričiti zamjenski tekst bez upućivanja mrežnog poziva.

Uspješni transkripti koriste LRU/TTL predmemoriju Modality Bridge zajedničku
cijelom procesu. Ključ kombinira referencu na zvuk, stabilnu oznaku operacije
`audio-transcription` i odabrani STT model; neuspjesi se nikada ne spremaju u
predmemoriju. Pokušaji obrade zvuka ažuriraju zajedničke brojače `bridged`,
`cacheHits`, `failures` i `lastUsedAt`.
Transformirani odgovori sadrže
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; netaknuti
zahtjevi ne dobivaju segment Audio Bridge.

Postavke tijekom izvođenja pohranjene su u bazi podataka i provjerene pomoću
Zoda:

| Ključ                         | Zadano  | Raspon                |
| ----------------------------- | ------- | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                     |
| `modalityBridgeAudioModel`    | `""`    | Automatski ili STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                  |

Dijeljenom predmemorijom i dalje upravljaju `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` i `modalityBridgeCacheMaxEntries`.

### Videomost (`videoBridge.ts`, `videoBridgePipeline.ts`)

Presreće dijelove videozapisa najviše razine u `messages` API-ja Chat Completions i
`input` API-ja Responses prije pozivanja cilja bez poznate izvorne podrške za video.
Podržani oblici su `input_video`, `video_url`, `video_source`, HTTPS URL-ovi
i podatkovni URI-ji `data:video/*;base64,...`. Obični nazivi datoteka u tekstu ne
smatraju se videozapisima.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) upravlja prolaskom kroz zahtjev,
provjerom mogućnosti/pravilnika, agregacijom po zahtjevu i korisnim sadržajem odgovora.
Obrada pojedinačnog videozapisa — dohvaćanje, predmemorija cijelog rezultata, opisivanje
slijeda kadrova (koje objedinjuje svaki audioskript koji je deklarirao pozivatelj) te
metrike/prekid/čišćenje po pokušaju — skrivena je iza `processVideoPart` u
`videoBridgePipeline.ts`, koji se poziva jednom za svaki dio videozapisa unutar petlje
metode `preCall`. Taj modul također definira eksplicitne granice priključaka
`VideoMediaBrokerPort` (dohvaćanje bajtova i izdvajanje uzorkovanih kadrova),
`VideoAudioTranscriptionPort` (objedinjavanje audioskripta koji je deklarirao pozivatelj
s uzorkovanim opisima) i `VideoDrilldownPort` (granica trajne pohrane detaljne analize
kadrova; još nije povezana s `processVideoPart` — danas samo zasebna ruta
`/api/modality-bridge/video/drilldown` zapisuje unose detaljne analize).

Javni put zahtjeva `/v1` nikada ne uvozi niti poziva podproces. Udaljeni videozapisi
preuzimaju se uz ograničenje od 50 MiB; ugrađeni videozapisi u formatu base64 imaju
konzervativno ograničenje od 36 MiB dekodiranih podataka po videozapisu kako bi
omotnica modela/poruka/uokvirivanja ostala unutar javnog ograničenja prihvata JSON
zahtjeva od 50 MiB. Duljina ugrađenih podataka i procjene dekodirane veličine
provjeravaju se prije alokacije. HTTPS je obvezan za početni udaljeni URL i svako
preusmjeravanje, uz postojeću zaštitu za isključivo javni izlazni promet s
prikvačivanjem DNS-a. Bajtovi zatim prelaze točno određenu internu granicu posrednika
`POST /api/modality-bridge/video/extract`. Ta je ruta istodobno `LOCAL_ONLY` i
`SPAWN_CAPABLE`, prihvaća samo autentificirani zahtjev iz pouzdane povratne petlje
specifičan za proces te nikada ne prihvaća URL, put datotečnog sustava, izvršnu
datoteku ni popis argumenata. Cjevovod ograničenja veličine tijela API-ja i inkrementalni
čitač tijela rukovatelja neovisno nameću ograničenje ulaza posrednika od 50 MiB.
Njegov ograničeni red obrađuje jedno izdvajanje odjednom, dopušta četiri posla na
čekanju i ograničava ulazne podatke na čekanju na 100 MiB.

Unutar posrednika `ffprobe` čita privatnu lokalnu datoteku; fiksni popis dopuštenih
formata isključuje formate popisa za reprodukciju i manifesta. Za dopuštene spremnike
iz obitelji MOV vanjske reference na MOV podatke ostaju onemogućene prema zadanim
postavkama, a fiksna naredba ih ne uključuje. I `ffprobe` i `ffmpeg` upotrebljavaju
popis dopuštenih protokola koji sadrži samo `file`, jednu dretvu, fiksne nizove
argumenata, bez ljuske, uz izvršne datoteke razriješene iz `PATH`. Tokovi naslovnih
slika u privitku nisu kandidati za reprodukciju. Svi tokovi koji se mogu reproducirati
moraju zadovoljiti ograničenja, a eksplicitni zadani tok ima prednost pred
determinističkim rezervnim odabirom najnižeg indeksa. Videozapisi su ograničeni na
600 sekundi, 8.192 piksela po dimenziji i 33.554.432 izvorna piksela. FFmpeg uzorkuje
1–16 JPEG kadrova iz srednjih točaka, smanjuje dulji rub na najviše 1.024 piksela bez
povećavanja manjih ulaza i nikada ne prima URL. Uzorkovanje je prema zadanim postavkama
`uniform`. Neobavezna pravila `scene_aware` i eksperimentalna pravila `segment_aware`
izvode jedan dodatni fiksni prolaz FFmpeg-a nad već provjerenim lokalnim tokom,
odabiru ograničene vremenske oznake scena iz `showinfo` i deterministički se vraćaju
na iste ravnomjerne srednje točke u slučaju neuspjeha detektora, isteka vremena,
neispravnog izlaza ili praznog skupa kandidata. Način rada koji uzima u obzir segmente
dodjeljuje uzorke srednjih točaka razmjerno provjerenim intervalima scena; dokazi za
način rada koji uzima u obzir segmente i ponašanje povratka detaljno su opisani u
nastavku. Strogo ograničenje od 16 kadrova primjenjuje se nakon odabira u svakom
pravilu. Kada zahtjev koji uzima u obzir scene ima proračun od samo jednog kadra,
upotrebljava ravnomjernu srednju točku aktivnog prozora cijelog videozapisa ili
fokusnog prozora i prijavljuje `policyEffective: uniform`: jedan odabrani kadar scene
ne može očuvati oba vremenska kraja. Pozivatelj po želji može navesti konačan fokusni
prozor (`start`/`end` u sekundama); granice se ograničavaju na trajanje medija,
obrnuti ili nekonačni prozori odbijaju se, a sva pravila uzorkovanja primjenjuju se
samo unutar normaliziranog intervala. Rezultirajući prozor uključuje se u metapodatke
uzorkovanja i u prefiks nepouzdanog opisa kako bi nizvodni modeli mogli razlikovati
fokusirani isječak od cijele vremenske crte.

Semantički fokus opisa zasebna je, eksplicitna postavka. Zadani način analize `full`
zadržava postojeći upit za kadrove i nikada ne prosljeđuje tekst zahtjeva modelu za
opise. U načinu `focused` most čita samo najnoviji neprazni `text`/`input_text` koji je
izradio korisnik iz istog spremnika Chat ili Responses, normalizira ga u NFC, sažima
kontrolne znakove i razmake te ga ograničava na 500 Unicode kodnih točaka. Prazan
rezultat vraća se na točan upit načina `full`. Upotrebljiva uputa serijalizira se kao
JSON u namjenskom bloku nepouzdanog korisničkog konteksta i smije samo dati prednost
uočljivim pojedinostima; ne može nadjačati zasebno upozorenje da se ne slijede upute
koje su vidljive ili čujne u mediju. Tekstualni fokus nikada ne izvodi `start`/`end`
niti mijenja vremenski uzorkivač.

#### FU-07 strukturni dokazi o segmentima

`segment_aware` koristi jedan ograničeni prolaz predanalize nad već provjerenim
lokalnim videostreamom. Fiksni lanac filtara najprije skalira video na širinu od
najviše 320 piksela, otkriva promjene scena i zamrznute intervale, a zatim uzorkuje
1 kadar u sekundi radi procjene zamućenja, prosječne luminancije te
prostornih/vremenskih informacija. Prolaz je ograničen na 600 strukturnih uzoraka,
jednu FFmpeg/filtarsku dretvu, iste popise dopuštenih protokola koji podržavaju
samo `file` i spremnika, ograničenje izlaza procesa od 1 MiB te najviše 30 sekundi
unutar zajedničkog prekida/roka brokera. Nikada ne prihvaća naredbu, filtar, putanju
ili URL iz zahtjeva.

Strukturne vrijednosti deterministički su dokazi uzorkovanja, a ne semantičko
razumijevanje videozapisa. One ne zaključuju o subjektima, radnjama, titlovima,
govoru ili namjeri korisnika. Granice scena i zamrzavanja oblikuju segmente;
pokrivenost zamrzavanjem, zamućenje, ekspozicija, prostorni detalji i vremenske
promjene utječu samo na način raspodjele postojećeg budžeta od 1–16 kadrova.
Potpuno zamrznut segment ograničen je na jedan kadar, dok se nezamrznuti segmenti
natječu za preostali budžet. Kada ima više granica nego kadrova, zadržava se
ujednačena pokrivenost vremenske crte kako brzi rani rezovi ne bi mogli sakriti
dugačak završni segment. Granice scena unutar analitičke razlučivosti od 1 sekunde
od granice zamrzavanja objedinjuju se.

Nedostajući filtri, neispravni/prazni dokazi, pogreška detektora ili istek
ograničenog vremena predanalize otvoreno prelaze na potpuno jednaku politiku
ujednačenih srednjih točaka. Prekid pozivatelja ili rok brokera ne prelazi otvoreno
na tu politiku: prekida podproces u tijeku, sprječava naknadno izdvajanje kadrova,
a privatno privremeno stablo uklanja se u bloku `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generira determinističke stvarne FFmpeg
ispitne materijale za uštede poziva za opise nakon deduplikacije, raspodjelu
budžeta za gusto kretanje, dokaze o zamućenju/ekspoziciji/SI-TI, brze rezove s
dugačkim završetkom i lažno pozitivne rezultate postupnog zatamnjenja. Bilježi
zidno vrijeme predanalize te, kada je `/usr/bin/time` dostupan, CPU podređenog
procesa i vršni RSS. Njegove provjere kvalitete samo su strukturna mjerila.
Kvaliteta stvarnog modela za opise ostaje `HOLD` jer ovaj ispitni sustav nema
ovlaštenu krajnju točku ni zamrznuti ocjenjivač. Novčane uštede također ostaju
`HOLD`, osim ako `--caption-cost-per-call-usd` pruži izričitu pozitivnu procjenu
troška po pozivu; skripta nikada ne izmišlja nijedan od tih rezultata.

Svaki kadar ograničen je na 4 MiB, svi sirovi kadrovi zajedno na 23 MiB, a
serijalizirani odgovor brokera na 32 MiB. Privatni privremeni direktorij uklanja
se u bloku `finally`. OmniRoute ne uključuje FFmpeg u distribuciju i ne prihvaća
prilagođenu putanju izvršne datoteke. Prije izrade opisa bridge primjenjuje
konzervativni prolaz vizualne deduplikacije: svaki JPEG svodi se na međuspremnik
sivih tonova veličine 16×16 i uspoređuje samo s posljednjim zadržanim kadrom.
Za traženi budžet opisa veći od jednog kadra izdvajanje isporučuje ograničeni
skup kandidata do dvostruke veličine tog budžeta, ali nikada više od 16 kadrova.
Traženo ograničenje primjenjuje se tek nakon deduplikacije, pri čemu se tijekom
završnog prorjeđivanja zadržavaju prvi i posljednji odabrani kandidat ako budžet
iznosi najmanje dva. Verzijski označena politika
`grayscale-16x16-mean-cells-v2` koristi veću vrijednost između srednje promjene
luminancije i omjera ćelija minijature čija je normalizirana razlika najmanje
0.05. Prag duplikata konstantna je vrijednost 0.04, odabrana radi predvidljivosti,
a ne izložena kao postavka tijekom izvođenja. Taj sekundarni signal visokog
kontrasta zadržava male pokrete i promjene vidljivog teksta koje usporedba
zasnovana samo na srednjoj vrijednosti može sakriti. Pogreške usporednika ili
dekodera otvoreno zadržavaju pokrivenost. Izlazni metapodaci odvojeno navode
izdvojene kandidate, uspješno upotrijebljene kadrove i odbačene vizualne
duplikate.

Izričito označen videodio može zatražiti kontaktnu tablu s vremenskim oznakama.
Bridge izrađuje JPEG mrežu s najviše 4 stupca i 16 kadrova. Svaka ćelija od
512 piksela utiskuje vremensku oznaku svojeg izvora u donju traku visokog
kontrasta, dok iste vremenske oznake ostaju u tekstualnim metapodacima radi
naknadnog povezivanja i revizije. Cjeloviti JPEG ostaje ograničen na 32 MiB.
Ako `sharp` ne može dekodirati ili sastaviti mrežu, bridge se vraća na pojedinačne
JPEG kadrove; prekid klijenta i dalje se prenosi kroz operaciju izrade table.

Dokazi za promicanje namjerno su odvojeni od sintetičkog mikrotesta performansi
sastavljanja. `scripts/perf/video-bridge-contact-sheet-eval.ts` definira
A/B ispitni sustav s verzioniranom shemom za stvarne modele vida kompatibilne
s OpenAI-jem. Mjeri tokene koje je prijavio pružatelj, ukupnu zidnu latenciju
(uključujući sastavljanje table), broj poziva modela i zadržavanje činjenica
definirano manifestom. Neobrađeni odgovori modela ne zapisuju se u izvješće;
zadržavaju se samo SHA-256 sažeci i ID-ovi podudarnih činjenica. Ispitni sustav
ne upućuje mrežni poziv ni poziv plaćenom modelu ako nije proslijeđen
`--execute-real` te ako nisu konfigurirani `--model`, `OMNIROUTE_BASE_URL` i
`OMNIROUTE_API_KEY`. Bez takvog izričitog stvarnog izvođenja njegov strojno
čitljiv ishod ostaje `HOLD`; sama sintetička mjerenja korisnog sadržaja/broja
poziva nisu dokaz za promicanje.

Pozivatelji mogu priložiti neobavezno polje `transcript.cues` podržanom
videodijelu kada već posjeduju vremenski usklađen tekst. Svaka natuknica mora
sadržavati `text`, konačni interval `start`/`end` unutar utvrđenog trajanja i
`source` s popisa dopuštenih vrijednosti (`client`, `embedded` ili
`audio-bridge`); `confidence` zadano ima vrijednost `1` i mora ostati između
`0` i `1`. Potpuno jednake natuknice objedinjuju se. OmniRoute nikada ne pokreće
transkripciju na temelju tih metapodataka: provjerene natuknice kopiraju se u
opisani rezultat zajedno s izvorom, pouzdanošću i intervalom te se prikazuju kao
nepouzdana opažanja uz opise kadrova. Nevažeći tekst, tekst izvan raspona ili tekst
bez podataka o podrijetlu odbacuje se umjesto da se pomiješa s tokom opisa.
Polje `source` trenutačno deklarira pozivatelj i poslužitelj ga ne provjerava:
OmniRoute zahtijeva da vrijednost bude jedan od triju dopuštenih nizova, ali još
kriptografski ne potvrđuje da je oznaka `embedded` ili `audio-bridge` doista
proizašla iz izdvajanja u vlasništvu poslužitelja. Smatrajte `source` nepouzdanom
naznakom dok ta provjera ne bude uvedena; ne temeljite odluke o autorizaciji
na njemu.

Napredni pozivatelj može dostaviti već autorizirani zapis `audioTranscript`
za isti videozapis. Spojna komponenta pokreće vizualna i zvučna opažanja unutar
jednog roka i uz jedan signal prekida, raspoređuje ih na zajedničkoj vremenskoj
osi, sažima potpuno jednake duplikate i prijavljuje djelomičan rezultat kada
uspije samo jedna strana. Nevaljani `audioTranscript` degradira se na taj
djelomičan rezultat — vizualni se opis zadržava, a zvučna grana bilježi
sanitizirani kôd pogreške — umjesto da cijeli videozapis ne uspije. Dostupnost
po granama, oznaka djelomičnog rezultata i sanitizirani kodovi pogrešaka
zadržavaju se u opisanom rezultatu, u metapodacima zaštitnih mehanizama
(`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), u metapodacima predmemorije rezultata i u brojačima
spajanja mosta. Zadani put Video Bridgea ne poziva pretvorbu govora u tekst
niti preuzima drugu kopiju medija; bez tog izričitog zapisa ostaje ograničen
samo na videozapis.

**Zadržavanje transkripta (#12150 P1).** Ovo se primjenjuje automatski kad god
Video Bridge (koji se sam mora izričito uključiti) prikaže oznaku transkripta —
ne postoji zasebna oznaka zadržavanja. Kada zahtjev prikaže bilo koju oznaku
transkripta (`transcript` koji je deklarirao pozivatelj ili spojeni
`audioTranscript`), zaštitni ga mehanizam označava kao `videoBridgeObserved` i
stvara redigiranu presliku opisa videozapisa — istovjetan prikaz u kojem je
slobodni tekst svake oznake zamijenjen tekstom
`[redacted-video-transcript]`, izrađen zamjenom strukturiranog polja oznake
prije sastavljanja niza (nikada raščlanjivanjem poravnatog teksta, tako da
nikakav sadržaj oznake — zlonamjeran ili uobičajen, uključujući tijela koja
sadrže `]`, poput `[inaudible]`/`[music]` — ne može ostati). Tijelo zahtjeva u
trajnom zapisniku poziva zamjenjuje svaki tekstualni dio izveden iz videozapisa
tom redigiranom preslikom, uparenom prema jednakosti sadržaja; sidro `fullText`
ponovno se čita iz dovršenog sadržaja zaštitnog mehanizma prije poziva, pa
uparivanje i dalje uspijeva nakon što naknadni lančani zaštitni mehanizmi
(alati za maskiranje PII-ja i vjerodajnica, s prioritetima 10/95) prepišu tekst
opisa na mjestu te nakon što umetanje sistemskog upita, prijenosa i Memorije
preoblikuje polje poruka. Tijelo poslano uzvodno modelu ostaje nepromijenjeno.
Promatrani zahtjev također ne popunjava trajnu Memoriju (preskače se izdvajanje
i iz zahtjeva i iz odgovora), tako da vlastiti odgovor modela ne može prenijeti
tekst transkripta u Memoriju.

**Neobrađena polja videozapisa (#12430).** Kada je most omogućen, a izvorna podrška za videozapis nepoznata ili nije prisutna, definirana polja `transcript`/`audioTranscript` također aktiviraju `videoBridgeObserved`, čak i nakon neuspjelog opisa ili ograničenja `maxVideos`. `null` i prazni nizovi računaju se kao definirani; odsutna polja i metapodaci koji se ne odnose na videozapis ne računaju se. Zadržane kopije redigiraju ta polja ili izostavljaju zahtjev, a predmemorije i Memorija se zaobilaze. Sadržaj za pružatelja ostaje nepromijenjen.

Dodatne zadržane kopije koriste isti signal promatranog zahtjeva. Neobrađena
snimka klijentskog zahtjeva prije zaštitnih mehanizama, zahtjev na čekanju u
memoriji i rani zapisnik odbijenog zahtjeva strukturno zamjenjuju polja
transkripta u dijelovima videozapisa; nizovi upita koje sintetiziraju faze
obrade i prijenos konteksta redigiraju se na odredištu trajnog tijela zahtjeva.
Trajno spremljena oznaka `video_content_removed` uzrokuje da nastavak putem
`previous_response_id` sigurno ne uspije umjesto da rekonstruira tekst koji je
namjerno odbačen. Ako promatrani zahtjev prije zapisivanja izgubi svoju
redigiranu presliku za pojedini dio ili ako se samo jedna od nekoliko preslika
videozapisa ne uspije upariti nakon naknadnih izmjena zahtjeva, zadržano tijelo
zahtjeva u potpunosti se izostavlja umjesto da se zadrži djelomično redigiran
transkript.

Za promatrani zahtjev odgovor modela može citirati bilo koji dio transkripta
bez strukturirane granice oznake. Njegov `responseBody` u trajnom zapisniku
poziva stoga se zamjenjuje oznakom izostavljanja; detaljni artefakt obrade
(koji može sadržavati uzvodna/klijentska tijela i dijelove toka) ne zadržava se.
Semantičke predmemorije, predmemorije idempotentnosti i predmemorije ponovne
reprodukcije zaključivanja zaobilaze čitanja i zapisivanja za taj zahtjev.
Zahtjev pružatelju i odgovor vidljiv klijentu ostaju nepromijenjeni. Rani
keepalive bajtovi uklanjaju se iz privremenog međuspremnika kada se detaljni
artefakt izostavi. Kirovo upozorenje o neispravnom EventStreamu prijavljuje samo
broj bajtova sadržaja, nikada njegov sadržaj niti neobrađenu pogrešku JSON
parsera.
Ovim se ne tvrdi da je provjerena svaka nepovezana dijagnostička poruka
pružatelja/dodatka; širi pregled odredišta sa zadržanim podacima prati se u
#11658.

Životni ciklus internog resursa `/api/modality-bridge/video/drilldown` zasebna
je predmemorijska podloga s autentikacijom putem povratne veze/tokena. Svaka
operacija također zahtijeva kanonski neprozirni ID subjekta. Prije omogućavanja
produkcijskog pozivatelja, on taj ID mora izvesti iz autentificiranog klijenta
i nikada ne smije proslijediti vrijednost koju je odabrao klijent. Ključevi
predmemorije vežu taj subjekt uz kanonske ID-jeve sesije i reference
videozapisa, pohranjuju samo njihove ključeve izvedene pomoću SHA-256 te
ograničavaju i čitanje i brisanje na isti subjekt. Predmemorija po unosu
pohranjuje najviše 16 izvedenih JPEG okvira, uklanja ih nakon deset minuta i
podržava ograničena čitanja pomoću `start`/`end` ili izričito brisanje sesije.

Svaki je subjekt ograničen na 16 unosa i 64 MiB kanonskih JPEG podataka. Ta su
ograničenja neovisna o globalnoj gornjoj granici od 64 unosa/256 MiB: pritisak
kvote subjekta uklanja samo najdulje nekorištene unose tog subjekta prije
razmatranja globalnog LRU uklanjanja. Istekli unosi uklanjaju se i iz
računovodstva subjekta i iz globalnog računovodstva pri aktivnosti predmemorije,
dok otkazivanje i neuspjela provjera valjanosti ne potvrđuju djelomičnu zamjenu.

Predmemorija odbacuje nekanonski Base64, prekomjernu dopunu, medije koji nisu JPEG, neispravne ili
skraćene JPEG-ove te JPEG-ove koji uzrokuju upozorenje tijekom ograničenog dekodiranja cijele slike pomoću alata `sharp`.
Svaku prihvaćenu sliku ponovno kodira kao kanonski JPEG, određuje širinu i visinu
iz dekodiranih bajtova umjesto da vjeruje poljima pozivatelja te odbacuje sve završne
poliglotske bajtove umjesto da ih zadržava. Samo se ograničeni kanonski komprimirani međuspremnik
uračunava u obje kvote. Ograničenje JSON prijenosa uključuje dodatnu veličinu Base64 kodiranja za gornju granicu
dekodiranog ulaza od 32 MiB. Svako
pohranjeno izvođenje bilježi svoj provjereni JPEG format/razlučivost, pravilo uzorkovanja,
verziju izvođenja, vrijeme stvaranja, sažetak sadržaja koji je izračunao poslužitelj i sažetu referencu
nadređenog objekta zajedno sa sažetkom sadržaja nadređenog objekta pouzdanog pozivatelja. Otkazivanje se provjerava
između asinkronih faza dekodiranja/izračuna sažetka prije atomskog zapisivanja u predmemoriju.

Ova faza još ne povezuje produkcijskog proizvođača s rutom i ne
omogućuje odabir varijante s više razlučivosti. Transparentni put zahtjeva Video Bridgea
stoga ne uvodi dodatni rad, dok izvođenje identiteta vezanog uz zakupca i
cijeli FU-08 životni ciklus s više razlučivosti ostaju izričito navedeni kao naknadni zadaci,
a ne kao dokumentirano dovršeno ponašanje.

Kadrovima se redom stvaraju opisi pomoću konfiguriranog Video modela. Prazno
Video nadjačavanje nasljeđuje postavku Vision; ako su obje postavke prazne, Vision
automatski usmjerivač odabire odgovarajući model koji podržava vid. Uspješni opisi
zamjenjuju izvorni dio stabilnim prefiksom `[Video description:`, koji također
označava tekst kao nepouzdano opažanje izvedeno iz medija i upućuje modele u nastavku
da ne slijede upute pronađene u mediju. Ključevi predmemorije opisa kadrova
uključuju JPEG bajtove, upit, vremensku oznaku i odabrani model; predmemoriraju se samo
uspješni opisi. Unosi predmemorije zadržavaju stvarni model proizvođača koji je uspješno obradio sadržaj,
uključujući pričuvni model; most prijavljuje `mixed` kada su različite kadrove
proizveli različiti modeli. Pogodak u predmemoriji ponovno upotrebljava taj identitet proizvođača
umjesto da ga ponovno označava kao traženi plan usmjeravanja. Predmemorija rezultata
za cijeli video indeksirana je prema svakom ulazu koji mijenja izlaz — upitu, odabranom
modelu, pravilu uzorkovanja, broju kadrova, načinu semantičke analize, SHA-256
otisku normaliziranog savjeta za fokus, prozoru fokusa, `transcript`,
`audioTranscript` i zastavici kontaktne stranice — pa promjena bilo koje od tih
dimenzija uzrokuje promašaj predmemorije, a nikad ponovnu upotrebu zastarjelih podataka. Verzija
pravila vizualne deduplikacije, prag i ograničeni broj kandidata za kadrove također su izričito navedeni u
ključu i metapodacima predmemorije rezultata; promjena pravila stoga ne može ponovno upotrijebiti zastarjeli
opis cijelog videozapisa. Metapodaci predmemorije rezultata v4 zadržavaju način rada i
otisak, ali nikad neobrađeni korisnički zadatak. Metapodaci zaštitnog mehanizma navode i
traženi i stvarni način analize; traženi način `focused` bez
upotrebljivog korisničkog teksta prijavljuje se kao stvarni način `full`.

Zaštitni mehanizam izdvaja svaki podržani videodio, ali ne opisuje više od
`modalityBridgeVideoMaxVideos`. Za cilj za koji je dokazano da ima
`supportsVideo === false`, neuspjeli videozapisi i videozapisi iznad ograničenja postaju izričite sigurne
tekstualne oznake kako ne bi preživio nijedan neobrađeni videozapis. Kada mogućnost nije poznata, ti dijelovi
ostaju nepromijenjeni. Ciljevi sa `supportsVideo === true` zaobilaze most.
Signal prekida klijentskog zahtjeva prenosi se kroz preuzimanje, red posrednika,
podprocese i pozive za opisivanje; prekidi zaustavljaju obradu između videozapisa i nikad se u slučaju pogreške
ne prebacuju na neobrađeni medij.

Postavke izvođenja pohranjene su u bazi podataka i provjerene pomoću Zoda:

| Ključ                               | Zadano      | Raspon / ponašanje                                                                                           |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`     | Neobavezno tijekom izvođenja, zahtijeva izričito uključivanje                                                |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` zadržava generičke opise; `focused` upotrebljava ograničeni, nepouzdani kontekst najnovijeg korisnika |
| `modalityBridgeVideoModel`          | `""`        | Nasljeđuje model Vision Bridgea                                                                              |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                         |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` ili proporcionalni `segment_aware`; neuspjeh detektora vraća se na `uniform`        |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                          |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                               |

Naslijeđene trajno pohranjene vrijednosti isteka vremena za Video iznad 120 sekundi ograničavaju se na
rok posrednika; novi zapisi postavki iznad tog ograničenja odbijaju se.
`GET /api/modality-bridge/video/runtime` prije autentifikacije ili ispitivanja okruženja izvođenja zahtijeva
pouzdanu, ovjerenu lokalnost povratne petlje, a zatim zahtijeva upravljačku
autentifikaciju. Vraća samo `available`, pročišćene verzije FFmpeg/ffprobe i fiksni
razlog kada okruženje izvođenja nije dostupno. Interna krajnja točka za izdvajanje nije
javni API za prijenos: zasićenje reda vraća `503` uz `Retry-After`, prekid veze
pozivatelja vraća `499`, a fiksni rok posrednika vraća `504`. Pretvoreni odgovori dodaju
`video->text;model=<visionModel>;parts=<videos>` u središnje zaglavlje
`x-omniroute-modality-bridge` bez uklanjanja segmenata Vision ili Audio.

### Masker osobnih podataka (`piiMasker.ts`)

Izvodi se u **obje** faze.

- **`preCall`** klonira sadržaj zahtjeva, prolazi kroz `system`, `messages`, `input` i
  `prompt` (uključujući stavke koje su obični nizovi znakova) te primjenjuje `processPII()` (iz
  `@/shared/utils/inputSanitizer`) na polja `content`/`text` koja sadrže nizove znakova. Kada je
  `PII_REDACTION_ENABLED=true`, otkriveni osobni podaci redigiraju se u odlaznom
  sadržaju zahtjeva. To je neovisno o `INPUT_SANITIZER_MODE` (koji upravlja samo
  pravilima za ubrizgavanje upita). Kada je redigiranje isključeno, poziv bilježi broj
  otkrivenih stavki bez izmjene sadržaja.
- **`postCall`** dubinski klonira odgovor, pokreće `sanitizePIIResponse()` zajedno
  s maskiranjem strukture Responses API-ja (`maskResponsesOutput` — obuhvaća
  `output_text` i `output[].content[].text`). Ako dođe do bilo kakvog redigiranja,
  izmijenjeni odgovor zamjenjuje izvorni.

Zaštitni mehanizam nikada ne blokira; samo dodaje bilješke (`meta.detections`,
`meta.redacted`) ili preinačuje sadržaj.

### Ubrizgavanje upita (`promptInjection.ts`)

Otkriva zlonamjerne strukture u sadržaju koji je dostavio korisnik i primjenjuje
konfigurirana pravila. Ponašanje određuju varijable okruženja i opcije
konstruktora:

| Postavka        | Varijabla okruženja                                                                                   | Zadano | Učinak                                                                                                                                                                                                                                      |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omogućeno       | `INPUT_SANITIZER_ENABLED`                                                                             | `true` | Kada je `false`, zaštitni mehanizam odmah prekida obradu.                                                                                                                                                                                   |
| Način rada      | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn` | Pravila za ubrizgavanje: `block`, `warn` ili `log`. (`redact` je prihvaćen radi kompatibilnosti sa starijim verzijama, ali **ne** uklanja tekst ubrizgavanja; preinačivanjem osobnih podataka u zahtjevu upravlja `PII_REDACTION_ENABLED`.) |
| Prag blokiranja | opcija `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Najniža razina ozbiljnosti potrebna za blokiranje. Srednja razina prema zadanim postavkama služi samo za praćenje.                                                                                                                          |

**Redoslijed prvenstva načina rada** (`getMode`): `options.mode` pozivatelja →
`INJECTION_GUARD_MODE` **nadjačavanje zastavicom značajke iz baze podataka** (Nadzorna ploča → Postavke →
Zastavice značajki) → varijabla okruženja `INJECTION_GUARD_MODE` → varijabla okruženja `INPUT_SANITIZER_MODE` →
`warn`. Stoga nadjačavanje na nadzornoj ploči ima prednost pred varijablama okruženja, pa korisničko sučelje
Zastavice značajki upravlja aktivnim zaštitnim mehanizmom u stvarnom vremenu (bez ponovnog pokretanja). Čitanje baze podataka otporno je na pogreške:
ako dođe do pogreške, zaštitni mehanizam vraća se na ponašanje temeljeno na varijablama okruženja, a kada
nadjačavanje nije postavljeno, ponašanje je identično razrješavanju koje se temelji isključivo na varijablama okruženja.

Izvori otkrivanja:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (zajednički skup detektora
   koji se koristi i drugdje u procesnom lancu).
2. Ugrađeni `DEFAULT_GUARD_PATTERNS` (trenutačno `system_override_inline` i
   `markdown_system_block`, oba s razinom ozbiljnosti `high`).
3. Neobavezni `customPatterns` proslijeđeni putem opcija konstruktora (nizovi znakova, regularni izrazi
   ili zapisi `{ name, pattern, severity }`).

Kada je `mode === "block"` **i** barem jedno otkrivanje dosegne prag
ozbiljnosti, `preCall` vraća `{ block: true, message: "Request rejected:
suspicious content detected" }`. U načinima rada `warn`/`log` zaštitni mehanizam zapisuje događaj, ali
dopušta poziv. Zajednička pomoćna funkcija `evaluatePromptInjection()` također se izvozi
za pozivatelje koji trebaju procijeniti upite bez prolaska kroz registar.

**Ograničenje skeniranja (v3.8.20):** detektor pregledava samo **prvih 16 KB**
spojenog teksta upita — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajta) u
`src/shared/utils/inputSanitizer.ts`. I `detectInjection()` i
`evaluatePromptInjection()` primjenjuju `slice(0, MAX_INJECTION_SCAN_BYTES)` prije pokretanja
petlje za uzorke. Direktive za ubrizgavanje nalaze se blizu početka unosa, pa se time
ograničava potrošnja procesora i GC-a za regularne izraze na sadržajima veličine više stotina KB bez slabljenja otkrivanja (usp.
#3932, #4041).

### Maskiranje vjerodajnica (`credentialMasker.ts`)

Izvodi se u **objema** fazama, posljednje u zadanom lancu (prioritet `95`). Redigira
dobro poznate obrasce API ključeva / tajnih tokena iz odlaznog sadržaja zahtjeva (sadržaja
poruka, argumenata poziva alata, rezultata alata) **i** odgovora pružatelja usluge, tako da se
vjerodajnica zalijepljena u upit (ili vraćena u rezultatu alata) ne otkrije
nadređenom pružatelju usluge ni klijentu.

- **Samo uz izričito uključivanje**, prema istoj konvenciji kao redaktiranje PII-ja (povezano sa strogim pravilom #20):
  onemogućeno je osim ako je `settings.credentialRedactionEnabled === true` **ili**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kada je isključena, zaštitna mjera ne poduzima ništa —
  nikada ne blokira niti prepisuje.
- `redactCredentials()` prolazi kroz cijelo stablo korisnog sadržaja/odgovora (`walkValue()`,
  sigurno od onečišćenja prototipa i sigurno za cikluse zahvaljujući `WeakSet`) te podudaranja zamjenjuje
  rezerviranim mjestom `[REDACTED:<type>]`, klonirajući samo grane koje su se doista
  promijenile.
- `CREDENTIAL_PATTERNS` obuhvaća ključeve pružatelja LLM-a (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokene (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ključeve za plaćanje (Stripe, Square), ključeve za oblak
  (AWS pristupni ključ, Twilio, SendGrid, Mailgun), privatne ključeve / JWT-ove,
  nizove za povezivanje koji sadrže vjerodajnice (`mongodb://user:pass@...` itd.) i
  generički uzorak vrijednosti zaglavlja `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Ključevi u obliku zaglavlja (`authorization`, `x-api-key`, `api-key`,
  `apikey`) redaktiraju se strukturno (samo vrijednost, dok se prefiks sheme poput
  `Bearer `/`Basic ` zadržava), umjesto putem generičkog tekstnog regularnog izraza.
- Zaštitna mjera nikada ne blokira; samo prepisuje (`modifiedPayload` /
  `modifiedResponse`) i dodaje bilješke (`meta.credentialsRedacted`, `meta.count`).

Zaštita od regresije: `tests/unit/credential-masker-guardrail.test.ts`.

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
  modifiedPayload?: TValue; // vraća preCall za prepisivanje zahtjeva
  modifiedResponse?: TValue; // vraća postCall za prepisivanje odgovora
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

Zaštitna ograda signalizira "bez promjene" vraćanjem `void`, `{}`, ili
`{ block: false }`. Vraćanje `modifiedPayload`/`modifiedResponse` zamjenjuje
vrijednost koja prolazi kroz lanac za nizvodne zaštitne ograde.
`signal?: AbortSignal` prenosi životni ciklus pozivatelja u zaštitne ograde. Prekid zahtjeva je namjerna iznimka otvorenog kvara: medijski mostovi zaustavljaju rad i čišćenje bez vraćanja sirovih medija na cilj za koji se zna da ih ne podržava.

## Registar (`registry.ts`)

Singleton `guardrailRegistry` izlaže:

- `register(guardrail)` — dodaje (ili zamjenjuje normaliziranim imenom) zaštitnu ogradu i
  ponovno sortira po uzlaznom `priority`.
- `clear()` / `list()` — administrativni pomoćnici.
- `runPreCallHooks(payload, context)` — iterira aktivne zaštitne ograde, provlači
  payload kroz `modifiedPayload` i zaustavlja se na prvom `block: true`.
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
- Tijelo zahtjeva `disabledGuardrails` (najviša razina)
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

1. `resolveDisabledGuardrails(...)` gradi popis za preskakanje iz API ključa, tijela
   i zaglavlja.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` pokreće zaštitne ograde uzlaznim
   redoslijedom prioriteta:
   - Onemogućene zaštitne ograde bilježe se kao `skipped`.
   - `preCall` svake zaštitne ograde može prepisati teret putem `modifiedPayload`.
   - Prvi `block: true` kratko spaja lanac i rukovatelj vraća
     odgovor o odbijanju zaštitne ograde.
3. (Potencijalno prepisan) teret teče u kombinirano usmjeravanje i uzvodnu
   dispečersku službu.
4. Nakon što je odgovor sastavljen, `guardrailRegistry.runPostCallHooks(...)`
   pokreće isti lanac na odgovoru. `block: true` ovdje odbacuje uzvodni
   odgovor.

Zaštitne ograde koje bacaju iznimku bilježe se s `error: <message>` i bilježe putem
`logger.warn`, ali lanac se nastavlja — dizajnirano je da se otvara u slučaju kvara.

## Konfiguracija

Varijable okoline koje čitaju ugrađene zaštitne ograde:

| Varijabla                             | Koristi se od strane    | Učinak                                                                                                                           |
| :------------------------------------ | :---------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`      | Postavite `false` da biste u potpunosti onemogućili detekciju.                                                                   |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`      | Politika ubrizgavanja: `warn`, `block` ili `log`. Zastarjela vrijednost `redact` ne prepisuje tekst ubrizgavanja.                |
| `INJECTION_GUARD_MODE`                | `prompt-injection`      | Način rada za zaštitu od ubrizgavanja; također zastavica značajke baze podataka koja **nadjačava** varijable okoline (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`      | Minimalna ozbiljnost koju `MODE=block` odbija: `high` (zadano), `medium` ili `low`.                                              |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`      | Zastarjeli alias za `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                           |
| `PII_REDACTION_ENABLED`               | `pii-masker`            | Kada je `true`, PII zahtjeva se redigira (neovisno o načinu ubrizgavanja).                                                       |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nizvodno) | Kontrolira ponašanje maskera na strani odgovora.                                                                                 |

Zaštitne ograde Modality Bridgea čitaju konfiguraciju vremena izvođenja iz pohrane postavki podržane bazom podataka
(`getSettings()`), a ne iz varijabli okoline. Primarni ključevi za Vision su
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` i
`modalityBridgeCacheMaxEntries`. Zastarjeli
`visionBridge*` ključevi prihvaćaju se samo kao dokumentirani jednociklični
povratni mehanizam čitanja; pisanja na nadzornoj ploči koriste primarne ključeve. Zadane vrijednosti i povratni
mehanizam rješavanja nalaze se u `src/shared/constants/modalityBridgeDefaults.ts`, s
zastarjelim konstantama zadržanim u `src/shared/constants/visionBridgeDefaults.ts`.

Audio koristi `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` i `modalityBridgeAudioMaxClips`, plus zajedničke
`modalityBridgeCache*` postavke. Audio nema povratni mehanizam za zastarjele ključeve jer su ti
ključevi uvedeni sa shemom Modality Bridgea.

Video koristi `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` i
`modalityBridgeVideoTimeout`, plus zajedničke `modalityBridgeCache*` postavke.
Onemogućen je prema zadanim postavkama jer su FFmpeg/ffprobe opcionalne operativne
ovisnosti, a titlovanje okvira dodaje kašnjenje i troškove modela.

## Prilagođene zaštitne ograde

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "Dnevni budžet prekoračen" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Koraci:

1. Stvorite `src/lib/guardrails/myGuardrail.ts` proširujući `BaseGuardrail`.
2. Implementirajte `preCall` i/ili `postCall`.
3. Registrirajte se prilikom uvoza (push iz `registerDefaultGuardrails`) ili
   pozovite `guardrailRegistry.register(...)` tijekom izvođenja — registar zamjenjuje
   bilo koju prethodnu zaštitnu ogradu s istim normaliziranim imenom.
4. Dodajte testove pod `tests/unit/` (postojeći primjeri:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testiranje

Koristite `resetGuardrailsForTests()` između testova za početak iz poznatog stanja.
Proslijedite `{ registerDefaults: false }` za početak s praznim registrom i
registrirajte samo zaštitne ograde koje se testiraju. Vision Bridge prihvaća ubrizgavanje ovisnosti
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge izlaže ekvivalentne šavove za postavke, mogućnosti, odabir STT modela, provjere vjerodajnica i transkripciju. Testovi stoga mogu vježbati oba toka bez pristupa bazi podataka ili mreži.

## Vidi također

- `src/lib/guardrails/` — implementacija
- `src/shared/utils/inputSanitizer.ts` — zajednički detektor koji pokreće
  ubrizgavanje upita i maskiranje PII
- `src/shared/constants/visionBridgeDefaults.ts` — zadane postavke Vision Bridgea i
  popis modela prisilnog premošćivanja
- `src/shared/constants/modalityBridgeDefaults.ts` — zajedničke zadane postavke Vision/Audio runtimea
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalni sloj (prekidač, hlađenja)
- `docs/reference/ENVIRONMENT.md` — potpuna referenca varijabli okoline

## Pokrivenost rute zaštite od ubrizgavanja i crveni tim (Faza 8 · Blok D)

Zaštita od ubrizgavanja (`createInjectionGuard` / `withInjectionGuard`) pokriva sve rute
koje prihvaćaju korisničke upite. Poštuje `INJECTION_GUARD_MODE` (zadano `warn` = samo zapisivanje;
`block` = vraća HTTP 400 `SECURITY_001`).

| Vrsta             | Rute                                                                                                                                                 | Zadani način rada |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Tekst (postojeći) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn              |
| Generativni       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn              |
| Podaci            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn              |

Ekstrakcija teksta (`extractMessageContents`) pokriva `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Crveni tim (noćni, `nightly-llm-security.yml`):** promptfoo provjerava da svaka ruta blokira
OWASP-LLM korpus u `INJECTION_GUARD_MODE=block`; garak pokreće sonde (preskače bez tajne).
`moderations` je uključen radi dosljednosti — operatori u blok-načinu mogu ga izuzeti putem
`resolveDisabledGuardrails`.

Noćni tijek rada (`.github/workflows/nightly-llm-security.yml`, cron + ručno
pokretanje) ima dva posla:

- **`promptfoo-guard` (blokiranje)** — pokreće `promptfoo eval -c promptfooconfig.yaml`
  s `INJECTION_GUARD_MODE=block`. Svaki adversarijalni slučaj (npr. "zanemari sve
  prethodne upute…", jailbreakovi u DAN stilu) potvrđuje da odgovor nosi
  `error.code === "SECURITY_001"`, tj. da je zaštita stvarno odbila zahtjev.
- **`garak` (savjetodavno)** — pokreće garak `--probes promptinject,dan,leakreplay`
  protiv lokalne OmniRoute instance (`http://localhost:20128/v1`). Ograničeno tajnom
  davatelja (`PROMPTFOO_PROVIDER_KEY`); graciozno preskače i ima sufiks
  `|| true`, tako da izvještava bez neuspjeha CI-ja.

Pokrivenost pomoćne funkcije zaštite (`createInjectionGuard` / `withInjectionGuard`)
obuhvaća svaku `/v1` rutu koja nosi upit; tekst upita se izvlači iz
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomoću
`extractMessageContents()` u `src/shared/utils/inputSanitizer.ts`.
