# Guardrails (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Fonte di verità:** `src/lib/guardrails/`
> **Ultimo aggiornamento:** 2026-08-29 — v3.8.51 (La provenienza della trascrizione di Video Bridge è dichiarata dal chiamante,
> non ancora verificata dal server — chiarito come da #11661)

I guardrail applicano sicurezza, policy e trasformazioni dei contenuti al confine
tra OmniRoute e i provider upstream. Ogni guardrail può ispezionare (e
opzionalmente rifiutare, trasformare o annotare) i payload delle richieste (`preCall`) e
le risposte upstream (`postCall`).

Il sistema è **fail-open**: se un guardrail genera un errore durante l'esecuzione, il registro
annota l'errore e continua con il guardrail successivo invece di far fallire la
richiesta. Il blocco è una decisione esplicita (`block: true`), mai accidentale.

## Protezioni integrate

Il registro carica automaticamente sei protezioni in ordine di priorità al momento dell'importazione
(vedere `registry.ts` → `registerDefaultGuardrails()`):

| Priorità | Nome                | Fase/i         | File                  |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

I numeri di priorità più bassi vengono eseguiti **per primi**.

### Bridge visivo (`visionBridge.ts`) — Bridge di modalità PR-1

Intercetta le richieste contenenti immagini destinate a **modelli senza capacità visive** e
reindirizza l'intera richiesta a un modello con capacità visive oppure sostituisce le parti
contenenti immagini con descrizioni testuali prodotte da un modello visivo configurabile prima
della chiamata upstream. Ciò consente ai provider di solo testo di gestire in modo trasparente
i payload multimodali.

Flusso:

1. Ignora la richiesta se il modello di destinazione supporta già la visione (a meno che non compaia
   nell'elenco dei bridge forzati `isVisionBridgeForcedModel`).
2. Estrae le parti contenenti immagini tramite `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), che delega al **rilevatore multimediale
   unificato** `detectMediaParts()` in `open-sse/utils/mediaParts.ts`, l'unica
   fonte autorevole condivisa con il filtro di compatibilità combo.
   L'estrazione è limitata tramite allowlist alle parti di primo livello con le forme
   che `replaceImageParts` può reinserire (il contratto estrazione↔sostituzione): OpenAI
   `image_url`, `source.type:"base64"` in base64 di Anthropic, URL Anthropic
   `source.type:"url"` e `input_image` della Responses API. Le corrispondenze annidate e
   le forme costituite solo da indicatori sono materiale per il filtro combo e non vengono mai estratte.
   Ignora la richiesta se non ne viene trovata nessuna.
3. Risolve la configurazione di runtime tramite `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): le nuove chiavi delle impostazioni
   `modalityBridge*` hanno la precedenza; le chiavi legacy `visionBridge*` rimangono un
   **fallback per un ciclo** (finestra di rollback). Interrompe l'elaborazione prima di qualsiasi
   analisi dei contenuti multimediali quando il bridge è disabilitato.
4. Il selettore di modalità (`modalityBridgeVisionMode`, vedere la tabella seguente) decide
   tra reindirizzamento e descrizione. Il reindirizzamento restituisce `modifiedPayload` con il solo
   `model` sostituito, oltre ai metadati `{ rerouted, fromModel, toModel, imagesKept }`.
5. Percorso di descrizione: limita le immagini a `maxImages`, compone il prompt in base all'attività,
   consulta la cache delle descrizioni, chiama il modello visivo **in parallelo**
   (`Promise.allSettled`) e inserisce al loro posto parti testuali
   `[Image N]: <description>`. Una descrizione non riuscita produce `null` e la parte immagine originale
   viene **mantenuta** (#4012), tranne nel percorso di descrizione combo quando
   tutte le descrizioni non sono riuscite, nel qual caso un upstream confermato come privo di capacità visive riceve
   invece uno stub `(unavailable — no vision-capable provider connected)` (#8430).
6. Restituisce `modifiedPayload` + metadati (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selettore di modalità (`modalityBridgeVisionMode`)

| Modalità   | Predefinita | Comportamento                                                                                                                                                                                                                                                                                                                                                                              |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔           | Euristica legacy, invariata (#6640/#7204): i modelli non combo/`auto/` vengono reindirizzati al miglior modello visivo, a meno che il modello originale non disponga già di credenziali utilizzabili (in tal caso viene usata la descrizione); le destinazioni combo usano sempre la descrizione.                                                                                          |
| `describe` |             | Usa sempre la descrizione: il blocco di reindirizzamento viene ignorato completamente; risponde sempre il modello scelto dall'utente.                                                                                                                                                                                                                                                      |
| `reroute`  |             | Forza il reindirizzamento: il controllo che mantiene il modello dotato di credenziali viene ignorato. Il controllo delle credenziali della **destinazione** del reindirizzamento continua ad applicarsi: quando non esiste una destinazione visiva utilizzabile, la richiesta passa alla descrizione, così le immagini non elaborate non raggiungono mai un backend di solo testo (#8430). |

Le modalità forzate terminano anticipatamente **prima** dell'esecuzione dell'euristica automatica; il comportamento
`auto` è identico byte per byte a quello della protezione precedente a PR-1.

#### Ambito della chiave API (`visionBridgeKeyScope.ts`)

Quando la chiave API del chiamante limita `allowedConnections`, i pool di quote
(`allowedQuotas`) o i modelli (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), il bridge seleziona
solo modelli di reindirizzamento e descrizione che la chiave può utilizzare, su connessioni che la chiave può
utilizzare. La chiamata di descrizione passa quindi sempre attraverso il self-loop di OmniRoute con
l'header `x-omniroute-self-loop-key-id`, in modo che la richiesta di chat ricevente
applichi nuovamente i criteri della chiave relativi a connessioni e modelli. `enforceApiKeyPolicy()`
rispetta tale header solo insieme al bearer del self-loop, quindi può soltanto
restringere l'accesso; un ID che non viene risolto viene rifiutato.

Se per la chiave non è consentito alcun modello visivo, il percorso di descrizione si fa da parte e
la richiesta viene inoltrata senza modifiche, con lo stesso comportamento fail-open di una
protezione disabilitata (metadati `{ skipped: true, reason: "no_permitted_vision_model" }`).
Le richieste senza chiave e le chiavi prive di tali restrizioni si comportano esattamente come
in precedenza.

#### Prompt di descrizione in base all'attività (`modalityBridgeVisionTaskAware`)

Valore predefinito: **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) aggiunge
il testo dell'**ultimo messaggio dell'utente** (troncato a 500 caratteri) al prompt
di descrizione di base, orientando la descrizione verso ciò che l'utente ha
effettivamente richiesto (pattern codex-vision-proxy) e chiedendo al modello
visivo di trascrivere il testo visibile. Con il flag disattivato — o in assenza
di testo dell'utente — il prompt di base viene utilizzato senza modifiche.

La richiesta compatibile con OpenAI del self-loop di descrizione (`callVisionModelSingle()`
in `visionBridgeHelpers.ts`) richiede sempre `image_url.detail: "high"` —
incondizionatamente, per ogni chiamante/provider, senza dipendere da alcun
segnale del client. Il campionamento a basso dettaglio riduce l'accuratezza OCR
proprio per l'attività di trascrizione del testo richiesta da questo prompt,
quindi la chiamata di descrizione richiede sempre un dettaglio elevato,
indipendentemente dal livello di dettaglio usato dalla richiesta originale in
ingresso. Ciò influisce solo sul corpo della richiesta interna di descrizione;
non modifica il modo in cui OmniRoute inoltra il valore `image_url.detail` del
chiamante nella richiesta principale — tale valore predefinito viene applicato
separatamente e solo per i client OpenCode rilevati, in `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Il ramo del self-loop di
descrizione in formato wire Anthropic non dispone di un campo `detail` e non è
influenzato da nessuno dei due valori predefiniti.

#### Limite dell'output di descrizione (`modalityBridgeVisionMaxChars`)

| Chiave                         | Predefinito | Intervallo      |
| ------------------------------ | ----------- | --------------- |
| `modalityBridgeVisionMaxChars` | `0`         | `0` o 100–50000 |

`0` (valore predefinito) significa **nessun limite** — la descrizione restituita
da `callVisionModel()` viene trasmessa senza modifiche, preservando il
comportamento esistente. Qualsiasi valore nell'intervallo 100–50000 tronca la
descrizione aggiungendo il suffisso `…` prima che venga reinserita come
`[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` in
`src/lib/guardrails/visionBridge.ts`). Aumentare questo valore per attività OCR
ricche di dettagli, in cui il modello a valle necessita della trascrizione
completa; ridurlo per limitare l'utilizzo di token con modelli visivi prolissi.
Il campo della dashboard si trova nel pannello Advanced della scheda Vision
(`modality-bridge-max-chars` in `ModalityBridgeVisionTab.tsx`) e porta qualsiasi
valore compreso tra 1 e 99 al minimo di 100, lasciando invece invariato un `0`
esplicito — `0` è di per sé un valore Zod valido
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), non
semplicemente il valore predefinito "non impostato".

#### Cache delle descrizioni (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL in memoria per gli output di descrizione, condivisa a livello
di processo. Chiave = `sha256(imageRef + composedPrompt + configuredBridgeModel)`
con framing basato sul prefisso di lunghezza (nessuna collisione tra i confini
dei campi). Il componente del modello è il modello bridge **configurato**, non
il modello che ha effettivamente risposto — `callVisionModel` può eseguire
internamente un fallback e l'uso di una chiave per ogni tentativo
frammenterebbe la cache. Le descrizioni non riuscite non vengono mai memorizzate
nella cache. Impostazioni:

| Chiave                          | Predefinito | Intervallo |
| ------------------------------- | ----------- | ---------- |
| `modalityBridgeCacheEnabled`    | `true`      | —          |
| `modalityBridgeCacheTtlMinutes` | `60`        | 1–1440     |
| `modalityBridgeCacheMaxEntries` | `200`       | 10–5000    |

#### Normalizzazione delle immagini remote (descrizione self-loop/recupero base64)

Quando il bridge recupera autonomamente un'immagine **remota** — la
self-call di descrizione Anthropic e la conversione base64 nel formato wire
Claude (`ensureBase64ImagesForClaudeWire`), entrambe tramite
`fetchRemoteImageAsDataUri()` in `visionBridgeHelpers.ts` — il data URI
risultante viene elaborato da `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) prima di essere incorporato nella richiesta
al modello visivo. Le immagini sovradimensionate vengono ridimensionate con un
**lato lungo di 2048px** (in linea con il limite di ridimensionamento già
applicato lato server da OpenAI/Anthropic), riducendo i byte caricati e la
latenza senza modificare ciò che vede il modello visivo. Il ridimensionamento
utilizza `sharp`, caricato tramite import dinamico: su una piattaforma in cui il
relativo binario nativo non riesce a caricarsi, `normalizeDataUri()` **non
genera mai un'eccezione** — ricorre al pass-through dei byte originali, affinché
il percorso di descrizione/conversione base64 continui sempre a funzionare.
Anche i byte che non rappresentano immagini (un recupero che non ha restituito
un'immagine decodificabile) vengono trasmessi senza modifiche. Questa
normalizzazione è limitata alle immagini recuperate dal bridge per la propria
self-call — non viene mai applicata al payload raw del chiamante trasmesso in
pass-through, in conformità con il principio di modifica solo su consenso
esplicito (Regola rigida n. 20).

#### Schema delle impostazioni + migrazione

Le nuove chiavi `modalityBridge*` vengono convalidate da Zod in
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, il trio
`modalityBridgeCache*` e il gruppo `modalityBridgeAudio*` utilizzato
dall'Audio Bridge. La migrazione `141_modality_bridge_settings.sql` copia i
valori legacy `visionBridge*` esistenti nelle nuove chiavi corrispondenti
(è idempotente e non sovrascrive mai un valore `modalityBridge*` impostato
dall'operatore); le chiavi legacy rimangono accettate come fallback di lettura
per un ciclo di rilascio.

#### Header di trasparenza + statistiche

Le risposte trasformate tramite descrizione includono
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(costruito da `buildModalityBridgeHeader()` in `modalityBridge/bridgeStats.ts`,
applicato da `withModalityBridgeHeader()` in `src/sse/handlers/chatHelpers.ts`).
Le richieste reindirizzate **non** ricevono alcun header — il payload non è
stato modificato e la sostituzione del modello è già visibile nel campo `model`
del corpo della risposta.

`GET /api/modality-bridge/stats` (autenticazione di gestione, stesso livello di
`GET /api/settings`) restituisce i contatori in memoria per ciascuna modalità
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` per `vision`, `audio` e
`video`. `averageLatencyMs` usa `latencySamples`, non tutti i tentativi, come
denominatore; un'operazione priva di misurazione temporale non genera
artificialmente un campione di zero millisecondi. `bridged` rimane l'alias
retrocompatibile per le conversioni riuscite; i tentativi non riusciti non lo
incrementano.
I contatori vengono azzerati al riavvio del processo per scelta progettuale
(telemetria, non contabilizzazione).

#### Configurazione della dashboard

La pagina dedicata della dashboard è
`/dashboard/settings/modality-bridge`. Le relative schede `Vision`, `Audio` e
`Video`, accessibili tramite URL, mantengono i parametri di query durante la
modifica del valore `tab`.
La scheda Vision consente di configurare l'abilitazione, la modalità, la selezione
del modello (inclusa l'impostazione predefinita automatica), i prompt basati sul
tipo di attività, i limiti avanzati relativi a timeout/immagine/lunghezza della
descrizione/cache, i contatori di runtime e una richiesta di esempio protetta.
Anche la scheda Audio è attiva: consente di configurare l'abilitazione, un selettore
di modelli riservato a STT con Auto, i limiti di timeout/durata massima delle clip,
i contatori audio e un test di esempio `input_audio`. La scheda Video è
funzionante: mostra lo stato di runtime di FFmpeg/ffprobe, corrispondente a uno
dei quattro stati espliciti dell'interfaccia utente (`unknown` mentre il probe è
in corso o non può essere completato, `restricted` su un host della dashboard
non loopback, dove il probe viene ignorato lato client, `unavailable` dopo che
il probe ha confermato l'assenza dei componenti, oppure `available` con le versioni
di FFmpeg/ffprobe), salva in modo persistente i limiti relativi ad
abilitazione/modello/fotogrammi/video/timeout, limita il selettore ai modelli con
funzionalità di visione e mostra i contatori video.

La precedente scheda Vision Bridge nelle impostazioni AI è ora un collegamento di
compatibilità alla nuova pagina e non contiene più una seconda copia del modulo.
Media Providers collega inoltre i flussi di lavoro Image-to-Text e Speech-to-Text
alle schede corrispondenti di Modality Bridge, senza rimuovere il playground
Speech-to-Text esistente.

**Bypass dell'ammissione per il self-loop:** quando la chiamata di descrizione
viene instradata attraverso il self-loop `/v1` di OmniRoute (modello provider non
standard), la richiesta secondaria invia
`x-omniroute-admission-bypass: internal` e viene autenticata con la credenziale
self-loop risolta: il valore sentinella locale `sk_omniroute` in modalità locale,
oppure la chiave di ambiente `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` configurata
dall'operatore (#1350), in modo che le distribuzioni con `REQUIRE_API_KEY=true`
possano comunque eseguire la chiamata di descrizione. Il bypass viene accettato
solo per queste credenziali esatte, quindi i client esterni non possono usare
l'header per ignorare l'ammissione.

I valori predefiniti legacy si trovano in
`src/shared/constants/visionBridgeDefaults.ts`; i nuovi valori predefiniti per
modalità/consapevolezza dell'attività/cache e il resolver delle impostazioni si
trovano in `src/shared/constants/modalityBridgeDefaults.ts`. Il guardrail espone
un'opzione del costruttore `deps`, in modo che i test possano iniettare
implementazioni fittizie di `getSettings` e `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Intercetta le richieste di chat contenenti audio prima che raggiungano una
destinazione che non è nota per accettare input audio. Non reindirizza mai la
richiesta di chat: le parti audio vengono trascritte tramite l'endpoint multipart
esistente compatibile con OpenAI e il modello di chat scelto prosegue usando le
trascrizioni testuali.

Flusso:

1. Risolve `supportsAudio` tramite `getResolvedModelCapabilities()`. I metadati
   espliciti del registro dei provider hanno la precedenza, seguiti dai metadati
   statici del modello e infine da `modalities_input` sincronizzato. Un elenco di
   input dichiarato senza `audio` equivale a `false`; l'assenza di evidenze sulle
   funzionalità restituisce `null`. Sia `false` sia `null` attivano il bridge
   conservativo, mentre `true` lo bypassa.
2. Risolve le impostazioni `modalityBridgeAudio*` ed estrae da ogni messaggio le
   parti audio di primo livello che possono essere sostituite, tramite il rilevatore
   condiviso `detectMediaParts()`. I formati supportati sono `input_audio` di
   OpenAI, `audio_url` e `source.media_type: "audio/*"`. L'audio annidato viene
   rilevato ai fini dell'instradamento, ma non viene rimosso dal percorso di
   sostituzione. Il lavoro è limitato da `modalityBridgeAudioMaxClips`; le parti
   successive rimangono inalterate.
3. Rispetta un valore `provider/model` configurato oppure consente a
   `selectAudioBridgeModel()` di esaminare `AUDIO_TRANSCRIPTION_PROVIDERS`
   nell'ordine stabile del catalogo e selezionare il primo modello con una
   credenziale del provider attiva e utilizzabile.
4. `callAudioTranscription()` converte l'audio base64/data-URI in un `file`
   multipart oppure scarica un `audio_url` remoto attraverso la protezione in
   uscita limitata alle risorse pubbliche, con DNS pinning e un limite di 25 MB.
   Invia quindi tramite POST il file e il modello selezionato al self-loop locale
   `/v1/audio/transcriptions`, autenticato con `resolveSelfLoopBearer()`. La route
   di trascrizione esistente esegue la normale ricerca delle credenziali, la
   gestione del cooldown/rate limit e l'invio al provider.
5. Le chiamate riuscite sostituiscono le rispettive parti con
   `[Audio N]: <transcript>`. Le chiamate vengono eseguite con
   `Promise.allSettled`: un singolo errore mantiene la parte audio originale
   (contratto #4012). Se tutte le chiamate non riescono e la destinazione ha
   comprovato `supportsAudio === false`, le parti diventano
   `[Audio N]: (unavailable — no STT provider connected)` (contratto #8430). Per
   una destinazione sconosciuta (`null`), quando tutte le chiamate non riescono,
   il contenuto rimane inalterato. Una destinazione di cui è comprovato il supporto
   del solo testo e senza credenziali STT utilizzabili riceve lo stesso segnaposto
   esplicito senza effettuare una chiamata di rete.

Le trascrizioni riuscite utilizzano la cache LRU/TTL di Modality Bridge, condivisa
a livello di processo. La chiave combina il riferimento audio, l'etichetta stabile
dell'operazione `audio-transcription` e il modello STT selezionato; gli errori non
vengono mai memorizzati nella cache. I tentativi audio aggiornano i contatori
condivisi `bridged`, `cacheHits`, `failures` e `lastUsedAt`.
Le risposte trasformate contengono
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; le
richieste inalterate non ricevono un segmento Audio Bridge.

Le impostazioni di runtime sono memorizzate nel DB e convalidate tramite Zod:

| Chiave                        | Predefinito | Intervallo    |
| ----------------------------- | ----------- | ------------- |
| `modalityBridgeAudioEnabled`  | `true`      | —             |
| `modalityBridgeAudioModel`    | `""`        | Auto o ID STT |
| `modalityBridgeAudioTimeout`  | `60000`     | 1000–300000   |
| `modalityBridgeAudioMaxClips` | `3`         | 1–10          |

La cache condivisa rimane controllata da `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` e `modalityBridgeCacheMaxEntries`.

### Bridge video (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercetta le parti video di primo livello nei `messages` delle Completions chat e
nell'`input` dell'API Responses prima che venga chiamata una destinazione priva di
supporto video nativo noto. Le forme supportate sono `input_video`, `video_url`,
`video_source`, gli URL HTTPS e gli URI di dati `data:video/*;base64,...`. I
semplici nomi di file nel testo non vengono trattati come video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) gestisce l'attraversamento della
richiesta, il controllo di funzionalità/criteri, l'aggregazione per richiesta e il
payload della risposta. Le operazioni per ciascun video — acquisizione, cache del
risultato completo, descrizione di una sequenza di fotogrammi (che incorpora
qualsiasi trascrizione audio dichiarata dal chiamante) e
metriche/interruzione/pulizia per ciascun tentativo — sono nascoste dietro
`processVideoPart` in `videoBridgePipeline.ts`, chiamata una volta per ogni parte
video all'interno del ciclo di `preCall`. Tale modulo definisce inoltre i confini
espliciti delle porte `VideoMediaBrokerPort` (acquisizione dei byte ed estrazione
dei fotogrammi campionati), `VideoAudioTranscriptionPort` (incorporazione di una
trascrizione audio dichiarata dal chiamante nelle didascalie campionate) e
`VideoDrilldownPort` (il confine di persistenza dell'analisi dettagliata dei
fotogrammi; non ancora collegato a `processVideoPart`: attualmente solo la route
separata `/api/modality-bridge/video/drilldown` scrive le voci dell'analisi
dettagliata).

Il percorso pubblico delle richieste `/v1` non importa né invoca mai un
sottoprocesso. I video remoti vengono scaricati entro un limite di 50 MiB; i
video base64 inline hanno un limite conservativo di 36 MiB decodificati per
video, affinché l'involucro di modello/messaggi/framing possa rimanere entro il
limite pubblico di ammissione delle richieste JSON di 50 MiB. La lunghezza inline
e le stime delle dimensioni decodificate vengono controllate prima
dell'allocazione. HTTPS è obbligatorio sia per l'URL remoto iniziale sia per ogni
reindirizzamento, utilizzando la protezione esistente per le connessioni in
uscita solo pubbliche con pinning DNS. I byte attraversano quindi l'esatto
confine interno del broker `POST /api/modality-bridge/video/extract`. Tale route
è sia `LOCAL_ONLY` sia `SPAWN_CAPABLE`, accetta esclusivamente una richiesta
autenticata per processo proveniente da un loopback attendibile e non accetta
mai un URL, un percorso del file system, un eseguibile o un elenco di argomenti.
La pipeline dei limiti delle dimensioni del corpo dell'API e il lettore
incrementale del corpo dell'handler impongono indipendentemente un limite di
50 MiB per l'input del broker. La sua coda limitata esegue un'estrazione alla
volta, consente quattro processi in attesa e limita l'input in attesa a 100 MiB.

All'interno del broker, `ffprobe` legge un file locale privato; l'elenco
consentito fisso dei formati esclude i formati di playlist e manifest. Per i
contenitori consentiti della famiglia MOV, i riferimenti esterni ai dati MOV
rimangono disabilitati per impostazione predefinita e il comando fisso non ne
abilita l'uso. Sia `ffprobe` sia `ffmpeg` usano l'elenco consentito dei protocolli
limitato a `file`, un solo thread, array di argomenti fissi, nessuna shell ed
eseguibili risolti da `PATH`. Gli stream delle immagini di copertina allegate non
sono considerati candidati riproducibili. Tutti gli stream riproducibili devono
rispettare i limiti e uno stream predefinito esplicito viene preferito prima del
fallback deterministico all'indice più basso. I video sono limitati a 600
secondi, 8.192 pixel per dimensione e 33.554.432 pixel sorgente. FFmpeg campiona
da 1 a 16 fotogrammi JPEG nei punti medi, ridimensiona il lato lungo a un massimo
di 1.024 pixel senza ingrandire gli input più piccoli e non riceve mai un URL. Il
campionamento è `uniform` per impostazione predefinita. I criteri opzionali
`scene_aware` e il criterio sperimentale `segment_aware` eseguono un ulteriore
passaggio FFmpeg fisso sullo stream locale già convalidato, selezionano timestamp
di scena `showinfo` limitati e, in caso di errore del rilevatore, timeout, output
non valido o insieme di candidati vuoto, eseguono deterministicamente il fallback
agli stessi punti medi uniformi. La modalità basata sui segmenti assegna i
campioni dei punti medi proporzionalmente agli intervalli di scena convalidati;
le evidenze basate sui segmenti e il comportamento di fallback sono descritti
dettagliatamente di seguito. Il limite rigido di 16 fotogrammi viene applicato
dopo la selezione con ogni criterio. Quando una richiesta basata sulle scene
dispone di un budget di un solo fotogramma, utilizza il punto medio uniforme del
video completo attivo o della finestra di interesse e riporta
`policyEffective: uniform`: un singolo fotogramma di scena selezionato non può
preservare entrambe le estremità temporali. Un chiamante può facoltativamente
fornire una finestra di interesse finita (`start`/`end` in secondi); i limiti
vengono vincolati alla durata del contenuto multimediale, le finestre invertite o
non finite vengono rifiutate e tutti i criteri di campionamento vengono applicati
solo all'interno dell'intervallo normalizzato. La finestra risultante è inclusa
nei metadati di campionamento e nel prefisso non attendibile della descrizione,
in modo che i modelli a valle possano distinguere un estratto mirato dalla
timeline completa.

La focalizzazione semantica delle didascalie è un'impostazione distinta ed
esplicita. La modalità di analisi predefinita `full` mantiene il prompt esistente
per i fotogrammi e non inoltra mai il testo della richiesta al modello delle
didascalie. In modalità `focused`, il bridge legge esclusivamente il più recente
`text`/`input_text` non vuoto creato dall'utente dallo stesso contenitore Chat o
Responses, lo normalizza in NFC, compatta i caratteri di controllo e gli spazi
bianchi e lo limita a 500 punti di codice Unicode. Un risultato vuoto determina
il fallback al prompt `full` esatto. Un suggerimento utilizzabile viene
serializzato come JSON in un blocco dedicato al contesto utente non attendibile e
può soltanto assegnare priorità ai dettagli osservabili; non può ignorare
l'avviso separato che vieta di seguire le istruzioni visibili o udibili nel
contenuto multimediale. La focalizzazione testuale non deduce mai `start`/`end`
né modifica il campionatore temporale.

#### Evidenze strutturali dei segmenti FU-07

`segment_aware` utilizza un unico passaggio limitato di pre-analisi sul flusso video locale già convalidato. La catena di filtri fissa ridimensiona innanzitutto il video a una larghezza massima di 320 pixel, rileva i cambi di scena e gli intervalli congelati, quindi campiona 1 fotogramma al secondo per misurare sfocatura, luminanza media e informazioni spaziali/temporali. Il passaggio è limitato a 600 campioni strutturali, un thread FFmpeg/filtro, le stesse liste di elementi consentiti per il solo protocollo `file` e per i contenitori, un limite di 1 MiB per l'output del processo e un massimo di 30 secondi entro il meccanismo condiviso di interruzione/scadenza del broker. Non accetta mai dalla richiesta un comando, un filtro, un percorso o un URL.

I valori strutturali costituiscono evidenze di campionamento deterministiche, non una comprensione semantica del video. Non deducono soggetti, azioni, sottotitoli, parlato o intenzioni dell'utente. I limiti delle scene e dei congelamenti formano i segmenti; la copertura dei congelamenti, la sfocatura, l'esposizione, il dettaglio spaziale e la variazione temporale influiscono soltanto sul modo in cui viene allocato il budget esistente di 1–16 fotogrammi. Un segmento completamente congelato è limitato a un solo fotogramma, mentre i segmenti non congelati competono per il budget rimanente. Quando i limiti sono più numerosi dei fotogrammi, viene mantenuta una copertura uniforme della sequenza temporale, in modo che rapidi stacchi iniziali non possano nascondere un lungo segmento finale. I limiti di scena entro la risoluzione di analisi di 1 secondo da un limite di congelamento vengono accorpati.

Filtri mancanti, evidenze non valide/vuote, un errore del rilevatore o il timeout della pre-analisi limitata attivano il fallback permissivo all'esatta politica uniforme dei punti intermedi. L'interruzione da parte del chiamante o la scadenza del broker non attivano il fallback permissivo: terminano il sottoprocesso in corso, impediscono la successiva estrazione dei fotogrammi e la struttura temporanea privata viene rimossa in `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genera fixture FFmpeg reali e deterministiche per valutare il risparmio di chiamate per le didascalie dopo la deduplicazione, l'allocazione del budget in presenza di movimento intenso, le evidenze relative a sfocatura/esposizione/SI-TI, gli stacchi rapidi con una lunga coda e i falsi positivi delle dissolvenze graduali. Registra il tempo di esecuzione della pre-analisi e, dove `/usr/bin/time` è disponibile, la CPU del processo figlio e il picco RSS. I suoi controlli di qualità sono esclusivamente oracoli strutturali. La qualità del modello reale per le didascalie rimane `HOLD` perché questo harness non dispone di un endpoint autorizzato né di un valutatore bloccato. Anche i risparmi monetari rimangono `HOLD`, a meno che `--caption-cost-per-call-usd` non fornisca una stima esplicita e positiva del costo per chiamata; lo script non inventa mai nessuno dei due risultati.

Ogni fotogramma è limitato a 4 MiB, l'insieme di tutti i fotogrammi grezzi a 23 MiB e la risposta serializzata del broker a 32 MiB. Una directory temporanea privata viene rimossa in `finally`. OmniRoute non include FFmpeg e non accetta un percorso personalizzato dell'eseguibile. Prima di generare le didascalie, il bridge applica un passaggio conservativo di deduplicazione visiva: ogni JPEG viene ridotto a un buffer in scala di grigi 16×16 e confrontato soltanto con l'ultimo fotogramma conservato. Per un budget di didascalie richiesto superiore a un fotogramma, l'estrazione fornisce un insieme limitato di candidati, pari al massimo al doppio di tale budget e comunque mai superiore a 16 fotogrammi. Il limite richiesto viene applicato soltanto dopo la deduplicazione, preservando il primo e l'ultimo candidato selezionato durante la riduzione finale quando il budget è almeno due. La politica con versione
`grayscale-16x16-mean-cells-v2` utilizza il maggiore tra la differenza media di luminanza e il rapporto delle celle della miniatura la cui differenza normalizzata è almeno 0.05. La soglia di duplicazione è la costante 0.04, scelta per garantire prevedibilità anziché essere esposta come impostazione di runtime. Questo segnale secondario ad alto contrasto preserva i piccoli movimenti e le modifiche al testo visibile che un confronto basato soltanto sulla media può nascondere. Gli errori del comparatore o del decoder attivano il fallback permissivo e mantengono la copertura. I metadati di output distinguono i candidati estratti, i fotogrammi utilizzati correttamente e i duplicati visivi eliminati.

Una parte video contrassegnata esplicitamente può richiedere un provino a contatto con timestamp. Il bridge crea una griglia JPEG composta da un massimo di 4 colonne e 16 fotogrammi. Ogni cella da 512 pixel imprime il timestamp della sorgente in una banda inferiore ad alto contrasto, mentre gli stessi timestamp rimangono nei metadati testuali per l'associazione e l'audit a valle. Il JPEG completo rimane limitato a 32 MiB. Se `sharp` non riesce a decodificare o comporre la griglia, il bridge effettua il fallback ai singoli fotogrammi JPEG; un'interruzione da parte del client continua a propagarsi attraverso l'operazione sul provino.

Le evidenze per la promozione sono intenzionalmente separate dal microbenchmark sintetico di composizione. `scripts/perf/video-bridge-contact-sheet-eval.ts` definisce un harness A/B con versione dello schema per modelli di visione reali compatibili con OpenAI. Misura i token dichiarati dal provider, la latenza end-to-end (inclusa la composizione del provino), il numero di chiamate al modello e la conservazione dei fatti definiti dal manifest. Le risposte grezze del modello non vengono scritte nel report; vengono conservati soltanto i digest SHA-256 e gli ID dei fatti corrispondenti. L'harness non effettua alcuna chiamata di rete o a modelli a pagamento, a meno che non venga passato `--execute-real` e siano configurati `--model`, `OMNIROUTE_BASE_URL` e `OMNIROUTE_API_KEY`. Senza tale esecuzione reale esplicita, il verdetto leggibile dalla macchina rimane `HOLD`; le sole misurazioni sintetiche del payload/numero di chiamate non costituiscono evidenze per la promozione.

I chiamanti possono allegare un array facoltativo `transcript.cues` a una parte video supportata quando dispongono già di testo allineato. Ogni cue deve contenere `text`, un intervallo finito `start`/`end` compreso nella durata rilevata e un valore `source` incluso nella lista consentita (`client`, `embedded` o `audio-bridge`); il valore predefinito di `confidence` è `1` e deve rimanere compreso tra `0` e `1`. I cue esattamente duplicati vengono accorpati. OmniRoute non avvia mai una trascrizione a partire da questi metadati: i cue convalidati vengono copiati nel risultato descritto insieme a origine, confidenza e intervallo e vengono presentati come osservazioni non attendibili accanto alle didascalie dei fotogrammi. Il testo non valido, fuori intervallo o privo di provenienza viene rifiutato anziché essere integrato nel flusso delle didascalie. Il campo `source` è attualmente dichiarato dal chiamante e non verificato dal server: OmniRoute impone che il valore sia una delle tre stringhe consentite, ma non conferma ancora crittograficamente che un'etichetta `embedded` o `audio-bridge` provenga effettivamente da un'estrazione di proprietà del server. Considerare `source` come un'indicazione non attendibile finché tale verifica non sarà implementata; non basare su di esso decisioni di autorizzazione.

Un chiamante avanzato può fornire una traccia `audioTranscript` già autorizzata
per lo stesso video. Il punto di fusione esegue le osservazioni visive e audio
con un'unica scadenza e un unico segnale di interruzione, le ordina su una
sequenza temporale comune, accorpa i duplicati esatti e restituisce un risultato
parziale quando solo una delle due parti riesce. Un `audioTranscript` non valido
viene degradato a tale risultato parziale: la descrizione visiva viene mantenuta
e il ramo audio registra un codice di errore sanitizzato, anziché causare il
fallimento dell'intero video. La disponibilità di ogni ramo, il flag di
parzialità e i codici di errore sanitizzati vengono mantenuti nel risultato
descritto, nei metadati dei guardrail (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), nei metadati della cache dei risultati e nei
contatori di fusione del bridge. Il percorso predefinito di Video Bridge non
richiama la conversione da voce a testo né scarica una seconda copia del
contenuto multimediale; senza tale traccia esplicita, rimane esclusivamente
video.

**Conservazione delle trascrizioni (#12150 P1).** Questa regola si applica
automaticamente ogni volta che Video Bridge (a sua volta facoltativo) esegue il
rendering di un segmento di trascrizione: non esiste un flag di conservazione
separato. Quando una richiesta esegue il rendering di un qualsiasi segmento di
trascrizione (un `transcript` dichiarato dal chiamante o un `audioTranscript`
fuso), il guardrail lo contrassegna come `videoBridgeObserved` e produce una
copia oscurata della descrizione del video, ossia un rendering identico in cui
il corpo in testo libero di ogni segmento viene sostituito con
`[redacted-video-transcript]`, creato sostituendo il campo strutturato del
segmento prima dell'assemblaggio della stringa (mai analizzando il testo
appiattito, affinché nessun contenuto del segmento, malevolo o ordinario,
compresi i corpi contenenti `]` come `[inaudible]`/`[music]`, possa sopravvivere).
Il corpo della richiesta nel registro delle chiamate persistente sostituisce
ogni parte di testo derivata dal video con tale copia oscurata, abbinandola in
base all'uguaglianza del contenuto; l'ancoraggio `fullText` viene riletto dal
payload completato del guardrail precedente alla chiamata, pertanto
l'abbinamento continua a riuscire dopo che i guardrail successivi della catena
(i mascheratori di dati personali e credenziali, con priorità 10/95) hanno
riscritto direttamente il testo della descrizione e dopo che l'iniezione di
prompt di sistema, handoff e memoria ha rimodellato l'array dei messaggi. Il
corpo inviato a monte al modello rimane invariato. Inoltre, una richiesta
osservata non popola alcuna Memory durevole (viene ignorata sia l'estrazione
derivata dalla richiesta sia quella derivata dalla risposta), perciò la risposta
del modello non può ripetere il testo della trascrizione in Memory.

**Campi video non elaborati (#12430).** Quando il bridge è abilitato e il supporto video nativo è sconosciuto o assente, anche i campi `transcript`/`audioTranscript` definiti attivano `videoBridgeObserved`, persino dopo un errore della descrizione o il raggiungimento di un limite `maxVideos`. `null` e le stringhe vuote vengono conteggiati; i campi assenti e i metadati non video no. Le copie conservate oscurano questi campi oppure omettono la richiesta, mentre le cache e Memory vengono escluse. Il payload del provider rimane invariato.

Le ulteriori copie conservate utilizzano lo stesso segnale di richiesta
osservata. Lo snapshot non elaborato della richiesta del client precedente al
guardrail, la richiesta in attesa in memoria e il registro delle richieste
rifiutate anticipatamente sostituiscono strutturalmente i campi di trascrizione
nelle parti video; i prompt sotto forma di stringa sintetizzati dalle fasi della
pipeline e dall'handoff del contesto vengono oscurati nel punto di destinazione
del corpo della richiesta persistente. Il marcatore persistente
`video_content_removed` fa sì che la continuazione `previous_response_id` fallisca
in modo sicuro, anziché ricostruire testo scartato intenzionalmente. Se una
richiesta osservata perde la relativa copia oscurata per parte prima della
registrazione oppure anche una sola di più copie oscurate del video non
corrisponde dopo le successive modifiche della richiesta, il corpo della
richiesta conservato viene omesso del tutto, anziché conservare una trascrizione
oscurata solo parzialmente.

Per una richiesta osservata, la risposta di un modello potrebbe citare qualsiasi
porzione della trascrizione senza un confine strutturato del segmento. Il suo
`responseBody` nel registro delle chiamate persistente viene pertanto sostituito
da un marcatore di omissione; l'artefatto dettagliato della pipeline (che può
includere corpi upstream/client e blocchi del flusso) non viene conservato. Le
cache semantiche, di idempotenza e di riproduzione del ragionamento ignorano
letture e scritture per tale richiesta. La richiesta al provider e la risposta
visibile al client rimangono invariate. I byte iniziali di keepalive vengono
rimossi dal buffer temporaneo quando l'artefatto dettagliato viene omesso.
L'avviso EventStream di Kiro relativo a dati non validi segnala soltanto il
numero di byte del payload, mai il suo contenuto o l'errore non elaborato del
parser JSON.
Ciò non implica che sia stata eseguita una verifica di ogni diagnostica non
correlata di provider/plugin; l'analisi più ampia delle destinazioni di
conservazione è monitorata in #11658.

Il ciclo di vita interno di `/api/modality-bridge/video/drilldown` costituisce
un substrato di cache separato, autenticato tramite loopback/token. Ogni
operazione richiede inoltre un ID principale opaco canonico. Prima di abilitare
un chiamante di produzione, questo deve derivare tale ID dal tenant autenticato
e non deve mai inoltrare un valore scelto dal client. Le chiavi della cache
associano tale principale agli ID canonici di sessione e riferimento video,
memorizzano soltanto le relative chiavi derivate tramite SHA-256 e circoscrivono
sia le letture sia l'eliminazione allo stesso principale. La cache memorizza al
massimo 16 fotogrammi JPEG derivati per voce, li fa scadere dopo dieci minuti e
supporta letture limitate tramite `start`/`end` o l'eliminazione esplicita della
sessione.

Ogni principale è limitato a 16 voci e 64 MiB di dati JPEG canonici. Tali limiti
sono indipendenti dal tetto globale di 64 voci/256 MiB: la pressione sulla quota
del principale causa l'espulsione soltanto delle voci usate meno di recente di
quel principale, prima di prendere in considerazione l'espulsione LRU globale.
Le voci scadute vengono rimosse sia dalla contabilizzazione per principale sia
da quella globale durante l'attività della cache, mentre l'annullamento e gli
errori di convalida non eseguono il commit di una sostituzione parziale.

La cache rifiuta Base64 non canonico, padding eccessivo, contenuti multimediali non JPEG, JPEG non validi o
troncati e JPEG che producono un avviso durante una decodifica completa dell'immagine con `sharp`
soggetta a limiti. Ricodifica ogni immagine accettata come JPEG canonico, ricava larghezza e altezza
dai byte decodificati invece di considerare attendibili i campi forniti dal chiamante e scarta eventuali
byte poliglotti finali anziché conservarli. Solo il buffer compresso canonico soggetto a limiti
viene conteggiato in entrambe le quote. Il limite JSON sul canale di trasmissione include l'overhead Base64 per il limite massimo
di 32 MiB dell'input decodificato. Ogni
derivazione archiviata registra il formato e la risoluzione JPEG convalidati, la policy di campionamento,
la versione della derivazione, l'ora di creazione, l'hash del contenuto calcolato dal server e il riferimento
al genitore sottoposto ad hashing, oltre all'hash del contenuto del genitore fornito dal chiamante attendibile. L'annullamento viene verificato
tra le fasi asincrone di decodifica e hashing, prima del commit atomico nella cache.

Questa tranche non collega ancora un producer di produzione alla route e non
fornisce la selezione di varianti a più risoluzioni. Il percorso trasparente delle richieste
di Video Bridge non comporta quindi lavoro aggiuntivo, mentre la derivazione dei principal associati
ai tenant e l'intero ciclo di vita multirisoluzione FU-08 rimangono esplicitamente attività successive,
anziché essere documentati come comportamento completo.

I frame vengono sottotitolati in sequenza con il modello Video configurato. Un override
Video vuoto eredita l'impostazione Vision; se entrambi sono vuoti, l'auto-router di Vision
seleziona il modello effettivo con funzionalità di visione. Le didascalie generate correttamente
sostituiscono la parte originale con un prefisso stabile `[Video description:` che
contrassegna anche il testo come osservazione non attendibile derivata da contenuti multimediali e indica ai modelli
a valle di non seguire le istruzioni presenti nei contenuti multimediali. Le chiavi della cache delle didascalie dei frame
includono i byte JPEG, il prompt, il timestamp e il modello effettivo; vengono memorizzate nella cache solo
le didascalie generate correttamente. Le voci della cache conservano il modello producer effettivamente riuscito,
incluso un modello di fallback; il bridge segnala `mixed` quando frame diversi
sono stati prodotti da modelli diversi. Un hit della cache riutilizza l'identità del producer
anziché rietichettarla come il piano di routing richiesto. La cache dei risultati dell'intero video
usa come chiave ogni input che modifica l'output: prompt, modello effettivo,
policy di campionamento, numero di frame, modalità di analisi semantica, fingerprint SHA-256
dell'indicazione di focus normalizzata, finestra di focus, `transcript`,
`audioTranscript` e flag del provino a contatto; pertanto, la modifica di una qualsiasi di queste
dimensioni causa un cache miss e mai il riutilizzo di dati obsoleti. Anche la versione,
la soglia e il numero limitato di frame candidati della policy di deduplicazione visiva sono espliciti nella
chiave e nei metadati della cache dei risultati; una modifica della policy non può quindi riutilizzare una
descrizione obsoleta dell'intero video. I metadati v4 della cache dei risultati conservano la modalità e il
fingerprint, mai l'attività utente non elaborata. I metadati del guardrail riportano sia la modalità di
analisi richiesta sia quella effettiva; una modalità `focused` richiesta senza
testo utente utilizzabile viene segnalata come effettivamente `full`.

Il guardrail estrae ogni parte video supportata, ma non descrive più di
`modalityBridgeVideoMaxVideos`. Per un target per cui sia dimostrato
`supportsVideo === false`, i video non elaborati e quelli oltre il limite diventano marcatori di testo sicuri
espliciti, in modo che nessun video non elaborato rimanga presente. Quando la funzionalità è sconosciuta, tali parti
rimangono inalterate. I target con `supportsVideo === true` ignorano il bridge.
Il segnale di interruzione della richiesta client si propaga attraverso download, coda del broker,
sottoprocessi e chiamate per la generazione delle didascalie; le interruzioni fermano l'elaborazione tra un video e l'altro e non consentono mai
un fail-open verso i contenuti multimediali non elaborati.

Le impostazioni di runtime sono archiviate nel DB e convalidate tramite Zod:

| Chiave                              | Valore predefinito | Intervallo / comportamento                                                                                       |
| ----------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`            | Runtime opzionale, con attivazione esplicita                                                                     |
| `modalityBridgeVideoAnalysisMode`   | `"full"`           | `full` conserva le didascalie generiche; `focused` usa il contesto limitato e non attendibile dell'ultimo utente |
| `modalityBridgeVideoModel`          | `""`               | Eredita il modello Vision Bridge                                                                                 |
| `modalityBridgeVideoFrameCount`     | `8`                | 1–16                                                                                                             |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`        | `uniform`, `scene_aware` o `segment_aware` proporzionale; in caso di errore del rilevatore viene usato `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`                | 1–4                                                                                                              |
| `modalityBridgeVideoTimeout`        | `120000`           | 1000–120000 ms                                                                                                   |

I valori legacy persistenti del timeout Video superiori a 120 secondi vengono limitati alla
scadenza del broker; le nuove scritture delle impostazioni oltre tale limite vengono rifiutate.
`GET /api/modality-bridge/video/runtime` richiede la località loopback attendibile
e contrassegnata prima dell'autenticazione o del probing del runtime, quindi richiede l'autenticazione
di gestione. Restituisce solo `available`, le versioni sanificate di FFmpeg/ffprobe e un motivo fisso
quando il runtime non è disponibile. L'endpoint di estrazione interno non è
un'API pubblica di upload: la saturazione della coda restituisce `503` più `Retry-After`, la disconnessione
del chiamante restituisce `499` e la scadenza fissa del broker restituisce `504`. Le risposte convertite aggiungono
`video->text;model=<visionModel>;parts=<videos>` all'header centrale
`x-omniroute-modality-bridge` senza rimuovere i segmenti Vision o Audio.

### Mascheratore PII (`piiMasker.ts`)

Viene eseguito in **entrambe** le fasi.

- **`preCall`** clona il payload, attraversa `system`, `messages`, `input` e
  `prompt` (inclusi gli elementi costituiti da semplici stringhe) e applica `processPII()` (da
  `@/shared/utils/inputSanitizer`) ai campi stringa `content`/`text`. Quando
  `PII_REDACTION_ENABLED=true`, le PII rilevate vengono oscurate nel
  payload in uscita. Questo comportamento è indipendente da `INPUT_SANITIZER_MODE` (che controlla
  soltanto la policy relativa alla prompt injection). Quando l'oscuramento è disattivato, la chiamata registra i conteggi
  dei rilevamenti senza riscrivere il contenuto.
- **`postCall`** clona in profondità la risposta, esegue `sanitizePIIResponse()` insieme
  al mascheratore per il formato della Responses API (`maskResponsesOutput` — copre
  `output_text` e `output[].content[].text`). Se si verifica un qualsiasi oscuramento, la
  risposta modificata sostituisce quella originale.

Il guardrail non blocca mai; si limita ad aggiungere annotazioni (`meta.detections`,
`meta.redacted`) o a riscrivere.

### Prompt injection (`promptInjection.ts`)

Rileva strutture avversarie nei contenuti forniti dall'utente e applica la
policy configurata. Il comportamento è determinato dalle variabili di ambiente e dalle opzioni del
costruttore:

| Impostazione     | Variabile di ambiente                                                                                  | Valore predefinito | Effetto                                                                                                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Abilitazione     | `INPUT_SANITIZER_ENABLED`                                                                              | `true`             | Quando è `false`, il guardrail termina immediatamente.                                                                                                                                                                    |
| Modalità         | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`             | Policy di injection: `block`, `warn` o `log`. (`redact` è accettato per retrocompatibilità, ma **non** rimuove il testo di injection; la riscrittura delle PII della richiesta è controllata da `PII_REDACTION_ENABLED`.) |
| Soglia di blocco | opzione `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`             | Gravità minima necessaria per il blocco. Con l'impostazione predefinita, la gravità media comporta solo l'osservazione.                                                                                                   |

**Precedenza della modalità** (`getMode`): `options.mode` del chiamante →
override del feature flag nel **DB** per `INJECTION_GUARD_MODE` (Dashboard → Impostazioni →
Feature flag) → variabile di ambiente `INJECTION_GUARD_MODE` → variabile di ambiente `INPUT_SANITIZER_MODE` →
`warn`. Un override dalla dashboard ha quindi la precedenza sulle variabili di ambiente, consentendo all'interfaccia
Feature Flags di controllare il guard in esecuzione in tempo reale (senza riavvio). La lettura dal DB è fail-safe:
se si verifica un errore, il guard ripiega sul comportamento basato sulle variabili di ambiente e, quando non è
impostato alcun override, il comportamento è identico alla risoluzione basata esclusivamente sulle variabili di ambiente.

Fonti di rilevamento:

1. `sanitizeRequest()` da `@/shared/utils/inputSanitizer` (insieme condiviso di rilevatori
   utilizzato in altre parti della pipeline).
2. `DEFAULT_GUARD_PATTERNS` integrati (attualmente `system_override_inline` e
   `markdown_system_block`, entrambi con gravità `high`).
3. `customPatterns` facoltativi passati tramite le opzioni del costruttore (stringhe, espressioni regolari
   o record `{ name, pattern, severity }`).

Quando `mode === "block"` **e** almeno un rilevamento raggiunge la soglia di
gravità, `preCall` restituisce `{ block: true, message: "Request rejected:
suspicious content detected" }`. Nelle modalità `warn`/`log`, il guardrail registra l'evento ma
consente la chiamata. Viene inoltre esportato l'helper condiviso `evaluatePromptInjection()`
per i chiamanti che devono valutare i prompt senza passare attraverso il registro.

**Limite di scansione (v3.8.20):** il rilevatore esamina soltanto i **primi 16 KB** del
testo aggregato del prompt — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) in
`src/shared/utils/inputSanitizer.ts`. Sia `detectInjection()` sia
`evaluatePromptInjection()` eseguono `slice(0, MAX_INJECTION_SCAN_BYTES)` prima di avviare
il ciclo sui pattern. Le direttive di injection si trovano vicino all'inizio di un input, quindi questo
limita l'uso di CPU/GC da parte delle espressioni regolari sui payload di diverse centinaia di KB senza indebolire il rilevamento (cfr.
#3932, #4041).

### Mascheratore di credenziali (`credentialMasker.ts`)

Viene eseguito in **entrambe** le fasi, per ultimo nella catena predefinita (priorità `95`). Oscura
i pattern noti di chiavi API/token segreti dal payload in uscita (contenuto dei messaggi,
argomenti delle chiamate agli strumenti, risultati degli strumenti) **e** dalla risposta del provider, affinché una
credenziale incollata in un prompt (o restituita da un risultato di uno strumento) non venga divulgata
al provider upstream o al client.

- **Solo opt-in**, secondo la stessa convenzione dell'oscuramento delle PII (in prossimità della Regola rigida n. 20):
  disabilitato a meno che `settings.credentialRedactionEnabled === true` **oppure**
  `CREDENTIAL_REDACTION_ENABLED=true`. Quando è disattivato, il guardrail non esegue alcuna operazione:
  non blocca e non riscrive mai.
- `redactCredentials()` attraversa l'intero albero del payload/della risposta (`walkValue()`,
  in modo sicuro rispetto alla prototype pollution e ai cicli tramite `WeakSet`) e sostituisce le corrispondenze con
  un segnaposto `[REDACTED:<type>]`, clonando solo i rami effettivamente
  modificati.
- `CREDENTIAL_PATTERNS` copre le chiavi dei provider LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), i token VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), le chiavi di pagamento (Stripe, Square), le chiavi
  cloud (chiave di accesso AWS, Twilio, SendGrid, Mailgun), le chiavi private/i JWT,
  le stringhe di connessione contenenti credenziali (`mongodb://user:pass@...`, ecc.) e
  un pattern generico per i valori degli header `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Le chiavi con formato da header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) vengono oscurate strutturalmente (solo il valore, preservando il prefisso dello schema come
  `Bearer `/`Basic `), anziché tramite l'espressione regolare generica per il testo.
- Il guardrail non blocca mai; riscrive soltanto (`modifiedPayload` /
  `modifiedResponse`) e aggiunge annotazioni (`meta.credentialsRedacted`, `meta.count`).

Protezione dalle regressioni: `tests/unit/credential-masker-guardrail.test.ts`.

## Contratto Base (`base.ts`)

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
  block?: boolean; // true interrompe la catena
  message?: string; // mostrato quando bloccato
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // restituito da preCall per riscrivere la richiesta
  modifiedResponse?: TValue; // restituito da postCall per riscrivere la risposta
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

Un guardrail segnala "nessun cambiamento" restituendo `void`, `{}`, o
`{ block: false }`. Restituire un `modifiedPayload`/`modifiedResponse` sostituisce
il valore che scorre attraverso la catena per i guardrail a valle.
`signal?: AbortSignal` porta il ciclo di vita del chiamante nei guardrail. Un aborto di richiesta è l'eccezione deliberata di fail-open: i bridge multimediali interrompono il lavoro e la pulizia senza ripristinare i media grezzi a un target noto per non supportarli.

## Registro (`registry.ts`)

Il singleton `guardrailRegistry` espone:

- `register(guardrail)` — aggiunge (o sostituisce per nome normalizzato) un guardrail e
  riordina per `priority` crescente.
- `clear()` / `list()` — helper amministrativi.
- `runPreCallHooks(payload, context)` — itera i guardrail attivi, passa il
  payload attraverso `modifiedPayload` e si ferma al primo `block: true`.
- `runPostCallHooks(response, context)` — stesso flusso sul lato della risposta.
- `resetGuardrailsForTests({ registerDefaults })` — cancella lo stato e opzionalmente
  registra nuovamente i valori predefiniti per un isolamento pulito dei test.

Entrambi i runner restituiscono `{ blocked, payload|response, results, guardrail?, message? }`
dove `results` è un array di record `GuardrailExecutionResult` che includono
i campi `blocked`, `skipped`, `modified`, `error` e `meta` per ogni guardrail,
utili per la tracciatura.

### Disabilitazione dei Guardrail per Richiesta

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` aggrega un
elenco deduplicato di nomi di guardrail che dovrebbero essere saltati per la richiesta
corrente. Fonti (tutte opzionali, tutte unite):

- `apiKeyInfo.disabledGuardrails`
- Corpo della richiesta `disabledGuardrails` (livello superiore)
- Corpo della richiesta `metadata.disabledGuardrails`
- Header `x-omniroute-disabled-guardrails` (o il legacy
  `x-disabled-guardrails`)

I valori possono essere array di stringhe o una stringa separata da virgole; i nomi sono
normalizzati in kebab-case minuscolo (`pii_masker` → `pii-masker`). Il risultato
viene passato tramite `context.disabledGuardrails` al registro, che salta
i guardrail corrispondenti (`skipped: true` in `results`).

## Ordine di Esecuzione

Per ogni richiesta che transita attraverso `src/sse/handlers/chat.ts` e
`open-sse/handlers/chatCore.ts`:

1.  `resolveDisabledGuardrails(...)` costruisce la lista di esclusione dalla chiave API, dal corpo e dagli header.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` esegue i guardrail in ordine di priorità crescente:
    - I guardrail disabilitati vengono registrati come `skipped`.
    - Il `preCall` di ogni guardrail può riscrivere il payload tramite `modifiedPayload`.
    - Il primo `block: true` interrompe la catena e l'handler restituisce una risposta di rifiuto del guardrail.
3.  Il payload (potenzialmente riscritto) fluisce nel routing combinato e nel dispatch a monte.
4.  Dopo che la risposta è stata assemblata, `guardrailRegistry.runPostCallHooks(...)` esegue la stessa catena sulla risposta. `block: true` qui scarta la risposta a monte.

I guardrail che generano un errore vengono registrati con `error: <message>` e loggati tramite
`logger.warn`, ma la catena continua — fail-open per design.

## Configurazione

Variabili d'ambiente lette dai guardrail integrati:

| Variabile                             | Usata da                  | Effetto                                                                                                                              |
| :------------------------------------ | :------------------------ | :----------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Impostare `false` per disabilitare completamente il rilevamento.                                                                     |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Politica di iniezione: `warn`, `block`, o `log`. Il valore legacy `redact` non riscrive il testo di iniezione.                       |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Modalità per il guardrail di iniezione; anche un flag di funzionalità del DB che **sovrascrive** le variabili d'ambiente (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Gravità minima che `MODE=block` rifiuta: `high` (predefinito), `medium`, o `low`.                                                    |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Alias legacy per `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                  |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Quando `true`, le PII della richiesta vengono redatte (indipendentemente dalla modalità di iniezione).                               |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Controlla il comportamento del masker lato risposta.                                                                                 |

I guardrail di Modality Bridge leggono la configurazione di runtime dal
repository di impostazioni basato su DB (`getSettings()`), non dalle variabili d'ambiente. Le chiavi primarie di Vision sono
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, e
`modalityBridgeCacheMaxEntries`. Le chiavi legacy
`visionBridge*` sono accettate solo come fallback di lettura a ciclo singolo documentato; le scritture della dashboard utilizzano le chiavi primarie. I valori predefiniti e il risolutore di fallback si trovano in `src/shared/constants/modalityBridgeDefaults.ts`, con le costanti legacy mantenute in `src/shared/constants/visionBridgeDefaults.ts`.

Audio utilizza `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, e `modalityBridgeAudioMaxClips`, più le impostazioni condivise
`modalityBridgeCache*`. Audio non ha un fallback per le chiavi legacy perché queste
chiavi sono state introdotte con lo schema Modality Bridge.

Video utilizza `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, e
`modalityBridgeVideoTimeout`, più le impostazioni condivise `modalityBridgeCache*`.
È disabilitato per impostazione predefinita perché FFmpeg/ffprobe sono dipendenze operative opzionali e la didascalia dei fotogrammi aggiunge latenza e costi del modello.

## Guardrail Personalizzati

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

Passi:

1. Creare `src/lib/guardrails/myGuardrail.ts` estendendo `BaseGuardrail`.
2. Implementare `preCall` e/o `postCall`.
3. Registrare al momento dell'importazione (push da `registerDefaultGuardrails`) o
   chiamare `guardrailRegistry.register(...)` a runtime — il registro sostituisce
   qualsiasi guardrail precedente con lo stesso nome normalizzato.
4. Aggiungere test sotto `tests/unit/` (esempi esistenti:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Test

Usare `resetGuardrailsForTests()` tra i test per partire da uno stato noto.
Passare `{ registerDefaults: false }` per iniziare con un registro vuoto e
registrare solo i guardrail sotto test. Vision Bridge accetta l'iniezione di dipendenza
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge espone i
punti di giunzione equivalenti per impostazioni, capacità, selezione del modello STT, controlli delle credenziali e trascrizione. I test possono quindi esercitare entrambi i flussi senza accesso al DB o alla rete.

## Vedi Anche

- `src/lib/guardrails/` — implementazione
- `src/shared/utils/inputSanitizer.ts` — rilevatore condiviso che alimenta
  l'iniezione di prompt e il mascheramento PII
- `src/shared/constants/visionBridgeDefaults.ts` — impostazioni predefinite di Vision Bridge e
  lista di modelli forzati
- `src/shared/constants/modalityBridgeDefaults.ts` — impostazioni predefinite di runtime condivise Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — livello ortogonale (interruttore di circuito, cooldown)
- `docs/reference/ENVIRONMENT.md` — riferimento completo alle variabili d'ambiente

## Copertura delle rotte di protezione dall'iniezione e red-team (Fase 8 · Blocco D)

La protezione dall'iniezione (`createInjectionGuard` / `withInjectionGuard`) copre tutte le rotte
che accettano prompt utente. Rispetta `INJECTION_GUARD_MODE` (predefinito `warn` = solo log;
`block` = restituisce HTTP 400 `SECURITY_001`).

| Tipo              | Rotte                                                                                                                                                | Modalità predefinita |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| Testo (esistente) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                 |
| Generativo        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                 |
| Dati              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                 |

L'estrazione del testo (`extractMessageContents`) copre `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (notturno, `nightly-llm-security.yml`):** promptfoo verifica che ogni rotta blocchi
il corpus OWASP-LLM in `INJECTION_GUARD_MODE=block`; garak esegue probe (salta senza segreto).
`moderations` è incluso per coerenza — gli operatori in modalità blocco possono esentarlo tramite
`resolveDisabledGuardrails`.

Il workflow notturno (`.github/workflows/nightly-llm-security.yml`, cron + dispatch manuale)
ha due job:

- **`promptfoo-guard` (bloccante)** — esegue `promptfoo eval -c promptfooconfig.yaml`
  con `INJECTION_GUARD_MODE=block`. Ogni caso avversario (es. "ignora tutte
  le istruzioni precedenti...", jailbreak stile DAN) asserisce che la risposta contenga
  `error.code === "SECURITY_001"`, cioè che la protezione abbia effettivamente rifiutato la richiesta.
- **`garak` (consultivo)** — esegue garak `--probes promptinject,dan,leakreplay`
  contro un'istanza locale di OmniRoute (`http://localhost:20128/v1`). Vincolato a un
  segreto del provider (`PROMPTFOO_PROVIDER_KEY`); salta elegantemente ed è suffissato
  `|| true`, quindi riporta senza far fallire la CI.

La copertura dell'helper di protezione (`createInjectionGuard` / `withInjectionGuard`)
si estende a ogni rotta `/v1` che trasporta prompt; il testo del prompt viene estratto da
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` tramite
`extractMessageContents()` in `src/shared/utils/inputSanitizer.ts`.
