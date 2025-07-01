// function select (good){
//     for(let i = 0; i < good.length; i ++){
//         return good[i].category.filter((item) => item == "laptop")
//     }
// }
// select(products);
// console.log(select(products));

// console.log(products);


// function showDetails(index) {
//   const filteredProducts = products.filter((item, i) => i == index);

//   console.log(filteredProducts);
// }
// showDetails(products)


// let letters = "xxXxOooom";

// let xAmoun = 0;
// let oAmount = 0;

// function compare(xo) {
//     for (let i = 0; i < xo.length; i++) {
//         if (xo[i].toLowerCase() == "x") {
//             xAmoun++;
//         } else if (xo[i].toLowerCase() == "o") {
//             oAmount++;
//         }
//     }
//     console.log(xAmoun == oAmount);
// }
// compare(letters);


// const nun = ["hello", "nima"]

// console.log(typeof nun.join( ));

// let a = "nima qilissan jigar hi";

// function nimadir(str){
//     const array = str.split(" ")
//     const lengths = array.map(word => word.length)
//     console.log(Math.min(...lengths));

// }
// nimadir(a)
// let word = "difficultii"

// function getCount(str) {
//   let number = 0;
//   for(let i = 0; i < str.length; i++){
//     if ("aeiou".includes(str[i].toLowerCase())){
//       number ++;
//     }
//   }
//   return number;

// }

// getCount(word.toLowerCase)
// console.log(getCount(word));

// let number = 153;

// function narcissistic(value) {
//   const a = value.toString().split("");
//   let b = 0;
//   for(let i = 0; i < a.length; i++){
//     b += Number(a[i]) ** a.length;
//   }
//   return b == value;
// }

// console.log(narcissistic(number));


// function digitalRoot(n) {
//   let sum = 0;

//   do{
//     for(let i = 0; i < n.toString().length; i ++){      
//       sum += Number(n[i]);
//     }
//   }while(sum.toString().length > 1);

//   return sum;
// }

// let num = 156;
// console.log(digitalRoot(num));

// function digitalRoot(n){
//     while(n.toString().length > 1){
//         let sum = 0;
//         for(let i = 0; i < n.toString().length; i ++){
//             sum += Number(n.toString()[i]);
//         }
//         n = sum;
//     }
//     return n;
// }

// let num = 156;
// console.log(digitalRoot(num));


// function toCamelCase(str) {
//     let result = "";
//     let capitalization = false;
//     for (let i = 0; i < str.length; i++) {
//         if ("-_".includes(str[i])) {
//             capitalization = true;
//         } else {
//             if(capitalization){
//                 result += str[i].toUpperCase();
//                 capitalization = false;
//             } else{
//                 result += str[i];
//             }
//         }
//     }
//     return result;
// }

// let string = "hello-guys_how-are_you";
// console.log(toCamelCase(string));


// let firstNuber = Number(prompt("Birinchi sonni kiriting: "));
// let secondNuber = Number(prompt("Ikkinchi sonni kiriting: "));
// let signer = prompt("Amalni kiriting: ");

// function calculator(a, b, sign) {
//     switch (sign) {
//         case "+":
//             console.log(a + b);
//             break;
//         case "-":
//             console.log(a - b);
//             break;
//         case "*":
//             console.log(a * b);
//             break;
//         case "/":
//             console.log(a / b);
//             break;
//         default:
//             console.log("Bunday operator mavjud emas!");
//     }
// }
// calculator(firstNuber, secondNuber, signer);


// function validate(n) {
//     n = n.toString().split("")
//     let result = 0;

//     if (n.length % 2 == 0) {
//         for (let i = 0; i < n.length; i += 2) {
//             n[i] *= 2;
//         }
//     } else {
//         for (let i = 1; i < n.length; i += 2) {
//             n[i] *= 2;
//         }
//     }
//     // console.log(n);


//     for (let i = 0; i < n.length; i ++) {
//         if (n[i] > 9) {
//             n[i] -= 9;
//         }
//         result += Number(n[i]);
//     }
//     // console.log(result);


//     if (result % 10 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let id = 212;
// console.log(validate(id));
// ;


// function multiplicationTable(size) {
//     let result = [];
//     for (let a = 1; a <= size; a++) {
//         let raw = [];
//         for (let i = 1; i <= size; i++) {
//             raw.push(a * i);
//         }
//         result.push(raw);
//     }
//     return result;
// }
// let tableSize = 3;
// console.log(multiplicationTable(tableSize));


// function solve(arr){
//     let result = ""
//     for(let i = 0; i < arr.length; i++){
//         let a = arr[i] * -1;
//         for(let b = 0; b < arr.length; b++){
//             if(arr[b] == a){
//                 arr[b] = 0;
//             }
//         }
//     }
//     for(let c = 0; c < arr.length; c++){
//         if(arr[c] != 0){
//             result = arr[c];
//         }
//     }
//     return result
// };
// const array = [1, 5, 9, -1, 2, -2, 3, -3, -5]
// console.log(solve(array));

// function solve(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let opposite = arr.indexOf(-arr[i]);
//         if (opposite !== -1) {
//             // Set both to 0 (mark as matched)
//             arr[i] = 0;
//             arr[opposite] = 0;
//         }
//     }

//     // Now find the number that's not 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             return arr[i];
//         }
//     }

//     return null; // if all are matched
// }

// const array = [1, 5, 9, -1, 2, -2, 3, -3, -5];
// console.log(solve(array)); // Output: 9


// let str = "Botirov Abdulaziz";
// let natija = "";

// natija += str[0].toUpperCase() + ".";
// let a = ""
// for (let i = 0; i < str.length; i ++){
//     if(str[i] == " "){
//         a = str[i + 1];
//     }
// }
// console.log(natija + a);

// const numbers = [1, 2, 3, 4, 5, 6];
// const divisor = 2;

// function divisibleBy(numbers, divisor){
//     const result = [];

//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] % divisor == 0){
//             result.push(numbers[i]);
//         }
//     }
//     return result;
// };

// console.log(divisibleBy(numbers, divisor));

// let dna = "DTMTT"
// function DNAtoRNA(dna) {
//     // let result = ""
//     // for(let i = 0; i < dna.length; i++){
//     //     if(dna[i] == "T"){
//     //         result += "U";
//     //     }else{
//     //         result += dna[i];
//     //     }
//     // }
//     // return result;

//     let result = dna.replaceAll("T", "U")
//     return result;
// }
// console.log(DNAtoRNA(dna));



function findDifference(a, b){
    let aSum = 0;
    let bSum = 0;

    for(let i = 0; i < a.length; i++){
        aSum += a[i];
    }
    for(let n = 0; n < b.length; n++){
        bSum += b[n];
    }
    
    if(aSum - bSum > 0){
        return aSum - bSum;
    }else{
        return bSum - aSum;
    }
}

console.log(findDifference([10, 10 , 10], [10, 10, 11]));
