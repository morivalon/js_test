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
// const func4 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func4(10, 20));

/**分割代入 */
// const myProfile = {
//   name: "tenten",
//   age: 31,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// //上面的代码太长了，可以简化成一下写法。也就是object的解构赋值。
// const {name,age}=myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

//配列の分割代入
// const myProfile = ["tenten",31];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/** スプレッド構文...(順番処理する)  展开语法 */
// 配列の展開
// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1+num2);
// //下記の２行は同じことをしている
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// //まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2, ...arr3] = arr2;

// console.log(num1);
// console.log(num2);
// console.log(...arr3);

// //配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);
