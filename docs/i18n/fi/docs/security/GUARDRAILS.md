# Guardrails (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Totuuden lähde:** `src/lib/guardrails/`
> **Päivitetty viimeksi:** 2026-08-29 — v3.8.51 (Video Bridgen transkription alkuperän ilmoittaa kutsuja,
> eikä palvelin vielä varmista sitä — selvennetty kohdan #11661 mukaisesti)

Suojaukset toteuttavat turvallisuus-, käytäntö- ja sisältömuunnokset OmniRouten
ja ylävirran palveluntarjoajien välisellä rajalla. Kukin suojaus voi tarkastaa
(ja valinnaisesti hylätä, muuntaa tai annotoida) pyyntöjen hyötykuormia
(`preCall`) ja ylävirran vastauksia (`postCall`).

Järjestelmä on **häiriötilanteessa salliva**: jos suojaus aiheuttaa poikkeuksen
suorituksen aikana, rekisteri kirjaa virheen ja jatkaa seuraavaan suojaukseen
sen sijaan, että pyyntö epäonnistuisi. Estäminen on aina nimenomainen päätös
(`block: true`), ei koskaan vahinko.

## Sisäänrakennetut suojaukset

Rekisteri lataa tuonnin yhteydessä automaattisesti kuusi suojausta prioriteettijärjestyksessä
(katso `registry.ts` → `registerDefaultGuardrails()`):

| Prioriteetti | Nimi                | Vaihe(et)      | Tiedosto              |
| ------------ | ------------------- | -------------- | --------------------- |
| `5`          | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`          | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`          | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`         | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`         | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`         | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Pienemmät prioriteettiluvut suoritetaan **ensin**.

### Kuvasilta (`visionBridge.ts`) — modaliteettisilta PR-1

Sieppaa kuvia sisältävät pyynnöt, jotka on osoitettu **malleille, joilla ei ole kuvatukea**, ja joko
reitittää koko pyynnön uudelleen kuvia tukevalle mallille tai korvaa kuvaosat
määritettävän kuvamallin tuottamilla tekstikuvauksilla ennen
ylävirran kutsua. Näin vain tekstiä tukevat palveluntarjoajat voivat käsitellä
multimodaalisia hyötykuormia läpinäkyvästi.

Kulku:

1. Ohita, jos kohdemalli tukee jo kuvia (ellei se ole pakotetun sillan
   luettelossa `isVisionBridgeForcedModel`).
2. Poimi kuvaosat funktiolla `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), joka delegoi **yhtenäiselle median
   tunnistimelle** `detectMediaParts()` tiedostossa `open-sse/utils/mediaParts.ts` — tämä on
   yhdistelmäyhteensopivuussuodattimen kanssa jaettu ainoa totuuden lähde.
   Poiminta on sallittujen luetteloon rajattu sellaisiin ylätason osamuotoihin,
   jotka `replaceImageParts` voi liittää takaisin (poiminta↔korvaus-sopimus): OpenAI
   `image_url`, Anthropicin base64 `source.type:"base64"`, Anthropicin URL
   `source.type:"url"` ja Responses API:n `input_image`. Sisäkkäiset osumat ja
   vain ilmaisimena toimivat muodot kuuluvat yhdistelmäsuodattimelle eikä niitä koskaan poimita.
   Ohita, jos mitään ei löydy.
3. Ratkaise ajonaikainen määritys funktiolla `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): uudet `modalityBridge*`-
   asetusavaimet ovat etusijalla; vanhat `visionBridge*`-avaimet säilyvät
   **yhden syklin vara-asetuksina** (palautusikkuna). Ohita ennen mitään median läpikäyntiä,
   kun silta on poistettu käytöstä.
4. Tilan valitsin (`modalityBridgeVisionMode`, katso alla oleva taulukko) ratkaisee
   uudelleenreitityksen ja kuvailun välillä. Uudelleenreititys palauttaa `modifiedPayload`-arvon, jossa vain `model`
   on vaihdettu, sekä metatiedot `{ rerouted, fromModel, toModel, imagesKept }`.
5. Kuvailupolku: rajoita kuvien määrä arvoon `maxImages`, muodosta tehtävät huomioiva kehote,
   tarkista kuvailuvälimuisti, kutsu kuvamallia **rinnakkain**
   (`Promise.allSettled`) ja lisää kuvien tilalle tekstiosat
   `[Image N]: <description>`. Epäonnistunut kuvailu tuottaa arvon `null`, ja alkuperäinen kuvaosa
   **säilytetään** (#4012) — paitsi yhdistelmän kuvailupolulla, kun kaikki
   kuvailut epäonnistuivat; tällöin vahvistetusti kuvia tukemattomalle ylävirralle annetaan
   `(unavailable — no vision-capable provider connected)`-paikkamerkki (#8430).
6. Palauta `modifiedPayload` + metatiedot (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Tilan valitsin (`modalityBridgeVisionMode`)

| Tila       | Oletus | Toiminta                                                                                                                                                                                                                                                                                                                               |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Vanha heuristiikka, muuttamaton (#6640/#7204): muut kuin yhdistelmä- tai `auto/`-mallit reititetään uudelleen parhaalle kuvamallille, ellei alkuperäisellä mallilla jo ole käyttökelpoisia tunnistetietoja (jolloin kuvaillaan); yhdistelmäkohteet kuvaillaan aina.                                                                    |
| `describe` |        | Kuvaile aina — uudelleenreitityslohko ohitetaan kokonaan; käyttäjän valitsema malli vastaa aina.                                                                                                                                                                                                                                       |
| `reroute`  |        | Pakota uudelleenreititys: tunnistetiedot sisältävän mallin säilyttävä suojausehto ohitetaan. Uudelleenreitityksen **kohteen** tunnistetietosuojaus on silti voimassa — kun käyttökelpoista kuvakohdetta ei ole, pyyntö siirtyy kuvailuun, jotta raakakuvat eivät koskaan päädy vain tekstiä käsittelevään taustajärjestelmään (#8430). |

Pakotetut tilat oikaisevat **ennen** automaattisen heuristiikan suorittamista; `auto`-toiminta
on tavutasolla identtinen PR-1:tä edeltävän suojauksen kanssa.

#### API-avaimen rajaus (`visionBridgeKeyScope.ts`)

Kun kutsujan API-avain rajoittaa `allowedConnections`-yhteyksiä, kiintiövarantoja
(`allowedQuotas`) tai malleja (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), silta valitsee
uudelleenreititys- ja kuvailumalleiksi vain sellaisia malleja, joita avain saa käyttää,
ja vain sellaisista yhteyksistä, joita avain saa käyttää. Kuvailukutsu kulkee tämän jälkeen aina
OmniRoute-itsepalautussilmukan kautta `x-omniroute-self-loop-key-id`-otsakkeella, jotta vastaanottava keskustelupyyntö
valvoo avaimen yhteys- ja mallikäytäntöä uudelleen. `enforceApiKeyPolicy()`
hyväksyy kyseisen otsakkeen vain yhdessä itsepalautussilmukan bearer-tunnisteen kanssa, joten se voi ainoastaan
supistaa käyttöoikeuksia, ja tunniste, jota ei voida ratkaista, hylätään.

Jos avaimelle ei ole sallittu yhtään kuvamallia, kuvailupolku väistyy ja
pyyntö jatkaa muuttumattomana, samalla avoimesti jatkavalla toimintatavalla kuin käytöstä poistettu
suojaus (metatiedot `{ skipped: true, reason: "no_permitted_vision_model" }`).
Pyynnöt ilman avainta sekä avaimet, joilla ei ole näitä rajoituksia, toimivat täsmälleen kuten
ennenkin.

#### Tehtävät huomioiva kuvailukehote (`modalityBridgeVisionTaskAware`)

Oletusarvo on **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) lisää
**viimeisen käyttäjäviestin** tekstin (katkaistuna 500 merkkiin)
kuvailun peruskehotteeseen, jolloin kuvaus ohjautuu käyttäjän varsinaisen
kysymyksen mukaisesti (codex-vision-proxy-malli), ja pyytää näkömallia
litteroimaan näkyvän tekstin. Kun asetus on pois käytöstä — tai käyttäjän
tekstiä ei ole — peruskehotetta käytetään muuttamattomana.

Kuvailun sisäisen silmukan oma OpenAI-yhteensopiva pyyntö (`callVisionModelSingle()`
tiedostossa `visionBridgeHelpers.ts`) pyytää aina `image_url.detail: "high"` —
ehdoitta jokaiselle kutsujalle/palveluntarjoajalle ilman riippuvuutta mistään
asiakassignaalista. Matalan tarkkuuden näytteistys heikentää OCR-tarkkuutta juuri
siinä tekstin litterointitehtävässä, jota tämä kehote pyytää, joten itse
kuvailukutsu pyytää aina korkeaa tarkkuutta riippumatta alkuperäisen saapuvan
pyynnön käyttämästä tarkkuustasosta. Tämä vaikuttaa vain sisäisen
kuvailupyynnön runkoon; se ei muuta sitä, miten OmniRoute välittää kutsujan oman
`image_url.detail`-arvon ensisijaisessa pyynnössä — kyseinen oletusarvo asetetaan
erikseen ja vain tunnistetuille OpenCode-asiakkaille funktiossa
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Kuvailun
sisäisen silmukan Anthropic-siirtomuotohaarassa ei ole `detail`-kenttää, eivätkä
kumpikaan oletusarvoista vaikuta siihen.

#### Kuvailutuloksen rajoitus (`modalityBridgeVisionMaxChars`)

| Avain                          | Oletusarvo | Alue              |
| ------------------------------ | ---------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`        | `0` tai 100–50000 |

`0` (oletusarvo) tarkoittaa, että **rajoitusta ei ole** — funktion
`callVisionModel()` palauttama kuvaus välitetään muuttamattomana, mikä säilyttää
nykyisen toiminnan. Mikä tahansa arvo välillä 100–50000 katkaisee kuvauksen ja
lisää loppuun `…`-merkin ennen kuin kuvaus liitetään takaisin muodossa
`[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` tiedostossa
`src/lib/guardrails/visionBridge.ts`). Suurenna arvoa paljon yksityiskohtia
sisältävissä OCR-tehtävissä, joissa jatkokäsittelymalli tarvitsee koko
litteroinnin; pienennä sitä rajoittaaksesi tokenien käyttöä monisanaisissa
näkömalleissa. Hallintapaneelin kenttä sijaitsee Vision-välilehden Advanced-paneelissa
(`modality-bridge-max-chars` tiedostossa `ModalityBridgeVisionTab.tsx`) ja nostaa
kaikki arvot väliltä 1–99 vähimmäisarvoon 100 jättäen eksplisiittisen arvon `0`
muuttamatta — `0` on itsenäisesti kelvollinen Zod-arvo
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ei pelkästään
asettamattoman arvon oletus.

#### Kuvailuvälimuisti (`modalityBridge/bridgeCache.ts`)

Prosessinlaajuisesti jaettu, muistissa toimiva LRU- ja TTL-välimuisti
kuvailutuloksille. Avain = `sha256(imageRef + composedPrompt + configuredBridgeModel)`,
jossa käytetään pituusetuliitteistä kehystystä (ei kenttien rajoista johtuvia
törmäyksiä). Malliosa on **määritetty** siltamalli, ei vastauksen tosiasiallisesti
tuottanut malli — `callVisionModel` voi käyttää sisäisesti varamallia, ja
avainten muodostaminen yrityskohtaisesti pirstaloisi välimuistin. Epäonnistuneita
kuvailuja ei koskaan tallenneta välimuistiin. Asetukset:

| Avain                           | Oletusarvo | Alue    |
| ------------------------------- | ---------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`     | —       |
| `modalityBridgeCacheTtlMinutes` | `60`       | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`      | 10–5000 |

#### Etäkuvien normalisointi (sisäisen silmukan kuvailu/base64-nouto)

Kun silta noutaa **etäkuvan** itse — sekä Anthropicin sisäistä kuvailukutsua
että claude-siirtomuodon base64-muunnosta (`ensureBase64ImagesForClaudeWire`)
varten, kummassakin tapauksessa funktion `fetchRemoteImageAsDataUri()` kautta
tiedostossa `visionBridgeHelpers.ts` — tuloksena saatu data-URI käsitellään
funktiolla `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) ennen sen
upottamista näkömallin pyyntöön. Ylisuuret kuvat pienennetään siten, että
**pitkä sivu on 2048px** (vastaten OpenAI:n/Anthropicin palvelinpuolella jo
käyttämää koon ylärajaa), mikä vähentää lähetyksen tavumäärää ja viivettä
muuttamatta näkömallin näkemää sisältöä. Koon muuttamiseen käytetään `sharp`-pakettia,
joka ladataan dynaamisella tuonnilla: alustalla, jolla sen natiivibinaarin
lataaminen epäonnistuu, `normalizeDataUri()` **ei koskaan aiheuta poikkeusta** —
se välittää alkuperäiset tavut sellaisinaan, joten kuvailu-/base64-muunnospolku
toimii aina. Myös muut kuin kuvatavut (nouto, joka ei palauttanut purettavissa
olevaa kuvaa) välitetään muuttamattomina. Tämä normalisointi rajautuu kuviin,
jotka silta noutaa omaa sisäistä kutsuaan varten — sitä ei koskaan sovelleta
kutsujan sellaisenaan läpivälitettävään raakahyötykuormaan, mikä noudattaa
vain erillisellä käyttöönotolla tehtävien muutosten periaatetta (Hard Rule #20).

#### Asetusskeema + migraatio

Uudet `modalityBridge*`-avaimet validoidaan Zodilla skeemassa
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCache*`-kolmikko sekä Audio Bridgen käyttämä
`modalityBridgeAudio*`-ryhmä. Migraatio `141_modality_bridge_settings.sql`
kopioi nykyiset vanhat `visionBridge*`-arvot vastaaviin uusiin avaimiin
(idempotentisti, eikä koskaan korvaa operaattorin asettamaa `modalityBridge*`-arvoa);
vanhat avaimet hyväksytään edelleen lukemisen varavaihtoehtona yhden
julkaisusyklin ajan.

#### Läpinäkyvyysotsake + tilastot

Kuvailulla muunnetuissa vastauksissa on
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(muodostetaan funktiolla `buildModalityBridgeHeader()` tiedostossa
`modalityBridge/bridgeStats.ts` ja lisätään funktiolla
`withModalityBridgeHeader()` tiedostossa `src/sse/handlers/chatHelpers.ts`).
Uudelleen reititetyt pyynnöt **eivät** saa otsaketta — hyötykuormaa ei muutettu,
ja mallin vaihto näkyy jo vastauksen rungon `model`-kentässä.

`GET /api/modality-bridge/stats` (hallinnan todennus, sama käyttöoikeustaso kuin
`GET /api/settings`) palauttaa muistissa olevat modaliteettikohtaiset laskurit
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` modaliteeteille `vision`, `audio` ja
`video`. `averageLatencyMs` käyttää nimittäjänä arvoa `latencySamples`, ei kaikkia
yrityksiä; operaatio, jolle ei ole ajoitustietoa, ei luo keinotekoista nollan
millisekunnin näytettä. `bridged` säilyy taaksepäin yhteensopivana aliaksena
onnistuneille muunnoksille; epäonnistuneet yritykset eivät kasvata sitä.
Laskurit nollautuvat suunnitellusti prosessin uudelleenkäynnistyksen yhteydessä
(telemetriaa, ei kirjanpitoa).

#### Hallintapaneelin määritys

Erillinen hallintapaneelisivu on
`/dashboard/settings/modality-bridge`. Sen URL-osoitteella valittavat `Vision`-, `Audio`-
ja `Video`-välilehdet säilyttävät kyselyparametrit vaihtaessaan `tab`-arvoa.
Vision-välilehdellä voidaan hallita käyttöönottoa, tilaa, mallin valintaa (mukaan
lukien automaattinen oletusarvo), tehtävätietoista kehotteen muodostusta,
edistyneitä aikakatkaisu-, kuva-, kuvauksen pituus- ja välimuistirajoja,
suorituksenaikaisia laskureita sekä suojattua esimerkkipyyntöä. Myös Audio-välilehti
on käytössä: sillä voidaan hallita käyttöönottoa, vain STT-malleja sisältävää
mallivalitsinta Auto-vaihtoehdolla, aikakatkaisu- ja leikkeen enimmäispituusrajoja,
äänilaskureita sekä `input_audio`-esimerkkitestiä. Video-välilehti on toiminnallinen:
se ilmoittaa FFmpeg/ffprobe-ajoympäristön tilan — yhden neljästä eksplisiittisestä
käyttöliittymätilasta (`unknown`, kun tarkistus on käynnissä tai sitä ei voitu
suorittaa loppuun, `restricted`, kun hallintapaneelin isäntä ei ole loopback-osoite
ja tarkistus ohitetaan asiakaspuolella, `unavailable`, kun tarkistus on tehty ja
puuttuminen vahvistettu, tai `available` FFmpeg/ffprobe-versioineen) — tallentaa
käyttöönotto-, malli-, ruutu-, video- ja aikakatkaisurajat, suodattaa mallivalitsimeen
näkösyötettä tukevat mallit ja näyttää videolaskurit.

AI-asetusten entinen Vision Bridge -kortti on yhteensopivuuslinkki uudelle
sivulle; se ei enää ylläpidä lomakkeen toista kopiota. Media Providers myös
linkittää Image-to-Text- ja Speech-to-Text-työnkulut vastaaville Modality
Bridge -välilehdille poistamatta nykyistä Speech-to-Text-kokeiluympäristöä.

**Oman silmukan hyväksyntäohitus:** kun kuvauspyyntö reititetään OmniRouten
oman `/v1`-silmukan kautta (epästandardi palveluntarjoajamalli), alipyyntö lähettää
otsakkeen `x-omniroute-admission-bypass: internal` ja todennetaan ratkaistulla
oman silmukan tunnistetiedolla — paikallisessa tilassa paikallisella
`sk_omniroute`-sentinelillä tai operaattorin määrittämällä `OMNIROUTE_API_KEY`- /
`ROUTER_API_KEY`-ympäristöavaimella (#1350), jotta `REQUIRE_API_KEY=true`-käyttöönotot
voivat silti suorittaa kuvauspyynnön. Ohitus hyväksytään vain täsmälleen näillä
tunnistetiedoilla, joten ulkoiset asiakkaat eivät voi käyttää otsaketta
hyväksyntätarkistuksen ohittamiseen.

Vanhat oletusarvot sijaitsevat tiedostossa
`src/shared/constants/visionBridgeDefaults.ts`; uudet tilan, tehtävätietoisuuden
ja välimuistin oletusarvot sekä asetusten ratkaisija sijaitsevat tiedostossa
`src/shared/constants/modalityBridgeDefaults.ts`. Suojamekanismi tarjoaa
`deps`-konstruktorivalinnan, jotta testit voivat injektoida väärennetyt
`getSettings`- ja `callVisionModel`-toteutukset.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Sieppaa ääntä sisältävät keskustelupyynnöt ennen kuin ne saavuttavat kohteen,
jonka ei tiedetä hyväksyvän äänisyötettä. Se ei koskaan uudelleenreititä
keskustelupyyntöä: ääniosat litteroidaan nykyisen OpenAI-yhteensopivan
multipart-päätepisteen kautta, ja valittu keskustelumalli jatkaa
tekstilitteraatioilla.

Kulku:

1. Ratkaise `supportsAudio` funktion `getResolvedModelCapabilities()` kautta.
   Eksplisiittiset palveluntarjoajarekisterin metatiedot ovat ensisijaisia,
   niiden jälkeen tulevat staattiset mallin metatiedot ja sitten synkronoitu
   `modalities_input`. Määritetty syöteluettelo ilman `audio`-arvoa tuottaa
   arvon `false`; jos kyvykkyydestä ei ole näyttöä, arvoksi jää `null`. Sekä
   `false` että `null` aktivoivat konservatiivisen sillan, kun taas `true`
   ohittaa sen.
2. Ratkaise `modalityBridgeAudio*`-asetukset ja poimi jokaisesta viestistä
   liitettävissä olevat ylimmän tason ääniosat jaetun `detectMediaParts()`-
   tunnistimen avulla. Tuetut siirtomuodot ovat OpenAI:n `input_audio`,
   `audio_url` ja `source.media_type: "audio/*"`. Sisäkkäinen ääni tunnistetaan
   reititystä varten, mutta liittämispolku ei poista sitä. Työmäärä rajataan
   asetuksella `modalityBridgeAudioMaxClips`; myöhemmät osat jätetään ennalleen.
3. Käytä määritettyä `provider/model`-arvoa tai anna funktion
   `selectAudioBridgeModel()` käydä `AUDIO_TRANSCRIPTION_PROVIDERS` läpi
   vakaassa luettelojärjestyksessä ja valita ensimmäinen malli, jolla on
   käyttökelpoinen aktiivinen palveluntarjoajan tunnistetieto.
4. `callAudioTranscription()` muuntaa base64-/data-URI-äänen multipart-muotoiseksi
   `file`-tiedostoksi tai lataa etäosoitteen `audio_url` julkiset osoitteet
   sallivan lähtevän liikenteen suojauksen kautta käyttäen DNS-kiinnitystä ja
   25 MB:n rajaa. Sen jälkeen se lähettää tiedoston ja valitun mallin
   POST-pyynnöllä paikallisen `/v1/audio/transcriptions`-silmukan kautta,
   käyttäen todentamiseen funktion `resolveSelfLoopBearer()` tulosta.
   Nykyinen litterointireitti suorittaa normaalin tunnistetietojen haun,
   jäähdytysajan ja nopeusrajoituksen käsittelyn sekä välityksen
   palveluntarjoajalle.
5. Onnistuneet kutsut korvaavat osansa arvolla `[Audio N]: <transcript>`. Kutsut
   suoritetaan funktion `Promise.allSettled` avulla: yksittäinen epäonnistuminen
   säilyttää alkuperäisen ääniosan (#4012-sopimus). Jos kaikki kutsut
   epäonnistuvat ja kohteen `supportsAudio === false` on todistettu, osiksi
   tulee `[Audio N]: (unavailable — no STT provider connected)`
   (#8430-sopimus). Tuntemattoman kohteen (`null`) tapauksessa kaikkien kutsujen
   epäonnistuminen jättää osat ennalleen. Todistetusti vain tekstiä tukeva kohde,
   jolle ei ole käyttökelpoista STT-tunnistetietoa, saa saman eksplisiittisen
   paikkamerkin ilman verkkokutsua.

Onnistuneet litteraatiot käyttävät prosessinlaajuista Modality Bridge
-LRU/TTL-välimuistia. Avain yhdistää ääniviitteen, vakaan
`audio-transcription`-operaatiotunnisteen ja valitun STT-mallin; epäonnistumisia
ei koskaan tallenneta välimuistiin. Ääniyritykset päivittävät jaetut `bridged`-,
`cacheHits`-, `failures`- ja `lastUsedAt`-laskurit. Muunnettujen vastausten mukana
lähetetään
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`;
muuttamattomat pyynnöt eivät saa Audio Bridge -segmenttiä.

Suorituksenaikaiset asetukset tallennetaan tietokantaan ja validoidaan Zodilla:

| Avain                         | Oletusarvo | Arvoalue        |
| ----------------------------- | ---------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`     | —               |
| `modalityBridgeAudioModel`    | `""`       | Auto tai STT ID |
| `modalityBridgeAudioTimeout`  | `60000`    | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`        | 1–10            |

Jaettua välimuistia hallitaan edelleen asetuksilla `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` ja `modalityBridgeCacheMaxEntries`.

### Videosilta (`videoBridge.ts`, `videoBridgePipeline.ts`)

Sieppaa ylimmän tason video-osat Chat Completions -rajapinnan `messages`-kentässä
ja Responses API -rajapinnan `input`-kentässä ennen kuin kutsutaan kohdetta,
jolla ei tiedetä olevan alkuperäistä videotukea. Tuettuja muotoja ovat
`input_video`, `video_url`, `video_source`, HTTPS-URL-osoitteet ja
`data:video/*;base64,...`-data-URI:t. Tekstissä olevia tavallisia tiedostonimiä
ei käsitellä videoina.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) vastaa pyynnön läpikäynnistä,
kyvykkyys- ja käytäntötarkistuksesta, pyyntökohtaisesta koostamisesta ja
vastaushyötykuormasta. Videokohtainen käsittely — hankinta, koko tuloksen
välimuisti, kuvasarjan kuvailu (johon yhdistetään kutsujan mahdollisesti
ilmoittama äänitranskriptio) sekä yrityskohtaiset metriikat, keskeytys ja
siivous — on piilotettu `videoBridgePipeline.ts`-tiedoston `processVideoPart`-toiminnon
taakse. Sitä kutsutaan kerran kutakin video-osaa kohden `preCall`-silmukassa.
Kyseinen moduuli määrittelee myös eksplisiittiset rajapintarajat
`VideoMediaBrokerPort` (tavujen hankinta ja otostettujen kuvien poiminta),
`VideoAudioTranscriptionPort` (kutsujan ilmoittaman äänitranskription
yhdistäminen otostettujen kuvien kuvateksteihin) ja `VideoDrilldownPort`
(kuvien porautumistietojen pysyväistallennuksen raja; sitä ei ole vielä
kytketty `processVideoPart`-toimintoon — tällä hetkellä vain erillinen
`/api/modality-bridge/video/drilldown`-reitti kirjoittaa porautumistietueita).

Julkinen `/v1`-pyyntöpolku ei koskaan tuo tai käynnistä aliprosessia.
Etävideot ladataan 50 MiB:n rajoituksen alaisina. Tekstinsisäisillä
base64-videoilla on konservatiivinen, videokohtainen 36 MiB:n puretun koon
raja, jotta malli-, viesti- ja kehystysvaippa voi pysyä julkisten JSON-pyyntöjen
50 MiB:n hyväksymisrajan sisällä. Tekstinsisäinen pituus ja puretun koon arviot
tarkistetaan ennen muistin varaamista. HTTPS vaaditaan sekä alkuperäiseltä
etä-URL-osoitteelta että jokaiselta uudelleenohjaukselta, ja tarkistukseen
käytetään olemassa olevaa vain julkiset osoitteet sallivaa lähtevän liikenteen
suojausta DNS-kiinnityksellä. Tavut ylittävät sen jälkeen täsmällisen sisäisen
`POST /api/modality-bridge/video/extract`-välittäjärajan. Kyseinen reitti on
sekä `LOCAL_ONLY` että `SPAWN_CAPABLE`, hyväksyy ainoastaan prosessikohtaisesti
todennetun, luotetusta loopback-osoitteesta tulevan pyynnön eikä koskaan hyväksy
URL-osoitetta, tiedostojärjestelmäpolkua, suoritettavaa tiedostoa tai
argumenttiluetteloa. API:n rungon kokokäsittelyputki ja käsittelijän
inkrementaalinen rungonlukija valvovat toisistaan riippumatta välittäjän syötteen
50 MiB:n rajaa. Sen rajattu jono suorittaa yhden poiminnan kerrallaan, sallii
neljä odottavaa työtä ja rajoittaa odottavan syötteen 100 MiB:iin.

Välittäjän sisällä `ffprobe` lukee yksityisen paikallisen tiedoston. Kiinteä
muotojen sallittujen luettelo sulkee pois soittolista- ja manifestimuodot.
Sallituissa MOV-perheen säilöissä ulkoiset MOV-dataviittaukset pysyvät
oletusarvoisesti poissa käytöstä, eikä kiinteä komento ota niitä käyttöön.
Sekä `ffprobe` että `ffmpeg` käyttävät vain `file`-protokollan sallivaa
protokollaluetteloa, yhtä säiettä, kiinteitä argumenttitaulukoita ja
suoritettavia tiedostoja, jotka ratkaistaan `PATH`-muuttujasta, eivätkä ne käytä
komentotulkkia. Liitettyjä kansikuvavirtoja ei katsota toistettaviksi
ehdokkaiksi. Kaikkien toistettavien virtojen on täytettävä rajoitukset, ja
eksplisiittistä oletusvirtaa suositaan ennen determinististä pienimmän indeksin
varavaihtoehtoa. Videoiden enimmäiskesto on 600 sekuntia, enimmäismitta on
8 192 pikseliä kumpaankin suuntaan ja lähteen enimmäispikselimäärä on
33 554 432. FFmpeg ottaa 1–16 JPEG-kuvaa otoksina keskikohdista, pienentää
pitkän sivun enintään 1 024 pikseliin suurentamatta pienempiä syötteitä eikä
koskaan vastaanota URL-osoitetta. Oletusarvoinen otantatapa on `uniform`.
Valinnaiset `scene_aware`- ja kokeelliset `segment_aware`-käytännöt suorittavat
yhden kiinteän FFmpeg-lisäajon jo validoidulle paikalliselle virralle, valitsevat
rajatut `showinfo`-kohtausaikaleimat ja palaavat deterministisesti samoihin
tasavälisiin keskikohtiin, jos tunnistin epäonnistuu tai aikakatkaistaan, tulos
on virheellinen tai ehdokasjoukko on tyhjä. Segmenttitietoinen tila jakaa
keskikohtaotokset suhteessa validoituihin kohtausväleihin. Segmenttitietoinen
todistusaineisto ja varatoiminta kuvataan yksityiskohtaisesti jäljempänä. Tiukkaa
16 kuvan rajaa sovelletaan valinnan jälkeen kaikissa käytännöissä. Kun
kohtaustietoisen pyynnön kuvabudjetti on vain yksi kuva, se käyttää aktiivisen
koko videon tai kohdistusikkunan tasavälistä keskikohtaa ja ilmoittaa
`policyEffective: uniform`: yksi valittu kohtauskuva ei voi säilyttää ajallisen
jakson molempia päitä. Kutsuja voi halutessaan antaa äärellisen kohdistusikkunan
(`start`/`end` sekunteina). Rajat rajoitetaan median kestoon, käänteiset tai
ei-äärelliset ikkunat hylätään ja kaikki otantakäytännöt suoritetaan ainoastaan
normalisoidun aikavälin sisällä. Tuloksena saatava ikkuna sisällytetään
otantametatietoihin ja epäluotettavan kuvauksen etuliitteeseen, jotta myöhemmät
mallit voivat erottaa kohdistetun katkelman koko aikajanalta.

Semanttinen kuvatekstien kohdistus on erillinen, eksplisiittinen asetus.
Oletusarvoinen `full`-analyysitila säilyttää nykyisen kuvakehotteen eikä koskaan
välitä pyynnön tekstiä kuvatekstimallille. `focused`-tilassa silta lukee
ainoastaan viimeisimmän ei-tyhjän käyttäjän kirjoittaman `text`/`input_text`-sisällön
samasta Chat- tai Responses-säilöstä, normalisoi sen NFC-muotoon, tiivistää
ohjausmerkit ja tyhjemerkit sekä rajoittaa sen 500 Unicode-koodipisteeseen.
Tyhjä tulos palauttaa käyttöön täsmälleen `full`-kehotteen. Käyttökelpoinen
vihje serialisoidaan JSON-muodossa erityiseen epäluotettavan käyttäjäkontekstin
lohkoon, ja se saa ainoastaan priorisoida havaittavia yksityiskohtia. Se ei voi
ohittaa erillistä varoitusta siitä, ettei mediassa näkyviä tai kuuluvia ohjeita
pidä noudattaa. Tekstuaalinen kohdistus ei koskaan päättele `start`/`end`-arvoja
eikä muuta ajallista otantaa.

#### FU-07:n rakenteellinen segmenttitodistusaineisto

`segment_aware` käyttää yhden rajatun esianalyysikierroksen jo validoidulle
paikalliselle videovirralle. Kiinteä suodatinketju skaalaa ensin leveyden enintään
320 pikseliin, tunnistaa kohtausvaihdokset ja pysähtyneet jaksot sekä ottaa sitten
näytteitä yhden kuvan sekuntinopeudella epäterävyyden, keskimääräisen luminanssin
sekä spatiaalisen ja temporaalisen informaation analysoimiseksi. Kierros on rajattu
600 rakenteelliseen näytteeseen, yhteen FFmpeg-/suodatinsäikeeseen, samoihin vain
`file`-protokollan ja säilömuotojen sallittujen luetteloihin, 1 MiB:n prosessitulosteen
enimmäiskokoon sekä enintään 30 sekuntiin välittäjän yhteisen keskeytys-/määräajan
sisällä. Se ei koskaan hyväksy pyynnöstä komentoa, suodatinta, polkua tai URL-osoitetta.

Rakenteelliset arvot ovat determinististä näytteenottoon perustuvaa evidenssiä,
eivät videon semanttista ymmärtämistä. Ne eivät päättele kohteita, toimintoja,
tekstityksiä, puhetta tai käyttäjän tarkoitusta. Kohtausten ja pysähtyneiden
jaksojen rajat muodostavat segmentit; pysähtyneisyyden kattavuus, epäterävyys,
valotus, spatiaalinen yksityiskohtaisuus ja temporaalinen muutos vaikuttavat vain
siihen, miten olemassa oleva 1–16 kuvan budjetti jaetaan. Täysin pysähtynyt segmentti
rajoitetaan yhteen kuvaan, kun taas pysähtymättömät segmentit kilpailevat jäljellä
olevasta budjetista. Kun rajoja on enemmän kuin kuvia, aikajanan tasainen kattavuus
säilytetään, jotta nopeat varhaiset leikkaukset eivät voi peittää pitkää lopussa
olevaa segmenttiä. Kohtausrajat, jotka ovat pysähtyneen jakson rajasta yhden
sekunnin analyysiresoluution sisällä, yhdistetään.

Puuttuvat suodattimet, virheellinen tai tyhjä evidenssi, tunnistimen virhe tai
rajatun esianalyysin aikakatkaisu palautuvat virhetilanteessa täsmälleen tasaiseen
keskipistekäytäntöön. Kutsujan keskeytys tai välittäjän määräaika ei palaudu tähän
käytäntöön: se päättää käynnissä olevan aliprosessin, estää myöhemmän kuvien
poiminnan, ja yksityinen väliaikainen hakemistopuu poistetaan `finally`-lohkossa.

`scripts/perf/video-bridge-fu07-eval.ts` luo deterministisiä, aitoja FFmpeg-testiaineistoja
duplikaattien poiston jälkeisten kuvatekstikutsujen säästöjen, tiheän liikkeen
budjetinjaon, epäterävyys-/valotus-/SI-TI-evidenssin, pitkähäntäisten nopeiden
leikkausten ja asteittaisten häivytysten väärien positiivisten tulosten testaamiseen.
Se tallentaa esianalyysin kokonaiskeston sekä, kun `/usr/bin/time` on käytettävissä,
aliprosessin suoritinajan ja RSS-muistin huippuarvon. Sen laatutarkistukset ovat
ainoastaan rakenteellisia oraakkeleita. Aidon kuvatekstimallin laatu pysyy tilassa
`HOLD`, koska tällä testikehyksellä ei ole valtuutettua päätepistettä tai kiinteää
arvioijaa. Myös rahalliset säästöt pysyvät tilassa `HOLD`, ellei
`--caption-cost-per-call-usd` anna nimenomaista positiivista kustannusarviota kutsua
kohden; skripti ei koskaan keksi kumpaakaan tulosta.

Kunkin kuvan koko on rajattu 4 MiB:iin, kaikkien raakakuvien yhteiskoko 23 MiB:iin
ja välittäjän sarjoitettu vastaus 32 MiB:iin. Yksityinen väliaikainen hakemisto
poistetaan `finally`-lohkossa. OmniRoute ei sisällä FFmpeg:iä eikä hyväksy
mukautettua suoritettavan tiedoston polkua. Ennen kuvatekstitystä silta suorittaa
konservatiivisen visuaalisen duplikaattien poistokierroksen: kukin JPEG pienennetään
16×16-kokoiseksi harmaasävypuskuriksi ja sitä verrataan vain viimeksi säilytettyyn
kuvaan. Kun pyydetty kuvatekstibudjetti on suurempi kuin yksi kuva, poiminta tuottaa
rajatun ehdokasjoukon, jonka koko on enintään kaksinkertainen budjettiin nähden ja
aina enintään 16 kuvaa. Pyydettyä enimmäismäärää sovelletaan vasta duplikaattien
poistamisen jälkeen, ja ensimmäinen sekä viimeinen valittu ehdokas säilytetään
lopullisen harvennuksen aikana, kun budjetti on vähintään kaksi. Versioitu
`grayscale-16x16-mean-cells-v2`-käytäntö käyttää suurempaa seuraavista: luminanssin
keskimääräinen muutos tai niiden esikatselukuvan solujen osuus, joiden normalisoitu
muutos on vähintään 0.05. Duplikaattikynnys on vakio 0.04, joka on valittu
ennustettavuuden vuoksi sen sijaan, että se olisi käytettävissä suoritusaikaisena
asetuksena. Tämä toissijainen suuren kontrastin signaali säilyttää pienet liikkeet
ja näkyvän tekstin muutokset, jotka pelkkään keskiarvoon perustuva vertailu voi
peittää. Vertailijan tai dekooderin virheet palautuvat virhetilanteessa kattavuuden
säilyttävään toimintatapaan. Tulosteen metatiedot erottavat poimitut ehdokkaat,
onnistuneesti käytetyt kuvat ja poistettujen visuaalisten duplikaattien määrän.

Nimenomaisesti merkitty video-osa voi pyytää aikaleimallista yhteystietoarkkia.
Silta muodostaa enintään 4 sarakkeen ja 16 kuvan JPEG-ruudukon. Jokainen
512 pikselin solu upottaa lähteensä aikaleiman suuren kontrastin alapalkkiin,
samalla kun samat aikaleimat säilyvät tekstimuotoisissa metatiedoissa myöhempää
yhdistämistä ja auditointia varten. Valmiin JPEG-tiedoston koko on edelleen rajattu
32 MiB:iin. Jos `sharp` ei pysty dekoodaamaan tai koostamaan ruudukkoa, silta
palaa käyttämään yksittäisiä JPEG-kuvia; asiakkaan keskeytys välittyy silti
arkkitoiminnon läpi.

Tuotantoon siirtoa tukeva evidenssi pidetään tarkoituksella erillään synteettisestä
koostamisen mikrosuorituskykytestistä. `scripts/perf/video-bridge-contact-sheet-eval.ts`
määrittää skeemaversioidun A/B-testikehyksen aidoille OpenAI-yhteensopiville
konenäkömalleille. Se mittaa palveluntarjoajan ilmoittamat tokenit, kokonaisviiveen
(mukaan lukien arkin koostaminen), mallikutsujen määrän ja manifestissa määritettyjen
tosiseikkojen säilymisen. Mallien raakavastauksia ei kirjoiteta raporttiin; vain
SHA-256-tiivisteet ja vastaavat tosiseikkatunnisteet säilytetään. Testikehys ei
tee verkko- tai maksullisia mallikutsuja, ellei `--execute-real`-valitsinta anneta
ja ellei `--model`, `OMNIROUTE_BASE_URL` ja `OMNIROUTE_API_KEY` ole määritetty.
Ilman tällaista nimenomaista aitoa suoritusta sen koneluettava päätös pysyy tilassa
`HOLD`; pelkät synteettiset hyötykuorma- ja kutsumäärämittaukset eivät ole
tuotantoon siirtoa tukevaa evidenssiä.

Kutsujat voivat liittää valinnaisen `transcript.cues`-taulukon tuettuun video-osaan,
kun niillä on jo valmiiksi ajallisesti kohdistettua tekstiä. Jokaisen vihjeen tulee
sisältää `text`, äärellinen `start`/`end`-aikaväli tutkitun keston sisällä sekä
sallittujen luetteloon kuuluva `source` (`client`, `embedded` tai `audio-bridge`);
`confidence` saa oletusarvon `1`, ja sen on pysyttävä välillä `0`–`1`. Täsmälleen
samanlaiset vihjeet yhdistetään. OmniRoute ei koskaan käynnistä litterointia näiden
metatietojen perusteella: validoidut vihjeet kopioidaan kuvattuun tulokseen lähteen,
luottamustason ja aikavälin kanssa, ja ne esitetään epäluotettuina havaintoina
kuvatekstien rinnalla. Virheellinen, sallitun alueen ulkopuolinen tai alkuperätiedoton
teksti hylätään sen sijaan, että se sekoitettaisiin kuvatekstivirtaan. `source`-kentän
arvon ilmoittaa tällä hetkellä kutsuja, eikä palvelin varmista sitä: OmniRoute
valvoo, että arvo on yksi kolmesta sallitusta merkkijonosta, mutta ei vielä
kryptografisesti vahvista, että `embedded`- tai `audio-bridge`-tunniste on todella
peräisin palvelimen omistamasta poiminnasta. Käsittele `source`-arvoa epäluotettuna
vihjeenä, kunnes tällainen varmennus otetaan käyttöön; älä perusta siihen
valtuutuspäätöksiä.

Edistynyt kutsuja voi antaa samalle videolle valmiiksi valtuutetun `audioTranscript`-raidan. Yhdistämisrajapinta suorittaa visuaaliset ja äänihavainnot saman määräajan ja keskeytyssignaalin alaisina, järjestää ne yhteiselle aikajanalle, yhdistää täsmälleen samat kaksoiskappaleet ja ilmoittaa osittaisen tuloksen, kun vain toinen puoli onnistuu. Virheellinen `audioTranscript` heikentää tuloksen osittaiseksi — visuaalinen kuvaus säilytetään ja äänihaara tallentaa puhdistetun virhekoodin — sen sijaan, että koko videon käsittely epäonnistuisi. Haarakohtainen saatavuus, osittaisuuden ilmaisin ja puhdistetut virhekoodit säilytetään kuvatussa tuloksessa, suojakaiteen metatiedoissa (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), tulosvälimuistin metatiedoissa ja sillan yhdistämislaskureissa. Video Bridgen oletuspolku ei käynnistä puheentunnistusta eikä lataa toista kopiota mediasisällöstä; ilman kyseistä nimenomaisesti annettua raitaa se käsittelee vain videota.

**Litteroinnin säilytys (#12150 P1).** Tätä sovelletaan automaattisesti aina, kun Video Bridge (joka itsessään on erikseen käyttöön otettava) muodostaa litterointivihjeen — erillistä säilytysvalitsinta ei ole. Kun pyyntö muodostaa minkä tahansa litterointivihjeen (kutsujan määrittämän `transcript`-kentän tai yhdistetyn `audioTranscript`-kentän), suojakaide merkitsee sen arvolla `videoBridgeObserved` ja tuottaa video­kuvauksesta peitetyn varjokopion — muuten identtisen esityksen, jossa jokaisen vihjeen vapaamuotoinen tekstisisältö korvataan arvolla `[redacted-video-transcript]`. Tämä tehdään korvaamalla rakenteinen vihjekenttä ennen merkkijonon koostamista (ei koskaan jäsentämällä litistettyä tekstiä, joten mikään vihjeen sisältö — haitallinen tai tavallinen, mukaan lukien merkin `]` sisältävät tekstit, kuten `[inaudible]`/`[music]` — ei voi säilyä). Tallennetun kutsulokin pyynnön rungossa jokainen videosta johdettu tekstiosa vaihdetaan tähän peitettyyn varjokopioon sisältöjen yhtäläisyyden perusteella; `fullText`-ankkuri luetaan uudelleen valmistuneesta kutsua edeltävän suojakaiteen hyötykuormasta, joten vastaavuus löytyy edelleen sen jälkeen, kun myöhemmät ketjun suojakaiteet (henkilötietojen ja tunnistetietojen peittäjät, prioriteetit 10/95) ovat muokanneet kuvaustekstiä paikallaan, sekä sen jälkeen, kun järjestelmäkehotteen, siirron tai muistin lisäys on muotoillut viestitaulukon uudelleen. Mallille lähetettävä runko säilyy muuttumattomana. Havaittu pyyntö ei myöskään täytä pysyvää Memory-muistia (sekä pyynnöstä että vastauksesta johdettu poiminta ohitetaan), joten mallin oma vastaus ei voi toistaa litterointitekstiä Memory-muistiin.

**Videon raakakentät (#12430).** Kun silta on käytössä ja natiivi videotuki on tuntematon tai puuttuu, määritetyt `transcript`-/`audioTranscript`-kentät aktivoivat myös `videoBridgeObserved`-merkinnän, vaikka kuvauksen muodostaminen olisi epäonnistunut tai `maxVideos`-raja olisi ylittynyt. `null` ja tyhjät merkkijonot otetaan huomioon; puuttuvia kenttiä ja muuhun kuin videoon liittyviä metatietoja ei oteta huomioon. Säilytettävissä kopioissa nämä kentät peitetään tai pyyntö jätetään pois, ja välimuistit sekä Memory-muisti ohitetaan. Palveluntarjoajan hyötykuorma säilyy muuttumattomana.

Muut säilytettävät kopiot käyttävät samaa havaitun pyynnön signaalia. Suojakaiteita edeltävä asiakkaan pyynnön raaka tilannekuva, muistissa oleva odottava pyyntö ja varhain hylätyn pyynnön loki korvaavat rakenteellisesti video-osien litterointikentät; käsittelyputken vaiheiden ja kontekstin siirron muodostamat merkkijonokehotteet peitetään tallennetun pyynnön rungon vastaanottopisteessä. Tallennettu `video_content_removed`-merkintä saa `previous_response_id`-jatkamisen epäonnistumaan turvallisesti sen sijaan, että tarkoituksella poistettu teksti muodostettaisiin uudelleen. Jos havaitun pyynnön osakohtainen peitetty varjokopio katoaa ennen lokitusta tai yksikin useista videon varjokopioista ei enää vastaa myöhempien pyyntömuutosten jälkeen, säilytettävä pyynnön runko jätetään kokonaan pois sen sijaan, että osittain peitetty litterointi säilytettäisiin.

Havaitun pyynnön tapauksessa mallin vastaus saattaa lainata mitä tahansa litteroinnin osaa ilman rakenteista vihjerajaa. Sen vuoksi vastauksen tallennettu kutsulokin `responseBody` korvataan poisjättömerkinnällä; yksityiskohtaista käsittelyputken artefaktia (joka voi sisältää ylävirran tai asiakkaan runkoja ja suoratoiston osia) ei säilytetä. Semanttiset, idempotenssi- ja päättelyntoistovälimuistit ohittavat pyynnön sekä luku- että kirjoitustoiminnot. Palveluntarjoajan pyyntö ja asiakkaalle näkyvä vastaus säilyvät muuttumattomina. Varhaiset yhteyden ylläpitotavut tyhjennetään väliaikaisesta puskurista, kun yksityiskohtainen artefakti jätetään pois. Kiron virheellisesti muodostettua EventStream-tietovirtaa koskeva varoitus ilmoittaa vain hyötykuorman tavumäärän, ei koskaan sen sisältöä tai JSON-jäsentimen raakaa virhettä.
Tässä ei väitetä, että kaikki muut asiaan liittymättömät palveluntarjoajien tai liitännäisten diagnostiikkatiedot olisi tarkastettu; säilytettävien vastaanottopisteiden laajemman läpikäynnin seuranta tapahtuu kohdassa #11658.

Sisäinen `/api/modality-bridge/video/drilldown`-elinkaari on erillinen takaisinkytkentäosoitteesta käytettävä, tunnisteella todennettu välimuistialusta. Jokainen toiminto vaatii lisäksi kanonisen läpinäkymättömän pääkäyttäjätunnuksen. Ennen tuotantokutsujan käyttöönottoa sen on johdettava kyseinen tunnus todennetusta vuokraajasta, eikä se saa koskaan välittää asiakkaan valitsemaa arvoa. Välimuistiavaimet sitovat kyseisen pääkäyttäjän kanonisiin istunto- ja videoviitetunnuksiin, tallentavat vain niiden SHA-256-johdannaiset avaimet sekä rajaavat sekä luvut että poistot samaan pääkäyttäjään. Välimuisti tallentaa kuhunkin tietueeseen enintään 16 johdettua JPEG-kuvaa, vanhentaa ne kymmenen minuutin kuluttua ja tukee rajattuja `start`-/`end`-lukuja tai istunnon nimenomaista poistamista.

Kukin pääkäyttäjä on rajoitettu 16 tietueeseen ja 64 MiB:uun kanonista JPEG-dataa. Nämä rajat ovat riippumattomia yleisestä 64 tietueen / 256 MiB:n enimmäismäärästä: pääkäyttäjäkohtaisen kiintiön aiheuttama paine poistaa vain kyseisen pääkäyttäjän vähiten äskettäin käytettyjä tietueita ennen yleisen LRU-poiston harkitsemista. Vanhentuneet tietueet poistetaan sekä pääkäyttäjäkohtaisesta että yleisestä kirjanpidosta välimuistitoiminnan yhteydessä, kun taas peruutus tai validoinnin epäonnistuminen ei tallenna osittaista korvausta.

Välimuisti hylkää ei-kanonisen Base64-datan, ylimääräisen täytteen, muut kuin JPEG-mediatiedostot, virheelliset tai
katkaistut JPEG-tiedostot sekä JPEG-tiedostot, jotka tuottavat varoituksen rajatun koko kuvan `sharp`-dekoodauksen
aikana. Se koodaa jokaisen hyväksytyn kuvan uudelleen kanoniseksi JPEG-tiedostoksi, määrittää leveyden ja korkeuden
dekoodatuista tavuista sen sijaan, että luottaisi kutsujan kenttiin, ja hylkää kaikki lopussa olevat
polyglottitavut niiden säilyttämisen sijaan. Molempiin kiintiöihin lasketaan vain rajattu kanoninen pakattu puskuri.
JSON-siirtoraja sisältää Base64-yleiskustannuksen dekoodatun syötteen 32 MiB:n enimmäiskoolle. Jokainen
tallennettu johdos sisältää validoidun JPEG-muodon ja -resoluution, näytteenottokäytännön,
johdosversion, luontiajan, palvelimen laskeman sisältötiivisteen sekä hajautetun viittauksen
ylätason kohteeseen ja luotetun kutsujan antaman ylätason sisällön tiivisteen. Peruutus tarkistetaan
asynkronisten dekoodaus- ja hajautusvaiheiden välissä ennen atomista välimuistiin tallennusta.

Tämä toteutuserä ei vielä yhdistä tuotantotason tuottajaa reittiin eikä
tarjoa moniresoluutioista varianttien valintaa. Läpinäkyvä Video Bridge -pyyntöpolku
ei näin ollen aiheuta lisätyötä, kun taas vuokraajakohtaisen pääkäyttäjän johtaminen ja
FU-08:n koko moniresoluutioinen elinkaari ovat edelleen erikseen tehtävää jatkotyötä
eikä niitä dokumentoida valmiiksi toiminnallisuudeksi.

Kehykset tekstitetään peräkkäin määritetyllä Video-mallilla. Tyhjä
Video-ohitus perii Vision-asetuksen; jos molemmat ovat tyhjiä, Visionin
automaattinen reititin valitsee käytettävän näkökykyisen mallin. Onnistuneet kuvatekstit
korvaavat alkuperäisen osan vakaalla `[Video description:`-etuliitteellä, joka myös
merkitsee tekstin epäluotettavaksi mediasta johdetuksi havainnoksi ja ohjeistaa jatkokäsittelyn
malleja olemaan noudattamatta mediasta löytyviä ohjeita. Kehysten kuvatekstien välimuistiavaimet
sisältävät JPEG-tavut, kehotteen, aikaleiman ja käytettävän mallin; vain onnistuneet
kuvatekstit tallennetaan välimuistiin. Välimuistimerkinnät säilyttävät todellisen onnistuneen tuottajamallin,
myös varamallin; silta ilmoittaa arvon `mixed`, kun eri kehykset
ovat eri mallien tuottamia. Välimuistiosuma käyttää kyseistä tuottajan identiteettiä uudelleen
sen sijaan, että se nimettäisiin uudelleen pyydetyn reitityssuunnitelman mukaisesti. Koko videon tuloksen
välimuistiavain perustuu jokaiseen tulosta muuttavaan syötteeseen — kehotteeseen, käytettävään
malliin, näytteenottokäytäntöön, kehysten määrään, semanttisen analyysin tilaan, normalisoidun
kohdistusvihjeen SHA-256-sormenjälkeen, kohdistusikkunaan, `transcript`-arvoon,
`audioTranscript`-arvoon ja kontaktikuvatoiminnon lippuun — joten minkä tahansa näistä
ulottuvuuksista muuttaminen aiheuttaa välimuistihudin eikä koskaan vanhentuneen tuloksen uudelleenkäyttöä. Visuaalisen deduplikointikäytännön
versio, kynnysarvo ja rajattu ehdokaskehysten määrä sisältyvät myös erikseen
tulosvälimuistin avaimeen ja metatietoihin; käytännön muutos ei näin ollen voi käyttää uudelleen vanhentunutta
koko videon kuvausta. Tulosvälimuistin v4-metatiedot säilyttävät tilan ja
sormenjäljen, mutta eivät koskaan käyttäjän raakaa tehtävää. Suojakaiteiden metatiedot ilmoittavat sekä
pyydetyn että käytettävän analyysitilan; pyydetty `focused`-tila ilman
käyttökelpoista käyttäjätekstiä ilmoitetaan käytännössä `full`-tilaksi.

Suojakaide poimii kaikki tuetut video-osat, mutta kuvaa enintään
`modalityBridgeVideoMaxVideos` videota. Jos kohteen on todettu sisältävän arvon
`supportsVideo === false`, epäonnistuneet ja rajan ylittävät videot muutetaan eksplisiittisiksi turvallisiksi
tekstimerkinnöiksi, jotta raakavideota ei jää jäljelle. Kun ominaisuudesta ei ole tietoa, kyseiset osat
jätetään muuttamatta. Kohteet, joilla on `supportsVideo === true`, ohittavat sillan.
Asiakaspyynnön keskeytyssignaali välittyy latauksen, välittäjän jonon,
aliprosessien ja kuvatekstikutsujen läpi; keskeytykset pysäyttävät käsittelyn videoiden välissä eivätkä koskaan virhetilanteessa
päästä raakaa mediaa läpi.

Ajonaikaiset asetukset tallennetaan tietokantaan ja validoidaan Zodilla:

| Avain                               | Oletusarvo  | Alue / toiminta                                                                                                       |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Valinnainen ajonaikainen toiminto, erikseen käyttöönotettava                                                          |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` säilyttää yleiset kuvatekstit; `focused` käyttää rajattua, epäluotettavaa uusinta käyttäjäkontekstia           |
| `modalityBridgeVideoModel`          | `""`        | Perii Vision Bridge -mallin                                                                                           |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                  |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` tai suhteellinen `segment_aware`; tunnistimen virhetilanteessa käytetään `uniform`-käytäntöä |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                   |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                        |

Vanhat tallennetut Video-aikakatkaisuarvot, jotka ylittävät 120 sekuntia, rajataan
välittäjän määräaikaan; uudet tämän rajan ylittävät asetuskirjoitukset hylätään.
`GET /api/modality-bridge/video/runtime` edellyttää luotettua ja leimattua loopback-
paikallisuutta ennen todennusta tai ajonaikaisen ympäristön tarkistusta, minkä jälkeen vaaditaan hallinnan
todennus. Se palauttaa vain arvon `available`, puhdistetut FFmpeg/ffprobe-versiot ja kiinteän
syyn, kun ajonaikainen ympäristö ei ole käytettävissä. Sisäinen poiminnan päätepiste ei ole
julkinen latausrajapinta: jonon täyttyminen palauttaa arvon `503` ja `Retry-After`-otsakkeen, kutsujan
yhteyden katkeaminen palauttaa arvon `499` ja välittäjän kiinteän määräajan ylittyminen palauttaa arvon `504`. Muunnetut vastaukset lisäävät
merkkijonon `video->text;model=<visionModel>;parts=<videos>` keskitettyyn
`x-omniroute-modality-bridge`-otsakkeeseen poistamatta Vision- tai Audio-segmenttejä.

### Henkilötietojen peittäjä (`piiMasker.ts`)

Suoritetaan **molemmissa** vaiheissa.

- **`preCall`** kloonaa hyötykuorman, käy läpi kentät `system`, `messages`, `input` ja
  `prompt` (mukaan lukien tavalliset merkkijonoalkiot) sekä käyttää `processPII()`-funktiota
  (moduulista `@/shared/utils/inputSanitizer`) merkkijonomuotoisiin `content`- ja `text`-kenttiin. Kun
  `PII_REDACTION_ENABLED=true`, havaittu PII peitetään lähtevästä
  hyötykuormasta. Tämä ei riipu asetuksesta `INPUT_SANITIZER_MODE` (joka hallitsee vain
  kehotesyötteiden injektointikäytäntöä). Kun peittäminen ei ole käytössä, kutsu tallentaa havaintojen
  määrät muuttamatta sisältöä.
- **`postCall`** syväkloonaa vastauksen ja suorittaa `sanitizePIIResponse()`-funktion sekä
  Responses API -muodon peittimen (`maskResponsesOutput` — kattaa kentät
  `output_text` ja `output[].content[].text`). Jos jotakin peitetään,
  muokattu vastaus korvaa alkuperäisen.

Suojakaide ei koskaan estä kutsua; se ainoastaan lisää merkintöjä (`meta.detections`,
`meta.redacted`) tai kirjoittaa sisältöä uudelleen.

### Kehoteinjektio (`promptInjection.ts`)

Tunnistaa vihamielisiä rakenteita käyttäjän toimittamasta sisällöstä ja panee
määritetyn käytännön täytäntöön. Toimintaa ohjaavat ympäristömuuttujat ja konstruktorin
asetukset:

| Asetus     | Ympäristömuuttuja                                                                                     | Oletus | Vaikutus                                                                                                                                                                                                            |
| ---------- | ----------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Käytössä   | `INPUT_SANITIZER_ENABLED`                                                                             | `true` | Kun arvo on `false`, suojakaide palaa välittömästi.                                                                                                                                                                 |
| Tila       | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn` | Injektiokäytäntö: `block`, `warn` tai `log`. (`redact` hyväksytään taaksepäin yhteensopivuutta varten, mutta se **ei** poista injektiotekstiä; pyynnön PII-uudelleenkirjoitusta hallitsee `PII_REDACTION_ENABLED`.) |
| Estokynnys | `blockThreshold`-asetus / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Estämiseen vaadittava vähimmäisvakavuus. Oletusarvolla keskitasoa vain tarkkaillaan.                                                                                                                                |

**Tilan ensisijaisuusjärjestys** (`getMode`): kutsujan `options.mode` →
`INJECTION_GUARD_MODE`-asetuksen **tietokantapohjainen ominaisuuslipun ohitus** (Dashboard → Settings →
Feature Flags) → ympäristön `INJECTION_GUARD_MODE` → ympäristön `INPUT_SANITIZER_MODE` →
`warn`. Hallintapaneelin ohitus on siis ensisijainen ympäristömuuttujiin nähden, joten Feature
Flags -käyttöliittymä hallitsee käynnissä olevaa suojausta reaaliaikaisesti (uudelleenkäynnistystä ei tarvita). Tietokannan luku on vikasietoinen:
jos siinä tapahtuu virhe, suojaus palaa ympäristöön perustuvaan toimintaan, ja kun
ohitusta ei ole asetettu, toiminta on sama kuin pelkästään ympäristömuuttujiin perustuvassa ratkaisussa.

Havaintolähteet:

1. `sanitizeRequest()` moduulista `@/shared/utils/inputSanitizer` (jaettu tunnistinjoukko,
   jota käytetään muualla käsittelyketjussa).
2. Sisäänrakennetut `DEFAULT_GUARD_PATTERNS`-mallit (tällä hetkellä `system_override_inline` ja
   `markdown_system_block`, molempien vakavuus on `high`).
3. Valinnaiset konstruktorioptioiden kautta välitetyt `customPatterns`-mallit (merkkijonoja, säännöllisiä lausekkeita
   tai `{ name, pattern, severity }`-tietueita).

Kun `mode === "block"` **ja** vähintään yksi havainto täyttää vakavuuskynnyksen,
`preCall` palauttaa arvon `{ block: true, message: "Request rejected:
suspicious content detected" }`. Tiloissa `warn`/`log` suojakaide kirjaa tapahtuman mutta
sallii kutsun. Jaettu `evaluatePromptInjection()`-apufunktio viedään myös
kutsujille, joiden on arvioitava kehotteita käyttämättä rekisteriä.

**Tarkistusraja (v3.8.20):** tunnistin tarkistaa vain yhdistetyn kehotetekstin
**ensimmäiset 16 KB** — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 tavua) tiedostossa
`src/shared/utils/inputSanitizer.ts`. Sekä `detectInjection()` että
`evaluatePromptInjection()` kutsuvat `slice(0, MAX_INJECTION_SCAN_BYTES)` ennen
mallisilmukan suorittamista. Injektio-ohjeet sijaitsevat syötteen alkupuolella, joten tämä
rajoittaa säännöllisten lausekkeiden CPU- ja GC-kuormitusta useiden satojen kilotavujen hyötykuormissa heikentämättä tunnistusta (vrt.
#3932, #4041).

### Tunnistetietojen peitin (`credentialMasker.ts`)

Suoritetaan **molemmissa** vaiheissa oletusketjun viimeisenä (prioriteetti `95`). Peittää
tunnetut API-avainten ja salaisten tunnisteiden mallit lähtevästä hyötykuormasta (viestien
sisällöstä, työkalukutsujen argumenteista ja työkalujen tuloksista) **sekä** palveluntarjoajan vastauksesta, jotta
kehotteeseen liitetty tunnistetieto (tai työkalun tuloksessa toistettu tunnistetieto) ei vuoda
ulkopuoliselle palveluntarjoajalle eikä takaisin asiakkaalle.

- **Vain erikseen käyttöön otettava**, sama käytäntö kuin PII-tietojen peittämisessä (lähellä ehdotonta sääntöä #20):
  poissa käytöstä, ellei `settings.credentialRedactionEnabled === true` **tai**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kun se on poissa käytöstä, suojakaide ei tee mitään —
  se ei koskaan estä eikä muokkaa.
- `redactCredentials()` käy läpi koko hyötykuorma-/vastauspuun (`walkValue()`,
  suojattu prototyyppisaastumiselta, sykliturvallinen `WeakSet`-rakenteen avulla) ja korvaa osumat
  `[REDACTED:<type>]`-paikkamerkillä kloonaten vain ne haarat, jotka
  todella muuttuivat.
- `CREDENTIAL_PATTERNS` kattaa LLM-palveluntarjoajien avaimet (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS-/SaaS-tunnisteet (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maksuavaimet (Stripe, Square), pilvipalvelujen
  avaimet (AWS-käyttöavain, Twilio, SendGrid, Mailgun), yksityiset avaimet / JWT:t,
  tunnistetietoja sisältävät yhteysmerkkijonot (`mongodb://user:pass@...` jne.) sekä
  yleisen `Authorization`/`x-api-key`/`api-key`/`apikey`-otsakearvomallin.
  Otsakkeen muotoiset avaimet (`authorization`, `x-api-key`, `api-key`,
  `apikey`) peitetään rakenteellisesti (vain arvo; skeeman etuliite, kuten
  `Bearer `/`Basic `, säilytetään) yleisen tekstiregexin käyttämisen sijaan.
- Suojakaide ei koskaan estä; se vain muokkaa (`modifiedPayload` /
  `modifiedResponse`) ja lisää metatiedot (`meta.credentialsRedacted`, `meta.count`).

Regressiosuoja: `tests/unit/credential-masker-guardrail.test.ts`.

## Perussopimus (`base.ts`)

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
  block?: boolean; // true katkaisee ketjun välittömästi
  message?: string; // näytetään eston yhteydessä
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall palauttaa tämän pyynnön uudelleenkirjoittamiseksi
  modifiedResponse?: TValue; // postCall palauttaa tämän vastauksen uudelleenkirjoittamiseksi
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

Suojakaide ilmaisee, ettei muutoksia ole, palauttamalla joko arvon `void`, `{}` tai
`{ block: false }`. Arvon `modifiedPayload`/`modifiedResponse` palauttaminen korvaa
ketjussa eteenpäin myöhemmille suojakaiteille välitettävän arvon.
`signal?: AbortSignal` välittää kutsujan elinkaaren suojakaiteille. Pyynnön keskeytys on tarkoituksellinen avoimeksi jättävä poikkeus: mediasillat lopettavat työn ja siivoavat palauttamatta käsittelemätöntä mediaa kohteelle, jonka tiedetään, ettei se tue sitä.

## Rekisteri (`registry.ts`)

Singleton-olio `guardrailRegistry` tarjoaa seuraavat toiminnot:

- `register(guardrail)` — lisää suojakaiteen (tai korvaa sen normalisoidun nimen perusteella) ja
  järjestää suojakaiteet uudelleen `priority`-arvon mukaiseen nousevaan järjestykseen.
- `clear()` / `list()` — hallinnollisia aputoimintoja.
- `runPreCallHooks(payload, context)` — käy aktiiviset suojakaiteet läpi, välittää
  hyötykuorman `modifiedPayload`-arvojen kautta ja pysähtyy ensimmäiseen `block: true` -tulokseen.
- `runPostCallHooks(response, context)` — sama käsittely vastauksen puolella.
- `resetGuardrailsForTests({ registerDefaults })` — tyhjentää tilan ja valinnaisesti
  rekisteröi oletukset uudelleen testien puhdasta eristämistä varten.

Molemmat suorittimet palauttavat arvon `{ blocked, payload|response, results, guardrail?, message? }`,
jossa `results` on `GuardrailExecutionResult`-tietueiden taulukko. Tietueet sisältävät
kunkin suojakaiteen `blocked`-, `skipped`-, `modified`-, `error`- ja `meta`-kentät,
joista on hyötyä jäljityksessä.

### Suojakaiteiden poistaminen käytöstä pyyntökohtaisesti

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` kokoaa
duplikaateista puhdistetun luettelon suojakaiteiden nimistä, jotka tulee ohittaa nykyisessä
pyynnössä. Lähteet (kaikki valinnaisia ja yhdistetään):

- `apiKeyInfo.disabledGuardrails`
- Pyynnön rungon `disabledGuardrails` (ylimmällä tasolla)
- Pyynnön rungon `metadata.disabledGuardrails`
- Otsake `x-omniroute-disabled-guardrails` (tai vanha
  `x-disabled-guardrails`)

Arvot voivat olla merkkijonotaulukoita tai pilkuilla eroteltu merkkijono; nimet
normalisoidaan pienikirjaimisiksi kebab-case-muotoon (`pii_masker` → `pii-masker`). Tulos
välitetään rekisterille `context.disabledGuardrails`-arvon kautta, jolloin rekisteri ohittaa
vastaavat suojakaiteet (`skipped: true` kohteessa `results`).

## Suoritusjärjestys

Jokaiselle pyynnölle, joka kulkee tiedostojen `src/sse/handlers/chat.ts` ja
`open-sse/handlers/chatCore.ts` kautta:

1. `resolveDisabledGuardrails(...)` muodostaa ohitusluettelon API-avaimen, pyynnön rungon
   ja otsakkeiden perusteella.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` suorittaa suojamekanismit nousevassa
   prioriteettijärjestyksessä:
   - Käytöstä poistetut suojamekanismit kirjataan tilaan `skipped`.
   - Kunkin suojamekanismin `preCall` voi kirjoittaa hyötykuorman uudelleen `modifiedPayload`-arvon avulla.
   - Ensimmäinen `block: true` keskeyttää ketjun, ja käsittelijä palauttaa
     suojamekanismin hylkäysvastauksen.
3. Mahdollisesti uudelleenkirjoitettu hyötykuorma siirtyy yhdistelmäreititykseen ja edelleen
   ylävirran käsittelyyn.
4. Kun vastaus on koottu, `guardrailRegistry.runPostCallHooks(...)`
   suorittaa saman ketjun vastaukselle. Tässä vaiheessa `block: true` hylkää ylävirran
   vastauksen.

Poikkeuksen aiheuttaneet suojamekanismit kirjataan muodossa `error: <message>` ja lokitetaan
`logger.warn`-kutsulla, mutta ketjun suoritus jatkuu — suunnitellusti salliva virhetilanteissa.

## Määritykset

Sisäänrakennettujen suojamekanismien lukemat ympäristömuuttujat:

| Muuttuja                              | Käyttäjä                | Vaikutus                                                                                                |
| ------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`      | Aseta arvoksi `false`, jos haluat poistaa tunnistuksen kokonaan käytöstä.                               |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`      | Injektiokäytäntö: `warn`, `block` tai `log`. Vanha arvo `redact` ei kirjoita injektiotekstiä uudelleen. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`      | Injektiosuojan tila; myös tietokannan ominaisuuslippu, joka **ohittaa** ympäristömuuttujat (DB > ENV).  |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`      | Vähimmäisvakavuus, jonka `MODE=block` hylkää: `high` (oletus), `medium` tai `low`.                      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`      | Vanha alias muuttujalle `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                              |
| `PII_REDACTION_ENABLED`               | `pii-masker`            | Kun arvo on `true`, pyynnön henkilötiedot peitetään (injektiotilasta riippumatta).                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (alavirta) | Hallitsee vastauksen peittimen toimintaa.                                                               |

Modality Bridge -suojamekanismit lukevat ajonaikaiset määritykset tietokantapohjaisesta asetussäilöstä
(`getSettings()`), eivät ympäristömuuttujista. Kuvankäsittelyn ensisijaiset avaimet ovat
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ja
`modalityBridgeCacheMaxEntries`. Vanhoja
`visionBridge*`-avaimia tuetaan vain dokumentoituna yhden julkaisusyklin lukemisen
vararatkaisuna; hallintapaneelin kirjoitukset käyttävät ensisijaisia avaimia. Oletusarvot ja vararatkaisun
selvitystoiminto sijaitsevat tiedostossa `src/shared/constants/modalityBridgeDefaults.ts`, ja vanhat
vakiot säilytetään tiedostossa `src/shared/constants/visionBridgeDefaults.ts`.

Ääni käyttää asetuksia `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` ja `modalityBridgeAudioMaxClips` sekä jaettuja
`modalityBridgeCache*`-asetuksia. Äänelle ei ole vanhojen avainten vararatkaisua, koska nämä
avaimet otettiin käyttöön Modality Bridge -skeeman yhteydessä.

Video käyttää asetuksia `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` ja
`modalityBridgeVideoTimeout` sekä jaettuja `modalityBridgeCache*`-asetuksia.
Se on oletusarvoisesti poissa käytöstä, koska FFmpeg/ffprobe ovat valinnaisia operatiivisia
riippuvuuksia ja kuvatekstien tuottaminen videoruuduille lisää viivettä ja mallin käyttökustannuksia.

## Mukautetut suojaukset

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

Vaiheet:

1. Luo `src/lib/guardrails/myGuardrail.ts`, joka laajentaa `BaseGuardrail`-luokkaa.
2. Toteuta `preCall` ja/tai `postCall`.
3. Rekisteröi joko tuonnin yhteydessä (lisää `registerDefaultGuardrails`-funktiosta) tai
   kutsu `guardrailRegistry.register(...)` suorituksen aikana — rekisteri korvaa
   kaikki aiemmat suojaukset, joilla on sama normalisoitu nimi.
4. Lisää testit hakemistoon `tests/unit/` (olemassa olevia esimerkkejä:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testaus

Käytä `resetGuardrailsForTests()`-funktiota testien välissä, jotta jokainen testi alkaa tunnetusta tilasta.
Anna `{ registerDefaults: false }`, jos haluat aloittaa tyhjällä rekisterillä ja
rekisteröidä vain testattavat suojaukset. Vision Bridge hyväksyy riippuvuuksien
injektoinnin (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge tarjoaa
vastaavat liityntäkohdat asetuksille, ominaisuuksille, STT-mallin valinnalle, tunnistetietojen
tarkistuksille ja litteroinnille. Testeillä voidaan siten testata kumpaakin työnkulkua ilman
tietokanta- tai verkkoyhteyttä.

## Katso myös

- `src/lib/guardrails/` — toteutus
- `src/shared/utils/inputSanitizer.ts` — jaettu tunnistin, jota käytetään
  kehoteinjektioiden havaitsemiseen ja henkilökohtaisten tunnistetietojen peittämiseen
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridgen oletusarvot ja
  pakotetun siltauksen malliluettelo
- `src/shared/constants/modalityBridgeDefaults.ts` — Vision/Audio-ajonaikaiset jaetut oletusarvot
- `docs/architecture/RESILIENCE_GUIDE.md` — erillinen kerros (piirikatkaisin, jäähdytysajat)
- `docs/reference/ENVIRONMENT.md` — täydellinen ympäristömuuttujien viite

## Injektiosuojauksen reittikattavuus ja red-team-testaus (vaihe 8 · lohko D)

Injektiosuojaus (`createInjectionGuard` / `withInjectionGuard`) kattaa kaikki reitit,
jotka hyväksyvät käyttäjän kehotteita. Se noudattaa `INJECTION_GUARD_MODE`-asetusta (oletus `warn` = vain kirjaus;
`block` = palauttaa HTTP 400 `SECURITY_001`).

| Tyyppi            | Reitit                                                                                                                                               | Oletustila |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Teksti (nykyinen) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn       |
| Generatiivinen    | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn       |
| Data              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn       |

Tekstin poiminta (`extractMessageContents`) kattaa kentät `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team-testaus (öisin, `nightly-llm-security.yml`):** promptfoo varmistaa, että kukin reitti estää
OWASP-LLM-aineiston tilassa `INJECTION_GUARD_MODE=block`; garak suorittaa testit (ohitetaan ilman salaisuutta).
`moderations` sisältyy yhdenmukaisuuden vuoksi — estotilaa käyttävät ylläpitäjät voivat vapauttaa sen
`resolveDisabledGuardrails`-toiminnolla.

Öisin suoritettavassa työnkulussa (`.github/workflows/nightly-llm-security.yml`, cron + manuaalinen
käynnistys) on kaksi työtä:

- **`promptfoo-guard` (estävä)** — suorittaa komennon `promptfoo eval -c promptfooconfig.yaml`
  asetuksella `INJECTION_GUARD_MODE=block`. Kukin vihamielinen tapaus (esim. "ohita kaikki
  aiemmat ohjeet…", DAN-tyyliset suojauksen ohitukset) varmistaa, että vastaus sisältää
  arvon `error.code === "SECURITY_001"` eli että suojaus todella hylkäsi pyynnön.
- **`garak` (neuvoa-antava)** — suorittaa garakin asetuksella `--probes promptinject,dan,leakreplay`
  paikallista OmniRoute-instanssia (`http://localhost:20128/v1`) vasten. Suoritus riippuu
  palveluntarjoajan salaisuudesta (`PROMPTFOO_PROVIDER_KEY`); ilman sitä testi ohitetaan hallitusti, ja
  komentoon on lisätty loppuliite `|| true`, joten se raportoi tulokset aiheuttamatta CI-ajon epäonnistumista.

Suojausaputoiminnon (`createInjectionGuard` / `withInjectionGuard`)
kattavuus ulottuu kaikkiin kehotteita vastaanottaviin `/v1`-reitteihin; kehoteteksti poimitaan
kentistä `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`
`src/shared/utils/inputSanitizer.ts`-tiedoston `extractMessageContents()`-funktiolla.
