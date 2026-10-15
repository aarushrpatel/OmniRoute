# Guardrails (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Źródło prawdy:** `src/lib/guardrails/`
> **Ostatnia aktualizacja:** 2026-08-29 — v3.8.51 (Pochodzenie transkrypcji Video Bridge jest deklarowane przez dzwoniącego,
> jeszcze nie zweryfikowane przez serwer — wyjaśniono zgodnie z #11661)

Guardrails wymuszają bezpieczeństwo, politykę i transformacje treści na granicy
między OmniRoute a dostawcami upstream. Każdy guardrail może kontrolować (i
opcjonalnie odrzucać, przekształcać lub dodawać adnotacje) ładunki żądań (`preCall`)
oraz odpowiedzi upstream (`postCall`).

System działa w trybie **fail-open**: jeśli guardrail zgłosi błąd podczas wykonywania,
rejestr zapisuje błąd i kontynuuje pracę z następnym guardrailem, zamiast przerywać
żądanie. Blokowanie jest jawną decyzją (`block: true`), nigdy przypadkiem.

## Wbudowane mechanizmy ochronne

Rejestr automatycznie ładuje podczas importu sześć mechanizmów ochronnych w kolejności priorytetów
(zobacz `registry.ts` → `registerDefaultGuardrails()`):

| Priorytet | Nazwa               | Etap(y)        | Plik                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Niższe numery priorytetów są wykonywane **najpierw**.

### Most wizyjny (`visionBridge.ts`) — most modalności PR-1

Przechwytuje żądania zawierające obrazy, kierowane do **modeli bez obsługi obrazu**, i albo
przekierowuje całe żądanie do modelu obsługującego obraz, albo zastępuje części
obrazowe opisami tekstowymi wygenerowanymi przez konfigurowalny model wizyjny przed
wywołaniem usługi nadrzędnej. Dzięki temu dostawcy obsługujący wyłącznie tekst mogą w sposób przezroczysty przetwarzać
ładunki multimodalne.

Przepływ:

1. Pomiń, jeśli model docelowy obsługuje już obraz (chyba że znajduje się na
   liście modeli z wymuszonym mostem `isVisionBridgeForcedModel`).
2. Wyodrębnij części obrazowe za pomocą `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), która deleguje zadanie do **ujednoliconego detektora
   multimediów** `detectMediaParts()` w `open-sse/utils/mediaParts.ts` — jedynego
   źródła prawdy współdzielonego z filtrem zgodności combo.
   Wyodrębnianie jest ograniczone listą dozwolonych części najwyższego poziomu o kształtach,
   które `replaceImageParts` może ponownie wstawić (kontrakt wyodrębnianie↔zastępowanie): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` oraz Responses API `input_image`. Zagnieżdżone trafienia i
   kształty zawierające wyłącznie wskaźniki są materiałem dla filtra combo i nigdy nie są wyodrębniane.
   Pomiń, jeśli niczego nie znaleziono.
3. Ustal konfigurację środowiska wykonawczego za pomocą `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nowe klucze ustawień `modalityBridge*`
   mają pierwszeństwo; starsze klucze `visionBridge*` pozostają **mechanizmem zapasowym na jeden cykl**
   (okno wycofania zmian). Pomiń przed jakimkolwiek przeszukiwaniem multimediów, gdy
   most jest wyłączony.
4. Selektor trybu (`modalityBridgeVisionMode`, zobacz tabelę poniżej) decyduje
   o przekierowaniu lub opisaniu. Przekierowanie zwraca `modifiedPayload` z zamienionym
   wyłącznie `model` oraz metadane `{ rerouted, fromModel, toModel, imagesKept }`.
5. Ścieżka opisywania: ogranicz liczbę obrazów do `maxImages`, utwórz prompt uwzględniający zadanie,
   sprawdź pamięć podręczną opisów, wywołaj model wizyjny **równolegle**
   (`Promise.allSettled`) i wstaw w ich miejsce części tekstowe
   `[Image N]: <description>`. Nieudane opisanie zwraca `null`, a oryginalna część obrazowa zostaje
   **zachowana** (#4012) — z wyjątkiem ścieżki opisywania combo, gdy wszystkie
   próby opisania się nie powiodły; wtedy potwierdzona usługa nadrzędna bez obsługi obrazu otrzymuje
   symbol zastępczy `(unavailable — no vision-capable provider connected)` (#8430).
6. Zwróć `modifiedPayload` wraz z metadanymi (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selektor trybu (`modalityBridgeVisionMode`)

| Tryb       | Domyślny | Zachowanie                                                                                                                                                                                                                                                                                                                           |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔        | Starsza heurystyka, bez zmian (#6640/#7204): modele inne niż combo/`auto/` są przekierowywane do najlepszego modelu wizyjnego, chyba że oryginalny model ma już użyteczne poświadczenia (wtedy następuje opisanie); cele combo są zawsze opisywane.                                                                                  |
| `describe` |          | Zawsze opisuj — blok przekierowania jest całkowicie pomijany; zawsze odpowiada model wybrany przez użytkownika.                                                                                                                                                                                                                      |
| `reroute`  |          | Wymuś przekierowanie: zabezpieczenie zachowujące model z poświadczeniami jest pomijane. Zabezpieczenie poświadczeń **celu** przekierowania nadal obowiązuje — gdy nie istnieje żaden użyteczny cel wizyjny, żądanie przechodzi do opisywania, aby surowe obrazy nigdy nie trafiły do backendu obsługującego wyłącznie tekst (#8430). |

Wymuszone tryby kończą przetwarzanie **zanim** zostanie uruchomiona heurystyka automatyczna; zachowanie `auto`
jest identyczne bajt w bajt z mechanizmem ochronnym sprzed PR-1.

#### Zakres klucza API (`visionBridgeKeyScope.ts`)

Gdy klucz API wywołującego ogranicza `allowedConnections`, pule limitów
(`allowedQuotas`) lub modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most wybiera wyłącznie
modele do przekierowywania i opisywania, których klucz może używać, w połączeniach, których klucz może
używać. Wywołanie opisywania zawsze przechodzi następnie przez pętlę zwrotną OmniRoute z
nagłówkiem `x-omniroute-self-loop-key-id`, dzięki czemu odbierające żądanie czatu
ponownie egzekwuje zasady tego klucza dotyczące połączeń i modeli. `enforceApiKeyPolicy()`
uwzględnia ten nagłówek tylko w połączeniu z tokenem bearer pętli zwrotnej, więc może on jedynie
zawężać dostęp, a identyfikator, którego nie można rozpoznać, zostaje odrzucony.

Jeśli żaden model wizyjny nie jest dozwolony dla klucza, ścieżka opisywania wycofuje się,
a żądanie przechodzi bez zmian — jest to takie samo zachowanie fail-open jak przy wyłączonym
mechanizmie ochronnym (metadane `{ skipped: true, reason: "no_permitted_vision_model" }`).
Żądania bez klucza oraz klucze bez tych ograniczeń zachowują się dokładnie tak samo
jak wcześniej.

#### Prompt opisu uwzględniający zadanie (`modalityBridgeVisionTaskAware`)

Domyślnie **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) dołącza
tekst **ostatniej wiadomości użytkownika** (skrócony do 500 znaków) do bazowego
promptu opisowego, ukierunkowując opis na to, o co faktycznie zapytał użytkownik
(wzorzec codex-vision-proxy), i prosząc model wizyjnym o transkrypcję widocznego
tekstu. Gdy flaga jest wyłączona — lub nie ma tekstu użytkownika — bazowy prompt
jest używany bez zmian.

Własne żądanie zgodne z OpenAI, wykonywane przez pętlę zwrotną opisu
(`callVisionModelSingle()` w `visionBridgeHelpers.ts`), zawsze ustawia
`image_url.detail: "high"` — bezwarunkowo, dla każdego wywołującego i dostawcy,
niezależnie od jakiegokolwiek sygnału klienta. Próbkowanie z niskim poziomem
szczegółowości pogarsza dokładność OCR właśnie w przypadku zadania transkrypcji
tekstu, którego dotyczy ten prompt, dlatego samo wywołanie opisu zawsze żąda
wysokiego poziomu szczegółowości, niezależnie od poziomu użytego w pierwotnym
żądaniu przychodzącym. Wpływa to wyłącznie na treść wewnętrznego żądania opisu;
nie zmienia sposobu, w jaki OmniRoute przekazuje własne ustawienie
`image_url.detail` wywołującego w żądaniu głównym — ta wartość domyślna jest
stosowana osobno i tylko dla wykrytych klientów OpenCode, w
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Gałąź
pętli zwrotnej opisu korzystająca z formatu transmisyjnego Anthropic nie ma pola
`detail` i żadna z tych wartości domyślnych na nią nie wpływa.

#### Limit wyjścia opisu (`modalityBridgeVisionMaxChars`)

| Klucz                          | Wartość domyślna | Zakres            |
| ------------------------------ | ---------------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`              | `0` lub 100–50000 |

`0` (wartość domyślna) oznacza **brak limitu** — opis zwrócony przez
`callVisionModel()` jest przekazywany bez modyfikacji, co zachowuje
dotychczasowe działanie. Każda wartość z zakresu 100–50000 powoduje skrócenie
opisu i dodanie sufiksu `…`, zanim zostanie on wstawiony z powrotem jako
`[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` w
`src/lib/guardrails/visionBridge.ts`). Zwiększ tę wartość w przypadku zadań OCR
wymagających dużej szczegółowości, gdy model docelowy potrzebuje pełnej
transkrypcji; zmniejsz ją, aby ograniczyć zużycie tokenów przez zbyt rozwlekłe
modele wizyjne. Pole na pulpicie znajduje się w panelu Advanced na karcie Vision
(`modality-bridge-max-chars` w `ModalityBridgeVisionTab.tsx`) i podnosi każdą
wartość od 1 do 99 do minimalnego poziomu 100, pozostawiając jawne `0` bez zmian
— `0` jest samodzielną prawidłową wartością Zod
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), a nie jedynie
wartością domyślną oznaczającą „nie ustawiono”.

#### Pamięć podręczna opisów (`modalityBridge/bridgeCache.ts`)

Ogólnoprocesowa pamięć podręczna LRU + TTL przechowywana w pamięci dla wyników
opisów. Klucz = `sha256(imageRef + composedPrompt + configuredBridgeModel)` z
ramkowaniem prefiksem długości (bez kolizji granic pól). Składnikiem klucza
odpowiadającym modelowi jest **skonfigurowany** model mostu, a nie model, który
faktycznie odpowiedział — `callVisionModel` może wewnętrznie użyć modelu
zapasowego, a tworzenie klucza osobno dla każdej próby spowodowałoby
fragmentację pamięci podręcznej. Nieudane opisy nigdy nie są zapisywane w
pamięci podręcznej. Ustawienia:

| Klucz                           | Wartość domyślna | Zakres  |
| ------------------------------- | ---------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`           | —       |
| `modalityBridgeCacheTtlMinutes` | `60`             | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`            | 10–5000 |

#### Normalizacja zdalnych obrazów (opis w pętli zwrotnej/pobieranie base64)

Gdy most samodzielnie pobiera **zdalny** obraz — na potrzeby wewnętrznego
wywołania opisu Anthropic oraz konwersji do base64 dla formatu transmisyjnego
Claude (`ensureBase64ImagesForClaudeWire`), w obu przypadkach przez
`fetchRemoteImageAsDataUri()` w `visionBridgeHelpers.ts` — wynikowy identyfikator
URI danych jest przekazywany przez `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) przed osadzeniem w żądaniu do modelu
wizyjnego. Zbyt duże obrazy są skalowane w dół tak, aby **dłuższy bok miał
2048px** (zgodnie z limitem zmiany rozmiaru już stosowanym po stronie serwerów
OpenAI/Anthropic), co zmniejsza liczbę przesyłanych bajtów i opóźnienie bez
zmieniania tego, co widzi model wizyjny. Zmiana rozmiaru używa `sharp`,
ładowanego przez import dynamiczny: na platformie, na której nie uda się
załadować jego natywnego pliku binarnego, `normalizeDataUri()` **nigdy nie
zgłasza wyjątku** — zamiast tego przepuszcza oryginalne bajty bez zmian, dzięki
czemu ścieżka opisu/konwersji do base64 zawsze pozostaje sprawna. Bajty
niebędące obrazem (gdy pobieranie nie zwróciło obrazu możliwego do
zdekodowania) również są przepuszczane bez zmian. Ta normalizacja ogranicza się
do obrazów pobieranych przez most na potrzeby jego własnego wywołania
wewnętrznego — nigdy nie jest stosowana do nieprzetworzonego ładunku
przekazywanego przez wywołującego, zgodnie z zasadą modyfikacji wyłącznie po
wyrażeniu zgody (Twarda reguła nr 20).

#### Schemat ustawień + migracja

Nowe klucze `modalityBridge*` są walidowane przez Zod w
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, trzy klucze
`modalityBridgeCache*` oraz grupa `modalityBridgeAudio*` używana przez Audio
Bridge. Migracja `141_modality_bridge_settings.sql` kopiuje istniejące starsze
wartości `visionBridge*` do odpowiadających im nowych kluczy (idempotentnie,
nigdy nie nadpisując wartości `modalityBridge*` ustawionej przez operatora);
starsze klucze pozostają akceptowane jako mechanizm rezerwowy odczytu przez
jeden cykl wydawniczy.

#### Nagłówek przejrzystości + statystyki

Odpowiedzi przekształcone przez opis zawierają
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(tworzony przez `buildModalityBridgeHeader()` w
`modalityBridge/bridgeStats.ts`, ustawiany przez
`withModalityBridgeHeader()` w `src/sse/handlers/chatHelpers.ts`).
Przekierowane żądania **nie** otrzymują nagłówka — ładunek pozostał
niezmieniony, a zamiana modelu jest już widoczna w polu `model` treści
odpowiedzi.

`GET /api/modality-bridge/stats` (uwierzytelnianie administracyjne, ten sam poziom co
`GET /api/settings`) zwraca przechowywane w pamięci liczniki dla poszczególnych modalności:
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` dla `vision`, `audio` i
`video`. Wartość `averageLatencyMs` używa jako mianownika `latencySamples`,
a nie wszystkich prób; operacja bez pomiaru czasu nie tworzy sztucznej próbki
o zerowym czasie trwania. `bridged` pozostaje zgodnym wstecznie aliasem
udanych konwersji; nieudane próby nie zwiększają jego wartości.
Liczniki są zgodnie z założeniem resetowane po ponownym uruchomieniu procesu
(telemetria, nie rozliczenia).

#### Konfiguracja panelu

Dedykowana strona panelu znajduje się pod adresem
`/dashboard/settings/modality-bridge`. Jej dostępne przez URL karty `Vision`, `Audio`
i `Video` zachowują parametry zapytania podczas zmiany wartości `tab`.
Karta Vision udostępnia włączanie, tryb, wybór modelu (w tym automatyczny
model domyślny), tworzenie promptów zależne od zadania, zaawansowane limity czasu
oczekiwania, obrazu, długości opisu i pamięci podręcznej, liczniki środowiska
uruchomieniowego oraz zabezpieczone żądanie przykładowe. Karta Audio również jest
aktywna: udostępnia włączanie, selektor modeli wyłącznie STT z opcją Auto, limity
czasu oczekiwania i maksymalnej długości klipu, liczniki audio oraz test przykładowy
`input_audio`. Karta Video jest funkcjonalna: raportuje stan środowiska uruchomieniowego
FFmpeg/ffprobe — jeden z czterech jawnych stanów interfejsu (`unknown`, gdy
sondowanie jest w toku lub nie mogło zostać ukończone, `restricted` na hoście
panelu innym niż loopback, gdzie sondowanie jest pomijane po stronie klienta,
`unavailable` po przeprowadzeniu sondowania i potwierdzeniu braku albo `available`
wraz z wersjami FFmpeg/ffprobe) — utrwala limity włączania, modelu, klatek, wideo
i czasu oczekiwania, filtruje selektor modeli do modeli obsługujących obraz
oraz udostępnia liczniki wideo.

Dotychczasowa karta Vision Bridge w ustawieniach AI jest łączem zgodności do
nowej strony; nie zawiera już drugiej kopii formularza. Media Providers zawiera
również łącza z przepływów Image-to-Text i Speech-to-Text do odpowiednich kart
Modality Bridge bez usuwania istniejącego środowiska testowego Speech-to-Text.

**Obejście kontroli dopuszczenia dla pętli własnej:** gdy wywołanie opisu jest
kierowane przez własną pętlę `/v1` OmniRoute (niestandardowy model dostawcy),
podżądanie wysyła `x-omniroute-admission-bypass: internal` i jest uwierzytelniane
przy użyciu rozpoznanego poświadczenia pętli własnej — lokalnej wartości specjalnej
`sk_omniroute` w trybie lokalnym albo skonfigurowanego przez operatora klucza
środowiskowego `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), dzięki czemu
wdrożenia z `REQUIRE_API_KEY=true` nadal mogą wykonywać wywołanie opisu. Obejście
jest respektowane wyłącznie dla dokładnie tych poświadczeń, dlatego klienci
zewnętrzni nie mogą użyć tego nagłówka do pominięcia kontroli dopuszczenia.

Starsze wartości domyślne znajdują się w `src/shared/constants/visionBridgeDefaults.ts`;
nowe wartości domyślne trybu, obsługi zależnej od zadania i pamięci podręcznej
oraz mechanizm rozpoznawania ustawień znajdują się w
`src/shared/constants/modalityBridgeDefaults.ts`. Mechanizm zabezpieczający
udostępnia opcję konstruktora `deps`, dzięki czemu testy mogą wstrzykiwać
fałszywe implementacje `getSettings` i `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Przechwytuje żądania czatu zawierające audio, zanim dotrą one do celu, o którym
nie wiadomo, czy akceptuje dane wejściowe audio. Nigdy nie przekierowuje żądania
czatu: fragmenty audio są transkrybowane przez istniejący, zgodny z OpenAI punkt
końcowy multipart, a wybrany model czatu kontynuuje pracę z transkrypcjami
tekstowymi.

Przepływ:

1. Rozpoznaj `supportsAudio` za pomocą `getResolvedModelCapabilities()`. Jawne
   metadane rejestru dostawców mają pierwszeństwo, następnie statyczne metadane
   modelu, a potem zsynchronizowane `modalities_input`. Zadeklarowana lista danych
   wejściowych bez `audio` daje `false`; brak danych o możliwościach daje `null`.
   Zarówno `false`, jak i `null` aktywują zachowawczy most, natomiast `true` go
   pomija.
2. Rozpoznaj ustawienia `modalityBridgeAudio*` i wyodrębnij możliwe do zastąpienia
   fragmenty audio najwyższego poziomu ze wszystkich wiadomości za pomocą
   współdzielonego detektora `detectMediaParts()`. Obsługiwane formaty przesyłania
   to OpenAI `input_audio`, `audio_url` oraz `source.media_type: "audio/*"`.
   Zagnieżdżone audio jest wykrywane na potrzeby routingu, ale nie jest usuwane
   przez ścieżkę zastępowania. Zakres pracy jest ograniczony przez
   `modalityBridgeAudioMaxClips`; późniejsze fragmenty pozostają niezmienione.
3. Uwzględnij skonfigurowane `provider/model` albo pozwól, aby
   `selectAudioBridgeModel()` przeszła przez `AUDIO_TRANSCRIPTION_PROVIDERS`
   w stabilnej kolejności katalogowej i wybrała pierwszy model z użytecznym,
   aktywnym poświadczeniem dostawcy.
4. `callAudioTranscription()` konwertuje audio base64/data-URI na wieloczęściowy
   `file` albo pobiera zdalny `audio_url` przez mechanizm ochrony wychodzącego
   ruchu wyłącznie do zasobów publicznych, z przypięciem DNS i limitem 25 MB.
   Następnie wysyła plik i wybrany model metodą POST do lokalnej pętli własnej
   `/v1/audio/transcriptions`, uwierzytelnionej za pomocą
   `resolveSelfLoopBearer()`. Istniejąca trasa transkrypcji wykonuje standardowe
   wyszukiwanie poświadczeń, obsługę okresów oczekiwania i limitów szybkości
   oraz przekazanie do dostawcy.
5. Pomyślne wywołania zastępują swoje fragmenty tekstem
   `[Audio N]: <transcript>`. Wywołania są uruchamiane za pomocą
   `Promise.allSettled`: pojedyncze niepowodzenie zachowuje oryginalny fragment
   audio (kontrakt #4012). Jeśli wszystkie wywołania zakończą się niepowodzeniem,
   a dla celu potwierdzono `supportsAudio === false`, fragmenty przyjmują postać
   `[Audio N]: (niedostępne — nie połączono żadnego dostawcy STT)` (kontrakt
   #8430). W przypadku nieznanego celu (`null`) wynik, w którym wszystkie
   wywołania się nie powiodły, pozostaje niezmieniony. Potwierdzony cel wyłącznie
   tekstowy bez użytecznego poświadczenia STT otrzymuje ten sam jawny tekst
   zastępczy bez wykonywania wywołania sieciowego.

Pomyślne transkrypcje korzystają z pamięci podręcznej LRU/TTL Modality Bridge
współdzielonej w całym procesie. Klucz łączy odwołanie do audio, stabilną etykietę
operacji `audio-transcription` oraz wybrany model STT; niepowodzenia nigdy nie są
buforowane. Próby audio aktualizują współdzielone liczniki `bridged`, `cacheHits`,
`failures` i `lastUsedAt`. Przekształcone odpowiedzi zawierają
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; niezmienione
żądania nie otrzymują segmentu Audio Bridge.

Ustawienia środowiska uruchomieniowego są przechowywane w bazie danych i
walidowane za pomocą Zod:

| Klucz                         | Domyślnie | Zakres                              |
| ----------------------------- | --------- | ----------------------------------- |
| `modalityBridgeAudioEnabled`  | `true`    | —                                   |
| `modalityBridgeAudioModel`    | `""`      | Automatycznie lub identyfikator STT |
| `modalityBridgeAudioTimeout`  | `60000`   | 1000–300000                         |
| `modalityBridgeAudioMaxClips` | `3`       | 1–10                                |

Współdzielona pamięć podręczna pozostaje kontrolowana przez `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` oraz `modalityBridgeCacheMaxEntries`.

### Most wideo (`videoBridge.ts`, `videoBridgePipeline.ts`)

Przechwytuje części wideo najwyższego poziomu w `messages` interfejsu Chat Completions oraz
w `input` interfejsu Responses API, zanim zostanie wywołany docelowy model bez znanej natywnej obsługi wideo.
Obsługiwane formaty to `input_video`, `video_url`, `video_source`, adresy URL HTTPS
oraz identyfikatory URI danych `data:video/*;base64,...`. Zwykłe nazwy plików w tekście nie są traktowane
jako wideo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) odpowiada za przechodzenie przez żądanie,
sprawdzenie możliwości/zasad, agregację w ramach żądania oraz ładunek odpowiedzi.
Przetwarzanie poszczególnych plików wideo — pozyskiwanie, pamięć podręczna całego wyniku, opisywanie sekwencji
klatek (łączące dowolną transkrypcję audio zadeklarowaną przez wywołującego) oraz metryki/przerwanie/czyszczenie
dla poszczególnych prób — jest ukryte za `processVideoPart` w
`videoBridgePipeline.ts`, wywoływanym raz dla każdej części wideo w pętli `preCall`.
Ten moduł definiuje również jawne granice portów `VideoMediaBrokerPort`
(pozyskiwanie bajtów i wyodrębnianie próbkowanych klatek), `VideoAudioTranscriptionPort`
(łączenie transkrypcji audio zadeklarowanej przez wywołującego z próbkowanymi podpisami) oraz
`VideoDrilldownPort` (granica trwałego przechowywania szczegółowej analizy klatek; nie jest jeszcze połączona
z `processVideoPart` — obecnie wpisy szczegółowej analizy zapisuje wyłącznie osobna trasa
`/api/modality-bridge/video/drilldown`).

Publiczna ścieżka żądań `/v1` nigdy nie importuje ani nie wywołuje podprocesu. Zdalne
pliki wideo są pobierane z limitem 50 MiB; osadzone pliki wideo w formacie base64 mają
konserwatywny limit 36 MiB zdekodowanych danych na plik wideo, dzięki czemu otoczka
modelu/wiadomości/formatowania może pozostać w granicach publicznego limitu przyjmowania żądań JSON wynoszącego 50 MiB. Długość danych osadzonych
i szacowany rozmiar po zdekodowaniu są sprawdzane przed alokacją. Protokół HTTPS jest
wymagany dla początkowego zdalnego adresu URL oraz każdego przekierowania, z użyciem istniejącego
mechanizmu ochrony publicznego ruchu wychodzącego z przypinaniem DNS. Bajty następnie przekraczają dokładnie określoną wewnętrzną
granicę brokera `POST /api/modality-bridge/video/extract`. Ta trasa jest jednocześnie
`LOCAL_ONLY` i `SPAWN_CAPABLE`, akceptuje wyłącznie uwierzytelnione dla danego procesu
żądania z zaufanego interfejsu pętli zwrotnej i nigdy nie akceptuje adresu URL, ścieżki systemu plików, pliku wykonywalnego
ani listy argumentów. Potok ograniczania rozmiaru treści API oraz przyrostowy czytnik treści
procedury obsługi niezależnie wymuszają limit wejścia brokera wynoszący 50 MiB. Jego ograniczona kolejka uruchamia
jedno wyodrębnianie naraz, dopuszcza cztery oczekujące zadania i ogranicza oczekujące dane wejściowe do
100 MiB.

Wewnątrz brokera `ffprobe` odczytuje prywatny plik lokalny; stała lista
dozwolonych formatów wyklucza formaty list odtwarzania i manifestów. W przypadku dozwolonych kontenerów
z rodziny MOV zewnętrzne odwołania do danych MOV pozostają domyślnie wyłączone, a
stałe polecenie ich nie włącza. Zarówno `ffprobe`, jak i `ffmpeg` używają
listy dozwolonych protokołów ograniczonej wyłącznie do `file`, jednego wątku, stałych tablic argumentów, bez powłoki,
a pliki wykonywalne są rozpoznawane z `PATH`. Strumienie okładek w postaci dołączonych obrazów nie są
kandydatami do odtwarzania. Wszystkie odtwarzalne strumienie muszą spełniać limity, a
jawnie ustawiony strumień domyślny ma pierwszeństwo przed deterministycznym wyborem strumienia o najniższym indeksie.
Filmy są ograniczone do 600 sekund, 8 192 pikseli na wymiar oraz
33 554 432 pikseli źródłowych. FFmpeg próbkuje 1–16 klatek JPEG w punktach środkowych, skaluje
dłuższą krawędź w dół do maksymalnie 1 024 pikseli bez powiększania mniejszych danych wejściowych i
nigdy nie otrzymuje adresu URL. Domyślna metoda próbkowania to `uniform`. Opcjonalne zasady
`scene_aware` oraz eksperymentalna `segment_aware` wykonują jedno dodatkowe
stałe przejście FFmpeg po uprzednio zweryfikowanym strumieniu lokalnym, wybierają ograniczony zestaw
znaczników czasu scen `showinfo` i deterministycznie powracają do tych samych
jednolitych punktów środkowych w przypadku błędu detektora, przekroczenia limitu czasu, nieprawidłowych danych wyjściowych lub pustego
zbioru kandydatów. Tryb uwzględniający segmenty przydziela próbki punktów środkowych proporcjonalnie do
zweryfikowanych przedziałów scen; dowody dotyczące segmentów i zachowanie awaryjne
opisano szczegółowo poniżej. Twardy limit 16 klatek jest
stosowany po wyborze w każdej zasadzie. Gdy żądanie uwzględniające sceny ma budżet tylko
jednej klatki, używa jednolitego punktu środkowego aktywnego okna całego filmu lub okna skupienia
i raportuje `policyEffective: uniform`: pojedyncza wybrana klatka sceny
nie może zachować obu krańców osi czasu. Wywołujący może opcjonalnie podać
skończone okno skupienia (`start`/`end` w sekundach); granice są ograniczane do czasu trwania multimediów,
odwrócone lub nieskończone okna są odrzucane, a wszystkie zasady
próbkowania są wykonywane wyłącznie w znormalizowanym przedziale. Wynikowe
okno jest uwzględniane w metadanych próbkowania oraz w niezaufanym prefiksie opisu,
dzięki czemu modele przetwarzające mogą odróżnić wybrany fragment od pełnej
osi czasu.

Semantyczne ukierunkowanie podpisów jest osobnym, jawnym ustawieniem. Domyślny tryb analizy `full`
zachowuje dotychczasowy monit dotyczący klatek i nigdy nie przekazuje tekstu żądania
do modelu generującego podpisy. W trybie `focused` most odczytuje tylko najnowszy
niepusty element `text`/`input_text` utworzony przez użytkownika z tego samego kontenera Chat lub Responses,
normalizuje go do NFC, scala znaki sterujące i białe znaki
oraz ogranicza do 500 punktów kodowych Unicode. Pusty wynik powoduje powrót do
dokładnego monitu trybu `full`. Użyteczna wskazówka jest serializowana jako JSON w dedykowanym
bloku niezaufanego kontekstu użytkownika i może jedynie nadawać priorytet obserwowalnym szczegółom; nie
może zastąpić osobnego ostrzeżenia przed wykonywaniem instrukcji widocznych
lub słyszalnych w multimediach. Ukierunkowanie tekstowe nigdy nie wyznacza `start`/`end` ani nie zmienia
próbnika czasowego.

#### FU-07 strukturalne dowody dotyczące segmentów

`segment_aware` wykonuje jeden ograniczony przebieg analizy wstępnej na wcześniej zweryfikowanym lokalnym strumieniu wideo. Stały łańcuch filtrów najpierw skaluje obraz do szerokości najwyżej 320 pikseli, wykrywa zmiany scen i okresy zamrożenia, a następnie próbkuje 1 klatkę na sekundę w celu określenia rozmycia, średniej luminancji oraz informacji przestrzennej/czasowej. Przebieg jest ograniczony do 600 próbek strukturalnych, jednego wątku FFmpeg/filtra, tych samych list dozwolonych protokołów ograniczonych do `file` i kontenerów, limitu 1 MiB danych wyjściowych procesu oraz najwyżej 30 sekund w ramach współdzielonego mechanizmu przerwania/terminu brokera. Nigdy nie przyjmuje z żądania polecenia, filtra, ścieżki ani adresu URL.

Wartości strukturalne są deterministycznymi danymi próbkowania, a nie semantycznym rozumieniem wideo. Nie służą do wnioskowania o obiektach, działaniach, napisach, mowie ani intencjach użytkownika. Granice scen i okresów zamrożenia tworzą segmenty; pokrycie zamrożeniem, rozmycie, ekspozycja, szczegółowość przestrzenna i zmiana czasowa wpływają wyłącznie na sposób przydzielania istniejącego budżetu 1–16 klatek. Segment całkowicie zamrożony jest ograniczony do jednej klatki, natomiast segmenty niezamrożone konkurują o pozostały budżet. Gdy liczba granic przekracza liczbę klatek, zachowywane jest równomierne pokrycie osi czasu, dzięki czemu szybkie cięcia na początku nie mogą ukryć długiego segmentu końcowego. Granice scen mieszczące się w 1-sekundowej rozdzielczości analizy względem granicy zamrożenia są scalane.

Brakujące filtry, nieprawidłowe lub puste dane, błąd detektora albo przekroczenie limitu czasu ograniczonej analizy wstępnej powodują bezpieczny powrót do dokładnej zasady równomiernego wyboru punktów środkowych. Przerwanie przez wywołującego lub upłynięcie terminu brokera nie powoduje takiego powrotu: kończy trwający podproces, uniemożliwia późniejsze wyodrębnianie klatek, a prywatne drzewo tymczasowe jest usuwane w `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuje deterministyczne, rzeczywiste materiały testowe FFmpeg do pomiaru oszczędności wywołań generowania podpisów po deduplikacji, przydzielania budżetu przy intensywnym ruchu, danych dotyczących rozmycia/ekspozycji/SI-TI, szybkich cięć z długą końcówką oraz fałszywych trafień przy stopniowym przenikaniu. Rejestruje rzeczywisty czas analizy wstępnej oraz, gdy dostępne jest `/usr/bin/time`, czas procesora procesu potomnego i szczytowe RSS. Kontrole jakości wykorzystują wyłącznie strukturalne wyrocznie. Jakość rzeczywistego modelu generującego podpisy pozostaje oznaczona jako `HOLD`, ponieważ ten mechanizm testowy nie ma autoryzowanego punktu końcowego ani zamrożonego systemu oceniającego. Oszczędności finansowe również pozostają oznaczone jako `HOLD`, chyba że `--caption-cost-per-call-usd` podaje jawne dodatnie oszacowanie kosztu pojedynczego wywołania; skrypt nigdy nie fabrykuje żadnego z tych wyników.

Każda klatka jest ograniczona do 4 MiB, wszystkie nieprzetworzone klatki łącznie do 23 MiB, a serializowana odpowiedź brokera do 32 MiB. Prywatny katalog tymczasowy jest usuwany w `finally`. OmniRoute nie zawiera FFmpeg i nie akceptuje niestandardowej ścieżki do pliku wykonywalnego. Przed generowaniem podpisów most stosuje konserwatywny przebieg deduplikacji wizualnej: każdy obraz JPEG jest redukowany do bufora w skali szarości 16×16 i porównywany wyłącznie z ostatnią zachowaną klatką. W przypadku żądanego budżetu podpisów większego niż jedna klatka proces wyodrębniania dostarcza ograniczoną pulę kandydatów, liczącą najwyżej dwukrotność tego budżetu i nigdy więcej niż 16 klatek. Żądany limit jest stosowany dopiero po deduplikacji, przy czym podczas końcowego ograniczania zachowywani są pierwszy i ostatni wybrany kandydat, jeśli budżet wynosi co najmniej dwa. Wersjonowana zasada `grayscale-16x16-mean-cells-v2` wykorzystuje większą z dwóch wartości: średnią różnicę luminancji albo odsetek komórek miniatury, których znormalizowana różnica wynosi co najmniej 0.05. Próg duplikatu jest stałą 0.04, wybraną ze względu na przewidywalność, a nie udostępnioną jako ustawienie czasu wykonywania. Ten dodatkowy sygnał o wysokim kontraście pozwala zachować niewielki ruch i zmiany widocznego tekstu, które porównanie oparte wyłącznie na średniej mogłoby ukryć. Błędy komparatora lub dekodera powodują bezpieczne zachowanie pokrycia. Metadane wyjściowe oddzielają wyodrębnionych kandydatów, pomyślnie użyte klatki oraz odrzucone duplikaty wizualne.

Jawnie oznaczona część wideo może zażądać arkusza kontaktowego ze znacznikami czasu. Most tworzy siatkę JPEG zawierającą najwyżej 4 kolumny i 16 klatek. Każda komórka o rozmiarze 512 pikseli umieszcza znacznik czasu źródła na kontrastowym dolnym pasku, a te same znaczniki czasu pozostają w metadanych tekstowych na potrzeby dalszego powiązania i audytu. Kompletny obraz JPEG pozostaje ograniczony do 32 MiB. Jeśli `sharp` nie może zdekodować lub złożyć siatki, most powraca do pojedynczych klatek JPEG; przerwanie przez klienta nadal jest propagowane przez operację tworzenia arkusza.

Dane służące zatwierdzeniu wdrożenia są celowo oddzielone od syntetycznego mik testu wydajności składania. `scripts/perf/video-bridge-contact-sheet-eval.ts` definiuje wersjonowany schematem mechanizm testów A/B dla rzeczywistych modeli wizyjnych zgodnych z OpenAI. Mierzy tokeny zgłaszane przez dostawcę, całkowite opóźnienie (w tym składanie arkusza), liczbę wywołań modelu oraz zachowanie faktów zdefiniowanych w manifeście. Nieprzetworzone odpowiedzi modelu nie są zapisywane w raporcie; zachowywane są jedynie skróty SHA-256 i identyfikatory dopasowanych faktów. Mechanizm testowy nie wykonuje żadnego wywołania sieciowego ani płatnego wywołania modelu, chyba że przekazano `--execute-real` oraz skonfigurowano `--model`, `OMNIROUTE_BASE_URL` i `OMNIROUTE_API_KEY`. Bez takiego jawnego rzeczywistego przebiegu jego werdykt w formacie przeznaczonym do odczytu maszynowego pozostaje oznaczony jako `HOLD`; same syntetyczne pomiary rozmiaru danych i liczby wywołań nie stanowią danych uzasadniających zatwierdzenie wdrożenia.

Wywołujący mogą dołączyć opcjonalną tablicę `transcript.cues` do obsługiwanej części wideo, jeśli dysponują już zsynchronizowanym tekstem. Każda wskazówka musi zawierać `text`, skończony przedział `start`/`end` mieszczący się w zmierzonej długości oraz `source` z listy dozwolonych wartości (`client`, `embedded` lub `audio-bridge`); `confidence` domyślnie wynosi `1` i musi pozostawać w przedziale od `0` do `1`. Dokładnie zduplikowane wskazówki są scalane. OmniRoute nigdy nie rozpoczyna transkrypcji na podstawie tych metadanych: zweryfikowane wskazówki są kopiowane do opisanego wyniku wraz ze źródłem, poziomem ufności i przedziałem czasowym oraz renderowane jako niezaufane obserwacje obok podpisów klatek. Nieprawidłowy tekst, tekst spoza zakresu lub bez informacji o pochodzeniu jest odrzucany zamiast dołączany do strumienia podpisów. Pole `source` jest obecnie deklarowane przez wywołującego, a nie weryfikowane przez serwer: OmniRoute wymusza, aby wartość była jednym z trzech dozwolonych ciągów znaków, ale nie potwierdza jeszcze kryptograficznie, że etykieta `embedded` lub `audio-bridge` rzeczywiście pochodzi z procesu wyodrębniania kontrolowanego przez serwer. Dopóki taka weryfikacja nie zostanie wdrożona, należy traktować `source` jako niezaufaną wskazówkę; nie należy opierać na nim decyzji dotyczących autoryzacji.

Zaawansowany kod wywołujący może przekazać już autoryzowaną ścieżkę `audioTranscript`
dla tego samego wideo. Warstwa scalająca przetwarza obserwacje wizualne i dźwiękowe
z zachowaniem jednego terminu i sygnału przerwania, porządkuje je na wspólnej osi czasu,
scala identyczne duplikaty i zwraca wynik częściowy, gdy powiedzie się tylko jedna
gałąź. Nieprawidłowy `audioTranscript` powoduje zwrócenie takiego częściowego wyniku —
opis wizualny zostaje zachowany, a gałąź audio rejestruje oczyszczony kod błędu —
zamiast powodować niepowodzenie przetwarzania całego wideo. Dostępność poszczególnych
gałęzi, flaga częściowego wyniku oraz oczyszczone kody błędów są zachowywane w opisanym
wyniku, metadanych mechanizmu zabezpieczającego (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), metadanych pamięci podręcznej wyników oraz licznikach
scalania mostu. Domyślna ścieżka Video Bridge nie uruchamia zamiany mowy na tekst
ani nie pobiera drugiej kopii multimediów; bez jawnie podanej ścieżki pozostaje
wyłącznie ścieżką wideo.

**Przechowywanie transkrypcji (#12150 P1).** Ma to zastosowanie automatycznie za każdym
razem, gdy Video Bridge (który sam wymaga włączenia) renderuje segment transkrypcji —
nie istnieje osobna flaga przechowywania. Gdy żądanie renderuje dowolny segment
transkrypcji (`transcript` zadeklarowany przez kod wywołujący lub scalony
`audioTranscript`), mechanizm zabezpieczający oznacza je jako `videoBridgeObserved`
i tworzy zanonimizowany odpowiednik opisu wideo — identycznie wyrenderowaną wersję,
w której swobodny tekst treści każdego segmentu zostaje zastąpiony przez
`[redacted-video-transcript]`. Wersja ta jest tworzona przez zastąpienie pola
ustrukturyzowanego segmentu przed złożeniem ciągu znaków (nigdy przez analizowanie
spłaszczonego tekstu, dzięki czemu żadna treść segmentu — złośliwa ani zwykła,
w tym treść zawierająca `]`, taka jak `[inaudible]`/`[music]` — nie może zostać
zachowana). Utrwalona treść żądania w dzienniku wywołań zastępuje każdą część tekstową
pochodzącą z wideo jej zanonimizowanym odpowiednikiem, dopasowanym na podstawie
równości treści; kotwica `fullText` jest ponownie odczytywana z ukończonego ładunku
mechanizmu zabezpieczającego sprzed wywołania, dzięki czemu dopasowanie nadal się
powodzi po tym, jak kolejne mechanizmy zabezpieczające w łańcuchu (maskujące dane
osobowe i poświadczenia, o priorytetach 10/95) zmodyfikują tekst opisu w miejscu,
oraz po zmianie struktury tablicy komunikatów w wyniku wstrzyknięcia monitu
systemowego, przekazania kontekstu lub Pamięci. Treść wysyłana do modelu pozostaje
niezmieniona. Zaobserwowane żądanie nie wypełnia również trwałej Pamięci (pomijane
jest wyodrębnianie zarówno z żądania, jak i z odpowiedzi), dlatego własna odpowiedź
modelu nie może skopiować tekstu transkrypcji do Pamięci.

**Nieprzetworzone pola wideo (#12430).** Gdy most jest włączony, a natywna obsługa wideo jest nieznana lub niedostępna, zdefiniowane pola `transcript`/`audioTranscript` również aktywują `videoBridgeObserved`, nawet po niepowodzeniu tworzenia opisu lub osiągnięciu limitu `maxVideos`. Wartości `null` i puste ciągi znaków są uwzględniane; nieobecne pola i metadane niezwiązane z wideo — nie. W przechowywanych kopiach pola te są anonimizowane albo żądanie jest pomijane, a pamięci podręczne i Pamięć są omijane. Ładunek dostawcy pozostaje niezmieniony.

Dodatkowe przechowywane kopie korzystają z tego samego sygnału zaobserwowanego żądania.
Nieprzetworzony obraz żądania klienta sprzed zastosowania mechanizmu zabezpieczającego,
oczekujące żądanie w pamięci oraz dziennik wcześnie odrzuconego żądania strukturalnie
zastępują pola transkrypcji w częściach wideo; monity tekstowe syntetyzowane przez
etapy potoku i mechanizm przekazywania kontekstu są anonimizowane w punkcie zapisu
utrwalonej treści żądania. Utrwalony znacznik `video_content_removed` sprawia, że
kontynuacja przy użyciu `previous_response_id` zostaje bezpiecznie odrzucona zamiast
odtwarzać tekst, który został celowo usunięty. Jeśli przed zapisaniem w dzienniku
zaobserwowane żądanie utraci zanonimizowany odpowiednik którejś części albo choć jeden
z kilku odpowiedników wideo nie zostanie dopasowany po późniejszych modyfikacjach
żądania, przechowywana treść żądania zostaje całkowicie pominięta, zamiast zachować
częściowo zanonimizowaną transkrypcję.

W przypadku zaobserwowanego żądania odpowiedź modelu może cytować dowolny fragment
transkrypcji bez ustrukturyzowanej granicy segmentu. Dlatego jej utrwalone pole
`responseBody` w dzienniku wywołań zostaje zastąpione znacznikiem pominięcia;
szczegółowy artefakt potoku (który może zawierać treści przesyłane do dostawcy
i klienta oraz fragmenty strumienia) nie jest przechowywany. Pamięci podręczne
semantyczne, idempotencji i odtwarzania rozumowania pomijają odczyty i zapisy dla
tego żądania. Żądanie dostawcy i odpowiedź widoczna dla klienta pozostają niezmienione.
Wczesne bajty podtrzymujące połączenie są usuwane z bufora tymczasowego, gdy
szczegółowy artefakt zostaje pominięty. Ostrzeżenie Kiro o nieprawidłowym EventStream
podaje jedynie liczbę bajtów ładunku, nigdy jego zawartość ani nieprzetworzony błąd
parsera JSON.
Nie oznacza to, że każdy niezwiązany z tym komunikat diagnostyczny dostawcy lub
wtyczki został poddany audytowi; szerszy przegląd miejsc utrwalania danych jest
śledzony w #11658.

Wewnętrzny cykl życia `/api/modality-bridge/video/drilldown` stanowi osobny,
uwierzytelniany przez interfejs loopback/token magazyn pamięci podręcznej. Każda
operacja wymaga również kanonicznego, nieprzezroczystego identyfikatora podmiotu.
Przed włączeniem kodu wywołującego w środowisku produkcyjnym musi on wyprowadzać ten
identyfikator z uwierzytelnionego dzierżawcy i nigdy nie może przekazywać wartości
wybranej przez klienta. Klucze pamięci podręcznej wiążą ten podmiot z kanonicznymi
identyfikatorami sesji i odwołania do wideo, przechowują jedynie klucze pochodne
SHA-256 oraz ograniczają zarówno odczyty, jak i usuwanie do tego samego podmiotu.
Pamięć podręczna przechowuje maksymalnie 16 pochodnych klatek JPEG na wpis, usuwa je
po dziesięciu minutach i obsługuje ograniczone odczyty `start`/`end` lub jawne
usunięcie sesji.

Każdy podmiot jest ograniczony do 16 wpisów i 64 MiB kanonicznych danych JPEG. Limity
te są niezależne od globalnego pułapu 64 wpisów/256 MiB: przekroczenie limitu podmiotu
powoduje usunięcie wyłącznie najdawniej używanych wpisów tego podmiotu, zanim zostanie
rozważone globalne usuwanie zgodnie z LRU. Wygasłe wpisy są usuwane zarówno
z rozliczenia podmiotu, jak i z rozliczenia globalnego podczas aktywności pamięci
podręcznej, natomiast anulowanie i niepowodzenie walidacji nie zatwierdzają częściowego
zastąpienia.

Pamięć podręczna odrzuca niekanoniczny Base64, nadmiarowe dopełnienie, multimedia inne niż JPEG, nieprawidłowe lub
ucięte pliki JPEG oraz pliki JPEG, które generują ostrzeżenie podczas ograniczonego dekodowania całego obrazu przez `sharp`.
Każdy zaakceptowany obraz jest ponownie kodowany jako kanoniczny JPEG, a jego szerokość i wysokość są
ustalane na podstawie zdekodowanych bajtów zamiast pól przekazanych przez wywołującego. Wszelkie końcowe
bajty poliglotyczne są odrzucane, a nie zachowywane. Do obu limitów wliczany jest wyłącznie ograniczony,
kanoniczny, skompresowany bufor. Limit przesyłania JSON uwzględnia narzut Base64 dla limitu
zdekodowanych danych wejściowych wynoszącego 32 MiB. Każda
zapisana derywacja rejestruje zweryfikowany format i rozdzielczość JPEG, zasady próbkowania,
wersję derywacji, czas utworzenia, obliczony przez serwer skrót zawartości oraz zaszyfrowane
odwołanie do elementu nadrzędnego wraz ze skrótem zawartości elementu nadrzędnego pochodzącym
od zaufanego wywołującego. Anulowanie jest sprawdzane między asynchronicznymi fazami
dekodowania i obliczania skrótu, przed atomowym zapisem w pamięci podręcznej.

Ta transza nie podłącza jeszcze produkcyjnego producenta do trasy ani nie
zapewnia wyboru wariantów o wielu rozdzielczościach. Przezroczysta ścieżka żądania
Video Bridge nie powoduje zatem żadnej dodatkowej pracy, natomiast derywacja
podmiotu powiązanego z dzierżawcą oraz pełny cykl życia wielu rozdzielczości FU-08
pozostają jawnymi zadaniami do późniejszej realizacji, a nie zachowaniem
udokumentowanym jako ukończone.

Klatki są kolejno opatrywane podpisami przy użyciu skonfigurowanego modelu Video. Puste
nadpisanie Video dziedziczy ustawienie Vision; jeśli oba są puste, automatyczny
router Vision wybiera efektywny model obsługujący przetwarzanie obrazu. Pomyślnie
wygenerowane podpisy zastępują oryginalną część stabilnym prefiksem `[Video description:`,
który oznacza również tekst jako niezaufaną obserwację pochodzącą z multimediów i nakazuje
modelom przetwarzającym dane w dalszej części potoku, aby nie wykonywały instrukcji
znalezionych w multimediach. Klucze pamięci podręcznej podpisów klatek obejmują bajty JPEG,
prompt, znacznik czasu i efektywny model; buforowane są wyłącznie podpisy wygenerowane
pomyślnie. Wpisy pamięci podręcznej zachowują rzeczywisty model producenta, który zakończył
operację powodzeniem, w tym model rezerwowy; most zgłasza `mixed`, gdy poszczególne klatki
zostały przetworzone przez różne modele. Trafienie w pamięci podręcznej ponownie wykorzystuje
tożsamość tego producenta zamiast przypisywać mu etykietę żądanego planu routingu. Pamięć
podręczna wyników całego filmu jest indeksowana według wszystkich danych wejściowych
zmieniających wynik — promptu, efektywnego modelu, zasad próbkowania, liczby klatek,
trybu analizy semantycznej, odcisku SHA-256 znormalizowanej wskazówki dotyczącej obszaru
zainteresowania, okna zainteresowania, `transcript`, `audioTranscript` oraz flagi
arkusza stykowego — dlatego zmiana któregokolwiek z tych wymiarów powoduje chybienie
pamięci podręcznej, a nigdy ponowne wykorzystanie nieaktualnych danych. Wersja zasad
deduplikacji wizualnej, próg i ograniczona liczba klatek kandydujących również są jawnie
uwzględnione w kluczu i metadanych pamięci podręcznej wyników; zmiana zasad nie może więc
ponownie wykorzystać nieaktualnego opisu całego filmu. Metadane pamięci podręcznej wyników
w wersji v4 zachowują tryb i odcisk, ale nigdy nieprzetworzone zadanie użytkownika.
Metadane mechanizmu ochronnego zgłaszają zarówno żądany, jak i efektywny tryb analizy;
żądany tryb `focused` bez użytecznego tekstu użytkownika jest zgłaszany jako efektywnie
działający w trybie `full`.

Mechanizm ochronny wyodrębnia każdą obsługiwaną część wideo, ale opisuje nie więcej niż
`modalityBridgeVideoMaxVideos`. W przypadku elementu docelowego, dla którego potwierdzono
`supportsVideo === false`, filmy, których przetwarzanie zakończyło się niepowodzeniem,
oraz filmy przekraczające limit są zastępowane jawnymi, bezpiecznymi znacznikami tekstowymi,
tak aby nie pozostał żaden nieprzetworzony materiał wideo. Gdy możliwości są nieznane,
części te pozostają niezmienione. Elementy docelowe z `supportsVideo === true` omijają most.
Sygnał przerwania żądania klienta jest propagowany przez pobieranie, kolejkę brokera,
podprocesy i wywołania generowania podpisów; przerwania zatrzymują przetwarzanie między
filmami i nigdy nie powodują awaryjnego przepuszczenia nieprzetworzonych multimediów.

Ustawienia środowiska wykonawczego są przechowywane w bazie danych i walidowane przez Zod:

| Klucz                               | Wartość domyślna | Zakres / zachowanie                                                                                            |
| ----------------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`          | Opcjonalne środowisko wykonawcze, wymagające jawnego włączenia                                                 |
| `modalityBridgeVideoAnalysisMode`   | `"full"`         | `full` zachowuje ogólne podpisy; `focused` używa ograniczonego, niezaufanego kontekstu najnowszego użytkownika |
| `modalityBridgeVideoModel`          | `""`             | Dziedziczy model Vision Bridge                                                                                 |
| `modalityBridgeVideoFrameCount`     | `8`              | 1–16                                                                                                           |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`      | `uniform`, `scene_aware` lub proporcjonalne `segment_aware`; awaria detektora powoduje powrót do `uniform`     |
| `modalityBridgeVideoMaxVideos`      | `1`              | 1–4                                                                                                            |
| `modalityBridgeVideoTimeout`        | `120000`         | 1000–120000 ms                                                                                                 |

Starsze, utrwalone wartości limitu czasu Video przekraczające 120 sekund są ograniczane do
terminu brokera; nowe zapisy ustawień przekraczające ten limit są odrzucane.
`GET /api/modality-bridge/video/runtime` wymaga zaufanej, oznaczonej lokalności pętli zwrotnej
przed uwierzytelnieniem lub sondowaniem środowiska wykonawczego, a następnie wymaga
uwierzytelnienia zarządzającego. Zwraca wyłącznie `available`, oczyszczone wersje
FFmpeg/ffprobe oraz stały powód, gdy środowisko wykonawcze jest niedostępne. Wewnętrzny
punkt końcowy wyodrębniania nie jest publicznym interfejsem API do przesyłania plików:
nasycenie kolejki zwraca `503` wraz z `Retry-After`, rozłączenie wywołującego zwraca `499`,
a stały termin brokera zwraca `504`. Przekonwertowane odpowiedzi dodają
`video->text;model=<visionModel>;parts=<videos>` do centralnego nagłówka
`x-omniroute-modality-bridge`, nie usuwając segmentów Vision ani Audio.

### Masker danych PII (`piiMasker.ts`)

Działa na **obu** etapach.

- **`preCall`** klonuje ładunek, przechodzi przez `system`, `messages`, `input` oraz
  `prompt` (w tym elementy będące zwykłymi ciągami znaków) i stosuje `processPII()` (z
  `@/shared/utils/inputSanitizer`) do pól `content`/`text` zawierających ciągi znaków. Gdy
  `PII_REDACTION_ENABLED=true`, wykryte dane osobowe są redagowane w wychodzącym
  ładunku. Jest to niezależne od `INPUT_SANITIZER_MODE` (który steruje wyłącznie
  zasadami dotyczącymi wstrzykiwania promptów). Gdy redagowanie jest wyłączone, wywołanie zapisuje
  liczbę wykryć bez modyfikowania treści.
- **`postCall`** głęboko klonuje odpowiedź, uruchamia `sanitizePIIResponse()` oraz
  mechanizm maskujący format interfejsu Responses API (`maskResponsesOutput` — obejmuje
  `output_text` i `output[].content[].text`). Jeśli zostanie przeprowadzona jakakolwiek redakcja,
  zmodyfikowana odpowiedź zastępuje oryginalną.

Mechanizm ochronny nigdy nie blokuje; jedynie dodaje adnotacje (`meta.detections`,
`meta.redacted`) lub modyfikuje treść.

### Wstrzykiwanie promptów (`promptInjection.ts`)

Wykrywa w treściach dostarczonych przez użytkownika struktury o charakterze ataku i egzekwuje
skonfigurowane zasady. Zachowanie jest kontrolowane przez zmienne środowiskowe oraz opcje
konstruktora:

| Ustawienie      | Zmienna środowiskowa                                                                                 | Domyślnie | Efekt                                                                                                                                                                                                                                                       |
| --------------- | ---------------------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Włączone        | `INPUT_SANITIZER_ENABLED`                                                                            | `true`    | Gdy `false`, mechanizm ochronny natychmiast kończy działanie.                                                                                                                                                                                               |
| Tryb            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`    | Zasada obsługi wstrzyknięć: `block`, `warn` lub `log`. (`redact` jest akceptowane w celu zachowania zgodności wstecznej, ale **nie** usuwa tekstu wstrzyknięcia; modyfikowanie danych osobowych w żądaniu jest kontrolowane przez `PII_REDACTION_ENABLED`.) |
| Próg blokowania | opcja `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`    | Minimalny poziom ważności wymagany do zablokowania. Przy ustawieniu domyślnym poziom średni służy wyłącznie do obserwacji.                                                                                                                                  |

**Kolejność pierwszeństwa trybu** (`getMode`): `options.mode` wywołującego →
**nadpisanie za pomocą flagi funkcji z bazy danych** `INJECTION_GUARD_MODE` (Panel → Ustawienia →
Flagi funkcji) → zmienna środowiskowa `INJECTION_GUARD_MODE` → zmienna środowiskowa `INPUT_SANITIZER_MODE` →
`warn`. Nadpisanie z panelu ma zatem pierwszeństwo przed zmiennymi środowiskowymi, dzięki czemu interfejs
Flag funkcji kontroluje działający mechanizm ochronny na żywo (bez ponownego uruchamiania). Odczyt z bazy danych jest odporny na błędy:
jeśli wystąpi błąd, mechanizm ochronny powraca do zachowania opartego na zmiennych środowiskowych, a gdy
nie ustawiono nadpisania, zachowanie jest identyczne z rozstrzyganiem wyłącznie na podstawie zmiennych środowiskowych.

Źródła wykrywania:

1. `sanitizeRequest()` z `@/shared/utils/inputSanitizer` (wspólny zestaw detektorów
   używany w innych miejscach potoku).
2. Wbudowane `DEFAULT_GUARD_PATTERNS` (obecnie `system_override_inline` oraz
   `markdown_system_block`, oba o poziomie ważności `high`).
3. Opcjonalne `customPatterns` przekazane za pomocą opcji konstruktora (ciągi znaków, wyrażenia regularne
   lub rekordy `{ name, pattern, severity }`).

Gdy `mode === "block"` **i** co najmniej jedno wykrycie osiąga wymagany próg
ważności, `preCall` zwraca `{ block: true, message: "Request rejected:
suspicious content detected" }`. W trybach `warn`/`log` mechanizm ochronny zapisuje zdarzenie w dzienniku, ale
zezwala na wywołanie. Współdzielona funkcja pomocnicza `evaluatePromptInjection()` jest również eksportowana
dla wywołujących, którzy muszą oceniać prompty bez korzystania z rejestru.

**Limit skanowania (v3.8.20):** detektor sprawdza tylko **pierwsze 16 KB**
połączonego tekstu promptu — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajty) w
`src/shared/utils/inputSanitizer.ts`. Zarówno `detectInjection()`, jak i
`evaluatePromptInjection()` wykonują `slice(0, MAX_INJECTION_SCAN_BYTES)` przed uruchomieniem
pętli wzorców. Dyrektywy wstrzyknięć znajdują się w pobliżu początku danych wejściowych, dlatego
ogranicza to zużycie procesora i operacje GC przez wyrażenia regularne w ładunkach o rozmiarze wielu setek KB bez osłabiania wykrywania (por.
#3932, #4041).

### Mechanizm maskowania danych uwierzytelniających (`credentialMasker.ts`)

Działa na **obu** etapach, jako ostatni element domyślnego łańcucha (priorytet `95`). Redaguje
powszechnie znane wzorce kluczy API / tajnych tokenów w wychodzącym ładunku (treści
wiadomości, argumentach wywołań narzędzi, wynikach narzędzi) **oraz** w odpowiedzi dostawcy, dzięki czemu
dane uwierzytelniające wklejone do promptu (lub zwrócone przez wynik narzędzia) nie zostaną ujawnione
zewnętrznemu dostawcy ani klientowi.

- **Tylko po włączeniu**, zgodnie z konwencją redagowania danych PII (w pobliżu Twardej reguły nr 20):
  wyłączone, chyba że `settings.credentialRedactionEnabled === true` **lub**
  `CREDENTIAL_REDACTION_ENABLED=true`. Gdy funkcja jest wyłączona, zabezpieczenie niczego nie robi —
  nigdy nie blokuje ani nie modyfikuje.
- `redactCredentials()` przechodzi przez całe drzewo ładunku/odpowiedzi (`walkValue()`,
  bezpiecznie względem zatruwania prototypów, z obsługą cykli za pomocą `WeakSet`) i zastępuje dopasowania
  symbolem zastępczym `[REDACTED:<type>]`, klonując tylko te gałęzie, które faktycznie
  uległy zmianie.
- `CREDENTIAL_PATTERNS` obejmuje klucze dostawców LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokeny VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), klucze płatnicze (Stripe, Square), klucze
  chmurowe (klucz dostępu AWS, Twilio, SendGrid, Mailgun), klucze prywatne / tokeny JWT,
  ciągi połączeń zawierające dane uwierzytelniające (`mongodb://user:pass@...` itd.) oraz
  ogólny wzorzec wartości nagłówków `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Klucze mające formę nagłówków (`authorization`, `x-api-key`, `api-key`,
  `apikey`) są redagowane strukturalnie (tylko wartość, z zachowaniem prefiksu
  schematu, takiego jak `Bearer `/`Basic `), a nie za pomocą ogólnego wyrażenia regularnego dla tekstu.
- Zabezpieczenie nigdy nie blokuje; jedynie modyfikuje (`modifiedPayload` /
  `modifiedResponse`) i dodaje adnotacje (`meta.credentialsRedacted`, `meta.count`).

Test regresji: `tests/unit/credential-masker-guardrail.test.ts`.

## Kontrakt bazowy (`base.ts`)

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
  block?: boolean; // wartość true powoduje natychmiastowe przerwanie łańcucha
  message?: string; // udostępniany w przypadku zablokowania
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // zwracany przez preCall w celu zmodyfikowania żądania
  modifiedResponse?: TValue; // zwracany przez postCall w celu zmodyfikowania odpowiedzi
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

Mechanizm zabezpieczający sygnalizuje „brak zmian”, zwracając `void`, `{}` lub
`{ block: false }`. Zwrócenie `modifiedPayload`/`modifiedResponse` zastępuje
wartość przekazywaną dalej w łańcuchu do kolejnych mechanizmów zabezpieczających.
`signal?: AbortSignal` przekazuje cykl życia wywołującego do mechanizmów zabezpieczających. Przerwanie żądania stanowi celowy wyjątek od strategii fail-open: mosty multimedialne przerywają pracę i zwalniają zasoby bez przywracania nieprzetworzonych multimediów dla celu, o którym wiadomo, że ich nie obsługuje.

## Rejestr (`registry.ts`)

Singleton `guardrailRegistry` udostępnia:

- `register(guardrail)` — dodaje (lub zastępuje według znormalizowanej nazwy) zabezpieczenie i
  ponownie sortuje według rosnącego `priority`.
- `clear()` / `list()` — pomocnicze funkcje administracyjne.
- `runPreCallHooks(payload, context)` — iteruje aktywne zabezpieczenia, przekazuje
  `payload` przez `modifiedPayload` i zatrzymuje się przy pierwszym `block: true`.
- `runPostCallHooks(response, context)` — ten sam przepływ po stronie odpowiedzi.
- `resetGuardrailsForTests({ registerDefaults })` — czyści stan i opcjonalnie
  ponownie rejestruje wartości domyślne dla czystej izolacji testów.

Oba uruchamiacze zwracają `{ blocked, payload|response, results, guardrail?, message? }`,
gdzie `results` to tablica rekordów `GuardrailExecutionResult`, które zawierają
pola `blocked`, `skipped`, `modified`, `error` i `meta` dla każdego zabezpieczenia,
przydatne do śledzenia.

### Wyłączanie zabezpieczeń na żądanie

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agreguje
zdeduplikowaną listę nazw zabezpieczeń, które powinny zostać pominięte dla bieżącego
żądania. Źródła (wszystkie opcjonalne, wszystkie połączone):

- `apiKeyInfo.disabledGuardrails`
- Treść żądania `disabledGuardrails` (najwyższy poziom)
- Treść żądania `metadata.disabledGuardrails`
- Nagłówek `x-omniroute-disabled-guardrails` (lub starszy
  `x-disabled-guardrails`)

Wartości mogą być tablicami ciągów znaków lub ciągiem znaków oddzielonych przecinkami; nazwy są
normalizowane do małych liter w formacie kebab-case (`pii_masker` → `pii-masker`). Wynik
jest przekazywany przez `context.disabledGuardrails` do rejestru, który pomija
pasujące zabezpieczenia (`skipped: true` w `results`).

## Kolejność wykonania

Dla każdego żądania przechodzącego przez `src/sse/handlers/chat.ts` oraz
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` buduje listę pomijanych elementów z klucza API, treści (body)
   oraz nagłówków.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` uruchamia mechanizmy zabezpieczające (guardrails) w rosnącym
   porządku priorytetów:
   - Wyłączone zabezpieczenia są rejestrowane jako `skipped`.
   - Metoda `preCall` każdego zabezpieczenia może przepisać ładunek (payload) za pomocą `modifiedPayload`.
   - Pierwsze wystąpienie `block: true` przerywa łańcuch, a obsługa zwraca
     odpowiedź odrzucenia przez mechanizm zabezpieczający.
3. Potencjalnie przepisywany ładunek trafia do routingu hybrydowego (combo routing) oraz
   wysyłki nadrzędnej (upstream dispatch).
4. Po skompletowaniu odpowiedzi, `guardrailRegistry.runPostCallHooks(...)`
   uruchamia ten sam łańcuch dla odpowiedzi. Wystąpienie `block: true` w tym miejscu odrzuca
   odpowiedź nadrzędną.

Zabezpieczenia, które zgłaszają błędy, są rejestrowane z wpisem `error: <message>` i logowane przez
`logger.warn`, ale łańcuch jest kontynuowany — zgodnie z założeniem o otwartości na awarię (fail-open).

## Konfiguracja

Zmienne środowiskowe odczytywane przez wbudowane mechanizmy zabezpieczające:

| Zmienna                               | Używana przez             | Efekt                                                                                                                |
| ------------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Ustawienie `false` wyłącza wykrywanie całkowicie.                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Polityka wstrzykiwania: `warn`, `block` lub `log`. Starsza wartość `redact` nie modyfikuje tekstu wstrzyknięcia.     |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Tryb dla osłony wstrzyknięć; również flaga funkcji bazy danych, która **nadpisuje** zmienne środowiskowe (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Minimalny poziom ważności odrzucany przez `MODE=block`: `high` (domyślnie), `medium` lub `low`.                      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Starszy alias dla `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                 |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Gdy `true`, dane PII w żądaniu są maskowane (niezależnie od trybu wstrzykiwania).                                    |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Steruje zachowaniem maskera po stronie odpowiedzi.                                                                   |

Zabezpieczenia Modality Bridge odczytują konfigurację wykonawczą z magazynu ustawień
opartego na bazie danych (`getSettings()`), a nie ze zmiennych środowiskowych. Kluczami głównymi dla wizji są
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` oraz
`modalityBridgeCacheMaxEntries`. Starsze klucze
`visionBridge*` są akceptowane tylko jako udokumentowane rozwiązanie zapasowe (fallback) odczytu na jeden cykl;
zapisy z panelu sterowania (dashboard) używają kluczy głównych. Wartości domyślne oraz moduł rozstrzygający mechanizm zapasowy znajdują się w
`src/shared/constants/modalityBridgeDefaults.ts`, a starsze stałe są zachowane w
`src/shared/constants/visionBridgeDefaults.ts`.

Audio używa ustawień `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` i `modalityBridgeAudioMaxClips`, a także współdzielonych
ustawień `modalityBridgeCache*`. Audio nie posiada mechanizmu zapasowego dla starszych kluczy, ponieważ te
klucze zostały wprowadzone wraz ze schematem Modality Bridge.

Wideo używa ustawień `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` oraz
`modalityBridgeVideoTimeout`, a także współdzielonych ustawień `modalityBridgeCache*`.
Jest domyślnie wyłączone, ponieważ pakiety FFmpeg/ffprobe są opcjonalnymi zależnościami operacyjnymi,
a tworzenie podpisów klatek (frame captioning) zwiększa opóźnienie oraz koszt modelu.

## Niestandardowe Guardraile

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

Kroki:

1.  Utwórz `src/lib/guardrails/myGuardrail.ts` rozszerzający `BaseGuardrail`.
2.  Zaimplementuj `preCall` i/lub `postCall`.
3.  Zarejestruj podczas importu (push z `registerDefaultGuardrails`) lub
    wywołaj `guardrailRegistry.register(...)` w czasie wykonania — rejestr zastępuje
    każdy poprzedni guardrail o tej samej znormalizowanej nazwie.
4.  Dodaj testy w `tests/unit/` (istniejące przykłady:
    `tests/unit/guardrails-registry.test.ts`,
    `tests/unit/prompt-injection-guard.test.ts`,
    `tests/unit/guardrails/visionBridge.test.ts`).

## Testowanie

Użyj `resetGuardrailsForTests()` między testami, aby rozpocząć od znanego stanu.
Przekaż `{ registerDefaults: false }`, aby rozpocząć z pustym rejestrem i
zarejestrować tylko testowane guardraile. Vision Bridge akceptuje wstrzykiwanie zależności
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge udostępnia
równoważne punkty dla ustawień, możliwości, wyboru modelu STT, sprawdzania poświadczeń
i transkrypcji. Testy mogą zatem ćwiczyć oba przepływy bez dostępu do bazy danych
lub sieci.

## Zobacz także

- `src/lib/guardrails/` — implementacja
- `src/shared/utils/inputSanitizer.ts` — współdzielony detektor, który zasila
  ochronę przed wstrzykiwaniem promptów i maskowanie PII
- `src/shared/constants/visionBridgeDefaults.ts` — domyślne ustawienia Vision Bridge i
  lista modeli wymuszonego mostkowania
- `src/shared/constants/modalityBridgeDefaults.ts` — współdzielone domyślne ustawienia środowiska wykonawczego Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — warstwa ortogonalna (wyłącznik obwodu, czasy odnowienia)
- `docs/reference/ENVIRONMENT.md` — pełne odniesienie do zmiennych środowiskowych

## Pokrycie tras przez injection-guard i red-team (Faza 8 · Blok D)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) obejmuje wszystkie trasy,
które akceptują prompty użytkownika. Szanuje `INJECTION_GUARD_MODE` (domyślnie `warn` = tylko logowanie;
`block` = zwraca HTTP 400 `SECURITY_001`).

| Typ                | Trasy                                                                                                                                                | Tryb domyślny |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Tekst (istniejący) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generatywny        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Dane               | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Ekstrakcja tekstu (`extractMessageContents`) obejmuje `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (nocne, `nightly-llm-security.yml`):** promptfoo waliduje, że każda trasa blokuje
korpus OWASP-LLM w `INJECTION_GUARD_MODE=block`; garak uruchamia sondy (pomija bez sekretu).
`moderations` jest uwzględnione dla spójności — operatorzy w trybie blokowania mogą je wyłączyć za pomocą
`resolveDisabledGuardrails`.

Nocny workflow (`.github/workflows/nightly-llm-security.yml`, cron + ręczne
uruchamianie) ma dwa zadania:

- **`promptfoo-guard` (blokujące)** — uruchamia `promptfoo eval -c promptfooconfig.yaml`
  z `INJECTION_GUARD_MODE=block`. Każdy przypadek adversarialny (np. "ignoruj wszystkie
  poprzednie instrukcje...", jailbreaki w stylu DAN) potwierdza, że odpowiedź zawiera
  `error.code === "SECURITY_001"`, tzn. że guard faktycznie odrzucił żądanie.
- **`garak` (doradcze)** — uruchamia garak `--probes promptinject,dan,leakreplay`
  przeciwko lokalnej instancji OmniRoute (`http://localhost:20128/v1`). Zależne od
  sekretu dostawcy (`PROMPTFOO_PROVIDER_KEY`); pomija się elegancko i jest sufiksowane
  `|| true`, więc raportuje bez powodowania błędu CI.

Pokrycie pomocnika guard (`createInjectionGuard` / `withInjectionGuard`)
obejmuje każdą trasę `/v1` zawierającą prompt; tekst promptu jest pobierany z
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` przez
`extractMessageContents()` w `src/shared/utils/inputSanitizer.ts`.
