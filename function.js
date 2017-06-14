// ここに関数(function)を書く
// 注意：同じ名前の関数は、下に書いたものが優先される

// 以下は記入例。
// コメントに「どこに書いてあるコードか」が分かるように書く。（最低でもページ数を書く）

// リスト4.1 (p.79)
function sum(rangeFrom, rangeTo) {
    var total = 0;
    for (var counter = rangeFrom; counter <= rangeTo; counter++ ){
        total += counter;
    }
    window.alert(total);
}

// 確認テスト Q1
function mu(rangeFrom, rangeTo) {
    var total = 1;
    for (var counter = rangeFrom; counter <= rangeTo; counter++){
        total *= counter; 
    }
    return total;
}
