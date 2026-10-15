# Guardrails (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **信頼できる唯一の情報源:** `src/lib/guardrails/`
> **最終更新:** 2026-08-29 — v3.8.51（Video Bridge の文字起こしの来歴は呼び出し元による宣言であり、
> まだサーバー側では検証されていないことを #11661 に基づき明確化）

ガードレールは、OmniRoute とアップストリームプロバイダーの境界で、安全性、ポリシー、およびコンテンツ変換を適用します。各ガードレールは、リクエストペイロード（`preCall`）とアップストリームレスポンス（`postCall`）を検査し、必要に応じて拒否、変換、または注釈付けできます。

システムは **フェイルオープン** です。ガードレールの実行中に例外が発生した場合、レジストリはエラーを記録し、リクエストを失敗させるのではなく、次のガードレールの処理を続行します。ブロックは常に明示的な判断（`block: true`）であり、偶発的に発生することはありません。

## 組み込みガードレール

レジストリはインポート時に、優先度順で6つのガードレールを自動的に読み込みます
（`registry.ts` → `registerDefaultGuardrails()` を参照）：

| 優先度 | 名前                | ステージ       | ファイル              |
| ------ | ------------------- | -------------- | --------------------- |
| `5`    | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`    | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`    | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`   | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`   | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`   | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

優先度の数値が小さいものほど**先に**実行されます。

### Vision Bridge（`visionBridge.ts`）— モダリティブリッジ PR-1

**非ビジョンモデル**宛ての画像を含むリクエストをインターセプトし、リクエスト全体をビジョン対応モデルへ再ルーティングするか、アップストリーム呼び出しの前に、画像部分を設定可能なビジョンモデルが生成したテキスト説明へ置き換えます。これにより、テキスト専用プロバイダーでもマルチモーダルなペイロードを透過的に処理できます。

フロー：

1. ターゲットモデルがすでにビジョンをサポートしている場合はスキップします（強制ブリッジリスト `isVisionBridgeForcedModel` に含まれている場合を除く）。
2. `extractImageParts(messages)`（`visionBridgeHelpers.ts`）を使用して画像部分を抽出します。この関数は、`open-sse/utils/mediaParts.ts` の**統合メディア検出器** `detectMediaParts()` に処理を委譲します。これは、コンボ互換性フィルターと共有される唯一の信頼できる情報源です。抽出対象は、`replaceImageParts` が元の位置へ差し戻せる形状のトップレベル部分に限定されます（extract↔replace 契約）：OpenAI の `image_url`、Anthropic の base64 `source.type:"base64"`、Anthropic の URL `source.type:"url"`、および Responses API の `input_image` です。ネストされた一致やインジケーターのみの形状はコンボフィルターの対象であり、抽出されることはありません。何も見つからない場合はスキップします。
3. `resolveVisionBridgeRuntimeSettings()`（`src/shared/constants/modalityBridgeDefaults.ts`）を介してランタイム設定を解決します。新しい `modalityBridge*` 設定キーが優先され、従来の `visionBridge*` キーは**1サイクルのみのフォールバック**（ロールバック期間）として残ります。ブリッジが無効な場合は、メディアを走査する前にスキップします。
4. モードセレクター（`modalityBridgeVisionMode`、下表を参照）が、再ルーティングか説明生成かを決定します。再ルーティングの場合は、`model` のみを置き換えた `modifiedPayload` と、メタ情報 `{ rerouted, fromModel, toModel, imagesKept }` を返します。
5. 説明生成パスでは、画像数を `maxImages` に制限し、タスクを考慮したプロンプトを構成し、説明キャッシュを参照してから、ビジョンモデルを**並列に**呼び出し（`Promise.allSettled`）、画像部分を `[Image N]: <description>` のテキスト部分に置き換えます。説明生成に失敗した場合は `null` となり、元の画像部分が**保持**されます（#4012）。ただし、コンボの説明生成パスですべての説明生成が失敗した場合は例外で、非ビジョンであることが確認されたアップストリームに対して、代わりに `(unavailable — no vision-capable provider connected)` スタブを使用します（#8430）。
6. `modifiedPayload` とメタ情報（`imagesProcessed`、`descriptions`、`processingTimeMs`、`visionModel`）を返します。

#### モードセレクター（`modalityBridgeVisionMode`）

| モード     | デフォルト | 動作                                                                                                                                                                                                                                                                                                                        |
| ---------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔          | 従来のヒューリスティックを変更せずに使用します（#6640/#7204）。非コンボ/`auto/` モデルは、元のモデルに使用可能な認証情報がない限り、最適なビジョンモデルへ再ルーティングされます（認証情報がある場合は説明を生成します）。コンボターゲットでは常に説明を生成します。                                                        |
| `describe` |            | 常に説明を生成します。再ルーティングブロックは完全にスキップされ、常にユーザーが選択したモデルが回答します。                                                                                                                                                                                                                |
| `reroute`  |            | 再ルーティングを強制します。認証情報を持つモデルを維持するガードはバイパスされます。ただし、再ルーティング**先**の認証情報ガードは引き続き適用されます。使用可能なビジョンターゲットが存在しない場合、リクエストは説明生成へフォールスルーするため、生の画像がテキスト専用バックエンドに到達することはありません（#8430）。 |

強制モードでは、auto ヒューリスティックが実行される**前に**短絡します。`auto` の動作は PR-1 導入前のガードレールとバイト単位で同一です。

#### APIキーのスコープ（`visionBridgeKeyScope.ts`）

呼び出し元のAPIキーによって `allowedConnections`、クォータプール（`allowedQuotas`）、またはモデル（`allowedModels` / `blockedModels` / `modelAccessMode: "restricted"` / `disableNonPublicModels`）が制限されている場合、ブリッジはそのキーで使用可能な接続上の、そのキーで使用可能なモデルのみを再ルーティング先および説明生成用モデルとして選択します。その後、説明生成の呼び出しは常に `x-omniroute-self-loop-key-id` ヘッダーを付けて OmniRoute のセルフループを経由するため、受信側のチャットリクエストで、そのキーの接続およびモデルポリシーが再度適用されます。`enforceApiKeyPolicy()` は、セルフループのBearerと併用された場合にのみこのヘッダーを受け入れるため、アクセス範囲を狭めることしかできません。また、解決できないIDは拒否されます。

そのキーで許可されたビジョンモデルが存在しない場合、説明生成パスは処理を行わず、リクエストは変更されずにそのまま通過します。これは、ガードレールが無効な場合と同じフェイルオープン動作です（メタ情報 `{ skipped: true, reason: "no_permitted_vision_model" }`）。キーのないリクエスト、およびこれらの制限がないキーは、以前とまったく同じように動作します。

#### タスクを考慮した説明生成プロンプト（`modalityBridgeVisionTaskAware`）

デフォルトは **true** です。`composeVisionPrompt()`（`visionBridgeHelpers.ts`）は、
**最後のユーザーメッセージ**のテキスト（500文字に切り詰め）を基本の
describe プロンプトに追加し、ユーザーが実際に尋ねた内容に沿うよう説明を誘導
（codex-vision-proxy パターン）するとともに、表示されているテキストを文字起こしするよう
ビジョンモデルに要求します。フラグがオフの場合、またはユーザーテキストがない場合は、基本プロンプトが
変更されずに使用されます。

describe セルフループ独自の OpenAI 互換リクエスト（`visionBridgeHelpers.ts` 内の
`callVisionModelSingle()`）は、常に `image_url.detail: "high"` を要求します。
これはすべての呼び出し元／プロバイダーに対して無条件であり、クライアントからのシグナルには左右されません。
低詳細度のサンプリングは、このプロンプトが要求するまさにそのテキスト文字起こしタスクで
OCR 精度を低下させるため、元の受信リクエストが使用した詳細度にかかわらず、
describe 呼び出し自体は常に高詳細度を要求します。これは内部の describe リクエストボディにのみ
影響し、OmniRoute がプライマリリクエストで呼び出し元独自の `image_url.detail` を
転送する方法は変更しません。このデフォルトは別途、検出された OpenCode クライアントに対してのみ、
`defaultImageDetail()`（`open-sse/handlers/chatCore/upstreamBody.ts`）で適用されます。
describe セルフループの Anthropic ワイヤーフォーマット分岐には `detail` フィールドがなく、
いずれのデフォルトの影響も受けません。

#### Describe 出力上限（`modalityBridgeVisionMaxChars`）

| キー                           | デフォルト | 範囲                 |
| ------------------------------ | ---------- | -------------------- |
| `modalityBridgeVisionMaxChars` | `0`        | `0` または 100–50000 |

`0`（デフォルト）は **上限なし** を意味します。`callVisionModel()` から返された説明は
変更されずにそのまま渡され、既存の動作が維持されます。100–50000 の範囲の値を指定すると、
説明が `[Image N]: <description>` として再挿入される前に、`…` サフィックス付きで
切り詰められます（`src/lib/guardrails/visionBridge.ts` 内の
`VisionBridgeGuardrail.preCall()`）。後段のモデルが完全な文字起こしを必要とする、
詳細情報の多い OCR タスクではこの値を引き上げてください。出力の多いビジョンモデルによる
トークン使用量を制限するには、この値を引き下げてください。
ダッシュボードのフィールドは Vision タブの Advanced パネル
（`ModalityBridgeVisionTab.tsx` 内の `modality-bridge-max-chars`）にあり、
1～99 の値は下限の 100 まで引き上げる一方、明示的な `0` は変更しません。
`0` は単なる「未設定」のデフォルトではなく、それ自体が有効な Zod 値です
（`z.union([z.literal(0), z.number().int().min(100).max(50000)])`）。

#### Describe キャッシュ（`modalityBridge/bridgeCache.ts`）

describe 出力用のインメモリ LRU + TTL キャッシュで、プロセス全体で共有されます。
キー = `sha256(imageRef + composedPrompt + configuredBridgeModel)` で、
長さプレフィックスによるフレーミングを使用します（フィールド境界の衝突はありません）。モデル部分には、
実際に応答したモデルではなく、**設定された**ブリッジモデルを使用します。
`callVisionModel` は内部でフォールバックする場合があり、試行ごとにキーを設定すると
キャッシュが断片化するためです。失敗した describe はキャッシュされません。設定：

| キー                            | デフォルト | 範囲    |
| ------------------------------- | ---------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`     | —       |
| `modalityBridgeCacheTtlMinutes` | `60`       | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`      | 10–5000 |

#### リモート画像の正規化（セルフループ describe／base64 フェッチ）

ブリッジが **リモート**画像を自身でフェッチする場合、つまり Anthropic の describe
セルフコールと claude-wire-format の base64 変換
（`ensureBase64ImagesForClaudeWire`）では、どちらも
`visionBridgeHelpers.ts` 内の `fetchRemoteImageAsDataUri()` を介し、生成されたデータ
URI がビジョンモデルのリクエストに埋め込まれる前に `normalizeDataUri()`
（`open-sse/utils/imageNormalize.ts`）へ渡されます。サイズが大きすぎる画像は
**長辺 2048px** に縮小されます（OpenAI／Anthropic がすでにサーバー側で適用している
リサイズ上限と同じ）。これにより、ビジョンモデルから見える内容を変更することなく、
アップロードのバイト数／レイテンシーを削減できます。リサイズには、動的インポートで読み込まれる
`sharp` を使用します。そのネイティブバイナリを読み込めないプラットフォームでも、
`normalizeDataUri()` は **決して例外をスローしません**。元のバイトをそのまま通す動作に
フォールバックするため、describe／base64 変換パスは常に動作し続けます。
画像ではないバイト（フェッチでデコード可能な画像が返されなかった場合）も、変更されずに
そのまま渡されます。この正規化の対象は、ブリッジが自身のセルフコール用にフェッチする画像に
限定されます。呼び出し元の未加工のパススルーペイロードには決して適用されず、
オプトインの場合にのみ変更するという原則（Hard Rule #20）に準拠します。

#### 設定スキーマ + マイグレーション

新しい `modalityBridge*` キーは `updateSettingsSchema`
（`src/shared/validation/settingsSchemas.ts`）で Zod 検証されます。
対象は、`modalityBridgeVisionEnabled`、`modalityBridgeVisionMode`、
`modalityBridgeVisionModel`、`modalityBridgeVisionTaskAware`、
`modalityBridgeVisionPrompt`、`modalityBridgeVisionTimeout`、
`modalityBridgeVisionMaxImages`、`modalityBridgeVisionMaxChars`、
`modalityBridgeCache*` の3項目、および Audio Bridge が使用する
`modalityBridgeAudio*` グループです。マイグレーション
`141_modality_bridge_settings.sql` は、既存のレガシーな `visionBridge*` 値を
対応する新しいキーへコピーします（冪等であり、オペレーターが設定した
`modalityBridge*` 値を上書きすることはありません）。レガシーキーは、1リリースサイクルの間、
読み取り時のフォールバックとして引き続き受け付けられます。

#### 透明性ヘッダー + 統計

describe 変換されたレスポンスには、
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
が付与されます（`modalityBridge/bridgeStats.ts` 内の
`buildModalityBridgeHeader()` で生成され、`src/sse/handlers/chatHelpers.ts` 内の
`withModalityBridgeHeader()` で設定されます）。
再ルーティングされたリクエストにはヘッダーが **付与されません**。ペイロードは変更されておらず、
モデルの切り替えはレスポンスボディの `model` フィールドですでに確認できるためです。

`GET /api/modality-bridge/stats`（管理認証が必要で、`GET /api/settings` と同じ権限レベル）は、`vision`、`audio`、`video` ごとのインメモリカウンター
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` を返します。`averageLatencyMs` は、すべての試行回数ではなく `latencySamples` を分母として使用します。計測されていない操作について、0 ミリ秒のサンプルが捏造されることはありません。`bridged` は、成功した変換を表す後方互換性のあるエイリアスとして維持されます。失敗した試行では増加しません。
カウンターは設計上、プロセスの再起動時にリセットされます
（会計処理ではなくテレメトリであるため）。

#### ダッシュボードの設定

専用のダッシュボードページは
`/dashboard/settings/modality-bridge` です。URL で直接指定可能な `Vision`、`Audio`、
`Video` タブは、`tab` の値を切り替える際にもクエリパラメーターを保持します。
Vision タブでは、有効化、モード、モデル選択（自動デフォルトを含む）、
タスク対応プロンプト、高度なタイムアウト／画像／説明文の長さ／キャッシュ制限、
ランタイムカウンター、および保護されたサンプルリクエストを利用できます。
Audio タブも稼働しており、有効化、Auto を含む STT 専用モデルピッカー、
タイムアウト／最大クリップ制限、音声カウンター、および `input_audio`
サンプルテストを利用できます。Video タブも機能します。FFmpeg/ffprobe のランタイム状態として、4 つの明示的な UI 状態のいずれかを表示します。プローブの実行中または完了できなかった場合は `unknown`、ダッシュボードのホストが非ループバックであり、クライアント側でプローブがスキップされた場合は `restricted`、プローブ後に存在しないことが確認された場合は `unavailable`、FFmpeg/ffprobe のバージョンを取得できた場合は `available` です。また、有効化／モデル／フレーム／動画／タイムアウト制限を永続化し、モデルピッカーをビジョン対応モデルに絞り込み、動画カウンターを表示します。

AI 設定に以前存在した Vision Bridge カードは、新しいページへの互換性リンクになりました。フォームのコピーを別途保持することはなくなりました。Media Providers からも、既存の Speech-to-Text プレイグラウンドを削除することなく、Image-to-Text および Speech-to-Text ワークフローに対応する Modality Bridge タブへリンクできます。

**自己ループの受付バイパス:** describe 呼び出しが OmniRoute 自身の
`/v1` 自己ループ（非標準プロバイダーモデル）を経由する場合、サブリクエストは
`x-omniroute-admission-bypass: internal` を送信し、解決済みの自己ループ認証情報で認証されます。ローカルモードではローカルの `sk_omniroute` センチネルを、それ以外ではオペレーターが設定した `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` 環境変数のキー（#1350）を使用するため、`REQUIRE_API_KEY=true` のデプロイ環境でも describe 呼び出しを実行できます。このバイパスは、それらと完全に一致する認証情報に対してのみ許可されるため、外部クライアントがこのヘッダーを使用して受付処理を回避することはできません。

従来のデフォルト値は `src/shared/constants/visionBridgeDefaults.ts` にあります。新しいモード／タスク対応／キャッシュのデフォルト値と設定リゾルバーは
`src/shared/constants/modalityBridgeDefaults.ts` にあります。ガードレールは
`deps` コンストラクターオプションを公開しているため、テストで偽の `getSettings` および
`callVisionModel` 実装を注入できます。

### Audio Bridge（`audioBridge.ts`）— Modality Bridge PR-3

音声入力を受け付けることが確認されていないターゲットへ、音声を含むチャットリクエストが到達する前にインターセプトします。チャットリクエストを別の宛先へ再ルーティングすることはありません。音声部分は既存の OpenAI 互換 multipart エンドポイントを介して文字起こしされ、選択されたチャットモデルはテキストの文字起こし結果を使用して処理を継続します。

フロー:

1. `getResolvedModelCapabilities()` を通じて `supportsAudio` を解決します。明示的なプロバイダーレジストリのメタデータ、静的モデルメタデータ、同期された `modalities_input` の順に優先されます。宣言された入力リストに `audio` が含まれていない場合は `false` となり、機能を示す根拠がない場合は `null` のままです。`false` と `null` のどちらの場合も保守的なブリッジが有効になり、`true` の場合はバイパスされます。
2. `modalityBridgeAudio*` 設定を解決し、共有の `detectMediaParts()` 検出器を使用して、すべてのメッセージから置換可能なトップレベルの音声部分を抽出します。サポートされるワイヤー形式は、OpenAI の `input_audio`、`audio_url`、および `source.media_type: "audio/*"` です。ネストされた音声はルーティング用には検出されますが、置換処理では削除されません。処理対象は `modalityBridgeAudioMaxClips` によって上限が設定され、それ以降の部分は変更されません。
3. 設定された `provider/model` を使用するか、`selectAudioBridgeModel()` に `AUDIO_TRANSCRIPTION_PROVIDERS` を安定したカタログ順で走査させ、使用可能なアクティブなプロバイダー認証情報を持つ最初のモデルを選択します。
4. `callAudioTranscription()` は、base64／data-URI 音声を multipart の `file` に変換するか、DNS ピンニングと 25 MB の上限を備えたパブリック接続専用のアウトバウンドガードを通じて、リモートの `audio_url` をダウンロードします。その後、`resolveSelfLoopBearer()` で認証されたローカルの `/v1/audio/transcriptions` 自己ループへ、ファイルと選択したモデルを POST します。既存の文字起こしルートが、通常の認証情報検索、クールダウン／レート制限処理、およびプロバイダーへのディスパッチを実行します。
5. 成功した呼び出しでは、該当する部分が `[Audio N]: <transcript>` に置き換えられます。呼び出しは `Promise.allSettled` で実行され、個々の呼び出しが失敗した場合、その元の音声部分が保持されます（#4012 の契約）。すべての呼び出しが失敗し、ターゲットが `supportsAudio === false` であることが証明されている場合、該当部分は
   `[Audio N]: (unavailable — no STT provider connected)` になります（#8430 の契約）。ターゲットが不明（`null`）の場合、すべて失敗しても変更されません。テキスト専用であることが証明されたターゲットに使用可能な STT 認証情報がない場合、ネットワーク呼び出しを行わず、同じ明示的なスタブを使用します。

成功した文字起こしでは、プロセス全体で共有される Modality Bridge の LRU/TTL キャッシュを使用します。キーは、音声参照、固定の `audio-transcription` 操作ラベル、および選択された STT モデルを組み合わせたものです。失敗はキャッシュされません。音声処理の試行により、共有の `bridged`、`cacheHits`、`failures`、`lastUsedAt` カウンターが更新されます。変換されたレスポンスには
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` が含まれます。変更されていないリクエストには Audio Bridge セグメントは付与されません。

ランタイム設定は DB に保存され、Zod によって検証されます:

| キー                          | デフォルト | 範囲               |
| ----------------------------- | ---------- | ------------------ |
| `modalityBridgeAudioEnabled`  | `true`     | —                  |
| `modalityBridgeAudioModel`    | `""`       | Auto または STT ID |
| `modalityBridgeAudioTimeout`  | `60000`    | 1000–300000        |
| `modalityBridgeAudioMaxClips` | `3`        | 1–10               |

共有キャッシュは引き続き `modalityBridgeCacheEnabled`、
`modalityBridgeCacheTtlMinutes`、および `modalityBridgeCacheMaxEntries` によって制御されます。

### 動画ブリッジ（`videoBridge.ts`、`videoBridgePipeline.ts`）

既知のネイティブ動画サポートを持たないターゲットが呼び出される前に、Chat Completions の `messages` および Responses
API の `input` に含まれるトップレベルの動画パートをインターセプトします。
サポートされる形式は、`input_video`、`video_url`、`video_source`、HTTPS URL、
および `data:video/*;base64,...` データ URI です。テキスト内の単なるファイル名は動画として扱われません。

`VideoBridgeGuardrail.preCall`（`videoBridge.ts`）は、リクエストの走査、
機能／ポリシーのチェック、リクエスト単位の集約、およびレスポンスペイロードを担います。
動画ごとの処理（取得、結果全体のキャッシュ、フレームシーケンスの記述
（呼び出し元が明示した音声トランスクリプトがあれば、それを統合）、試行単位の
メトリクス／中断／クリーンアップ）は、`videoBridgePipeline.ts` の
`processVideoPart` の背後に隠蔽されており、`preCall` のループ内で動画パートごとに一度呼び出されます。
このモジュールでは、明示的なポート境界である `VideoMediaBrokerPort`
（バイトの取得とサンプリング済みフレームの抽出）、`VideoAudioTranscriptionPort`
（呼び出し元が明示した音声トランスクリプトとサンプリング済みキャプションの統合）、および
`VideoDrilldownPort`（フレームのドリルダウン永続化境界。まだ
`processVideoPart` には接続されておらず、現時点では別個の `/api/modality-bridge/video/drilldown`
ルートのみがドリルダウンエントリを書き込みます）も定義されています。

公開 `/v1` リクエストパスでは、サブプロセスをインポートすることも呼び出すこともありません。リモート
動画は 50 MiB の上限内でダウンロードされます。インライン base64 動画には、モデル／メッセージ／フレーミングのエンベロープを
公開 JSON リクエストの受付上限である 50 MiB 以内に収められるよう、動画ごとにデコード後 36 MiB という
保守的な上限が設けられています。インラインの長さとデコード後サイズの推定値は、割り当て前にチェックされます。最初のリモート URL と
すべてのリダイレクトで HTTPS が必須であり、DNS ピンニングを備えた既存の
公開先限定アウトバウンドガードが使用されます。その後、バイト列は厳密な内部
`POST /api/modality-bridge/video/extract` ブローカー境界を越えます。このルートは
`LOCAL_ONLY` かつ `SPAWN_CAPABLE` であり、プロセス単位で認証された
信頼済みループバックリクエストのみを受け付け、URL、ファイルシステムパス、実行可能ファイル、
または引数リストは一切受け付けません。API のボディサイズ処理パイプラインと、ハンドラーのインクリメンタルなボディ
リーダーは、それぞれ独立してブローカー入力上限 50 MiB を適用します。上限付きキューでは、
一度に 1 件の抽出を実行し、保留中のジョブを 4 件まで許可し、保留中入力の合計を
100 MiB に制限します。

ブローカー内部では、`ffprobe` が非公開のローカルファイルを読み取ります。固定された形式の
許可リストでは、プレイリスト形式およびマニフェスト形式が除外されています。許可された MOV 系
コンテナでは、外部 MOV データ参照はデフォルトで無効のままであり、
固定コマンドでも有効化されません。`ffprobe` と `ffmpeg` はどちらも、
`file` のみのプロトコル許可リスト、1 スレッド、固定引数配列、シェルなし、
および `PATH` から解決された実行可能ファイルを使用します。添付画像のカバーストリームは
再生可能な候補にはなりません。再生可能なすべてのストリームが制限を満たす必要があり、
明示的なデフォルトストリームが、決定論的な最小インデックスへのフォールバックより優先されます。
動画は 600 秒、各次元 8,192 ピクセル、ソース総画素数
33,554,432 に制限されます。FFmpeg は中点にある JPEG フレームを 1～16 枚サンプリングし、
小さい入力を拡大することなく長辺を最大 1,024 ピクセルまで縮小し、
URL を受け取ることはありません。デフォルトのサンプリングは `uniform` です。オプションの
`scene_aware` および実験的な `segment_aware` ポリシーは、検証済みのローカルストリームに対して
固定された FFmpeg パスを追加で一度実行し、上限付きの `showinfo` シーンタイムスタンプを選択します。
検出器の失敗、タイムアウト、不正な出力、または候補セットが空の場合は、決定論的に同じ
均等な中点へフォールバックします。セグメント認識モードでは、検証済みのシーン間隔に比例して
中点サンプルを割り当てます。セグメント認識の根拠とフォールバック動作については、
以下で詳しく説明します。すべてのポリシーで、選択後に
16 フレームの厳格な上限が適用されます。シーン認識リクエストのフレーム予算が 1 フレームしかない場合、
アクティブな動画全体またはフォーカスウィンドウの均等な中点が使用され、
`policyEffective: uniform` として報告されます。選択された単一のシーンフレームでは、
時間軸の両端を維持できないためです。呼び出し元は、有限のフォーカスウィンドウ
（`start`／`end` 秒）を任意で指定できます。境界はメディアの再生時間内にクランプされ、
順序が逆のウィンドウまたは非有限値のウィンドウは拒否されます。また、すべてのサンプリング
ポリシーは、正規化された区間内でのみ実行されます。生成された
ウィンドウはサンプリングメタデータと信頼されていない説明プレフィックスに含まれるため、
後続のモデルはフォーカスされた抜粋とタイムライン全体を区別できます。

セマンティックなキャプションフォーカスは、独立した明示的な設定です。デフォルトの `full`
分析モードでは既存のフレームプロンプトが維持され、リクエストテキストがキャプションモデルへ
転送されることはありません。`focused` モードでは、ブリッジは同じ Chat または Responses
コンテナから、ユーザーが作成した最新の空でない `text`／`input_text` のみを読み取り、
NFC に正規化し、制御文字と空白をまとめ、
Unicode コードポイント 500 個に制限します。結果が空の場合は、完全に同一の
`full` プロンプトへフォールバックします。使用可能なヒントは、専用の
信頼されていないユーザーコンテキストブロック内で JSON としてシリアライズされ、観察可能な詳細の優先付けにのみ使用できます。
メディア内で視認または聴取できる指示に従わないよう求める別個の警告を
上書きすることはできません。テキストによるフォーカスから `start`／`end` が推論されることはなく、
時間サンプラーが変更されることもありません。

#### FU-07 構造的セグメントの根拠

`segment_aware` は、検証済みのローカル動画ストリームに対して、上限付きの事前分析パスを1回実行します。固定されたフィルターチェーンは、まず幅が最大320ピクセルになるようにスケーリングし、シーンの変化とフリーズ区間を検出した後、ぼけ、平均輝度、空間的・時間的情報を分析するために毎秒1フレームをサンプリングします。このパスは、構造サンプル600件、FFmpeg/フィルタースレッド1つ、同一の `file` 専用プロトコルおよびコンテナーの許可リスト、1 MiBのプロセス出力上限、ならびにブローカーで共有される中断処理／期限内の最大30秒に制限されます。リクエストからコマンド、フィルター、パス、URLを受け取ることはありません。

構造値は決定論的なサンプリング証拠であり、動画の意味的な理解ではありません。被写体、動作、キャプション、音声、ユーザーの意図を推論するものではありません。シーンとフリーズの境界によってセグメントが形成され、フリーズの割合、ぼけ、露出、空間的ディテール、時間的変化は、既存の1～16フレームの割り当て方法にのみ影響します。完全にフリーズしているセグメントは最大1フレームに制限され、フリーズしていないセグメントが残りの割り当て枠を競います。境界数がフレーム数を上回る場合は、早い段階での急速なカットによって長い末尾セグメントが隠れないように、タイムライン全体の均等なカバレッジが維持されます。フリーズ境界から1秒以内の分析解像度にあるシーン境界は統合されます。

フィルターの欠落、不正または空の証拠、検出器エラー、上限付き事前分析のタイムアウトが発生した場合は、厳密に同一の均等中点ポリシーへフェイルオープンします。呼び出し元による中断またはブローカーの期限超過ではフェイルオープンしません。実行中のサブプロセスを終了し、それ以降のフレーム抽出を阻止し、プライベートな一時ディレクトリツリーを `finally` で削除します。

`scripts/perf/video-bridge-fu07-eval.ts` は、重複排除後のキャプション呼び出し削減量、高密度な動きに対する割り当て枠配分、ぼけ／露出／SI-TIの証拠、長い末尾を伴う急速なカット、段階的なフェードによる偽陽性を評価するために、決定論的な実FFmpegフィクスチャを生成します。事前分析の実経過時間を記録し、`/usr/bin/time` が利用可能な場合は、子プロセスのCPU使用量とピークRSSも記録します。その品質チェックは構造的オラクルのみです。このハーネスには承認済みエンドポイントも固定された判定器もないため、実際のキャプションモデルの品質は引き続き `HOLD` です。金銭的な削減効果も、`--caption-cost-per-call-usd` で明示的な正の呼び出し単価の見積もりを指定しない限り `HOLD` のままです。このスクリプトがいずれかの結果を捏造することはありません。

各フレームは4 MiB、すべてのRAWフレームの合計は23 MiB、シリアライズされたブローカー応答は32 MiBに制限されます。プライベートな一時ディレクトリは `finally` で削除されます。OmniRouteにはFFmpegはバンドルされておらず、カスタム実行ファイルパスも受け付けません。キャプション生成の前に、ブリッジは保守的な視覚的重複排除パスを適用します。各JPEGは16×16のグレースケールバッファーに縮小され、最後に保持されたフレームとのみ比較されます。要求されたキャプション割り当て枠が1フレームを超える場合、抽出処理はその割り当て枠の最大2倍、かつ16フレーム以下の上限付き候補プールを供給します。要求された上限は重複排除後にのみ適用されます。割り当て枠が2以上の場合、最終的な間引き処理では、選択された最初と最後の候補が保持されます。バージョン管理された
`grayscale-16x16-mean-cells-v2` ポリシーは、平均輝度差と、正規化された差分が0.05以上であるサムネイルセルの割合のうち、大きい方を使用します。重複しきい値は定数0.04です。これは実行時設定として公開するのではなく、予測可能性を重視して選択されています。この二次的な高コントラスト信号により、平均値のみの比較では見落とす可能性がある小さな動きや可視テキストの変化が保持されます。比較器またはデコーダーのエラーはフェイルオープンし、カバレッジを維持します。出力メタデータでは、抽出された候補、正常に使用されたフレーム、削除された視覚的重複が区別されます。

明示的に指定された動画パートでは、タイムスタンプ付きコンタクトシートを要求できます。ブリッジは、最大4列、16フレームのJPEGグリッドを作成します。512ピクセルの各セルでは、ソースのタイムスタンプを高コントラストの下部帯に焼き込みます。また、下流での関連付けと監査のため、同じタイムスタンプをテキスト形式のメタデータにも保持します。完成したJPEGは32 MiB以下に制限されます。`sharp` がグリッドをデコードまたは合成できない場合、ブリッジは個別のJPEGフレームへフォールバックします。クライアントによる中断は、引き続きシート処理に伝播します。

昇格の証拠は、合成コンポジションのマイクロベンチマークから意図的に分離されています。`scripts/perf/video-bridge-contact-sheet-eval.ts` は、実際のOpenAI互換ビジョンモデル向けに、スキーマのバージョン管理されたA/Bハーネスを定義します。プロバイダーから報告されたトークン数、エンドツーエンドの実経過レイテンシー（シートの合成を含む）、モデル呼び出し回数、マニフェストで定義された事実の保持率を測定します。モデルの生レスポンスはレポートに書き込まれません。保持されるのはSHA-256ダイジェストと一致した事実IDのみです。`--execute-real` が渡され、`--model`、`OMNIROUTE_BASE_URL`、`OMNIROUTE_API_KEY` が設定されていない限り、ハーネスはネットワーク呼び出しや有料モデルの呼び出しを行いません。その明示的な実行がない場合、機械可読な判定は `HOLD` のままです。合成ペイロード／呼び出し回数の測定値だけでは、昇格の証拠にはなりません。

呼び出し元が位置合わせ済みテキストをすでに保有している場合、サポート対象の動画パートにオプションの `transcript.cues` 配列を添付できます。各キューには、`text`、プローブされた再生時間内に収まる有限の `start`/`end` 区間、および許可リストに含まれる `source`（`client`、`embedded`、`audio-bridge` のいずれか）が必要です。`confidence` のデフォルト値は `1` であり、`0` から `1` の範囲内でなければなりません。完全に重複するキューは統合されます。OmniRouteがこのメタデータから文字起こしを開始することはありません。検証済みのキューは、ソース、信頼度、区間とともに記述結果へコピーされ、フレームキャプションと並んで信頼できない観測結果としてレンダリングされます。無効なテキスト、範囲外のテキスト、または出所情報のないテキストは、キャプションストリームに混在させず拒否されます。現在、`source` フィールドは呼び出し元による自己申告であり、サーバーによる検証は行われません。OmniRouteは値が許可された3つの文字列のいずれかであることを強制しますが、`embedded` または `audio-bridge` というラベルが実際にサーバー所有の抽出処理から得られたものかどうかを暗号学的に確認する機能はまだありません。その検証が実装されるまでは、`source` を信頼できないヒントとして扱ってください。これに基づいて認可判断を行わないでください。

高度な呼び出し元は、同じ動画に対して認可済みの `audioTranscript` トラックを提供できます。フュージョン境界では、映像と音声の観測を単一のデッドラインおよび中止シグナルの下で実行し、共通のタイムライン上に並べ、完全に重複するものを統合し、一方のみが成功した場合は部分的な結果を報告します。無効な `audioTranscript` は、その部分的な結果へと縮退します。つまり、映像の説明は保持され、音声ブランチにはサニタイズ済みの失敗コードが記録され、動画全体が失敗することはありません。ブランチごとの可用性、部分的結果フラグ、サニタイズ済みの失敗コードは、記述結果、ガードレールのメタデータ（`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`）、結果キャッシュのメタデータ、およびブリッジのフュージョンカウンターに保持されます。デフォルトの Video Bridge パスは、音声テキスト変換を呼び出したり、メディアのコピーをもう1つダウンロードしたりしません。この明示的なトラックがない場合は、動画のみのままです。

**トランスクリプトの保持（#12150 P1）。** これは、Video Bridge（それ自体がオプトイン）がトランスクリプトのキューをレンダリングするたびに自動的に適用されます。個別の保持フラグはありません。リクエストが何らかのトランスクリプトのキュー（呼び出し元が宣言した `transcript` またはフュージョンされた `audioTranscript`）をレンダリングすると、ガードレールはそれを `videoBridgeObserved` としてマークし、動画説明の秘匿化されたシャドウを生成します。これは、各キューの自由記述本文を `[redacted-video-transcript]` に置き換えた同一形式のレンダリングであり、文字列を組み立てる前に構造化されたキューフィールドを置換することで構築されます（平坦化されたテキストを解析することはないため、敵対的か通常かを問わず、`]` を含む本文（`[inaudible]`/`[music]` など）を含め、キューの内容が残ることはありません）。永続化される呼び出しログのリクエスト本文では、動画由来の各テキスト部分が、内容の一致によって対応付けられたその秘匿化シャドウに置き換えられます。`fullText` アンカーは、完了した呼び出し前ガードレールのペイロードから再度読み取られるため、後続のチェーンガードレール（優先度10/95の PII および認証情報マスカー）が説明テキストをその場で書き換えた後や、システムプロンプト、ハンドオフ、メモリ注入によってメッセージ配列の形状が変更された後でも、一致は成功します。モデルへ上流送信される本文は変更されません。観測済みのリクエストは永続的な Memory にも何も格納しません（リクエスト由来とレスポンス由来の両方の抽出がスキップされます）。そのため、モデル自身の応答によってトランスクリプトのテキストが Memory に反映されることもありません。

**未加工の動画フィールド（#12430）。** ブリッジが有効で、ネイティブ動画サポートが不明または存在しない場合、定義済みの `transcript`/`audioTranscript` フィールドも、説明の失敗後や `maxVideos` の上限に達した後であっても、`videoBridgeObserved` を有効化します。`null` と空文字列も対象です。存在しないフィールドと動画以外のメタデータは対象外です。保持されるコピーではこれらのフィールドが秘匿化されるか、リクエスト自体が省略され、キャッシュと Memory はバイパスされます。プロバイダーのペイロードは変更されません。

追加で保持されるコピーも、同じ観測済みリクエストのシグナルを使用します。ガードレール適用前の未加工クライアントリクエストのスナップショット、メモリ内の保留中リクエスト、および早期に拒否されたリクエストのログでは、動画部分のトランスクリプトフィールドが構造的に置き換えられます。パイプラインの各ステージおよびコンテキストのハンドオフによって合成された文字列プロンプトは、永続化されるリクエスト本文のシンクで秘匿化されます。永続化された `video_content_removed` マーカーにより、`previous_response_id` の継続処理では、意図的に破棄されたテキストを再構築するのではなく、安全側に倒して失敗します。観測済みのリクエストがログ記録前にパートごとの秘匿化シャドウを失った場合、または複数の動画シャドウのうち1つでも後続のリクエスト変更後に一致しなかった場合、部分的に秘匿化されたトランスクリプトを保持するのではなく、保持対象のリクエスト本文全体が省略されます。

観測済みのリクエストでは、モデルのレスポンスが構造化されたキュー境界なしにトランスクリプトの任意の部分を引用する可能性があります。そのため、永続化される呼び出しログの `responseBody` は省略マーカーに置き換えられます。詳細なパイプライン成果物（上流側やクライアント側の本文、ストリームチャンクを含む可能性があります）は保持されません。セマンティックキャッシュ、冪等性キャッシュ、および推論リプレイキャッシュでは、そのリクエストに対する読み取りと書き込みがバイパスされます。プロバイダーへのリクエストおよびクライアントから見えるレスポンスは変更されません。詳細な成果物が省略される場合、早期のキープアライブバイトは一時バッファから排出されます。Kiro の不正な EventStream に関する警告では、ペイロードのバイト数のみが報告され、その内容や JSON パーサーの未加工エラーが報告されることはありません。
これは、無関係なすべてのプロバイダー／プラグイン診断が監査済みであると主張するものではありません。より広範な保持シンクの精査は #11658 で追跡されています。

内部の `/api/modality-bridge/video/drilldown` ライフサイクルは、ループバック／トークン認証された独立したキャッシュ基盤です。すべての操作には、正規化された不透明なプリンシパル ID も必要です。本番環境の呼び出し元を有効にする前に、その ID を認証済みテナントから導出する必要があり、クライアントが選択した値を転送してはなりません。キャッシュキーは、そのプリンシパルを正規化されたセッション ID および動画参照 ID に結び付け、それらの SHA-256 由来のキーのみを保存し、読み取りと削除の両方を同じプリンシパルにスコープします。キャッシュは、エントリごとに派生 JPEG フレームを最大16個保存し、10分後に期限切れとし、境界付きの `start`/`end` 読み取りまたは明示的なセッション削除をサポートします。

各プリンシパルは、16エントリおよび正規化された JPEG データ64 MiBに制限されます。これらの制限は、グローバルな64エントリ／256 MiBの上限とは独立しています。プリンシパルのクォータ超過が迫った場合、グローバルな LRU エビクションが検討される前に、そのプリンシパルについて最も長く使用されていないエントリのみが削除されます。期限切れのエントリは、キャッシュ操作時にプリンシパル単位とグローバルの両方の集計から除去されます。一方、キャンセルや検証の失敗では、部分的な置換はコミットされません。

キャッシュは、非正規の Base64、過剰なパディング、JPEG 以外のメディア、不正または切り詰められた JPEG、および制限付きの全画像 `sharp` デコード中に警告が発生する JPEG を拒否します。受け入れた各画像は正規形式の JPEG として再エンコードされ、呼び出し元のフィールドを信頼するのではなく、デコードされたバイト列から幅と高さが導出されます。また、末尾に付加されたポリグロット用バイト列は保持せず破棄されます。両方のクォータに対して計上されるのは、サイズ制限内の正規圧縮バッファのみです。JSON の転送上限には、デコード後の入力上限である 32 MiB に対する Base64 のオーバーヘッドが含まれます。保存される各派生データには、検証済みの JPEG 形式と解像度、サンプリングポリシー、派生バージョン、作成時刻、サーバーで計算されたコンテンツハッシュ、ハッシュ化された親参照、および信頼された呼び出し元の親コンテンツハッシュが記録されます。キャンセルは、アトミックなキャッシュコミットの前に、非同期のデコード／ハッシュ処理フェーズ間で確認されます。

この作業範囲では、まだ本番環境のプロデューサーをルートに接続しておらず、複数解像度のバリアント選択も提供していません。そのため、透過的な Video Bridge リクエストパスで追加処理が発生することはありません。一方、テナントに紐づくプリンシパルの導出と、FU-08 の完全な複数解像度ライフサイクルは、完了済みの動作として記載されるのではなく、明示的な後続作業として残されています。

フレームには、設定された Video モデルを使用して順番にキャプションが付けられます。Video のオーバーライドが空の場合は Vision 設定を継承し、両方が空の場合は Vision の自動ルーターが実効的な Vision 対応モデルを選択します。キャプションの生成に成功すると、元のパートは安定した `[Video description:` プレフィックスを持つテキストに置き換えられます。このプレフィックスは、そのテキストが信頼されていないメディア由来の観察結果であることを示し、メディア内で見つかった指示に従わないよう下流モデルに伝えます。フレームキャプションのキャッシュキーには、JPEG バイト列、プロンプト、タイムスタンプ、および実効モデルが含まれます。キャッシュされるのは、生成に成功したキャプションのみです。キャッシュエントリには、フォールバックモデルを含め、実際に生成に成功したプロデューサーモデルが保持されます。異なるフレームが異なるモデルによって生成された場合、ブリッジは `mixed` を報告します。キャッシュヒット時には、要求されたルーティングプランとしてラベルを付け直すのではなく、そのプロデューサーの識別情報が再利用されます。動画全体の結果キャッシュは、出力を変化させるすべての入力、すなわちプロンプト、実効モデル、サンプリングポリシー、フレーム数、セマンティック分析モード、正規化されたフォーカスヒントの SHA-256 フィンガープリント、フォーカスウィンドウ、`transcript`、`audioTranscript`、およびコンタクトシートフラグをキーとします。そのため、これらのいずれかの次元を変更すると、古い結果が再利用されることはなく、必ずキャッシュミスになります。視覚的重複排除ポリシーのバージョン、しきい値、および上限付き候補フレーム数も、結果キャッシュのキーとメタデータに明示的に含まれます。したがって、ポリシーが変更された場合、古い動画全体の説明を再利用することはできません。結果キャッシュ v4 のメタデータにはモードとフィンガープリントが保持され、ユーザーの生のタスクは保持されません。ガードレールのメタデータは、要求された分析モードと実効分析モードの両方を報告します。使用可能なユーザーテキストがない状態で `focused` モードが要求された場合、実効モードは `full` として報告されます。

ガードレールは、サポートされるすべての動画パートを抽出しますが、説明する動画は `modalityBridgeVideoMaxVideos` 以下に制限されます。`supportsVideo === false` であることが確認されたターゲットでは、処理に失敗した動画と上限を超えた動画は明示的な安全なテキストマーカーに置き換えられるため、生の動画が残ることはありません。機能が不明な場合、それらのパートは変更されません。`supportsVideo === true` のターゲットはブリッジをバイパスします。クライアントリクエストの中断シグナルは、ダウンロード、ブローカーキュー、サブプロセス、およびキャプション呼び出しまで伝播します。中断された場合は動画間で処理が停止し、生のメディアを許可するフェイルオープンにはなりません。

ランタイム設定は DB に保存され、Zod で検証されます。

| キー                                | デフォルト値 | 範囲／動作                                                                                                    |
| ----------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`      | オプションのランタイム、オプトイン                                                                            |
| `modalityBridgeVideoAnalysisMode`   | `"full"`     | `full` は汎用キャプションを維持し、`focused` は長さが制限された信頼されていない最新ユーザーコンテキストを使用 |
| `modalityBridgeVideoModel`          | `""`         | Vision Bridge モデルを継承                                                                                    |
| `modalityBridgeVideoFrameCount`     | `8`          | 1～16                                                                                                         |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`  | `uniform`、`scene_aware`、または比例配分の `segment_aware`。検出器の失敗時は `uniform` にフォールバック       |
| `modalityBridgeVideoMaxVideos`      | `1`          | 1～4                                                                                                          |
| `modalityBridgeVideoTimeout`        | `120000`     | 1000～120000 ms                                                                                               |

従来から保存されている 120 秒を超える Video タイムアウト値はブローカーの期限にクランプされます。新しい設定の書き込みでこの上限を超える値は拒否されます。`GET /api/modality-bridge/video/runtime` では、認証やランタイムの検査より前に、信頼済みとしてスタンプされたループバックのローカリティが必要であり、その後に管理認証が要求されます。このエンドポイントが返すのは、`available`、サニタイズ済みの FFmpeg/ffprobe バージョン、およびランタイムが使用できない場合の固定理由のみです。内部抽出エンドポイントは公開アップロード API ではありません。キューが飽和している場合は `503` と `Retry-After` を返し、呼び出し元が切断した場合は `499`、固定のブローカー期限に達した場合は `504` を返します。変換済みレスポンスでは、Vision または Audio のセグメントを削除することなく、中央の `x-omniroute-modality-bridge` ヘッダーに `video->text;model=<visionModel>;parts=<videos>` が追加されます。

### PII マスカー（`piiMasker.ts`）

**両方**のステージで実行されます。

- **`preCall`** はペイロードを複製し、`system`、`messages`、`input`、および
  `prompt`（プレーン文字列項目を含む）を走査して、文字列の `content`/`text`
  フィールドに `processPII()`（`@/shared/utils/inputSanitizer` から）を適用します。
  `PII_REDACTION_ENABLED=true` の場合、検出された PII は送信ペイロード内で
  編集されます。これは `INPUT_SANITIZER_MODE`（プロンプトインジェクションの
  ポリシーのみを制御）とは独立しています。編集が無効な場合、呼び出しは
  コンテンツを書き換えずに検出数を記録します。
- **`postCall`** はレスポンスをディープクローンし、`sanitizePIIResponse()` と
  Responses API 形式のマスカー（`maskResponsesOutput` —
  `output_text` および `output[].content[].text` を対象）を実行します。
  編集が発生した場合、変更後のレスポンスが元のレスポンスを置き換えます。

ガードレールがブロックすることはなく、注釈（`meta.detections`、
`meta.redacted`）の追加または書き換えのみを行います。

### プロンプトインジェクション（`promptInjection.ts`）

ユーザーが提供したコンテンツ内の敵対的な構造を検出し、設定された
ポリシーを適用します。動作は環境変数とコンストラクターオプションによって
決まります。

| 設定             | 環境変数                                                                                                  | デフォルト | 効果                                                                                                                                                                                                                                |
| ---------------- | --------------------------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 有効化           | `INPUT_SANITIZER_ENABLED`                                                                                 | `true`     | `false` の場合、ガードレールは処理を即座に終了します。                                                                                                                                                                              |
| モード           | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                           | `warn`     | インジェクションポリシー：`block`、`warn`、または `log`。（後方互換性のため `redact` も受け付けますが、インジェクションテキストは削除**しません**。リクエスト内の PII の書き換えは `PII_REDACTION_ENABLED` によって制御されます。） |
| ブロックしきい値 | `blockThreshold` オプション / `INPUT_SANITIZER_BLOCK_THRESHOLD`（別名 `INJECTION_GUARD_BLOCK_THRESHOLD`） | `high`     | ブロックに必要な最小重大度。デフォルトでは Medium は監視のみです。                                                                                                                                                                  |

**モードの優先順位**（`getMode`）：呼び出し元の `options.mode` →
`INJECTION_GUARD_MODE` の **DB 機能フラグによるオーバーライド**（Dashboard → Settings →
Feature Flags）→ `INJECTION_GUARD_MODE` 環境変数 → `INPUT_SANITIZER_MODE` 環境変数 →
`warn`。したがって、ダッシュボードのオーバーライドは環境変数よりも優先されるため、
Feature Flags UI から実行中のガードをリアルタイムで制御できます（再起動不要）。
DB の読み取りはフェイルセーフです。エラーが発生した場合、ガードは環境変数に
基づく動作へフォールバックし、オーバーライドが設定されていない場合の動作は、
環境変数のみで解決する場合と同一です。

検出元：

1. `@/shared/utils/inputSanitizer` の `sanitizeRequest()`（パイプラインの他の場所でも
   使用される共有検出器セット）。
2. 組み込みの `DEFAULT_GUARD_PATTERNS`（現在は `system_override_inline` と
   `markdown_system_block` で、どちらも重大度は `high`）。
3. コンストラクターオプションを介して渡されるオプションの `customPatterns`
   （文字列、正規表現、または `{ name, pattern, severity }` レコード）。

`mode === "block"` で、**かつ**少なくとも 1 件の検出が重大度のしきい値を
満たす場合、`preCall` は `{ block: true, message: "Request rejected:
suspicious content detected" }` を返します。`warn`/`log` モードでは、
ガードレールはログを記録しますが、呼び出しを許可します。レジストリを経由せずに
プロンプトを評価する必要がある呼び出し元向けに、共有ヘルパー
`evaluatePromptInjection()` もエクスポートされています。

**スキャン上限（v3.8.20）：** 検出器は、連結されたプロンプトテキストの
**先頭 16 KB** のみを検査します。`src/shared/utils/inputSanitizer.ts` では
`MAX_INJECTION_SCAN_BYTES = 16 * 1024`（16 384 バイト）です。
`detectInjection()` と `evaluatePromptInjection()` はどちらも、パターンループを
実行する前に `slice(0, MAX_INJECTION_SCAN_BYTES)` を行います。
インジェクション指示は入力の冒頭付近に配置されるため、これにより検出能力を
弱めることなく、数百 KB のペイロードに対する正規表現の CPU/GC 使用量を
制限できます（#3932、#4041 を参照）。

### 認証情報マスカー（`credentialMasker.ts`）

デフォルトチェーンの最後（優先度 `95`）として、**両方**のステージで実行されます。
送信ペイロード（メッセージ内容、ツール呼び出しの引数、ツール結果）**および**
プロバイダーのレスポンスから、よく知られた API キー／シークレットトークンの
パターンを編集します。そのため、プロンプトに貼り付けられた認証情報
（またはツール結果からそのまま返された認証情報）が、上流プロバイダーや
クライアントに漏洩することを防ぎます。

- **明示的に有効化した場合のみ**、PII リダクションと同じ規約（ハードルール #20 に準ずる）：
  `settings.credentialRedactionEnabled === true` **または**
  `CREDENTIAL_REDACTION_ENABLED=true` でない限り無効です。無効の場合、このガードレールは何も行わず、
  ブロックも書き換えも一切行いません。
- `redactCredentials()` は、ペイロード／レスポンスのツリー全体を走査し（`walkValue()`、
  プロトタイプ汚染に対して安全、`WeakSet` により循環参照にも対応）、一致した箇所を
  `[REDACTED:<type>]` プレースホルダーに置き換えます。実際に変更されたブランチのみを
  クローンします。
- `CREDENTIAL_PATTERNS` は、LLM プロバイダーキー（OpenAI、OpenAI-proj、
  Anthropic、Google、Hugging Face、Replicate）、VCS/SaaS トークン（GitHub、Slack、
  Linear、Notion、npm、Postman、Discord）、決済キー（Stripe、Square）、クラウド
  キー（AWS アクセスキー、Twilio、SendGrid、Mailgun）、秘密鍵／JWT、
  認証情報を含む接続文字列（`mongodb://user:pass@...` など）、および汎用の
  `Authorization`／`x-api-key`／`api-key`／`apikey` ヘッダー値
  パターンを対象とします。ヘッダー形式のキー（`authorization`、`x-api-key`、`api-key`、
  `apikey`）は、汎用テキスト正規表現ではなく構造的にリダクションされます（値のみを対象とし、
  `Bearer `／`Basic ` のようなスキームプレフィックスは保持されます）。
- このガードレールはブロックを一切行わず、書き換え（`modifiedPayload` /
  `modifiedResponse`）と注釈付与（`meta.credentialsRedacted`、`meta.count`）のみを行います。

リグレッションガード：`tests/unit/credential-masker-guardrail.test.ts`。

## 基底コントラクト (`base.ts`)

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
  block?: boolean; // true の場合、チェーンを即座に終了する
  message?: string; // ブロック時に通知される
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // リクエストを書き換えるために preCall から返される
  modifiedResponse?: TValue; // レスポンスを書き換えるために postCall から返される
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

ガードレールは、`void`、`{}`、または `{ block: false }` のいずれかを返すことで「変更なし」を示します。`modifiedPayload`/`modifiedResponse` を返すと、チェーンを通って後続のガードレールに渡される値が置き換えられます。
`signal?: AbortSignal` は、呼び出し元のライフサイクルをガードレールに引き継ぎます。リクエストの中断は、意図的なフェイルオープンの例外です。メディアブリッジは処理を停止してクリーンアップを行い、未加工のメディアをサポートしないことが判明しているターゲットに、そのメディアを復元することはありません。

## レジストリ (`registry.ts`)

シングルトンの `guardrailRegistry` は、以下を公開します。

- `register(guardrail)` — ガードレールを追加（または正規化された名前に基づいて置換）し、`priority` の昇順で再ソートします。
- `clear()` / `list()` — 管理用のヘルパーです。
- `runPreCallHooks(payload, context)` — 有効なガードレールを反復処理し、`modifiedPayload` を介してペイロードを順次引き渡し、最初の `block: true` で停止します。
- `runPostCallHooks(response, context)` — レスポンス側で同じ処理を行います。
- `resetGuardrailsForTests({ registerDefaults })` — 状態をクリアし、必要に応じてデフォルトを再登録することで、テストをクリーンに分離します。

どちらのランナーも `{ blocked, payload|response, results, guardrail?, message? }` を返します。ここで `results` は、ガードレールごとの `blocked`、`skipped`、`modified`、`error`、`meta` フィールドを含む `GuardrailExecutionResult` レコードの配列であり、トレースに役立ちます。

### リクエストごとのガードレールの無効化

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` は、現在のリクエストでスキップすべきガードレール名を重複のないリストとして集約します。情報源は以下のとおりです（すべて任意であり、すべてマージされます）。

- `apiKeyInfo.disabledGuardrails`
- リクエスト本文の `disabledGuardrails`（トップレベル）
- リクエスト本文の `metadata.disabledGuardrails`
- ヘッダー `x-omniroute-disabled-guardrails`（またはレガシーの `x-disabled-guardrails`）

値には文字列の配列またはカンマ区切りの文字列を指定できます。名前は小文字のケバブケースに正規化されます（`pii_masker` → `pii-masker`）。結果は `context.disabledGuardrails` を介してレジストリに渡され、レジストリは一致するガードレールをスキップします（`results` 内で `skipped: true`）。

## 実行順序

`src/sse/handlers/chat.ts` および
`open-sse/handlers/chatCore.ts` を通過する各リクエストについて:

1. `resolveDisabledGuardrails(...)` は、API キー、ボディ、
   ヘッダーからスキップリストを構築します。
2. `guardrailRegistry.runPreCallHooks(body, ctx)` は、優先度の昇順で
   ガードレールを実行します:
   - 無効化されたガードレールは `skipped` として記録されます。
   - 各ガードレールの `preCall` は、`modifiedPayload` を介してペイロードを書き換える場合があります。
   - 最初の `block: true` によってチェーンが短絡され、ハンドラーは
     ガードレールによる拒否レスポンスを返します。
3. （書き換えられている可能性のある）ペイロードは、コンボルーティングとアップストリームへの
   ディスパッチに渡されます。
4. レスポンスの構築後、`guardrailRegistry.runPostCallHooks(...)`
   はレスポンスに対して同じチェーンを実行します。ここで `block: true` になると、アップストリームの
   レスポンスは破棄されます。

例外をスローしたガードレールは `error: <message>` として記録され、
`logger.warn` を介してログに記録されますが、チェーンは継続します。これは意図的なフェイルオープン設計です。

## 設定

組み込みガードレールが読み取る環境変数:

| 変数                                  | 使用元                           | 効果                                                                                                                          |
| ------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`               | 検出を完全に無効化するには `false` に設定します。                                                                             |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`               | インジェクションポリシー: `warn`、`block`、または `log`。従来の値 `redact` ではインジェクションテキストは書き換えられません。 |
| `INJECTION_GUARD_MODE`                | `prompt-injection`               | インジェクションガードのモード。環境変数を**上書きする** DB 機能フラグでもあります（DB > ENV）。                              |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`               | `MODE=block` が拒否する最小重大度: `high`（デフォルト）、`medium`、または `low`。                                             |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`               | `INPUT_SANITIZER_BLOCK_THRESHOLD` の従来のエイリアス。                                                                        |
| `PII_REDACTION_ENABLED`               | `pii-masker`                     | `true` の場合、リクエスト内の PII が秘匿化されます（インジェクションモードとは独立）。                                        |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker`（ダウンストリーム） | レスポンス側のマスカーの動作を制御します。                                                                                    |

Modality Bridge ガードレールは、環境変数ではなく、DB を基盤とする設定
ストア（`getSettings()`）からランタイム設定を読み取ります。Vision の主要キーは
`modalityBridgeVisionEnabled`、`modalityBridgeVisionMode`、
`modalityBridgeVisionModel`、`modalityBridgeVisionTaskAware`、
`modalityBridgeVisionPrompt`、`modalityBridgeVisionTimeout`、
`modalityBridgeVisionMaxImages`、`modalityBridgeVisionMaxChars`、
`modalityBridgeCacheEnabled`、`modalityBridgeCacheTtlMinutes`、および
`modalityBridgeCacheMaxEntries` です。従来の
`visionBridge*` キーは、文書化されている 1 サイクル限りの読み取り
フォールバックとしてのみ受け入れられます。ダッシュボードからの書き込みには主要キーが使用されます。デフォルト値とフォールバック
リゾルバーは `src/shared/constants/modalityBridgeDefaults.ts` にあり、従来の
定数は `src/shared/constants/visionBridgeDefaults.ts` に保持されています。

Audio は `modalityBridgeAudioEnabled`、`modalityBridgeAudioModel`、
`modalityBridgeAudioTimeout`、`modalityBridgeAudioMaxClips`、および共有の
`modalityBridgeCache*` 設定を使用します。これらのキーは Modality Bridge スキーマとともに
導入されたため、Audio には従来キーへのフォールバックはありません。

Video は `modalityBridgeVideoEnabled`、`modalityBridgeVideoAnalysisMode`、
`modalityBridgeVideoModel`、
`modalityBridgeVideoFrameCount`、`modalityBridgeVideoSamplingPolicy`、
`modalityBridgeVideoMaxVideos`、および
`modalityBridgeVideoTimeout` と、共有の `modalityBridgeCache*` 設定を使用します。
FFmpeg/ffprobe は任意の運用依存関係であり、
フレームのキャプション生成によってレイテンシとモデルコストが増加するため、デフォルトでは無効になっています。

## カスタムガードレール

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

手順:

1. `BaseGuardrail` を継承する `src/lib/guardrails/myGuardrail.ts` を作成します。
2. `preCall` および/または `postCall` を実装します。
3. インポート時に登録する（`registerDefaultGuardrails` から追加する）か、
   実行時に `guardrailRegistry.register(...)` を呼び出します。レジストリは、
   正規化された名前が同じ既存のガードレールを置き換えます。
4. `tests/unit/` 配下にテストを追加します（既存の例:
   `tests/unit/guardrails-registry.test.ts`、
   `tests/unit/prompt-injection-guard.test.ts`、
   `tests/unit/guardrails/visionBridge.test.ts`）。

## テスト

テスト間では `resetGuardrailsForTests()` を使用し、既知の状態から開始します。
空のレジストリから開始し、テスト対象のガードレールのみを登録するには、
`{ registerDefaults: false }` を渡します。Vision Bridge は依存性注入
（`deps.getSettings`、`deps.callVisionModel`）を受け付けます。Audio Bridge も、
設定、ケイパビリティ、STT モデル選択、認証情報チェック、文字起こしについて
同等の差し替えポイントを公開しています。そのため、テストでは DB や
ネットワークにアクセスせずに、両方のフローを実行できます。

## 関連項目

- `src/lib/guardrails/` — 実装
- `src/shared/utils/inputSanitizer.ts` — プロンプトインジェクションと PII マスキングを
  支える共有検出器
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge のデフォルト値と
  強制ブリッジモデルのリスト
- `src/shared/constants/modalityBridgeDefaults.ts` — Vision/Audio で共有される実行時のデフォルト値
- `docs/architecture/RESILIENCE_GUIDE.md` — 直交するレイヤー（サーキットブレーカー、クールダウン）
- `docs/reference/ENVIRONMENT.md` — 環境変数の完全なリファレンス

## インジェクションガードのルートカバレッジとレッドチーム（フェーズ 8 · ブロック D）

インジェクションガード（`createInjectionGuard` / `withInjectionGuard`）は、ユーザープロンプトを
受け付けるすべてのルートを対象とします。`INJECTION_GUARD_MODE` に従って動作します（デフォルトの
`warn` = ログのみ、`block` = HTTP 400 `SECURITY_001` を返します）。

| 種類             | ルート                                                                                                                                               | デフォルトモード |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| テキスト（既存） | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn             |
| 生成系           | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn             |
| データ           | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn             |

テキスト抽出（`extractMessageContents`）は、`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` を対象とします。

**レッドチーム（夜間実行、`nightly-llm-security.yml`）:** promptfoo は、
`INJECTION_GUARD_MODE=block` で各ルートが OWASP-LLM コーパスをブロックすることを検証します。
garak はプローブを実行します（シークレットがない場合はスキップします）。
一貫性を保つため、`moderations` も対象に含まれています。ブロックモードの運用者は、
`resolveDisabledGuardrails` を使用してこれを除外できます。

夜間ワークフロー（`.github/workflows/nightly-llm-security.yml`、cron + 手動
ディスパッチ）には、次の 2 つのジョブがあります:

- **`promptfoo-guard`（ブロッキング）** — `INJECTION_GUARD_MODE=block` を指定して
  `promptfoo eval -c promptfooconfig.yaml` を実行します。各敵対的ケース（例:
  「以前の指示をすべて無視せよ…」、DAN 形式のジェイルブレイク）では、
  レスポンスに `error.code === "SECURITY_001"` が含まれること、つまりガードが
  実際にリクエストを拒否したことを検証します。
- **`garak`（参考情報）** — ローカルの OmniRoute インスタンス
  （`http://localhost:20128/v1`）に対して、garak
  `--probes promptinject,dan,leakreplay` を実行します。プロバイダーシークレット
  （`PROMPTFOO_PROVIDER_KEY`）の存在を条件とし、シークレットがない場合は問題なく
  スキップされます。また、末尾に `|| true` が付いているため、CI を失敗させずに
  結果を報告します。

ガードヘルパー（`createInjectionGuard` / `withInjectionGuard`）のカバレッジは、
プロンプトを受け取るすべての `/v1` ルートに及びます。プロンプトテキストは、
`src/shared/utils/inputSanitizer.ts` 内の `extractMessageContents()` によって、
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` から
抽出されます。
