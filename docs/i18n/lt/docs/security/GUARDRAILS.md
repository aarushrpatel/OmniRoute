# Guardrails (Lietuvių)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Pirminis tiesos šaltinis:** `src/lib/guardrails/`
> **Paskutinį kartą atnaujinta:** 2026-08-29 — v3.8.51 („Video Bridge“ transkripcijos kilmę deklaruoja iškvietėjas,
> serveris jos dar nepatvirtina — patikslinta pagal #11661)

Apsaugos priemonės užtikrina saugos, politikos ir turinio transformacijas ties
riba tarp „OmniRoute“ ir išorinių teikėjų. Kiekviena apsaugos priemonė gali tikrinti
(ir pasirinktinai atmesti, transformuoti arba anotuoti) užklausų naudingąsias apkrovas (`preCall`) ir
išorinių teikėjų atsakymus (`postCall`).

Sistema yra **fail-open**: jei vykdant apsaugos priemonę įvyksta išimtis, registras
įrašo klaidą ir tęsia darbą su kita apsaugos priemone, užuot atmetęs
užklausą. Blokavimas visada yra sąmoningas sprendimas (`block: true`), o ne atsitiktinumas.

## Integruotos apsaugos priemonės

Importuojant registras automatiškai įkelia šešias apsaugos priemones prioriteto tvarka
(žr. `registry.ts` → `registerDefaultGuardrails()`):

| Prioritetas | Pavadinimas         | Etapas(-ai)    | Failas                |
| ----------- | ------------------- | -------------- | --------------------- |
| `5`         | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`         | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`         | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`        | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`        | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`        | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Mažesnius prioriteto numerius turinčios priemonės vykdomos **pirmiausia**.

### Vaizdų tiltas (`visionBridge.ts`) — modalumų tiltas PR-1

Perima užklausas su vaizdais, skirtas **vaizdų nepalaikantiems modeliams**, ir
arba nukreipia visą užklausą į vaizdus palaikantį modelį, arba prieš siunčiant
užklausą išoriniam servisui pakeičia vaizdų dalis tekstiniais aprašymais,
sugeneruotais konfigūruojamo vaizdų modelio. Taip tik tekstą palaikantys
teikėjai gali skaidriai apdoroti daugiarūšius duomenis.

Eiga:

1. Praleisti, jei tikslinis modelis jau palaiko vaizdus (nebent jis įtrauktas į
   priverstinio tilto sąrašą `isVisionBridgeForcedModel`).
2. Išskirti vaizdų dalis naudojant `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), kuri perduoda darbą **suvienodintam medijos
   aptikimo mechanizmui** `detectMediaParts()`, esančiam
   `open-sse/utils/mediaParts.ts` — tai vienintelis tiesos šaltinis, naudojamas
   ir kombinuotajame suderinamumo filtre. Išskyrimas pagal leidžiamųjų sąrašą
   taikomas tik aukščiausio lygmens dalims, kurių formas `replaceImageParts`
   gali įterpti atgal (išskyrimo↔pakeitimo sutartis): OpenAI `image_url`,
   Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` ir Responses API `input_image`. Įdėtiniai atitikmenys
   ir tik indikatorių turinčios formos yra kombinuotojo filtro medžiaga ir
   niekada neišskiriami. Praleisti, jei nieko nerasta.
3. Nustatyti vykdymo konfigūraciją naudojant
   `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): naujieji
   `modalityBridge*` nustatymų raktai turi pirmenybę; senieji `visionBridge*`
   raktai išlieka kaip **vieno ciklo atsarginė parinktis** (grąžinimo langas).
   Kai tiltas išjungtas, praleisti dar prieš bet kokį medijos perėjimą.
4. Režimo parinkiklis (`modalityBridgeVisionMode`, žr. toliau pateiktą lentelę)
   nusprendžia, ar peradresuoti, ar aprašyti. Peradresavimo atveju grąžinamas
   `modifiedPayload`, kuriame pakeistas tik `model`, ir metaduomenys
   `{ rerouted, fromModel, toModel, imagesKept }`.
5. Aprašymo eiga: apriboti vaizdų skaičių iki `maxImages`, sudaryti į užduotį
   orientuotą raginimą, patikrinti aprašymų podėlį, iškviesti vaizdų modelį
   **lygiagrečiai** (`Promise.allSettled`) ir vietoje vaizdų įterpti tekstines
   dalis `[Image N]: <description>`. Nepavykus aprašyti, gaunama `null`, o
   pradinė vaizdo dalis **išsaugoma** (#4012), išskyrus kombinuotąją aprašymo
   eigą, kai nepavyko visi aprašymai: tokiu atveju patvirtintai vaizdų
   nepalaikančiam išoriniam servisui pateikiamas
   `(unavailable — no vision-capable provider connected)` pakaitalas (#8430).
6. Grąžinti `modifiedPayload` ir metaduomenis (`imagesProcessed`,
   `descriptions`, `processingTimeMs`, `visionModel`).

#### Režimo parinkiklis (`modalityBridgeVisionMode`)

| Režimas    | Numatytasis | Veikimas                                                                                                                                                                                                                                                                                                                                                             |
| ---------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔           | Ankstesnė euristika, nepakeista (#6640/#7204): ne kombinuotieji / `auto/` modeliai peradresuojami į geriausią vaizdų modelį, nebent pradinis modelis jau turi tinkamus prisijungimo duomenis (tuomet aprašoma); kombinuotieji tiksliniai modeliai visada naudoja aprašymą.                                                                                           |
| `describe` |             | Visada aprašyti — peradresavimo blokas visiškai praleidžiamas; visada atsako naudotojo pasirinktas modelis.                                                                                                                                                                                                                                                          |
| `reroute`  |             | Priverstinai peradresuoti: modelio su tinkamais prisijungimo duomenimis išsaugojimo patikra apeinama. Peradresavimo **tikslinio modelio** prisijungimo duomenų patikra vis tiek taikoma — kai nėra tinkamo vaizdų tikslinio modelio, užklausa perduodama aprašymo eigai, kad neapdoroti vaizdai niekada nepasiektų tik tekstą palaikančios galinės sistemos (#8430). |

Priverstiniai režimai nutraukia vykdymą **prieš** paleidžiant automatinę
euristiką; `auto` veikimas baitų lygmeniu yra identiškas apsaugos priemonės
veikimui iki PR-1.

#### API rakto aprėptis (`visionBridgeKeyScope.ts`)

Kai skambinančiojo API raktas riboja `allowedConnections`, kvotų telkinius
(`allowedQuotas`) arba modelius (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), tiltas
peradresavimui ir aprašymui parenka tik tuos modelius bei ryšius, kuriuos
leidžiama naudoti su tuo raktu. Tuomet aprašymo iškvieta visada vykdoma per
OmniRoute savikilpą su `x-omniroute-self-loop-key-id` antrašte, todėl gaunanti
pokalbio užklausa dar kartą pritaiko to rakto ryšių ir modelių politiką.
`enforceApiKeyPolicy()` atsižvelgia į šią antraštę tik kartu su savikilpos
bearer prieigos raktu, todėl ji gali tik susiaurinti prieigą, o identifikatorius,
kurio nepavyksta išspręsti, atmetamas.

Jei raktui neleidžiamas joks vaizdų modelis, aprašymo eiga pasitraukia ir
užklausa perduodama nepakeista — tai toks pats leidžiantis tęsti veikimas
įvykus klaidai kaip ir išjungtos apsaugos priemonės atveju (metaduomenys
`{ skipped: true, reason: "no_permitted_vision_model" }`). Užklausos be rakto
ir raktai be šių apribojimų veikia lygiai taip pat kaip anksčiau.

#### Į užduotį orientuotas aprašymo raginimas (`modalityBridgeVisionTaskAware`)

Numatytoji reikšmė – **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) prie bazinės
aprašymo užklausos prideda **paskutinio naudotojo pranešimo** tekstą (sutrumpintą
iki 500 simbolių), nukreipdamas aprašymą į tai, ko iš tikrųjų prašė naudotojas
(`codex-vision-proxy` šablonas), ir paprašydamas vaizdo modelio transkribuoti matomą
tekstą. Kai vėliavėlė išjungta arba naudotojo teksto nėra, bazinė užklausa naudojama nepakeista.

Paties aprašymo ciklo „į save“ su OpenAI suderinama užklausa (`callVisionModelSingle()`
faile `visionBridgeHelpers.ts`) visada prašo `image_url.detail: "high"` –
besąlygiškai, kiekvienam iškvietėjui / teikėjui ir neatsižvelgiant į jokį kliento signalą.
Žemo detalumo atranka pablogina OCR tikslumą būtent tai teksto transkribavimo
užduočiai, kurios prašoma šioje užklausoje, todėl pats aprašymo iškvietimas visada prašo
aukšto detalumo, neatsižvelgiant į tai, kokį detalumo lygį naudojo pradinė gaunama užklausa. Tai
veikia tik vidinį aprašymo užklausos turinį; tai nekeičia, kaip
OmniRoute perduoda iškvietėjo nuosavą `image_url.detail` pirminėje užklausoje –
ši numatytoji reikšmė taikoma atskirai ir tik aptiktiems OpenCode klientams,
naudojant `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Aprašymo
ciklo „į save“ Anthropic perdavimo formato šaka neturi `detail` lauko,
todėl nė viena iš šių numatytųjų reikšmių jos neveikia.

#### Aprašymo išvesties riba (`modalityBridgeVisionMaxChars`)

| Raktas                         | Numatytoji reikšmė | Diapazonas         |
| ------------------------------ | ------------------ | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`                | `0` arba 100–50000 |

`0` (numatytoji reikšmė) reiškia **be ribos** – `callVisionModel()` grąžintas aprašymas
perduodamas nepakeistas, išsaugant esamą veikseną. Bet kokia reikšmė iš
100–50000 diapazono sutrumpina aprašymą ir prideda `…` galūnę prieš įterpiant jį
atgal kaip `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` faile
`src/lib/guardrails/visionBridge.ts`). Padidinkite šią reikšmę daug detalių turinčioms OCR
užduotims, kai paskesniam modeliui reikia visos transkripcijos; sumažinkite ją, kad
apribotumėte daug teksto generuojančių vaizdo modelių žetonų naudojimą.
Valdymo skydelio laukas yra Vision kortelės Advanced skydelyje
(`modality-bridge-max-chars` faile `ModalityBridgeVisionTab.tsx`) ir bet kokią
reikšmę nuo 1 iki 99 padidina iki minimalios 100 ribos, o aiškiai nurodytą `0`
palieka nepakeistą – `0` savaime yra tinkama Zod reikšmė
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), o ne vien
numatytoji „nenustatyta“ reikšmė.

#### Aprašymų podėlis (`modalityBridge/bridgeCache.ts`)

Atmintyje laikomas LRU + TTL podėlis aprašymo išvestims, bendrai naudojamas visame procese.
Raktas = `sha256(imageRef + composedPrompt + configuredBridgeModel)` su
ilgio prefiksais atskiriant laukus (be kolizijų ties laukų ribomis). Modelio komponentas yra
**sukonfigūruotas** tilto modelis, o ne modelis, kuris iš tikrųjų pateikė atsakymą –
`callVisionModel` gali viduje naudoti atsarginį variantą, o rakto kūrimas kiekvienam
bandymui suskaidytų podėlį. Nesėkmingi aprašymai niekada neįrašomi į podėlį. Nustatymai:

| Raktas                          | Numatytoji reikšmė | Diapazonas |
| ------------------------------- | ------------------ | ---------- |
| `modalityBridgeCacheEnabled`    | `true`             | —          |
| `modalityBridgeCacheTtlMinutes` | `60`               | 1–1440     |
| `modalityBridgeCacheMaxEntries` | `200`              | 10–5000    |

#### Nuotolinių vaizdų normalizavimas (aprašymo ciklas „į save“ / base64 gavimas)

Kai tiltas pats gauna **nuotolinį** vaizdą – Anthropic aprašymo
iškvietimui „į save“ arba claude perdavimo formato base64 konvertavimui
(`ensureBase64ImagesForClaudeWire`), abiem atvejais per
`fetchRemoteImageAsDataUri()` faile `visionBridgeHelpers.ts` – gautas duomenų
URI prieš įterpiant į vaizdo modelio užklausą perduodamas per `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`). Per dideli vaizdai sumažinami iki
**2048px ilgosios kraštinės** (atitinkant dydžio ribą, kurią OpenAI / Anthropic
jau taiko serverio pusėje), todėl sumažėja įkeliamų duomenų kiekis / delsa,
nekeičiant to, ką mato vaizdo modelis. Dydžiui keisti naudojamas `sharp`, įkeliamas
dinaminiu importu: platformoje, kurioje nepavyksta įkelti jo vietinio dvejetainio
failo, `normalizeDataUri()` **niekada neišmeta išimties** – vietoje to pradiniai
baitai perduodami nepakeisti, todėl aprašymo / base64 konvertavimo kelias visada
veikia toliau. Ne vaizdo baitai (kai gaunant nebuvo grąžintas iškoduojamas vaizdas)
taip pat perduodami nepakeisti. Šis normalizavimas taikomas tik vaizdams, kuriuos
tiltas gauna savo iškvietimui „į save“ – jis niekada netaikomas iškvietėjo
neapdorotam tiesioginio perdavimo turiniui, laikantis tik aiškiu pasirinkimu leidžiamų
keitimų principo (griežtoji taisyklė Nr. 20).

#### Nustatymų schema + migracija

Nauji `modalityBridge*` raktai tikrinami su Zod schemoje `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCache*` trejetas ir
`modalityBridgeAudio*` grupė, kurią naudoja Audio Bridge. Migracija
`141_modality_bridge_settings.sql` nukopijuoja esamas pasenusias
`visionBridge*` reikšmes į atitinkamus naujus raktus (idempotentiškai ir niekada
neperrašant operatoriaus nustatytos `modalityBridge*` reikšmės); pasenę raktai
dar vieną leidimo ciklą lieka priimami kaip skaitymo atsarginis variantas.

#### Skaidrumo antraštė + statistika

Aprašymu transformuoti atsakymai turi
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(sukuriama naudojant `buildModalityBridgeHeader()` faile `modalityBridge/bridgeStats.ts`,
pridedama naudojant `withModalityBridgeHeader()` faile `src/sse/handlers/chatHelpers.ts`).
Peradresuotos užklausos **neturi** antraštės – turinys nebuvo pakeistas, o modelio
pakeitimas jau matomas atsakymo turinio `model` lauke.

`GET /api/modality-bridge/stats` (valdymo autentifikacija, tas pats lygis kaip
`GET /api/settings`) grąžina atmintyje saugomus kiekvienos modalumo rūšies skaitiklius
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }`, skirtus `vision`, `audio` ir
`video`. `averageLatencyMs` vardikliu naudoja `latencySamples`, o ne visus bandymus;
operacija be laiko matavimo nesukuria dirbtinės nulinės milisekundės
imties. `bridged` išlieka su ankstesnėmis versijomis suderinamas sėkmingų
konvertavimų alternatyvusis pavadinimas; nesėkmingi bandymai jo nedidina.
Pagal projektą skaitikliai nustatomi iš naujo paleidus procesą
(tai telemetrija, o ne apskaita).

#### Valdymo skydelio konfigūracija

Specialus valdymo skydelio puslapis yra
`/dashboard/settings/modality-bridge`. Jo per URL pasiekiami skirtukai `Vision`, `Audio`
ir `Video`, keičiant `tab` reikšmę, išsaugo užklausos parametrus.
Skirtuke „Vision“ galima įjungti funkciją, pasirinkti režimą ir modelį (įskaitant automatinį
numatytąjį pasirinkimą), naudoti į užduotį orientuotas užklausas, konfigūruoti išplėstinius skirtojo laiko, vaizdo, aprašo ilgio ir podėlio
apribojimus, peržiūrėti vykdymo aplinkos
skaitiklius bei saugiai pateikti pavyzdinę užklausą. Skirtukas „Audio“ taip pat veikia: jame galima
įjungti funkciją, pasirinkti tik STT skirtą modelį su parinktimi „Auto“, nustatyti skirtojo laiko ir didžiausios įrašo trukmės apribojimus, peržiūrėti garso
skaitiklius ir atlikti `input_audio` pavyzdinį testą. Skirtukas „Video“ yra funkcionalus: jame rodoma
FFmpeg/ffprobe vykdymo aplinkos būsena — viena iš keturių aiškiai apibrėžtų UI būsenų (`unknown`, kol
patikra vykdoma arba jos nepavyko užbaigti, `restricted`, kai valdymo skydelio pagrindinis kompiuteris nėra „loopback“
ir patikra praleidžiama kliento pusėje, `unavailable`, kai patikrinus patvirtinama, kad priemonių
nėra, arba `available` kartu su FFmpeg/ffprobe versijomis) — išsaugomi
įjungimo, modelio, kadrų, vaizdo įrašo ir skirtojo laiko apribojimai, modelių parinkiklis filtruojamas paliekant modelius, galinčius apdoroti vaizdus,
ir pateikiami vaizdo įrašų skaitikliai.

Ankstesnė „Vision Bridge“ kortelė AI nustatymuose dabar yra suderinamumo nuoroda į
naująjį puslapį; joje nebėra antros formos kopijos. Skiltis „Media Providers“ taip pat
susieja „Image-to-Text“ ir „Speech-to-Text“ darbo eigas su atitinkamais „Modality
Bridge“ skirtukais, nepašalindama esamos „Speech-to-Text“ bandymų aplinkos.

**Savojo ciklo priėmimo patikros apėjimas:** kai aprašymo iškvieta nukreipiama per OmniRoute
nuosavą `/v1` savąjį ciklą (nestandartinį teikėjo modelį), papildoma užklausa siunčia
`x-omniroute-admission-bypass: internal` ir autentifikuojama naudojant nustatytus
savojo ciklo prisijungimo duomenis — vietinį `sk_omniroute` kontrolinį žymenį vietiniu režimu arba
operatoriaus sukonfigūruotą `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` aplinkos raktą (#1350), kad
diegimai su `REQUIRE_API_KEY=true` vis tiek galėtų vykdyti aprašymo iškvietą. Apėjimas
leidžiamas tik naudojant būtent šiuos prisijungimo duomenis, todėl išoriniai klientai negali naudoti
šios antraštės priėmimo patikrai praleisti.

Senieji numatytieji nustatymai yra faile `src/shared/constants/visionBridgeDefaults.ts`;
nauji režimo, į užduotį orientuoto veikimo bei podėlio numatytieji nustatymai ir nustatymų išsprendimo priemonė yra faile
`src/shared/constants/modalityBridgeDefaults.ts`. Apsaugos mechanizmas pateikia
`deps` konstruktoriaus parinktį, kad testuose būtų galima įterpti netikras `getSettings` ir
`callVisionModel` realizacijas.

### Garso tiltas (`audioBridge.ts`) — „Modality Bridge“ PR-3

Perima pokalbių užklausas su garsu prieš joms pasiekiant paskirties vietą, apie kurią nėra
žinoma, kad ji priima garso įvestį. Jis niekada nekeičia pokalbio užklausos maršruto: garso dalys
transkribuojamos per esamą su OpenAI suderinamą kelių dalių galinį tašką, o
pasirinktas pokalbių modelis toliau apdoroja tekstines transkripcijas.

Eiga:

1. Nustatykite `supportsAudio` naudodami `getResolvedModelCapabilities()`. Pirmenybė teikiama aiškiai
   teikėjų registre nurodytiems metaduomenims, po jų — statiniams modelio metaduomenims, o tada sinchronizuotam
   `modalities_input`. Deklaruotas įvesties sąrašas be `audio` reiškia `false`; jei
   galimybių įrodymų nėra, reikšmė lieka `null`. Tiek `false`, tiek `null` aktyvina
   konservatyvų tiltą, o `true` jį apeina.
2. Nustatykite `modalityBridgeAudio*` nuostatas ir iš kiekvieno pranešimo išskirkite sujungiamas aukščiausio lygio
   garso dalis naudodami bendrą `detectMediaParts()`
   detektorių. Palaikomos perdavimo formos yra OpenAI `input_audio`, `audio_url` ir
   `source.media_type: "audio/*"`. Įdėtinis garsas aptinkamas maršrutizavimui, tačiau
   sujungimo kelias jo nepašalina. Apdorojamų dalių skaičių riboja `modalityBridgeAudioMaxClips`;
   vėlesnės dalys paliekamos nepakeistos.
3. Naudokite sukonfigūruotą `provider/model` arba leiskite `selectAudioBridgeModel()` stabilia katalogo tvarka pereiti
   per `AUDIO_TRANSCRIPTION_PROVIDERS` ir pasirinkti pirmą
   modelį, kuriam prieinami tinkami aktyvaus teikėjo prisijungimo duomenys.
4. `callAudioTranscription()` konvertuoja base64 / duomenų URI garsą į kelių dalių
   `file` arba atsisiunčia nuotolinį `audio_url` naudodama tik viešąsias išvesties užklausas leidžiančią
   apsaugą, DNS susiejimą ir 25 MB ribą. Tada failas ir pasirinktas
   modelis siunčiami POST metodu į vietinį `/v1/audio/transcriptions` savąjį ciklą, autentifikuotą naudojant
   `resolveSelfLoopBearer()`. Esamas transkripcijos maršrutas atlieka įprastą
   prisijungimo duomenų paiešką, pristabdymo / spartos ribojimo tvarkymą ir nukreipimą teikėjui.
5. Sėkmingos iškvietos pakeičia atitinkamas dalis į `[Audio N]: <transcript>`. Iškvietos
   vykdomos naudojant `Promise.allSettled`: individuali nesėkmė išsaugo pradinę
   garso dalį (#4012 sutartis). Jei visos iškvietos nepavyksta ir įrodyta, kad paskirties vietos
   `supportsAudio === false`, dalys pakeičiamos į
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 sutartis). Kai
   paskirties vieta nežinoma (`null`), visoms iškvietoms nepavykus turinys lieka nepakeistas. Įrodyta,
   kad tik tekstą palaikanti paskirties vieta, neturinti tinkamų STT prisijungimo duomenų, gauna tą patį aiškų
   pakaitinį tekstą, neatliekant tinklo iškvietos.

Sėkmingos transkripcijos naudoja viso proceso „Modality Bridge“ LRU/TTL podėlį. Raktas
sudarytas iš garso nuorodos, stabilios `audio-transcription` operacijos
žymos ir pasirinkto STT modelio; nesėkmės niekada nesaugomos podėlyje. Garso bandymai atnaujina
bendrus `bridged`, `cacheHits`, `failures` ir `lastUsedAt` skaitiklius.
Transformuoti atsakymai turi
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; nepakeistos
užklausos negauna „Audio Bridge“ segmento.

Vykdymo aplinkos nuostatos saugomos DB ir tikrinamos naudojant Zod:

| Raktas                        | Numatytoji reikšmė | Diapazonas              |
| ----------------------------- | ------------------ | ----------------------- |
| `modalityBridgeAudioEnabled`  | `true`             | —                       |
| `modalityBridgeAudioModel`    | `""`               | Automatinis arba STT ID |
| `modalityBridgeAudioTimeout`  | `60000`            | 1000–300000             |
| `modalityBridgeAudioMaxClips` | `3`                | 1–10                    |

Bendrąją podėlio atmintinę ir toliau valdo `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` ir `modalityBridgeCacheMaxEntries`.

### Vaizdo įrašų tiltas (`videoBridge.ts`, `videoBridgePipeline.ts`)

Perima aukščiausiojo lygmens vaizdo įrašų dalis, esančias „Chat Completions“
`messages` ir „Responses API“ `input`, prieš iškviečiant tikslinę sistemą, kuri,
kiek žinoma, savaime nepalaiko vaizdo įrašų. Palaikomi formatai yra
`input_video`, `video_url`, `video_source`, HTTPS URL ir
`data:video/*;base64,...` duomenų URI. Paprasti failų pavadinimai tekste
nelaikomi vaizdo įrašais.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) atsako už užklausos perėjimą,
galimybių ir politikos patikrą, kiekvienos užklausos rezultatų agregavimą ir
atsakymo duomenis. Kiekvieno vaizdo įrašo apdorojimas — gavimas, viso rezultato
podėlis, kadrų sekos aprašymas (sujungiantis bet kokią iškvietėjo deklaruotą
garso transkripciją) ir kiekvieno bandymo metrika, nutraukimas bei išvalymas —
paslėptas už `processVideoPart`, esančio `videoBridgePipeline.ts`; jis
iškviečiamas vieną kartą kiekvienai vaizdo įrašo daliai `preCall` cikle. Šis
modulis taip pat apibrėžia aiškias prievadų ribas:
`VideoMediaBrokerPort` (baitams gauti ir atrinktiems kadrams išgauti),
`VideoAudioTranscriptionPort` (iškvietėjo deklaruotai garso transkripcijai
sujungti su atrinktų kadrų antraštėmis) ir `VideoDrilldownPort` (kadrų
detalizavimo išsaugojimo riba; ji dar nesusieta su `processVideoPart` — šiuo
metu detalizavimo įrašus rašo tik atskiras
`/api/modality-bridge/video/drilldown` maršrutas).

Viešasis `/v1` užklausos kelias niekada neimportuoja ir neiškviečia subproceso.
Nuotoliniai vaizdo įrašai atsisiunčiami taikant 50 MiB ribą; įterptiesiems
base64 vaizdo įrašams taikoma konservatyvi 36 MiB iškoduotų duomenų riba
kiekvienam vaizdo įrašui, kad modelio, pranešimų ir įrėminimo apvalkalas
neviršytų viešosios JSON užklausos priėmimo 50 MiB ribos. Įterptųjų duomenų
ilgis ir numatomas iškoduotų duomenų dydis patikrinami prieš paskiriant atmintį.
Pradiniam nuotoliniam URL ir kiekvienam peradresavimui būtinas HTTPS; naudojama
esama tik viešą prieigą leidžianti išeinančių ryšių apsauga su DNS susiejimu.
Tada baitai perduodami per tikslią vidinę tarpininko ribą
`POST /api/modality-bridge/video/extract`. Šis maršrutas yra ir `LOCAL_ONLY`,
ir `SPAWN_CAPABLE`, priima tik kiekvienam procesui autentifikuotą, patikimo
grįžtamojo ryšio sąsajos užklausą ir niekada nepriima URL, failų sistemos kelio,
vykdomojo failo ar argumentų sąrašo. API turinio dydžio apdorojimo seka ir
apdorojimo programos inkrementinis turinio skaitytuvas nepriklausomai vienas
nuo kito užtikrina 50 MiB tarpininko įvesties ribą. Jo ribotoje eilėje vienu
metu vykdomas vienas išgavimo darbas, leidžiami keturi laukiantys darbai, o
laukiantiems įvesties duomenims taikoma 100 MiB riba.

Tarpininko viduje `ffprobe` skaito privatų vietinį failą; fiksuotame leidžiamų
formatų sąraše nėra grojaraščių ir manifestų formatų. Leidžiamiems MOV šeimos
konteineriams išorinės MOV duomenų nuorodos pagal numatytąsias nuostatas lieka
išjungtos, o fiksuota komanda jų neįjungia. Ir `ffprobe`, ir `ffmpeg` naudoja
tik `file` protokolą leidžiantį sąrašą, vieną giją, fiksuotus argumentų masyvus,
nenaudoja apvalkalo, o vykdomieji failai nustatomi pagal `PATH`. Pridėto
paveikslėlio viršelio srautai nelaikomi atkūrimo kandidatais. Visi atkuriami
srautai turi atitikti ribas; prieš deterministinį mažiausio indekso atsarginį
variantą pirmenybė teikiama aiškiai nustatytam numatytajam srautui. Vaizdo įrašų
trukmė ribojama iki 600 sekundžių, kiekvienas matmuo — iki 8 192 pikselių, o
šaltinio pikselių skaičius — iki 33 554 432. FFmpeg atrenka 1–16 vidurio taško
JPEG kadrų, sumažina ilgesniąją kraštinę iki ne daugiau kaip 1 024 pikselių,
nedidindama mažesnių įvesčių, ir niekada negauna URL. Pagal numatytąsias
nuostatas atranka yra `uniform`. Pasirenkamosios `scene_aware` ir
eksperimentinė `segment_aware` politikos atlieka vieną papildomą fiksuotą
FFmpeg perėjimą per jau patikrintą vietinį srautą, parenka apribotas `showinfo`
scenų laiko žymas ir, jei aptiktuvas sugenda, pasibaigia skirtasis laikas,
gaunama netinkamai suformuota išvestis arba kandidatų rinkinys yra tuščias,
deterministiškai grįžta prie tų pačių tolygiai paskirstytų vidurio taškų.
Segmentus vertinantis režimas vidurio taškų pavyzdžius paskirsto proporcingai
patikrintiems scenų intervalams; segmentus vertinantys įrodymai ir atsarginio
varianto veikimas išsamiai aprašyti toliau. Griežta 16 kadrų riba taikoma po
atrankos pagal kiekvieną politiką. Kai scenas vertinančiai užklausai skirtas tik
vienas kadras, naudojamas aktyvaus viso vaizdo įrašo arba fokusavimo intervalo
tolygios atrankos vidurio taškas ir pateikiama `policyEffective: uniform`:
vienas pasirinktas scenos kadras negali išsaugoti abiejų laiko intervalo galų.
Iškvietėjas gali pasirinktinai pateikti baigtinį fokusavimo intervalą
(`start`/`end` sekundėmis); ribos apribojamos pagal medijos trukmę, atvirkštiniai
arba nebaigtiniai intervalai atmetami, o visos atrankos politikos vykdomos tik
normalizuotame intervale. Gautas intervalas įtraukiamas į atrankos metaduomenis
ir nepatikimo aprašo priešdėlį, kad tolesni modeliai galėtų atskirti fokusuotą
ištrauką nuo visos laiko juostos.

Semantinis antraščių fokusavimas yra atskira, aiškiai nurodoma nuostata.
Numatytasis `full` analizės režimas išsaugo esamą kadrų raginimą ir niekada
neperduoda užklausos teksto antraščių modeliui. `focused` režimu tiltas skaito
tik naujausią netuščią naudotojo sukurtą `text`/`input_text` iš to paties
„Chat“ arba „Responses“ konteinerio, normalizuoja jį į NFC, sutraukia valdymo
simbolius ir tarpų simbolius bei apriboja iki 500 „Unicode“ kodo taškų. Jei
rezultatas tuščias, grįžtama prie tikslaus `full` raginimo. Tinkama užuomina
serializuojama kaip JSON tam skirtame nepatikimo naudotojo konteksto bloke ir
gali tik suteikti pirmenybę stebimoms detalėms; ji negali panaikinti atskiro
įspėjimo nevykdyti medijoje matomų ar girdimų nurodymų. Tekstinis fokusavimas
niekada nenustato `start`/`end` ir nekeičia laikinės atrankos mechanizmo.

#### FU-07 struktūriniai segmentų įrodymai

`segment_aware` naudoja vieną apribotą išankstinės analizės etapą jau patikrintam
vietiniam vaizdo įrašų srautui. Fiksuota filtrų grandinė pirmiausia sumažina plotį
iki daugiausia 320 pikselių, aptinka scenų pasikeitimus ir sustingusius intervalus,
tada ima po 1 kadrą per sekundę suliejimui, vidutiniam skaisčiui ir
erdvinei / laiko informacijai įvertinti. Etapas apribotas iki 600 struktūrinių
imčių, vienos FFmpeg / filtro gijos, tų pačių tik `file` protokolui ir konteineriams
taikomų leidžiamųjų sąrašų, 1 MiB proceso išvesties ribos ir daugiausia 30 sekundžių
tarpininko bendrame nutraukimo / termino lange. Jis niekada nepriima komandos,
filtro, kelio ar URL iš užklausos.

Struktūrinės reikšmės yra deterministiniai imčių ėmimo įrodymai, o ne semantinis
vaizdo įrašo supratimas. Iš jų nenustatomi subjektai, veiksmai, antraštės, kalba ar
naudotojo ketinimai. Scenų ir sustingimų ribos sudaro segmentus; sustingimo aprėptis,
suliejimas, ekspozicija, erdvinis detalumas ir pokyčiai laike tik lemia, kaip
paskirstomas esamas 1–16 kadrų biudžetas. Visiškai sustingusiam segmentui skiriamas
ne daugiau kaip vienas kadras, o nesustingę segmentai konkuruoja dėl likusio
biudžeto. Kai ribų yra daugiau nei kadrų, išlaikoma tolygi laiko juostos aprėptis,
kad greiti ankstyvi perėjimai negalėtų paslėpti ilgo baigiamojo segmento. Scenų
ribos, esančios ne didesniu nei 1 sekundės analizės skiriamosios gebos atstumu nuo
sustingimo ribos, sujungiamos.

Jei trūksta filtrų, įrodymai yra netinkamai suformuoti ar tušti, įvyksta detektoriaus
klaida arba baigiasi apribotos išankstinės analizės skirtasis laikas, be klaidos
grįžtama prie tikslios tolygios vidurio taškų strategijos. Skambinančiojo inicijuotas
nutraukimas arba tarpininko terminas tokio grįžimo neleidžia: vykdomas antrinis
procesas nutraukiamas, neleidžiama vėliau išgauti kadrų, o privatus laikinasis medis
pašalinamas bloke `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuoja deterministinius tikrus FFmpeg
testinius duomenis, skirtus antraščių kūrimo iškvietimų sutaupymui po dublikatų
šalinimo, tankaus judėjimo biudžeto paskirstymui, suliejimo / ekspozicijos / SI-TI
įrodymams, greitiems perėjimams su ilga pabaiga ir klaidingai teigiamiems laipsniško
išblukimo rezultatams vertinti. Jis registruoja išankstinės analizės realųjį laiką
ir, kai pasiekiama `/usr/bin/time`, antrinio proceso CPU laiką bei didžiausią RSS.
Jo kokybės patikros yra tik struktūriniai orakulai. Tikro antraščių modelio kokybė
lieka `HOLD`, nes ši testavimo sistema neturi įgaliotos galinės stotelės ar fiksuoto
vertintojo. Piniginis sutaupymas taip pat lieka `HOLD`, nebent
`--caption-cost-per-call-usd` pateikiamas aiškus teigiamas vieno iškvietimo kainos
įvertis; scenarijus niekada neišgalvoja nė vieno iš šių rezultatų.

Kiekvienas kadras apribotas iki 4 MiB, visi neapdoroti kadrai kartu – iki 23 MiB,
o serializuotas tarpininko atsakymas – iki 32 MiB. Privatus laikinasis katalogas
pašalinamas bloke `finally`. OmniRoute neįtraukia FFmpeg ir nepriima pasirinktinio
vykdomojo failo kelio. Prieš kurdamas antraštes tiltas atlieka konservatyvų vizualinį
dublikatų šalinimo etapą: kiekvienas JPEG sumažinamas iki 16×16 pilkio tonų buferio
ir lyginamas tik su paskutiniu išsaugotu kadru. Kai prašomas antraščių biudžetas
viršija vieną kadrą, išgaunamas apribotas kandidatų telkinys, kurio dydis gali būti
iki dvigubai didesnis už tą biudžetą, bet niekada neviršija 16 kadrų. Prašoma riba
pritaikoma tik pašalinus dublikatus, o kai biudžetas yra bent du, galutinio retinimo
metu išsaugomi pirmasis ir paskutinis pasirinkti kandidatai. Versijuota
`grayscale-16x16-mean-cells-v2` strategija naudoja didesnę iš šių reikšmių:
vidutinį skaisčio pokytį arba miniatiūros langelių, kurių normalizuotas pokytis yra
bent 0.05, santykį. Dublikatų slenkstis yra konstanta 0.04, pasirinkta dėl
nuspėjamumo, o ne pateikta kaip vykdymo metu keičiama nuostata. Šis antrinis didelio
kontrasto signalas išsaugo nedidelius judesius ir matomo teksto pokyčius, kuriuos
gali paslėpti vien vidurkiu pagrįstas palyginimas. Įvykus lygintuvo ar dekoderio
klaidai, aprėptis išlaikoma. Išvesties metaduomenyse atskiriami išgauti kandidatai,
sėkmingai panaudoti kadrai ir pašalinti vizualiniai dublikatai.

Aiškiai pažymėtoje vaizdo įrašo dalyje galima paprašyti kontaktų lapo su laiko
žymomis. Tiltas sukuria ne daugiau kaip 4 stulpelių ir 16 kadrų JPEG tinklelį.
Kiekviename 512 pikselių langelyje šaltinio laiko žyma įterpiama į didelio kontrasto
apatinę juostą, o tos pačios laiko žymos išlieka tekstiniuose metaduomenyse, kad
vėlesniuose etapuose būtų galima susieti ir audituoti duomenis. Visam JPEG tebetaikoma
32 MiB riba. Jei `sharp` negali dekoduoti ar sukomponuoti tinklelio, tiltas grįžta
prie atskirų JPEG kadrų; kliento inicijuotas nutraukimas vis tiek perduodamas
kontaktų lapo operacijai.

Paaukštinimo įrodymai sąmoningai atskirti nuo sintetinio komponavimo
mikroetaloninio testo. `scripts/perf/video-bridge-contact-sheet-eval.ts` apibrėžia
pagal schemą versijuojamą A/B testavimo sistemą tikriems su OpenAI suderinamiems
regos modeliams. Ji matuoja teikėjo nurodytus žetonus, bendrą realųjį delsos laiką
(įskaitant kontaktų lapo komponavimą), modelio iškvietimų skaičių ir manifeste
apibrėžtų faktų išlaikymą. Neapdoroti modelio atsakymai į ataskaitą neįrašomi;
išsaugomos tik SHA-256 santraukos ir atitikusių faktų ID. Testavimo sistema neatlieka
jokių tinklo ar mokamo modelio iškvietimų, nebent perduotas `--execute-real` ir
sukonfigūruoti `--model`, `OMNIROUTE_BASE_URL` bei `OMNIROUTE_API_KEY`. Be tokio
aiškiai nurodyto tikro vykdymo jos mašininio skaitymo verdiktas lieka `HOLD`;
vien sintetiniai naudingosios apkrovos / iškvietimų skaičiaus matavimai nėra
paaukštinimo įrodymai.

Skambinantieji prie palaikomos vaizdo įrašo dalies gali pridėti pasirinktinį
`transcript.cues` masyvą, kai jau turi sulygiuotą tekstą. Kiekviena užuomina turi
turėti `text`, baigtinį `start` / `end` intervalą, patenkantį į nustatytą trukmę,
ir į leidžiamąjį sąrašą įtrauktą `source` (`client`, `embedded` arba
`audio-bridge`); numatytoji `confidence` reikšmė yra `1` ir ji turi išlikti tarp
`0` ir `1`. Visiškai vienodos užuominos sujungiamos. OmniRoute niekada nepradeda
transkribavimo pagal šiuos metaduomenis: patikrintos užuominos su šaltiniu,
pasitikėjimo įverčiu ir intervalu nukopijuojamos į aprašytą rezultatą ir pateikiamos
kaip nepatikimi stebėjimai greta kadrų antraščių. Netinkamas, už diapazono ribų
esantis arba kilmės neturintis tekstas atmetamas, užuot jį įmaišius į antraščių
srautą. Laukas `source` šiuo metu deklaruojamas skambinančiojo, o ne patikrinamas
serverio: OmniRoute užtikrina, kad reikšmė būtų viena iš trijų leidžiamų eilučių,
tačiau kol kas kriptografiškai nepatvirtina, kad žyma `embedded` arba
`audio-bridge` iš tiesų gauta iš serveriui priklausančio išgavimo proceso. Kol
toks patikrinimas neįdiegtas, laikykite `source` nepatikima užuomina; negrįskite
ja prieigos teisių suteikimo sprendimų.

Pažengęs iškvietėjas gali pateikti jau autorizuotą `audioTranscript` takelį
tam pačiam vaizdo įrašui. Sujungimo sandūra vykdo vaizdo ir garso stebėjimus
laikydamasi vieno termino ir naudodama vieną nutraukimo signalą, išdėsto juos
bendroje laiko juostoje, sutraukia visiškai vienodus dublikatus ir pateikia
dalinį rezultatą, kai sėkminga tik viena pusė. Netinkamas `audioTranscript`
degraduoja iki tokio dalinio rezultato — vaizdo aprašas išsaugomas, o garso
šakoje įrašomas išvalytas trikties kodas — užuot nutraukus viso vaizdo įrašo
apdorojimą. Kiekvienos šakos pasiekiamumas, dalinio rezultato žyma ir išvalyti
trikčių kodai išsaugomi aprašytame rezultate, apsauginių ribotuvų metaduomenyse
(`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), rezultatų podėlio metaduomenyse ir tilto sujungimo
skaitikliuose. Numatytasis Video Bridge kelias nekviečia kalbos vertimo į tekstą
ir neatsisiunčia antros medijos kopijos; be aiškiai pateikto takelio jis lieka
skirtas tik vaizdui.

**Transkripcijos išsaugojimas (#12150 P1).** Tai taikoma automatiškai kaskart,
kai Video Bridge (kurį patį reikia pasirinktinai įjungti) atvaizduoja
transkripcijos užuominą — atskiros išsaugojimo žymos nėra. Kai užklausoje
atvaizduojama bet kokia transkripcijos užuomina (iškvietėjo deklaruotas
`transcript` arba sujungtas `audioTranscript`), apsauginis ribotuvas pažymi ją
kaip `videoBridgeObserved` ir sukuria užmaskuotą vaizdo įrašo aprašo šešėlinę
kopiją — identišką atvaizdavimą, kuriame kiekvienos užuominos laisvos formos
tekstas pakeičiamas į `[redacted-video-transcript]`; ji sukuriama pakeičiant
struktūrizuotą užuominos lauką prieš surenkant eilutę (niekada neanalizuojant
suplokštinto teksto, todėl joks užuominos turinys — priešiškas ar įprastas,
įskaitant tekstus su `]`, pvz., `[inaudible]`/`[music]` — negali išlikti).
Išsaugotame iškvietimo žurnalo užklausos turinyje kiekviena iš vaizdo įrašo
gauta tekstinė dalis pakeičiama tuo užmaskuotu šešėliu, ją susiejant pagal
turinio lygybę; `fullText` atrama iš naujo nuskaitoma iš užbaigtos apsauginio
ribotuvo prieš iškvietimą naudingosios apkrovos, todėl atitiktis išlieka net
tada, kai vėlesni grandinės apsauginiai ribotuvai (PII ir kredencialų
maskuokliai, prioritetai 10/95) vietoje perrašo aprašo tekstą ir kai sistemos
paraginimo, perdavimo ar atminties įterpimas pakeičia pranešimų masyvo
struktūrą. Modeliui siunčiamas turinys lieka nepakeistas. Stebima užklausa taip
pat neužpildo jokios ilgalaikės Memory (praleidžiamas tiek iš užklausos, tiek iš
atsako gaunamos informacijos išskyrimas), todėl paties modelio atsakas negali
atkartoti transkripcijos teksto į Memory.

**Neapdoroti vaizdo įrašo laukai (#12430).** Kai tiltas įjungtas, o savasis
vaizdo įrašų palaikymas nežinomas arba jo nėra, apibrėžti `transcript`/
`audioTranscript` laukai taip pat aktyvina `videoBridgeObserved`, net ir po
aprašo trikties arba pasiekus `maxVideos` ribą. `null` ir tuščios eilutės yra
įskaitomos; nesami laukai ir su vaizdo įrašu nesusiję metaduomenys — ne.
Išsaugotose kopijose šie laukai užmaskuojami arba užklausa praleidžiama, o
podėliai ir Memory apeinami. Teikėjo naudingoji apkrova lieka nepakeista.

Papildomoms išsaugotoms kopijoms naudojamas tas pats stebimos užklausos
signalas. Neapdorotoje kliento užklausos momentinėje kopijoje prieš apsauginius
ribotuvus, atmintyje laikomoje laukiančioje užklausoje ir anksti atmestos
užklausos žurnale transkripcijos laukai vaizdo įrašo dalyse pakeičiami
struktūriškai; konvejerio etapų ir konteksto perdavimo susintetinti eilučių
paraginimai užmaskuojami išsaugomos užklausos turinio paskirties taške.
Išsaugotas `video_content_removed` žymeklis lemia, kad `previous_response_id`
tęsinys saugiai nesuveikia, užuot atkūręs sąmoningai pašalintą tekstą. Jei
stebima užklausa prieš registravimą žurnale praranda atskiros dalies maskavimo
šešėlį arba jei po vėlesnių užklausos pakeitimų nepavyksta susieti bent vieno
iš kelių vaizdo įrašo šešėlių, išsaugomas užklausos turinys visiškai
praleidžiamas, užuot išsaugojus tik iš dalies užmaskuotą transkripciją.

Stebimos užklausos atveju modelio atsakas gali pacituoti bet kurią
transkripcijos dalį be struktūrizuotos užuominos ribos. Todėl jo išsaugoto
iškvietimo žurnalo `responseBody` pakeičiamas praleidimo žymekliu; išsamus
konvejerio artefaktas (kuriame gali būti tiekėjo ar kliento turiniai ir srauto
fragmentai) neišsaugomas. Semantiniai, idempotentiškumo ir samprotavimo
pakartojimo podėliai šiai užklausai apeina skaitymus ir rašymus. Teikėjo
užklausa ir klientui matomas atsakas lieka nepakeisti. Ankstyvieji ryšio
palaikymo baitai pašalinami iš laikinojo buferio, kai išsamus artefaktas
praleidžiamas. Kiro perspėjime apie netinkamai suformuotą EventStream nurodomas
tik naudingosios apkrovos baitų skaičius, bet niekada ne jos turinys ar
neapdorota JSON analizatoriaus klaida.
Tai nėra teiginys, kad buvo audituota kiekviena nesusijusi teikėjo ar papildinio
diagnostika; platesnė išsaugojimo paskirties taškų peržiūra stebima užduotyje
#11658.

Vidinio `/api/modality-bridge/video/drilldown` gyvavimo ciklas yra atskiras,
grįžtamojo ryšio adresu ir prieigos raktu autentifikuojamas podėlio pagrindas.
Kiekvienai operacijai taip pat būtinas kanoninis neskaidrus pagrindinio subjekto
ID. Prieš įjungiant produkcinį iškvietėją, jis turi išvesti tą ID iš
autentifikuoto nuomininko ir niekada nepersiųsti kliento pasirinktos reikšmės.
Podėlio raktai susieja tą pagrindinį subjektą su kanoniniais seanso ir vaizdo
įrašo nuorodos ID, saugo tik iš jų SHA-256 išvestus raktus ir apriboja tiek
skaitymą, tiek šalinimą tuo pačiu pagrindiniu subjektu. Viename podėlio įraše
saugoma ne daugiau kaip 16 išvestinių JPEG kadrų, jie nustoja galioti po dešimties
minučių, o sistema palaiko apribotą skaitymą naudojant `start`/`end` arba aiškų
seanso pašalinimą.

Kiekvienam pagrindiniam subjektui leidžiama iki 16 įrašų ir 64 MiB kanoninių
JPEG duomenų. Šios ribos nepriklauso nuo visuotinės 64 įrašų / 256 MiB ribos:
esant pagrindinio subjekto kvotos spaudimui, prieš svarstant visuotinį LRU
šalinimą pašalinami tik rečiausiai pastaruoju metu naudoti to pagrindinio
subjekto įrašai. Pasibaigusio galiojimo įrašai podėlio veiklos metu pašalinami
tiek iš pagrindinio subjekto, tiek iš visuotinės apskaitos, o atšaukimo ar
tikrinimo trikties atveju dalinis pakeitimas neįrašomas.

Talpykla atmeta nekanoninį Base64, perteklinį užpildą, ne JPEG mediją, netinkamai suformuotus ar
sutrumpintus JPEG failus ir JPEG failus, dėl kurių riboto viso vaizdo `sharp`
dekodavimo metu pateikiamas įspėjimas. Kiekvienas priimtas vaizdas iš naujo užkoduojamas kaip kanoninis JPEG, plotis ir aukštis
nustatomi pagal dekoduotus baitus, užuot pasitikėjus iškvietėjo laukais, o visi gale esantys
poligloto baitai pašalinami, o ne išsaugomi. Abiem kvotoms priskiriamas tik riboto dydžio kanoninis suglaudintas buferis.
JSON perdavimo apribojimas apima Base64 pridėtines sąnaudas, taikomas 32 MiB
dekoduotos įvesties ribai. Kiekviename
išsaugotame išvestiniame objekte įrašomas patvirtintas JPEG formatas / skiriamoji geba, atrankos politika,
išvedimo versija, sukūrimo laikas, serverio apskaičiuota turinio maiša ir maišos pavidalo pirminio objekto
nuoroda bei patikimo iškvietėjo pateikta pirminio turinio maiša. Atšaukimas tikrinamas
tarp asinchroninių dekodavimo / maišos skaičiavimo etapų, prieš atomiškai įrašant į talpyklą.

Šioje dalyje dar neprijungtas gamybinis duomenų teikėjas prie maršruto ir
nenumatyta kelių skiriamųjų gebų variantų atranka. Todėl skaidrus Video Bridge užklausų
kelias neatlieka jokio papildomo darbo, o nuomininkui susieto pagrindinio subjekto išvedimas ir
visas FU-08 kelių skiriamųjų gebų gyvavimo ciklas tebėra aiškiai įvardyti kaip vėlesni darbai,
o ne dokumentuoti kaip visiškai įgyvendinta elgsena.

Kadrams antraštės nuosekliai generuojamos naudojant sukonfigūruotą Video modelį. Tuščia
Video perrašos reikšmė paveldi Vision nuostatą; jei abi reikšmės tuščios, Vision
automatinis maršruto parinkiklis pasirenka tinkamą vaizdus palaikantį modelį. Sėkmingai sugeneruotos antraštės
pakeičia pradinę dalį stabiliu `[Video description:` prefiksu, kuris taip pat
pažymi tekstą kaip nepatikimą, iš medijos išvestą stebėjimą, ir nurodo tolesniems
modeliams nevykdyti medijoje rastų instrukcijų. Kadrų antraščių talpyklos raktai
apima JPEG baitus, užklausą, laiko žymą ir taikomą modelį; talpykloje saugomos tik sėkmingai
sugeneruotos antraštės. Talpyklos įrašuose išsaugomas faktinis sėkmingai rezultatą sukūręs modelis,
įskaitant atsarginį modelį; kai skirtingus kadrus apdorojo skirtingi
modeliai, tiltas pateikia `mixed`. Radus įrašą talpykloje, pakartotinai naudojama to rezultatą sukūrusio modelio tapatybė,
užuot jai priskyrus prašytą maršruto parinkimo planą. Viso vaizdo įrašo rezultatų
talpyklos raktas sudaromas pagal kiekvieną išvestį keičiantį įvesties parametrą — užklausą, taikomą
modelį, atrankos politiką, kadrų skaičių, semantinės analizės režimą, normalizuotos
fokusavimo užuominos SHA-256 kontrolinį atspaudą, fokusavimo langą, `transcript`,
`audioTranscript` ir kontaktų lapo žymą — todėl pakeitus bet kurį iš šių
matmenų talpyklos įrašas nerandamas ir pasenęs įrašas niekada nenaudojamas pakartotinai. Vaizdinio dublikatų šalinimo politikos
versija, slenkstis ir ribotas kandidatinių kadrų skaičius taip pat aiškiai įtraukiami į
rezultatų talpyklos raktą ir metaduomenis; todėl pakeitus politiką negalima pakartotinai naudoti pasenusio
viso vaizdo įrašo aprašo. Rezultatų talpyklos v4 metaduomenyse saugomi režimas ir
kontrolinis atspaudas, bet niekada nesaugoma neapdorota naudotojo užduotis. Apsaugos mechanizmo metaduomenyse nurodomi ir
prašytas, ir taikomas analizės režimai; prašytas `focused` režimas, kai nėra
tinkamo naudotojo teksto, nurodomas kaip faktiškai `full`.

Apsaugos mechanizmas išskiria kiekvieną palaikomą vaizdo įrašo dalį, tačiau aprašo ne daugiau nei
`modalityBridgeVideoMaxVideos`. Jei įrodyta, kad paskirties objektui taikoma
`supportsVideo === false`, nepavykę ir ribą viršijantys vaizdo įrašai pakeičiami aiškiomis saugiomis
teksto žymomis, kad neliktų jokio neapdoroto vaizdo įrašo. Kai galimybė nežinoma, šios dalys
paliekamos nepakeistos. Paskirties objektai, kuriems taikoma `supportsVideo === true`, apeina tiltą.
Kliento užklausos nutraukimo signalas perduodamas atsisiuntimui, tarpininko eilei,
poprocesiams ir antraščių generavimo iškvietimams; nutraukimai sustabdo apdorojimą tarp vaizdo įrašų ir niekada neleidžia
nesėkmės atveju praleisti neapdorotos medijos.

Vykdymo laiko nuostatos saugomos DB ir tikrinamos naudojant Zod:

| Raktas                              | Numatytoji reikšmė | Diapazonas / elgsena                                                                                   |
| ----------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`            | Pasirenkama vykdymo laiku, reikia aiškiai įjungti                                                      |
| `modalityBridgeVideoAnalysisMode`   | `"full"`           | `full` išsaugo bendrines antraštes; `focused` naudoja ribotą, nepatikimą naujausią naudotojo kontekstą |
| `modalityBridgeVideoModel`          | `""`               | Paveldi Vision Bridge modelį                                                                           |
| `modalityBridgeVideoFrameCount`     | `8`                | 1–16                                                                                                   |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`        | `uniform`, `scene_aware` arba proporcinė `segment_aware`; aptiktuvui nepavykus grįžtama prie `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`                | 1–4                                                                                                    |
| `modalityBridgeVideoTimeout`        | `120000`           | 1000–120000 ms                                                                                         |

Senos išsaugotos Video skirtojo laiko reikšmės, viršijančios 120 sekundžių, apribojamos iki
tarpininko galutinio termino; naujos nuostatų įrašymo operacijos, viršijančios šią ribą, atmetamos.
`GET /api/modality-bridge/video/runtime` prieš autentifikavimą ar vykdymo aplinkos tikrinimą reikalauja patikimos,
pažymėtos vietinės „loopback“ kilmės, o tada reikalauja valdymo
autentifikavimo. Jis pateikia tik `available`, išvalytas FFmpeg / ffprobe versijas ir fiksuotą
priežastį, kai vykdymo aplinka nepasiekiama. Vidinis išskyrimo galinis taškas nėra
vieša įkėlimo API: perpildžius eilę grąžinama `503` kartu su `Retry-After`, iškvietėjui
atsijungus grąžinama `499`, o pasiekus fiksuotą tarpininko galutinį terminą grąžinama `504`. Konvertuotuose atsakymuose
prie centrinės `x-omniroute-modality-bridge` antraštės pridedama
`video->text;model=<visionModel>;parts=<videos>`, nepašalinant Vision ar Audio segmentų.

### PII maskuoklis (`piiMasker.ts`)

Vykdomas **abiem** etapais.

- **`preCall`** klonuoja naudingąją apkrovą, pereina per `system`, `messages`, `input` ir
  `prompt` (įskaitant paprastas eilutes) bei pritaiko `processPII()` (iš
  `@/shared/utils/inputSanitizer`) eilutės tipo `content` / `text` laukams. Kai
  `PII_REDACTION_ENABLED=true`, aptikti asmens identifikavimo duomenys (PII) yra paslepiami siunčiamoje
  naudingojoje apkrovoje. Tai nepriklauso nuo `INPUT_SANITIZER_MODE` (kuris valdo tik
  raginimų įterpimo politiką). Kai slėpimas išjungtas, iškvietimas įrašo aptikimų
  skaičių nekeisdamas turinio.
- **`postCall`** giliai klonuoja atsakymą, paleidžia `sanitizePIIResponse()` ir
  Responses API formos maskavimo priemonę (`maskResponsesOutput` — apima
  `output_text` ir `output[].content[].text`). Jei kas nors paslepiama,
  pakeistas atsakymas pakeičia pradinį.

Apsaugos priemonė niekada neblokuoja; ji tik prideda anotacijas (`meta.detections`,
`meta.redacted`) arba perrašo turinį.

### Raginimų įterpimas (`promptInjection.ts`)

Aptinka priešiškas struktūras naudotojo pateiktame turinyje ir taiko
sukonfigūruotą politiką. Veikimą lemia aplinkos kintamieji ir konstruktoriaus
parinktys:

| Nustatymas          | Aplinkos kintamasis                                                                                                         | Numatytoji reikšmė | Poveikis                                                                                                                                                                                      |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Įjungta             | `INPUT_SANITIZER_ENABLED`                                                                                                   | `true`             | Kai `false`, apsaugos priemonė iš karto baigia vykdymą.                                                                                                                                       |
| Režimas             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                                             | `warn`             | Įterpimo politika: `block`, `warn` arba `log`. (`redact` priimamas dėl atgalinio suderinamumo, tačiau **nepašalina** įterpimo teksto; užklausos PII perrašymą valdo `PII_REDACTION_ENABLED`.) |
| Blokavimo slenkstis | `blockThreshold` parinktis / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alternatyvus pavadinimas `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`             | Mažiausias blokavimui būtinas pavojingumo lygis. Esant numatytajai reikšmei, vidutinio lygio atvejai tik stebimi.                                                                             |

**Režimo pirmumas** (`getMode`): iškvietėjo `options.mode` →
`INJECTION_GUARD_MODE` **DB funkcijos vėliavėlės perrašymas** (Valdymo skydas → Nustatymai →
Funkcijų vėliavėlės) → `INJECTION_GUARD_MODE` aplinkos kintamasis → `INPUT_SANITIZER_MODE` aplinkos kintamasis →
`warn`. Todėl valdymo skydo perrašymas turi pirmenybę prieš aplinkos kintamuosius, tad Funkcijų
vėliavėlių naudotojo sąsaja valdo veikiančią apsaugą realiuoju laiku (nereikia paleisti iš naujo). DB nuskaitymas yra atsparus gedimams:
jei įvyksta klaida, apsauga grįžta prie aplinkos kintamaisiais pagrįstos elgsenos, o kai
perrašymas nenustatytas, elgsena yra tokia pati kaip naudojant tik aplinkos kintamuosius.

Aptikimo šaltiniai:

1. `sanitizeRequest()` iš `@/shared/utils/inputSanitizer` (bendras aptikimo priemonių
   rinkinys, naudojamas ir kitose apdorojimo grandinės vietose).
2. Integruoti `DEFAULT_GUARD_PATTERNS` (šiuo metu `system_override_inline` ir
   `markdown_system_block`, abiejų pavojingumo lygis yra `high`).
3. Pasirinktiniai `customPatterns`, perduoti per konstruktoriaus parinktis (eilutės, reguliariosios išraiškos
   arba `{ name, pattern, severity }` įrašai).

Kai `mode === "block"` **ir** bent vienas aptikimas pasiekia pavojingumo
slenkstį, `preCall` grąžina `{ block: true, message: "Request rejected:
suspicious content detected" }`. `warn` / `log` režimais apsaugos priemonė įrašo į žurnalą, bet
leidžia vykdyti iškvietimą. Bendras pagalbinis metodas `evaluatePromptInjection()` taip pat eksportuojamas
iškvietėjams, kuriems reikia įvertinti raginimus nenaudojant registro.

**Nuskaitymo riba (v3.8.20):** aptikimo priemonė tikrina tik **pirmuosius 16 KB**
sujungto raginimo teksto — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 baitai)
faile `src/shared/utils/inputSanitizer.ts`. Tiek `detectInjection()`, tiek
`evaluatePromptInjection()` prieš vykdydami šablonų ciklą iškviečia
`slice(0, MAX_INJECTION_SCAN_BYTES)`. Įterpimo direktyvos būna netoli įvesties pradžios, todėl tai
apriboja reguliariųjų išraiškų CPU / GC sąnaudas kelių šimtų KB naudingosioms apkrovoms nesusilpninant aptikimo (žr.
#3932, #4041).

### Prisijungimo duomenų maskavimo priemonė (`credentialMasker.ts`)

Veikia **abiem** etapais ir numatytojoje grandinėje yra paskutinė (prioritetas `95`). Paslepia
gerai žinomus API raktų / slaptųjų prieigos raktų šablonus siunčiamoje naudingojoje apkrovoje (pranešimų
turinyje, įrankių iškvietimų argumentuose, įrankių rezultatuose) **ir** teikėjo atsakyme, todėl
į raginimą įklijuoti prisijungimo duomenys (arba įrankio rezultato pakartotinai pateikti duomenys) nenutekinami
pirminiam teikėjui ar atgal klientui.

- **Tik su aiškiu įjungimu**, taikant tą pačią konvenciją kaip ir PII maskavimui (susiję su griežtąja taisykle Nr. 20):
  išjungta, nebent `settings.credentialRedactionEnabled === true` **arba**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kai ši funkcija išjungta, apsaugos mechanizmas neatlieka jokių veiksmų —
  jis niekada neblokuoja ir nieko neperrašo.
- `redactCredentials()` pereina per visą naudingosios apkrovos / atsako medį (`walkValue()`,
  apsaugotas nuo prototipo užteršimo, saugus ciklų atžvilgiu naudojant `WeakSet`) ir pakeičia atitikmenis
  vietos rezervavimo ženklu `[REDACTED:<type>]`, klonuodamas tik tas šakas, kurios iš tikrųjų
  pasikeitė.
- `CREDENTIAL_PATTERNS` apima LLM paslaugų teikėjų raktus (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS prieigos raktus (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), mokėjimų raktus (Stripe, Square), debesijos
  raktus (AWS prieigos raktą, Twilio, SendGrid, Mailgun), privačiuosius raktus / JWT,
  prisijungimo duomenis turinčias ryšio eilutes (`mongodb://user:pass@...` ir kt.) ir
  bendrinį `Authorization`/`x-api-key`/`api-key`/`apikey` antraštės reikšmės
  šabloną. Antraščių pavidalo raktai (`authorization`, `x-api-key`, `api-key`,
  `apikey`) maskuojami struktūriškai (tik reikšmė, išsaugant tokį schemos priešdėlį kaip
  `Bearer `/`Basic `), o ne naudojant bendrinę teksto reguliariąją išraišką.
- Apsaugos mechanizmas niekada neblokuoja; jis tik perrašo (`modifiedPayload` /
  `modifiedResponse`) ir prideda anotacijas (`meta.credentialsRedacted`, `meta.count`).

Regresijos patikra: `tests/unit/credential-masker-guardrail.test.ts`.

## Bazinė sutartis (`base.ts`)

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
  block?: boolean; // true nutraukia grandinę
  message?: string; // pateikiamas blokuojant
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // grąžinamas iš preCall užklausai perrašyti
  modifiedResponse?: TValue; // grąžinamas iš postCall atsakymui perrašyti
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

Apsaugos priemonė nurodo, kad pakeitimų nėra, grąžindama `void`, `{}` arba
`{ block: false }`. Grąžinus `modifiedPayload` / `modifiedResponse`, grandine
perduodama reikšmė pakeičiama tolesnėms apsaugos priemonėms.
`signal?: AbortSignal` perduoda iškvietėjo gyvavimo ciklą apsaugos priemonėms. Užklausos nutraukimas yra sąmoninga „fail-open“ išimtis: medijos tarpininkai sustabdo darbą ir atlaisvina išteklius, neatkurdami neapdorotos medijos paskirties vietai, kuri, kaip žinoma, jos nepalaiko.

## Registras (`registry.ts`)

Vienintelis egzempliorius `guardrailRegistry` suteikia:

- `register(guardrail)` — prideda apsaugos priemonę (arba pakeičia pagal normalizuotą pavadinimą) ir
  iš naujo surikiuoja didėjančia `priority` tvarka.
- `clear()` / `list()` — administravimo pagalbinės funkcijos.
- `runPreCallHooks(payload, context)` — iteruoja aktyvias apsaugos priemones, perduoda
  naudingąją apkrovą per `modifiedPayload` ir sustoja ties pirmuoju `block: true`.
- `runPostCallHooks(response, context)` — tokia pati eiga atsakymo pusėje.
- `resetGuardrailsForTests({ registerDefaults })` — išvalo būseną ir pasirinktinai
  iš naujo užregistruoja numatytąsias apsaugos priemones, kad testai būtų visiškai izoliuoti.

Abi vykdymo funkcijos grąžina `{ blocked, payload|response, results, guardrail?, message? }`,
kur `results` yra `GuardrailExecutionResult` įrašų masyvas, apimantis kiekvienos
apsaugos priemonės laukus `blocked`, `skipped`, `modified`, `error` ir `meta`,
naudingus sekimui.

### Apsaugos priemonių išjungimas atskiroms užklausoms

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` surenka pasikartojimų
neturintį apsaugos priemonių, kurios turi būti praleistos vykdant dabartinę
užklausą, pavadinimų sąrašą. Šaltiniai (visi neprivalomi, visi sujungiami):

- `apiKeyInfo.disabledGuardrails`
- Užklausos turinio `disabledGuardrails` (aukščiausiu lygiu)
- Užklausos turinio `metadata.disabledGuardrails`
- Antraštė `x-omniroute-disabled-guardrails` (arba senoji
  `x-disabled-guardrails`)

Reikšmės gali būti eilučių masyvai arba kableliais atskirta eilutė; pavadinimai
normalizuojami į mažosiomis raidėmis rašomą kebabo stilių (`pii_masker` → `pii-masker`). Rezultatas
perduodamas registrui per `context.disabledGuardrails`, o registras praleidžia
atitinkančias apsaugos priemones (`skipped: true` lauke `results`).

## Vykdymo tvarka

Kiekvienai užklausai, perduodamai per `src/sse/handlers/chat.ts` ir
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` sudaro praleidžiamų apsaugos priemonių sąrašą pagal API raktą, užklausos turinį
   ir antraštes.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` vykdo apsaugos priemones didėjančia
   prioriteto tvarka:
   - Išjungtos apsaugos priemonės pažymimos kaip `skipped`.
   - Kiekvienos apsaugos priemonės `preCall` gali perrašyti naudingąją apkrovą per `modifiedPayload`.
   - Pirmasis `block: true` nutraukia grandinę, o apdorojimo programa grąžina
     apsaugos priemonės atmetimo atsakymą.
3. Galimai perrašyta naudingoji apkrova perduodama kombinuotajam maršrutizavimui ir išsiunčiama
   aukštesniojo lygio paslaugai.
4. Surinkus atsakymą, `guardrailRegistry.runPostCallHooks(...)`
   paleidžia tą pačią grandinę atsakymui. Šiame etape `block: true` atmeta aukštesniojo lygio paslaugos
   atsakymą.

Klaidą sukeliančios apsaugos priemonės pažymimos įrašu `error: <message>`, o klaida registruojama per
`logger.warn`, tačiau grandinė tęsiama — taip sąmoningai įgyvendinamas veikimo tęstinumas klaidos atveju.

## Konfigūracija

Integruotųjų apsaugos priemonių nuskaitomi aplinkos kintamieji:

| Kintamasis                            | Naudoja               | Poveikis                                                                                                                     |
| ------------------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`    | Nustačius `false`, aptikimas visiškai išjungiamas.                                                                           |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`    | Įterpimo politika: `warn`, `block` arba `log`. Ankstesnė reikšmė `redact` įterpimo teksto neperrašo.                         |
| `INJECTION_GUARD_MODE`                | `prompt-injection`    | Įterpimo apsaugos režimas; taip pat DB funkcijos vėliavėlė, kuri **perrašo** aplinkos kintamuosius (DB > ENV).               |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`    | Mažiausias griežtumo lygis, kurį `MODE=block` atmeta: `high` (numatytasis), `medium` arba `low`.                             |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`    | Ankstesnis `INPUT_SANITIZER_BLOCK_THRESHOLD` alternatyvus pavadinimas.                                                       |
| `PII_REDACTION_ENABLED`               | `pii-masker`          | Kai nustatyta `true`, užklausoje esanti asmens identifikavimo informacija užmaskuojama (nepriklausomai nuo įterpimo režimo). |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (toliau) | Valdo atsakymo pusės maskavimo priemonės veikimą.                                                                            |

„Modality Bridge“ apsaugos priemonės vykdymo konfigūraciją nuskaito iš DB pagrįstos nustatymų
saugyklos (`getSettings()`), o ne iš aplinkos kintamųjų. Pagrindiniai vaizdo apdorojimo raktai yra
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ir
`modalityBridgeCacheMaxEntries`. Ankstesni
`visionBridge*` raktai priimami tik kaip dokumentuotas vieno ciklo nuskaitymo
atsarginis variantas; valdymo skydelio įrašymo operacijos naudoja pagrindinius raktus. Numatytosios reikšmės ir atsarginio varianto
sprendiklis yra faile `src/shared/constants/modalityBridgeDefaults.ts`, o ankstesnės
konstantos paliktos faile `src/shared/constants/visionBridgeDefaults.ts`.

Garso apdorojimas naudoja `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` ir `modalityBridgeAudioMaxClips` bei bendrus
`modalityBridgeCache*` nustatymus. Garso apdorojimas neturi atsarginio ankstesnių raktų varianto, nes šie
raktai buvo įtraukti kartu su „Modality Bridge“ schema.

Vaizdo įrašų apdorojimas naudoja `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` ir
`modalityBridgeVideoTimeout` bei bendrus `modalityBridgeCache*` nustatymus.
Pagal numatytuosius nustatymus jis išjungtas, nes FFmpeg/ffprobe yra pasirenkamos operacinės
priklausomybės, o kadrų aprašų generavimas padidina delsą ir modelio naudojimo sąnaudas.

## Pasirinktinės apsaugos priemonės

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

Veiksmai:

1. Sukurkite `src/lib/guardrails/myGuardrail.ts`, išplečiantį `BaseGuardrail`.
2. Įgyvendinkite `preCall` ir (arba) `postCall`.
3. Užregistruokite importavimo metu (įtraukite per `registerDefaultGuardrails`) arba
   vykdymo metu iškvieskite `guardrailRegistry.register(...)` — registras pakeičia
   bet kurią ankstesnę apsaugos priemonę tuo pačiu normalizuotu pavadinimu.
4. Pridėkite testus aplanke `tests/unit/` (esami pavyzdžiai:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testavimas

Tarp testų naudokite `resetGuardrailsForTests()`, kad pradėtumėte nuo žinomos būsenos.
Perduokite `{ registerDefaults: false }`, kad pradėtumėte nuo tuščio registro ir
užregistruotumėte tik testuojamas apsaugos priemones. „Vision Bridge“ palaiko priklausomybių
įterpimą (`deps.getSettings`, `deps.callVisionModel`); „Audio Bridge“ suteikia
atitinkamus sąsajos taškus nustatymams, galimybėms, STT modelio pasirinkimui, prisijungimo duomenų
patikroms ir transkripcijai. Todėl testais galima patikrinti abu srautus be prieigos
prie DB ar tinklo.

## Taip pat žr.

- `src/lib/guardrails/` — įgyvendinimas
- `src/shared/utils/inputSanitizer.ts` — bendras aptikimo mechanizmas, kuriuo grindžiami
  raginimų injekcijos aptikimas ir PII maskavimas
- `src/shared/constants/visionBridgeDefaults.ts` — numatytosios „Vision Bridge“ reikšmės ir
  priverstinio tilto modelių sąrašas
- `src/shared/constants/modalityBridgeDefaults.ts` — bendrosios „Vision“ / „Audio“ vykdymo aplinkos numatytosios reikšmės
- `docs/architecture/RESILIENCE_GUIDE.md` — nepriklausomas sluoksnis (grandinės pertraukiklis, atvėsimo laikotarpiai)
- `docs/reference/ENVIRONMENT.md` — išsamus aplinkos kintamųjų žinynas

## Injekcijos apsaugos maršrutų aprėptis ir „red-team“ testavimas (8 etapas · D blokas)

Injekcijos apsauga (`createInjectionGuard` / `withInjectionGuard`) apima visus maršrutus,
kurie priima naudotojų raginimus. Ji atsižvelgia į `INJECTION_GUARD_MODE` (numatytoji reikšmė `warn` = tik registruoti žurnale;
`block` = grąžina HTTP 400 `SECURITY_001`).

| Tipas           | Maršrutai                                                                                                                                            | Numatytasis režimas |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Tekstas (esami) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Generatyviniai  | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Duomenys        | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

Teksto išskyrimas (`extractMessageContents`) apima `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**„Red-team“ testavimas (kasnakt, `nightly-llm-security.yml`):** promptfoo patikrina, ar kiekvienas maršrutas blokuoja
OWASP-LLM rinkinį, kai `INJECTION_GUARD_MODE=block`; garak vykdo zondus (praleidžiama, jei nėra slaptojo rakto).
`moderations` įtrauktas nuoseklumo sumetimais — operatoriai, naudojantys blokavimo režimą, gali jam taikyti išimtį per
`resolveDisabledGuardrails`.

Kasnakt vykdoma darbo eiga (`.github/workflows/nightly-llm-security.yml`, cron + rankinis
paleidimas) turi dvi užduotis:

- **`promptfoo-guard` (blokuojanti)** — vykdo `promptfoo eval -c promptfooconfig.yaml`
  su `INJECTION_GUARD_MODE=block`. Kiekvienu priešišku atveju (pvz., „nepaisyk visų
  ankstesnių instrukcijų…“, DAN tipo apsaugos apėjimai) patvirtinama, kad atsakyme yra
  `error.code === "SECURITY_001"`, t. y. apsauga iš tikrųjų atmetė užklausą.
- **`garak` (patariamoji)** — vykdo garak `--probes promptinject,dan,leakreplay`
  vietiniame „OmniRoute“ egzemplioriuje (`http://localhost:20128/v1`). Vykdymas priklauso nuo
  teikėjo slaptojo rakto (`PROMPTFOO_PROVIDER_KEY`); jo nesant užduotis korektiškai praleidžiama, o pabaigoje pridėta
  `|| true`, todėl rezultatai pateikiami nesukeliant CI nesėkmės.

Apsaugos pagalbinės priemonės (`createInjectionGuard` / `withInjectionGuard`)
aprėptis apima kiekvieną raginimus priimantį `/v1` maršrutą; raginimo tekstas paimamas iš
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`, naudojant
`extractMessageContents()` faile `src/shared/utils/inputSanitizer.ts`.
