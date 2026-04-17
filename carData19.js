// CarTalk Pro - 追加データ19（25車種）ID: 439-463
// スバル・スズキ・ダイハツ残り + 輸入車前半

CAR_DATABASE.push(
    {
        id: 439, name: "ヴィヴィオ", maker: "スバル", type: "軽自動車", years: "1992〜1998(生産終了)",
        newPrice: "68〜148万円(当時)", fuelEco: "14.0〜20.0km/L(10/15)", engine: "660cc/660ccスーパーチャージャー",
        fuel: "ガソリン(レギュラー)", seats: 4, drive: "FF/4WD",
        length: "3,295mm", width: "1,395mm", height: "1,375mm", weight: "660〜790kg", trunk: "約-L",
        emoji: "🚗", popular: false,
        features: ["スバルの名軽","RX-R","4気筒SC","WRC参戦"],
        talkPoints: ["RX-Rはスーパーチャージャー付きで走りが超楽しい軽","WRCのA5クラスに参戦した本格派の血統","車重660kgの超軽量で今の軽とは別次元の軽快さ","中古20〜80万円でスバルの名軽が手に入る"],
        rivals: ["アルトワークス","ミラTR","ビート"]
    },
    {
        id: 440, name: "ランディ", maker: "スズキ", type: "ミニバン", years: "2022〜現行(4代目)",
        newPrice: "290〜368万円", fuelEco: "14.3〜22.0km/L(WLTC)", engine: "2.0L/1.8L HV",
        fuel: "ガソリン(レギュラー)/ハイブリッド", seats: 8, drive: "FF/4WD",
        length: "4,695mm", width: "1,730mm", height: "1,895mm", weight: "1,610〜1,680kg", trunk: "約-L",
        emoji: "🚐", popular: false,
        features: ["ノアOEM","スズキのミニバン","HV","スズキ版ノア"],
        talkPoints: ["トヨタ ノアのOEMでスズキディーラーで買えるミニバン","以前はセレナOEMだったが現行はノアベースに","スズキの営業マンに馴染みがある方のミニバン選択肢","ハイブリッドモデルで燃費も優秀"],
        rivals: ["ノア","ヴォクシー","セレナ"]
    },
    {
        id: 441, name: "キザシ", maker: "スズキ", type: "セダン", years: "2009〜2015(生産終了)",
        newPrice: "268〜298万円(当時)", fuelEco: "11.4〜13.4km/L(JC08)", engine: "2.4L",
        fuel: "ガソリン(レギュラー)", seats: 5, drive: "FF/4WD",
        length: "4,650mm", width: "1,820mm", height: "1,480mm", weight: "1,440〜1,530kg", trunk: "約-L",
        emoji: "🚗", popular: false,
        features: ["スズキ唯一のセダン","警察車両で有名","覆面パトカー","4WD設定"],
        talkPoints: ["覆面パトカーとして活躍しすぎて一般では敬遠されがち","スズキ唯一のセダンとして実はかなり良い車","警察に選ばれるほど信頼性と走行性能が高い","中古30〜80万円で買えるが覆面に間違えられるかも"],
        rivals: ["カムリ","アコード","レガシィB4"]
    },
    {
        id: 442, name: "カプチーノ", maker: "スズキ", type: "軽オープンスポーツ", years: "1991〜1998(生産終了)",
        newPrice: "146〜169万円(当時)", fuelEco: "14.6〜18.0km/L(10/15)", engine: "660ccターボ",
        fuel: "ガソリン(ハイオク)", seats: 2, drive: "FR",
        length: "3,295mm", width: "1,395mm", height: "1,185mm", weight: "700〜720kg", trunk: "約-L",
        emoji: "🏎️", popular: false,
        features: ["FRオープンスポーツ","ABCトリオ","700kg","3way脱着ルーフ"],
        talkPoints: ["ABCトリオの一角、FR軽オープンスポーツの傑作","車重700kgの超軽量でコーナリングが最高に楽しい","3ピースの脱着式ルーフでオープン/タルガ/クーペの3way","中古80〜200万円と値上がり中のプレミア軽"],
        rivals: ["ビート","AZ-1","S660"]
    },
    // === ダイハツ ===
    {
        id: 443, name: "ブーン", maker: "ダイハツ", type: "コンパクト", years: "2016〜現行(3代目)",
        newPrice: "121〜178万円", fuelEco: "18.4〜28.0km/L(JC08)", engine: "1.0L",
        fuel: "ガソリン(レギュラー)", seats: 5, drive: "FF/4WD",
        length: "3,660mm", width: "1,665mm", height: "1,525mm", weight: "910〜970kg", trunk: "約-L",
        emoji: "🚗", popular: false,
        features: ["パッソの兄弟車","121万円〜","コンパクト","シルク"],
        talkPoints: ["トヨタ パッソの兄弟車でダイハツディーラーで買える","121万円からの超お手頃コンパクト","シルクは上質な内装でちょっとプレミアム","小さくて取り回しやすい街乗り最強の一台"],
        rivals: ["パッソ","マーチ","ミライース"]
    },
    {
        id: 444, name: "メビウス", maker: "ダイハツ", type: "ワゴン", years: "2013〜2021(生産終了)",
        newPrice: "257〜283万円(当時)", fuelEco: "26.2km/L(JC08)", engine: "1.8L HV",
        fuel: "ハイブリッド(レギュラー)", seats: 5, drive: "FF",
        length: "4,615mm", width: "1,775mm", height: "1,575mm", weight: "1,450kg", trunk: "約535L",
        emoji: "🚗", popular: false,
        features: ["プリウスαOEM","ダイハツ唯一のHVワゴン","大容量荷室","高燃費"],
        talkPoints: ["プリウスαのOEMでダイハツディーラーで買えた","ダイハツでハイブリッドワゴンが手に入った貴重な選択肢","中身はプリウスαそのものなので品質は安心","中古60〜120万円でHVワゴンが手に入る"],
        rivals: ["プリウスα","カローラツーリング","シャトル"]
    },
    {
        id: 445, name: "アルティス", maker: "ダイハツ", type: "セダン", years: "2017〜現行",
        newPrice: "353〜394万円", fuelEco: "24.3〜28.4km/L(WLTC)", engine: "2.5L HV",
        fuel: "ハイブリッド(レギュラー)", seats: 5, drive: "FF/4WD",
        length: "4,885mm", width: "1,840mm", height: "1,445mm", weight: "1,570〜1,640kg", trunk: "約-L",
        emoji: "🚗", popular: false,
        features: ["カムリOEM","ダイハツの大型セダン","HV","法人向け"],
        talkPoints: ["トヨタ カムリのOEMでダイハツで大型セダンが買える","法人需要が中心だが一般でも購入可能","カムリと同じ品質なのでコスパは良い","ダイハツの顔で大型セダンに乗れるレア体験"],
        rivals: ["カムリ","アコード","MAZDA6"]
    },
    {
        id: 446, name: "マックス", maker: "ダイハツ", type: "軽自動車", years: "2001〜2005(生産終了)",
        newPrice: "95〜158万円(当時)", fuelEco: "15.4〜21.0km/L(10/15)", engine: "660cc/660ccターボ",
        fuel: "ガソリン(レギュラー)", seats: 4, drive: "FF/4WD",
        length: "3,395mm", width: "1,475mm", height: "1,550mm", weight: "810〜890kg", trunk: "約-L",
        emoji: "🚗", popular: false,
        features: ["ムーヴの派生","スポーティ軽","4気筒ターボ","RS設定"],
        talkPoints: ["ムーヴベースのスポーティ軽として隠れた名車","RSターボは走りが楽しいコンパクト軽","中古5〜20万円と激安で手に入る","ダイハツの走りへのこだわりが詰まった一台"],
        rivals: ["ワゴンRスティングレー","ライフ","eK"]
    },
    {
        id: 447, name: "ソニカ", maker: "ダイハツ", type: "軽自動車", years: "2006〜2009(生産終了)",
        newPrice: "121〜163万円(当時)", fuelEco: "18.0〜24.5km/L(10/15)", engine: "660cc/660ccターボ",
        fuel: "ガソリン(レギュラー)", seats: 4, drive: "FF/4WD",
        length: "3,395mm", width: "1,475mm", height: "1,505mm", weight: "810〜870kg", trunk: "約-L",
        emoji: "🚗", popular: false,
        features: ["クーペ風軽","CVT","流麗デザイン","高速安定性"],
        talkPoints: ["軽なのにクーペのような流麗なデザインが特徴","高速道路での安定性を重視した設計がユニーク","空力性能が良く高速燃費が優秀だった","中古5〜20万円で手に入る個性的な軽"],
        rivals: ["セルボ","R2","アルト"]
    },
    // === 輸入車 前半 ===
    {
        id: 448, name: "マイバッハ Sクラス", maker: "メルセデス・ベンツ", type: "超高級セダン", years: "2021〜現行",
        newPrice: "2,530〜3,640万円", fuelEco: "8.7〜9.9km/L(WLTC)", engine: "3.0L直6ターボ/4.0L V8ターボ/6.0L V12",
        fuel: "ガソリン(ハイオク)", seats: 4, drive: "4WD",
        length: "5,470mm", width: "1,920mm", height: "1,510mm", weight: "2,240〜2,580kg", trunk: "約-L",
        emoji: "🚗", popular: false,
        features: ["最高級セダン","V12エンジン","後席ファーストクラス","ナイトビジョン"],
        talkPoints: ["Sクラスを超えるベンツの最高峰セダン","後席はファーストクラスを超える究極の快適性","V12モデルは612馬力の圧倒的パワー","日本の政治家や経営者にも愛用者が多い"],
        rivals: ["ロールス・ロイス ゴースト","ベントレー フライングスパー","レクサスLS"]
    },
    {
        id: 449, name: "EQB", maker: "メルセデス・ベンツ", type: "コンパクトEV SUV", years: "2022〜現行",
        newPrice: "694〜788万円", fuelEco: "電費 173〜186Wh/km", engine: "モーター(140kW/215kW)",
        fuel: "電気(EV)", seats: 7, drive: "FF/4WD",
        length: "4,685mm", width: "1,835mm", height: "1,705mm", weight: "2,070〜2,230kg", trunk: "約495L",
        emoji: "⚡", popular: false,
        features: ["7人乗りEV","GLBベース","ベンツのコンパクトEV","航続距離520km"],
        talkPoints: ["7人乗りのEV SUVという珍しい選択肢","GLBベースでコンパクトながら3列シート","ベンツの品質でEVライフを始められる","テスラとは違うプレミアム感でEVデビュー"],
        rivals: ["Model Y","ID.4","EQA"]
    },
    {
        id: 450, name: "X7", maker: "BMW", type: "フルサイズSUV", years: "2019〜現行(G07)",
        newPrice: "1,177〜1,895万円", fuelEco: "8.2〜12.1km/L(WLTC)", engine: "3.0L直6ターボ/4.4L V8ターボ",
        fuel: "ガソリン(ハイオク)/ディーゼル", seats: 7, drive: "4WD",
        length: "5,165mm", width: "2,000mm", height: "1,835mm", weight: "2,480〜2,670kg", trunk: "約750L",
        emoji: "🚙", popular: false,
        features: ["BMW最大SUV","3列7人乗り","超大型グリル","最高級"],
        talkPoints: ["BMW最大のフラッグシップSUV","3列7人乗りで家族全員がプレミアムに移動","GLSやX5以上のスケール感で存在感抜群","新型の大型グリルは実物だと意外とカッコいい"],
        rivals: ["GLS","Q7","レンジローバー"]
    },
    {
        id: 451, name: "i3", maker: "BMW", type: "コンパクトEV", years: "2014〜2022(生産終了)",
        newPrice: "499〜676万円(当時)", fuelEco: "電費 134Wh/km", engine: "モーター(125kW)+レンジエクステンダー",
        fuel: "電気(EV)/レンジエクステンダー", seats: 4, drive: "RWD",
        length: "4,020mm", width: "1,775mm", height: "1,550mm", weight: "1,300〜1,390kg", trunk: "約260L",
        emoji: "⚡", popular: false,
        features: ["BMWの先駆的EV","カーボンボディ","レンジエクステンダー","独創的デザイン"],
        talkPoints: ["カーボンファイバーボディの先駆的EV","独創的なデザインは街中でも一目で分かる存在感","レンジエクステンダー付きは航続距離の不安を解消","中古100〜250万円でプレミアムEVが手に入る"],
        rivals: ["リーフ","Honda e","500e"]
    },
    {
        id: 452, name: "シャラン", maker: "フォルクスワーゲン", type: "ミニバン", years: "2010〜2022(生産終了)",
        newPrice: "404〜524万円(当時)", fuelEco: "13.7〜15.0km/L(WLTC)", engine: "1.4Lターボ(ツインチャージャー)",
        fuel: "ガソリン(ハイオク)", seats: 7, drive: "FF",
        length: "4,855mm", width: "1,910mm", height: "1,765mm", weight: "1,730〜1,800kg", trunk: "約710L",
        emoji: "🚐", popular: false,
        features: ["欧州大型ミニバン","3列7人乗り","両側スライドドア","1.4Lツインチャージ"],
        talkPoints: ["欧州車では珍しいスライドドア付き大型ミニバン","ゴルフの走りで7人乗れる欧州ファミリーカー","荷室710Lは圧倒的な大容量","中古150〜300万円で輸入ミニバンが手に入る"],
        rivals: ["ゴルフトゥーラン","Vクラス","カングー"]
    },
    {
        id: 453, name: "アップ！", maker: "フォルクスワーゲン", type: "マイクロカー", years: "2012〜2020(生産終了)",
        newPrice: "156〜243万円(当時)", fuelEco: "22.0〜25.9km/L(JC08)", engine: "1.0L/1.0Lターボ",
        fuel: "ガソリン(ハイオク)", seats: 4, drive: "FF",
        length: "3,610mm", width: "1,650mm", height: "1,495mm", weight: "920〜960kg", trunk: "約251L",
        emoji: "🚗", popular: false,
        features: ["VW最小モデル","156万円〜","GTI設定","軽サイズ"],
        talkPoints: ["156万円からの輸入車は驚異のコスパ","軽自動車サイズでVWの質感を楽しめる","GTI up!は116馬力ターボで走りが楽しい","中古40〜100万円で見つかるドイツ車"],
        rivals: ["トゥインゴ","フィアット500","パンダ"]
    },
    {
        id: 454, name: "R8", maker: "アウディ", type: "スーパーカー", years: "2016〜2023(生産終了/2代目)",
        newPrice: "2,456〜3,082万円(当時)", fuelEco: "7.3〜8.0km/L(WLTC)", engine: "5.2L V10",
        fuel: "ガソリン(ハイオク)", seats: 2, drive: "MR/4WD",
        length: "4,426mm", width: "1,940mm", height: "1,236mm", weight: "1,680〜1,750kg", trunk: "約-L",
        emoji: "🏎️", popular: false,
        features: ["ランボルギーニと同じV10","620馬力","MR/quattro","映画アイアンマン"],
        talkPoints: ["ランボルギーニ ウラカンと同じV10エンジンを搭載","620馬力で0-100km/h 3.1秒のスーパーカー","映画アイアンマンのトニー・スタークの愛車として有名","生産終了でアウディ最後のスーパーカーに"],
        rivals: ["ウラカン","911","F8トリブート"]
    },
    {
        id: 455, name: "V70", maker: "ボルボ", type: "ステーションワゴン", years: "2007〜2016(生産終了/3代目)",
        newPrice: "424〜640万円(当時)", fuelEco: "9.0〜14.5km/L(JC08)", engine: "2.0Lターボ/2.5Lターボ/3.0L T6",
        fuel: "ガソリン(ハイオク)", seats: 5, drive: "FF/4WD",
        length: "4,825mm", width: "1,890mm", height: "1,545mm", weight: "1,640〜1,840kg", trunk: "約-L",
        emoji: "🚗", popular: false,
        features: ["ボルボワゴンの代名詞","T6 304馬力","北欧デザイン","安全性"],
        talkPoints: ["ボルボのステーションワゴンといえばV70の時代が長かった","安全なワゴンとしてファミリー層に絶大な信頼","V60に後継を譲ったが中古市場ではまだ活発","中古30〜120万円で安全な輸入ワゴンが手に入る"],
        rivals: ["パサートワゴン","Eクラスワゴン","レガシィTW"]
    },
    {
        id: 456, name: "S60", maker: "ボルボ", type: "セダン", years: "2019〜現行(3代目)",
        newPrice: "549〜729万円", fuelEco: "11.3〜14.5km/L(WLTC)", engine: "2.0Lターボ/2.0Lターボ PHEV",
        fuel: "ガソリン(ハイオク)/PHEV", seats: 5, drive: "FF/4WD",
        length: "4,760mm", width: "1,850mm", height: "1,435mm", weight: "1,700〜1,940kg", trunk: "約442L",
        emoji: "🚗", popular: false,
        features: ["北欧スポーツセダン","PHEV","ポールスターチューン","走りの良さ"],
        talkPoints: ["北欧デザインのスポーツセダンでBMW 3シリーズの対抗馬","ポールスター エンジニアード仕様は走りが本格的","ドイツ車とは違う北欧の上品さが独自の魅力","中古200〜400万円で北欧セダンが手に入る"],
        rivals: ["3シリーズ","Cクラス","A4"]
    },
    {
        id: 457, name: "S90", maker: "ボルボ", type: "フラッグシップセダン", years: "2017〜現行",
        newPrice: "769〜879万円", fuelEco: "10.7〜14.5km/L(WLTC)", engine: "2.0Lターボ/2.0Lターボ PHEV",
        fuel: "ガソリン(ハイオク)/PHEV", seats: 5, drive: "FF/4WD",
        length: "4,970mm", width: "1,880mm", height: "1,445mm", weight: "1,800〜2,070kg", trunk: "約500L",
        emoji: "🚗", popular: false,
        features: ["ボルボ最高峰セダン","北欧ラグジュアリー","B&Wサウンド","PHEV"],
        talkPoints: ["ボルボのフラッグシップセダンで北欧の最高級を体験","B&Wの高級オーディオは音楽好きにたまらない","ドイツ車の5シリーズやEクラスとは違う世界観","PHEVモデルで環境配慮とラグジュアリーを両立"],
        rivals: ["5シリーズ","Eクラス","A6"]
    },
    {
        id: 458, name: "500X", maker: "フィアット", type: "コンパクトSUV", years: "2015〜現行",
        newPrice: "346〜395万円", fuelEco: "13.5〜15.3km/L(WLTC)", engine: "1.3Lターボ",
        fuel: "ガソリン(ハイオク)", seats: 5, drive: "FF",
        length: "4,280mm", width: "1,795mm", height: "1,630mm", weight: "1,380kg", trunk: "約350L",
        emoji: "🚙", popular: false,
        features: ["フィアット500のSUV版","イタリアンSUV","可愛いデザイン","コンパクト"],
        talkPoints: ["フィアット500の可愛さをSUVにしたイタリアンモデル","日本のSUVやドイツ車SUVとは違う陽気なキャラ","コンパクトSUVとして街乗りに最適なサイズ","イタリア車好きのSUV探しに最適な一台"],
        rivals: ["2008","CX-3","キャプチャー"]
    },
    {
        id: 459, name: "695", maker: "アバルト", type: "ホットハッチ", years: "2016〜現行",
        newPrice: "440〜530万円", fuelEco: "11.6km/L(WLTC)", engine: "1.4Lターボ 180馬力",
        fuel: "ガソリン(ハイオク)", seats: 4, drive: "FF",
        length: "3,660mm", width: "1,625mm", height: "1,505mm", weight: "1,120kg", trunk: "約185L",
        emoji: "🏎️", popular: false,
        features: ["595より過激","180馬力","限定モデル多数","サソリの上位版"],
        talkPoints: ["595のさらに上位版でより過激なチューニング","限定モデルが多く、コレクション性が高い","コンパクトなのに走りは本気のスポーツカー","アバルトファンにとっての究極の選択肢"],
        rivals: ["アバルト595","MINI JCW","スイフトスポーツ"]
    },
    {
        id: 460, name: "メガーヌ R.S.", maker: "ルノー", type: "ホットハッチ", years: "2018〜2023(生産終了)",
        newPrice: "444〜534万円(当時)", fuelEco: "11.7〜12.6km/L(WLTC)", engine: "1.8Lターボ 300馬力",
        fuel: "ガソリン(ハイオク)", seats: 5, drive: "FF",
        length: "4,410mm", width: "1,875mm", height: "1,435mm", weight: "1,490〜1,500kg", trunk: "約294L",
        emoji: "🏎️", popular: false,
        features: ["FFスポーツ最速","ニュルFF最速記録","300馬力","4輪操舵"],
        talkPoints: ["ニュルブルクリンクFF最速記録を持つ伝説のホットハッチ","300馬力のFF車は走りがとにかく刺激的","4輪操舵で信じられないほどよく曲がる","生産終了でFFスポーツの歴史に名を残すモデル"],
        rivals: ["シビックタイプR","ゴルフR","GRカローラ"]
    },
    {
        id: 461, name: "RCZ", maker: "プジョー", type: "スポーツクーペ", years: "2010〜2015(生産終了)",
        newPrice: "379〜468万円(当時)", fuelEco: "11.0〜14.7km/L(JC08)", engine: "1.6Lターボ/1.6Lターボ(R)",
        fuel: "ガソリン(ハイオク)", seats: 4, drive: "FF",
        length: "4,287mm", width: "1,845mm", height: "1,362mm", weight: "1,350〜1,370kg", trunk: "約309L",
        emoji: "🏎️", popular: false,
        features: ["プジョーのクーペ","ダブルバブルルーフ","美しいデザイン","限定R"],
        talkPoints: ["ダブルバブルルーフの美しいデザインが最大の魅力","プジョーが本気で作ったスポーツクーペ","Rは270馬力でサーキットでも楽しめる性能","中古80〜150万円で美しいクーペが手に入る"],
        rivals: ["TT","Z4","ロードスター"]
    },
    {
        id: 462, name: "ジュリエッタ", maker: "アルファロメオ", type: "ハッチバック", years: "2012〜2020(生産終了)",
        newPrice: "299〜468万円(当時)", fuelEco: "12.0〜14.4km/L(JC08)", engine: "1.4Lターボ/1.75Lターボ",
        fuel: "ガソリン(ハイオク)", seats: 5, drive: "FF",
        length: "4,350mm", width: "1,800mm", height: "1,460mm", weight: "1,340〜1,430kg", trunk: "約-L",
        emoji: "🚗", popular: false,
        features: ["イタリアンHB","QV設定","官能的な走り","アルファの入門"],
        talkPoints: ["アルファロメオの走りの楽しさをハッチバックで体験","QVは240馬力でかなりスポーティな走り","イタリア車の艶やかさはドイツ車にない魅力","中古60〜150万円でアルファデビューが可能"],
        rivals: ["ゴルフGTI","308","MAZDA3"]
    },
    {
        id: 463, name: "ミト", maker: "アルファロメオ", type: "コンパクト", years: "2009〜2018(生産終了)",
        newPrice: "258〜360万円(当時)", fuelEco: "13.3〜14.8km/L(JC08)", engine: "1.4Lターボ",
        fuel: "ガソリン(ハイオク)", seats: 4, drive: "FF",
        length: "4,070mm", width: "1,720mm", height: "1,465mm", weight: "1,200〜1,280kg", trunk: "約-L",
        emoji: "🚗", popular: false,
        features: ["アルファ最小モデル","盾型グリル","QV設定","コンパクト"],
        talkPoints: ["アルファロメオの走りをコンパクトに凝縮","盾型グリルのイタリアンデザインがコンパクトでも健在","中古30〜80万円で手に入るイタリアの小さな宝石","アルファ初心者に最もおすすめの入門車"],
        rivals: ["MINI","A1","DS3"]
    }
);
