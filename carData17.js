// CarTalk Pro - 追加データ17（25車種）ID: 389-413
// トヨタ名車・バリエーション + ホンダ補完 + 日産商用

CAR_DATABASE.push(
    {
        id: 389, name: "カローラフィールダー", maker: "トヨタ", type: "ステーションワゴン", years: "2012〜現行(3代目・併売)",
        newPrice: "172〜234万円", fuelEco: "16.0〜33.8km/L(JC08)", engine: "1.5L/1.5L HV",
        fuel: "ガソリン(レギュラー)/ハイブリッド", seats: 5, drive: "FF/4WD",
        length: "4,400mm", width: "1,695mm", height: "1,475mm", weight: "1,100〜1,200kg", trunk: "約407L",
        emoji: "🚗", popular: false,
        features: ["5ナンバーワゴン","現行併売","仕事用定番","HV設定"],
        talkPoints: ["新型カローラツーリング登場後も併売されている定番ワゴン","5ナンバーで狭い駐車場でも楽々","法人・自家用問わず根強い需要がある","中古50〜130万円でHVワゴンが手に入る"],
        rivals: ["カローラツーリング","シャトル","レヴォーグ"]
    },
    {
        id: 390, name: "カローラアクシオ", maker: "トヨタ", type: "セダン", years: "2012〜現行(3代目・併売)",
        newPrice: "161〜218万円", fuelEco: "16.4〜34.4km/L(JC08)", engine: "1.3L/1.5L/1.5L HV",
        fuel: "ガソリン(レギュラー)/ハイブリッド", seats: 5, drive: "FF/4WD",
        length: "4,360mm", width: "1,695mm", height: "1,460mm", weight: "1,050〜1,160kg", trunk: "約-L",
        emoji: "🚗", popular: false,
        features: ["5ナンバーセダン","併売モデル","161万円〜","教習車にも"],
        talkPoints: ["161万円からの新車セダンは日本で最も安い部類","教習車としても多く採用されている定番","5ナンバーサイズで取り回しが楽","法人の営業車としても根強い需要"],
        rivals: ["プレミオ","シルフィ","カローラ"]
    },
    {
        id: 391, name: "ハイエース コミューター", maker: "トヨタ", type: "マイクロバス", years: "2004〜現行",
        newPrice: "367〜410万円", fuelEco: "8.0〜9.7km/L(WLTC)", engine: "2.7Lガソリン/3.0Lディーゼル",
        fuel: "ガソリン(レギュラー)/ディーゼル(軽油)", seats: 14, drive: "FR/4WD",
        length: "5,380mm", width: "1,880mm", height: "2,285mm", weight: "2,020〜2,240kg", trunk: "約-L",
        emoji: "🚐", popular: false,
        features: ["14人乗り","送迎バス","ハイエースベース","ロングボディ"],
        talkPoints: ["幼稚園・旅館・企業の送迎バスとして大活躍","コースターより小さく小回りが利く","ハイエースベースなのでメンテも安心","中古200〜350万円で送迎バスが手に入る"],
        rivals: ["コースター","キャラバン","グランエース"]
    },
    {
        id: 392, name: "タウンエース トラック", maker: "トヨタ", type: "小型トラック", years: "2020〜現行",
        newPrice: "165〜200万円", fuelEco: "11.0〜12.8km/L(WLTC)", engine: "1.5L",
        fuel: "ガソリン(レギュラー)", seats: 2, drive: "FR/4WD",
        length: "4,275mm", width: "1,675mm", height: "1,890mm", weight: "1,090〜1,200kg", trunk: "荷台",
        emoji: "🛻", popular: false,
        features: ["小型トラック","コンパクト","街の配送車","ダイハツOEM"],
        talkPoints: ["軽トラより大きく2tトラックより小さい絶妙サイズ","165万円からの新車トラックは個人事業主の味方","狭い路地でも入れるコンパクトな配送車","引っ越しや庭仕事にも使える万能トラック"],
        rivals: ["ライトエース","キャリイ","ハイゼットトラック"]
    },
    {
        id: 393, name: "コンフォート", maker: "トヨタ", type: "タクシー専用車", years: "1995〜2017(生産終了)",
        newPrice: "178〜220万円(当時)", fuelEco: "9.8〜11.4km/L(10/15)", engine: "2.0L LPG/1.5L CNG",
        fuel: "LPG(LPガス)/CNG", seats: 5, drive: "FR",
        length: "4,590mm", width: "1,695mm", height: "1,515mm", weight: "1,280〜1,340kg", trunk: "約-L",
        emoji: "🚕", popular: false,
        features: ["タクシーの代名詞","LPG車","クラウンコンフォート","耐久性最強"],
        talkPoints: ["日本のタクシーといえばコンフォートだった時代","50万km走っても壊れないという伝説的耐久性","LPG(ガス)で燃料費が安くタクシー業界の味方","ジャパンタクシーに代替されたが今も現役車両多数"],
        rivals: ["ジャパンタクシー","クラウンセダン","シエンタ"]
    },
    {
        id: 394, name: "ジャパンタクシー", maker: "トヨタ", type: "タクシー専用車", years: "2017〜現行",
        newPrice: "312〜350万円", fuelEco: "19.4km/L(WLTC)", engine: "1.5L LPG HV",
        fuel: "LPG(LPガス)/HV", seats: 5, drive: "FF",
        length: "4,400mm", width: "1,695mm", height: "1,750mm", weight: "1,410kg", trunk: "約-L",
        emoji: "🚕", popular: false,
        features: ["現代のタクシー","LPGハイブリッド","ユニバーサルデザイン","車椅子対応"],
        talkPoints: ["東京オリンピックに合わせて登場した新しいタクシー","車椅子でそのまま乗れるユニバーサルデザイン","LPGハイブリッドで燃費がコンフォートの倍","街中で見かけない日はない新しいタクシーの顔"],
        rivals: ["コンフォート","NV200バネット","シエンタ"]
    },
    {
        id: 395, name: "ピクシス エポック", maker: "トヨタ", type: "軽自動車", years: "2017〜現行",
        newPrice: "86〜137万円", fuelEco: "23.2〜25.0km/L(WLTC)", engine: "660cc",
        fuel: "ガソリン(レギュラー)", seats: 4, drive: "FF/4WD",
        length: "3,395mm", width: "1,475mm", height: "1,500mm", weight: "650〜740kg", trunk: "約-L",
        emoji: "🚗", popular: false,
        features: ["ミライースOEM","トヨタの軽","86万円〜","超低燃費"],
        talkPoints: ["ダイハツ ミライースのトヨタ版で86万円から買える","トヨタディーラーの近くにお住まいの方の軽の選択肢","メンテもトヨタディーラーで受けられる安心感","中身はミライースと同じなので品質も安心"],
        rivals: ["ミライース","アルト","アルトラパン"]
    },
    {
        id: 396, name: "ピクシス ジョイ", maker: "トヨタ", type: "軽自動車", years: "2016〜現行",
        newPrice: "135〜180万円", fuelEco: "21.0〜25.0km/L(WLTC)", engine: "660cc/660ccターボ",
        fuel: "ガソリン(レギュラー)", seats: 4, drive: "FF/4WD",
        length: "3,395mm", width: "1,475mm", height: "1,600mm", weight: "840〜920kg", trunk: "約-L",
        emoji: "🚗", popular: false,
        features: ["キャストOEM","3タイプ展開","トヨタの軽","可愛いデザイン"],
        talkPoints: ["ダイハツ キャストのトヨタ版でトヨタで軽が買える","3つのスタイルから選べる個性的な軽","トヨタディーラーでの充実したアフターサービス","中古50〜100万円でオシャレな軽が手に入る"],
        rivals: ["キャスト","ハスラー","N-ONE"]
    },
    {
        id: 397, name: "ブレイド", maker: "トヨタ", type: "プレミアムハッチバック", years: "2006〜2012(生産終了)",
        newPrice: "232〜307万円(当時)", fuelEco: "9.4〜12.2km/L(10/15)", engine: "2.4L/3.5L V6",
        fuel: "ガソリン(ハイオク)", seats: 5, drive: "FF/4WD",
        length: "4,260mm", width: "1,760mm", height: "1,515mm", weight: "1,380〜1,510kg", trunk: "約-L",
        emoji: "🚗", popular: false,
        features: ["大人のハッチバック","3.5L V6搭載","マスターG","プレミアム"],
        talkPoints: ["コンパクトボディに3.5L V6を載せた変態的ハッチバック","マスターGは280馬力でゴルフGTI顔負けの速さ","大人のハッチバックというコンセプトが新鮮だった","中古30〜80万円で手に入る隠れた名車"],
        rivals: ["ゴルフGTI","オーリス","インプレッサ"]
    },
    {
        id: 398, name: "マークII", maker: "トヨタ", type: "セダン", years: "1996〜2004(生産終了/100系・110系)",
        newPrice: "222〜369万円(当時)", fuelEco: "9.0〜12.0km/L(10/15)", engine: "2.0L/2.0Lターボ/2.5L/3.0L",
        fuel: "ガソリン(レギュラー/ハイオク)", seats: 5, drive: "FR/4WD",
        length: "4,735mm", width: "1,760mm", height: "1,460mm", weight: "1,370〜1,540kg", trunk: "約-L",
        emoji: "🚗", popular: false,
        features: ["日本の名車","FRセダン","ツアラーV","1JZ/2JZ"],
        talkPoints: ["日本のFRセダンの王道として90年代〜2000年代を代表","ツアラーVの1JZターボはチューニング界の伝説","ドリフトからVIPまで幅広いカスタム文化を生んだ","中古50〜200万円で状態により大きく価格差"],
        rivals: ["チェイサー","スカイライン","ローレル"]
    },
    {
        id: 399, name: "チェイサー", maker: "トヨタ", type: "セダン", years: "1996〜2001(生産終了/100系)",
        newPrice: "217〜337万円(当時)", fuelEco: "8.5〜12.0km/L(10/15)", engine: "2.0L/2.5L/2.5Lターボ",
        fuel: "ガソリン(レギュラー/ハイオク)", seats: 5, drive: "FR/4WD",
        length: "4,715mm", width: "1,760mm", height: "1,440mm", weight: "1,360〜1,520kg", trunk: "約-L",
        emoji: "🚗", popular: false,
        features: ["マークIIの兄弟","ツアラーV","1JZターボ","ドリフト人気"],
        talkPoints: ["マークIIよりスポーティな味付けで走り好きに人気","ツアラーVは今やドリフト界の伝説的マシン","中古相場は高騰中、程度良好なら200万円超え","25年ルールで海外輸出も活発化している"],
        rivals: ["マークII","スカイライン","シルビア"]
    },
    {
        id: 400, name: "ソアラ", maker: "トヨタ", type: "クーペ/オープン", years: "2001〜2010(生産終了/40系=レクサスSC)",
        newPrice: "600〜680万円(当時)", fuelEco: "8.2〜9.1km/L(10/15)", engine: "4.3L V8",
        fuel: "ガソリン(ハイオク)", seats: 4, drive: "FR",
        length: "4,515mm", width: "1,825mm", height: "1,350mm", weight: "1,730〜1,780kg", trunk: "約-L",
        emoji: "🏎️", popular: false,
        features: ["V8オープン","レクサスSC","電動メタルトップ","高級GT"],
        talkPoints: ["4.3L V8の高級オープンカーは今も堂々と走れる","レクサスSC430として海外では今も高い人気","電動メタルトップは当時の最先端技術","中古80〜200万円でV8オープンが手に入るお得感"],
        rivals: ["SL","LC","Z4"]
    },
    {
        id: 401, name: "アルテッツァ", maker: "トヨタ", type: "スポーツセダン", years: "1998〜2005(生産終了)",
        newPrice: "202〜327万円(当時)", fuelEco: "10.0〜13.0km/L(10/15)", engine: "2.0L(3S/1G)/2.0Lターボ",
        fuel: "ガソリン(ハイオク)", seats: 5, drive: "FR",
        length: "4,400mm", width: "1,720mm", height: "1,410mm", weight: "1,280〜1,380kg", trunk: "約-L",
        emoji: "🏎️", popular: false,
        features: ["FRスポーツセダン","レクサスIS初代","6速MT","走り好き御用達"],
        talkPoints: ["レクサスISの日本名、FRスポーツセダンの傑作","6速MTが選べる数少ないFRセダンだった","中古30〜80万円で手に入るが綺麗な個体は少ない","チューニングベースとしても根強い人気"],
        rivals: ["スカイライン","マークII","IS"]
    },
    {
        id: 402, name: "セリカ", maker: "トヨタ", type: "スポーツクーペ", years: "1999〜2006(生産終了/最終型)",
        newPrice: "189〜262万円(当時)", fuelEco: "12.2〜14.4km/L(10/15)", engine: "1.8L(2ZZ/1ZZ)",
        fuel: "ガソリン(ハイオク/レギュラー)", seats: 4, drive: "FF",
        length: "4,340mm", width: "1,735mm", height: "1,305mm", weight: "1,080〜1,150kg", trunk: "約-L",
        emoji: "🏎️", popular: false,
        features: ["FFスポーツ","2ZZエンジン","SS-II","リフトボルト"],
        talkPoints: ["2ZZエンジンのVVTL-i(リフト切替)は7600rpmまで回る快感","FFスポーツとして完成度が高い隠れた名車","中古30〜100万円で本格スポーツカーが手に入る","ラリーでも活躍したトヨタのスポーツDNA"],
        rivals: ["インテグラ","シビックタイプR","RX-8"]
    },
    {
        id: 403, name: "MR-S", maker: "トヨタ", type: "ライトウェイトオープン", years: "1999〜2007(生産終了)",
        newPrice: "183〜247万円(当時)", fuelEco: "13.4〜14.8km/L(10/15)", engine: "1.8L(1ZZ)",
        fuel: "ガソリン(ハイオク)", seats: 2, drive: "MR",
        length: "3,895mm", width: "1,695mm", height: "1,235mm", weight: "1,010〜1,050kg", trunk: "約-L",
        emoji: "🏎️", popular: false,
        features: ["ミッドシップオープン","ロードスターのライバル","軽量1t","シーケンシャルMT"],
        talkPoints: ["1トンの超軽量ミッドシップオープンスポーツ","ロードスターのライバルとして走りは最高に楽しい","シーケンシャルMTは先進的なミッションだった","中古50〜120万円でミッドシップが手に入る"],
        rivals: ["ロードスター","S2000","ボクスター"]
    },
    {
        id: 404, name: "N-BOX +", maker: "ホンダ", type: "軽福祉車両", years: "2012〜2017(生産終了)",
        newPrice: "139〜189万円(当時)", fuelEco: "19.4〜25.8km/L(JC08)", engine: "660cc/660ccターボ",
        fuel: "ガソリン(レギュラー)", seats: 4, drive: "FF/4WD",
        length: "3,395mm", width: "1,475mm", height: "1,670mm", weight: "950〜1,050kg", trunk: "約-L",
        emoji: "🚗", popular: false,
        features: ["N-BOXの派生","車椅子対応","低床設計","福祉車両"],
        talkPoints: ["N-BOXベースの車椅子仕様車として福祉用途に対応","スロープで車椅子のまま乗り込める設計","中古30〜80万円で福祉車両が手に入る","介護施設や在宅介護で重宝される車"],
        rivals: ["タントスローパー","スペーシア車椅子仕様","N-BOX"]
    },
    {
        id: 405, name: "バモス ホビオ", maker: "ホンダ", type: "軽ワゴン", years: "2003〜2018(生産終了)",
        newPrice: "134〜178万円(当時)", fuelEco: "13.6〜15.4km/L(10/15)", engine: "660cc/660ccターボ",
        fuel: "ガソリン(レギュラー)", seats: 4, drive: "MR/4WD",
        length: "3,395mm", width: "1,475mm", height: "1,880mm", weight: "1,010〜1,080kg", trunk: "大容量",
        emoji: "🚐", popular: false,
        features: ["ハイルーフ軽バン","バモスの背高版","車中泊","MRレイアウト"],
        talkPoints: ["バモスよりルーフが高く室内空間が広い","車中泊のベース車として今でも根強い人気","丸目のレトロ可愛いデザインが魅力","中古10〜40万円で車中泊カーが手に入る"],
        rivals: ["エブリイ","アトレー","N-VAN"]
    },
    {
        id: 406, name: "モビリオ スパイク", maker: "ホンダ", type: "コンパクトワゴン", years: "2002〜2008(生産終了)",
        newPrice: "159〜218万円(当時)", fuelEco: "13.0〜16.0km/L(10/15)", engine: "1.5L",
        fuel: "ガソリン(レギュラー)", seats: 5, drive: "FF/4WD",
        length: "4,110mm", width: "1,695mm", height: "1,695mm", weight: "1,220〜1,300kg", trunk: "約-L",
        emoji: "🚐", popular: false,
        features: ["モビリオの5人乗り版","フラットフロア","趣味車の先駆け","両側スライドドア"],
        talkPoints: ["モビリオの3列目をなくし広大な荷室にした趣味車","フルフラットで車中泊も可能な先駆的モデル","自転車もそのまま載せられる使い勝手の良さ","中古10〜30万円の激安で見つかる"],
        rivals: ["フリードスパイク","シエンタ","ソリオ"]
    },
    {
        id: 407, name: "インスパイア", maker: "ホンダ", type: "セダン", years: "2007〜2012(生産終了)",
        newPrice: "305〜370万円(当時)", fuelEco: "9.7〜10.6km/L(10/15)", engine: "3.5L V6",
        fuel: "ガソリン(ハイオク)", seats: 5, drive: "FF",
        length: "4,935mm", width: "1,845mm", height: "1,475mm", weight: "1,620〜1,640kg", trunk: "約-L",
        emoji: "🚗", popular: false,
        features: ["ホンダの大型セダン","3.5L V6","FFセダン","上質"],
        talkPoints: ["ホンダの大型FFセダンとして存在感があった","3.5L V6の滑らかな走りは上質そのもの","アコードの上位としてクラウン対抗だった","中古20〜60万円と驚くほど安く買える"],
        rivals: ["カムリ","スカイライン","アコード"]
    },
    {
        id: 408, name: "レジェンド", maker: "ホンダ", type: "フラッグシップセダン", years: "2015〜2022(生産終了/5代目)",
        newPrice: "725〜775万円(当時)", fuelEco: "12.8km/L(WLTC)", engine: "3.5L V6 HV(SH-AWD)",
        fuel: "ハイブリッド(ハイオク)", seats: 5, drive: "4WD(SH-AWD)",
        length: "5,030mm", width: "1,890mm", height: "1,480mm", weight: "1,990kg", trunk: "約-L",
        emoji: "🚗", popular: false,
        features: ["ホンダのフラッグシップ","SH-AWD","Honda SENSING Elite","自動運転レベル3"],
        talkPoints: ["世界初の自動運転レベル3(Honda SENSING Elite)を搭載","SH-AWDは4輪の駆動力を自在に配分する最先端技術","ホンダの技術の粋を集めたフラッグシップセダン","中古200〜400万円で最先端技術セダンが手に入る"],
        rivals: ["クラウン","スカイライン","レクサスLS"]
    },
    {
        id: 409, name: "トゥデイ", maker: "ホンダ", type: "軽自動車", years: "1993〜1998(生産終了/2代目)",
        newPrice: "64〜109万円(当時)", fuelEco: "17.0〜22.0km/L(10/15)", engine: "660cc",
        fuel: "ガソリン(レギュラー)", seats: 4, drive: "FF/MR",
        length: "3,295mm", width: "1,395mm", height: "1,350mm", weight: "600〜670kg", trunk: "約-L",
        emoji: "🚗", popular: false,
        features: ["超コンパクト","旧規格軽","600kg台","レトロ"],
        talkPoints: ["旧規格の超コンパクト軽でまだ街中に生息している","車重600kg台は現代の軽の半分以下の超軽量","64万円からの新車は当時の最安車の一つ","レトロな見た目が今見ると逆に可愛い"],
        rivals: ["アルト","ミラ","ヴィヴィオ"]
    },
    {
        id: 410, name: "ビート", maker: "ホンダ", type: "軽オープンスポーツ", years: "1991〜1996(生産終了)",
        newPrice: "138〜160万円(当時)", fuelEco: "14.0〜17.2km/L(10/15)", engine: "660cc(MTREC)",
        fuel: "ガソリン(レギュラー)", seats: 2, drive: "MR",
        length: "3,295mm", width: "1,395mm", height: "1,175mm", weight: "760〜770kg", trunk: "約-L",
        emoji: "🏎️", popular: false,
        features: ["S660の先祖","ミッドシップ","自然吸気","ABCトリオ"],
        talkPoints: ["S660の先祖にあたるホンダの軽ミッドシップオープン","AZ-1、カプチーノと並ぶABCトリオの一角","自然吸気で8100rpmまで回るMTRECエンジンが快感","中古70〜200万円で値上がり中のプレミアム軽"],
        rivals: ["カプチーノ","AZ-1","S660"]
    },
    {
        id: 411, name: "ADバン", maker: "日産", type: "商用バン", years: "2006〜2016(生産終了)",
        newPrice: "135〜191万円(当時)", fuelEco: "13.4〜18.2km/L(JC08)", engine: "1.5L/1.6L",
        fuel: "ガソリン(レギュラー)", seats: 5, drive: "FF/4WD",
        length: "4,370mm", width: "1,695mm", height: "1,510mm", weight: "1,100〜1,210kg", trunk: "約-L",
        emoji: "🚗", popular: false,
        features: ["日産の営業車","プロボックス対抗","広い荷室","壊れにくい"],
        talkPoints: ["プロボックスと並ぶ日本の営業車の代表格","中古20〜50万円と激安で手に入る仕事の足","日産ディーラーでメンテできる安心感","NV150 ADに名前が変わったが中身は同じ"],
        rivals: ["プロボックス","サクシード","カローラフィールダー"]
    },
    {
        id: 412, name: "NV200バネット", maker: "日産", type: "商用バン/ワゴン", years: "2009〜現行",
        newPrice: "193〜296万円", fuelEco: "10.4〜13.2km/L(WLTC)", engine: "1.6L/EV",
        fuel: "ガソリン(レギュラー)/EV", seats: 5, drive: "FF",
        length: "4,400mm", width: "1,695mm", height: "1,855mm", weight: "1,230〜1,360kg", trunk: "大容量",
        emoji: "🚐", popular: false,
        features: ["5ナンバー商用バン","タクシー仕様","配送車","EVバンあり"],
        talkPoints: ["NYのイエローキャブにも採用された世界的な商用バン","タクシー仕様は車椅子対応でバリアフリー","EV版のe-NV200は電動バンの先駆者だった","ハイエースより小さく狭い道でも配送可能"],
        rivals: ["ハイエース","キャラバン","タウンエースバン"]
    },
    {
        id: 413, name: "ウイングロード", maker: "日産", type: "ステーションワゴン", years: "2005〜2018(生産終了)",
        newPrice: "163〜226万円(当時)", fuelEco: "13.0〜17.2km/L(JC08)", engine: "1.5L/1.8L",
        fuel: "ガソリン(レギュラー)", seats: 5, drive: "FF/4WD",
        length: "4,440mm", width: "1,695mm", height: "1,505mm", weight: "1,160〜1,290kg", trunk: "約-L",
        emoji: "🚗", popular: false,
        features: ["5ナンバーワゴン","実用的","サーフィンに人気","格納式荷室棚"],
        talkPoints: ["5ナンバーのリーズナブルなステーションワゴン","サーフボードが載る広い荷室でサーファーに人気","中古15〜50万円と激安で手に入るワゴン","後継なく日産のワゴンは消滅してしまった"],
        rivals: ["カローラフィールダー","シャトル","エアウェイブ"]
    }
);
