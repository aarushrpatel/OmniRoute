# Guardrails (Gaeilge)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Foinse na fírinne:** `src/lib/guardrails/`
> **Nuashonraithe is déanaí:** 2026-08-29 — v3.8.51 (Is é an glaoiteoir a dhearbhaíonn bunús thras-scríbhinn Video Bridge,
> níl sé fíoraithe ag an bhfreastalaí fós — soiléirithe de réir #11661)

Forfheidhmíonn ráillí cosanta sábháilteacht, polasaí, agus claochluithe ábhair ag an teorainn idir OmniRoute agus soláthraithe in aghaidh an tsrutha. Is féidir le gach ráille cosanta pálastaí iarratais (`preCall`) agus freagraí in aghaidh an tsrutha (`postCall`) a iniúchadh (agus, de rogha air sin, diúltú dóibh, iad a chlaochlú, nó nótaí a chur leo).

Is córas **teip-oscailte** é: má chaitheann ráille cosanta earráid le linn forghníomhaithe, déanann an chlárlann an earráid a thaifeadadh agus leanann sí ar aghaidh leis an gcéad ráille cosanta eile in ionad teip a chur ar an iarratas. Is cinneadh sainráite é blocáil (`block: true`), ní tharlaíonn sé de thaisme riamh.

## Ráillí Cosanta Insuite

Uaslódálann an chlárlann sé ráille cosanta go huathoibríoch in ord tosaíochta tráth iompórtála
(féach `registry.ts` → `registerDefaultGuardrails()`):

| Tosaíocht | Ainm                | Céim(eanna)    | Comhad                |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Ritear uimhreacha tosaíochta níos ísle **ar dtús**.

### Droichead Amhairc (`visionBridge.ts`) — Droichead Módúlachta PR-1

Idircheapann sé iarratais ina bhfuil íomhánna atá dírithe ar **mhúnlaí gan cumas amhairc** agus déanann sé an t-iarratas iomlán a athródú chuig múnla a bhfuil cumas amhairc aige, nó cuireann sé tuairiscí téacs arna dtáirgeadh ag múnla amhairc inchumraithe in ionad na gcodanna íomhá roimh an nglao réamhtheachtach. Ligeann sé seo do sholáthraithe téacs-amháin pálastaí ilmhódacha a láimhseáil go trédhearcach.

Sreabhadh:

1. Scipeáil má thacaíonn an spriocmhúnla le hamharc cheana féin (mura bhfuil sé ar an liosta droichid éigeantaigh `isVisionBridgeForcedModel`).
2. Asbhain codanna íomhá trí `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), a tharmligeann chuig an **mbraiteoir meán aontaithe**
   `detectMediaParts()` in `open-sse/utils/mediaParts.ts` — an t-aon fhoinse
   fhírinne a roinntear leis an scagaire comhoiriúnachta teaglama.
   Tá an asbhaint teoranta do liosta ceadaithe de chodanna barrleibhéil ar féidir
   le `replaceImageParts` iad a chur ar ais ina n-áit (an conradh asbhainte↔athsholáthair): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"`, agus Responses API `input_image`. Is ábhar don scagaire
   teaglama iad amas neadaithe agus cruthanna táscaire-amháin agus ní asbhaintear riamh iad.
   Scipeáil mura bhfaightear aon cheann.
3. Réitigh cumraíocht ama rite trí `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): bíonn an bua ag na heochracha socruithe nua `modalityBridge*`;
   fanann na heochracha oidhreachta `visionBridge*` mar **chúltaca aon timthrialla**
   (fuinneog aischurtha). Scipeáil roimh aon trasnú meán nuair atá an droichead díchumasaithe.
4. Cinneann an roghnóir móid (`modalityBridgeVisionMode`, féach an tábla thíos)
   idir athródú agus tuairisciú. Filleann athródú `modifiedPayload` gan ach `model`
   malartaithe, chomh maith le meiteashonraí `{ rerouted, fromModel, toModel, imagesKept }`.
5. Conair tuairiscithe: teorannaigh íomhánna go `maxImages`, cum an leid atá feasach ar an tasc,
   ceadaigh an taisce tuairiscithe, glaoigh ar an múnla amhairc **go comhthreomhar**
   (`Promise.allSettled`), agus insteall codanna téacs `[Image N]: <description>` ina
   n-áit. Má theipeann ar thuairisciú, faightear `null` agus **caomhnaítear**
   an bhunchuid íomhá (#4012) — seachas ar chonair tuairiscithe an teaglama nuair a
   theip ar gach tuairisciú, áit a bhfaigheann réamhtheachtaí deimhnithe gan cumas amhairc
   ionadchoinneálaí `(unavailable — no vision-capable provider connected)` ina ionad (#8430).
6. Fill `modifiedPayload` + meiteashonraí (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Roghnóir móid (`modalityBridgeVisionMode`)

| Mód        | Réamhshocrú | Iompar                                                                                                                                                                                                                                                                                                                           |
| ---------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔           | Heorastúil oidhreachta, gan athrú (#6640/#7204): athródaíonn múnlaí neamh-theaglama/`auto/` chuig an múnla amhairc is fearr mura bhfuil dintiúir inúsáidte ag an mbunmhúnla cheana féin (sa chás sin déantar tuairisciú); déanann spriocanna teaglama tuairisciú i gcónaí.                                                       |
| `describe` |             | Déan tuairisciú i gcónaí — scipeáiltear an bloc athródaithe go hiomlán; freagraíonn múnla roghnaithe an úsáideora i gcónaí.                                                                                                                                                                                                      |
| `reroute`  |             | Cuir athródú i bhfeidhm: seachnaítear an chosaint a choinníonn an múnla a bhfuil dintiúir aige. Tá cosaint dintiúr na **sprice** athródaithe fós i bhfeidhm — nuair nach ann do sprioc amhairc inúsáidte, téann an t-iarratas ar aghaidh chuig tuairisciú ionas nach sroicheann íomhánna amh inneall téacs-amháin riamh (#8430). |

Déanann móid éigeantacha gearrchiorcadú **sula** ritear an heorastúil uathoibríoch; tá iompar `auto`
comhionann beart ar bheart leis an ráille cosanta roimh PR-1.

#### Scóip eochrach API (`visionBridgeKeyScope.ts`)

Nuair a chuireann eochair API an ghlaoiteora srian ar `allowedConnections`, linnte cuóta
(`allowedQuotas`) nó múnlaí (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), ní roghnaíonn an droichead
ach múnlaí athródaithe agus tuairiscithe a bhfuil cead ag an eochair iad a úsáid, ar naisc a bhfuil cead ag an eochair
iad a úsáid. Ansin téann an glao tuairiscithe tríd an bhféinlúb OmniRoute i gcónaí leis
an gceanntásc `x-omniroute-self-loop-key-id`, ionas go gcuireann an t-iarratas comhrá glactha
beartas na heochrach sin maidir le naisc agus múnlaí i bhfeidhm arís. Ní thugann `enforceApiKeyPolicy()`
aitheantas don cheanntásc sin ach amháin in éineacht le hiompróir na féinlúibe, mar sin ní féidir leis
ach rochtain a chúngú, agus diúltaítear d'aitheantas nach féidir a réiteach.

Mura gceadaítear aon mhúnla amhairc don eochair, seasann an chonair tuairiscithe i leataobh agus
téann an t-iarratas ar aghaidh gan athrú, an t-iompar teip-oscailte céanna agus a bhíonn ag ráille cosanta díchumasaithe
(meiteashonraí `{ skipped: true, reason: "no_permitted_vision_model" }`).
Iompraíonn iarratais gan eochair, agus eochracha gan na srianta seo, díreach mar a rinne siad
roimhe seo.

#### Leid tuairiscithe atá feasach ar an tasc (`modalityBridgeVisionTaskAware`)

Réamhshocrú **true**. Cuireann `composeVisionPrompt()` (`visionBridgeHelpers.ts`) téacs na **teachtaireachta úsáideora deireanaí** (teasctha go 500 carachtar) leis an mbunleid tuairiscithe, rud a stiúrann an tuairisc i dtreo an mhéid a d’iarr an t-úsáideoir i ndáiríre (patrún codex-vision-proxy) agus a iarrann ar an tsamhail amhairc téacs infheicthe a thras-scríobh. Agus an bhratach múchta — nó mura bhfuil téacs úsáideora ann — úsáidtear an bhunleid gan athrú.

Iarrann iarratas OpenAI-chomhoiriúnach lúb féin an tuairiscithe féin (`callVisionModelSingle()`
in `visionBridgeHelpers.ts`) `image_url.detail: "high"` i gcónaí —
gan choinníoll, do gach glaoiteoir/soláthraí, gan é a bheith faoi réir aon chomhartha ón gcliant.
Díghrádaíonn sampláil íseal-sonraí cruinneas OCR don tasc tras-scríofa téacs go díreach
a iarrann an leid seo, mar sin iarrann an glao tuairiscithe féin ardleibhéal sonraí i gcónaí
beag beann ar an leibhéal sonraí a d’úsáid an t-iarratas bunaidh isteach. Ní dhéanann sé seo
difear ach do chorp inmheánach an iarratais tuairiscithe; ní athraíonn sé an chaoi a
gcuireann OmniRoute `image_url.detail` an ghlaoiteora féin ar aghaidh sa phríomhiarratas —
cuirtear an réamhshocrú sin i bhfeidhm ar leithligh, agus do chliaint OpenCode braite amháin, in
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Níl aon réimse `detail`
ag an mbrainse formáide sreinge Anthropic de lúb féin an tuairiscithe agus ní dhéanann ceachtar
réamhshocrú difear dó.

#### Uasteorainn aschuir an tuairiscithe (`modalityBridgeVisionMaxChars`)

| Eochair                        | Réamhshocrú | Raon             |
| ------------------------------ | ----------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`         | `0` nó 100–50000 |

Ciallaíonn `0` (réamhshocrú) **gan uasteorainn** — cuirtear an tuairisc a fhilleann
`callVisionModel()` ar aghaidh gan mhodhnú, rud a chaomhnaíonn an t-iompar reatha.
Teascann aon luach sa raon 100–50000 an tuairisc le hiarmhír
`…` sula gcuirtear ar ais í mar `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` in `src/lib/guardrails/visionBridge.ts`).
Ardaigh é seo do thascanna OCR atá trom ar mhionsonraí nuair a bhíonn an tras-scríbhinn
iomlán de dhíth ar an tsamhail iartheachtach; ísligh é chun teorainn a chur le húsáid comharthaí
ar shamhlacha amhairc briosca. Tá réimse an deais ar phainéal Advanced den chluaisín Vision
(`modality-bridge-max-chars` in `ModalityBridgeVisionTab.tsx`) agus teannann sé aon
luach idir 1 agus 99 suas go híosluach 100 agus fágtar `0` follasach
gan athrú — is luach bailí Zod ann féin é `0`
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ní hé amháin
an réamhshocrú "gan socrú".

#### Taisce tuairiscithe (`modalityBridge/bridgeCache.ts`)

Taisce LRU + TTL sa chuimhne d’aschuir tuairiscithe, roinnte ar fud an phróisis.
Eochair = `sha256(imageRef + composedPrompt + configuredBridgeModel)` le
frámú réimíre faid (gan imbhuailtí ag teorainneacha réimsí). Is í an chomhpháirt samhla
an tsamhail droichid **chumraithe**, ní an tsamhail a d’fhreagair i ndáiríre —
d’fhéadfadh `callVisionModel` titim siar go hinmheánach, agus scoilteadh eochrú de réir iarrachta
an taisce. Ní chuirtear tuairiscithe ar theip orthu sa taisce riamh. Socruithe:

| Eochair                         | Réamhshocrú | Raon    |
| ------------------------------- | ----------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`      | —       |
| `modalityBridgeCacheTtlMinutes` | `60`        | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`       | 10–5000 |

#### Normalú cianíomhánna (tuairisciú féinlúibe/aisghabháil base64)

Nuair a aisghabhann an droichead íomhá **chianda** é féin — féinghlao tuairiscithe
Anthropic agus tiontú base64 i bhformáid sreinge claude
(`ensureBase64ImagesForClaudeWire`), iad araon trí
`fetchRemoteImageAsDataUri()` in `visionBridgeHelpers.ts` — cuirtear URI na sonraí a bhíonn mar thoradh air
trí `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) sula leabaítear é san iarratas ar an tsamhail amhairc.
Laghdaítear íomhánna rómhóra go **ciumhais fhada 2048px** (ag teacht leis
an uasteorainn athmhéadaithe a chuireann OpenAI/Anthropic i bhfeidhm ar thaobh an fhreastalaí cheana féin), rud a laghdaíonn
bearta/foighne uaslódála gan an méid a fheiceann an tsamhail amhairc a athrú. Úsáideann an t-athrú méide
`sharp`, arna luchtú trí iompórtáil dhinimiciúil: ar ardán nach n-éiríonn lena
dhénártha dúchasach luchtú, ní chaitheann `normalizeDataUri()` eisceacht **riamh** — titeann sé siar
go dtí na bearta bunaidh a chur ar aghaidh gan athrú, ionas go leanann an chonair tuairiscithe/tiontaithe-base64
de bheith ag obair i gcónaí. Cuirtear bearta nach íomhánna iad (aisghabháil nár fhill íomhá
indíchódaithe) ar aghaidh gan teagmháil leo freisin. Tá an normalú seo teoranta
d’íomhánna a aisghabhann an droichead dá fhéinghlao féin — ní chuirtear i bhfeidhm riamh é
ar phálasta amh an ghlaoiteora a chuirtear ar aghaidh, i gcomhréir le prionsabal na sóchán
roghnach amháin (Riail Dhocht #20).

#### Scéimre socruithe + imirce

Déantar na heochracha nua `modalityBridge*` a bhailíochtú le Zod in `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, an triúr `modalityBridgeCache*`, agus an
grúpa `modalityBridgeAudio*` a úsáideann an Droichead Fuaime. Cóipeálann an imirce
`141_modality_bridge_settings.sql` luachanna oidhreachta `visionBridge*`
atá ann cheana chuig na heochracha nua comhoiriúnacha (idempotach, ní fhorscríobhann sí riamh
luach `modalityBridge*` atá socraithe ag oibreoir); glactar leis na heochracha oidhreachta fós mar
chúltaca léite ar feadh timthriall eisiúna amháin.

#### Ceanntásc trédhearcachta + staitisticí

Bíonn an méid seo a leanas i bhfreagraí arna gclaochlú trí thuairisciú:
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(tógtha ag `buildModalityBridgeHeader()` in `modalityBridge/bridgeStats.ts`,
stampáilte ag `withModalityBridgeHeader()` in `src/sse/handlers/chatHelpers.ts`).
Ní fhaigheann iarratais athródaithe ceanntásc ar bith — níor athraíodh an pálasta agus tá malartú na samhla
le feiceáil cheana féin i réimse `model` chorp an fhreagra.

Faoi fhíordheimhniú bainistíochta, ar an leibhéal céanna le
`GET /api/settings`, filleann `GET /api/modality-bridge/stats` na cuntair
in-chuimhne de réir módúlachta
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` le haghaidh `vision`, `audio`, agus
`video`. Úsáideann `averageLatencyMs` `latencySamples`, seachas gach iarracht, mar
ainmneoir; ní chruthaíonn oibríocht gan tomhas ama sampla bréige de náid
milleasoicind. Fanann `bridged` mar an ailias comhoiriúnach siar le haghaidh
tiontuithe rathúla; ní mhéadaíonn iarrachtaí teipthe é.
Athshocraítear na cuntair nuair a atosaítear an próiseas de réir dearaidh
(teiliméadracht, ní cuntasaíocht).

#### Cumraíocht an deais

Is é
`/dashboard/settings/modality-bridge` leathanach tiomnaithe an deais. Caomhnaíonn
a chluaisíní `Vision`, `Audio`, agus `Video`, ar féidir aghaidh a thabhairt orthu
le URL, paraiméadair iarratais agus luach `tab` á athrú. Nochtann an cluaisín
Vision cumasú, mód, roghnú samhla (lena n-áirítear an réamhshocrú uathoibríoch),
leid atá feasach ar thascanna, ardteorainneacha ama/íomhá/fhaid tuairisce/taisce,
cuntair am rite, agus iarratas samplach faoi chosaint. Tá an cluaisín Audio beo
freisin: nochtann sé cumasú, roghnóir samhla STT amháin le Auto, teorainneacha
ama/uasmhéid gearrthóige, cuntair fuaime, agus tástáil shamplach `input_audio`.
Tá an cluaisín Video feidhmiúil: tuairiscíonn sé staid am rite FFmpeg/ffprobe —
ceann de cheithre staid chomhéadain shoiléire (`unknown` fad atá an tóireadóir
ar bun nó murarbh fhéidir é a chur i gcrích, `restricted` ar óstach deaise nach
óstach lúb siar é, áit a scipeáiltear an tóireadóir ar thaobh an chliaint,
`unavailable` tar éis tóraíocht a dhéanamh agus a dheimhniú go bhfuil sé ar
iarraidh, nó `available` le leaganacha FFmpeg/ffprobe) — buanchoimeádann sé
teorainneacha cumasaithe/samhla/fráma/físe/ama, scagann sé an roghnóir samhla
chuig samhlacha atá in ann fís a láimhseáil, agus nochtann sé cuntair físe.

Is nasc comhoiriúnachta chuig an leathanach nua é an seanchárta Vision Bridge
faoi shocruithe IS; níl an dara cóip den fhoirm aige a thuilleadh. Nascann Media
Providers sreafaí oibre Image-to-Text agus Speech-to-Text leis na cluaisíní
comhfhreagracha Modality Bridge freisin gan an clós súgartha Speech-to-Text atá
ann cheana a bhaint.

**Seachaint iontrála don lúb féin:** nuair a théann an glao tuairiscithe trí lúb
féin `/v1` OmniRoute (samhail soláthraí neamhchaighdeánach), seolann an
fo-iarratas `x-omniroute-admission-bypass: internal` agus déantar é a fhíordheimhniú
leis an dintiúr réitithe don lúb féin — an comhartha áitiúil `sk_omniroute` sa
mhód áitiúil, nó an eochair timpeallachta `OMNIROUTE_API_KEY` /
`ROUTER_API_KEY` arna cumrú ag an oibreoir (#1350), ionas gur féidir le himscaradh
`REQUIRE_API_KEY=true` an glao tuairiscithe a rith fós. Ní aithnítear an
tseachaint ach do na dintiúir bheachta sin, mar sin ní féidir le cliaint
sheachtracha an ceanntásc a úsáid chun iontráil a sheachaint.

Tá na réamhshocruithe oidhreachta in
`src/shared/constants/visionBridgeDefaults.ts`; tá na réamhshocruithe nua don
mhód/d'fheasacht ar thascanna/don taisce agus an réiteoir socruithe in
`src/shared/constants/modalityBridgeDefaults.ts`. Nochtann an ráille cosanta
rogha tógálaí `deps` ionas gur féidir le tástálacha feidhmiúcháin bhréige
`getSettings` agus `callVisionModel` a instealladh.

### Droichead Fuaime (`audioBridge.ts`) — Modality Bridge PR-3

Idircheapann sé iarratais chomhrá ina bhfuil fuaim sula sroicheann siad sprioc
nach eol go nglacann sí le hionchur fuaime. Ní athródaíonn sé an t-iarratas
comhrá choíche: déantar páirteanna fuaime a thras-scríobh tríd an gcríochphointe
ilpháirteach reatha atá comhoiriúnach le OpenAI agus leanann an tsamhail chomhrá
roghnaithe ar aghaidh le tras-scríbhinní téacs.

Sreabhadh:

1. Réitigh `supportsAudio` trí `getResolvedModelCapabilities()`. Bíonn tosaíocht
   ag meiteashonraí follasacha ó chlárlann an tsoláthraí, ansin meiteashonraí
   statacha na samhla, agus ansin `modalities_input` sioncronaithe. Is `false` é
   liosta ionchuir dearbhaithe gan `audio`; mura bhfuil aon fhianaise chumais ann,
   fanann sé mar `null`. Gníomhaíonn `false` agus `null` araon an droichead
   coimeádach, agus seachnaíonn `true` é.
2. Réitigh socruithe `modalityBridgeAudio*` agus bain páirteanna fuaime
   barrleibhéil in-insplíosa as gach teachtaireacht tríd an mbrathadóir
   comhroinnte `detectMediaParts()`. Is iad na cruthanna sreinge a dtacaítear leo
   ná `input_audio` agus `audio_url` OpenAI, agus
   `source.media_type: "audio/*"`. Braitear fuaim neadaithe don ródú ach ní
   bhaintear í tríd an gconair splíosa. Cuirtear teorainn leis an obair le
   `modalityBridgeAudioMaxClips`; fágtar páirteanna níos déanaí gan athrú.
3. Cloígh le `provider/model` cumraithe, nó lig do
   `selectAudioBridgeModel()` siúl trí `AUDIO_TRANSCRIPTION_PROVIDERS` in ord
   cobhsaí na catalóige agus an chéad samhail a roghnú a bhfuil dintiúr soláthraí
   gníomhach inúsáidte aici.
4. Tiontaíonn `callAudioTranscription()` fuaim base64/URI sonraí ina `file`
   ilpháirteach, nó íoslódálann sé `audio_url` cianda tríd an gcosantóir amach
   poiblí amháin le feannadh DNS agus teorainn 25 MB. Ansin POSTálann sé an comhad
   agus an tsamhail roghnaithe chuig an lúb féin áitiúil
   `/v1/audio/transcriptions`, arna fhíordheimhniú le
   `resolveSelfLoopBearer()`. Déanann an bealach tras-scríofa reatha
   gnáthchuardach dintiúr, láimhseáil tréimhse shuaimhnithe/teorannaithe ráta,
   agus seoladh chuig an soláthraí.
5. Cuirtear `[Audio N]: <transcript>` in ionad na bpáirteanna i gcás glaonna
   rathúla. Ritheann glaonna le `Promise.allSettled`: i gcás teipe aonair,
   caomhnaítear an pháirt fuaime bhunaidh sin (conradh #4012). Má theipeann ar
   gach glao agus má chruthaítear gur `supportsAudio === false` atá sa sprioc,
   déantar
   `[Audio N]: (unavailable — no STT provider connected)` de na páirteanna
   (conradh #8430). I gcás sprice anaithnid (`null`), fágtar an toradh gan athrú
   má theipeann ar gach glao. Faigheann sprioc chruthaithe téacs-amháin gan
   dintiúr STT inúsáidte an stub follasach céanna gan glao líonra a dhéanamh.

Úsáideann tras-scríbhinní rathúla taisce LRU/TTL Modality Bridge ar fud an
phróisis. Comhcheanglaíonn an eochair an tagairt fuaime, an lipéad oibríochta
cobhsaí `audio-transcription`, agus an tsamhail STT roghnaithe; ní chuirtear
teipeanna i dtaisce riamh. Nuashonraíonn iarrachtaí fuaime na cuntair
chomhroinnte `bridged`, `cacheHits`, `failures`, agus `lastUsedAt`.
Bíonn
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` ar
fhreagraí claochlaithe; ní fhaigheann iarratais gan athrú mír Audio Bridge.

Tá socruithe am rite tacaithe ag an mbunachar sonraí agus bailíochtaithe ag Zod:

| Eochair                       | Réamhshocrú | Raon                   |
| ----------------------------- | ----------- | ---------------------- |
| `modalityBridgeAudioEnabled`  | `true`      | —                      |
| `modalityBridgeAudioModel`    | `""`        | Uathoibríoch nó ID STT |
| `modalityBridgeAudioTimeout`  | `60000`     | 1000–300000            |
| `modalityBridgeAudioMaxClips` | `3`         | 1–10                   |

Tá an taisce chomhroinnte fós faoi rialú ag `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, agus `modalityBridgeCacheMaxEntries`.

### Droichead Físe (`videoBridge.ts`, `videoBridgePipeline.ts`)

Idircheapann sé codanna físe barrleibhéil i `messages` Chat Completions agus in
`input` API Responses sula nglaoitear ar sprioc nach eol go bhfuil tacaíocht
dhúchasach físe aici. Is iad na cruthanna a dtacaítear leo ná `input_video`,
`video_url`, `video_source`, URLanna HTTPS, agus URIanna sonraí
`data:video/*;base64,...`. Ní chaitear le gnáthainmneacha comhaid i dtéacs mar
fhíseáin.

Is le `VideoBridgeGuardrail.preCall` (`videoBridge.ts`) trasnáil na hiarrata, an
tseiceáil cumais/beartais, an comhiomlánú de réir iarrata, agus pálasta an
fhreagra. Tá obair gach físeáin — sealbhú, taisce an toraidh iomláin, cur síos
ar sheicheamh frámaí (a chomhtháthaíonn aon tras-scríbhinn fuaime a dhearbhaigh
an glaoiteoir), agus méadracht/ginmhilleadh/glanadh de réir iarrachta — folaithe
taobh thiar de `processVideoPart` in `videoBridgePipeline.ts`, a ghlaoitear air
uair amháin do gach cuid físe laistigh de lúb `preCall`. Sainíonn an modúl sin
na teorainneacha poirt sainráite `VideoMediaBrokerPort` (bearta a shealbhú agus
frámaí sampláilte a bhaint), `VideoAudioTranscriptionPort` (tras-scríbhinn
fuaime a dhearbhaigh an glaoiteoir a chomhtháthú leis na fotheidil shampláilte),
agus `VideoDrilldownPort` (teorainn bhuanseasmhachta an mhionstaidéir frámaí;
níl sé sreangaithe isteach in `processVideoPart` fós — ní scríobhann ach an
bealach ar leith `/api/modality-bridge/video/drilldown` iontrálacha mionstaidéir
faoi láthair).

Ní iompórtálann ná ní agraíonn an chonair iarrata phoiblí `/v1` fophróiseas
riamh. Íoslódáiltear físeáin chianda faoi theorainn 50 MiB; tá uasteorainn
choimeádach 36 MiB díchódaithe in aghaidh an fhíseáin ar fhíseáin base64
inlíne, ionas gur féidir leis an gclúdach samhla/teachtaireachtaí/frámála
fanacht laistigh den teorainn ghlactha 50 MiB d’iarrataí JSON poiblí. Seiceáiltear
meastacháin ar fhad inlíne agus ar mhéid díchódaithe roimh leithdháileadh. Tá
HTTPS riachtanach ar an URL cianda tosaigh agus ar gach atreorú, agus úsáidtear
an garda amach poiblí amháin atá ann cheana le pionnáil DNS. Ansin trasnaíonn
na bearta teorainn bheacht inmheánach an bhróicéara
`POST /api/modality-bridge/video/extract`. Tá an bealach sin `LOCAL_ONLY` agus
`SPAWN_CAPABLE` araon, ní ghlacann sé ach le hiarratas lúb-ais iontaofa,
fíordheimhnithe de réir próisis, agus ní ghlacann sé riamh le URL, conair
chórais comhad, comhad inrite, ná liosta argóintí. Forfheidhmíonn píblíne mhéid
choirp an API agus léitheoir incriminteach coirp an láimhseálaí uasteorainn
ionchuir 50 MiB don bhróicéir go neamhspleách. Ritheann a chiú teoranta eastóscadh
amháin ag an am, ceadaíonn sé ceithre jab ar feitheamh, agus cuireann sé
uasteorainn 100 MiB ar ionchur ar feitheamh.

Laistigh den bhróicéir, léann `ffprobe` comhad áitiúil príobháideach; fágann an
liosta seasta formáidí ceadaithe formáidí seinnliosta agus lastliosta as an
áireamh. I gcás coimeádán ceadaithe de theaghlach MOV, fanann tagairtí seachtracha
sonraí MOV díchumasaithe de réir réamhshocraithe, agus ní roghnaíonn an t-ordú
seasta iad a chumasú. Úsáideann `ffprobe` agus `ffmpeg` araon liosta bán prótacal
`file` amháin, snáithe amháin, eagair sheasta argóintí, gan bhlaosc, agus
comhaid inrite a réitítear ó `PATH`. Ní iarrthóirí inseinnte iad sruthanna
clúdaigh de phictiúir cheangailte. Ní mór do gach sruth in-seinnte na teorainneacha
a chomhlíonadh, agus tugtar tosaíocht do shruth réamhshocraithe sainráite roimh
an gcúltaca cinntitheach leis an innéacs is ísle. Tá físeáin teoranta do 600
soicind, 8,192 picteilín in aghaidh na toise, agus 33,554,432 picteilín foinse.
Samplálann FFmpeg 1–16 fráma JPEG ag na lárphointí, laghdaíonn sé an chiumhais
fhada go 1,024 picteilín ar a mhéad gan ionchuir níos lú a mhéadú, agus ní
fhaigheann sé URL riamh. Is é `uniform` an sampláil de réir réamhshocraithe.
Déanann na beartais roghnacha `scene_aware` agus turgnamhacha `segment_aware`
pas seasta breise amháin de chuid FFmpeg thar an sruth áitiúil atá bailíochtaithe
cheana féin, roghnaíonn siad stampaí ama teoranta radhairc `showinfo`, agus
téann siad ar ais go cinntitheach chuig na lárphointí aonfhoirmeacha céanna má
theipeann ar an mbrathadóir, má bhíonn teorainn ama ann, má bhíonn aschur
míchumtha ann, nó má bhíonn an tacar iarrthóirí folamh. Leithdháileann an mód
atá feasach ar dheighleoga samplaí lárphointe go comhréireach leis na
heatraimh bhailíochtaithe radhairc; tugtar mionsonraí thíos ar fhianaise atá
feasach ar dheighleoga agus ar iompar cúltaca. Cuirtear an uasteorainn dhocht
16 fhráma i bhfeidhm tar éis an roghnúcháin i ngach beartas. Nuair nach bhfuil
ach buiséad fráma amháin ag iarratas atá feasach ar radhairc, úsáideann sé
lárphointe aonfhoirmeach na fuinneoige gníomhaí lánfhíse nó fócais agus
tuairiscíonn sé `policyEffective: uniform`: ní féidir le fráma radhairc aonair
roghnaithe an dá cheann ama a chaomhnú. Féadfaidh glaoiteoir fuinneog fhócais
chríochta (`start`/`end` soicind) a sholáthar go roghnach; déantar teorainneacha
a chlampáil d’fhad an mheáin, diúltaítear d’fhuinneoga aisiompaithe nó
neamhchríochta, agus ní dhéantar na beartais shamplála go léir ach amháin
laistigh den eatramh normalaithe. Cuirtear an fhuinneog mar thoradh air sin san
áireamh i meiteashonraí samplála agus i réimír neamhiontaofa an tuairiscithe,
ionas gur féidir le samhlacha iartheachtacha sliocht fócais a idirdhealú ón
amlíne iomlán.

Is socrú sainráite ar leith é fócas séimeantach fotheideal. Caomhnaíonn an mód
anailíse réamhshocraithe `full` an leid fráma atá ann cheana agus ní chuireann sé
téacs iarrata ar aghaidh chuig an tsamhail fotheideal riamh. Sa mhód `focused`,
ní léann an droichead ach an `text`/`input_text` neamhfholamh is déanaí a
scríobh úsáideoir ón gcoimeádán céanna Chat nó Responses, normalaíonn sé go NFC
é, crapann sé carachtair rialaithe agus spás bán, agus cuireann sé teorainn 500
códphointe Unicode air. Má bhíonn an toradh folamh, úsáidtear an leid bheacht
`full` mar chúltaca. Sraithítear leid inúsáidte mar JSON i mbloc tiomnaithe
comhthéacs úsáideora neamhiontaofa agus ní fhéadfaidh sí ach tosaíocht a thabhairt
do mhionsonraí inbhraite; ní féidir léi an rabhadh ar leith i gcoinne treoracha
atá infheicthe nó inchloiste sna meáin a leanúint a shárú. Ní dhéanann fócas
téacsúil `start`/`end` a thuiscint ná ní athraíonn sé an samplóir ama.

#### Fianaise struchtúrach deighleoige FU-07

Úsáideann `segment_aware` pas réamhanailíse teoranta amháin thar an sruth físe áitiúil atá bailíochtaithe cheana féin. Déanann an slabhra fosaithe scagairí an físeán a scálú ar dtús go leithead nach mó ná 320 picteilín, braitheann sé athruithe radhairc agus eatraimh reoite, agus ansin glacann sé sampla ag ráta 1 fhráma sa soicind chun doiléire, meán-lúma, agus faisnéis spásúil/ama a mheas. Tá an pas teoranta do 600 sampla struchtúracha, snáithe FFmpeg/scagaire amháin, na liostaí ceada céanna don phrótacal `file` amháin agus do choimeádáin, teorainn 1 MiB ar aschur an phróisis, agus 30 soicind ar a mhéad laistigh de sprioc-am/scoir chomhroinnte an bhróicéara. Ní ghlacann sé riamh le hordú, scagaire, conair ná URL ón iarratas.

Is fianaise shamplála chinntitheach iad na luachanna struchtúracha, ní tuiscint shéimeantach ar fhíseán. Ní bhaineann siad tátal as ábhair, gníomhartha, fotheidil, caint ná rún úsáideora. Cruthaíonn teorainneacha radhairc agus reoite deighleoga; ní dhéanann clúdach reoite, doiléire, nochtadh, mionsonraí spásúla ná athrú ama ach difear don chaoi a leithdháiltear an buiséad reatha de 1–16 fráma. Cuirtear teorainn fráma amháin le deighleog atá reoite go hiomlán, agus téann deighleoga neamhreoite in iomaíocht don bhuiséad atá fágtha. Nuair is mó líon na dteorainneacha ná líon na bhfrámaí, coinnítear clúdach aonfhoirmeach ar an amlíne ionas nach féidir le gearrthacha tapa ag an tús deighleog fhada ag an deireadh a cheilt. Déantar teorainneacha radhairc atá laistigh de thaifeach anailíse 1 soicind ó theorainn reoite a chomhcheangal.

Má bhíonn scagairí ar iarraidh, fianaise mhíchumtha/fholamh, earráid bhrathadóra, nó má théann an réamhanailís theoranta thar am, teipeann sé ar bhealach oscailte go dtí an beartas cruinn aonfhoirmeach lárphointe. Ní theipeann ar bhealach oscailte i gcás scor ón nglaoiteoir nó sprioc-am an bhróicéara: foirceannann sé an fophróiseas atá ar siúl, cuireann sé cosc ar eastóscadh frámaí ina dhiaidh sin, agus baintear an crann príobháideach sealadach in `finally`.

Gineann `scripts/perf/video-bridge-fu07-eval.ts` daingneáin chinntitheacha fhíora FFmpeg le haghaidh coigilteas ar ghlaonna fotheidealaithe tar éis dí-dhúblála, leithdháileadh buiséid do dhlúthghluaiseacht, fianaise doiléire/nochtaithe/SI-TI, gearrthacha tapa a bhfuil eireaball fada acu, agus torthaí dearfacha bréagacha ó chéimniú de réir a chéile. Taifeadann sé am balla na réamhanailíse agus, nuair atá `/usr/bin/time` ar fáil, LAP an phróisis sliochtach agus buaic-RSS. Is tairngreachtaí struchtúracha amháin iad a sheiceálacha cáilíochta. Fanann cáilíocht fhíor na samhla fotheidealaithe mar `HOLD` toisc nach bhfuil críochphointe údaraithe ná moltóir reoite ag an úim seo. Fanann coigilteas airgeadaíochta mar `HOLD` freisin mura soláthraíonn `--caption-cost-per-call-usd` meastachán sainráite dearfach ar an gcostas in aghaidh an ghlao; ní dhéanann an script ceachtar toradh a chumadh riamh.

Tá gach fráma teoranta do 4 MiB, na frámaí amha go léir le chéile do 23 MiB, agus freagra sraithshonraithe an bhróicéara do 32 MiB. Baintear comhadlann phríobháideach shealadach in `finally`. Ní chuireann OmniRoute FFmpeg sa bheart agus ní ghlacann sé le conair shaincheaptha inrite. Roimh fhotheidealú, cuireann an droichead pas coimeádach dí-dhúblála amhairc i bhfeidhm: laghdaítear gach JPEG go maolán liathscála 16×16 agus ní chuirtear i gcomparáid é ach leis an bhfráma deireanach a coinníodh. I gcás buiséad fotheidealaithe iarrtha atá níos mó ná fráma amháin, soláthraíonn an t-eastóscadh comhthiomsú teoranta iarrthóirí nach mó ná dhá oiread an bhuiséid sin agus nach mó ná 16 fhráma riamh. Ní chuirtear an uasteorainn iarrtha i bhfeidhm go dtí tar éis dí-dhúblála, agus caomhnaítear an chéad iarrthóir agus an t-iarrthóir deiridh a roghnaíodh le linn an tanaithe deiridh nuair atá an buiséad cothrom le dhá cheann ar a laghad. Úsáideann an beartas le leagan
`grayscale-16x16-mean-cells-v2` an ceann is mó de dheilt mheánach lúma agus an cóimheas de chealla mionsamhla a bhfuil a ndeilt normalaithe cothrom le 0.05 ar a laghad. Is é 0.04 an tairseach dhúblach, tairiseach a roghnaíodh ar mhaithe le hintuarthacht seachas é a nochtadh mar shocrú ag am rite. Caomhnaíonn an comhartha tánaisteach ardchodarsnachta seo gluaiseacht bheag agus athruithe ar théacs infheicthe a d'fhéadfadh comparáid bunaithe ar an meán amháin a cheilt. Teipeann earráidí comparáideora nó díchódóra ar bhealach oscailte agus coinníonn siad clúdach. Déanann meiteashonraí aschuir idirdhealú idir iarrthóirí eastósctha, frámaí a úsáideadh go rathúil, agus dúblaigh amhairc a fágadh ar lár.

Féadfaidh cuid físe atá marcáilte go sainráite bileog theagmhála le stampaí ama a iarraidh. Tógann an droichead greille JPEG nach mó ná 4 cholún agus 16 fhráma. Dónn gach cill 512 picteilín stampa ama a foinse isteach i mbanda ardchodarsnachta ag an mbun, agus fanann na stampaí ama céanna sna meiteashonraí téacsúla chun comhcheangal agus iniúchadh iartheachtach a éascú. Fanann an JPEG iomlán teoranta do 32 MiB. Mura féidir le `sharp` an ghreille a dhíchódú nó a chomhdhéanamh, filleann an droichead ar na frámaí aonair JPEG; leanann scor ón gcliant de bheith á iomadú tríd an oibríocht bileoige.

Coinnítear fianaise ardaithe céime scartha d'aon ghnó ón micreathagarmharc sintéiseach comhdhéanaimh. Sainíonn `scripts/perf/video-bridge-contact-sheet-eval.ts` úim A/B le leagan scéime do shamhlacha fíora radhairc atá comhoiriúnach le OpenAI. Tomhaiseann sé comharthaí a thuairiscíonn an soláthraí, aga folaigh balla ó cheann ceann (lena n-áirítear comhdhéanamh na bileoige), líon glaonna na samhla, agus coinneáil fíricí a shainíonn an lastliosta. Ní scríobhtar freagraí amha na samhla sa tuairisc; ní choinnítear ach achoimrí SHA-256 agus aitheantais fíricí comhoiriúnaithe. Ní dhéanann an úim aon ghlao líonra ná aon ghlao íoctha ar shamhail mura dtugtar `--execute-real` agus mura bhfuil `--model`, `OMNIROUTE_BASE_URL`, agus `OMNIROUTE_API_KEY` cumraithe. Gan an rith follasach fíor sin, fanann a fhíorasc meaisín-inléite mar `HOLD`; ní fianaise ardaithe céime iad tomhais shintéiseacha ualaigh/líon glaonna amháin.

Féadfaidh glaoiteoirí eagar roghnach `transcript.cues` a cheangal le cuid físe tacaithe nuair atá téacs ailínithe ina seilbh acu cheana féin. Ní mór do gach leid `text`, eatramh críochta `start`/`end` laistigh den achar ama a tomhaiseadh, agus `source` ar an liosta ceada (`client`, `embedded`, nó `audio-bridge`) a bheith aici; is é `1` réamhshocrú `confidence` agus ní mór dó fanacht idir `0` agus `1`. Déantar leideanna atá díreach mar an gcéanna a chomhtháthú. Ní thosaíonn OmniRoute tras-scríobh ón meiteashonra seo riamh: cóipeáiltear leideanna bailíochtaithe isteach sa toradh a bhfuil cur síos air, mar aon le foinse, muinín agus eatramh, agus rindreáiltear iad mar bhreathnuithe neamhiontaofa taobh le fotheidil na bhfrámaí. Diúltaítear do théacs neamhbhailí, as raon, nó gan bhunáitíocht seachas é a mheascadh isteach sa sruth fotheideal. Tá an réimse `source` dearbhaithe ag an nglaoiteoir faoi láthair, ní fíoraithe ag an bhfreastalaí: forfheidhmíonn OmniRoute go bhfuil an luach ar cheann de na trí theaghrán cheadaithe, ach ní dheimhníonn sé go cripteagrafach fós gur tháinig lipéad `embedded` nó `audio-bridge` ó eastóscadh faoi úinéireacht an fhreastalaí. Caith le `source` mar leid neamhiontaofa go dtí go gcuirfear an fíorú sin i bhfeidhm; ná bunaigh cinntí údaraithe air.

Féadfaidh glaoiteoir ardleibhéil rian `audioTranscript` atá údaraithe cheana féin a sholáthar
don fhíseán céanna. Ritheann an comhéadán comhleá breathnuithe amhairc agus fuaime faoin
sprioc-am agus faoin gcomhartha tobscortha céanna, cuireann sé in ord iad ar amlíne choiteann,
comhcheanglaíonn sé cóipeanna beachta, agus tuairiscíonn sé toradh páirteach nuair nach
n-éiríonn ach le taobh amháin. Má bhíonn `audioTranscript` neamhbhailí ann, díghrádaítear
é go dtí an toradh páirteach sin — coinnítear an cur síos amhairc agus taifeadann an brainse
fuaime cód teipe sláintithe — seachas go dteipfeadh ar an bhfíseán iomlán. Caomhnaítear
infhaighteacht gach brainse, an bhratach pháirteach, agus na cóid teipe sláintithe sa toradh
a thuairiscítear, i meiteashonraí na srianta cosanta (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), i meiteashonraí thaisce na dtorthaí, agus i gcuntair chomhleá
an droichid. Ní agraíonn cosán réamhshocraithe Video Bridge tiontú cainte go téacs agus ní
íoslódálann sé an dara cóip meán; gan an rian sainráite sin, fanann sé ina fhíseán amháin.

**Coinneáil tras-scríbhinní (#12150 P1).** Cuirtear é seo i bhfeidhm go huathoibríoch aon uair a
rindreálann Video Bridge (atá roghnach ann féin) leid tras-scríbhinne — níl aon bhratach
choinneála ar leith ann. Nuair a rindreálann iarratas aon leid tras-scríbhinne (`transcript`
arna dhearbhú ag glaoiteoir nó `audioTranscript` comhleáite), marcálann an tsrian chosanta é mar
`videoBridgeObserved` agus cruthaíonn sí scáth folaithe den chur síos físe — rindreáil
chomhionann ina gcuirtear `[redacted-video-transcript]` in ionad chorp saorthéacs gach leide,
arna tógáil tríd an réimse struchtúrtha leide a ionadú sula gcóimeáiltear an teaghrán (ní
dhéantar é riamh tríd an téacs leacaithe a pharsáil, ionas nach féidir le hábhar leide ar bith —
bíodh sé sáraíoch nó coitianta, lena n-áirítear coirp ina bhfuil `]`, amhail
`[inaudible]`/`[music]` — teacht slán). Malartaíonn corp iarratais loga na nglaonna a
choinnítear gach cuid téacs a díorthaíodh ó fhíseán leis an scáth folaithe sin, agus iad
meaitseáilte de réir chomhionannas an ábhair; athléitear ancaire `fullText` ó phálasta
críochnaithe na srianta cosanta réamhghlao, ionas go n-éiríonn leis an meaitseáil fós tar éis
do shrianta cosanta níos déanaí sa slabhra (na maisc PII agus dintiúr, le tosaíochtaí 10/95)
téacs an chur síos a athscríobh ina áit agus tar éis d’instealladh leid an chórais/aistithe/cuimhne
eagar na dteachtaireachtaí a athmhúnlú. Ní athraítear an corp a sheoltar chuig an tsamhail
réamhtheachtach. Ní chuireann iarratas breathnaithe aon rud i Memory bhuan ach oiread
(scipeáiltear eastóscadh a dhíorthaítear ón iarratas agus ón bhfreagra araon), ionas nach féidir
le freagra na samhla féin téacs na tras-scríbhinne a athrá isteach i Memory.

**Réimsí físe amh (#12430).** Nuair atá an droichead cumasaithe agus nuair nach eol an bhfuil
tacaíocht dhúchasach físe ar fáil nó nuair atá sí as láthair, gníomhaíonn réimsí sainithe
`transcript`/`audioTranscript` `videoBridgeObserved` freisin, fiú tar éis teip sa chur síos nó
teorainn `maxVideos`. Áirítear `null` agus teaghráin fholmha; ní áirítear réimsí atá as láthair
ná meiteashonraí nach mbaineann le físeán. Folaithear na réimsí sin i gcóipeanna a choinnítear
nó fágtar an t-iarratas ar lár, agus seachnaítear taiscí/Memory. Fanann pálasta an tsoláthraí gan
athrú.

Úsáideann cóipeanna breise a choinnítear an comhartha céanna maidir le hiarratas breathnaithe.
Déanann an seat amh den iarratas cliaint roimh na srianta cosanta, an t-iarratas ar feitheamh
sa chuimhne, agus loga luath na n-iarratas diúltaithe ionadú struchtúrtha ar réimsí
tras-scríbhinne i gcodanna físe; folaithear leideanna teaghráin arna sintéisiú ag céimeanna den
phíblíne agus ag aistriú comhthéacs ag ceann scríbe chorp an iarratais a choinnítear. Fágann an
marcóir coinnithe `video_content_removed` go dteipeann ar leanúint `previous_response_id` ar
bhealach dúnta seachas téacs a athchruthú a caitheadh amach d’aon ghnó. Má chailleann iarratas
breathnaithe a scáth folaithe do gach cuid sula ndéantar logáil, nó mura n-éiríonn le fiú ceann
amháin de roinnt scáthanna físe meaitseáil tar éis athruithe níos déanaí ar an iarratas, fágtar
corp an iarratais a choinnítear ar lár go hiomlán seachas tras-scríbhinn atá folaithe go
páirteach a choinneáil.

I gcás iarratais bhreathnaithe, d’fhéadfadh freagra samhla aon chuid den tras-scríbhinn a lua
gan teorainn struchtúrtha leide. Dá bhrí sin, cuirtear marcóir fágála ar lár in ionad
`responseBody` i loga na nglaonna a choinnítear; ní choinnítear déantán mionsonraithe na
píblíne (a bhféadfadh coirp réamhtheachtacha/cliaint agus smutáin srutha a bheith ann).
Seachnaíonn taiscí séimeantacha, iolrachta agus athsheinnte réasúnaíochta léamha agus scríbhinní
don iarratas sin. Fanann iarratas an tsoláthraí agus an freagra atá infheicthe ag an gcliant gan
athrú. Draenáiltear bearta luatha coinneála beo ón maolán sealadach nuair a fhágtar an déantán
mionsonraithe ar lár. Ní thuairiscíonn rabhadh Kiro faoi EventStream míchumtha ach líon na
mbeart sa phálasta, agus ní thuairiscíonn sé a inneachar ná earráid amh pharsálaí JSON riamh.
Ní mhaítear leis seo go ndearnadh iniúchadh ar gach diagnóisic neamhghaolmhar ó
sholáthraí/bhreiseán; rianaítear an t-iniúchadh níos leithne ar chinn scríbe coinneála in
#11658.

Is foshraith taisce ar leith é saolré inmheánach `/api/modality-bridge/video/drilldown`, atá
fíordheimhnithe trí loopback/comhartha. Éilíonn gach oibríocht aitheantas canónach teimhneach
príomhaí freisin. Sula gcumasaítear glaoiteoir táirgthe, ní mór dó an t-aitheantas sin a
dhíorthú ón tionónta fíordheimhnithe agus ní ceadmhach dó luach arna roghnú ag an gcliant a
chur ar aghaidh riamh. Ceanglaíonn eochracha taisce an príomhaí sin le haitheantais chanónacha
seisiúin agus tagartha físe, ní stórálann siad ach na heochracha a dhíorthaítear ó SHA-256, agus
cuireann siad léamha agus scriosadh araon faoi raon feidhme an phríomhaí chéanna. Stórálann an
taisce 16 fhráma JPEG dhíorthaithe ar a mhéad in aghaidh na hiontrála, ligeann sí dóibh dul in
éag tar éis deich nóiméad, agus tacaíonn sí le léamha teorannaithe `start`/`end` nó le scriosadh
sainráite seisiúin.

Tá gach príomhaí teoranta do 16 iontráil agus 64 MiB de shonraí canónacha JPEG. Tá na
teorainneacha sin neamhspleách ar an uasteorainn dhomhanda de 64 iontráil/256 MiB: ní
dhíshealbhaíonn brú cuóta príomhaí ach iontrálacha an phríomhaí sin is lú a úsáideadh le déanaí
sula mbreithnítear díshealbhú domhanda LRU. Glantar iontrálacha atá imithe in éag as cuntasaíocht
an phríomhaí agus as an gcuntasaíocht dhomhanda araon nuair a bhíonn gníomhaíocht taisce ann,
agus ní dhéanann cealú ná teip bhailíochtaithe ionadú páirteach a chur i bhfeidhm.

Diúltaíonn an taisce do Base64 neamhchanónach, do stuáil iomarcach, do mheáin nach JPEG iad, do JPEGanna míchumtha nó teasctha, agus do JPEGanna a ghineann rabhadh le linn díchódú teoranta láníomhá `sharp`. Ath-ionchódaíonn sé gach íomhá a nglactar léi mar JPEG canónach, díorthaíonn sé an leithead agus an airde ó na bearta díchódaithe seachas muinín a chur i réimsí an ghlaoiteora, agus caitheann sé amach aon bhearta ilghlóta ina ndiaidh seachas iad a choinneáil. Ní ghearrtar ar an dá chuóta ach an maolán comhbhrúite canónach teoranta. Áirítear leis an teorainn sreinge JSON an forchostas Base64 don uasteorainn ionchuir dhíchódaithe 32 MiB. Taifeadann gach díorthú stóráilte a fhormáid/taifeach JPEG bailíochtaithe, a bheartas samplála, leagan an díorthaithe, am cruthaithe, hais ábhair arna ríomh ag an bhfreastalaí, agus tagairt thuismitheora haiseáilte mar aon le hais ábhair tuismitheora an ghlaoiteora iontaofa. Seiceáiltear cealú idir céimeanna asincrónacha díchódaithe/haiseála roimh an ngealltanas adamhach taisce.

Ní nascann an tráinse seo táirgeoir táirgeachta leis an mbealach go fóill agus ní sholáthraíonn sé roghnú malairtí iltaifigh. Dá bhrí sin, ní chuireann conair iarratais thrédhearcach Video Bridge aon obair bhreise i bhfeidhm, agus fanann díorthú príomhaí atá ceangailte le tionónta agus saolré iomlán iltaifigh FU-08 ina n-obair leantach shainráite seachas iad a bheith doiciméadaithe mar iompar críochnaithe.

Cuirtear fotheidil ar fhrámaí go seicheamhach leis an tsamhail Video chumraithe. Faigheann sárú folamh Video an socrú Vision le hoidhreacht; má tá an dá cheann folamh, roghnaíonn uath-ródaire Vision an tsamhail éifeachtach atá cumasach ar fhís. Cuirtear fotheidil rathúla in ionad na bunpháirte le réimír chobhsaí `[Video description:` a mharcálann an téacs freisin mar bhreathnóireacht neamhiontaofa a díorthaíodh ó mheáin agus a insíonn do shamhlacha iartheachtacha gan treoracha a aimsítear sna meáin a leanúint. Áirítear leis na heochracha taisce d'fhotheidil fráma na bearta JPEG, an leid, an stampa ama, agus an tsamhail éifeachtach; ní chuirtear ach fotheidil rathúla i dtaisce. Coinníonn iontrálacha taisce an tsamhail táirgeora iarbhír ar éirigh léi, lena n-áirítear samhail chúltaca; tuairiscíonn an droichead `mixed` nuair a tháirg samhlacha éagsúla frámaí éagsúla. Athúsáideann amas taisce céannacht an táirgeora sin seachas í a athlipéadú mar an plean ródaithe iarrtha. Tá taisce thoradh an fhíseáin iomláin eochraithe ar gach ionchur a athraíonn an t-aschur — an leid, an tsamhail éifeachtach, an beartas samplála, líon na bhfrámaí, mód na hanailíse séimantaí, méarlorg SHA-256 na leid fócais normalaithe, an fhuinneog fócais, `transcript`, `audioTranscript`, agus bratach na bileoige teagmhála — mar sin is teip taisce é aon cheann de na toisí sin a athrú, agus ní athúsáid sheanchaite riamh é. Tá leagan, tairseach agus líon teoranta frámaí iarrthacha an bheartais dí-dhúblála amhairc sainráite freisin in eochair agus meiteashonraí thaisce na dtorthaí; dá bhrí sin, ní féidir le hathrú beartais cur síos seanchaite ar an bhfíseán iomlán a athúsáid. Coinníonn meiteashonraí v4 thaisce na dtorthaí an mód agus an méarlorg, ach ní choinníonn siad tasc amh an úsáideora riamh. Tuairiscíonn meiteashonraí na ráillí cosanta na móid anailíse iarrtha agus éifeachtacha araon; tuairiscítear go bhfuil mód `focused` iarrtha gan téacs inúsáidte ón úsáideoir ina mhód `full` go héifeachtach.

Baineann an ráille cosanta gach páirt físeáin a dtacaítear léi amach ach ní dhéanann sé cur síos ar níos mó ná `modalityBridgeVideoMaxVideos`. I gcás sprice a bhfuil sé cruthaithe ina leith go bhfuil `supportsVideo === false`, déantar marcóirí téacs sábháilte sainráite de na físeáin ar theip orthu agus de na físeáin os cionn na teorann ionas nach mairfidh aon amhfhíseán. Nuair nach eol an cumas, fágtar na páirteanna sin gan athrú. Seachnaíonn spriocanna a bhfuil `supportsVideo === true` acu an droichead. Iomadaíonn comhartha tobscortha iarratas an chliaint tríd an íoslódáil, scuaine an bhróicéara, fophróisis, agus glaonna fotheidealaithe; stopann tobscortha idir físeáin agus ní theipeann siad ar bhealach a ligeann do mheáin amha dul ar aghaidh.

Tá na socruithe am rite tacaithe ag DB agus bailíochtaithe ag Zod:

| Eochair                             | Réamhshocrú | Raon / iompar                                                                                                           |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Am rite roghnach, rogha shainráite                                                                                      |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | Caomhnaíonn `full` fotheidil ghinearálta; úsáideann `focused` comhthéacs teoranta, neamhiontaofa ón úsáideoir is déanaí |
| `modalityBridgeVideoModel`          | `""`        | Faigheann sé samhail Vision Bridge le hoidhreacht                                                                       |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                    |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, nó `segment_aware` comhréireach; téitear siar go `uniform` má theipeann ar an mbrathadóir     |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                     |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                          |

Cuirtear teorainn ama an bhróicéara le luachanna oidhreachta marthanacha teorann ama Video atá os cionn 120 soicind; diúltaítear do scríbhinní nua socruithe atá os cionn na teorann sin. Éilíonn `GET /api/modality-bridge/video/runtime` logántacht iontaofa aisfhillte stampáilte roimh fhíordheimhniú nó iniúchadh am rite, agus ansin éilíonn sé fíordheimhniú bainistíochta. Ní thugann sé ar ais ach `available`, leaganacha sláintithe FFmpeg/ffprobe, agus cúis sheasta nuair nach bhfuil an t-am rite ar fáil. Ní API poiblí uaslódála é an críochphointe inmheánach astarraingthe: tugann sáithiú na scuaine `503` móide `Retry-After` ar ais, tugann dícheangal glaoiteora `499` ar ais, agus tugann sprioc-am socraithe an bhróicéara `504` ar ais. Cuireann freagraí tiontaithe `video->text;model=<visionModel>;parts=<videos>` leis an gceanntásc lárnach `x-omniroute-modality-bridge` gan míreanna Vision ná Audio a bhaint.

### Mascóir PII (`piiMasker.ts`)

Ritheann sé ar **an dá** chéim.

- Déanann **`preCall`** clónáil ar an bpálasta, téann sé trí `system`, `messages`, `input`, agus
  `prompt` (míreanna gnáth-théacs san áireamh), agus cuireann sé `processPII()` (ó
  `@/shared/utils/inputSanitizer`) i bhfeidhm ar réimsí teaghráin `content`/`text`. Nuair atá
  `PII_REDACTION_ENABLED=true`, déantar PII braite a cheilt sa phálasta
  amach. Tá sé seo neamhspleách ar `INPUT_SANITIZER_MODE` (nach rialaíonn ach
  an polasaí maidir le hionsá insteallta leid). Nuair atá an cheilt múchta, taifeadann an glao
  comhairimh braite gan an t-inneachar a athscríobh.
- Déanann **`postCall`** domhainchlónáil ar an bhfreagra, ritheann sé `sanitizePIIResponse()` chomh maith
  le folaitheoir chruth Responses API (`maskResponsesOutput` — clúdaíonn sé
  `output_text` agus `output[].content[].text`). Má tharlaíonn aon cheilt, cuirtear an
  freagra modhnaithe in ionad an bhunfhreagra.

Ní chuireann an ráille cosanta bac riamh; ní dhéanann sé ach anótáil (`meta.detections`,
`meta.redacted`) nó athscríobh.

### Instealladh Leide (`promptInjection.ts`)

Braitheann sé struchtúir naimhdeacha in inneachar arna sholáthar ag úsáideoirí agus cuireann sé an
polasaí cumraithe i bhfeidhm. Tá an t-iompar á rialú ag athróga timpeallachta agus roghanna an
chruthaitheora:

| Socrú             | Athróg timpeallachta                                                                                  | Réamhshocrú | Éifeacht                                                                                                                                                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cumasaithe        | `INPUT_SANITIZER_ENABLED`                                                                             | `true`      | Nuair atá sé `false`, scoireann an ráille cosanta láithreach.                                                                                                                                                              |
| Mód               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`      | Polasaí insteallta: `block`, `warn`, nó `log`. (Glactar le `redact` ar mhaithe le comhoiriúnacht siarghabhálach ach **ní** bhaineann sé téacs insteallta; rialaítear athscríobh PII iarratais le `PII_REDACTION_ENABLED`.) |
| Tairseach blocála | rogha `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (ailias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`      | An déine íosta is gá chun bac a chur. Is le haghaidh breathnóireachta amháin atá an mheándéine de réir réamhshocraithe.                                                                                                    |

**Tosaíocht mód** (`getMode`): `options.mode` an ghlaoiteora →
sárú brataí gné DB `INJECTION_GUARD_MODE` (Deais → Socruithe →
Bratacha Gné) → athróg timpeallachta `INJECTION_GUARD_MODE` → athróg timpeallachta `INPUT_SANITIZER_MODE` →
`warn`. Dá bhrí sin, bíonn tosaíocht ag sárú ón deais ar na hathróga timpeallachta, agus mar sin
rialaíonn comhéadan úsáideora na mBratach Gné an ráille cosanta reatha go beo (gan atosú). Tá léamh an DB slán i gcás teipe:
má theipeann air, téann an ráille cosanta ar ais chuig an iompar bunaithe ar an timpeallacht, agus nuair nach bhfuil aon
sárú socraithe bíonn an t-iompar comhionann le réiteach bunaithe ar an timpeallacht amháin.

Foinsí braite:

1. `sanitizeRequest()` ó `@/shared/utils/inputSanitizer` (tacar comhroinnte brathadóirí
   a úsáidtear in áiteanna eile sa phíblíne).
2. `DEFAULT_GUARD_PATTERNS` ionsuite (`system_override_inline` agus
   `markdown_system_block` faoi láthair, agus déine `high` ag an dá cheann).
3. `customPatterns` roghnacha a chuirtear ar aghaidh trí roghanna an chruthaitheora (teaghráin, sloinn rialta,
   nó taifid `{ name, pattern, severity }`).

Nuair atá `mode === "block"` **agus** nuair a shroicheann braitheadh amháin ar a laghad an tairseach
déine, filleann `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }`. Sna móid `warn`/`log`, logálann an ráille cosanta ach
ceadaíonn sé an glao. Easpórtáiltear an cúntóir comhroinnte `evaluatePromptInjection()` freisin
do ghlaoiteoirí ar gá dóibh leideanna a mheas gan dul tríd an gclárlann.

**Teorainn scanadh (v3.8.20):** ní scrúdaíonn an brathadóir ach an **chéad 16 KB** de
théacs na leide ceangailte — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 beart) in
`src/shared/utils/inputSanitizer.ts`. Déanann `detectInjection()` agus
`evaluatePromptInjection()` araon `slice(0, MAX_INJECTION_SCAN_BYTES)` sula ritheann siad
an lúb patrún. Bíonn treoracha insteallta gar do bharr ionchuir, mar sin cuireann sé seo
teorainn le CPU/GC na slonn rialta ar phálastaí ina bhfuil na céadta KB gan an bhrath a lagú (féach
#3932, #4041).

### Folaitheoir Dintiúr (`credentialMasker.ts`)

Ritheann sé ag an **dá** chéim, agus é ar deireadh sa slabhra réamhshocraithe (tosaíocht `95`). Ceileann sé
patrúin aitheanta eochracha API / comharthaí rúnda ón bpálasta amach (inneachar
teachtaireachta, argóintí glaonna uirlise, torthaí uirlise) **agus** ó fhreagra an tsoláthraí, ionas nach sceithfear
dintiúr a greamaíodh isteach i leid (nó a aisfhuaimníodh i dtoradh uirlise)
chuig an soláthraí réamhtheachtach ná ar ais chuig an gcliant.

- **Roghnú isteach amháin**, an coinbhinsiún céanna le folú PII (gar do Riail Dhocht #20):
  díchumasaithe mura bhfuil `settings.credentialRedactionEnabled === true` **nó**
  `CREDENTIAL_REDACTION_ENABLED=true`. Agus é múchta, ní dhéanann an ráille cosanta aon ní —
  ní chuireann sé bac ar aon rud agus ní athscríobhann sé aon rud riamh.
- Siúlann `redactCredentials()` crann iomlán an phálasta/fhreagartha (`walkValue()`,
  slán ar thruailliú fréamhshamhla, slán ar thimthriallta trí `WeakSet`) agus cuireann sé
  ionad na meaitseálacha le coinneálaí áite `[REDACTED:<type>]`, gan ach na géaga a
  d’athraigh i ndáiríre a chlónáil.
- Clúdaíonn `CREDENTIAL_PATTERNS` eochracha soláthraithe LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), comharthaí VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), eochracha íocaíochta (Stripe, Square), eochracha
  néil (eochair rochtana AWS, Twilio, SendGrid, Mailgun), eochracha príobháideacha / JWTanna,
  teaghráin naisc ina bhfuil dintiúir (`mongodb://user:pass@...`, etc.), agus
  patrún cineálach do luach ceanntáisc `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Déantar eochracha ar chruth ceanntáisc (`authorization`, `x-api-key`, `api-key`,
  `apikey`) a fholú go struchtúrach (an luach amháin, agus réimír scéime amhail
  `Bearer `/`Basic ` á caomhnú) seachas tríd an slonn rialta cineálach téacs.
- Ní chuireann an ráille cosanta bac ar aon rud riamh; ní dhéanann sé ach athscríobh (`modifiedPayload` /
  `modifiedResponse`) agus anótáil (`meta.credentialsRedacted`, `meta.count`).

Cosaint aischéimnithe: `tests/unit/credential-masker-guardrail.test.ts`.

## Bunchonradh (`base.ts`)

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
  block?: boolean; // giorraíonn true an slabhra
  message?: string; // nochtar é nuair a chuirtear bac
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // tugtar ar ais é ag preCall chun an t-iarratas a athscríobh
  modifiedResponse?: TValue; // tugtar ar ais é ag postCall chun an freagra a athscríobh
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

Cuireann ráille cosanta in iúl “gan athrú” trí `void`, `{}`, nó
`{ block: false }` a thabhairt ar ais. Má thugtar `modifiedPayload`/`modifiedResponse` ar ais, cuirtear é
in ionad an luacha a shreabhann tríd an slabhra chuig ráillí cosanta iartheachtacha.
Iompraíonn `signal?: AbortSignal` saolré an ghlaoiteora isteach sna ráillí cosanta. Is í cealú iarratais an eisceacht oscailte d’aon ghnó i gcás teipe: stopann droichid meán an obair agus déanann siad glantachán gan na meáin amh a chur ar ais chuig sprioc arb eol nach dtacaíonn sí leo.

## Clárlann (`registry.ts`)

Nochtann an t-aonán `guardrailRegistry`:

- `register(guardrail)` — cuireann sé garda-ráille leis (nó cuireann sé ceann eile ina áit de réir ainm normalaithe) agus ath-shórtálann sé de réir `priority` ardaitheach.
- `clear()` / `list()` — cúntóirí riaracháin.
- `runPreCallHooks(payload, context)` — déanann sé athrá ar gharda-ráillí gníomhacha, snáitheann sé an t-ualach tríd an `modifiedPayload`, agus stopann sé ar an gcéad `block: true`.
- `runPostCallHooks(response, context)` — an sreabhadh céanna ar thaobh an fhreagra.
- `resetGuardrailsForTests({ registerDefaults })` — glanann sé an staid agus, go roghnach, athchláraíonn sé na réamhshocruithe le haghaidh aonrú tástála glan.

Tugann an dá reathaí `{ blocked, payload|response, results, guardrail?, message? }` ar ais, áit a bhfuil `results` ina eagar de thaifid `GuardrailExecutionResult` a chuimsíonn réimsí `blocked`, `skipped`, `modified`, `error`, agus `meta` in aghaidh an gharda-ráille, atá úsáideach le haghaidh rianú.

### Garda-ráillí a Dhíchumasú in aghaidh an Iarratais

Déanann `resolveDisabledGuardrails({ apiKeyInfo, body, headers })` liosta dí-dhúbailte d'ainmneacha garda-ráillí a bhailiú ar cheart iad a scipeáil don iarratas reatha. Foinsí (gach ceann roghnach, gach ceann cumaiscthe):

- `apiKeyInfo.disabledGuardrails`
- Comhlacht iarratais `disabledGuardrails` (barrleibhéal)
- Comhlacht iarratais `metadata.disabledGuardrails`
- Ceanntásc `x-omniroute-disabled-guardrails` (nó an ceann oidhreachta `x-disabled-guardrails`)

Féadfaidh na luachanna a bheith ina n-eagar teaghrán nó ina dteaghrán scartha le camóg; déantar ainmneacha a normalú go cás íochtair kebab-case (`pii_masker` → `pii-masker`). Cuirtear an toradh tríd an `context.disabledGuardrails` chuig an gclárlann, a scipeálann garda-ráillí meaitseála (`skipped: true` i `results`).

## Ord Feidhmithe

Maidir le gach iarratas a théann trí `src/sse/handlers/chat.ts` agus
`open-sse/handlers/chatCore.ts`:

1.  Tógann `resolveDisabledGuardrails(...)` an liosta scipeála ón eochair API, ón gcorp,
    agus ó na ceanntásca.
2.  Ritheann `guardrailRegistry.runPreCallHooks(body, ctx)` na ráillí cosanta in ord tosaíochta ardaitheach:
    - Déantar ráillí cosanta díchumasaithe a thaifeadadh mar `skipped`.
    - Féadfaidh `preCall` gach ráille cosanta an t-ualach pá a athscríobh trí `modifiedPayload`.
    - Gearrann an chéad `block: true` an slabhra agus cuireann an láimhseálaí freagra diúltaithe ráille cosanta ar ais.
3.  Sreabhann an t-ualach pá (a d'fhéadfadh a bheith athscríofa) isteach i ródú teaglama agus i seoladh in aghaidh an tsrutha.
4.  Tar éis an freagra a chur le chéile, ritheann `guardrailRegistry.runPostCallHooks(...)`
    an slabhra céanna ar an bhfreagra. Scaoileann `block: true` an freagra in aghaidh an tsrutha anseo.

Déantar ráillí cosanta a chaitheann earráid a thaifeadadh le `error: <message>` agus a logáil trí
`logger.warn`, ach leanann an slabhra ar aghaidh — teip-oscailte de réir dearaidh.

## Cumraíocht

Athróga comhshaoil a léann na ráillí cosanta ionsuite:

| Variable                              | Used by                   | Effect                                                                                                          |
| :------------------------------------ | :------------------------ | :-------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Socraigh `false` chun braite a dhíchumasú go hiomlán.                                                           |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Beartas insteallta: `warn`, `block`, nó `log`. Ní athscríobhann an luach oidhreachta `redact` téacs insteallta. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Mód don gharda insteallta; bratach gné DB freisin a **sháraíonn** na hathróga comhshaoil (DB > ENV).            |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Íos-déine a dhiúltaíonn `MODE=block`: `high` (réamhshocrú), `medium`, nó `low`.                                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Ailias oidhreachta do `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                        |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Nuair atá `true`, déantar PII an iarratais a eagrú (neamhspleách ar mhodh insteallta).                          |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Rialaíonn sé iompar an mhascóra ar thaobh an fhreagra.                                                          |

Léann ráillí cosanta an Modality Bridge cumraíocht reatha ón stór socruithe atá bunaithe ar DB
(`getSettings()`), ní ó athróga comhshaoil. Is iad príomheochracha Vision ná
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, agus
`modalityBridgeCacheMaxEntries`. Ní ghlactar leis na heochracha oidhreachta
`visionBridge*` ach amháin mar an t-aischur léitheoireachta aon-timthriallta
doiciméadaithe; úsáideann scríbhinní painéil na príomheochracha. Tá na réamhshocruithe agus an
réiteoir aischuir lonnaithe i `src/shared/constants/modalityBridgeDefaults.ts`, le
tairisigh oidhreachta coinnithe i `src/shared/constants/visionBridgeDefaults.ts`.

Úsáideann Fuaime `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, agus `modalityBridgeAudioMaxClips`, chomh maith leis na socruithe
comhroinnte `modalityBridgeCache*`. Níl aon aischur eochrach oidhreachta ag Fuaime toisc gur
tugadh na heochracha seo isteach le scéimre an Modality Bridge.

Úsáideann Físeán `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, agus
`modalityBridgeVideoTimeout`, chomh maith leis na socruithe comhroinnte `modalityBridgeCache*`.
Tá sé díchumasaithe de réir réamhshocraithe toisc gur spleáchais oibríochtúla roghnacha iad
FFmpeg/ffprobe agus go gcuireann fotheidealú fráma moill agus costas samhail leis.

## Cosaintí Saincheaptha

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

Céimeanna:

1.  Cruthaigh `src/lib/guardrails/myGuardrail.ts` ag leathnú `BaseGuardrail`.
2.  Cuir `preCall` agus/nó `postCall` i bhfeidhm.
3.  Cláraigh ag am iompórtála (brúigh ó `registerDefaultGuardrails`) nó glaoigh ar `guardrailRegistry.register(...)` ag am rite — cuirfidh an clárlann aon chosaint roimhe seo leis an ainm normalaithe céanna in ionad.
4.  Cuir tástálacha leis faoi `tests/unit/` (samplaí atá ann cheana:
    `tests/unit/guardrails-registry.test.ts`,
    `tests/unit/prompt-injection-guard.test.ts`,
    `tests/unit/guardrails/visionBridge.test.ts`).

## Tástáil

Úsáid `resetGuardrailsForTests()` idir tástálacha chun tús a chur le staid aitheanta. Cuir `{ registerDefaults: false }` ar aghaidh chun tús a chur le clárlann fholamh agus chun na cosaintí atá á dtástáil amháin a chlárú. Glacann Vision Bridge le hinstealladh spleáchais (`deps.getSettings`, `deps.callVisionModel`); nochtann Audio Bridge na hailt chomhionanna le haghaidh socruithe, cumais, roghnú samhail STT, seiceálacha dintiúir, agus trascríobh. Is féidir le tástálacha an dá shreabhadh a fheidhmiú dá bhrí sin gan rochtain ar DB nó ar líonra.

## Féach Freisin

- `src/lib/guardrails/` — cur i bhfeidhm
- `src/shared/utils/inputSanitizer.ts` — brathadóir comhroinnte a chumhachtaíonn instealladh pras agus mascáil PII
- `src/shared/constants/visionBridgeDefaults.ts` — réamhshocruithe Vision Bridge agus liosta samhlacha droichid éigeantacha
- `src/shared/constants/modalityBridgeDefaults.ts` — réamhshocruithe comhroinnte ama rite Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ciseal ortagánach (scoradán ciorcaid, fuarú)
- `docs/reference/ENVIRONMENT.md` — tagairt iomlán do athróga comhshaoil

## Clúdach bealaigh cosanta insteallta & foireann dhearg (Céim 8 · Bloc D)

Clúdaíonn an cosantóir insteallta (`createInjectionGuard` / `withInjectionGuard`) gach bealach a ghlacann le prasanna úsáideora. Tugann sé ómós do `INJECTION_GUARD_MODE` (réamhshocrú `warn` = logáil amháin; `block` = seolann sé ar ais HTTP 400 `SECURITY_001`).

| Cineál                 | Bealaí                                                                                                                                               | Mód réamhshocraithe |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Téacs (atá ann cheana) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Giniúnach              | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Sonraí                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

Clúdaíonn eastóscadh téacs (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Foireann dhearg (oíche, `nightly-llm-security.yml`):** fíoraíonn promptfoo go gcuireann gach bealach bac ar an gcorp OWASP-LLM i `INJECTION_GUARD_MODE=block`; ritheann garak taiscéalaithe (scipeann sé gan rún). Cuirtear `moderations` san áireamh ar mhaithe le comhsheasmhacht — is féidir le hoibreoirí i mód bloc é a dhíolmhú trí `resolveDisabledGuardrails`.

Tá dhá phost ag an sreabhadh oibre oíche (`.github/workflows/nightly-llm-security.yml`, cron + seoladh láimhe):

- **`promptfoo-guard` (blocáil)** — ritheann sé `promptfoo eval -c promptfooconfig.yaml` le `INJECTION_GUARD_MODE=block`. Dearbhaíonn gach cás frithsheasmhach (m.sh. "déan neamhaird de gach treoir roimhe seo…", jailbreaks stíl DAN) go bhfuil `error.code === "SECURITY_001"` sa fhreagra, i.e. gur dhiúltaigh an cosantóir an t-iarratas i ndáiríre.
- **`garak` (comhairleach)** — ritheann sé garak `--probes promptinject,dan,leakreplay` i gcoinne cás áitiúil OmniRoute (`http://localhost:20128/v1`). Geataithe ar rún soláthraí (`PROMPTFOO_PROVIDER_KEY`); scipeann sé go galánta agus tá an iarmhír `|| true` leis, ionas go dtuairiscíonn sé gan teip CI.

Clúdaíonn clúdach an chúntóra cosanta (`createInjectionGuard` / `withInjectionGuard`) gach bealach `/v1` a iompraíonn prasanna; tarraingítear téacs an phrais ó `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ag `extractMessageContents()` i `src/shared/utils/inputSanitizer.ts`.
