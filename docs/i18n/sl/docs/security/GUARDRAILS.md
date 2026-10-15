# Guardrails (Slovenščina)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Vir resnice:** `src/lib/guardrails/`
> **Nazadnje posodobljeno:** 2026-08-29 — v3.8.51 (izvor prepisa Video Bridge določi klicatelj,
> strežnik pa ga še ne preverja — pojasnjeno skladno z #11661)

Varovala uveljavljajo varnost, pravilnike in preoblikovanje vsebine na meji
med OmniRoute in ponudniki v zaledju. Vsako varovalo lahko pregleda (in
po želji zavrne, preoblikuje ali opremi z opombami) koristne vsebine zahtev (`preCall`) ter
odzive iz zaledja (`postCall`).

Sistem je zasnovan tako, da ob napaki **dovoli nadaljevanje**: če varovalo med izvajanjem sproži izjemo, register
zabeleži napako in nadaljuje z naslednjim varovalom, namesto da bi
zahteva spodletela. Blokiranje je izrecna odločitev (`block: true`), nikoli naključje.

## Vgrajene varovalke

Register ob uvozu samodejno naloži šest varovalk po prednostnem vrstnem redu
(glejte `registry.ts` → `registerDefaultGuardrails()`):

| Prednost | Ime                 | Faza(-e)       | Datoteka              |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nižje številke prednosti se izvedejo **prej**.

### Slikovni most (`visionBridge.ts`) — Most modalnosti PR-1

Prestrezanje zahtev, ki vsebujejo slike in so namenjene **modelom brez podpore za vid**, ter
preusmerjanje celotne zahteve na model s podporo za vid ali zamenjava slikovnih
delov z besedilnimi opisi, ki jih pred klicem nadrejene storitve ustvari nastavljiv
model s podporo za vid. To ponudnikom, ki podpirajo samo besedilo, omogoča pregledno
obdelavo večmodalnih koristnih vsebin.

Potek:

1. Preskoči, če ciljni model že podpira vid (razen če je naveden na
   seznamu vsiljenih mostov `isVisionBridgeForcedModel`).
2. Izlušči slikovne dele prek `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), ki delo prenese na **enotni detektor
   predstavnostnih vsebin** `detectMediaParts()` v `open-sse/utils/mediaParts.ts` — edini
   vir resnice, ki se uporablja tudi skupaj s kombiniranim filtrom združljivosti.
   Izluščanje je omejeno s seznamom dovoljenih oblik delov na najvišji ravni,
   ki jih lahko `replaceImageParts` vstavi nazaj (pogodba izlušči↔zamenjaj): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` in Responses API `input_image`. Ugnezdeni zadetki in
   oblike, ki vsebujejo samo indikatorje, so gradivo za kombinirani filter in se nikoli ne izluščijo.
   Preskoči, če ni najden noben.
3. Razreši izvajalno konfiguracijo prek `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): novi ključi nastavitev `modalityBridge*`
   imajo prednost; podedovani ključi `visionBridge*` ostanejo kot **nadomestna možnost za en
   cikel** (okno za povrnitev). Pred vsakim pregledovanjem predstavnostnih vsebin preskoči, če je
   most onemogočen.
4. Izbirnik načina (`modalityBridgeVisionMode`, glejte spodnjo tabelo) določi
   preusmerjanje ali opisovanje. Preusmerjanje vrne `modifiedPayload`, kjer je zamenjan samo `model`,
   skupaj z metapodatki `{ rerouted, fromModel, toModel, imagesKept }`.
5. Pot opisovanja: omeji slike na `maxImages`, sestavi poziv, prilagojen opravilu,
   preveri predpomnilnik opisov, pokliče model s podporo za vid **vzporedno**
   (`Promise.allSettled`) in namesto slik vstavi besedilne dele
   `[Image N]: <description>`. Neuspešno opisovanje vrne `null`, izvirni slikovni del pa se
   **ohrani** (#4012) — razen na kombinirani poti opisovanja, ko so spodleteli vsi
   opisi; v tem primeru potrjena nadrejena storitev brez podpore za vid namesto tega prejme
   nadomestek `(unavailable — no vision-capable provider connected)` (#8430).
6. Vrne `modifiedPayload` in metapodatke (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Izbirnik načina (`modalityBridgeVisionMode`)

| Način      | Privzeto | Vedenje                                                                                                                                                                                                                                                                                                                    |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Podedovana hevristika, nespremenjena (#6640/#7204): modeli, ki niso kombinirani oziroma so `auto/`, se preusmerijo na najboljši model s podporo za vid, razen če ima izvirni model že uporabne poverilnice (takrat se uporabi opisovanje); kombinirani cilji vedno uporabijo opisovanje.                                   |
| `describe` |          | Vedno opiše — blok za preusmerjanje se v celoti preskoči; vedno odgovori model, ki ga je izbral uporabnik.                                                                                                                                                                                                                 |
| `reroute`  |          | Vsili preusmerjanje: varovalo za ohranitev modela s poverilnicami se zaobide. Varovalo poverilnic za **cilj** preusmerjanja še vedno velja — kadar ni uporabnega ciljnega modela s podporo za vid, zahteva nadaljuje na opisovanje, tako da neobdelane slike nikoli ne dosežejo zaledja, ki podpira samo besedilo (#8430). |

Vsiljeni načini prekinejo izvajanje **pred** zagonom samodejne hevristike; vedenje načina `auto`
je na ravni bajtov enako varovalki pred PR-1.

#### Obseg ključa API (`visionBridgeKeyScope.ts`)

Ko klicateljev ključ API omejuje `allowedConnections`, skupine kvot
(`allowedQuotas`) ali modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most za preusmerjanje
in opisovanje izbere samo modele, ki jih ključ sme uporabljati, na povezavah, ki jih ključ sme
uporabljati. Klic za opisovanje nato vedno poteka prek samozanke OmniRoute z
glavo `x-omniroute-self-loop-key-id`, tako da prejemna zahteva za klepet
znova uveljavi pravilnik tega ključa za povezave in modele. `enforceApiKeyPolicy()`
to glavo upošteva samo skupaj z nosilcem samozanke, zato lahko dostop
le zoži, identifikator, ki ga ni mogoče razrešiti, pa je zavrnjen.

Če za ključ ni dovoljen noben model s podporo za vid, se pot opisovanja umakne in
zahteva se nespremenjena posreduje naprej, kar je enako vedenje z dovoljevanjem ob napaki kot pri onemogočeni
varovalki (metapodatki `{ skipped: true, reason: "no_permitted_vision_model" }`).
Zahteve brez ključa in ključi brez teh omejitev se vedejo povsem enako kot
prej.

#### Poziv za opisovanje, prilagojen opravilu (`modalityBridgeVisionTaskAware`)

Privzeto **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) osnovnemu pozivu za opis doda besedilo **zadnjega uporabnikovega sporočila** (skrajšano na 500 znakov), s čimer opis usmeri k temu, kar je uporabnik dejansko zahteval (vzorec codex-vision-proxy), in od modela za vid zahteva prepis vidnega besedila. Če je zastavica izklopljena — ali če ni uporabniškega besedila — se osnovni poziv uporabi nespremenjen.

Lastna zahteva zanke describe, združljiva z OpenAI (`callVisionModelSingle()`
v `visionBridgeHelpers.ts`), vedno zahteva `image_url.detail: "high"` —
brezpogojno, za vsakega klicatelja/ponudnika in neodvisno od kakršnega koli signala odjemalca.
Vzorčenje z nizko ravnjo podrobnosti poslabša natančnost OCR prav pri nalogi
prepisa besedila, ki jo zahteva ta poziv, zato sam klic describe vedno zahteva
visoko raven podrobnosti ne glede na raven podrobnosti, uporabljeno v prvotni
dohodni zahtevi. To vpliva samo na telo notranje zahteve describe; ne spreminja
načina, kako OmniRoute posreduje klicateljev lastni `image_url.detail` v primarni
zahtevi — ta privzeta vrednost se uporabi ločeno in samo za zaznane odjemalce
OpenCode v `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Veja žičnega formata Anthropic zanke describe nima polja `detail` in nanjo
nobena od teh privzetih vrednosti ne vpliva.

#### Omejitev izhoda describe (`modalityBridgeVisionMaxChars`)

| Ključ                          | Privzeto | Razpon            |
| ------------------------------ | -------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` ali 100–50000 |

`0` (privzeto) pomeni **brez omejitve** — opis, ki ga vrne
`callVisionModel()`, se posreduje nespremenjen, s čimer se ohrani obstoječe
vedenje. Vsaka vrednost v razponu 100–50000 skrajša opis in mu doda pripono
`…`, preden je vstavljen nazaj kot `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` v `src/lib/guardrails/visionBridge.ts`).
To vrednost povečajte za opravila OCR z veliko podrobnostmi, pri katerih
nadaljnji model potrebuje celoten prepis; zmanjšajte jo, da omejite porabo
žetonov pri zgovornih modelih za vid. Polje na nadzorni plošči je v razdelku
Advanced zavihka Vision (`modality-bridge-max-chars` v
`ModalityBridgeVisionTab.tsx`) in vsako vrednost med 1 in 99 omeji navzgor na
najmanjšo vrednost 100, medtem ko izrecno vrednost `0` pusti nespremenjeno —
`0` je samostojna veljavna vrednost Zod
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`) in ne zgolj
privzeta vrednost »ni nastavljeno«.

#### Predpomnilnik describe (`modalityBridge/bridgeCache.ts`)

Procesno globalen predpomnilnik LRU + TTL v pomnilniku za izhode describe.
Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` z
okvirjanjem s predpono dolžine (brez kolizij na mejah polj). Komponenta modela
je **konfigurirani** premostitveni model in ne model, ki je dejansko odgovoril —
`callVisionModel` lahko interno uporabi nadomestni model, določanje ključa za
vsak poskus posebej pa bi razdrobilo predpomnilnik. Neuspešni opisi se nikoli
ne predpomnijo. Nastavitve:

| Ključ                           | Privzeto | Razpon  |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Normalizacija oddaljenih slik (zanka describe/pridobivanje base64)

Ko most sam pridobi **oddaljeno** sliko — pri samoklicu describe Anthropic in
pretvorbi žičnega formata Claude v base64
(`ensureBase64ImagesForClaudeWire`), oboje prek
`fetchRemoteImageAsDataUri()` v `visionBridgeHelpers.ts` — se nastali podatkovni
URI pred vdelavo v zahtevo modela za vid obdela z `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`). Prevelike slike se pomanjšajo tako, da
ima **daljša stranica 2048 px** (kar ustreza omejitvi spreminjanja velikosti,
ki jo OpenAI/Anthropic že uporabljata na strežniški strani), s čimer se zmanjšata
količina prenesenih bajtov in zakasnitev, ne da bi se spremenilo to, kar vidi
model za vid. Spreminjanje velikosti uporablja `sharp`, naložen z dinamičnim
uvozom: na platformi, kjer se njegova izvorna binarna datoteka ne uspe naložiti,
`normalizeDataUri()` **nikoli ne sproži izjeme** — uporabi nespremenjeno
posredovanje izvirnih bajtov, zato pot describe/pretvorbe v base64 vedno še
naprej deluje. Tudi bajti, ki niso slika (pridobitev, ki ni vrnila slike, ki bi
jo bilo mogoče dekodirati), se posredujejo nespremenjeni. Ta normalizacija je
omejena na slike, ki jih most pridobi za svoj lastni samoklic — nikoli se ne
uporabi za klicateljevo neobdelano neposredno posredovano koristno vsebino, kar
je skladno z načelom spreminjanja samo ob izrecni vključitvi (strogo pravilo
št. 20).

#### Shema nastavitev + selitev

Novi ključi `modalityBridge*` se preverjajo z Zod v `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trojica `modalityBridgeCache*` in skupina
`modalityBridgeAudio*`, ki jo uporablja Audio Bridge. Selitev
`141_modality_bridge_settings.sql` kopira obstoječe podedovane vrednosti
`visionBridge*` v ustrezne nove ključe (idempotentno in brez prepisovanja
vrednosti `modalityBridge*`, ki jih je nastavil upravljavec); podedovani ključi
ostanejo sprejeti kot rezervna možnost pri branju še en cikel izdaje.

#### Glava za preglednost + statistika

Odzivi, preoblikovani z describe, vsebujejo
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(sestavi jo `buildModalityBridgeHeader()` v `modalityBridge/bridgeStats.ts`,
doda pa jo `withModalityBridgeHeader()` v `src/sse/handlers/chatHelpers.ts`).
Preusmerjene zahteve **nimajo** glave — koristna vsebina je ostala
nespremenjena, zamenjava modela pa je že vidna v polju `model` telesa odziva.

`GET /api/modality-bridge/stats` (upravljavsko preverjanje pristnosti, ista raven kot
`GET /api/settings`) vrne števce v pomnilniku za posamezno modalnost
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` za `vision`, `audio` in
`video`. `averageLatencyMs` kot imenovalec uporablja `latencySamples`, ne vseh
poskusov; operacija brez merjenja časa ne ustvari izmišljenega vzorca z nič
milisekundami. `bridged` ostaja vzvratno združljiv vzdevek za uspešne
pretvorbe; neuspešni poskusi ga ne povečajo.
Števci se načrtno ponastavijo ob ponovnem zagonu procesa
(telemetrija, ne računovodstvo).

#### Konfiguracija nadzorne plošče

Namenska stran nadzorne plošče je
`/dashboard/settings/modality-bridge`. Njeni zavihki `Vision`, `Audio` in
`Video`, ki jih je mogoče nasloviti prek URL-ja, pri preklapljanju vrednosti `tab`
ohranijo parametre poizvedbe.
Zavihek Vision omogoča vklop, izbiro načina in modela (vključno s samodejno
privzeto izbiro), pozivanje glede na opravilo, napredne omejitve časovne omejitve,
slike, dolžine opisa in predpomnilnika, izvajalne
števce ter zaščiten vzorčni zahtevek. Tudi zavihek Audio je dejaven: omogoča
vklop, izbirnik modela samo za STT z možnostjo Auto, omejitve časovne omejitve
in največje dolžine posnetka, zvočne števce ter vzorčni preizkus `input_audio`.
Zavihek Video je funkcionalen: poroča o stanju izvajalnega okolja FFmpeg/ffprobe
— enem od štirih izrecnih stanj uporabniškega vmesnika (`unknown`, medtem ko
preverjanje poteka ali ga ni bilo mogoče dokončati, `restricted` pri gostitelju
nadzorne plošče, ki ni povratnozančni, kjer se preverjanje preskoči na strani
odjemalca, `unavailable`, ko je preverjanje zaključeno in je odsotnost potrjena,
ali `available` z različicama FFmpeg/ffprobe) — trajno shrani omejitve za
vklop/model/sličice/video/časovno omejitev, filtrira izbirnik modelov tako, da
prikazuje modele z zmožnostjo vida, in omogoča videoposnetkovne števce.

Nekdanja kartica Vision Bridge v nastavitvah umetne inteligence je povezava za
združljivost do nove strani; ne vsebuje več druge kopije obrazca. Media Providers
prav tako povezuje poteka dela Image-to-Text in Speech-to-Text z ustreznima
zavihkoma Modality Bridge, ne da bi odstranil obstoječe preizkusno okolje
Speech-to-Text.

**Obhod preverjanja dovoljenja za samopovratno zanko:** ko je klic za opis
usmerjen skozi OmniRouteovo lastno samopovratno zanko `/v1` (nestandardni model
ponudnika), podzahtevek pošlje `x-omniroute-admission-bypass: internal` in se
overi z razrešenim poverilom za samopovratno zanko — lokalnim označevalcem
`sk_omniroute` v lokalnem načinu ali okoljskim ključem, ki ga nastavi upravljavec,
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), tako da lahko uvedbe z
`REQUIRE_API_KEY=true` še vedno izvedejo klic za opis. Obhod se upošteva samo
za ta natančna poverila, zato zunanji odjemalci z glavo ne morejo preskočiti
preverjanja dovoljenja.

Podedovane privzete vrednosti so v `src/shared/constants/visionBridgeDefaults.ts`;
nove privzete vrednosti za način, upoštevanje opravila in predpomnilnik ter
razreševalnik nastavitev so v
`src/shared/constants/modalityBridgeDefaults.ts`. Varnostni mehanizem omogoča
možnost konstruktorja `deps`, da lahko preizkusi vstavijo lažne implementacije
`getSettings` in `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Prestrega zahteve za klepet, ki vsebujejo zvok, preden dosežejo cilj, za katerega
ni znano, da sprejema zvočni vhod. Zahteve za klepet nikoli ne preusmeri:
zvočni deli se prepišejo prek obstoječe večdelne končne točke, združljive z
OpenAI, izbrani model za klepet pa nadaljuje z besedilnimi prepisi.

Potek:

1. Razreši `supportsAudio` prek `getResolvedModelCapabilities()`. Prednost imajo
   izrecni metapodatki registra ponudnikov, nato statični metapodatki modela in
   nazadnje sinhronizirani `modalities_input`. Naveden seznam vhodov brez
   `audio` pomeni `false`; če ni nobenega dokaza o zmožnosti, ostane vrednost
   `null`. Tako `false` kot `null` aktivirata konservativni most, `true` pa ga
   zaobide.
2. Razreši nastavitve `modalityBridgeAudio*` in prek skupnega detektorja
   `detectMediaParts()` iz vsakega sporočila izlušči vrhnje zvočne dele, ki jih
   je mogoče izrezati. Podprte žične oblike so OpenAI `input_audio`, `audio_url`
   in `source.media_type: "audio/*"`. Ugnezdeni zvok se zazna za usmerjanje,
   vendar ga pot izrezovanja ne odstrani. Količina dela je omejena z
   `modalityBridgeAudioMaxClips`; poznejši deli ostanejo nespremenjeni.
3. Upošteva konfigurirani `provider/model` ali pa prepusti
   `selectAudioBridgeModel()`, da preišče `AUDIO_TRANSCRIPTION_PROVIDERS` v
   stabilnem kataloškem vrstnem redu in izbere prvi model z uporabnim aktivnim
   poverilom ponudnika.
4. `callAudioTranscription()` pretvori zvok base64/data-URI v večdelno datoteko
   `file` ali prenese oddaljeni `audio_url` prek zaščite za javne izhodne
   povezave s pripenjanjem DNS in omejitvijo 25 MB. Nato prek POST pošlje datoteko
   in izbrani model v lokalno samopovratno zanko `/v1/audio/transcriptions`,
   overjeno z `resolveSelfLoopBearer()`. Obstoječa pot za prepisovanje izvede
   običajno iskanje poveril, obravnavo obdobja ohlajanja/omejitve hitrosti ter
   posredovanje ponudniku.
5. Uspešni klici zamenjajo svoje dele z `[Audio N]: <transcript>`. Klici se
   izvajajo s `Promise.allSettled`: posamezna napaka ohrani izvirni zvočni del
   (pogodba #4012). Če so vsi klici neuspešni in je dokazano, da ima cilj
   `supportsAudio === false`, se deli spremenijo v
   `[Audio N]: (unavailable — no STT provider connected)` (pogodba #8430). Pri
   neznanem cilju (`null`) ostane rezultat, pri katerem so vsi klici neuspešni,
   nespremenjen. Dokazano samo besedilni cilj brez uporabnega poverila STT prejme
   isto izrecno nadomestno besedilo brez izvedbe omrežnega klica.

Uspešni prepisi uporabljajo procesno skupni predpomnilnik LRU/TTL Modality
Bridge. Ključ združuje sklic na zvok, stabilno oznako operacije
`audio-transcription` in izbrani model STT; napake se nikoli ne predpomnijo.
Zvočni poskusi posodobijo skupne števce `bridged`, `cacheHits`, `failures` in
`lastUsedAt`. Preoblikovani odgovori vsebujejo
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`;
nespremenjene zahteve ne prejmejo segmenta Audio Bridge.

Izvajalne nastavitve so shranjene v podatkovni zbirki in preverjene z Zod:

| Ključ                         | Privzeto | Razpon               |
| ----------------------------- | -------- | -------------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                    |
| `modalityBridgeAudioModel`    | `""`     | Samodejno ali ID STT |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000          |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10                 |

Skupni predpomnilnik še naprej upravljajo `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` in `modalityBridgeCacheMaxEntries`.

### Videomost (`videoBridge.ts`, `videoBridgePipeline.ts`)

Prestreže video dele na najvišji ravni v `messages` API-ja Chat Completions in
`input` API-ja Responses, preden je poklican ciljni sistem brez znane izvorne
podpore za video. Podprte oblike so `input_video`, `video_url`, `video_source`,
URL-ji HTTPS in podatkovni URI-ji `data:video/*;base64,...`. Navadna imena
datotek v besedilu se ne obravnavajo kot video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) upravlja prečkanje zahteve,
preverjanje zmogljivosti/pravilnika, združevanje na ravni zahteve in vsebino
odgovora. Obdelava posameznega videa — pridobivanje, predpomnilnik celotnega
rezultata, opisovanje zaporedja sličic (ki združi tudi zvočni prepis, ki ga
navede klicatelj) ter metrike/prekinitev/čiščenje za posamezen poskus — je skrita
za `processVideoPart` v `videoBridgePipeline.ts`, ki je poklican enkrat za vsak
video del znotraj zanke metode `preCall`. Ta modul določa tudi izrecne meje
vrat `VideoMediaBrokerPort` (pridobivanje bajtov in izločanje vzorčenih sličic),
`VideoAudioTranscriptionPort` (združevanje zvočnega prepisa, ki ga navede
klicatelj, z vzorčenimi opisi) in `VideoDrilldownPort` (meja trajnega shranjevanja
za podrobni pregled sličic; še ni povezana s `processVideoPart` — trenutno vnose
podrobnega pregleda zapisuje samo ločena pot
`/api/modality-bridge/video/drilldown`).

Javna pot zahtev `/v1` nikoli ne uvozi ali zažene podprocesa. Oddaljeni videi
se prenesejo z omejitvijo 50 MiB; videi base64 v vrstici imajo konservativno
omejitev 36 MiB dekodiranih podatkov na video, tako da lahko ovojnica
modela/sporočil/uokvirjanja ostane znotraj javne omejitve 50 MiB za sprejem
zahtev JSON. Dolžina vsebine v vrstici in ocene dekodirane velikosti se
preverijo pred dodelitvijo pomnilnika. HTTPS je zahtevan za začetni oddaljeni
URL in vsako preusmeritev, pri čemer se uporablja obstoječa zaščita za izhodne
povezave samo do javnih naslovov s pripenjanjem DNS. Bajti nato prečkajo natančno
notranjo posredniško mejo `POST /api/modality-bridge/video/extract`. Ta pot je
hkrati `LOCAL_ONLY` in `SPAWN_CAPABLE`, sprejema samo overjeno zahtevo zaupanja
vredne povratne zanke znotraj procesa ter nikoli ne sprejme URL-ja, poti
datotečnega sistema, izvedljive datoteke ali seznama argumentov. Cevovod za
velikost telesa API-ja in inkrementalni bralnik telesa v obdelovalniku neodvisno
uveljavljata omejitev 50 MiB za vhod posrednika. Njegova omejena čakalna vrsta
izvaja po eno izločanje naenkrat, dovoljuje štiri čakajoča opravila in omejuje
čakajoči vhod na 100 MiB.

Znotraj posrednika `ffprobe` bere zasebno lokalno datoteko; nespremenljivi
dovoljeni seznam formatov izključuje formate seznamov predvajanja in manifestov.
Pri dovoljenih vsebnikih družine MOV so zunanje reference na podatke MOV
privzeto še naprej onemogočene, nespremenljivi ukaz pa jih ne omogoči. Tako
`ffprobe` kot `ffmpeg` uporabljata dovoljeni seznam protokolov, omejen samo na
`file`, eno nit, nespremenljiva polja argumentov, nobene lupine in izvedljive
datoteke, razrešene iz `PATH`. Naslovni tokovi s priloženo sliko niso kandidati
za predvajanje. Vsi tokovi, ki jih je mogoče predvajati, morajo izpolnjevati
omejitve, pri čemer ima izrecni privzeti tok prednost pred deterministično
rezervno izbiro toka z najnižjim indeksom. Videi so omejeni na 600 sekund,
8.192 slikovnih pik na dimenzijo in 33.554.432 izvornih slikovnih pik. FFmpeg
vzorči 1–16 sredinskih sličic JPEG, zmanjša daljši rob na največ 1.024 slikovnih
pik brez povečanja manjših vhodov in nikoli ne prejme URL-ja. Privzeto vzorčenje
je `uniform`. Izbirna pravilnika `scene_aware` in poskusni `segment_aware`
izvedeta en dodaten nespremenljiv prehod FFmpeg čez že preverjeni lokalni tok,
izbereta omejene časovne žige prizorov `showinfo` in se ob napaki detektorja,
časovni omejitvi, napačno oblikovanem izhodu ali praznem naboru kandidatov
deterministično vrneta na iste enakomerno razporejene sredinske točke. Način,
ki upošteva segmente, sredinske vzorce dodeli sorazmerno s preverjenimi
intervali prizorov; dokazi za način, ki upošteva segmente, in rezervno vedenje
so podrobneje opisani spodaj. Stroga omejitev 16 sličic se pri vsakem pravilniku
uporabi po izbiri. Kadar ima zahteva, ki upošteva prizore, proračun samo ene
sličice, uporabi enakomerno sredinsko točko aktivnega celotnega videa ali okna
fokusa in sporoči `policyEffective: uniform`: ena sama izbrana sličica prizora
ne more ohraniti obeh časovnih koncev. Klicatelj lahko po želji navede končno
okno fokusa (`start`/`end` v sekundah); meje se omejijo na trajanje medija,
obrnjena ali nekončna okna so zavrnjena, vsi pravilniki vzorčenja pa se izvajajo
samo znotraj normaliziranega intervala. Nastalo okno je vključeno v metapodatke
vzorčenja in v predpono opisa, ki ni vredna zaupanja, tako da lahko nadaljnji
modeli razlikujejo osredotočeni odlomek od celotne časovnice.

Semantični fokus opisovanja je ločena, izrecna nastavitev. Privzeti način analize
`full` ohrani obstoječi poziv za sličice in besedila zahteve nikoli ne posreduje
modelu za opisovanje. V načinu `focused` most prebere samo najnovejši neprazen
`text`/`input_text`, ki ga je ustvaril uporabnik, iz istega vsebnika Chat ali
Responses, ga normalizira v NFC, strne kontrolne znake in presledke ter ga omeji
na 500 kodnih točk Unicode. Prazen rezultat se vrne na natančen poziv `full`.
Uporaben namig se serializira kot JSON v namenskem bloku uporabniškega konteksta,
ki ni vreden zaupanja, in lahko samo prednostno razvršča opazne podrobnosti; ne
more preglasiti ločenega opozorila, naj se ne sledi navodilom, ki so vidna ali
slišna v mediju. Besedilni fokus nikoli ne sklepa vrednosti `start`/`end` in ne
spreminja časovnega vzorčevalnika.

#### Strukturni dokazi segmentov FU-07

`segment_aware` uporablja en omejen prehod predhodne analize nad že preverjenim
lokalnim videotokom. Fiksna veriga filtrov najprej zmanjša širino na največ 320
slikovnih pik, zazna menjave prizorov in zamrznjene intervale, nato pa vzorči s
hitrostjo 1 sličice na sekundo za določanje zamegljenosti, povprečne svetilnosti
ter prostorskih/časovnih informacij. Prehod je omejen na 600 strukturnih vzorcev,
eno nit FFmpeg/filtra, isti protokol, omejen samo na `file`, in sezname dovoljenih
vsebnikov, 1 MiB izhodnih podatkov procesa ter največ 30 sekund znotraj skupne
prekinitve/roka posrednika. Iz zahteve nikoli ne sprejme ukaza, filtra, poti ali
URL-ja.

Strukturne vrednosti so deterministični dokazi vzorčenja in ne semantično
razumevanje videa. Iz njih se ne sklepajo motivi, dejanja, podnapisi, govor ali
namen uporabnika. Meje prizorov in zamrznitev tvorijo segmente; pokritost z
zamrznitvijo, zamegljenost, osvetlitev, prostorske podrobnosti in časovne
spremembe vplivajo samo na razporeditev obstoječega proračuna 1–16 sličic.
Popolnoma zamrznjen segment je omejen na eno sličico, nezamrznjeni segmenti pa
tekmujejo za preostali proračun. Ko je meja več kot sličic, se ohrani enakomerna
pokritost časovnice, tako da hitri rezi na začetku ne morejo skriti dolgega
končnega segmenta. Meje prizorov, ki so znotraj 1-sekundne ločljivosti analize
glede na mejo zamrznitve, se združijo.

Manjkajoči filtri, nepravilno oblikovani/prazni dokazi, napaka detektorja ali
časovna omejitev omejene predhodne analize ob napaki sprožijo natančno enako
pravilnik enakomernih sredinskih točk. Prekinitev klicatelja ali rok posrednika
ne sprožita takšnega nadaljevanja: končata izvajajoči se podproces, preprečita
poznejše pridobivanje sličic, zasebno začasno drevo pa se odstrani v `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` ustvari deterministične resnične
preskusne primere FFmpeg za prihranke pri klicih za podnaslavljanje po
odstranjevanju dvojnikov, razporejanje proračuna pri gostem gibanju, dokaze o
zamegljenosti/osvetlitvi/SI-TI, hitre reze z dolgim zaključkom in lažno pozitivne
rezultate pri postopnem prelivu. Beleži čas predhodne analize po stenski uri ter,
kjer je na voljo `/usr/bin/time`, čas procesorja podrejenega procesa in največji
RSS. Njegova preverjanja kakovosti so samo strukturni oraklji. Kakovost
resničnega modela za podnaslavljanje ostaja `HOLD`, ker to preskusno ogrodje nima
pooblaščene končne točke ali zamrznjenega ocenjevalnika. Tudi denarni prihranki
ostajajo `HOLD`, razen če `--caption-cost-per-call-usd` poda izrecno pozitivno
oceno stroška na klic; skript nikoli ne izmisli nobenega od teh rezultatov.

Vsaka sličica je omejena na 4 MiB, vse neobdelane sličice skupaj na 23 MiB,
serializirani odgovor posrednika pa na 32 MiB. Zasebni začasni imenik se odstrani
v `finally`. OmniRoute ne vključuje FFmpeg in ne sprejema poti do izvedljive
datoteke po meri. Pred podnaslavljanjem most izvede konservativen postopek
vizualnega odstranjevanja dvojnikov: vsaka slika JPEG se zmanjša na sivinski
medpomnilnik velikosti 16×16 in primerja samo z zadnjo ohranjeno sličico. Če je
zahtevani proračun za podnaslavljanje večji od ene sličice, pridobivanje zagotovi
omejeno množico kandidatov, veliko največ dvakrat toliko kot proračun in nikoli
več kot 16 sličic. Zahtevana omejitev se uporabi šele po odstranitvi dvojnikov,
pri končnem redčenju pa se ohranita prvi in zadnji izbrani kandidat, kadar
proračun znaša vsaj dve sličici. Različicami opredeljeni pravilnik
`grayscale-16x16-mean-cells-v2` uporabi večjo vrednost izmed povprečne razlike
svetilnosti in deleža celic sličice, katerih normalizirana razlika znaša vsaj
0.05. Prag za dvojnike je konstanta 0.04, izbrana zaradi predvidljivosti in ne
izpostavljena kot nastavitev med izvajanjem. Ta sekundarni visokokontrastni
signal ohrani majhne premike in spremembe vidnega besedila, ki jih lahko
primerjava samo na podlagi povprečja skrije. Napake primerjalnika ali
dekodirnika ob napaki ohranijo pokritost. Izhodni metapodatki ločujejo
pridobljene kandidate, uspešno uporabljene sličice in zavržene vizualne
dvojnike.

Izrecno označen del videa lahko zahteva kontaktno polo s časovnimi oznakami.
Most sestavi mrežo JPEG z največ 4 stolpci in 16 sličicami. Vsaka celica s 512
slikovnimi pikami vtisne časovno oznako svojega vira v visokokontrastni spodnji
pas, iste časovne oznake pa ostanejo tudi v besedilnih metapodatkih za nadaljnje
povezovanje in revizijo. Celotna slika JPEG ostane omejena na 32 MiB. Če `sharp`
ne more dekodirati ali sestaviti mreže, most uporabi posamezne sličice JPEG;
prekinitev odjemalca se še vedno razširi skozi postopek kontaktne pole.

Dokazi za uvrstitev v produkcijo so namenoma ločeni od sintetičnega
mikroprimerjalnega preizkusa sestavljanja.
`scripts/perf/video-bridge-contact-sheet-eval.ts` določa ogrodje A/B z različico
sheme za resnične modele vida, združljive z OpenAI. Meri število žetonov, ki ga
sporoči ponudnik, skupno latenco po stenski uri od začetka do konca, vključno s
sestavljanjem kontaktne pole, število klicev modela in ohranitev dejstev,
določeno v manifestu. Neobdelani odgovori modela se ne zapišejo v poročilo;
ohranijo se samo izvlečki SHA-256 in ID-ji ujemajočih se dejstev. Ogrodje ne
izvede nobenega omrežnega ali plačljivega klica modela, razen če je podan
`--execute-real` ter so nastavljeni `--model`, `OMNIROUTE_BASE_URL` in
`OMNIROUTE_API_KEY`. Brez takšnega izrecnega resničnega izvajanja njegov strojno
berljivi rezultat ostane `HOLD`; sintetične meritve koristnega tovora/števila
klicev same po sebi niso dokaz za uvrstitev v produkcijo.

Klicatelji lahko podprtemu delu videa priložijo neobvezno polje
`transcript.cues`, kadar že imajo časovno poravnano besedilo. Vsaka iztočnica
mora vsebovati `text`, končen interval `start`/`end` znotraj ugotovljenega
trajanja in dovoljeni `source` (`client`, `embedded` ali `audio-bridge`);
privzeta vrednost `confidence` je `1` in mora ostati med `0` in `1`. Popolnoma
enake podvojene iztočnice se združijo. OmniRoute iz teh metapodatkov nikoli ne
začne prepisovanja: preverjene iztočnice se kopirajo v opisani rezultat skupaj
z virom, zaupanjem in intervalom ter se prikažejo kot nezaupanja vredna opažanja
ob opisih sličic. Neveljavno besedilo, besedilo zunaj obsega ali besedilo brez
podatkov o izvoru je zavrnjeno in se ne pomeša v tok opisov. Polje `source`
trenutno določi klicatelj in ga strežnik ne preverja: OmniRoute zagotovi, da je
vrednost eden od treh dovoljenih nizov, vendar še ne potrdi kriptografsko, da je
oznaka `embedded` ali `audio-bridge` dejansko nastala pri pridobivanju v lasti
strežnika. Dokler takšno preverjanje ni uvedeno, obravnavajte `source` kot
nezaupanja vreden namig; na njem ne utemeljujte odločitev o avtorizaciji.

Napredni klicatelj lahko zagotovi že avtorizirano sled `audioTranscript`
za isti videoposnetek. Združevalni sloj izvaja vizualna in zvočna opazovanja znotraj
enega roka in z enim signalom za prekinitev, jih razvrsti na skupni časovnici, združi
popolnoma enake podvojitve ter sporoči delni rezultat, kadar uspe le ena stran.
Neveljaven `audioTranscript` se pretvori v tak delni rezultat — vizualni
opis se ohrani, zvočna veja pa zabeleži prečiščeno kodo napake —
namesto da bi celoten videoposnetek spodletel. Razpoložljivost posameznih vej, oznaka delnega rezultata
in prečiščene kode napak se ohranijo v opisanem rezultatu, v
metapodatkih varoval (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), v metapodatkih predpomnilnika rezultatov in v števcih
združevanja mostu. Privzeta pot Video Bridge ne prikliče pretvorbe govora v besedilo
in ne prenese druge kopije predstavnostne vsebine; brez te izrecne sledi ostane
omejena na videoposnetek.

**Hramba prepisa (#12150 P1).** To se samodejno uporabi, kadar koli
Video Bridge (ki ga je treba posebej omogočiti) upodobi iztočnico prepisa — ločena
zastavica za hrambo ne obstaja. Ko zahteva upodobi katero koli iztočnico prepisa (s strani klicatelja navedeni
`transcript` ali združeni `audioTranscript`), jo varovalo označi kot
`videoBridgeObserved` in ustvari redigirano senčno različico opisa videoposnetka —
identično upodobitev, v kateri je telo prostega besedila vsake iztočnice zamenjano z
`[redacted-video-transcript]`; ta se ustvari z zamenjavo strukturiranega polja iztočnice,
preden se sestavi niz (nikoli z razčlenjevanjem sploščenega besedila, zato nobena vsebina
iztočnice — zlonamerna ali običajna, vključno s telesi, ki vsebujejo `]`, kot sta
`[inaudible]`/`[music]` — ne more ostati). Shranjeno telo zahteve v dnevniku klicev zamenja
vsak besedilni del, izpeljan iz videoposnetka, s to redigirano senčno različico, pri čemer se ujemanje
izvede po enakosti vsebine; sidro `fullText` se znova prebere iz dokončane vsebine varovala
pred klicem, zato je ujemanje še vedno uspešno po tem, ko poznejša verižna varovala (maskirniki osebno določljivih
podatkov in poverilnic, s prioritetama 10/95) sproti prepišejo besedilo opisa, ter
po tem, ko vstavitev sistemskega poziva, predaje in pomnilnika preoblikuje polje sporočil. Telo,
poslano navzgor modelu, ostane nespremenjeno. Opazovana zahteva prav tako ne zapolni
trajnega pomnilnika Memory (preskoči se pridobivanje tako iz zahteve kot iz odgovora),
zato lastni odgovor modela ne more ponoviti besedila prepisa v pomnilnik Memory.

**Neobdelana polja videoposnetka (#12430).** Ko je most omogočen in izvorna podpora za videoposnetke ni znana ali je ni, določena polja `transcript`/`audioTranscript` prav tako aktivirajo `videoBridgeObserved`, tudi po neuspehu opisa ali omejitvi `maxVideos`. Štejejo tudi vrednosti `null` in prazni nizi; manjkajoča polja in metapodatki, ki niso povezani z videoposnetkom, ne štejejo. Shranjene kopije ta polja redigirajo ali zahtevo izpustijo, predpomnilniki/pomnilnik Memory pa se obidejo. Obremenitev ponudnika ostane nespremenjena.

Dodatne shranjene kopije uporabljajo isti signal opazovane zahteve. Neobdelani
posnetek zahteve odjemalca pred varovalom, čakajoča zahteva v pomnilniku in zgodnji
dnevnik zavrnjene zahteve strukturno zamenjajo polja prepisa v delih videoposnetka;
besedilni pozivi, ki jih sintetizirajo stopnje cevovoda in predaja konteksta, se redigirajo
na ponoru za shranjeno telo zahteve. Shranjeni označevalnik `video_content_removed`
povzroči, da se nadaljevanje `previous_response_id` varno zaključi z napako, namesto da bi rekonstruiralo
besedilo, ki je bilo namerno zavrženo. Če opazovana zahteva pred beleženjem izgubi svojo
senčno redigirano različico za posamezni del ali če se po poznejših spremembah zahteve ne ujema
celo samo ena od več senčnih različic videoposnetka, se shranjeno telo zahteve
v celoti izpusti, namesto da bi se shranil le delno redigiran prepis.

Pri opazovani zahtevi lahko odgovor modela citira kateri koli del
prepisa brez strukturirane meje iztočnice. Njegov shranjeni `responseBody` v dnevniku klicev
se zato zamenja z označevalnikom izpustitve; podrobni artefakt
cevovoda (ki lahko vključuje telesa komunikacije z nadrejeno storitvijo/odjemalcem in pretočne segmente)
se ne shrani. Semantični predpomnilnik, predpomnilnik idempotentnosti in predpomnilnik ponovnega predvajanja sklepanja
obidejo branja in pisanja za to zahtevo. Zahteva ponudniku in odjemalcu vidni
odgovor ostaneta nespremenjena. Zgodnji bajti za ohranjanje povezave se izpraznijo iz začasnega
medpomnilnika, ko je podrobni artefakt izpuščen. Opozorilo Kiro o nepravilno oblikovanem EventStream
sporoči samo število bajtov obremenitve, nikoli njene vsebine ali neobdelane napake
razčlenjevalnika JSON.
To ne pomeni, da je bila opravljena revizija vsake nepovezane diagnostike ponudnika/vtičnika;
širši pregled ponorov za shranjevanje se spremlja v #11658.

Notranji življenjski cikel `/api/modality-bridge/video/drilldown` je ločena
predpomnilniška podlaga, dostopna prek povratne zanke in avtenticirana z žetonom. Vsaka operacija zahteva tudi
kanonični neprosojni ID glavnega subjekta. Preden se omogoči produkcijski klicatelj, mora
ta ID izpeljati iz avtenticiranega najemnika in nikoli ne sme posredovati
vrednosti, ki jo je izbral odjemalec. Ključi predpomnilnika povežejo ta glavni subjekt s kanoničnimi ID-ji seje in
reference videoposnetka, shranijo samo njihove ključe, izpeljane s SHA-256, ter omejijo tako branja
kot brisanje na isti glavni subjekt. Predpomnilnik shrani največ 16 izpeljanih okvirjev JPEG
na vnos, po desetih minutah jim veljavnost poteče in podpira omejena branja
`start`/`end` ali izrecno brisanje seje.

Vsak glavni subjekt je omejen na 16 vnosov in 64 MiB kanoničnih podatkov JPEG. Te
omejitve so neodvisne od skupne zgornje meje 64 vnosov/256 MiB: pritisk kvote
glavnega subjekta odstrani samo njegove najmanj nedavno uporabljene vnose, preden se začne upoštevati
globalno odstranjevanje LRU. Vnosi s pretečeno veljavnostjo se ob dejavnosti predpomnilnika odstranijo tako iz obračuna glavnega subjekta kot iz
globalnega obračuna, medtem ko preklic in neuspešno preverjanje veljavnosti ne
potrdita delne zamenjave.

Predpomnilnik zavrne nekanonični Base64, odvečno dopolnjevanje, predstavnostne vsebine, ki niso JPEG, nepravilno oblikovane ali
okrnjene datoteke JPEG ter datoteke JPEG, ki med omejenim dekodiranjem celotne slike z `sharp`
povzročijo opozorilo. Vsako sprejeto sliko znova kodira kot kanonični JPEG, širino in višino
izpelje iz dekodiranih bajtov, namesto da bi zaupal poljem klicatelja, ter zavrže vse končne
poliglotske bajte, namesto da bi jih ohranil. Obe kvoti se bremenita samo za omejeni kanonični stisnjeni medpomnilnik.
Omejitev prenosa JSON vključuje režijo Base64 za zgornjo mejo 32 MiB
dekodiranega vhoda. Vsaka
shranjena izpeljava beleži svojo preverjeno obliko/ločljivost JPEG, pravilnik vzorčenja,
različico izpeljave, čas ustvarjanja, strežniško izračunano zgoščeno vrednost vsebine in zgoščeno nadrejeno
referenco skupaj z zgoščeno vrednostjo vsebine nadrejenega elementa, ki jo poda zaupanja vreden klicatelj. Preklic se preveri
med asinhronimi fazami dekodiranja/izračunavanja zgoščene vrednosti pred atomsko potrditvijo v predpomnilnik.

Ta sklop še ne povezuje produkcijskega proizvajalca s potjo in ne
zagotavlja izbire različic z več ločljivostmi. Transparentna pot zahteve Video Bridge
zato ne povzroča dodatnega dela, medtem ko izpeljava glavnega subjekta, vezana na najemnika, in
celoten večločljivostni življenjski cikel FU-08 ostajata izrecno nadaljnje delo,
namesto da bi bila dokumentirana kot dokončano vedenje.

Sličice se zaporedno opišejo z nastavljenim modelom Video. Prazna
preglasitev Video podeduje nastavitev Vision; če sta obe prazni, samodejni usmerjevalnik
Vision izbere dejanski model, ki podpira vid. Uspešni opisi
zamenjajo izvirni del s stabilno predpono `[Video description:`, ki besedilo tudi
označi kot nezaupanja vredno opazovanje, izpeljano iz predstavnostne vsebine, in modelom v nadaljnji obdelavi
naroči, naj ne sledijo navodilom, najdenim v predstavnostni vsebini. Ključi predpomnilnika opisov sličic
vključujejo bajte JPEG, poziv, časovni žig in dejanski model; v predpomnilnik se shranijo samo uspešni
opisi. Vnosi predpomnilnika ohranijo dejanski uspešni model proizvajalca,
vključno z nadomestnim modelom; most sporoči `mixed`, kadar je različne sličice
ustvarilo več različnih modelov. Zadetek v predpomnilniku znova uporabi identiteto tega proizvajalca,
namesto da bi jo ponovno označil kot zahtevani načrt usmerjanja. Predpomnilnik rezultatov
celotnega videoposnetka je določen z vsakim vhodom, ki spremeni izhod — pozivom, dejanskim
modelom, pravilnikom vzorčenja, številom sličic, načinom semantične analize, prstnim odtisom SHA-256
normaliziranega namiga za fokus, oknom fokusa, `transcript`,
`audioTranscript` in zastavico kontaktnega lista — zato sprememba katere koli od teh
razsežnosti pomeni zgrešitev predpomnilnika in nikoli ponovne uporabe zastarelega rezultata. Različica pravilnika
vizualnega odstranjevanja dvojnikov, prag in omejeno število kandidatnih sličic so prav tako izrecno navedeni v
ključu in metapodatkih predpomnilnika rezultatov; sprememba pravilnika zato ne more ponovno uporabiti zastarelega
opisa celotnega videoposnetka. Metapodatki predpomnilnika rezultatov v4 ohranijo način in
prstni odtis, nikoli pa neobdelane uporabniške naloge. Metapodatki varoval poročajo tako o
zahtevanem kot o dejanskem načinu analize; zahtevani način `focused` brez
uporabnega uporabniškega besedila je sporočen kot dejansko `full`.

Varovalo izvleče vse podprte dele videoposnetka, vendar jih opiše največ
`modalityBridgeVideoMaxVideos`. Za cilj, za katerega je dokazano
`supportsVideo === false`, neuspešni videoposnetki in videoposnetki nad omejitvijo postanejo izrecne varne
besedilne oznake, tako da se ne ohrani noben neobdelan videoposnetek. Kadar zmožnost ni znana, ti deli
ostanejo nespremenjeni. Cilji z `supportsVideo === true` obidejo most.
Signal za prekinitev zahteve odjemalca se posreduje skozi prenos, čakalno vrsto posrednika,
podprocese in klice za opisovanje; prekinitve ustavijo izvajanje med videoposnetki in nikoli ne omogočijo
odprtega nadaljevanja z neobdelano predstavnostno vsebino.

Izvajalne nastavitve so shranjene v podatkovni zbirki in preverjene z Zod:

| Ključ                               | Privzeto    | Razpon / vedenje                                                                                        |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Izbirno izvajanje, potrebna je izrecna vključitev                                                       |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` ohrani splošne opise; `focused` uporablja omejen, nezaupanja vreden kontekst zadnjega uporabnika |
| `modalityBridgeVideoModel`          | `""`        | Podeduje model Vision Bridge                                                                            |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                    |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` ali sorazmerni `segment_aware`; napaka detektorja uporabi nadomestni `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                     |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                          |

Starejše trajno shranjene vrednosti časovne omejitve Video nad 120 sekundami se omejijo na
rok posrednika; novi zapisi nastavitev nad to omejitvijo so zavrnjeni.
`GET /api/modality-bridge/video/runtime` pred preverjanjem pristnosti ali izvajalnim preverjanjem
zahteva zaupanja vredno, žigosano lokalnost povratne zanke, nato pa še upravljavsko
preverjanje pristnosti. Vrne samo `available`, prečiščene različice FFmpeg/ffprobe in nespremenljiv
razlog, kadar izvajalno okolje ni na voljo. Notranja končna točka za izvlečenje ni
javni API za nalaganje: nasičenost čakalne vrste vrne `503` in `Retry-After`, prekinitev povezave
klicatelja vrne `499`, nespremenljivi rok posrednika pa vrne `504`. Pretvorjeni odgovori dodajo
`video->text;model=<visionModel>;parts=<videos>` v osrednjo glavo
`x-omniroute-modality-bridge`, ne da bi odstranili segmente Vision ali Audio.

### Maskirnik osebno določljivih podatkov (`piiMasker.ts`)

Izvaja se na **obeh** stopnjah.

- **`preCall`** klonira koristno vsebino, preišče `system`, `messages`, `input` in
  `prompt` (vključno z elementi v obliki navadnih nizov) ter uporabi `processPII()` (iz
  `@/shared/utils/inputSanitizer`) za polja `content`/`text` z nizovnimi vrednostmi. Ko je
  `PII_REDACTION_ENABLED=true`, so zaznani osebni podatki redigirani v odhodni
  koristni vsebini. To je neodvisno od `INPUT_SANITIZER_MODE` (ki nadzoruje samo
  pravilnik za vbrizgavanje pozivov). Ko je redigiranje izklopljeno, klic zabeleži število
  zaznav, ne da bi prepisal vsebino.
- **`postCall`** globoko klonira odgovor ter izvede `sanitizePIIResponse()` in
  maskirnik za obliko Responses API (`maskResponsesOutput` — obravnava
  `output_text` in `output[].content[].text`). Če pride do kakršnega koli redigiranja,
  spremenjeni odgovor nadomesti izvirnega.

Zaščitni mehanizem nikoli ne blokira; samo doda oznake (`meta.detections`,
`meta.redacted`) ali prepiše vsebino.

### Vbrizgavanje pozivov (`promptInjection.ts`)

Zazna nasprotujoče strukture v vsebini, ki jo posreduje uporabnik, in uveljavi
konfigurirani pravilnik. Delovanje določajo spremenljivke okolja in možnosti
konstruktorja:

| Nastavitev      | Spremenljivka okolja                                                                                     | Privzeto | Učinek                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omogočeno       | `INPUT_SANITIZER_ENABLED`                                                                                | `true`   | Ko je nastavljeno na `false`, se zaščitni mehanizem predčasno zaključi.                                                                                                                                                 |
| Način           | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                          | `warn`   | Pravilnik za vbrizgavanje: `block`, `warn` ali `log`. (`redact` je podprt zaradi združljivosti za nazaj, vendar **ne** odstrani besedila vbrizga; prepis osebnih podatkov v zahtevi nadzoruje `PII_REDACTION_ENABLED`.) |
| Prag blokiranja | možnost `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (vzdevek `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Najnižja stopnja resnosti, potrebna za blokiranje. Pri privzeti nastavitvi se srednja stopnja samo opazuje.                                                                                                             |

**Prednostni vrstni red načinov** (`getMode`): klicateljev `options.mode` →
**preglasitev z zastavico funkcije v zbirki podatkov** za `INJECTION_GUARD_MODE` (Nadzorna plošča → Nastavitve →
Zastavice funkcij) → spremenljivka okolja `INJECTION_GUARD_MODE` → spremenljivka okolja `INPUT_SANITIZER_MODE` →
`warn`. Preglasitev na nadzorni plošči ima zato prednost pred spremenljivkami okolja, tako da uporabniški vmesnik
Zastavice funkcij sproti nadzoruje delujoči zaščitni mehanizem (brez ponovnega zagona). Branje iz zbirke podatkov je varno ob napaki:
če pride do napake, zaščitni mehanizem uporabi delovanje na podlagi spremenljivk okolja; kadar
preglasitev ni nastavljena, je delovanje enako razreševanju samo na podlagi spremenljivk okolja.

Viri zaznavanja:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (skupni nabor detektorjev,
   ki se uporablja tudi drugje v cevovodu).
2. Vgrajeni `DEFAULT_GUARD_PATTERNS` (trenutno `system_override_inline` in
   `markdown_system_block`, oba z resnostjo `high`).
3. Izbirni `customPatterns`, posredovani prek možnosti konstruktorja (nizi, regularni izrazi
   ali zapisi `{ name, pattern, severity }`).

Ko je `mode === "block"` **in** vsaj ena zaznava doseže prag resnosti,
`preCall` vrne `{ block: true, message: "Zahteva zavrnjena:
zaznana sumljiva vsebina" }`. V načinih `warn`/`log` zaščitni mehanizem dogodek zabeleži, vendar
dovoli klic. Skupna pomožna funkcija `evaluatePromptInjection()` je prav tako izvožena
za klicatelje, ki morajo ovrednotiti pozive brez uporabe registra.

**Omejitev pregledovanja (v3.8.20):** detektor pregleda samo **prvih 16 KB**
združenega besedila poziva — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtov) v
`src/shared/utils/inputSanitizer.ts`. Tako `detectInjection()` kot
`evaluatePromptInjection()` pred izvajanjem zanke vzorcev uporabita
`slice(0, MAX_INJECTION_SCAN_BYTES)`. Navodila za vbrizgavanje so običajno blizu začetka vnosa, zato to
omeji porabo CPE in zbiralnika smeti zaradi regularnih izrazov pri koristnih vsebinah z več sto KB, ne da bi oslabilo zaznavanje (glejte
#3932, #4041).

### Maskirnik poverilnic (`credentialMasker.ts`)

Izvaja se v **obeh** fazah, kot zadnji v privzeti verigi (prednost `95`). Redigira
dobro znane vzorce ključev API oziroma skrivnih žetonov iz odhodne koristne vsebine (vsebine sporočil,
argumentov klicev orodij in rezultatov orodij) **ter** odgovora ponudnika, tako da poverilnica,
prilepljena v poziv (ali vrnjena v rezultatu orodja), ne uide
ponudniku višje ravni ali nazaj odjemalcu.

- **Samo s privolitvijo**, po enakem načelu kot prekrivanje osebno določljivih podatkov (ob strogem pravilu št. 20):
  onemogočeno, razen če je `settings.credentialRedactionEnabled === true` **ali**
  `CREDENTIAL_REDACTION_ENABLED=true`. Ko je izklopljeno, varovalo ne naredi ničesar —
  nikoli ne blokira in nikoli ne prepisuje.
- `redactCredentials()` prehodi celotno drevo koristne vsebine/odziva (`walkValue()`,
  varno pred onesnaževanjem prototipov in cikli prek `WeakSet`) ter zadetke zamenja
  z označbo `[REDACTED:<type>]`, pri čemer klonira samo veje, ki so se dejansko
  spremenile.
- `CREDENTIAL_PATTERNS` zajema ključe ponudnikov LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), žetone VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), plačilne ključe (Stripe, Square), ključe
  storitev v oblaku (dostopni ključ AWS, Twilio, SendGrid, Mailgun), zasebne
  ključe/JWT-je, povezovalne nize, ki vsebujejo poverilnice
  (`mongodb://user:pass@...` itd.), ter splošni vzorec vrednosti glave
  `Authorization`/`x-api-key`/`api-key`/`apikey`. Ključi v obliki glav
  (`authorization`, `x-api-key`, `api-key`, `apikey`) se prekrijejo strukturno
  (samo vrednost, predpona sheme, kot je `Bearer `/`Basic `, se ohrani), ne pa
  prek splošnega besedilnega regularnega izraza.
- Varovalo nikoli ne blokira; samo prepisuje (`modifiedPayload` /
  `modifiedResponse`) in dodaja oznake (`meta.credentialsRedacted`, `meta.count`).

Varovalo pred regresijami: `tests/unit/credential-masker-guardrail.test.ts`.

## Osnovna pogodba (`base.ts`)

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
  block?: boolean; // vrednost true prekine verigo
  message?: string; // prikazano ob blokiranju
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vrne preCall za preoblikovanje zahteve
  modifiedResponse?: TValue; // vrne postCall za preoblikovanje odgovora
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

Varovalo sporoči »brez spremembe« tako, da vrne `void`, `{}` ali
`{ block: false }`. Vrnitev `modifiedPayload`/`modifiedResponse` zamenja
vrednost, ki teče skozi verigo do naslednjih varoval.
`signal?: AbortSignal` posreduje življenjski cikel klicatelja varovalom. Prekinitev zahteve je namerna izjema s pristopom »fail-open«: predstavnostni mostovi ustavijo delo in počistijo vire, ne da bi obnovili neobdelano predstavnost za cilj, za katerega je znano, da je ne podpira.

## Register (`registry.ts`)

Edinec `guardrailRegistry` izpostavlja:

- `register(guardrail)` — doda varovalo (ali ga zamenja glede na normalizirano ime) in
  znova razvrsti varovala po naraščajoči vrednosti `priority`.
- `clear()` / `list()` — skrbniški pomožni funkciji.
- `runPreCallHooks(payload, context)` — gre skozi aktivna varovala, posreduje
  koristno vsebino prek `modifiedPayload` in se ustavi pri prvem `block: true`.
- `runPostCallHooks(response, context)` — enak potek na strani odgovora.
- `resetGuardrailsForTests({ registerDefaults })` — počisti stanje in po želji
  znova registrira privzete nastavitve za čisto izolacijo preizkusov.

Oba izvajalnika vrneta `{ blocked, payload|response, results, guardrail?, message? }`,
pri čemer je `results` polje zapisov `GuardrailExecutionResult`, ki vključujejo
polja `blocked`, `skipped`, `modified`, `error` in `meta` za vsako varovalo,
kar je uporabno za sledenje.

### Onemogočanje varoval za posamezno zahtevo

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` zbere
podvojenih vrednosti očiščen seznam imen varoval, ki jih je treba preskočiti za trenutno
zahtevo. Viri (vsi izbirni, vsi združeni):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` v telesu zahteve (na najvišji ravni)
- `metadata.disabledGuardrails` v telesu zahteve
- Glava `x-omniroute-disabled-guardrails` (ali starejša
  `x-disabled-guardrails`)

Vrednosti so lahko polja nizov ali niz, ločen z vejicami; imena so
normalizirana v male črke in zapis kebab-case (`pii_masker` → `pii-masker`). Rezultat
se prek `context.disabledGuardrails` posreduje registru, ki preskoči
ujemajoča se varovala (`skipped: true` v `results`).

## Vrstni red izvajanja

Za vsako zahtevo, ki teče skozi `src/sse/handlers/chat.ts` in
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` sestavi seznam za preskok na podlagi ključa API, telesa
   in glav.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` izvede varovalne mehanizme po naraščajočem
   vrstnem redu prioritete:
   - Onemogočeni varovalni mehanizmi so zabeleženi kot `skipped`.
   - `preCall` vsakega varovalnega mehanizma lahko prepiše koristno vsebino prek `modifiedPayload`.
   - Prvi `block: true` prekine verigo, obravnavalnik pa vrne
     odgovor o zavrnitvi s strani varovalnega mehanizma.
3. (Morebiti prepisana) koristna vsebina se posreduje kombiniranemu usmerjanju in
   pošiljanju nadrejenemu ponudniku.
4. Ko je odgovor sestavljen, `guardrailRegistry.runPostCallHooks(...)`
   izvede isto verigo nad odgovorom. `block: true` na tej točki zavrže odgovor
   nadrejenega ponudnika.

Varovalni mehanizmi, ki sprožijo izjemo, so zabeleženi z `error: <message>` in zapisani v dnevnik prek
`logger.warn`, vendar se veriga nadaljuje — zasnovano po načelu odprtega odpovedovanja.

## Konfiguracija

Spremenljivke okolja, ki jih berejo vgrajeni varovalni mehanizmi:

| Spremenljivka                         | Uporablja jo                 | Učinek                                                                                                                       |
| ------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`           | Nastavite na `false`, da zaznavanje v celoti onemogočite.                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`           | Pravilnik za vrivanje: `warn`, `block` ali `log`. Podedovana vrednost `redact` ne prepisuje vrinjenega besedila.             |
| `INJECTION_GUARD_MODE`                | `prompt-injection`           | Način za zaščito pred vrivanjem; tudi zastavica funkcije v zbirki podatkov, ki **preglasi** spremenljivke okolja (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`           | Najnižja stopnja resnosti, ki jo `MODE=block` zavrne: `high` (privzeto), `medium` ali `low`.                                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`           | Podedovan vzdevek za `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                      |
| `PII_REDACTION_ENABLED`               | `pii-masker`                 | Ko je nastavljeno na `true`, se podatki PII v zahtevi zakrijejo (neodvisno od načina vrivanja).                              |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nadaljnji tok) | Nadzira vedenje prikrivanja na strani odgovora.                                                                              |

Varovalni mehanizmi Modality Bridge berejo izvajalno konfiguracijo iz shrambe
nastavitev, podprte z zbirko podatkov (`getSettings()`), in ne iz spremenljivk okolja. Primarni ključi za slikovni način so
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` in
`modalityBridgeCacheMaxEntries`. Podedovani ključi
`visionBridge*` so sprejeti samo kot dokumentiran nadomestni način branja za en cikel;
zapisi nadzorne plošče uporabljajo primarne ključe. Privzete vrednosti in razreševalnik nadomestnih vrednosti
so v `src/shared/constants/modalityBridgeDefaults.ts`, podedovane
konstante pa so ohranjene v `src/shared/constants/visionBridgeDefaults.ts`.

Zvok uporablja `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` in `modalityBridgeAudioMaxClips` ter skupne
nastavitve `modalityBridgeCache*`. Zvok nima nadomestnega branja podedovanih ključev, ker so bili ti
ključi uvedeni s shemo Modality Bridge.

Video uporablja `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` in
`modalityBridgeVideoTimeout` ter skupne nastavitve `modalityBridgeCache*`.
Privzeto je onemogočen, ker sta FFmpeg/ffprobe izbirni operativni
odvisnosti, opisovanje sličic pa poveča zakasnitev in stroške modela.

## Zaščitni mehanizmi po meri

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

Koraki:

1. Ustvarite `src/lib/guardrails/myGuardrail.ts`, ki razširja `BaseGuardrail`.
2. Implementirajte `preCall` in/ali `postCall`.
3. Registrirajte ga bodisi ob uvozu (dodajte ga iz `registerDefaultGuardrails`) bodisi
   med izvajanjem pokličite `guardrailRegistry.register(...)` — register zamenja
   vsak predhodni zaščitni mehanizem z enakim normaliziranim imenom.
4. Dodajte teste v `tests/unit/` (obstoječi primeri:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testiranje

Med testi uporabite `resetGuardrailsForTests()`, da začnete iz znanega stanja.
Posredujte `{ registerDefaults: false }`, da začnete s praznim registrom in
registrirate samo zaščitne mehanizme, ki jih testirate. Vision Bridge podpira vstavljanje
odvisnosti (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge ponuja
enakovredne priključne točke za nastavitve, zmogljivosti, izbiro modela STT, preverjanje
poverilnic in prepisovanje. Testi lahko zato preverjajo oba poteka brez dostopa do
podatkovne zbirke ali omrežja.

## Glejte tudi

- `src/lib/guardrails/` — implementacija
- `src/shared/utils/inputSanitizer.ts` — skupni detektor, ki omogoča
  zaznavanje vbrizgavanja pozivov in maskiranje osebno določljivih podatkov
- `src/shared/constants/visionBridgeDefaults.ts` — privzete nastavitve Vision Bridge in
  seznam modelov s prisilno uporabo mostu
- `src/shared/constants/modalityBridgeDefaults.ts` — skupne privzete nastavitve izvajalnega okolja Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — neodvisna plast (varovalka, obdobja mirovanja)
- `docs/reference/ENVIRONMENT.md` — celoten pregled spremenljivk okolja

## Pokritost poti z zaščito pred vbrizgavanjem in red-team testiranje (8. faza · sklop D)

Zaščita pred vbrizgavanjem (`createInjectionGuard` / `withInjectionGuard`) pokriva vse poti,
ki sprejemajo uporabniške pozive. Upošteva `INJECTION_GUARD_MODE` (privzeto `warn` = samo beleženje;
`block` = vrne HTTP 400 `SECURITY_001`).

| Vrsta                | Poti                                                                                                                                                 | Privzeti način |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Besedilo (obstoječe) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Generativno          | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Podatki              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Izločanje besedila (`extractMessageContents`) pokriva `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testiranje (vsako noč, `nightly-llm-security.yml`):** promptfoo preverja, ali vsaka pot blokira
korpus OWASP-LLM v načinu `INJECTION_GUARD_MODE=block`; garak izvaja sonde (brez skrivnosti se preskoči).
Pot `moderations` je vključena zaradi doslednosti — upravljavci jo lahko v načinu blokiranja izvzamejo prek
`resolveDisabledGuardrails`.

Nočni delovni tok (`.github/workflows/nightly-llm-security.yml`, cron + ročni
zagon) ima dve opravili:

- **`promptfoo-guard` (blokirajoče)** — izvede `promptfoo eval -c promptfooconfig.yaml`
  z `INJECTION_GUARD_MODE=block`. Vsak nasprotniški primer (npr. »prezri vsa
  prejšnja navodila …«, poskusi pobega iz omejitev v slogu DAN) preveri, ali odgovor vsebuje
  `error.code === "SECURITY_001"`, tj. ali je zaščita dejansko zavrnila zahtevo.
- **`garak` (svetovalno)** — izvede garak `--probes promptinject,dan,leakreplay`
  proti lokalnemu primerku OmniRoute (`http://localhost:20128/v1`). Pogojeno je s
  skrivnostjo ponudnika (`PROMPTFOO_PROVIDER_KEY`); brez nje se elegantno preskoči, ukaz pa ima pripono
  `|| true`, zato poroča, ne da bi povzročil neuspeh CI.

Pokritost pomožne funkcije zaščite (`createInjectionGuard` / `withInjectionGuard`)
obsega vse poti `/v1`, ki sprejemajo pozive; besedilo poziva se pridobi iz
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` s funkcijo
`extractMessageContents()` v `src/shared/utils/inputSanitizer.ts`.
