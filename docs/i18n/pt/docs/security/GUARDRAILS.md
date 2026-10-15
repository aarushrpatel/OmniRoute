# Guardrails (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Fonte fidedigna:** `src/lib/guardrails/`
> **Última atualização:** 2026-08-29 — v3.8.51 (a proveniência da transcrição do Video Bridge é declarada pelo chamador,
> ainda não é verificada pelo servidor — clarificado de acordo com #11661)

As guardrails aplicam transformações de segurança, políticas e conteúdo na fronteira
entre o OmniRoute e os fornecedores a montante. Cada guardrail pode inspecionar (e
opcionalmente rejeitar, transformar ou anotar) os payloads dos pedidos (`preCall`) e
as respostas a montante (`postCall`).

O sistema é **fail-open**: se uma guardrail lançar uma exceção durante a execução, o registo
regista o erro e prossegue para a guardrail seguinte, em vez de fazer o pedido
falhar. O bloqueio é uma decisão explícita (`block: true`), nunca um acidente.

## Mecanismos de proteção incorporados

O registo carrega automaticamente seis mecanismos de proteção por ordem de prioridade aquando da importação
(consulte `registry.ts` → `registerDefaultGuardrails()`):

| Prioridade | Nome                | Fase(s)        | Ficheiro              |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Os números de prioridade mais baixos são executados **primeiro**.

### Ponte de visão (`visionBridge.ts`) — Ponte de modalidade PR-1

Interceta pedidos que contêm imagens destinados a **modelos sem capacidade de visão** e
redireciona o pedido completo para um modelo com capacidade de visão ou substitui as
partes de imagem por descrições textuais produzidas por um modelo de visão configurável antes
da chamada a montante. Isto permite que fornecedores apenas de texto processem de forma transparente
payloads multimodais.

Fluxo:

1. Ignorar se o modelo de destino já suportar visão (a menos que apareça na
   lista de ponte forçada `isVisionBridgeForcedModel`).
2. Extrair as partes de imagem através de `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), que delega no **detetor de multimédia
   unificado** `detectMediaParts()` em `open-sse/utils/mediaParts.ts` — a
   única fonte de verdade partilhada com o filtro de compatibilidade de combinações.
   A extração está limitada por uma lista de permissões às partes de nível superior com os formatos
   que `replaceImageParts` consegue reinserir (o contrato de extração↔substituição): OpenAI
   `image_url`, `source.type:"base64"` em base64 da Anthropic, URL da Anthropic
   `source.type:"url"` e `input_image` da Responses API. As correspondências aninhadas e
   os formatos apenas indicativos são material para o filtro de combinações e nunca são extraídos.
   Ignorar se nenhum for encontrado.
3. Resolver a configuração de execução através de `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): as novas chaves de definições
   `modalityBridge*` têm precedência; as chaves legadas `visionBridge*` permanecem como
   **alternativa durante um ciclo** (janela de reversão). Ignorar antes de qualquer
   processamento de multimédia quando a ponte estiver desativada.
4. O seletor de modo (`modalityBridgeVisionMode`, consulte a tabela abaixo) decide entre
   redirecionar e descrever. O redirecionamento devolve `modifiedPayload` apenas com `model`
   substituído, além dos metadados `{ rerouted, fromModel, toModel, imagesKept }`.
5. Caminho de descrição: limitar as imagens a `maxImages`, compor o pedido sensível à tarefa,
   consultar a cache de descrições, chamar o modelo de visão **em paralelo**
   (`Promise.allSettled`) e inserir partes de texto `[Image N]: <description>`
   nos respetivos lugares. Uma descrição falhada resulta em `null` e a parte de imagem original é
   **preservada** (#4012) — exceto no caminho de descrição de combinações quando todas as
   descrições falham, caso em que um serviço a montante confirmado como não tendo capacidade de visão recebe um
   marcador `(unavailable — no vision-capable provider connected)` (#8430).
6. Devolver `modifiedPayload` + metadados (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Seletor de modo (`modalityBridgeVisionMode`)

| Modo       | Predefinição | Comportamento                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔            | Heurística legada, inalterada (#6640/#7204): os modelos que não são de combinação/`auto/` são redirecionados para o melhor modelo de visão, a menos que o modelo original já tenha credenciais utilizáveis (nesse caso, descreve); os destinos de combinação descrevem sempre.                                                                 |
| `describe` |              | Descrever sempre — o bloco de redirecionamento é totalmente ignorado; o modelo escolhido pelo utilizador responde sempre.                                                                                                                                                                                                                      |
| `reroute`  |              | Forçar o redirecionamento: a proteção que mantém o modelo com credenciais é ignorada. A proteção de credenciais do **destino** do redirecionamento continua a aplicar-se — quando não existe um destino de visão utilizável, o pedido passa para a descrição, para que as imagens em bruto nunca cheguem a um backend apenas de texto (#8430). |

Os modos forçados terminam antecipadamente **antes** da execução da heurística automática; o comportamento de `auto`
é idêntico, byte por byte, ao mecanismo de proteção anterior ao PR-1.

#### Âmbito da chave de API (`visionBridgeKeyScope.ts`)

Quando a chave de API do autor da chamada restringe `allowedConnections`, conjuntos de quotas
(`allowedQuotas`) ou modelos (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), a ponte apenas
seleciona modelos de redirecionamento e descrição que a chave pode utilizar, em ligações que a chave pode
utilizar. A chamada de descrição passa sempre pelo ciclo interno do OmniRoute com
o cabeçalho `x-omniroute-self-loop-key-id`, para que o pedido de conversação recetor
volte a aplicar a política de ligações e modelos dessa chave. `enforceApiKeyPolicy()`
respeita esse cabeçalho apenas em conjunto com o bearer do ciclo interno, pelo que este apenas
pode restringir o acesso, sendo rejeitado um id que não possa ser resolvido.

Se não for permitido qualquer modelo de visão para a chave, o caminho de descrição não intervém e
o pedido passa sem alterações, apresentando o mesmo comportamento de falha aberta de um
mecanismo de proteção desativado (metadados `{ skipped: true, reason: "no_permitted_vision_model" }`).
Os pedidos sem uma chave e as chaves sem estas restrições comportam-se exatamente como
anteriormente.

#### Pedido de descrição sensível à tarefa (`modalityBridgeVisionTaskAware`)

Predefinição: **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) acrescenta
o texto da **última mensagem do utilizador** (truncado a 500 carateres) ao prompt
de descrição base, orientando a descrição para aquilo que o utilizador realmente
pediu (padrão codex-vision-proxy) e solicitando ao modelo de visão que transcreva
o texto visível. Com a opção desativada — ou sem texto do utilizador — o prompt
base é utilizado sem alterações.

O pedido compatível com OpenAI do próprio ciclo de descrição (`callVisionModelSingle()`
em `visionBridgeHelpers.ts`) solicita sempre `image_url.detail: "high"` —
incondicionalmente, para cada chamador/fornecedor, sem depender de qualquer sinal
do cliente. A amostragem com pouco detalhe reduz a precisão do OCR precisamente
na tarefa de transcrição de texto solicitada por este prompt, pelo que a própria
chamada de descrição solicita sempre um elevado nível de detalhe, independentemente
do nível de detalhe utilizado pelo pedido original recebido. Isto afeta apenas o
corpo do pedido interno de descrição; não altera a forma como o OmniRoute encaminha
o `image_url.detail` do próprio chamador no pedido principal — essa predefinição
é aplicada separadamente, e apenas para clientes OpenCode detetados, em
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). O ramo de
formato de transmissão Anthropic do ciclo de descrição não possui qualquer campo
`detail` e não é afetado por nenhuma das predefinições.

#### Limite da saída da descrição (`modalityBridgeVisionMaxChars`)

| Chave                          | Predefinição | Intervalo        |
| ------------------------------ | ------------ | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`          | `0` ou 100–50000 |

`0` (predefinição) significa **sem limite** — a descrição devolvida por
`callVisionModel()` é transmitida sem alterações, preservando o comportamento
existente. Qualquer valor no intervalo 100–50000 trunca a descrição com um
sufixo `…` antes de esta ser inserida novamente como `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` em `src/lib/guardrails/visionBridge.ts`).
Aumente este valor para tarefas de OCR com muitos detalhes, nas quais o modelo
a jusante necessita da transcrição completa; reduza-o para limitar a utilização
de tokens em modelos de visão demasiado verbosos. O campo do painel encontra-se
no painel Avançado do separador Visão (`modality-bridge-max-chars` em
`ModalityBridgeVisionTab.tsx`) e ajusta qualquer valor entre 1 e 99 para o limite
mínimo de 100, mantendo intacto um `0` explícito — `0` é, por si só, um valor
Zod válido (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`),
e não apenas a predefinição «não definida».

#### Cache de descrições (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL em memória para resultados de descrição, partilhado por todo o
processo. Chave = `sha256(imageRef + composedPrompt + configuredBridgeModel)` com
enquadramento por prefixo de comprimento (sem colisões nos limites dos campos).
O componente do modelo é o modelo de ponte **configurado**, e não o modelo que
efetivamente respondeu — `callVisionModel` pode recorrer internamente a uma
alternativa, e a criação de chaves por tentativa fragmentaria a cache. As
descrições falhadas nunca são armazenadas em cache. Definições:

| Chave                           | Predefinição | Intervalo |
| ------------------------------- | ------------ | --------- |
| `modalityBridgeCacheEnabled`    | `true`       | —         |
| `modalityBridgeCacheTtlMinutes` | `60`         | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`        | 10–5000   |

#### Normalização de imagens remotas (descrição do ciclo interno/obtenção de base64)

Quando a ponte obtém diretamente uma imagem **remota** — tanto na chamada interna
de descrição Anthropic como na conversão para base64 no formato de transmissão
Claude (`ensureBase64ImagesForClaudeWire`), ambas através de
`fetchRemoteImageAsDataUri()` em `visionBridgeHelpers.ts` — o URI de dados
resultante é processado por `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) antes de ser incorporado no pedido ao modelo
de visão. As imagens sobredimensionadas são reduzidas para um **lado maior de
2048px** (correspondendo ao limite de redimensionamento já aplicado no lado do
servidor pela OpenAI/Anthropic), o que reduz os bytes enviados e a latência sem
alterar aquilo que o modelo de visão vê. O redimensionamento utiliza `sharp`,
carregado através de importação dinâmica: numa plataforma em que o respetivo
binário nativo não consiga ser carregado, `normalizeDataUri()` **nunca lança
uma exceção** — recorre à transmissão inalterada dos bytes originais, garantindo
que o caminho de descrição/conversão para base64 continua sempre a funcionar.
Os bytes que não correspondam a uma imagem (uma obtenção que não tenha devolvido
uma imagem descodificável) também são transmitidos sem alterações. Esta
normalização está limitada às imagens que a ponte obtém para a sua própria
chamada interna — nunca é aplicada ao payload bruto transmitido pelo chamador,
em conformidade com o princípio de mutação apenas mediante adesão explícita
(Regra Rígida n.º 20).

#### Esquema das definições + migração

As novas chaves `modalityBridge*` são validadas pelo Zod em `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, o trio `modalityBridgeCache*` e o grupo
`modalityBridgeAudio*` utilizado pela Ponte de Áudio. A migração
`141_modality_bridge_settings.sql` copia os valores `visionBridge*` legados
existentes para as novas chaves correspondentes (é idempotente e nunca substitui
um valor `modalityBridge*` definido por um operador); as chaves legadas continuam
a ser aceites como alternativa de leitura durante um ciclo de lançamento.

#### Cabeçalho de transparência + estatísticas

As respostas transformadas pela descrição incluem
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(criado por `buildModalityBridgeHeader()` em `modalityBridge/bridgeStats.ts`,
adicionado por `withModalityBridgeHeader()` em `src/sse/handlers/chatHelpers.ts`).
Os pedidos reencaminhados **não** recebem qualquer cabeçalho — o payload não foi
alterado e a substituição do modelo já é visível no campo `model` do corpo da
resposta.

`GET /api/modality-bridge/stats` (autenticação de gestão, mesmo nível que
`GET /api/settings`) devolve os contadores em memória por modalidade
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` para `vision`, `audio` e
`video`. `averageLatencyMs` utiliza `latencySamples`, e não todas as tentativas,
como denominador; uma operação sem medição de tempo não cria artificialmente
uma amostra de zero milissegundos. `bridged` continua a ser o alias retrocompatível
para conversões bem-sucedidas; as tentativas falhadas não o incrementam.
Por predefinição, os contadores são repostos quando o processo é reiniciado
(telemetria, não contabilização).

#### Configuração do painel

A página dedicada do painel é
`/dashboard/settings/modality-bridge`. Os respetivos separadores `Vision`, `Audio`
e `Video`, endereçáveis por URL, preservam os parâmetros de consulta ao alterar
o valor de `tab`. O separador Vision disponibiliza ativação, modo, seleção do
modelo (incluindo a predefinição automática), instruções sensíveis à tarefa,
limites avançados de tempo de espera/imagem/comprimento da descrição/cache,
contadores de execução e um pedido de amostra protegido. O separador Audio
também está operacional: disponibiliza ativação, um seletor de modelos apenas
para STT com Auto, limites de tempo de espera/duração máxima do clipe, contadores
de áudio e um teste de amostra `input_audio`. O separador Video está funcional:
apresenta o estado de execução do FFmpeg/ffprobe — um de quatro estados explícitos
da IU (`unknown` enquanto a sondagem está em curso ou não pôde ser concluída,
`restricted` num anfitrião do painel que não seja loopback, onde a sondagem é
ignorada no lado do cliente, `unavailable` após a sondagem confirmar que está
em falta, ou `available` com as versões do FFmpeg/ffprobe) — guarda de forma
persistente os limites de ativação/modelo/fotogramas/vídeo/tempo de espera, filtra
o seletor de modelos para modelos compatíveis com visão e disponibiliza contadores
de vídeo.

O antigo cartão Vision Bridge nas definições de IA é uma ligação de compatibilidade
para a nova página; já não contém uma segunda cópia do formulário. Media Providers
também associa os fluxos de trabalho Image-to-Text e Speech-to-Text aos separadores
correspondentes de Modality Bridge, sem remover o playground Speech-to-Text existente.

**Ignorar a admissão no self-loop:** quando a chamada de descrição é encaminhada
através do próprio self-loop `/v1` do OmniRoute (modelo de fornecedor não padrão),
o subpedido envia `x-omniroute-admission-bypass: internal` e é autenticado com a
credencial de self-loop resolvida — o sentinela local `sk_omniroute` no modo local,
ou a chave de ambiente `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` configurada pelo
operador (#1350), para que as implementações com `REQUIRE_API_KEY=true` continuem
a poder executar a chamada de descrição. A omissão só é aceite para essas
credenciais exatas, pelo que os clientes externos não podem utilizar o cabeçalho
para ignorar a admissão.

As predefinições legadas encontram-se em `src/shared/constants/visionBridgeDefaults.ts`;
as novas predefinições de modo/sensibilidade à tarefa/cache e o resolvedor de
definições encontram-se em `src/shared/constants/modalityBridgeDefaults.ts`. O
mecanismo de proteção disponibiliza uma opção de construtor `deps`, para que os
testes possam injetar implementações falsas de `getSettings` e `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Interceta pedidos de chat com áudio antes de estes chegarem a um destino que não
seja conhecido por aceitar entrada de áudio. Nunca reencaminha o pedido de chat:
as partes de áudio são transcritas através do endpoint multipart existente,
compatível com OpenAI, e o modelo de chat escolhido prossegue com transcrições
de texto.

Fluxo:

1. Resolve `supportsAudio` através de `getResolvedModelCapabilities()`. Os
   metadados explícitos do registo de fornecedores têm prioridade, seguidos dos
   metadados estáticos do modelo e, depois, de `modalities_input` sincronizado.
   Uma lista de entradas declarada sem `audio` é `false`; a ausência de indícios
   sobre a capacidade permanece `null`. Tanto `false` como `null` ativam a ponte
   conservadora, enquanto `true` a ignora.
2. Resolve as definições `modalityBridgeAudio*` e extrai partes de áudio de nível
   superior, passíveis de intercalação, de todas as mensagens através do detetor
   `detectMediaParts()` partilhado. Os formatos suportados na transmissão são
   `input_audio` do OpenAI, `audio_url` e `source.media_type: "audio/*"`. O áudio
   aninhado é detetado para encaminhamento, mas não é removido pelo caminho de
   intercalação. O trabalho é limitado por `modalityBridgeAudioMaxClips`; as
   partes posteriores permanecem inalteradas.
3. Respeita um `provider/model` configurado ou permite que
   `selectAudioBridgeModel()` percorra `AUDIO_TRANSCRIPTION_PROVIDERS` pela ordem
   estável do catálogo e selecione o primeiro modelo com uma credencial de
   fornecedor ativa e utilizável.
4. `callAudioTranscription()` converte áudio em base64/URI de dados num `file`
   multipart ou transfere um `audio_url` remoto através da proteção de saída
   exclusivamente pública, com fixação de DNS e um limite de 25 MB. Em seguida,
   envia por POST o ficheiro e o modelo selecionado para o self-loop local
   `/v1/audio/transcriptions`, autenticado com `resolveSelfLoopBearer()`. A rota
   de transcrição existente efetua a pesquisa normal de credenciais, o tratamento
   do período de espera/limite de taxa e o despacho para o fornecedor.
5. As chamadas bem-sucedidas substituem as respetivas partes por
   `[Audio N]: <transcript>`. As chamadas são executadas com `Promise.allSettled`:
   uma falha individual preserva a parte de áudio original (contrato #4012). Se
   todas as chamadas falharem e estiver comprovado que o destino tem
   `supportsAudio === false`, as partes passam a ser
   `[Audio N]: (unavailable — no STT provider connected)` (contrato #8430). Para
   um destino desconhecido (`null`), um resultado em que tudo falha permanece
   inalterado. Um destino comprovadamente apenas de texto, sem uma credencial STT
   utilizável, recebe o mesmo marcador explícito sem efetuar uma chamada de rede.

As transcrições bem-sucedidas utilizam a cache LRU/TTL de Modality Bridge ao nível
do processo. A chave combina a referência de áudio, o identificador estável da
operação `audio-transcription` e o modelo STT selecionado; as falhas nunca são
armazenadas em cache. As tentativas de áudio atualizam os contadores partilhados
`bridged`, `cacheHits`, `failures` e `lastUsedAt`. As respostas transformadas
incluem
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; os pedidos
inalterados não recebem um segmento de Audio Bridge.

As definições de execução são suportadas pela base de dados e validadas pelo Zod:

| Chave                         | Predefinição | Intervalo               |
| ----------------------------- | ------------ | ----------------------- |
| `modalityBridgeAudioEnabled`  | `true`       | —                       |
| `modalityBridgeAudioModel`    | `""`         | Automático ou ID de STT |
| `modalityBridgeAudioTimeout`  | `60000`      | 1000–300000             |
| `modalityBridgeAudioMaxClips` | `3`          | 1–10                    |

A cache partilhada continua a ser controlada por `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` e `modalityBridgeCacheMaxEntries`.

### Ponte de vídeo (`videoBridge.ts`, `videoBridgePipeline.ts`)

Interceta partes de vídeo de nível superior em `messages` de Chat Completions e
em `input` da API Responses antes de ser chamado um destino sem suporte nativo
de vídeo conhecido. Os formatos suportados são `input_video`, `video_url`,
`video_source`, URLs HTTPS e URIs de dados `data:video/*;base64,...`. Nomes de
ficheiros simples em texto não são tratados como vídeo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) é responsável pela travessia
do pedido, pela verificação de capacidade/política, pela agregação por pedido e
pela carga útil da resposta. O trabalho por vídeo — aquisição, cache do
resultado completo, descrição de uma sequência de fotogramas (que integra
qualquer transcrição de áudio declarada pelo autor da chamada) e
métricas/cancelamento/limpeza por tentativa — está oculto por trás de
`processVideoPart` em `videoBridgePipeline.ts`, chamado uma vez por cada parte
de vídeo no ciclo de `preCall`. Esse módulo também define as fronteiras de porta
explícitas `VideoMediaBrokerPort` (aquisição de bytes e extração de fotogramas
amostrados), `VideoAudioTranscriptionPort` (integração de uma transcrição de
áudio declarada pelo autor da chamada com as legendas amostradas) e
`VideoDrilldownPort` (a fronteira de persistência da análise detalhada de
fotogramas; ainda não está ligada a `processVideoPart` — atualmente, apenas a
rota separada `/api/modality-bridge/video/drilldown` escreve entradas de análise
detalhada).

O caminho público de pedidos `/v1` nunca importa nem invoca um subprocesso. Os
vídeos remotos são descarregados com um limite de 50 MiB; os vídeos base64
incorporados têm um limite conservador de 36 MiB descodificados por vídeo, para
que o envelope do modelo/mensagens/enquadramento possa permanecer dentro do
limite de admissão de pedidos JSON públicos de 50 MiB. O comprimento incorporado
e as estimativas do tamanho descodificado são verificados antes da alocação.
É exigido HTTPS no URL remoto inicial e em cada redirecionamento, utilizando a
proteção de saída existente, apenas para destinos públicos, com fixação de DNS.
Em seguida, os bytes atravessam a fronteira exata do intermediário interno
`POST /api/modality-bridge/video/extract`. Essa rota é simultaneamente
`LOCAL_ONLY` e `SPAWN_CAPABLE`, aceita apenas um pedido autenticado por processo
proveniente de um endereço de loopback fidedigno e nunca aceita um URL, caminho
do sistema de ficheiros, executável ou lista de argumentos. O pipeline de
limitação do tamanho do corpo da API e o leitor incremental do corpo do
processador impõem, de forma independente, um limite de entrada de 50 MiB no
intermediário. A respetiva fila limitada executa uma extração de cada vez,
permite quatro tarefas pendentes e limita a entrada pendente a 100 MiB.

No interior do intermediário, `ffprobe` lê um ficheiro local privado; a lista
fixa de formatos permitidos exclui formatos de listas de reprodução e de
manifestos. Para contentores permitidos da família MOV, as referências externas
a dados MOV permanecem desativadas por predefinição, e o comando fixo não as
ativa. Tanto `ffprobe` como `ffmpeg` utilizam a lista branca de protocolos apenas
com `file`, uma thread, matrizes fixas de argumentos, sem shell e com os
executáveis resolvidos a partir de `PATH`. Os fluxos de imagens de capa anexadas
não são candidatos reproduzíveis. Todos os fluxos reproduzíveis têm de cumprir
os limites, sendo preferido um fluxo predefinido explícito antes de se recorrer
à alternativa determinística com o índice mais baixo. Os vídeos estão limitados
a 600 segundos, 8 192 píxeis por dimensão e 33 554 432 píxeis de origem. O
FFmpeg amostra 1–16 fotogramas JPEG nos pontos médios, reduz a dimensão da aresta
mais longa para, no máximo, 1 024 píxeis, sem ampliar entradas mais pequenas, e
nunca recebe um URL. Por predefinição, a amostragem é `uniform`. As políticas
opcionais `scene_aware` e experimental `segment_aware` efetuam uma passagem
fixa adicional do FFmpeg sobre o fluxo local já validado, selecionam marcas
temporais de cenas `showinfo` limitadas e recorrem, de forma determinística, aos
mesmos pontos médios uniformes em caso de falha do detetor, tempo limite, saída
malformada ou conjunto de candidatos vazio. O modo sensível a segmentos atribui
amostras de pontos médios proporcionalmente aos intervalos de cenas validados;
as evidências do modo sensível a segmentos e o comportamento de contingência
são detalhados abaixo. O limite rígido de 16 fotogramas é aplicado após a
seleção em todas as políticas. Quando um pedido sensível a cenas dispõe de um
orçamento de apenas um fotograma, utiliza o ponto médio uniforme do vídeo
completo ativo ou da janela de foco e indica `policyEffective: uniform`: um
único fotograma de cena selecionado não consegue preservar ambas as extremidades
temporais. O autor da chamada pode, opcionalmente, fornecer uma janela de foco
finita (`start`/`end` em segundos); os limites são restringidos à duração do
conteúdo multimédia, as janelas invertidas ou não finitas são rejeitadas e todas
as políticas de amostragem são executadas apenas dentro do intervalo
normalizado. A janela resultante é incluída nos metadados de amostragem e no
prefixo não fidedigno da descrição, para que os modelos a jusante consigam
distinguir um excerto focado da cronologia completa.

O foco semântico das legendas é uma definição separada e explícita. O modo de
análise predefinido `full` preserva a instrução existente para os fotogramas e
nunca reencaminha o texto do pedido para o modelo de legendagem. No modo
`focused`, a ponte lê apenas o `text`/`input_text` mais recente, não vazio e
criado pelo utilizador, a partir do mesmo contentor de Chat ou Responses,
normaliza-o para NFC, reduz os caracteres de controlo e os espaços em branco e
limita-o a 500 pontos de código Unicode. Um resultado vazio faz com que seja
utilizada a instrução `full` exata. Uma sugestão utilizável é serializada como
JSON num bloco dedicado de contexto de utilizador não fidedigno e apenas pode
dar prioridade a detalhes observáveis; não pode substituir o aviso separado
contra o seguimento de instruções visíveis ou audíveis no conteúdo multimédia.
O foco textual nunca infere `start`/`end` nem altera o amostrador temporal.

#### Evidências estruturais de segmentos de FU-07

`segment_aware` utiliza uma única passagem limitada de pré-análise sobre o fluxo
de vídeo local já validado. A cadeia fixa de filtros começa por reduzir a escala
para uma largura máxima de 320 píxeis, deteta mudanças de cena e intervalos
congelados e, em seguida, recolhe amostras a 1 fotograma por segundo para avaliar
a desfocagem, a luminância média e a informação espacial/temporal. A passagem
está limitada a 600 amostras estruturais, uma thread de FFmpeg/filtro, às mesmas
listas de permissões do protocolo exclusivo `file` e de contentores, a um limite
de 1 MiB para a saída do processo e a um máximo de 30 segundos dentro do
cancelamento/prazo partilhado do broker. Nunca aceita um comando, filtro, caminho
ou URL proveniente do pedido.

Os valores estruturais constituem evidência de amostragem determinística, não
compreensão semântica do vídeo. Não inferem sujeitos, ações, legendas, fala nem a
intenção do utilizador. Os limites de cenas e congelamentos formam segmentos; a
cobertura de congelamento, a desfocagem, a exposição, o detalhe espacial e a
alteração temporal apenas influenciam a forma como o orçamento existente de
1–16 fotogramas é atribuído. Um segmento totalmente congelado está limitado a
um fotograma, enquanto os segmentos não congelados competem pelo orçamento
restante. Quando o número de limites excede o de fotogramas, é mantida uma
cobertura uniforme da linha temporal, para que cortes rápidos no início não
possam ocultar um segmento final longo. Os limites de cena que se encontrem
dentro da resolução de análise de 1 segundo de um limite de congelamento são
agregados.

Filtros em falta, evidência malformada/vazia, um erro do detetor ou o tempo limite
da pré-análise limitada recorrem, em caso de falha, à política exata de pontos
médios uniformes. Um cancelamento pelo chamador ou o prazo do broker não recorre
a esse comportamento em caso de falha: termina o subprocesso em curso, impede a
extração posterior de fotogramas e a árvore temporária privada é removida em
`finally`.

`scripts/perf/video-bridge-fu07-eval.ts` gera fixtures determinísticas reais do
FFmpeg para avaliar a redução de chamadas de legendagem após a deduplicação, a
atribuição de orçamento a movimento denso, a evidência de
desfocagem/exposição/SI-TI, cortes rápidos com uma cauda longa e falsos positivos
de desvanecimento gradual. Regista o tempo decorrido da pré-análise e, quando
`/usr/bin/time` está disponível, a CPU do processo filho e o pico de RSS. As suas
verificações de qualidade são apenas oráculos estruturais. A qualidade real do
modelo de legendagem permanece `HOLD`, porque este equipamento de testes não
dispõe de um endpoint autorizado nem de um avaliador fixo. As poupanças
monetárias também permanecem `HOLD`, a menos que
`--caption-cost-per-call-usd` forneça uma estimativa explícita e positiva do custo
por chamada; o script nunca inventa qualquer um destes resultados.

Cada fotograma está limitado a 4 MiB, o conjunto de todos os fotogramas em bruto
a 23 MiB e a resposta serializada do broker a 32 MiB. Um diretório temporário
privado é removido em `finally`. O OmniRoute não inclui o FFmpeg nem aceita um
caminho personalizado para o executável. Antes da legendagem, a ponte aplica uma
passagem conservadora de deduplicação visual: cada JPEG é reduzido a um buffer
de escala de cinzentos de 16×16 e comparado apenas com o último fotograma retido.
Para um orçamento de legendagem pedido superior a um fotograma, a extração
fornece um conjunto limitado de candidatos com até ao dobro desse orçamento e
nunca mais de 16 fotogramas. O limite pedido só é aplicado após a deduplicação,
preservando os primeiros e últimos candidatos selecionados durante a redução
final quando o orçamento é de, pelo menos, dois. A política com versão
`grayscale-16x16-mean-cells-v2` utiliza o maior valor entre a diferença média de
luminância e a proporção de células da miniatura cuja diferença normalizada é,
pelo menos, 0,05. O limiar de duplicação é a constante 0,04, escolhida pela sua
previsibilidade, em vez de ser disponibilizada como uma definição de execução.
Este sinal secundário de alto contraste preserva pequenos movimentos e alterações
de texto visível que uma comparação baseada apenas na média pode ocultar. Os
erros do comparador ou do descodificador recorrem a um comportamento permissivo
e mantêm a cobertura. Os metadados de saída distinguem os candidatos extraídos,
os fotogramas utilizados com êxito e os duplicados visuais eliminados.

Uma parte de vídeo explicitamente assinalada pode pedir uma folha de contactos
com carimbos de data/hora. A ponte cria uma grelha JPEG com, no máximo, 4 colunas
e 16 fotogramas. Cada célula de 512 píxeis inscreve o carimbo de data/hora da
origem numa faixa inferior de alto contraste, enquanto os mesmos carimbos
permanecem nos metadados textuais para associação e auditoria posteriores. O
JPEG completo continua limitado a 32 MiB. Se `sharp` não conseguir descodificar
ou compor a grelha, a ponte recorre aos fotogramas JPEG individuais; um
cancelamento pelo cliente continua a propagar-se através da operação da folha.

A evidência para promoção é deliberadamente separada do microbenchmark de
composição sintética. `scripts/perf/video-bridge-contact-sheet-eval.ts` define
um equipamento de testes A/B com esquema versionado para modelos de visão reais
compatíveis com OpenAI. Mede os tokens comunicados pelo fornecedor, a latência
total de extremo a extremo (incluindo a composição da folha), o número de
chamadas ao modelo e a retenção de factos definida pelo manifesto. As respostas
brutas do modelo não são escritas no relatório; apenas são retidos os resumos
SHA-256 e os IDs dos factos correspondentes. O equipamento de testes não efetua
qualquer chamada de rede ou a um modelo pago, a menos que `--execute-real` seja
fornecido e `--model`, `OMNIROUTE_BASE_URL` e `OMNIROUTE_API_KEY` estejam
configurados. Sem essa execução real explícita, o seu veredito legível por
máquina permanece `HOLD`; as medições sintéticas do payload/número de chamadas,
por si só, não constituem evidência para promoção.

Os chamadores podem anexar um array `transcript.cues` opcional a uma parte de
vídeo suportada quando já possuem texto alinhado. Cada entrada deve conter
`text`, um intervalo finito `start`/`end` dentro da duração sondada e um `source`
incluído na lista de permissões (`client`, `embedded` ou `audio-bridge`);
`confidence` tem o valor predefinido `1` e deve permanecer entre `0` e `1`. As
entradas exatamente duplicadas são agregadas. O OmniRoute nunca inicia uma
transcrição a partir destes metadados: as entradas validadas são copiadas para o
resultado descrito com a origem, a confiança e o intervalo, e são apresentadas
como observações não fidedignas juntamente com as legendas dos fotogramas. Texto
inválido, fora do intervalo ou sem proveniência é rejeitado em vez de ser
misturado no fluxo de legendas. Atualmente, o campo `source` é declarado pelo
chamador, não verificado pelo servidor: o OmniRoute garante que o valor é uma
das três cadeias permitidas, mas ainda não confirma criptograficamente que uma
etiqueta `embedded` ou `audio-bridge` provém efetivamente de uma extração
controlada pelo servidor. Trate `source` como uma indicação não fidedigna até
essa verificação ser implementada; não baseie decisões de autorização nesse
campo.

Um chamador avançado pode fornecer uma faixa `audioTranscript` já autorizada
para o mesmo vídeo. O mecanismo de fusão executa as observações visuais e de áudio com
o mesmo prazo-limite e sinal de cancelamento, ordena-as numa linha temporal comum, elimina
duplicados exatos e comunica um resultado parcial quando apenas um dos lados é bem-sucedido.
Um `audioTranscript` inválido degrada-se para esse resultado parcial — a descrição
visual é mantida e o ramo de áudio regista um código de falha sanitizado —
em vez de provocar a falha de todo o vídeo. A disponibilidade por ramo, o indicador de resultado parcial
e os códigos de falha sanitizados são preservados no resultado descrito, nos
metadados de proteção (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), nos metadados da cache de resultados e nos contadores
de fusão da ponte. O percurso predefinido do Video Bridge não invoca conversão de voz em texto
nem transfere uma segunda cópia do conteúdo multimédia; sem essa faixa explícita, permanece
apenas com vídeo.

**Retenção de transcrições (#12150 P1).** Isto aplica-se automaticamente sempre que o
Video Bridge (também de adesão opcional) apresenta uma indicação de transcrição — não existe um
indicador de retenção separado. Quando um pedido apresenta qualquer indicação de transcrição (uma
`transcript` declarada pelo chamador ou uma `audioTranscript` fundida), a proteção marca-o como
`videoBridgeObserved` e produz uma cópia oculta expurgada da descrição do vídeo —
uma apresentação idêntica na qual o corpo de texto livre de cada indicação é substituído por
`[redacted-video-transcript]`, criada através da substituição do campo estruturado da indicação
antes de a cadeia ser composta (nunca através da análise do texto consolidado, pelo que nenhum conteúdo da indicação
— malicioso ou normal, incluindo corpos que contenham `]`, como
`[inaudible]`/`[music]` — pode sobreviver). O corpo do pedido persistido no registo de chamadas substitui
cada parte de texto derivada do vídeo por essa cópia oculta expurgada, com correspondência
por igualdade de conteúdo; a âncora `fullText` é relida a partir da carga útil concluída da proteção
anterior à chamada, pelo que a correspondência continua a ser bem-sucedida depois de proteções posteriores da cadeia (os
mascaradores de PII e credenciais, com prioridades 10/95) reescreverem diretamente o texto da descrição e
de a injeção do pedido de sistema, da transferência de contexto e da memória reformular a matriz de mensagens. O
corpo enviado ao modelo a montante permanece inalterado. Um pedido observado também não preenche
qualquer Memory duradoura (a extração derivada tanto do pedido como da resposta é ignorada),
pelo que a própria resposta do modelo não pode reproduzir texto da transcrição na Memory.

**Campos de vídeo em bruto (#12430).** Quando a ponte está ativada e o suporte nativo de vídeo é desconhecido ou está ausente, os campos `transcript`/`audioTranscript` definidos também ativam `videoBridgeObserved`, mesmo após uma falha da descrição ou um limite `maxVideos`. `null` e cadeias vazias contam; campos ausentes e metadados que não sejam de vídeo não contam. As cópias retidas expurgam estes campos ou omitem o pedido, e as caches/Memory são ignoradas. A carga útil do fornecedor permanece inalterada.

As cópias retidas adicionais utilizam o mesmo sinal de pedido observado. A captura instantânea em bruto
do pedido do cliente anterior à proteção, o pedido pendente em memória e o registo inicial
do pedido rejeitado substituem estruturalmente os campos de transcrição nas partes de vídeo;
os pedidos em cadeia sintetizados pelas fases do pipeline e pela transferência de contexto são expurgados
no destino do corpo do pedido persistido. O marcador persistido `video_content_removed`
faz com que a continuação de `previous_response_id` falhe de forma segura, em vez de reconstruir
texto que foi intencionalmente descartado. Se um pedido observado perder a sua
cópia oculta de expurgo por parte antes do registo, ou se até uma de várias cópias ocultas de vídeo
não corresponder após mutações posteriores do pedido, o corpo do pedido retido é
totalmente omitido, em vez de reter uma transcrição parcialmente expurgada.

Para um pedido observado, uma resposta do modelo pode citar qualquer parte da
transcrição sem um limite de indicação estruturado. Por conseguinte, o respetivo `responseBody`
persistido no registo de chamadas é substituído por um marcador de omissão; o artefacto detalhado
do pipeline (que pode incluir corpos a montante/do cliente e fragmentos de transmissão)
não é retido. As caches semântica, de idempotência e de reprodução de raciocínio
ignoram leituras e escritas para esse pedido. O pedido do fornecedor e a resposta
visível para o cliente permanecem inalterados. Os primeiros bytes de manutenção de ligação são drenados do buffer
temporário quando o artefacto detalhado é omitido. O aviso de EventStream malformado
do Kiro comunica apenas a contagem de bytes da carga útil, nunca o respetivo conteúdo nem o erro
em bruto do analisador de JSON.
Isto não alega que todos os diagnósticos não relacionados de fornecedores/plugins tenham sido
auditados; a análise mais abrangente dos destinos de retenção é acompanhada em #11658.

O ciclo de vida interno de `/api/modality-bridge/video/drilldown` é uma infraestrutura
de cache separada, autenticada por token/loopback. Cada operação também requer um
ID de entidade principal opaco e canónico. Antes de um chamador de produção ser ativado, tem de
derivar esse ID a partir do inquilino autenticado e nunca pode reencaminhar um
valor selecionado pelo cliente. As chaves de cache associam essa entidade principal a IDs canónicos de sessão e
de referência de vídeo, armazenam apenas as respetivas chaves derivadas por SHA-256 e limitam tanto as leituras
como a eliminação à mesma entidade principal. A cache armazena, no máximo, 16 fotogramas JPEG
derivados por entrada, expira-os após dez minutos e suporta leituras `start`/`end`
limitadas ou a eliminação explícita da sessão.

Cada entidade principal está limitada a 16 entradas e 64 MiB de dados JPEG canónicos. Esses
limites são independentes do limite máximo global de 64 entradas/256 MiB: a pressão da quota da
entidade principal remove apenas as entradas utilizadas menos recentemente dessa entidade principal antes de ser considerada
a remoção LRU global. As entradas expiradas são removidas da contabilização da entidade principal e
da contabilização global durante a atividade da cache, enquanto o cancelamento e uma falha de validação não
confirmam uma substituição parcial.

A cache rejeita Base64 não canónico, preenchimento excessivo, conteúdos multimédia que não sejam JPEG, JPEGs malformados ou
truncados e JPEGs que produzam um aviso durante uma descodificação integral da imagem, com limites, através do `sharp`.
Cada imagem aceite é recodificada como um JPEG canónico, sendo a largura e a altura
derivadas dos bytes descodificados, em vez de se confiar nos campos fornecidos pelo chamador,
e quaisquer bytes poliglotas no final são descartados em vez de preservados. Apenas o buffer
comprimido canónico e limitado é contabilizado para ambas as quotas. O limite da transmissão JSON inclui a sobrecarga de Base64 relativa ao limite máximo de 32 MiB
para a entrada descodificada. Cada
derivação armazenada regista o formato e a resolução JPEG validados, a política de amostragem,
a versão da derivação, a hora de criação, o hash de conteúdo calculado pelo servidor e a
referência ao elemento principal sob a forma de hash, além do hash do conteúdo principal fornecido pelo chamador fidedigno.
O cancelamento é verificado entre as fases assíncronas de descodificação e cálculo do hash, antes da consolidação atómica na cache.

Esta fase ainda não liga um produtor de produção à rota nem
disponibiliza a seleção de variantes com várias resoluções. Por conseguinte, o caminho transparente dos pedidos
do Video Bridge não implica trabalho adicional, enquanto a derivação do principal vinculada ao inquilino e
o ciclo de vida completo de várias resoluções do FU-08 continuam a ser trabalho de seguimento explícito,
em vez de serem documentados como comportamento concluído.

As legendas dos fotogramas são geradas sequencialmente com o modelo de Video configurado. Uma substituição
de Video vazia herda a definição de Vision; se ambas estiverem vazias, o encaminhador automático de Vision
seleciona o modelo efetivo compatível com visão. As legendas geradas com êxito
substituem a parte original por um prefixo estável `[Video description:` que também
assinala o texto como uma observação não fidedigna derivada de conteúdos multimédia e indica aos modelos
subsequentes que não devem seguir instruções encontradas nesses conteúdos. As chaves da cache de legendas
de fotogramas incluem os bytes JPEG, o pedido, o carimbo de data/hora e o modelo efetivo; apenas as legendas
geradas com êxito são armazenadas em cache. As entradas da cache retêm o modelo produtor efetivamente
bem-sucedido, incluindo um modelo de contingência; a bridge comunica `mixed` quando fotogramas diferentes
foram produzidos por modelos diferentes. Um resultado da cache reutiliza essa identidade do produtor,
em vez de a voltar a identificar como o plano de encaminhamento solicitado. A cache de resultados do vídeo
completo usa como chave todas as entradas que alteram o resultado — o pedido, o modelo efetivo,
a política de amostragem, o número de fotogramas, o modo de análise semântica, a impressão digital SHA-256
da sugestão de foco normalizada, a janela de foco, `transcript`,
`audioTranscript` e o indicador de folha de contactos — pelo que a alteração de qualquer uma dessas
dimensões resulta numa falha de cache, nunca numa reutilização obsoleta. A versão, o limiar
e o número limitado de fotogramas candidatos da política de desduplicação visual também estão explícitos na
chave e nos metadados da cache de resultados; assim, uma alteração da política não pode reutilizar uma
descrição obsoleta do vídeo completo. Os metadados v4 da cache de resultados mantêm o modo e
a impressão digital, nunca a tarefa não processada do utilizador. Os metadados da salvaguarda comunicam os modos
de análise solicitado e efetivo; um modo `focused` solicitado sem texto de utilizador utilizável
é comunicado como sendo efetivamente `full`.

A salvaguarda extrai todas as partes de vídeo suportadas, mas não descreve mais de
`modalityBridgeVideoMaxVideos`. Para um destino comprovadamente com
`supportsVideo === false`, os vídeos que falhem ou excedam o limite são convertidos em marcadores de texto
seguro explícitos, para que nenhum vídeo não processado permaneça. Quando a capacidade é desconhecida, essas partes
permanecem inalteradas. Os destinos com `supportsVideo === true` ignoram a bridge.
O sinal de cancelamento do pedido do cliente propaga-se pela transferência, fila do broker,
subprocessos e chamadas de legendagem; os cancelamentos interrompem o processamento entre vídeos e nunca permitem
que os conteúdos multimédia não processados prossigam em caso de falha.

As definições de runtime são armazenadas na BD e validadas pelo Zod:

| Chave                               | Predefinição | Intervalo/comportamento                                                                                        |
| ----------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`      | Runtime opcional, de adesão explícita                                                                          |
| `modalityBridgeVideoAnalysisMode`   | `"full"`     | `full` preserva legendas genéricas; `focused` usa contexto limitado e não fidedigno do utilizador mais recente |
| `modalityBridgeVideoModel`          | `""`         | Herda o modelo do Vision Bridge                                                                                |
| `modalityBridgeVideoFrameCount`     | `8`          | 1–16                                                                                                           |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`  | `uniform`, `scene_aware` ou `segment_aware` proporcional; uma falha do detetor recorre a `uniform`             |
| `modalityBridgeVideoMaxVideos`      | `1`          | 1–4                                                                                                            |
| `modalityBridgeVideoTimeout`        | `120000`     | 1000–120000 ms                                                                                                 |

Os valores legados persistidos do tempo limite de Video superiores a 120 segundos são limitados ao
prazo do broker; novas gravações de definições acima desse limite são rejeitadas.
`GET /api/modality-bridge/video/runtime` exige uma origem local de loopback fidedigna e carimbada
antes da autenticação ou da sondagem do runtime, exigindo depois autenticação
de gestão. Devolve apenas `available`, versões sanitizadas do FFmpeg/ffprobe e um motivo
fixo quando o runtime não está disponível. O endpoint interno de extração não é
uma API pública de carregamento: a saturação da fila devolve `503` juntamente com `Retry-After`, uma
desconexão do chamador devolve `499` e o prazo fixo do broker devolve `504`. As respostas convertidas adicionam
`video->text;model=<visionModel>;parts=<videos>` ao cabeçalho central
`x-omniroute-modality-bridge` sem remover os segmentos de Vision ou Audio.

### Mascarador de PII (`piiMasker.ts`)

É executado em **ambas** as fases.

- **`preCall`** clona o payload, percorre `system`, `messages`, `input` e
  `prompt` (incluindo itens que sejam cadeias de texto simples) e aplica `processPII()` (de
  `@/shared/utils/inputSanitizer`) aos campos `content`/`text` que sejam cadeias de texto. Quando
  `PII_REDACTION_ENABLED=true`, os dados PII detetados são ocultados no
  payload de saída. Isto é independente de `INPUT_SANITIZER_MODE` (que controla apenas
  a política de injeção de prompts). Quando a ocultação está desativada, a chamada regista as
  contagens de deteções sem reescrever o conteúdo.
- **`postCall`** cria um clone profundo da resposta, executa `sanitizePIIResponse()` e
  o mascarador de formato da API Responses (`maskResponsesOutput` — abrange
  `output_text` e `output[].content[].text`). Se ocorrer alguma ocultação, a
  resposta modificada substitui a original.

A proteção nunca bloqueia; apenas adiciona anotações (`meta.detections`,
`meta.redacted`) ou reescreve.

### Injeção de prompts (`promptInjection.ts`)

Deteta estruturas maliciosas no conteúdo fornecido pelo utilizador e aplica a
política configurada. O comportamento é determinado por variáveis de ambiente e opções do
construtor:

| Definição          | Variável de ambiente                                                                                 | Predefinição | Efeito                                                                                                                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ativada            | `INPUT_SANITIZER_ENABLED`                                                                            | `true`       | Quando é `false`, a proteção termina antecipadamente.                                                                                                                                                     |
| Modo               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`       | Política de injeção: `block`, `warn` ou `log`. (`redact` é aceite para retrocompatibilidade, mas **não** remove texto de injeção; a reescrita de PII do pedido é controlada por `PII_REDACTION_ENABLED`.) |
| Limiar de bloqueio | Opção `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`       | Severidade mínima necessária para bloquear. Com a predefinição, a severidade média serve apenas para observação.                                                                                          |

**Precedência do modo** (`getMode`): `options.mode` do autor da chamada →
**substituição por feature flag na BD** de `INJECTION_GUARD_MODE` (Painel → Definições →
Feature Flags) → variável de ambiente `INJECTION_GUARD_MODE` → variável de ambiente `INPUT_SANITIZER_MODE` →
`warn`. Assim, uma substituição no painel tem precedência sobre as variáveis de ambiente, pelo que a IU de Feature
Flags controla a proteção em execução em tempo real (sem reiniciar). A leitura da BD é tolerante a falhas:
se ocorrer um erro, a proteção recorre ao comportamento baseado nas variáveis de ambiente e, quando não está
definida qualquer substituição, o comportamento é idêntico à resolução baseada apenas nas variáveis de ambiente.

Fontes de deteção:

1. `sanitizeRequest()` de `@/shared/utils/inputSanitizer` (conjunto partilhado de detetores
   utilizado noutros pontos do pipeline).
2. `DEFAULT_GUARD_PATTERNS` incorporados (atualmente `system_override_inline` e
   `markdown_system_block`, ambos com severidade `high`).
3. `customPatterns` opcionais passados através das opções do construtor (cadeias de texto, expressões regulares
   ou registos `{ name, pattern, severity }`).

Quando `mode === "block"` **e** pelo menos uma deteção atinge o limiar de
severidade, `preCall` devolve `{ block: true, message: "Request rejected:
suspicious content detected" }`. Nos modos `warn`/`log`, a proteção regista o evento, mas
permite a chamada. A função auxiliar partilhada `evaluatePromptInjection()` também é exportada
para autores de chamadas que precisem de avaliar prompts sem passar pelo registo.

**Limite de análise (v3.8.20):** o detetor inspeciona apenas os **primeiros 16 KB** do
texto combinado do prompt — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) em
`src/shared/utils/inputSanitizer.ts`. Tanto `detectInjection()` como
`evaluatePromptInjection()` aplicam `slice(0, MAX_INJECTION_SCAN_BYTES)` antes de executar
o ciclo de padrões. As diretivas de injeção surgem perto do início de uma entrada, pelo que isto
limita a utilização de CPU/GC das expressões regulares em payloads com várias centenas de KB sem reduzir a eficácia da deteção (cf.
#3932, #4041).

### Mascarador de credenciais (`credentialMasker.ts`)

É executado em **ambas** as fases, por último na cadeia predefinida (prioridade `95`). Oculta
padrões conhecidos de chaves de API/tokens secretos no payload de saída (conteúdo de
mensagens, argumentos de chamadas de ferramentas, resultados de ferramentas) **e** na resposta do fornecedor, para que uma
credencial colada num prompt (ou devolvida por um resultado de ferramenta) não seja exposta
ao fornecedor a montante nem devolvida ao cliente.

- **Apenas por adesão explícita**, seguindo a mesma convenção da ocultação de PII (regra rígida adjacente à n.º 20):
  desativada, a menos que `settings.credentialRedactionEnabled === true` **ou**
  `CREDENTIAL_REDACTION_ENABLED=true`. Quando está desativada, a barreira de proteção não efetua qualquer operação —
  nunca bloqueia nem reescreve.
- `redactCredentials()` percorre toda a árvore do payload/da resposta (`walkValue()`,
  protegida contra poluição de protótipos e segura contra ciclos através de `WeakSet`) e substitui as correspondências por
  um marcador de posição `[REDACTED:<type>]`, clonando apenas os ramos que foram efetivamente
  alterados.
- `CREDENTIAL_PATTERNS` abrange chaves de fornecedores de LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens de VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), chaves de pagamento (Stripe, Square), chaves de
  serviços de nuvem (chave de acesso AWS, Twilio, SendGrid, Mailgun), chaves privadas/JWTs,
  strings de ligação com credenciais (`mongodb://user:pass@...`, etc.) e
  um padrão genérico de valor de cabeçalho `Authorization`/`x-api-key`/`api-key`/`apikey`.
  As chaves com formato de cabeçalho (`authorization`, `x-api-key`, `api-key`,
  `apikey`) são ocultadas estruturalmente (apenas o valor, preservando o prefixo do esquema, como
  `Bearer `/`Basic `), em vez de através da expressão regular genérica de texto.
- A barreira de proteção nunca bloqueia; apenas reescreve (`modifiedPayload` /
  `modifiedResponse`) e adiciona anotações (`meta.credentialsRedacted`, `meta.count`).

Proteção contra regressões: `tests/unit/credential-masker-guardrail.test.ts`.

## Contrato Base (`base.ts`)

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
  block?: boolean; // true interrompe imediatamente a cadeia
  message?: string; // apresentada em caso de bloqueio
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // devolvido por preCall para reescrever o pedido
  modifiedResponse?: TValue; // devolvido por postCall para reescrever a resposta
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

Uma proteção assinala «sem alterações» devolvendo `void`, `{}` ou
`{ block: false }`. Devolver um `modifiedPayload`/`modifiedResponse` substitui
o valor que percorre a cadeia para as proteções subsequentes.
`signal?: AbortSignal` transmite o ciclo de vida do chamador às proteções. O cancelamento de um pedido é a exceção deliberada de abertura em caso de falha: as pontes multimédia interrompem o trabalho e efetuam a limpeza sem restaurar os dados multimédia em bruto para um destino que se sabe não os suportar.

## Registo (`registry.ts`)

A instância única `guardrailRegistry` expõe:

- `register(guardrail)` — adiciona uma proteção (ou substitui-a pelo nome normalizado) e
  reordena por `priority` ascendente.
- `clear()` / `list()` — auxiliares administrativos.
- `runPreCallHooks(payload, context)` — percorre as proteções ativas, encaminha o
  payload através de `modifiedPayload` e para no primeiro `block: true`.
- `runPostCallHooks(response, context)` — o mesmo fluxo no lado da resposta.
- `resetGuardrailsForTests({ registerDefaults })` — limpa o estado e, opcionalmente,
  regista novamente as predefinições para garantir um isolamento limpo dos testes.

Ambos os executores devolvem `{ blocked, payload|response, results, guardrail?, message? }`,
em que `results` é um array de registos `GuardrailExecutionResult` que incluem
os campos `blocked`, `skipped`, `modified`, `error` e `meta` por proteção,
úteis para rastreio.

### Desativar Proteções por Pedido

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agrega uma
lista sem duplicados dos nomes das proteções que devem ser ignoradas no pedido
atual. Origens (todas opcionais e combinadas):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` no corpo do pedido (nível superior)
- `metadata.disabledGuardrails` no corpo do pedido
- Cabeçalho `x-omniroute-disabled-guardrails` (ou o antigo
  `x-disabled-guardrails`)

Os valores podem ser arrays de strings ou uma string separada por vírgulas; os nomes são
normalizados para minúsculas em kebab-case (`pii_masker` → `pii-masker`). O resultado
é transmitido através de `context.disabledGuardrails` para o registo, que ignora
as proteções correspondentes (`skipped: true` em `results`).

## Ordem de execução

Para cada pedido que passa por `src/sse/handlers/chat.ts` e
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` cria a lista de exclusão a partir da chave de API, do corpo
   e dos cabeçalhos.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` executa os mecanismos de proteção por ordem
   crescente de prioridade:
   - Os mecanismos de proteção desativados são registados como `skipped`.
   - O `preCall` de cada mecanismo de proteção pode reescrever a carga útil através de `modifiedPayload`.
   - O primeiro `block: true` interrompe a cadeia e o processador devolve
     uma resposta de rejeição do mecanismo de proteção.
3. A carga útil (potencialmente reescrita) segue para o encaminhamento combinado e para o envio
   ao serviço a montante.
4. Depois de a resposta ser preparada, `guardrailRegistry.runPostCallHooks(...)`
   executa a mesma cadeia na resposta. Neste caso, `block: true` descarta a resposta
   do serviço a montante.

Os mecanismos de proteção que geram exceções são registados com `error: <message>` e registados no log através de
`logger.warn`, mas a cadeia prossegue — uma conceção de falha permissiva.

## Configuração

Variáveis de ambiente lidas pelos mecanismos de proteção integrados:

| Variável                              | Utilizada por            | Efeito                                                                                                                                               |
| ------------------------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Defina como `false` para desativar completamente a deteção.                                                                                          |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Política de injeção: `warn`, `block` ou `log`. O valor legado `redact` não reescreve o texto da injeção.                                             |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Modo do mecanismo de proteção contra injeção; é também um sinalizador de funcionalidade da BD que **substitui** as variáveis de ambiente (BD > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | Gravidade mínima que `MODE=block` rejeita: `high` (predefinição), `medium` ou `low`.                                                                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | Alias legado de `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | Quando definido como `true`, as PII do pedido são ocultadas (independentemente do modo de injeção).                                                  |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (a jusante) | Controla o comportamento do ocultador no lado da resposta.                                                                                           |

Os mecanismos de proteção do Modality Bridge leem a configuração em tempo de execução a partir do armazenamento
de definições suportado pela BD (`getSettings()`), e não das variáveis de ambiente. As chaves principais da visão são
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` e
`modalityBridgeCacheMaxEntries`. As chaves legadas
`visionBridge*` são aceites apenas como a alternativa de leitura documentada durante um ciclo;
as escritas efetuadas pelo painel utilizam as chaves principais. As predefinições e o resolvedor
alternativo encontram-se em `src/shared/constants/modalityBridgeDefaults.ts`, sendo as constantes
legadas mantidas em `src/shared/constants/visionBridgeDefaults.ts`.

O áudio utiliza `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` e `modalityBridgeAudioMaxClips`, além das definições
`modalityBridgeCache*` partilhadas. O áudio não dispõe de uma alternativa baseada em chaves legadas, uma vez que estas
chaves foram introduzidas com o esquema do Modality Bridge.

O vídeo utiliza `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` e
`modalityBridgeVideoTimeout`, além das definições `modalityBridgeCache*` partilhadas.
Está desativado por predefinição porque o FFmpeg/ffprobe são dependências operacionais
opcionais e a legendagem de fotogramas acrescenta latência e custos de modelo.

## Mecanismos de proteção personalizados

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

Passos:

1. Crie `src/lib/guardrails/myGuardrail.ts` como uma extensão de `BaseGuardrail`.
2. Implemente `preCall` e/ou `postCall`.
3. Registe durante a importação (através de `registerDefaultGuardrails`) ou
   chame `guardrailRegistry.register(...)` em tempo de execução — o registo substitui
   qualquer mecanismo de proteção anterior com o mesmo nome normalizado.
4. Adicione testes em `tests/unit/` (exemplos existentes:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testes

Utilize `resetGuardrailsForTests()` entre testes para começar a partir de um estado conhecido.
Passe `{ registerDefaults: false }` para começar com um registo vazio e
registar apenas os mecanismos de proteção em teste. O Vision Bridge aceita injeção de
dependências (`deps.getSettings`, `deps.callVisionModel`); o Audio Bridge disponibiliza os
pontos de integração equivalentes para definições, capacidades, seleção do modelo STT, verificações
de credenciais e transcrição. Desta forma, os testes podem exercitar ambos os fluxos sem acesso à
base de dados ou à rede.

## Consulte também

- `src/lib/guardrails/` — implementação
- `src/shared/utils/inputSanitizer.ts` — detetor partilhado que suporta a
  deteção de injeção de prompts e a ocultação de PII
- `src/shared/constants/visionBridgeDefaults.ts` — predefinições do Vision Bridge e
  lista de modelos com utilização obrigatória do bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — predefinições partilhadas de execução do Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — camada ortogonal (circuit breaker, períodos de espera)
- `docs/reference/ENVIRONMENT.md` — referência completa das variáveis de ambiente

## Cobertura de rotas e red team do mecanismo contra injeção (Fase 8 · Bloco D)

O mecanismo contra injeção (`createInjectionGuard` / `withInjectionGuard`) abrange todas as rotas
que aceitam prompts do utilizador. Respeita `INJECTION_GUARD_MODE` (predefinição `warn` = apenas registo;
`block` = devolve HTTP 400 `SECURITY_001`).

| Tipo              | Rotas                                                                                                                                                | Modo predefinido |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Texto (existente) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn             |
| Generativo        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn             |
| Dados             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn             |

A extração de texto (`extractMessageContents`) abrange `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red team (todas as noites, `nightly-llm-security.yml`):** o promptfoo valida que cada rota bloqueia
o corpus OWASP-LLM quando `INJECTION_GUARD_MODE=block`; o garak executa sondagens (é ignorado sem o segredo).
`moderations` está incluído por motivos de consistência — os operadores no modo de bloqueio podem isentá-lo através de
`resolveDisabledGuardrails`.

O fluxo de trabalho noturno (`.github/workflows/nightly-llm-security.yml`, cron + execução
manual) tem duas tarefas:

- **`promptfoo-guard` (bloqueante)** — executa `promptfoo eval -c promptfooconfig.yaml`
  com `INJECTION_GUARD_MODE=block`. Cada caso adversarial (por exemplo, "ignore all
  previous instructions…", jailbreaks ao estilo DAN) verifica que a resposta contém
  `error.code === "SECURITY_001"`, ou seja, que o mecanismo rejeitou efetivamente o pedido.
- **`garak` (consultivo)** — executa o garak com `--probes promptinject,dan,leakreplay`
  numa instância local do OmniRoute (`http://localhost:20128/v1`). Está condicionado à existência de um
  segredo do fornecedor (`PROMPTFOO_PROVIDER_KEY`); é ignorado de forma adequada e recebe o sufixo
  `|| true`, pelo que gera um relatório sem causar uma falha na CI.

A cobertura do auxiliar do mecanismo (`createInjectionGuard` / `withInjectionGuard`)
abrange todas as rotas `/v1` que recebem prompts; o texto do prompt é obtido de
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` por
`extractMessageContents()` em `src/shared/utils/inputSanitizer.ts`.
