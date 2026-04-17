// CarTalk Pro - 歴代モデル（世代別）データ
// 現行モデル以外に、街中でまだよく見かける型落ちモデルを追加

(function() {
    function addGenerations(carName, generations) {
        const car = CAR_DATABASE.find(c => c.name === carName);
        if (car) car.generations = generations;
    }

    // ========================
    // トヨタ
    // ========================

    addGenerations("プリウス", [
        {
            genName: "30系(3代目)", years: "2009〜2015",
            newPrice: "205〜343万円(当時)", engine: "1.8L ハイブリッド", fuel: "ハイブリッド(レギュラー)",
            fuelEco: "30.4〜32.6km/L(JC08)", drive: "FF/4WD",
            length: "4,480mm", width: "1,745mm", height: "1,490mm", weight: "1,310〜1,390kg",
            talkPoints: ["タクシーでも使われるほど壊れにくいと有名", "30万km走っても大丈夫という報告も多い耐久性", "中古で100万円以下の個体も多く手が出しやすい", "バッテリー交換は20万円程度で延命可能"]
        },
        {
            genName: "40/50系(4代目)", years: "2015〜2023",
            newPrice: "251〜404万円(当時)", engine: "1.8L ハイブリッド", fuel: "ハイブリッド(レギュラー)",
            fuelEco: "30.4〜39.0km/L(WLTC)", drive: "FF/4WD",
            length: "4,575mm", width: "1,760mm", height: "1,470mm", weight: "1,320〜1,460kg",
            talkPoints: ["デザインが好評でファミリー層にも広がった", "TSS(安全装備)が標準装備で安心", "E-Fourは電気式4WDで雪道にも対応", "中古150〜250万円帯で良い個体が見つかる"]
        }
    ]);

    addGenerations("アクア", [
        {
            genName: "初代(NHP10)", years: "2011〜2021",
            newPrice: "169〜259万円(当時)", engine: "1.5L ハイブリッド", fuel: "ハイブリッド(レギュラー)",
            fuelEco: "33.8〜38.0km/L(JC08)", drive: "FF",
            length: "3,995〜4,050mm", width: "1,695mm", height: "1,455mm", weight: "1,050〜1,100kg",
            talkPoints: ["コンパクトHVの先駆者で累計187万台以上の大ヒット", "中古50〜100万円台で手に入るお買い得車", "コンパクトで取り回し抜群、初めての車にも最適", "クロスオーバーモデルも後期に追加されSUV風に"]
        }
    ]);

    addGenerations("ヴォクシー", [
        {
            genName: "80系(3代目)", years: "2014〜2021",
            newPrice: "247〜344万円(当時)", engine: "2.0L/1.8L HV", fuel: "ガソリン(レギュラー)/ハイブリッド",
            fuelEco: "14.0〜23.8km/L(WLTC)", drive: "FF/4WD",
            length: "4,695mm", width: "1,695mm", height: "1,825mm", weight: "1,560〜1,620kg",
            talkPoints: ["5ナンバーサイズで日本の駐車場にピッタリ", "中古150〜250万円帯で豊富に流通", "ハイブリッドの中古は燃費も良く経済的", "煌(きらめき)グレードが特に人気で高リセール"]
        }
    ]);

    addGenerations("ノア", [
        {
            genName: "80系(3代目)", years: "2014〜2021",
            newPrice: "228〜332万円(当時)", engine: "2.0L/1.8L HV", fuel: "ガソリン(レギュラー)/ハイブリッド",
            fuelEco: "14.0〜23.8km/L(WLTC)", drive: "FF/4WD",
            length: "4,695mm", width: "1,695mm", height: "1,825mm", weight: "1,560〜1,620kg",
            talkPoints: ["ヴォクシーより落ち着いたデザインでファミリーに人気", "5ナンバーサイズ最後のミニバンとして貴重", "Si W×Bグレードが特に人気", "中古はヴォクシーよりやや安い傾向でお得"]
        }
    ]);

    addGenerations("アルファード", [
        {
            genName: "30系(3代目)", years: "2015〜2023",
            newPrice: "319〜775万円(当時)", engine: "2.5L/3.5L V6/2.5L HV", fuel: "ガソリン(ハイオク/レギュラー)/ハイブリッド",
            fuelEco: "9.9〜19.6km/L(WLTC)", drive: "FF/4WD",
            length: "4,945〜4,950mm", width: "1,850mm", height: "1,950mm", weight: "1,920〜2,150kg",
            talkPoints: ["中古でも高値安定、リセール最強のミニバン", "後期型(2018〜)は特にデザインが洗練されて人気", "エグゼクティブラウンジは新車を超える中古価格も", "SCパッケージは装備充実で中古のお買い得グレード"]
        },
        {
            genName: "20系(2代目)", years: "2008〜2015",
            newPrice: "300〜680万円(当時)", engine: "2.4L/3.5L V6", fuel: "ガソリン(レギュラー/ハイオク)",
            fuelEco: "9.1〜11.6km/L(JC08)", drive: "FF/4WD",
            length: "4,850〜4,885mm", width: "1,840〜1,850mm", height: "1,900〜1,935mm", weight: "1,850〜2,070kg",
            talkPoints: ["まだまだ現役で走っている個体が多い", "中古100〜200万円台で大型ミニバンが手に入る", "3.5L V6の余裕ある走りは今でも価値がある", "年式的にそろそろ乗り換えを検討する方が多い時期"]
        }
    ]);

    addGenerations("ハリアー", [
        {
            genName: "60系(3代目)", years: "2013〜2020",
            newPrice: "280〜469万円(当時)", engine: "2.0Lターボ/2.0L/2.5L HV", fuel: "ガソリン(ハイオク/レギュラー)/ハイブリッド",
            fuelEco: "12.8〜21.4km/L(JC08)", drive: "FF/4WD",
            length: "4,720〜4,770mm", width: "1,835mm", height: "1,690mm", weight: "1,580〜1,800kg",
            talkPoints: ["プレミアムSUVブームの火付け役の一台", "2.0Lターボモデルは走りが楽しいと好評", "中古150〜250万円で高級SUVが手に入る", "内装の質感は年式を感じさせない上質さ"]
        }
    ]);

    addGenerations("シエンタ", [
        {
            genName: "2代目(170系)", years: "2015〜2022",
            newPrice: "181〜258万円(当時)", engine: "1.5L/1.5L HV", fuel: "ガソリン(レギュラー)/ハイブリッド",
            fuelEco: "15.4〜28.8km/L(WLTC)", drive: "FF/4WD",
            length: "4,260mm", width: "1,695mm", height: "1,675mm", weight: "1,270〜1,380kg",
            talkPoints: ["手頃なサイズの3列シートで子育て世代に大人気", "後期型は安全装備も充実でコスパ抜群", "中古100〜180万円台で流通量も多い", "5ナンバーで取り回しもしやすいミニバン"]
        }
    ]);

    addGenerations("C-HR", [
        {
            genName: "初代(NGX50)", years: "2016〜2023",
            newPrice: "229〜316万円(当時)", engine: "1.2Lターボ/1.8L HV", fuel: "ガソリン(ハイオク)/ハイブリッド",
            fuelEco: "15.4〜30.4km/L(WLTC)", drive: "FF/4WD",
            length: "4,360mm", width: "1,795mm", height: "1,550mm", weight: "1,390〜1,470kg",
            talkPoints: ["デザインが斬新でSUVブームを牽引した一台", "ハイブリッドモデルの燃費は30km/L超えの経済性", "後席が狭めなのでカップルや少人数向き", "中古120〜200万円でスタイリッシュSUVが手に入る"]
        }
    ]);

    addGenerations("ランドクルーザー300", [
        {
            genName: "200系", years: "2007〜2021",
            newPrice: "435〜723万円(当時)", engine: "4.6L V8/4.7L V8", fuel: "ガソリン(ハイオク)",
            fuelEco: "6.7〜6.9km/L(JC08)", drive: "4WD",
            length: "4,950mm", width: "1,980mm", height: "1,870〜1,880mm", weight: "2,430〜2,690kg",
            talkPoints: ["中古でも新車価格を超えることがある異常なリセール", "V8エンジンの力強さは後継300系にない魅力", "海外需要が非常に高く盗難に注意が必要", "古くても壊れない耐久性がランクルの神髄"]
        }
    ]);

    addGenerations("クラウン", [
        {
            genName: "220系(15代目)", years: "2018〜2022",
            newPrice: "460〜739万円(当時)", engine: "2.0Lターボ/2.5L HV/3.5L HV", fuel: "ガソリン(ハイオク)/ハイブリッド",
            fuelEco: "12.4〜24.0km/L(WLTC)", drive: "FR/4WD",
            length: "4,910mm", width: "1,800mm", height: "1,455mm", weight: "1,690〜1,900kg",
            talkPoints: ["従来のクラウンらしさを持つ最後の世代", "2.0Lターボの走りの良さが意外にも好評", "中古250〜400万円でプレミアムセダンが手に入る", "法人需要終了後の放出車両はコンディション良好が多い"]
        }
    ]);

    addGenerations("カローラクロス", [
        {
            genName: "初代(10系)", years: "2021〜2024(先代)",
            newPrice: "199〜319万円(当時)", engine: "1.8L/1.8L HV", fuel: "ガソリン(レギュラー)/ハイブリッド",
            fuelEco: "14.4〜26.2km/L(WLTC)", drive: "FF/4WD",
            length: "4,490mm", width: "1,825mm", height: "1,620mm", weight: "1,330〜1,430kg",
            talkPoints: ["発売直後から大人気で納期が長かった人気モデル", "中古200万円前後で良い個体が見つかりやすい", "ハイブリッドの燃費は26km/Lとクラストップの経済性", "現行型とのデザイン差が少なく古く見えにくい"]
        }
    ]);

    // ========================
    // ホンダ
    // ========================

    addGenerations("N-BOX", [
        {
            genName: "2代目(JF3/4)", years: "2017〜2023",
            newPrice: "144〜225万円(当時)", engine: "660cc/660ccターボ", fuel: "ガソリン(レギュラー)",
            fuelEco: "19.4〜27.0km/L(WLTC)", drive: "FF/4WD",
            length: "3,395mm", width: "1,475mm", height: "1,790mm", weight: "890〜1,020kg",
            talkPoints: ["軽自動車販売No.1を何年も連続で獲得した王者", "中古80〜150万円で良質な個体が豊富", "Honda SENSING標準装備で安全性も高い", "カスタムモデルは見た目のインパクトが強い"]
        }
    ]);

    addGenerations("フィット", [
        {
            genName: "3代目(GK)", years: "2013〜2020",
            newPrice: "130〜241万円(当時)", engine: "1.3L/1.5L/1.5L HV", fuel: "ガソリン(レギュラー)/ハイブリッド",
            fuelEco: "19.0〜36.4km/L(JC08)", drive: "FF/4WD",
            length: "3,955mm", width: "1,695mm", height: "1,525mm", weight: "970〜1,130kg",
            talkPoints: ["RS仕様は走りが楽しいコンパクトとして人気だった", "中古50〜100万円台と非常にリーズナブル", "室内の広さはこの世代でも他社を圧倒するレベル", "ハイブリッドのDCT(ツインクラッチ)は好みが分かれた"]
        }
    ]);

    addGenerations("ヴェゼル", [
        {
            genName: "初代(RU)", years: "2013〜2021",
            newPrice: "192〜292万円(当時)", engine: "1.5L/1.5L HV/1.5Lターボ", fuel: "ガソリン(レギュラー)/ハイブリッド",
            fuelEco: "17.6〜27.0km/L(JC08)", drive: "FF/4WD",
            length: "4,295〜4,340mm", width: "1,770〜1,790mm", height: "1,605mm", weight: "1,180〜1,390kg",
            talkPoints: ["SUV販売台数No.1を獲得したコンパクトSUVの先駆者", "ツーリングは1.5Lターボで走りが楽しい", "中古100〜180万円で流通量が多くお買い得", "デザインは今見ても古さを感じないスタイリッシュさ"]
        }
    ]);

    addGenerations("フリード", [
        {
            genName: "2代目(GB5/6/7/8)", years: "2016〜2024",
            newPrice: "199〜304万円(当時)", engine: "1.5L/1.5L HV", fuel: "ガソリン(レギュラー)/ハイブリッド",
            fuelEco: "15.6〜28.0km/L(WLTC)", drive: "FF/4WD",
            length: "4,265mm", width: "1,695mm", height: "1,710mm", weight: "1,340〜1,490kg",
            talkPoints: ["ちょうどいいサイズ感のミニバンとして絶大な人気", "5ナンバーで取り回ししやすく奥様にも好評", "中古120〜220万円帯で豊富に流通", "Crosstar(クロスター)はSUV風で差別化できる"]
        }
    ]);

    addGenerations("ステップワゴン", [
        {
            genName: "5代目(RP)", years: "2015〜2022",
            newPrice: "228〜366万円(当時)", engine: "1.5Lターボ/2.0L HV", fuel: "ガソリン(レギュラー)/ハイブリッド",
            fuelEco: "13.6〜25.0km/L(WLTC)", drive: "FF/4WD",
            length: "4,690〜4,760mm", width: "1,695mm", height: "1,840mm", weight: "1,640〜1,820kg",
            talkPoints: ["わくわくゲート(斜め開きバックドア)は唯一無二の装備", "スパーダはエアロ装備で見た目がカッコいい", "i-MMDハイブリッドは静かで燃費も良い", "中古150〜250万円でミニバンが手に入る"]
        }
    ]);

    // ========================
    // 日産
    // ========================

    addGenerations("セレナ", [
        {
            genName: "C27(5代目)", years: "2016〜2022",
            newPrice: "244〜380万円(当時)", engine: "2.0L/2.0L e-POWER", fuel: "ガソリン(レギュラー)/e-POWER",
            fuelEco: "11.8〜26.2km/L(WLTC)", drive: "FF/4WD",
            length: "4,685〜4,770mm", width: "1,695〜1,740mm", height: "1,865mm", weight: "1,630〜1,780kg",
            talkPoints: ["e-POWERモデルは静粛性が高く上質な乗り心地", "ハイウェイスターはエアロで迫力のあるデザイン", "中古150〜250万円で広々ミニバンが手に入る", "プロパイロットで高速道路の運転が楽"]
        }
    ]);

    addGenerations("ノート", [
        {
            genName: "E12(2代目)", years: "2012〜2020",
            newPrice: "139〜248万円(当時)", engine: "1.2L/1.2L e-POWER/1.6Lニスモ", fuel: "ガソリン(レギュラー)/e-POWER",
            fuelEco: "23.4〜37.2km/L(JC08)", drive: "FF/4WD",
            length: "4,100〜4,190mm", width: "1,695mm", height: "1,520mm", weight: "1,030〜1,220kg",
            talkPoints: ["e-POWERで大ヒットしたコンパクトカー", "中古50〜120万円台で手頃に手に入る", "ニスモSはチューンされた走りが楽しい隠れた名車", "e-POWERのワンペダルドライブに慣れると手放せない"]
        }
    ]);

    addGenerations("エクストレイル", [
        {
            genName: "T32(3代目)", years: "2013〜2022",
            newPrice: "223〜380万円(当時)", engine: "2.0L/2.0L HV", fuel: "ガソリン(レギュラー)/ハイブリッド",
            fuelEco: "13.8〜20.8km/L(WLTC)", drive: "FF/4WD",
            length: "4,640〜4,690mm", width: "1,820mm", height: "1,715〜1,740mm", weight: "1,440〜1,640kg",
            talkPoints: ["防水シートでアウトドアの汚れも気にならない", "プロパイロット搭載で高速が楽なSUV", "中古120〜220万円で本格SUVが手に入る", "3列シート仕様もありファミリーにも対応"]
        }
    ]);

    // ========================
    // マツダ
    // ========================

    addGenerations("CX-5", [
        {
            genName: "初代(KE)", years: "2012〜2016",
            newPrice: "226〜352万円(当時)", engine: "2.0L/2.5L/2.2Lディーゼル", fuel: "ガソリン(レギュラー)/ディーゼル",
            fuelEco: "14.2〜18.6km/L(JC08)", drive: "FF/4WD",
            length: "4,540mm", width: "1,840mm", height: "1,710mm", weight: "1,440〜1,620kg",
            talkPoints: ["SKYACTIVを初搭載した記念すべきモデル", "ディーゼルの力強いトルクは今でも十分魅力的", "中古60〜120万円台とかなりリーズナブル", "マツダ復活の立役者として歴史的な一台"]
        }
    ]);

    // ========================
    // スバル
    // ========================

    addGenerations("フォレスター", [
        {
            genName: "SK系(5代目)", years: "2018〜2024",
            newPrice: "291〜363万円(当時)", engine: "2.5L/2.0L e-BOXER/1.8Lターボ", fuel: "ガソリン(レギュラー)",
            fuelEco: "13.6〜14.0km/L(WLTC)", drive: "AWD",
            length: "4,640mm", width: "1,815mm", height: "1,715mm", weight: "1,530〜1,620kg",
            talkPoints: ["全車AWDで雪国ユーザーに絶大な信頼", "X-MODEで本格的な悪路走破も可能", "アイサイトの安全性能は業界トップクラス", "中古200〜280万円でAWD SUVが手に入る"]
        }
    ]);

    addGenerations("レヴォーグ", [
        {
            genName: "初代(VM)", years: "2014〜2020",
            newPrice: "277〜405万円(当時)", engine: "1.6Lターボ/2.0Lターボ", fuel: "ガソリン(レギュラー/ハイオク)",
            fuelEco: "13.2〜16.0km/L(JC08)", drive: "AWD",
            length: "4,690mm", width: "1,780mm", height: "1,490mm", weight: "1,530〜1,570kg",
            talkPoints: ["レガシィツーリングワゴンの実質後継モデル", "1.6Lターボはレギュラー仕様で維持費が抑えめ", "2.0L STI Sportは300馬力の激速ワゴン", "中古140〜250万円でAWDワゴンが手に入る"]
        }
    ]);

    // ========================
    // スズキ
    // ========================

    addGenerations("ハスラー", [
        {
            genName: "初代(MR31/41S)", years: "2014〜2019",
            newPrice: "108〜172万円(当時)", engine: "660cc/660ccターボ", fuel: "ガソリン(レギュラー)",
            fuelEco: "24.2〜32.0km/L(JC08)", drive: "FF/4WD",
            length: "3,395mm", width: "1,475mm", height: "1,665mm", weight: "750〜840kg",
            talkPoints: ["遊べる軽として大ヒットしたクロスオーバー軽", "ポップなカラーリングが今でも人気", "中古50〜100万円台で手軽に手に入る", "ターボ4WDなら雪道やキャンプにも頼もしい"]
        }
    ]);

    addGenerations("ジムニー", [
        {
            genName: "JB23(3代目)", years: "1998〜2018",
            newPrice: "129〜169万円(当時)", engine: "660ccターボ", fuel: "ガソリン(レギュラー)",
            fuelEco: "13.6〜14.8km/L(JC08)", drive: "パートタイム4WD",
            length: "3,395mm", width: "1,475mm", height: "1,680mm", weight: "970〜1,000kg",
            talkPoints: ["20年間販売された超ロングセラー", "古い個体でもリセールが異常に高い", "カスタムパーツが山ほどあり自分仕様に改造しやすい", "丸目カスタムで可愛くする人も多い"]
        }
    ]);

    addGenerations("スイフト", [
        {
            genName: "3代目(ZC/ZD)", years: "2017〜2023",
            newPrice: "134〜206万円(当時)", engine: "1.0Lターボ/1.2L/1.2L マイルドHV/1.4Lターボ(スポーツ)", fuel: "ガソリン(レギュラー/ハイオク)",
            fuelEco: "16.2〜24.0km/L(WLTC)", drive: "FF/4WD",
            length: "3,840〜3,890mm", width: "1,695〜1,735mm", height: "1,500〜1,510mm", weight: "840〜990kg",
            talkPoints: ["スイフトスポーツは走り屋に大人気の名車", "1.4Lターボ140馬力で車重970kgは楽しすぎる走り", "ATもMTもある珍しいスポーツカー", "中古60〜150万円で本格スポーツが手に入る"]
        }
    ]);

    // ========================
    // ダイハツ
    // ========================

    addGenerations("タント", [
        {
            genName: "3代目(LA600/610S)", years: "2013〜2019",
            newPrice: "122〜187万円(当時)", engine: "660cc/660ccターボ", fuel: "ガソリン(レギュラー)",
            fuelEco: "24.6〜28.0km/L(JC08)", drive: "FF/4WD",
            length: "3,395mm", width: "1,475mm", height: "1,750mm", weight: "880〜960kg",
            talkPoints: ["ミラクルオープンドアで乗り降りが超楽", "助手席側はピラーレスで開放感抜群", "中古40〜100万円台で格安軽が手に入る", "スマートアシスト搭載で安全性も確保"]
        }
    ]);

    // ========================
    // 輸入車
    // ========================

    addGenerations("3シリーズ", [
        {
            genName: "F30/F31(6代目)", years: "2012〜2019",
            newPrice: "395〜850万円(当時)", engine: "1.5L直3/2.0L直4/3.0L直6ターボ", fuel: "ガソリン(ハイオク)/ディーゼル",
            fuelEco: "12.2〜21.4km/L(JC08)", drive: "FR/4WD(xDrive)",
            length: "4,625〜4,645mm", width: "1,800mm", height: "1,440mm", weight: "1,460〜1,750kg",
            talkPoints: ["直6ターボの340iは今でも走りの楽しさは一級品", "320dディーゼルは維持費が抑えめで人気", "中古150〜300万円でBMWに乗れるチャンス", "ツーリング(ワゴン)は荷室も広く実用的"]
        }
    ]);

    addGenerations("ゴルフ", [
        {
            genName: "7代目(MK7/7.5)", years: "2013〜2021",
            newPrice: "249〜555万円(当時)", engine: "1.2Lターボ/1.4Lターボ/2.0Lターボ", fuel: "ガソリン(ハイオク)",
            fuelEco: "13.0〜19.1km/L(JC08)", drive: "FF/4WD",
            length: "4,265mm", width: "1,800mm", height: "1,480mm", weight: "1,240〜1,510kg",
            talkPoints: ["完成度の高さで今でも十分満足できる世代", "GTIは220馬力でホットハッチの王道", "中古100〜250万円でドイツ車品質が手に入る", "7.5は後期改良型で信頼性も高い"]
        }
    ]);
})();
