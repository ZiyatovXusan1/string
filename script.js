
// ! 1-masala
// let n = 20;
// let charCode = 65;
// for( let i = 0; i <= n; i++ ) {
//     console.log(String.fromCharCode(charCode + i));
// }

// ! 2-masala
// let n = '1';
// let a = n.charCodeAt(0);
// if ((a >= 65 && a <= 90) || (a >= 97 && a <= 122)) {
//     console.log('lotin');
// } else if (a >= 48 &&  a <= 57) {
//     console.log('digit');
// } else {
//     console.log(0);
// }

// ! 3-masala
// function matn(str) {
//   if (!str || str.length === 0) {
//     console.log("Belgilar topilmadi!!!");
//     return;
//   }

//   const firstLetter = str.charCodeAt(0);

//   const lastLetter = str.charCodeAt(str.length - 1);

//   console.log("first letter", str[0], "=> ", firstLetter);
//   console.log("last letter:", str[str.length - 1], "=> ", lastLetter);
// }
// matn('xusan')

// ! 4-masala
// function string (n, h) {
//     if (typeof h !=='string' || h.length === 0) return '';

//     if (n <= 0) return '';
    
//     return h[0].repeat(n);
// };

// console.log(string(4, 'x'));
 
// ! 5-masala
// let satr = 'salom';
// let reversed = satr.split('').reverse().join('');
// console.log('teskarisi', reversed);

// ! 6-masala
// let text = "salom";
// let N = 3;
// function getStringStars(str, N) {
//     let yulduz = "";

//     for (let i = 0; i < str.length; i++) {
//         yulduz += str[i];

//         if (i < str.length - 1) {
//             yulduz += "*".repeat(N); 
//         }
//     }

//     return yulduz;
// }

// console.log(getStringStars(text, N)); 
//! 7-masala

// let str = "5a10b";

// for( son of str){
//   if(""){}

//   else{
//     son++
//     if(!isNaN(son)){
//       console.log(son - 1)
//     }
//     else if (son == NaN){
//     console.log("aliqlanmadi",son)
//     }
//   }
// }

//! 8-masala

// let ali = `vali`
// let hsobla = 0

// for (let i of ali){

//   if(i <= 'a' && i >= 'z' ){
//     hsobla++
//   }

//   else if((i >= 'a' || 'a' <= 'я') || i === 'ё' ){
//     hsobla++
//   }
// }    console.log(hsobla)

//! 9-masala

// let satr = `uavHDBGDJGFxB`
// console.log(satr.toLowerCase())

//! 10-masala

// function son(satr) {
//   let yigindi = "";
//   for (let a of satr) {
//     if (`A` <= a && a >= "Z") {
//       a = a.toUpperCase();
//       yigindi += a;
//     } else if (a <= `a` || a >= `z`) {
//       a = a.toLowerCase();
//       yigindi += a;
//     } else {
//       console.log(`aniqlanmaadi`);
//     }
//   }
//   return yigindi;
// }

// let natija = son(`ALIvali`);

// console.log(natija);

//! 11-masala

// let satr =  `454.5`

// if(Number.isInteger(satr)){
//     console.log(1)
// }
// else if(Number(satr)){
//    console.log(2)
// }
// else{
//     console.log(0)
// }

//! 12-masala

// function getInverseNumber(n) {
//   let son = String(n);
//   let ali = son.split("").reverse().join("");
//   return Number(ali);
// }

// console.log(getInverseNumber(125));

//! 13-masala

// function son (a, b, c ){
//     if(b == "+"){
//         console.log(a + c)
//     }
//     else if(b == "-"){
//         console.log(a - c)
//     }
//     else if(b == "*"){
//         console.log(a * c)
//     }
//     else if(b == "/"){
//         console.log(a / c)
//     }
//     return son
// }
// let natija = son(41, "-" , 55)
// console.log(natija)

//! 14-masala

// let n1 = 1;
// let n2 = 2;
// let s1 = "salom"
// let s2 = `diniyo`

// s1.slice(0, n1)
// s2.slice(0, n2)

// console.log(s1.concat(s2))

//! 15-masala

// let C = prompt("Belgini kiriting:");
// let S = prompt("Satrni kiriting:");

// let natija = "";
// for (let belgi of S) {
//     if (belgi === C) {
//         natija += belgi.repeat(2);
//     } else {
//         natija += belgi;
//     }
// }

// console.log("Natija:", natija);
// alert("Natija: " + natija);

//! 16-masala

// let C = 'a';
// let S1 = 'salom aqa';
// let S2 = 'XX';

// let natija = '';
// for (let belgi of S1) {
//     if (belgi === C) {
//         natija += S2 + belgi;
//     } else {
//         natija += belgi;
//     }
// }

// console.log("C:", C);
// console.log("S1:", S1);
// console.log("S2:", S2);
// console.log("Natija:", natija);

//! 17-masala

// let S1 = 'abababa';
// let S2 = 'aba';

// let count = 0;
// let index = 0;

// while ((index = S1.indexOf(S2, index)) !== -1) {
//     count++;
//     index += S2.length;
// }

// console.log("S1:", S1);
// console.log("S2:", S2);
// console.log("Takrorlanishlar soni:", count);

//! 18-masala

// let S1 = 'salom dunyo salom';
// let S2 = 'salom';

// let index = S1.indexOf(S2);

// let natija;
// if (index !== -1) {
//     natija = S1.slice(0, index) + S1.slice(index + S2.length);
// } else {
//     natija = S1;
// }

// console.log("Natija:", natija);

//! 19-masala

// let S1 = 'salom dunyo salom hammaga salom';
// let S2 = 'salom';

// let natija;
// if (S1.includes(S2)) {
//     natija = S1.split(S2).join('');
// } else {
//     natija = S1;
// }

// console.log("Natija:", natija);

//! 20-masala

// let S1 = 'salom dunyo salom hammaga';
// let S2 = 'salom';
// let S3 = 'hello';

// let index = S1.indexOf(S2);
// let natija;
// if (index !== -1) {
//     natija = S1.slice(0, index) + S3 + S1.slice(index + S2.length);
// } else {
//     natija = S1; //
// }
// console.log("Natija:", natija);

//! 21-masala

// let S1 = 'salom dunyo salom hammaga salom';
// let S2 = 'salom';
// let S3 = 'hello';

// let index = S1.lastIndexOf(S2);

// let natija;
// if (index !== -1) {
//     natija = S1.slice(0, index) + S3 + S1.slice(index + S2.length);
// } else {
//     natija = S1;
// }

// console.log("Natija:", natija);

//! 22-masala

// let S = 'OTTO QOQ OQSOQ BOB ABBA';

// let sozlar = S.split(' ');
// let count = 0;

// for (let soz of sozlar) {
//     if (soz[0] === soz[soz.length - 1]) {
//         count++;
//     }
// }

// console.log("S:", S);
// console.log("Natija:", count);

//! 23-masala

// let S = 'SALOM ALMA ABBA ASA ARA AQA AAA';

// let sozlar = S.split(' ');
// let count = 0;

// for (let soz of sozlar) {
//     let aCount = soz.split('A').length - 1;
//     if (aCount === 2) {
//         count++;
//     }
// }

// console.log("Natija:", count);

//! 24-masala

// function getMaxOfString(str) {
//     let sozlar = str.split(' ');
//     let maxSoz = sozlar[0];
//     for (let soz of sozlar) {
//         if (soz.length > maxSoz.length) {
//             maxSoz = soz;
//         }
//     }
//     return maxSoz;
// }

// let S = "salom hammaga dunyochalar";
// console.log("Eng uzun so'z:", getMaxOfString(S));

//! 25-masala

// let S = "salom hammaga dunyo chiroyli";
// let natija = S.split(' ').join('.');
// console.log("S:", S);
// console.log("Natija:", natija);

//! 26-masala

// let S = "salom hammaga dunyo chiroyli";
// let sozlar = S.split(' ');
// let natija = sozlar.map(soz => soz.charAt(0).toUpperCase() + soz.slice(1)).join(' ');

// console.log("S:", S);
// console.log("Natija:", natija);

//! 27-masala

// let S = "Salom, dunyo! Siz nima qilyapsiz? (Men yaxshi.)";
// let marks = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"];
// let count = 0;

// for (let belgi of S) {
//     if (marks.includes(belgi)) {
//         count++;
//     }
// }

// console.log("S:", S);
// console.log("Tinish belgilari soni:", count);

//! 28-masala

// let path = "D:/Qudrat_c++/books/My_book.exe";

// let fileNameWithExt = path.substring(path.lastIndexOf("/") + 1);

// let fileName = fileNameWithExt.substring(0, fileNameWithExt.lastIndexOf("."));

// console.log("Fayl yo'li:", path);
// console.log("Fayl nomi (kengaytmasiz):", fileName);
