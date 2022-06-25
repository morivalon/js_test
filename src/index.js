/**const var let変数宣言 */

// var val1 = "val変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //let変数上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// //let変数は再宣言不可能 X
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可能 X
// val3 = "const変数を上書き";

// //const変数は再宣言不可能 X
// const val3 "const変数を再宣言";

//constで定義したオブジェクトはプロパティの変更、追加などが可能
// const val4 = {
//   name:"tenten",
//   age:31,
// };
// val4.name ="denden";　 //上書き
// val4.adress ="Osaka"; //追加
// console.log(val4);

// //constで定義した配列はプロパティの変更、追加などが可能
// const val5 = ['dog','cat'];
// val5[0] = "bird"; //上書き
// val5.push("rabbit");//追加
// console.log(val5);

// /** テンプレート文字列*/
// const name = "tenten";
// const age = 31;
// //私の名前はtentenです。年齢は31歳です。

// //テンプレート文字列を用いた方法
// const message = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message);

/**アロー関数 */
//従来のアロー関数
// function func1(str){
//   return str;
// }
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です"));
// //return省略可能
// const func3 = (str) => str;
// console.log(func3("func3です"))

//例
const func4 = (num1, num2) => {
  return num1 + num2;
};
console.log(func4(10, 20));
