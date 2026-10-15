# Guardrails (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Doğruluk kaynağı:** `src/lib/guardrails/`
> **Son güncelleme:** 2026-08-29 — v3.8.51 (Video Köprüsü transkript kaynağı arayan tarafından beyan edilir,
> henüz sunucu tarafından doğrulanmadı — #11661 uyarınca açıklığa kavuşturuldu)

Guardrail'ler, OmniRoute ile yukarı akış sağlayıcıları arasındaki sınırda güvenliği, politikayı ve içerik dönüşümlerini zorunlu kılar. Her guardrail, istek yüklerini (`preCall`) ve yukarı akış yanıtlarını (`postCall`) inceleyebilir (ve isteğe bağlı olarak reddedebilir, dönüştürebilir veya açıklama ekleyebilir).

Sistem **açıkta başarısız olur**: bir guardrail yürütülürken bir hata fırlatırsa, kayıt defteri hatayı kaydeder ve isteği başarısız kılmak yerine bir sonraki guardrail ile devam eder. Engelleme açık bir karardır (`block: true`), asla bir kaza değildir.

## Yerleşik Koruma Mekanizmaları

Kayıt defteri, içe aktarma sırasında altı koruma mekanizmasını öncelik sırasına göre otomatik olarak yükler
(bkz. `registry.ts` → `registerDefaultGuardrails()`):

| Öncelik | Ad                  | Aşama(lar)     | Dosya                 |
| ------- | ------------------- | -------------- | --------------------- |
| `5`     | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`     | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`     | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`    | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`    | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`    | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Daha düşük öncelik numaraları **önce** çalışır.

### Görüntü Köprüsü (`visionBridge.ts`) — Modalite Köprüsü PR-1

**Görüntü desteklemeyen modellere** yönelik, görüntü içeren istekleri yakalar ve
isteğin tamamını görüntü destekleyen bir modele yeniden yönlendirir ya da yukarı
akış çağrısından önce görüntü bölümlerini, yapılandırılabilir bir görüntü modeli
tarafından üretilen metin açıklamalarıyla değiştirir. Bu, yalnızca metin
destekleyen sağlayıcıların çok modlu yükleri şeffaf biçimde işlemesini sağlar.

Akış:

1. Hedef model zaten görüntü destekliyorsa atla (`isVisionBridgeForcedModel`
   zorunlu köprü listesindeyse atlama).
2. Görüntü bölümlerini `extractImageParts(messages)` aracılığıyla çıkar
   (`visionBridgeHelpers.ts`); bu işlev, combo uyumluluk filtresiyle paylaşılan
   tek doğruluk kaynağı olan `open-sse/utils/mediaParts.ts` içindeki
   **birleşik medya algılayıcısı** `detectMediaParts()` işlevine devreder.
   Çıkarma işlemi, `replaceImageParts` işlevinin yeniden ekleyebildiği biçimlerin
   en üst düzey bölümleriyle sınırlıdır (çıkarma↔değiştirme sözleşmesi): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` ve Responses API `input_image`. İç içe eşleşmeler ve
   yalnızca gösterge içeren biçimler combo filtresinin kapsamındadır ve hiçbir
   zaman çıkarılmaz. Hiçbiri bulunamazsa atla.
3. Çalışma zamanı yapılandırmasını `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) aracılığıyla çözümle: yeni
   `modalityBridge*` ayar anahtarları önceliklidir; eski `visionBridge*`
   anahtarları **bir döngülük geri dönüş seçeneği** olarak kalır (geri alma
   penceresi). Köprü devre dışıysa herhangi bir medya taraması yapmadan önce
   atla.
4. Mod seçici (`modalityBridgeVisionMode`, aşağıdaki tabloya bakın) yeniden
   yönlendirme ile açıklama arasında karar verir. Yeniden yönlendirme, yalnızca
   `model` değiştirilmiş şekilde `modifiedPayload` ve ayrıca
   `{ rerouted, fromModel, toModel, imagesKept }` meta verisini döndürür.
5. Açıklama yolu: görüntü sayısını `maxImages` ile sınırlar, göreve duyarlı
   istemi oluşturur, açıklama önbelleğine başvurur, görüntü modelini **paralel
   olarak** (`Promise.allSettled`) çağırır ve görüntülerin yerine
   `[Image N]: <description>` metin bölümlerini ekler. Başarısız bir açıklama
   `null` sonucunu üretir ve özgün görüntü bölümü **korunur** (#4012) — ancak
   tüm açıklamaların başarısız olduğu combo açıklama yolunda, görüntü
   desteklemediği doğrulanmış bir yukarı akışa bunun yerine
   `(kullanılamıyor — görüntü destekleyen hiçbir sağlayıcı bağlı değil)`
   yer tutucusu gönderilir (#8430).
6. `modifiedPayload` ile birlikte meta verileri (`imagesProcessed`,
   `descriptions`, `processingTimeMs`, `visionModel`) döndürür.

#### Mod seçici (`modalityBridgeVisionMode`)

| Mod        | Varsayılan | Davranış                                                                                                                                                                                                                                                                                                                   |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔          | Eski sezgisel yöntem değişmeden korunur (#6640/#7204): combo olmayan/`auto/` modeller, özgün model hâlihazırda kullanılabilir kimlik bilgilerine sahip değilse en iyi görüntü modeline yeniden yönlendirilir (sahipse açıklama yapılır); combo hedefleri her zaman açıklama yapar.                                         |
| `describe` |            | Her zaman açıkla — yeniden yönlendirme bloğu tamamen atlanır; yanıtı her zaman kullanıcının seçtiği model verir.                                                                                                                                                                                                           |
| `reroute`  |            | Yeniden yönlendirmeyi zorla: kimlik bilgilerine sahip modeli koruma denetimi atlanır. Yeniden yönlendirme **hedefinin** kimlik bilgisi denetimi yine uygulanır — kullanılabilir bir görüntü hedefi yoksa istek açıklama yoluna geçer; böylece ham görüntüler yalnızca metin destekleyen bir arka uca asla ulaşmaz (#8430). |

Zorunlu modlar, otomatik sezgisel yöntem çalışmadan **önce** kısa devre yapar;
`auto` davranışı PR-1 öncesi koruma mekanizmasıyla bayt düzeyinde aynıdır.

#### API anahtarı kapsamı (`visionBridgeKeyScope.ts`)

Çağıranın API anahtarı `allowedConnections`, kota havuzları
(`allowedQuotas`) veya modeller (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) üzerinde kısıtlama
uyguladığında köprü, yalnızca anahtarın kullanabileceği bağlantılardaki ve
anahtarın kullanmasına izin verilen yeniden yönlendirme ve açıklama modellerini
seçer. Ardından açıklama çağrısı her zaman
`x-omniroute-self-loop-key-id` üst bilgisiyle OmniRoute öz döngüsü üzerinden
gerçekleşir; böylece çağrıyı alan sohbet isteği, bu anahtarın bağlantı ve model
politikasını yeniden uygular. `enforceApiKeyPolicy()` bu üst bilgiyi yalnızca
öz döngü bearer değeriyle birlikte dikkate alır; dolayısıyla yalnızca erişimi
daraltabilir ve çözümlenemeyen bir kimlik reddedilir.

Anahtar için hiçbir görüntü modeline izin verilmiyorsa açıklama yolu devreden
çıkar ve istek değiştirilmeden iletilir; bu, devre dışı bırakılmış bir koruma
mekanizmasıyla aynı hata durumunda açık kalma davranışıdır (meta
`{ skipped: true, reason: "no_permitted_vision_model" }`). Anahtarı olmayan
istekler ve bu kısıtlamalara sahip olmayan anahtarlar tam olarak önceki gibi
davranır.

#### Göreve duyarlı açıklama istemi (`modalityBridgeVisionTaskAware`)

Varsayılan değer **true**'dur. `composeVisionPrompt()` (`visionBridgeHelpers.ts`), temel
açıklama istemine **son kullanıcı mesajının** metnini (500 karakterle
sınırlandırılmış olarak) ekler; böylece açıklamayı kullanıcının gerçekte istediği
şeye yönlendirir (codex-vision-proxy kalıbı) ve görsel modelden görünür metni
deşifre etmesini ister. Bayrak kapalıysa veya kullanıcı metni yoksa temel istem
değiştirilmeden kullanılır.

Açıklama öz döngüsünün kendi OpenAI uyumlu isteği (`visionBridgeHelpers.ts`
içindeki `callVisionModelSingle()`), her zaman `image_url.detail: "high"` ister —
bu, her çağıran/sağlayıcı için koşulsuzdur ve herhangi bir istemci sinyaline bağlı
değildir. Düşük ayrıntılı örnekleme, bu istemin istediği metin deşifre etme
görevinde OCR doğruluğunu düşürdüğünden, açıklama çağrısının kendisi, gelen özgün
isteğin kullandığı ayrıntı düzeyinden bağımsız olarak her zaman yüksek ayrıntı
ister. Bu yalnızca dahili açıklama isteğinin gövdesini etkiler; OmniRoute'un
birincil istekte çağıranın kendi `image_url.detail` değerini nasıl ilettiğini
değiştirmez — bu varsayılan değer ayrı olarak ve yalnızca algılanan OpenCode
istemcileri için `defaultImageDetail()` içinde
(`open-sse/handlers/chatCore/upstreamBody.ts`) uygulanır. Açıklama öz döngüsünün
Anthropic kablo biçimi dalında `detail` alanı yoktur ve iki varsayılandan da
etkilenmez.

#### Açıklama çıktısı sınırı (`modalityBridgeVisionMaxChars`)

| Anahtar                        | Varsayılan | Aralık             |
| ------------------------------ | ---------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`        | `0` veya 100–50000 |

`0` (varsayılan), **sınır yok** anlamına gelir — `callVisionModel()` tarafından
döndürülen açıklama değiştirilmeden aktarılır ve mevcut davranış korunur.
100–50000 aralığındaki herhangi bir değer, açıklama tekrar
`[Image N]: <description>` olarak eklenmeden önce onu bir `…` son ekiyle
kısaltır (`src/lib/guardrails/visionBridge.ts` içindeki
`VisionBridgeGuardrail.preCall()`). Aşağı akış modelinin tam deşifreye ihtiyaç
duyduğu, ayrıntı yoğun OCR görevleri için bu değeri yükseltin; fazla konuşkan
görsel modellerde token kullanımını sınırlamak için düşürün. Pano alanı, Vision
sekmesinin Advanced panelinde bulunur (`ModalityBridgeVisionTab.tsx` içindeki
`modality-bridge-max-chars`) ve açıkça belirtilen `0` değerine dokunmadan 1 ile
99 arasındaki tüm değerleri alt sınır olan 100'e yükseltir — `0`, yalnızca
"ayarlanmamış" varsayılanı değil, kendi başına geçerli bir Zod değeridir
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`).

#### Açıklama önbelleği (`modalityBridge/bridgeCache.ts`)

Açıklama çıktıları için süreç genelinde paylaşılan, bellek içi LRU + TTL
önbelleği. Anahtar = uzunluk önekli çerçevelemeyle
`sha256(imageRef + composedPrompt + configuredBridgeModel)` (alan sınırı
çakışması yoktur). Model bileşeni, gerçekte yanıt veren model değil,
**yapılandırılmış** köprü modelidir — `callVisionModel` dahili olarak yedek
modele geçebilir ve her denemeye göre anahtarlama önbelleği parçalar. Başarısız
açıklamalar hiçbir zaman önbelleğe alınmaz. Ayarlar:

| Anahtar                         | Varsayılan | Aralık  |
| ------------------------------- | ---------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`     | —       |
| `modalityBridgeCacheTtlMinutes` | `60`       | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`      | 10–5000 |

#### Uzak görüntü normalleştirme (öz döngü açıklaması/base64 getirme)

Köprü bir **uzak** görüntüyü kendisi getirdiğinde — Anthropic açıklama öz çağrısı
ve claude kablo biçimi base64 dönüşümü (`ensureBase64ImagesForClaudeWire`);
bunların ikisi de `visionBridgeHelpers.ts` içindeki
`fetchRemoteImageAsDataUri()` aracılığıyla yapılır — elde edilen veri URI'si,
görsel model isteğine gömülmeden önce `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) üzerinden geçirilir. Aşırı büyük
görüntüler, OpenAI/Anthropic'in sunucu tarafında zaten uyguladığı yeniden
boyutlandırma sınırıyla eşleşecek şekilde **uzun kenarı 2048px** olacak biçimde
küçültülür; bu, görsel modelin gördüklerini değiştirmeden yükleme
baytlarını/gecikmesini azaltır. Yeniden boyutlandırma, dinamik içe aktarmayla
yüklenen `sharp` kullanır: yerel ikili dosyanın yüklenemediği bir platformda
`normalizeDataUri()` **hiçbir zaman hata fırlatmaz** — özgün baytları doğrudan
geçirmeye geri döner; böylece açıklama/base64 dönüştürme yolu her zaman çalışmaya
devam eder. Görüntü olmayan baytlar (kodu çözülebilir bir görüntü döndürmeyen bir
getirme işlemi) da değiştirilmeden aktarılır. Bu normalleştirme, köprünün kendi
öz çağrısı için getirdiği görüntülerle sınırlıdır — yalnızca açıkça etkinleştirme
durumunda değişiklik yapma ilkesiyle (Kesin Kural #20) tutarlı olarak, çağıranın
ham ve doğrudan aktarılan yüküne hiçbir zaman uygulanmaz.

#### Ayarlar şeması + geçiş

Yeni `modalityBridge*` anahtarları, `updateSettingsSchema` içinde
(`src/shared/validation/settingsSchemas.ts`) Zod doğrulamasından geçirilir:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCache*` üçlüsü ve Audio Bridge tarafından kullanılan
`modalityBridgeAudio*` grubu. `141_modality_bridge_settings.sql` geçişi, mevcut
eski `visionBridge*` değerlerini eşleşen yeni anahtarlara kopyalar (eşgüçlüdür ve
operatör tarafından ayarlanmış bir `modalityBridge*` değerinin hiçbir zaman
üzerine yazmaz); eski anahtarlar, bir sürüm döngüsü boyunca okuma geri dönüşü
olarak kabul edilmeye devam eder.

#### Şeffaflık başlığı + istatistikler

Açıklamayla dönüştürülmüş yanıtlar,
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
başlığını taşır (`modalityBridge/bridgeStats.ts` içindeki
`buildModalityBridgeHeader()` tarafından oluşturulur ve
`src/sse/handlers/chatHelpers.ts` içindeki `withModalityBridgeHeader()`
tarafından eklenir). Yeniden yönlendirilen istekler **hiçbir** başlık almaz —
yük değiştirilmemiştir ve model değişimi, yanıt gövdesindeki `model` alanında
zaten görünürdür.

`GET /api/modality-bridge/stats` (`GET /api/settings` ile aynı düzeyde yönetim
kimlik doğrulaması), `vision`, `audio` ve `video` için bellek içindeki modalite
bazlı `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` sayaçlarını döndürür.
`averageLatencyMs`, payda olarak tüm denemeleri değil `latencySamples` değerini
kullanır; zamanlaması olmayan bir işlem, sıfır milisaniyelik yapay bir örnek
oluşturmaz. `bridged`, başarılı dönüşümler için geriye dönük uyumlu takma ad
olarak kalır; başarısız denemeler bu değeri artırmaz.
Sayaçlar, tasarım gereği süreç yeniden başlatıldığında sıfırlanır
(muhasebe değil, telemetri).

#### Pano yapılandırması

Özel pano sayfası
`/dashboard/settings/modality-bridge` konumundadır. URL üzerinden adreslenebilen
`Vision`, `Audio` ve `Video` sekmeleri, `tab` değerini değiştirirken sorgu
parametrelerini korur. Vision sekmesi; etkinleştirme, mod, model seçimi (otomatik
varsayılan dâhil), göreve duyarlı istem oluşturma, gelişmiş zaman aşımı/görüntü/açıklama
uzunluğu/önbellek sınırları, çalışma zamanı sayaçları ve korumalı bir örnek istek
sunar. Audio sekmesi de aktiftir: etkinleştirme, Auto seçeneğine sahip yalnızca
STT modellerini içeren bir model seçici, zaman aşımı/maksimum klip sınırları, ses
sayaçları ve bir `input_audio` örnek testi sunar. Video sekmesi işlevseldir:
FFmpeg/ffprobe çalışma zamanı durumunu bildirir — dört açık UI durumundan biri
(inceleme sürerken veya tamamlanamadığında `unknown`, incelemenin istemci tarafında
atlandığı geri döngü olmayan bir pano ana makinesinde `restricted`, incelenip
eksik olduğu doğrulandığında `unavailable` ya da FFmpeg/ffprobe sürümleriyle
birlikte `available`) — etkinleştirme/model/kare/video/zaman aşımı sınırlarını
kalıcı hâle getirir, model seçiciyi görüntü yetenekli modellerle sınırlar ve
video sayaçlarını sunar.

AI ayarları altındaki eski Vision Bridge kartı artık yeni sayfaya yönlendiren
bir uyumluluk bağlantısıdır; formun ikinci bir kopyasını artık barındırmaz.
Media Providers ayrıca mevcut Speech-to-Text deneme alanını kaldırmadan
Image-to-Text ve Speech-to-Text iş akışlarını karşılık gelen Modality Bridge
sekmelerine bağlar.

**Kendi kendine döngü kabul atlaması:** açıklama çağrısı OmniRoute'un kendi
`/v1` geri döngüsü üzerinden yönlendirildiğinde (standart dışı sağlayıcı modeli),
alt istek `x-omniroute-admission-bypass: internal` gönderir ve çözümlenen geri
döngü kimlik bilgisiyle doğrulanır — yerel modda yerel `sk_omniroute` nöbetçi
değeri veya operatör tarafından yapılandırılan `OMNIROUTE_API_KEY` /
`ROUTER_API_KEY` ortam anahtarı (#1350); böylece `REQUIRE_API_KEY=true`
dağıtımları açıklama çağrısını çalıştırmaya devam edebilir. Atlama yalnızca tam
olarak bu kimlik bilgileri için kabul edilir; dolayısıyla harici istemciler kabul
denetimini atlamak için bu başlığı kullanamaz.

Eski varsayılanlar `src/shared/constants/visionBridgeDefaults.ts` dosyasında;
yeni mod/göreve duyarlı/önbellek varsayılanları ve ayar çözümleyicisi ise
`src/shared/constants/modalityBridgeDefaults.ts` dosyasında bulunur. Koruma
mekanizması, testlerin sahte `getSettings` ve `callVisionModel` uygulamaları
enjekte edebilmesi için bir `deps` kurucu seçeneği sunar.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Ses girdisini kabul ettiği bilinmeyen bir hedefe ulaşmadan önce ses içeren sohbet
isteklerini yakalar. Sohbet isteğini hiçbir zaman yeniden yönlendirmez: ses
parçaları, mevcut OpenAI uyumlu çok parçalı uç nokta aracılığıyla yazıya
dönüştürülür ve seçilen sohbet modeli metin dökümleriyle devam eder.

Akış:

1. `supportsAudio` değerini `getResolvedModelCapabilities()` aracılığıyla
   çözümleyin. Öncelik sırasıyla açık sağlayıcı kayıt defteri meta verileri,
   statik model meta verileri ve ardından eşitlenmiş `modalities_input` gelir.
   `audio` içermeyen, bildirilmiş bir girdi listesi `false` değeridir; hiçbir
   yetenek kanıtı olmaması `null` olarak kalır. Hem `false` hem de `null`,
   korumacı köprüyü etkinleştirirken `true` bunu atlar.
2. `modalityBridgeAudio*` ayarlarını çözümleyin ve paylaşılan
   `detectMediaParts()` algılayıcısı aracılığıyla her iletiden eklenip
   çıkarılabilir üst düzey ses parçalarını ayıklayın. Desteklenen aktarım
   biçimleri OpenAI `input_audio`, `audio_url` ve
   `source.media_type: "audio/*"` biçimleridir. İç içe geçmiş ses yönlendirme
   için algılanır ancak ekleme-çıkarma yolu tarafından kaldırılmaz. İş miktarı
   `modalityBridgeAudioMaxClips` ile sınırlandırılır; sonraki parçalar
   değiştirilmeden bırakılır.
3. Yapılandırılmış bir `provider/model` değerini kullanın veya
   `selectAudioBridgeModel()` işlevinin `AUDIO_TRANSCRIPTION_PROVIDERS`
   içinde kararlı katalog sırasıyla ilerleyip kullanılabilir etkin sağlayıcı
   kimlik bilgisine sahip ilk modeli seçmesine izin verin.
4. `callAudioTranscription()`, base64/data-URI sesini çok parçalı bir `file`
   biçimine dönüştürür veya uzak bir `audio_url` kaynağını DNS sabitleme ve
   25 MB sınırıyla, yalnızca genel erişime izin veren giden trafik koruması
   üzerinden indirir. Ardından dosyayı ve seçilen modeli, `resolveSelfLoopBearer()`
   ile kimlik doğrulaması yapılan yerel `/v1/audio/transcriptions` geri döngüsüne
   POST eder. Mevcut transkripsiyon rotası normal kimlik bilgisi aramasını,
   bekleme süresi/hız sınırı işlemeyi ve sağlayıcıya dağıtımı gerçekleştirir.
5. Başarılı çağrılar parçalarını `[Audio N]: <transcript>` ile değiştirir.
   Çağrılar `Promise.allSettled` ile çalışır: tekil bir başarısızlık ilgili
   özgün ses parçasını korur (#4012 sözleşmesi). Her çağrı başarısız olursa ve
   hedefin `supportsAudio === false` olduğu kanıtlanmışsa parçalar
   `[Audio N]: (unavailable — no STT provider connected)` olur (#8430
   sözleşmesi). Bilinmeyen bir hedefte (`null`), tümünün başarısız olduğu sonuç
   değiştirilmeden kalır. Kullanılabilir STT kimlik bilgisi olmayan ve yalnızca
   metin desteklediği kanıtlanmış bir hedef, ağ çağrısı yapılmadan aynı açık
   yer tutucuyu alır.

Başarılı transkripsiyonlar, süreç genelindeki Modality Bridge LRU/TTL önbelleğini
kullanır. Anahtar; ses referansını, kararlı `audio-transcription` işlem etiketini
ve seçilen STT modelini birleştirir; başarısızlıklar hiçbir zaman önbelleğe
alınmaz. Ses denemeleri paylaşılan `bridged`, `cacheHits`, `failures` ve
`lastUsedAt` sayaçlarını günceller. Dönüştürülen yanıtlar
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` taşır;
değiştirilmemiş istekler bir Audio Bridge segmenti almaz.

Çalışma zamanı ayarları DB desteklidir ve Zod ile doğrulanır:

| Anahtar                       | Varsayılan | Aralık                    |
| ----------------------------- | ---------- | ------------------------- |
| `modalityBridgeAudioEnabled`  | `true`     | —                         |
| `modalityBridgeAudioModel`    | `""`       | Otomatik veya STT kimliği |
| `modalityBridgeAudioTimeout`  | `60000`    | 1000–300000               |
| `modalityBridgeAudioMaxClips` | `3`        | 1–10                      |

Paylaşılan önbellek, `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` ve `modalityBridgeCacheMaxEntries` tarafından
denetlenmeye devam eder.

### Video Köprüsü (`videoBridge.ts`, `videoBridgePipeline.ts`)

Bilinen yerel video desteği olmayan bir hedef çağrılmadan önce Chat Completions
`messages` ve Responses API `input` içindeki üst düzey video parçalarına müdahale
eder. Desteklenen biçimler `input_video`, `video_url`, `video_source`, HTTPS
URL'leri ve `data:video/*;base64,...` veri URI'leridir. Metindeki düz dosya adları
video olarak değerlendirilmez.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`), istek üzerinde gezinme,
yetenek/politika denetimi, istek başına toplama ve yanıt yükünün yönetimini
üstlenir. Video başına yapılan işler — edinme, tüm sonuç önbelleği, bir kare
dizisinin açıklanması (çağrıyı yapan tarafından bildirilen ses dökümünü de
birleştirir) ve deneme başına metrikler/iptal/temizleme — `videoBridgePipeline.ts`
içindeki `processVideoPart` arkasında gizlenir ve `preCall` döngüsü içinde her
video parçası için bir kez çağrılır. Bu modül ayrıca açık port sınırları olan
`VideoMediaBrokerPort` (baytların edinilmesi ve örneklenmiş karelerin çıkarılması),
`VideoAudioTranscriptionPort` (çağrıyı yapan tarafından bildirilen ses dökümünün
örneklenmiş altyazılarla birleştirilmesi) ve `VideoDrilldownPort`'u (kare ayrıntılı
inceleme kalıcılığı sınırı; henüz `processVideoPart` ile bağlantılı değildir —
günümüzde ayrıntılı inceleme girdilerini yalnızca ayrı
`/api/modality-bridge/video/drilldown` rotası yazar) tanımlar.

Genel `/v1` istek yolu hiçbir zaman bir alt süreci içe aktarmaz veya çağırmaz.
Uzak videolar 50 MiB sınırı altında indirilir; satır içi base64 videolar için,
model/mesajlar/çerçeveleme zarfının 50 MiB'lik genel JSON istek kabul sınırı
içinde kalabilmesi amacıyla video başına kodu çözülmüş boyut için ihtiyatlı bir
36 MiB sınırı uygulanır. Satır içi uzunluk ve kodu çözülmüş boyut tahminleri,
bellek ayırmadan önce denetlenir. Mevcut, DNS sabitlemeli yalnızca-genel giden
bağlantı koruması kullanılarak ilk uzak URL'de ve her yönlendirmede HTTPS
zorunlu tutulur. Baytlar daha sonra tam olarak dahili
`POST /api/modality-bridge/video/extract` aracı sınırından geçer. Bu rota hem
`LOCAL_ONLY` hem de `SPAWN_CAPABLE` olup yalnızca süreç başına kimliği doğrulanmış,
güvenilir bir geri döngü isteğini kabul eder ve hiçbir zaman URL, dosya sistemi
yolu, yürütülebilir dosya veya bağımsız değişken listesi kabul etmez. API gövde
boyutu işlem hattı ve işleyicinin artımlı gövde okuyucusu, 50 MiB'lik aracı girdi
sınırını birbirinden bağımsız olarak uygular. Sınırlı kuyruğu aynı anda tek bir
çıkarma işlemi çalıştırır, bekleyen dört işe izin verir ve bekleyen girdiyi
100 MiB ile sınırlar.

Aracının içinde `ffprobe`, özel bir yerel dosyayı okur; sabit biçim izin listesi
oynatma listesi ve bildirim biçimlerini hariç tutar. İzin verilen MOV ailesi
kapsayıcılarında harici MOV veri başvuruları varsayılan olarak devre dışı kalır
ve sabit komut bunları etkinleştirmez. Hem `ffprobe` hem de `ffmpeg`, yalnızca
`file` protokolüne izin veren listeyi, tek iş parçacığını, sabit bağımsız değişken
dizilerini ve kabuksuz çalıştırmayı kullanır; yürütülebilir dosyalar `PATH`
üzerinden çözümlenir. Ekli resim kapak akışları oynatılabilir adaylar değildir.
Tüm oynatılabilir akışlar sınırları karşılamalıdır ve deterministik en düşük
indeksli geri dönüşten önce açıkça belirtilen varsayılan akış tercih edilir.
Videolar 600 saniye, boyut başına 8.192 piksel ve 33.554.432 kaynak piksel ile
sınırlıdır. FFmpeg, orta noktalardan 1–16 JPEG karesi örnekler, daha küçük
girdileri büyütmeden uzun kenarı en fazla 1.024 piksele küçültür ve hiçbir zaman
URL almaz. Örnekleme varsayılan olarak `uniform` değerindedir. İsteğe bağlı
`scene_aware` ve deneysel `segment_aware` politikaları, önceden doğrulanmış yerel
akış üzerinde ek bir sabit FFmpeg geçişi gerçekleştirir, sınırlı `showinfo`
sahne zaman damgalarını seçer ve algılayıcı hatası, zaman aşımı, hatalı biçimlenmiş
çıktı veya boş aday kümesi durumunda deterministik olarak aynı tekdüze orta
noktalara geri döner. Segment duyarlı mod, orta nokta örneklerini doğrulanmış
sahne aralıklarıyla orantılı olarak tahsis eder; segment duyarlı kanıtlar ve geri
dönüş davranışı aşağıda ayrıntılı olarak açıklanmıştır. Kesin 16 kare sınırı her
politikada seçimden sonra uygulanır. Sahne duyarlı bir isteğin yalnızca tek
karelik bütçesi olduğunda, etkin tam video veya odak penceresinin tekdüze orta
noktasını kullanır ve `policyEffective: uniform` bildirir: seçilen tek bir sahne
karesi zamansal olarak her iki ucu da koruyamaz. Çağrıyı yapan taraf isteğe bağlı
olarak sonlu bir odak penceresi (`start`/`end` saniye) sağlayabilir; sınırlar
medya süresiyle kısıtlanır, ters çevrilmiş veya sonlu olmayan pencereler reddedilir
ve tüm örnekleme politikaları yalnızca normalleştirilmiş aralık içinde
gerçekleştirilir. Ortaya çıkan pencere, aşağı akış modellerinin odaklanılmış bir
kesiti tam zaman çizelgesinden ayırt edebilmesi için örnekleme meta verilerine ve
güvenilmeyen açıklama ön ekine dahil edilir.

Anlamsal altyazı odağı ayrı ve açık bir ayardır. Varsayılan `full` analiz modu,
mevcut kare istemini korur ve istek metnini hiçbir zaman altyazı modeline
iletmez. `focused` modunda köprü, aynı Chat veya Responses kapsayıcısından yalnızca
kullanıcı tarafından yazılmış en son boş olmayan `text`/`input_text` değerini
okur, bunu NFC biçimine normalleştirir, denetim karakterlerini ve boşlukları
daraltır ve 500 Unicode kod noktasıyla sınırlar. Boş bir sonuç, tam olarak `full`
istemine geri döner. Kullanılabilir bir ipucu, ayrılmış bir güvenilmeyen kullanıcı
bağlamı bloğunda JSON olarak serileştirilir ve yalnızca gözlemlenebilir ayrıntılara
öncelik verebilir; medyada görülen veya duyulan talimatlara uyulmaması yönündeki
ayrı uyarıyı geçersiz kılamaz. Metinsel odak hiçbir zaman `start`/`end` değerlerini
çıkarımlamaz veya zamansal örnekleyiciyi değiştirmez.

#### FU-07 yapısal segment kanıtı

`segment_aware`, önceden doğrulanmış yerel video akışı üzerinde tek bir sınırlı ön analiz geçişi kullanır. Sabit filtre zinciri önce genişliği en fazla 320 piksel olacak şekilde ölçeklendirir, sahne değişikliklerini ve donmuş aralıkları algılar, ardından bulanıklık, ortalama luma ve uzamsal/zamansal bilgi için saniyede 1 kare örnekler. Geçiş; 600 yapısal örnekle, bir FFmpeg/filtre iş parçacığıyla, aynı yalnızca `file` protokolü ve kapsayıcı izin listeleriyle, 1 MiB işlem çıktısı sınırıyla ve broker'ın paylaşılan iptal/son tarih süresi içinde en fazla 30 saniyeyle sınırlıdır. İstekten hiçbir zaman komut, filtre, yol veya URL kabul etmez.

Yapısal değerler, anlamsal video anlayışı değil, deterministik örnekleme kanıtlarıdır. Özneleri, eylemleri, altyazıları, konuşmayı veya kullanıcı niyetini çıkarmazlar. Sahne ve donma sınırları segmentleri oluşturur; donma kapsamı, bulanıklık, pozlama, uzamsal ayrıntı ve zamansal değişim yalnızca mevcut 1–16 karelik bütçenin nasıl tahsis edileceğini etkiler. Tamamen donmuş bir segment en fazla bir kareyle sınırlandırılırken donmamış segmentler kalan bütçe için yarışır. Sınırların sayısı karelerin sayısını aştığında, hızlı erken kesmelerin uzun bir sondaki segmenti gizleyememesi için zaman çizelgesi boyunca eşit dağılım korunur. Bir donma sınırının 1 saniyelik analiz çözünürlüğü içinde kalan sahne sınırları birleştirilir.

Eksik filtreler, hatalı biçimlendirilmiş/boş kanıt, algılayıcı hatası veya sınırlı ön analiz zaman aşımı durumunda sistem, tam olarak tekdüze orta nokta politikasına açık biçimde geri döner. Çağıran tarafın iptali veya broker son tarihi bu geri dönüşü tetiklemez: devam eden alt işlemi sonlandırır, sonraki kare çıkarımını önler ve özel geçici ağaç `finally` içinde kaldırılır.

`scripts/perf/video-bridge-fu07-eval.ts`; tekilleştirme sonrası altyazı çağrısı tasarrufları, yoğun hareket bütçesi tahsisi, bulanıklık/pozlama/SI-TI kanıtı, uzun kuyruklu hızlı kesmeler ve kademeli solma yanlış pozitifleri için deterministik gerçek FFmpeg düzenekleri oluşturur. Ön analiz duvar saati süresini ve `/usr/bin/time` kullanılabildiğinde alt işlem CPU kullanımını ve en yüksek RSS değerini kaydeder. Kalite kontrolleri yalnızca yapısal doğrulayıcılardır. Bu test düzeneğinin yetkilendirilmiş bir uç noktası veya dondurulmuş bir değerlendiricisi olmadığından gerçek altyazı modeli kalitesi `HOLD` durumunda kalır. `--caption-cost-per-call-usd` açıkça pozitif bir çağrı başına maliyet tahmini sağlamadıkça parasal tasarruflar da `HOLD` durumunda kalır; betik bu sonuçlardan hiçbirini uydurmaz.

Her kare 4 MiB ile, tüm ham kareler birlikte 23 MiB ile ve serileştirilmiş broker yanıtı 32 MiB ile sınırlıdır. Özel bir geçici dizin `finally` içinde kaldırılır. OmniRoute, FFmpeg'i paketine dahil etmez ve özel bir yürütülebilir dosya yolu kabul etmez. Altyazı oluşturmadan önce köprü, ihtiyatlı bir görsel tekilleştirme geçişi uygular: her JPEG, 16×16 gri tonlamalı bir arabelleğe indirgenir ve yalnızca en son tutulan kareyle karşılaştırılır. Bir karenin üzerindeki istenen altyazı bütçesi için çıkarım, bu bütçenin en fazla iki katı olan ve hiçbir zaman 16 kareyi aşmayan sınırlı bir aday havuzu sağlar. İstenen üst sınır yalnızca tekilleştirmeden sonra uygulanır; bütçe en az iki olduğunda son seyreltme sırasında seçilen ilk ve son adaylar korunur. Sürümlendirilmiş `grayscale-16x16-mean-cells-v2` politikası, ortalama luma farkı ile normalize edilmiş farkı en az 0.05 olan küçük resim hücrelerinin oranından daha büyük olanını kullanır. Yinelenen öğe eşiği, çalışma zamanı ayarı olarak sunulmak yerine öngörülebilirlik amacıyla seçilmiş 0.04 sabitidir. Bu ikincil yüksek kontrastlı sinyal, yalnızca ortalamaya dayalı bir karşılaştırmanın gizleyebileceği küçük hareketleri ve görünür metin değişikliklerini korur. Karşılaştırıcı veya kod çözücü hataları açık biçimde geri döner ve kapsamı korur. Çıktı meta verileri; çıkarılan adayları, başarıyla kullanılan kareleri ve elenen görsel yinelenenleri ayrı ayrı gösterir.

Açıkça işaretlenmiş bir video bölümü, zaman damgalı bir kontak sayfası isteyebilir. Köprü, en fazla 4 sütunlu ve 16 kareli bir JPEG ızgarası oluşturur. 512 piksellik her hücre, kaynak zaman damgasını yüksek kontrastlı bir alt banda işlerken aynı zaman damgaları aşağı akış ilişkilendirmesi ve denetimi için metinsel meta verilerde tutulur. Eksiksiz JPEG, 32 MiB ile sınırlı kalır. `sharp` ızgaranın kodunu çözemez veya ızgarayı oluşturamazsa köprü ayrı JPEG karelerine geri döner; istemci iptali yine de sayfa işlemi boyunca yayılır.

Yükseltme kanıtı, sentetik birleştirme mikro karşılaştırmalı değerlendirmesinden kasıtlı olarak ayrı tutulur. `scripts/perf/video-bridge-contact-sheet-eval.ts`, gerçek OpenAI uyumlu görsel modeller için şema sürümlü bir A/B test düzeneği tanımlar. Sağlayıcı tarafından bildirilen token'ları, uçtan uca duvar saati gecikmesini (sayfa birleştirme dahil), model çağrısı sayısını ve manifestte tanımlanan olgu korunumunu ölçer. Ham model yanıtları rapora yazılmaz; yalnızca SHA-256 özetleri ve eşleşen olgu kimlikleri saklanır. `--execute-real` aktarılmadıkça ve `--model`, `OMNIROUTE_BASE_URL` ile `OMNIROUTE_API_KEY` yapılandırılmadıkça test düzeneği hiçbir ağ veya ücretli model çağrısı yapmaz. Bu açık gerçek çalıştırma olmadan makine tarafından okunabilir kararı `HOLD` olarak kalır; sentetik yük/çağrı sayısı ölçümleri tek başına yükseltme kanıtı değildir.

Çağıranlar, önceden hizalanmış metne sahip olduklarında desteklenen bir video bölümüne isteğe bağlı bir `transcript.cues` dizisi ekleyebilir. Her ipucu; `text`, incelenen süre içinde sonlu bir `start`/`end` aralığı ve izin listesindeki bir `source` (`client`, `embedded` veya `audio-bridge`) taşımalıdır; `confidence` varsayılan olarak `1` değerini alır ve `0` ile `1` arasında kalmalıdır. Tam olarak yinelenen ipuçları birleştirilir. OmniRoute bu meta verilerden hiçbir zaman transkripsiyon başlatmaz: doğrulanan ipuçları kaynak, güven ve aralık bilgileriyle birlikte açıklanan sonuca kopyalanır ve kare altyazılarının yanında güvenilmeyen gözlemler olarak işlenir. Geçersiz, aralık dışı veya kaynağı belirtilmemiş metin, altyazı akışına karıştırılmak yerine reddedilir. `source` alanı şu anda sunucu tarafından doğrulanmış değil, çağıran tarafından beyan edilmiştir: OmniRoute değerin izin verilen üç dizeden biri olmasını zorunlu kılar ancak `embedded` veya `audio-bridge` etiketinin gerçekten sunucunun sahip olduğu bir çıkarımdan geldiğini henüz kriptografik olarak doğrulamaz. Bu doğrulama kullanıma sunulana kadar `source` alanını güvenilmeyen bir ipucu olarak değerlendirin; yetkilendirme kararlarını buna dayandırmayın.

İleri düzey bir çağıran, aynı video için önceden yetkilendirilmiş bir
`audioTranscript` izi sağlayabilir. Birleştirme katmanı, görsel ve işitsel
gözlemleri tek bir son tarih ve iptal sinyali altında çalıştırır, bunları ortak
bir zaman çizelgesinde sıralar, tamamen aynı olanları birleştirir ve yalnızca
bir taraf başarılı olduğunda kısmi bir sonuç bildirir. Geçersiz bir
`audioTranscript`, tüm videonun başarısız olmasına neden olmak yerine bu kısmi
sonuca indirgenir — görsel açıklama korunur ve ses dalı temizlenmiş bir hata
kodu kaydeder. Dal bazında kullanılabilirlik, kısmi bayrağı ve temizlenmiş hata
kodları; açıklanan sonuçta, koruma mekanizması meta verilerinde
(`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), sonuç önbelleği meta verilerinde ve köprü
birleştirme sayaçlarında korunur. Varsayılan Video Bridge yolu konuşmayı metne
dönüştürmeyi çağırmaz veya ikinci bir medya kopyası indirmez; bu açık iz
olmadan yalnızca video olarak kalır.

**Transkript saklama (#12150 P1).** Bu, Video Bridge (kendisi isteğe bağlıdır)
bir transkript ipucu oluşturduğunda otomatik olarak uygulanır — ayrı bir
saklama bayrağı yoktur. Bir istek herhangi bir transkript ipucu (çağıran
tarafından belirtilen bir `transcript` veya birleştirilmiş bir
`audioTranscript`) oluşturduğunda, koruma mekanizması bunu
`videoBridgeObserved` olarak işaretler ve video açıklamasının sansürlenmiş bir
gölge kopyasını üretir — her ipucunun serbest metin gövdesinin
`[redacted-video-transcript]` ile değiştirildiği özdeş bir oluşturma; bu kopya,
dize birleştirilmeden önce yapılandırılmış ipucu alanı değiştirilerek oluşturulur
(düzleştirilmiş metin hiçbir zaman ayrıştırılmaz; böylece kötü niyetli veya
sıradan hiçbir ipucu içeriği, `]` içeren `[inaudible]`/`[music]` gibi gövdeler
dâhil, korunamaz). Kalıcı çağrı günlüğü istek gövdesi, her video kaynaklı metin
bölümünü içerik eşitliğine göre eşleştirilen bu sansürlenmiş gölgeyle değiştirir;
`fullText` sabiti, tamamlanmış çağrı öncesi koruma mekanizması yükünden yeniden
okunur; böylece sonraki zincir koruma mekanizmaları (öncelikleri 10/95 olan PII
ve kimlik bilgisi maskeleyicileri) açıklama metnini yerinde yeniden yazdıktan ve
sistem istemi/devir/bellek ekleme işlemleri mesaj dizisini yeniden
şekillendirdikten sonra da eşleşme başarılı olur. Modele yukarı akışta gönderilen
gövde değişmez. Gözlemlenen bir istek ayrıca hiçbir kalıcı Memory verisi
oluşturmaz (hem istekten hem de yanıttan türetilen çıkarma atlanır); dolayısıyla
modelin kendi yanıtı transkript metnini Memory içine yansıtamaz.

**Ham video alanları (#12430).** Köprü etkinleştirildiğinde ve yerel video desteği bilinmediğinde veya mevcut olmadığında, tanımlı `transcript`/`audioTranscript` alanları, açıklama başarısızlığından veya bir `maxVideos` sınırından sonra bile `videoBridgeObserved` özelliğini etkinleştirir. `null` ve boş dizeler hesaba katılır; mevcut olmayan alanlar ve video dışı meta veriler hesaba katılmaz. Saklanan kopyalarda bu alanlar sansürlenir veya istek atlanır; önbellekler/Memory devre dışı bırakılır. Sağlayıcı yükü değişmeden kalır.

Saklanan ek kopyalar aynı gözlemlenen istek sinyalini kullanır. Koruma mekanizması
öncesindeki ham istemci isteği anlık görüntüsü, bellekteki bekleyen istek ve erken
reddedilen istek günlüğü, video bölümlerindeki transkript alanlarını yapısal
olarak değiştirir; işlem hattı aşamaları ve bağlam devri tarafından oluşturulan
dize istemleri, kalıcı istek gövdesi hedefinde sansürlenir. Kalıcı
`video_content_removed` işaretçisi, `previous_response_id` devamının kasıtlı
olarak atılmış metni yeniden oluşturması yerine güvenli biçimde başarısız olmasını
sağlar. Gözlemlenen bir istek, günlük kaydından önce bölüm bazındaki sansürleme
gölgesini kaybederse veya birkaç video gölgesinden yalnızca biri bile sonraki
istek değişikliklerinden sonra eşleşemezse, kısmen sansürlenmiş bir transkripti
saklamak yerine saklanan istek gövdesinin tamamı atlanır.

Gözlemlenen bir istekte model yanıtı, yapılandırılmış bir ipucu sınırı olmadan
transkriptin herhangi bir bölümünden alıntı yapabilir. Bu nedenle kalıcı çağrı
günlüğündeki `responseBody` bir atlama işaretçisiyle değiştirilir; ayrıntılı işlem
hattı yapıtı (yukarı akış/istemci gövdelerini ve akış parçalarını içerebilir)
saklanmaz. Semantik, eşgüçlülük ve akıl yürütme yeniden oynatma önbellekleri, bu
istek için okuma ve yazma işlemlerini atlar. Sağlayıcı isteği ve istemcinin
görebildiği yanıt değişmeden kalır. Ayrıntılı yapıt atlandığında erken keepalive
baytları geçici arabellekten boşaltılır. Kiro'nun hatalı biçimlendirilmiş
EventStream uyarısı yalnızca yükün bayt sayısını bildirir; yükün içeriğini veya
JSON ayrıştırıcısının ham hatasını hiçbir zaman bildirmez.
Bu, ilgisiz tüm sağlayıcı/eklenti tanılamalarının denetlendiği anlamına gelmez;
daha kapsamlı kalıcı hedef taraması #11658 kapsamında izlenmektedir.

Dâhilî `/api/modality-bridge/video/drilldown` yaşam döngüsü ayrı, geri
döngü/token kimlik doğrulamalı bir önbellek altyapısıdır. Her işlem ayrıca
standartlaştırılmış, opak bir asıl kimliği gerektirir. Bir üretim çağıranı
etkinleştirilmeden önce, bu kimliği kimliği doğrulanmış kiracıdan türetmeli ve
istemci tarafından seçilmiş bir değeri hiçbir zaman iletmemelidir. Önbellek
anahtarları bu asıl kimliği standartlaştırılmış oturum ve video referans
kimliklerine bağlar, yalnızca bunların SHA-256 ile türetilmiş anahtarlarını
saklar ve hem okumaları hem de silme işlemlerini aynı asıl kimlikle sınırlar.
Önbellek, giriş başına en fazla 16 türetilmiş JPEG karesi saklar, bunların
süresini on dakika sonra doldurur ve sınırlandırılmış `start`/`end` okumalarını
veya açık oturum silme işlemini destekler.

Her asıl kimlik 16 giriş ve 64 MiB standartlaştırılmış JPEG verisiyle
sınırlandırılır. Bu sınırlar, genel 64 giriş/256 MiB tavanından bağımsızdır:
asıl kimlik kotası baskısı, genel LRU tahliyesi değerlendirilmeden önce yalnızca
ilgili asıl kimliğin en uzun süredir kullanılmayan girişlerini tahliye eder.
Süresi dolmuş girişler, önbellek etkinliği sırasında hem asıl kimlik hem de
genel hesaplamadan temizlenirken iptal ve doğrulama hataları kısmi bir değiştirme
işlemini kaydetmez.

Önbellek; kanonik olmayan Base64'ü, fazla dolguyu, JPEG olmayan medyayı, hatalı biçimlendirilmiş veya kesilmiş JPEG'leri ve sınırlandırılmış tam görüntü `sharp` kod çözme işlemi sırasında uyarı üreten JPEG'leri reddeder. Kabul edilen her görüntüyü kanonik bir JPEG olarak yeniden kodlar, genişlik ve yüksekliği çağıranın sağladığı alanlara güvenmek yerine kodu çözülmüş baytlardan türetir ve sondaki çok biçimli dosya baytlarını saklamak yerine atar. Her iki kotaya da yalnızca sınırlandırılmış kanonik sıkıştırılmış arabellek yansıtılır. JSON aktarım sınırı, 32 MiB kodu çözülmüş girdi tavanı için Base64 ek yükünü içerir. Depolanan her türetim; doğrulanmış JPEG biçimini/çözünürlüğünü, örnekleme politikasını, türetim sürümünü, oluşturulma zamanını, sunucu tarafından hesaplanan içerik karmasını ve karmalanmış üst öğe referansının yanı sıra güvenilir çağıranın üst öğe içerik karmasını kaydeder. İptal durumu, atomik önbellek işlemesi öncesinde eşzamansız kod çözme/karma aşamaları arasında kontrol edilir.

Bu dilim henüz üretim ortamındaki bir üreticiyi rotaya bağlamaz ve çoklu çözünürlüklü varyant seçimi sağlamaz. Bu nedenle şeffaf Video Bridge istek yolu ek iş yükü oluşturmaz; kiracıya bağlı sorumlu türetimi ve FU-08 çoklu çözünürlük yaşam döngüsünün tamamı ise tamamlanmış davranış olarak belgelenmek yerine açık takip çalışmaları olarak kalır.

Karelere, yapılandırılmış Video modeliyle sıralı olarak açıklama eklenir. Boş bir Video geçersiz kılma değeri Vision ayarını devralır; ikisi de boşsa Vision otomatik yönlendiricisi, kullanılacak görüntü işleme özellikli modeli seçer. Başarılı açıklamalar, özgün parçayı sabit bir `[Video description:` önekiyle değiştirir; bu önek ayrıca metni, güvenilmeyen ve medyadan türetilmiş bir gözlem olarak işaretler ve sonraki modellere medyada bulunan talimatları izlememelerini söyler. Kare açıklaması önbellek anahtarları JPEG baytlarını, istemi, zaman damgasını ve kullanılacak modeli içerir; yalnızca başarılı açıklamalar önbelleğe alınır. Önbellek girdileri, yedek model dâhil olmak üzere gerçekten başarıyla üretim yapan modeli saklar; kareler farklı modeller tarafından üretildiğinde köprü `mixed` bildirir. Bir önbellek isabeti, üretici kimliğini istenen yönlendirme planı olarak yeniden etiketlemek yerine bu kimliği yeniden kullanır. Tüm video sonucu önbelleğinin anahtarı, çıktıyı değiştiren her girdiyi kapsar: istem, kullanılacak model, örnekleme politikası, kare sayısı, semantik analiz modu, normalleştirilmiş odak ipucunun SHA-256 parmak izi, odak penceresi, `transcript`, `audioTranscript` ve kontak sayfası bayrağı. Dolayısıyla bu boyutlardan herhangi birinin değiştirilmesi hiçbir zaman eski bir sonucun yeniden kullanılmasına değil, önbellek ıskalamasına yol açar. Görsel yinelenenleri kaldırma politikası sürümü, eşiği ve sınırlandırılmış aday kare sayısı da sonuç önbelleği anahtarında ve meta verilerinde açıkça bulunur; dolayısıyla bir politika değişikliği, eski bir tüm video açıklamasını yeniden kullanamaz. Sonuç önbelleği v4 meta verileri modu ve parmak izini saklar, ham kullanıcı görevini asla saklamaz. Koruma mekanizması meta verileri hem istenen hem de kullanılacak analiz modunu bildirir; kullanılabilir kullanıcı metni olmadan istenen `focused` modu, etkin olarak `full` şeklinde bildirilir.

Koruma mekanizması desteklenen tüm video parçalarını çıkarır ancak `modalityBridgeVideoMaxVideos` sayısından fazlasını açıklamaz. `supportsVideo === false` olduğu kanıtlanmış bir hedef için başarısız ve sınırı aşan videolar, hiçbir ham videonun kalmaması amacıyla açık güvenli metin işaretlerine dönüştürülür. Yetenek bilinmediğinde bu parçalara dokunulmaz. `supportsVideo === true` olan hedefler köprüyü atlar. İstemci isteği iptal sinyali indirme, aracı kuyruğu, alt süreçler ve açıklama çağrıları boyunca iletilir; iptaller videolar arasında işlemi durdurur ve hiçbir zaman ham medyaya açık kalacak şekilde başarısız olmaz.

Çalışma zamanı ayarları veritabanı desteklidir ve Zod ile doğrulanır:

| Anahtar                             | Varsayılan  | Aralık / davranış                                                                                                |
| ----------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | İsteğe bağlı çalışma zamanı, kullanıcı tercihine bağlı etkinleştirme                                             |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` genel açıklamaları korur; `focused`, sınırlandırılmış ve güvenilmeyen en son kullanıcı bağlamını kullanır |
| `modalityBridgeVideoModel`          | `""`        | Vision Bridge modelini devralır                                                                                  |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                             |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` veya orantılı `segment_aware`; algılayıcı hatası durumunda `uniform` kullanılır         |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                              |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                   |

Kalıcı olarak saklanmış, 120 saniyenin üzerindeki eski Video zaman aşımı değerleri aracı son tarihine sınırlandırılır; bu sınırın üzerindeki yeni ayar yazma işlemleri reddedilir. `GET /api/modality-bridge/video/runtime`, kimlik doğrulama veya çalışma zamanı yoklamasından önce güvenilir ve damgalanmış geri döngü yerelliği, ardından yönetim kimlik doğrulaması gerektirir. Yalnızca `available`, temizlenmiş FFmpeg/ffprobe sürümleri ve çalışma zamanı kullanılamadığında sabit bir neden döndürür. Dahili ayıklama uç noktası herkese açık bir yükleme API'si değildir: kuyruk doygunluğu `503` ile birlikte `Retry-After`, çağıran bağlantısının kesilmesi `499` ve sabit aracı son tarihi `504` döndürür. Dönüştürülmüş yanıtlar, Vision veya Audio segmentlerini kaldırmadan merkezi `x-omniroute-modality-bridge` başlığına `video->text;model=<visionModel>;parts=<videos>` ekler.

### PII Maskeleyici (`piiMasker.ts`)

**Her iki** aşamada da çalışır.

- **`preCall`** yükü klonlar; `system`, `messages`, `input` ve
  `prompt` alanlarını (düz dize öğeleri dâhil) dolaşır ve dize türündeki
  `content`/`text` alanlarına (`@/shared/utils/inputSanitizer` kaynağındaki)
  `processPII()` işlevini uygular. `PII_REDACTION_ENABLED=true` olduğunda,
  tespit edilen PII, giden yükte maskelenir. Bu davranış,
  `INPUT_SANITIZER_MODE` ayarından bağımsızdır (bu ayar yalnızca prompt
  enjeksiyonu politikasını denetler). Maskeleme kapalı olduğunda çağrı, içeriği
  yeniden yazmadan tespit sayılarını kaydeder.
- **`postCall`** yanıtı derinlemesine klonlar, `sanitizePIIResponse()` ile
  Responses API biçimi maskeleyicisini (`maskResponsesOutput` —
  `output_text` ve `output[].content[].text` alanlarını kapsar) çalıştırır.
  Herhangi bir maskeleme gerçekleşirse değiştirilmiş yanıt, özgün yanıtın
  yerini alır.

Koruma mekanizması hiçbir zaman engelleme yapmaz; yalnızca açıklama bilgisi
ekler (`meta.detections`, `meta.redacted`) veya içeriği yeniden yazar.

### Prompt Enjeksiyonu (`promptInjection.ts`)

Kullanıcı tarafından sağlanan içerikteki saldırgan yapıları tespit eder ve
yapılandırılmış politikayı uygular. Davranış, ortam değişkenleri ve constructor
seçenekleri tarafından belirlenir:

| Ayar            | Ortam değişkeni                                                                                             | Varsayılan | Etki                                                                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Etkin           | `INPUT_SANITIZER_ENABLED`                                                                                   | `true`     | `false` olduğunda koruma mekanizması kısa devre yapar.                                                                                                                                                           |
| Mod             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                             | `warn`     | Enjeksiyon politikası: `block`, `warn` veya `log`. (`redact`, geriye dönük uyumluluk için kabul edilir ancak enjeksiyon metnini **kaldırmaz**; istek PII yeniden yazımı `PII_REDACTION_ENABLED` ile denetlenir.) |
| Engelleme eşiği | `blockThreshold` seçeneği / `INPUT_SANITIZER_BLOCK_THRESHOLD` (`INJECTION_GUARD_BLOCK_THRESHOLD` diğer adı) | `high`     | Engelleme için gereken minimum önem derecesi. Varsayılan ayarda orta önem derecesi yalnızca gözlemlenir.                                                                                                         |

**Mod önceliği** (`getMode`): çağıranın `options.mode` değeri →
`INJECTION_GUARD_MODE` **DB özellik bayrağı geçersiz kılması** (Dashboard →
Settings → Feature Flags) → `INJECTION_GUARD_MODE` ortam değişkeni →
`INPUT_SANITIZER_MODE` ortam değişkeni → `warn`. Bu nedenle Dashboard üzerinden
yapılan bir geçersiz kılma, ortam değişkenlerine göre önceliklidir; dolayısıyla
Feature Flags kullanıcı arayüzü, çalışan korumayı canlı olarak denetler (yeniden
başlatma gerekmez). DB okuması güvenli biçimde başarısız olur: hata oluşursa
koruma, ortam değişkenlerine dayalı davranışa geri döner; geçersiz kılma
ayarlanmadığında ise davranış yalnızca ortam değişkenleriyle yapılan çözümlemeyle
aynıdır.

Tespit kaynakları:

1. `@/shared/utils/inputSanitizer` kaynağındaki `sanitizeRequest()` (işlem
   hattının başka yerlerinde de kullanılan ortak tespit kümesi).
2. Yerleşik `DEFAULT_GUARD_PATTERNS` (şu anda `system_override_inline` ve
   `markdown_system_block`; her ikisinin önem derecesi de `high`).
3. Constructor seçenekleri aracılığıyla iletilen isteğe bağlı `customPatterns`
   (dizeler, düzenli ifadeler veya `{ name, pattern, severity }` kayıtları).

`mode === "block"` olduğunda **ve** en az bir tespit önem derecesi eşiğini
karşıladığında `preCall`, `{ block: true, message: "Request rejected:
suspicious content detected" }` döndürür. `warn`/`log` modlarında koruma
mekanizması günlük kaydı oluşturur ancak çağrıya izin verir. Ortak yardımcı
`evaluatePromptInjection()`, kayıt defterini kullanmadan prompt'ları
değerlendirmesi gereken çağıranlar için de dışa aktarılır.

**Tarama sınırı (v3.8.20):** tespit mekanizması, birleştirilmiş prompt metninin
yalnızca **ilk 16 KB** bölümünü inceler —
`src/shared/utils/inputSanitizer.ts` içindeki
`MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bayt). Hem `detectInjection()`
hem de `evaluatePromptInjection()`, desen döngüsünü çalıştırmadan önce
`slice(0, MAX_INJECTION_SCAN_BYTES)` uygular. Enjeksiyon yönergeleri bir girdinin
başlarına yakın yer aldığından bu, tespit kabiliyetini zayıflatmadan yüzlerce
KB'lık yüklerde regex CPU/GC kullanımını sınırlar (bkz. #3932, #4041).

### Kimlik Bilgisi Maskeleyici (`credentialMasker.ts`)

Varsayılan zincirin sonunda (öncelik `95`) **her iki** aşamada da çalışır. İyi
bilinen API anahtarı / gizli belirteç desenlerini hem giden yükten (mesaj
içeriği, araç çağrısı argümanları, araç sonuçları) **hem de** sağlayıcı
yanıtından maskeler; böylece bir prompt'a yapıştırılan (veya bir araç sonucu
tarafından geri yansıtılan) kimlik bilgileri üst sağlayıcıya ya da istemciye
sızdırılmaz.

- **Yalnızca isteğe bağlı**, PII redaksiyonuyla aynı kural (Kesin Kural #20 ile bağlantılı):
  `settings.credentialRedactionEnabled === true` **veya**
  `CREDENTIAL_REDACTION_ENABLED=true` olmadığı sürece devre dışıdır. Devre dışıyken koruma önlemi hiçbir işlem yapmaz —
  hiçbir zaman engellemez veya yeniden yazmaz.
- `redactCredentials()`, yük/yanıt ağacının tamamını dolaşır (`walkValue()`,
  prototip kirletmeye karşı güvenli, `WeakSet` aracılığıyla döngülere karşı güvenli) ve eşleşmeleri
  `[REDACTED:<type>]` yer tutucusuyla değiştirerek yalnızca gerçekten
  değişen dalları klonlar.
- `CREDENTIAL_PATTERNS`; LLM sağlayıcı anahtarlarını (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS belirteçlerini (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ödeme anahtarlarını (Stripe, Square), bulut
  anahtarlarını (AWS erişim anahtarı, Twilio, SendGrid, Mailgun), özel anahtarları / JWT'leri,
  kimlik bilgisi içeren bağlantı dizelerini (`mongodb://user:pass@...` vb.) ve
  genel bir `Authorization`/`x-api-key`/`api-key`/`apikey` üstbilgi değeri
  desenini kapsar. Üstbilgi biçimindeki anahtarlar (`authorization`, `x-api-key`, `api-key`,
  `apikey`), genel metin regex'i aracılığıyla değil, yapısal olarak (yalnızca değer;
  `Bearer `/`Basic ` gibi şema öneki korunarak) redakte edilir.
- Koruma önlemi hiçbir zaman engellemez; yalnızca yeniden yazar (`modifiedPayload` /
  `modifiedResponse`) ve ek açıklama ekler (`meta.credentialsRedacted`, `meta.count`).

Regresyon koruması: `tests/unit/credential-masker-guardrail.test.ts`.

## Temel Sözleşme (`base.ts`)

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
  block?: boolean; // true, zinciri kısa devre yapar (short-circuit)
  message?: string; // engelleme durumunda gösterilir
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // isteği yeniden yazmak için preCall tarafından döndürülür
  modifiedResponse?: TValue; // yanıtı yeniden yazmak için postCall tarafından döndürülür
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

Bir güvenlik koruması (guardrail), `void`, `{}` veya `{ block: false }` döndürerek "değişiklik yok" sinyali verir. Bir `modifiedPayload`/`modifiedResponse` döndürmek, sonraki güvenlik korumaları için zincir boyunca akan değerin yerini alır. `signal?: AbortSignal`, çağrıcı yaşam döngüsünü güvenlik korumalarına taşır. İstek iptali, kasıtlı bir hataya açık (fail-open) istisnadır: medya köprüleri, ham medyayı desteklemediği bilinen bir hedefe geri yüklemeden çalışmaları durdurur ve temizlik yapar.

## Kayıt Defteri (`registry.ts`)

Singleton `guardrailRegistry` şunları sunar:

- `register(guardrail)` — bir güvenlik koruması ekler (veya normalleştirilmiş ada göre değiştirir) ve artan `priority` değerine göre yeniden sıralar.
- `clear()` / `list()` — yönetimsel yardımcılar.
- `runPreCallHooks(payload, context)` — etkin güvenlik korumaları üzerinden yinelenir, yükü (`payload`) `modifiedPayload` aracılığıyla aktarır ve ilk `block: true` değerinde durur.
- `runPostCallHooks(response, context)` — yanıt tarafında aynı akış.
- `resetGuardrailsForTests({ registerDefaults })` — temiz test izolasyonu için durumu temizler ve isteğe bağlı olarak varsayılanları yeniden kaydeder.

Her iki çalıştırıcı da `results` alanının izleme için yararlı olan her güvenlik korumasına ait `blocked`, `skipped`, `modified`, `error` ve `meta` alanlarını içeren `GuardrailExecutionResult` kayıtlarından oluşan bir dizi olduğu `{ blocked, payload|response, results, guardrail?, message? }` nesnesini döndürür.

### İstek Başına Güvenlik Korumalarını Devre Dışı Bırakma

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })`, mevcut istek için atlanması gereken güvenlik koruması adlarının tekilleştirilmiş (de-duplicated) bir listesini toplar. Kaynaklar (tümü isteğe bağlı, tümü birleştirilir):

- `apiKeyInfo.disabledGuardrails`
- İstek gövdesi `disabledGuardrails` (en üst düzey)
- İstek gövdesi `metadata.disabledGuardrails`
- Header `x-omniroute-disabled-guardrails` (veya eski adıyla `x-disabled-guardrails`)

Değerler dizi veya virgülle ayrılmış bir dize olabilir; adlar küçük harfli kebab-case formatına normalleştirilir (`pii_masker` → `pii-masker`). Sonuç, `context.disabledGuardrails` aracılığıyla, eşleşen güvenlik korumalarını (`results` içinde `skipped: true`) atlayan kayıt defterine iletilir.

## Yürütme Sırası

`src/sse/handlers/chat.ts` ve `open-sse/handlers/chatCore.ts` üzerinden geçen her istek için:

1.  `resolveDisabledGuardrails(...)` API anahtarı, gövde ve başlıklardan atlama listesini oluşturur.
2.  `guardrailRegistry.runPreCallHooks(body, ctx)` koruyucuları artan öncelik sırasına göre çalıştırır:
    - Devre dışı bırakılan koruyucular `skipped` olarak kaydedilir.
    - Her koruyucunun `preCall`'u, `modifiedPayload` aracılığıyla yükü yeniden yazabilir.
    - İlk `block: true` zinciri kısa devre yapar ve işleyici bir koruyucu reddetme yanıtı döndürür.
3.  (Potansiyel olarak yeniden yazılmış) yük, birleşik yönlendirme ve yukarı akış dağıtımına akar.
4.  Yanıt birleştirildikten sonra, `guardrailRegistry.runPostCallHooks(...)` aynı zinciri yanıt üzerinde çalıştırır. Buradaki `block: true` yukarı akış yanıtını düşürür.

Hata fırlatan koruyucular `error: <message>` ile kaydedilir ve `logger.warn` aracılığıyla günlüğe yazılır, ancak zincir devam eder — tasarım gereği açık kalır.

## Yapılandırma

Yerleşik koruyucular tarafından okunan ortam değişkenleri:

| Değişken                              | Kullanan                  | Etki                                                                                                                 |
| :------------------------------------ | :------------------------ | :------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Algılamayı tamamen devre dışı bırakmak için `false` olarak ayarlayın.                                                |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Enjeksiyon politikası: `warn`, `block` veya `log`. Eski `redact` değeri enjeksiyon metnini yeniden yazmaz.           |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Enjeksiyon koruyucusu için mod; ayrıca ortam değişkenlerini **geçersiz kılan** bir DB özellik bayrağıdır (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | `MODE=block`'un reddettiği minimum ciddiyet: `high` (varsayılan), `medium` veya `low`.                               |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | `INPUT_SANITIZER_BLOCK_THRESHOLD` için eski takma ad.                                                                |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | `true` olduğunda, istek PII'si redakte edilir (enjeksiyon modundan bağımsız olarak).                                 |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Yanıt tarafı maskeleyici davranışını kontrol eder.                                                                   |

Modality Bridge koruyucuları, çalışma zamanı yapılandırmasını ortam değişkenlerinden değil, DB destekli ayarlar deposundan (`getSettings()`) okur. Vision'ın birincil anahtarları `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ve `modalityBridgeCacheMaxEntries` şeklindedir. Eski `visionBridge*` anahtarları yalnızca belgelenmiş tek döngülü okuma geri dönüşü olarak kabul edilir; kontrol paneli yazımları birincil anahtarları kullanır. Varsayılanlar ve geri dönüş çözümleyici `src/shared/constants/modalityBridgeDefaults.ts` içinde bulunur, eski sabitler ise `src/shared/constants/visionBridgeDefaults.ts` içinde korunur.

Ses, `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout` ve `modalityBridgeAudioMaxClips` ile paylaşılan `modalityBridgeCache*` ayarlarını kullanır. Sesin eski anahtar geri dönüşü yoktur çünkü bu anahtarlar Modality Bridge şemasıyla birlikte tanıtılmıştır.

Video, `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos` ve `modalityBridgeVideoTimeout` ile paylaşılan `modalityBridgeCache*` ayarlarını kullanır. Varsayılan olarak devre dışıdır çünkü FFmpeg/ffprobe isteğe bağlı operasyonel bağımlılıklardır ve kare altyazılandırma gecikme ve model maliyeti ekler.

## Özel Güvenlik Kalkanları (Custom Guardrails)

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

Adımlar:

1. `BaseGuardrail` sınıfından türeyen `src/lib/guardrails/myGuardrail.ts` dosyasını oluşturun.
2. `preCall` ve/or `postCall` metodlarını implement edin.
3. Ya içe aktarma (import) zamanında kaydedin (`registerDefaultGuardrails` içinden çağırarak) ya da
   çalışma zamanında (runtime) `guardrailRegistry.register(...)` metodunu çağırın — kayıt defteri (registry), aynı normalize edilmiş isme sahip
   önceki tüm güvenlik kalkanlarının yerini alır.
4. `tests/unit/` altında testler ekleyin (mevcut örnekler:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Test Etme

Bilinen bir durumdan başlamak için testler arasında `resetGuardrailsForTests()` kullanın.
Boş bir kayıt defteriyle başlamak ve yalnızca test edilen güvenlik kalkanlarını kaydetmek için
`{ registerDefaults: false }` parametresini geçirin. Vision Bridge bağımlılık enjeksiyonunu
(`deps.getSettings`, `deps.callVisionModel`) kabul eder; Audio Bridge ise ayarlar, yetenekler, STT model seçimi, kimlik bilgisi kontrolleri ve transkripsiyon için
eşdeğer dikişleri (seam) sunar. Bu sayede testler, veritabanı veya ağ erişimine gerek kalmadan her iki akışı da çalıştırabilir.

## Ayrıca Bakınız

- `src/lib/guardrails/` — implementasyon
- `src/shared/utils/inputSanitizer.ts` — prompt-injection ve PII maskeleme özelliklerini sağlayan
  ortak detektör
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge varsayılanları ve
  zorunlu köprü (forced-bridge) model listesi
- `src/shared/constants/modalityBridgeDefaults.ts` — ortak Vision/Audio çalışma zamanı (runtime) varsayılanları
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonal katman (circuit breaker, cooldowns)
- `docs/reference/ENVIRONMENT.md` — tam çevre değişkeni (env var) referansı

## Enjeksiyon Kalkanı Rota Kapsamı ve Kırmızı Takım (Red-Team) Testleri (Faz 8 · Blok D)

Enjeksiyon kalkanı (`createInjectionGuard` / `withInjectionGuard`), kullanıcı istemlerini (prompt) kabul eden tüm rotaları
kapsar. `INJECTION_GUARD_MODE` ayarına uyar (varsayılan `warn` = yalnızca loglar;
`block` = HTTP 400 `SECURITY_001` döndürür).

| Tür            | Rotalar                                                                                                                                              | Varsayılan mod |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Metin (mevcut) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Üretken        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Veri           | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Metin çıkarma (`extractMessageContents`), `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` alanlarını kapsar.

**Kırmızı takım (gece çalışması, `nightly-llm-security.yml`):** promptfoo, her rotanın `INJECTION_GUARD_MODE=block` altında OWASP-LLM derlemini (corpus) engellediğini doğrular; garak taramalar çalıştırır (gizli anahtar yoksa atlanır).
`moderations` tutarlılık için dahil edilmiştir — blok modundaki operatörler `resolveDisabledGuardrails`
aracılığıyla bunu muaf tutabilir.

Gece iş akışı (`.github/workflows/nightly-llm-security.yml`, cron + manuel
tetikleme) iki işe sahiptir:

- **`promptfoo-guard` (engelleme)** — `INJECTION_GUARD_MODE=block` ile
  `promptfoo eval -c promptfooconfig.yaml` komutunu çalıştırır. Her düşmanca senaryo (ör. "önceki tüm
  talimatları yoksay…", DAN tarzı jailbreak'ler), yanıtın `error.code === "SECURITY_001"` taşıdığını, yani kalkanın isteği gerçekten reddettiğini iddia eder.
- **`garak` (tavsiye niteliğinde)** — yerel bir OmniRoute örneğine (`http://localhost:20128/v1`) karşı
  garak `--probes promptinject,dan,leakreplay` komutunu çalıştırır. Sağlayıcı gizli anahtarına (`PROMPTFOO_PROVIDER_KEY`) bağlıdır; sorunsuz bir şekilde atlanır ve sonuna `|| true` eklenmiştir, böylece CI'ı (sürekli entegrasyon) başarısız kılmadan raporlama yapar.

Kalkan yardımcısının (`createInjectionGuard` / `withInjectionGuard`) kapsamı,
istem içeren her `/v1` rotasını kapsar; istem metni, `src/shared/utils/inputSanitizer.ts` içindeki
`extractMessageContents()` tarafından `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` alanlarından çekilir.
