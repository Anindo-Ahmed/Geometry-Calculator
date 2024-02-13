let burger = 550;

// if(burger > 500){
//     console.log("free coke")
// }
// else{
//     console.log("coke: 30")
// }
// Ternary Operator
// let price = (burger > 500) ? "free coke" : "coke 30 tk";
// console.log(price);

// let score = 80;

// if(score >= 90 && score <= 100){
//     console.log("Garde: A");
// }   
// else if(score >= 80 && score <= 89){
//     console.log("Garde: b");
// }
// else{
//     console.log(Fail)
// }

// const myObject = {
//     a: 1,
//     b: 2,
//     c: 3
//   };
  
//   for (let prop in myObject) {
//     console.log(myObject[prop]);
//   }

//   const x = ""
// if(!x.length){
// console.log("Hey")
// }else{
// console.log("Hi")
// }

let sentence = 'the lazy brown fox jump Over a dog';
let count = 0;

for(let i = 0; i < sentence.length; i++){
    if(sentence[i] == 'o'){
        count++
    }
}
console.log(count);

let word = 'boX'
console.log(word.replace('X', 'Y'));

// const mySentence = "freeCodeCamp is an awesome resource";

// const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
// console.log(finalSentence);

let nums = [12, 13, 24, 34, 43];
// let sum = 0;

// for(let item of nums){
//     sum = sum + item;
//     console.log(sum);
// }

for(let item of nums){
    if(item == 34){
        break;
    } 
    console.log(item); 
}