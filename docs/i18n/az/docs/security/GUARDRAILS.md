# Guardrails (Azərbaycan dili)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Həqiqət mənbəyi:** `src/lib/guardrails/`
> **Son yenilənmə:** 2026-08-29 — v3.8.51 (Video Bridge transkriptinin mənşəyi çağıran tərəf tərəfindən bəyan edilir,
> hələ server tərəfindən təsdiqlənmir — #11661 əsasında dəqiqləşdirilib)

Qoruyucu mexanizmlər OmniRoute ilə yuxarı axın provayderləri arasındakı sərhəddə
təhlükəsizlik, siyasət və məzmun transformasiyalarını təmin edir. Hər bir qoruyucu mexanizm
sorğu faydalı yüklərini (`preCall`) və yuxarı axın cavablarını (`postCall`) yoxlaya
(və istəyə görə rədd edə, transformasiya edə və ya annotasiya edə) bilər.

Sistem **xəta zamanı açıqdır**: qoruyucu mexanizm icra zamanı xəta atarsa, reyestr
xətanı qeydə alır və sorğunu uğursuz etmək əvəzinə növbəti qoruyucu mexanizmlə
davam edir. Bloklama heç vaxt təsadüf deyil, açıq şəkildə verilən qərardır (`block: true`).

## Daxili qoruyucu mexanizmlər

Reyestr import zamanı prioritet sırasına uyğun olaraq altı qoruyucu mexanizmi avtomatik yükləyir
(baxın: `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Ad                  | Mərhələ(lər)   | Fayl                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Daha aşağı prioritet nömrələri **birinci** icra olunur.

### Görüntü körpüsü (`visionBridge.ts`) — Modallıq körpüsü PR-1

**Görüntünü dəstəkləməyən modellərə** yönəldilmiş, şəkil ehtiva edən sorğuları ələ keçirir və ya bütün sorğunu görüntünü dəstəkləyən modelə yönləndirir, ya da yuxarı axın çağırışından əvvəl şəkil hissələrini konfiqurasiya edilə bilən görüntü modeli tərəfindən yaradılmış mətn təsvirləri ilə əvəz edir. Bu, yalnız mətnlə işləyən provayderlərə multimodal faydalı yükləri şəffaf şəkildə emal etməyə imkan verir.

Axın:

1. Hədəf model artıq görüntünü dəstəkləyirsə, keçin (məcburi körpü siyahısında `isVisionBridgeForcedModel` yer alması istisna olmaqla).
2. Şəkil hissələrini `extractImageParts(messages)` vasitəsilə çıxarın
   (`visionBridgeHelpers.ts`); bu funksiya `open-sse/utils/mediaParts.ts` daxilindəki **vahid media detektoruna** `detectMediaParts()` həvalə edir — bu, kombinasiya uyğunluğu filtri ilə ortaq istifadə edilən yeganə həqiqət mənbəyidir.
   Çıxarma yalnız `replaceImageParts` funksiyasının yenidən yerləşdirə bildiyi formaların üst səviyyəli hissələri ilə məhdudlaşdırılıb (çıxarma↔əvəzləmə müqaviləsi): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` və Responses API `input_image`. İç-içə uyğunluqlar və
   yalnız göstəricidən ibarət formalar kombinasiya filtri üçün nəzərdə tutulub və heç vaxt çıxarılmır.
   Heç biri tapılmadıqda keçin.
3. İcra vaxtı konfiqurasiyasını `resolveVisionBridgeRuntimeSettings()` vasitəsilə müəyyən edin
   (`src/shared/constants/modalityBridgeDefaults.ts`): yeni `modalityBridge*`
   parametr açarları üstünlük təşkil edir; köhnə `visionBridge*` açarları isə **bir dövrlük
   ehtiyat variant** (geri qaytarma pəncərəsi) olaraq qalır. Körpü deaktiv olduqda hər hansı media keçidindən əvvəl keçin.
4. Rejim seçicisi (`modalityBridgeVisionMode`, aşağıdakı cədvələ baxın)
   yenidən yönləndirmə və ya təsvir etmə arasında seçim edir. Yenidən yönləndirmə yalnız `model`
   dəyişdirilmiş `modifiedPayload`, həmçinin `{ rerouted, fromModel, toModel, imagesKept }` metaməlumatını qaytarır.
5. Təsvir yolu: şəkillərin sayını `maxImages` ilə məhdudlaşdırır, tapşırığı nəzərə alan sorğunu tərtib edir,
   təsvir keşini yoxlayır, görüntü modelini **paralel olaraq**
   (`Promise.allSettled`) çağırır və şəkillərin yerinə `[Image N]: <description>` mətn hissələrini yerləşdirir.
   Uğursuz təsvir cəhdi `null` qaytarır və orijinal şəkil hissəsi
   **qorunur** (#4012) — hər bir təsvir cəhdinin uğursuz olduğu kombinasiya təsvir yolu istisna olmaqla; bu halda görüntünü dəstəkləmədiyi təsdiqlənmiş yuxarı axına onun əvəzinə
   `(əlçatan deyil — görüntünü dəstəkləyən heç bir provayder qoşulmayıb)` mətni ötürülür (#8430).
6. `modifiedPayload` + metaməlumatı (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) qaytarın.

#### Rejim seçicisi (`modalityBridgeVisionMode`)

| Rejim      | Defolt | Davranış                                                                                                                                                                                                                                                                                                                                        |
| ---------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Dəyişdirilməmiş köhnə evristika (#6640/#7204): kombinasiya olmayan/`auto/` modellər, orijinal modeldə istifadəyə yararlı giriş məlumatları olmadığı halda, ən yaxşı görüntü modelinə yönləndirilir (olduqda təsvir edilir); kombinasiya hədəfləri həmişə təsvir edilir.                                                                         |
| `describe` |        | Həmişə təsvir et — yenidən yönləndirmə bloku tamamilə ötürülür; həmişə istifadəçinin seçdiyi model cavab verir.                                                                                                                                                                                                                                 |
| `reroute`  |        | Məcburi yenidən yönləndirmə: giriş məlumatlarına malik modeli saxlama qoruyucusu nəzərə alınmır. Yenidən yönləndirmə **hədəfi** üçün giriş məlumatları qoruyucusu yenə də tətbiq olunur — istifadəyə yararlı görüntü hədəfi olmadıqda, sorğu təsvir etməyə keçir ki, xam şəkillər heç vaxt yalnız mətnlə işləyən arxa sistemə çatmasın (#8430). |

Məcburi rejimlər `auto` evristikası işə düşməzdən **əvvəl** qısa qapanma yaradır; `auto` davranışı PR-1-dən əvvəlki qoruyucu mexanizmlə bayt səviyyəsində eynidir.

#### API açarının əhatə dairəsi (`visionBridgeKeyScope.ts`)

Çağıranın API açarı `allowedConnections`, kvota hovuzlarını
(`allowedQuotas`) və ya modelləri (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) məhdudlaşdırdıqda, körpü yalnız açarın istifadə edə biləcəyi bağlantılarda açarın istifadəsinə icazə verilən yenidən yönləndirmə və təsvir modellərini seçir. Daha sonra təsvir çağırışı həmişə
`x-omniroute-self-loop-key-id` başlığı ilə OmniRoute özünədöngəsi üzərindən həyata keçirilir, beləliklə qəbul edən çat sorğusu həmin açarın bağlantı və model siyasətini yenidən tətbiq edir. `enforceApiKeyPolicy()`
bu başlığı yalnız özünədöngə bearer-i ilə birlikdə nəzərə alır; buna görə də o, yalnız girişi daha da məhdudlaşdıra bilər və mövcud obyektə uyğun gəlməyən id rədd edilir.

Açar üçün heç bir görüntü modelinə icazə verilmirsə, təsvir yolu kənara çəkilir və sorğu dəyişdirilmədən ötürülür; bu, deaktiv edilmiş qoruyucu mexanizmdə olduğu kimi eyni uğursuzluqda-açıq davranışıdır (metaməlumat: `{ skipped: true, reason: "no_permitted_vision_model" }`).
Açarsız sorğular və bu məhdudiyyətləri olmayan açarlar əvvəlki kimi davranır.

#### Tapşırığı nəzərə alan təsvir sorğusu (`modalityBridgeVisionTaskAware`)

Defolt olaraq **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) baza təsvir sorğusuna **son istifadəçi mesajının** mətnini (500 simvoladək qısaldılmış şəkildə) əlavə edir; bununla təsvir istifadəçinin faktiki soruşduğu mövzuya yönəldilir (codex-vision-proxy nümunəsi) və görmə modelindən görünən mətni transkripsiya etməsi istənilir. Bayraq söndürülübsə — və ya istifadəçi mətni yoxdursa — baza sorğusu dəyişdirilmədən istifadə olunur.

Təsvirin özünə dövr edən sorğusunun OpenAI ilə uyğun öz sorğusu (`visionBridgeHelpers.ts` daxilində `callVisionModelSingle()`) həmişə `image_url.detail: "high"` tələb edir — şərtsiz olaraq, hər bir çağıran/provayder üçün və heç bir müştəri siqnalından asılı olmadan. Aşağı detallı seçmə bu sorğunun tələb etdiyi mətn transkripsiyası tapşırığı üçün OCR dəqiqliyini azaldır, buna görə də təsvir çağırışının özü ilkin daxil olan sorğuda hansı detal səviyyəsinin istifadə edilməsindən asılı olmayaraq həmişə yüksək detal tələb edir. Bu, yalnız daxili təsvir sorğusunun gövdəsinə təsir edir; OmniRoute-un əsas sorğuda çağıranın öz `image_url.detail` dəyərini necə ötürdüyünü dəyişmir — həmin defolt ayrıca və yalnız aşkarlanmış OpenCode müştəriləri üçün `defaultImageDetail()` daxilində (`open-sse/handlers/chatCore/upstreamBody.ts`) tətbiq olunur. Təsvirin özünə dövr edən sorğusunun Anthropic naqil formatı qolu `detail` sahəsinə malik deyil və bu defoltların heç birindən təsirlənmir.

#### Təsvir çıxışı limiti (`modalityBridgeVisionMaxChars`)

| Açar                           | Defolt | Diapazon            |
| ------------------------------ | ------ | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` və ya 100–50000 |

`0` (defolt) **limit yoxdur** deməkdir — `callVisionModel()` tərəfindən qaytarılan təsvir dəyişdirilmədən ötürülür və mövcud davranış qorunur. 100–50000 diapazonundakı istənilən dəyər təsvir `[Image N]: <description>` şəklində yenidən əlavə edilməzdən əvvəl onu `…` suffiksi ilə qısaldır (`src/lib/guardrails/visionBridge.ts` daxilində `VisionBridgeGuardrail.preCall()`). Aşağı axındakı modelin tam transkripsiyaya ehtiyac duyduğu, çoxlu detal ehtiva edən OCR tapşırıqları üçün bu dəyəri artırın; çox danışan görmə modellərində token istifadəsini məhdudlaşdırmaq üçün isə azaldın. İdarəetmə panelindəki sahə Vision vərəqinin Advanced panelində yerləşir (`ModalityBridgeVisionTab.tsx` daxilində `modality-bridge-max-chars`) və açıq şəkildə göstərilmiş `0` dəyərinə toxunmadan 1 ilə 99 arasındakı hər hansı dəyəri minimum 100 həddinə qaldırır — `0` sadəcə “təyin edilməyib” defoltu deyil, ayrıca etibarlı Zod dəyəridir (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`).

#### Təsvir keşi (`modalityBridge/bridgeCache.ts`)

Təsvir çıxışları üçün proses miqyasında ortaq istifadə edilən, yaddaşdaxili LRU + TTL keşi.
Açar = uzunluq prefiksli çərçivələmə ilə `sha256(imageRef + composedPrompt + configuredBridgeModel)` (sahə sərhədlərinin toqquşması yoxdur). Model komponenti faktiki cavab verən model deyil, **konfiqurasiya edilmiş** körpü modelidir — `callVisionModel` daxildə ehtiyat varianta keçə bilər və hər cəhd üzrə açarlama keşi parçalayardı. Uğursuz təsvirlər heç vaxt keşlənmir. Parametrlər:

| Açar                            | Defolt | Diapazon |
| ------------------------------- | ------ | -------- |
| `modalityBridgeCacheEnabled`    | `true` | —        |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440   |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000  |

#### Uzaq təsvirlərin normallaşdırılması (özünə dövr edən təsvir/base64 əldəetməsi)

Körpü **uzaq** təsviri özü əldə etdikdə — həm Anthropic təsvir öz-çağırışı, həm də claude naqil formatına base64 çevrilməsi (`ensureBase64ImagesForClaudeWire`) `visionBridgeHelpers.ts` daxilindəki `fetchRemoteImageAsDataUri()` vasitəsilə həyata keçirilir — nəticədə alınan data URI görmə modeli sorğusuna daxil edilməzdən əvvəl `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) vasitəsilə emal olunur. Həddindən böyük təsvirlər **2048px uzun kənar** ölçüsünə qədər kiçildilir (OpenAI/Anthropic-in artıq server tərəfində tətbiq etdiyi ölçü limitinə uyğun olaraq); bu, görmə modelinin gördüyünü dəyişdirmədən yükləmə baytlarını/gecikməsini azaldır. Ölçünün dəyişdirilməsi dinamik import vasitəsilə yüklənən `sharp` paketindən istifadə edir: onun yerli binar faylının yüklənə bilmədiyi platformada `normalizeDataUri()` **heç vaxt xəta atmır** — ilkin baytları dəyişmədən ötürməyə keçir, beləliklə təsvir/base64-ə çevirmə yolu həmişə işləməyə davam edir. Təsvir olmayan baytlar (deşifrə edilə bilən təsvir qaytarmayan əldəetmə) da toxunulmadan ötürülür. Bu normallaşdırma körpünün öz çağırışı üçün əldə etdiyi təsvirlərlə məhdudlaşır — o, çağıranın dəyişdirilmədən ötürülən xam faydalı yükünə heç vaxt tətbiq edilmir; bu, yalnız açıq seçimlə mutasiya prinsipinə uyğundur (Sərt Qayda #20).

#### Parametrlər sxemi + miqrasiya

Yeni `modalityBridge*` açarları `updateSettingsSchema` daxilində (`src/shared/validation/settingsSchemas.ts`) Zod ilə yoxlanılır: `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCache*` üçlüyü və Audio Bridge tərəfindən istifadə olunan `modalityBridgeAudio*` qrupu. `141_modality_bridge_settings.sql` miqrasiyası mövcud köhnə `visionBridge*` dəyərlərini uyğun yeni açarlara köçürür (idempotentdir, operator tərəfindən təyin edilmiş `modalityBridge*` dəyərinin heç vaxt üzərinə yazmır); köhnə açarlar bir buraxılış dövrü ərzində oxuma üçün ehtiyat variant kimi qəbul edilməyə davam edir.

#### Şəffaflıq başlığı + statistika

Təsvir vasitəsilə çevrilmiş cavablar
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
başlığını daşıyır (`modalityBridge/bridgeStats.ts` daxilində `buildModalityBridgeHeader()` tərəfindən yaradılır, `src/sse/handlers/chatHelpers.ts` daxilində `withModalityBridgeHeader()` tərəfindən əlavə olunur).
Yenidən marşrutlaşdırılmış sorğular **heç bir** başlıq almır — faydalı yükə toxunulmayıb və modelin dəyişdirilməsi cavab gövdəsinin `model` sahəsində artıq görünür.

`GET /api/modality-bridge/stats` (`GET /api/settings` ilə eyni səviyyəli idarəetmə autentifikasiyası) `vision`, `audio` və `video` üçün yaddaşdaxili modal üzrə
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` sayğaclarını qaytarır.
`averageLatencyMs` məxrəc kimi bütün cəhdlərdən deyil, `latencySamples` dəyərindən istifadə edir; vaxt ölçülmədən həyata keçirilən əməliyyat sıfır millisaniyəlik saxta nümunə yaratmır.
`bridged` uğurlu çevirmələr üçün geriyə uyğun ləqəb olaraq qalır; uğursuz cəhdlər onu artırmır.
Sayğaclar məqsədli şəkildə proses yenidən başladıqda sıfırlanır
(uçot deyil, telemetriya).

#### İdarəetmə panelinin konfiqurasiyası

Xüsusi idarəetmə paneli səhifəsi
`/dashboard/settings/modality-bridge` ünvanındadır. URL vasitəsilə ünvanlana bilən `Vision`, `Audio`
və `Video` tabları `tab` dəyərini dəyişərkən sorğu parametrlərini qoruyur.
Vision tabı aktivləşdirməni, rejimi, model seçimini (avtomatik standart seçim daxil olmaqla), tapşırığı nəzərə alan prompt yaratmanı, təkmil taymaut/şəkil/təsvir uzunluğu/keş limitlərini, icra mühiti
sayğaclarını və qorunan nümunə sorğusunu təqdim edir. Audio tabı da aktivdir: o,
aktivləşdirməni, Auto seçimi olan yalnız STT üçün model seçicisini, taymaut/maksimum klip limitlərini, audio
sayğaclarını və `input_audio` nümunə testini təqdim edir. Video tabı işləkdir: o,
FFmpeg/ffprobe icra mühitinin vəziyyətini — dörd açıq UI vəziyyətindən birini (yoxlama davam edərkən və ya tamamlana bilmədikdə `unknown`, yoxlamanın klient tərəfində ötürüldüyü qeyri-loopback
idarəetmə paneli hostunda `restricted`, yoxlama aparılıb mövcud olmadığı təsdiqləndikdə
`unavailable` və ya FFmpeg/ffprobe versiyaları ilə birlikdə `available`) — göstərir,
aktivləşdirmə/model/kadr/video/taymaut limitlərini yadda saxlayır, model seçicisini görüntü imkanlı
modellərlə məhdudlaşdırır və video sayğaclarını təqdim edir.

AI parametrləri altındakı əvvəlki Vision Bridge kartı yeni səhifəyə uyğunluq keçididir;
o, artıq formanın ikinci nüsxəsinə sahib deyil. Media Providers həmçinin mövcud Speech-to-Text sınaq mühitini silmədən
Image-to-Text və Speech-to-Text iş axınlarını müvafiq Modality
Bridge tablarına bağlayır.

**Özünə dövrə üçün qəbul yoxlamasının ötürülməsi:** təsvir çağırışı OmniRoute-un öz
`/v1` özünə dövrəsi (qeyri-standart provayder modeli) üzərindən yönləndirildikdə, alt sorğu
`x-omniroute-admission-bypass: internal` göndərir və müəyyən edilmiş
özünə dövrə etimadnaməsi ilə autentifikasiya olunur — lokal rejimdə lokal `sk_omniroute` sentinel dəyəri və ya
operator tərəfindən konfiqurasiya edilmiş `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` mühit açarı (#1350); beləliklə,
`REQUIRE_API_KEY=true` yerləşdirmələri də təsvir çağırışını icra edə bilir. Ötürməyə yalnız həmin dəqiq etimadnamələr üçün icazə verilir, buna görə xarici klientlər
qəbul yoxlamasını keçmək üçün bu başlıqdan istifadə edə bilməz.

Köhnə standart dəyərlər `src/shared/constants/visionBridgeDefaults.ts` faylındadır;
yeni rejim/tapşırığı nəzərə alma/keş standartları və parametr həlledicisi
`src/shared/constants/modalityBridgeDefaults.ts` faylındadır. Qoruyucu mexanizm testlərin saxta `getSettings` və
`callVisionModel` implementasiyalarını yeritməsi üçün
`deps` konstruktor seçimini təqdim edir.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Audio girişini qəbul etdiyi məlum olmayan hədəfə çatmazdan əvvəl audio ehtiva edən çat sorğularını tutur.
O, çat sorğusunu heç vaxt yenidən yönləndirmir: audio hissələri mövcud OpenAI uyğun multipart son nöqtəsi vasitəsilə transkripsiya edilir və seçilmiş çat modeli mətn transkriptləri ilə davam edir.

Axın:

1. `supportsAudio` dəyərini `getResolvedModelCapabilities()` vasitəsilə müəyyən edin. Açıq şəkildə göstərilmiş
   provayder reyestri metadatası prioritet daşıyır, sonra statik model metadatası, daha sonra sinxronlaşdırılmış
   `modalities_input` gəlir. `audio` ehtiva etməyən elan edilmiş giriş siyahısı `false` sayılır;
   imkan barədə heç bir dəlil olmadıqda dəyər `null` olaraq qalır. Həm `false`, həm də `null`
   konservativ körpünü aktivləşdirir, `true` isə onu ötür.
2. `modalityBridgeAudio*` parametrlərini müəyyən edin və ortaq `detectMediaParts()`
   detektoru vasitəsilə hər mesajdan birləşdirilə bilən yuxarı səviyyəli audio hissələrini çıxarın.
   Dəstəklənən ötürmə formatları OpenAI `input_audio`, `audio_url` və
   `source.media_type: "audio/*"`-dır. İç-içə audio yönləndirmə üçün aşkarlanır, lakin
   birləşdirmə yolu tərəfindən silinmir. İş həcmi `modalityBridgeAudioMaxClips` ilə məhdudlaşdırılır;
   sonrakı hissələr dəyişdirilmədən saxlanılır.
3. Konfiqurasiya edilmiş `provider/model` dəyərindən istifadə edin və ya `selectAudioBridgeModel()` funksiyasının
   `AUDIO_TRANSCRIPTION_PROVIDERS` siyahısını sabit kataloq ardıcıllığı ilə nəzərdən keçirərək
   istifadəyə yararlı aktiv provayder etimadnaməsi olan ilk modeli seçməsinə icazə verin.
4. `callAudioTranscription()` base64/data-URI audionu multipart `file`-a çevirir və ya uzaq
   `audio_url` resursunu DNS sabitləməsi və 25 MB limiti olan yalnız ictimai çıxış qoruyucusu vasitəsilə endirir.
   Daha sonra faylı və seçilmiş modeli lokal `/v1/audio/transcriptions` özünə dövrəsinə POST edir və
   `resolveSelfLoopBearer()` ilə autentifikasiya olunur. Mövcud transkripsiya marşrutu
   adi etimadnamə axtarışını, gözləmə müddəti/sürət limiti idarəetməsini və provayderə yönləndirməni həyata keçirir.
5. Uğurlu çağırışlar öz hissələrini `[Audio N]: <transcript>` ilə əvəz edir. Çağırışlar
   `Promise.allSettled` ilə icra olunur: fərdi uğursuzluq həmin orijinal
   audio hissəsini qoruyur (#4012 müqaviləsi). Bütün çağırışlar uğursuz olarsa və hədəfin
   `supportsAudio === false` olduğu sübuta yetirilibsə, hissələr
   `[Audio N]: (unavailable — no STT provider connected)` olur (#8430 müqaviləsi).
   Naməlum hədəf (`null`) üçün bütün çağırışların uğursuz olduğu nəticə dəyişdirilmədən saxlanılır.
   İstifadəyə yararlı STT etimadnaməsi olmayan, mətnə əsaslandığı sübut edilmiş hədəf şəbəkə çağırışı etmədən eyni açıq stub-u alır.

Uğurlu transkriptlər proses miqyaslı Modality Bridge LRU/TTL keşindən istifadə edir.
Açar audio istinadını, sabit `audio-transcription` əməliyyat etiketini və seçilmiş STT modelini birləşdirir; uğursuzluqlar heç vaxt keşlənmir. Audio cəhdləri ortaq `bridged`, `cacheHits`, `failures` və `lastUsedAt` sayğaclarını yeniləyir.
Çevrilmiş cavablar
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` ehtiva edir; dəyişdirilməmiş
sorğular Audio Bridge seqmenti almır.

İcra mühiti parametrləri verilənlər bazasında saxlanılır və Zod ilə doğrulanır:

| Açar                          | İlkin dəyər | Diapazon               |
| ----------------------------- | ----------- | ---------------------- |
| `modalityBridgeAudioEnabled`  | `true`      | —                      |
| `modalityBridgeAudioModel`    | `""`        | Avtomatik və ya STT ID |
| `modalityBridgeAudioTimeout`  | `60000`     | 1000–300000            |
| `modalityBridgeAudioMaxClips` | `3`         | 1–10                   |

Ortaq keş yenə də `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` və `modalityBridgeCacheMaxEntries` tərəfindən idarə olunur.

### Video körpüsü (`videoBridge.ts`, `videoBridgePipeline.ts`)

Məlum yerli video dəstəyi olmayan hədəf çağırılmazdan əvvəl Chat Completions
`messages` daxilindəki və Responses API `input` daxilindəki üst səviyyəli video
hissələrini tutur. Dəstəklənən formalar `input_video`, `video_url`, `video_source`,
HTTPS URL-ləri və `data:video/*;base64,...` data URI-ləridir. Mətndəki adi fayl
adları video kimi qəbul edilmir.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) sorğunun nəzərdən keçirilməsini,
imkan/siyasət yoxlamasını, hər sorğu üzrə aqreqasiyanı və cavab faydalı yükünü
idarə edir. Hər video üzrə iş — əldə etmə, tam nəticə keşi, kadr ardıcıllığının
təsvir edilməsi (çağıran tərəfin elan etdiyi hər hansı audio transkripsiyanı
birləşdirir) və hər cəhd üzrə metriklər/dayandırma/təmizləmə —
`videoBridgePipeline.ts` daxilindəki `processVideoPart` arxasında gizlədilib və
`preCall` dövrü daxilində hər video hissəsi üçün bir dəfə çağırılır. Həmin modul
həmçinin açıq port sərhədlərini müəyyən edir: `VideoMediaBrokerPort` (baytların
əldə edilməsi və seçilmiş kadrların çıxarılması), `VideoAudioTranscriptionPort`
(çağıran tərəfin elan etdiyi audio transkripsiyanın seçilmiş kadr təsvirləri ilə
birləşdirilməsi) və `VideoDrilldownPort` (kadr üzrə təfərrüatlandırmanın saxlanma
sərhədi; hələ `processVideoPart` daxilində qoşulmayıb — hazırda yalnız ayrıca
`/api/modality-bridge/video/drilldown` marşrutu təfərrüatlandırma qeydlərini
yazır).

İctimai `/v1` sorğu yolu heç vaxt alt prosesi idxal etmir və ya çağırmır. Uzaq
videolar 50 MiB məhdudiyyəti daxilində endirilir; model/messages/framing zərfinin
50 MiB-lıq ictimai JSON sorğu qəbulu limiti daxilində qalması üçün sətirdaxili
base64 videolarında hər video üzrə konservativ 36 MiB dekodlaşdırılmış ölçü
həddi var. Sətirdaxili uzunluq və dekodlaşdırılmış ölçü təxminləri yaddaş
ayrılmamışdan əvvəl yoxlanılır. Mövcud, DNS sabitləməli və yalnız ictimai
ünvanlara icazə verən çıxış mühafizəsindən istifadə edilməklə ilkin uzaq URL və
hər yönləndirmə üçün HTTPS tələb olunur. Daha sonra baytlar dəqiq daxili
`POST /api/modality-bridge/video/extract` broker sərhədini keçir. Həmin marşrut
həm `LOCAL_ONLY`, həm də `SPAWN_CAPABLE`-dır, yalnız proses üzrə autentifikasiya
edilmiş, etibarlı loopback sorğusunu qəbul edir və heç vaxt URL, fayl sistemi
yolu, icra olunan fayl və ya arqument siyahısı qəbul etmir. API gövdə ölçüsü
emal ardıcıllığı və emalçının inkremental gövdə oxuyucusu müstəqil şəkildə
50 MiB-lıq broker giriş həddini tətbiq edir. Onun məhdud növbəsi eyni anda bir
çıxarma əməliyyatı icra edir, gözləyən dörd işə icazə verir və gözləyən girişin
ölçüsünü 100 MiB ilə məhdudlaşdırır.

Broker daxilində `ffprobe` məxfi lokal faylı oxuyur; sabit format icazə siyahısı
pleylist və manifest formatlarını istisna edir. İcazə verilən MOV ailəsinə aid
konteynerlər üçün xarici MOV məlumat istinadları standart olaraq deaktiv qalır
və sabit əmr onları aktivləşdirmir. Həm `ffprobe`, həm də `ffmpeg` yalnız `file`
protokolu üçün icazə siyahısından, bir axından və sabit arqument massivlərindən
istifadə edir; shell istifadə edilmir və icra olunan fayllar `PATH` vasitəsilə
tapılır. Əlavə edilmiş şəkil üzlükləri olan axınlar oynadıla bilən namizədlər
deyil. Bütün oynadıla bilən axınlar limitlərə uyğun olmalıdır və deterministik
ən aşağı indeksli ehtiyat seçimdən əvvəl açıq şəkildə standart kimi işarələnmiş
axına üstünlük verilir. Videolar 600 saniyə, hər ölçü üzrə 8,192 piksel və
33,554,432 mənbə pikseli ilə məhdudlaşdırılır. FFmpeg orta nöqtələrdən 1–16 JPEG
kadrı seçir, daha kiçik girişləri böyütmədən uzun tərəfi ən çoxu 1,024 pikselə
qədər kiçildir və heç vaxt URL qəbul etmir. Seçim standart olaraq `uniform`
rejimindədir. İxtiyari `scene_aware` və eksperimental `segment_aware` siyasətləri
artıq yoxlanılmış lokal axın üzərində bir əlavə sabit FFmpeg keçidi həyata
keçirir, məhdud sayda `showinfo` səhnə vaxt nişanlarını seçir və detektor xətası,
taymaut, düzgün formalaşdırılmamış çıxış və ya boş namizəd dəsti halında
deterministik şəkildə eyni vahid orta nöqtələrə qayıdır. Seqmentdən xəbərdar
rejim orta nöqtə nümunələrini yoxlanılmış səhnə intervallarına mütənasib şəkildə
paylayır; seqmentdən xəbərdar sübutlar və ehtiyat davranış aşağıda ətraflı izah
olunur. Sərt 16 kadr həddi hər siyasətdə seçimdən sonra tətbiq edilir.
Səhnədən xəbərdar sorğunun yalnız bir kadr büdcəsi olduqda, aktiv tam video və
ya fokus pəncərəsinin vahid orta nöqtəsi istifadə edilir və
`policyEffective: uniform` bildirilir: seçilmiş tək səhnə kadrı hər iki zaman
ucunu qoruya bilməz. Çağıran tərəf istəyə bağlı olaraq sonlu fokus pəncərəsi
(`start`/`end` saniyələri) təqdim edə bilər; sərhədlər medianın müddətinə uyğun
məhdudlaşdırılır, tərsinə çevrilmiş və ya sonlu olmayan pəncərələr rədd edilir
və bütün seçmə siyasətləri yalnız normallaşdırılmış interval daxilində həyata
keçirilir. Nəticədə alınan pəncərə seçmə metadatasına və etibar edilməyən təsvir
prefiksinə daxil edilir ki, aşağı axındakı modellər fokuslanmış fraqmenti tam
zaman xəttindən fərqləndirə bilsin.

Semantik təsvir fokusu ayrıca, açıq parametrdir. Standart `full` təhlil rejimi
mövcud kadr promptunu qoruyur və sorğu mətnini heç vaxt təsvir modelinə
ötürmür. `focused` rejimində körpü yalnız eyni Chat və ya Responses konteynerində
istifadəçi tərəfindən yaradılmış ən son boş olmayan `text`/`input_text` mətnini
oxuyur, onu NFC formasına normallaşdırır, idarəetmə simvollarını və boşluqları
birləşdirir və 500 Unicode kod nöqtəsi ilə məhdudlaşdırır. Boş nəticə olduqda
dəqiq `full` promptuna qayıdılır. İstifadəyə yararlı ipucu ayrıca, etibar
edilməyən istifadəçi konteksti blokunda JSON kimi seriallaşdırılır və yalnız
müşahidə oluna bilən detalları prioritetləşdirə bilər; o, mediada görünən və ya
eşidilən təlimatlara əməl edilməməsi barədə ayrıca xəbərdarlığı ləğv edə bilməz.
Mətn fokusu heç vaxt `start`/`end` dəyərlərini müəyyən etmir və temporal seçicini
dəyişdirmir.

#### FU-07 struktur seqment sübutları

`segment_aware` artıq doğrulanmış lokal video axını üzərində bir məhdudlaşdırılmış ilkin analiz keçidindən istifadə edir. Sabit filtr zənciri əvvəlcə eni ən çox 320 piksel olacaq şəkildə miqyaslandırır, səhnə dəyişikliklərini və donmuş intervalları aşkarlayır, sonra bulanıqlıq, orta parlaqlıq və məkan/zaman məlumatı üçün saniyədə 1 kadr seçir. Keçid 600 struktur nümunəsi, bir FFmpeg/filtr axını, eyni yalnız `file` protokolu və konteyner icazə siyahıları, 1 MiB proses çıxışı limiti və brokerin ortaq dayandırma/son müddəti daxilində ən çox 30 saniyə ilə məhdudlaşdırılıb. O, sorğudan heç vaxt əmr, filtr, yol və ya URL qəbul etmir.

Struktur dəyərləri semantik video anlayışı deyil, deterministik seçmə sübutlarıdır. Onlar subyektləri, hərəkətləri, altyazıları, nitqi və ya istifadəçi niyyətini müəyyən etmir. Səhnə və donma sərhədləri seqmentlər yaradır; donma əhatəsi, bulanıqlıq, ekspozisiya, məkan detalları və zaman üzrə dəyişiklik yalnız mövcud 1–16 kadr büdcəsinin necə bölüşdürüldüyünə təsir edir. Tamamilə donmuş seqment maksimum bir kadrla məhdudlaşdırılır, donmamış seqmentlər isə qalan büdcə uğrunda rəqabət aparır. Sərhədlərin sayı kadrların sayını keçdikdə zaman xətti üzrə bərabər əhatə saxlanılır ki, əvvəldəki sürətli keçidlər uzun son seqmenti gizlədə bilməsin. Donma sərhədindən 1 saniyəlik analiz ayırdetmə intervalında olan səhnə sərhədləri birləşdirilir.

Çatışmayan filtrlər, qüsurlu/boş sübutlar, detektor xətası və ya məhdudlaşdırılmış ilkin analiz vaxt aşımı zamanı sistem tam olaraq bərabər paylanmış orta nöqtə siyasətinə açıq şəkildə geri qayıdır. Çağıranın dayandırması və ya brokerin son müddəti belə geri qayıdışa səbəb olmur: icrada olan alt prosesi dayandırır, sonrakı kadr çıxarılmasının qarşısını alır və məxfi müvəqqəti ağac `finally` daxilində silinir.

`scripts/perf/video-bridge-fu07-eval.ts` dublikatların silinməsindən sonrakı altyazı çağırışı qənaəti, sıx hərəkət büdcəsinin bölüşdürülməsi, bulanıqlıq/ekspozisiya/SI-TI sübutları, uzun sonluğu olan sürətli keçidlər və tədrici solma üzrə yanlış müsbət nəticələr üçün deterministik real FFmpeg sınaq materialları yaradır. O, ilkin analizin faktiki icra müddətini və `/usr/bin/time` mövcud olduqda alt prosesin CPU istifadəsini və pik RSS göstəricisini qeydə alır. Onun keyfiyyət yoxlamaları yalnız struktur orakullarıdır. Bu sınaq mühitində səlahiyyətli son nöqtə və ya sabitləşdirilmiş hakim olmadığından real altyazı modelinin keyfiyyəti `HOLD` olaraq qalır. `--caption-cost-per-call-usd` hər çağırış üçün açıq şəkildə müsbət xərc təxmini təqdim etmədikcə maliyyə qənaəti də `HOLD` olaraq qalır; skript bu nəticələrin heç birini uydurmur.

Hər kadr 4 MiB, bütün xam kadrlar birlikdə 23 MiB, seriallaşdırılmış broker cavabı isə 32 MiB ilə məhdudlaşdırılır. Məxfi müvəqqəti kataloq `finally` daxilində silinir. OmniRoute FFmpeg-i özündə paketləmir və fərdi icra edilə bilən fayl yolunu qəbul etmir. Altyazı yaratmazdan əvvəl körpü konservativ vizual dublikat silmə keçidi tətbiq edir: hər JPEG 16×16 boz çalar buferinə kiçildilir və yalnız saxlanılan son kadrla müqayisə olunur. Bir kadrdan çox altyazı büdcəsi tələb edildikdə çıxarma prosesi həmin büdcənin ən çox iki misli qədər və heç vaxt 16 kadrdan çox olmayan məhdud namizəd hovuzu təqdim edir. Tələb olunan limit yalnız dublikatlar silindikdən sonra tətbiq olunur; büdcə ən azı iki olduqda son seyrəltmə zamanı ilk və son seçilmiş namizədlər qorunur. Versiyalaşdırılmış `grayscale-16x16-mean-cells-v2` siyasəti orta parlaqlıq fərqi ilə normallaşdırılmış fərqi ən azı 0.05 olan miniatür xana nisbətindən daha böyük olanını istifadə edir. Dublikat həddi 0.04 sabitidir və icra vaxtı parametri kimi təqdim edilmək əvəzinə proqnozlaşdırıla bilməsi üçün seçilib. Bu ikinci yüksək kontrastlı siqnal yalnız orta qiymətə əsaslanan müqayisənin gizlədə biləcəyi kiçik hərəkətləri və görünən mətn dəyişikliklərini qoruyur. Müqayisəçi və ya dekoder xətaları zamanı sistem açıq şəkildə davam edir və əhatəni saxlayır. Çıxış metadatası çıxarılmış namizədləri, uğurla istifadə edilmiş kadrları və silinmiş vizual dublikatları bir-birindən ayırır.

Açıq şəkildə işarələnmiş video hissəsi vaxt nişanlı kontakt vərəqi tələb edə bilər. Körpü ən çox 4 sütunlu, 16 kadrlı JPEG toru yaradır. Hər 512 piksellik xana mənbə vaxt nişanını yüksək kontrastlı aşağı zolağa həkk edir, eyni vaxt nişanları isə sonrakı əlaqələndirmə və audit üçün mətn metadatasında saxlanılır. Tam JPEG 32 MiB ilə məhdud qalır. `sharp` toru dekodlaşdıra və ya tərtib edə bilməzsə, körpü fərdi JPEG kadrlarına geri qayıdır; müştəri dayandırması yenə də vərəq əməliyyatına ötürülür.

İstifadəyə buraxılış sübutları sintetik tərtibetmə mikrobencmarkından qəsdən ayrıdır. `scripts/perf/video-bridge-contact-sheet-eval.ts` real OpenAI-uyğun görmə modelləri üçün sxem versiyalı A/B sınaq mühiti müəyyən edir. O, provayder tərəfindən bildirilən tokenləri, başdan sona faktiki gecikməni (vərəqin tərtib edilməsi daxil olmaqla), model çağırışlarının sayını və manifestdə müəyyən edilmiş faktların saxlanmasını ölçür. Modelin xam cavabları hesabata yazılmır; yalnız SHA-256 həzmləri və uyğun gələn fakt ID-ləri saxlanılır. `--execute-real` ötürülmədikcə və `--model`, `OMNIROUTE_BASE_URL` və `OMNIROUTE_API_KEY` konfiqurasiya edilmədikcə sınaq mühiti heç bir şəbəkə və ya ödənişli model çağırışı etmir. Belə açıq real icra olmadıqda onun maşın tərəfindən oxuna bilən qərarı `HOLD` olaraq qalır; yalnız sintetik faydalı yük/çağırış sayı ölçmələri istifadəyə buraxılış sübutu deyil.

Çağıranlar əvvəlcədən uyğunlaşdırılmış mətnə sahib olduqda dəstəklənən video hissəsinə istəyə bağlı `transcript.cues` massivi əlavə edə bilərlər. Hər bir işarə `text`, yoxlanmış müddət daxilində sonlu `start`/`end` intervalı və icazə siyahısındakı `source` (`client`, `embedded` və ya `audio-bridge`) ehtiva etməlidir; `confidence` standart olaraq `1` olur və `0` ilə `1` arasında qalmalıdır. Tam eyni olan işarələr birləşdirilir. OmniRoute bu metadatadan heç vaxt transkripsiya başlatmır: doğrulanmış işarələr mənbə, etibarlılıq və intervalla birlikdə təsvir edilmiş nəticəyə köçürülür və kadr altyazıları ilə yanaşı etibar edilməyən müşahidələr kimi göstərilir. Etibarsız, diapazondan kənar və ya mənşəyi olmayan mətn altyazı axınına qarışdırılmaq əvəzinə rədd edilir. `source` sahəsi hazırda server tərəfindən doğrulanmır, çağıran tərəfindən bəyan edilir: OmniRoute dəyərin icazə verilən üç sətirdən biri olmasını təmin edir, lakin `embedded` və ya `audio-bridge` etiketinin həqiqətən serverə məxsus çıxarma prosesindən gəldiyini hələ kriptoqrafik şəkildə təsdiqləmir. Həmin doğrulama tətbiq edilənədək `source` sahəsinə etibar edilməyən ipucu kimi yanaşın; onun əsasında avtorizasiya qərarları verməyin.

Təkmil çağıran eyni video üçün artıq avtorizasiya edilmiş `audioTranscript` trekini təqdim edə bilər. Birləşdirmə sərhədi vizual və audio müşahidələri vahid son müddət və dayandırma siqnalı çərçivəsində icra edir, onları ümumi zaman xəttində sıralayır, tam dublikatları birləşdirir və yalnız bir tərəf uğurlu olduqda qismən nəticə bildirir. Etibarsız `audioTranscript` bütün videonun uğursuz olmasına səbəb olmaq əvəzinə həmin qismən nəticəyə keçir — vizual təsvir saxlanılır, audio qolu isə təmizlənmiş xəta kodunu qeydə alır. Hər qol üzrə əlçatanlıq, qismənlik bayrağı və təmizlənmiş xəta kodları təsvir edilmiş nəticədə, qoruyucu mexanizmin metadatasında (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), nəticə keşinin metadatasında və körpünün birləşdirmə sayğaclarında qorunur. Standart Video Bridge yolu nitqdən-mətnə çevirməni işə salmır və medianın ikinci nüsxəsini endirmir; həmin trek açıq şəkildə təqdim edilmədikdə bu yol yalnız video rejimində qalır.

**Transkriptin saxlanması (#12150 P1).** Bu, Video Bridge (özü seçim əsasında aktivləşdirilir) transkript işarəsini render etdiyi hər dəfə avtomatik tətbiq olunur — ayrıca saxlama bayrağı yoxdur. Sorğu hər hansı transkript işarəsini (çağıranın elan etdiyi `transcript` və ya birləşdirilmiş `audioTranscript`) render etdikdə, qoruyucu mexanizm onu `videoBridgeObserved` kimi işarələyir və video təsvirinin redaktə edilmiş kölgə nüsxəsini yaradır — bu, hər bir işarənin sərbəst mətn gövdəsinin `[redacted-video-transcript]` ilə əvəz edildiyi eyni renderdir və sətir yığılmazdan əvvəl strukturlaşdırılmış işarə sahəsinin əvəzlənməsi ilə yaradılır (heç vaxt yastılanmış mətn təhlil edilmir, buna görə də heç bir işarə məzmunu — zərərli və ya adi, o cümlədən `[inaudible]`/`[music]` kimi `]` ehtiva edən gövdələr — qorunub qala bilməz). Saxlanılan çağırış jurnalındakı sorğu gövdəsi məzmun bərabərliyi üzrə uyğunlaşdırılaraq videodan törədilmiş hər bir mətn hissəsini həmin redaktə edilmiş kölgə nüsxəsi ilə əvəz edir; `fullText` lövbəri çağırışdan əvvəl tamamlanmış qoruyucu mexanizm yükündən yenidən oxunur, buna görə də sonrakı zəncir qoruyucuları (PII və giriş məlumatı maskalayıcıları, prioritetlər 10/95) təsvir mətnini yerində yenidən yazdıqdan və sistem promptu/təhvilvermə/yaddaş inyeksiyası mesaj massivinin formasını dəyişdirdikdən sonra belə uyğunlaşdırma uğurlu olur. Modelə yuxarı axın üzrə göndərilən gövdə dəyişməz qalır. Müşahidə edilmiş sorğu həmçinin davamlı Memory-ni doldurmur (həm sorğudan, həm də cavabdan törədilən çıxarış ötürülür), beləliklə modelin öz cavabı transkript mətnini Memory-yə təkrarlaya bilməz.

**Xam video sahələri (#12430).** Körpü aktiv olduqda və yerli video dəstəyi naməlum və ya mövcud olmadıqda, müəyyən edilmiş `transcript`/`audioTranscript` sahələri hətta təsvir xətasından və ya `maxVideos` limitindən sonra da `videoBridgeObserved`-ı aktivləşdirir. `null` və boş sətirlər nəzərə alınır; mövcud olmayan sahələr və videoya aid olmayan metadata nəzərə alınmır. Saxlanılan nüsxələr bu sahələri redaktə edir və ya sorğunu buraxır, keşlərdən/Memory-dən isə yan keçilir. Provayder yükü dəyişməz qalır.

Əlavə saxlanılan nüsxələr eyni müşahidə edilmiş sorğu siqnalından istifadə edir. Qoruyucu mexanizmdən əvvəlki xam müştəri sorğusu görüntüsü, yaddaşdakı gözləyən sorğu və erkən rədd edilmiş sorğu jurnalı video hissələrindəki transkript sahələrini struktur olaraq əvəz edir; konveyer mərhələləri və kontekst təhvilverməsi tərəfindən yaradılan sətir promptları saxlanılan sorğu gövdəsinin qəbul nöqtəsində redaktə edilir. Saxlanılan `video_content_removed` markeri `previous_response_id` davamının qəsdən silinmiş mətni yenidən qurmaq əvəzinə qapalı şəkildə uğursuz olmasını təmin edir. Müşahidə edilmiş sorğu jurnallaşdırılmadan əvvəl hissə üzrə redaktə edilmiş kölgə nüsxəsini itirərsə və ya bir neçə video kölgəsindən hətta biri sonrakı sorğu dəyişikliklərindən sonra uyğun gəlməzsə, qismən redaktə edilmiş transkripti saxlamaq əvəzinə saxlanılan sorğu gövdəsi tamamilə buraxılır.

Müşahidə edilmiş sorğu üçün model cavabı strukturlaşdırılmış işarə sərhədi olmadan transkriptin istənilən hissəsindən sitat gətirə bilər. Buna görə də onun saxlanılan çağırış jurnalındakı `responseBody` dəyəri buraxılma markeri ilə əvəz edilir; təfərrüatlı konveyer artefaktı (yuxarı axın/müştəri gövdələrini və axın hissələrini ehtiva edə bilər) saxlanılmır. Semantik, idempotentlik və əsaslandırmanın təkrar icrası keşləri həmin sorğu üçün oxuma və yazma əməliyyatlarından yan keçir. Provayder sorğusu və müştərinin görə bildiyi cavab dəyişməz qalır. Təfərrüatlı artefakt buraxıldıqda erkən bağlantı-saxlama baytları müvəqqəti buferdən boşaldılır. Kiro-nun yanlış formatlaşdırılmış EventStream xəbərdarlığı heç vaxt məzmunu və ya JSON parserinin xam xətasını deyil, yalnız yükün bayt sayını bildirir.
Bu, əlaqəsiz hər bir provayder/plaqin diaqnostikasının audit edildiyini iddia etmir; saxlanılan qəbul nöqtələrinin daha geniş yoxlanışı #11658 daxilində izlənilir.

Daxili `/api/modality-bridge/video/drilldown` həyat dövrü ayrıca, loopback/token ilə autentifikasiya olunan keş substratıdır. Hər əməliyyat həmçinin kanonik, qeyri-şəffaf principal ID tələb edir. İstehsal mühitində çağıran aktivləşdirilməzdən əvvəl həmin ID-ni autentifikasiya edilmiş tenant-dan törətməli və heç vaxt müştərinin seçdiyi dəyəri ötürməməlidir. Keş açarları həmin principal-ı kanonik sessiya və video istinadı ID-lərinə bağlayır, yalnız onların SHA-256 əsasında törədilmiş açarlarını saxlayır və həm oxuma, həm də silmə əməliyyatlarını eyni principal ilə məhdudlaşdırır. Keş hər qeyd üçün ən çox 16 törədilmiş JPEG kadrı saxlayır, onların müddətini on dəqiqədən sonra bitirir və məhdudlaşdırılmış `start`/`end` oxumalarını və ya açıq sessiya silinməsini dəstəkləyir.

Hər principal 16 qeyd və 64 MiB kanonik JPEG məlumatı ilə məhdudlaşdırılır. Bu limitlər qlobal 64 qeyd/256 MiB yuxarı həddindən asılı deyil: principal kvotasının təzyiqi qlobal LRU çıxarılması nəzərdən keçirilməzdən əvvəl yalnız həmin principal-a aid ən uzun müddətdir istifadə olunmayan qeydləri çıxarır. Müddəti bitmiş qeydlər keş fəaliyyəti zamanı həm principal, həm də qlobal uçotdan təmizlənir, ləğvetmə və doğrulama xətası isə qismən əvəzetməni təsdiqləmir.

Keş qeyri-kanonik Base64-ü, həddindən artıq doldurmanı, JPEG olmayan medianı, yanlış formalaşdırılmış və ya
natamam JPEG-ləri və məhdudlaşdırılmış tam təsvir `sharp` dekodlaşdırması zamanı xəbərdarlıq yaradan JPEG-ləri rədd edir.
Qəbul edilən hər bir təsviri kanonik JPEG kimi yenidən kodlaşdırır, eni və hündürlüyü çağıran tərəfin sahələrinə etibar etmək
əvəzinə dekodlaşdırılmış baytlardan müəyyən edir və sondakı poliqlot baytları saxlamaq əvəzinə silir. Hər iki kvota üzrə yalnız
məhdudlaşdırılmış kanonik sıxılmış bufer nəzərə alınır. JSON ötürmə limiti dekodlaşdırılmış giriş üçün 32 MiB
həddinin Base64 əlavə yükünü əhatə edir. Saxlanılan hər bir
törəmə onun doğrulanmış JPEG formatını/rezolyusiyasını, seçmə siyasətini,
törəmə versiyasını, yaradılma vaxtını, server tərəfindən hesablanmış məzmun heşini və heşlənmiş əsas
istinadı, həmçinin etibarlı çağıran tərəfin əsas məzmun heşini qeydə alır. Ləğvetmə
atomik keş təsdiqindən əvvəl asinxron dekodlaşdırma/heşləmə mərhələləri arasında yoxlanılır.

Bu mərhələ hələ istehsal mühiti üçün istehsalçını marşruta qoşmur və
çoxrezolyusiyalı variant seçimini təmin etmir. Buna görə şəffaf Video Bridge sorğu
yolu əlavə iş yükü yaratmır, tenantla əlaqələndirilmiş principal törəməsi və
tam FU-08 çoxrezolyusiyalı həyat dövrü isə tamamlanmış davranış kimi
sənədləşdirilmək əvəzinə açıq şəkildə sonrakı iş olaraq qalır.

Kadrlar konfiqurasiya edilmiş Video modeli ilə ardıcıl şəkildə təsvir olunur. Boş
Video əvəzləməsi Vision parametrini miras alır; hər ikisi boş olarsa, Vision
avtomatik marşrutlayıcısı effektiv, təsvir emalını dəstəkləyən modeli seçir. Uğurlu təsvirlər
orijinal hissəni sabit `[Video description:` prefiksi ilə əvəz edir; bu prefiks həmçinin
mətni etibar edilməyən, mediadan əldə edilmiş müşahidə kimi işarələyir və sonrakı
modellərə mediada tapılan təlimatlara əməl etməməyi bildirir. Kadr təsviri keş açarlarına
JPEG baytları, sorğu, vaxt möhürü və effektiv model daxildir; yalnız uğurlu
təsvirlər keşlənir. Keş qeydləri ehtiyat model də daxil olmaqla faktiki uğurlu istehsalçı modeli
saxlayır; müxtəlif kadrlar müxtəlif modellər tərəfindən yaradıldıqda körpü
`mixed` bildirir. Keş uyğunluğu həmin istehsalçı identikliyini sorğu edilən marşrutlaşdırma planı kimi
yenidən etiketləmək əvəzinə təkrar istifadə edir. Bütün video üzrə nəticə
keşinin açarı çıxışı dəyişdirən hər bir giriş əsasında formalaşdırılır — sorğu, effektiv
model, seçmə siyasəti, kadr sayı, semantik analiz rejimi, normallaşdırılmış fokus ipucunun SHA-256
barmaq izi, fokus pəncərəsi, `transcript`,
`audioTranscript` və kontakt vərəqi bayrağı — buna görə həmin
ölçülərdən hər hansı birinin dəyişdirilməsi köhnəlmiş təkrar istifadəyə deyil, keş uyğunsuzluğuna səbəb olur. Vizual dublikatların aradan qaldırılması siyasətinin
versiyası, həddi və məhdudlaşdırılmış namizəd kadr sayı da
nəticə keşinin açarında və metadatasında açıq şəkildə göstərilir; buna görə siyasət dəyişikliyi köhnəlmiş
bütün-video təsvirini təkrar istifadə edə bilməz. Nəticə keşinin v4 metadatası rejimi və
barmaq izini saxlayır, istifadəçinin ilkin tapşırığını isə heç vaxt saxlamır. Qoruyucu mexanizmin metadatası həm
sorğu edilən, həm də effektiv analiz rejimlərini bildirir; istifadə edilə bilən istifadəçi mətni olmadan sorğu edilən
`focused` rejimi effektiv olaraq `full` kimi bildirilir.

Qoruyucu mexanizm dəstəklənən bütün video hissələrini çıxarır, lakin
`modalityBridgeVideoMaxVideos` sayından artıq hissəni təsvir etmir.
`supportsVideo === false` olduğu sübut edilmiş hədəf üçün uğursuz və limiti aşan videolar
açıq təhlükəsiz mətn işarələrinə çevrilir ki, heç bir xam video qalmasın.
İmkan məlum olmadıqda həmin hissələr toxunulmaz qalır. `supportsVideo === true`
olan hədəflər körpüdən yan keçir.
Müştəri sorğusunun dayandırma siqnalı endirmə, broker növbəsi,
alt proseslər və təsvir çağırışları boyunca ötürülür; dayandırmalar videolar arasında prosesi saxlayır
və heç vaxt xam mediaya açıq keçidlə nəticələnmir.

İcra vaxtı parametrləri DB-də saxlanılır və Zod ilə doğrulanır:

| Açar                                | Standart    | Aralıq / davranış                                                                                                            |
| ----------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | İstəyə bağlı icra vaxtı funksiyası, açıq seçimlə aktivləşdirilir                                                             |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` ümumi təsvirləri qoruyur; `focused` məhdudlaşdırılmış, etibar edilməyən ən son istifadəçi kontekstindən istifadə edir |
| `modalityBridgeVideoModel`          | `""`        | Vision Bridge modelini miras alır                                                                                            |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                         |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` və ya proporsional `segment_aware`; detektor xətası zamanı `uniform` istifadə edilir                |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                          |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                               |

Əvvəllər saxlanılmış, 120 saniyədən yuxarı Video vaxt aşımı dəyərləri
brokerin son müddətinə qədər məhdudlaşdırılır; bu həddən yuxarı yeni parametr yazılışları rədd edilir.
`GET /api/modality-bridge/video/runtime` autentifikasiyadan və ya icra vaxtı mühitinin yoxlanılmasından əvvəl
etibarlı şəkildə möhürlənmiş loopback lokallığını, sonra isə idarəetmə
autentifikasiyasını tələb edir. O, yalnız `available`, təmizlənmiş FFmpeg/ffprobe versiyalarını və icra vaxtı mühiti
əlçatan olmadıqda sabit səbəbi qaytarır. Daxili çıxarma son nöqtəsi
ictimai yükləmə API-si deyil: növbənin dolması `503` və `Retry-After`, çağıran tərəfin
əlaqəni kəsməsi `499`, sabit broker son müddəti isə `504` qaytarır. Çevrilmiş cavablar
Vision və ya Audio seqmentlərini silmədən mərkəzi
`x-omniroute-modality-bridge` başlığına
`video->text;model=<visionModel>;parts=<videos>` əlavə edir.

### PII Masker (`piiMasker.ts`)

**Hər iki** mərhələdə işləyir.

- **`preCall`** faydalı yükü klonlayır, `system`, `messages`, `input` və
  `prompt` sahələrini (sadə sətir elementləri daxil olmaqla) nəzərdən keçirir və
  sətir tipli `content`/`text` sahələrinə `processPII()` funksiyasını
  (`@/shared/utils/inputSanitizer` modulundan) tətbiq edir.
  `PII_REDACTION_ENABLED=true` olduqda aşkarlanmış şəxsiyyəti müəyyən edən
  məlumatlar (PII) göndərilən faydalı yükdə redaktə edilir. Bu,
  `INPUT_SANITIZER_MODE` parametrindən asılı deyil (həmin parametr yalnız
  prompt inyeksiyası siyasətini idarə edir). Redaktə deaktiv olduqda çağırış
  məzmunu dəyişmədən aşkarlanma saylarını qeydə alır.
- **`postCall`** cavabı dərin klonlayır, `sanitizePIIResponse()` funksiyasını və
  Responses API formatı üçün maskalayıcını (`maskResponsesOutput` —
  `output_text` və `output[].content[].text` sahələrini əhatə edir) işə salır.
  Hər hansı redaktə baş verərsə, dəyişdirilmiş cavab orijinalı əvəz edir.

Qoruyucu mexanizm heç vaxt bloklamır; o, yalnız annotasiya edir
(`meta.detections`, `meta.redacted`) və ya məzmunu yenidən yazır.

### Prompt inyeksiyası (`promptInjection.ts`)

İstifadəçi tərəfindən təqdim edilən məzmunda zərərli strukturları aşkarlayır və
konfiqurasiya edilmiş siyasəti tətbiq edir. Davranış mühit dəyişənləri və
konstruktor seçimləri ilə idarə olunur:

| Parametr       | Mühit dəyişəni                                                                                         | Standart | Təsir                                                                                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktivdir       | `INPUT_SANITIZER_ENABLED`                                                                              | `true`   | `false` olduqda qoruyucu mexanizm yoxlamanı dayandırır.                                                                                                                                                                     |
| Rejim          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`   | İnyeksiya siyasəti: `block`, `warn` və ya `log`. (`redact` geriyə uyğunluq üçün qəbul edilir, lakin inyeksiya mətnini **silməz**; sorğudakı PII məlumatlarının yenidən yazılması `PII_REDACTION_ENABLED` ilə idarə olunur.) |
| Bloklama həddi | `blockThreshold` seçimi / `INPUT_SANITIZER_BLOCK_THRESHOLD` (`INJECTION_GUARD_BLOCK_THRESHOLD` aliası) | `high`   | Bloklama üçün tələb olunan minimum ciddilik səviyyəsi. Standart halda `medium` yalnız müşahidə edilir.                                                                                                                      |

**Rejim üstünlüyü** (`getMode`): çağıranın `options.mode` seçimi →
`INJECTION_GUARD_MODE` üçün **verilənlər bazasındakı funksiya bayrağı
üstünlüyü** (İdarəetmə paneli → Parametrlər → Funksiya bayraqları) →
`INJECTION_GUARD_MODE` mühit dəyişəni → `INPUT_SANITIZER_MODE` mühit dəyişəni →
`warn`. Buna görə də idarəetmə panelindəki üstünlük mühit dəyişənlərindən
üstündür və Funksiya bayraqları interfeysi işləyən qoruyucu mexanizmi canlı
şəkildə idarə edir (yenidən başlatma tələb olunmur). Verilənlər bazasından oxuma
xətalara qarşı təhlükəsizdir: xəta baş verərsə, qoruyucu mexanizm mühit
dəyişənlərinə əsaslanan davranışa qayıdır; üstünlük təyin edilmədikdə isə davranış
yalnız mühit dəyişənlərinə əsaslanan həll ilə eynidir.

Aşkarlama mənbələri:

1. `@/shared/utils/inputSanitizer` modulundakı `sanitizeRequest()` (emal
   konveyerinin digər hissələrində də istifadə olunan ortaq detektorlar dəsti).
2. Daxili `DEFAULT_GUARD_PATTERNS` (hazırda `system_override_inline` və
   `markdown_system_block`; hər ikisinin ciddilik səviyyəsi `high`-dır).
3. Konstruktor seçimləri vasitəsilə ötürülən ixtiyari `customPatterns`
   (sətirlər, müntəzəm ifadələr və ya `{ name, pattern, severity }` qeydləri).

`mode === "block"` olduqda **və** ən azı bir aşkarlama ciddilik həddinə
çatdıqda, `preCall` `{ block: true, message: "Request rejected: suspicious
content detected" }` qaytarır. `warn`/`log` rejimlərində qoruyucu mexanizm
jurnala qeyd yazır, lakin çağırışa icazə verir. Reyestrdən istifadə etmədən
promptları qiymətləndirməli olan çağıranlar üçün ortaq
`evaluatePromptInjection()` köməkçi funksiyası da ixrac edilir.

**Skan həddi (v3.8.20):** detektor birləşdirilmiş prompt mətninin yalnız
**ilk 16 KB** hissəsini yoxlayır — `src/shared/utils/inputSanitizer.ts`
faylında `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bayt). Həm
`detectInjection()`, həm də `evaluatePromptInjection()` nümunə dövrünü işə
salmamışdan əvvəl `slice(0, MAX_INJECTION_SCAN_BYTES)` tətbiq edir. İnyeksiya
direktivləri girişin yuxarı hissəsinə yaxın yerləşdiyindən, bu, aşkarlamanı
zəiflətmədən yüzlərlə KB ölçüsündə faydalı yüklərdə regex CPU/GC istifadəsini
məhdudlaşdırır (bax: #3932, #4041).

### Etimadnamə maskalayıcısı (`credentialMasker.ts`)

Standart zəncirin sonunda (prioritet `95`) **hər iki** mərhələdə işləyir.
Geniş tanınan API açarı / məxfi token nümunələrini göndərilən faydalı yükdən
(mesaj məzmunu, alət çağırışı arqumentləri, alət nəticələri) **və** provayder
cavabından redaktə edir. Beləliklə, prompta yapışdırılmış (və ya alət nəticəsi
tərəfindən geri qaytarılmış) etimadnamə yuxarı axındakı provayderə və ya geriyə,
müştəriyə sızdırılmır.

- **Yalnız aktiv seçimlə**, PII redaktəsi ilə eyni qaydaya əsasən (Sərt Qayda #20-yə yaxın):
  `settings.credentialRedactionEnabled === true` **və ya**
  `CREDENTIAL_REDACTION_ENABLED=true` olmadıqda deaktivdir. Deaktiv olduqda qoruyucu mexanizm heç bir əməliyyat yerinə yetirmir —
  heç vaxt bloklamır və heç vaxt yenidən yazmır.
- `redactCredentials()` bütün faydalı yük/cavab ağacını gəzir (`walkValue()`,
  prototip çirklənməsinə qarşı təhlükəsizdir, `WeakSet` vasitəsilə dövrlərə qarşı təhlükəsizdir) və uyğunluqları
  `[REDACTED:<type>]` yer tutucusu ilə əvəz edir; yalnız faktiki olaraq
  dəyişmiş budaqları klonlayır.
- `CREDENTIAL_PATTERNS` LLM provayder açarlarını (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokenlərini (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ödəniş açarlarını (Stripe, Square), bulud
  açarlarını (AWS giriş açarı, Twilio, SendGrid, Mailgun), məxfi açarları / JWT-ləri,
  giriş məlumatlarını ehtiva edən bağlantı sətirlərini (`mongodb://user:pass@...` və s.) və
  ümumi `Authorization`/`x-api-key`/`api-key`/`apikey` başlıq-dəyər
  nümunəsini əhatə edir. Başlıq formasındakı açarlar (`authorization`, `x-api-key`, `api-key`,
  `apikey`) ümumi mətn müntəzəm ifadəsi vasitəsilə deyil, struktur olaraq redaktə edilir
  (yalnız dəyər; `Bearer `/`Basic ` kimi sxem prefiksi qorunur).
- Qoruyucu mexanizm heç vaxt bloklamır; o, yalnız yenidən yazır (`modifiedPayload` /
  `modifiedResponse`) və annotasiya əlavə edir (`meta.credentialsRedacted`, `meta.count`).

Reqressiya qoruyucusu: `tests/unit/credential-masker-guardrail.test.ts`.

## Əsas müqavilə (`base.ts`)

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
  block?: boolean; // true zənciri dərhal dayandırır
  message?: string; // bloklama zamanı göstərilir
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // sorğunu yenidən yazmaq üçün preCall tərəfindən qaytarılır
  modifiedResponse?: TValue; // cavabı yenidən yazmaq üçün postCall tərəfindən qaytarılır
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

Qoruyucu mexanizm `void`, `{}` və ya `{ block: false }` qaytarmaqla "dəyişiklik yoxdur"
siqnalını verir. `modifiedPayload`/`modifiedResponse` qaytarılması zəncir boyunca
sonrakı qoruyucu mexanizmlərə ötürülən dəyəri əvəz edir.
`signal?: AbortSignal` çağıranın həyat dövrünü qoruyucu mexanizmlərə ötürür. Sorğunun ləğv edilməsi qəsdən tətbiq olunan fail-open istisnasıdır: media körpüləri işi dayandırır və təmizləmə aparır, lakin emal edilməmiş medianı onu dəstəkləmədiyi məlum olan hədəfə bərpa etmir.

## Reyestr (`registry.ts`)

Tək nümunəli `guardrailRegistry` aşağıdakıları təqdim edir:

- `register(guardrail)` — qoruyucu mexanizm əlavə edir (və ya normallaşdırılmış ada görə əvəz edir) və
  artan `priority` sırasına görə yenidən çeşidləyir.
- `clear()` / `list()` — inzibati köməkçi funksiyalar.
- `runPreCallHooks(payload, context)` — aktiv qoruyucu mexanizmlər üzrə iterasiya edir, payload-u
  `modifiedPayload` vasitəsilə zəncir boyunca ötürür və ilk `block: true` halında dayanır.
- `runPostCallHooks(response, context)` — cavab tərəfində eyni axını icra edir.
- `resetGuardrailsForTests({ registerDefaults })` — vəziyyəti təmizləyir və təmiz test izolyasiyası üçün istəyə bağlı olaraq
  standartları yenidən qeydiyyatdan keçirir.

Hər iki icra mexanizmi `{ blocked, payload|response, results, guardrail?, message? }`
qaytarır; burada `results` hər qoruyucu mexanizm üzrə
`blocked`, `skipped`, `modified`, `error` və `meta` sahələrini ehtiva edən
`GuardrailExecutionResult` qeydləri massividir və izləmə üçün faydalıdır.

### Hər sorğu üzrə qoruyucu mexanizmlərin deaktiv edilməsi

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` cari sorğu üçün
ötürülməli olan qoruyucu mexanizm adlarının təkrarlanmayan siyahısını toplayır.
Mənbələr (hamısı istəyə bağlıdır və hamısı birləşdirilir):

- `apiKeyInfo.disabledGuardrails`
- Sorğunun gövdəsində `disabledGuardrails` (yuxarı səviyyə)
- Sorğunun gövdəsində `metadata.disabledGuardrails`
- `x-omniroute-disabled-guardrails` başlığı (və ya köhnə
  `x-disabled-guardrails`)

Dəyərlər sətirlər massivləri və ya vergüllə ayrılmış sətir ola bilər; adlar
kiçik hərflərlə kebab-case formatına normallaşdırılır (`pii_masker` → `pii-masker`). Nəticə
`context.disabledGuardrails` vasitəsilə reyestrə ötürülür və reyestr uyğun gələn
qoruyucu mexanizmləri ötürür (`results` daxilində `skipped: true`).

## İcra ardıcıllığı

`src/sse/handlers/chat.ts` və `open-sse/handlers/chatCore.ts` vasitəsilə keçən hər bir sorğu üçün:

1. `resolveDisabledGuardrails(...)` API açarı, sorğu gövdəsi və başlıqlar əsasında ötürüləcək qoruyucu mexanizmlərin siyahısını yaradır.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` qoruyucu mexanizmləri artan prioritet sırası ilə işə salır:
   - Deaktiv edilmiş qoruyucu mexanizmlər `skipped` kimi qeydə alınır.
   - Hər qoruyucu mexanizmin `preCall` funksiyası `modifiedPayload` vasitəsilə faydalı yükü yenidən yaza bilər.
   - İlk `block: true` zənciri qısa qapayır və emalçı qoruyucu mexanizm tərəfindən rədd cavabı qaytarır.
3. Dəyişdirilmiş ola bilən faydalı yük kombinə edilmiş marşrutlaşdırmaya və yuxarı axına göndərilməyə ötürülür.
4. Cavab formalaşdırıldıqdan sonra `guardrailRegistry.runPostCallHooks(...)` cavab üzərində eyni zənciri işə salır. Buradakı `block: true` yuxarı axın cavabını ləğv edir.

İstisna atan qoruyucu mexanizmlər `error: <message>` ilə qeydə alınır və `logger.warn` vasitəsilə jurnala yazılır, lakin zəncir davam edir — bu, dizayn etibarilə nasazlıq zamanı icazəvermə yanaşmasıdır.

## Konfiqurasiya

Daxili qoruyucu mexanizmlərin oxuduğu mühit dəyişənləri:

| Dəyişən                               | İstifadə edən             | Təsir                                                                                                         |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Aşkarlamanı tamamilə deaktiv etmək üçün `false` təyin edin.                                                   |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | İnjeksiya siyasəti: `warn`, `block` və ya `log`. Köhnə `redact` dəyəri injeksiya mətnini yenidən yazmır.      |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | İnjeksiya qoruyucusunun rejimi; həmçinin mühit dəyişənlərini **üstələyən** DB funksiya bayrağıdır (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | `MODE=block` tərəfindən rədd edilən minimum ciddilik səviyyəsi: `high` (standart), `medium` və ya `low`.      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | `INPUT_SANITIZER_BLOCK_THRESHOLD` üçün köhnə alternativ ad.                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | `true` olduqda sorğudakı PII redaktə edilir (injeksiya rejimindən asılı olmayaraq).                           |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (aşağı axın) | Cavab tərəfindəki maskalayıcının davranışını idarə edir.                                                      |

Modality Bridge qoruyucu mexanizmləri mühit dəyişənlərindən deyil, DB dəstəkli parametrlər anbarındakı icra vaxtı konfiqurasiyasını (`getSettings()`) oxuyur. Vision üçün əsas açarlar bunlardır:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` və
`modalityBridgeCacheMaxEntries`. Köhnə
`visionBridge*` açarları yalnız sənədləşdirilmiş bir dövrlük oxuma ehtiyat variantı kimi qəbul edilir; idarəetmə panelindəki yazma əməliyyatları əsas açarlardan istifadə edir. Standart dəyərlər və ehtiyat həll mexanizmi `src/shared/constants/modalityBridgeDefaults.ts` daxilindədir, köhnə sabitlər isə `src/shared/constants/visionBridgeDefaults.ts` daxilində saxlanılır.

Audio `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` və `modalityBridgeAudioMaxClips`, həmçinin ortaq
`modalityBridgeCache*` parametrlərindən istifadə edir. Bu açarlar Modality Bridge sxemi ilə təqdim edildiyinə görə Audio üçün köhnə açarlara ehtiyat keçid yoxdur.

Video `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` və
`modalityBridgeVideoTimeout`, həmçinin ortaq `modalityBridgeCache*` parametrlərindən istifadə edir.
FFmpeg/ffprobe istəyə bağlı əməliyyat asılılıqları olduğuna, kadrların təsvir edilməsi isə gecikmə və model xərci yaratdığına görə bu funksiya standart olaraq deaktivdir.

## Fərdi qoruyucu mexanizmlər

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

Addımlar:

1. `BaseGuardrail` sinfini genişləndirən `src/lib/guardrails/myGuardrail.ts` faylını yaradın.
2. `preCall` və/və ya `postCall` metodunu reallaşdırın.
3. Ya import zamanı qeydiyyatdan keçirin (`registerDefaultGuardrails` daxilindən əlavə edin), ya da
   icra zamanı `guardrailRegistry.register(...)` çağırın — reyestr eyni normallaşdırılmış ada
   malik əvvəlki qoruyucu mexanizmi əvəz edir.
4. Testləri `tests/unit/` altında əlavə edin (mövcud nümunələr:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testləmə

Məlum vəziyyətdən başlamaq üçün testlər arasında `resetGuardrailsForTests()` istifadə edin.
Boş reyestrlə başlamaq və yalnız test edilən qoruyucu mexanizmləri qeydiyyatdan keçirmək
üçün `{ registerDefaults: false }` ötürün. Vision Bridge asılılıqların yeridilməsini
(`deps.getSettings`, `deps.callVisionModel`) qəbul edir; Audio Bridge isə parametrlər,
imkanlar, STT modelinin seçimi, giriş məlumatlarının yoxlanılması və transkripsiya üçün
ekvivalent müdaxilə nöqtələri təqdim edir. Buna görə də testlər hər iki axını DB və ya
şəbəkə çıxışı olmadan sınaqdan keçirə bilər.

## Həmçinin baxın

- `src/lib/guardrails/` — reallaşdırma
- `src/shared/utils/inputSanitizer.ts` — prompt inyeksiyasını və PII maskalanmasını
  təmin edən ortaq detektor
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge standartları və
  məcburi körpü model siyahısı
- `src/shared/constants/modalityBridgeDefaults.ts` — ortaq Vision/Audio icra mühiti standartları
- `docs/architecture/RESILIENCE_GUIDE.md` — ortoqonal qat (dövrə kəsicisi, gözləmə müddətləri)
- `docs/reference/ENVIRONMENT.md` — mühit dəyişənlərinin tam arayışı

## İnyeksiya qoruyucusunun marşrut əhatəsi və red-team (Mərhələ 8 · Blok D)

İnyeksiya qoruyucusu (`createInjectionGuard` / `withInjectionGuard`) istifadəçi promptlarını
qəbul edən bütün marşrutları əhatə edir. O, `INJECTION_GUARD_MODE` parametrinə riayət edir
(standart `warn` = yalnız jurnala yazır; `block` = HTTP 400 `SECURITY_001` qaytarır).

| Növ           | Marşrutlar                                                                                                                                           | Standart rejim |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Mətn (mövcud) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Generativ     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Məlumat       | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Mətnin çıxarılması (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` sahələrini əhatə edir.

**Red-team (gecəlik, `nightly-llm-security.yml`):** promptfoo hər bir marşrutun
`INJECTION_GUARD_MODE=block` rejimində OWASP-LLM korpusunu blokladığını yoxlayır; garak
sınaqları işə salır (gizli açar olmadıqda ötürür). `moderations` ardıcıllıq naminə daxil
edilib — `block` rejimindəki operatorlar onu `resolveDisabledGuardrails` vasitəsilə istisna
edə bilərlər.

Gecəlik iş axınının (`.github/workflows/nightly-llm-security.yml`, cron + əl ilə
işə salma) iki tapşırığı var:

- **`promptfoo-guard` (bloklayıcı)** — `INJECTION_GUARD_MODE=block` ilə
  `promptfoo eval -c promptfooconfig.yaml` əmrini işlədir. Hər bir rəqib ssenari
  (məsələn, "əvvəlki bütün təlimatlara məhəl qoyma…", DAN üslublu jailbreak-lər)
  cavabın `error.code === "SECURITY_001"` daşıdığını, yəni qoruyucunun sorğunu
  həqiqətən rədd etdiyini təsdiqləyir.
- **`garak` (məşvərətçi)** — yerli OmniRoute instansiyasına
  (`http://localhost:20128/v1`) qarşı garak-ı `--probes promptinject,dan,leakreplay`
  ilə işə salır. Provayderin gizli açarından (`PROMPTFOO_PROVIDER_KEY`) asılıdır;
  açar olmadıqda problemsiz ötürülür və sonuna `|| true` əlavə edilib, buna görə
  CI prosesini uğursuz etmədən hesabat verir.

Qoruyucu köməkçi funksiyanın (`createInjectionGuard` / `withInjectionGuard`) əhatəsi
prompt daşıyan hər bir `/v1` marşrutunu əhatə edir; prompt mətni
`src/shared/utils/inputSanitizer.ts` daxilindəki `extractMessageContents()` tərəfindən
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` sahələrindən
götürülür.
