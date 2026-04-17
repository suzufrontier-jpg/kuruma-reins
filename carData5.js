// CarTalk Pro - 追加車両データ Part 4 (国産車追加)
CAR_DATABASE.push(
  {
    id: 635, maker: "トヨタ", name: "ヤリスクロス", type: "SUV", years: "2020〜現行",
    newPrice: "189〜293万円", engine: "1.5L/1.5L HV", fuel: "ハイブリッド/ガソリン(レギュラー)",
    fuelEco: "17.4〜30.8km/L(WLTC)", drive: "FF/4WD",
    length: "4,180mm", width: "1,765mm", height: "1,590mm", weight: "1,110〜1,270kg",
    seats: 5, trunk: "約390L",
    features: ["コンパクトSUV人気No.1", "ヤリスベース", "アドバンストパーク", "低燃費SUV"],
    talkPoints: ["SUV販売台数No.1の大人気モデル", "ハイブリッドなら30km/L超えの驚異的燃費", "189万円からのSUVは破格のコスパ", "コンパクトで女性にも運転しやすいサイズ"],
    rivals: ["ホンダ ヴェゼル", "マツダ CX-30", "日産 キックス"], emoji: "🚙", popular: false
  },
  {
    id: 636, maker: "トヨタ", name: "グランエース", type: "ワゴン", years: "2019〜現行",
    newPrice: "620〜650万円", engine: "2.8Lディーゼルターボ", fuel: "ディーゼル(軽油)",
    fuelEco: "10.0km/L(WLTC)", drive: "FR",
    length: "5,300mm", width: "1,970mm", height: "1,990mm", weight: "2,690〜2,770kg",
    seats: 6, trunk: "大容量",
    features: ["フルサイズワゴン", "VIP送迎車", "ハイエースベース", "圧倒的室内空間"],
    talkPoints: ["ハイエースベースの超大型VIPワゴン", "芸能人や企業の送迎に使われることが多い", "6人がゆったり座れる圧倒的な広さ", "ディーゼルなので長距離の燃料代も安い"],
    rivals: ["日産 NV350キャラバン"], emoji: "🚐", popular: false
  },
  {
    id: 637, maker: "トヨタ", name: "ハイエース", type: "商用/ワゴン", years: "2004〜現行(200系)",
    newPrice: "287〜418万円", engine: "2.0L/2.7L/2.8Lディーゼル", fuel: "ガソリン(レギュラー)/ディーゼル(軽油)",
    fuelEco: "8.1〜12.4km/L(WLTC)", drive: "FR/4WD",
    length: "4,695〜5,380mm", width: "1,695〜1,880mm", height: "1,980〜2,285mm", weight: "1,690〜2,100kg",
    seats: 10, trunk: "超大容量",
    features: ["商用車の王様", "キャンパー改造人気", "圧倒的耐久性", "サイズ多数"],
    talkPoints: ["商用車の定番中の定番、事業で使うなら間違いない", "キャンピングカーのベース車として大人気", "海外でも耐久性が評価され盗難に注意するほど人気", "20年以上のモデルライフで信頼の熟成"],
    rivals: ["日産 NV350キャラバン"], emoji: "🚐", popular: false
  },
  {
    id: 638, maker: "トヨタ", name: "ランドクルーザー250", type: "SUV", years: "2024〜現行",
    newPrice: "520〜735万円", engine: "2.7L/2.8Lディーゼルターボ/2.4Lターボ HV", fuel: "ガソリン(レギュラー)/ディーゼル/HV",
    fuelEco: "11.0〜14.4km/L(WLTC)", drive: "4WD",
    length: "4,925mm", width: "1,935mm", height: "1,935mm", weight: "2,080〜2,360kg",
    seats: 7, trunk: "大容量",
    features: ["プラド後継", "新GA-Fプラットフォーム", "2.4Lターボ HV新設定", "ラダーフレーム"],
    talkPoints: ["プラドの後継で300系より手頃なランクル", "新型は都会的デザインでオンロードでも映える", "2.4Lターボハイブリッドは力強さと燃費を両立", "ランクルブランドのリセールバリューは健在"],
    rivals: ["三菱 パジェロスポーツ", "日産 パスファインダー"], emoji: "🚙", popular: false
  },
  {
    id: 639, maker: "トヨタ", name: "カローラツーリング", type: "ステーションワゴン", years: "2019〜現行",
    newPrice: "207〜311万円", engine: "1.5L/1.8L HV/2.0L HV", fuel: "ハイブリッド/ガソリン(レギュラー)",
    fuelEco: "19.4〜29.5km/L(WLTC)", drive: "FF/4WD",
    length: "4,495mm", width: "1,745mm", height: "1,460mm", weight: "1,280〜1,450kg",
    seats: 5, trunk: "約392L",
    features: ["実用ワゴン", "カローラの派生", "荷室たっぷり", "低燃費ワゴン"],
    talkPoints: ["セダンの走りとワゴンの積載力を両立した万能車", "ハイブリッドなら29km/L超えで経済的", "アウトドアやキャンプの荷物もしっかり積める", "レヴォーグより手頃にワゴンライフを始められる"],
    rivals: ["スバル レヴォーグ", "マツダ MAZDA6ワゴン"], emoji: "🚗", popular: false
  },
  {
    id: 640, maker: "トヨタ", name: "GRヤリス", type: "スポーツ", years: "2020〜現行",
    newPrice: "265〜457万円", engine: "1.6L直3ターボ/1.5L直3", fuel: "ガソリン(ハイオク/レギュラー)",
    fuelEco: "13.6km/L(WLTC)", drive: "4WD/FF",
    length: "3,995mm", width: "1,805mm", height: "1,455mm", weight: "1,250〜1,340kg",
    seats: 4, trunk: "約174L",
    features: ["WRC直系モデル", "GR-FOURスポーツ4WD", "1.6Lターボ272馬力", "6速MT/8速AT"],
    talkPoints: ["WRCで勝つために生まれたホモロゲマシン", "1.6L直3ターボは272馬力のモンスターエンジン", "GR-FOUR 4WDシステムで驚異的なコーナリング", "改良型はATも追加され街乗りも快適に"],
    rivals: ["スバル WRX S4", "ホンダ シビックTYPE R"], emoji: "🏎️", popular: false
  },
  {
    id: 641, maker: "トヨタ", name: "センチュリー(SUV)", type: "SUV", years: "2024〜現行",
    newPrice: "2,500万円", engine: "3.5L V6 PHEV", fuel: "プラグインハイブリッド(ハイオク)",
    fuelEco: "非公表", drive: "4WD",
    length: "5,205mm", width: "1,990mm", height: "1,805mm", weight: "2,570kg",
    seats: 4, trunk: "大容量",
    features: ["超高級ショーファーSUV", "匠の手仕上げ", "後席最優先", "完全受注生産"],
    talkPoints: ["2500万円のトヨタ最高級SUV、まさに走る応接室", "完全受注生産で購入にはトヨタの審査が必要", "後席には飛行機ファーストクラスを超える快適装備", "ロールスロイスやベントレーに対抗する日本の誇り"],
    rivals: ["ロールスロイス カリナン", "ベントレー ベンテイガ"], emoji: "🚙", popular: false
  },
  {
    id: 642, maker: "ホンダ", name: "CR-V", type: "SUV", years: "2024〜現行(6代目)",
    newPrice: "409〜469万円", engine: "2.0L e:HEV/1.5Lターボ PHEV", fuel: "ハイブリッド/PHEV(レギュラー)",
    fuelEco: "14.6〜21.5km/L(WLTC)", drive: "FF/4WD",
    length: "4,695mm", width: "1,865mm", height: "1,680mm", weight: "1,680〜1,900kg",
    seats: 5, trunk: "約594L",
    features: ["ミドルサイズSUV", "e:HEV新搭載", "5人乗りへ変更", "Honda SENSING 360+"],
    talkPoints: ["世界で累計1200万台以上売れたホンダSUVの代表格", "新型は3列廃止で5人乗りに、荷室が大幅拡大", "PHEVモデルはEV走行も可能でエコ", "Honda SENSING 360+は最新の全方位安全システム"],
    rivals: ["トヨタ RAV4", "日産 エクストレイル", "マツダ CX-5"], emoji: "🚙", popular: false
  },
  {
    id: 643, maker: "ホンダ", name: "N-VAN", type: "軽商用", years: "2018〜現行",
    newPrice: "127〜187万円", engine: "660cc/660ccターボ", fuel: "ガソリン(レギュラー)",
    fuelEco: "17.0〜19.2km/L(WLTC)", drive: "FF/4WD",
    length: "3,395mm", width: "1,475mm", height: "1,945mm", weight: "930〜1,010kg",
    seats: 4, trunk: "超大容量(助手席畳み)",
    features: ["助手席格納で広大空間", "N-BOXベース", "車中泊仕様人気", "商用&趣味"],
    talkPoints: ["助手席を完全に畳むと軽とは思えない広大な空間", "車中泊ブームで趣味車としても注目度急上昇中", "仕事用にもレジャー用にも使える万能軽バン", "ホンダのセンタータンクレイアウトならではの低床"],
    rivals: ["スズキ エブリイ", "ダイハツ アトレー"], emoji: "🚐", popular: false
  },
  {
    id: 644, maker: "ホンダ", name: "WR-V", type: "SUV", years: "2024〜現行",
    newPrice: "209〜248万円", engine: "1.5L直4", fuel: "ガソリン(レギュラー)",
    fuelEco: "16.2〜16.4km/L(WLTC)", drive: "FF",
    length: "4,325mm", width: "1,790mm", height: "1,650mm", weight: "1,210〜1,220kg",
    seats: 5, trunk: "約458L",
    features: ["コスパ最強SUV", "ガソリン専用", "シンプル設計", "大容量荷室"],
    talkPoints: ["209万円からのSUVはホンダの価格破壊", "ハイブリッドなしのシンプルさが逆に潔い", "荷室458Lはヴェゼルを大きく上回る実用性", "必要十分な装備でコスパ重視の方に最適"],
    rivals: ["トヨタ ヤリスクロス", "マツダ CX-30"], emoji: "🚙", popular: false
  },
  {
    id: 645, maker: "日産", name: "リーフ", type: "ハッチバック(EV)", years: "2017〜現行(2代目)",
    newPrice: "381〜583万円", engine: "モーター(110kW/160kW)", fuel: "電気自動車(EV)",
    fuelEco: "航続距離 約322〜450km", drive: "FF",
    length: "4,480mm", width: "1,790mm", height: "1,565mm", weight: "1,520〜1,680kg",
    seats: 5, trunk: "約405L",
    features: ["世界初量産EV", "e+大容量バッテリー", "e-Pedal", "V2H対応"],
    talkPoints: ["世界で最も売れたEVの先駆者、60万台以上の実績", "e-Pedalはワンペダルで加減速でき楽チン", "V2H対応で災害時に家庭の電源として使える", "補助金適用で実質250万円台から購入可能"],
    rivals: ["テスラ Model 3", "ヒョンデ IONIQ 5", "日産 サクラ"], emoji: "🔋", popular: false
  },
  {
    id: 646, maker: "日産", name: "GT-R", type: "スポーツ", years: "2007〜2024(R35/生産終了)",
    newPrice: "1,375〜2,464万円", engine: "3.8L V6ツインターボ", fuel: "ガソリン(ハイオク)",
    fuelEco: "7.8km/L(WLTC)", drive: "4WD(ATTESA E-TS)",
    length: "4,710mm", width: "1,895mm", height: "1,370mm", weight: "1,740〜1,790kg",
    seats: 4, trunk: "約249L",
    features: ["日本が誇るスーパーカー", "手組みエンジン", "ニュル7分切り", "NISMO仕様"],
    talkPoints: ["ポルシェやフェラーリと渡り合える日本の誇り", "各エンジンは匠が1基1基手作業で組み上げる", "R35は17年の歴史を経て2024年に生産終了", "中古でも値段が上がり続ける投資対象としても注目"],
    rivals: ["ポルシェ 911", "シボレー コルベット", "BMW M4"], emoji: "🏎️", popular: false
  },
  {
    id: 647, maker: "日産", name: "ノートオーラ", type: "コンパクト", years: "2021〜現行",
    newPrice: "269〜305万円", engine: "1.2L e-POWER(発電用)", fuel: "ガソリン(レギュラー)※発電用",
    fuelEco: "23.3〜27.2km/L(WLTC)", drive: "FF/4WD",
    length: "4,045mm", width: "1,735mm", height: "1,525mm", weight: "1,240〜1,360kg",
    seats: 5, trunk: "約340L",
    features: ["プレミアムコンパクト", "ツイード内装", "BOSEサウンド", "3ナンバー"],
    talkPoints: ["ノートの上質バージョン、内装の質感が段違い", "ツイード素材のシートは他にない高級感", "BOSEサウンドシステムで極上の音楽体験", "3ナンバーボディでワイド感のある堂々とした佇まい"],
    rivals: ["トヨタ アクア", "ホンダ フィット", "マツダ MAZDA2"], emoji: "🚗", popular: false
  },
  {
    id: 648, maker: "マツダ", name: "CX-80", type: "SUV", years: "2024〜現行",
    newPrice: "394〜657万円", engine: "3.3Lディーゼル/2.5L PHEV", fuel: "ディーゼル(軽油)/PHEV",
    fuelEco: "13.8〜18.5km/L(WLTC)", drive: "FR/4WD",
    length: "4,990mm", width: "1,890mm", height: "1,710mm", weight: "1,910〜2,100kg",
    seats: 7, trunk: "3列SUV",
    features: ["CX-8後継の3列SUV", "直6ディーゼル", "PHEV設定", "FRベース"],
    talkPoints: ["CX-8の正統後継、3列SUVを求める方に", "直6ディーゼルは力強くて静かな走り", "PHEVモデルならEV走行も可能で環境にも配慮", "FRベースで走りの質が根本的に違う"],
    rivals: ["トヨタ ハリアー", "ホンダ CR-V"], emoji: "🚙", popular: false
  },
  {
    id: 649, maker: "マツダ", name: "CX-3", type: "SUV", years: "2015〜現行",
    newPrice: "192〜307万円", engine: "1.5L/2.0L/1.8Lディーゼル", fuel: "ガソリン(レギュラー)/ディーゼル",
    fuelEco: "15.7〜23.2km/L(WLTC)", drive: "FF/4WD",
    length: "4,275mm", width: "1,765mm", height: "1,550mm", weight: "1,210〜1,370kg",
    seats: 5, trunk: "約350L",
    features: ["コンパクトSUV", "魂動デザイン", "ディーゼル設定", "都市向け"],
    talkPoints: ["192万円からのマツダSUV、入門に最適", "デミオベースで取り回しやすいサイズ感", "ディーゼルモデルなら軽油で経済的", "デザインは小さくてもマツダらしい美しさ"],
    rivals: ["トヨタ ヤリスクロス", "ホンダ ヴェゼル"], emoji: "🚙", popular: false
  },
  {
    id: 650, maker: "スバル", name: "ソルテラ", type: "SUV(EV)", years: "2022〜現行",
    newPrice: "594〜682万円", engine: "モーター(150kW/80kWx2)", fuel: "電気自動車(EV)",
    fuelEco: "航続距離 約487〜567km", drive: "FF/4WD",
    length: "4,690mm", width: "1,860mm", height: "1,650mm", weight: "1,910〜2,020kg",
    seats: 5, trunk: "約452L",
    features: ["スバル初の量産EV", "トヨタ共同開発", "AWD設定あり", "スバルの走り"],
    talkPoints: ["bZ4Xの兄弟車だがスバルらしいAWD制御が違い", "スバル初のEVとして歴史的な一台", "補助金活用でかなりお得に手に入る", "アイサイトではなくスバルの新安全システム搭載"],
    rivals: ["トヨタ bZ4X", "日産 アリア", "ヒョンデ IONIQ 5"], emoji: "🔋", popular: false
  },
  {
    id: 651, maker: "スバル", name: "レイバック", type: "SUV", years: "2023〜現行",
    newPrice: "399万円", engine: "1.8L水平対向ターボ", fuel: "ガソリン(レギュラー)",
    fuelEco: "16.5km/L(WLTC)", drive: "AWD",
    length: "4,770mm", width: "1,820mm", height: "1,570mm", weight: "1,600kg",
    seats: 5, trunk: "約492L",
    features: ["レヴォーグSUV", "都市型クロスオーバー", "1グレード戦略", "上品なデザイン"],
    talkPoints: ["レヴォーグをSUV化した都市型クロスオーバー", "悩まない1グレード＋オプション選択式", "レヴォーグの走りの良さはそのまま車高アップ", "温泉旅行やゴルフにちょうどいい大人の車"],
    rivals: ["マツダ CX-60", "トヨタ ハリアー"], emoji: "🚙", popular: false
  },
  {
    id: 652, maker: "スズキ", name: "フロンクス", type: "SUV", years: "2024〜現行",
    newPrice: "219〜254万円", engine: "1.5L マイルドHV", fuel: "ガソリン(レギュラー)",
    fuelEco: "17.8〜19.0km/L(WLTC)", drive: "FF/4WD",
    length: "3,995mm", width: "1,765mm", height: "1,550mm", weight: "1,060〜1,140kg",
    seats: 5, trunk: "約341L",
    features: ["クーペSUV", "インドからの刺客", "コスパ抜群", "輸入モデル"],
    talkPoints: ["インド生産の逆輸入SUVで219万円の衝撃価格", "クーペスタイルで同価格帯では最もスタイリッシュ", "スズキの軽量技術で軽快な走りを実現", "海外で大人気のモデルがついに日本上陸"],
    rivals: ["トヨタ ヤリスクロス", "ホンダ WR-V"], emoji: "🚙", popular: false
  },
  {
    id: 653, maker: "ダイハツ", name: "アトレー", type: "軽商用", years: "2021〜現行",
    newPrice: "156〜209万円", engine: "660ccターボ", fuel: "ガソリン(レギュラー)",
    fuelEco: "14.7km/L(WLTC)", drive: "FR/4WD",
    length: "3,395mm", width: "1,475mm", height: "1,890mm", weight: "970〜1,020kg",
    seats: 4, trunk: "超大容量",
    features: ["軽キャブオーバーバン", "全車ターボ", "車中泊人気", "DNGA採用"],
    talkPoints: ["全車ターボで高速道路でもストレスのない走り", "車中泊カスタムのベースとして大人気", "荷室は大人が寝れるほどの広さ", "DNGAで従来より走りと快適性が大幅進化"],
    rivals: ["スズキ エブリイ", "ホンダ N-VAN"], emoji: "🚐", popular: false
  },
  {
    id: 654, maker: "ダイハツ", name: "コペン", type: "スポーツ", years: "2014〜現行(2代目)",
    newPrice: "188〜213万円", engine: "660ccターボ", fuel: "ガソリン(レギュラー)",
    fuelEco: "18.6〜19.2km/L(WLTC)", drive: "FF",
    length: "3,395mm", width: "1,475mm", height: "1,280mm", weight: "850〜870kg",
    seats: 2, trunk: "約60L",
    features: ["軽オープンスポーツ", "電動開閉ルーフ", "着せ替えボディ", "5速MT/CVT"],
    talkPoints: ["200万円以下で買える唯一のオープンスポーツカー", "電動ルーフが約20秒で自動開閉する爽快感", "GR SPORTモデルはよりスポーティな走り", "軽自動車なので維持費もリーズナブル"],
    rivals: ["マツダ ロードスター(価格帯違いだが)"], emoji: "🏎️", popular: false
  },
  {
    id: 655, maker: "三菱", name: "エクリプスクロス", type: "SUV", years: "2018〜現行",
    newPrice: "259〜396万円", engine: "1.5Lターボ/2.4L PHEV", fuel: "ガソリン(レギュラー)/PHEV",
    fuelEco: "12.4〜16.4km/L(WLTC)", drive: "FF/4WD",
    length: "4,545mm", width: "1,805mm", height: "1,685mm", weight: "1,460〜1,900kg",
    seats: 5, trunk: "約359L",
    features: ["三菱SUV", "PHEV設定", "S-AWC", "ダイナミックシールド"],
    talkPoints: ["PHEVモデルはEV走行57kmで普段使いは電気だけ", "三菱自慢のS-AWCで圧倒的な走行安定性", "アウトランダーより手頃なサイズ感", "V2H対応で防災にも役立つ"],
    rivals: ["トヨタ カローラクロス", "ホンダ ヴェゼル"], emoji: "🚙", popular: false
  },
  {
    id: 656, maker: "三菱", name: "eKクロスEV", type: "軽自動車(EV)", years: "2022〜現行",
    newPrice: "254〜304万円", engine: "モーター(47kW)", fuel: "電気自動車(EV)",
    fuelEco: "航続距離 約180km", drive: "FF",
    length: "3,395mm", width: "1,475mm", height: "1,655mm", weight: "1,080kg",
    seats: 4, trunk: "通常ワゴン",
    features: ["軽EV", "サクラの兄弟", "V2H対応", "マイパイロット"],
    talkPoints: ["日産サクラの兄弟車で三菱デザインが好みならこちら", "補助金で実質約178万円と驚きの安さ", "V2H対応で災害時の非常用電源にもなる", "三菱のSUVテイストのデザインが個性的"],
    rivals: ["日産 サクラ"], emoji: "🔋", popular: false
  },
  {
    id: 657, maker: "レクサス", name: "LBX", type: "SUV", years: "2023〜現行",
    newPrice: "460〜576万円", engine: "1.5L HV/1.6Lターボ(MORIZO RR)", fuel: "ハイブリッド(レギュラー)/ハイオク",
    fuelEco: "22.7〜27.7km/L(WLTC)", drive: "FF/4WD",
    length: "4,190mm", width: "1,825mm", height: "1,545mm", weight: "1,310〜1,440kg",
    seats: 5, trunk: "約319L",
    features: ["最小レクサス", "MORIZO RR設定", "ヤリスクロスベース", "コンパクト高級"],
    talkPoints: ["レクサスで最もコンパクト、都市部に最適なサイズ", "MORIZO RRは豊田社長肝入りのスポーツモデル", "ヤリスクロスベースだが内外装の質感は別物", "460万円からレクサスブランドに乗れる入門モデル"],
    rivals: ["BMW X1", "アウディ Q2", "ボルボ XC40"], emoji: "🚙", popular: false
  },
  {
    id: 658, maker: "レクサス", name: "LC", type: "クーペ/コンバーチブル", years: "2017〜現行",
    newPrice: "1,350〜1,525万円", engine: "5.0L V8/3.5L V6 HV", fuel: "ガソリン(ハイオク)/ハイブリッド",
    fuelEco: "8.4〜14.9km/L(WLTC)", drive: "FR",
    length: "4,770mm", width: "1,920mm", height: "1,345mm", weight: "1,950〜2,020kg",
    seats: 4, trunk: "約172L",
    features: ["レクサスフラッグシップクーペ", "5.0L V8", "匠の技で組立", "美しいデザイン"],
    talkPoints: ["レクサスが世界に放つ最も美しいクーペ", "5.0L V8の自然吸気エンジンは希少で官能的", "コンバーチブルは4シーターオープンの贅沢体験", "匠の手による仕上げで工業製品を超えた芸術品"],
    rivals: ["BMW 8シリーズ", "ポルシェ 911"], emoji: "🏎️", popular: false
  },
  {
    id: 659, maker: "レクサス", name: "ES", type: "セダン", years: "2018〜現行",
    newPrice: "599〜728万円", engine: "2.5L HV", fuel: "ハイブリッド(レギュラー)",
    fuelEco: "20.6〜22.3km/L(WLTC)", drive: "FF",
    length: "4,975mm", width: "1,865mm", height: "1,445mm", weight: "1,680〜1,730kg",
    seats: 5, trunk: "約454L",
    features: ["FF大型セダン", "デジタルアウターミラー世界初", "上質な乗り味", "ハイブリッド専用"],
    talkPoints: ["レクサスの大型FFセダン、広い室内空間が魅力", "デジタルアウターミラーを世界で初めて採用した先進性", "ハイブリッド専用で燃費22km/Lは大型セダンとして驚異的", "後席の快適性はショーファーカーとしても十分"],
    rivals: ["メルセデス Eクラス", "BMW 5シリーズ", "トヨタ クラウン"], emoji: "🚗", popular: false
  }
);
