# Guardrails (Português (Brasil))

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Fonte da verdade:** `src/lib/guardrails/`
> **Última atualização:** 2026-08-29 — v3.8.51 (A proveniência da transcrição da Video Bridge é declarada pelo chamador,
> ainda não verificada pelo servidor — esclarecido conforme #11661)

Guardrails impõem segurança, política e transformações de conteúdo na fronteira
entre o OmniRoute e os provedores upstream. Cada guardrail pode inspecionar (e
opcionalmente rejeitar, transformar ou anotar) cargas de solicitação (`preCall`) e
respostas upstream (`postCall`).

O sistema é **fail-open**: se um guardrail falhar durante a execução, o registro
registra o erro e continua com o próximo guardrail em vez de falhar a
solicitação. O bloqueio é uma decisão explícita (`block: true`), nunca um acidente.

## Proteções integradas

O registro carrega automaticamente seis proteções em ordem de prioridade durante a importação
(consulte `registry.ts` → `registerDefaultGuardrails()`):

| Prioridade | Nome                | Estágio(s)     | Arquivo               |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Números de prioridade menores são executados **primeiro**.

### Ponte de visão (`visionBridge.ts`) — Ponte de modalidade PR-1

Intercepta solicitações que contêm imagens destinadas a **modelos sem recursos de visão** e
redireciona a solicitação inteira para um modelo com recursos de visão ou substitui as partes
de imagem por descrições em texto produzidas por um modelo de visão configurável antes
da chamada upstream. Isso permite que provedores somente de texto processem
payloads multimodais de forma transparente.

Fluxo:

1. Ignora se o modelo de destino já for compatível com visão (a menos que apareça na
   lista de ponte forçada `isVisionBridgeForcedModel`).
2. Extrai as partes de imagem por meio de `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), que delega ao **detector de mídia
   unificado** `detectMediaParts()` em `open-sse/utils/mediaParts.ts` — a
   fonte única da verdade compartilhada com o filtro de compatibilidade de combos.
   A extração é limitada por uma lista de permissões às partes de nível superior com os formatos
   que `replaceImageParts` consegue reinserir (o contrato extract↔replace): `image_url`
   da OpenAI, `source.type:"base64"` da Anthropic, URL
   `source.type:"url"` da Anthropic e `input_image` da Responses API. Ocorrências
   aninhadas e formatos somente indicativos são material do filtro de combos e nunca são extraídos.
   Ignora se nenhum for encontrado.
3. Resolve a configuração de tempo de execução por meio de `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): as novas chaves de configuração
   `modalityBridge*` têm precedência; as chaves legadas `visionBridge*` permanecem como
   **fallback por um ciclo** (janela de reversão). Ignora antes de qualquer varredura de mídia
   quando a ponte está desativada.
4. O seletor de modo (`modalityBridgeVisionMode`, consulte a tabela abaixo) decide entre
   redirecionar e descrever. O redirecionamento retorna `modifiedPayload` apenas com `model`
   substituído, além dos metadados `{ rerouted, fromModel, toModel, imagesKept }`.
5. Caminho de descrição: limita as imagens a `maxImages`, compõe o prompt sensível à tarefa,
   consulta o cache de descrições, chama o modelo de visão **em paralelo**
   (`Promise.allSettled`) e insere partes de texto `[Image N]: <description>` em
   seus lugares. Uma falha de descrição produz `null`, e a parte de imagem original é
   **preservada** (#4012) — exceto no caminho de descrição de combos quando todas as
   descrições falharam, caso em que um upstream confirmado como não compatível com visão recebe um
   stub `(unavailable — no vision-capable provider connected)` em seu lugar (#8430).
6. Retorna `modifiedPayload` + metadados (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Seletor de modo (`modalityBridgeVisionMode`)

| Modo       | Padrão | Comportamento                                                                                                                                                                                                                                                                                                                           |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Heurística legada, inalterada (#6640/#7204): modelos que não são combos/`auto/` são redirecionados para o melhor modelo de visão, a menos que o modelo original já tenha credenciais utilizáveis (nesse caso, descreve); destinos de combo sempre descrevem.                                                                            |
| `describe` |        | Sempre descreve — o bloco de redirecionamento é totalmente ignorado; o modelo escolhido pelo usuário sempre responde.                                                                                                                                                                                                                   |
| `reroute`  |        | Força o redirecionamento: a proteção que mantém o modelo com credenciais é ignorada. A proteção de credenciais do **destino** do redirecionamento ainda se aplica — quando não existe um destino de visão utilizável, a solicitação segue para a descrição para que imagens brutas nunca cheguem a um backend somente de texto (#8430). |

Os modos forçados realizam um curto-circuito **antes** da execução da heurística automática; o comportamento
de `auto` é idêntico, byte por byte, ao da proteção anterior à PR-1.

#### Escopo da chave de API (`visionBridgeKeyScope.ts`)

Quando a chave de API do chamador restringe `allowedConnections`, pools de cota
(`allowedQuotas`) ou modelos (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), a ponte seleciona
somente modelos de redirecionamento e descrição que a chave pode usar, em conexões que a chave pode
usar. A chamada de descrição, então, sempre passa pelo auto-loop do OmniRoute com
o cabeçalho `x-omniroute-self-loop-key-id`, para que a solicitação de chat receptora
aplique novamente a política de conexão e de modelo dessa chave. `enforceApiKeyPolicy()`
respeita esse cabeçalho somente em conjunto com o bearer do auto-loop, portanto, ele só pode
restringir o acesso, e um ID que não possa ser resolvido é rejeitado.

Se nenhum modelo de visão for permitido para a chave, o caminho de descrição não interfere e
a solicitação passa inalterada, com o mesmo comportamento de fail-open de uma proteção
desativada (metadados `{ skipped: true, reason: "no_permitted_vision_model" }`).
Solicitações sem uma chave e chaves sem essas restrições se comportam exatamente como
antes.

#### Prompt de descrição sensível à tarefa (`modalityBridgeVisionTaskAware`)

O padrão é **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) acrescenta
o texto da **última mensagem do usuário** (truncado em 500 caracteres) ao prompt
base de descrição, direcionando a descrição para o que o usuário realmente
solicitou (padrão codex-vision-proxy) e pedindo ao modelo de visão que transcreva
o texto visível. Com a flag desativada — ou sem texto do usuário — o prompt base
é usado sem alterações.

A própria solicitação compatível com OpenAI do autoloop de descrição (`callVisionModelSingle()`
em `visionBridgeHelpers.ts`) sempre solicita `image_url.detail: "high"` —
incondicionalmente, para todos os chamadores/provedores, sem depender de qualquer
sinal do cliente. A amostragem com baixo nível de detalhes reduz a precisão do OCR
justamente na tarefa de transcrição de texto solicitada por esse prompt; portanto,
a própria chamada de descrição sempre solicita alto nível de detalhes,
independentemente do nível de detalhes usado pela solicitação original recebida.
Isso afeta apenas o corpo da solicitação interna de descrição; não altera como o
OmniRoute encaminha o `image_url.detail` do próprio chamador na solicitação
principal — esse padrão é aplicado separadamente e apenas para clientes OpenCode
detectados, em `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
A ramificação em formato de transmissão do Anthropic do autoloop de descrição não
tem um campo `detail` e não é afetada por nenhum dos padrões.

#### Limite da saída da descrição (`modalityBridgeVisionMaxChars`)

| Chave                          | Padrão | Intervalo        |
| ------------------------------ | ------ | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` ou 100–50000 |

`0` (padrão) significa **sem limite** — a descrição retornada por
`callVisionModel()` é repassada sem modificações, preservando o comportamento
existente. Qualquer valor no intervalo de 100–50000 trunca a descrição com um
sufixo `…` antes que ela seja reinserida como `[Imagem N]: <descrição>`
(`VisionBridgeGuardrail.preCall()` em `src/lib/guardrails/visionBridge.ts`).
Aumente esse valor para tarefas de OCR com muitos detalhes, nas quais o modelo
subsequente precisa da transcrição completa; diminua-o para limitar o uso de
tokens por modelos de visão verbosos. O campo do painel fica no painel Avançado
da aba Visão (`modality-bridge-max-chars` em `ModalityBridgeVisionTab.tsx`) e
ajusta qualquer valor entre 1 e 99 para o limite mínimo de 100, enquanto mantém
um `0` explícito inalterado — `0` é um valor Zod válido por si só
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), não apenas
o padrão de "não definido".

#### Cache de descrições (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL em memória para saídas de descrição, compartilhado em todo o
processo. Chave = `sha256(imageRef + composedPrompt + configuredBridgeModel)` com
enquadramento por prefixo de comprimento (sem colisões nos limites dos campos).
O componente do modelo é o modelo de ponte **configurado**, não o modelo que
realmente respondeu — `callVisionModel` pode recorrer internamente a um fallback,
e a criação de uma chave por tentativa fragmentaria o cache. Descrições com falha
nunca são armazenadas em cache. Configurações:

| Chave                           | Padrão | Intervalo |
| ------------------------------- | ------ | --------- |
| `modalityBridgeCacheEnabled`    | `true` | —         |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000   |

#### Normalização de imagens remotas (descrição via autoloop/busca em base64)

Quando a ponte busca por conta própria uma imagem **remota** — a autochamada de
descrição do Anthropic e a conversão para base64 no formato de transmissão do
Claude (`ensureBase64ImagesForClaudeWire`), ambas por meio de
`fetchRemoteImageAsDataUri()` em `visionBridgeHelpers.ts` — o URI de dados
resultante é processado por `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) antes de ser incorporado à solicitação do
modelo de visão. Imagens grandes demais são reduzidas para uma **borda longa de
2048px** (correspondendo ao limite de redimensionamento que OpenAI/Anthropic já
aplicam no lado do servidor), o que reduz os bytes e a latência do upload sem
alterar o que o modelo de visão vê. O redimensionamento usa `sharp`, carregado
por importação dinâmica: em uma plataforma na qual seu binário nativo não
consiga ser carregado, `normalizeDataUri()` **nunca lança uma exceção** — ele
recorre ao repasse dos bytes originais, para que o caminho de descrição/conversão
para base64 continue sempre funcionando. Bytes que não sejam de imagem (uma busca
que não retornou uma imagem decodificável) também são repassados sem alterações.
Essa normalização fica restrita às imagens que a ponte busca para sua própria
autochamada — ela nunca é aplicada ao payload bruto repassado pelo chamador, em
conformidade com o princípio de mutação somente mediante adesão (Regra Rígida
nº 20).

#### Esquema de configurações + migração

As novas chaves `modalityBridge*` são validadas pelo Zod em
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, o trio
`modalityBridgeCache*` e o grupo `modalityBridgeAudio*` usado pela Ponte de
Áudio. A migração `141_modality_bridge_settings.sql` copia os valores legados
existentes de `visionBridge*` para as novas chaves correspondentes (é
idempotente e nunca sobrescreve um valor `modalityBridge*` definido pelo
operador); as chaves legadas continuam aceitas como fallback de leitura durante
um ciclo de lançamento.

#### Cabeçalho de transparência + estatísticas

As respostas transformadas por descrição incluem
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(construído por `buildModalityBridgeHeader()` em `modalityBridge/bridgeStats.ts`
e inserido por `withModalityBridgeHeader()` em `src/sse/handlers/chatHelpers.ts`).
Solicitações redirecionadas **não** recebem cabeçalho — o payload não foi
alterado, e a troca de modelo já está visível no campo `model` do corpo da
resposta.

`GET /api/modality-bridge/stats` (autenticação de gerenciamento, mesmo nível de
`GET /api/settings`) retorna os contadores em memória por modalidade
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` para `vision`, `audio` e
`video`. `averageLatencyMs` usa `latencySamples`, e não todas as tentativas, como
denominador; uma operação sem medição de tempo não cria artificialmente uma
amostra de zero milissegundo. `bridged` continua sendo o alias retrocompatível
para conversões bem-sucedidas; tentativas com falha não o incrementam.
Por design, os contadores são redefinidos quando o processo é reiniciado
(telemetria, não contabilização).

#### Configuração do dashboard

A página dedicada do dashboard é
`/dashboard/settings/modality-bridge`. Suas abas `Vision`, `Audio` e
`Video`, acessíveis por URL, preservam os parâmetros de consulta ao alternar o valor
de `tab`. A aba Vision disponibiliza ativação, modo, seleção de modelo (incluindo o
padrão automático), prompts orientados à tarefa, limites avançados de
tempo limite/imagem/comprimento da descrição/cache, contadores de execução e uma
solicitação de exemplo protegida. A aba Audio também está ativa: ela disponibiliza
ativação, um seletor de modelos exclusivos para STT com Auto, limites de tempo
limite/duração máxima do clipe, contadores de áudio e um teste de exemplo com
`input_audio`. A aba Video é funcional: ela informa o estado de execução do
FFmpeg/ffprobe — um de quatro estados explícitos da interface (`unknown` enquanto
a verificação está em andamento ou não pôde ser concluída, `restricted` em um host
de dashboard que não seja loopback, no qual a verificação é ignorada no lado do
cliente, `unavailable` após a verificação confirmar a ausência, ou `available`
com as versões do FFmpeg/ffprobe) —, persiste os limites de
ativação/modelo/quadros/vídeo/tempo limite, filtra o seletor para modelos com
suporte a visão e disponibiliza contadores de vídeo.

O antigo cartão Vision Bridge nas configurações de IA agora é um link de
compatibilidade para a nova página; ele não mantém mais uma segunda cópia do
formulário. Media Providers também vincula os fluxos de trabalho Image-to-Text e
Speech-to-Text às abas correspondentes do Modality Bridge, sem remover o
playground existente de Speech-to-Text.

**Desvio de admissão para autorreferência:** quando a chamada de descrição é
roteada pelo próprio `/v1` de autorreferência do OmniRoute (modelo de provedor
não padrão), a subsolicitação envia
`x-omniroute-admission-bypass: internal` e é autenticada com a credencial de
autorreferência resolvida — o marcador local `sk_omniroute` no modo local ou a
chave de ambiente `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` configurada pelo
operador (#1350), para que implantações com `REQUIRE_API_KEY=true` ainda possam
executar a chamada de descrição. O desvio só é aceito para essas credenciais
exatas, portanto clientes externos não podem usar o cabeçalho para ignorar a
admissão.

Os padrões legados ficam em `src/shared/constants/visionBridgeDefaults.ts`; os
novos padrões de modo/orientação à tarefa/cache e o resolvedor de configurações
ficam em `src/shared/constants/modalityBridgeDefaults.ts`. A proteção disponibiliza
uma opção de construtor `deps` para que os testes possam injetar implementações
falsas de `getSettings` e `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Intercepta solicitações de chat que contêm áudio antes que elas cheguem a um
destino que não seja reconhecido como capaz de aceitar entrada de áudio. Ele
nunca redireciona a solicitação de chat: as partes de áudio são transcritas por
meio do endpoint multipart compatível com OpenAI existente, e o modelo de chat
escolhido continua com transcrições em texto.

Fluxo:

1. Resolve `supportsAudio` por meio de `getResolvedModelCapabilities()`. Os
   metadados explícitos do registro de provedores têm precedência, seguidos pelos
   metadados estáticos do modelo e, depois, por `modalities_input` sincronizado.
   Uma lista de entradas declarada sem `audio` resulta em `false`; a ausência de
   evidência de capacidade continua resultando em `null`. Tanto `false` quanto
   `null` ativam a ponte conservadora, enquanto `true` faz com que ela seja
   ignorada.
2. Resolve as configurações `modalityBridgeAudio*` e extrai partes de áudio de
   nível superior que podem ser substituídas de todas as mensagens por meio do
   detector compartilhado `detectMediaParts()`. Os formatos de transmissão
   compatíveis são `input_audio` e `audio_url` do OpenAI e
   `source.media_type: "audio/*"`. Áudio aninhado é detectado para roteamento,
   mas não é removido pelo caminho de substituição. O trabalho é limitado por
   `modalityBridgeAudioMaxClips`; as partes posteriores permanecem inalteradas.
3. Respeita um `provider/model` configurado ou permite que
   `selectAudioBridgeModel()` percorra `AUDIO_TRANSCRIPTION_PROVIDERS` na ordem
   estável do catálogo e selecione o primeiro modelo com uma credencial de
   provedor ativa e utilizável.
4. `callAudioTranscription()` converte áudio em base64/URI de dados em um
   `file` multipart ou baixa um `audio_url` remoto por meio da proteção de saída
   restrita a destinos públicos, com fixação de DNS e limite de 25 MB. Em
   seguida, envia o arquivo e o modelo selecionado via POST para o loop local de
   autorreferência `/v1/audio/transcriptions`, autenticado com
   `resolveSelfLoopBearer()`. A rota de transcrição existente realiza a busca
   normal de credenciais, o tratamento de cooldown/limitação de taxa e o
   despacho para o provedor.
5. Chamadas bem-sucedidas substituem suas partes por
   `[Audio N]: <transcript>`. As chamadas são executadas com
   `Promise.allSettled`: uma falha individual preserva a parte de áudio original
   correspondente (contrato #4012). Se todas as chamadas falharem e estiver
   comprovado que o destino tem `supportsAudio === false`, as partes se tornam
   `[Audio N]: (unavailable — no STT provider connected)` (contrato #8430). Para
   um destino desconhecido (`null`), quando todas as chamadas falham, o conteúdo
   permanece inalterado. Um destino comprovadamente exclusivo para texto e sem
   credenciais STT utilizáveis recebe o mesmo marcador explícito sem que uma
   chamada de rede seja realizada.

As transcrições bem-sucedidas usam o cache LRU/TTL do Modality Bridge compartilhado
por todo o processo. A chave combina a referência do áudio, o rótulo estável da
operação `audio-transcription` e o modelo STT selecionado; falhas nunca são
armazenadas em cache. As tentativas de áudio atualizam os contadores compartilhados
`bridged`, `cacheHits`, `failures` e `lastUsedAt`. As respostas transformadas
incluem
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; solicitações
inalteradas não recebem um segmento do Audio Bridge.

As configurações de execução são armazenadas no banco de dados e validadas pelo Zod:

| Chave                         | Padrão  | Intervalo               |
| ----------------------------- | ------- | ----------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                       |
| `modalityBridgeAudioModel`    | `""`    | Automático ou ID de STT |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000             |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                    |

O cache compartilhado continua sendo controlado por `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` e `modalityBridgeCacheMaxEntries`.

### Ponte de vídeo (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepta partes de vídeo no nível superior em `messages` de Chat Completions e
em `input` da Responses API antes que um destino sem suporte nativo conhecido a
vídeo seja chamado. Os formatos compatíveis são `input_video`, `video_url`,
`video_source`, URLs HTTPS e URIs de dados `data:video/*;base64,...`. Nomes de
arquivos simples em texto não são tratados como vídeo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) é responsável pela travessia
da solicitação, pela verificação de capacidade/política, pela agregação por
solicitação e pelo payload da resposta. O trabalho por vídeo — aquisição, cache
do resultado completo, descrição de uma sequência de quadros (que combina
qualquer transcrição de áudio declarada pelo chamador) e
métricas/abortamento/limpeza por tentativa — fica oculto por trás de
`processVideoPart` em `videoBridgePipeline.ts`, chamado uma vez para cada parte
de vídeo dentro do loop de `preCall`. Esse módulo também define os limites
explícitos das portas `VideoMediaBrokerPort` (aquisição de bytes e extração de
quadros amostrados), `VideoAudioTranscriptionPort` (combinação de uma transcrição
de áudio declarada pelo chamador com as legendas dos quadros amostrados) e
`VideoDrilldownPort` (o limite de persistência do detalhamento de quadros; ainda
não conectado a `processVideoPart` — atualmente, apenas a rota separada
`/api/modality-bridge/video/drilldown` grava entradas de detalhamento).

O caminho público de solicitação `/v1` nunca importa nem invoca um subprocesso.
Vídeos remotos são baixados com um limite de 50 MiB; vídeos inline em base64 têm
um limite conservador de 36 MiB decodificados por vídeo, para que o envelope de
modelo/mensagens/enquadramento possa permanecer dentro do limite de admissão de
50 MiB para solicitações JSON públicas. O comprimento inline e as estimativas
do tamanho decodificado são verificados antes da alocação. HTTPS é obrigatório
na URL remota inicial e em cada redirecionamento, usando a proteção existente
de saída somente pública com fixação de DNS. Em seguida, os bytes atravessam
exatamente o limite interno do broker
`POST /api/modality-bridge/video/extract`. Essa rota é tanto `LOCAL_ONLY` quanto
`SPAWN_CAPABLE`, aceita apenas uma solicitação autenticada por processo e
proveniente de loopback confiável e nunca aceita URL, caminho do sistema de
arquivos, executável ou lista de argumentos. O pipeline de tamanho do corpo da
API e o leitor incremental de corpo do manipulador impõem, de forma
independente, um limite de entrada de 50 MiB para o broker. Sua fila limitada
executa uma extração por vez, permite quatro trabalhos pendentes e limita a
entrada pendente a 100 MiB.

Dentro do broker, `ffprobe` lê um arquivo local privado; a lista fixa de formatos
permitidos exclui formatos de playlist e manifesto. Para contêineres permitidos
da família MOV, referências externas a dados MOV permanecem desabilitadas por
padrão, e o comando fixo não as habilita. Tanto `ffprobe` quanto `ffmpeg` usam a
lista de protocolos permitidos restrita apenas a `file`, uma thread, arrays
fixos de argumentos, nenhum shell e executáveis resolvidos a partir de `PATH`.
Streams de capa com imagem anexada não são candidatos reproduzíveis. Todos os
streams reproduzíveis devem atender aos limites, e um stream padrão explícito
tem preferência antes do fallback determinístico para o menor índice. Os vídeos
são limitados a 600 segundos, 8.192 pixels por dimensão e 33.554.432 pixels de
origem. O FFmpeg amostra de 1 a 16 quadros JPEG em pontos médios, reduz a escala
da borda longa para no máximo 1.024 pixels sem ampliar entradas menores e nunca
recebe uma URL. A amostragem é `uniform` por padrão. As políticas opcionais
`scene_aware` e experimental `segment_aware` executam uma passagem fixa
adicional do FFmpeg sobre o stream local já validado, selecionam timestamps de
cena limitados de `showinfo` e recorrem de forma determinística aos mesmos
pontos médios uniformes em caso de falha do detector, timeout, saída malformada
ou conjunto vazio de candidatos. O modo com reconhecimento de segmentos aloca
amostras de pontos médios proporcionalmente aos intervalos de cena validados;
as evidências e o comportamento de fallback do modo com reconhecimento de
segmentos são detalhados abaixo. O limite rígido de 16 quadros é aplicado após
a seleção em todas as políticas. Quando uma solicitação com reconhecimento de
cenas tem orçamento de apenas um quadro, ela usa o ponto médio uniforme do
vídeo completo ativo ou da janela de foco e informa
`policyEffective: uniform`: um único quadro de cena selecionado não consegue
preservar ambas as extremidades temporais. Opcionalmente, um chamador pode
fornecer uma janela de foco finita (`start`/`end` em segundos); os limites são
ajustados à duração da mídia, janelas invertidas ou não finitas são rejeitadas e
todas as políticas de amostragem são executadas somente dentro do intervalo
normalizado. A janela resultante é incluída nos metadados de amostragem e no
prefixo não confiável da descrição, para que os modelos subsequentes possam
distinguir um trecho em foco da linha do tempo completa.

O foco semântico da geração de legendas é uma configuração separada e
explícita. O modo de análise padrão `full` preserva o prompt de quadros existente
e nunca encaminha o texto da solicitação ao modelo de legendas. No modo
`focused`, a ponte lê apenas o `text`/`input_text` mais recente, não vazio e
criado pelo usuário, no mesmo contêiner de Chat ou Responses, normaliza-o para
NFC, condensa caracteres de controle e espaços em branco e o limita a 500
pontos de código Unicode. Um resultado vazio recorre ao prompt `full` exato.
Uma dica utilizável é serializada como JSON em um bloco dedicado de contexto de
usuário não confiável e pode apenas priorizar detalhes observáveis; ela não pode
substituir o aviso separado contra seguir instruções visíveis ou audíveis na
mídia. O foco textual nunca infere `start`/`end` nem altera o amostrador
temporal.

#### Evidência estrutural de segmentos FU-07

`segment_aware` usa uma única passagem limitada de pré-análise sobre o fluxo de vídeo local já validado. A cadeia fixa de filtros primeiro redimensiona o vídeo para no máximo 320 pixels de largura, detecta mudanças de cena e intervalos congelados e, em seguida, realiza amostragem a 1 quadro por segundo para analisar desfoque, luma média e informações espaciais/temporais. A passagem é limitada a 600 amostras estruturais, uma thread do FFmpeg/filtro, às mesmas listas de permissões de contêineres e do protocolo exclusivo `file`, a um limite de 1 MiB para a saída do processo e a, no máximo, 30 segundos dentro do cancelamento/prazo compartilhado do broker. Ela nunca aceita um comando, filtro, caminho ou URL da solicitação.

Os valores estruturais são evidências de amostragem determinísticas, não uma compreensão semântica do vídeo. Eles não inferem sujeitos, ações, legendas, fala nem a intenção do usuário. Os limites de cenas e congelamentos formam segmentos; cobertura de congelamento, desfoque, exposição, detalhes espaciais e mudanças temporais influenciam apenas como o orçamento existente de 1–16 quadros é alocado. Um segmento totalmente congelado é limitado a um quadro, enquanto os segmentos não congelados competem pelo orçamento restante. Quando a quantidade de limites excede a de quadros, a cobertura uniforme da linha do tempo é mantida para que cortes rápidos no início não possam ocultar um longo segmento final. Limites de cena dentro da resolução de análise de 1 segundo de um limite de congelamento são combinados.

Filtros ausentes, evidências malformadas/vazias, erro de detector ou timeout da pré-análise limitada resultam, de forma permissiva, na política exata de pontos médios uniformes. Um cancelamento pelo chamador ou o prazo do broker não resulta em comportamento permissivo: ele encerra o subprocesso em andamento, impede a extração posterior de quadros e a árvore temporária privada é removida em `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` gera fixtures determinísticas reais do FFmpeg para avaliar a economia de chamadas de legendagem após a desduplicação, a alocação do orçamento para movimento intenso, as evidências de desfoque/exposição/SI-TI, cortes rápidos com um longo trecho final e falsos positivos em esmaecimentos graduais. Ele registra o tempo de relógio da pré-análise e, quando `/usr/bin/time` está disponível, a CPU do processo filho e o pico de RSS. Suas verificações de qualidade são apenas oráculos estruturais. A qualidade do modelo real de legendagem permanece como `HOLD`, pois esse harness não possui um endpoint autorizado nem um avaliador congelado. A economia monetária também permanece como `HOLD`, a menos que `--caption-cost-per-call-usd` forneça uma estimativa positiva explícita de custo por chamada; o script nunca inventa nenhum desses resultados.

Cada quadro é limitado a 4 MiB, todos os quadros brutos em conjunto a 23 MiB e a resposta serializada do broker a 32 MiB. Um diretório temporário privado é removido em `finally`. O OmniRoute não inclui o FFmpeg e não aceita um caminho de executável personalizado. Antes da legendagem, a ponte aplica uma passagem conservadora de desduplicação visual: cada JPEG é reduzido a um buffer em escala de cinza de 16×16 e comparado apenas com o último quadro retido. Para um orçamento de legendagem solicitado superior a um quadro, a extração fornece um conjunto limitado de candidatos de até duas vezes esse orçamento e nunca superior a 16 quadros. O limite solicitado é aplicado somente após a desduplicação, com o primeiro e o último candidatos selecionados preservados durante a redução final quando o orçamento é de pelo menos dois. A política versionada
`grayscale-16x16-mean-cells-v2` usa o maior valor entre a diferença média de luma e a proporção de células da miniatura cuja diferença normalizada é de pelo menos 0.05. O limiar de duplicação é a constante 0.04, escolhida pela previsibilidade em vez de ser exposta como uma configuração de runtime. Esse sinal secundário de alto contraste preserva pequenos movimentos e alterações em textos visíveis que uma comparação baseada apenas na média pode ocultar. Erros do comparador ou do decodificador resultam em comportamento permissivo e mantêm a cobertura. Os metadados de saída distinguem os candidatos extraídos, os quadros usados com sucesso e as duplicatas visuais descartadas.

Uma parte de vídeo explicitamente marcada pode solicitar uma folha de contato com timestamps. A ponte cria uma grade JPEG com no máximo 4 colunas e 16 quadros. Cada célula de 512 pixels insere o timestamp da origem em uma faixa inferior de alto contraste, enquanto os mesmos timestamps permanecem nos metadados textuais para associação e auditoria posteriores. O JPEG completo permanece limitado a 32 MiB. Se `sharp` não conseguir decodificar ou compor a grade, a ponte recorre aos quadros JPEG individuais; um cancelamento pelo cliente ainda se propaga pela operação da folha.

As evidências de promoção são deliberadamente separadas do microbenchmark sintético de composição. `scripts/perf/video-bridge-contact-sheet-eval.ts` define um harness A/B com esquema versionado para modelos reais de visão compatíveis com a OpenAI. Ele mede os tokens informados pelo provedor, a latência de relógio de ponta a ponta (incluindo a composição da folha), a quantidade de chamadas ao modelo e a retenção de fatos definida pelo manifesto. As respostas brutas do modelo não são gravadas no relatório; somente os resumos SHA-256 e os IDs dos fatos correspondentes são retidos. O harness não realiza nenhuma chamada de rede ou a um modelo pago, a menos que `--execute-real` seja fornecido e `--model`, `OMNIROUTE_BASE_URL` e `OMNIROUTE_API_KEY` estejam configurados. Sem essa execução real explícita, seu veredito legível por máquina permanece como `HOLD`; medições sintéticas de payload/quantidade de chamadas, por si só, não constituem evidência de promoção.

Os chamadores podem anexar um array opcional `transcript.cues` a uma parte de vídeo compatível quando já possuem texto alinhado. Cada cue deve conter `text`, um intervalo finito `start`/`end` dentro da duração detectada e um `source` presente na lista de permissões (`client`, `embedded` ou `audio-bridge`); `confidence` assume `1` como valor padrão e deve permanecer entre `0` e `1`. Cues exatamente duplicadas são combinadas. O OmniRoute nunca inicia a transcrição a partir desses metadados: cues validadas são copiadas para o resultado descrito com origem, confiança e intervalo e são renderizadas como observações não confiáveis junto às legendas dos quadros. Textos inválidos, fora do intervalo ou sem procedência são rejeitados em vez de serem misturados ao fluxo de legendas. Atualmente, o campo `source` é declarado pelo chamador, não verificado pelo servidor: o OmniRoute garante que o valor seja uma das três strings permitidas, mas ainda não confirma criptograficamente que um rótulo `embedded` ou `audio-bridge` realmente tenha vindo de uma extração pertencente ao servidor. Trate `source` como uma indicação não confiável até que essa verificação seja implementada; não baseie decisões de autorização nele.

Um chamador avançado pode fornecer uma faixa `audioTranscript` já autorizada
para o mesmo vídeo. O ponto de fusão executa as observações visuais e de áudio
sob um único prazo e sinal de cancelamento, ordena-as em uma linha do tempo comum,
elimina duplicatas exatas e relata um resultado parcial quando apenas um dos lados
é bem-sucedido. Um `audioTranscript` inválido é degradado para esse resultado
parcial — a descrição visual é preservada, e o ramo de áudio registra um código
de falha sanitizado — em vez de causar a falha do vídeo inteiro. A disponibilidade
por ramo, o indicador de resultado parcial e os códigos de falha sanitizados são
preservados no resultado descrito, nos metadados de proteção
(`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), nos metadados do cache de resultados e nos contadores
de fusão da ponte. O caminho padrão do Video Bridge não invoca conversão de fala
em texto nem baixa uma segunda cópia da mídia; sem essa faixa explícita, ele
permanece somente com vídeo.

**Retenção de transcrições (#12150 P1).** Isso se aplica automaticamente sempre que
o Video Bridge (que é opcional) renderiza uma indicação de transcrição — não há
um indicador de retenção separado. Quando uma solicitação renderiza qualquer
indicação de transcrição (um `transcript` declarado pelo chamador ou um
`audioTranscript` resultante da fusão), a proteção a marca como
`videoBridgeObserved` e produz uma cópia oculta e editada da descrição do vídeo —
uma renderização idêntica na qual o corpo de texto livre de cada indicação é
substituído por `[redacted-video-transcript]`, construída pela substituição do
campo estruturado da indicação antes da montagem da string (nunca pela análise
do texto achatado, de modo que nenhum conteúdo da indicação — malicioso ou
comum, incluindo corpos que contenham `]`, como `[inaudible]`/`[music]` — possa
sobreviver). O corpo da solicitação persistido no log de chamadas troca cada
parte de texto derivada do vídeo por essa cópia editada, fazendo a correspondência
pela igualdade do conteúdo; a âncora `fullText` é lida novamente da carga útil
finalizada da proteção anterior à chamada, para que a correspondência continue
funcionando depois que proteções posteriores da cadeia (os mascaradores de PII e
credenciais, com prioridades 10/95) reescrevem o texto da descrição no local e
depois que a injeção de prompt do sistema, transferência e memória remodela o
array de mensagens. O corpo enviado ao modelo upstream permanece inalterado. Uma
solicitação observada também não preenche nenhuma Memory durável (a extração
derivada tanto da solicitação quanto da resposta é ignorada), portanto, a própria
resposta do modelo não pode repetir o texto da transcrição na Memory.

**Campos brutos de vídeo (#12430).** Quando a ponte está habilitada e o suporte
nativo a vídeo é desconhecido ou está ausente, campos `transcript`/
`audioTranscript` definidos também ativam `videoBridgeObserved`, mesmo após uma
falha na descrição ou um limite de `maxVideos`. `null` e strings vazias contam;
campos ausentes e metadados que não sejam de vídeo não contam. As cópias retidas
editam esses campos ou omitem a solicitação, e caches/Memory são ignorados. A
carga útil do provedor permanece inalterada.

Cópias retidas adicionais usam o mesmo sinal de solicitação observada. O snapshot
bruto da solicitação do cliente anterior à proteção, a solicitação pendente em
memória e o log de solicitação rejeitada antecipadamente substituem
estruturalmente os campos de transcrição nas partes de vídeo; prompts em string
sintetizados por estágios do pipeline e pela transferência de contexto são
editados no destino do corpo persistido da solicitação. O marcador persistido
`video_content_removed` faz com que a continuação por `previous_response_id`
falhe de forma segura, em vez de reconstruir um texto que foi descartado
intencionalmente. Se uma solicitação observada perder sua cópia editada por parte
antes do registro, ou se até mesmo uma dentre várias cópias de vídeo não
corresponder após mutações posteriores da solicitação, o corpo retido da
solicitação será totalmente omitido, em vez de reter uma transcrição apenas
parcialmente editada.

Para uma solicitação observada, uma resposta do modelo pode citar qualquer parte
da transcrição sem um limite estruturado de indicação. Portanto, seu
`responseBody` persistido no log de chamadas é substituído por um marcador de
omissão; o artefato detalhado do pipeline (que pode incluir corpos do
upstream/cliente e blocos do stream) não é retido. Os caches semântico, de
idempotência e de repetição de raciocínio ignoram leituras e gravações dessa
solicitação. A solicitação ao provedor e a resposta visível ao cliente permanecem
inalteradas. Os bytes iniciais de keepalive são drenados do buffer temporário
quando o artefato detalhado é omitido. O aviso de EventStream malformado do Kiro
relata somente a contagem de bytes da carga útil, nunca seu conteúdo nem o erro
bruto do analisador JSON.
Isso não afirma que todos os diagnósticos não relacionados de provedores/plugins
tenham sido auditados; a verificação mais ampla dos destinos retidos é
acompanhada em #11658.

O ciclo de vida interno de `/api/modality-bridge/video/drilldown` é um substrato
de cache separado, autenticado por loopback/token. Cada operação também exige um
ID principal opaco canônico. Antes de um chamador de produção ser habilitado, ele
deve derivar esse ID do tenant autenticado e nunca deve encaminhar um valor
selecionado pelo cliente. As chaves do cache vinculam esse principal a IDs
canônicos de sessão e de referência de vídeo, armazenam apenas suas chaves
derivadas de SHA-256 e limitam tanto as leituras quanto a exclusão ao mesmo
principal. O cache armazena no máximo 16 quadros JPEG derivados por entrada,
expira-os após dez minutos e oferece suporte a leituras limitadas por
`start`/`end` ou à exclusão explícita da sessão.

Cada principal é limitado a 16 entradas e 64 MiB de dados JPEG canônicos. Esses
limites são independentes do teto global de 64 entradas/256 MiB: a pressão da
cota de um principal remove somente as entradas usadas menos recentemente desse
principal antes que a remoção LRU global seja considerada. Entradas expiradas
são removidas da contabilização tanto por principal quanto global durante a
atividade do cache, enquanto cancelamentos e falhas de validação não efetivam uma
substituição parcial.

O cache rejeita Base64 não canônico, preenchimento excessivo, mídia que não seja JPEG, JPEGs malformados ou truncados e JPEGs que produzam um aviso durante uma decodificação completa da imagem com limites definidos pelo `sharp`. Cada imagem aceita é recodificada como um JPEG canônico; a largura e a altura são obtidas dos bytes decodificados, em vez de se confiar nos campos fornecidos pelo chamador; e quaisquer bytes poliglotas ao final são descartados, em vez de preservados. Somente o buffer comprimido canônico e limitado é contabilizado em ambas as cotas. O limite de transmissão JSON inclui a sobrecarga do Base64 para o teto de 32 MiB da entrada decodificada. Cada derivação armazenada registra seu formato/resolução JPEG validados, política de amostragem, versão da derivação, horário de criação, hash de conteúdo calculado pelo servidor, referência ao pai com hash e o hash de conteúdo do pai fornecido pelo chamador confiável. O cancelamento é verificado entre as fases assíncronas de decodificação/hash, antes da confirmação atômica no cache.

Esta etapa ainda não conecta um produtor de produção à rota e não fornece seleção de variantes em múltiplas resoluções. Portanto, o caminho transparente de requisição da Video Bridge não incorre em trabalho adicional, enquanto a derivação de principal vinculada ao locatário e o ciclo de vida completo de múltiplas resoluções do FU-08 permanecem como trabalhos posteriores explícitos, em vez de serem documentados como comportamento concluído.

Os frames recebem legendas sequencialmente com o modelo de Video configurado. Uma substituição de Video vazia herda a configuração de Vision; se ambas estiverem vazias, o roteador automático de Vision seleciona o modelo efetivo com suporte a visão. As legendas bem-sucedidas substituem a parte original por um prefixo estável `[Video description:` que também identifica o texto como uma observação não confiável derivada da mídia e instrui os modelos subsequentes a não seguir instruções encontradas na mídia. As chaves de cache das legendas dos frames incluem os bytes do JPEG, o prompt, o timestamp e o modelo efetivo; somente legendas bem-sucedidas são armazenadas em cache. As entradas de cache preservam o modelo produtor que efetivamente teve sucesso, incluindo um modelo de fallback; a bridge relata `mixed` quando frames diferentes foram produzidos por modelos diferentes. Um acerto de cache reutiliza essa identidade do produtor, em vez de rotulá-la novamente como o plano de roteamento solicitado. O cache de resultados do vídeo completo usa como chave todas as entradas que alteram a saída — prompt, modelo efetivo, política de amostragem, contagem de frames, modo de análise semântica, impressão digital SHA-256 da dica de foco normalizada, janela de foco, `transcript`, `audioTranscript` e o sinalizador de folha de contatos — portanto, alterar qualquer uma dessas dimensões resulta em uma falha de cache, nunca na reutilização de dados obsoletos. A versão da política de deduplicação visual, o limite e a contagem limitada de frames candidatos também são explícitos na chave e nos metadados do cache de resultados; assim, uma alteração de política não pode reutilizar uma descrição obsoleta do vídeo completo. Os metadados v4 do cache de resultados preservam o modo e a impressão digital, nunca a tarefa bruta do usuário. Os metadados da proteção relatam os modos de análise solicitado e efetivo; um modo `focused` solicitado sem texto utilizável do usuário é relatado como efetivamente `full`.

A proteção extrai todas as partes de vídeo compatíveis, mas descreve no máximo `modalityBridgeVideoMaxVideos`. Para um destino comprovadamente definido com `supportsVideo === false`, vídeos com falha e vídeos acima do limite tornam-se marcadores de texto seguros explícitos, para que nenhum vídeo bruto sobreviva. Quando a capacidade é desconhecida, essas partes permanecem inalteradas. Destinos com `supportsVideo === true` ignoram a bridge. O sinal de cancelamento da requisição do cliente é propagado pelo download, pela fila do broker, pelos subprocessos e pelas chamadas de geração de legendas; os cancelamentos interrompem o processamento entre os vídeos e nunca deixam a mídia bruta passar em caso de falha.

As configurações de runtime são armazenadas no banco de dados e validadas pelo Zod:

| Chave                               | Padrão      | Intervalo / comportamento                                                                                   |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Runtime opcional, habilitado mediante adesão                                                                |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` preserva legendas genéricas; `focused` usa contexto limitado e não confiável do usuário mais recente |
| `modalityBridgeVideoModel`          | `""`        | Herda o modelo da Vision Bridge                                                                             |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                        |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` ou `segment_aware` proporcional; falhas do detector usam `uniform` como fallback   |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                         |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                              |

Valores legados persistidos para o timeout de Video acima de 120 segundos são limitados ao prazo do broker; novas gravações de configurações acima desse limite são rejeitadas. `GET /api/modality-bridge/video/runtime` exige localidade loopback confiável e carimbada antes da autenticação ou sondagem do runtime e, em seguida, exige autenticação de gerenciamento. Ele retorna somente `available`, versões sanitizadas do FFmpeg/ffprobe e um motivo fixo quando o runtime está indisponível. O endpoint interno de extração não é uma API pública de upload: a saturação da fila retorna `503` mais `Retry-After`, uma desconexão do chamador retorna `499` e o prazo fixo do broker retorna `504`. As respostas convertidas adicionam `video->text;model=<visionModel>;parts=<videos>` ao cabeçalho central `x-omniroute-modality-bridge` sem remover segmentos de Vision ou Audio.

### Mascarador de PII (`piiMasker.ts`)

É executado em **ambos** os estágios.

- **`preCall`** clona o payload, percorre `system`, `messages`, `input` e
  `prompt` (incluindo itens que são strings simples) e aplica `processPII()` (de
  `@/shared/utils/inputSanitizer`) aos campos de string `content`/`text`. Quando
  `PII_REDACTION_ENABLED=true`, as PII detectadas são ocultadas no payload de
  saída. Isso é independente de `INPUT_SANITIZER_MODE` (que controla apenas a
  política de injeção de prompt). Quando a ocultação está desativada, a chamada
  registra as contagens de detecções sem reescrever o conteúdo.
- **`postCall`** clona profundamente a resposta, executa `sanitizePIIResponse()`
  junto com o mascarador do formato da Responses API (`maskResponsesOutput` —
  abrange `output_text` e `output[].content[].text`). Se ocorrer alguma
  ocultação, a resposta modificada substituirá a original.

O mecanismo de proteção nunca bloqueia; ele apenas adiciona anotações
(`meta.detections`, `meta.redacted`) ou reescreve o conteúdo.

### Injeção de prompt (`promptInjection.ts`)

Detecta estruturas adversariais em conteúdo fornecido pelo usuário e aplica a
política configurada. O comportamento é determinado por variáveis de ambiente e
opções do construtor:

| Configuração       | Variável de ambiente                                                                                 | Padrão | Efeito                                                                                                                                                                                                         |
| ------------------ | ---------------------------------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Habilitado         | `INPUT_SANITIZER_ENABLED`                                                                            | `true` | Quando `false`, o mecanismo de proteção retorna imediatamente.                                                                                                                                                 |
| Modo               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn` | Política de injeção: `block`, `warn` ou `log`. (`redact` é aceito para retrocompatibilidade, mas **não** remove texto de injeção; a reescrita de PII da solicitação é controlada por `PII_REDACTION_ENABLED`.) |
| Limite de bloqueio | Opção `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Gravidade mínima necessária para bloquear. Por padrão, a gravidade média é apenas observada.                                                                                                                   |

**Precedência do modo** (`getMode`): `options.mode` do chamador →
**substituição por feature flag do BD** para `INJECTION_GUARD_MODE` (Dashboard →
Settings → Feature Flags) → variável de ambiente `INJECTION_GUARD_MODE` →
variável de ambiente `INPUT_SANITIZER_MODE` → `warn`. Portanto, uma substituição
feita pelo painel tem precedência sobre as variáveis de ambiente, permitindo que
a interface de Feature Flags controle o mecanismo de proteção em execução e em
tempo real (sem reinicialização). A leitura do BD é tolerante a falhas: se
ocorrer um erro, o mecanismo de proteção retorna ao comportamento baseado nas
variáveis de ambiente e, quando nenhuma substituição é definida, o comportamento
é idêntico à resolução baseada apenas no ambiente.

Fontes de detecção:

1. `sanitizeRequest()` de `@/shared/utils/inputSanitizer` (conjunto compartilhado
   de detectores usado em outras partes do pipeline).
2. `DEFAULT_GUARD_PATTERNS` integrados (atualmente `system_override_inline` e
   `markdown_system_block`, ambos com gravidade `high`).
3. `customPatterns` opcionais fornecidos por meio das opções do construtor
   (strings, expressões regulares ou registros `{ name, pattern, severity }`).

Quando `mode === "block"` **e** pelo menos uma detecção atingir o limite de
gravidade, `preCall` retornará `{ block: true, message: "Request rejected:
suspicious content detected" }`. Nos modos `warn`/`log`, o mecanismo de proteção
registra o evento, mas permite a chamada. O auxiliar compartilhado
`evaluatePromptInjection()` também é exportado para chamadores que precisam
avaliar prompts sem passar pelo registro.

**Limite de varredura (v3.8.20):** o detector inspeciona apenas os **primeiros
16 KB** do texto combinado do prompt — `MAX_INJECTION_SCAN_BYTES = 16 * 1024`
(16 384 bytes) em `src/shared/utils/inputSanitizer.ts`. Tanto
`detectInjection()` quanto `evaluatePromptInjection()` executam
`slice(0, MAX_INJECTION_SCAN_BYTES)` antes de percorrer os padrões. As diretivas
de injeção ficam próximas do início de uma entrada; portanto, isso limita o uso
de CPU/GC pelas expressões regulares em payloads com centenas de KB sem
enfraquecer a detecção (cf. #3932, #4041).

### Mascarador de credenciais (`credentialMasker.ts`)

É executado em **ambos** os estágios, por último na cadeia padrão (prioridade
`95`). Oculta padrões conhecidos de chaves de API/tokens secretos tanto do
payload de saída (conteúdo de mensagens, argumentos de chamadas de ferramentas
e resultados de ferramentas) **quanto** da resposta do provedor, para que uma
credencial colada em um prompt (ou reproduzida pelo resultado de uma ferramenta)
não seja vazada para o provedor upstream nem de volta para o cliente.

- **Somente por adesão**, seguindo a mesma convenção da redação de PII (próximo à Regra Rígida nº 20):
  desabilitado, a menos que `settings.credentialRedactionEnabled === true` **ou**
  `CREDENTIAL_REDACTION_ENABLED=true`. Quando desativado, o guardrail não realiza nenhuma ação —
  nunca bloqueia nem reescreve.
- `redactCredentials()` percorre toda a árvore de payload/resposta (`walkValue()`,
  protegido contra poluição de protótipo e contra ciclos por meio de `WeakSet`) e substitui as correspondências por
  um placeholder `[REDACTED:<type>]`, clonando somente as ramificações que realmente
  foram alteradas.
- `CREDENTIAL_PATTERNS` abrange chaves de provedores de LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens de VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), chaves de pagamento (Stripe, Square), chaves de
  nuvem (chave de acesso da AWS, Twilio, SendGrid, Mailgun), chaves privadas/JWTs,
  strings de conexão contendo credenciais (`mongodb://user:pass@...` etc.) e
  um padrão genérico para valores de cabeçalhos `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Chaves no formato de cabeçalho (`authorization`, `x-api-key`, `api-key`,
  `apikey`) são redigidas estruturalmente (somente o valor, preservando o prefixo do esquema, como
  `Bearer `/`Basic `), em vez de usar a expressão regular genérica de texto.
- O guardrail nunca bloqueia; ele apenas reescreve (`modifiedPayload` /
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
  message?: string; // exibida quando há bloqueio
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // retornado por preCall para reescrever a solicitação
  modifiedResponse?: TValue; // retornado por postCall para reescrever a resposta
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

Um guardrail sinaliza "nenhuma alteração" retornando `void`, `{}` ou
`{ block: false }`. Retornar um `modifiedPayload`/`modifiedResponse` substitui
o valor que percorre a cadeia para os guardrails subsequentes.
`signal?: AbortSignal` leva o ciclo de vida do chamador até os guardrails. O cancelamento de uma solicitação é a exceção deliberada de fail-open: as pontes de mídia interrompem o trabalho e realizam a limpeza sem restaurar a mídia bruta para um destino que sabidamente não oferece suporte a ela.

## Registro (`registry.ts`)

O singleton `guardrailRegistry` expõe:

- `register(guardrail)` — adiciona (ou substitui por nome normalizado) um guardrail e
  reordena por `priority` ascendente.
- `clear()` / `list()` — auxiliares administrativos.
- `runPreCallHooks(payload, context)` — itera sobre os guardrails ativos, passa o
  payload através de `modifiedPayload`, e para no primeiro `block: true`.
- `runPostCallHooks(response, context)` — mesmo fluxo no lado da resposta.
- `resetGuardrailsForTests({ registerDefaults })` — limpa o estado e opcionalmente
  registra novamente os padrões para um isolamento de teste limpo.

Ambos os executores retornam `{ blocked, payload|response, results, guardrail?, message? }`
onde `results` é um array de registros `GuardrailExecutionResult` que incluem
os campos `blocked`, `skipped`, `modified`, `error` e `meta` por guardrail,
úteis para rastreamento.

### Desabilitando Guardrails Por Requisição

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agrega uma
lista deduplicada de nomes de guardrails que devem ser ignorados para a
requisição atual. Fontes (todas opcionais, todas mescladas):

- `apiKeyInfo.disabledGuardrails`
- Corpo da requisição `disabledGuardrails` (nível superior)
- Corpo da requisição `metadata.disabledGuardrails`
- Cabeçalho `x-omniroute-disabled-guardrails` (ou legado
  `x-disabled-guardrails`)

Os valores podem ser arrays de strings ou uma string separada por vírgulas; os nomes são
normalizados para kebab-case em minúsculas (`pii_masker` → `pii-masker`). O resultado
é passado através de `context.disabledGuardrails` para o registro, que ignora
os guardrails correspondentes (`skipped: true` em `results`).

## Ordem de Execução

Para cada requisição que passa por `src/sse/handlers/chat.ts` e
`open-sse/handlers/chatCore.ts`:

1.  `resolveDisabledGuardrails(...)` constrói a lista de ignorados a partir da chave da API, corpo e cabeçalhos.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` executa os guardrails em ordem crescente de prioridade:
    - Guardrails desabilitados são registrados como `skipped`.
    - O `preCall` de cada guardrail pode reescrever o payload via `modifiedPayload`.
    - O primeiro `block: true` interrompe a cadeia e o handler retorna uma resposta de rejeição do guardrail.
3.  O payload (potencialmente reescrito) flui para o roteamento combinado e despacho upstream.
4.  Após a resposta ser montada, `guardrailRegistry.runPostCallHooks(...)` executa a mesma cadeia na resposta. `block: true` aqui descarta a resposta upstream.

Guardrails que lançam exceções são registrados com `error: <message>` e logados via
`logger.warn`, mas a cadeia continua — fail-open por design.

## Configuração

Variáveis de ambiente lidas pelos guardrails integrados:

| Variável                              | Usado por                 | Efeito                                                                                                                   |
| :------------------------------------ | :------------------------ | :----------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Defina `false` para desabilitar a detecção completamente.                                                                |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Política de injeção: `warn`, `block`, ou `log`. O valor legado `redact` não reescreve o texto de injeção.                |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Modo para o guardrail de injeção; também uma feature flag do DB que **sobrescreve** as variáveis de ambiente (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Severidade mínima que `MODE=block` rejeita: `high` (padrão), `medium`, ou `low`.                                         |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Alias legado para `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                     |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Quando `true`, PII da requisição é redigida (independente do modo de injeção).                                           |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Controla o comportamento do mascarador no lado da resposta.                                                              |

Os guardrails do Modality Bridge leem a configuração de tempo de execução do armazenamento de configurações baseado em DB (`getSettings()`), e não das variáveis de ambiente. As chaves primárias do Vision são
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, e
`modalityBridgeCacheMaxEntries`. As chaves legadas
`visionBridge*` são aceitas apenas como o fallback de leitura de um ciclo documentado; as escritas do dashboard usam as chaves primárias. Os padrões e o resolvedor de fallback residem em `src/shared/constants/modalityBridgeDefaults.ts`, com as constantes legadas mantidas em `src/shared/constants/visionBridgeDefaults.ts`.

O Áudio usa `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout`, e `modalityBridgeAudioMaxClips`, além das configurações compartilhadas `modalityBridgeCache*`. O Áudio não possui fallback de chave legada porque essas chaves foram introduzidas com o esquema do Modality Bridge.

O Vídeo usa `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, e
`modalityBridgeVideoTimeout`, além das configurações compartilhadas `modalityBridgeCache*`.
Ele é desabilitado por padrão porque FFmpeg/ffprobe são dependências operacionais opcionais e a legendagem de quadros adiciona latência e custo de modelo.

## Guardrails Personalizados

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

1. Crie `src/lib/guardrails/myGuardrail.ts` estendendo `BaseGuardrail`.
2. Implemente `preCall` e/ou `postCall`.
3. Registre no momento da importação (push de `registerDefaultGuardrails`) ou
   chame `guardrailRegistry.register(...)` em tempo de execução — o registro substitui
   qualquer guardrail anterior com o mesmo nome normalizado.
4. Adicione testes em `tests/unit/` (exemplos existentes:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testando

Use `resetGuardrailsForTests()` entre os testes para começar de um estado conhecido.
Passe `{ registerDefaults: false }` para começar com um registro vazio e
registrar apenas os guardrails em teste. O Vision Bridge aceita injeção de dependência
(`deps.getSettings`, `deps.callVisionModel`); o Audio Bridge expõe as
equivalentes para configurações, capacidades, seleção de modelo STT, verificações de credenciais e transcrição. Os testes podem, portanto, exercitar ambos os fluxos sem acesso a DB ou rede.

## Veja Também

- `src/lib/guardrails/` — implementação
- `src/shared/utils/inputSanitizer.ts` — detector compartilhado que alimenta
  a injeção de prompt e a mascaramento de PII
- `src/shared/constants/visionBridgeDefaults.ts` — Padrões do Vision Bridge e
  lista de modelos de ponte forçada
- `src/shared/constants/modalityBridgeDefaults.ts` — Padrões de tempo de execução compartilhados Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — camada ortogonal (disjuntor, resfriamentos)
- `docs/reference/ENVIRONMENT.md` — referência completa de variáveis de ambiente

## Cobertura de rota de proteção contra injeção e equipe vermelha (Fase 8 · Bloco D)

A proteção contra injeção (`createInjectionGuard` / `withInjectionGuard`) cobre todas as rotas
que aceitam prompts de usuário. Ela respeita `INJECTION_GUARD_MODE` (padrão `warn` = apenas log;
`block` = retorna HTTP 400 `SECURITY_001`).

| Tipo              | Rotas                                                                                                                                                | Modo padrão |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Texto (existente) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn        |
| Generativo        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn        |
| Dados             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn        |

A extração de texto (`extractMessageContents`) cobre `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Equipe vermelha (noturno, `nightly-llm-security.yml`):** promptfoo valida que cada rota bloqueia
o corpus OWASP-LLM em `INJECTION_GUARD_MODE=block`; garak executa sondas (ignora sem segredo).
`moderations` está incluído para consistência — operadores em modo de bloqueio podem isentá-lo via
`resolveDisabledGuardrails`.

O fluxo de trabalho noturno (`.github/workflows/nightly-llm-security.yml`, cron + despacho manual)
tem dois trabalhos:

- **`promptfoo-guard` (bloqueio)** — executa `promptfoo eval -c promptfooconfig.yaml`
  com `INJECTION_GUARD_MODE=block`. Cada caso adversarial (por exemplo, "ignore todas
  as instruções anteriores...", jailbreaks estilo DAN) afirma que a resposta contém
  `error.code === "SECURITY_001"`, ou seja, a proteção realmente rejeitou a solicitação.
- **`garak` (consultivo)** — executa garak `--probes promptinject,dan,leakreplay`
  contra uma instância local do OmniRoute (`http://localhost:20128/v1`). Protegido por um
  segredo do provedor (`PROMPTFOO_PROVIDER_KEY`); ignora graciosamente e é sufixado
  `|| true`, para que ele relate sem falhar o CI.

A cobertura do auxiliar de proteção (`createInjectionGuard` / `withInjectionGuard`)
abrange todas as rotas `/v1` que contêm prompts; o texto do prompt é extraído de
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` por
`extractMessageContents()` em `src/shared/utils/inputSanitizer.ts`.
