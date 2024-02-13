const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// console.log(colors.reverse());

/* 
let revColors = [];
for(let i of colors){
    revColors.unshift(i);  
};
console.log(revColors);
*/

/* 
let revColors = [];
for(let i = 0; i < colors.length; i++){
    const color = colors[i]
    revColors.unshift(color);
};
console.log(revColors);
*/

let revColors= [];
for(let i = colors.length-1; i >= 0; i--){
    const color = colors[i];
    revColors.push(color)
};
console.log(revColors);

const numbers = [12, 98, 5, 41, 23, 78, 46];

for(let num of numbers){
    if(num % 2 === 0){
        console.log(num);
    }
}

let name = ['Tom', 'Tim', 'Tin', 'Tik'];
// console.log(name.join(''));

// let result = '';
// for(let i=0; i < name.length; i++){
//     console.log(i)
//     result = result.concat(name[i]);
//     console.log(result);  
// }


const statement = 'I am a hard working person';
// const rev = statement.split(' ').reverse().join(' ');
// console.log(rev);

let rev2= " ";
for(let i = statement.length-1; i >= 0; i--){
    const words = statement[i];
    rev2 += statement[i];
};
console.log(rev2);

function getMenu() {
    console.log("Burger, Pizza, Pasta");
}
getMenu();
