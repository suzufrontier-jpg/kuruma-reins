// CarTalk Pro - 追加車両データ Part 5 (輸入車追加)
CAR_DATABASE.push(
  {
    id: 501, maker: "BMW", name: "1シリーズ", type: "ハッチバック", years: "2019〜現行(F40)",
    newPrice: "398〜610万円", engine: "1.5L直3ターボ/2.0L直4ターボ", fuel: "ガソリン(ハイオク)",
    fuelEco: "13.7〜17.3km/L(WLTC)", drive: "FF/4WD",
    length: "4,335mm", width: "1,800mm", height: "1,465mm", weight: "1,360〜1,550kg",
    seats: 5, trunk: "約380L",
    features: ["BMW入門モデル", "FF化で室内拡大", "M135i設定", "iDrive"],
    talkPoints: ["BMWの入門モデルとして最も手頃な価格帯", "FF化で後席と荷室が広くなり実用性アップ", "M135iは306馬力の超ホットハッチ", "BMWの走りの良さをコンパクトで楽しめる"],
    rivals: ["アウディ A3", "メルセデス Aクラス", "VW ゴルフ"], emoji: "🚗", popular: false
  },
  {
    id: 502, maker: "BMW", name: "X1", type: "SUV", years: "2022〜現行(U11)",
    newPrice: "498〜696万円", engine: "1.5L直3ターボ/2.0L直4ターボ/PHEV/EV", fuel: "ガソリン(ハイオク)/ディーゼル/PHEV/EV",
    fuelEco: "13.0〜17.7km/L(WLTC)", drive: "FF/4WD",
    length: "4,500mm", width: "1,845mm", height: "1,645mm", weight: "1,560〜1,870kg",
    seats: 5, trunk: "約540L",
    features: ["BMWコンパクトSUV", "iX1(EV)あり", "大幅拡大", "新世代デザイン"],
    talkPoints: ["BMWで最も売れているSUV、日本でも大人気", "新型は先代より大きくなり居住性が大幅向上", "iX1ならBMW初のコンパクトEV SUV", "荷室540Lは同クラストップレベルの広さ"],
    rivals: ["メルセデス GLA", "アウディ Q3", "ボルボ XC40"], emoji: "🚙", popular: false
  },
  {
    id: 503, maker: "BMW", name: "X3", type: "SUV", years: "2024〜現行(G45)",
    newPrice: "748〜1,098万円", engine: "2.0L直4ターボ/3.0L直6ターボ/PHEV", fuel: "ガソリン(ハイオク)/ディーゼル/PHEV",
    fuelEco: "11.8〜15.9km/L(WLTC)", drive: "4WD(xDrive)",
    length: "4,755mm", width: "1,920mm", height: "1,660mm", weight: "1,830〜2,170kg",
    seats: 5, trunk: "約570L",
    features: ["BMWの主力SUV", "新世代デザイン", "M50設定", "48V MHEV"],
    talkPoints: ["BMWのSUV中核モデル、スポーツSUVの代名詞", "直6エンジンのM50は走る歓びの極地", "新型はデザインが大幅刷新され先進的に", "xDriveの4WDは雪道でも安定感抜群"],
    rivals: ["メルセデス GLC", "アウディ Q5", "レクサス NX"], emoji: "🚙", popular: false
  },
  {
    id: 504, maker: "メルセデス・ベンツ", name: "Aクラス", type: "ハッチバック", years: "2018〜現行(W177)",
    newPrice: "498〜580万円", engine: "1.3Lターボ/2.0Lターボ", fuel: "ガソリン(ハイオク)",
    fuelEco: "14.5〜17.0km/L(WLTC)", drive: "FF/4WD",
    length: "4,440mm", width: "1,800mm", height: "1,420mm", weight: "1,370〜1,530kg",
    seats: 5, trunk: "約370L",
    features: ["ベンツ入門モデル", "MBUX", "AMG A35/A45", "セダンもあり"],
    talkPoints: ["メルセデスで最も手頃な入門モデル", "MBUXの音声認識は業界最高レベルの自然さ", "AMG A45は421馬力の世界最強2Lエンジン搭載", "コンパクトでもメルセデスの品質は妥協なし"],
    rivals: ["BMW 1シリーズ", "アウディ A3", "VW ゴルフ"], emoji: "🚗", popular: false
  },
  {
    id: 505, maker: "メルセデス・ベンツ", name: "GLC", type: "SUV", years: "2022〜現行(X254)",
    newPrice: "708〜985万円", engine: "2.0L直4ターボ+ISG/PHEV", fuel: "ガソリン(ハイオク)/ディーゼル/PHEV",
    fuelEco: "12.5〜16.9km/L(WLTC)", drive: "4WD(4MATIC)",
    length: "4,720mm", width: "1,890mm", height: "1,640mm", weight: "1,840〜2,120kg",
    seats: 5, trunk: "約470L",
    features: ["メルセデスSUV中核", "全車電動化", "クーペあり", "最新MBUX"],
    talkPoints: ["メルセデスで世界的に最も売れているSUV", "全車マイルドHV化で効率と走りを両立", "GLCクーペはスタイリッシュなSUVの極み", "PHEV仕様はEV走行約100km可能"],
    rivals: ["BMW X3", "アウディ Q5", "レクサス NX"], emoji: "🚙", popular: false
  },
  {
    id: 506, maker: "メルセデス・ベンツ", name: "Eクラス", type: "セダン/ワゴン", years: "2024〜現行(W214)",
    newPrice: "938〜1,245万円", engine: "2.0L直4ターボ+ISG/3.0L直6ターボ+ISG", fuel: "ガソリン(ハイオク)/ディーゼル",
    fuelEco: "11.5〜16.3km/L(WLTC)", drive: "FR/4WD(4MATIC)",
    length: "4,950mm", width: "1,880mm", height: "1,470mm", weight: "1,870〜2,100kg",
    seats: 5, trunk: "約540L",
    features: ["メルセデスの中核セダン", "スーパースクリーン", "ビジネスの定番", "最高の快適性"],
    talkPoints: ["ビジネスエグゼクティブの定番セダン", "Sクラスの技術が惜しみなく投入された極上の乗り心地", "ワゴンは実用性抜群でファミリーにも", "自動運転に近いドライブパイロットにも対応予定"],
    rivals: ["BMW 5シリーズ", "アウディ A6", "レクサス ES"], emoji: "🚗", popular: false
  },
  {
    id: 507, maker: "メルセデス・ベンツ", name: "GLA", type: "SUV", years: "2020〜現行(H247)",
    newPrice: "534〜626万円", engine: "1.3Lターボ/2.0Lターボ", fuel: "ガソリン(ハイオク)",
    fuelEco: "14.2〜16.5km/L(WLTC)", drive: "FF/4WD(4MATIC)",
    length: "4,415mm", width: "1,835mm", height: "1,585mm", weight: "1,460〜1,590kg",
    seats: 5, trunk: "約435L",
    features: ["メルセデス最小SUV", "Aクラスベース", "コンパクト高級", "AMGあり"],
    talkPoints: ["メルセデスSUVで最もコンパクトで扱いやすい", "Aクラスの使い勝手にSUVの視界の高さをプラス", "日本の駐車場事情に合うサイズ感が人気", "AMG GLA 35なら走りもスポーティ"],
    rivals: ["BMW X1", "アウディ Q3", "ボルボ XC40"], emoji: "🚙", popular: false
  },
  {
    id: 508, maker: "フォルクスワーゲン", name: "T-Cross", type: "SUV", years: "2019〜現行",
    newPrice: "310〜389万円", engine: "1.0L直3ターボ", fuel: "ガソリン(ハイオク)",
    fuelEco: "16.9km/L(WLTC)", drive: "FF",
    length: "4,115mm", width: "1,760mm", height: "1,580mm", weight: "1,180〜1,220kg",
    seats: 5, trunk: "約385L",
    features: ["VW最小SUV", "コンパクト", "ポロベース", "実用的"],
    talkPoints: ["VWブランドの安心感を310万円から手に入れられる", "コンパクトで街中の取り回しが楽", "ドイツ車らしい高速安定性はしっかりある", "シンプルで飽きのこないVWデザイン"],
    rivals: ["プジョー 2008", "MINI クロスオーバー"], emoji: "🚙", popular: false
  },
  {
    id: 509, maker: "フォルクスワーゲン", name: "T-Roc", type: "SUV", years: "2020〜現行",
    newPrice: "418〜509万円", engine: "1.5L直4ターボ/2.0L直4ターボ", fuel: "ガソリン(ハイオク)",
    fuelEco: "14.0〜16.2km/L(WLTC)", drive: "FF/4WD",
    length: "4,240mm", width: "1,825mm", height: "1,590mm", weight: "1,360〜1,510kg",
    seats: 5, trunk: "約445L",
    features: ["VWミドルSUV", "ゴルフベース", "スポーティデザイン", "R-Line"],
    talkPoints: ["ゴルフの走りの良さをSUVで味わえる", "クーペライクなスタイリッシュなデザイン", "R-Lineは2.0Lターボ+4WDのハイスペック", "輸入SUVの中ではお求めやすい価格帯"],
    rivals: ["BMW X1", "アウディ Q3", "プジョー 3008"], emoji: "🚙", popular: false
  },
  {
    id: 510, maker: "アウディ", name: "Q3", type: "SUV", years: "2019〜現行(2代目)",
    newPrice: "437〜586万円", engine: "1.5L直4ターボ/2.0L直4ターボ", fuel: "ガソリン(ハイオク)",
    fuelEco: "13.0〜15.6km/L(WLTC)", drive: "FF/4WD(quattro)",
    length: "4,495mm", width: "1,840mm", height: "1,615mm", weight: "1,510〜1,660kg",
    seats: 5, trunk: "約530L",
    features: ["アウディコンパクトSUV", "Sportback設定", "quattro", "バーチャルCP"],
    talkPoints: ["アウディSUVの入門として人気が高い", "Sportbackはクーペスタイルでスタイリッシュ", "quattro四駆は雪道での安定感が抜群", "530Lの荷室は同クラストップの広さ"],
    rivals: ["BMW X1", "メルセデス GLA", "ボルボ XC40"], emoji: "🚙", popular: false
  },
  {
    id: 511, maker: "ボルボ", name: "XC60", type: "SUV", years: "2017〜現行(2代目)",
    newPrice: "659〜899万円", engine: "2.0Lターボ/PHEV", fuel: "ガソリン(ハイオク)/PHEV",
    fuelEco: "11.3〜13.6km/L(WLTC)", drive: "FF/4WD",
    length: "4,710mm", width: "1,900mm", height: "1,660mm", weight: "1,830〜2,140kg",
    seats: 5, trunk: "約468L",
    features: ["ボルボベストセラー", "世界最高安全性", "スカンジナビアン", "PHEV設定"],
    talkPoints: ["ボルボの中で最も売れている人気SUV", "ワールドカーオブザイヤー受賞の実力", "北欧デザインの内装は穏やかで癒される空間", "安全性能は世界トップクラス、ボルボの真骨頂"],
    rivals: ["BMW X3", "メルセデス GLC", "レクサス NX"], emoji: "🚙", popular: false
  },
  {
    id: 512, maker: "ボルボ", name: "V60", type: "ステーションワゴン", years: "2018〜現行(2代目)",
    newPrice: "539〜779万円", engine: "2.0Lターボ/PHEV", fuel: "ガソリン(ハイオク)/PHEV",
    fuelEco: "11.1〜13.1km/L(WLTC)", drive: "FF/4WD",
    length: "4,760mm", width: "1,850mm", height: "1,435mm", weight: "1,700〜2,020kg",
    seats: 5, trunk: "約442L",
    features: ["北欧ワゴン", "Cross Country設定", "エステートの美学", "高い安全性"],
    talkPoints: ["ワゴンの本場欧州で鍛えられた正統派エステート", "Cross Countryは車高アップで悪路もこなせる", "長距離移動の快適性はワゴントップクラス", "北欧デザインのシンプルな美しさが映える"],
    rivals: ["スバル レヴォーグ", "BMW 3シリーズツーリング"], emoji: "🚗", popular: false
  },
  {
    id: 513, maker: "MINI", name: "クロスオーバー", type: "SUV", years: "2024〜現行(U25)",
    newPrice: "458〜628万円", engine: "1.5L直3ターボ/2.0L直4ターボ/EV", fuel: "ガソリン(ハイオク)/EV",
    fuelEco: "14.0〜16.5km/L(WLTC)", drive: "FF/4WD",
    length: "4,435mm", width: "1,845mm", height: "1,640mm", weight: "1,490〜1,700kg",
    seats: 5, trunk: "約460L",
    features: ["MINI最大モデル", "ファミリー向け", "EVモデルあり", "ALL4 4WD"],
    talkPoints: ["MINIの中で最も実用的でファミリーに最適", "5人がしっかり乗れてラゲッジも十分な広さ", "MINIらしい楽しい走りはそのまま、サイズだけ大人に", "EVモデルなら環境にも配慮できる"],
    rivals: ["BMW X1", "VW T-Roc", "ボルボ XC40"], emoji: "🚙", popular: false
  },
  {
    id: 514, maker: "アウディ", name: "Q5", type: "SUV", years: "2024〜現行(3代目)",
    newPrice: "698〜978万円", engine: "2.0L直4ターボ MHEV/PHEV", fuel: "ガソリン(ハイオク)/PHEV",
    fuelEco: "11.8〜14.5km/L(WLTC)", drive: "4WD(quattro)",
    length: "4,717mm", width: "1,905mm", height: "1,646mm", weight: "1,870〜2,150kg",
    seats: 5, trunk: "約520L",
    features: ["アウディ中核SUV", "全車quattro", "SQ5設定", "OLED テールランプ"],
    talkPoints: ["アウディで最も売れているSUVモデル", "四輪駆動のquattroは雪道の定番", "SQ5は354馬力のスポーツSUV", "新型はデザインが一新されスポーティに"],
    rivals: ["BMW X3", "メルセデス GLC", "レクサス NX"], emoji: "🚙", popular: false
  },
  {
    id: 515, maker: "テスラ", name: "Model Y", type: "SUV(EV)", years: "2022〜現行",
    newPrice: "563〜709万円", engine: "モーター(RWD/デュアル)", fuel: "電気自動車(EV)",
    fuelEco: "航続距離 約507〜595km", drive: "RWD/AWD",
    length: "4,751mm", width: "1,921mm", height: "1,624mm", weight: "1,850〜1,979kg",
    seats: 5, trunk: "約854L(後席倒し時)",
    features: ["世界一売れたEV", "スーパーチャージャー", "OTAアップデート", "大容量荷室"],
    talkPoints: ["世界で最も売れている電気自動車", "Model 3ベースのSUVで実用性が高い", "後席を倒せば854Lの大容量荷室", "オートパイロットの運転支援は非常に先進的"],
    rivals: ["日産 アリア", "ヒョンデ IONIQ 5", "BMW iX3"], emoji: "🔋", popular: false
  },
  {
    id: 516, maker: "ルノー", name: "ルーテシア", type: "コンパクト", years: "2020〜現行(5代目)",
    newPrice: "303〜357万円", engine: "1.0L直3ターボ/1.6L e-TECH HV", fuel: "ガソリン(ハイオク)/ハイブリッド",
    fuelEco: "17.0〜25.2km/L(WLTC)", drive: "FF",
    length: "4,075mm", width: "1,725mm", height: "1,470mm", weight: "1,150〜1,310kg",
    seats: 5, trunk: "約391L",
    features: ["フランスのBセグ", "e-TECH HV", "F1直系技術", "おしゃれデザイン"],
    talkPoints: ["F1チームの技術が活きたe-TECHハイブリッドが魅力", "フランス車ならではのおしゃれな内外装", "303万円からの輸入車は非常にお手頃", "しなやかな足回りは長距離でも疲れにくい"],
    rivals: ["VW ポロ", "プジョー 208", "MINI"], emoji: "🚗", popular: false
  },
  {
    id: 517, maker: "シトロエン", name: "C3", type: "コンパクト", years: "2024〜現行(4代目)",
    newPrice: "267万円〜", engine: "1.2L直3ターボ", fuel: "ガソリン(ハイオク)",
    fuelEco: "約17km/L(WLTC)", drive: "FF",
    length: "4,015mm", width: "1,755mm", height: "1,577mm", weight: "約1,200kg",
    seats: 5, trunk: "約310L",
    features: ["フランスのSUVテイスト", "アドバンストコンフォートシート", "ポップなデザイン", "お手頃価格"],
    talkPoints: ["267万円からのフランス車は驚きのコスパ", "SUVテイストのクロスオーバーで個性的", "シトロエン伝統の柔らかい乗り心地", "人と被らない個性的な選択肢として魅力的"],
    rivals: ["VW T-Cross", "ルノー キャプチャー"], emoji: "🚗", popular: false
  },
  {
    id: 518, maker: "ジープ", name: "コンパス", type: "SUV", years: "2022〜現行(MP後期)",
    newPrice: "450〜529万円", engine: "1.3L直4ターボ", fuel: "ガソリン(ハイオク)",
    fuelEco: "11.9km/L(WLTC)", drive: "FF/4WD",
    length: "4,420mm", width: "1,810mm", height: "1,640mm", weight: "1,470〜1,620kg",
    seats: 5, trunk: "約438L",
    features: ["ジープ入門SUV", "コンパクトジープ", "Trail Rated", "7スロットグリル"],
    talkPoints: ["ジープブランドの中で最もお手頃なモデル", "あの7スロットグリルが450万円から手に入る", "都市部でも使いやすいコンパクトサイズ", "ジープの名に恥じないオフロード性能"],
    rivals: ["VW T-Roc", "MINI クロスオーバー"], emoji: "🚙", popular: false
  },
  {
    id: 519, maker: "フィアット", name: "500", type: "コンパクト", years: "2020〜現行(500e/EV)",
    newPrice: "250〜480万円", engine: "0.9L直2ターボ/モーター(87kW)", fuel: "ガソリン(ハイオク)/EV",
    fuelEco: "約19km/L(WLTC)/航続約335km", drive: "FF",
    length: "3,630mm", width: "1,685mm", height: "1,530mm", weight: "1,010〜1,320kg",
    seats: 4, trunk: "約185L",
    features: ["イタリアンアイコン", "可愛いデザイン", "EV(500e)あり", "カブリオレも"],
    talkPoints: ["世界で最も可愛い車の一つ、イタリアンデザインの傑作", "500eは電気自動車版で都市の足として最適", "カブリオレモデルは気軽にオープンエアが楽しめる", "おしゃれな方のセカンドカーとして大人気"],
    rivals: ["MINI 3ドア", "アバルト 595"], emoji: "🚗", popular: false
  },
  {
    id: 520, maker: "プジョー", name: "208", type: "コンパクト", years: "2020〜現行(2代目)",
    newPrice: "310〜437万円", engine: "1.2L直3ターボ/EV", fuel: "ガソリン(ハイオク)/EV",
    fuelEco: "17.0〜18.4km/L(WLTC)", drive: "FF",
    length: "4,095mm", width: "1,745mm", height: "1,465mm", weight: "1,160〜1,510kg",
    seats: 5, trunk: "約311L",
    features: ["EuroCarOfTheYear", "i-Cockpit", "e-208(EV)", "獅子デザイン"],
    talkPoints: ["欧州カーオブザイヤー受賞の実力派コンパクト", "小さなステアリングのi-Cockpitは一度体験すると虜に", "e-208はEV仕様でランニングコスト激安", "プジョーの牙のようなLEDデイライトが個性的"],
    rivals: ["ルノー ルーテシア", "VW ポロ", "MINI"], emoji: "🚗", popular: false
  },
  {
    id: 521, maker: "プジョー", name: "3008", type: "SUV", years: "2024〜現行(3代目)",
    newPrice: "540〜699万円", engine: "1.2Lターボ HV/PHEV/EV", fuel: "ハイブリッド/PHEV/EV",
    fuelEco: "約18〜22km/L(WLTC)", drive: "FF",
    length: "4,543mm", width: "1,895mm", height: "1,640mm", weight: "1,600〜1,900kg",
    seats: 5, trunk: "約520L",
    features: ["フレンチSUV", "パノラミックi-Cockpit", "PHEV/EV設定", "斬新デザイン"],
    talkPoints: ["新型はファストバックSUVとなり衝撃的なデザインに", "パノラミックi-Cockpitは没入感のあるコックピット", "PHEV仕様ならEV走行で日常使いの大半をカバー", "他のSUVとは一線を画すフレンチデザイン"],
    rivals: ["VW ティグアン", "BMW X1", "ボルボ XC40"], emoji: "🚙", popular: false
  },
  {
    id: 522, maker: "ポルシェ", name: "カイエン", type: "SUV", years: "2023〜現行(E3後期)",
    newPrice: "1,198〜2,745万円", engine: "3.0L V6ターボ/4.0L V8ターボ/PHEV", fuel: "ガソリン(ハイオク)/PHEV",
    fuelEco: "8.3〜14.7km/L(WLTC)", drive: "4WD",
    length: "4,930mm", width: "1,985mm", height: "1,695mm", weight: "2,055〜2,490kg",
    seats: 5, trunk: "約772L",
    features: ["スポーツSUVの元祖", "V8ターボ", "Turbo GT", "ポルシェの走り"],
    talkPoints: ["スポーツSUVというジャンルを切り開いたパイオニア", "カイエンターボGTは659馬力のモンスターSUV", "SUVなのにニュルブルクリンクで速いタイムを記録", "ポルシェだからこその圧倒的なドライビングプレジャー"],
    rivals: ["BMW X5", "メルセデス GLE", "ランドローバー レンジローバースポーツ"], emoji: "🚙", popular: false
  },
  {
    id: 523, maker: "ヒョンデ", name: "コナ", type: "SUV(EV)", years: "2023〜現行(2代目)",
    newPrice: "399〜489万円", engine: "モーター(150kW)", fuel: "電気自動車(EV)",
    fuelEco: "航続距離 約541km", drive: "FF",
    length: "4,355mm", width: "1,825mm", height: "1,575mm", weight: "1,680〜1,740kg",
    seats: 5, trunk: "約466L",
    features: ["コンパクトEV SUV", "手頃なEV", "車両制御統合(IEB)", "V2L対応"],
    talkPoints: ["399万円からのEV SUVは補助金でさらにお得", "航続541kmは日常使いに十分すぎる距離", "V2L対応でアウトドアで家電が使える", "ヒョンデのEVは品質とコスパのバランスが良い"],
    rivals: ["日産 サクラ", "BYD ATTO 3"], emoji: "🔋", popular: false
  },
  {
    id: 524, maker: "BYD", name: "ATTO 3", type: "SUV(EV)", years: "2023〜現行",
    newPrice: "440〜470万円", engine: "モーター(150kW)", fuel: "電気自動車(EV)",
    fuelEco: "航続距離 約470km", drive: "FF",
    length: "4,455mm", width: "1,875mm", height: "1,615mm", weight: "1,750kg",
    seats: 5, trunk: "約440L",
    features: ["中国EV大手", "ブレードバッテリー", "回転式ディスプレイ", "高コスパ"],
    talkPoints: ["世界EV販売No.1のBYDが日本に本格参入", "ブレードバッテリーは安全性が高いと評判", "440万円のEV SUVは価格競争力が非常に高い", "回転式の大型ディスプレイはインパクト大"],
    rivals: ["ヒョンデ コナ", "日産 リーフ"], emoji: "🔋", popular: false
  }
);
