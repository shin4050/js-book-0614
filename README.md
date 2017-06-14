# 6/14 課題 学んだ記録

自身が学んだ記録を作りましょう。

- 関数(`function` で始まるコード)は全て function.js に書きます
- その他をREADME.md（このファイル）に書いていきます
    - 書き方は README-example.md (同じフォルダに同梱) を参考にしてください
- 書き方は自身でアレンジしてもかまいません


--------------------------------------

## 授業スライドの説明（4時間目～5時間目）

説明の中で実行したログ、分かったこと、疑問などがあればここに書く。

### Consoleの実行ログ

#4-1-1
```
sum();
55
undefined
```
#4-2-1
```
sum(1, 10);
55
undefined

sum(2,5);
14
undefined
```
#4-2-2
```
sum(1);
55
undefined

function sum(rangeTo,rangeFrom=1) {
    var total = 0;
    for (var counter = rangeFrom; counter <= rangeTo; counter++ ){
        total += counter;
    }
    window.alert(total);
}
undefined
sum(10);
55
undefined
```
#4-2-3
```
total;
VM112:1 Uncaught ReferenceError: total is not defined
    at <anonymous>:1:1
(anonymous) @ VM112:1

sum(2,5);
14
undefined
total;
VM134:1 Uncaught ReferenceError: total is not defined
    at <anonymous>:1:1

var hoge = 5;
function testScope(){
	window.alert(hoge);
}
undefined
testScope();
5
undefined

function sum(rangeFrom, rangeTo){
	let total = 0;
	for (let counter = rangeFrom; counter <= rangeTo; counter++){
		total += counter;
    }
	window.alert(counter);
}
undefined
sum(1,10);
VM199:6 Uncaught ReferenceError: counter is not defined
    at sum (<anonymous>:6:15)
    at <anonymous>:1:1
#4-2-4
var total = 0;
function sum(rangeFrom,rangeTo){
	for (var counter = rangeFrom; counter<=rangeTo; counter++){
		total += counter;
    }
}
undefined
sum(1,10);
undefined
window.alert(total);
55
undefined
sum(1,10);
undefined
window.alert(total);
110
undefined

function sum(rangeFrom,rangeTo){
	var total = 0;
	for (var counter = rangeFrom; counter<=rangeTo; counter++){
		total += counter;
    }
	return total;
}
undefined
sum(1,10);
55
window.alert(total);
55
undefined

function isNarrow(){
	return window.innerWidth < 1000;
}
undefined
if(isNarrow()){
	window.alert('狭いです');
}else{
	window.alert('広いです');
}
狭いです
undefined
```
#4-3-1
```
var sampleArray = [];
undefined
sampleArray;
[]
var sampleArray = [1,3,5];
undefined
sampleArray;
(3) [1, 3, 5]
```
#4-3-2
```
var sampleArray = [];
undefined
sampleArray.push(59);
1
sampleArray;
[59]
sampleArray.push(61);
2
sampleArray;
(2) [59, 61]

sampleArray[0];
59
sampleArray[1];
61
sampleArray[2];
undefined

sampleArray.splice(0,1);
[59]
sampleArray;
[61]

sampleArray.push(67);
2
sampleArray.push(71);
3
sampleArray.push(73);
4
sampleArray;
(4) [61, 67, 71, 73]
sampleArray.splice(1,2);
(2) [67, 71]
sampleArray;
(2) [61, 73]

sampleArray.length;
2
```
#4-3-3
```
function calculateTaxIncluding(prices){
	var results = [];
	for (var index=0, length = prices.length; index < length; index++){
	results.push(prices[index]*1.08);
    }
	return results;
}
undefined
calculateTaxIncluding([100,200,40,50]);
(4) [108, 216, 43.2, 54]
```
#4-3-4
```
var a = [0,1,1,2,3,5,8];
undefined
a.toString();
"0,1,1,2,3,5,8"

var a = [0,1,1,2,3,5,8];
undefined
a.join(' and ');
"0 and 1 and 1 and 2 and 3 and 5 and 8"

var a = [0,1,1,2,3,5,8];
undefined
a.join();
"0,1,1,2,3,5,8"

var a = [0,1,1,2,3,5,8];
undefined
a.indexOf(5);
5

var a = [0,1,1,2,3,5,8];
undefined
a.indexOf(4);
-1

var a = [0,1,1,2,3,5,8];
undefined
a.indexOf(1);
1

var a = [0,1,1,2,3,5,8];
undefined
a.lastIndexOf(1);
2
```
##確認テスト4時間目Q1
```
function mul(rangeFrom, rangeTo) {
    var total = 1;
    for (var counter = rangeFrom; counter <= rangeTo; counter++){
        total *= counter; 
    }
    window.alert(total);
}
mul(1,3);
6
mul(1,10);
3628800
mul(2,4)
24
```
##確認テスト4時間目Q2


### Console以外の動き（もしあれば）

### 分かったこと

【ここに書く】

### 疑問・分からないこと（もしあれば）

【ここに書く（なければ省略可）】

--------------------------------------

以下、教科書の自分で読んだ・実行した箇所について書く。

## 4-x ○○ (p.xx)

### Consoleの実行ログ

```
【ここに書く】
```

### Console以外の動き（もしあれば）

【ここに書く（なければ省略可）】

### 分かったこと

【ここに書く】

### 疑問・分からないこと（もしあれば）

【ここに書く（なければ省略可）】
