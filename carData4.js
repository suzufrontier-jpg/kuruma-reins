// CarTalk Pro - 追加車両データ Part 3 (輸入車・人気外車)
CAR_DATABASE.push(
  {
    id: 623, maker: "BMW", name: "3シリーズ", type: "セダン", years: "2019〜現行(G20)",
    newPrice: "523〜982万円", engine: "2.0L直4ターボ/3.0L直6ターボ/PHEV", fuel: "ガソリン(ハイオク)/ディーゼル/PHEV",
    fuelEco: "12.5〜17.3km/L(WLTC)", drive: "FR/4WD(xDrive)",
    length: "4,715mm", width: "1,825mm", height: "1,440mm", weight: "1,560〜1,870kg",
    seats: 5, trunk: "約480L",
    features: ["駆け抜ける歓び", "直6エンジン", "ディーゼル人気", "iDrive"],
    talkPoints: ["「駆け抜ける歓び」を体現するスポーツセダンの代名詞", "320dディーゼルは燃費が良く日本でも人気が高い", "50:50の前後重量配分による最高のハンドリング", "M340iは直6ターボの官能的な走りが楽しめる"],
    rivals: ["メルセデス Cクラス", "アウディ A4", "レクサス IS"], emoji: "🚗", popular: false
  },
  {
    id: 624, maker: "メルセデス・ベンツ", name: "Cクラス", type: "セダン/ワゴン", years: "2021〜現行(W206)",
    newPrice: "564〜920万円", engine: "1.5Lターボ+ISG/2.0Lディーゼル/PHEV", fuel: "ガソリン(ハイオク)/ディーゼル/PHEV",
    fuelEco: "13.2〜17.3km/L(WLTC)", drive: "FR/4WD(4MATIC)",
    length: "4,751mm", width: "1,820mm", height: "1,438mm", weight: "1,630〜1,960kg",
    seats: 5, trunk: "約455L",
    features: ["メルセデス売れ筋", "ISGマイルドHV", "ワゴンも人気", "最新MBUX"],
    talkPoints: ["メルセデスの中核モデルで世界中で売れている", "Eクラスの技術が惜しみなく投入された上質な走り", "ワゴンモデルは荷室が広く実用性も高い", "MBUX音声認識は「ハイ、メルセデス」で操作できる"],
    rivals: ["BMW 3シリーズ", "アウディ A4", "レクサス IS"], emoji: "🚗", popular: false
  },
  {
    id: 625, maker: "フォルクスワーゲン", name: "ゴルフ", type: "ハッチバック", years: "2021〜現行(8代目)",
    newPrice: "312〜544万円", engine: "1.0Lターボ/1.5Lターボ/2.0Lターボ", fuel: "ガソリン(ハイオク)",
    fuelEco: "14.1〜17.3km/L(WLTC)", drive: "FF/4WD",
    length: "4,295mm", width: "1,790mm", height: "1,475mm", weight: "1,310〜1,560kg",
    seats: 5, trunk: "約381L",
    features: ["世界の指標", "DSG", "GTI/R設定", "デジタルコックピット"],
    talkPoints: ["「ゴルフがすべての基準」と言われる世界的名車", "8代目でフルデジタル化し先進的な印象に", "GTIはホットハッチの代名詞、走りが最高に楽しい", "Rは4WD+300馬力超えのスーパーハッチ"],
    rivals: ["BMW 1シリーズ", "アウディ A3", "メルセデスAクラス"], emoji: "🚗", popular: false
  },
  {
    id: 626, maker: "MINI", name: "MINI 3ドア/5ドア", type: "コンパクト", years: "2024〜現行(F66)",
    newPrice: "398〜580万円", engine: "1.5L直3ターボ/2.0L直4ターボ", fuel: "ガソリン(ハイオク)",
    fuelEco: "14.4〜17.8km/L(WLTC)", drive: "FF",
    length: "3,875mm", width: "1,745mm", height: "1,455mm", weight: "1,255〜1,380kg",
    seats: 4, trunk: "約210L",
    features: ["ゴーカートフィーリング", "個性的デザイン", "JCW設定", "新世代MINI"],
    talkPoints: ["唯一無二のデザインで街中でも一目でMINIとわかる", "ゴーカートフィーリングと呼ばれる軽快な走りが楽しい", "カラーやオプションでとことん自分仕様にカスタマイズ可能", "新型はEVモデルも追加されて選択肢が広がった"],
    rivals: ["アウディ A1", "フォルクスワーゲン ポロ"], emoji: "🚗", popular: false
  },
  {
    id: 627, maker: "ボルボ", name: "XC40", type: "SUV", years: "2018〜現行",
    newPrice: "439〜579万円", engine: "1.5Lターボ PHEV/BEV", fuel: "ガソリン(ハイオク)/PHEV/EV",
    fuelEco: "12.1〜13.9km/L(WLTC)", drive: "FF/4WD",
    length: "4,440mm", width: "1,875mm", height: "1,650mm", weight: "1,610〜2,060kg",
    seats: 5, trunk: "約452L",
    features: ["北欧デザイン", "高い安全性", "EV展開", "Google内蔵"],
    talkPoints: ["北欧デザインのシンプルな美しさが人気", "ボルボは安全性の代名詞、家族を守る車として信頼", "Google Built-inでスマホなしでもナビや音楽OK", "Rechargeモデル(EV)は環境意識の高い方に"],
    rivals: ["BMW X1", "アウディ Q3", "レクサス UX"], emoji: "🚙", popular: false
  },
  {
    id: 628, maker: "アウディ", name: "A3", type: "セダン/HB", years: "2021〜現行(4代目)",
    newPrice: "367〜446万円", engine: "1.0Lターボ/1.5Lターボ", fuel: "ガソリン(ハイオク)",
    fuelEco: "16.0〜19.5km/L(WLTC)", drive: "FF",
    length: "4,345mm", width: "1,815mm", height: "1,450mm", weight: "1,310〜1,370kg",
    seats: 5, trunk: "約380L",
    features: ["プレミアムコンパクト", "バーチャルコックピット", "quattro伝統", "シンプルデザイン"],
    talkPoints: ["プレミアムブランドの入門モデルとして人気", "バーチャルコックピットの先進性に惹かれる方が多い", "アウディの四輪駆動技術quattroの信頼性", "シンプルで上品なデザインが日本人の感性に合う"],
    rivals: ["BMW 1シリーズ", "メルセデス Aクラス", "フォルクスワーゲン ゴルフ"], emoji: "🚗", popular: false
  },
  {
    id: 629, maker: "ジープ", name: "ラングラー", type: "SUV", years: "2018〜現行(JL)",
    newPrice: "598〜930万円", engine: "2.0Lターボ/3.6L V6/4xe PHEV", fuel: "ガソリン(ハイオク)/PHEV",
    fuelEco: "7.9〜11.5km/L(WLTC)", drive: "4WD",
    length: "4,870mm", width: "1,895mm", height: "1,845mm", weight: "1,930〜2,270kg",
    seats: 5, trunk: "大容量(幌取外し可)",
    features: ["世界最強オフローダー", "着脱式ドア&ルーフ", "4xe PHEV", "唯一無二の個性"],
    talkPoints: ["軍用車がルーツの本物のオフロード性能", "ドアやルーフが外せるのは世界でラングラーだけ", "4xe(PHEV)ならEV走行もできて意外にエコ", "街中でも目立つ唯一無二の存在感"],
    rivals: ["トヨタ ランドクルーザー", "スズキ ジムニー", "ランドローバー ディフェンダー"], emoji: "🚙", popular: false
  },
  {
    id: 630, maker: "テスラ", name: "Model 3", type: "セダン(EV)", years: "2024〜現行(ハイランド)",
    newPrice: "509〜619万円", engine: "モーター(後輪208kW/デュアル)", fuel: "電気自動車(EV)",
    fuelEco: "航続距離 約573〜706km", drive: "RWD/AWD",
    length: "4,720mm", width: "1,849mm", height: "1,440mm", weight: "1,760〜1,830kg",
    seats: 5, trunk: "約561L(前後計)",
    features: ["OTAアップデート", "オートパイロット", "15インチタッチ", "スーパーチャージャー"],
    talkPoints: ["OTAで常に最新機能が追加される未来の車", "テスラのスーパーチャージャー網で長距離も安心", "航続706kmはEVトップクラス", "加速性能はスポーツカー顔負けの速さ"],
    rivals: ["日産 アリア", "ヒョンデ IONIQ 6", "BMW i4"], emoji: "🔋", popular: false
  },
  {
    id: 631, maker: "ポルシェ", name: "マカン", type: "SUV", years: "2024〜現行(2代目/EV)",
    newPrice: "838〜1,304万円", engine: "モーター(デュアル)", fuel: "電気自動車(EV)",
    fuelEco: "航続距離 約516〜613km", drive: "AWD",
    length: "4,784mm", width: "1,938mm", height: "1,622mm", weight: "2,185〜2,295kg",
    seats: 5, trunk: "約540L(前後計)",
    features: ["ポルシェ初のEV SUV", "800Vアーキテクチャ", "急速充電22分", "ポルシェの走り"],
    talkPoints: ["ポルシェの走りをSUVで味わえる贅沢な一台", "2代目は完全EVとなり未来のスポーツカーの姿", "800V充電で22分で80%充電の驚異的な速さ", "お子さんの送迎にポルシェ、注目されること間違いなし"],
    rivals: ["BMW iX3", "メルセデス EQC", "アウディ Q6 e-tron"], emoji: "🚙", popular: false
  },
  {
    id: 632, maker: "ヒョンデ", name: "IONIQ 5", type: "SUV(EV)", years: "2022〜現行",
    newPrice: "479〜599万円", engine: "モーター(125kW〜225kW)", fuel: "電気自動車(EV)",
    fuelEco: "航続距離 約498〜618km", drive: "RWD/AWD",
    length: "4,635mm", width: "1,890mm", height: "1,645mm", weight: "1,870〜2,100kg",
    seats: 5, trunk: "約527L",
    features: ["レトロフューチャー", "800V超急速充電", "V2L給電", "フラットフロア"],
    talkPoints: ["18分で80%充電の800V超急速充電が魅力", "V2Lで家電製品に給電できるのでキャンプでも活躍", "ワールドカーオブザイヤー受賞の実力派", "韓国車のイメージを覆す先進的なデザイン"],
    rivals: ["日産 アリア", "トヨタ bZ4X", "テスラ Model Y"], emoji: "🔋", popular: false
  },
  {
    id: 633, maker: "プジョー", name: "308", type: "ハッチバック", years: "2022〜現行(3代目)",
    newPrice: "365〜477万円", engine: "1.2Lターボ/1.5Lディーゼル/PHEV", fuel: "ガソリン(ハイオク)/ディーゼル/PHEV",
    fuelEco: "15.6〜21.6km/L(WLTC)", drive: "FF",
    length: "4,420mm", width: "1,850mm", height: "1,475mm", weight: "1,370〜1,680kg",
    seats: 5, trunk: "約412L",
    features: ["i-Cockpit", "新ロゴ", "PHEV設定", "フランス車の個性"],
    talkPoints: ["小さなステアリングで操る独自のi-Cockpitが楽しい", "フランス車ならではの洒落たデザインセンス", "ディーゼルモデルは燃費も良く実用的", "人と被りたくない方にフランス車はおすすめ"],
    rivals: ["フォルクスワーゲン ゴルフ", "マツダ MAZDA3"], emoji: "🚗", popular: false
  },
  {
    id: 634, maker: "ランドローバー", name: "ディフェンダー", type: "SUV", years: "2020〜現行",
    newPrice: "640〜1,235万円", engine: "2.0Lターボ/3.0L直6ターボMHEV/5.0L V8", fuel: "ガソリン(ハイオク)/ディーゼル",
    fuelEco: "7.7〜11.3km/L(WLTC)", drive: "4WD",
    length: "4,583mm", width: "2,008mm", height: "1,967mm", weight: "2,100〜2,360kg",
    seats: 5, trunk: "約786L",
    features: ["英国本格SUV", "モノコック新設計", "水深900mm走破", "90/110/130"],
    talkPoints: ["英国陸軍御用達だった伝説のSUVが現代に復活", "水深900mmまで走破可能な本格オフロード性能", "無骨で武骨なデザインが冒険心をくすぐる", "ランクルと双璧をなす世界最高峰のオフローダー"],
    rivals: ["トヨタ ランドクルーザー", "ジープ ラングラー"], emoji: "🚙", popular: false
  }
);
