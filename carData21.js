// CarTalk Pro - 追加車両データ Part 21 (ノートオーラ独立 + レクサスLX + 未対応車種の深掘り)
CAR_DATABASE.push(
    // ===== 日産 ノートオーラ (ノートとは別モデル) =====
    {
        id: 525, name: "ノートオーラ", maker: "日産", type: "コンパクト(プレミアム)", years: "2021〜現行",
        newPrice: "269〜309万円", engine: "1.2L e-POWER(発電用)", fuel: "ガソリン(レギュラー)※発電用",
        fuelEco: "23.3〜27.2km/L(WLTC)", drive: "FF/4WD",
        length: "4,045mm", width: "1,735mm", height: "1,525mm", weight: "1,260〜1,370kg",
        seats: 5, trunk: "約340L",
        features: ["プレミアムコンパクト", "3ナンバーワイドボディ", "BOSE音響", "ツイード調シート"],
        talkPoints: [
            "ノートの上級版ではなく完全に別モノの質感を持つプレミアムカー",
            "全幅1,735mmの3ナンバーボディで堂々とした存在感",
            "BOSEサウンドやツイード調シートなど輸入車並みの装備",
            "e-POWERの静粛性と上質な乗り心地でクラスを超えた満足感"
        ],
        rivals: ["トヨタ アクア", "ホンダ フィット LUXE", "マツダ MAZDA2"],
        emoji: "🚗", popular: false
    },
    // ===== ノートオーラ NISMO =====
    {
        id: 526, name: "ノートオーラ NISMO", maker: "日産", type: "コンパクトスポーツ", years: "2021〜現行",
        newPrice: "309〜345万円", engine: "1.2L e-POWER(チューニング)", fuel: "ガソリン(レギュラー)※発電用",
        fuelEco: "22.7〜23.3km/L(WLTC)", drive: "FF",
        length: "4,120mm", width: "1,735mm", height: "1,505mm", weight: "1,280kg",
        seats: 5, trunk: "約340L",
        features: ["NISMOチューニング", "専用サスペンション", "専用エクステリア", "レカロシート(OP)"],
        talkPoints: [
            "日産ワークスNISMOが手がけたプレミアムスポーツコンパクト",
            "専用サスペンションで走りの質感がまるで別物",
            "レカロシートオプションでスポーツマインドをくすぐる",
            "外観はエアロパーツで精悍に変身、特別感が強い"
        ],
        rivals: ["GRヤリス", "フィット RS", "スイフトスポーツ"],
        emoji: "🏎️", popular: false
    },

    // ===== レクサス LX =====
    {
        id: 527, name: "LX", maker: "レクサス", type: "フルサイズSUV", years: "2022〜現行(LX600)",
        newPrice: "1,250〜1,800万円", engine: "3.5L V6ツインターボ", fuel: "ガソリン(ハイオク)",
        fuelEco: "8.0〜8.1km/L(WLTC)", drive: "4WD",
        length: "5,100mm", width: "1,990mm", height: "1,885mm", weight: "2,530〜2,600kg",
        seats: 5, trunk: "約540L(5人乗り)",
        features: ["ランクル300ベース最高峰", "EXECUTIVE専用ラウンジ", "4座独立仕様", "クロフォードレザー"],
        talkPoints: [
            "ランドクルーザー300をベースにした最高峰のラグジュアリーSUV",
            "EXECUTIVE4座仕様は後席にマッサージ機能付きで移動のすべてが極上",
            "オフロード性能はランクル譲り、悪路もドレスアップ姿のまま駆け抜ける",
            "リセールバリューはレクサス最強クラス、資産価値としても優秀"
        ],
        rivals: ["メルセデス GLS", "BMW X7", "キャデラック エスカレード"],
        emoji: "🚙", popular: false
    },

    // ===== レクサス NX(450h+ PHEV独立) =====
    {
        id: 528, name: "NX450h+", maker: "レクサス", type: "SUV(PHEV)", years: "2021〜現行",
        newPrice: "714〜738万円", engine: "2.5L PHEV", fuel: "プラグインハイブリッド(レギュラー)",
        fuelEco: "19.8km/L(WLTC) EV航続88km", drive: "4WD(E-Four)",
        length: "4,660mm", width: "1,865mm", height: "1,660mm", weight: "1,990kg",
        seats: 5, trunk: "約520L",
        features: ["レクサス初PHEV", "EV走行88km", "急速充電対応", "F SPORT設定あり"],
        talkPoints: [
            "レクサス初のPHEVモデル、日常はほぼEV走行でガソリン代激減",
            "EV航続88kmは通勤なら充電のみでまかなえる距離",
            "急速充電対応で出先での充電も安心",
            "PHEVの静粛性はレクサスの上質さをさらに際立たせる"
        ],
        rivals: ["BMW X3 xDrive30e", "ボルボ XC60 Recharge", "三菱 アウトランダーPHEV"],
        emoji: "🚙", popular: false
    },

    // ===== トヨタ クラウン スポーツ =====
    {
        id: 529, name: "クラウン スポーツ", maker: "トヨタ", type: "SUVクーペ", years: "2023〜現行",
        newPrice: "590〜765万円", engine: "2.5L HV/2.5L PHEV", fuel: "ハイブリッド/PHEV(レギュラー)",
        fuelEco: "18.4〜22.4km/L(WLTC)", drive: "FF/4WD(E-Four)",
        length: "4,720mm", width: "1,880mm", height: "1,565mm", weight: "1,810〜2,030kg",
        seats: 5, trunk: "約346L",
        features: ["新型クラウン第2弾", "SUVクーペスタイル", "PHEV設定", "21インチホイール"],
        talkPoints: [
            "クラウンの名を冠したスポーツSUVクーペ、街で映えるスタイル",
            "PHEVモデルは90km以上のEV走行が可能",
            "全高1,565mmの低さがスポーティさを強調",
            "クラウンブランドの安心感とSUVの使い勝手を両立"
        ],
        rivals: ["BMW X4", "メルセデス GLC クーペ", "アウディ Q5 Sportback"],
        emoji: "🚙", popular: false
    },

    // ===== トヨタ クラウン エステート =====
    {
        id: 530, name: "クラウン エステート", maker: "トヨタ", type: "ワゴン", years: "2024〜現行",
        newPrice: "590〜765万円", engine: "2.5L HV/2.5L PHEV", fuel: "ハイブリッド/PHEV(レギュラー)",
        fuelEco: "18.0〜22.0km/L(WLTC)", drive: "4WD(E-Four)",
        length: "4,930mm", width: "1,880mm", height: "1,620mm", weight: "1,900〜2,100kg",
        seats: 5, trunk: "約620L",
        features: ["クラウンのワゴン版", "大容量ラゲッジ", "PHEV設定", "レヴォーグ対抗"],
        talkPoints: [
            "クラウンに待望のワゴンモデルが登場、実用性と高級感を両立",
            "荷室620Lはアウトドアギアも余裕で積めるの大容量",
            "PHEVモデルなら日常はEV走行で経済的",
            "日本で数少ないプレミアムワゴンの選択肢"
        ],
        rivals: ["スバル レヴォーグ", "ボルボ V60", "メルセデス Cクラス ステーションワゴン"],
        emoji: "🚗", popular: false
    },

    // ===== トヨタ クラウン セダン =====
    {
        id: 531, name: "クラウン セダン", maker: "トヨタ", type: "セダン(FCEV/HV)", years: "2023〜現行",
        newPrice: "730〜830万円", engine: "2.5L HV/水素FCEV", fuel: "ハイブリッド/水素(FCEV)",
        fuelEco: "15.7km/L(WLTC) ※HV", drive: "FR(HV)/4WD(FCEV)",
        length: "5,030mm", width: "1,890mm", height: "1,470mm", weight: "1,920〜2,000kg",
        seats: 5, trunk: "約480L",
        features: ["正統派セダン復活", "水素FCEV設定", "FR駆動(HV)", "ショーファー向け"],
        talkPoints: [
            "クラウンの正統派セダンが5mオーバーのフルサイズで復活",
            "FCEVモデルは水素で走る究極のクリーンカー",
            "HVモデルはFR駆動で正統派セダンの走りを堪能できる",
            "後席の広さはショーファーカーとしても十分な空間"
        ],
        rivals: ["レクサス ES", "メルセデス Eクラス", "BMW 5シリーズ"],
        emoji: "🚗", popular: false
    },

    // ===== 日産 サクラ =====
    {
        id: 532, name: "サクラ", maker: "日産", type: "軽自動車(EV)", years: "2022〜現行",
        newPrice: "254〜304万円", engine: "モーター(47kw/195Nm)", fuel: "電気(EV)",
        fuelEco: "航続距離 約180km", drive: "FF",
        length: "3,395mm", width: "1,475mm", height: "1,790mm", weight: "1,070〜1,080kg",
        seats: 4, trunk: "ハイトワゴン",
        features: ["軽EV", "航続180km", "V2H対応", "先進安全装備"],
        talkPoints: [
            "日本初の本格軽EVとして大ヒット、補助金で実質100万円台から買える",
            "日常の買い物・通勤なら航続180kmで十分カバーできる",
            "V2H対応で災害時に家庭への給電も可能",
            "EVならではの静粛性とトルクフルな出足が気持ちいい"
        ],
        rivals: ["三菱 eKクロスEV", "ホンダ N-VAN e:"],
        emoji: "🚗", popular: false
    },

    // ===== 三菱 eKクロスEV =====
    {
        id: 533, name: "eKクロスEV", maker: "三菱", type: "軽自動車(EV)", years: "2022〜現行",
        newPrice: "254〜304万円", engine: "モーター(47kw/195Nm)", fuel: "電気(EV)",
        fuelEco: "航続距離 約180km", drive: "FF",
        length: "3,395mm", width: "1,475mm", height: "1,770mm", weight: "1,060〜1,080kg",
        seats: 4, trunk: "ハイトワゴン",
        features: ["軽EV", "サクラ兄弟車", "V2H/V2L対応", "マイパイロット搭載"],
        talkPoints: [
            "日産サクラの兄弟車だが三菱らしいSUVテイストの外観",
            "V2LでアウトドアでもEVから家電に給電できる便利さ",
            "マイパイロットで高速道路の運転支援も充実",
            "アウトドア志向の方にはサクラよりこちらがおすすめ"
        ],
        rivals: ["日産 サクラ", "ホンダ N-VAN e:"],
        emoji: "🚗", popular: false
    },

    // ===== ホンダ N-VAN e: =====
    {
        id: 534, name: "N-VAN e:", maker: "ホンダ", type: "軽商用(EV)", years: "2024〜現行",
        newPrice: "243〜291万円", engine: "モーター", fuel: "電気(EV)",
        fuelEco: "航続距離 約245km", drive: "FF",
        length: "3,395mm", width: "1,475mm", height: "1,945mm", weight: "1,060〜1,100kg",
        seats: 2, trunk: "大容量(商用仕様)",
        features: ["軽商用EV", "助手席側ピラーレス", "航続245km", "フルフラット荷室"],
        talkPoints: [
            "配送車のEV化を狙ったホンダの軽商用EV",
            "助手席側ピラーレスで大きな荷物の積み下ろしが楽々",
            "航続245kmは軽EVクラストップの実力",
            "商用だけでなく趣味のトランポやキャンプにも最適"
        ],
        rivals: ["日産 サクラ", "三菱 eKクロスEV"],
        emoji: "🚐", popular: false
    },

    // ===== トヨタ センチュリーSUV =====
    {
        id: 535, name: "センチュリー(SUV)", maker: "トヨタ", type: "超高級SUV", years: "2024〜現行",
        newPrice: "2,500万円", engine: "3.5L V6 PHEV", fuel: "プラグインハイブリッド(ハイオク)",
        fuelEco: "約14.2km/L(WLTC)", drive: "4WD(E-Four Advanced)",
        length: "5,205mm", width: "1,990mm", height: "1,805mm", weight: "2,570kg",
        seats: 4, trunk: "専用設計",
        features: ["日本最高峰の一台", "完全受注生産", "4座仕様", "観音開きドア"],
        talkPoints: [
            "トヨタ最高峰のセンチュリーがSUVボディで新登場",
            "2,500万円の価格に見合う匠の技が随所に光る特別な一台",
            "観音開きリアドアは乗降を儀式に変える存在感",
            "完全受注生産で所有すること自体がステータス"
        ],
        rivals: ["ロールス・ロイス カリナン", "ベントレー ベンテイガ", "メルセデス マイバッハGLS"],
        emoji: "🚙", popular: false
    },

    // ===== トヨタ bZ4X =====
    {
        id: 536, name: "bZ4X", maker: "トヨタ", type: "EV SUV", years: "2022〜現行",
        newPrice: "550〜650万円", engine: "モーター(前後)", fuel: "電気(EV)",
        fuelEco: "航続距離 約559km", drive: "FF/4WD",
        length: "4,690mm", width: "1,860mm", height: "1,650mm", weight: "1,920〜2,010kg",
        seats: 5, trunk: "約452L",
        features: ["トヨタ初本格EV", "ソーラールーフ(OP)", "スバル共同開発", "V2H対応"],
        talkPoints: [
            "トヨタが満を持して投入した本格BEV第1弾",
            "航続559kmはEVとして安心感のある数値",
            "ソーラールーフオプションは年間約1,800km分の発電が可能",
            "サブスクKINTOなら月額利用で気軽にEV体験"
        ],
        rivals: ["日産 アリア", "スバル ソルテラ", "ヒョンデ IONIQ 5"],
        emoji: "🚙", popular: false
    },

    // ===== スバル ソルテラ =====
    {
        id: 537, name: "ソルテラ", maker: "スバル", type: "EV SUV", years: "2022〜現行",
        newPrice: "594〜682万円", engine: "モーター(前後)", fuel: "電気(EV)",
        fuelEco: "航続距離 約567km", drive: "4WD(AWD)",
        length: "4,690mm", width: "1,860mm", height: "1,650mm", weight: "1,930〜2,020kg",
        seats: 5, trunk: "約452L",
        features: ["スバル初EV", "トヨタ共同開発", "シンメトリカルAWD", "X-MODE(EV版)"],
        talkPoints: [
            "スバル初のEVはbZ4Xの兄弟車だがAWDの味付けはスバルらしさ全開",
            "X-MODEのEV版で悪路でも安心の走破性",
            "シンメトリカルAWDの走りの安定感はガソリン車同様",
            "トヨタベースなのでEVの信頼性も安心"
        ],
        rivals: ["トヨタ bZ4X", "日産 アリア", "ヒョンデ IONIQ 5"],
        emoji: "🚙", popular: false
    },

    // ===== ホンダ ZR-V =====
    {
        id: 538, name: "ZR-V", maker: "ホンダ", type: "SUV", years: "2023〜現行",
        newPrice: "294〜411万円", engine: "2.0L e:HEV/1.5Lターボ", fuel: "ハイブリッド/ガソリン(レギュラー)",
        fuelEco: "14.6〜22.0km/L(WLTC)", drive: "FF/4WD",
        length: "4,570mm", width: "1,840mm", height: "1,620mm", weight: "1,460〜1,630kg",
        seats: 5, trunk: "約395L",
        features: ["ミドルサイズSUV", "e:HEV搭載", "シビックベース", "スポーティデザイン"],
        talkPoints: [
            "ヴェゼルとCR-Vの間を埋めるホンダの本命ミドルSUV",
            "シビックベースなので走りの良さはSUV離れしている",
            "e:HEVの走りは力強く上質、高速道路も快適",
            "マツダCX-5やハリアーからの乗り換え候補として注目"
        ],
        rivals: ["トヨタ ハリアー", "マツダ CX-5", "日産 エクストレイル"],
        emoji: "🚙", popular: false
    },

    // ===== ホンダ WR-V =====
    {
        id: 539, name: "WR-V", maker: "ホンダ", type: "SUV", years: "2024〜現行",
        newPrice: "209〜249万円", engine: "1.5L", fuel: "ガソリン(レギュラー)",
        fuelEco: "16.2〜16.4km/L(WLTC)", drive: "FF",
        length: "4,325mm", width: "1,790mm", height: "1,650mm", weight: "1,210〜1,220kg",
        seats: 5, trunk: "約458L",
        features: ["コスパ最強SUV", "広い荷室", "ホンダセンシング", "200万円台前半"],
        talkPoints: [
            "200万円台前半で買えるホンダのコスパ最強SUV",
            "荷室458Lはクラストップレベルの大容量",
            "ハイブリッドがない分シンプルで価格を抑えている",
            "初めてのSUVや2台持ちのセカンドカーとして最適"
        ],
        rivals: ["トヨタ ライズ", "スズキ クロスビー", "ダイハツ ロッキー"],
        emoji: "🚙", popular: false
    },

    // ===== 日産 アリア =====
    {
        id: 540, name: "アリア", maker: "日産", type: "EV SUV", years: "2022〜現行",
        newPrice: "539〜842万円", engine: "モーター(前/前後)", fuel: "電気(EV)",
        fuelEco: "航続距離 約470〜640km", drive: "FF/4WD(e-4ORCE)",
        length: "4,595mm", width: "1,850mm", height: "1,665mm", weight: "1,920〜2,200kg",
        seats: 5, trunk: "約466L",
        features: ["日産のフラッグシップEV", "e-4ORCE", "シームレスインテリア", "プロパイロット2.0"],
        talkPoints: [
            "日産がリーフの次に放ったプレミアムEVクロスオーバー",
            "e-4ORCE AWDは前後モーターを緻密に制御して圧倒的な安定感",
            "航続640km(B9 e-4ORCE)は東京〜大阪も余裕でカバー",
            "近未来的なシームレスインテリアはEVならではの新しさ"
        ],
        rivals: ["トヨタ bZ4X", "ヒョンデ IONIQ 5", "テスラ Model Y"],
        emoji: "🚙", popular: false
    },

    // ===== マツダ CX-80 =====
    {
        id: 541, name: "CX-80", maker: "マツダ", type: "3列シートSUV", years: "2024〜現行",
        newPrice: "394〜626万円", engine: "3.3Lディーゼル/2.5L PHEV", fuel: "ディーゼル(軽油)/PHEV",
        fuelEco: "14.0〜18.5km/L(WLTC)", drive: "FR/4WD",
        length: "4,990mm", width: "1,890mm", height: "1,710mm", weight: "1,870〜2,140kg",
        seats: 7, trunk: "約505L(3列使用時)",
        features: ["CX-8後継", "直6ディーゼル", "3列シート", "PHEV設定"],
        talkPoints: [
            "CX-8の後継として登場したマツダの3列シートフラッグシップSUV",
            "直6ディーゼルのパワフルなトルクは高速・山道で頼もしい",
            "PHEVモデルも選べるのでEV走行も可能",
            "全長5mクラスの堂々たるサイズでファミリーカーとしても最適"
        ],
        rivals: ["トヨタ ランドクルーザー250", "マツダ CX-60", "日産 エクストレイル"],
        emoji: "🚙", popular: false
    },

    // ===== トヨタ GRカローラ =====
    {
        id: 542, name: "GRカローラ", maker: "トヨタ", type: "スポーツハッチバック", years: "2023〜現行",
        newPrice: "525〜575万円", engine: "1.6L 3気筒ターボ", fuel: "ガソリン(ハイオク)",
        fuelEco: "12.4km/L(WLTC)", drive: "4WD(GR-FOUR)",
        length: "4,410mm", width: "1,850mm", height: "1,480mm", weight: "1,470〜1,475kg",
        seats: 4, trunk: "約125L",
        features: ["GRヤリスの兄貴分", "304馬力", "GR-FOUR 4WD", "モリゾウ肝いり"],
        talkPoints: [
            "GRヤリスの技術を5ドアハッチに移植した実用スポーツ",
            "304馬力の1.6Lターボは小排気量とは思えないパワフルさ",
            "4人乗りだが実用性はGRヤリスより格段に上",
            "モリゾウ(豊田章男)が走りにこだわって開発した特別なモデル"
        ],
        rivals: ["ホンダ シビック タイプR", "VW ゴルフR", "スバル WRX"],
        emoji: "🏎️", popular: false
    },

    // ===== トヨタ GR86 =====
    {
        id: 543, name: "GR86", maker: "トヨタ", type: "スポーツクーペ", years: "2021〜現行",
        newPrice: "279〜351万円", engine: "2.4L 水平対向4気筒", fuel: "ガソリン(ハイオク)",
        fuelEco: "11.9km/L(WLTC)", drive: "FR",
        length: "4,265mm", width: "1,775mm", height: "1,310mm", weight: "1,260〜1,270kg",
        seats: 4, trunk: "約226L",
        features: ["FRスポーツクーペ", "水平対向エンジン", "超低重心", "スバル共同開発"],
        talkPoints: [
            "300万円以下で手に入るFRスポーツは国産ではこれだけ",
            "水平対向エンジンの低重心が生むコーナリングの楽しさ",
            "先代86から排気量アップで2.4Lになりトルク不足を解消",
            "ドリフトからサーキット走行まで楽しめる懐の深さ"
        ],
        rivals: ["スバル BRZ", "マツダ ロードスター", "日産 フェアレディZ"],
        emoji: "🏎️", popular: false
    },

    // ===== ホンダ シビック タイプR =====
    {
        id: 544, name: "シビック タイプR", maker: "ホンダ", type: "スポーツハッチバック", years: "2022〜現行(FL5)",
        newPrice: "499万円", engine: "2.0L VTEC ターボ", fuel: "ガソリン(ハイオク)",
        fuelEco: "12.5km/L(WLTC)", drive: "FF",
        length: "4,595mm", width: "1,890mm", height: "1,405mm", weight: "1,430kg",
        seats: 4, trunk: "約404L",
        features: ["FFスポーツ最速", "330馬力", "ニュル開発", "6速MT専用"],
        talkPoints: [
            "FF世界最速を目指したホンダの魂が詰まったスポーツカー",
            "330馬力を前輪だけで受け止めるFF究極の走り",
            "ニュルブルクリンクでFF最速記録を持つ実力派",
            "6速MTのみという潔さがマニアの心をつかむ"
        ],
        rivals: ["VW ゴルフR", "トヨタ GRカローラ", "ルノー メガーヌR.S."],
        emoji: "🏎️", popular: false
    },

    // ===== 日産 フェアレディZ =====
    {
        id: 545, name: "フェアレディZ", maker: "日産", type: "スポーツクーペ", years: "2022〜現行(RZ34)",
        newPrice: "524〜846万円", engine: "3.0L V6ツインターボ", fuel: "ガソリン(ハイオク)",
        fuelEco: "9.5km/L(WLTC)", drive: "FR",
        length: "4,380mm", width: "1,845mm", height: "1,315mm", weight: "1,570〜1,580kg",
        seats: 2, trunk: "約235L",
        features: ["伝統のFRスポーツ", "400馬力", "6速MT/9速AT", "レトロモダンデザイン"],
        talkPoints: [
            "50年以上の歴史を持つ日産の魂、Zカーの最新型",
            "400馬力の3.0L V6ツインターボは圧倒的な加速力",
            "240Zオマージュのデザインが新旧ファンを魅了",
            "6速MTが選べるのは車好きにとって最高のご褒美"
        ],
        rivals: ["トヨタ GRスープラ", "ポルシェ ケイマン", "シボレー カマロ"],
        emoji: "🏎️", popular: false
    },

    // ===== トヨタ GRスープラ =====
    {
        id: 546, name: "GRスープラ", maker: "トヨタ", type: "スポーツクーペ", years: "2019〜現行(A90)",
        newPrice: "499〜731万円", engine: "2.0L 4気筒ターボ/3.0L 直6ターボ", fuel: "ガソリン(ハイオク)",
        fuelEco: "10.0〜13.1km/L(WLTC)", drive: "FR",
        length: "4,380mm", width: "1,855mm", height: "1,295mm", weight: "1,410〜1,570kg",
        seats: 2, trunk: "約290L",
        features: ["伝説の直6FRスポーツ復活", "BMW共同開発", "マニュアル追加", "サーキット向き"],
        talkPoints: [
            "17年ぶりに復活した伝説のスープラ、トヨタのスポーツアイコン",
            "直6ターボの387馬力は0-100km/h 4.1秒の俊足",
            "BMW Z4と基本設計を共有するがチューニングは完全にトヨタ流",
            "2024年モデルで待望の6速MTが追加され真のスポーツカーに"
        ],
        rivals: ["日産 フェアレディZ", "ポルシェ ケイマン", "BMW M2"],
        emoji: "🏎️", popular: false
    },

    // ===== トヨタ ランドクルーザー250 =====
    {
        id: 547, name: "ランドクルーザー250", maker: "トヨタ", type: "SUV", years: "2024〜現行",
        newPrice: "520〜735万円", engine: "2.8Lディーゼルターボ/2.7Lガソリン", fuel: "ディーゼル(軽油)/ガソリン(レギュラー)",
        fuelEco: "11.0〜14.4km/L(WLTC)", drive: "4WD",
        length: "4,925mm", width: "1,935mm", height: "1,935mm", weight: "2,210〜2,350kg",
        seats: 7, trunk: "大容量",
        features: ["プラドの後継", "TNGA-Fプラットフォーム", "新デザイン", "電子制御サスペンション"],
        talkPoints: [
            "ランクルプラドの後継モデル、よりモダンに生まれ変わった",
            "ランクル300よりコンパクトで都市部でも扱いやすいサイズ",
            "2.8Lディーゼルは力強さと燃費のバランスが秀逸",
            "リセールバリューはプラド同様に非常に高い期待"
        ],
        rivals: ["三菱 パジェロスポーツ", "ジープ ラングラー", "ランドローバー ディフェンダー"],
        emoji: "🚙", popular: false
    },

    // ===== スズキ フロンクス =====
    {
        id: 548, name: "フロンクス", maker: "スズキ", type: "コンパクトSUV", years: "2024〜現行",
        newPrice: "218〜265万円", engine: "1.5L マイルドHV/1.5L ストロングHV", fuel: "ハイブリッド/ガソリン(レギュラー)",
        fuelEco: "17.8〜25.4km/L(WLTC)", drive: "FF/4WD",
        length: "3,995mm", width: "1,765mm", height: "1,550mm", weight: "1,030〜1,170kg",
        seats: 5, trunk: "約332L",
        features: ["インド生産輸入車", "クーペスタイルSUV", "ストロングHV設定", "コスパ◎"],
        talkPoints: [
            "200万円台前半でクーペスタイルSUVが手に入るコスパの高さ",
            "スズキ初のストロングハイブリッド搭載で燃費25km/L超え",
            "コンパクトながらクーペライクなデザインが若者に刺さる",
            "インドで大ヒットしたモデルを日本仕様にアレンジ"
        ],
        rivals: ["トヨタ ヤリスクロス", "ホンダ WR-V", "マツダ CX-3"],
        emoji: "🚙", popular: false
    },

    // ===== ホンダ e:NP2 / e:NS2 =====
    {
        id: 549, name: "Honda 0シリーズ", maker: "ホンダ", type: "EV セダン/SUV", years: "2026〜(予定)",
        newPrice: "500〜700万円(予想)", engine: "モーター(専用プラットフォーム)", fuel: "電気(EV)",
        fuelEco: "航続距離 約480km(予想)", drive: "FF/AWD",
        length: "4,800mm(予想)", width: "1,900mm(予想)", height: "1,400mm(予想)", weight: "未公表",
        seats: 5, trunk: "未公表",
        features: ["ホンダ次世代EV", "ASIMO OS搭載", "Level 3自動運転", "薄型バッテリー"],
        talkPoints: [
            "ホンダが2026年に投入するまったく新しいEVプラットフォームの車",
            "ASIMO OSという独自のAIを搭載し自動運転Level 3対応予定",
            "薄型バッテリーで低重心かつ広い室内空間を実現",
            "テスラやBYDに対抗するホンダの本気EVとして注目度MAX"
        ],
        rivals: ["テスラ Model 3", "BYD SEAL", "日産 アリア"],
        emoji: "🚗", popular: false
    },

    // ===== レクサス LF(次世代フラッグシップEV)  =====
    {
        id: 550, name: "LF-ZC(次世代EV)", maker: "レクサス", type: "EV セダン", years: "2026〜(予定)",
        newPrice: "1,000万円〜(予想)", engine: "次世代モーター", fuel: "電気(EV)",
        fuelEco: "航続距離 約700km(予想)", drive: "AWD",
        length: "4,800mm(予想)", width: "1,900mm(予想)", height: "1,400mm(予想)", weight: "未公表",
        seats: 5, trunk: "未公表",
        features: ["次世代レクサスEV", "レクサスの未来形", "次世代バッテリー", "AI搭載"],
        talkPoints: [
            "レクサスが2026年に投入予定の次世代EVフラッグシップ",
            "航続700kmの次世代バッテリー搭載で競合を圧倒する航続力",
            "レクサスが描くEV時代の「走る歓び」を体現するモデル",
            "現行レクサスオーナーには次の乗り換え先として要チェック"
        ],
        rivals: ["BMW i5", "メルセデス EQE", "ポルシェ タイカン"],
        emoji: "🚗", popular: false
    }
);
