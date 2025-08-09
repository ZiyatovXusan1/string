
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

