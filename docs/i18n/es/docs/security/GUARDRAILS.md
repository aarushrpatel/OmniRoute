# Guardrails (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Fuente de referencia:** `src/lib/guardrails/`
> **Última actualización:** 2026-08-29 — v3.8.51 (la procedencia de la transcripción de Video Bridge es declarada por quien realiza la llamada,
> aún no está verificada por el servidor — aclarado según #11661)

Las barreras de seguridad aplican medidas de seguridad, políticas y transformaciones de contenido en el límite
entre OmniRoute y los proveedores ascendentes. Cada barrera puede inspeccionar (y
opcionalmente rechazar, transformar o anotar) las cargas útiles de las solicitudes (`preCall`) y
las respuestas ascendentes (`postCall`).

El sistema es **fail-open**: si una barrera genera una excepción durante la ejecución, el registro
guarda el error y continúa con la siguiente barrera en lugar de hacer que falle la
solicitud. El bloqueo es una decisión explícita (`block: true`), nunca un accidente.

## Barreras de protección integradas

El registro carga automáticamente seis barreras de protección en orden de prioridad al importarse
(consulte `registry.ts` → `registerDefaultGuardrails()`):

| Prioridad | Nombre              | Etapa(s)       | Archivo               |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Los números de prioridad más bajos se ejecutan **primero**.

### Puente de visión (`visionBridge.ts`) — Puente de modalidad PR-1

Intercepta solicitudes que contienen imágenes dirigidas a **modelos sin capacidades de visión** y redirige la solicitud completa a un modelo con capacidades de visión o sustituye las partes de imagen por descripciones textuales generadas por un modelo de visión configurable antes de realizar la llamada al servicio de nivel superior. Esto permite que los proveedores de solo texto procesen de forma transparente cargas multimodales.

Flujo:

1. Se omite si el modelo de destino ya admite visión (a menos que aparezca en la lista de puente forzado `isVisionBridgeForcedModel`).
2. Se extraen las partes de imagen mediante `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), que delega en el **detector de contenido multimedia unificado** `detectMediaParts()` de `open-sse/utils/mediaParts.ts`, la única fuente de información compartida con el filtro de compatibilidad de combinaciones.
   La extracción se limita mediante una lista de permitidos a las partes de nivel superior con las formas que `replaceImageParts` puede volver a insertar (el contrato de extracción↔sustitución): `image_url` de OpenAI, `source.type:"base64"` de Anthropic, `source.type:"url"` de Anthropic e `input_image` de la API Responses. Las coincidencias anidadas y las formas que solo contienen indicadores corresponden al filtro de combinaciones y nunca se extraen.
   Se omite si no se encuentra ninguna.
3. Se resuelve la configuración en tiempo de ejecución mediante `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): las nuevas claves de configuración `modalityBridge*` tienen prioridad; las claves heredadas `visionBridge*` permanecen como **alternativa durante un ciclo** (ventana de reversión). Se omite antes de recorrer cualquier contenido multimedia cuando el puente está deshabilitado.
4. El selector de modo (`modalityBridgeVisionMode`, consulte la tabla siguiente) decide entre redirigir y describir. La redirección devuelve `modifiedPayload` únicamente con `model` sustituido, además de los metadatos `{ rerouted, fromModel, toModel, imagesKept }`.
5. Ruta de descripción: limita las imágenes a `maxImages`, compone el prompt adaptado a la tarea, consulta la caché de descripciones, llama al modelo de visión **en paralelo**
   (`Promise.allSettled`) e inserta en su lugar partes de texto con el formato `[Imagen N]: <descripción>`. Una descripción fallida produce `null` y la parte de imagen original se **conserva** (#4012), excepto en la ruta de descripción de combinaciones cuando todas las descripciones han fallado; en ese caso, un servicio de nivel superior confirmado sin capacidades de visión recibe en su lugar un texto de sustitución `(no disponible — no hay ningún proveedor con capacidades de visión conectado)` (#8430).
6. Devuelve `modifiedPayload` junto con los metadatos (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selector de modo (`modalityBridgeVisionMode`)

| Modo       | Predeterminado | Comportamiento                                                                                                                                                                                                                                                                                                                                         |
| ---------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔              | Heurística heredada, sin cambios (#6640/#7204): los modelos que no son combinaciones o los modelos `auto/` se redirigen al mejor modelo de visión, salvo que el modelo original ya tenga credenciales utilizables (en cuyo caso se describe); los destinos de combinación siempre describen.                                                           |
| `describe` |                | Siempre describe: el bloque de redirección se omite por completo; siempre responde el modelo elegido por el usuario.                                                                                                                                                                                                                                   |
| `reroute`  |                | Fuerza la redirección: se omite la protección que conserva el modelo con credenciales. La protección de credenciales del **destino** de la redirección continúa aplicándose; cuando no existe un destino de visión utilizable, la solicitud pasa a la descripción para que las imágenes sin procesar nunca lleguen a un backend de solo texto (#8430). |

Los modos forzados producen un cortocircuito **antes** de que se ejecute la heurística automática; el comportamiento de `auto` es idéntico byte por byte al de la barrera de protección anterior a PR-1.

#### Alcance de la clave de API (`visionBridgeKeyScope.ts`)

Cuando la clave de API de quien realiza la llamada restringe `allowedConnections`, los grupos de cuotas
(`allowedQuotas`) o los modelos (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), el puente solo selecciona modelos de redirección y descripción que la clave pueda utilizar, en conexiones que la clave pueda utilizar. Después, la llamada de descripción siempre pasa por el bucle interno de OmniRoute con la cabecera `x-omniroute-self-loop-key-id`, de modo que la solicitud de chat receptora vuelve a aplicar la política de conexiones y modelos de esa clave. `enforceApiKeyPolicy()` solo acepta esa cabecera junto con el bearer del bucle interno, por lo que únicamente puede restringir el acceso, y se rechaza cualquier id que no pueda resolverse.

Si la clave no tiene permitido ningún modelo de visión, la ruta de descripción no interviene y la solicitud pasa sin modificaciones, con el mismo comportamiento permisivo ante fallos que una barrera de protección deshabilitada (metadatos `{ skipped: true, reason: "no_permitted_vision_model" }`).
Las solicitudes sin clave y las claves sin estas restricciones se comportan exactamente igual que antes.

#### Prompt de descripción adaptado a la tarea (`modalityBridgeVisionTaskAware`)

Valor predeterminado: **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) añade
el texto del **último mensaje del usuario** (truncado a 500 caracteres) al prompt
base de descripción, orientando la descripción hacia lo que realmente pidió el
usuario (patrón codex-vision-proxy) y solicitando al modelo de visión que transcriba
el texto visible. Con la opción desactivada —o si no hay texto del usuario—, el
prompt base se utiliza sin cambios.

La solicitud compatible con OpenAI del propio bucle de autodescripción
(`callVisionModelSingle()` en `visionBridgeHelpers.ts`) siempre solicita
`image_url.detail: "high"` —incondicionalmente, para cada llamador/proveedor, sin
depender de ninguna señal del cliente. El muestreo con un nivel de detalle bajo
degrada la precisión del OCR precisamente en la tarea de transcripción de texto
que solicita este prompt, por lo que la propia llamada de descripción siempre
solicita un nivel de detalle alto, independientemente del nivel de detalle
utilizado por la solicitud entrante original. Esto solo afecta al cuerpo de la
solicitud interna de descripción; no cambia la forma en que OmniRoute reenvía el
`image_url.detail` del propio llamador en la solicitud principal —ese valor
predeterminado se aplica por separado y solo para clientes OpenCode detectados,
en `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). La rama
con formato de conexión Anthropic del bucle de autodescripción no tiene ningún
campo `detail` y no se ve afectada por ninguno de los valores predeterminados.

#### Límite de salida de la descripción (`modalityBridgeVisionMaxChars`)

| Clave                          | Valor predeterminado | Intervalo       |
| ------------------------------ | -------------------- | --------------- |
| `modalityBridgeVisionMaxChars` | `0`                  | `0` o 100–50000 |

`0` (valor predeterminado) significa **sin límite**: la descripción devuelta por
`callVisionModel()` se transfiere sin modificaciones, conservando el
comportamiento existente. Cualquier valor en el intervalo 100–50000 trunca la
descripción con un sufijo `…` antes de insertarla de nuevo como
`[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` en
`src/lib/guardrails/visionBridge.ts`). Aumente este valor para tareas de OCR con
muchos detalles en las que el modelo posterior necesite la transcripción
completa; redúzcalo para limitar el uso de tokens en modelos de visión
prolijos. El campo del panel de control se encuentra en el panel Advanced de la
pestaña Vision (`modality-bridge-max-chars` en
`ModalityBridgeVisionTab.tsx`) y ajusta cualquier valor entre 1 y 99 al mínimo
de 100, mientras deja intacto un `0` explícito; `0` es un valor Zod válido por
derecho propio
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), no solo el
valor predeterminado «no establecido».

#### Caché de descripciones (`modalityBridge/bridgeCache.ts`)

Caché LRU + TTL en memoria para las salidas de descripción, compartida en todo
el proceso. Clave = `sha256(imageRef + composedPrompt + configuredBridgeModel)`
con delimitación por prefijos de longitud (sin colisiones entre límites de
campos). El componente del modelo es el modelo de puente **configurado**, no el
modelo que respondió realmente —`callVisionModel` puede recurrir internamente a
un modelo alternativo, y crear claves por intento fragmentaría la caché. Las
descripciones fallidas nunca se almacenan en caché. Configuración:

| Clave                           | Valor predeterminado | Intervalo |
| ------------------------------- | -------------------- | --------- |
| `modalityBridgeCacheEnabled`    | `true`               | —         |
| `modalityBridgeCacheTtlMinutes` | `60`                 | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`                | 10–5000   |

#### Normalización de imágenes remotas (descripción en bucle propio/obtención en base64)

Cuando el puente obtiene por sí mismo una imagen **remota** —la llamada interna
de descripción de Anthropic y la conversión a base64 con formato de conexión
claude (`ensureBase64ImagesForClaudeWire`), ambas mediante
`fetchRemoteImageAsDataUri()` en `visionBridgeHelpers.ts`—, el URI de datos
resultante se procesa mediante `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) antes de incrustarse en la solicitud al
modelo de visión. Las imágenes sobredimensionadas se reducen a un **lado largo
de 2048px** (en consonancia con el límite de redimensionamiento que
OpenAI/Anthropic ya aplican en el servidor), lo que reduce los bytes de carga y
la latencia sin cambiar lo que ve el modelo de visión. El redimensionamiento
utiliza `sharp`, cargado mediante importación dinámica: en una plataforma donde
su binario nativo no pueda cargarse, `normalizeDataUri()` **nunca genera una
excepción** —recurre a transferir los bytes originales sin cambios, por lo que
la ruta de descripción/conversión a base64 sigue funcionando en todo momento.
Los bytes que no correspondan a una imagen (una obtención que no haya devuelto
una imagen decodificable) también se transfieren sin cambios. Esta normalización
se limita a las imágenes que el puente obtiene para su propia llamada interna;
nunca se aplica a la carga útil sin procesar transferida directamente por el
llamador, de acuerdo con el principio de modificación exclusivamente voluntaria
(Regla estricta n.º 20).

#### Esquema de configuración + migración

Las nuevas claves `modalityBridge*` se validan con Zod en
`updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`):
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, el trío
`modalityBridgeCache*` y el grupo `modalityBridgeAudio*` utilizado por Audio
Bridge. La migración `141_modality_bridge_settings.sql` copia los valores
heredados existentes de `visionBridge*` a las nuevas claves correspondientes
(de forma idempotente, sin sobrescribir nunca un valor `modalityBridge*`
establecido por un operador); las claves heredadas siguen aceptándose como
alternativa de lectura durante un ciclo de versiones.

#### Encabezado de transparencia + estadísticas

Las respuestas transformadas mediante descripción incluyen
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(generado por `buildModalityBridgeHeader()` en
`modalityBridge/bridgeStats.ts`, añadido por `withModalityBridgeHeader()` en
`src/sse/handlers/chatHelpers.ts`). Las solicitudes redirigidas **no** reciben
ningún encabezado: la carga útil no se modificó y el cambio de modelo ya es
visible en el campo `model` del cuerpo de la respuesta.

`GET /api/modality-bridge/stats` (autenticación de administración, mismo nivel que
`GET /api/settings`) devuelve los contadores en memoria por modalidad
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` para `vision`, `audio` y
`video`. `averageLatencyMs` utiliza `latencySamples`, no todos los intentos, como
denominador; una operación sin medición de tiempo no genera artificialmente una
muestra de cero milisegundos. `bridged` sigue siendo el alias retrocompatible para
las conversiones correctas; los intentos fallidos no lo incrementan.
Por diseño, los contadores se restablecen cuando se reinicia el proceso
(telemetría, no contabilidad).

#### Configuración del panel

La página dedicada del panel es
`/dashboard/settings/modality-bridge`. Sus pestañas direccionables mediante URL
`Vision`, `Audio` y `Video` conservan los parámetros de consulta al cambiar el
valor de `tab`. La pestaña Vision permite configurar la activación, el modo, la
selección del modelo (incluido el valor predeterminado automático), los prompts
adaptados a la tarea, los límites avanzados de tiempo de espera/imagen/longitud
de descripción/caché, los contadores de ejecución y una solicitud de muestra
protegida. La pestaña Audio también está operativa: permite configurar la
activación, un selector de modelos solo para STT con Auto, los límites de tiempo
de espera/duración máxima del clip, los contadores de audio y una prueba de
muestra `input_audio`. La pestaña Video es funcional: informa del estado en
tiempo de ejecución de FFmpeg/ffprobe, uno de cuatro estados explícitos de la
interfaz (`unknown` mientras la comprobación está en curso o no pudo completarse,
`restricted` en un host del panel que no sea de bucle invertido, donde la
comprobación se omite en el cliente, `unavailable` una vez comprobado y
confirmado que no está disponible, o `available` con las versiones de
FFmpeg/ffprobe), conserva los límites de activación/modelo/fotogramas/vídeo/tiempo
de espera, filtra el selector de modelos para mostrar modelos con capacidad de
visión y presenta los contadores de vídeo.

La antigua tarjeta Vision Bridge de la configuración de IA es un enlace de
compatibilidad a la nueva página; ya no contiene una segunda copia del
formulario. Media Providers también enlaza los flujos de trabajo Image-to-Text y
Speech-to-Text con las pestañas correspondientes de Modality Bridge sin eliminar
el entorno de pruebas existente de Speech-to-Text.

**Omisión de admisión para el bucle interno:** cuando la llamada de descripción
se enruta mediante el bucle interno `/v1` de OmniRoute (modelo de proveedor no
estándar), la solicitud secundaria envía
`x-omniroute-admission-bypass: internal` y se autentica con la credencial resuelta
del bucle interno: el centinela local `sk_omniroute` en modo local o la clave de
entorno `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` configurada por el operador
(#1350), para que los despliegues con `REQUIRE_API_KEY=true` puedan seguir
ejecutando la llamada de descripción. La omisión solo se admite para esas
credenciales exactas, por lo que los clientes externos no pueden utilizar la
cabecera para saltarse la admisión.

Los valores predeterminados heredados se encuentran en
`src/shared/constants/visionBridgeDefaults.ts`; los nuevos valores predeterminados
de modo/tareas/caché y el resolvedor de configuración se encuentran en
`src/shared/constants/modalityBridgeDefaults.ts`. El mecanismo de protección
expone una opción de constructor `deps` para que las pruebas puedan inyectar
implementaciones falsas de `getSettings` y `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Intercepta las solicitudes de chat que contienen audio antes de que lleguen a un
destino del que no se sabe que acepte entradas de audio. Nunca redirige la
solicitud de chat: las partes de audio se transcriben mediante el endpoint
multipart compatible con OpenAI existente y el modelo de chat seleccionado
continúa con las transcripciones de texto.

Flujo:

1. Resuelve `supportsAudio` mediante `getResolvedModelCapabilities()`. Los
   metadatos explícitos del registro de proveedores tienen prioridad, seguidos
   por los metadatos estáticos del modelo y, después, por `modalities_input`
   sincronizado. Una lista de entradas declarada sin `audio` da como resultado
   `false`; si no hay pruebas sobre la capacidad, el valor sigue siendo `null`.
   Tanto `false` como `null` activan el puente conservador, mientras que `true`
   lo omite.
2. Resuelve la configuración `modalityBridgeAudio*` y extrae de cada mensaje las
   partes de audio de nivel superior que se pueden sustituir mediante el detector
   compartido `detectMediaParts()`. Los formatos de transferencia admitidos son
   `input_audio` y `audio_url` de OpenAI, y
   `source.media_type: "audio/*"`. El audio anidado se detecta para el enrutamiento,
   pero la ruta de sustitución no lo elimina. El trabajo está limitado por
   `modalityBridgeAudioMaxClips`; las partes posteriores permanecen intactas.
3. Respeta un `provider/model` configurado o permite que
   `selectAudioBridgeModel()` recorra `AUDIO_TRANSCRIPTION_PROVIDERS` en el orden
   estable del catálogo y seleccione el primer modelo que tenga una credencial
   de proveedor activa y utilizable.
4. `callAudioTranscription()` convierte el audio base64/URI de datos en un
   `file` multipart o descarga un `audio_url` remoto mediante la protección de
   salida exclusiva para recursos públicos, con fijación de DNS y un límite de
   25 MB. A continuación, envía mediante POST el archivo y el modelo
   seleccionado al bucle interno local `/v1/audio/transcriptions`, autenticado
   con `resolveSelfLoopBearer()`. La ruta de transcripción existente realiza la
   búsqueda normal de credenciales, la gestión de períodos de espera/límites de
   solicitudes y el despacho al proveedor.
5. Las llamadas correctas sustituyen sus partes por
   `[Audio N]: <transcript>`. Las llamadas se ejecutan con
   `Promise.allSettled`: un fallo individual conserva la parte de audio original
   (contrato #4012). Si todas las llamadas fallan y está demostrado que el
   destino tiene `supportsAudio === false`, las partes se convierten en
   `[Audio N]: (unavailable — no STT provider connected)` (contrato #8430). Para
   un destino desconocido (`null`), si todas fallan, el contenido permanece
   intacto. Un destino del que se ha demostrado que solo admite texto y que no
   tiene ninguna credencial STT utilizable recibe el mismo marcador explícito
   sin realizar una llamada de red.

Las transcripciones correctas utilizan la caché LRU/TTL de Modality Bridge
compartida en todo el proceso. La clave combina la referencia de audio, la
etiqueta estable de operación `audio-transcription` y el modelo STT seleccionado;
los fallos nunca se almacenan en caché. Los intentos de audio actualizan los
contadores compartidos `bridged`, `cacheHits`, `failures` y `lastUsedAt`.
Las respuestas transformadas incluyen
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; las
solicitudes intactas no reciben ningún segmento de Audio Bridge.

La configuración de ejecución está respaldada por la base de datos y validada
con Zod:

| Clave                         | Valor predeterminado | Rango                  |
| ----------------------------- | -------------------- | ---------------------- |
| `modalityBridgeAudioEnabled`  | `true`               | —                      |
| `modalityBridgeAudioModel`    | `""`                 | Automático o ID de STT |
| `modalityBridgeAudioTimeout`  | `60000`              | 1000–300000            |
| `modalityBridgeAudioMaxClips` | `3`                  | 1–10                   |

La caché compartida sigue estando controlada por `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` y `modalityBridgeCacheMaxEntries`.

### Puente de vídeo (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepta las partes de vídeo de nivel superior en `messages` de Chat Completions y en
`input` de la API Responses antes de llamar a un destino que no tenga compatibilidad
nativa conocida con vídeo. Los formatos admitidos son `input_video`, `video_url`,
`video_source`, las URL HTTPS y los URI de datos
`data:video/*;base64,...`. Los nombres de archivo simples incluidos en texto no se tratan
como vídeo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) se encarga del recorrido de la solicitud, la
comprobación de capacidades/políticas, la agregación por solicitud y la carga útil de respuesta.
El trabajo por vídeo —la adquisición, la caché de resultados completos, la descripción de una
secuencia de fotogramas (que combina cualquier transcripción de audio declarada por el llamador)
y las métricas, cancelación y limpieza de cada intento— se oculta tras `processVideoPart` en
`videoBridgePipeline.ts`, que se llama una vez por cada parte de vídeo dentro del bucle de `preCall`.
Ese módulo también define los límites de puerto explícitos `VideoMediaBrokerPort`
(adquisición de bytes y extracción de fotogramas muestreados), `VideoAudioTranscriptionPort`
(combinación de una transcripción de audio declarada por el llamador con las descripciones de los fotogramas muestreados) y
`VideoDrilldownPort` (el límite de persistencia para la exploración detallada de fotogramas; aún no está conectado
a `processVideoPart`: actualmente, solo la ruta independiente `/api/modality-bridge/video/drilldown`
escribe entradas de exploración detallada).

La ruta pública de solicitudes `/v1` nunca importa ni invoca un subproceso. Los vídeos remotos
se descargan con un límite de 50 MiB; los vídeos base64 en línea tienen un límite conservador
por vídeo de 36 MiB una vez decodificados, de modo que el contenedor del modelo, los mensajes y el enmarcado
puedan permanecer dentro del límite público de admisión de solicitudes JSON de 50 MiB. La longitud en línea
y las estimaciones del tamaño decodificado se comprueban antes de asignar memoria. Se requiere HTTPS
en la URL remota inicial y en cada redirección, mediante la protección de salida existente
que solo permite destinos públicos y emplea fijación de DNS. A continuación, los bytes atraviesan el límite interno exacto del bróker
`POST /api/modality-bridge/video/extract`. Esa ruta es tanto
`LOCAL_ONLY` como `SPAWN_CAPABLE`, solo acepta solicitudes autenticadas por proceso
y de bucle invertido de confianza, y nunca acepta una URL, una ruta del sistema de archivos, un ejecutable
ni una lista de argumentos. La canalización del límite de tamaño del cuerpo de la API y el lector incremental
del cuerpo del controlador aplican de forma independiente un límite de entrada de 50 MiB para el bróker. Su cola acotada ejecuta
una extracción a la vez, permite cuatro trabajos pendientes y limita la entrada pendiente a
100 MiB.

Dentro del bróker, `ffprobe` lee un archivo local privado; la lista fija de formatos
permitidos excluye los formatos de listas de reproducción y manifiestos. Para los contenedores permitidos de la familia MOV,
las referencias de datos MOV externas permanecen deshabilitadas de forma predeterminada y el
comando fijo no las habilita. Tanto `ffprobe` como `ffmpeg` utilizan la lista blanca de protocolos
exclusiva para `file`, un hilo, matrices de argumentos fijas, ningún shell
y ejecutables resueltos desde `PATH`. Los flujos de imágenes de portada adjuntas no son
candidatos reproducibles. Todos los flujos reproducibles deben satisfacer los límites, y se
prefiere un flujo predeterminado explícito antes de recurrir a la alternativa determinista
con el índice más bajo. Los vídeos están limitados a 600 segundos, 8.192 píxeles por dimensión y
33.554.432 píxeles de origen. FFmpeg muestrea entre 1 y 16 fotogramas JPEG en puntos medios, reduce
el lado largo a un máximo de 1.024 píxeles sin ampliar las entradas más pequeñas y
nunca recibe una URL. El muestreo es `uniform` de forma predeterminada. Las políticas opcionales
`scene_aware` y la experimental `segment_aware` realizan una pasada fija adicional
de FFmpeg sobre el flujo local ya validado, seleccionan marcas de tiempo de escenas `showinfo`
acotadas y, si falla el detector, se agota el tiempo de espera, la salida está mal formada o el
conjunto de candidatos está vacío, recurren de forma determinista a los mismos puntos medios
uniformes. El modo basado en segmentos asigna muestras de puntos medios de forma proporcional a
los intervalos de escena validados; la evidencia basada en segmentos y el comportamiento alternativo se
detallan a continuación. El límite estricto de 16 fotogramas se
aplica después de la selección en todas las políticas. Cuando una solicitud basada en escenas solo dispone de
un presupuesto de un fotograma, utiliza el punto medio uniforme de la ventana activa de vídeo completo o de enfoque
e informa de `policyEffective: uniform`: un único fotograma de escena seleccionado
no puede conservar ambos extremos temporales. El llamador puede proporcionar opcionalmente una
ventana de enfoque finita (`start`/`end` en segundos); los límites se restringen a la duración
del contenido multimedia, se rechazan las ventanas invertidas o no finitas y todas las políticas
de muestreo se aplican únicamente dentro del intervalo normalizado. La ventana resultante
se incluye en los metadatos de muestreo y en el prefijo de descripción no fiable,
de modo que los modelos posteriores puedan distinguir un fragmento enfocado de la cronología
completa.

El enfoque semántico de las descripciones es una configuración explícita independiente. El modo de análisis
`full` predeterminado conserva el mensaje de fotogramas existente y nunca reenvía el texto de la solicitud
al modelo de descripción. En el modo `focused`, el puente solo lee el último
`text`/`input_text` no vacío creado por el usuario en el mismo contenedor de Chat o Responses,
lo normaliza a NFC, contrae los caracteres de control y los espacios en blanco
y lo limita a 500 puntos de código Unicode. Un resultado vacío vuelve al
mensaje `full` exacto. Una indicación utilizable se serializa como JSON en un bloque dedicado
de contexto de usuario no fiable y solo puede priorizar detalles observables; no
puede anular la advertencia independiente que prohíbe seguir instrucciones visibles
o audibles en el contenido multimedia. El enfoque textual nunca deduce `start`/`end` ni modifica
el muestreador temporal.

#### Evidencia estructural de segmentos de FU-07

`segment_aware` utiliza una única pasada acotada de preanálisis sobre el flujo de vídeo local ya validado. La cadena fija de filtros primero reduce la escala a un máximo de 320 píxeles de ancho, detecta cambios de escena e intervalos congelados y, a continuación, toma muestras a 1 fotograma por segundo para medir el desenfoque, la luminancia media y la información espacial/temporal. La pasada está limitada a 600 muestras estructurales, un hilo de FFmpeg/filtros, las mismas listas de permitidos para el protocolo exclusivo `file` y los contenedores, un límite de 1 MiB para la salida del proceso y un máximo de 30 segundos dentro de la cancelación o el plazo compartidos del bróker. Nunca acepta un comando, filtro, ruta ni URL procedente de la solicitud.

Los valores estructurales constituyen evidencia de muestreo determinista, no comprensión semántica del vídeo. No infieren sujetos, acciones, subtítulos, habla ni la intención del usuario. Los límites de escenas y congelaciones forman segmentos; la cobertura de congelaciones, el desenfoque, la exposición, el detalle espacial y el cambio temporal solo influyen en cómo se distribuye el presupuesto existente de 1–16 fotogramas. Un segmento completamente congelado queda limitado a un fotograma, mientras que los segmentos no congelados compiten por el presupuesto restante. Cuando hay más límites que fotogramas, se conserva una cobertura uniforme de la línea temporal para que los cortes rápidos iniciales no puedan ocultar un segmento final largo. Los límites de escenas que estén dentro de la resolución de análisis de 1 segundo de un límite de congelación se fusionan.

La ausencia de filtros, la evidencia vacía o con formato incorrecto, un error del detector o el agotamiento del tiempo de preanálisis acotado permiten continuar mediante la política exacta de puntos medios uniformes. Una cancelación del llamador o el vencimiento del plazo del bróker no permiten continuar: finalizan el subproceso en curso, impiden la extracción posterior de fotogramas y eliminan el árbol temporal privado en `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genera muestras deterministas reales de FFmpeg para evaluar el ahorro en llamadas de generación de subtítulos después de la deduplicación, la asignación del presupuesto con movimiento denso, la evidencia de desenfoque/exposición/SI-TI, los cortes rápidos con una cola larga y los falsos positivos de fundidos graduales. Registra el tiempo real de preanálisis y, cuando `/usr/bin/time` está disponible, el uso de CPU del proceso hijo y el pico de RSS. Sus comprobaciones de calidad son únicamente oráculos estructurales. La calidad con un modelo real de generación de subtítulos permanece en `HOLD` porque este banco de pruebas no dispone de un endpoint autorizado ni de un evaluador fijado. Los ahorros monetarios también permanecen en `HOLD` salvo que `--caption-cost-per-call-usd` proporcione una estimación positiva explícita del coste por llamada; el script nunca inventa ninguno de los dos resultados.

Cada fotograma está limitado a 4 MiB, el conjunto de todos los fotogramas sin procesar a 23 MiB y la respuesta serializada del bróker a 32 MiB. Se elimina un directorio temporal privado en `finally`. OmniRoute no incluye FFmpeg ni acepta una ruta personalizada al ejecutable. Antes de generar subtítulos, el puente aplica una pasada conservadora de deduplicación visual: cada JPEG se reduce a un búfer de escala de grises de 16×16 y se compara únicamente con el último fotograma conservado. Para un presupuesto solicitado de generación de subtítulos superior a un fotograma, la extracción proporciona un conjunto acotado de candidatos de hasta el doble de ese presupuesto y nunca más de 16 fotogramas. El límite solicitado se aplica únicamente después de la deduplicación, y el primer y el último candidato seleccionados se conservan durante la reducción final cuando el presupuesto es de al menos dos. La política versionada `grayscale-16x16-mean-cells-v2` utiliza el mayor valor entre la diferencia de luminancia media y la proporción de celdas de la miniatura cuya diferencia normalizada es de al menos 0.05. El umbral de duplicados es la constante 0.04, elegida por su previsibilidad en lugar de exponerse como una configuración en tiempo de ejecución. Esta señal secundaria de alto contraste conserva los movimientos pequeños y los cambios de texto visible que una comparación basada únicamente en la media podría ocultar. Los errores del comparador o del decodificador permiten continuar y mantienen la cobertura. Los metadatos de salida distinguen entre los candidatos extraídos, los fotogramas utilizados correctamente y los duplicados visuales descartados.

Una parte de vídeo marcada explícitamente puede solicitar una hoja de contactos con marcas de tiempo. El puente crea una cuadrícula JPEG de 16 fotogramas y un máximo de 4 columnas. Cada celda de 512 píxeles incrusta la marca de tiempo de su fuente en una banda inferior de alto contraste, mientras que las mismas marcas de tiempo permanecen en los metadatos textuales para su asociación y auditoría posteriores. El JPEG completo permanece limitado a 32 MiB. Si `sharp` no puede decodificar o componer la cuadrícula, el puente recurre a los fotogramas JPEG individuales; una cancelación del cliente continúa propagándose a través de la operación de la hoja.

La evidencia para la promoción se mantiene deliberadamente separada del microbenchmark sintético de composición. `scripts/perf/video-bridge-contact-sheet-eval.ts` define un banco de pruebas A/B con esquema versionado para modelos de visión reales compatibles con OpenAI. Mide los tokens indicados por el proveedor, la latencia total de extremo a extremo (incluida la composición de la hoja), el número de llamadas al modelo y la conservación de hechos definida en el manifiesto. Las respuestas sin procesar del modelo no se escriben en el informe; únicamente se conservan los resúmenes SHA-256 y los identificadores de los hechos coincidentes. El banco de pruebas no realiza ninguna llamada de red ni a un modelo de pago salvo que se pase `--execute-real` y se configuren `--model`, `OMNIROUTE_BASE_URL` y `OMNIROUTE_API_KEY`. Sin esa ejecución real explícita, su veredicto legible por máquina permanece en `HOLD`; las mediciones sintéticas de carga útil y número de llamadas no constituyen por sí solas evidencia para la promoción.

Los llamadores pueden adjuntar un array opcional `transcript.cues` a una parte de vídeo compatible cuando ya dispongan de texto alineado. Cada pista debe incluir `text`, un intervalo finito `start`/`end` dentro de la duración detectada y un `source` incluido en la lista de permitidos (`client`, `embedded` o `audio-bridge`); `confidence` tiene como valor predeterminado `1` y debe permanecer entre `0` y `1`. Las pistas exactamente duplicadas se fusionan. OmniRoute nunca inicia una transcripción a partir de estos metadatos: las pistas validadas se copian en el resultado descrito con su fuente, confianza e intervalo, y se presentan como observaciones no confiables junto con los subtítulos de los fotogramas. El texto no válido, fuera de rango o sin procedencia se rechaza en lugar de mezclarse con el flujo de subtítulos. Actualmente, el campo `source` es declarado por el llamador, no verificado por el servidor: OmniRoute exige que el valor sea una de las tres cadenas permitidas, pero todavía no confirma criptográficamente que una etiqueta `embedded` o `audio-bridge` proceda realmente de una extracción propiedad del servidor. Trate `source` como una indicación no confiable hasta que se implemente dicha verificación; no base decisiones de autorización en él.

Un llamador avanzado puede proporcionar una pista `audioTranscript` ya autorizada
para el mismo vídeo. El punto de fusión ejecuta las observaciones visuales y de audio
bajo un único plazo y una única señal de cancelación, las ordena en una línea temporal
común, combina los duplicados exactos e informa de un resultado parcial cuando solo
una de las partes tiene éxito. Un `audioTranscript` no válido se degrada a ese resultado
parcial —se conserva la descripción visual y la rama de audio registra un código de
error saneado— en lugar de provocar el fallo de todo el vídeo. La disponibilidad de
cada rama, el indicador de resultado parcial y los códigos de error saneados se
conservan en el resultado descrito, en los metadatos de la barrera de protección
(`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), en los metadatos de la caché de resultados y en los
contadores de fusión del puente. La ruta predeterminada de Video Bridge no invoca la
conversión de voz a texto ni descarga una segunda copia del contenido multimedia;
sin esa pista explícita, sigue procesando únicamente el vídeo.

**Retención de transcripciones (#12150 P1).** Esto se aplica automáticamente siempre
que Video Bridge (que a su vez es opcional) renderiza una indicación de transcripción;
no existe un indicador de retención independiente. Cuando una solicitud renderiza
cualquier indicación de transcripción (un `transcript` declarado por el llamador o un
`audioTranscript` fusionado), la barrera de protección la marca como
`videoBridgeObserved` y genera una copia oculta censurada de la descripción del vídeo:
una representación idéntica en la que el cuerpo de texto libre de cada indicación se
sustituye por `[redacted-video-transcript]`, creada reemplazando el campo estructurado
de la indicación antes de ensamblar la cadena (nunca analizando el texto aplanado, de
modo que ningún contenido de la indicación —adversarial o normal, incluidos los cuerpos
que contengan `]`, como `[inaudible]`/`[music]`— pueda sobrevivir). El cuerpo de la
solicitud del registro de llamadas persistido sustituye cada parte de texto derivada del
vídeo por esa copia oculta censurada, emparejada por igualdad de contenido; el ancla
`fullText` se vuelve a leer de la carga útil terminada de la barrera de protección
previa a la llamada, por lo que la coincidencia sigue funcionando después de que las
barreras de protección posteriores de la cadena (los enmascaradores de PII y
credenciales, con prioridades 10/95) reescriban in situ el texto de la descripción y
después de que la inyección del prompt del sistema, del traspaso y de la memoria
reconfigure el array de mensajes. El cuerpo enviado al modelo permanece sin cambios.
Una solicitud observada tampoco rellena ninguna memoria duradera (se omite la
extracción derivada tanto de la solicitud como de la respuesta), de modo que la propia
respuesta del modelo no pueda reproducir el texto de la transcripción en la memoria.

**Campos de vídeo sin procesar (#12430).** Cuando el puente está habilitado y la
compatibilidad nativa con vídeo es desconocida o inexistente, los campos definidos
`transcript`/`audioTranscript` también activan `videoBridgeObserved`, incluso después
de un fallo de descripción o de alcanzar un límite `maxVideos`. `null` y las cadenas
vacías cuentan; los campos ausentes y los metadatos que no sean de vídeo no cuentan.
Las copias retenidas censuran estos campos u omiten la solicitud, y se omiten las
cachés y la memoria. La carga útil del proveedor permanece sin cambios.

Las copias retenidas adicionales utilizan la misma señal de solicitud observada. La
instantánea sin procesar de la solicitud del cliente previa a la barrera de protección,
la solicitud pendiente en memoria y el registro de solicitudes rechazadas
anticipadamente sustituyen estructuralmente los campos de transcripción de las partes
de vídeo; los prompts de cadena sintetizados por las etapas del pipeline y el traspaso
de contexto se censuran en el destino del cuerpo de solicitud persistido. El marcador
`video_content_removed` persistido hace que la continuación mediante
`previous_response_id` se cierre de forma segura en lugar de reconstruir texto que se
descartó intencionadamente. Si una solicitud observada pierde su copia oculta de
censura por parte antes del registro, o si incluso una de varias copias ocultas de vídeo
no coincide tras mutaciones posteriores de la solicitud, el cuerpo retenido de la
solicitud se omite por completo en lugar de conservar una transcripción parcialmente
censurada.

Para una solicitud observada, una respuesta del modelo podría citar cualquier parte de
la transcripción sin un límite estructurado de indicación. Por tanto, su
`responseBody` del registro de llamadas persistido se sustituye por un marcador de
omisión; el artefacto detallado del pipeline (que puede incluir cuerpos del
proveedor/cliente y fragmentos del flujo) no se conserva. Las cachés semántica, de
idempotencia y de reproducción del razonamiento omiten tanto las lecturas como las
escrituras para esa solicitud. La solicitud al proveedor y la respuesta visible para
el cliente permanecen sin cambios. Los bytes iniciales de mantenimiento de conexión
se descartan del búfer temporal cuando se omite el artefacto detallado. La advertencia
de EventStream mal formado de Kiro informa únicamente del recuento de bytes de la
carga útil, nunca de su contenido ni del error sin procesar del analizador JSON.
Esto no afirma que se hayan auditado todos los diagnósticos no relacionados de
proveedores o plugins; la revisión más amplia de destinos persistentes se sigue en
#11658.

El ciclo de vida interno de `/api/modality-bridge/video/drilldown` es un sustrato de
caché independiente, autenticado mediante loopback/token. Cada operación también
requiere un ID de principal opaco y canónico. Antes de habilitar un llamador de
producción, este debe derivar dicho ID del tenant autenticado y nunca debe reenviar un
valor seleccionado por el cliente. Las claves de caché vinculan ese principal con los
ID canónicos de sesión y referencia de vídeo, almacenan únicamente sus claves
derivadas mediante SHA-256 y limitan tanto las lecturas como la eliminación al mismo
principal. La caché almacena como máximo 16 fotogramas JPEG derivados por entrada,
los hace caducar después de diez minutos y admite lecturas acotadas mediante
`start`/`end` o la eliminación explícita de la sesión.

Cada principal está limitado a 16 entradas y 64 MiB de datos JPEG canónicos. Esos
límites son independientes del límite global de 64 entradas/256 MiB: la presión de
cuota de un principal desaloja únicamente las entradas usadas menos recientemente de
ese principal antes de considerar el desalojo LRU global. Las entradas caducadas se
eliminan tanto de la contabilidad por principal como de la global cuando hay actividad
en la caché, mientras que la cancelación y los fallos de validación no confirman un
reemplazo parcial.

La caché rechaza Base64 no canónico, relleno excesivo, contenido multimedia que no sea JPEG, archivos JPEG malformados o
truncados y archivos JPEG que produzcan una advertencia durante una decodificación completa y acotada de la imagen con `sharp`.
Vuelve a codificar cada imagen aceptada como un JPEG canónico, obtiene la anchura y la altura
a partir de los bytes decodificados en lugar de confiar en los campos proporcionados por quien realiza la llamada y descarta cualquier
byte políglota final en vez de conservarlo. Solo el búfer comprimido canónico y acotado
se contabiliza en ambas cuotas. El límite JSON de transmisión incluye la sobrecarga de Base64 para el máximo de entrada
decodificada de 32 MiB. Cada
derivación almacenada registra su formato y resolución JPEG validados, la política de muestreo,
la versión de derivación, la hora de creación, el hash de contenido calculado por el servidor y la referencia
al elemento padre con hash, además del hash del contenido padre proporcionado por la persona de confianza que realiza la llamada. La cancelación se comprueba
entre las fases asíncronas de decodificación y generación de hash antes de la confirmación atómica en la caché.

Este tramo todavía no conecta un productor de producción con la ruta ni
proporciona selección de variantes con múltiples resoluciones. Por lo tanto, la ruta transparente de solicitudes
de Video Bridge no incurre en trabajo adicional, mientras que la derivación de principales vinculados al tenant y
el ciclo de vida completo de múltiples resoluciones de FU-08 siguen siendo trabajo de seguimiento explícito,
en lugar de documentarse como comportamiento completado.

Los fotogramas se describen secuencialmente con el modelo de Video configurado. Una
anulación vacía de Video hereda la configuración de Vision; si ambas están vacías, el
enrutador automático de Vision selecciona el modelo efectivo compatible con visión. Las descripciones
correctas sustituyen la parte original por un prefijo estable `[Video description:` que también
marca el texto como una observación no confiable derivada de contenido multimedia e indica a los modelos
posteriores que no sigan las instrucciones encontradas en dicho contenido. Las claves de caché de las descripciones
de fotogramas incluyen los bytes JPEG, el prompt, la marca de tiempo y el modelo efectivo; solo se almacenan
en caché las descripciones generadas correctamente. Las entradas de caché conservan el modelo productor que realmente tuvo éxito,
incluido un modelo de respaldo; el puente informa `mixed` cuando distintos fotogramas
fueron producidos por modelos diferentes. Un acierto de caché reutiliza esa identidad del productor
en lugar de volver a etiquetarla como el plan de enrutamiento solicitado. La caché de resultados del
vídeo completo usa como clave cada entrada que modifica la salida: el prompt, el modelo
efectivo, la política de muestreo, el número de fotogramas, el modo de análisis semántico, la huella
SHA-256 de la indicación de enfoque normalizada, la ventana de enfoque, `transcript`,
`audioTranscript` y el indicador de hoja de contactos; por tanto, modificar cualquiera de esas
dimensiones provoca un fallo de caché, nunca la reutilización de datos obsoletos. La versión,
el umbral y el número acotado de fotogramas candidatos de la política de deduplicación visual también se especifican
explícitamente en la clave y los metadatos de la caché de resultados; por tanto, un cambio de política no puede reutilizar
una descripción obsoleta del vídeo completo. Los metadatos v4 de la caché de resultados conservan el modo y
la huella, pero nunca la tarea sin procesar del usuario. Los metadatos de las medidas de protección informan tanto del
modo de análisis solicitado como del efectivo; un modo `focused` solicitado sin
texto de usuario utilizable se indica como `full` efectivo.

La medida de protección extrae cada parte de vídeo compatible, pero no describe más de
`modalityBridgeVideoMaxVideos`. Para un destino del que se haya comprobado que tiene
`supportsVideo === false`, los vídeos fallidos y los que superen el límite se convierten en marcadores de texto seguro
explícitos, de modo que no sobreviva ningún vídeo sin procesar. Cuando se desconoce la capacidad, esas partes
permanecen intactas. Los destinos con `supportsVideo === true` omiten el puente.
La señal de cancelación de la solicitud del cliente se propaga a través de la descarga, la cola del bróker,
los subprocesos y las llamadas de descripción; las cancelaciones detienen el procesamiento entre vídeos y nunca aplican una política
permisiva que deje pasar el contenido multimedia sin procesar.

La configuración en tiempo de ejecución está respaldada por la base de datos y validada con Zod:

| Clave                               | Valor predeterminado | Intervalo / comportamiento                                                                                      |
| ----------------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`              | Tiempo de ejecución opcional, habilitación voluntaria                                                           |
| `modalityBridgeVideoAnalysisMode`   | `"full"`             | `full` conserva descripciones genéricas; `focused` usa contexto acotado y no confiable del usuario más reciente |
| `modalityBridgeVideoModel`          | `""`                 | Hereda el modelo de Vision Bridge                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`                  | 1–16                                                                                                            |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`          | `uniform`, `scene_aware` o `segment_aware` proporcional; un fallo del detector recurre a `uniform`              |
| `modalityBridgeVideoMaxVideos`      | `1`                  | 1–4                                                                                                             |
| `modalityBridgeVideoTimeout`        | `120000`             | 1000–120000 ms                                                                                                  |

Los valores heredados y persistidos del tiempo de espera de Video que superen los 120 segundos se limitan al
plazo del bróker; las nuevas escrituras de configuración que superen ese límite se rechazan.
`GET /api/modality-bridge/video/runtime` exige una ubicación local de bucle invertido
con sello de confianza antes de la autenticación o del sondeo del entorno de ejecución y, después, exige autenticación
de administración. Devuelve únicamente `available`, las versiones saneadas de FFmpeg/ffprobe y un motivo fijo
cuando el entorno de ejecución no está disponible. El endpoint interno de extracción no es
una API pública de carga: la saturación de la cola devuelve `503` junto con `Retry-After`, la desconexión
de quien realiza la llamada devuelve `499` y el plazo fijo del bróker devuelve `504`. Las respuestas convertidas añaden
`video->text;model=<visionModel>;parts=<videos>` a la cabecera central
`x-omniroute-modality-bridge` sin eliminar los segmentos de Vision o Audio.

### Enmascarador de PII (`piiMasker.ts`)

Se ejecuta en **ambas** etapas.

- **`preCall`** clona la carga útil, recorre `system`, `messages`, `input` y
  `prompt` (incluidos los elementos que son cadenas de texto sin formato) y
  aplica `processPII()` (de `@/shared/utils/inputSanitizer`) a los campos
  `content`/`text` de tipo cadena. Cuando `PII_REDACTION_ENABLED=true`, la PII
  detectada se redacta en la carga útil saliente. Esto es independiente de
  `INPUT_SANITIZER_MODE` (que solo controla la política contra la inyección de
  prompts). Cuando la redacción está desactivada, la llamada registra los
  recuentos de detecciones sin reescribir el contenido.
- **`postCall`** clona en profundidad la respuesta y ejecuta
  `sanitizePIIResponse()` junto con el enmascarador para la estructura de la API
  Responses (`maskResponsesOutput`, que abarca `output_text` y
  `output[].content[].text`). Si se produce alguna redacción, la respuesta
  modificada reemplaza a la original.

La barrera de protección nunca bloquea; solo añade anotaciones
(`meta.detections`, `meta.redacted`) o reescribe.

### Inyección de prompts (`promptInjection.ts`)

Detecta estructuras adversarias en el contenido proporcionado por el usuario y
aplica la política configurada. El comportamiento se determina mediante
variables de entorno y opciones del constructor:

| Configuración     | Variable de entorno                                                                                   | Valor predeterminado | Efecto                                                                                                                                                                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Habilitado        | `INPUT_SANITIZER_ENABLED`                                                                             | `true`               | Cuando es `false`, la barrera de protección finaliza de inmediato.                                                                                                                                                                 |
| Modo              | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`               | Política de inyección: `block`, `warn` o `log`. (`redact` se acepta por compatibilidad retroactiva, pero **no** elimina el texto de inyección; la reescritura de PII en la solicitud está controlada por `PII_REDACTION_ENABLED`.) |
| Umbral de bloqueo | Opción `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`               | Severidad mínima necesaria para bloquear. Con el valor predeterminado, la severidad media solo se observa.                                                                                                                         |

**Precedencia del modo** (`getMode`): `options.mode` del llamador →
**anulación mediante una marca de funcionalidad de la BD** para
`INJECTION_GUARD_MODE` (Dashboard → Settings → Feature Flags) →
variable de entorno `INJECTION_GUARD_MODE` → variable de entorno
`INPUT_SANITIZER_MODE` → `warn`. Por tanto, una anulación desde el panel tiene
prioridad sobre las variables de entorno, de modo que la interfaz de Feature
Flags controla la barrera en ejecución en tiempo real (sin reiniciar). La
lectura de la BD es tolerante a fallos: si se produce un error, la barrera
recurre al comportamiento basado en las variables de entorno y, cuando no se
establece ninguna anulación, el comportamiento es idéntico a la resolución
basada únicamente en dichas variables.

Fuentes de detección:

1. `sanitizeRequest()` de `@/shared/utils/inputSanitizer` (conjunto compartido
   de detectores utilizado en otros puntos del flujo).
2. Los `DEFAULT_GUARD_PATTERNS` integrados (actualmente
   `system_override_inline` y `markdown_system_block`, ambos con severidad
   `high`).
3. Los `customPatterns` opcionales pasados mediante las opciones del constructor
   (cadenas, expresiones regulares o registros
   `{ name, pattern, severity }`).

Cuando `mode === "block"` **y** al menos una detección alcanza el umbral de
severidad, `preCall` devuelve `{ block: true, message: "Request rejected:
suspicious content detected" }`. En los modos `warn`/`log`, la barrera de
protección registra el evento, pero permite la llamada. La función auxiliar
compartida `evaluatePromptInjection()` también se exporta para los llamadores
que necesiten evaluar prompts sin pasar por el registro.

**Límite de análisis (v3.8.20):** el detector solo inspecciona los **primeros
16 KB** del texto combinado del prompt:
`MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) en
`src/shared/utils/inputSanitizer.ts`. Tanto `detectInjection()` como
`evaluatePromptInjection()` ejecutan
`slice(0, MAX_INJECTION_SCAN_BYTES)` antes de iniciar el bucle de patrones. Las
directivas de inyección se sitúan cerca del principio de una entrada, por lo que
esto limita el uso de CPU/GC de las expresiones regulares en cargas útiles de
varios cientos de KB sin debilitar la detección (cf. #3932, #4041).

### Enmascarador de credenciales (`credentialMasker.ts`)

Se ejecuta en **ambas** etapas y ocupa el último lugar de la cadena
predeterminada (prioridad `95`). Redacta de la carga útil saliente los patrones
conocidos de claves de API o tokens secretos (contenido de mensajes, argumentos
de llamadas a herramientas y resultados de herramientas), **así como** de la
respuesta del proveedor, para evitar que una credencial pegada en un prompt (o
devuelta por el resultado de una herramienta) se filtre al proveedor ascendente
o de vuelta al cliente.

- **Solo mediante activación explícita**, siguiendo la misma convención que la ocultación de PII (regla estricta adyacente a la n.º 20):
  deshabilitado a menos que `settings.credentialRedactionEnabled === true` **o**
  `CREDENTIAL_REDACTION_ENABLED=true`. Cuando está desactivado, la medida de protección no realiza ninguna acción:
  nunca bloquea ni reescribe.
- `redactCredentials()` recorre todo el árbol de la carga útil/respuesta (`walkValue()`,
  protegido contra la contaminación de prototipos y contra ciclos mediante `WeakSet`) y sustituye las coincidencias por
  un marcador de posición `[REDACTED:<type>]`, clonando únicamente las ramas que realmente
  hayan cambiado.
- `CREDENTIAL_PATTERNS` abarca claves de proveedores de LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens de VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), claves de pago (Stripe, Square), claves
  de servicios en la nube (clave de acceso de AWS, Twilio, SendGrid, Mailgun), claves privadas/JWT,
  cadenas de conexión que contienen credenciales (`mongodb://user:pass@...`, etc.) y
  un patrón genérico para valores de cabeceras `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Las claves con formato de cabecera (`authorization`, `x-api-key`, `api-key`,
  `apikey`) se ocultan estructuralmente (solo el valor, conservando prefijos de esquema como
  `Bearer `/`Basic `), en lugar de utilizar la expresión regular genérica de texto.
- La medida de protección nunca bloquea; solo reescribe (`modifiedPayload` /
  `modifiedResponse`) y añade anotaciones (`meta.credentialsRedacted`, `meta.count`).

Protección contra regresiones: `tests/unit/credential-masker-guardrail.test.ts`.

## Contrato base (`base.ts`)

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
  block?: boolean; // true interrumpe inmediatamente la cadena
  message?: string; // se muestra cuando se bloquea
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // devuelto por preCall para reescribir la solicitud
  modifiedResponse?: TValue; // devuelto por postCall para reescribir la respuesta
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

Un mecanismo de protección indica que «no hay cambios» devolviendo `void`, `{}` o
`{ block: false }`. Devolver un `modifiedPayload`/`modifiedResponse` reemplaza
el valor que fluye por la cadena para los mecanismos de protección posteriores.
`signal?: AbortSignal` transmite el ciclo de vida del llamador a los mecanismos de protección. La cancelación de una solicitud es la excepción deliberada de apertura ante fallos: los puentes multimedia detienen el trabajo y realizan la limpieza sin restaurar los datos multimedia sin procesar en un destino que se sabe que no los admite.

## Registro (`registry.ts`)

La instancia singleton `guardrailRegistry` expone:

- `register(guardrail)` — añade un mecanismo de protección (o reemplaza uno según su nombre normalizado) y
  vuelve a ordenarlos por `priority` ascendente.
- `clear()` / `list()` — funciones auxiliares administrativas.
- `runPreCallHooks(payload, context)` — recorre los mecanismos de protección activos, pasa el
  payload a través de `modifiedPayload` y se detiene ante el primer `block: true`.
- `runPostCallHooks(response, context)` — el mismo flujo en el lado de la respuesta.
- `resetGuardrailsForTests({ registerDefaults })` — borra el estado y, opcionalmente,
  vuelve a registrar los valores predeterminados para lograr un aislamiento limpio de las pruebas.

Ambos ejecutores devuelven `{ blocked, payload|response, results, guardrail?, message? }`,
donde `results` es un array de registros `GuardrailExecutionResult` que incluyen
los campos `blocked`, `skipped`, `modified`, `error` y `meta` por cada mecanismo de protección,
útiles para el seguimiento.

### Desactivar mecanismos de protección por solicitud

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` recopila una
lista sin duplicados de nombres de mecanismos de protección que deben omitirse en la
solicitud actual. Fuentes (todas opcionales y combinadas):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` en el cuerpo de la solicitud (nivel superior)
- `metadata.disabledGuardrails` en el cuerpo de la solicitud
- Encabezado `x-omniroute-disabled-guardrails` (o el heredado
  `x-disabled-guardrails`)

Los valores pueden ser arrays de cadenas o una cadena separada por comas; los nombres se
normalizan a minúsculas en formato kebab-case (`pii_masker` → `pii-masker`). El resultado
se pasa mediante `context.disabledGuardrails` al registro, que omite
los mecanismos de protección coincidentes (`skipped: true` en `results`).

## Orden de ejecución

Para cada solicitud que pasa por `src/sse/handlers/chat.ts` y
`open-sse/handlers/chatCore.ts`:

1. `resolveDisabledGuardrails(...)` crea la lista de omisiones a partir de la clave de API, el cuerpo
   y los encabezados.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` ejecuta las barreras de seguridad en orden
   ascendente de prioridad:
   - Las barreras de seguridad deshabilitadas se registran como `skipped`.
   - El método `preCall` de cada barrera de seguridad puede reescribir la carga útil mediante `modifiedPayload`.
   - El primer `block: true` interrumpe la cadena y el controlador devuelve
     una respuesta de rechazo de la barrera de seguridad.
3. La carga útil (posiblemente reescrita) pasa al enrutamiento combinado y al despacho
   ascendente.
4. Una vez creada la respuesta, `guardrailRegistry.runPostCallHooks(...)`
   ejecuta la misma cadena sobre la respuesta. En este caso, `block: true` descarta la respuesta
   ascendente.

Las barreras de seguridad que generan una excepción se registran con `error: <message>` y se anotan mediante
`logger.warn`, pero la cadena continúa; por diseño, se permite la operación en caso de fallo.

## Configuración

Variables de entorno leídas por las barreras de seguridad integradas:

| Variable                              | Utilizada por              | Efecto                                                                                                                                          |
| ------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`         | Establézcala en `false` para deshabilitar por completo la detección.                                                                            |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`         | Política de inyección: `warn`, `block` o `log`. El valor heredado `redact` no reescribe el texto de la inyección.                               |
| `INJECTION_GUARD_MODE`                | `prompt-injection`         | Modo de la protección contra inyecciones; también es una marca de funcionalidad de la BD que **reemplaza** las variables de entorno (BD > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`         | Gravedad mínima que rechaza `MODE=block`: `high` (predeterminada), `medium` o `low`.                                                            |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`         | Alias heredado de `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                            |
| `PII_REDACTION_ENABLED`               | `pii-masker`               | Cuando es `true`, se oculta la PII de la solicitud (independientemente del modo de inyección).                                                  |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (descendente) | Controla el comportamiento del ocultador en las respuestas.                                                                                     |

Las barreras de seguridad de Modality Bridge leen la configuración en tiempo de ejecución del almacén
de ajustes respaldado por la BD (`getSettings()`), no de las variables de entorno. Las claves principales de Vision son
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` y
`modalityBridgeCacheMaxEntries`. Las claves heredadas
`visionBridge*` solo se aceptan como mecanismo alternativo de lectura durante un ciclo, según lo documentado;
las escrituras del panel usan las claves principales. Los valores predeterminados y el
resolutor alternativo se encuentran en `src/shared/constants/modalityBridgeDefaults.ts`, mientras que las constantes
heredadas se conservan en `src/shared/constants/visionBridgeDefaults.ts`.

Audio usa `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` y `modalityBridgeAudioMaxClips`, además de los ajustes compartidos
`modalityBridgeCache*`. Audio no tiene un mecanismo alternativo para claves heredadas porque estas
claves se introdujeron con el esquema de Modality Bridge.

Video usa `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` y
`modalityBridgeVideoTimeout`, además de los ajustes compartidos `modalityBridgeCache*`.
Está deshabilitado de forma predeterminada porque FFmpeg/ffprobe son dependencias operativas
opcionales y la descripción de fotogramas añade latencia y costes del modelo.

## Barreras de protección personalizadas

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

Pasos:

1. Cree `src/lib/guardrails/myGuardrail.ts` extendiendo `BaseGuardrail`.
2. Implemente `preCall` y/o `postCall`.
3. Regístrela durante la importación (incorpórela desde `registerDefaultGuardrails`) o
   llame a `guardrailRegistry.register(...)` en tiempo de ejecución; el registro reemplaza
   cualquier barrera de protección anterior que tenga el mismo nombre normalizado.
4. Añada pruebas en `tests/unit/` (ejemplos existentes:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Pruebas

Use `resetGuardrailsForTests()` entre pruebas para comenzar desde un estado conocido.
Pase `{ registerDefaults: false }` para comenzar con un registro vacío y
registrar únicamente las barreras de protección que se estén probando. Vision Bridge admite
inyección de dependencias (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge expone los
puntos de integración equivalentes para la configuración, las capacidades, la selección del modelo STT, las comprobaciones
de credenciales y la transcripción. Por lo tanto, las pruebas pueden ejercitar ambos flujos sin acceso
a la base de datos ni a la red.

## Véase también

- `src/lib/guardrails/` — implementación
- `src/shared/utils/inputSanitizer.ts` — detector compartido que permite
  detectar la inyección de prompts y enmascarar PII
- `src/shared/constants/visionBridgeDefaults.ts` — valores predeterminados de Vision Bridge y
  lista de modelos con puente forzado
- `src/shared/constants/modalityBridgeDefaults.ts` — valores predeterminados compartidos de ejecución de Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — capa ortogonal (disyuntor, períodos de espera)
- `docs/reference/ENVIRONMENT.md` — referencia completa de variables de entorno

## Cobertura de rutas y red team de la protección contra inyecciones (Fase 8 · Bloque D)

La protección contra inyecciones (`createInjectionGuard` / `withInjectionGuard`) cubre todas las rutas
que aceptan prompts de usuario. Respeta `INJECTION_GUARD_MODE` (el valor predeterminado `warn` = solo registra;
`block` = devuelve HTTP 400 `SECURITY_001`).

| Tipo              | Rutas                                                                                                                                                | Modo predeterminado |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Texto (existente) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Generativas       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Datos             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

La extracción de texto (`extractMessageContents`) cubre `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red team (nocturno, `nightly-llm-security.yml`):** promptfoo valida que cada ruta bloquee
el corpus OWASP-LLM con `INJECTION_GUARD_MODE=block`; garak ejecuta sondas (se omite si no hay un secreto).
`moderations` se incluye para mantener la coherencia; los operadores que utilicen el modo de bloqueo pueden excluirla mediante
`resolveDisabledGuardrails`.

El flujo de trabajo nocturno (`.github/workflows/nightly-llm-security.yml`, cron + ejecución
manual) tiene dos trabajos:

- **`promptfoo-guard` (bloqueante)** — ejecuta `promptfoo eval -c promptfooconfig.yaml`
  con `INJECTION_GUARD_MODE=block`. Cada caso adversario (p. ej., «ignora todas las
  instrucciones anteriores…», jailbreaks de estilo DAN) comprueba que la respuesta contenga
  `error.code === "SECURITY_001"`, es decir, que la protección haya rechazado realmente la solicitud.
- **`garak` (consultivo)** — ejecuta garak `--probes promptinject,dan,leakreplay`
  contra una instancia local de OmniRoute (`http://localhost:20128/v1`). Está condicionado a un
  secreto del proveedor (`PROMPTFOO_PROVIDER_KEY`); se omite sin errores y lleva el sufijo
  `|| true`, por lo que genera informes sin provocar fallos en CI.

La cobertura del auxiliar de protección (`createInjectionGuard` / `withInjectionGuard`)
abarca todas las rutas `/v1` que admiten prompts; el texto del prompt se obtiene de
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` mediante
`extractMessageContents()` en `src/shared/utils/inputSanitizer.ts`.
