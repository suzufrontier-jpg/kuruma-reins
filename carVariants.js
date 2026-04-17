// CarTalk Pro - ボディタイプ別スペック (variants) 追加
// 複数ボディタイプがある車種にvariantsを追加

(function() {
    function addVariants(carName, variants) {
        const car = CAR_DATABASE.find(c => c.name === carName);
        if (car) car.variants = variants;
    }

    // BMW 3シリーズ: セダン / ツーリング
    addVariants("3シリーズ", [
        { name: "セダン (G20)", length: "4,715mm", width: "1,825mm", height: "1,440mm", fuelEco: "12.5〜17.3km/L", price: "523〜982万円" },
        { name: "ツーリング (G21)", length: "4,715mm", width: "1,825mm", height: "1,475mm", fuelEco: "12.3〜16.8km/L", price: "573〜1,032万円" }
    ]);

    // MAZDA3: ファストバック / セダン
    addVariants("MAZDA3", [
        { name: "ファストバック (HB)", length: "4,460mm", width: "1,795mm", height: "1,440mm", fuelEco: "15.8〜20.0km/L", price: "228〜368万円" },
        { name: "セダン", length: "4,660mm", width: "1,795mm", height: "1,445mm", fuelEco: "15.8〜19.8km/L", price: "228〜357万円" }
    ]);

    // カローラ: セダン / ツーリング / スポーツ
    addVariants("カローラ", [
        { name: "セダン", length: "4,495mm", width: "1,745mm", height: "1,435mm", fuelEco: "19.4〜30.2km/L", price: "199〜304万円" },
        { name: "ツーリング", length: "4,495mm", width: "1,745mm", height: "1,460mm", fuelEco: "19.4〜29.5km/L", price: "207〜311万円" },
        { name: "スポーツ", length: "4,375mm", width: "1,790mm", height: "1,460mm", fuelEco: "18.3〜30.0km/L", price: "216〜315万円" }
    ]);

    // シビック: セダン / ハッチバック / TYPE R
    addVariants("シビック", [
        { name: "ハッチバック", length: "4,550mm", width: "1,800mm", height: "1,415mm", fuelEco: "16.3〜24.2km/L", price: "319〜399万円" },
        { name: "TYPE R", length: "4,595mm", width: "1,890mm", height: "1,405mm", fuelEco: "12.5km/L", price: "499万円" }
    ]);

    // クラウン: クロスオーバー / スポーツ / セダン / エステート
    addVariants("クラウン", [
        { name: "クロスオーバー", length: "4,930mm", width: "1,840mm", height: "1,540mm", fuelEco: "15.7〜22.4km/L", price: "435〜640万円" },
        { name: "スポーツ", length: "4,710mm", width: "1,880mm", height: "1,560mm", fuelEco: "18.4〜21.3km/L", price: "590〜765万円" },
        { name: "セダン(FCEV)", length: "5,030mm", width: "1,890mm", height: "1,470mm", fuelEco: "水素燃料", price: "830万円" },
        { name: "エステート", length: "4,930mm", width: "1,880mm", height: "1,620mm", fuelEco: "15.7〜22.4km/L", price: "590〜640万円" }
    ]);

    // フィット: BASIC / HOME / RS / LUXE / CROSSTAR
    addVariants("フィット", [
        { name: "BASIC", length: "3,995mm", width: "1,695mm", height: "1,515mm", fuelEco: "17.0〜30.2km/L", price: "162〜210万円" },
        { name: "CROSSTAR", length: "4,090mm", width: "1,725mm", height: "1,570mm", fuelEco: "17.0〜27.0km/L", price: "207〜266万円" }
    ]);

    // Cクラス: セダン / ステーションワゴン
    addVariants("Cクラス", [
        { name: "セダン (W206)", length: "4,751mm", width: "1,820mm", height: "1,438mm", fuelEco: "13.2〜17.3km/L", price: "564〜920万円" },
        { name: "ステーションワゴン (S206)", length: "4,751mm", width: "1,820mm", height: "1,455mm", fuelEco: "12.9〜17.1km/L", price: "589〜945万円" }
    ]);

    // ゴルフ: 標準 / GTI / R / ヴァリアント
    addVariants("ゴルフ", [
        { name: "ハッチバック", length: "4,295mm", width: "1,790mm", height: "1,475mm", fuelEco: "14.1〜17.3km/L", price: "312〜420万円" },
        { name: "GTI", length: "4,295mm", width: "1,790mm", height: "1,465mm", fuelEco: "13.0km/L", price: "477万円" },
        { name: "R", length: "4,295mm", width: "1,790mm", height: "1,465mm", fuelEco: "12.3km/L", price: "544万円" },
        { name: "ヴァリアント (ワゴン)", length: "4,640mm", width: "1,790mm", height: "1,485mm", fuelEco: "14.1〜16.9km/L", price: "337〜435万円" }
    ]);

    // スペーシア: 標準 / カスタム / ギア
    addVariants("スペーシア", [
        { name: "スペーシア (標準)", length: "3,395mm", width: "1,475mm", height: "1,785mm", fuelEco: "22.4〜25.1km/L", price: "153〜178万円" },
        { name: "カスタム", length: "3,395mm", width: "1,475mm", height: "1,785mm", fuelEco: "20.5〜23.9km/L", price: "180〜220万円" },
        { name: "ギア", length: "3,395mm", width: "1,475mm", height: "1,800mm", fuelEco: "19.8〜21.2km/L", price: "185〜215万円" }
    ]);

    // N-BOX: 標準 / カスタム
    addVariants("N-BOX", [
        { name: "N-BOX (標準)", length: "3,395mm", width: "1,475mm", height: "1,790mm", fuelEco: "19.4〜21.6km/L", price: "164〜197万円" },
        { name: "N-BOX カスタム", length: "3,395mm", width: "1,475mm", height: "1,790mm", fuelEco: "19.4〜21.6km/L", price: "184〜236万円" }
    ]);

    // ヤリス: 標準 / GR (GRヤリスは別エントリなので省略)
    addVariants("ヤリス", [
        { name: "ハッチバック", length: "3,940mm", width: "1,695mm", height: "1,500mm", fuelEco: "20.2〜36.0km/L", price: "150〜253万円" },
        { name: "ヤリスクロス (SUV)", length: "4,180mm", width: "1,765mm", height: "1,590mm", fuelEco: "17.4〜30.8km/L", price: "189〜293万円" }
    ]);

    // Eクラス: セダン / ステーションワゴン
    addVariants("Eクラス", [
        { name: "セダン (W214)", length: "4,950mm", width: "1,880mm", height: "1,470mm", fuelEco: "11.5〜16.3km/L", price: "938〜1,245万円" },
        { name: "ステーションワゴン (S214)", length: "4,960mm", width: "1,880mm", height: "1,490mm", fuelEco: "11.2〜15.8km/L", price: "978〜1,285万円" }
    ]);

    // MINI: 3ドア / 5ドア
    addVariants("MINI 3ドア/5ドア", [
        { name: "3ドア (F56)", length: "3,875mm", width: "1,745mm", height: "1,455mm", fuelEco: "15.2〜17.8km/L", price: "398〜502万円" },
        { name: "5ドア (F55)", length: "4,035mm", width: "1,745mm", height: "1,455mm", fuelEco: "14.4〜17.5km/L", price: "423〜527万円" },
        { name: "コンバーチブル", length: "3,875mm", width: "1,745mm", height: "1,415mm", fuelEco: "15.0〜17.0km/L", price: "475〜580万円" }
    ]);

    // デリカD:5 / デリカミニ
    addVariants("デリカD:5", [
        { name: "デリカD:5 (標準)", length: "4,800mm", width: "1,795mm", height: "1,875mm", fuelEco: "13.6km/L", price: "400〜438万円" },
        { name: "デリカD:5 JASPER", length: "4,800mm", width: "1,795mm", height: "1,875mm", fuelEco: "13.6km/L", price: "441〜460万円" }
    ]);
})();
