// CarTalk Pro - 追加車両データ Part 1 (トヨタ・ホンダ・日産 追加)
CAR_DATABASE.push(
  {
    id: 101, maker: "トヨタ", name: "ヴェルファイア", type: "ミニバン", years: "2023〜現行(40系)",
    newPrice: "655〜892万円", engine: "2.5L HV/2.4Lターボ", fuel: "ハイブリッド/ガソリン(レギュラー)",
    fuelEco: "14.8〜17.7km/L(WLTC)", drive: "FF/4WD",
    length: "4,995mm", width: "1,850mm", height: "1,945mm", weight: "2,080〜2,340kg",
    seats: 7, trunk: "大容量",
    features: ["アルファードの兄弟車", "迫力フロントグリル", "Z Premier最上級", "専用エアロ"],
    talkPoints: ["アルファードより精悍でスポーティな顔つき", "エアロボディで押し出し感抜群", "海外でも人気が高くリセール優秀", "Z Premierは最上級の極み"],
    rivals: ["トヨタ アルファード", "日産 エルグランド"], emoji: "🚐", popular: false
  },
  {
    id: 102, maker: "トヨタ", name: "カムリ", type: "セダン", years: "2017〜2024(10代目)",
    newPrice: "348〜468万円", engine: "2.5L ハイブリッド", fuel: "ハイブリッド(レギュラー)",
    fuelEco: "21.6〜27.1km/L(WLTC)", drive: "FF/4WD",
    length: "4,885mm", width: "1,840mm", height: "1,445mm", weight: "1,550〜1,680kg",
    seats: 5, trunk: "約473L",
    features: ["TNGAセダン", "ハイブリッド専用", "低重心ボディ", "ワイド&ロー"],
    talkPoints: ["世界で最も売れているセダンの一つ", "北米で絶大な人気を誇るグローバルカー", "ハイブリッド専用で燃費と走りを両立", "後席の広さはクラウンに匹敵"],
    rivals: ["ホンダ アコード", "マツダ MAZDA6", "日産 スカイライン"], emoji: "🚗", popular: false
  },
  {
    id: 103, maker: "トヨタ", name: "GR86", type: "スポーツ", years: "2021〜現行",
    newPrice: "279〜351万円", engine: "2.4L水平対向4気筒", fuel: "ガソリン(ハイオク)",
    fuelEco: "11.9〜12.0km/L(WLTC)", drive: "FR",
    length: "4,265mm", width: "1,775mm", height: "1,310mm", weight: "1,260〜1,290kg",
    seats: 4, trunk: "約226L",
    features: ["本格FRスポーツ", "水平対向エンジン", "6速MT/AT", "スバルと共同開発"],
    talkPoints: ["300万円以下で買える貴重な本格FRスポーツカー", "MT車が選べるのは車好きにとって大きな魅力", "サーキットからドライブまで楽しめる万能スポーツ", "スバルBRZと兄弟車、味付けの違いを語れる"],
    rivals: ["スバル BRZ", "マツダ ロードスター"], emoji: "🏎️", popular: false
  },
  {
    id: 104, maker: "トヨタ", name: "ルーミー", type: "コンパクト", years: "2016〜現行",
    newPrice: "156〜209万円", engine: "1.0L/1.0Lターボ", fuel: "ガソリン(レギュラー)",
    fuelEco: "16.8〜18.4km/L(WLTC)", drive: "FF/4WD",
    length: "3,700mm", width: "1,670mm", height: "1,735mm", weight: "1,070〜1,130kg",
    seats: 5, trunk: "両側スライドドア",
    features: ["コンパクトハイトワゴン", "両側スライドドア", "ダイハツOEM", "低床設計"],
    talkPoints: ["軽より広くて普通車の安心感、ちょうどいいサイズ", "両側スライドドアでお子様の乗り降りが安全", "税金は普通車だが軽より走りにゆとりがある", "街乗り中心の方に圧倒的な支持"],
    rivals: ["スズキ ソリオ", "ダイハツ トール"], emoji: "🚗", popular: false
  },
  {
    id: 105, maker: "トヨタ", name: "C-HR", type: "SUV", years: "2023〜現行(2代目)",
    newPrice: "259〜345万円", engine: "1.8L HV/2.0L HV", fuel: "ハイブリッド(レギュラー)",
    fuelEco: "22.3〜26.3km/L(WLTC)", drive: "FF",
    length: "4,385mm", width: "1,830mm", height: "1,565mm", weight: "1,400〜1,490kg",
    seats: 5, trunk: "約310L",
    features: ["クーペスタイルSUV", "ハイブリッド専用", "大胆デザイン", "次世代T-Mate"],
    talkPoints: ["攻めたデザインで他と被りたくない方に最適", "コンパクトSUVの中で最もスタイリッシュ", "ハイブリッド専用で全グレード低燃費", "2代目で居住性と質感が大幅向上"],
    rivals: ["ホンダ ヴェゼル", "マツダ CX-30"], emoji: "🚙", popular: false
  },
  {
    id: 106, maker: "トヨタ", name: "bZ4X", type: "SUV(EV)", years: "2022〜現行",
    newPrice: "550〜650万円", engine: "モーター(150kW/80kWx2)", fuel: "電気自動車(EV)",
    fuelEco: "航続距離 約500〜559km", drive: "FF/4WD",
    length: "4,690mm", width: "1,860mm", height: "1,650mm", weight: "1,920〜2,010kg",
    seats: 5, trunk: "約452L",
    features: ["トヨタ初の量産EV", "ソーラー充電", "スバル共同開発", "先進コックピット"],
    talkPoints: ["トヨタが本気で作った初のBEV専用モデル", "ソーラールーフで年間1800km分の発電が可能", "補助金を使えばかなりお得に購入できる", "自宅充電なら月のランニングコストが激安"],
    rivals: ["日産 アリア", "ヒョンデ IONIQ 5", "スバル ソルテラ"], emoji: "🔋", popular: false
  },
  {
    id: 107, maker: "トヨタ", name: "カローラ", type: "セダン", years: "2019〜現行(12代目)",
    newPrice: "199〜304万円", engine: "1.5L/1.8L HV/2.0L HV", fuel: "ハイブリッド/ガソリン(レギュラー)",
    fuelEco: "19.4〜30.2km/L(WLTC)", drive: "FF/4WD",
    length: "4,495mm", width: "1,745mm", height: "1,435mm", weight: "1,250〜1,440kg",
    seats: 5, trunk: "約429L",
    features: ["世界のベストセラー", "TNGA採用", "ツーリング/スポーツも", "コネクティッド"],
    talkPoints: ["世界累計5000万台以上の販売実績を持つ名車", "セダン/ツーリング/スポーツの3タイプ展開", "質実剛健で壊れにくい信頼性の代名詞", "ハイブリッドなら30km/L超えの低燃費"],
    rivals: ["ホンダ シビック", "マツダ MAZDA3", "日産 シルフィ"], emoji: "🚗", popular: false
  },
  {
    id: 108, maker: "トヨタ", name: "スープラ", type: "スポーツ", years: "2019〜現行(A90)",
    newPrice: "499〜731万円", engine: "2.0L直4ターボ/3.0L直6ターボ", fuel: "ガソリン(ハイオク)",
    fuelEco: "10.0〜13.1km/L(WLTC)", drive: "FR",
    length: "4,380mm", width: "1,865mm", height: "1,290mm", weight: "1,410〜1,570kg",
    seats: 2, trunk: "約290L",
    features: ["伝説の復活", "BMW共同開発", "直6ターボ", "電子制御LSD"],
    talkPoints: ["17年ぶりに復活した伝説のスポーツカー", "直列6気筒エンジンの官能的なサウンド", "BMWのZ4と兄弟車だがトヨタ独自の味付け", "映画ワイルドスピードでも有名な世界的アイコン"],
    rivals: ["日産 フェアレディZ", "BMW Z4"], emoji: "🏎️", popular: false
  },
  {
    id: 109, maker: "ホンダ", name: "シビック", type: "セダン/HB", years: "2021〜現行(11代目)",
    newPrice: "319〜399万円", engine: "1.5Lターボ/2.0L e:HEV", fuel: "ガソリン(レギュラー)/ハイブリッド",
    fuelEco: "16.3〜24.2km/L(WLTC)", drive: "FF",
    length: "4,550mm", width: "1,800mm", height: "1,415mm", weight: "1,360〜1,460kg",
    seats: 5, trunk: "約404L",
    features: ["グローバルスポーツセダン", "TYPE Rあり", "e:HEV追加", "爽快走行"],
    talkPoints: ["TYPE Rは世界最速FFの称号を持つ", "走りの楽しさと実用性を高次元で両立", "ハッチバックのスタイリッシュさが魅力", "北米では大人気で日本でも再評価されている"],
    rivals: ["マツダ MAZDA3", "トヨタ カローラスポーツ", "スバル インプレッサ"], emoji: "🚗", popular: false
  },
  {
    id: 110, maker: "ホンダ", name: "ZR-V", type: "SUV", years: "2023〜現行",
    newPrice: "294〜411万円", engine: "1.5Lターボ/2.0L e:HEV", fuel: "ガソリン(レギュラー)/ハイブリッド",
    fuelEco: "14.6〜22.1km/L(WLTC)", drive: "FF/4WD",
    length: "4,570mm", width: "1,840mm", height: "1,620mm", weight: "1,470〜1,630kg",
    seats: 5, trunk: "約395L",
    features: ["新世代ミッドサイズSUV", "上質な内装", "e:HEV", "Honda SENSING 360"],
    talkPoints: ["ヴェゼルより上質で大人のSUVを求める方に", "内装の質感は欧州プレミアムSUVに匹敵", "e:HEVは力強い加速で走りも申し分なし", "Honda SENSING 360で全方位の安全性"],
    rivals: ["トヨタ ハリアー", "マツダ CX-5", "日産 エクストレイル"], emoji: "🚙", popular: false
  },
  {
    id: 111, maker: "ホンダ", name: "N-WGN", type: "軽自動車", years: "2019〜現行(2代目)",
    newPrice: "129〜182万円", engine: "660cc/660ccターボ", fuel: "ガソリン(レギュラー)",
    fuelEco: "21.2〜23.2km/L(WLTC)", drive: "FF/4WD",
    length: "3,395mm", width: "1,475mm", height: "1,675mm", weight: "840〜920kg",
    seats: 4, trunk: "低床フロア",
    features: ["シンプルデザイン", "Honda SENSING", "テレスコピック付き", "低床荷室"],
    talkPoints: ["シンプルで飽きのこないデザインが長く愛される", "N-BOXより背が低いぶん走りが安定している", "129万円からという手頃さが一番の魅力", "Honda SENSINGが全車標準で安心"],
    rivals: ["ダイハツ ムーヴ", "スズキ ワゴンR", "日産 デイズ"], emoji: "🚗", popular: false
  },
  {
    id: 112, maker: "ホンダ", name: "N-ONE", type: "軽自動車", years: "2020〜現行(2代目)",
    newPrice: "159〜202万円", engine: "660cc/660ccターボ", fuel: "ガソリン(レギュラー)",
    fuelEco: "20.1〜23.0km/L(WLTC)", drive: "FF/4WD",
    length: "3,395mm", width: "1,475mm", height: "1,545mm", weight: "840〜900kg",
    seats: 4, trunk: "コンパクト",
    features: ["レトロモダンデザイン", "6速MT設定", "RS仕様", "N360オマージュ"],
    talkPoints: ["丸目のレトロな可愛さで他の軽と差別化できる", "RSなら6速MTで軽の走りを本気で楽しめる", "背が低くて安定感があり高速道路も安心", "個性的なデザインが好きな方に刺さる一台"],
    rivals: ["スズキ アルトラパン", "ダイハツ ミラトコット"], emoji: "🚗", popular: false
  },
  {
    id: 113, maker: "日産", name: "アリア", type: "SUV(EV)", years: "2022〜現行",
    newPrice: "539〜790万円", engine: "モーター(160kW〜250kW)", fuel: "電気自動車(EV)",
    fuelEco: "航続距離 約470〜640km", drive: "FF/4WD(e-4ORCE)",
    length: "4,595mm", width: "1,850mm", height: "1,665mm", weight: "1,920〜2,230kg",
    seats: 5, trunk: "約466L",
    features: ["日産の旗艦EV", "e-4ORCE", "プロパイロット2.0", "組子パターン"],
    talkPoints: ["日産がリーフで培ったEV技術の集大成", "航続640kmはEVの不安を解消するレベル", "e-4ORCEは4輪個別制御で驚くほど安定する", "組子パターンのグリルは日本の伝統美を表現"],
    rivals: ["トヨタ bZ4X", "ヒョンデ IONIQ 5", "テスラ Model Y"], emoji: "🔋", popular: false
  },
  {
    id: 114, maker: "日産", name: "キックス", type: "SUV", years: "2020〜現行",
    newPrice: "279〜345万円", engine: "1.2L e-POWER", fuel: "ガソリン(レギュラー)※発電用",
    fuelEco: "19.2〜23.0km/L(WLTC)", drive: "FF/4WD",
    length: "4,290mm", width: "1,760mm", height: "1,610mm", weight: "1,340〜1,440kg",
    seats: 5, trunk: "約423L",
    features: ["コンパクトSUV", "e-POWER専用", "プロパイロット", "アラウンドビュー"],
    talkPoints: ["e-POWERのモーター走行で静かでスムーズ", "コンパクトだけど荷室は423Lと十分な広さ", "プロパイロットで長距離も楽々", "手頃な価格でe-POWERのSUVに乗れる"],
    rivals: ["トヨタ カローラクロス", "ホンダ ヴェゼル", "マツダ CX-30"], emoji: "🚙", popular: false
  },
  {
    id: 115, maker: "日産", name: "フェアレディZ", type: "スポーツ", years: "2022〜現行(Z34後期)",
    newPrice: "524〜696万円", engine: "3.0L V6ツインターボ", fuel: "ガソリン(ハイオク)",
    fuelEco: "9.5〜10.2km/L(WLTC)", drive: "FR",
    length: "4,380mm", width: "1,845mm", height: "1,315mm", weight: "1,570〜1,590kg",
    seats: 2, trunk: "約235L",
    features: ["伝統のFRスポーツ", "V6ツインターボ", "6速MT/9速AT", "レトロモダン"],
    talkPoints: ["50年以上の歴史を持つ日本を代表するスポーツカー", "初代S30を彷彿させるレトロモダンなデザインが美しい", "405馬力のV6ツインターボは本物のスポーツカーの証", "6速MTが選べるのは走り好きへの最高のプレゼント"],
    rivals: ["トヨタ スープラ", "シボレー カマロ"], emoji: "🏎️", popular: false
  },
  {
    id: 116, maker: "日産", name: "スカイライン", type: "セダン", years: "2019〜現行(V37後期)",
    newPrice: "435〜644万円", engine: "3.0L V6ターボ/3.0L V6ターボ(400R)", fuel: "ガソリン(ハイオク)",
    fuelEco: "10.0〜10.9km/L(WLTC)", drive: "FR/4WD",
    length: "4,810mm", width: "1,820mm", height: "1,440mm", weight: "1,730〜1,820kg",
    seats: 5, trunk: "約510L",
    features: ["プロパイロット2.0", "400馬力(400R)", "ダイレクトアダプティブステア", "伝統の丸テール"],
    talkPoints: ["日本の自動車史に燦然と輝く名車中の名車", "400Rは400馬力のハイパフォーマンスセダン", "プロパイロット2.0をセダンで初搭載した先進性", "GT-Rと共通のVR30ツインターボエンジン"],
    rivals: ["トヨタ クラウン", "レクサス IS", "BMW 3シリーズ"], emoji: "🚗", popular: false
  },
  {
    id: 117, maker: "日産", name: "デイズ", type: "軽自動車", years: "2019〜現行(2代目)",
    newPrice: "133〜188万円", engine: "660cc/660ccターボ", fuel: "ガソリン(レギュラー)",
    fuelEco: "19.4〜23.3km/L(WLTC)", drive: "FF/4WD",
    length: "3,395mm", width: "1,475mm", height: "1,640mm", weight: "830〜920kg",
    seats: 4, trunk: "通常ワゴン",
    features: ["プロパイロット搭載", "SOSコール", "大画面9インチナビ", "三菱共同開発"],
    talkPoints: ["軽自動車でプロパイロットが使える先進性", "SOSコールで万が一の事故時も安心", "背が高すぎず低すぎずバランスが良い", "133万円からのお手頃価格が嬉しい"],
    rivals: ["スズキ ワゴンR", "ダイハツ ムーヴ", "ホンダ N-WGN"], emoji: "🚗", popular: false
  },
  {
    id: 118, maker: "日産", name: "サクラ", type: "軽自動車(EV)", years: "2022〜現行",
    newPrice: "254〜304万円", engine: "モーター(47kW)", fuel: "電気自動車(EV)",
    fuelEco: "航続距離 約180km", drive: "FF",
    length: "3,395mm", width: "1,475mm", height: "1,655mm", weight: "1,070〜1,080kg",
    seats: 4, trunk: "通常ワゴン",
    features: ["軽EV", "補助金で実質約178万", "V2H対応", "プロパイロット"],
    talkPoints: ["補助金を活用すれば約178万円で買える軽EV", "日常使いの近距離なら180kmの航続距離で十分", "自宅充電なら月の電気代は約2000円程度", "日本カーオブザイヤー受賞の実力派"],
    rivals: ["三菱 eKクロスEV"], emoji: "🔋", popular: false
  },
  {
    id: 119, maker: "日産", name: "エルグランド", type: "ミニバン", years: "2010〜現行(3代目)",
    newPrice: "381〜570万円", engine: "2.5L/3.5L V6", fuel: "ガソリン(レギュラー/ハイオク)",
    fuelEco: "8.7〜10.0km/L(WLTC)", drive: "FF/4WD",
    length: "4,975mm", width: "1,850mm", height: "1,815mm", weight: "1,910〜2,100kg",
    seats: 7, trunk: "大容量",
    features: ["日産フラッグシップミニバン", "低重心で走り良し", "VIPグレード", "ライダー仕様"],
    talkPoints: ["低重心プラットフォームでミニバンとは思えない走り", "アルファードに比べて値落ちが大きく中古はお買い得", "フロントが堂々として高級感がある", "VIPグレードは後席の快適性が抜群"],
    rivals: ["トヨタ アルファード", "トヨタ ヴェルファイア"], emoji: "🚐", popular: false
  }
);
