# Guardrails (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Hiteles forrás:** `src/lib/guardrails/`
> **Legutóbb frissítve:** 2026-08-29 — v3.8.51 (a Video Bridge átiratának eredetét a hívó deklarálja,
> a szerver még nem ellenőrzi — pontosítva a #11661 alapján)

A guardrailek biztonsági, szabályzati és tartalomátalakítási előírásokat érvényesítenek az OmniRoute és a külső szolgáltatók közötti határon. Minden guardrail megvizsgálhatja (és opcionálisan elutasíthatja, átalakíthatja vagy annotálhatja) a kérés hasznos adatait (`preCall`) és a külső szolgáltatók válaszait (`postCall`).

A rendszer **hiba esetén nyitott**: ha egy guardrail végrehajtás közben kivételt dob, a regisztrációs adatbázis rögzíti a hibát, és a kérés meghiúsítása helyett a következő guardraillel folytatja. A blokkolás mindig explicit döntés (`block: true`), soha nem véletlen.

## Beépített védőkorlátok

A regisztrációs modul importáláskor prioritási sorrendben automatikusan betölt hat védőkorlátot
(lásd: `registry.ts` → `registerDefaultGuardrails()`):

| Prioritás | Név                 | Szakasz(ok)    | Fájl                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Az alacsonyabb prioritási számok futnak le **először**.

### Képkezelési híd (`visionBridge.ts`) — Modalitási híd PR-1

Elfogja a **képfeldolgozásra nem képes modelleknek** szánt, képet tartalmazó kéréseket, és vagy átirányítja a teljes kérést egy képfeldolgozásra képes modellhez, vagy a képrészeket egy konfigurálható képfeldolgozó modell által létrehozott szöveges leírásokra cseréli a külső szolgáltatás meghívása előtt. Ez lehetővé teszi, hogy a csak szöveget kezelő szolgáltatók transzparens módon dolgozzanak fel multimodális adatcsomagokat.

Folyamat:

1. Kihagyás, ha a célmodell már támogatja a képfeldolgozást (kivéve, ha szerepel az `isVisionBridgeForcedModel` kényszerített hídlásra kijelölt modelljeinek listáján).
2. A képrészek kinyerése az `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`) segítségével, amely az **egységes médiaészlelő**
   `detectMediaParts()` függvényt hívja meg az `open-sse/utils/mediaParts.ts` fájlban — ez a kombinált kompatibilitási szűrővel közösen használt egyetlen hiteles forrás.
   A kinyerés engedélyezési listája azokra a legfelső szintű részekre korlátozódik,
   amelyeket a `replaceImageParts` vissza tud illeszteni (a kinyerés↔csere szerződés): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` és Responses API `input_image`. A beágyazott találatok és
   a csak jelzőként szolgáló alakzatok a kombinált szűrőhöz tartoznak, és soha nem lesznek kinyerve.
   Kihagyás, ha egyik sem található.
3. A futásidejű konfiguráció feloldása a `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) segítségével: az új `modalityBridge*`
   beállításkulcsok élveznek elsőbbséget; a régi `visionBridge*` kulcsok **egy cikluson át
   tartalék megoldásként** megmaradnak (visszaállítási időablak). Ha a híd le van tiltva,
   a kihagyás még a média bejárása előtt megtörténik.
4. A módválasztó (`modalityBridgeVisionMode`, lásd az alábbi táblázatot) dönt az
   átirányítás és a leírás között. Az átirányítás olyan `modifiedPayload` értéket ad vissza,
   amelyben csak a `model` lett lecserélve, továbbá a következő metaadatokat:
   `{ rerouted, fromModel, toModel, imagesKept }`.
5. Leírási útvonal: a képek számának korlátozása `maxImages` értékre, a feladattudatos prompt összeállítása,
   a leírási gyorsítótár ellenőrzése, a képfeldolgozó modell **párhuzamos** meghívása
   (`Promise.allSettled`), majd `[Image N]: <description>` szövegrészek beillesztése
   a képek helyére. A sikertelen leírás `null` értéket eredményez, és az eredeti képrész
   **megmarad** (#4012) — kivéve a kombinált leírási útvonalat, amikor minden
   leírás sikertelen volt; ebben az esetben egy igazoltan képfeldolgozásra nem képes külső szolgáltatás
   az `(nem érhető el — nincs csatlakoztatva képfeldolgozásra képes szolgáltató)` helyettesítő szöveget kapja (#8430).
6. A `modifiedPayload` és a metaadatok (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) visszaadása.

#### Módválasztó (`modalityBridgeVisionMode`)

| Mód        | Alapértelmezett | Viselkedés                                                                                                                                                                                                                                                                                                                                                               |
| ---------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔               | Változatlan örökölt heurisztika (#6640/#7204): a nem kombinált/`auto/` modelleket a legjobb képfeldolgozó modellhez irányítja át, kivéve, ha az eredeti modell már rendelkezik használható hitelesítő adatokkal (ekkor leírást készít); a kombinált célok esetén mindig leírást készít.                                                                                  |
| `describe` |                 | Mindig leírást készít — az átirányítási blokkot teljesen kihagyja; mindig a felhasználó által kiválasztott modell válaszol.                                                                                                                                                                                                                                              |
| `reroute`  |                 | Kényszerített átirányítás: a hitelesítő adatokkal rendelkező modell megtartására szolgáló védelmet megkerüli. Az átirányítási **célra** vonatkozó hitelesítőadat-védelem továbbra is érvényben marad — ha nincs használható képfeldolgozási cél, a kérés a leírási útvonalra kerül, így a nyers képek soha nem jutnak el csak szöveget kezelő háttérrendszerhez (#8430). |

A kényszerített módok **azelőtt** rövidre zárják a folyamatot, hogy az automatikus heurisztika lefutna; az `auto` viselkedése
bájtról bájtra megegyezik a PR-1 előtti védőkorlátéval.

#### API-kulcs hatóköre (`visionBridgeKeyScope.ts`)

Amikor a hívó API-kulcsa korlátozza az `allowedConnections` értékét, a kvótakészleteket
(`allowedQuotas`) vagy a modelleket (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), a híd csak olyan
átirányítási és leírási modelleket választ, amelyeket a kulcs használhat, olyan kapcsolatokon,
amelyeket a kulcs szintén használhat. A leírási hívás ezután mindig az OmniRoute önmagába
visszacsatolt útvonalán halad át, az `x-omniroute-self-loop-key-id` fejléccel, így a fogadó csevegési kérés
ismét érvényesíti a kulcs kapcsolat- és modellházirendjét. Az `enforceApiKeyPolicy()`
ezt a fejlécet csak az önmagába visszacsatolt bearer hitelesítéssel együtt veszi figyelembe,
így az kizárólag szűkítheti a hozzáférést, a nem feloldható azonosító pedig elutasításra kerül.

Ha a kulcs számára egyetlen képfeldolgozó modell sem engedélyezett, a leírási útvonal félreáll,
és a kérés változatlanul halad tovább, ugyanazzal a hibát nyitottan kezelő viselkedéssel, mint egy letiltott
védőkorlát esetén (metaadat: `{ skipped: true, reason: "no_permitted_vision_model" }`).
A kulcs nélküli kérések és az ilyen korlátozások nélküli kulcsok pontosan ugyanúgy
viselkednek, mint korábban.

#### Feladattudatos leírási prompt (`modalityBridgeVisionTaskAware`)

Alapértelmezés szerint **true**. A `composeVisionPrompt()` (`visionBridgeHelpers.ts`) hozzáfűzi az
**utolsó felhasználói üzenet** szövegét (500 karakterre csonkítva) az alap
leíró prompthoz, így a leírást a felhasználó tényleges kéréséhez igazítja
(codex-vision-proxy minta), és arra kéri a látásmodellt, hogy írja át a látható
szöveget. Ha a jelző ki van kapcsolva — vagy nincs felhasználói szöveg —, az
alap prompt változatlanul kerül felhasználásra.

A leíró önhurok saját OpenAI-kompatibilis kérése (`callVisionModelSingle()`
a `visionBridgeHelpers.ts` fájlban) mindig az `image_url.detail: "high"` értéket
kéri — feltétel nélkül, minden hívóhoz/szolgáltatóhoz, bármilyen kliensjelzéstől
függetlenül. Az alacsony részletességű mintavételezés éppen annál a
szövegátírási feladatnál rontja az OCR pontosságát, amelyet ez a prompt kér,
ezért maga a leíró hívás mindig nagy részletességet kér, függetlenül attól,
hogy az eredeti bejövő kérés milyen részletességi szintet használt. Ez csak a
belső leíró kérés törzsét érinti; nem változtatja meg azt, ahogyan az OmniRoute
továbbítja a hívó saját `image_url.detail` értékét az elsődleges kérésben — ez
az alapértelmezés külön kerül alkalmazásra, és csak az észlelt OpenCode
klienseknél, a `defaultImageDetail()` függvényben
(`open-sse/handlers/chatCore/upstreamBody.ts`). A leíró önhurok Anthropic
vezetékformátumú ágában nincs `detail` mező, ezért egyik alapértelmezés sem
érinti.

#### A leírás kimeneti korlátja (`modalityBridgeVisionMaxChars`)

| Kulcs                          | Alapérték | Tartomány          |
| ------------------------------ | --------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`       | `0` vagy 100–50000 |

A `0` (alapérték) azt jelenti, hogy **nincs korlát** — a `callVisionModel()`
által visszaadott leírás módosítás nélkül halad tovább, megőrizve a meglévő
viselkedést. A 100–50000 tartományba eső bármely érték `…` utótaggal csonkítja
a leírást, mielőtt az `[Image N]: <description>` formában visszaillesztésre
kerülne (`VisionBridgeGuardrail.preCall()` a
`src/lib/guardrails/visionBridge.ts` fájlban). Növelje ezt az értéket a sok
részletet tartalmazó OCR-feladatoknál, amelyeknél az alsóbb szintű modellnek a
teljes átiratra van szüksége; csökkentse a bőbeszédű látásmodellek
tokenhasználatának korlátozásához. Az irányítópult mezője a Vision lap Advanced
paneljén található (`modality-bridge-max-chars` a
`ModalityBridgeVisionTab.tsx` fájlban), és az 1 és 99 közötti értékeket a
100-as alsó korlátra emeli, miközben az explicit `0` értéket változatlanul
hagyja — a `0` önmagában is érvényes Zod-érték
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nem csupán a
„nincs beállítva” alapértéke.

#### Leírás-gyorsítótár (`modalityBridge/bridgeCache.ts`)

Memórián belüli LRU + TTL gyorsítótár a leíró kimenetekhez, a teljes folyamaton
belül megosztva. A kulcs =
`sha256(imageRef + composedPrompt + configuredBridgeModel)`, hosszúságelőtagos
keretezéssel (mezőhatár-ütközések nélkül). A modellkomponens a **konfigurált**
hídmodell, nem pedig a ténylegesen válaszoló modell — a `callVisionModel`
belsőleg tartalék modellre válthat, és a próbálkozásonkénti kulcsképzés
feldarabolná a gyorsítótárat. A sikertelen leírások soha nem kerülnek
gyorsítótárazásra. Beállítások:

| Kulcs                           | Alapérték | Tartomány |
| ------------------------------- | --------- | --------- |
| `modalityBridgeCacheEnabled`    | `true`    | —         |
| `modalityBridgeCacheTtlMinutes` | `60`      | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`     | 10–5000   |

#### Távoli képek normalizálása (önhurok-leírás/base64-lekérés)

Amikor a híd maga kér le egy **távoli** képet — az Anthropic leíró önhívása és
a claude-vezetékformátumú base64-konverzió
(`ensureBase64ImagesForClaudeWire`), mindkettő a `visionBridgeHelpers.ts`
fájlban található `fetchRemoteImageAsDataUri()` használatával —, az így kapott
adat-URI a `normalizeDataUri()` függvényen
(`open-sse/utils/imageNormalize.ts`) halad át, mielőtt beágyazásra kerülne a
látásmodell kérésébe. A túlméretezett képek **2048px hosszú oldalra** kerülnek
lekicsinyítésre (az OpenAI/Anthropic által már szerveroldalon alkalmazott
átméretezési korlátnak megfelelően), ami csökkenti a feltöltött bájtok
mennyiségét és a késleltetést anélkül, hogy megváltoztatná azt, amit a
látásmodell lát. Az átméretezés dinamikus importtal betöltött `sharp`
használatával történik: olyan platformon, ahol a natív binárisa nem tölthető
be, a `normalizeDataUri()` **soha nem dob kivételt** — visszatér az eredeti
bájtok változatlan továbbításához, így a leíró/base64-konverziós útvonal mindig
működőképes marad. A nem képi bájtok (olyan lekérés eredménye, amely nem adott
vissza dekódolható képet) szintén változatlanul haladnak tovább. Ez a
normalizálás azokra a képekre korlátozódik, amelyeket a híd a saját önhívásához
kér le — soha nem kerül alkalmazásra a hívó nyers, változatlanul továbbított
hasznos terhére, összhangban a kizárólag kifejezett engedéllyel történő
módosítás elvével (20. szigorú szabály).

#### Beállítási séma + migráció

Az új `modalityBridge*` kulcsokat a Zod ellenőrzi az
`updateSettingsSchema` sémában
(`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, a három
`modalityBridgeCache*` kulcs, valamint az Audio Bridge által használt
`modalityBridgeAudio*` csoport. A `141_modality_bridge_settings.sql` migráció
átmásolja a meglévő örökölt `visionBridge*` értékeket a megfelelő új kulcsokba
(idempotens módon, és soha nem írja felül az operátor által beállított
`modalityBridge*` értéket); az örökölt kulcsok egy kiadási cikluson át továbbra
is elfogadottak olvasási tartalékként.

#### Átláthatósági fejléc + statisztikák

A leírással átalakított válaszok tartalmazzák az
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
fejlécet (a `buildModalityBridgeHeader()` állítja elő a
`modalityBridge/bridgeStats.ts` fájlban, és a `withModalityBridgeHeader()`
illeszti be a `src/sse/handlers/chatHelpers.ts` fájlban). Az átirányított
kérésekhez **nem** tartozik fejléc — a hasznos teher változatlan maradt, és a
modell cseréje már látható a válasz törzsének `model` mezőjében.

A `GET /api/modality-bridge/stats` végpont (kezelői hitelesítéssel, a
`GET /api/settings` végponttal azonos szinten) a memóriában tárolt, modalitásonkénti
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` számlálókat adja vissza a `vision`,
`audio` és `video` modalitásokhoz. Az `averageLatencyMs` nevezőjeként a
`latencySamples` értéket használja, nem az összes próbálkozást; az időmérés nélküli
műveletekhez nem hoz létre mesterségesen nulla ezredmásodperces mintát. A `bridged`
továbbra is a sikeres konverziók visszafelé kompatibilis álneve; a sikertelen
próbálkozások nem növelik az értékét.
A számlálók a folyamat újraindításakor tervezetten nullázódnak
(telemetria, nem elszámolás).

#### Irányítópult konfigurációja

A dedikált irányítópult-oldal a
`/dashboard/settings/modality-bridge` útvonalon érhető el. Az URL-ből címezhető
`Vision`, `Audio` és `Video` lapfülek a `tab` értékének váltásakor megőrzik a
lekérdezési paramétereket. A Vision lapfülön az engedélyezés, a mód, a
modellválasztás (beleértve az automatikus alapértelmezést), a feladatérzékeny
promptolás, a speciális időtúllépési/kép-/leíráshossz-/gyorsítótár-korlátok, a
futásidejű számlálók és egy védett mintakérés állítható be. Az Audio lapfül
szintén működőképes: engedélyezési beállítást, kizárólag STT-modelleket tartalmazó,
Auto lehetőséggel rendelkező modellválasztót, időtúllépési és maximális
kliphosszkorlátokat, hangszámlálókat, valamint egy `input_audio` mintatesztet
biztosít. A Video lapfül működőképes: megjeleníti az FFmpeg/ffprobe futásidejű
állapotát a négy explicit felhasználóifelület-állapot egyikével (`unknown`, amíg
az ellenőrzés folyamatban van, vagy nem fejezhető be; `restricted`, ha az
irányítópult gazdagépe nem loopback-cím, ezért az ellenőrzés kliensoldalon
kihagyásra kerül; `unavailable`, ha az ellenőrzés befejeződött és megerősítette
a hiányukat; illetve `available`, az FFmpeg/ffprobe verzióival), tartósan menti
az engedélyezési/modell-/képkocka-/videó-/időtúllépési korlátokat, a
modellválasztót a képfeldolgozásra képes modellekre szűri, és megjeleníti a
videószámlálókat.

Az AI-beállítások alatti korábbi Vision Bridge-kártya mostantól az új oldalra
mutató kompatibilitási hivatkozás; már nem tartalmazza az űrlap második példányát.
A Media Providers az Image-to-Text és Speech-to-Text munkafolyamatokat is a
Modality Bridge megfelelő lapfüleihez kapcsolja, a meglévő Speech-to-Text
játszótér eltávolítása nélkül.

**Saját hurok beléptetési megkerülése:** amikor a leíróhívás az OmniRoute saját
`/v1` saját hurkán keresztül halad (nem szabványos szolgáltatói modell), az
alkérés elküldi az `x-omniroute-admission-bypass: internal` fejlécet, és a
feloldott sajáthurok-hitelesítő adattal hitelesíti magát — helyi módban a helyi
`sk_omniroute` őrértékkel, más esetben az üzemeltető által beállított
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` környezeti kulccsal (#1350), így a
`REQUIRE_API_KEY=true` telepítések továbbra is végrehajthatják a leíróhívást.
A megkerülés kizárólag ezekkel a pontos hitelesítő adatokkal érvényes, ezért a
külső kliensek nem használhatják a fejlécet a beléptetés kihagyására.

A régi alapértelmezések a `src/shared/constants/visionBridgeDefaults.ts`
fájlban találhatók; az új mód-/feladatérzékeny-/gyorsítótár-alapértelmezések és
a beállításfeloldó a `src/shared/constants/modalityBridgeDefaults.ts` fájlban
található. A védelmi mechanizmus egy `deps` konstruktoropciót biztosít, így a
tesztek hamis `getSettings`- és `callVisionModel`-implementációkat injektálhatnak.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Elfogja a hangot tartalmazó csevegési kéréseket, mielőtt azok olyan célhoz
érnének, amelyről nem ismert, hogy támogatja a hangbemenetet. Magát a csevegési
kérést soha nem irányítja át: a hangrészek átírását a meglévő,
OpenAI-kompatibilis, többrészes végponton keresztül végzi, majd a kiválasztott
csevegési modell a szöveges átiratokkal folytatja a feldolgozást.

Folyamat:

1. A `supportsAudio` feloldása a `getResolvedModelCapabilities()` segítségével
   történik. Elsőbbséget élveznek az explicit szolgáltatói nyilvántartási
   metaadatok, majd a statikus modellmetaadatok, végül a szinkronizált
   `modalities_input`. Az `audio` elemet nem tartalmazó deklarált bemeneti lista
   értéke `false`; ha nincs képességre vonatkozó bizonyíték, az érték `null`
   marad. A konzervatív hidat a `false` és a `null` egyaránt aktiválja, míg a
   `true` megkerüli azt.
2. Feloldja a `modalityBridgeAudio*` beállításokat, és a megosztott
   `detectMediaParts()` érzékelővel minden üzenetből kinyeri a kivágható,
   legfelső szintű hangrészeket. A támogatott átviteli formátumok az OpenAI
   `input_audio`, az `audio_url` és a `source.media_type: "audio/*"`. A
   beágyazott hangot az útválasztáshoz érzékeli, de a kivágási útvonal nem
   távolítja el. A feldolgozható mennyiséget a `modalityBridgeAudioMaxClips`
   korlátozza; a későbbi részek változatlanok maradnak.
3. Figyelembe veszi a konfigurált `provider/model` értéket, vagy engedi, hogy a
   `selectAudioBridgeModel()` stabil katalógussorrendben végigjárja az
   `AUDIO_TRANSCRIPTION_PROVIDERS` elemeit, és kiválassza az első olyan modellt,
   amelyhez használható, aktív szolgáltatói hitelesítő adat tartozik.
4. A `callAudioTranscription()` a base64/data-URI formátumú hangot többrészes
   `file` elemmé alakítja, vagy a nyilvános célokra korlátozott kimenő
   védelmen keresztül, DNS-rögzítéssel és 25 MB-os korláttal letölti a távoli
   `audio_url` erőforrást. Ezután POST-kéréssel elküldi a fájlt és a kiválasztott
   modellt a helyi `/v1/audio/transcriptions` saját huroknak, a
   `resolveSelfLoopBearer()` segítségével hitelesítve. A meglévő átírási útvonal
   végzi el a hitelesítő adatok szokásos keresését, a várakozási idő és a
   sebességkorlátozás kezelését, valamint a szolgáltatói továbbítást.
5. A sikeres hívások a megfelelő részeket `[Audio N]: <transcript>` formátumú
   szövegre cserélik. A hívások a `Promise.allSettled` használatával futnak: az
   egyedi hibák megőrzik az eredeti hangrészt (#4012 szerződés). Ha minden hívás
   meghiúsul, és bizonyított, hogy a cél `supportsAudio === false`, a részek
   helyére az `[Audio N]: (unavailable — no STT provider connected)` szöveg
   kerül (#8430 szerződés). Ismeretlen cél (`null`) esetén, ha minden hívás
   meghiúsul, a tartalom változatlan marad. A bizonyítottan csak szöveges cél,
   amelyhez nem áll rendelkezésre használható STT-hitelesítő adat, hálózati
   hívás nélkül ugyanezt az explicit helyettesítő szöveget kapja.

A sikeres átiratok a folyamat egészére kiterjedő Modality Bridge LRU/TTL
gyorsítótárat használják. A kulcs a hanghivatkozásból, a stabil
`audio-transcription` műveletcímkéből és a kiválasztott STT-modellből áll; a
hibák soha nem kerülnek gyorsítótárba. A hangfeldolgozási próbálkozások frissítik
a megosztott `bridged`, `cacheHits`, `failures` és `lastUsedAt` számlálókat.
Az átalakított válaszok tartalmazzák az
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` fejlécet;
a változatlanul továbbított kérések nem kapnak Audio Bridge-szegmenst.

A futásidejű beállítások adatbázisban tároltak és Zod által validáltak:

| Kulcs                         | Alapértelmezett | Tartomány                      |
| ----------------------------- | --------------- | ------------------------------ |
| `modalityBridgeAudioEnabled`  | `true`          | —                              |
| `modalityBridgeAudioModel`    | `""`            | Automatikus vagy STT-azonosító |
| `modalityBridgeAudioTimeout`  | `60000`         | 1000–300000                    |
| `modalityBridgeAudioMaxClips` | `3`             | 1–10                           |

A megosztott gyorsítótárat továbbra is a `modalityBridgeCacheEnabled`,
a `modalityBridgeCacheTtlMinutes` és a `modalityBridgeCacheMaxEntries` szabályozza.

### Videóhíd (`videoBridge.ts`, `videoBridgePipeline.ts`)

Elfogja a Chat Completions `messages` és a Responses API `input` legfelső szintű videórészeit, mielőtt meghívásra kerülne egy olyan cél, amelyről nem ismert, hogy natívan támogatja a videókat.
A támogatott formák az `input_video`, a `video_url`, a `video_source`, a HTTPS URL-ek,
valamint a `data:video/*;base64,...` adat-URI-k. A szövegben szereplő egyszerű fájlneveket a rendszer nem kezeli
videóként.

A `VideoBridgeGuardrail.preCall` (`videoBridge.ts`) felel a kérés bejárásáért,
a képesség- és házirend-ellenőrzésért, a kérésenkénti összesítésért és a válasz hasznos adattartalmáért.
A videónkénti munka — a beszerzés, a teljes eredmény gyorsítótárazása, egy képkockasorozat
leírása (amely egyesíti a hívó által megadott hangátiratot), valamint a próbálkozásonkénti
metrikák/megszakítás/takarítás — a `videoBridgePipeline.ts` fájlban található
`processVideoPart` mögött van elrejtve, amelyet a `preCall` ciklusa videórészenként egyszer hív meg.
Ez a modul határozza meg a `VideoMediaBrokerPort`
(bájtok beszerzése és mintavételezett képkockák kinyerése), a `VideoAudioTranscriptionPort`
(a hívó által megadott hangátirat egyesítése a mintavételezett képaláírásokkal), valamint a
`VideoDrilldownPort` (a képkockák részletes vizsgálatának perzisztenciahatára; még nincs bekötve
a `processVideoPart` folyamatába — jelenleg csak a különálló `/api/modality-bridge/video/drilldown`
útvonal ír részletesvizsgálati bejegyzéseket) explicit portjainak határait is.

A nyilvános `/v1` kérési útvonal soha nem importál és nem hív meg alfolyamatot. A távoli
videók letöltésére 50 MiB-os korlát vonatkozik; a beágyazott base64-videókhoz
konzervatív, videónként 36 MiB-os dekódolt méretkorlát tartozik, hogy a modell/üzenetek/keretezés burkolója
a nyilvános JSON-kérések 50 MiB-os befogadási korlátján belül maradhasson. A beágyazott
hossz és a becsült dekódolt méret ellenőrzése a memóriafoglalás előtt történik. A kezdeti távoli URL-en
és minden átirányításnál kötelező a HTTPS használata, a meglévő, kizárólag nyilvános címeket engedélyező,
DNS-rögzítést alkalmazó kimenő forgalmi védelemmel. A bájtok ezután pontosan a belső
`POST /api/modality-bridge/video/extract` közvetítői határon haladnak át. Ez az útvonal egyszerre
`LOCAL_ONLY` és `SPAWN_CAPABLE`, kizárólag folyamatonként hitelesített,
megbízható visszacsatolási címről érkező kérést fogad el, és soha nem fogad el URL-t, fájlrendszerbeli elérési utat, végrehajtható fájlt
vagy argumentumlistát. Az API törzsméret-kezelési folyamata és a kezelő növekményes törzsolvasója
egymástól függetlenül kényszeríti ki a közvetítő bemenetére vonatkozó 50 MiB-os korlátot. A korlátozott várólistája
egyszerre egy kinyerést futtat, négy függőben lévő feladatot engedélyez, és a függőben lévő bemenetet
100 MiB-ra korlátozza.

A közvetítőn belül az `ffprobe` egy privát helyi fájlt olvas; a rögzített formátumengedélyezési lista
kizárja a lejátszási lista- és jegyzékformátumokat. Az engedélyezett MOV-családba tartozó
konténerek esetében a külső MOV-adathivatkozások alapértelmezés szerint letiltva maradnak, és a
rögzített parancs nem engedélyezi őket. Az `ffprobe` és az `ffmpeg` egyaránt kizárólag a
`file` protokollt engedélyező listát, egy szálat és rögzített argumentumtömböket használ, parancsértelmező nélkül,
a végrehajtható fájlokat pedig a `PATH` alapján oldja fel. A csatolt borítóképet tartalmazó adatfolyamok nem
tekinthetők lejátszható jelölteknek. Minden lejátszható adatfolyamnak meg kell felelnie a korlátoknak, és
az explicit alapértelmezett adatfolyam előnyt élvez a determinisztikus, legalacsonyabb indexű
tartalék választással szemben. A videók hossza legfeljebb 600 másodperc, mérete dimenziónként legfeljebb
8 192 képpont, forrásmérete pedig legfeljebb 33 554 432 képpont lehet. Az FFmpeg 1–16 középponti JPEG-képkockából vesz mintát, a hosszabbik élt felskálázás nélkül legfeljebb 1 024 képpontra
kicsinyíti, és soha nem kap URL-t. A mintavételezés alapértelmezés szerint `uniform`. Az opcionális
`scene_aware` és kísérleti `segment_aware` házirendek egy további
rögzített FFmpeg-menettel dolgozzák fel a már ellenőrzött helyi adatfolyamot, korlátozott számú
`showinfo`-jelenet-időbélyeget választanak ki, és az érzékelő hibája, időtúllépése, hibás kimenete vagy üres
jelölthalmaz esetén determinisztikusan ugyanazokra az egyenletes középpontokra térnek vissza.
A szegmenstudatos mód a középponti mintákat az ellenőrzött jelenetintervallumokkal arányosan osztja el;
a szegmenstudatos bizonyítékokat és a tartalék viselkedést az alábbiak ismertetik részletesen. A szigorú,
16 képkockás korlátot minden házirend esetében a kiválasztás után
alkalmazza a rendszer. Ha egy jelenettudatos kérés csak egyképkockás
kerettel rendelkezik, az aktív teljes videó vagy fókuszablak egyenletes középpontját használja,
és `policyEffective: uniform` értéket jelent: egyetlen kiválasztott jelenetképkocka
nem képes megőrizni mindkét időbeli végpontot. A hívó opcionálisan megadhat egy
véges fókuszablakot (`start`/`end` másodpercben); a rendszer a határokat a média
időtartamához igazítja, a fordított vagy nem véges ablakokat elutasítja, és minden mintavételezési
házirendet kizárólag a normalizált intervallumon belül hajt végre. Az eredményül kapott
ablak bekerül a mintavételi metaadatokba és a nem megbízható leírási
előtagba, így az alsóbb rétegbeli modellek meg tudják különböztetni a fókuszált részletet a teljes
idővonaltól.

A szemantikus képaláírás-fókusz különálló, explicit beállítás. Az alapértelmezett `full`
elemzési mód megőrzi a meglévő képkockapromptot, és soha nem továbbítja a kérés
szövegét a képaláírási modellnek. `focused` módban a híd csak az ugyanabban a Chat- vagy Responses-
tárolóban található, felhasználó által létrehozott legutóbbi nem üres `text`/`input_text` értéket olvassa be,
NFC-formára normalizálja, összevonja a vezérlőkaraktereket és az üres helyeket,
valamint 500 Unicode-kódpontra korlátozza. Üres eredmény esetén pontosan a
`full` promptra tér vissza. A használható útmutatást JSON-ként szerializálja egy erre szolgáló,
nem megbízható felhasználói környezeti blokkban, és az csak a megfigyelhető részleteket rangsorolhatja;
nem bírálhatja felül azt a külön figyelmeztetést, amely tiltja a médiában látható
vagy hallható utasítások követését. A szöveges fókusz soha nem következtet `start`/`end` értékekre,
és nem módosítja az időbeli mintavételezőt.

#### FU-07 strukturális szegmensbizonyíték

A `segment_aware` egyetlen korlátozott előelemzési menetet hajt végre a már validált helyi videófolyamon. A rögzített szűrőlánc először legfeljebb 320 képpont szélességűre méretez, érzékeli a jelenetváltásokat és a kimerevedett időszakokat, majd másodpercenként 1 képkockát mintavételez az elmosódás, az átlagos fénysűrűség, valamint a térbeli/időbeli információ meghatározásához. A menet legfeljebb 600 strukturális mintára, egyetlen FFmpeg-/szűrőszálra, ugyanarra a kizárólag `file` protokollt engedélyező és konténer-engedélyezési listára, 1 MiB-os folyamatkimeneti korlátra, valamint a közvetítő megosztott megszakítási/határidő-keretén belül legfeljebb 30 másodpercre korlátozódik. Soha nem fogad el parancsot, szűrőt, elérési utat vagy URL-t a kérésből.

A strukturális értékek determinisztikus mintavételi bizonyítékok, nem pedig a videó szemantikai értelmezései. Nem következtetnek alanyokra, cselekvésekre, feliratokra, beszédre vagy felhasználói szándékra. A jelenet- és kimerevedési határok szegmenseket alkotnak; a kimerevedési lefedettség, az elmosódás, az expozíció, a térbeli részletesség és az időbeli változás csak azt befolyásolja, hogyan oszlik el a meglévő, 1–16 képkockás keret. Egy teljesen kimerevedett szegmens legfeljebb egy képkockát kaphat, míg a nem kimerevedett szegmensek a fennmaradó keretért versenyeznek. Ha több határ van, mint képkocka, az egyenletes idővonallefedettség megmarad, így a gyors korai vágások nem rejthetnek el egy hosszú záró szegmenst. A kimerevedési határ 1 másodperces elemzési felbontásán belüli jelenethatárok összevonásra kerülnek.

A hiányzó szűrők, a hibás vagy üres bizonyítékok, az érzékelő hibája, illetve a korlátozott előelemzés időtúllépése esetén a rendszer nyitottan hibázik vissza, pontosan az egyenletes felezőponti szabályzatra. A hívó általi megszakítás vagy a közvetítő határideje esetén nincs ilyen nyitott hibakezelés: ez leállítja a folyamatban lévő alfolyamatot, megakadályozza a későbbi képkockakinyerést, a privát ideiglenes könyvtárfa pedig a `finally` blokkban eltávolításra kerül.

A `scripts/perf/video-bridge-fu07-eval.ts` determinisztikus, valós FFmpeg-tesztadatokat állít elő a deduplikálás utáni feliratozási hívások megtakarításának, a nagy mozgássűrűség melletti keretelosztásnak, az elmosódási/expozíciós/SI-TI bizonyítékoknak, a hosszú záró szakasszal rendelkező gyors vágásoknak és a fokozatos áttűnések téves pozitív eredményeinek vizsgálatához. Rögzíti az előelemzés falióra szerinti idejét, valamint ahol a `/usr/bin/time` elérhető, az alfolyamat CPU-idejét és RSS-csúcsértékét. Minőség-ellenőrzései kizárólag strukturális orákulumok. A valós feliratmodell minősége továbbra is `HOLD`, mert ehhez a tesztkörnyezethez nem tartozik engedélyezett végpont vagy rögzített értékelő. A pénzügyi megtakarítás szintén `HOLD` marad, kivéve, ha a `--caption-cost-per-call-usd` kifejezett pozitív hívásonkénti költségbecslést ad meg; a szkript egyik eredményt sem generálja ki mesterségesen.

Minden képkocka mérete legfeljebb 4 MiB, az összes nyers képkockáé együtt legfeljebb 23 MiB, a szerializált közvetítői válaszé pedig legfeljebb 32 MiB lehet. A privát ideiglenes könyvtár a `finally` blokkban eltávolításra kerül. Az OmniRoute nem csomagolja az FFmpeg-et, és nem fogad el egyéni végrehajthatófájl-elérési utat. A feliratozás előtt a híd konzervatív vizuális deduplikálási menetet hajt végre: minden JPEG-et 16×16-os szürkeárnyalatos pufferré redukál, és csak az utoljára megtartott képkockával hasonlítja össze. Egynél több képkockás kért feliratozási keret esetén a kinyerés a keret legfeljebb kétszeresét, de soha nem több mint 16 képkockát tartalmazó, korlátozott jelölthalmazt biztosít. A kért korlát csak a deduplikálás után kerül alkalmazásra; legalább két képkockás keret esetén a végső ritkítás során az első és az utolsó kiválasztott jelölt megmarad. A verziózott `grayscale-16x16-mean-cells-v2` szabályzat az átlagos fénysűrűség-különbség és azon miniatűrcellák aránya közül a nagyobbat használja, amelyek normalizált különbsége legalább 0,05. A duplikációs küszöbérték a 0,04-es konstans, amelyet a kiszámíthatóság érdekében választottak ahelyett, hogy futásidejű beállításként tennék elérhetővé. Ez a másodlagos, nagy kontrasztú jel megőrzi azokat a kis mozgásokat és láthatószöveg-változásokat, amelyeket egy kizárólag átlagon alapuló összehasonlítás elrejthet. Az összehasonlító vagy a dekódoló hibái esetén a rendszer nyitottan hibázik, és megtartja a lefedettséget. A kimeneti metaadatok elkülönítik a kinyert jelölteket, a sikeresen felhasznált képkockákat és az eldobott vizuális duplikátumokat.

Egy kifejezetten megjelölt videórész időbélyeggel ellátott kontaktmásolatot kérhet. A híd legfeljebb 4 oszlopos, 16 képkockás JPEG-rácsot készít. Minden 512 képpontos cella nagy kontrasztú alsó sávba égeti a forrás időbélyegét, miközben ugyanezek az időbélyegek a szöveges metaadatokban is megmaradnak a későbbi társítás és auditálás érdekében. A teljes JPEG mérete továbbra is legfeljebb 32 MiB. Ha a `sharp` nem tudja dekódolni vagy összeállítani a rácsot, a híd visszatér az egyedi JPEG-képkockákhoz; az ügyfél általi megszakítás továbbra is továbbterjed a kontaktmásolat-műveleten.

Az előléptetési bizonyíték szándékosan elkülönül a szintetikus összeállítási mikroteljesítményteszttől. A `scripts/perf/video-bridge-contact-sheet-eval.ts` sémaverzióval ellátott A/B tesztkörnyezetet definiál valós, OpenAI-kompatibilis vizuális modellekhez. Méri a szolgáltató által jelentett tokeneket, a teljes folyamat falióra szerinti késleltetését — beleértve a kontaktmásolat összeállítását —, a modellhívások számát és a jegyzékben meghatározott tények megőrzését. A nyers modellválaszok nem kerülnek a jelentésbe; csak a SHA-256 kivonatok és az egyező tényazonosítók maradnak meg. A tesztkörnyezet nem kezdeményez hálózati vagy fizetős modellhívást, hacsak nincs megadva a `--execute-real`, és nincs beállítva a `--model`, az `OMNIROUTE_BASE_URL` és az `OMNIROUTE_API_KEY`. Ilyen kifejezett valós futtatás nélkül a géppel olvasható ítélet `HOLD` marad; a szintetikus hasznosadat- és hívásszámmérések önmagukban nem minősülnek előléptetési bizonyítéknak.

A hívók opcionális `transcript.cues` tömböt csatolhatnak egy támogatott videórészhez, ha már rendelkeznek időben igazított szöveggel. Minden jelzésnek tartalmaznia kell `text` mezőt, a vizsgált időtartamon belüli véges `start`/`end` intervallumot, valamint engedélyezési listán szereplő `source` értéket (`client`, `embedded` vagy `audio-bridge`); a `confidence` alapértelmezett értéke `1`, és `0` és `1` között kell maradnia. A pontosan azonos jelzések összevonásra kerülnek. Az OmniRoute soha nem indít átírást ezekből a metaadatokból: a validált jelzéseket forrásukkal, megbízhatósági értékükkel és intervallumukkal együtt átmásolja a leírt eredménybe, és nem megbízható megfigyelésekként jeleníti meg a képkockafeliratok mellett. Az érvénytelen, tartományon kívüli vagy eredetmegjelölés nélküli szöveget elutasítja, ahelyett hogy belekeverné a feliratfolyamba. A `source` mezőt jelenleg a hívó deklarálja, nem pedig a kiszolgáló ellenőrzi: az OmniRoute kikényszeríti, hogy az érték a három engedélyezett karakterlánc egyike legyen, de még nem erősíti meg kriptográfiailag, hogy egy `embedded` vagy `audio-bridge` címke valóban a kiszolgáló tulajdonában lévő kinyerési folyamatból származik. A `source` mezőt nem megbízható útmutatásként kell kezelni mindaddig, amíg ez az ellenőrzés meg nem valósul; nem szabad rá jogosultsági döntéseket alapozni.

Egy haladó hívó megadhat egy, ugyanahhoz a videóhoz tartozó, már engedélyezett `audioTranscript` sávot. Az egyesítési réteg a vizuális és hangalapú megfigyeléseket közös határidővel és megszakítási jellel futtatja, közös idővonalon rendezi őket, összevonja a teljesen azonos elemeket, és részleges eredményt jelent, ha csak az egyik oldal jár sikerrel. Az érvénytelen `audioTranscript` részleges eredményre vált vissza — a vizuális leírás megmarad, a hangág pedig egy megtisztított hibakódot rögzít — ahelyett, hogy a teljes videó feldolgozása meghiúsulna. Az ágankénti elérhetőség, a részlegességi jelző és a megtisztított hibakódok megmaradnak a leírt eredményben, a védőkorlát metaadataiban (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), az eredmény-gyorsítótár metaadataiban és a híd egyesítési számlálóiban. Az alapértelmezett Video Bridge-útvonal nem indít beszédből szöveggé alakítást, és nem tölt le egy második médiamásolatot; e kifejezetten megadott sáv nélkül továbbra is csak videót dolgoz fel.

**Átiratmegőrzés (#12150 P1).** Ez automatikusan érvényesül, valahányszor a Video Bridge (amely maga is külön engedélyezendő) megjelenít egy átiratjelzést — nincs külön megőrzési jelző. Ha egy kérés bármilyen átiratjelzést megjelenít (egy hívó által deklarált `transcript` vagy egy egyesített `audioTranscript` mezőt), a védőkorlát `videoBridgeObserved` jelöléssel látja el, és létrehozza a videóleírás kitakart árnyékmásolatát — egy azonos megjelenítést, amelyben minden jelzés szabad szöveges törzsét a `[redacted-video-transcript]` érték helyettesíti; ez a strukturált jelzésmező behelyettesítésével készül még a karakterlánc összeállítása előtt (soha nem az egybesimított szöveg elemzésével, így semmilyen jelzéstartalom — legyen rosszindulatú vagy szokványos, beleértve a `]` karaktert tartalmazó törzseket, például az `[inaudible]`/`[music]` elemeket — nem maradhat meg). A tartósan tárolt hívásnapló kérési törzse minden videóból származó szövegrészt erre a kitakart árnyékmásolatra cserél, tartalmi egyezés alapján; a `fullText` horgonyszöveget a hívás előtti, már elkészült védőkorlát-adatcsomagból olvassa be újra, így az egyezés akkor is sikeres marad, ha a lánc későbbi védőkorlátjai (a személyesadat- és hitelesítőadat-maszkolók, 10/95-ös prioritással) helyben átírják a leírás szövegét, illetve miután a rendszerprompt, az átadás és a memória beillesztése átalakítja az üzenettömböt. A modellnek továbbított törzs változatlan marad. Egy megfigyelt kérés nem tölt fel tartós Memory-t sem (a kérésből és a válaszból történő kinyerés egyaránt kimarad), így a modell saját válasza sem másolhatja be az átirat szövegét a Memory-ba.

**Nyers videómezők (#12430).** Ha a híd engedélyezve van, és a natív videótámogatás ismeretlen vagy hiányzik, a definiált `transcript`/`audioTranscript` mezők szintén aktiválják a `videoBridgeObserved` jelölést, még a leírás meghiúsulása vagy egy `maxVideos` korlát elérése után is. A `null` értékek és az üres karakterláncok beleszámítanak; a hiányzó mezők és a nem videóhoz tartozó metaadatok nem. A megőrzött másolatok kitakarják ezeket a mezőket, vagy kihagyják a kérést, a gyorsítótárak és a Memory használata pedig kimarad. A szolgáltatói adatcsomag változatlan marad.

A további megőrzött másolatok ugyanezt a megfigyeltkérés-jelzést használják. A védőkorlát előtti nyers klienskérés-pillanatkép, a memóriában lévő függőben lévő kérés és a korán elutasított kérés naplója strukturált módon lecseréli a videórészek átiratmezőit; a folyamat szakaszai és a kontextusátadás által előállított karakterlánc-promptok kitakarása a tartósan tárolt kérési törzs fogadópontján történik. A tartósan tárolt `video_content_removed` jelölő biztosítja, hogy a `previous_response_id` használatával történő folytatás zártan hiúsuljon meg, ahelyett, hogy újraalkotná a szándékosan elvetett szöveget. Ha egy megfigyelt kérés a naplózás előtt elveszíti a részenkénti kitakarási árnyékmásolatát, vagy a későbbi kérésmódosítások után több videós árnyékmásolat közül akár csak egy sem egyezik, a megőrzött kérési törzs teljes egészében kimarad, ahelyett, hogy részlegesen kitakart átiratot őrizne meg.

Megfigyelt kérés esetén a modell válasza az átirat bármely részét idézheti strukturált jelzéshatár nélkül. Ezért a tartósan tárolt hívásnapló `responseBody` mezőjét egy kihagyásjelölő helyettesíti; a részletes folyamat-artefaktum (amely szolgáltatói/kliensoldali törzseket és streamdarabokat is tartalmazhat) nem marad meg. A szemantikai, idempotencia- és következtetés-visszajátszási gyorsítótárak esetében az adott kérésnél mind az olvasás, mind az írás kimarad. A szolgáltatói kérés és a kliens számára látható válasz változatlan marad. A korai életben tartó bájtok kiürülnek az ideiglenes pufferből, amikor a részletes artefaktum kimarad. A Kiro hibás EventStream-formátumra vonatkozó figyelmeztetése kizárólag az adatcsomag bájtban mért méretét jelenti, annak tartalmát vagy a JSON-elemző nyers hibaüzenetét soha.
Ez nem állítja, hogy minden, ettől független szolgáltatói vagy bővítményi diagnosztikát átvizsgáltak; a megőrzött fogadópontok szélesebb körű felülvizsgálását a #11658 követi nyomon.

A belső `/api/modality-bridge/video/drilldown` életciklus egy különálló, loopback-/tokenhitelesített gyorsítótár-alapréteg. Minden művelethez kanonikus, átlátszatlan elsődlegesazonosító is szükséges. Egy éles hívó engedélyezése előtt ebből kell származtatnia az azonosítót a hitelesített bérlő alapján, és soha nem továbbíthat kliens által kiválasztott értéket. A gyorsítótár kulcsai ezt az elsődleges azonosítót kanonikus munkamenet- és videóhivatkozás-azonosítókhoz kötik, csak azok SHA-256-alapú kulcsait tárolják, és mind az olvasást, mind a törlést ugyanarra az elsődleges azonosítóra korlátozzák. A gyorsítótár bejegyzésenként legfeljebb 16 származtatott JPEG-képkockát tárol, tíz perc után lejáratja őket, és támogatja a korlátozott `start`/`end` olvasásokat vagy a munkamenet explicit törlését.

Minden elsődleges azonosító legfeljebb 16 bejegyzésre és 64 MiB kanonikus JPEG-adatra korlátozódik. Ezek a korlátok függetlenek a globális, 64 bejegyzéses/256 MiB-os felső határtól: az elsődleges azonosító kvótájára nehezedő nyomás csak az adott azonosító legrégebben használt bejegyzéseit távolítja el, mielőtt a globális LRU-alapú eltávolítás szóba kerülne. A gyorsítótár használatakor a lejárt bejegyzések mind az elsődleges azonosítóhoz tartozó, mind a globális elszámolásból törlődnek, míg megszakítás vagy ellenőrzési hiba esetén részleges csere nem kerül véglegesítésre.

A gyorsítótár elutasítja a nem kanonikus Base64-kódolást, a felesleges kitöltést, a nem JPEG-médiát, a hibás vagy
csonkolt JPEG-fájlokat, valamint azokat a JPEG-fájlokat, amelyek figyelmeztetést eredményeznek egy korlátozott, teljes képes `sharp`
dekódolás során. Minden elfogadott képet kanonikus JPEG-ként kódol újra, a szélességet és a magasságot
a dekódolt bájtokból határozza meg a hívó által megadott mezők megbízhatónak tekintése helyett, és az esetleges záró
poliglot bájtokat megőrzés helyett elveti. Mindkét kvótába kizárólag a korlátozott méretű, kanonikus tömörített puffer
számít bele. A JSON vezetékes korlátja tartalmazza a Base64 többletterhelését a 32 MiB-os
dekódolt bemeneti felső határhoz. Minden
tárolt származtatás rögzíti az ellenőrzött JPEG-formátumot és -felbontást, a mintavételi szabályzatot,
a származtatás verzióját, a létrehozás idejét, a kiszolgáló által kiszámított tartalomkivonatot, valamint a szülő
kivonatolt hivatkozását és a megbízható hívó által megadott szülői tartalomkivonatot. A rendszer
az aszinkron dekódolási/kivonatolási fázisok között, az atomi gyorsítótár-véglegesítés előtt ellenőrzi a megszakítást.

Ez a rész még nem kapcsol éles előállítót az útvonalhoz, és nem
biztosít többfelbontású változatkiválasztást. Az átlátszó Video Bridge-kérési
útvonal ezért nem jár többletmunkával, míg a bérlőhöz kötött identitásszármaztatás és
a teljes FU-08 többfelbontású életciklus továbbra is kifejezetten utólag elvégzendő munka,
nem pedig befejezett működésként dokumentált funkció.

A képkockákhoz a konfigurált Video modellel egymás után készülnek képaláírások. Az üres
Video-felülbírálás örökli a Vision beállítást; ha mindkettő üres, a Vision
automatikus útválasztója választja ki a tényleges, képfeldolgozásra képes modellt. A sikeres képaláírások
az eredeti részt egy stabil `[Video description:` előtaggal helyettesítik, amely egyben
nem megbízható, médiából származó megfigyelésként jelöli meg a szöveget, és arra utasítja az alárendelt
modelleket, hogy ne kövessék a médiában található utasításokat. A képkocka-képaláírások gyorsítótárkulcsai
tartalmazzák a JPEG-bájtokat, a promptot, az időbélyeget és a tényleges modellt; csak a sikeres
képaláírások kerülnek a gyorsítótárba. A gyorsítótár-bejegyzések megőrzik a ténylegesen sikeres előállítómodellt,
beleértve a tartalék modellt is; a híd `mixed` értéket jelent, ha a különböző képkockákat
különböző modellek állították elő. A gyorsítótár-találat újra felhasználja ezt az előállítói identitást,
ahelyett, hogy a kért útválasztási tervként címkézné át. A teljes videó eredményének
gyorsítótárkulcsa minden olyan bemeneten alapul, amely módosítja a kimenetet — a prompton, a tényleges
modellen, a mintavételi szabályzaton, a képkockaszámon, a szemantikai elemzési módon, a normalizált
fókusztipp SHA-256-ujjlenyomatán, a fókuszablakon, a `transcript`,
`audioTranscript` értéken és a kontaktlap jelzőjén —, így e
dimenziók bármelyikének módosítása gyorsítótárhibát eredményez, soha nem elavult újrafelhasználást. A vizuális deduplikációs szabályzat
verziója, küszöbértéke és a jelölt képkockák korlátozott száma szintén explicit módon szerepel az
eredmény-gyorsítótár kulcsában és metaadataiban; ezért a szabályzat módosítása nem használhat fel újra elavult
teljesvideó-leírást. Az eredmény-gyorsítótár v4 metaadatai megőrzik a módot és az
ujjlenyomatot, de soha nem a nyers felhasználói feladatot. A védőkorlát metaadatai a kért és a tényleges
elemzési módot egyaránt jelentik; a használható felhasználói szöveg nélkül kért `focused` mód
ténylegesen `full` módként jelenik meg.

A védőkorlát minden támogatott videórészt kinyer, de legfeljebb
`modalityBridgeVideoMaxVideos` számú videót ír le. Olyan cél esetén, amelyről bizonyított, hogy
`supportsVideo === false`, a sikertelen és a korlátot meghaladó videók explicit, biztonságos
szöveges jelölőkké alakulnak, így nem marad meg nyers videó. Ha a képesség ismeretlen, ezek a részek
változatlanok maradnak. A `supportsVideo === true` értékű célok megkerülik a hidat.
Az ügyfélkérés megszakítási jele továbbterjed a letöltésen, a közvetítő várólistáján,
az alfolyamatokon és a képaláírási hívásokon keresztül; a megszakítások leállítják a feldolgozást a videók között, és hiba esetén soha
nem engedik tovább a nyers médiát.

A futásidejű beállítások adatbázisban tároltak, és Zod által ellenőrzöttek:

| Kulcs                               | Alapértelmezés | Tartomány / működés                                                                                                             |
| ----------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`        | Opcionális futtatókörnyezet, külön engedélyezendő                                                                               |
| `modalityBridgeVideoAnalysisMode`   | `"full"`       | A `full` megőrzi az általános képaláírásokat; a `focused` korlátozott, nem megbízható legutóbbi felhasználói kontextust használ |
| `modalityBridgeVideoModel`          | `""`           | Örökli a Vision Bridge modelljét                                                                                                |
| `modalityBridgeVideoFrameCount`     | `8`            | 1–16                                                                                                                            |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`    | `uniform`, `scene_aware` vagy arányos `segment_aware`; az érzékelő hibája esetén visszaáll `uniform` módra                      |
| `modalityBridgeVideoMaxVideos`      | `1`            | 1–4                                                                                                                             |
| `modalityBridgeVideoTimeout`        | `120000`       | 1000–120000 ms                                                                                                                  |

A 120 másodpercnél nagyobb, tartósan tárolt örökölt Video-időtúllépési értékek a
közvetítő határidejére korlátozódnak; az ezt a korlátot meghaladó új beállítási írásokat a rendszer elutasítja.
A `GET /api/modality-bridge/video/runtime` azonosítás vagy futtatókörnyezeti vizsgálat előtt
megbízhatóan megjelölt visszacsatolási helyi eredetet, majd felügyeleti
hitelesítést igényel. Kizárólag az `available` értéket, megtisztított FFmpeg/ffprobe-verziókat, valamint a futtatókörnyezet
elérhetetlensége esetén egy rögzített indokot ad vissza. A belső kinyerési végpont nem
nyilvános feltöltési API: a várólista telítettsége `503` választ és `Retry-After` fejlécet, a hívó
kapcsolatának megszakadása `499` választ, a közvetítő rögzített határideje pedig `504` választ eredményez. Az átalakított válaszok
a `video->text;model=<visionModel>;parts=<videos>` értéket adják hozzá a központi
`x-omniroute-modality-bridge` fejléchez a Vision- vagy Audio-szegmensek eltávolítása nélkül.

### PII-maszkoló (`piiMasker.ts`)

**Mindkét** szakaszban fut.

- A **`preCall`** klónozza a hasznos adatot, bejárja a `system`, `messages`, `input` és
  `prompt` mezőket (beleértve az egyszerű karakterlánc-elemeket is), majd alkalmazza a
  `processPII()` függvényt (az `@/shared/utils/inputSanitizer` modulból) a karakterlánc típusú
  `content`/`text` mezőkre. Ha a `PII_REDACTION_ENABLED=true`, az észlelt személyazonosításra
  alkalmas adatok maszkolva lesznek a kimenő hasznos adatban. Ez független az
  `INPUT_SANITIZER_MODE` beállítástól (amely kizárólag a promptinjektálási szabályzatot
  vezérli). Ha a maszkolás ki van kapcsolva, a hívás az észlelések számát rögzíti
  a tartalom átírása nélkül.
- A **`postCall`** mélymásolatot készít a válaszról, majd futtatja a
  `sanitizePIIResponse()` függvényt, valamint a Responses API alakjához tartozó
  maszkolót (`maskResponsesOutput` — lefedi az `output_text` és az
  `output[].content[].text` mezőket). Ha bármilyen maszkolás történik, a
  módosított válasz lecseréli az eredetit.

A védelmi mechanizmus soha nem blokkol; csak megjegyzésekkel látja el
(`meta.detections`, `meta.redacted`) vagy átírja a tartalmat.

### Promptinjektálás (`promptInjection.ts`)

Észleli a felhasználó által megadott tartalomban lévő támadó jellegű
struktúrákat, és érvényesíti a beállított szabályzatot. A működést környezeti
változók és konstruktorbeállítások vezérlik:

| Beállítás              | Környezeti változó                                                                                       | Alapérték | Hatás                                                                                                                                                                                                                                                 |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Engedélyezve           | `INPUT_SANITIZER_ENABLED`                                                                                | `true`    | `false` esetén a védelmi mechanizmus azonnal befejezi a működést.                                                                                                                                                                                     |
| Mód                    | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                          | `warn`    | Injektálási szabályzat: `block`, `warn` vagy `log`. (A `redact` a visszamenőleges kompatibilitás érdekében elfogadott, de **nem** távolítja el az injektálási szöveget; a kérésben lévő személyes adatok átírását a `PII_REDACTION_ENABLED` vezérli.) |
| Blokkolási küszöbérték | `blockThreshold` beállítás / `INPUT_SANITIZER_BLOCK_THRESHOLD` (`INJECTION_GUARD_BLOCK_THRESHOLD` álnév) | `high`    | A blokkoláshoz szükséges minimális súlyosság. Alapértelmezés szerint a közepes súlyosság csak megfigyelést eredményez.                                                                                                                                |

**Módprecedencia** (`getMode`): a hívó `options.mode` beállítása →
az `INJECTION_GUARD_MODE` **adatbázisbeli funkciójelző-felülbírálása** (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` környezeti változó → `INPUT_SANITIZER_MODE` környezeti változó →
`warn`. Az irányítópulton megadott felülbírálás ezért elsőbbséget élvez a környezeti
változókkal szemben, így a Feature Flags felülete újraindítás nélkül, élőben
vezérli a futó védelmet. Az adatbázis olvasása hibabiztos:
hiba esetén a védelem visszatér a környezeti változókon alapuló működéshez,
felülbírálás hiányában pedig a működés megegyezik a kizárólag környezeti
változókon alapuló feloldással.

Észlelési források:

1. Az `@/shared/utils/inputSanitizer` modul `sanitizeRequest()` függvénye
   (a feldolgozási folyamat más részein is használt közös észlelőkészlet).
2. A beépített `DEFAULT_GUARD_PATTERNS` (jelenleg a `system_override_inline` és
   a `markdown_system_block`, mindkettő `high` súlyosságú).
3. A konstruktorbeállításokon keresztül átadott opcionális `customPatterns`
   (karakterláncok, reguláris kifejezések vagy `{ name, pattern, severity }`
   rekordok).

Ha `mode === "block"` **és** legalább egy észlelés eléri a súlyossági
küszöbértéket, a `preCall` a következőt adja vissza: `{ block: true, message: "Request rejected:
suspicious content detected" }`. `warn`/`log` módban a védelmi mechanizmus naplózza az eseményt, de
engedélyezi a hívást. A megosztott `evaluatePromptInjection()` segédfüggvény
szintén exportálva van azon hívók számára, amelyek a nyilvántartás használata
nélkül szeretnék kiértékelni a promptokat.

**Vizsgálati korlát (v3.8.20):** az észlelő az összefűzött promptszövegnek csak
az **első 16 KB-os** részét vizsgálja — `MAX_INJECTION_SCAN_BYTES = 16 * 1024`
(16 384 bájt) a `src/shared/utils/inputSanitizer.ts` fájlban. A minták
bejárása előtt a `detectInjection()` és az `evaluatePromptInjection()` is
végrehajtja a `slice(0, MAX_INJECTION_SCAN_BYTES)` műveletet. Az injektálási
utasítások a bemenet elejéhez közel helyezkednek el, így ez korlátozza a
reguláris kifejezések CPU-/GC-terhelését a több száz KB-os hasznos adatokon
anélkül, hogy gyengítené az észlelést (vö. #3932, #4041).

### Hitelesítőadat-maszkoló (`credentialMasker.ts`)

**Mindkét** szakaszban fut, az alapértelmezett lánc utolsó elemeként
(`95`-ös prioritással). Maszkolja a jól ismert API-kulcs- és titkostoken-mintákat
a kimenő hasznos adatból (az üzenetek tartalmából, az eszközhívások
argumentumaiból és az eszközök eredményeiből), **valamint** a szolgáltató
válaszából, így a promptba beillesztett (vagy egy eszközeredmény által
visszaadott) hitelesítő adat nem szivárog ki sem a felsőbb szintű
szolgáltatóhoz, sem vissza az ügyfélhez.

- **Csak kifejezett engedélyezéssel**, a PII-kitakarással megegyező konvenció szerint (a 20. szigorú szabályhoz kapcsolódóan):
  le van tiltva, kivéve, ha `settings.credentialRedactionEnabled === true` **vagy**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kikapcsolt állapotban a védőkorlát nem végez műveletet —
  soha nem blokkol és soha nem ír át semmit.
- A `redactCredentials()` bejárja a teljes payload-/válaszfát (`walkValue()`,
  prototípus-szennyezés ellen védett, a `WeakSet` révén ciklusbiztos), és a találatokat
  `[REDACTED:<type>]` helyőrzőre cseréli, miközben csak a ténylegesen
  módosult ágakat klónozza.
- A `CREDENTIAL_PATTERNS` lefedi az LLM-szolgáltatók kulcsait (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), a VCS-/SaaS-tokeneket (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), a fizetési kulcsokat (Stripe, Square), a felhőszolgáltatási
  kulcsokat (AWS-hozzáférési kulcs, Twilio, SendGrid, Mailgun), a privát kulcsokat / JWT-ket,
  a hitelesítő adatokat tartalmazó kapcsolati karakterláncokat (`mongodb://user:pass@...` stb.), valamint
  egy általános, az `Authorization`/`x-api-key`/`api-key`/`apikey` fejlécek értékeire
  illeszkedő mintát. A fejlécformájú kulcsok (`authorization`, `x-api-key`, `api-key`,
  `apikey`) kitakarása strukturálisan történik (csak az értéké, miközben a
  `Bearer `/`Basic ` sémelőtag megmarad), nem pedig az általános szöveges reguláris kifejezéssel.
- A védőkorlát soha nem blokkol; kizárólag átír (`modifiedPayload` /
  `modifiedResponse`) és annotál (`meta.credentialsRedacted`, `meta.count`).

Regresszióvédő teszt: `tests/unit/credential-masker-guardrail.test.ts`.

## Alapszerződés (`base.ts`)

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
  block?: boolean; // true esetén megszakítja a láncot
  message?: string; // blokkoláskor jelenik meg
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // a preCall adja vissza a kérés átírásához
  modifiedResponse?: TValue; // a postCall adja vissza a válasz átírásához
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

Egy védőkorlát a „nincs változás” állapotot a `void`, a `{}` vagy a
`{ block: false }` egyikének visszaadásával jelzi. A `modifiedPayload`/`modifiedResponse`
visszaadása lecseréli a láncon továbbhaladó értéket a soron következő védőkorlátok számára.
A `signal?: AbortSignal` továbbítja a hívó életciklusát a védőkorlátoknak. A kérés megszakítása a szándékos, hibát átengedő kivétel: a médiakezelő hidak leállítják a munkát és elvégzik a takarítást anélkül, hogy visszaállítanák a nyers médiát egy olyan cél számára, amelyről ismert, hogy nem támogatja azt.

## Nyilvántartó (`registry.ts`)

A singleton `guardrailRegistry` a következőket teszi elérhetővé:

- `register(guardrail)` — hozzáad egy védőkorlátot (vagy lecseréli a normalizált név alapján), majd
  növekvő `priority` szerint újrarendezi őket.
- `clear()` / `list()` — adminisztratív segédfüggvények.
- `runPreCallHooks(payload, context)` — végiglépked az aktív védőkorlátokon, továbbfűzi a
  hasznos adatot a `modifiedPayload` segítségével, és az első `block: true` értéknél leáll.
- `runPostCallHooks(response, context)` — ugyanez a folyamat a válaszoldalon.
- `resetGuardrailsForTests({ registerDefaults })` — törli az állapotot, és opcionálisan
  újraregisztrálja az alapértelmezéseket a tesztek tiszta elkülönítése érdekében.

Mindkét futtató `{ blocked, payload|response, results, guardrail?, message? }`
értéket ad vissza, ahol a `results` `GuardrailExecutionResult` rekordok tömbje, amelyek
védőkorlátonként tartalmazzák a `blocked`, `skipped`, `modified`, `error` és `meta` mezőket,
ami hasznos a nyomkövetéshez.

### Védőkorlátok letiltása kérésenként

A `resolveDisabledGuardrails({ apiKeyInfo, body, headers })` összegyűjti azon
védőkorlátok neveinek duplikációmentes listáját, amelyeket az aktuális
kérésnél ki kell hagyni. A források (mind opcionális, és mindegyik összevonásra kerül):

- `apiKeyInfo.disabledGuardrails`
- A kérés törzsében lévő legfelső szintű `disabledGuardrails`
- A kérés törzsében lévő `metadata.disabledGuardrails`
- Az `x-omniroute-disabled-guardrails` fejléc (vagy a korábbi
  `x-disabled-guardrails`)

Az értékek lehetnek karakterláncok tömbjei vagy vesszővel elválasztott karakterláncok; a nevek
normalizálása kisbetűs kebab-case formátumra történik (`pii_masker` → `pii-masker`). Az eredmény
a `context.disabledGuardrails` mezőn keresztül kerül a nyilvántartóhoz, amely kihagyja
az egyező védőkorlátokat (`skipped: true` a `results` tömbben).

## Végrehajtási sorrend

Minden, a `src/sse/handlers/chat.ts` és az
`open-sse/handlers/chatCore.ts` fájlon áthaladó kérés esetén:

1. A `resolveDisabledGuardrails(...)` létrehozza a kihagyási listát az API-kulcsból, a törzsből
   és a fejlécekből.
2. A `guardrailRegistry.runPreCallHooks(body, ctx)` növekvő prioritási
   sorrendben futtatja a védelmi korlátokat:
   - A letiltott védelmi korlátokat `skipped` állapottal rögzíti.
   - Az egyes védelmi korlátok `preCall` műveletei a `modifiedPayload` segítségével átírhatják az adatterhet.
   - Az első `block: true` rövidre zárja a láncot, és a kezelő
     egy, a védelmi korlát általi elutasítást jelző választ ad vissza.
3. A (potenciálisan átírt) adatteher továbbhalad a kombinált útválasztáshoz és a felsőbb rétegbe
   történő továbbításhoz.
4. A válasz összeállítása után a `guardrailRegistry.runPostCallHooks(...)`
   ugyanazt a láncot futtatja a válaszon. A `block: true` ebben az esetben elveti a felsőbb réteg
   válaszát.

A kivételt dobó védelmi korlátokat `error: <message>` értékkel rögzíti, és a
`logger.warn` segítségével naplózza a rendszer, de a lánc folytatódik — a tervezés szerint hiba esetén átengedő módon.

## Konfiguráció

A beépített védelmi korlátok által beolvasott környezeti változók:

| Változó                               | Használja                       | Hatás                                                                                                                                    |
| ------------------------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`              | Állítsa `false` értékre az észlelés teljes letiltásához.                                                                                 |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`              | Injektálási szabályzat: `warn`, `block` vagy `log`. Az örökölt `redact` érték nem írja át az injektált szöveget.                         |
| `INJECTION_GUARD_MODE`                | `prompt-injection`              | Az injektálás elleni védelem módja; egyben egy adatbázisbeli funkciójelző is, amely **felülbírálja** a környezeti változókat (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`              | A `MODE=block` által elutasított minimális súlyosság: `high` (alapértelmezett), `medium` vagy `low`.                                     |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`              | Az `INPUT_SANITIZER_BLOCK_THRESHOLD` örökölt álneve.                                                                                     |
| `PII_REDACTION_ENABLED`               | `pii-masker`                    | `true` esetén a kérésben szereplő személyazonosításra alkalmas adatokat kitakarja a rendszer (az injektálási módtól függetlenül).        |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (kimeneti oldalon) | A válaszoldali maszkoló viselkedését szabályozza.                                                                                        |

A Modality Bridge védelmi korlátai futásidejű konfigurációjukat az adatbázis-alapú beállítástárból
(`getSettings()`) olvassák, nem környezeti változókból. A Vision elsődleges kulcsai:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` és
`modalityBridgeCacheMaxEntries`. Az örökölt
`visionBridge*` kulcsokat kizárólag a dokumentált, egy cikluson át elérhető olvasási
tartalékmegoldásként fogadja el a rendszer; az irányítópulton végzett írások az elsődleges kulcsokat használják. Az alapértelmezések és a tartalékérték-feloldó
a `src/shared/constants/modalityBridgeDefaults.ts` fájlban találhatók, az örökölt
konstansokat pedig a `src/shared/constants/visionBridgeDefaults.ts` őrzi.

A hangfeldolgozás a `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` és `modalityBridgeAudioMaxClips` beállításokat, valamint a megosztott
`modalityBridgeCache*` beállításokat használja. A hangfeldolgozáshoz nem tartozik örökölt kulcsokra épülő tartalékmegoldás, mert ezek
a kulcsok a Modality Bridge sémával együtt jelentek meg.

A videófeldolgozás a `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` és
`modalityBridgeVideoTimeout` beállításokat, valamint a megosztott `modalityBridgeCache*` beállításokat használja.
Alapértelmezés szerint le van tiltva, mivel az FFmpeg/ffprobe opcionális üzemeltetési
függőségek, a képkockák feliratozása pedig növeli a késleltetést és a modellhasználat költségét.

## Egyéni védőkorlátok

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

Lépések:

1. Hozza létre a `src/lib/guardrails/myGuardrail.ts` fájlt a `BaseGuardrail` kiterjesztésével.
2. Implementálja a `preCall` és/vagy a `postCall` metódust.
3. Regisztrálja importáláskor (a `registerDefaultGuardrails` függvényből hozzáadva), vagy
   futásidőben hívja meg a `guardrailRegistry.register(...)` metódust — a regisztrációs jegyzék
   lecseréli az azonos normalizált nevű korábbi védőkorlátot.
4. Adjon hozzá teszteket a `tests/unit/` könyvtárban (meglévő példák:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Tesztelés

A tesztek között használja a `resetGuardrailsForTests()` függvényt, hogy ismert állapotból induljon.
Üres regisztrációs jegyzékkel való indításhoz adja át a `{ registerDefaults: false }` értéket, és
csak a tesztelendő védőkorlátokat regisztrálja. A Vision Bridge támogatja a függőséginjektálást
(`deps.getSettings`, `deps.callVisionModel`); az Audio Bridge ezzel egyenértékű csatlakozási
pontokat biztosít a beállításokhoz, képességekhez, az STT-modell kiválasztásához, a hitelesítő
adatok ellenőrzéséhez és az átíráshoz. A tesztek így adatbázis- vagy hálózati hozzáférés nélkül
is ellenőrizhetik mindkét folyamatot.

## Lásd még

- `src/lib/guardrails/` — implementáció
- `src/shared/utils/inputSanitizer.ts` — a promptinjektálás és a személyazonosításra alkalmas adatok maszkolását
  működtető megosztott detektor
- `src/shared/constants/visionBridgeDefaults.ts` — a Vision Bridge alapértelmezett értékei és
  a kényszerített hídként kezelt modellek listája
- `src/shared/constants/modalityBridgeDefaults.ts` — a Vision/Audio megosztott futásidejű alapértelmezett értékei
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonális réteg (áramkör-megszakító, várakozási idők)
- `docs/reference/ENVIRONMENT.md` — a környezeti változók teljes referenciája

## Az injektálásvédő útvonal-lefedettsége és red-team tesztelése (8. fázis · D blokk)

Az injektálásvédő (`createInjectionGuard` / `withInjectionGuard`) minden olyan útvonalat lefed,
amely felhasználói promptokat fogad. Figyelembe veszi az `INJECTION_GUARD_MODE` beállítást
(alapértelmezés szerint `warn` = csak naplózás; `block` = HTTP 400 `SECURITY_001` választ ad vissza).

| Típus            | Útvonalak                                                                                                                                            | Alapértelmezett mód |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Szöveg (meglévő) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Generatív        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Adat             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

A szövegkinyerés (`extractMessageContents`) a `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` mezőket kezeli.

**Red-team (éjszakánként, `nightly-llm-security.yml`):** a promptfoo ellenőrzi, hogy minden útvonal
blokkolja-e az OWASP-LLM korpuszt `INJECTION_GUARD_MODE=block` módban; a garak próbákat futtat
(titkos érték hiányában kihagyja őket). A `moderations` a konzisztencia érdekében szerepel — a
blokkoló módot használó üzemeltetők a `resolveDisabledGuardrails` segítségével mentesíthetik.

Az éjszakai munkafolyamat (`.github/workflows/nightly-llm-security.yml`, cron + kézi
indítás) két feladatot tartalmaz:

- **`promptfoo-guard` (blokkoló)** — futtatja a `promptfoo eval -c promptfooconfig.yaml`
  parancsot `INJECTION_GUARD_MODE=block` beállítással. Minden ellenséges teszteset (például „hagyj
  figyelmen kívül minden korábbi utasítást…”, DAN-stílusú jailbreak-kísérletek) ellenőrzi, hogy a válasz
  tartalmazza-e az `error.code === "SECURITY_001"` értéket, vagyis hogy a védő valóban elutasította-e a kérést.
- **`garak` (tájékoztató jellegű)** — a garak `--probes promptinject,dan,leakreplay`
  próbáit futtatja egy helyi OmniRoute-példánnyal (`http://localhost:20128/v1`) szemben. Egy
  szolgáltatói titkos érték (`PROMPTFOO_PROVIDER_KEY`) meglétéhez kötött; annak hiányában szabályosan
  kimarad, és az `|| true` utótagot kapja, így jelentést készít anélkül, hogy meghiúsítaná a CI-folyamatot.

A védő segédfüggvény (`createInjectionGuard` / `withInjectionGuard`) lefedettsége
minden promptot fogadó `/v1` útvonalra kiterjed; a prompt szövegét a
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` mezőkből
az `extractMessageContents()` nyeri ki a `src/shared/utils/inputSanitizer.ts` fájlban.
