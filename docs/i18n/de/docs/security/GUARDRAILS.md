# Guardrails (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Verbindliche Quelle:** `src/lib/guardrails/`
> **Zuletzt aktualisiert:** 2026-08-29 — v3.8.51 (Die Herkunft des Video-Bridge-Transkripts wird vom Aufrufer deklariert,
> aber noch nicht serverseitig verifiziert — gemäß #11661 klargestellt)

Guardrails erzwingen Sicherheitsvorgaben, Richtlinien und Inhaltstransformationen an der Grenze
zwischen OmniRoute und vorgelagerten Anbietern. Jede Guardrail kann Anfrage-Payloads (`preCall`) und
Antworten vorgelagerter Anbieter (`postCall`) prüfen (und optional ablehnen, transformieren oder
mit Anmerkungen versehen).

Das System ist **fehlertolerant (Fail-open)**: Löst eine Guardrail während der Ausführung einen Fehler aus,
zeichnet die Registry den Fehler auf und fährt mit der nächsten Guardrail fort, anstatt die
Anfrage fehlschlagen zu lassen. Das Blockieren ist stets eine explizite Entscheidung (`block: true`)
und niemals ein Versehen.

## Integrierte Schutzmechanismen

Die Registry lädt beim Import automatisch sechs Schutzmechanismen in Prioritätsreihenfolge
(siehe `registry.ts` → `registerDefaultGuardrails()`):

| Priorität | Name                | Phase(n)       | Datei                 |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Niedrigere Prioritätswerte werden **zuerst** ausgeführt.

### Vision Bridge (`visionBridge.ts`) — Modalitäts-Bridge PR-1

Fängt Anfragen mit Bildern ab, die an **Modelle ohne Vision-Unterstützung** gerichtet sind, und leitet entweder
die gesamte Anfrage an ein Vision-fähiges Modell um oder ersetzt die Bildbestandteile
vor dem Upstream-Aufruf durch Textbeschreibungen, die von einem konfigurierbaren Vision-Modell
erzeugt wurden. Dadurch können reine Textanbieter multimodale Payloads
transparent verarbeiten.

Ablauf:

1. Überspringen, wenn das Zielmodell bereits Vision unterstützt (es sei denn, es ist in der
   Liste für eine erzwungene Bridge `isVisionBridgeForcedModel` enthalten).
2. Bildbestandteile über `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`) extrahieren; diese Funktion delegiert an den **vereinheitlichten Mediendetektor**
   `detectMediaParts()` in `open-sse/utils/mediaParts.ts` — die
   gemeinsame Single Source of Truth für den Combo-Kompatibilitätsfilter.
   Die Extraktion ist per Positivliste auf Bestandteile der obersten Ebene mit den Formaten
   beschränkt, die `replaceImageParts` wieder einsetzen kann (der Extrahieren↔Ersetzen-Vertrag): OpenAI
   `image_url`, Anthropic-Base64 mit `source.type:"base64"`, Anthropic-URL mit
   `source.type:"url"` und Responses API `input_image`. Verschachtelte Treffer und
   rein indikative Formate sind Material für den Combo-Filter und werden niemals extrahiert.
   Überspringen, wenn keine gefunden wurden.
3. Laufzeitkonfiguration über `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) auflösen: Neue `modalityBridge*`-
   Einstellungsschlüssel haben Vorrang; ältere `visionBridge*`-Schlüssel bleiben für **einen Zyklus als
   Fallback** erhalten (Rollback-Fenster). Vor jeglicher Mediendurchsuchung überspringen, wenn die
   Bridge deaktiviert ist.
4. Der Modusauswähler (`modalityBridgeVisionMode`, siehe Tabelle unten) entscheidet zwischen
   Umleitung und Beschreibung. Bei einer Umleitung wird `modifiedPayload` zurückgegeben, wobei nur
   `model` ausgetauscht ist, zusammen mit den Metadaten `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beschreibungspfad: Bilder auf `maxImages` begrenzen, den aufgabenbezogenen Prompt zusammenstellen,
   den Beschreibungs-Cache abfragen, das Vision-Modell **parallel**
   (`Promise.allSettled`) aufrufen und anstelle der Bilder Textbestandteile im Format
   `[Image N]: <description>` einfügen. Eine fehlgeschlagene Beschreibung liefert `null`, und der ursprüngliche Bildbestandteil wird
   **beibehalten** (#4012) — außer im Combo-Beschreibungspfad, wenn alle
   Beschreibungen fehlgeschlagen sind; in diesem Fall erhält ein nachweislich nicht Vision-fähiger Upstream stattdessen den
   Platzhalter `(unavailable — no vision-capable provider connected)` (#8430).
6. `modifiedPayload` zusammen mit Metadaten zurückgeben (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Modusauswähler (`modalityBridgeVisionMode`)

| Modus      | Standard | Verhalten                                                                                                                                                                                                                                                                                                                                        |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔        | Unveränderte bisherige Heuristik (#6640/#7204): Nicht-Combo-/`auto/`-Modelle werden an das beste Vision-Modell umgeleitet, es sei denn, das ursprüngliche Modell verfügt bereits über nutzbare Anmeldedaten (dann wird beschrieben); Combo-Ziele werden immer beschrieben.                                                                       |
| `describe` |          | Immer beschreiben — der Umleitungsblock wird vollständig übersprungen; das vom Benutzer ausgewählte Modell antwortet immer.                                                                                                                                                                                                                      |
| `reroute`  |          | Umleitung erzwingen: Die Schutzprüfung zur Beibehaltung eines Modells mit Anmeldedaten wird umgangen. Die Prüfung der Anmeldedaten für das Umleitungs-**Ziel** gilt weiterhin — wenn kein nutzbares Vision-Ziel vorhanden ist, fällt die Anfrage auf die Beschreibung zurück, damit Rohbilder niemals ein reines Text-Backend erreichen (#8430). |

Erzwungene Modi beenden die Auswahl **bevor** die automatische Heuristik ausgeführt wird; das Verhalten von `auto`
ist Byte für Byte identisch mit dem Schutzmechanismus vor PR-1.

#### API-Schlüssel-Gültigkeitsbereich (`visionBridgeKeyScope.ts`)

Wenn der API-Schlüssel des Aufrufers `allowedConnections`, Kontingentpools
(`allowedQuotas`) oder Modelle (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) einschränkt, wählt die Bridge nur
Umleitungs- und Beschreibungsmodelle aus, die der Schlüssel verwenden darf, und zwar über Verbindungen, die der Schlüssel verwenden
darf. Der Beschreibungsaufruf läuft anschließend immer über die OmniRoute-Selbstschleife mit
dem Header `x-omniroute-self-loop-key-id`, sodass die empfangende Chat-Anfrage
die Verbindungs- und Modellrichtlinie dieses Schlüssels erneut durchsetzt. `enforceApiKeyPolicy()`
berücksichtigt diesen Header nur zusammen mit dem Selbstschleifen-Bearer, sodass er den Zugriff ausschließlich
einschränken kann; eine ID, die nicht aufgelöst werden kann, wird abgelehnt.

Wenn für den Schlüssel kein Vision-Modell zulässig ist, tritt der Beschreibungspfad zurück und
die Anfrage wird unverändert weitergeleitet, entsprechend dem Fail-Open-Verhalten eines deaktivierten
Schutzmechanismus (Metadaten `{ skipped: true, reason: "no_permitted_vision_model" }`).
Anfragen ohne Schlüssel und Schlüssel ohne diese Einschränkungen verhalten sich genauso wie
zuvor.

#### Aufgabenbezogener Beschreibungs-Prompt (`modalityBridgeVisionTaskAware`)

Standardmäßig **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) hängt
den Text der **letzten Benutzernachricht** (auf 500 Zeichen gekürzt) an den
Basis-Prompt für die Beschreibung an. Dadurch wird die Beschreibung auf die
tatsächliche Frage des Benutzers ausgerichtet (codex-vision-proxy-Muster), und
das Vision-Modell wird zur Transkription sichtbaren Textes aufgefordert. Wenn
das Flag deaktiviert ist oder kein Benutzertext vorliegt, wird der Basis-Prompt
unverändert verwendet.

Die eigene OpenAI-kompatible Anfrage des Describe-Self-Loops
(`callVisionModelSingle()` in `visionBridgeHelpers.ts`) fordert immer
`image_url.detail: "high"` an — bedingungslos, für jeden Aufrufer/Provider und
nicht abhängig von einem Clientsignal. Sampling mit geringer Detailstufe
verschlechtert die OCR-Genauigkeit genau für die Texttranskriptionsaufgabe, die
dieser Prompt verlangt. Daher fordert der Describe-Aufruf selbst immer eine
hohe Detailstufe an, unabhängig davon, welche Detailstufe die ursprüngliche
eingehende Anfrage verwendet hat. Dies wirkt sich nur auf den internen
Anfrage-Body des Describe-Aufrufs aus; es ändert nicht, wie OmniRoute das
`image_url.detail` des Aufrufers in der primären Anfrage weiterleitet — dieser
Standardwert wird separat und nur für erkannte OpenCode-Clients in
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`)
angewendet. Der Anthropic-Wire-Format-Zweig des Describe-Self-Loops besitzt
kein `detail`-Feld und ist von beiden Standardwerten nicht betroffen.

#### Ausgabelimit für Beschreibungen (`modalityBridgeVisionMaxChars`)

| Schlüssel                      | Standardwert | Bereich            |
| ------------------------------ | ------------ | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`          | `0` oder 100–50000 |

`0` (Standardwert) bedeutet **kein Limit** — die von `callVisionModel()`
zurückgegebene Beschreibung wird unverändert weitergegeben, wodurch das
bestehende Verhalten erhalten bleibt. Jeder Wert im Bereich 100–50000 kürzt
die Beschreibung mit einem `…`-Suffix, bevor sie als
`[Image N]: <description>` wieder eingefügt wird
(`VisionBridgeGuardrail.preCall()` in `src/lib/guardrails/visionBridge.ts`).
Erhöhen Sie diesen Wert für detailreiche OCR-Aufgaben, bei denen das
nachgelagerte Modell die vollständige Transkription benötigt; senken Sie ihn,
um die Token-Nutzung bei ausgabefreudigen Vision-Modellen zu begrenzen. Das
Dashboard-Feld befindet sich im Bereich „Erweitert“ des Tabs „Vision“
(`modality-bridge-max-chars` in `ModalityBridgeVisionTab.tsx`) und hebt jeden
Wert zwischen 1 und 99 auf die Untergrenze 100 an, während eine explizite `0`
unverändert bleibt — `0` ist ein eigenständig gültiger Zod-Wert
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`) und nicht
lediglich der Standardwert für „nicht festgelegt“.

#### Describe-Cache (`modalityBridge/bridgeCache.ts`)

Prozessweit gemeinsam genutzter In-Memory-LRU- und TTL-Cache für
Describe-Ausgaben. Schlüssel =
`sha256(imageRef + composedPrompt + configuredBridgeModel)` mit
längenpräfixiertem Framing (keine Kollisionen an Feldgrenzen). Die
Modellkomponente ist das **konfigurierte** Bridge-Modell, nicht das Modell, das
tatsächlich geantwortet hat — `callVisionModel` kann intern auf ein
Ersatzmodell zurückfallen, und eine Schlüsselbildung pro Versuch würde den
Cache fragmentieren. Fehlgeschlagene Beschreibungen werden niemals
zwischengespeichert. Einstellungen:

| Schlüssel                       | Standardwert | Bereich |
| ------------------------------- | ------------ | ------- |
| `modalityBridgeCacheEnabled`    | `true`       | —       |
| `modalityBridgeCacheTtlMinutes` | `60`         | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`        | 10–5000 |

#### Normalisierung entfernter Bilder (Self-Loop-Describe/Base64-Abruf)

Wenn die Bridge selbst ein **entferntes** Bild abruft — beim
Anthropic-Describe-Self-Call und bei der Base64-Konvertierung in das
Claude-Wire-Format (`ensureBase64ImagesForClaudeWire`), beide über
`fetchRemoteImageAsDataUri()` in `visionBridgeHelpers.ts` —, wird die
resultierende Daten-URI durch `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) geleitet, bevor sie in die Anfrage an das
Vision-Modell eingebettet wird. Übergroße Bilder werden auf eine **lange Kante
von 2048 px** herunterskaliert (entsprechend der Größenbegrenzung, die
OpenAI/Anthropic bereits serverseitig anwenden). Dadurch werden Upload-Volumen
und Latenz reduziert, ohne zu ändern, was das Vision-Modell sieht. Für die
Größenänderung wird `sharp` verwendet, das per dynamischem Import geladen wird:
Auf einer Plattform, auf der dessen native Binärdatei nicht geladen werden
kann, löst `normalizeDataUri()` **niemals eine Ausnahme aus** — stattdessen
werden die ursprünglichen Bytes unverändert durchgereicht, sodass der
Describe-/Base64-Konvertierungspfad stets funktionsfähig bleibt. Bytes, die
kein Bild darstellen (ein Abruf, der kein dekodierbares Bild zurückgegeben
hat), werden ebenfalls unverändert durchgereicht. Diese Normalisierung ist auf
Bilder beschränkt, die die Bridge für ihren eigenen Self-Call abruft — sie wird
niemals auf die unveränderte Passthrough-Nutzlast des Aufrufers angewendet, im
Einklang mit dem Prinzip, Mutationen ausschließlich nach expliziter
Aktivierung vorzunehmen (Harte Regel Nr. 20).

#### Einstellungsschema + Migration

Die neuen `modalityBridge*`-Schlüssel werden in `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`) mit Zod validiert:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, das
`modalityBridgeCache*`-Trio sowie die vom Audio Bridge verwendete
`modalityBridgeAudio*`-Gruppe. Die Migration
`141_modality_bridge_settings.sql` kopiert vorhandene ältere
`visionBridge*`-Werte in die entsprechenden neuen Schlüssel (idempotent und
ohne jemals einen vom Betreiber festgelegten `modalityBridge*`-Wert zu
überschreiben); die älteren Schlüssel werden für einen Release-Zyklus
weiterhin als Lese-Fallback akzeptiert.

#### Transparenz-Header + Statistiken

Durch Describe transformierte Antworten enthalten
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(erstellt von `buildModalityBridgeHeader()` in
`modalityBridge/bridgeStats.ts`, gesetzt von `withModalityBridgeHeader()` in
`src/sse/handlers/chatHelpers.ts`). Umgeleitete Anfragen erhalten **keinen**
Header — die Nutzlast wurde nicht verändert, und der Modellwechsel ist bereits
im Feld `model` des Antwort-Bodys sichtbar.

`GET /api/modality-bridge/stats` (Management-Authentifizierung, dieselbe Stufe wie
`GET /api/settings`) gibt die speicherinternen Zähler pro Modalität
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` für `vision`, `audio` und
`video` zurück. `averageLatencyMs` verwendet `latencySamples` und nicht alle
Versuche als Nenner; ein Vorgang ohne Zeitmessung erzeugt nicht künstlich eine
Null-Millisekunden-Stichprobe. `bridged` bleibt der abwärtskompatible Alias für
erfolgreiche Konvertierungen; fehlgeschlagene Versuche erhöhen diesen Wert
nicht.
Die Zähler werden beim Neustart des Prozesses absichtlich zurückgesetzt
(Telemetrie, keine Abrechnung).

#### Dashboard-Konfiguration

Die dedizierte Dashboard-Seite befindet sich unter
`/dashboard/settings/modality-bridge`. Ihre über die URL adressierbaren Tabs
`Vision`, `Audio` und `Video` behalten beim Wechseln des `tab`-Werts die
Abfrageparameter bei. Der Vision-Tab bietet Aktivierung, Modus, Modellauswahl
(einschließlich der automatischen Standardeinstellung), aufgabenbezogene
Prompts, erweiterte Limits für Zeitüberschreitung, Bildgröße,
Beschreibungslänge und Cache, Laufzeitzähler sowie eine abgesicherte
Beispielanfrage. Der Audio-Tab ist ebenfalls aktiv: Er bietet Aktivierung, eine
reine STT-Modellauswahl mit Auto, Limits für Zeitüberschreitung und maximale
Clip-Länge, Audiozähler sowie einen `input_audio`-Beispieltest. Der Video-Tab ist
funktionsfähig: Er zeigt den Laufzeitstatus von FFmpeg/ffprobe an — einen von
vier expliziten UI-Zuständen (`unknown`, während die Prüfung läuft oder nicht
abgeschlossen werden konnte, `restricted` bei einem Dashboard-Host ohne
Loopback-Adresse, bei dem die Prüfung clientseitig übersprungen wird,
`unavailable`, sobald die Prüfung abgeschlossen und das Fehlen bestätigt wurde,
oder `available` mit den FFmpeg-/ffprobe-Versionen) —, persistiert Limits für
Aktivierung, Modell, Frames, Video und Zeitüberschreitung, filtert die
Modellauswahl auf visionsfähige Modelle und zeigt Videozähler an.

Die frühere Vision-Bridge-Karte unter den KI-Einstellungen ist jetzt ein
Kompatibilitätslink zur neuen Seite; sie verwaltet keine zweite Kopie des
Formulars mehr. Media Providers verknüpft außerdem die Workflows
Image-to-Text und Speech-to-Text mit den entsprechenden Modality-Bridge-Tabs,
ohne den bestehenden Speech-to-Text-Playground zu entfernen.

**Umgehung der Self-Loop-Zulassungsprüfung:** Wenn der Describe-Aufruf über den
eigenen `/v1`-Self-Loop von OmniRoute geroutet wird (nicht standardmäßiges
Provider-Modell), sendet die Unteranfrage
`x-omniroute-admission-bypass: internal` und wird mit den aufgelösten
Self-Loop-Anmeldedaten authentifiziert — dem lokalen `sk_omniroute`-Sentinel im
lokalen Modus oder dem vom Betreiber konfigurierten Env-Schlüssel
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), sodass Bereitstellungen mit
`REQUIRE_API_KEY=true` den Describe-Aufruf weiterhin ausführen können. Die
Umgehung wird nur für genau diese Anmeldedaten akzeptiert, sodass externe Clients
den Header nicht verwenden können, um die Zulassungsprüfung zu überspringen.

Ältere Standardwerte befinden sich in
`src/shared/constants/visionBridgeDefaults.ts`; die neuen Standardwerte für
Modus, Aufgabenbezug und Cache sowie der Einstellungs-Resolver befinden sich in
`src/shared/constants/modalityBridgeDefaults.ts`. Die Schutzlogik stellt eine
`deps`-Konstruktoroption bereit, damit Tests gefälschte Implementierungen von
`getSettings` und `callVisionModel` injizieren können.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Fängt Chat-Anfragen mit Audioinhalten ab, bevor sie ein Ziel erreichen, von dem
nicht bekannt ist, dass es Audioeingaben akzeptiert. Die Chat-Anfrage wird
niemals umgeleitet: Audioteile werden über den vorhandenen
OpenAI-kompatiblen Multipart-Endpunkt transkribiert, und das ausgewählte
Chatmodell arbeitet anschließend mit den Texttranskripten weiter.

Ablauf:

1. `supportsAudio` über `getResolvedModelCapabilities()` auflösen. Explizite
   Metadaten der Provider-Registry haben Vorrang, gefolgt von statischen
   Modellmetadaten und anschließend synchronisierten `modalities_input`.
   Eine deklarierte Eingabeliste ohne `audio` ergibt `false`; wenn keine
   Informationen zur Fähigkeit vorhanden sind, bleibt der Wert `null`. Sowohl
   `false` als auch `null` aktivieren die konservative Bridge, während `true`
   sie umgeht.
2. Die Einstellungen `modalityBridgeAudio*` auflösen und mit dem gemeinsam
   verwendeten Detektor `detectMediaParts()` herauslösbare Audioteile auf
   oberster Ebene aus jeder Nachricht extrahieren. Unterstützte
   Übertragungsformate sind OpenAI-`input_audio`, `audio_url` und
   `source.media_type: "audio/*"`. Verschachteltes Audio wird für das Routing
   erkannt, aber vom Herauslösepfad nicht entfernt. Die Verarbeitung wird durch
   `modalityBridgeAudioMaxClips` begrenzt; spätere Teile bleiben unverändert.
3. Ein konfiguriertes `provider/model` berücksichtigen oder
   `selectAudioBridgeModel()` in stabiler Katalogreihenfolge durch
   `AUDIO_TRANSCRIPTION_PROVIDERS` laufen lassen und das erste Modell mit
   verwendbaren aktiven Provider-Anmeldedaten auswählen.
4. `callAudioTranscription()` konvertiert Base64-/Data-URI-Audio in eine
   Multipart-`file` oder lädt eine entfernte `audio_url` über die ausschließlich
   öffentliche ausgehende Schutzlogik mit DNS-Pinning und einer Begrenzung auf
   25 MB herunter. Anschließend werden die Datei und das ausgewählte Modell per
   POST an den lokalen Self-Loop `/v1/audio/transcriptions` gesendet und mit
   `resolveSelfLoopBearer()` authentifiziert. Die vorhandene
   Transkriptionsroute führt die normale Suche nach Anmeldedaten, die Behandlung
   von Cooldowns und Ratenbegrenzungen sowie den Provider-Dispatch durch.
5. Erfolgreiche Aufrufe ersetzen ihre Teile durch
   `[Audio N]: <transcript>`. Die Aufrufe werden mit `Promise.allSettled`
   ausgeführt: Ein einzelner Fehler behält den ursprünglichen Audioteil bei
   (#4012-Vertrag). Wenn alle Aufrufe fehlschlagen und für das Ziel
   `supportsAudio === false` nachgewiesen ist, werden die Teile zu
   `[Audio N]: (unavailable — no STT provider connected)` (#8430-Vertrag). Bei
   einem unbekannten Ziel (`null`) bleibt das Ergebnis unverändert, wenn alle
   Aufrufe fehlschlagen. Ein nachweislich ausschließlich textbasiertes Ziel ohne
   verwendbare STT-Anmeldedaten erhält denselben expliziten Platzhalter, ohne
   dass ein Netzwerkaufruf ausgeführt wird.

Erfolgreiche Transkripte verwenden den prozessweiten LRU-/TTL-Cache der
Modality Bridge. Der Schlüssel kombiniert die Audioreferenz, die stabile
Vorgangsbezeichnung `audio-transcription` und das ausgewählte STT-Modell;
Fehler werden niemals zwischengespeichert. Audioversuche aktualisieren die
gemeinsam verwendeten Zähler `bridged`, `cacheHits`, `failures` und
`lastUsedAt`. Transformierte Antworten enthalten
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`;
unveränderte Anfragen erhalten kein Audio-Bridge-Segment.

Die Laufzeiteinstellungen sind DB-gestützt und werden mit Zod validiert:

| Schlüssel                     | Standardwert | Bereich                 |
| ----------------------------- | ------------ | ----------------------- |
| `modalityBridgeAudioEnabled`  | `true`       | —                       |
| `modalityBridgeAudioModel`    | `""`         | Automatisch oder STT-ID |
| `modalityBridgeAudioTimeout`  | `60000`      | 1000–300000             |
| `modalityBridgeAudioMaxClips` | `3`          | 1–10                    |

Der gemeinsam genutzte Cache wird weiterhin durch `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` und `modalityBridgeCacheMaxEntries` gesteuert.

### Video-Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Fängt Videoelemente auf oberster Ebene in `messages` von Chat Completions und
in `input` der Responses API ab, bevor ein Ziel ohne bekannte native
Videounterstützung aufgerufen wird. Unterstützte Formen sind `input_video`,
`video_url`, `video_source`, HTTPS-URLs und
`data:video/*;base64,...`-Daten-URIs. Reine Dateinamen in Text werden nicht als
Video behandelt.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) ist für das Durchlaufen der
Anfrage, die Funktions-/Richtlinienprüfung, die Aggregation pro Anfrage und die
Antwortnutzlast zuständig. Die Verarbeitung pro Video – Beschaffung, Cache für
das vollständige Ergebnis, Beschreibung einer Frame-Sequenz (wobei ein vom
Aufrufer bereitgestelltes Audiotranskript eingebunden wird) sowie Metriken,
Abbruch und Bereinigung pro Versuch – ist hinter `processVideoPart` in
`videoBridgePipeline.ts` verborgen, das innerhalb der Schleife von `preCall`
einmal pro Videoelement aufgerufen wird. Dieses Modul definiert außerdem die
expliziten Portgrenzen `VideoMediaBrokerPort` (Beschaffung von Bytes und
Extraktion abgetasteter Frames), `VideoAudioTranscriptionPort` (Zusammenführung
eines vom Aufrufer bereitgestellten Audiotranskripts mit den abgetasteten
Bildunterschriften) und `VideoDrilldownPort` (Persistenzgrenze für den
Frame-Drilldown; noch nicht mit `processVideoPart` verbunden – derzeit schreibt
nur die separate Route `/api/modality-bridge/video/drilldown`
Drilldown-Einträge).

Der öffentliche `/v1`-Anfragepfad importiert oder startet niemals einen
Unterprozess. Remote-Videos werden mit einer Obergrenze von 50 MiB
heruntergeladen; inline eingebettete Base64-Videos haben eine konservative
Obergrenze von 36 MiB dekodierter Daten pro Video, damit die Hülle aus
Modell-, Nachrichten- und Framing-Daten innerhalb des öffentlichen
JSON-Annahmegrenzwerts von 50 MiB bleiben kann. Inline-Länge und Schätzwerte
der dekodierten Größe werden vor der Allokation geprüft. Für die ursprüngliche
Remote-URL und jede Weiterleitung ist HTTPS erforderlich, wobei die bestehende,
ausschließlich öffentliche Schutzvorrichtung für ausgehende Verbindungen mit
DNS-Pinning verwendet wird. Anschließend überschreiten die Bytes exakt die
interne Brokergrenze `POST /api/modality-bridge/video/extract`. Diese Route ist
sowohl `LOCAL_ONLY` als auch `SPAWN_CAPABLE`, akzeptiert ausschließlich eine
prozessspezifisch authentifizierte Anfrage über einen vertrauenswürdigen
Loopback und akzeptiert niemals eine URL, einen Dateisystempfad, eine
ausführbare Datei oder eine Argumentliste. Die Pipeline zur Begrenzung der
API-Bodygröße und der inkrementelle Body-Reader des Handlers setzen unabhängig
voneinander eine Obergrenze von 50 MiB für Broker-Eingaben durch. Die begrenzte
Warteschlange führt jeweils eine Extraktion aus, lässt vier ausstehende
Aufträge zu und begrenzt ausstehende Eingabedaten auf 100 MiB.

Innerhalb des Brokers liest `ffprobe` eine private lokale Datei; die feste
Format-Positivliste schließt Wiedergabelisten- und Manifestformate aus. Bei
zulässigen Containern der MOV-Familie bleiben externe MOV-Datenreferenzen
standardmäßig deaktiviert, und der feste Befehl aktiviert sie nicht. Sowohl
`ffprobe` als auch `ffmpeg` verwenden die ausschließlich `file` umfassende
Protokoll-Positivliste, einen Thread, feste Argument-Arrays, keine Shell und
über `PATH` aufgelöste ausführbare Dateien. Cover-Streams mit angehängten
Bildern sind keine abspielbaren Kandidaten. Alle abspielbaren Streams müssen
die Grenzwerte einhalten, und ein expliziter Standardstream wird gegenüber
dem deterministischen Fallback auf den niedrigsten Index bevorzugt. Videos
sind auf 600 Sekunden, 8.192 Pixel pro Dimension und 33.554.432 Quellpixel
begrenzt. FFmpeg tastet 1–16 JPEG-Frames an ihren Mittelpunkten ab, skaliert
die lange Kante auf höchstens 1.024 Pixel herunter, ohne kleinere Eingaben
hochzuskalieren, und erhält niemals eine URL. Standardmäßig erfolgt die
Abtastung mit `uniform`. Die optionalen Richtlinien `scene_aware` und das
experimentelle `segment_aware` führen einen zusätzlichen festen FFmpeg-Durchlauf
über den bereits validierten lokalen Stream aus, wählen eine begrenzte Anzahl
von `showinfo`-Szenenzeitstempeln aus und greifen bei einem Detektorfehler,
einer Zeitüberschreitung, fehlerhafter Ausgabe oder einer leeren Kandidatenmenge
deterministisch auf dieselben einheitlich verteilten Mittelpunkte zurück. Der
segmentorientierte Modus weist Mittelpunkt-Abtastungen proportional zu den
validierten Szenenintervallen zu; segmentorientierte Nachweise und das
Fallback-Verhalten werden weiter unten ausführlich beschrieben. Die feste
Obergrenze von 16 Frames wird bei jeder Richtlinie nach der Auswahl angewendet.
Wenn eine szenenorientierte Anfrage nur ein Budget von einem Frame hat,
verwendet sie den einheitlichen Mittelpunkt des aktiven Gesamtvideo- oder
Fokusfensters und meldet `policyEffective: uniform`: Ein einzelner ausgewählter
Szenen-Frame kann nicht beide zeitlichen Enden abbilden. Ein Aufrufer kann
optional ein endliches Fokusfenster (`start`/`end` in Sekunden) angeben; die
Grenzen werden auf die Mediendauer beschränkt, umgekehrte oder nicht endliche
Fenster werden abgelehnt, und alle Abtastrichtlinien werden ausschließlich
innerhalb des normalisierten Intervalls ausgeführt. Das resultierende Fenster
wird in die Abtastmetadaten und in das nicht vertrauenswürdige
Beschreibungspräfix aufgenommen, damit nachgelagerte Modelle einen fokussierten
Ausschnitt von der vollständigen Zeitleiste unterscheiden können.

Der semantische Fokus der Bildbeschreibung ist eine separate, explizite
Einstellung. Der standardmäßige Analysemodus `full` behält den bestehenden
Frame-Prompt bei und leitet niemals Anfragetext an das Modell für
Bildbeschreibungen weiter. Im Modus `focused` liest die Bridge ausschließlich
den neuesten nicht leeren, vom Benutzer verfassten Inhalt aus
`text`/`input_text` desselben Chat- oder Responses-Containers, normalisiert ihn
nach NFC, fasst Steuerzeichen und Leerraum zusammen und begrenzt ihn auf 500
Unicode-Codepoints. Ein leeres Ergebnis greift auf den exakten `full`-Prompt
zurück. Ein verwendbarer Hinweis wird als JSON in einem dedizierten Block für
nicht vertrauenswürdigen Benutzerkontext serialisiert und darf lediglich
beobachtbare Details priorisieren; er kann die separate Warnung, in den Medien
sichtbaren oder hörbaren Anweisungen nicht zu folgen, nicht außer Kraft setzen.
Der Textfokus leitet niemals `start`/`end` ab und verändert den zeitlichen
Sampler nicht.

#### FU-07 Strukturelle Segmentnachweise

`segment_aware` verwendet einen einzigen begrenzten Voranalysedurchlauf über den bereits validierten lokalen Videostream. Die feste Filterkette skaliert zunächst auf höchstens 320 Pixel Breite, erkennt Szenenwechsel und eingefrorene Intervalle und nimmt anschließend für Unschärfe, durchschnittliche Luminanz sowie räumliche/zeitliche Informationen eine Stichprobe mit 1 Bild pro Sekunde. Der Durchlauf ist auf 600 strukturelle Stichproben, einen FFmpeg-/Filter-Thread, dieselben Positivlisten ausschließlich für das `file`-Protokoll und für Container, eine Begrenzung der Prozessausgabe auf 1 MiB sowie höchstens 30 Sekunden innerhalb des gemeinsamen Abbruch-/Zeitlimitmechanismus des Brokers beschränkt. Er akzeptiert niemals einen Befehl, Filter, Pfad oder eine URL aus der Anfrage.

Die strukturellen Werte sind deterministische Stichprobenbelege und kein semantisches Verständnis des Videos. Aus ihnen werden weder Motive, Handlungen, Untertitel, Sprache noch die Absicht des Benutzers abgeleitet. Szenen- und Standbildgrenzen bilden Segmente; Standbildabdeckung, Unschärfe, Belichtung, räumliche Details und zeitliche Veränderungen beeinflussen lediglich, wie das bestehende Budget von 1–16 Bildern zugeteilt wird. Ein vollständig eingefrorenes Segment ist auf ein Bild begrenzt, während nicht eingefrorene Segmente um das verbleibende Budget konkurrieren. Wenn es mehr Grenzen als Bilder gibt, wird eine gleichmäßige Abdeckung der Zeitleiste beibehalten, sodass schnelle frühe Schnitte ein langes nachfolgendes Segment nicht verdecken können. Szenengrenzen, die innerhalb der Analyseauflösung von 1 Sekunde um eine Standbildgrenze liegen, werden zusammengeführt.

Fehlende Filter, fehlerhafte oder leere Belege, ein Detektorfehler oder eine Zeitüberschreitung der begrenzten Voranalyse führen als offener Fallback exakt zur Richtlinie gleichmäßig verteilter Mittelpunkte. Ein Abbruch durch den Aufrufer oder das Zeitlimit des Brokers führt nicht zu diesem offenen Fallback: Dadurch wird der laufende Unterprozess beendet, die spätere Bildextraktion verhindert und der private temporäre Verzeichnisbaum in `finally` entfernt.

`scripts/perf/video-bridge-fu07-eval.ts` erzeugt deterministische reale FFmpeg-Testdaten für Einsparungen bei Untertitelungsaufrufen nach der Deduplizierung, die Budgetzuweisung bei hoher Bewegungsdichte, Belege für Unschärfe/Belichtung/SI-TI, schnelle Schnitte mit einem langen Ausklang und falsch positive Ergebnisse bei allmählichen Überblendungen. Das Skript erfasst die verstrichene Voranalysezeit und, sofern `/usr/bin/time` verfügbar ist, die CPU-Nutzung des Kindprozesses sowie dessen maximalen RSS-Speicherverbrauch. Seine Qualitätsprüfungen sind ausschließlich strukturelle Orakel. Die Qualität realer Untertitelungsmodelle verbleibt bei `HOLD`, da dieses Testsystem weder über einen autorisierten Endpunkt noch über einen fest definierten Bewerter verfügt. Monetäre Einsparungen verbleiben ebenfalls bei `HOLD`, sofern nicht mit `--caption-cost-per-call-usd` eine explizite positive Kostenschätzung pro Aufruf angegeben wird; das Skript erfindet keines dieser Ergebnisse.

Jedes Bild ist auf 4 MiB, alle Rohbilder zusammen auf 23 MiB und die serialisierte Broker-Antwort auf 32 MiB begrenzt. Ein privates temporäres Verzeichnis wird in `finally` entfernt. OmniRoute liefert FFmpeg nicht mit und akzeptiert keinen benutzerdefinierten Pfad zur ausführbaren Datei. Vor der Untertitelung führt die Bridge eine konservative visuelle Deduplizierung durch: Jedes JPEG wird auf einen 16×16-Graustufenpuffer reduziert und nur mit dem zuletzt beibehaltenen Bild verglichen. Bei einem angeforderten Untertitelungsbudget von mehr als einem Bild stellt die Extraktion einen begrenzten Kandidatenpool bereit, der höchstens doppelt so groß wie dieses Budget ist und nie mehr als 16 Bilder umfasst. Die angeforderte Obergrenze wird erst nach der Deduplizierung angewendet; bei der abschließenden Ausdünnung bleiben der erste und der letzte ausgewählte Kandidat erhalten, wenn das Budget mindestens zwei beträgt. Die versionierte Richtlinie `grayscale-16x16-mean-cells-v2` verwendet den größeren Wert aus der mittleren Luminanzdifferenz und dem Anteil der Vorschaubildzellen, deren normalisierte Differenz mindestens 0,05 beträgt. Der Duplikatschwellenwert ist die Konstante 0,04, die zugunsten der Vorhersagbarkeit gewählt wurde, statt als Laufzeiteinstellung verfügbar zu sein. Dieses sekundäre kontrastreiche Signal bewahrt kleine Bewegungen und Änderungen an sichtbarem Text, die bei einem ausschließlich auf Mittelwerten basierenden Vergleich verborgen bleiben können. Fehler des Vergleichsmoduls oder Decoders führen als offener Fallback dazu, dass die Abdeckung beibehalten wird. Die Ausgabemetadaten unterscheiden zwischen extrahierten Kandidaten, erfolgreich verwendeten Bildern und verworfenen visuellen Duplikaten.

Ein explizit gekennzeichneter Videoteil kann eine mit Zeitstempeln versehene Kontaktübersicht anfordern. Die Bridge erstellt ein JPEG-Raster mit höchstens 4 Spalten und 16 Bildern. In jede 512-Pixel-Zelle wird der Zeitstempel ihres Quellbildes in einem kontrastreichen unteren Streifen eingeblendet, während dieselben Zeitstempel zur nachgelagerten Zuordnung und Prüfung in den Textmetadaten erhalten bleiben. Das vollständige JPEG bleibt auf 32 MiB begrenzt. Wenn `sharp` das Raster nicht decodieren oder zusammensetzen kann, greift die Bridge auf die einzelnen JPEG-Bilder zurück; ein Clientabbruch wird weiterhin an den Vorgang zur Erstellung der Übersicht weitergegeben.

Nachweise für eine Hochstufung sind bewusst vom synthetischen Mikrobenchmark für die Zusammenstellung getrennt. `scripts/perf/video-bridge-contact-sheet-eval.ts` definiert ein schemaversioniertes A/B-Testsystem für reale OpenAI-kompatible Vision-Modelle. Es misst die vom Anbieter gemeldeten Token, die End-to-End-Latenz der verstrichenen Zeit einschließlich der Zusammenstellung der Übersicht, die Anzahl der Modellaufrufe und die Beibehaltung der im Manifest definierten Fakten. Unverarbeitete Modellantworten werden nicht in den Bericht geschrieben; gespeichert werden ausschließlich SHA-256-Digests und die IDs übereinstimmender Fakten. Das Testsystem führt keine Netzwerk- oder kostenpflichtigen Modellaufrufe durch, sofern nicht `--execute-real` übergeben wurde und `--model`, `OMNIROUTE_BASE_URL` und `OMNIROUTE_API_KEY` konfiguriert sind. Ohne diesen expliziten realen Durchlauf verbleibt sein maschinenlesbares Urteil bei `HOLD`; synthetische Messungen der Nutzdaten oder Aufrufanzahl allein sind kein Nachweis für eine Hochstufung.

Aufrufer können einem unterstützten Videoteil ein optionales Array `transcript.cues` hinzufügen, wenn sie bereits über zeitlich abgestimmten Text verfügen. Jeder Hinweis muss `text`, ein endliches `start`-/`end`-Intervall innerhalb der ermittelten Dauer und eine in der Positivliste enthaltene `source` (`client`, `embedded` oder `audio-bridge`) enthalten; `confidence` ist standardmäßig `1` und muss zwischen `0` und `1` liegen. Exakte Duplikate von Hinweisen werden zusammengeführt. OmniRoute startet anhand dieser Metadaten niemals eine Transkription: Validierte Hinweise werden mit Quelle, Konfidenz und Intervall in das beschriebene Ergebnis kopiert und neben den Bilduntertiteln als nicht vertrauenswürdige Beobachtungen dargestellt. Ungültiger, außerhalb des zulässigen Bereichs liegender oder herkunftsloser Text wird abgelehnt, statt in den Untertitelstrom aufgenommen zu werden. Das Feld `source` wird derzeit vom Aufrufer deklariert und nicht serverseitig verifiziert: OmniRoute erzwingt, dass der Wert eine der drei zulässigen Zeichenfolgen ist, bestätigt jedoch noch nicht kryptografisch, dass eine Kennzeichnung als `embedded` oder `audio-bridge` tatsächlich aus einer servereigenen Extraktion stammt. Behandeln Sie `source` bis zur Implementierung dieser Verifizierung als nicht vertrauenswürdigen Hinweis; stützen Sie keine Autorisierungsentscheidungen darauf.

Ein fortgeschrittener Aufrufer kann für dasselbe Video eine bereits autorisierte `audioTranscript`-Spur bereitstellen. Die Zusammenführung führt visuelle und akustische Beobachtungen unter einer gemeinsamen Frist und mit demselben Abbruchsignal aus, ordnet sie auf einer gemeinsamen Zeitleiste an, fasst exakte Duplikate zusammen und meldet ein Teilergebnis, wenn nur eine Seite erfolgreich ist. Ein ungültiges `audioTranscript` führt zu diesem Teilergebnis – die visuelle Beschreibung bleibt erhalten und der Audiozweig zeichnet einen bereinigten Fehlercode auf –, anstatt die Verarbeitung des gesamten Videos fehlschlagen zu lassen. Die Verfügbarkeit pro Zweig, das Teilresultat-Flag und die bereinigten Fehlercodes bleiben im beschriebenen Ergebnis, in den Guardrail-Metadaten (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), in den Metadaten des Ergebnis-Caches und in den Zusammenführungszählern der Bridge erhalten. Der standardmäßige Video-Bridge-Pfad ruft weder Speech-to-Text auf noch lädt er eine zweite Kopie der Mediendatei herunter; ohne diese explizite Spur bleibt er auf Video beschränkt.

**Aufbewahrung von Transkripten (#12150 P1).** Dies gilt automatisch, wenn die Video Bridge (die selbst optional aktiviert werden muss) einen Transkript-Cue rendert – es gibt kein separates Aufbewahrungs-Flag. Wenn eine Anfrage einen beliebigen Transkript-Cue rendert (ein vom Aufrufer deklariertes `transcript` oder ein zusammengeführtes `audioTranscript`), markiert das Guardrail sie als `videoBridgeObserved` und erzeugt eine redigierte Schattenkopie der Videobeschreibung – eine identische Darstellung, in der der Freitextkörper jedes Cues durch `[redacted-video-transcript]` ersetzt wird. Sie wird erstellt, indem das strukturierte Cue-Feld ersetzt wird, bevor die Zeichenkette zusammengesetzt wird (niemals durch Parsen des abgeflachten Texts, sodass keine Cue-Inhalte – weder bösartige noch gewöhnliche, einschließlich Körpern mit `]` wie `[inaudible]`/`[music]` – erhalten bleiben können). Im persistierten Anfragekörper des Aufrufprotokolls wird jeder aus einem Video abgeleitete Textteil anhand der Inhaltsgleichheit durch diese redigierte Schattenkopie ersetzt; der `fullText`-Anker wird erneut aus der fertiggestellten Guardrail-Nutzlast vor dem Aufruf gelesen, sodass die Übereinstimmung auch dann noch gelingt, wenn spätere verkettete Guardrails (die PII- und Zugangsdaten-Maskierer mit den Prioritäten 10/95) den Beschreibungstext direkt umschreiben und nachdem die Einfügung von System-Prompt, Übergabe und Memory das Nachrichten-Array umgeformt hat. Der an das Modell gesendete Inhalt bleibt unverändert. Eine beobachtete Anfrage befüllt außerdem kein dauerhaftes Memory (sowohl die aus der Anfrage als auch die aus der Antwort abgeleitete Extraktion werden übersprungen), sodass die eigene Antwort des Modells keinen Transkripttext in Memory wiedergeben kann.

**Unverarbeitete Videofelder (#12430).** Wenn die Bridge aktiviert ist und die native Videounterstützung unbekannt ist oder fehlt, aktivieren definierte `transcript`-/`audioTranscript`-Felder ebenfalls `videoBridgeObserved`, selbst nach einem Fehler bei der Beschreibung oder bei Erreichen eines `maxVideos`-Limits. `null` und leere Zeichenketten zählen; fehlende Felder und Nicht-Video-Metadaten zählen nicht. In aufbewahrten Kopien werden diese Felder redigiert oder die Anfrage wird weggelassen, und Caches/Memory werden umgangen. Die Anbieter-Nutzlast bleibt unverändert.

Zusätzliche aufbewahrte Kopien verwenden dasselbe Signal für beobachtete Anfragen. Der unverarbeitete Snapshot der Client-Anfrage vor dem Guardrail, die ausstehende Anfrage im Arbeitsspeicher und das Protokoll frühzeitig abgelehnter Anfragen ersetzen Transkriptfelder in Videoteilen strukturell; von Pipeline-Stufen und der Kontextübergabe erzeugte Zeichenketten-Prompts werden an der Senke für den persistierten Anfragekörper redigiert. Die persistierte Markierung `video_content_removed` bewirkt, dass eine Fortsetzung über `previous_response_id` sicher fehlschlägt, anstatt absichtlich verworfenen Text zu rekonstruieren. Wenn bei einer beobachteten Anfrage die Redaktions-Schattenkopie eines Teils vor der Protokollierung verloren geht oder auch nur eine von mehreren Video-Schattenkopien nach späteren Änderungen an der Anfrage nicht mehr übereinstimmt, wird der aufbewahrte Anfragekörper vollständig weggelassen, anstatt ein nur teilweise redigiertes Transkript aufzubewahren.

Bei einer beobachteten Anfrage könnte eine Modellantwort einen beliebigen Teil des Transkripts ohne strukturierte Cue-Grenze zitieren. Der persistierte `responseBody` des Aufrufprotokolls wird daher durch eine Auslassungsmarkierung ersetzt; das detaillierte Pipeline-Artefakt (das Anbieter-/Client-Inhalte und Stream-Chunks enthalten kann) wird nicht aufbewahrt. Semantik-, Idempotenz- und Reasoning-Replay-Caches umgehen für diese Anfrage sowohl Lese- als auch Schreibvorgänge. Die Anbieteranfrage und die für den Client sichtbare Antwort bleiben unverändert. Frühe Keepalive-Bytes werden aus dem temporären Puffer entfernt, wenn das detaillierte Artefakt ausgelassen wird. Kiros Warnung zu einem fehlerhaften EventStream meldet nur die Anzahl der Nutzlast-Bytes, niemals deren Inhalt oder den unverarbeiteten Fehler des JSON-Parsers.
Damit wird nicht behauptet, dass alle unabhängigen Anbieter-/Plugin-Diagnosen geprüft wurden; die umfassendere Überprüfung der Aufbewahrungssenken wird in #11658 nachverfolgt.

Der interne Lebenszyklus von `/api/modality-bridge/video/drilldown` ist ein separates, per Loopback/Token authentifiziertes Cache-Substrat. Jeder Vorgang erfordert außerdem eine kanonische, opake Prinzipal-ID. Bevor ein Produktionsaufrufer aktiviert wird, muss er diese ID aus dem authentifizierten Mandanten ableiten und darf niemals einen vom Client ausgewählten Wert weiterleiten. Cache-Schlüssel binden dieses Prinzipal an kanonische Sitzungs- und Videoreferenz-IDs, speichern nur deren mittels SHA-256 abgeleitete Schlüssel und beschränken sowohl Lese- als auch Löschvorgänge auf dasselbe Prinzipal. Der Cache speichert höchstens 16 abgeleitete JPEG-Frames pro Eintrag, lässt sie nach zehn Minuten ablaufen und unterstützt begrenzte Lesevorgänge mit `start`/`end` oder das explizite Löschen einer Sitzung.

Jedes Prinzipal ist auf 16 Einträge und 64 MiB kanonischer JPEG-Daten begrenzt. Diese Limits sind unabhängig von der globalen Obergrenze von 64 Einträgen/256 MiB: Quotendruck auf ein Prinzipal verdrängt ausschließlich die am längsten nicht verwendeten Einträge dieses Prinzipals, bevor eine globale LRU-Verdrängung in Betracht gezogen wird. Abgelaufene Einträge werden bei Cache-Aktivitäten sowohl aus der Prinzipal- als auch aus der globalen Abrechnung entfernt, während ein Abbruch oder ein Validierungsfehler keinen teilweisen Ersatz übernimmt.

Der Cache weist nicht kanonisches Base64, übermäßiges Padding, Nicht-JPEG-Medien, fehlerhafte oder
abgeschnittene JPEGs sowie JPEGs zurück, die bei einer begrenzten vollständigen Bilddekodierung mit `sharp`
eine Warnung erzeugen. Jedes akzeptierte Bild wird als kanonisches JPEG neu kodiert; Breite und Höhe werden
aus den dekodierten Bytes abgeleitet, anstatt den Feldern des Aufrufers zu vertrauen, und nachgestellte
Polyglot-Bytes werden verworfen, statt sie beizubehalten. Nur der begrenzte kanonische komprimierte Puffer
wird auf beide Kontingente angerechnet. Das JSON-Übertragungslimit berücksichtigt den Base64-Overhead für die
Obergrenze von 32 MiB für dekodierte Eingaben. Jede
gespeicherte Ableitung erfasst ihr validiertes JPEG-Format/ihre validierte JPEG-Auflösung, die Sampling-Richtlinie,
die Ableitungsversion, den Erstellungszeitpunkt, den serverseitig berechneten Inhalts-Hash und
eine gehashte übergeordnete Referenz sowie den Hash des übergeordneten Inhalts vom vertrauenswürdigen
Aufrufer. Zwischen asynchronen Dekodierungs-/Hash-Phasen wird vor dem atomaren Cache-Commit
auf einen Abbruch geprüft.

Diese Tranche verbindet noch keinen Produktions-Producer mit der Route und bietet
keine Auswahl von Varianten mit unterschiedlichen Auflösungen. Der transparente Anfragepfad
der Video Bridge verursacht daher keinen zusätzlichen Aufwand, während die mandantengebundene Principal-Ableitung und
der vollständige FU-08-Lebenszyklus für mehrere Auflösungen ausdrücklich als nachgelagerte Arbeiten verbleiben,
statt als vollständiges Verhalten dokumentiert zu werden.

Frames werden nacheinander mit dem konfigurierten Video-Modell beschriftet. Eine leere
Video-Überschreibung übernimmt die Vision-Einstellung; wenn beide leer sind, wählt der Vision-
Auto-Router das effektiv verwendete Vision-fähige Modell aus. Erfolgreiche Beschriftungen
ersetzen den ursprünglichen Teil durch ein stabiles Präfix `[Video description:`, das den
Text außerdem als nicht vertrauenswürdige, aus Medien abgeleitete Beobachtung kennzeichnet und nachgelagerte
Modelle anweist, in den Medien gefundenen Anweisungen nicht zu folgen. Cache-Schlüssel für Frame-Beschriftungen
enthalten die JPEG-Bytes, den Prompt, den Zeitstempel und das effektiv verwendete Modell; nur erfolgreiche
Beschriftungen werden zwischengespeichert. Cache-Einträge behalten das tatsächlich erfolgreiche Producer-Modell bei,
einschließlich eines Fallback-Modells; die Bridge meldet `mixed`, wenn verschiedene Frames
von unterschiedlichen Modellen erzeugt wurden. Ein Cache-Treffer verwendet diese Producer-Identität erneut,
anstatt sie als angeforderten Routingplan neu zu kennzeichnen. Der Cache für das Gesamtergebnis des Videos
wird anhand aller Eingaben verschlüsselt, die die Ausgabe verändern — Prompt, effektiv verwendetes
Modell, Sampling-Richtlinie, Frame-Anzahl, semantischer Analysemodus, der SHA-256-
Fingerabdruck des normalisierten Fokus-Hinweises, Fokusfenster, `transcript`,
`audioTranscript` und das Kontaktbogen-Flag —, sodass die Änderung einer dieser
Dimensionen zu einem Cache-Fehlschlag und niemals zur Wiederverwendung veralteter Daten führt. Die Version
der visuellen Deduplizierungsrichtlinie, der Schwellenwert und die begrenzte Anzahl der Frame-Kandidaten sind ebenfalls explizit im
Ergebnis-Cache-Schlüssel und in den Metadaten enthalten; eine Richtlinienänderung kann daher keine veraltete
Gesamtvideobeschreibung wiederverwenden. Die Metadaten des Ergebnis-Caches v4 enthalten den Modus und
den Fingerabdruck, niemals die unverarbeitete Benutzeraufgabe. Guardrail-Metadaten melden sowohl den
angeforderten als auch den effektiven Analysemodus; ein angeforderter `focused`-Modus ohne
verwendbaren Benutzertext wird effektiv als `full` gemeldet.

Die Guardrail extrahiert jeden unterstützten Videoteil, beschreibt jedoch höchstens
`modalityBridgeVideoMaxVideos`. Bei einem Ziel, für das nachgewiesen wurde, dass
`supportsVideo === false` gilt, werden fehlgeschlagene und über dem Limit liegende Videos zu expliziten sicheren
Textmarkern, sodass kein Rohvideo erhalten bleibt. Wenn die Fähigkeit unbekannt ist, bleiben diese Teile
unverändert. Ziele mit `supportsVideo === true` umgehen die Bridge.
Das Abbruchsignal der Client-Anfrage wird durch Download, Broker-Warteschlange,
Unterprozesse und Beschriftungsaufrufe weitergegeben; Abbrüche stoppen zwischen Videos und führen niemals
zu einer ausfallsicheren Weitergabe der Rohmedien.

Laufzeiteinstellungen werden in der DB gespeichert und mit Zod validiert:

| Schlüssel                           | Standardwert | Bereich / Verhalten                                                                                                                  |
| ----------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`      | Optionale Laufzeit, Opt-in                                                                                                           |
| `modalityBridgeVideoAnalysisMode`   | `"full"`     | `full` behält generische Beschriftungen bei; `focused` verwendet begrenzten, nicht vertrauenswürdigen Kontext des neuesten Benutzers |
| `modalityBridgeVideoModel`          | `""`         | Übernimmt das Modell der Vision Bridge                                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`          | 1–16                                                                                                                                 |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`  | `uniform`, `scene_aware` oder proportionales `segment_aware`; bei einem Detektorfehler wird auf `uniform` zurückgegriffen            |
| `modalityBridgeVideoMaxVideos`      | `1`          | 1–4                                                                                                                                  |
| `modalityBridgeVideoTimeout`        | `120000`     | 1000–120000 ms                                                                                                                       |

Persistierte ältere Video-Timeout-Werte über 120 Sekunden werden auf die
Broker-Deadline begrenzt; neue Einstellungsänderungen oberhalb dieses Limits werden abgelehnt.
`GET /api/modality-bridge/video/runtime` erfordert vor der Authentifizierung oder Laufzeitprüfung
eine vertrauenswürdige, gekennzeichnete Loopback-Lokalität und anschließend eine Management-
Authentifizierung. Die Antwort enthält nur `available`, bereinigte FFmpeg-/ffprobe-Versionen und einen festen
Grund, wenn die Laufzeit nicht verfügbar ist. Der interne Extraktionsendpunkt ist keine
öffentliche Upload-API: Bei einer ausgelasteten Warteschlange wird `503` plus `Retry-After` zurückgegeben, bei einer
Trennung durch den Aufrufer `499` und bei Erreichen der festen Broker-Deadline `504`. Konvertierte Antworten fügen
`video->text;model=<visionModel>;parts=<videos>` zum zentralen
`x-omniroute-modality-bridge`-Header hinzu, ohne Vision- oder Audio-Segmente zu entfernen.

### PII-Maskierer (`piiMasker.ts`)

Wird in **beiden** Phasen ausgeführt.

- **`preCall`** klont die Nutzlast, durchläuft `system`, `messages`, `input` und
  `prompt` (einschließlich einfacher String-Elemente) und wendet `processPII()` (aus
  `@/shared/utils/inputSanitizer`) auf String-Felder vom Typ `content`/`text` an. Wenn
  `PII_REDACTION_ENABLED=true` gesetzt ist, werden erkannte personenbezogene Daten in der ausgehenden
  Nutzlast geschwärzt. Dies ist unabhängig von `INPUT_SANITIZER_MODE` (das nur die
  Richtlinie für Prompt-Injection steuert). Wenn die Schwärzung deaktiviert ist, zeichnet der Aufruf die Anzahl
  der Erkennungen auf, ohne den Inhalt umzuschreiben.
- **`postCall`** erstellt einen tiefen Klon der Antwort und führt `sanitizePIIResponse()` sowie
  die Maskierung für die Struktur der Responses API (`maskResponsesOutput` — deckt
  `output_text` und `output[].content[].text` ab) aus. Wenn eine Schwärzung erfolgt, ersetzt die
  geänderte Antwort das Original.

Die Schutzvorrichtung blockiert nie; sie versieht Inhalte lediglich mit Anmerkungen (`meta.detections`,
`meta.redacted`) oder schreibt sie um.

### Prompt-Injection (`promptInjection.ts`)

Erkennt schädliche Strukturen in vom Benutzer bereitgestellten Inhalten und setzt die
konfigurierte Richtlinie durch. Das Verhalten wird durch Umgebungsvariablen und Konstruktoroptionen
gesteuert:

| Einstellung      | Umgebungsvariable                                                                                     | Standardwert | Auswirkung                                                                                                                                                                                                                                                       |
| ---------------- | ----------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktiviert        | `INPUT_SANITIZER_ENABLED`                                                                             | `true`       | Bei `false` beendet die Schutzvorrichtung die Verarbeitung vorzeitig.                                                                                                                                                                                            |
| Modus            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`       | Injection-Richtlinie: `block`, `warn` oder `log`. (`redact` wird aus Gründen der Abwärtskompatibilität akzeptiert, entfernt jedoch **keinen** Injection-Text; das Umschreiben personenbezogener Daten in Anfragen wird durch `PII_REDACTION_ENABLED` gesteuert.) |
| Blockierschwelle | Option `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (Alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`       | Mindestschweregrad, der zum Blockieren erforderlich ist. `Medium` wird standardmäßig nur beobachtet.                                                                                                                                                             |

**Moduspriorität** (`getMode`): `options.mode` des Aufrufers →
**DB-Feature-Flag-Überschreibung** für `INJECTION_GUARD_MODE` (Dashboard → Einstellungen →
Feature Flags) → Umgebungsvariable `INJECTION_GUARD_MODE` → Umgebungsvariable `INPUT_SANITIZER_MODE` →
`warn`. Eine Dashboard-Überschreibung hat daher Vorrang vor den Umgebungsvariablen, sodass die Feature-
Flags-Benutzeroberfläche die laufende Schutzvorrichtung live steuert (ohne Neustart). Der Datenbankzugriff ist ausfallsicher:
Wenn ein Fehler auftritt, greift die Schutzvorrichtung auf das umgebungsvariablenbasierte Verhalten zurück; wenn keine
Überschreibung festgelegt ist, entspricht das Verhalten der ausschließlich auf Umgebungsvariablen basierenden Auflösung.

Erkennungsquellen:

1. `sanitizeRequest()` aus `@/shared/utils/inputSanitizer` (gemeinsamer Detektorsatz,
   der auch an anderen Stellen der Pipeline verwendet wird).
2. Integrierte `DEFAULT_GUARD_PATTERNS` (derzeit `system_override_inline` und
   `markdown_system_block`, beide mit dem Schweregrad `high`).
3. Optionale `customPatterns`, die über Konstruktoroptionen übergeben werden (Strings, reguläre Ausdrücke
   oder Datensätze im Format `{ name, pattern, severity }`).

Wenn `mode === "block"` gilt **und** mindestens eine Erkennung die Schweregrad-
schwelle erreicht, gibt `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }` zurück. In den Modi `warn`/`log` protokolliert die Schutzvorrichtung den Vorgang, lässt
den Aufruf jedoch zu. Die gemeinsame Hilfsfunktion `evaluatePromptInjection()` wird ebenfalls exportiert,
damit Aufrufer Prompts auswerten können, ohne die Registry zu durchlaufen.

**Scanbegrenzung (v3.8.20):** Der Detektor untersucht nur die **ersten 16 KB** des
zusammengefügten Prompt-Texts — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 Byte) in
`src/shared/utils/inputSanitizer.ts`. Sowohl `detectInjection()` als auch
`evaluatePromptInjection()` führen vor der Ausführung der Musterschleife
`slice(0, MAX_INJECTION_SCAN_BYTES)` aus. Injection-Anweisungen befinden sich nahe am Anfang einer Eingabe, sodass dies
die Regex-CPU-/GC-Auslastung bei Nutzlasten von mehreren Hundert KB begrenzt, ohne die Erkennung zu schwächen (vgl.
#3932, #4041).

### Anmeldedaten-Maskierer (`credentialMasker.ts`)

Wird in **beiden** Phasen ausgeführt, in der Standardkette zuletzt (Priorität `95`). Schwärzt
bekannte Muster für API-Schlüssel/Geheimtoken in der ausgehenden Nutzlast (Nachrichteninhalte,
Argumente von Tool-Aufrufen, Tool-Ergebnisse) **und** in der Antwort des Anbieters, sodass
Anmeldedaten, die in einen Prompt eingefügt (oder von einem Tool-Ergebnis zurückgegeben) werden, weder
an den vorgelagerten Anbieter noch zurück an den Client gelangen.

- **Nur Opt-in**, dieselbe Konvention wie bei der Schwärzung personenbezogener Daten (angrenzend an feste Regel Nr. 20):
  deaktiviert, sofern nicht `settings.credentialRedactionEnabled === true` **oder**
  `CREDENTIAL_REDACTION_ENABLED=true` gilt. Ist die Funktion deaktiviert, führt die Schutzvorkehrung keine Aktion aus —
  sie blockiert und verändert niemals etwas.
- `redactCredentials()` durchläuft den vollständigen Payload-/Antwortbaum (`walkValue()`,
  sicher vor Prototype Pollution und mittels `WeakSet` vor Zyklen geschützt) und ersetzt Treffer durch
  einen Platzhalter vom Typ `[REDACTED:<type>]`, wobei nur die tatsächlich
  geänderten Zweige geklont werden.
- `CREDENTIAL_PATTERNS` deckt Schlüssel von LLM-Anbietern (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS-/SaaS-Token (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), Zahlungsschlüssel (Stripe, Square), Cloud-
  Schlüssel (AWS-Zugriffsschlüssel, Twilio, SendGrid, Mailgun), private Schlüssel/JWTs,
  Verbindungszeichenfolgen mit Zugangsdaten (`mongodb://user:pass@...` usw.) sowie
  ein generisches Muster für die Werte der Header `Authorization`/`x-api-key`/`api-key`/`apikey`
  ab. Header-förmige Schlüssel (`authorization`, `x-api-key`, `api-key`,
  `apikey`) werden strukturell geschwärzt (nur der Wert, Schemapräfixe wie
  `Bearer `/`Basic ` bleiben erhalten), statt über den generischen Text-Regex.
- Die Schutzvorkehrung blockiert niemals; sie schreibt nur um (`modifiedPayload` /
  `modifiedResponse`) und fügt Metadaten hinzu (`meta.credentialsRedacted`, `meta.count`).

Regressionsschutz: `tests/unit/credential-masker-guardrail.test.ts`.

## Basisvertrag (`base.ts`)

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
  block?: boolean; // true bricht die Kette vorzeitig ab
  message?: string; // wird beim Blockieren ausgegeben
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // wird von preCall zurückgegeben, um die Anfrage umzuschreiben
  modifiedResponse?: TValue; // wird von postCall zurückgegeben, um die Antwort umzuschreiben
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

Eine Schutzvorrichtung signalisiert „keine Änderung“, indem sie entweder `void`, `{}` oder
`{ block: false }` zurückgibt. Die Rückgabe eines `modifiedPayload`/`modifiedResponse` ersetzt
den Wert, der für nachgelagerte Schutzvorrichtungen durch die Kette fließt.
`signal?: AbortSignal` überträgt den Lebenszyklus des Aufrufers an die Schutzvorrichtungen. Der Abbruch einer Anfrage ist die bewusste Fail-Open-Ausnahme: Medienbrücken beenden ihre Arbeit und führen Aufräumarbeiten durch, ohne rohe Medien für ein Ziel wiederherzustellen, von dem bekannt ist, dass es diese nicht unterstützt.

## Registrierung (`registry.ts`)

Der Singleton `guardrailRegistry` stellt Folgendes bereit:

- `register(guardrail)` — fügt eine Schutzvorrichtung hinzu (oder ersetzt sie anhand ihres normalisierten Namens) und
  sortiert erneut nach aufsteigender `priority`.
- `clear()` / `list()` — administrative Hilfsfunktionen.
- `runPreCallHooks(payload, context)` — durchläuft aktive Schutzvorrichtungen, reicht die
  Nutzlast über `modifiedPayload` weiter und stoppt beim ersten `block: true`.
- `runPostCallHooks(response, context)` — derselbe Ablauf auf der Antwortseite.
- `resetGuardrailsForTests({ registerDefaults })` — löscht den Zustand und registriert optional
  die Standardwerte erneut, um eine saubere Testisolation zu gewährleisten.

Beide Ausführungsfunktionen geben `{ blocked, payload|response, results, guardrail?, message? }`
zurück, wobei `results` ein Array von `GuardrailExecutionResult`-Datensätzen ist, die
für jede Schutzvorrichtung die Felder `blocked`, `skipped`, `modified`, `error` und `meta`
enthalten, was für die Ablaufverfolgung nützlich ist.

### Schutzvorrichtungen pro Anfrage deaktivieren

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` erstellt eine
deduplizierte Liste der Namen von Schutzvorrichtungen, die für die aktuelle
Anfrage übersprungen werden sollen. Quellen (alle optional, alle zusammengeführt):

- `apiKeyInfo.disabledGuardrails`
- `disabledGuardrails` im Anfragekörper (auf oberster Ebene)
- `metadata.disabledGuardrails` im Anfragekörper
- Header `x-omniroute-disabled-guardrails` (oder veraltet
  `x-disabled-guardrails`)

Werte können Zeichenfolgen-Arrays oder eine kommagetrennte Zeichenfolge sein; Namen werden
in kleingeschriebene Kebab-Case-Schreibweise normalisiert (`pii_masker` → `pii-masker`). Das Ergebnis
wird über `context.disabledGuardrails` an die Registrierung übergeben, die
übereinstimmende Schutzvorrichtungen überspringt (`skipped: true` in `results`).

## Ausführungsreihenfolge

Für jede Anfrage, die `src/sse/handlers/chat.ts` und
`open-sse/handlers/chatCore.ts` durchläuft:

1. `resolveDisabledGuardrails(...)` erstellt anhand von API-Schlüssel, Body
   und Headern die Liste der zu überspringenden Guardrails.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` führt Guardrails in
   aufsteigender Prioritätsreihenfolge aus:
   - Deaktivierte Guardrails werden als `skipped` erfasst.
   - `preCall` jedes Guardrails kann die Nutzdaten über `modifiedPayload`
     umschreiben.
   - Das erste `block: true` bricht die Kette vorzeitig ab, und der Handler
     gibt eine Guardrail-Ablehnungsantwort zurück.
3. Die (möglicherweise umgeschriebenen) Nutzdaten werden an das Combo-Routing
   und die Upstream-Weiterleitung übergeben.
4. Nachdem die Antwort zusammengestellt wurde, führt
   `guardrailRegistry.runPostCallHooks(...)` dieselbe Kette für die Antwort
   aus. `block: true` verwirft hier die Upstream-Antwort.

Guardrails, die eine Ausnahme auslösen, werden mit `error: <message>` erfasst
und über `logger.warn` protokolliert, die Kette wird jedoch fortgesetzt —
dies entspricht dem Fail-Open-Prinzip.

## Konfiguration

Von den integrierten Guardrails gelesene Umgebungsvariablen:

| Variable                              | Verwendet von               | Auswirkung                                                                                                            |
| ------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`          | Auf `false` setzen, um die Erkennung vollständig zu deaktivieren.                                                     |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`          | Injektionsrichtlinie: `warn`, `block` oder `log`. Der Legacy-Wert `redact` schreibt Injektionstext nicht um.          |
| `INJECTION_GUARD_MODE`                | `prompt-injection`          | Modus für den Injektions-Guard; zugleich ein DB-Feature-Flag, das die Umgebungsvariablen **überschreibt** (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`          | Mindestschweregrad, den `MODE=block` ablehnt: `high` (Standard), `medium` oder `low`.                                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`          | Legacy-Alias für `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`                | Bei `true` werden personenbezogene Daten in Anfragen redigiert (unabhängig vom Injektionsmodus).                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nachgelagert) | Steuert das Maskierungsverhalten auf der Antwortseite.                                                                |

Die Modality-Bridge-Guardrails lesen die Laufzeitkonfiguration aus dem
DB-gestützten Einstellungsspeicher (`getSettings()`), nicht aus
Umgebungsvariablen. Die primären Schlüssel für Vision sind
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` und
`modalityBridgeCacheMaxEntries`. Die Legacy-Schlüssel
`visionBridge*` werden nur als dokumentierter Lese-Fallback für einen Zyklus
akzeptiert; Schreibvorgänge über das Dashboard verwenden die primären
Schlüssel. Standardwerte und der Fallback-Resolver befinden sich in
`src/shared/constants/modalityBridgeDefaults.ts`, während Legacy-Konstanten in
`src/shared/constants/visionBridgeDefaults.ts` beibehalten werden.

Audio verwendet `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` und `modalityBridgeAudioMaxClips` sowie die
gemeinsam genutzten `modalityBridgeCache*`-Einstellungen. Für Audio gibt es
keinen Legacy-Schlüssel-Fallback, da diese Schlüssel mit dem
Modality-Bridge-Schema eingeführt wurden.

Video verwendet `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` und
`modalityBridgeVideoTimeout` sowie die gemeinsam genutzten
`modalityBridgeCache*`-Einstellungen. Es ist standardmäßig deaktiviert, da
FFmpeg/ffprobe optionale betriebliche Abhängigkeiten sind und die
Frame-Beschriftung zusätzliche Latenz und Modellkosten verursacht.

## Benutzerdefinierte Guardrails

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

Schritte:

1. Erstellen Sie `src/lib/guardrails/myGuardrail.ts` als Erweiterung von `BaseGuardrail`.
2. Implementieren Sie `preCall` und/oder `postCall`.
3. Registrieren Sie die Guardrail entweder beim Import (über `registerDefaultGuardrails`) oder
   rufen Sie zur Laufzeit `guardrailRegistry.register(...)` auf — die Registry ersetzt
   jede vorhandene Guardrail mit demselben normalisierten Namen.
4. Fügen Sie Tests unter `tests/unit/` hinzu (vorhandene Beispiele:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Tests

Verwenden Sie zwischen den Tests `resetGuardrailsForTests()`, um mit einem bekannten Zustand zu beginnen.
Übergeben Sie `{ registerDefaults: false }`, um mit einer leeren Registry zu beginnen und
nur die zu testenden Guardrails zu registrieren. Vision Bridge unterstützt Dependency
Injection (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge stellt entsprechende
Schnittstellen für Einstellungen, Fähigkeiten, STT-Modellauswahl, Anmeldedatenprüfungen
und Transkription bereit. Tests können daher beide Abläufe ohne Datenbank- oder
Netzwerkzugriff ausführen.

## Siehe auch

- `src/lib/guardrails/` — Implementierung
- `src/shared/utils/inputSanitizer.ts` — gemeinsamer Detektor, auf dem
  Prompt-Injection-Erkennung und PII-Maskierung basieren
- `src/shared/constants/visionBridgeDefaults.ts` — Standardwerte für Vision Bridge und
  Modellliste für erzwungenes Bridging
- `src/shared/constants/modalityBridgeDefaults.ts` — gemeinsame Laufzeitstandardwerte für Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — orthogonale Schicht (Circuit Breaker, Cooldowns)
- `docs/reference/ENVIRONMENT.md` — vollständige Referenz der Umgebungsvariablen

## Routenabdeckung des Injection-Guards und Red-Teaming (Phase 8 · Block D)

Der Injection-Guard (`createInjectionGuard` / `withInjectionGuard`) deckt alle Routen ab,
die Benutzer-Prompts akzeptieren. Er berücksichtigt `INJECTION_GUARD_MODE` (Standardwert `warn` = nur protokollieren;
`block` = gibt HTTP 400 `SECURITY_001` zurück).

| Typ              | Routen                                                                                                                                               | Standardmodus |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Text (vorhanden) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generativ        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Daten            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Die Textextraktion (`extractMessageContents`) deckt `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ab.

**Red-Teaming (nächtlich, `nightly-llm-security.yml`):** promptfoo überprüft, dass jede Route
den OWASP-LLM-Korpus bei `INJECTION_GUARD_MODE=block` blockiert; garak führt Prüfungen aus (wird ohne Secret übersprungen).
`moderations` ist aus Konsistenzgründen enthalten — Betreiber können die Route im Blockierungsmodus über
`resolveDisabledGuardrails` ausnehmen.

Der nächtliche Workflow (`.github/workflows/nightly-llm-security.yml`, Cron + manueller
Start) umfasst zwei Jobs:

- **`promptfoo-guard` (blockierend)** — führt `promptfoo eval -c promptfooconfig.yaml`
  mit `INJECTION_GUARD_MODE=block` aus. Jeder adversariale Fall (z. B. „ignore all
  previous instructions…“, Jailbreaks im DAN-Stil) stellt sicher, dass die Antwort
  `error.code === "SECURITY_001"` enthält, d. h., dass die Guardrail die Anfrage tatsächlich abgelehnt hat.
- **`garak` (informativ)** — führt garak mit `--probes promptinject,dan,leakreplay`
  gegen eine lokale OmniRoute-Instanz (`http://localhost:20128/v1`) aus. Die Ausführung hängt von einem
  Provider-Secret (`PROMPTFOO_PROVIDER_KEY`) ab; ohne dieses wird sie ordnungsgemäß übersprungen und ist mit
  `|| true` versehen, sodass Ergebnisse gemeldet werden, ohne dass CI fehlschlägt.

Die Abdeckung des Guard-Helfers (`createInjectionGuard` / `withInjectionGuard`)
erstreckt sich über jede Prompt-verarbeitende `/v1`-Route; der Prompt-Text wird durch
`extractMessageContents()` in `src/shared/utils/inputSanitizer.ts` aus
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` extrahiert.
