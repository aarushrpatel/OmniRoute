# Guardrails (Eesti)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Tõeallikas:** `src/lib/guardrails/`
> **Viimati uuendatud:** 2026-08-29 — v3.8.51 (Video Bridge'i transkriptsiooni päritolu deklareerib kutsuja,
> server ei ole seda veel kontrollinud — täpsustatud vastavalt #11661-le)

Kaitsepiirded rakendavad ohutust, poliitikaid ja sisuteisendusi OmniRoute'i ning
ülesvoolu teenusepakkujate vahelisel piiril. Iga kaitsepiire saab kontrollida (ja
valikuliselt tagasi lükata, teisendada või annoteerida) päringu andmekogumeid (`preCall`) ja
ülesvoolu vastuseid (`postCall`).

Süsteem on **tõrke korral läbilaskev**: kui kaitsepiire tekitab käitamisel erindi, salvestab register
vea ja jätkab järgmise kaitsepiirdega, selle asemel et päring nurjata.
Blokeerimine on teadlik otsus (`block: true`), mitte kunagi juhus.

## Sisseehitatud kaitsepiirded

Register laadib importimisel prioriteetsuse järjekorras automaatselt kuus kaitsepiiret
(vt `registry.ts` → `registerDefaultGuardrails()`):

| Prioriteet | Nimi                | Etapp/etapid   | Fail                  |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Väiksema prioriteedinumbriga kaitsepiirded käivitatakse **esimesena**.

### Nägemissild (`visionBridge.ts`) — modaalsussild PR-1

Püüab kinni pilte sisaldavad päringud, mis on suunatud **nägemisvõimeta mudelitele**, ning kas
suunab kogu päringu ümber nägemisvõimelisele mudelile või asendab pildiosad
enne ülesvoolu väljakutset tekstikirjeldustega, mille loob seadistatav nägemismudel.
See võimaldab ainult teksti toetavatel pakkujatel läbipaistvalt töödelda
multimodaalseid andmeid.

Töövoog:

1. Jäta vahele, kui sihtmudel juba toetab nägemist (välja arvatud juhul, kui see on
   sundsilla loendis `isVisionBridgeForcedModel`).
2. Eralda pildiosad funktsiooniga `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), mis delegeerib töö **ühtsele meediatuvastajale**
   `detectMediaParts()` failis `open-sse/utils/mediaParts.ts` — see on
   üks ja ainus tõeallikas, mida jagatakse kombinatsioonide ühilduvusfiltriga.
   Eraldamisel kasutatakse lubatud loendit, mis sisaldab ülataseme osi kujul,
   mida `replaceImageParts` saab tagasi lisada (eraldamise↔asendamise leping): OpenAI
   `image_url`, Anthropicu base64 `source.type:"base64"`, Anthropicu URL
   `source.type:"url"` ja Responses API `input_image`. Pesastatud vasted ja
   üksnes indikaatorit sisaldavad kujud kuuluvad kombinatsioonifiltrile ega ole kunagi eraldatavad.
   Kui neid ei leita, jäta etapp vahele.
3. Lahenda käitusaegne konfiguratsioon funktsiooniga `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): uued `modalityBridge*`
   seadistusvõtmed on ülimuslikud; pärandvõtmed `visionBridge*` jäävad **ühe tsükli
   varuvariandiks** (tagasipööramisaken). Kui sild on keelatud, jäta etapp vahele enne
   igasugust meedia läbimist.
4. Režiimivalija (`modalityBridgeVisionMode`, vt allolevat tabelit) määrab,
   kas kasutada ümbersuunamist või kirjeldamist. Ümbersuunamine tagastab `modifiedPayload`,
   milles on muudetud ainult `model`, ning metaandmed `{ rerouted, fromModel, toModel, imagesKept }`.
5. Kirjeldamistee: piira piltide arv väärtusega `maxImages`, koosta ülesannet arvestav viip,
   kontrolli kirjelduste vahemälu, kutsu nägemismudel välja **paralleelselt**
   (`Promise.allSettled`) ja sisesta piltide asemele tekstiosad
   `[Image N]: <description>`. Nurjunud kirjeldamine annab tulemuseks `null` ning algne pildiosa
   **säilitatakse** (#4012) — välja arvatud kombinatsiooni kirjeldamisteel, kui kõik
   kirjeldamised nurjusid; sellisel juhul saab kinnitatult nägemisvõimeta ülesvool
   kohatäitja `(unavailable — no vision-capable provider connected)` (#8430).
6. Tagasta `modifiedPayload` koos metaandmetega (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Režiimivalija (`modalityBridgeVisionMode`)

| Režiim     | Vaikimisi | Käitumine                                                                                                                                                                                                                                                                                                               |
| ---------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔         | Pärandheuristika, muutmata (#6640/#7204): kombinatsioonivälised/`auto/` mudelid suunatakse ümber parimale nägemismudelile, välja arvatud juhul, kui algsel mudelil on juba kasutatavad identimisteabe andmed (siis kirjeldatakse); kombinatsiooni sihtmärkide puhul kirjeldatakse alati.                                |
| `describe` |           | Kirjelda alati — ümbersuunamisplokk jäetakse täielikult vahele; alati vastab kasutaja valitud mudel.                                                                                                                                                                                                                    |
| `reroute`  |           | Sunni ümbersuunamine: identimisteabega mudeli säilitamise kontrollist minnakse mööda. Ümbersuunamise **sihtmärgi** identimisteabe kontroll kehtib endiselt — kui kasutatavat nägemissihtmärki pole, jätkub päring kirjeldamisega, et töötlemata pildid ei jõuaks kunagi ainult teksti toetavasse taustsüsteemi (#8430). |

Sunnitud režiimid lõpetavad valiku **enne** automaatse heuristika käivitamist; `auto` käitumine
on baiditasemel identne PR-1-eelse kaitsepiirdega.

#### API võtme ulatus (`visionBridgeKeyScope.ts`)

Kui kutsuja API võti piirab `allowedConnections`, kvoodigruppe
(`allowedQuotas`) või mudeleid (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), valib sild ümbersuunamiseks ja
kirjeldamiseks ainult mudelid, mida võti tohib kasutada, ning ühendused, mida võti tohib
kasutada. Seejärel tehakse kirjeldamiskutse alati OmniRoute'i iseringi kaudu koos
päisega `x-omniroute-self-loop-key-id`, et vastuvõttev vestluspäring
jõustaks uuesti selle võtme ühenduse- ja mudelipoliitika. `enforceApiKeyPolicy()`
arvestab seda päist ainult koos iseringi kandjatõendiga, mistõttu saab see juurdepääsu
üksnes kitsendada, ning identifikaator, mida ei õnnestu lahendada, lükatakse tagasi.

Kui võtmele pole lubatud ühtegi nägemismudelit, astub kirjeldamistee kõrvale ja
päring edastatakse muutmata kujul — sama tõrgete korral avatuks jääv käitumine nagu keelatud
kaitsepiirde puhul (metaandmed `{ skipped: true, reason: "no_permitted_vision_model" }`).
Võtmeta päringud ja ilma nende piiranguteta võtmed käituvad täpselt nagu
varem.

#### Ülesannet arvestav kirjeldusviip (`modalityBridgeVisionTaskAware`)

Vaikimisi **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) lisab
baaskirjelduspäringule **viimase kasutajasõnumi** teksti (lühendatud 500 märgini),
suunates kirjelduse sellele, mida kasutaja tegelikult küsis
(codex-vision-proxy muster), ning palub nägemismudelil nähtava teksti
transkribeerida. Kui lipp on välja lülitatud või kasutaja tekst puudub,
kasutatakse baaspäringut muutmata kujul.

Kirjeldamise isetsükli enda OpenAI-ga ühilduv päring (`callVisionModelSingle()`
failis `visionBridgeHelpers.ts`) määrab alati `image_url.detail: "high"` —
tingimusteta iga kutsuja/pakkuja puhul ning sõltumata mis tahes kliendisignaalist.
Madala detailsusega töötlemine halvendab OCR-i täpsust just selle
tekstitranskriptsiooni ülesande puhul, mida see päring nõuab, mistõttu küsib
kirjelduspäring ise alati kõrget detailsust olenemata sellest, millist
detailsustaset algne sisendpäring kasutas. See mõjutab ainult sisemise
kirjelduspäringu keha; see ei muuda seda, kuidas OmniRoute edastab põhipäringus
kutsuja enda väärtuse `image_url.detail` — see vaikeväärtus rakendatakse eraldi
ja ainult tuvastatud OpenCode'i klientidele funktsioonis `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Kirjeldamise isetsükli
Anthropicu juhtmevormingu harul pole välja `detail` ning kumbki vaikeväärtus
seda ei mõjuta.

#### Kirjelduse väljundi piirang (`modalityBridgeVisionMaxChars`)

| Võti                           | Vaikeväärtus | Vahemik           |
| ------------------------------ | ------------ | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`          | `0` või 100–50000 |

`0` (vaikeväärtus) tähendab, et **piirangut pole** — funktsiooni
`callVisionModel()` tagastatud kirjeldus edastatakse muutmata kujul, säilitades
senise käitumise. Mis tahes väärtus vahemikus 100–50000 lühendab kirjeldust,
lisades lõppu järelliite `…`, enne kui see lisatakse tagasi kujul
`[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` failis
`src/lib/guardrails/visionBridge.ts`). Suurendage seda detailirohkete OCR-i
ülesannete puhul, kus allavoolumudel vajab täielikku transkriptsiooni;
vähendage seda, et piirata jutukate nägemismudelite tokenikasutust.
Töölaua väli asub vahekaardi Vision paneelil Advanced
(`modality-bridge-max-chars` failis `ModalityBridgeVisionTab.tsx`) ning tõstab
kõik väärtused vahemikus 1–99 miinimumini 100, jättes samal ajal sõnaselge
väärtuse `0` puutumata — `0` on iseseisvalt kehtiv Zodi väärtus
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), mitte pelgalt
„määramata” vaikeväärtus.

#### Kirjelduste vahemälu (`modalityBridge/bridgeCache.ts`)

Protsessiüleselt jagatud mälusisene LRU + TTL vahemälu kirjeldusväljundite jaoks.
Võti = `sha256(imageRef + composedPrompt + configuredBridgeModel)` koos
pikkuseprefiksiga raamimisega (väljapiiride kokkupõrkeid pole). Mudelikomponent
on **konfigureeritud** sillamudel, mitte päriselt vastanud mudel —
`callVisionModel` võib sisemiselt varumudelile üle minna ning võtmete loomine
iga katse järgi killustaks vahemälu. Nurjunud kirjeldusi ei salvestata kunagi
vahemällu. Seaded:

| Võti                            | Vaikeväärtus | Vahemik |
| ------------------------------- | ------------ | ------- |
| `modalityBridgeCacheEnabled`    | `true`       | —       |
| `modalityBridgeCacheTtlMinutes` | `60`         | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`        | 10–5000 |

#### Kaugpiltide normaliseerimine (isetsükli kirjeldus / base64-laadimine)

Kui sild laadib ise **kaugpildi** — nii Anthropicu kirjelduse isekutse kui ka
claude-wire-format base64-teisenduse
(`ensureBase64ImagesForClaudeWire`) puhul, mõlemad funktsiooni
`fetchRemoteImageAsDataUri()` kaudu failis `visionBridgeHelpers.ts` — edastatakse
saadud andme-URI enne nägemismudeli päringusse manustamist funktsioonile
`normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`). Liiga suured pildid
vähendatakse **2048px pika servani** (vastates suurusepiirangule, mida
OpenAI/Anthropic juba serveri poolel rakendavad), mis vähendab üleslaaditavate
baitide hulka ja latentsust, muutmata seda, mida nägemismudel näeb. Suuruse
muutmiseks kasutatakse paketti `sharp`, mis laaditakse dünaamilise impordiga:
platvormil, kus selle omabinaarfaili laadimine nurjub, ei tekita
`normalizeDataUri()` **kunagi erindit** — see kasutab varuvariandina algsete
baitide muutmata edastamist, nii et kirjeldamise/base64-teisenduse tee töötab
alati edasi. Ka mittepildilised baidid (laadimine, mis ei tagastanud
dekodeeritavat pilti) edastatakse muutmata kujul. See normaliseerimine piirdub
piltidega, mille sild laadib oma isekutse jaoks — seda ei rakendata kunagi
kutsuja muutmata edastatavale toorkoormusele, järgides ainult sõnaselgel
lubamisel muutmise põhimõtet (range reegel nr 20).

#### Seadete skeem + migratsioon

Uued võtmed `modalityBridge*` valideeritakse Zodiga skeemis
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
kolmik `modalityBridgeCache*` ja Audio Bridge'i kasutatav rühm
`modalityBridgeAudio*`. Migratsioon `141_modality_bridge_settings.sql`
kopeerib olemasolevad pärandväärtused `visionBridge*` vastavatesse uutesse
võtmetesse (idempotentselt, kirjutamata kunagi üle operaatori määratud
`modalityBridge*` väärtust); pärandvõtmeid aktsepteeritakse ühe
väljalasketsükli jooksul lugemise varuvariandina.

#### Läbipaistvuspäis + statistika

Kirjeldamise teel teisendatud vastused sisaldavad päist
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(mille koostab `buildModalityBridgeHeader()` failis
`modalityBridge/bridgeStats.ts` ja lisab `withModalityBridgeHeader()` failis
`src/sse/handlers/chatHelpers.ts`). Ümber suunatud päringud **ei saa** päist —
koormust ei muudetud ning mudeli vahetus on juba nähtav vastuse keha väljal
`model`.

`GET /api/modality-bridge/stats` (halduse autentimine, sama tase nagu
`GET /api/settings`) tagastab mälus hoitavad modaalsuspõhised loendurid
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` modaalsuste `vision`, `audio` ja
`video` jaoks. `averageLatencyMs` kasutab nimetajana väärtust `latencySamples`,
mitte kõiki katseid; ajamõõtmiseta toimingu korral ei tekitata kunstlikult
nullmillisekundilist näidist. `bridged` jääb edukate teisenduste tagasiühilduvaks
aliaseks; nurjunud katsed seda ei suurenda.
Loendurid lähtestatakse protsessi taaskäivitamisel taotluslikult
(telemeetria, mitte arvepidamine).

#### Töölaua konfiguratsioon

Eraldi töölaualeht asub aadressil
`/dashboard/settings/modality-bridge`. Selle URL-i kaudu avatavad vahekaardid `Vision`, `Audio`
ja `Video` säilitavad vahetamisel päringuparameetrid, muutes üksnes väärtust `tab`.
Vahekaart Vision võimaldab hallata lubamist, režiimi, mudeli valikut (sealhulgas automaatset
vaikevalikut), ülesandeteadlikku viiba koostamist, täpsemaid ajalõpu-, pildi-, kirjelduse pikkuse ja vahemälu
piiranguid, käitusaja
loendureid ning kaitstud näidispäringut. Ka vahekaart Audio on toimiv: see võimaldab
hallata lubamist, ainult STT-mudelite valikut koos suvandiga Auto, ajalõpu ja klipi maksimaalse pikkuse piiranguid, heli
loendureid ning `input_audio` näidistesti. Vahekaart Video on funktsionaalne: see kuvab
FFmpeg-i/ffprobe'i käitusaja oleku — ühe neljast konkreetsest kasutajaliidese olekust (`unknown`, kui
kontroll on pooleli või seda ei saanud lõpule viia, `restricted` mitte-tagasisidestusaadressiga
töölauahostis, kus kontroll jäetakse kliendi poolel vahele, `unavailable`, kui kontroll on tehtud
ja puudumine kinnitatud, või `available` koos FFmpeg-i/ffprobe'i versioonidega) — salvestab
lubamise, mudeli, kaadri-, video- ja ajalõpupiirangud, filtreerib mudelivalija nägemisvõimega
mudelitele ning kuvab video loendurid.

Varasem Vision Bridge'i kaart AI seadete all on ühilduvuslink
uuele lehele; see ei halda enam vormi teist koopiat. Media Providers lisab ka
Image-to-Texti ja Speech-to-Texti töövoogude lingid vastavatele Modality
Bridge'i vahekaartidele, eemaldamata olemasolevat Speech-to-Texti katsekeskkonda.

**Isetsükli vastuvõtukontrollist möödumine:** kui kirjelduspäring suunatakse OmniRoute'i
enda `/v1` isetsükli kaudu (mittestandardse teenusepakkuja mudel), saadab alampäring
`x-omniroute-admission-bypass: internal` ja autenditakse lahendatud
isetsükli mandaadiga — kohalikus režiimis kohaliku `sk_omniroute` sentinelväärtusega või
operaatori seadistatud keskkonnavõtmega `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), et
`REQUIRE_API_KEY=true` juurutused saaksid endiselt kirjelduspäringut käitada. Möödumist
lubatakse ainult nende täpsete mandaatide korral, mistõttu välised kliendid ei saa seda
päist vastuvõtukontrolli vahelejätmiseks kasutada.

Pärandvaikeväärtused asuvad failis `src/shared/constants/visionBridgeDefaults.ts`;
uued režiimi, ülesandeteadlikkuse ja vahemälu vaikeväärtused ning seadete lahendaja asuvad failis
`src/shared/constants/modalityBridgeDefaults.ts`. Kaitsemehhanism pakub
konstruktori suvandit `deps`, et testid saaksid sisestada võltsitud `getSettings`-i ja
`callVisionModel`-i teostused.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Püüab heli sisaldavad vestluspäringud kinni enne, kui need jõuavad sihtkohta, mille kohta
pole teada, et see toetaks helisisendit. See ei suuna vestluspäringut kunagi ümber: heliosad
transkribeeritakse olemasoleva OpenAI-ga ühilduva mitmeosalise otspunkti kaudu ning
valitud vestlusmudel jätkab tekstitranskriptsioonidega.

Voog:

1. Lahenda `supportsAudio` funktsiooni `getResolvedModelCapabilities()` kaudu. Selgesõnalised
   teenusepakkuja registri metaandmed on prioriteetsed, seejärel staatilised mudeli metaandmed ja lõpuks sünkroonitud
   `modalities_input`. Deklareeritud sisendloend ilma väärtuseta `audio` annab tulemuseks `false`; kui
   võimekuse kohta tõendid puuduvad, jääb tulemuseks `null`. Nii `false` kui ka `null` aktiveerivad
   konservatiivse silla, `true` aga möödub sellest.
2. Lahenda seaded `modalityBridgeAudio*` ja eralda jagatavad tipptaseme
   heliosad igast sõnumist jagatud tuvastaja `detectMediaParts()` abil.
   Toetatud edastusvormingud on OpenAI `input_audio`, `audio_url` ja
   `source.media_type: "audio/*"`. Pesastatud heli tuvastatakse marsruutimiseks, kuid
   jagamistee seda ei eemalda. Tööd piirab `modalityBridgeAudioMaxClips`;
   hilisemad osad jäetakse muutmata.
3. Kasuta seadistatud väärtust `provider/model` või lase funktsioonil `selectAudioBridgeModel()` läbida
   `AUDIO_TRANSCRIPTION_PROVIDERS` stabiilses kataloogijärjestuses ja valida esimene
   mudel, millel on kasutatav aktiivse teenusepakkuja mandaat.
4. `callAudioTranscription()` teisendab base64-/andme-URI-heli mitmeosaliseks
   väljaks `file` või laadib kaugressursi `audio_url` alla ainult avalikke aadresse lubava väljamineva
   liikluse kaitsemehhanismi kaudu, kasutades DNS-i sidumist ja 25 MB ülempiiri. Seejärel saadab see POST-päringuga faili ja valitud
   mudeli kohalikku `/v1/audio/transcriptions` isetsüklisse, autentides funktsiooniga
   `resolveSelfLoopBearer()`. Olemasolev transkriptsioonimarsruut teostab tavapärase
   mandaadiotsingu, jahtumisaja/kiiruspiirangu käsitluse ja teenusepakkujale suunamise.
5. Edukad päringud asendavad vastavad osad tekstiga `[Audio N]: <transcript>`. Päringuid
   käitatakse funktsiooniga `Promise.allSettled`: üksiku päringu nurjumisel säilitatakse algne
   heliosa (#4012 leping). Kui kõik päringud nurjuvad ja on tõendatud, et sihtkoha
   `supportsAudio === false`, asendatakse osad tekstiga
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 leping). Tundmatu
   sihtkoha (`null`) korral jääb kõikide päringute nurjumisel sisu muutmata. Tõendatult
   ainult teksti toetav sihtkoht, millel puudub kasutatav STT-mandaat, saab sama sõnaselge
   asendusteksti ilma võrgupäringuta.

Edukad transkriptsioonid kasutavad kogu protsessi hõlmavat Modality Bridge'i LRU-/TTL-vahemälu. Võti
ühendab heliviite, stabiilse toimingusildi `audio-transcription`
ja valitud STT-mudeli; nurjumisi ei salvestata kunagi vahemällu. Helikatsed uuendavad
jagatud loendureid `bridged`, `cacheHits`, `failures` ja `lastUsedAt`.
Teisendatud vastused sisaldavad
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; muutmata
päringutele Audio Bridge'i segmenti ei lisata.

Käitusaegsed seaded on andmebaasipõhised ja Zodiga valideeritud:

| Võti                          | Vaikeväärtus | Vahemik               |
| ----------------------------- | ------------ | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`       | —                     |
| `modalityBridgeAudioModel`    | `""`         | Automaatne või STT ID |
| `modalityBridgeAudioTimeout`  | `60000`      | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`          | 1–10                  |

Ühise vahemälu juhtimiseks kasutatakse endiselt sätteid `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` ja `modalityBridgeCacheMaxEntries`.

### Videosild (`videoBridge.ts`, `videoBridgePipeline.ts`)

Püüab Chat Completionsi `messages`-kirjetes ja Responses API `input`-sisendis
ülemtaseme videoosad kinni enne sihtmudeli väljakutsumist, millel teadaolevalt
puudub video loomulik tugi. Toetatud vormingud on `input_video`, `video_url`,
`video_source`, HTTPS-i URL-id ja `data:video/*;base64,...`-andme-URI-d. Tekstis
olevaid lihtsaid failinimesid ei käsitleta videotena.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) haldab päringu läbimist,
võimekuse ja reeglistiku kontrolli, päringupõhist koondamist ning vastuse
andmekoormust. Iga video töötlemine — hankimine, terviktulemuse vahemälu,
kaadrijada kirjeldamine (mis ühendab mis tahes kutsuja deklareeritud
helitranskriptsiooni) ning katsepõhised mõõdikud, katkestamine ja puhastamine —
on peidetud funktsiooni `processVideoPart` taha failis
`videoBridgePipeline.ts`; seda kutsutakse `preCall`-i tsüklis üks kord iga
videoosa kohta. See moodul määratleb ka selged pordipiirid
`VideoMediaBrokerPort` (baitide hankimine ja valimisse kuuluvate kaadrite
eraldamine), `VideoAudioTranscriptionPort` (kutsuja deklareeritud
helitranskriptsiooni ühendamine valimisse kuuluvate kaadrite pealdistega) ja
`VideoDrilldownPort` (kaadrite süvaanalüüsi püsivuspiir; pole veel funktsiooniga
`processVideoPart` ühendatud — praegu kirjutab süvaanalüüsi kirjeid ainult
eraldi marsruut `/api/modality-bridge/video/drilldown`).

Avalik `/v1` päringutee ei impordi ega käivita kunagi alamprotsessi. Kaugvideod
laaditakse alla 50 MiB piiranguga; tekstisiseselt kodeeritud base64-videotele
kehtib konservatiivne dekodeeritud mahu ülempiir 36 MiB video kohta, et
mudeli, sõnumite ja raaminduse ümbris jääks avalike JSON-päringute 50 MiB
vastuvõtupiirangu sisse. Tekstisisest pikkust ja dekodeeritud mahu hinnanguid
kontrollitakse enne mälu eraldamist. HTTPS on nõutav nii esialgse kaug-URL-i
kui ka iga ümbersuunamise puhul, kasutades olemasolevat ainult avalikke
sihtkohti lubavat väljamineva liikluse kaitset koos DNS-i kinnistamisega.
Seejärel ületavad baidid täpselt sisemise maakleri piiri
`POST /api/modality-bridge/video/extract`. See marsruut on nii `LOCAL_ONLY` kui
ka `SPAWN_CAPABLE`, aktsepteerib ainult protsessipõhiselt autenditud ja
usaldusväärselt tagasisilmusaadressilt pärinevat päringut ega aktsepteeri kunagi
URL-i, failisüsteemi rada, täitmisfaili ega argumentide loendit. API päringukeha
mahu töötlemisahel ja töötleja järkjärguline päringukeha lugeja jõustavad
teineteisest sõltumatult maakleri sisendile 50 MiB piirangu. Selle piiratud
järjekord töötleb korraga üht eraldust, lubab nelja ootel tööd ja piirab ootel
sisendi kogumahu 100 MiB-ni.

Maakleri sees loeb `ffprobe` privaatset kohalikku faili; fikseeritud vormingute
lubatud loend välistab esitusloendi- ja manifestivormingud. Lubatud MOV-perekonna
konteinerite puhul jäävad välised MOV-andmeviited vaikimisi keelatuks ning
fikseeritud käsk ei luba neid. Nii `ffprobe` kui ka `ffmpeg` kasutavad ainult
`file`-protokolli lubatud loendit, üht lõime, fikseeritud argumentide massiive,
ei kasuta kesta ning nende täitmisfailid leitakse keskkonnamuutuja `PATH` kaudu.
Manustatud kaanepildi vood ei ole esitatavad kandidaadid. Kõik esitatavad vood
peavad piirangutele vastama ning enne deterministlikku väikseima indeksiga
varuvalikut eelistatakse selgesõnaliselt määratud vaikevoogu. Videod on piiratud
600 sekundiga, 8 192 piksliga mõõtme kohta ja 33 554 432 lähtepiksliga. FFmpeg
võtab 1–16 keskpunkti JPEG-kaadrist koosneva valimi, vähendab pikema serva
suurust kuni 1 024 pikslini ilma väiksemaid sisendeid suurendamata ega saa
kunagi sisendiks URL-i. Vaikimisi on valimimeetod `uniform`. Valikulised
`scene_aware` ja eksperimentaalne `segment_aware` reeglistik teevad juba
valideeritud kohalikule voole ühe täiendava fikseeritud FFmpegi läbimise,
valivad piiratud arvu `showinfo` stseeniajatempleid ning detektori tõrke,
ajalõpu, vigase väljundi või tühja kandidaatide hulga korral kasutavad
deterministlikult samu ühtlasi keskpunkte. Segmenditeadlik režiim jaotab
keskpunktivalimid proportsionaalselt valideeritud stseenivahemikele;
segmenditeadlikku tõendusmaterjali ja varuvaliku käitumist kirjeldatakse
üksikasjalikult allpool. Pärast valimist rakendatakse kõigi reeglistike puhul
ranget 16 kaadri piirangut. Kui stseeniteadliku päringu eelarve on ainult üks
kaader, kasutatakse aktiivse täisvideo või fookusakna ühtlast keskpunkti ja
esitatakse `policyEffective: uniform`: üks valitud stseenikaader ei saa säilitada
ajalise vahemiku mõlemat otsa. Kutsuja võib soovi korral määrata lõpliku
fookusakna (`start`/`end` sekundites); piirid kärbitakse meediumi kestuse järgi,
ümberpööratud või mittelõplikud aknad lükatakse tagasi ning kõigi
valimireeglistike toimingud tehakse ainult normaliseeritud vahemikus. Saadud
aken lisatakse valimite metaandmetesse ja ebausaldusväärse kirjelduse prefiksisse,
et allavoolu mudelid saaksid eristada fookustatud katkendit tervest ajajoonest.

Semantiline pealdiste fookus on eraldiseisev ja selgesõnaline säte. Vaikimisi
kasutatav `full` analüüsirežiim säilitab olemasoleva kaadriviiba ega edasta
kunagi päringu teksti pealdisemudelile. Režiimis `focused` loeb sild ainult
sama Chati või Responsesi konteineri uusimat mittetühja kasutaja loodud
`text`/`input_text`-sisu, normaliseerib selle NFC-vormingusse, koondab
juhtmärgid ja tühimärgid ning piirab sisu 500 Unicode'i koodipunktiga. Tühi
tulemus põhjustab naasmise täpselt `full`-viiba juurde. Kasutatav vihje
serialiseeritakse JSON-ina spetsiaalses ebausaldusväärse kasutajakonteksti
plokis ja see võib ainult vaadeldavaid üksikasju prioriseerida; see ei saa
tühistada eraldi hoiatust meediumis nähtavate või kuuldavate juhiste
mittejärgimise kohta. Tekstiline fookus ei tuleta kunagi väärtusi `start`/`end`
ega muuda ajalist valimivõtjat.

#### FU-07 struktuurne segmenditõendusmaterjal

`segment_aware` kasutab juba valideeritud kohaliku videovoo jaoks üht piiratud eelanalüüsikäiku. Fikseeritud filtriahel skaleerib video esmalt kuni 320 piksli laiuseks, tuvastab stseenivahetused ja külmunud intervallid ning võtab seejärel hägususe, keskmise heleduse ning ruumilise/ajalise teabe analüüsimiseks ühe kaadri sekundis. Käik on piiratud 600 struktuuriproovi, ühe FFmpeg-i/filtri lõime, samade ainult `file`-protokolli ja konteinerite lubatud loendite, 1 MiB protsessiväljundi piirangu ning maksimaalselt 30 sekundiga vahendaja ühise katkestamise/tähtaja sees. See ei aktsepteeri päringust kunagi käsku, filtrit, teed ega URL-i.

Struktuuriväärtused on deterministlikud valimiandmed, mitte video semantiline mõistmine. Nende põhjal ei järeldata subjekte, tegevusi, subtiitreid, kõnet ega kasutaja kavatsust. Stseeni- ja külmumispiirid moodustavad segmendid; külmumise osakaal, hägusus, säritus, ruumiline detailsus ja ajaline muutus mõjutavad ainult seda, kuidas olemasolev 1–16 kaadri eelarve jaotatakse. Täielikult külmunud segmendi ülempiir on üks kaader, samas kui külmumata segmendid konkureerivad ülejäänud eelarve pärast. Kui piire on rohkem kui kaadreid, säilitatakse ajajoonel ühtlane katvus, et varased kiired lõiked ei saaks pikka lõppsegmenti varjata. Stseenipiirid, mis jäävad külmumispiirist eelanalüüsi 1-sekundilise lahutusvõime piiresse, liidetakse.

Puuduvad filtrid, vigased või tühjad andmed, detektori viga või piiratud eelanalüüsi ajalõpp rakendavad täpselt ühtlaste keskpunktide varupoliitika. Helistaja katkestus või vahendaja tähtaeg ei rakenda varupoliitikat: see lõpetab poolelioleva alamprotsessi, takistab hilisemat kaadrite eraldamist ning privaatne ajutine puu eemaldatakse plokis `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genereerib deterministlikud päris FFmpeg-i katseandmed deduplitseerimisjärgse subtiitrikutsete säästu, tiheda liikumise eelarvejaotuse, hägususe/särituse/SI-TI andmete, pika lõpuosaga kiirete lõigete ja järkjärgulise hajumise valepositiivsete tulemuste jaoks. See salvestab eelanalüüsi tegeliku kestuse ning kohtades, kus `/usr/bin/time` on saadaval, alamprotsessi protsessoriaja ja RSS-i tippväärtuse. Selle kvaliteedikontrollid on ainult struktuursed oraaklid. Päris subtiitrimudeli kvaliteedi olekuks jääb `HOLD`, sest sellel testiraamistikul pole volitatud lõpp-punkti ega fikseeritud hindajat. Rahaline sääst jääb samuti olekusse `HOLD`, välja arvatud juhul, kui `--caption-cost-per-call-usd` annab selgesõnalise positiivse hinnangu ühe kutse maksumuse kohta; skript ei fabritseeri kumbagi tulemust.

Iga kaadri piirang on 4 MiB, kõigi töötlemata kaadrite ühine piirang 23 MiB ja serialiseeritud vahendaja vastuse piirang 32 MiB. Privaatne ajutine kataloog eemaldatakse plokis `finally`. OmniRoute ei sisalda FFmpeg-i ega aktsepteeri kohandatud täitmisfaili teed. Enne subtiitrite loomist rakendab vahenduskiht konservatiivset visuaalset deduplitseerimist: iga JPEG vähendatakse 16×16 hallskaala puhvriks ja seda võrreldakse ainult viimase säilitatud kaadriga. Kui taotletud subtiitrieelarve on üle ühe kaadri, annab eraldamine piiratud kandidaatide kogumi, mille suurus on kuni kahekordne eelarve, kuid mitte kunagi rohkem kui 16 kaadrit. Taotletud ülempiiri rakendatakse alles pärast deduplitseerimist, kusjuures vähemalt kahe kaadri suuruse eelarve korral säilitatakse lõpliku harvendamise käigus esimene ja viimane valitud kandidaat. Versioonitud
`grayscale-16x16-mean-cells-v2` poliitika kasutab suuremat väärtust keskmise heleduse erinevusest ja nende pisipildi lahtrite suhtarvust, mille normaliseeritud erinevus on vähemalt 0,05. Duplikaadilävi on konstant 0,04, mis on valitud prognoositavuse huvides, mitte käitusaegse sättena avaldamiseks. See teisene suure kontrastsusega signaal säilitab väikese liikumise ja nähtava teksti muudatused, mida ainult keskmisel põhinev võrdlus võib varjata. Võrdleja või dekoodri vigade korral rakendatakse katvust säilitavat varukäitumist. Väljundi metaandmed eristavad eraldatud kandidaate, edukalt kasutatud kaadreid ja eemaldatud visuaalseid duplikaate.

Selgesõnaliselt videoks märgitud osa võib taotleda ajatemplitega kontaktlehte. Vahenduskiht loob maksimaalselt 4 veeru ja 16 kaadriga JPEG-ruudustiku. Iga 512-piksline lahter kannab oma lähteajatemplit suure kontrastsusega alumisel ribal, samad ajatemplid säilivad aga tekstilistes metaandmetes järgnevaks seostamiseks ja auditeerimiseks. Tervikliku JPEG-i piiranguks jääb 32 MiB. Kui `sharp` ei suuda ruudustikku dekodeerida või koostada, naaseb vahenduskiht üksikute JPEG-kaadrite kasutamise juurde; kliendi katkestus levib siiski läbi kontaktlehe toimingu.

Edutamise tõendusmaterjal hoitakse sünteetilisest koostamise mikrojõudlustestist teadlikult lahus. `scripts/perf/video-bridge-contact-sheet-eval.ts` määratleb skeemiversiooniga A/B-testiraamistiku päris OpenAI-ga ühilduvate nägemismudelite jaoks. See mõõdab teenusepakkuja teatatud tokenite arvu, täielikku tegelikku latentsust koos kontaktlehe koostamisega, mudelikutsete arvu ja manifestis määratletud faktide säilimist. Mudeli toorvastuseid aruandesse ei kirjutata; säilitatakse ainult SHA-256 räsid ja sobitatud faktide ID-d. Testiraamistik ei tee võrgu- ega tasulist mudelikutset, välja arvatud juhul, kui edastatakse `--execute-real` ning `--model`, `OMNIROUTE_BASE_URL` ja `OMNIROUTE_API_KEY` on seadistatud. Ilma sellise selgesõnalise päriskäivituseta jääb selle masinloetav otsus olekusse `HOLD`; sünteetiliste andmemahtude või kutsete arvu mõõtmised üksi ei ole edutamise tõendusmaterjal.

Helistajad võivad toetatud videoosale lisada valikulise `transcript.cues` massiivi, kui neil on juba olemas ajaliselt joondatud tekst. Iga vihje peab sisaldama välja `text`, lõplikku `start`/`end` intervalli sondeeritud kestuse sees ja lubatud loendisse kuuluvat välja `source` (`client`, `embedded` või `audio-bridge`); välja `confidence` vaikeväärtus on `1` ja see peab jääma vahemikku `0` kuni `1`. Täpsed duplikaatvihjed liidetakse. OmniRoute ei käivita nende metaandmete põhjal kunagi transkriptsiooni: valideeritud vihjed kopeeritakse kirjeldatud tulemusse koos allika, usaldusväärsuse ja intervalliga ning esitatakse kaadrisubtiitrite kõrval ebausaldusväärsete vaatlustena. Vigane, vahemikust väljas või päritoluta tekst lükatakse tagasi, selle asemel et see subtiitrivoogu segada. Väli `source` on praegu helistaja deklareeritud, mitte serveri kontrollitud: OmniRoute jõustab, et väärtus oleks üks kolmest lubatud stringist, kuid ei kinnita veel krüptograafiliselt, et silt `embedded` või `audio-bridge` pärines tegelikult serveri hallatavast eraldamisest. Käsitlege välja `source` ebausaldusväärse vihjena, kuni selline kontroll on kasutusele võetud; ärge rajage sellele autoriseerimisotsuseid.

Kogenud väljakutsuja võib sama video jaoks esitada juba volitatud `audioTranscript`-raja. Ühenduskoht töötleb visuaalseid ja heli vaatlusi sama tähtaja ning katkestussignaali alusel, järjestab need ühisel ajajoonel, koondab täpsed duplikaadid ja tagastab osalise tulemuse, kui õnnestub ainult üks haru. Vigane `audioTranscript` taandub samuti osaliseks tulemuseks — visuaalne kirjeldus säilitatakse ja heliharu salvestab puhastatud tõrkekoodi — selle asemel, et kogu video töötlemine nurjuks. Harupõhine saadavus, osalisuse lipp ja puhastatud tõrkekoodid säilitatakse kirjeldatud tulemuses, kaitsepiirete metaandmetes (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), tulemuse vahemälu metaandmetes ja silla ühendamisloendurites. Video Bridge'i vaiketee ei käivita kõne tekstiks teisendamist ega laadi alla teist meediakoopiat; ilma selle selgesõnaliselt esitatud rajata töötab see endiselt ainult videoga.

**Transkriptsiooni säilitamine (#12150 P1).** See rakendub automaatselt alati, kui Video Bridge (mis ise on vabatahtlikult lubatav) renderdab transkriptsioonivihje — eraldi säilituslippu ei ole. Kui päring renderdab mis tahes transkriptsioonivihje (väljakutsuja deklareeritud `transcript` või ühendatud `audioTranscript`), märgistab kaitsepiire selle kui `videoBridgeObserved` ja loob videokirjelduse redigeeritud varikoopia — identse renderduse, milles iga vihje vabatekstiline sisu asendatakse tekstiga `[redacted-video-transcript]`; see luuakse struktureeritud vihjevälja asendamisega enne stringi koostamist (mitte kunagi lamendatud teksti sõelumisega, mistõttu ei saa säilida ükski vihje sisu — ei ründav ega tavapärane, sealhulgas märki `]` sisaldavad sisud, nagu `[inaudible]`/`[music]`). Püsivasse kõnelogisse salvestatud päringu keha vahetab iga videost tuletatud tekstiosa selle redigeeritud varikoopia vastu, sobitades sisu võrdsuse alusel; ankur `fullText` loetakse uuesti lõpetatud kõne-eelse kaitsepiirde kasulikust lastist, mistõttu õnnestub sobitamine ka pärast seda, kui ahela hilisemad kaitsepiirded (PII ja mandaadi maskijad prioriteetidega 10/95) on kirjeldusteksti kohapeal ümber kirjutanud ning süsteemiviiba, üleandmise või mälu sisestamine on sõnumimassiivi ümber kujundanud. Mudelile ülesvoolu saadetav keha jääb muutmata. Vaadeldud päring ei täida ka püsivat mälu Memory (nii päringust kui ka vastusest tuletatud ekstraheerimine jäetakse vahele), mistõttu ei saa mudeli enda vastus transkriptsiooni teksti Memorysse tagasi kajastada.

**Video toorväljad (#12430).** Kui sild on lubatud ning video loomulik tugi pole teada või puudub, aktiveerivad määratletud väljad `transcript`/`audioTranscript` samuti `videoBridgeObserved`, isegi pärast kirjelduse loomise nurjumist või `maxVideos`-piirangu rakendumist. `null` ja tühjad stringid lähevad arvesse; puuduvad väljad ja videoga mitteseotud metaandmed mitte. Säilitatavates koopiates redigeeritakse neid välju või jäetakse päring välja ning vahemäludest ja Memoryst minnakse mööda. Teenusepakkuja kasulik last jääb muutmata.

Täiendavad säilitatavad koopiad kasutavad sama vaadeldud päringu signaali. Kaitsepiirde-eelne töötlemata kliendipäringu hetktõmmis, mälus olev ootel päring ja varakult tagasilükatud päringu logi asendavad videote osades olevad transkriptsiooniväljad struktuurselt; konveieri etappide ja konteksti üleandmise loodud stringiviibad redigeeritakse püsiva päringukeha väljundpunktis. Püsiv marker `video_content_removed` tagab, et `previous_response_id` jätkamine nurjub turvaliselt, selle asemel et tahtlikult eemaldatud teksti rekonstrueerida. Kui vaadeldud päring kaotab enne logimist oma osapõhise redigeerimise varikoopia või kui pärast päringu hilisemaid muudatusi ei õnnestu sobitada kasvõi üht mitmest video varikoopiast, jäetakse säilitatav päringukeha täielikult välja, selle asemel et säilitada osaliselt redigeeritud transkriptsioon.

Vaadeldud päringu korral võib mudeli vastus tsiteerida transkriptsiooni mis tahes osa ilma struktureeritud vihjepiirita. Seetõttu asendatakse selle püsivasse kõnelogisse salvestatud `responseBody` väljajätmist tähistava markeriga; üksikasjalikku konveieri artefakti (mis võib sisaldada ülesvoolu- ja kliendikehi ning voo fragmente) ei säilitata. Semantilise, idempotentsuse ja arutluse taasesituse vahemälude lugemistest ning kirjutamistest minnakse selle päringu puhul mööda. Teenusepakkuja päring ja kliendile nähtav vastus jäävad muutmata. Varajased keepalive-baidid eemaldatakse ajutisest puhvrist, kui üksikasjalik artefakt välja jäetakse. Kiro vigase EventStreami hoiatus esitab ainult kasuliku lasti baitide arvu, mitte kunagi selle sisu ega JSON-parseri töötlemata tõrget.
See ei väida, et kõiki muid teenusepakkuja või plugina diagnostikasõnumeid oleks auditeeritud; säilitatavate väljundpunktide laiem kontroll on jälgimisel ülesandes #11658.

Sisemine elutsükkel `/api/modality-bridge/video/drilldown` on eraldiseisev, loopbacki/tokeniga autenditud vahemälu alamsüsteem. Iga toiming nõuab ka kanoonilist läbipaistmatut subjekti ID-d. Enne tootmiskeskkonna väljakutsuja lubamist peab see tuletama ID autenditud rentnikust ega tohi kunagi edastada kliendi valitud väärtust. Vahemälu võtmed seovad selle subjekti kanooniliste seansi- ja videoviite ID-dega, talletavad ainult nende SHA-256 põhjal tuletatud võtmed ning piiravad nii lugemise kui ka kustutamise sama subjektiga. Vahemälu talletab iga kirje kohta kuni 16 tuletatud JPEG-kaadrit, aegub need kümne minuti pärast ning toetab piiratud `start`/`end`-lugemisi või seansi selgesõnalist kustutamist.

Iga subjekt on piiratud 16 kirje ja 64 MiB kanooniliste JPEG-andmetega. Need piirangud ei sõltu globaalsest 64 kirje / 256 MiB ülempiirist: subjekti kvoodisurve tõrjub esmalt välja ainult selle subjekti kõige kauem kasutamata kirjed ning alles seejärel kaalutakse globaalset LRU-väljatõrjumist. Aegunud kirjed eemaldatakse vahemälu kasutamisel nii subjekti kui ka globaalsest arvestusest, samas kui tühistamise või valideerimise nurjumise korral ei kinnitata osalist asendust.

Vahemälu lükkab tagasi mittekanoonilise Base64-kodeeringu, liigse täidise, mitte-JPEG-meediumi, vigased või
kärbitud JPEG-failid ning JPEG-failid, mis annavad piiratud täispildi `sharp`-dekodeerimise
ajal hoiatuse. Iga aktsepteeritud pilt kodeeritakse uuesti kanooniliseks JPEG-failiks, laius ja kõrgus
tuletatakse dekodeeritud baitidest, mitte ei usaldata kutsuja välju, ning kõik lõpus olevad
polüglottbaidid jäetakse säilitamise asemel kõrvale. Mõlema kvoodi arvestusse läheb ainult piiratud
kanooniline tihendatud puhver. JSON-i edastuslimiit sisaldab Base64 lisakulu 32 MiB
dekodeeritud sisendi ülempiiri jaoks. Iga
salvestatud tuletis talletab oma valideeritud JPEG-vormingu/eraldusvõime, diskreetimispoliitika,
tuletise versiooni, loomise aja, serveri arvutatud sisuräsi ja räsitud emaviite
koos usaldatud kutsuja edastatud emasisu räsiga. Tühistamist kontrollitakse
asünkroonsete dekodeerimis-/räsifaaside vahel enne atomaarset vahemällu salvestamist.

See etapp ei ühenda veel marsruudiga tootmiskeskkonna andmetootjat ega
paku mitme eraldusvõimega variantide valikut. Video Bridge'i läbipaistev päringutee
ei põhjusta seetõttu lisatööd, samas kui rentnikuga seotud printsipaali tuletamine ja
FU-08 täielik mitme eraldusvõimega elutsükkel jäävad selgesõnaliselt järeltöödeks,
mitte ei ole dokumenteeritud valmis funktsionaalsusena.

Kaadritele luuakse seadistatud videomudeliga järjestikku pealdised. Tühi
Video ülekirjutus pärib Visioni sätte; kui mõlemad on tühjad, valib Visioni
automaatruuter sobiva nägemisvõimega mudeli. Õnnestunud pealdised
asendavad algse osa stabiilse prefiksiga `[Video description:`, mis märgib
teksti ka ebausaldusväärseks meediumist tuletatud tähelepanekuks ja käsib järgmistel
mudelitel meediumist leitud juhiseid mitte järgida. Kaadripealdiste vahemäluvõtmed
sisaldavad JPEG-baite, viipa, ajatemplit ja tegelikult kasutatavat mudelit; vahemällu
salvestatakse ainult õnnestunud pealdised. Vahemälukirjed säilitavad tegeliku eduka tootjamudeli,
sealhulgas varumudeli; sild teatab väärtuse `mixed`, kui eri kaadrid
on loonud eri mudelid. Vahemälutabamus kasutab seda tootjaidentiteeti uuesti,
selle asemel et seda soovitud marsruutimisplaanina ümber sildistada. Kogu video tulemuse
vahemälu võti põhineb igal väljundit muutval sisendil — viibal, tegelikult kasutataval
mudelil, diskreetimispoliitikal, kaadrite arvul, semantilise analüüsi režiimil, normaliseeritud
fookusevihje SHA-256-sõrmejäljel, fookusaknal, väärtustel `transcript`,
`audioTranscript` ja kontaktlehe lipul — seega põhjustab nende mõõtmete
mis tahes muutmine vahemälust möödalaskmise, mitte aegunud tulemuse taaskasutamise. Visuaalse
duplikaadieemalduse poliitika versioon, lävi ja piiratud kandidaatkaadrite arv on samuti tulemuse
vahemälu võtmes ja metaandmetes selgesõnaliselt määratud; poliitika muudatus ei saa seetõttu
aegunud kogu video kirjeldust uuesti kasutada. Tulemusevahemälu v4 metaandmed säilitavad režiimi ja
sõrmejälje, kuid mitte kunagi kasutaja töötlemata ülesannet. Kaitsepiirete metaandmed esitavad nii
taotletud kui ka tegelikult kasutatava analüüsirežiimi; taotletud `focused`-režiimist, millel puudub
kasutatav kasutajatekst, teatatakse tegelikult `full`-režiimina.

Kaitsepiire eraldab kõik toetatud videoosad, kuid kirjeldab neist kõige rohkem
`modalityBridgeVideoMaxVideos` jagu. Sihtmärgi puhul, mille kohta on tõestatud, et
`supportsVideo === false`, teisendatakse nurjunud ja limiiti ületavad videod sõnaselgeteks ohututeks
tekstmarkeriteks, et töötlemata video ei säiliks. Kui võimekus pole teada, jäävad need osad
puutumata. Sihtmärgid, millel `supportsVideo === true`, mööduvad sillast.
Kliendipäringu katkestussignaal levib läbi allalaadimise, vahendaja järjekorra,
alamprotsesside ja pealdisekutsete; katkestused peatavad töö videote vahel ega lase
tõrke korral töötlemata meediumit läbi.

Käitussätted on andmebaasipõhised ja Zodiga valideeritud:

| Võti                                | Vaikeväärtus | Vahemik / käitumine                                                                                          |
| ----------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`      | Valikuline käitusfunktsioon, nõuab lubamist                                                                  |
| `modalityBridgeVideoAnalysisMode`   | `"full"`     | `full` säilitab üldised pealdised; `focused` kasutab piiratud ja ebausaldusväärset uusimat kasutajakonteksti |
| `modalityBridgeVideoModel`          | `""`         | Pärib Vision Bridge'i mudeli                                                                                 |
| `modalityBridgeVideoFrameCount`     | `8`          | 1–16                                                                                                         |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`  | `uniform`, `scene_aware` või proportsionaalne `segment_aware`; detektori tõrke korral kasutatakse `uniform`  |
| `modalityBridgeVideoMaxVideos`      | `1`          | 1–4                                                                                                          |
| `modalityBridgeVideoTimeout`        | `120000`     | 1000–120000 ms                                                                                               |

Pärandina säilinud Video ajalõpu väärtused, mis ületavad 120 sekundit, kärbitakse
vahendaja tähtajani; uute sätete kirjutamine sellest piirist suurema väärtusega lükatakse tagasi.
`GET /api/modality-bridge/video/runtime` nõuab enne autentimist või käituskeskkonna kontrollimist
usaldatud templiga kinnitatud tagasisideahela lokaalsust ja seejärel haldusautentimist.
See tagastab ainult välja `available`, puhastatud FFmpegi/ffprobe versioonid ja fikseeritud
põhjuse, kui käituskeskkond pole saadaval. Sisemine eraldusotspunkt ei ole
avalik üleslaadimis-API: järjekorra küllastumine tagastab `503` koos päisega `Retry-After`, kutsuja
ühenduse katkemine tagastab `499` ja vahendaja fikseeritud tähtaja ületamine tagastab `504`. Teisendatud vastused lisavad
kesksele `x-omniroute-modality-bridge` päisele
`video->text;model=<visionModel>;parts=<videos>`, eemaldamata Visioni või Audio segmente.

### Isikuandmete maskija (`piiMasker.ts`)

Töötab **mõlemas** etapis.

- **`preCall`** kloonib kasuliku koormuse, läbib väljad `system`, `messages`, `input` ja
  `prompt` (sh tavalised sõneelemendid) ning rakendab sõneväljadele
  `content`/`text` funktsiooni `processPII()` (asukohast
  `@/shared/utils/inputSanitizer`). Kui `PII_REDACTION_ENABLED=true`, peidetakse
  tuvastatud isikuandmed väljaminevas kasulikus koormuses. See ei sõltu seadest
  `INPUT_SANITIZER_MODE` (mis juhib ainult viibasüsti poliitikat). Kui peitmine
  on välja lülitatud, salvestab kutse tuvastamiste arvu ilma sisu ümber
  kirjutamata.
- **`postCall`** süvakloonib vastuse, käivitab `sanitizePIIResponse()` ja
  Responses API kujuga andmete peitja (`maskResponsesOutput` — hõlmab välju
  `output_text` ja `output[].content[].text`). Kui midagi peidetakse,
  asendab muudetud vastus algse.

Kaitsemehhanism ei blokeeri kunagi; see ainult lisab annotatsioone
(`meta.detections`, `meta.redacted`) või kirjutab sisu ümber.

### Viibasüst (`promptInjection.ts`)

Tuvastab kasutaja esitatud sisus pahatahtlikud struktuurid ja jõustab
konfigureeritud poliitika. Käitumist juhivad keskkonnamuutujad ja konstruktori
suvandid:

| Seadistus       | Keskkonnamuutuja                                                                                      | Vaikeväärtus | Mõju                                                                                                                                                                                                              |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lubatud         | `INPUT_SANITIZER_ENABLED`                                                                             | `true`       | Kui väärtus on `false`, lõpetab kaitsemehhanism töö kohe.                                                                                                                                                         |
| Režiim          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`       | Süstimispoliitika: `block`, `warn` või `log`. (`redact` on tagasiühilduvuse huvides aktsepteeritud, kuid see **ei** eemalda süstimisteksti; päringu isikuandmete ümberkirjutamist juhib `PII_REDACTION_ENABLED`.) |
| Blokeerimislävi | suvand `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`       | Blokeerimiseks vajalik minimaalne raskusaste. Vaikimisi on keskmine raskusaste ainult jälgitav.                                                                                                                   |

**Režiimi prioriteet** (`getMode`): kutsuja `options.mode` →
`INJECTION_GUARD_MODE` **andmebaasi funktsioonilipu ülekirjutus** (Dashboard → Settings →
Feature Flags) → keskkonna `INJECTION_GUARD_MODE` → keskkonna `INPUT_SANITIZER_MODE` →
`warn`. Seetõttu on juhtpaneeli ülekirjutus keskkonnamuutujatest prioriteetsem ja
Feature Flagsi kasutajaliides juhib töötavat kaitset reaalajas (taaskäivitust pole vaja).
Andmebaasist lugemine on tõrkekindel: vea korral naaseb kaitse keskkonnapõhise
käitumise juurde ning kui ülekirjutust pole määratud, on käitumine identne ainult
keskkonnamuutujatel põhineva lahendusega.

Tuvastamisallikad:

1. `sanitizeRequest()` asukohast `@/shared/utils/inputSanitizer` (mujal
   konveieris kasutatav ühine tuvastajate kogum).
2. Sisseehitatud `DEFAULT_GUARD_PATTERNS` (praegu `system_override_inline` ja
   `markdown_system_block`, mõlemad raskusastmega `high`).
3. Valikulised `customPatterns`, mis edastatakse konstruktori suvandite kaudu
   (sõned, regulaaravaldised või kirjed `{ name, pattern, severity }`).

Kui `mode === "block"` **ja** vähemalt üks tuvastus vastab raskusastme lävele,
tagastab `preCall` väärtuse `{ block: true, message: "Request rejected:
suspicious content detected" }`. Režiimides `warn`/`log` logib kaitsemehhanism
sündmuse, kuid lubab kutse. Jagatud abifunktsioon `evaluatePromptInjection()` on
samuti eksporditud kutsujatele, kes peavad viipasid hindama registrit läbimata.

**Skannimispiir (v3.8.20):** tuvastaja kontrollib ainult ühendatud viibateksti
**esimest 16 KB** — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 baiti) failis
`src/shared/utils/inputSanitizer.ts`. Nii `detectInjection()` kui ka
`evaluatePromptInjection()` rakendavad enne mustritsükli käivitamist funktsiooni
`slice(0, MAX_INJECTION_SCAN_BYTES)`. Süstimisjuhised asuvad sisendi alguse
lähedal, seega piirab see regulaaravaldiste CPU-/GC-kasutust sadade KB-de suuruste
kasulike koormuste korral ilma tuvastust nõrgendamata (vrd #3932, #4041).

### Mandaadimaskija (`credentialMasker.ts`)

Töötab **mõlemas** etapis ja vaikimisi ahela viimasena (prioriteet `95`).
Peidab väljaminevast kasulikust koormusest (sõnumite sisu, tööriistakutsete
argumendid, tööriistade tulemused) **ja** teenusepakkuja vastusest tuntud API
võtmete / salajaste lubade mustrid, et viipa kleebitud mandaat (või tööriista
tulemuses tagasi kajastatud mandaat) ei lekiks ei ülesvoolu teenusepakkujale ega
tagasi kliendile.

- **Ainult lubamisel**, sama tava nagu isikuandmete (PII) redigeerimisel (rangete reeglite punkti nr 20 lähedane):
  keelatud, välja arvatud juhul, kui `settings.credentialRedactionEnabled === true` **või**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kui see on välja lülitatud, ei tee kaitsemehhanism midagi —
  see ei blokeeri ega kirjuta kunagi midagi ümber.
- `redactCredentials()` läbib kogu päringu/vastuse puu (`walkValue()`,
  prototüübi saastamise eest kaitstud, tsüklite suhtes turvaline tänu `WeakSet`-ile) ja asendab vasted
  kohatäitega `[REDACTED:<type>]`, kloonides ainult tegelikult
  muutunud harud.
- `CREDENTIAL_PATTERNS` hõlmab LLM-i pakkujate võtmeid (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS-i/SaaS-i lubasid (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maksevõtmeid (Stripe, Square), pilveteenuste
  võtmeid (AWS-i juurdepääsuvõti, Twilio, SendGrid, Mailgun), privaatvõtmeid / JWT-sid,
  autentimisandmeid sisaldavaid ühendusstringe (`mongodb://user:pass@...` jne) ja
  üldist `Authorization`/`x-api-key`/`api-key`/`apikey` päiseväärtuse
  mustrit. Päisekujuliste võtmete (`authorization`, `x-api-key`, `api-key`,
  `apikey`) väärtused redigeeritakse struktuurselt (ainult väärtus; skeemi prefiks, nagu
  `Bearer `/`Basic `, säilitatakse), mitte üldise tekstilise regulaaravaldise abil.
- Kaitsemehhanism ei blokeeri kunagi; see ainult kirjutab ümber (`modifiedPayload` /
  `modifiedResponse`) ja lisab annotatsioonid (`meta.credentialsRedacted`, `meta.count`).

Regressioonikaitse: `tests/unit/credential-masker-guardrail.test.ts`.

## Baasleping (`base.ts`)

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
  block?: boolean; // true katkestab ahela kohe
  message?: string; // kuvatakse blokeerimisel
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // tagastatakse preCall poolt päringu ümberkirjutamiseks
  modifiedResponse?: TValue; // tagastatakse postCall poolt vastuse ümberkirjutamiseks
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

Kaitsepiire annab „muudatus puudub” märku, tagastades kas `void`, `{}` või
`{ block: false }`. Väärtuse `modifiedPayload`/`modifiedResponse` tagastamine asendab
ahelas allavoolu kaitsepiiretele edastatava väärtuse.
`signal?: AbortSignal` edastab kutsuja elutsükli kaitsepiiretesse. Päringu katkestamine on tahtlik tõrke korral jätkamise erand: meediasillad peatavad töö ja puhastavad ressursid, taastamata töötlemata meediat sihtkohale, mis teadaolevalt seda ei toeta.

## Register (`registry.ts`)

Üksikeksemplar `guardrailRegistry` võimaldab järgmist:

- `register(guardrail)` — lisab kaitsepiirde (või asendab selle normaliseeritud nime alusel) ja
  sordib uuesti kasvava `priority` järgi.
- `clear()` / `list()` — haldusabimeetodid.
- `runPreCallHooks(payload, context)` — läbib aktiivsed kaitsepiirded, edastab
  lasti läbi `modifiedPayload` ja peatub esimese `block: true` korral.
- `runPostCallHooks(response, context)` — sama voog vastuse poolel.
- `resetGuardrailsForTests({ registerDefaults })` — tühjendab oleku ja soovi korral
  registreerib vaikeseaded uuesti, et tagada testide puhas isoleeritus.

Mõlemad käitajad tagastavad `{ blocked, payload|response, results, guardrail?, message? }`,
kus `results` on kirjete `GuardrailExecutionResult` massiiv, mis sisaldab
iga kaitsepiirde välju `blocked`, `skipped`, `modified`, `error` ja `meta`,
mis on kasulikud jälitamiseks.

### Kaitsepiirete keelamine päringupõhiselt

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` koondab
duplikaatideta loendi kaitsepiirete nimedest, mis tuleb praeguse
päringu puhul vahele jätta. Allikad (kõik valikulised, kõik ühendatakse):

- `apiKeyInfo.disabledGuardrails`
- Päringu keha `disabledGuardrails` (tipptasemel)
- Päringu keha `metadata.disabledGuardrails`
- Päis `x-omniroute-disabled-guardrails` (või pärandvormingus
  `x-disabled-guardrails`)

Väärtused võivad olla stringide massiivid või komadega eraldatud string; nimed
normaliseeritakse väiketähtedega kebab-kirjapilti (`pii_masker` → `pii-masker`). Tulemus
edastatakse registrile `context.disabledGuardrails` kaudu, mis jätab
sobivad kaitsepiirded vahele (`skipped: true` väljal `results`).

## Käivitusjärjekord

Iga päringu puhul, mis liigub läbi `src/sse/handlers/chat.ts` ja
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` koostab API võtme, päringu keha ja päiste
   põhjal vahelejäetavate kaitsepiirete loendi.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` käivitab kaitsepiirded prioriteedi
   kasvavas järjekorras:
   - Keelatud kaitsepiirded märgitakse olekuga `skipped`.
   - Iga kaitsepiirde `preCall` võib `modifiedPayload` kaudu andmekoormuse ümber kirjutada.
   - Esimene `block: true` katkestab ahela ja töötleja tagastab
     kaitsepiirde tagasilükkamisvastuse.
3. (Võimalikult ümber kirjutatud) andmekoormus liigub kombineeritud marsruutimise ja
   ülesvoolu saatmise etappi.
4. Pärast vastuse koostamist käivitab `guardrailRegistry.runPostCallHooks(...)`
   vastuse jaoks sama ahela. Siinne `block: true` kõrvaldab ülesvoolu
   vastuse.

Erindi visanud kaitsepiirded registreeritakse kujul `error: <message>` ja logitakse
`logger.warn` kaudu, kuid ahela täitmine jätkub — see on kavandatud tõrke korral lubama.

## Konfiguratsioon

Sisseehitatud kaitsepiirete loetavad keskkonnamuutujad:

| Muutuja                               | Kasutaja                 | Mõju                                                                                                    |
| ------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Tuvastamise täielikuks keelamiseks määrake väärtuseks `false`.                                          |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Süstimise poliitika: `warn`, `block` või `log`. Pärandväärtus `redact` ei kirjuta süstimisteksti ümber. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Süstimiskaitse režiim; ühtlasi DB funktsioonilipp, mis **alistab** keskkonnamuutujad (DB > ENV).        |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | Minimaalne raskusaste, mille `MODE=block` tagasi lükkab: `high` (vaikimisi), `medium` või `low`.        |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | Muutuja `INPUT_SANITIZER_BLOCK_THRESHOLD` pärandalias.                                                  |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | Kui väärtus on `true`, redigeeritakse päringu isikuandmed (süstimisrežiimist sõltumatult).              |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (allavoolu) | Juhib vastusepoolse maskeri käitumist.                                                                  |

Modality Bridge'i kaitsepiirded loevad käitusaegset konfiguratsiooni DB-põhisest
sätete hoidlast (`getSettings()`), mitte keskkonnamuutujatest. Visioni peamised võtmed on
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ja
`modalityBridgeCacheMaxEntries`. Pärandvõtmeid
`visionBridge*` aktsepteeritakse ainult dokumenteeritud ühe tsükli pikkuse lugemise
varuvariandina; juhtpaneel kirjutab peamistesse võtmetesse. Vaikeväärtused ja varuvariandi
lahendaja asuvad failis `src/shared/constants/modalityBridgeDefaults.ts`, pärand-
konstandid on säilitatud failis `src/shared/constants/visionBridgeDefaults.ts`.

Audio kasutab võtmeid `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` ja `modalityBridgeAudioMaxClips` ning lisaks jagatud
`modalityBridgeCache*` sätteid. Audiol puudub pärandvõtmete varuvariant, sest need
võtmed võeti kasutusele koos Modality Bridge'i skeemiga.

Video kasutab võtmeid `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` ja
`modalityBridgeVideoTimeout` ning lisaks jagatud `modalityBridgeCache*` sätteid.
See on vaikimisi keelatud, sest FFmpeg/ffprobe on valikulised käituskeskkonna
sõltuvused ning kaadrite kirjeldamine lisab viivitust ja mudeli kasutamise kulu.

## Kohandatud kaitsepiirded

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

Sammud:

1. Looge `src/lib/guardrails/myGuardrail.ts`, mis laiendab klassi `BaseGuardrail`.
2. Rakendage `preCall` ja/või `postCall`.
3. Registreerige kas importimise ajal (lisage funktsioonist `registerDefaultGuardrails`) või
   kutsuge käitusajal välja `guardrailRegistry.register(...)` — register asendab
   kõik varasemad sama normaliseeritud nimega kaitsepiirded.
4. Lisage testid kataloogi `tests/unit/` (olemasolevad näited:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testimine

Kasutage testide vahel funktsiooni `resetGuardrailsForTests()`, et alustada teadaolevast olekust.
Tühja registriga alustamiseks edastage `{ registerDefaults: false }` ja
registreerige ainult testitavad kaitsepiirded. Vision Bridge toetab sõltuvuste
sisestamist (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge pakub
samaväärseid liideseid seadete, võimekuste, STT-mudeli valimise, mandaatide
kontrollimise ja transkribeerimise jaoks. Seega saavad testid kontrollida mõlemat
voogu ilma andmebaasi- või võrgujuurdepääsuta.

## Vaadake ka

- `src/lib/guardrails/` — teostus
- `src/shared/utils/inputSanitizer.ts` — ühine tuvastaja, millel põhinevad
  promptisüsti tuvastamine ja isikuandmete maskeerimine
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge'i vaikeväärtused ja
  sunnitud sillaga mudelite loend
- `src/shared/constants/modalityBridgeDefaults.ts` — Visioni/Audio ühised käitusaja vaikeväärtused
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonaalne kiht (kaitselüliti, ooteajad)
- `docs/reference/ENVIRONMENT.md` — keskkonnamuutujate täielik teatmik

## Süstikaitse marsruutide katvus ja red-team-testimine (8. etapp · plokk D)

Süstikaitse (`createInjectionGuard` / `withInjectionGuard`) hõlmab kõiki marsruute,
mis võtavad vastu kasutaja prompte. See järgib muutujat `INJECTION_GUARD_MODE` (vaikimisi `warn` = ainult logimine;
`block` = tagastab HTTP 400 `SECURITY_001`).

| Tüüp               | Marsruudid                                                                                                                                           | Vaikerežiim |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Tekst (olemasolev) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn        |
| Genereeriv         | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn        |
| Andmed             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn        |

Teksti eraldamine (`extractMessageContents`) hõlmab välju `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team-testimine (igal ööl, `nightly-llm-security.yml`):** promptfoo kontrollib, et iga marsruut blokeeriks
OWASP-LLM-i korpuse režiimis `INJECTION_GUARD_MODE=block`; garak käitab sonde (jäetakse saladuse puudumisel vahele).
`moderations` on järjepidevuse huvides kaasatud — plokirežiimi operaatorid saavad selle funktsiooni
`resolveDisabledGuardrails` kaudu erandiks määrata.

Igaöisel töövoolel (`.github/workflows/nightly-llm-security.yml`, cron + käsitsi
käivitamine) on kaks tööd:

- **`promptfoo-guard` (blokeeriv)** — käitab käsku `promptfoo eval -c promptfooconfig.yaml`
  režiimiga `INJECTION_GUARD_MODE=block`. Iga ründejuhtum (nt „ignoreeri kõiki
  varasemaid juhiseid…“, DAN-stiilis turvapiirangutest möödahiilimised) kontrollib, et vastus sisaldaks
  `error.code === "SECURITY_001"`, st et kaitse lükkas päringu tegelikult tagasi.
- **`garak` (nõuandev)** — käitab garakit võtmega `--probes promptinject,dan,leakreplay`
  kohaliku OmniRoute'i eksemplari (`http://localhost:20128/v1`) suhtes. Käivitamine sõltub
  teenusepakkuja saladusest (`PROMPTFOO_PROVIDER_KEY`); selle puudumisel jäetakse töö korrektselt vahele ja sellele on lisatud
  `|| true`, mistõttu esitatakse aruanne ilma CI-d nurjamata.

Kaitse abifunktsiooni (`createInjectionGuard` / `withInjectionGuard`)
katvus hõlmab kõiki prompte kandvaid `/v1` marsruute; prompti tekst võetakse väljadest
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` funktsiooniga
`extractMessageContents()` failis `src/shared/utils/inputSanitizer.ts`.
