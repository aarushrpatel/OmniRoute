# Guardrails (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Zdroj pravdy:** `src/lib/guardrails/`
> **Naposledy aktualizováno:** 2026-08-29 — v3.8.51 (původ přepisu Video Bridge deklaruje volající,
> server jej zatím neověřuje — upřesněno dle #11661)

Guardraily prosazují bezpečnost, zásady a transformace obsahu na rozhraní
mezi OmniRoute a upstream poskytovateli. Každý guardrail může kontrolovat (a
volitelně odmítnout, transformovat nebo anotovat) datové části požadavků (`preCall`) a
upstream odpovědi (`postCall`).

Systém je **fail-open**: pokud guardrail během provádění vyvolá výjimku, registr
chybu zaznamená a pokračuje dalším guardrailem, místo aby požadavek
selhal. Blokování je výslovné rozhodnutí (`block: true`), nikdy ne nehoda.

## Vestavěné ochranné mechanismy

Registr při importu automaticky načte šest ochranných mechanismů v pořadí podle priority
(viz `registry.ts` → `registerDefaultGuardrails()`):

| Priorita | Název               | Fáze           | Soubor                |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nižší čísla priority se spouštějí **jako první**.

### Přemostění obrazu (`visionBridge.ts`) — Přemostění modalit PR-1

Zachytává požadavky obsahující obrázky, které jsou určené pro **modely bez podpory obrazu**, a buď
přesměruje celý požadavek na model podporující obraz, nebo před voláním
nadřazené služby nahradí obrazové části textovými popisy vytvořenými konfigurovatelným
modelem pro zpracování obrazu. Díky tomu mohou poskytovatelé podporující pouze text transparentně zpracovávat
multimodální datové části.

Průběh:

1. Přeskočí zpracování, pokud cílový model již podporuje obraz (pokud se nenachází v
   seznamu vynuceného přemostění `isVisionBridgeForcedModel`).
2. Extrahuje obrazové části pomocí `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), která deleguje na **sjednocený detektor médií**
   `detectMediaParts()` v `open-sse/utils/mediaParts.ts` — jediný zdroj pravdy
   sdílený s filtrem kompatibility kombinací. Extrakce používá seznam povolených
   částí nejvyšší úrovně ve tvarech, které může `replaceImageParts` vložit zpět
   (smlouva extrakce↔nahrazení): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"` a Responses API
   `input_image`. Vnořené nálezy a tvary tvořené pouze indikátory patří do filtru
   kombinací a nikdy se neextrahují. Pokud nejsou nalezeny žádné, zpracování se přeskočí.
3. Vyhodnotí běhovou konfiguraci pomocí `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nové klíče nastavení
   `modalityBridge*` mají přednost; starší klíče `visionBridge*` zůstávají jako
   **záložní možnost po dobu jednoho cyklu** (okno pro návrat zpět). Pokud je
   přemostění zakázáno, zpracování se přeskočí ještě před průchodem médii.
4. Selektor režimu (`modalityBridgeVisionMode`, viz tabulka níže) rozhodne
   mezi přesměrováním a popisem. Přesměrování vrátí `modifiedPayload`, kde je
   změněn pouze `model`, spolu s metadaty `{ rerouted, fromModel, toModel, imagesKept }`.
5. Cesta popisu: omezí počet obrázků na `maxImages`, sestaví výzvu zohledňující úlohu,
   zkontroluje mezipaměť popisů, zavolá model pro zpracování obrazu **paralelně**
   (`Promise.allSettled`) a na místo obrázků vloží textové části
   `[Image N]: <description>`. Neúspěšný popis vrátí `null` a původní obrazová část
   je **zachována** (#4012) — s výjimkou cesty popisu kombinace, pokud selhaly
   všechny popisy; v takovém případě potvrzená nadřazená služba bez podpory obrazu
   obdrží zástupný text
   `(unavailable — no vision-capable provider connected)` (#8430).
6. Vrátí `modifiedPayload` + metadata (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selektor režimu (`modalityBridgeVisionMode`)

| Režim      | Výchozí | Chování                                                                                                                                                                                                                                                                                                                   |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Původní heuristika beze změn (#6640/#7204): modely, které nejsou kombinované, a modely `auto/` se přesměrují na nejlepší model podporující obraz, pokud původní model již nemá použitelné přihlašovací údaje (pak se použije popis); kombinované cíle vždy používají popis.                                               |
| `describe` |         | Vždy použije popis — blok přesměrování se zcela přeskočí; vždy odpovídá model zvolený uživatelem.                                                                                                                                                                                                                         |
| `reroute`  |         | Vynutí přesměrování: kontrola zachování modelu s přihlašovacími údaji se obejde. Kontrola přihlašovacích údajů **cíle** přesměrování stále platí — pokud neexistuje použitelný cíl podporující obraz, požadavek přejde na popis, aby se nezpracované obrázky nikdy nedostaly k backendu podporujícímu pouze text (#8430). |

Vynucené režimy ukončí rozhodování **předtím**, než se spustí automatická heuristika; chování režimu `auto`
je bajtově identické s ochranným mechanismem před PR-1.

#### Rozsah klíče API (`visionBridgeKeyScope.ts`)

Když klíč API volajícího omezuje `allowedConnections`, fondy kvót
(`allowedQuotas`) nebo modely (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), přemostění vybírá
pro přesměrování a popis pouze modely, které může klíč používat, a pouze na
připojeních, která může klíč používat. Volání popisu poté vždy prochází
samosmyčkou OmniRoute s hlavičkou `x-omniroute-self-loop-key-id`, takže přijímající
požadavek chatu znovu vynutí zásady daného klíče pro připojení a model.
`enforceApiKeyPolicy()` tuto hlavičku respektuje pouze společně s bearerem
samosmyčky, takže může přístup pouze zúžit, a ID, které nelze přeložit, je odmítnuto.

Pokud není pro klíč povolen žádný model podporující obraz, cesta popisu ustoupí
a požadavek projde beze změny, což odpovídá stejnému chování typu fail-open jako
u zakázaného ochranného mechanismu (metadata
`{ skipped: true, reason: "no_permitted_vision_model" }`).
Požadavky bez klíče a klíče bez těchto omezení se chovají přesně jako dříve.

#### Výzva popisu zohledňující úlohu (`modalityBridgeVisionTaskAware`)

Výchozí hodnota je **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) připojí
text **poslední zprávy uživatele** (zkrácený na 500 znaků) k základní výzvě
pro popis, čímž nasměruje popis na to, na co se uživatel skutečně ptal
(vzor codex-vision-proxy), a požádá model pro zpracování obrazu o přepis
viditelného textu. Pokud je příznak vypnutý — nebo není k dispozici žádný text
uživatele — základní výzva se použije beze změny.

Vlastní požadavek smyčky describe kompatibilní s OpenAI (`callVisionModelSingle()`
v `visionBridgeHelpers.ts`) vždy požaduje `image_url.detail: "high"` —
bezpodmínečně, pro každého volajícího i poskytovatele, bez závislosti na jakémkoli
signálu klienta. Vzorkování s nízkou úrovní detailů zhoršuje přesnost OCR právě
u úlohy přepisu textu, kterou tato výzva požaduje, takže samotné volání describe
vždy požaduje vysokou úroveň detailů bez ohledu na to, jakou úroveň detailů
použil původní příchozí požadavek. To ovlivňuje pouze tělo interního požadavku
describe; nemění to způsob, jakým OmniRoute předává vlastní `image_url.detail`
volajícího v primárním požadavku — tato výchozí hodnota se aplikuje samostatně,
a to pouze pro rozpoznané klienty OpenCode, ve funkci `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Větev smyčky describe používající
přenosový formát Anthropic nemá žádné pole `detail` a žádná z těchto výchozích
hodnot ji neovlivňuje.

#### Limit výstupu describe (`modalityBridgeVisionMaxChars`)

| Klíč                           | Výchozí hodnota | Rozsah             |
| ------------------------------ | --------------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`             | `0` nebo 100–50000 |

`0` (výchozí hodnota) znamená **bez omezení** — popis vrácený funkcí
`callVisionModel()` je předán beze změny, čímž se zachová stávající
chování. Jakákoli hodnota v rozsahu 100–50000 zkrátí popis a přidá příponu
`…` před jeho vložením ve tvaru `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` v `src/lib/guardrails/visionBridge.ts`).
U úloh OCR náročných na detaily tuto hodnotu zvyšte, pokud navazující model
potřebuje celý přepis; snižte ji, chcete-li omezit spotřebu tokenů u příliš
upovídaných modelů pro zpracování obrazu. Pole v řídicím panelu se nachází
v panelu Advanced na kartě Vision (`modality-bridge-max-chars`
v `ModalityBridgeVisionTab.tsx`) a každou hodnotu od 1 do 99 včetně zvýší
na minimální hodnotu 100, zatímco explicitní hodnotu `0` ponechá beze změny —
`0` je sama o sobě platnou hodnotou Zod
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nikoli pouze
výchozí hodnotou znamenající „nenastaveno“.

#### Mezipaměť describe (`modalityBridge/bridgeCache.ts`)

Procesně sdílená mezipaměť LRU + TTL v paměti pro výstupy describe.
Klíč = `sha256(imageRef + composedPrompt + configuredBridgeModel)` s rámováním
pomocí délkových prefixů (bez kolizí na hranicích polí). Komponentou modelu je
**nakonfigurovaný** model mostu, nikoli model, který skutečně odpověděl —
`callVisionModel` může interně použít záložní model a vytváření klíčů pro
jednotlivé pokusy by mezipaměť fragmentovalo. Neúspěšné operace describe se
nikdy neukládají do mezipaměti. Nastavení:

| Klíč                            | Výchozí hodnota | Rozsah  |
| ------------------------------- | --------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`          | —       |
| `modalityBridgeCacheTtlMinutes` | `60`            | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`           | 10–5000 |

#### Normalizace vzdálených obrázků (vlastní volání describe/načtení base64)

Když most sám načítá **vzdálený** obrázek — při vlastním volání describe
pro Anthropic a při převodu do base64 pro přenosový formát Claude
(`ensureBase64ImagesForClaudeWire`), v obou případech prostřednictvím
`fetchRemoteImageAsDataUri()` v `visionBridgeHelpers.ts` — výsledné datové URI
je před vložením do požadavku modelu pro zpracování obrazu předáno funkci
`normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`). Nadměrně velké
obrázky jsou zmenšeny tak, aby jejich **delší strana měla 2048 px**
(v souladu s limitem změny velikosti, který již OpenAI/Anthropic používají
na straně serveru), což snižuje objem nahrávaných dat a latenci, aniž by se
změnilo to, co model pro zpracování obrazu vidí. Změna velikosti používá
`sharp`, načtený pomocí dynamického importu: na platformě, kde se jeho nativní
binární soubor nepodaří načíst, funkce `normalizeDataUri()` **nikdy nevyvolá
výjimku** — použije původní bajty beze změny, takže cesta describe/převodu
do base64 zůstane vždy funkční. Data, která nejsou obrázkem (načtení nevrátilo
dekódovatelný obrázek), jsou rovněž předána beze změny. Tato normalizace se
vztahuje pouze na obrázky, které most načte pro své vlastní volání — nikdy se
nepoužije na nezměněný původní datový obsah volajícího, což odpovídá principu
úprav pouze na základě explicitního souhlasu (Pevné pravidlo č. 20).

#### Schéma nastavení + migrace

Nové klíče `modalityBridge*` jsou validovány pomocí Zod v
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, trojice
`modalityBridgeCache*` a skupina `modalityBridgeAudio*` používaná mostem
Audio Bridge. Migrace `141_modality_bridge_settings.sql` zkopíruje stávající
starší hodnoty `visionBridge*` do odpovídajících nových klíčů (idempotentně,
bez přepsání hodnoty `modalityBridge*` nastavené provozovatelem); starší klíče
zůstanou po dobu jednoho cyklu vydání přijímány jako záložní zdroj pro čtení.

#### Hlavička transparentnosti + statistiky

Odpovědi transformované operací describe obsahují
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(vytvořeno funkcí `buildModalityBridgeHeader()` v `modalityBridge/bridgeStats.ts`,
přidáno funkcí `withModalityBridgeHeader()` v `src/sse/handlers/chatHelpers.ts`).
Přesměrované požadavky neobdrží **žádnou** hlavičku — datový obsah zůstal
nezměněn a záměna modelu je již viditelná v poli `model` v těle odpovědi.

`GET /api/modality-bridge/stats` (ověření pro správu, stejná úroveň jako
`GET /api/settings`) vrací čítače jednotlivých modalit uložené v paměti
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` pro `vision`, `audio` a
`video`. `averageLatencyMs` používá jako jmenovatel `latencySamples`, nikoli
všechny pokusy; operace bez měření času nevytváří uměle vzorek s nulovou
dobou v milisekundách. `bridged` zůstává zpětně kompatibilním aliasem pro
úspěšné převody; neúspěšné pokusy jej nezvyšují.
Čítače se záměrně resetují při restartu procesu
(jde o telemetrii, nikoli účetnictví).

#### Konfigurace řídicího panelu

Vyhrazená stránka řídicího panelu je
`/dashboard/settings/modality-bridge`. Její karty `Vision`, `Audio`
a `Video`, na které lze odkazovat pomocí URL, při přepínání hodnoty `tab`
zachovávají parametry dotazu. Karta Vision nabízí povolení, režim, výběr modelu
(včetně automatického výchozího nastavení), výzvy zohledňující úlohu, pokročilé
limity časového limitu, obrázku, délky popisu a mezipaměti, provozní
čítače a chráněný ukázkový požadavek. Také karta Audio je plně funkční: nabízí
povolení, výběr modelu pouze pro STT s možností Auto, limity časového limitu
a maximální délky klipu, čítače zvuku a ukázkový test `input_audio`. Karta Video
je funkční: hlásí provozní stav FFmpeg/ffprobe — jeden ze čtyř explicitních stavů
uživatelského rozhraní (`unknown`, když test právě probíhá nebo jej nebylo možné
dokončit, `restricted` na hostiteli řídicího panelu mimo loopback, kde je test
přeskočen na straně klienta, `unavailable`, jakmile test potvrdí nedostupnost,
nebo `available` s verzemi FFmpeg/ffprobe) — ukládá limity povolení, modelu,
snímků, videa a časového limitu, filtruje výběr modelů pouze na modely podporující
obraz a zpřístupňuje čítače videa.

Původní karta Vision Bridge v nastavení AI nyní slouží jako kompatibilní odkaz
na novou stránku; již neobsahuje druhou kopii formuláře. Media Providers také
odkazuje pracovní postupy Image-to-Text a Speech-to-Text na odpovídající karty
Modality Bridge, aniž by odstraňovala stávající experimentální prostředí
Speech-to-Text.

**Vynechání kontroly přijetí u vlastní smyčky:** když je volání pro popis směrováno
přes vlastní smyčku `/v1` služby OmniRoute (nestandardní model poskytovatele),
dílčí požadavek odesílá `x-omniroute-admission-bypass: internal` a je ověřen
pomocí vyřešeného přihlašovacího údaje vlastní smyčky — lokálního zástupného
údaje `sk_omniroute` v lokálním režimu nebo klíče prostředí
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` nakonfigurovaného provozovatelem (#1350),
aby nasazení s `REQUIRE_API_KEY=true` mohla nadále provádět volání pro popis.
Vynechání kontroly je akceptováno pouze pro přesně tyto přihlašovací údaje,
takže externí klienti nemohou pomocí této hlavičky přeskočit kontrolu přijetí.

Starší výchozí hodnoty jsou v `src/shared/constants/visionBridgeDefaults.ts`;
nové výchozí hodnoty režimu, zohlednění úlohy a mezipaměti spolu s resolverem
nastavení jsou v `src/shared/constants/modalityBridgeDefaults.ts`. Ochranná
vrstva nabízí volbu konstruktoru `deps`, aby testy mohly vkládat falešné
implementace `getSettings` a `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Zachytává chatové požadavky obsahující zvuk dříve, než dorazí k cíli, o kterém
není známo, že přijímá zvukový vstup. Chatový požadavek nikdy nepřesměrovává:
zvukové části jsou přepsány prostřednictvím stávajícího vícedílného koncového
bodu kompatibilního s OpenAI a vybraný chatový model pokračuje s textovými přepisy.

Průběh:

1. Vyhodnoťte `supportsAudio` prostřednictvím `getResolvedModelCapabilities()`.
   Explicitní metadata registru poskytovatelů mají přednost, následují statická
   metadata modelu a poté synchronizované `modalities_input`. Deklarovaný seznam
   vstupů bez `audio` má hodnotu `false`; pokud neexistují žádné informace
   o schopnostech, zůstává hodnota `null`. Jak `false`, tak `null` aktivují
   konzervativní přemostění, zatímco `true` jej obchází.
2. Vyhodnoťte nastavení `modalityBridgeAudio*` a pomocí sdíleného detektoru
   `detectMediaParts()` extrahujte z každé zprávy zvukové části nejvyšší úrovně,
   které lze vyjmout. Podporované přenosové formáty jsou OpenAI `input_audio`,
   `audio_url` a `source.media_type: "audio/*"`. Vnořený zvuk je detekován pro
   směrování, ale cestou pro vyjmutí není odstraněn. Rozsah zpracování je omezen
   pomocí `modalityBridgeAudioMaxClips`; pozdější části zůstávají nedotčené.
3. Respektujte nakonfigurovanou hodnotu `provider/model`, nebo nechte
   `selectAudioBridgeModel()` projít `AUDIO_TRANSCRIPTION_PROVIDERS` ve stabilním
   pořadí katalogu a vybrat první model s použitelným aktivním přihlašovacím
   údajem poskytovatele.
4. `callAudioTranscription()` převede zvuk ve formátu base64 nebo data URI na
   vícedílný `file`, případně stáhne vzdálenou adresu `audio_url` prostřednictvím
   ochrany odchozích připojení povolující pouze veřejné adresy, s připnutím DNS
   a limitem 25 MB. Poté odešle metodou POST soubor a vybraný model do místní
   vlastní smyčky `/v1/audio/transcriptions`, ověřené pomocí
   `resolveSelfLoopBearer()`. Stávající trasa přepisu provede běžné vyhledání
   přihlašovacích údajů, zpracování intervalů vychladnutí a omezení rychlosti
   a předání poskytovateli.
5. Úspěšná volání nahradí příslušné části hodnotou `[Audio N]: <transcript>`.
   Volání probíhají pomocí `Promise.allSettled`: jednotlivé selhání zachová
   původní zvukovou část (smlouva #4012). Pokud selžou všechna volání a je
   prokázáno, že cíl má `supportsAudio === false`, části se změní na
   `[Audio N]: (unavailable — no STT provider connected)` (smlouva #8430).
   U neznámého cíle (`null`) zůstane při selhání všech volání obsah nedotčený.
   Prokazatelně pouze textový cíl bez použitelného přihlašovacího údaje STT
   obdrží stejnou explicitní zástupnou hodnotu bez provedení síťového volání.

Úspěšné přepisy používají mezipaměť LRU/TTL Modality Bridge sdílenou v rámci
celého procesu. Klíč kombinuje odkaz na zvuk, stabilní označení operace
`audio-transcription` a vybraný model STT; selhání se nikdy neukládají do
mezipaměti. Pokusy o zpracování zvuku aktualizují sdílené čítače `bridged`,
`cacheHits`, `failures` a `lastUsedAt`. Transformované odpovědi obsahují
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`;
nedotčené požadavky segment Audio Bridge neobdrží.

Provozní nastavení jsou uložena v databázi a validována pomocí Zod:

| Klíč                          | Výchozí hodnota | Rozsah           |
| ----------------------------- | --------------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`          | —                |
| `modalityBridgeAudioModel`    | `""`            | Auto nebo ID STT |
| `modalityBridgeAudioTimeout`  | `60000`         | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`             | 1–10             |

Sdílená mezipaměť zůstává řízena nastaveními `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` a `modalityBridgeCacheMaxEntries`.

### Přemostění videa (`videoBridge.ts`, `videoBridgePipeline.ts`)

Zachytává části videa nejvyšší úrovně v `messages` rozhraní Chat Completions a ve
vstupu `input` rozhraní Responses API před voláním cíle bez známé nativní podpory
videa. Podporované formáty jsou `input_video`, `video_url`, `video_source`, adresy
URL HTTPS a datové identifikátory URI `data:video/*;base64,...`. Samotné názvy
souborů v textu se za video nepovažují.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) zajišťuje průchod požadavkem,
kontrolu schopností a zásad, agregaci v rámci požadavku a datovou část odpovědi.
Zpracování jednotlivých videí — získání dat, mezipaměť celého výsledku, popis
sekvence snímků (který sloučí případný přepis zvuku deklarovaný volajícím)
a metriky, přerušení a úklid pro jednotlivé pokusy — je skryto za funkcí
`processVideoPart` v souboru `videoBridgePipeline.ts`, která se volá jednou pro
každou část videa uvnitř smyčky metody `preCall`. Tento modul také definuje
explicitní hranice portů `VideoMediaBrokerPort` (získávání bajtů a extrakce
vzorkovaných snímků), `VideoAudioTranscriptionPort` (sloučení přepisu zvuku
deklarovaného volajícím s titulky vzorkovaných snímků) a `VideoDrilldownPort`
(hranice pro perzistenci detailního rozboru snímků; dosud není zapojena do
`processVideoPart` — záznamy detailního rozboru dnes zapisuje pouze samostatná
trasa `/api/modality-bridge/video/drilldown`).

Veřejná cesta požadavku `/v1` nikdy neimportuje ani nespouští podproces. Vzdálená
videa se stahují s limitem 50 MiB; vložená videa ve formátu base64 mají
konzervativní limit 36 MiB dekódovaných dat na jedno video, aby se obálka
modelu, zpráv a rámcování vešla do veřejného limitu 50 MiB pro příjem požadavků
JSON. Délka vložených dat a odhady dekódované velikosti se kontrolují před
alokací. Pro počáteční vzdálenou adresu URL i každé přesměrování se vyžaduje
HTTPS a používá se stávající ochrana pro veřejná odchozí spojení s připnutím
DNS. Bajty poté překročí přesnou interní hranici zprostředkovatele
`POST /api/modality-bridge/video/extract`. Tato trasa je současně `LOCAL_ONLY`
a `SPAWN_CAPABLE`, přijímá pouze autentizovaný požadavek v rámci procesu
z důvěryhodného rozhraní zpětné smyčky a nikdy nepřijímá adresu URL, cestu
k souboru, spustitelný soubor ani seznam argumentů. Zpracování velikosti těla
v API a inkrementální čtečka těla v obslužné rutině nezávisle vynucují limit
50 MiB pro vstup zprostředkovatele. Jeho omezená fronta zpracovává vždy jednu
extrakci, umožňuje čtyři čekající úlohy a omezuje čekající vstup na 100 MiB.

Uvnitř zprostředkovatele čte `ffprobe` soukromý místní soubor; pevně stanovený
seznam povolených formátů vylučuje formáty playlistů a manifestů. U povolených
kontejnerů rodiny MOV zůstávají externí odkazy na data MOV ve výchozím nastavení
zakázány a pevně stanovený příkaz je nepovoluje. `ffprobe` i `ffmpeg` používají
seznam povolených protokolů omezený pouze na `file`, jedno vlákno, pevná pole
argumentů, žádný shell a spustitelné soubory vyhledané v `PATH`. Obrazové streamy
s přiloženým přebalem nejsou kandidáty k přehrání. Všechny přehratelné streamy
musí splňovat limity a před deterministickou záložní volbou streamu s nejnižším
indexem se upřednostňuje explicitní výchozí stream. Videa jsou omezena na
600 sekund, 8 192 pixelů v každém rozměru a 33 554 432 zdrojových pixelů. FFmpeg
vzorkuje 1–16 prostředních snímků JPEG, zmenšuje delší hranu nejvýše na
1 024 pixelů bez zvětšování menších vstupů a nikdy nepřijímá adresu URL.
Výchozí metodou vzorkování je `uniform`. Volitelné zásady `scene_aware`
a experimentální `segment_aware` provedou jeden dodatečný pevně stanovený průchod
FFmpeg přes již ověřený místní stream, vyberou omezený počet časových značek scén
z `showinfo` a při selhání detektoru, vypršení časového limitu, poškozeném výstupu
nebo prázdné množině kandidátů deterministicky přejdou na stejné rovnoměrné
prostřední body. Režim s ohledem na segmenty přiděluje vzorky prostředních bodů
úměrně ověřeným intervalům scén; důkazy režimu s ohledem na segmenty a chování
při přechodu na záložní řešení jsou podrobně popsány níže. Pevný limit 16 snímků
se u každé zásady uplatní až po výběru. Pokud má požadavek s ohledem na scény
rozpočet pouze jednoho snímku, použije rovnoměrný prostřední bod aktivního okna
celého videa nebo zaměření a uvede `policyEffective: uniform`: jediný vybraný
snímek scény nemůže zachovat oba časové konce. Volající může volitelně zadat
konečné okno zaměření (`start`/`end` v sekundách); hranice se oříznou na délku
média, obrácená nebo nekonečná okna se odmítnou a všechny zásady vzorkování se
provedou pouze uvnitř normalizovaného intervalu. Výsledné okno je zahrnuto
v metadatech vzorkování a v předponě nedůvěryhodného popisu, aby následné modely
dokázaly rozlišit zaměřený úsek od celé časové osy.

Sémantické zaměření titulků je samostatné explicitní nastavení. Výchozí režim
analýzy `full` zachovává stávající výzvu pro snímek a nikdy nepředává text
požadavku modelu titulků. V režimu `focused` čte přemostění pouze nejnovější
neprázdný uživatelský vstup `text`/`input_text` ze stejného kontejneru Chat nebo
Responses, normalizuje jej do NFC, slučuje řídicí znaky a bílé znaky a omezuje
jej na 500 kódových bodů Unicode. Prázdný výsledek vede k použití přesné výzvy
režimu `full`. Použitelná nápověda je serializována jako JSON ve vyhrazeném bloku
nedůvěryhodného uživatelského kontextu a smí pouze upřednostnit pozorovatelné
podrobnosti; nemůže přepsat samostatné varování před následováním pokynů
viditelných nebo slyšitelných v médiu. Textové zaměření nikdy neodvozuje
`start`/`end` ani nemění časový vzorkovač.

#### Strukturální důkazy segmentů FU-07

`segment_aware` používá jeden omezený průchod předběžné analýzy nad již ověřeným
lokálním videostreamem. Pevně daný řetězec filtrů nejprve zmenší šířku nejvýše
na 320 pixelů, detekuje změny scén a zamrzlé intervaly a poté vzorkuje frekvencí
1 snímek za sekundu za účelem zjištění rozmazání, průměrné svítivosti a
prostorových/časových informací. Průchod je omezen na 600 strukturálních vzorků,
jedno vlákno FFmpeg/filtru, stejné seznamy povolených protokolů pouze pro `file`
a kontejnerových formátů, limit výstupu procesu 1 MiB a nejvýše 30 sekund v rámci
sdíleného přerušení/časového limitu zprostředkovatele. Z požadavku nikdy nepřijímá
příkaz, filtr, cestu ani adresu URL.

Strukturální hodnoty představují deterministické důkazy ze vzorkování, nikoli
sémantické porozumění videu. Neodvozují subjekty, akce, titulky, řeč ani záměr
uživatele. Hranice scén a zamrznutí vytvářejí segmenty; pokrytí zamrznutím,
rozmazání, expozice, prostorové detaily a časové změny ovlivňují pouze způsob,
jakým je rozdělen stávající rozpočet 1–16 snímků. Zcela zamrzlý segment je omezen
na jeden snímek, zatímco nezamrzlé segmenty soutěží o zbývající rozpočet. Pokud
počet hranic převyšuje počet snímků, zachová se rovnoměrné pokrytí časové osy,
aby rychlé střihy na začátku nemohly skrýt dlouhý koncový segment. Hranice scén,
které se v rámci 1sekundového rozlišení analýzy nacházejí u hranice zamrznutí,
se slučují.

Chybějící filtry, poškozené/prázdné důkazy, chyba detektoru nebo vypršení
časového limitu omezené předběžné analýzy vedou k bezpečnému přechodu na přesnou
zásadu rovnoměrných středových bodů. Přerušení volajícím nebo časový limit
zprostředkovatele k tomuto přechodu nevedou: ukončí probíhající podproces,
zabrání následné extrakci snímků a soukromý dočasný strom je odstraněn v bloku
`finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuje deterministické reálné testovací
vstupy FFmpeg pro úspory volání titulků po deduplikaci, přidělování rozpočtu při
hustém pohybu, důkazy o rozmazání/expozici/SI-TI, rychlé střihy s dlouhým koncem
a falešně pozitivní výsledky při postupném prolínání. Zaznamenává skutečnou dobu
předběžné analýzy a tam, kde je k dispozici `/usr/bin/time`, také čas CPU
podřízeného procesu a špičkové RSS. Jeho kontroly kvality jsou pouze strukturální
referenční mechanismy. Kvalita reálného modelu pro generování titulků zůstává
`HOLD`, protože tento testovací nástroj nemá autorizovaný koncový bod ani
neměnného hodnotitele. Peněžní úspory rovněž zůstávají `HOLD`, pokud
`--caption-cost-per-call-usd` neposkytne explicitní kladný odhad nákladů na jedno
volání; skript žádný z těchto výsledků nikdy nevytváří uměle.

Každý snímek je omezen na 4 MiB, všechny nezpracované snímky dohromady na 23 MiB
a serializovaná odpověď zprostředkovatele na 32 MiB. Soukromý dočasný adresář je
odstraněn v bloku `finally`. OmniRoute nepřibaluje FFmpeg a nepřijímá vlastní
cestu ke spustitelnému souboru. Před generováním titulků používá most
konzervativní průchod vizuální deduplikace: každý JPEG je zmenšen na
16×16stupňový buffer ve stupních šedi a porovnán pouze s posledním zachovaným
snímkem. Pokud požadovaný rozpočet titulků přesahuje jeden snímek, extrakce
poskytne omezenou množinu kandidátů čítající nejvýše dvojnásobek tohoto rozpočtu
a nikdy více než 16 snímků. Požadovaný limit se použije až po deduplikaci,
přičemž při konečném prořeďování zůstanou zachováni první a poslední vybraný
kandidát, pokud rozpočet činí alespoň dva snímky. Verze zásady
`grayscale-16x16-mean-cells-v2` používá vyšší hodnotu z průměrného rozdílu
svítivosti a podílu buněk miniatury, jejichž normalizovaný rozdíl činí alespoň
0,05. Prahová hodnota duplicity je konstanta 0,04, zvolená kvůli
předvídatelnosti, nikoli zpřístupněná jako nastavení za běhu. Tento sekundární
signál s vysokým kontrastem zachovává malé pohyby a změny viditelného textu,
které může porovnání založené pouze na průměru skrýt. Chyby komparátoru nebo
dekodéru vedou k bezpečnému zachování pokrytí. Výstupní metadata rozlišují
extrahované kandidáty, úspěšně použité snímky a vyřazené vizuální duplicity.

Explicitně označená část videa může vyžadovat kontaktní list s časovými značkami.
Most sestaví mřížku JPEG s nejvýše 4 sloupci a 16 snímky. Do každé buňky
o velikosti 512 pixelů je ve spodním vysoce kontrastním pruhu napevno vložena
časová značka zdrojového snímku, přičemž stejné časové značky zůstávají
v textových metadatech pro následné přiřazení a audit. Celý soubor JPEG zůstává
omezen na 32 MiB. Pokud `sharp` nedokáže mřížku dekódovat nebo sestavit, most
přejde zpět k jednotlivým snímkům JPEG; přerušení klientem se přesto přenese
i do operace s kontaktním listem.

Důkazy pro povýšení jsou záměrně odděleny od syntetického mikrobenchmarku
kompozice. `scripts/perf/video-bridge-contact-sheet-eval.ts` definuje A/B
testovací nástroj s verzovaným schématem pro reálné modely počítačového vidění
kompatibilní s OpenAI. Měří počet tokenů hlášený poskytovatelem, koncovou latenci
(měřenou podle skutečného času a zahrnující sestavení kontaktního listu), počet
volání modelu a zachování faktů definovaných manifestem. Nezpracované odpovědi
modelu se do zprávy nezapisují; uchovávají se pouze otisky SHA-256 a ID
odpovídajících faktů. Testovací nástroj neprovede žádné síťové ani placené
volání modelu, pokud není zadán přepínač `--execute-real` a nejsou nakonfigurovány
`--model`, `OMNIROUTE_BASE_URL` a `OMNIROUTE_API_KEY`. Bez takového explicitního
reálného spuštění zůstává jeho strojově čitelný verdikt `HOLD`; samotná syntetická
měření datového obsahu a počtu volání nejsou důkazem pro povýšení.

Volající mohou k podporované části videa připojit volitelné pole
`transcript.cues`, pokud již mají zarovnaný text. Každá položka musí obsahovat
`text`, konečný interval `start`/`end` v rámci zjištěné délky a hodnotu `source`
ze seznamu povolených hodnot (`client`, `embedded` nebo `audio-bridge`);
`confidence` má výchozí hodnotu `1` a musí zůstat mezi `0` a `1`. Přesné
duplicitní položky se slučují. OmniRoute na základě těchto metadat nikdy
nespouští přepis: ověřené položky se zkopírují do popsaného výsledku spolu se
zdrojem, mírou spolehlivosti a intervalem a vykreslí se jako nedůvěryhodná
pozorování vedle titulků snímků. Neplatný text, text mimo rozsah nebo text bez
informace o původu je odmítnut namísto toho, aby byl přimíchán do proudu titulků.
Pole `source` v současnosti deklaruje volající a server je neověřuje: OmniRoute
vynucuje, aby hodnota byla jedním ze tří povolených řetězců, ale zatím
kryptograficky nepotvrzuje, že označení `embedded` nebo `audio-bridge` skutečně
pochází z extrakce vlastněné serverem. Dokud nebude toto ověřování implementováno,
považujte `source` za nedůvěryhodnou nápovědu; nezakládejte na něm autorizační
rozhodnutí.

Pokročilý volající může pro stejné video poskytnout již autorizovanou stopu `audioTranscript`. Vrstva sloučení zpracovává obrazová a zvuková pozorování se společným časovým limitem a signálem přerušení, řadí je na společnou časovou osu, slučuje přesné duplicity a vrací částečný výsledek, pokud uspěje pouze jedna strana. Neplatná hodnota `audioTranscript` vede k tomuto částečnému výsledku — vizuální popis zůstane zachován a zvuková větev zaznamená očištěný kód selhání — namísto selhání celého videa. Dostupnost jednotlivých větví, příznak částečného výsledku a očištěné kódy selhání se zachovávají v popsaném výsledku, v metadatech ochranných pravidel (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), v metadatech mezipaměti výsledků a v čítačích sloučení vrstvy bridge. Výchozí cesta Video Bridge nevyvolává převod řeči na text ani nestahuje druhou kopii média; bez této explicitní stopy zpracovává pouze video.

**Uchovávání přepisu (#12150 P1).** Toto se použije automaticky vždy, když Video Bridge (který je sám volitelný) vykresluje titulek přepisu — samostatný příznak uchovávání neexistuje. Když požadavek vykreslí jakýkoli titulek přepisu (volajícím deklarovaný `transcript` nebo sloučený `audioTranscript`), ochranné pravidlo jej označí jako `videoBridgeObserved` a vytvoří redigovanou stínovou kopii popisu videa — identické vykreslení, ve kterém je volný text každého titulku nahrazen řetězcem `[redacted-video-transcript]`. Tato kopie vzniká nahrazením strukturovaného pole titulku před sestavením řetězce (nikdy analýzou sloučeného textu, takže nemůže přežít žádný obsah titulku — škodlivý ani běžný, včetně textů obsahujících `]`, jako jsou `[inaudible]`/`[music]`). Tělo požadavku uchovávané v protokolu volání nahradí každou textovou část odvozenou z videa touto redigovanou stínovou kopií, spárovanou podle shody obsahu; kotva `fullText` se znovu načte z dokončených dat ochranných pravidel před voláním, takže párování uspěje i poté, co pozdější řetězená ochranná pravidla (maskování osobních údajů a přihlašovacích údajů, priority 10/95) přepíšou text popisu na místě, a poté, co vložení systémové výzvy, předání a paměti změní strukturu pole zpráv. Tělo odeslané upstream modelu zůstává beze změny. Pozorovaný požadavek také nevkládá žádná data do trvalé paměti Memory (extrakce odvozená z požadavku i odpovědi se přeskočí), takže ani vlastní odpověď modelu nemůže zopakovat text přepisu do Memory.

**Nezpracovaná pole videa (#12430).** Když je bridge povolen a nativní podpora videa je neznámá nebo chybí, definovaná pole `transcript`/`audioTranscript` rovněž aktivují `videoBridgeObserved`, a to i po selhání popisu nebo překročení limitu `maxVideos`. Hodnoty `null` a prázdné řetězce se započítávají; chybějící pole a metadata, která se netýkají videa, nikoli. Uchovávané kopie tato pole redigují nebo požadavek vynechají a mezipaměti i Memory se obcházejí. Datová část pro poskytovatele zůstává beze změny.

Další uchovávané kopie používají stejný signál pozorovaného požadavku. Nezpracovaný snímek klientského požadavku před aplikací ochranných pravidel, čekající požadavek v paměti a protokol předčasně odmítnutého požadavku strukturálně nahrazují pole přepisu v částech videa; řetězcové výzvy syntetizované fázemi pipeline a předáním kontextu se redigují v cílovém úložišti těla požadavku. Uchovávaná značka `video_content_removed` způsobí, že pokračování pomocí `previous_response_id` bezpečně selže namísto rekonstrukce textu, který byl záměrně odstraněn. Pokud pozorovaný požadavek před protokolováním ztratí svou redigovanou stínovou kopii pro některou část nebo pokud se byť jen jedna z několika stínových kopií videa po pozdějších změnách požadavku nespáruje, uchovávané tělo požadavku se zcela vynechá, místo aby se uchoval pouze částečně redigovaný přepis.

U pozorovaného požadavku může odpověď modelu citovat libovolnou část přepisu bez strukturované hranice titulku. Její `responseBody` uchovávané v protokolu volání je proto nahrazeno značkou vynechání; podrobný artefakt pipeline (který může obsahovat upstream/klientská těla a bloky streamu) se neuchovává. Mezipaměti sémantiky, idempotence a opakovaného přehrávání uvažování obcházejí čtení i zápis pro tento požadavek. Požadavek pro poskytovatele a odpověď viditelná klientovi zůstávají beze změny. Při vynechání podrobného artefaktu se z dočasné vyrovnávací paměti odstraní dřívější bajty keepalive. Varování Kiro o nesprávně formátovaném EventStream uvádí pouze počet bajtů datové části, nikdy její obsah ani nezpracovanou chybu analyzátoru JSON.
Tím se netvrdí, že byly prověřeny všechny nesouvisející diagnostické výstupy poskytovatelů/pluginů; širší kontrola cílů uchovávání je sledována v #11658.

Interní životní cyklus `/api/modality-bridge/video/drilldown` představuje samostatný mezipaměťový substrát ověřovaný pomocí loopbacku/tokenu. Každá operace rovněž vyžaduje kanonické neprůhledné ID principála. Než bude produkční volající povolen, musí toto ID odvodit z ověřeného tenanta a nikdy nesmí předat hodnotu zvolenou klientem. Klíče mezipaměti vážou tohoto principála ke kanonickým ID relace a odkazu na video, ukládají pouze klíče odvozené pomocí SHA-256 a omezují čtení i mazání na stejného principála. Mezipaměť ukládá nejvýše 16 odvozených snímků JPEG na položku, jejich platnost ukončí po deseti minutách a podporuje omezená čtení pomocí `start`/`end` nebo explicitní odstranění relace.

Každý principál je omezen na 16 položek a 64 MiB kanonických dat JPEG. Tyto limity jsou nezávislé na globálním stropu 64 položek/256 MiB: tlak na kvótu principála nejprve odstraní pouze nejdéle nepoužívané položky daného principála a teprve poté se zvažuje globální odstranění podle LRU. Položky s vypršenou platností se při aktivitě mezipaměti odstraní z účtování principála i globálního účtování, zatímco zrušení a selhání validace nepotvrdí částečnou náhradu.

Mezipaměť odmítá nekanonický Base64, nadbytečné odsazení, média jiná než JPEG, poškozené nebo
neúplné soubory JPEG a soubory JPEG, které během omezeného dekódování celého obrázku pomocí `sharp`
vyvolají varování. Každý přijatý obrázek znovu zakóduje jako kanonický JPEG, odvodí šířku a výšku
z dekódovaných bajtů namísto důvěřování polím volajícího a zahodí veškeré koncové
polyglotní bajty, místo aby je zachovala. Do obou kvót se započítává pouze omezená kanonická
komprimovaná vyrovnávací paměť. Limit přenosu JSON zahrnuje režii Base64 pro strop
dekódovaného vstupu 32 MiB. Každá
uložená derivace zaznamenává svůj ověřený formát a rozlišení JPEG, zásady vzorkování,
verzi derivace, čas vytvoření, serverem vypočtený hash obsahu a hashovaný odkaz na
nadřazený objekt spolu s hashem obsahu nadřazeného objektu od důvěryhodného volajícího. Zrušení se kontroluje
mezi asynchronními fázemi dekódování a hashování před atomickým zápisem do mezipaměti.

Tato část zatím nepřipojuje k trase produkčního producenta a neposkytuje
výběr variant s více rozlišeními. Transparentní cesta požadavku Video Bridge
proto nepřidává žádnou práci, zatímco odvozování principalu vázaného na tenanta a
úplný životní cyklus FU-08 pro více rozlišení zůstávají výslovně následnou prací,
nikoli chováním zdokumentovaným jako dokončené.

Snímky se postupně opatřují popisky pomocí nakonfigurovaného modelu Video. Prázdné
přepsání Video zdědí nastavení Vision; pokud jsou obě prázdná, automatický směrovač
Vision vybere efektivní model podporující obraz. Úspěšné popisky
nahradí původní část stabilním prefixem `[Video description:`, který zároveň
označuje text jako nedůvěryhodné pozorování odvozené z média a sděluje navazujícím
modelům, aby se neřídily pokyny nalezenými v médiu. Klíče mezipaměti popisků snímků
zahrnují bajty JPEG, prompt, časové razítko a efektivní model; do mezipaměti se ukládají pouze
úspěšné popisky. Položky mezipaměti uchovávají skutečný úspěšný producentský model,
včetně záložního modelu; bridge hlásí `mixed`, pokud různé snímky
vytvořily různé modely. Zásah do mezipaměti znovu použije identitu tohoto producenta,
místo aby ji znovu označil jako požadovaný plán směrování. Mezipaměť výsledků
celého videa je klíčována podle každého vstupu, který mění výstup — promptu, efektivního
modelu, zásad vzorkování, počtu snímků, režimu sémantické analýzy, otisku SHA-256
normalizované nápovědy k zaměření, okna zaměření, `transcript`,
`audioTranscript` a příznaku kontaktního archu — takže změna kterékoli z těchto
dimenzí znamená minutí mezipaměti, nikdy opětovné použití zastaralých dat. Verze zásad
vizuální deduplikace, prahová hodnota a omezený počet kandidátních snímků jsou rovněž explicitně uvedeny v
klíči a metadatech mezipaměti výsledků; změna zásad proto nemůže znovu použít zastaralý
popis celého videa. Metadata mezipaměti výsledků v4 uchovávají režim a
otisk, nikdy nezpracovanou uživatelskou úlohu. Metadata guardrailu uvádějí jak
požadovaný, tak efektivní režim analýzy; požadovaný režim `focused` bez
použitelného uživatelského textu je hlášen s efektivním režimem `full`.

Guardrail extrahuje každou podporovanou část videa, ale popíše nejvýše
`modalityBridgeVideoMaxVideos`. Pro cíl, u něhož je prokázáno
`supportsVideo === false`, se neúspěšná videa a videa nad limitem změní na explicitní bezpečné
textové značky, takže nezůstane žádné nezpracované video. Pokud schopnost není známa, zůstávají tyto části
beze změny. Cíle s `supportsVideo === true` bridge obcházejí.
Signál přerušení klientského požadavku se propaguje přes stahování, frontu brokeru,
podprocesy a volání pro generování popisků; přerušení zastaví zpracování mezi videi a nikdy při selhání
nepovolí průchod nezpracovaného média.

Běhová nastavení jsou uložena v DB a validována pomocí Zod:

| Klíč                                | Výchozí hodnota | Rozsah / chování                                                                                       |
| ----------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`         | Volitelný běh, nutné výslovné přihlášení                                                               |
| `modalityBridgeVideoAnalysisMode`   | `"full"`        | `full` zachovává obecné popisky; `focused` používá omezený, nedůvěryhodný kontext posledního uživatele |
| `modalityBridgeVideoModel`          | `""`            | Zdědí model Vision Bridge                                                                              |
| `modalityBridgeVideoFrameCount`     | `8`             | 1–16                                                                                                   |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`     | `uniform`, `scene_aware` nebo proporcionální `segment_aware`; selhání detektoru přejde na `uniform`    |
| `modalityBridgeVideoMaxVideos`      | `1`             | 1–4                                                                                                    |
| `modalityBridgeVideoTimeout`        | `120000`        | 1000–120000 ms                                                                                         |

Starší uložené hodnoty časového limitu Video nad 120 sekund se omezí na
termín brokeru; zápisy nových nastavení nad tento limit jsou odmítnuty.
`GET /api/modality-bridge/video/runtime` před ověřením nebo sondováním běhu vyžaduje důvěryhodnou
orazítkovanou lokálnost loopbacku a následně vyžaduje autentizaci
pro správu. Vrací pouze `available`, sanitizované verze FFmpeg/ffprobe a pevně daný
důvod, pokud běh není dostupný. Interní koncový bod pro extrakci není
veřejné API pro nahrávání: zahlcení fronty vrátí `503` spolu s `Retry-After`, odpojení
volajícího vrátí `499` a pevně daný termín brokeru vrátí `504`. Převedené odpovědi přidávají
`video->text;model=<visionModel>;parts=<videos>` do centrální hlavičky
`x-omniroute-modality-bridge`, aniž by odstraňovaly segmenty Vision nebo Audio.

### Maskování PII (`piiMasker.ts`)

Spouští se v **obou** fázích.

- **`preCall`** naklonuje datovou část, projde `system`, `messages`, `input` a
  `prompt` (včetně položek tvořených prostými řetězci) a aplikuje `processPII()` (z
  `@/shared/utils/inputSanitizer`) na řetězcová pole `content`/`text`. Když je
  `PII_REDACTION_ENABLED=true`, jsou zjištěné osobní údaje v odchozí datové
  části redigovány. Toto chování je nezávislé na `INPUT_SANITIZER_MODE` (který
  řídí pouze zásady pro injekci promptu). Když je redigování vypnuté, volání
  zaznamená počty detekcí bez přepisování obsahu.
- **`postCall`** provede hloubkovou kopii odpovědi a spustí
  `sanitizePIIResponse()` společně s maskovačem pro strukturu Responses API
  (`maskResponsesOutput` — zpracovává `output_text` a
  `output[].content[].text`). Pokud dojde k jakékoli redakci, upravená odpověď
  nahradí původní.

Ochranný mechanismus nikdy neblokuje; pouze přidává anotace
(`meta.detections`, `meta.redacted`) nebo přepisuje obsah.

### Injekce promptu (`promptInjection.ts`)

Detekuje nepřátelské struktury v obsahu dodaném uživatelem a vynucuje
nakonfigurované zásady. Chování je řízeno proměnnými prostředí a možnostmi
konstruktoru:

| Nastavení      | Proměnná prostředí                                                                                     | Výchozí hodnota | Účinek                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------------------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Povoleno       | `INPUT_SANITIZER_ENABLED`                                                                              | `true`          | Při hodnotě `false` se ochranný mechanismus okamžitě ukončí.                                                                                                                                           |
| Režim          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`          | Zásady pro injekci: `block`, `warn` nebo `log`. (`redact` je přijímáno kvůli zpětné kompatibilitě, ale **neodstraňuje** text injekce; přepis osobních údajů v požadavku řídí `PII_REDACTION_ENABLED`.) |
| Práh blokování | možnost `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`          | Minimální závažnost nutná k zablokování. Při výchozím nastavení slouží střední závažnost pouze k pozorování.                                                                                           |

**Priorita režimů** (`getMode`): `options.mode` volajícího →
**přepsání příznakem funkce v databázi** pro `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → proměnná prostředí `INJECTION_GUARD_MODE` → proměnná prostředí
`INPUT_SANITIZER_MODE` → `warn`. Přepsání z řídicího panelu má tedy přednost
před proměnnými prostředí, takže uživatelské rozhraní Feature Flags řídí běžící
ochranný mechanismus za provozu (bez restartu). Čtení z databáze je zabezpečené
pro případ selhání: pokud skončí chybou, ochranný mechanismus se vrátí k chování
založenému na proměnných prostředí, a pokud není nastaveno žádné přepsání,
chování je totožné s vyhodnocením pouze podle proměnných prostředí.

Zdroje detekce:

1. `sanitizeRequest()` z `@/shared/utils/inputSanitizer` (sdílená sada
   detektorů používaná i na jiných místech zpracovatelského řetězce).
2. Vestavěné `DEFAULT_GUARD_PATTERNS` (aktuálně `system_override_inline` a
   `markdown_system_block`, oba se závažností `high`).
3. Volitelné `customPatterns` předané prostřednictvím možností konstruktoru
   (řetězce, regulární výrazy nebo záznamy `{ name, pattern, severity }`).

Když platí `mode === "block"` **a** alespoň jedna detekce dosahuje prahu
závažnosti, `preCall` vrátí `{ block: true, message: "Požadavek odmítnut:
zjištěn podezřelý obsah" }`. V režimech `warn`/`log` ochranný mechanismus
zapisuje do protokolu, ale volání povolí. Sdílená pomocná funkce
`evaluatePromptInjection()` je také exportována pro volající, kteří potřebují
vyhodnocovat prompty bez použití registru.

**Omezení kontroly (v3.8.20):** detektor kontroluje pouze **prvních 16 KB**
spojeného textu promptu — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtů)
v `src/shared/utils/inputSanitizer.ts`. Jak `detectInjection()`, tak
`evaluatePromptInjection()` volají před spuštěním smyčky vzorů
`slice(0, MAX_INJECTION_SCAN_BYTES)`. Direktivy injekce se nacházejí poblíž
začátku vstupu, takže toto omezuje spotřebu CPU/GC regulárními výrazy u datových
částí o velikosti stovek KB, aniž by se oslabila detekce (viz #3932, #4041).

### Maskovač přihlašovacích údajů (`credentialMasker.ts`)

Spouští se v **obou** fázích jako poslední ve výchozím řetězci (priorita `95`).
Rediguje dobře známé vzory klíčů API / tajných tokenů z odchozí datové části
(obsahu zpráv, argumentů volání nástrojů a výsledků nástrojů) **a** z odpovědi
poskytovatele, takže přihlašovací údaj vložený do promptu (nebo vrácený ve
výsledku nástroje) neunikne poskytovateli služby ani zpět klientovi.

- **Pouze po výslovném zapnutí**, podle stejné konvence jako redakce PII (souvisí s pevným pravidlem č. 20):
  ve výchozím nastavení je vypnuto, pokud neplatí `settings.credentialRedactionEnabled === true` **nebo**
  `CREDENTIAL_REDACTION_ENABLED=true`. Pokud je funkce vypnutá, ochranné pravidlo nic nedělá —
  nikdy neblokuje ani nepřepisuje.
- `redactCredentials()` prochází celý strom dat/odpovědi (`walkValue()`,
  bezpečně vůči prototype pollution a cyklům díky `WeakSet`) a nahrazuje nalezené shody
  zástupným symbolem `[REDACTED:<type>]`, přičemž klonuje pouze větve, které se
  skutečně změnily.
- `CREDENTIAL_PATTERNS` pokrývá klíče poskytovatelů LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokeny VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), platební klíče (Stripe, Square), cloudové
  klíče (přístupový klíč AWS, Twilio, SendGrid, Mailgun), soukromé klíče / JWT,
  připojovací řetězce obsahující přihlašovací údaje (`mongodb://user:pass@...` atd.) a
  obecný vzor hodnot hlaviček `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Klíče ve tvaru hlaviček (`authorization`, `x-api-key`, `api-key`,
  `apikey`) jsou redigovány strukturálně (pouze hodnota, prefix schématu jako
  `Bearer `/`Basic ` zůstává zachován), nikoli pomocí obecného textového regulárního výrazu.
- Ochranné pravidlo nikdy neblokuje; pouze přepisuje (`modifiedPayload` /
  `modifiedResponse`) a přidává anotace (`meta.credentialsRedacted`, `meta.count`).

Ochrana proti regresím: `tests/unit/credential-masker-guardrail.test.ts`.

## Základní kontrakt (`base.ts`)

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
  block?: boolean; // true zkrátí vyhodnocování řetězce
  message?: string; // zobrazí se při zablokování
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vráceno metodou preCall pro přepsání požadavku
  modifiedResponse?: TValue; // vráceno metodou postCall pro přepsání odpovědi
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

Ochranné pravidlo signalizuje „žádnou změnu“ vrácením hodnoty `void`, `{}` nebo
`{ block: false }`. Vrácení `modifiedPayload`/`modifiedResponse` nahradí
hodnotu procházející řetězcem pro následná ochranná pravidla.
`signal?: AbortSignal` přenáší životní cyklus volajícího do ochranných pravidel. Přerušení požadavku je záměrnou výjimkou z režimu fail-open: mediální převodníky ukončí práci a provedou úklid, aniž by obnovily nezpracovaná média pro cíl, o kterém je známo, že je nepodporuje.

## Registr (`registry.ts`)

Singleton `guardrailRegistry` poskytuje:

- `register(guardrail)` — přidá ochranné pravidlo (nebo je nahradí podle normalizovaného názvu) a
  znovu seřadí pravidla vzestupně podle `priority`.
- `clear()` / `list()` — pomocné administrativní funkce.
- `runPreCallHooks(payload, context)` — prochází aktivní ochranná pravidla, předává
  payload prostřednictvím `modifiedPayload` a zastaví se při prvním `block: true`.
- `runPostCallHooks(response, context)` — stejný postup na straně odpovědi.
- `resetGuardrailsForTests({ registerDefaults })` — vymaže stav a volitelně
  znovu zaregistruje výchozí pravidla pro čistou izolaci testů.

Oba spouštěče vracejí `{ blocked, payload|response, results, guardrail?, message? }`,
kde `results` je pole záznamů `GuardrailExecutionResult`, které obsahují
pro jednotlivá ochranná pravidla pole `blocked`, `skipped`, `modified`, `error` a `meta`,
užitečná pro trasování.

### Zakázání ochranných pravidel pro jednotlivé požadavky

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` shromažďuje
deduplikovaný seznam názvů ochranných pravidel, která mají být pro aktuální
požadavek přeskočena. Zdroje (všechny jsou volitelné a všechny se slučují):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` v těle požadavku (na nejvyšší úrovni)
- `metadata.disabledGuardrails` v těle požadavku
- Hlavička `x-omniroute-disabled-guardrails` (nebo starší
  `x-disabled-guardrails`)

Hodnoty mohou být pole řetězců nebo řetězec oddělený čárkami; názvy jsou
normalizovány na malá písmena ve formátu kebab-case (`pii_masker` → `pii-masker`). Výsledek
je předán registru prostřednictvím `context.disabledGuardrails`, který přeskočí
odpovídající ochranná pravidla (`skipped: true` v `results`).

## Pořadí zpracování

Pro každý požadavek procházející přes `src/sse/handlers/chat.ts` a
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` sestaví seznam vynechaných ochranných mechanismů z klíče API, těla požadavku
   a hlaviček.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` spustí ochranné mechanismy ve vzestupném
   pořadí priorit:
   - Zakázané ochranné mechanismy se zaznamenají jako `skipped`.
   - Metoda `preCall` každého ochranného mechanismu může přepsat datovou část pomocí `modifiedPayload`.
   - První výskyt `block: true` okamžitě ukončí řetězec a obslužná rutina vrátí
     odpověď o zamítnutí ochranným mechanismem.
3. (Případně přepsaná) datová část pokračuje do kombinovaného směrování a odeslání
   nadřazené službě.
4. Po sestavení odpovědi spustí `guardrailRegistry.runPostCallHooks(...)`
   stejný řetězec nad odpovědí. Hodnota `block: true` v této fázi zahodí odpověď
   nadřazené služby.

Ochranné mechanismy, které vyvolají výjimku, se zaznamenají s `error: <message>` a zaprotokolují prostřednictvím
`logger.warn`, ale řetězec pokračuje — záměrně tedy funguje v režimu fail-open.

## Konfigurace

Proměnné prostředí načítané vestavěnými ochrannými mechanismy:

| Proměnná                              | Používá ji                | Účinek                                                                                                        |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Nastavením na `false` se detekce zcela zakáže.                                                                |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Zásady pro injekce: `warn`, `block` nebo `log`. Zastaralá hodnota `redact` text injekce nepřepisuje.          |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Režim ochrany proti injekcím; zároveň příznak funkce v DB, který **přepisuje** proměnné prostředí (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Minimální závažnost, kterou `MODE=block` odmítne: `high` (výchozí), `medium` nebo `low`.                      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Zastaralý alias pro `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                        |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Je-li nastaveno na `true`, údaje PII v požadavku se začerní (nezávisle na režimu injekcí).                    |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (na výstupu) | Řídí chování maskování na straně odpovědi.                                                                    |

Ochranné mechanismy Modality Bridge načítají běhovou konfiguraci z úložiště nastavení
založeného na DB (`getSettings()`), nikoli z proměnných prostředí. Primární klíče pro obraz jsou
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` a
`modalityBridgeCacheMaxEntries`. Zastaralé klíče
`visionBridge*` jsou přijímány pouze jako zdokumentovaný záložní zdroj pro čtení během jednoho cyklu;
zápisy z řídicího panelu používají primární klíče. Výchozí hodnoty a záložní
resolver se nacházejí v `src/shared/constants/modalityBridgeDefaults.ts`, přičemž zastaralé
konstanty zůstávají zachovány v `src/shared/constants/visionBridgeDefaults.ts`.

Zvuk používá `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` a `modalityBridgeAudioMaxClips` společně se sdílenými
nastaveními `modalityBridgeCache*`. Zvuk nemá záložní podporu zastaralých klíčů, protože tyto
klíče byly zavedeny se schématem Modality Bridge.

Video používá `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` a
`modalityBridgeVideoTimeout` společně se sdílenými nastaveními `modalityBridgeCache*`.
Ve výchozím nastavení je zakázáno, protože FFmpeg/ffprobe jsou volitelné provozní
závislosti a popisování snímků zvyšuje latenci a náklady na model.

## Vlastní guardraily

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

Postup:

1. Vytvořte `src/lib/guardrails/myGuardrail.ts`, který rozšiřuje `BaseGuardrail`.
2. Implementujte `preCall` a/nebo `postCall`.
3. Buď jej zaregistrujte při importu (přidáním z `registerDefaultGuardrails`), nebo
   za běhu zavolejte `guardrailRegistry.register(...)` — registr nahradí
   jakýkoli dřívější guardrail se stejným normalizovaným názvem.
4. Přidejte testy do `tests/unit/` (existující příklady:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testování

Mezi testy použijte `resetGuardrailsForTests()`, abyste vždy začínali ze známého stavu.
Předejte `{ registerDefaults: false }`, chcete-li začít s prázdným registrem a
zaregistrovat pouze testované guardraily. Vision Bridge podporuje vkládání závislostí
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge zpřístupňuje ekvivalentní
rozhraní pro nastavení, schopnosti, výběr modelu STT, kontrolu přihlašovacích údajů
a přepis. Testy tak mohou ověřovat oba toky bez přístupu k databázi nebo síti.

## Viz také

- `src/lib/guardrails/` — implementace
- `src/shared/utils/inputSanitizer.ts` — sdílený detektor zajišťující
  detekci prompt injection a maskování PII
- `src/shared/constants/visionBridgeDefaults.ts` — výchozí hodnoty Vision Bridge a
  seznam modelů s vynuceným přemostěním
- `src/shared/constants/modalityBridgeDefaults.ts` — sdílené výchozí hodnoty běhového prostředí Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonální vrstva (circuit breaker, intervaly zklidnění)
- `docs/reference/ENVIRONMENT.md` — úplný přehled proměnných prostředí

## Pokrytí tras ochranou proti injection a red-team testování (Fáze 8 · Blok D)

Ochrana proti injection (`createInjectionGuard` / `withInjectionGuard`) pokrývá všechny trasy,
které přijímají uživatelské prompty. Respektuje `INJECTION_GUARD_MODE` (výchozí `warn` = pouze protokolování;
`block` = vrátí HTTP 400 `SECURITY_001`).

| Typ              | Trasy                                                                                                                                                | Výchozí režim |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Text (stávající) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generativní      | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Data             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Extrakce textu (`extractMessageContents`) pokrývá `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testování (každou noc, `nightly-llm-security.yml`):** promptfoo ověřuje, že každá trasa blokuje
korpus OWASP-LLM v režimu `INJECTION_GUARD_MODE=block`; garak spouští sondy (bez tajného klíče se přeskočí).
`moderations` je zahrnuto kvůli konzistenci — provozovatelé jej mohou v režimu blokování vyjmout pomocí
`resolveDisabledGuardrails`.

Noční pracovní postup (`.github/workflows/nightly-llm-security.yml`, cron + ruční
spuštění) obsahuje dvě úlohy:

- **`promptfoo-guard` (blokující)** — spouští `promptfoo eval -c promptfooconfig.yaml`
  s `INJECTION_GUARD_MODE=block`. Každý nepřátelský případ (např. „ignoruj všechny
  předchozí instrukce…“, jailbreaky ve stylu DAN) ověřuje, že odpověď obsahuje
  `error.code === "SECURITY_001"`, tj. že ochrana požadavek skutečně odmítla.
- **`garak` (informativní)** — spouští garak `--probes promptinject,dan,leakreplay`
  proti lokální instanci OmniRoute (`http://localhost:20128/v1`). Je podmíněna
  tajným klíčem poskytovatele (`PROMPTFOO_PROVIDER_KEY`); pokud není k dispozici, korektně se přeskočí a je doplněna
  o `|| true`, takže podá hlášení, aniž by způsobila selhání CI.

Pokrytí pomocné funkce ochrany (`createInjectionGuard` / `withInjectionGuard`)
zahrnuje každou trasu `/v1` přijímající prompt; text promptu se získává z
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomocí
`extractMessageContents()` v `src/shared/utils/inputSanitizer.ts`.
