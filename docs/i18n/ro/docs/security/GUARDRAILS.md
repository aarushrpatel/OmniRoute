# Guardrails (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sursa de referință:** `src/lib/guardrails/`
> **Ultima actualizare:** 2026-08-29 — v3.8.51 (proveniența transcrierii Video Bridge este declarată de apelant,
> dar nu este încă verificată de server — clarificat conform #11661)

Mecanismele de protecție aplică reguli de siguranță, politici și transformări de conținut la limita
dintre OmniRoute și furnizorii din amonte. Fiecare mecanism de protecție poate inspecta (și
opțional respinge, transforma sau adnota) sarcinile utile ale cererilor (`preCall`) și
răspunsurile din amonte (`postCall`).

Sistemul este de tip **fail-open**: dacă un mecanism de protecție generează o excepție în timpul execuției, registrul
înregistrează eroarea și continuă cu următorul mecanism de protecție, în loc să determine eșecul
cererii. Blocarea este o decizie explicită (`block: true`), niciodată un accident.

## Mecanisme de protecție încorporate

Registrul încarcă automat șase mecanisme de protecție, în ordinea priorității, la import
(consultați `registry.ts` → `registerDefaultGuardrails()`):

| Prioritate | Nume                | Etapă(e)       | Fișier                |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Numerele de prioritate mai mici se execută **primele**.

### Punte pentru vedere (`visionBridge.ts`) — Punte de modalitate PR-1

Interceptează cererile care conțin imagini și care sunt destinate **modelelor fără capacități vizuale** și fie
redirecționează întreaga cerere către un model cu capacități vizuale, fie înlocuiește părțile care conțin imagini
cu descrieri text produse de un model vizual configurabil înainte de
apelul către serviciul din amonte. Astfel, furnizorii exclusiv text pot gestiona în mod transparent
sarcini utile multimodale.

Flux:

1. Omite procesarea dacă modelul țintă acceptă deja intrări vizuale (cu excepția cazului în care apare în
   lista de forțare a punții `isVisionBridgeForcedModel`).
2. Extrage părțile care conțin imagini prin `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), care deleagă către **detectorul media unificat**
   `detectMediaParts()` din `open-sse/utils/mediaParts.ts` — unica
   sursă de adevăr partajată cu filtrul de compatibilitate pentru combinații.
   Extragerea este limitată printr-o listă de permisiuni la părțile de nivel superior cu formele
   pe care `replaceImageParts` le poate reintroduce (contractul extragere↔înlocuire): OpenAI
   `image_url`, `source.type:"base64"` în format base64 pentru Anthropic, URL-ul Anthropic
   `source.type:"url"` și `input_image` din API-ul Responses. Potrivirile imbricate și
   formele bazate exclusiv pe indicatori sunt destinate filtrului pentru combinații și nu sunt extrase niciodată.
   Omite procesarea dacă nu este găsită niciuna.
3. Rezolvă configurația din timpul rulării prin `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): noile chei de setări `modalityBridge*`
   au prioritate; cheile vechi `visionBridge*` rămân o **variantă de rezervă pentru un singur ciclu**
   (fereastră de revenire). Omite procesarea înaintea oricărei parcurgeri media atunci când
   puntea este dezactivată.
4. Selectorul de mod (`modalityBridgeVisionMode`, consultați tabelul de mai jos) decide între
   redirecționare și descriere. Redirecționarea returnează `modifiedPayload`, în care este înlocuit doar `model`,
   împreună cu metadatele `{ rerouted, fromModel, toModel, imagesKept }`.
5. Calea de descriere: limitează imaginile la `maxImages`, compune promptul adaptat sarcinii,
   consultă memoria cache pentru descrieri, apelează modelul vizual **în paralel**
   (`Promise.allSettled`) și injectează în locul imaginilor părți text de forma `[Image N]: <description>`.
   O descriere eșuată produce `null`, iar partea originală care conține imaginea este
   **păstrată** (#4012) — cu excepția căii de descriere pentru combinații, atunci când toate
   descrierile au eșuat, caz în care un serviciu din amonte confirmat ca neavând capacități vizuale primește în schimb substituentul
   `(unavailable — no vision-capable provider connected)` (#8430).
6. Returnează `modifiedPayload` + metadatele (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selector de mod (`modalityBridgeVisionMode`)

| Mod        | Implicit | Comportament                                                                                                                                                                                                                                                                                                                                                  |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Euristica veche, nemodificată (#6640/#7204): modelele care nu sunt combinații sau sunt `auto/` sunt redirecționate către cel mai bun model vizual, cu excepția cazului în care modelul original are deja credențiale utilizabile (atunci se folosește descrierea); țintele de tip combinație folosesc întotdeauna descrierea.                                 |
| `describe` |          | Descrie întotdeauna — blocul de redirecționare este omis complet; modelul ales de utilizator răspunde întotdeauna.                                                                                                                                                                                                                                            |
| `reroute`  |          | Forțează redirecționarea: protecția care păstrează modelul cu credențiale este ocolită. Protecția pentru credențialele **țintei** redirecționării se aplică în continuare — când nu există nicio țintă vizuală utilizabilă, cererea continuă pe calea de descriere, astfel încât imaginile brute să nu ajungă niciodată la un serviciu exclusiv text (#8430). |

Modurile forțate scurtcircuitează procesarea **înainte** de executarea euristicii automate; comportamentul `auto`
este identic la nivel de octeți cu mecanismul de protecție anterior PR-1.

#### Domeniul de aplicare al cheii API (`visionBridgeKeyScope.ts`)

Atunci când cheia API a apelantului restricționează `allowedConnections`, grupurile de cote
(`allowedQuotas`) sau modelele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), puntea selectează numai
modele de redirecționare și descriere pe care cheia le poate utiliza, pe conexiuni pe care cheia le poate
utiliza. Apelul de descriere trece apoi întotdeauna prin bucla internă OmniRoute, cu
antetul `x-omniroute-self-loop-key-id`, astfel încât cererea de chat receptoare
să aplice din nou politica de conexiuni și modele a cheii respective. `enforceApiKeyPolicy()`
ia în considerare acel antet numai împreună cu tokenul bearer al buclei interne, astfel încât acesta poate doar
restrânge accesul, iar un ID care nu poate fi rezolvat este respins.

Dacă niciun model vizual nu este permis pentru cheie, calea de descriere nu intervine, iar
cererea este transmisă neschimbată, același comportament permisiv în caz de eroare ca pentru un mecanism de protecție dezactivat
(metadate `{ skipped: true, reason: "no_permitted_vision_model" }`).
Cererile fără cheie și cheile fără aceste restricții se comportă exact ca
înainte.

#### Prompt de descriere adaptat sarcinii (`modalityBridgeVisionTaskAware`)

Valoarea implicită este **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) adaugă
textul **ultimului mesaj al utilizatorului** (trunchiat la 500 de caractere) la
promptul de descriere de bază, orientând descrierea către ceea ce a solicitat
efectiv utilizatorul (modelul codex-vision-proxy) și cerând modelului vizual să
transcrie textul vizibil. Când indicatorul este dezactivat — sau nu există text
de la utilizator — promptul de bază este utilizat fără modificări.

Solicitarea proprie compatibilă OpenAI a buclei interne de descriere
(`callVisionModelSingle()` în `visionBridgeHelpers.ts`) solicită întotdeauna
`image_url.detail: "high"` — necondiționat, pentru fiecare apelant/furnizor,
fără a depinde de vreun semnal al clientului. Eșantionarea cu nivel redus de
detaliu degradează acuratețea OCR tocmai pentru sarcina de transcriere a
textului cerută de acest prompt, astfel încât apelul de descriere solicită
întotdeauna un nivel ridicat de detaliu, indiferent de nivelul de detaliu
folosit de solicitarea inițială primită. Acest lucru afectează numai corpul
solicitării interne de descriere; nu modifică modul în care OmniRoute
redirecționează valoarea `image_url.detail` a apelantului în solicitarea
principală — acea valoare implicită este aplicată separat și numai pentru
clienții OpenCode detectați, în `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Ramura cu format de comunicație
Anthropic a buclei interne de descriere nu are niciun câmp `detail` și nu este
afectată de niciuna dintre valorile implicite.

#### Limita ieșirii descrierii (`modalityBridgeVisionMaxChars`)

| Cheie                          | Valoare implicită | Interval          |
| ------------------------------ | ----------------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`               | `0` sau 100–50000 |

`0` (valoarea implicită) înseamnă **fără limită** — descrierea returnată de
`callVisionModel()` este transmisă fără modificări, păstrând comportamentul
existent. Orice valoare din intervalul 100–50000 trunchiază descrierea și adaugă
un sufix `…` înainte ca aceasta să fie inserată înapoi sub forma
`[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` în
`src/lib/guardrails/visionBridge.ts`). Măriți această valoare pentru sarcinile
OCR bogate în detalii, în care modelul din aval are nevoie de transcrierea
completă; micșorați-o pentru a limita utilizarea tokenurilor de către modelele
vizuale prolixe. Câmpul din panoul de control se află în panoul Advanced al
filei Vision (`modality-bridge-max-chars` în `ModalityBridgeVisionTab.tsx`) și
ajustează orice valoare între 1 și 99 la limita minimă de 100, lăsând
neschimbată o valoare `0` explicită — `0` este o valoare Zod validă în sine
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nu doar
valoarea implicită „nesetată”.

#### Cache-ul descrierilor (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL în memorie pentru rezultatele descrierilor, partajat la nivelul
întregului proces. Cheie = `sha256(imageRef + composedPrompt + configuredBridgeModel)`,
cu încadrare bazată pe prefixarea lungimii (fără coliziuni între limitele
câmpurilor). Componenta de model este modelul de punte **configurat**, nu modelul
care a răspuns efectiv — `callVisionModel` poate utiliza intern un model de
rezervă, iar definirea cheii pentru fiecare încercare ar fragmenta cache-ul.
Descrierile eșuate nu sunt stocate niciodată în cache. Setări:

| Cheie                           | Valoare implicită | Interval |
| ------------------------------- | ----------------- | -------- |
| `modalityBridgeCacheEnabled`    | `true`            | —        |
| `modalityBridgeCacheTtlMinutes` | `60`              | 1–1440   |
| `modalityBridgeCacheMaxEntries` | `200`             | 10–5000  |

#### Normalizarea imaginilor de la distanță (descriere în buclă internă/preluare base64)

Atunci când puntea preia ea însăși o imagine **de la distanță** — pentru
autoapelul de descriere Anthropic și conversia base64 în formatul de comunicație
claude (`ensureBase64ImagesForClaudeWire`), ambele prin
`fetchRemoteImageAsDataUri()` din `visionBridgeHelpers.ts` — URI-ul de date
rezultat este procesat prin `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) înainte de a fi încorporat în solicitarea
către modelul vizual. Imaginile supradimensionate sunt redimensionate la o
**latură lungă de 2048px** (corespunzând limitei de redimensionare pe care
OpenAI/Anthropic o aplică deja pe server), ceea ce reduce volumul de octeți
încărcați și latența fără a modifica ceea ce vede modelul vizual.
Redimensionarea utilizează `sharp`, încărcat prin import dinamic: pe o platformă
unde binarul său nativ nu poate fi încărcat, `normalizeDataUri()` **nu aruncă
niciodată o excepție** — revine la transmiterea nealterată a octeților originali,
astfel încât traseul de descriere/conversie base64 continuă să funcționeze
întotdeauna. Octeții care nu reprezintă o imagine (o preluare care nu a returnat
o imagine decodificabilă) sunt, de asemenea, transmiși fără modificări. Această
normalizare este limitată la imaginile pe care puntea le preia pentru propriul
autoapel — nu este aplicată niciodată sarcinii utile brute transmise direct de
apelant, în conformitate cu principiul modificării numai prin consimțământ
explicit (Regula strictă nr. 20).

#### Schema setărilor + migrarea

Noile chei `modalityBridge*` sunt validate cu Zod în `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trioul `modalityBridgeCache*` și grupul
`modalityBridgeAudio*` utilizat de Audio Bridge. Migrarea
`141_modality_bridge_settings.sql` copiază valorile vechi `visionBridge*`
existente în noile chei corespunzătoare (în mod idempotent, fără a suprascrie
vreodată o valoare `modalityBridge*` setată de operator); cheile vechi rămân
acceptate drept soluție de rezervă la citire pentru un ciclu de lansare.

#### Antetul de transparență + statisticile

Răspunsurile transformate prin descriere includ
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(construit de `buildModalityBridgeHeader()` în `modalityBridge/bridgeStats.ts`,
aplicat de `withModalityBridgeHeader()` în `src/sse/handlers/chatHelpers.ts`).
Solicitările redirecționate nu primesc **niciun** antet — sarcina utilă nu a
fost modificată, iar schimbarea modelului este deja vizibilă în câmpul `model`
din corpul răspunsului.

`GET /api/modality-bridge/stats` (autentificare de administrare, același nivel ca
`GET /api/settings`) returnează contoarele din memorie pentru fiecare modalitate
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` pentru `vision`, `audio` și
`video`. `averageLatencyMs` utilizează `latencySamples`, nu toate încercările, ca
numitor; o operațiune fără cronometrare nu generează artificial un eșantion de
zero milisecunde. `bridged` rămâne aliasul compatibil cu versiunile anterioare
pentru conversiile reușite; încercările eșuate nu îl incrementează.
Contoarele se resetează intenționat la repornirea procesului
(telemetrie, nu contabilitate).

#### Configurarea panoului de control

Pagina dedicată din panoul de control este
`/dashboard/settings/modality-bridge`. Filele sale adresabile prin URL `Vision`,
`Audio` și `Video` păstrează parametrii de interogare la schimbarea valorii
`tab`. Fila Vision oferă activarea, modul, selectarea modelului (inclusiv valoarea
implicită automată), instrucțiuni adaptate sarcinii, limite avansate pentru timpul
de expirare/imagine/lungimea descrierii/cache, contoare de execuție și o cerere
eșantion protejată. Fila Audio este, de asemenea, funcțională: oferă activarea,
un selector de modele exclusiv STT cu Auto, limite pentru timpul de expirare și
durata maximă a clipului, contoare audio și un test eșantion `input_audio`. Fila
Video este funcțională: raportează starea de execuție FFmpeg/ffprobe — una dintre
cele patru stări explicite ale interfeței (`unknown` cât timp verificarea este în
desfășurare sau nu a putut fi finalizată, `restricted` pe o gazdă a panoului de
control care nu este loopback, unde verificarea este omisă pe partea de client,
`unavailable` după efectuarea verificării și confirmarea absenței sau `available`
împreună cu versiunile FFmpeg/ffprobe) — persistă activarea/modelul/limitele pentru
cadre, videoclip și timpul de expirare, filtrează selectorul de modele pentru a
include modele capabile să proceseze imagini și afișează contoarele video.

Fostul card Vision Bridge din setările AI este un link de compatibilitate către
noua pagină; acesta nu mai deține o a doua copie a formularului. Media Providers
oferă, de asemenea, linkuri de la fluxurile de lucru Image-to-Text și
Speech-to-Text către filele Modality Bridge corespunzătoare, fără a elimina
spațiul de testare Speech-to-Text existent.

**Ocolirea admiterii pentru bucla internă:** atunci când apelul de descriere este
direcționat prin bucla internă `/v1` a OmniRoute (model de furnizor nestandard),
subcererea trimite `x-omniroute-admission-bypass: internal` și este autentificată
cu acreditarea rezolvată pentru bucla internă — santinela locală `sk_omniroute`
în modul local sau cheia de mediu `OMNIROUTE_API_KEY` / `ROUTER_API_KEY`
configurată de operator (#1350), astfel încât implementările cu
`REQUIRE_API_KEY=true` să poată executa în continuare apelul de descriere.
Ocolirea este acceptată numai pentru acele acreditări exacte, astfel încât
clienții externi nu pot utiliza antetul pentru a evita admiterea.

Valorile implicite vechi se află în
`src/shared/constants/visionBridgeDefaults.ts`; noile valori implicite pentru
mod, adaptarea la sarcină și cache, precum și resolverul de setări se află în
`src/shared/constants/modalityBridgeDefaults.ts`. Mecanismul de protecție expune
o opțiune de constructor `deps`, astfel încât testele să poată injecta
implementări false pentru `getSettings` și `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Interceptează cererile de chat care conțin conținut audio înainte ca acestea să
ajungă la o țintă despre care nu se știe că acceptă intrare audio. Nu
redirecționează niciodată cererea de chat: părțile audio sunt transcrise prin
endpoint-ul multipart existent compatibil cu OpenAI, iar modelul de chat ales
continuă cu transcrierile text.

Flux:

1. Rezolvă `supportsAudio` prin `getResolvedModelCapabilities()`. Metadatele
   explicite din registrul furnizorului au prioritate, urmate de metadatele
   statice ale modelului și apoi de `modalities_input` sincronizat. O listă de
   intrări declarată fără `audio` este `false`; absența oricărei dovezi privind
   capabilitatea rămâne `null`. Atât `false`, cât și `null` activează puntea
   conservatoare, în timp ce `true` o ocolește.
2. Rezolvă setările `modalityBridgeAudio*` și extrage părțile audio de nivel
   superior care pot fi înlocuite din fiecare mesaj prin detectorul partajat
   `detectMediaParts()`. Formatele acceptate la nivel de protocol sunt OpenAI
   `input_audio`, `audio_url` și `source.media_type: "audio/*"`. Conținutul audio
   imbricat este detectat pentru rutare, dar nu este eliminat de calea de
   înlocuire. Volumul de lucru este limitat de `modalityBridgeAudioMaxClips`;
   părțile ulterioare rămân nemodificate.
3. Respectă un `provider/model` configurat sau permite ca
   `selectAudioBridgeModel()` să parcurgă `AUDIO_TRANSCRIPTION_PROVIDERS` în
   ordinea stabilă a catalogului și să selecteze primul model care dispune de o
   acreditare activă și utilizabilă pentru furnizor.
4. `callAudioTranscription()` convertește conținutul audio base64/data-URI
   într-un `file` multipart sau descarcă un `audio_url` de la distanță prin
   mecanismul de protecție pentru conexiuni de ieșire exclusiv publice, cu fixare
   DNS și o limită de 25 MB. Apoi trimite prin POST fișierul și modelul selectat
   către bucla internă locală `/v1/audio/transcriptions`, autentificată cu
   `resolveSelfLoopBearer()`. Ruta de transcriere existentă efectuează căutarea
   normală a acreditărilor, gestionarea perioadelor de așteptare/limitării ratei
   și expedierea către furnizor.
5. Apelurile reușite își înlocuiesc părțile cu
   `[Audio N]: <transcript>`. Apelurile rulează cu `Promise.allSettled`: un eșec
   individual păstrează partea audio originală (contractul #4012). Dacă toate
   apelurile eșuează, iar ținta este confirmată ca având
   `supportsAudio === false`, părțile devin
   `[Audio N]: (unavailable — no STT provider connected)` (contractul #8430).
   Pentru o țintă necunoscută (`null`), un rezultat în care toate apelurile
   eșuează rămâne nemodificat. O țintă despre care s-a confirmat că acceptă doar
   text și care nu dispune de acreditări STT utilizabile primește același
   substituent explicit, fără a emite un apel de rețea.

Transcrierile reușite utilizează cache-ul LRU/TTL Modality Bridge disponibil la
nivelul întregului proces. Cheia combină referința audio, eticheta stabilă a
operațiunii `audio-transcription` și modelul STT selectat; eșecurile nu sunt
niciodată memorate în cache. Încercările audio actualizează contoarele partajate
`bridged`, `cacheHits`, `failures` și `lastUsedAt`. Răspunsurile transformate
conțin
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; cererile
nemodificate nu primesc un segment Audio Bridge.

Setările de execuție sunt stocate în baza de date și validate cu Zod:

| Cheie                         | Valoare implicită | Interval           |
| ----------------------------- | ----------------- | ------------------ |
| `modalityBridgeAudioEnabled`  | `true`            | —                  |
| `modalityBridgeAudioModel`    | `""`              | Automat sau ID STT |
| `modalityBridgeAudioTimeout`  | `60000`           | 1000–300000        |
| `modalityBridgeAudioMaxClips` | `3`               | 1–10               |

Cache-ul partajat rămâne controlat de `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` și `modalityBridgeCacheMaxEntries`.

### Punte video (`videoBridge.ts`, `videoBridgePipeline.ts`)

Interceptează părțile video de nivel superior din `messages` pentru Chat Completions și
din `input` pentru API-ul Responses înainte de a fi apelată o destinație despre care nu
se știe că oferă suport video nativ. Formatele acceptate sunt `input_video`,
`video_url`, `video_source`, URL-urile HTTPS și URI-urile de date
`data:video/*;base64,...`. Numele simple de fișiere din text nu sunt tratate
drept materiale video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) gestionează parcurgerea cererii,
verificarea capabilităților/politicii, agregarea pentru fiecare cerere și sarcina utilă
a răspunsului. Procesarea fiecărui material video — obținerea acestuia, cache-ul
rezultatului complet, descrierea unei secvențe de cadre (care integrează orice
transcriere audio declarată de apelant) și metricele/anularea/curățarea pentru fiecare
încercare — este ascunsă în spatele `processVideoPart` din
`videoBridgePipeline.ts`, apelată o dată pentru fiecare parte video în bucla lui
`preCall`. Modulul respectiv definește și limitele explicite ale porturilor
`VideoMediaBrokerPort` (obținerea octeților și extragerea cadrelor eșantionate),
`VideoAudioTranscriptionPort` (integrarea unei transcrieri audio declarate de apelant
cu descrierile cadrelor eșantionate) și `VideoDrilldownPort` (limita de persistență
pentru analiza detaliată a cadrelor; încă neconectată la `processVideoPart` — în
prezent, doar ruta separată `/api/modality-bridge/video/drilldown` scrie intrări de
analiză detaliată).

Calea publică de cerere `/v1` nu importă și nu invocă niciodată un subproces.
Materialele video de la distanță sunt descărcate în limita a 50 MiB; materialele video
base64 încorporate au o limită conservatoare per material video de 36 MiB după
decodare, astfel încât anvelopa modelului/mesajelor/încadrării să se poată încadra în
limita publică de admitere de 50 MiB pentru cererile JSON. Lungimea conținutului
încorporat și estimările dimensiunii decodate sunt verificate înainte de alocare.
HTTPS este obligatoriu pentru URL-ul inițial de la distanță și pentru fiecare
redirecționare, utilizând mecanismul existent de protecție pentru traficul de ieșire
exclusiv public, cu fixare DNS. Octeții traversează apoi exact limita brokerului intern
`POST /api/modality-bridge/video/extract`. Ruta respectivă este atât
`LOCAL_ONLY`, cât și `SPAWN_CAPABLE`, acceptă numai o cerere autentificată pentru
fiecare proces, provenită dintr-o interfață loopback de încredere, și nu acceptă
niciodată un URL, o cale din sistemul de fișiere, un executabil sau o listă de
argumente. Fluxul API pentru dimensiunea corpului și cititorul incremental al corpului
din handler impun independent o limită de intrare de 50 MiB pentru broker. Coada sa
limitată execută câte o extragere pe rând, permite patru sarcini în așteptare și
limitează datele de intrare în așteptare la 100 MiB.

În interiorul brokerului, `ffprobe` citește un fișier local privat; lista fixă de
formate permise exclude formatele de playlist și manifest. Pentru containerele permise
din familia MOV, referințele MOV la date externe rămân dezactivate în mod implicit,
iar comanda fixă nu activează această funcționalitate. Atât `ffprobe`, cât și
`ffmpeg` utilizează lista de protocoale permise limitată exclusiv la `file`, un
singur fir de execuție, matrice fixe de argumente, fără shell și executabile rezolvate
din `PATH`. Fluxurile de imagini de copertă atașate nu sunt candidate redabile. Toate
fluxurile redabile trebuie să respecte limitele, iar un flux implicit explicit este
preferat înaintea variantei de rezervă deterministe cu cel mai mic index. Materialele
video sunt limitate la 600 de secunde, 8.192 de pixeli pe fiecare dimensiune și
33.554.432 de pixeli sursă. FFmpeg eșantionează între 1 și 16 cadre JPEG din punctele
de mijloc, micșorează latura lungă la cel mult 1.024 de pixeli fără a mări intrările
mai mici și nu primește niciodată un URL. Politica de eșantionare implicită este
`uniform`. Politicile opționale `scene_aware` și cea experimentală
`segment_aware` efectuează încă o trecere FFmpeg fixă asupra fluxului local deja
validat, selectează un număr limitat de marcaje temporale de scenă `showinfo` și
revin în mod determinist la aceleași puncte de mijloc uniforme în caz de eroare a
detectorului, expirare, ieșire incorectă sau set de candidați gol. Modul bazat pe
segmente alocă eșantioanele din punctele de mijloc proporțional cu intervalele de
scenă validate; dovezile modului bazat pe segmente și comportamentul de rezervă sunt
detaliate mai jos. Limita strictă de 16 cadre este aplicată după selecție pentru
fiecare politică. Atunci când o cerere bazată pe scene are un buget de numai un
cadru, aceasta utilizează punctul de mijloc uniform al întregului material video activ
sau al ferestrei de focalizare și raportează `policyEffective: uniform`: un singur
cadru de scenă selectat nu poate păstra ambele capete temporale. Un apelant poate
furniza opțional o fereastră de focalizare finită (`start`/`end` în secunde);
limitele sunt restrânse la durata conținutului media, ferestrele inversate sau
non-finite sunt respinse, iar toate politicile de eșantionare sunt aplicate numai în
interiorul intervalului normalizat. Fereastra rezultată este inclusă în metadatele de
eșantionare și în prefixul descrierii nesigure, astfel încât modelele din aval să
poată distinge un fragment focalizat de cronologia completă.

Focalizarea semantică a descrierilor este o setare separată și explicită. Modul de
analiză implicit `full` păstrează promptul existent pentru cadre și nu transmite
niciodată textul cererii către modelul de descriere. În modul `focused`, puntea
citește numai cel mai recent `text`/`input_text` nevid creat de utilizator din
același container Chat sau Responses, îl normalizează în NFC, restrânge caracterele de
control și spațiile albe și îl limitează la 500 de puncte de cod Unicode. Un rezultat
gol determină revenirea la promptul `full` exact. Un indiciu utilizabil este
serializat ca JSON într-un bloc dedicat contextului de utilizator care nu este de
încredere și poate doar să prioritizeze detaliile observabile; acesta nu poate
suprascrie avertismentul separat împotriva urmării instrucțiunilor vizibile sau
audibile în conținutul media. Focalizarea textuală nu deduce niciodată `start`/`end`
și nu modifică eșantionatorul temporal.

#### Dovezi structurale privind segmentele FU-07

`segment_aware` utilizează o singură trecere de preanaliză limitată asupra fluxului video local deja validat. Lanțul fix de filtre redimensionează mai întâi la o lățime de cel mult 320 de pixeli, detectează schimbările de scenă și intervalele înghețate, apoi eșantionează la 1 cadru pe secundă pentru neclaritate, luminanță medie și informații spațiale/temporale. Trecerea este limitată la 600 de eșantioane structurale, un singur fir de execuție FFmpeg/filtru, aceleași liste de permisiuni pentru protocolul exclusiv `file` și containere, o limită de 1 MiB pentru ieșirea procesului și cel mult 30 de secunde în cadrul limitei comune de anulare/termen-limită a brokerului. Nu acceptă niciodată din cerere o comandă, un filtru, o cale sau un URL.

Valorile structurale reprezintă dovezi de eșantionare deterministe, nu o înțelegere semantică a conținutului video. Acestea nu deduc subiecți, acțiuni, subtitrări, vorbire sau intenția utilizatorului. Limitele scenelor și ale intervalelor înghețate formează segmente; acoperirea înghețării, neclaritatea, expunerea, detaliile spațiale și schimbarea temporală influențează doar modul în care este alocat bugetul existent de 1–16 cadre. Un segment complet înghețat este limitat la un singur cadru, în timp ce segmentele neînghețate concurează pentru bugetul rămas. Atunci când limitele sunt mai numeroase decât cadrele, este păstrată o acoperire uniformă a cronologiei, astfel încât succesiunile rapide de la început să nu poată ascunde un segment final lung. Limitele scenelor aflate în rezoluția de analiză de 1 secundă a unei limite de înghețare sunt reunite.

Filtrele lipsă, dovezile malformate/goale, o eroare a detectorului sau expirarea timpului pentru preanaliza limitată revin în mod permisiv la politica exactă a punctelor mediane uniforme. Anularea de către apelant sau termenul-limită al brokerului nu permit această revenire: acestea încheie subprocesul aflat în desfășurare, împiedică extragerea ulterioară a cadrelor, iar arborele temporar privat este eliminat în `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generează fixture-uri FFmpeg reale și deterministe pentru economiile de apeluri de subtitrare după deduplicare, alocarea bugetului pentru mișcare densă, dovezile de neclaritate/expunere/SI-TI, succesiunile rapide cu o porțiune finală lungă și rezultatele fals pozitive pentru tranziții graduale. Acesta înregistrează timpul real al preanalizei și, acolo unde `/usr/bin/time` este disponibil, timpul CPU al procesului copil și valoarea maximă RSS. Verificările sale de calitate sunt doar oracole structurale. Calitatea reală a modelului de subtitrare rămâne `HOLD`, deoarece acest mecanism de testare nu dispune de un endpoint autorizat sau de un evaluator fixat. Economiile monetare rămân, de asemenea, `HOLD`, cu excepția cazului în care `--caption-cost-per-call-usd` furnizează o estimare pozitivă explicită a costului per apel; scriptul nu fabrică niciodată niciunul dintre rezultate.

Fiecare cadru este limitat la 4 MiB, toate cadrele brute împreună la 23 MiB, iar răspunsul serializat al brokerului la 32 MiB. Un director temporar privat este eliminat în `finally`. OmniRoute nu include FFmpeg și nu acceptă o cale personalizată către executabil. Înainte de generarea subtitrărilor, puntea aplică o trecere conservatoare de deduplicare vizuală: fiecare JPEG este redus la un buffer în tonuri de gri de 16×16 și este comparat numai cu ultimul cadru păstrat. Pentru un buget de subtitrări solicitat mai mare de un cadru, extragerea furnizează un set limitat de candidați de până la de două ori acel buget și niciodată mai mult de 16 cadre. Limita solicitată este aplicată numai după deduplicare, iar primul și ultimul candidat selectat sunt păstrați în timpul reducerii finale atunci când bugetul este de cel puțin două cadre. Politica cu versiune
`grayscale-16x16-mean-cells-v2` utilizează valoarea mai mare dintre diferența medie de luminanță și raportul celulelor miniaturii a căror diferență normalizată este de cel puțin 0,05. Pragul de duplicare este constanta 0,04, aleasă pentru predictibilitate, în loc să fie expusă drept setare de execuție. Acest semnal secundar cu contrast ridicat păstrează mișcările mici și modificările textului vizibil pe care o comparație bazată exclusiv pe medie le poate ascunde. Erorile comparatorului sau ale decodorului permit continuarea și păstrează acoperirea. Metadatele de ieșire separă candidații extrași, cadrele utilizate cu succes și duplicatele vizuale eliminate.

O parte video marcată explicit poate solicita o planșă de contact cu marcaje temporale. Puntea construiește o grilă JPEG cu cel mult 4 coloane și 16 cadre. Fiecare celulă de 512 pixeli imprimă marcajul temporal al sursei într-o bandă inferioară cu contrast ridicat, în timp ce aceleași marcaje temporale rămân în metadatele textuale pentru asociere și auditare ulterioară. Fișierul JPEG complet rămâne limitat la 32 MiB. Dacă `sharp` nu poate decoda sau compune grila, puntea revine la cadrele JPEG individuale; anularea de către client continuă să se propage prin operația asupra planșei.

Dovezile pentru promovare sunt separate în mod deliberat de microbenchmarkul sintetic de compoziție. `scripts/perf/video-bridge-contact-sheet-eval.ts` definește un mecanism de testare A/B, cu schemă versionată, pentru modele de vedere reale compatibile cu OpenAI. Acesta măsoară tokenurile raportate de furnizor, latența reală de la un capăt la altul (inclusiv compunerea planșei), numărul de apeluri ale modelului și păstrarea faptelor definite în manifest. Răspunsurile brute ale modelului nu sunt scrise în raport; sunt păstrate numai rezumatele SHA-256 și ID-urile faptelor identificate. Mecanismul de testare nu efectuează niciun apel de rețea sau către un model cu plată decât dacă este transmis `--execute-real`, iar `--model`, `OMNIROUTE_BASE_URL` și `OMNIROUTE_API_KEY` sunt configurate. Fără această execuție reală explicită, verdictul său procesabil automat rămâne `HOLD`; măsurătorile sintetice ale sarcinii utile/numărului de apeluri nu reprezintă, singure, dovezi pentru promovare.

Apelanții pot atașa o matrice opțională `transcript.cues` unei părți video acceptate atunci când dețin deja text aliniat. Fiecare indiciu trebuie să conțină `text`, un interval finit `start`/`end` inclus în durata detectată și o valoare `source` aflată pe lista de permisiuni (`client`, `embedded` sau `audio-bridge`); `confidence` are valoarea implicită `1` și trebuie să rămână între `0` și `1`. Indiciile duplicate exacte sunt reunite. OmniRoute nu pornește niciodată transcrierea pe baza acestor metadate: indiciile validate sunt copiate în rezultatul descris împreună cu sursa, nivelul de încredere și intervalul și sunt redate drept observații care nu sunt de încredere, alături de subtitrările cadrelor. Textul nevalid, din afara intervalului sau lipsit de proveniență este respins, în loc să fie amestecat în fluxul de subtitrări. Câmpul `source` este în prezent declarat de apelant, nu verificat de server: OmniRoute impune ca valoarea să fie unul dintre cele trei șiruri permise, dar nu confirmă încă criptografic faptul că o etichetă `embedded` sau `audio-bridge` provine într-adevăr dintr-o extragere controlată de server. Tratați `source` drept un indiciu care nu este de încredere până la implementarea acelei verificări; nu fundamentați decizii de autorizare pe acesta.

Un apelant avansat poate furniza o pistă `audioTranscript` deja autorizată
pentru același videoclip. Îmbinarea rulează observațiile vizuale și audio cu
același termen-limită și același semnal de anulare, le ordonează pe o cronologie
comună, elimină duplicatele exacte și raportează un rezultat parțial atunci când
reușește doar una dintre ramuri. Un `audioTranscript` nevalid este degradat la
acel rezultat parțial — descrierea vizuală este păstrată, iar ramura audio
înregistrează un cod de eroare igienizat — în loc să eșueze întregul videoclip.
Disponibilitatea fiecărei ramuri, indicatorul de rezultat parțial și codurile de
eroare igienizate sunt păstrate în rezultatul descris, în metadatele mecanismelor
de protecție (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), în metadatele cache-ului de rezultate și în
contoarele de îmbinare ale punții. Calea implicită Video Bridge nu invocă
transformarea vorbirii în text și nu descarcă o a doua copie a conținutului
media; fără acea pistă explicită, rămâne exclusiv video.

**Păstrarea transcrierii (#12150 P1).** Aceasta se aplică automat ori de câte ori
Video Bridge (care este el însuși opțional) randează un indiciu de transcriere —
nu există un indicator separat pentru păstrare. Atunci când o cerere randează
orice indiciu de transcriere (un `transcript` declarat de apelant sau un
`audioTranscript` îmbinat), mecanismul de protecție o marchează drept
`videoBridgeObserved` și produce o copie secundară redactată a descrierii
videoclipului — o randare identică în care corpul de text liber al fiecărui
indiciu este înlocuit cu `[redacted-video-transcript]`, construită prin
înlocuirea câmpului structurat al indiciului înainte de asamblarea șirului
(niciodată prin analizarea textului aplatizat, astfel încât niciun conținut al
indiciului — ostil sau obișnuit, inclusiv corpuri care conțin `]`, precum
`[inaudible]`/`[music]` — să nu poată supraviețui). Corpul cererii din jurnalul
persistent al apelului înlocuiește fiecare segment de text derivat din videoclip
cu acea copie secundară redactată, asociată prin egalitatea conținutului;
ancora `fullText` este recitită din sarcina utilă finalizată a mecanismului de
protecție de dinaintea apelului, astfel încât asocierea reușește în continuare
după ce mecanismele de protecție ulterioare din lanț (mecanismele de mascare a
datelor PII și a acreditărilor, cu prioritățile 10/95) rescriu pe loc textul
descrierii și după ce injectarea promptului de sistem, a transferului și a
memoriei remodelează matricea de mesaje. Corpul trimis în amonte către model
rămâne neschimbat. De asemenea, o cerere observată nu populează nicio memorie
durabilă (este omisă atât extragerea derivată din cerere, cât și cea derivată din
răspuns), astfel încât răspunsul modelului nu poate reproduce textul
transcrierii în Memory.

**Câmpuri video brute (#12430).** Atunci când puntea este activată, iar suportul video nativ este necunoscut sau absent, câmpurile `transcript`/`audioTranscript` definite activează, de asemenea, `videoBridgeObserved`, chiar și după eșuarea descrierii sau atingerea unei limite `maxVideos`. `null` și șirurile goale sunt luate în calcul; câmpurile absente și metadatele care nu sunt video nu sunt luate în calcul. Copiile păstrate redactează aceste câmpuri sau omit cererea, iar cache-urile/Memory sunt ocolite. Sarcina utilă pentru furnizor rămâne neschimbată.

Copiile suplimentare păstrate utilizează același semnal al cererii observate.
Instantaneul brut al cererii clientului de dinaintea mecanismului de protecție,
cererea în așteptare din memorie și jurnalul timpuriu al cererii respinse
înlocuiesc structural câmpurile de transcriere din segmentele video; prompturile
sub formă de șir sintetizate de etapele fluxului de procesare și de transferul
de context sunt redactate la destinația corpului persistent al cererii.
Marcajul persistent `video_content_removed` face ca o continuare prin
`previous_response_id` să eșueze în mod sigur, în loc să reconstruiască textul
eliminat intenționat. Dacă o cerere observată își pierde copia secundară de
redactare pentru fiecare segment înainte de jurnalizare sau dacă fie și numai
una dintre mai multe copii secundare video nu poate fi asociată după mutațiile
ulterioare ale cererii, corpul păstrat al cererii este omis în întregime, în loc
să fie păstrată o transcriere redactată doar parțial.

Pentru o cerere observată, răspunsul unui model ar putea cita orice porțiune a
transcrierii fără o delimitare structurată a indiciului. Prin urmare,
`responseBody` din jurnalul persistent al apelului este înlocuit cu un marcaj de
omisiune; artefactul detaliat al fluxului de procesare (care poate include
corpurile din amonte/ale clientului și fragmentele fluxului) nu este păstrat.
Cache-urile semantice, de idempotentă și de reluare a raționamentului ocolesc
citirile și scrierile pentru cererea respectivă. Cererea către furnizor și
răspunsul vizibil clientului rămân neschimbate. Octeții timpurii de menținere a
conexiunii sunt evacuați din memoria-tampon temporară atunci când artefactul
detaliat este omis. Avertismentul Kiro privind un EventStream format incorect
raportează numai numărul de octeți ai sarcinii utile, niciodată conținutul
acesteia sau eroarea brută a analizorului JSON.
Aceasta nu susține că fiecare diagnostic fără legătură al furnizorului/pluginului
a fost auditat; verificarea mai amplă a destinațiilor de păstrare este urmărită
în #11658.

Ciclul de viață intern `/api/modality-bridge/video/drilldown` este un substrat
de cache separat, autentificat prin loopback/token. Fiecare operațiune necesită,
de asemenea, un ID principal opac canonic. Înainte de activarea unui apelant de
producție, acesta trebuie să derive ID-ul respectiv din entitatea găzduită
autentificată și nu trebuie să redirecționeze niciodată o valoare selectată de
client. Cheile de cache leagă acel principal de ID-urile canonice ale sesiunii
și referinței video, stochează numai cheile derivate prin SHA-256 și limitează
atât citirile, cât și ștergerea la același principal. Cache-ul stochează cel
mult 16 cadre JPEG derivate per intrare, le expiră după zece minute și acceptă
citiri delimitate prin `start`/`end` sau ștergerea explicită a sesiunii.

Fiecare principal este limitat la 16 intrări și 64 MiB de date JPEG canonice.
Aceste limite sunt independente de plafonul global de 64 de intrări/256 MiB:
presiunea cotei principalului evacuează numai intrările cel mai puțin recent
utilizate ale principalului respectiv înainte de a lua în considerare evacuarea
LRU globală. Intrările expirate sunt eliminate atât din contabilizarea
principalului, cât și din cea globală în timpul activității cache-ului, în timp
ce anularea și eșecul validării nu salvează o înlocuire parțială.

Cache-ul respinge Base64 necanonic, umplerea în exces, conținutul media care nu este JPEG, imaginile JPEG incorecte sau
trunchiate și imaginile JPEG care produc un avertisment în timpul unei decodări complete, limitate, a imaginii cu `sharp`.
Acesta recodifică fiecare imagine acceptată ca JPEG canonic, determină lățimea și înălțimea
din octeții decodificați în loc să considere de încredere câmpurile apelantului și elimină orice
octeți poligloți de la final în loc să îi păstreze. Numai bufferul comprimat canonic și limitat
este luat în calcul pentru ambele cote. Limita pentru datele JSON transmise include surplusul Base64 pentru plafonul
de 32 MiB al datelor de intrare decodificate. Fiecare
derivare stocată înregistrează formatul și rezoluția JPEG validate, politica de eșantionare,
versiunea derivării, ora creării, hash-ul conținutului calculat de server și referința părintelui
sub formă de hash, împreună cu hash-ul conținutului părinte furnizat de apelantul de încredere. Anularea este verificată
între fazele asincrone de decodare/hash, înainte de confirmarea atomică în cache.

Această tranșă nu conectează încă un producător pentru mediul de producție la rută și nu
oferă selectarea variantelor cu rezoluții multiple. Prin urmare, calea transparentă de solicitare
Video Bridge nu implică operațiuni suplimentare, iar derivarea principalului asociat tenantului și
întregul ciclu de viață FU-08 cu rezoluții multiple rămân activități ulterioare explicite,
nefiind documentate drept comportament complet.

Cadrele primesc descrieri secvențial, folosind modelul Video configurat. O suprascriere
Video goală moștenește setarea Vision; dacă ambele sunt goale, routerul automat Vision
selectează modelul efectiv cu funcționalități de procesare vizuală. Descrierile generate cu succes
înlocuiesc partea originală cu un prefix stabil `[Video description:`, care marchează, de asemenea,
textul drept observație nesigură derivată din conținut media și le indică modelelor din aval
să nu urmeze instrucțiunile găsite în conținutul media. Cheile cache-ului pentru descrierile cadrelor
includ octeții JPEG, promptul, marcajul temporal și modelul efectiv; numai descrierile
generate cu succes sunt memorate în cache. Intrările din cache păstrează modelul producător real
care a reușit, inclusiv un model de rezervă; puntea raportează `mixed` atunci când cadre diferite
au fost produse de modele diferite. O potrivire în cache reutilizează identitatea producătorului respectiv,
în loc să o reeticheteze drept planul de rutare solicitat. Cache-ul pentru rezultatul
întregului videoclip folosește o cheie bazată pe fiecare intrare care modifică rezultatul — promptul, modelul
efectiv, politica de eșantionare, numărul de cadre, modul de analiză semantică, amprenta SHA-256
a indiciului de focalizare normalizat, fereastra de focalizare, `transcript`,
`audioTranscript` și indicatorul pentru foaia de contact — astfel încât modificarea oricăreia dintre aceste
dimensiuni produce un rateu de cache, niciodată reutilizarea unor date perimate. Versiunea politicii
de deduplicare vizuală, pragul și numărul limitat de cadre candidate sunt, de asemenea, explicite în
cheia și metadatele cache-ului de rezultate; prin urmare, o modificare a politicii nu poate reutiliza o
descriere perimată a întregului videoclip. Metadatele v4 ale cache-ului de rezultate păstrează modul și
amprenta, niciodată sarcina brută a utilizatorului. Metadatele mecanismului de protecție raportează atât
modul de analiză solicitat, cât și pe cel efectiv; un mod `focused` solicitat fără
text utilizabil din partea utilizatorului este raportat ca fiind efectiv `full`.

Mecanismul de protecție extrage fiecare parte video acceptată, dar nu descrie mai mult de
`modalityBridgeVideoMaxVideos`. Pentru o țintă despre care s-a demonstrat că are
`supportsVideo === false`, videoclipurile nereușite și cele care depășesc limita devin marcaje text sigure
explicite, astfel încât niciun videoclip brut să nu supraviețuiască. Atunci când capabilitatea este necunoscută, părțile
respective rămân nemodificate. Țintele cu `supportsVideo === true` ocolesc puntea.
Semnalul de anulare al solicitării clientului se propagă prin descărcare, coada brokerului,
subprocese și apelurile pentru generarea descrierilor; anulările opresc procesarea între videoclipuri și nu recurg
niciodată, în caz de eroare, la conținutul media brut.

Setările din timpul rulării sunt stocate în baza de date și validate cu Zod:

| Cheie                               | Valoare implicită | Interval / comportament                                                                                                |
| ----------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`           | Mediu de rulare opțional, activat explicit                                                                             |
| `modalityBridgeVideoAnalysisMode`   | `"full"`          | `full` păstrează descrierile generice; `focused` utilizează context limitat și nesigur de la cel mai recent utilizator |
| `modalityBridgeVideoModel`          | `""`              | Moștenește modelul Vision Bridge                                                                                       |
| `modalityBridgeVideoFrameCount`     | `8`               | 1–16                                                                                                                   |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`       | `uniform`, `scene_aware` sau `segment_aware` proporțional; eșecul detectorului revine la `uniform`                     |
| `modalityBridgeVideoMaxVideos`      | `1`               | 1–4                                                                                                                    |
| `modalityBridgeVideoTimeout`        | `120000`          | 1000–120000 ms                                                                                                         |

Valorile persistente moștenite pentru expirarea Video care depășesc 120 de secunde sunt limitate la
termenul-limită al brokerului; noile scrieri de setări care depășesc această limită sunt respinse.
`GET /api/modality-bridge/video/runtime` necesită o localitate loopback marcată drept de încredere
înaintea autentificării sau a verificării mediului de rulare, apoi necesită autentificare
de administrare. Returnează numai `available`, versiunile FFmpeg/ffprobe igienizate și un motiv
fix atunci când mediul de rulare nu este disponibil. Endpointul intern de extragere nu este
un API public pentru încărcări: saturarea cozii returnează `503` plus `Retry-After`, deconectarea
apelantului returnează `499`, iar termenul-limită fix al brokerului returnează `504`. Răspunsurile convertite adaugă
`video->text;model=<visionModel>;parts=<videos>` la antetul central
`x-omniroute-modality-bridge`, fără a elimina segmentele Vision sau Audio.

### Mascarea PII (`piiMasker.ts`)

Rulează în **ambele** etape.

- **`preCall`** clonează sarcina utilă, parcurge `system`, `messages`, `input` și
  `prompt` (inclusiv elementele de tip șir simplu) și aplică `processPII()` (din
  `@/shared/utils/inputSanitizer`) câmpurilor șir `content`/`text`. Când
  `PII_REDACTION_ENABLED=true`, informațiile PII detectate sunt redactate în
  sarcina utilă trimisă. Acest comportament este independent de `INPUT_SANITIZER_MODE`
  (care controlează doar politica privind injectarea în prompt). Când redactarea
  este dezactivată, apelul înregistrează numărul de detectări fără a rescrie
  conținutul.
- **`postCall`** clonează în profunzime răspunsul, rulează `sanitizePIIResponse()`
  împreună cu masca pentru structura API-ului Responses (`maskResponsesOutput` —
  acoperă `output_text` și `output[].content[].text`). Dacă are loc vreo redactare,
  răspunsul modificat îl înlocuiește pe cel original.

Mecanismul de protecție nu blochează niciodată; doar adaugă adnotări
(`meta.detections`, `meta.redacted`) sau rescrie conținutul.

### Injectarea în prompt (`promptInjection.ts`)

Detectează structuri ostile în conținutul furnizat de utilizator și aplică
politica configurată. Comportamentul este determinat de variabilele de mediu și
de opțiunile constructorului:

| Setare          | Variabilă de mediu                                                                                      | Valoare implicită | Efect                                                                                                                                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Activat         | `INPUT_SANITIZER_ENABLED`                                                                               | `true`            | Când este `false`, mecanismul de protecție se încheie imediat.                                                                                                                                                           |
| Mod             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                         | `warn`            | Politica de injectare: `block`, `warn` sau `log`. (`redact` este acceptat pentru compatibilitate retroactivă, dar **nu** elimină textul injectat; rescrierea PII din cerere este controlată de `PII_REDACTION_ENABLED`.) |
| Prag de blocare | opțiunea `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`            | Severitatea minimă necesară pentru blocare. Cu setarea implicită, severitatea medie este doar observată.                                                                                                                 |

**Precedența modurilor** (`getMode`): `options.mode` al apelantului →
suprascrierea **indicatorului de funcționalitate din BD** pentru `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → variabila de mediu `INJECTION_GUARD_MODE` → variabila de mediu `INPUT_SANITIZER_MODE` →
`warn`. Prin urmare, o suprascriere din panoul de control are prioritate față de variabilele de
mediu, astfel încât interfața Feature Flags controlează în timp real mecanismul
de protecție activ (fără repornire). Citirea din BD este sigură în caz de eroare:
dacă aceasta eșuează, mecanismul de protecție revine la comportamentul bazat pe
variabilele de mediu, iar când nu este configurată nicio suprascriere,
comportamentul este identic cu rezoluția bazată exclusiv pe variabilele de mediu.

Surse de detectare:

1. `sanitizeRequest()` din `@/shared/utils/inputSanitizer` (setul comun de
   detectoare utilizat și în alte părți ale fluxului).
2. `DEFAULT_GUARD_PATTERNS` încorporate (în prezent `system_override_inline` și
   `markdown_system_block`, ambele cu severitate `high`).
3. `customPatterns` opționale transmise prin opțiunile constructorului (șiruri,
   expresii regulate sau înregistrări `{ name, pattern, severity }`).

Când `mode === "block"` **și** cel puțin o detectare atinge pragul de severitate,
`preCall` returnează `{ block: true, message: "Cerere respinsă:
a fost detectat conținut suspect" }`. În modurile `warn`/`log`, mecanismul de protecție
înregistrează evenimentul, dar permite apelul. Funcția auxiliară comună
`evaluatePromptInjection()` este, de asemenea, exportată pentru apelanții care
trebuie să evalueze prompturi fără a trece prin registru.

**Limită de scanare (v3.8.20):** detectorul inspectează doar **primii 16 KB** din
textul concatenat al promptului — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 de octeți) în
`src/shared/utils/inputSanitizer.ts`. Atât `detectInjection()`, cât și
`evaluatePromptInjection()` aplică `slice(0, MAX_INJECTION_SCAN_BYTES)` înainte de a rula
bucla de tipare. Directivele de injectare se află aproape de începutul datelor de
intrare, astfel încât această limită reduce consumul CPU/GC al expresiilor regulate
pentru sarcini utile de sute de KB fără a slăbi detectarea (cf.
#3932, #4041).

### Mascarea credențialelor (`credentialMasker.ts`)

Rulează în **ambele** etape, ultima în lanțul implicit (prioritatea `95`). Redactează
tiparele bine-cunoscute de chei API/tokenuri secrete din sarcina utilă trimisă
(conținutul mesajelor, argumentele apelurilor de instrumente, rezultatele instrumentelor)
**și** din răspunsul furnizorului, astfel încât o credențială lipită într-un prompt
(sau returnată de rezultatul unui instrument) să nu fie divulgată furnizorului din
amonte sau înapoi clientului.

- **Doar cu activare explicită**, conform aceleiași convenții ca mascarea PII (regulă strictă adiacentă regulii #20):
  dezactivată dacă `settings.credentialRedactionEnabled !== true` **și**
  `CREDENTIAL_REDACTION_ENABLED` nu este `true`. Când este dezactivată, măsura de protecție nu efectuează nicio operație —
  nu blochează și nu rescrie niciodată.
- `redactCredentials()` parcurge întregul arbore al sarcinii utile/răspunsului (`walkValue()`,
  protejat împotriva poluării prototipului și împotriva ciclurilor prin `WeakSet`) și înlocuiește potrivirile cu
  un substituent `[REDACTED:<type>]`, clonând doar ramurile care s-au
  modificat efectiv.
- `CREDENTIAL_PATTERNS` acoperă cheile furnizorilor LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokenurile VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), cheile de plată (Stripe, Square), cheile
  cloud (cheie de acces AWS, Twilio, SendGrid, Mailgun), cheile private/JWT-urile,
  șirurile de conexiune care conțin acreditări (`mongodb://user:pass@...` etc.) și
  un tipar generic pentru valorile antetelor `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Cheile care au forma unor antete (`authorization`, `x-api-key`, `api-key`,
  `apikey`) sunt mascate structural (doar valoarea, păstrând prefixul schemei, precum
  `Bearer `/`Basic `), nu prin expresia regulată generică pentru text.
- Măsura de protecție nu blochează niciodată; doar rescrie (`modifiedPayload` /
  `modifiedResponse`) și adaugă adnotări (`meta.credentialsRedacted`, `meta.count`).

Protecție împotriva regresiilor: `tests/unit/credential-masker-guardrail.test.ts`.

## Contract de bază (`base.ts`)

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
  block?: boolean; // valoarea true întrerupe lanțul
  message?: string; // afișat în cazul blocării
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // returnat de preCall pentru a rescrie cererea
  modifiedResponse?: TValue; // returnat de postCall pentru a rescrie răspunsul
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

Un mecanism de protecție semnalează „nicio modificare” returnând fie `void`, `{}`, fie
`{ block: false }`. Returnarea unui `modifiedPayload`/`modifiedResponse` înlocuiește
valoarea transmisă prin lanț către mecanismele de protecție ulterioare.
`signal?: AbortSignal` transmite ciclul de viață al apelantului către mecanismele de protecție. Anularea unei cereri reprezintă excepția intenționată de tip „fail-open”: punțile media își opresc activitatea și efectuează curățarea fără a restaura conținutul media brut către o destinație despre care se știe că nu îl acceptă.

## Registru (`registry.ts`)

Instanța singleton `guardrailRegistry` expune:

- `register(guardrail)` — adaugă un mecanism de protecție (sau îl înlocuiește după numele normalizat) și
  reordonează elementele în ordine crescătoare după `priority`.
- `clear()` / `list()` — funcții auxiliare administrative.
- `runPreCallHooks(payload, context)` — parcurge mecanismele de protecție active, transmite succesiv
  sarcina utilă prin `modifiedPayload` și se oprește la primul `block: true`.
- `runPostCallHooks(response, context)` — același flux pentru răspuns.
- `resetGuardrailsForTests({ registerDefaults })` — golește starea și, opțional,
  reînregistrează valorile implicite pentru o izolare curată a testelor.

Ambele funcții de execuție returnează `{ blocked, payload|response, results, guardrail?, message? }`,
unde `results` este un tablou de înregistrări `GuardrailExecutionResult` care includ
câmpurile `blocked`, `skipped`, `modified`, `error` și `meta` pentru fiecare mecanism de protecție,
utile pentru trasare.

### Dezactivarea mecanismelor de protecție pentru fiecare cerere

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agregă o listă
fără duplicate cu numele mecanismelor de protecție care trebuie omise pentru cererea
curentă. Sursele (toate opționale și combinate) sunt:

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` din corpul cererii (la nivel superior)
- `metadata.disabledGuardrails` din corpul cererii
- Antetul `x-omniroute-disabled-guardrails` (sau varianta veche
  `x-disabled-guardrails`)

Valorile pot fi tablouri de șiruri sau un șir separat prin virgule; numele sunt
normalizate la litere mici în format kebab-case (`pii_masker` → `pii-masker`). Rezultatul
este transmis prin `context.disabledGuardrails` către registru, care omite
mecanismele de protecție corespunzătoare (`skipped: true` în `results`).

## Ordinea de execuție

Pentru fiecare cerere care trece prin `src/sse/handlers/chat.ts` și
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` construiește lista de omitere pe baza cheii API, a corpului
   și a antetelor.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` execută mecanismele de protecție în ordinea
   crescătoare a priorității:
   - Mecanismele de protecție dezactivate sunt înregistrate ca `skipped`.
   - Metoda `preCall` a fiecărui mecanism de protecție poate rescrie conținutul transmis prin `modifiedPayload`.
   - Primul `block: true` întrerupe lanțul, iar handlerul returnează
     un răspuns de respingere din partea mecanismului de protecție.
3. Conținutul transmis (eventual rescris) trece în rutarea combinată și în trimiterea
   către serviciul upstream.
4. După asamblarea răspunsului, `guardrailRegistry.runPostCallHooks(...)`
   execută același lanț asupra răspunsului. Un `block: true` în acest punct elimină răspunsul
   upstream.

Mecanismele de protecție care generează excepții sunt înregistrate cu `error: <message>` și consemnate prin
`logger.warn`, însă lanțul continuă — prin proiectare, comportamentul este fail-open.

## Configurare

Variabile de mediu citite de mecanismele de protecție încorporate:

| Variabilă                             | Utilizată de              | Efect                                                                                                                                                      |
| ------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Setați la `false` pentru a dezactiva complet detectarea.                                                                                                   |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Politica pentru injecții: `warn`, `block` sau `log`. Valoarea veche `redact` nu rescrie textul injecției.                                                  |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Modul mecanismului de protecție împotriva injecțiilor; este și un indicator de funcționalitate din DB care **suprascrie** variabilele de mediu (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Severitatea minimă respinsă de `MODE=block`: `high` (implicit), `medium` sau `low`.                                                                        |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Alias vechi pentru `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                                      |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Când este `true`, datele PII din cerere sunt redactate (independent de modul pentru injecții).                                                             |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Controlează comportamentul de mascare aplicat răspunsului.                                                                                                 |

Mecanismele de protecție Modality Bridge citesc configurația din timpul execuției din depozitul de setări
susținut de DB (`getSettings()`), nu din variabilele de mediu. Cheile principale pentru Vision sunt
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` și
`modalityBridgeCacheMaxEntries`. Cheile vechi
`visionBridge*` sunt acceptate numai ca mecanism documentat de rezervă pentru citire pe durata unui singur ciclu;
scrierile din tabloul de bord utilizează cheile principale. Valorile implicite și resolverul de rezervă
se află în `src/shared/constants/modalityBridgeDefaults.ts`, iar constantele vechi
sunt păstrate în `src/shared/constants/visionBridgeDefaults.ts`.

Pentru audio se utilizează `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` și `modalityBridgeAudioMaxClips`, împreună cu setările comune
`modalityBridgeCache*`. Pentru audio nu există un mecanism de rezervă bazat pe chei vechi, deoarece aceste
chei au fost introduse odată cu schema Modality Bridge.

Pentru video se utilizează `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` și
`modalityBridgeVideoTimeout`, împreună cu setările comune `modalityBridgeCache*`.
Funcționalitatea este dezactivată implicit deoarece FFmpeg/ffprobe sunt dependențe operaționale
opționale, iar generarea descrierilor pentru cadre adaugă latență și costuri asociate modelului.

## Mecanisme de protecție personalizate

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

Pași:

1. Creați `src/lib/guardrails/myGuardrail.ts` extinzând `BaseGuardrail`.
2. Implementați `preCall` și/sau `postCall`.
3. Fie înregistrați la momentul importului (adăugând din `registerDefaultGuardrails`), fie
   apelați `guardrailRegistry.register(...)` în timpul execuției — registrul înlocuiește
   orice mecanism de protecție anterior cu același nume normalizat.
4. Adăugați teste în `tests/unit/` (exemple existente:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testare

Utilizați `resetGuardrailsForTests()` între teste pentru a porni de la o stare cunoscută.
Transmiteți `{ registerDefaults: false }` pentru a porni cu un registru gol și
înregistrați doar mecanismele de protecție testate. Vision Bridge acceptă injectarea
dependențelor (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge expune
punctele de extensie echivalente pentru setări, capabilități, selectarea modelului STT,
verificarea acreditărilor și transcriere. Astfel, testele pot verifica ambele fluxuri fără
acces la baza de date sau la rețea.

## Consultați și

- `src/lib/guardrails/` — implementare
- `src/shared/utils/inputSanitizer.ts` — detector partajat care asigură
  detectarea injectării în prompturi și mascarea PII
- `src/shared/constants/visionBridgeDefaults.ts` — valorile implicite Vision Bridge și
  lista modelelor care impun utilizarea punții
- `src/shared/constants/modalityBridgeDefaults.ts` — valorile implicite partajate de execuție pentru Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — strat ortogonal (întrerupător de circuit, perioade de așteptare)
- `docs/reference/ENVIRONMENT.md` — referința completă a variabilelor de mediu

## Acoperirea rutelor de mecanismul anti-injectare și red-team (Faza 8 · Blocul D)

Mecanismul anti-injectare (`createInjectionGuard` / `withInjectionGuard`) acoperă toate rutele
care acceptă prompturi de la utilizatori. Acesta respectă `INJECTION_GUARD_MODE` (valoarea implicită `warn` = doar jurnalizare;
`block` = returnează HTTP 400 `SECURITY_001`).

| Tip             | Rute                                                                                                                                                 | Mod implicit |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Text (existent) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn         |
| Generativ       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn         |
| Date            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn         |

Extragerea textului (`extractMessageContents`) acoperă `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (nocturn, `nightly-llm-security.yml`):** promptfoo validează că fiecare rută blochează
corpusul OWASP-LLM când `INJECTION_GUARD_MODE=block`; garak execută sonde (este omis fără secret).
`moderations` este inclus pentru consecvență — operatorii care utilizează modul de blocare îl pot excepta prin
`resolveDisabledGuardrails`.

Fluxul de lucru nocturn (`.github/workflows/nightly-llm-security.yml`, cron + declanșare
manuală) are două joburi:

- **`promptfoo-guard` (blocant)** — execută `promptfoo eval -c promptfooconfig.yaml`
  cu `INJECTION_GUARD_MODE=block`. Fiecare caz adversarial (de exemplu, „ignorați toate
  instrucțiunile anterioare…”, jailbreak-uri în stil DAN) verifică dacă răspunsul conține
  `error.code === "SECURITY_001"`, adică mecanismul de protecție a respins efectiv cererea.
- **`garak` (consultativ)** — execută garak `--probes promptinject,dan,leakreplay`
  asupra unei instanțe OmniRoute locale (`http://localhost:20128/v1`). Este condiționat de
  un secret al furnizorului (`PROMPTFOO_PROVIDER_KEY`); este omis fără eroare și are sufixul
  `|| true`, astfel încât raportează fără a provoca eșecul CI.

Acoperirea funcției ajutătoare a mecanismului de protecție (`createInjectionGuard` / `withInjectionGuard`)
include fiecare rută `/v1` care conține prompturi; textul promptului este preluat din
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` de către
`extractMessageContents()` din `src/shared/utils/inputSanitizer.ts`.
