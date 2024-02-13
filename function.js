// Take four parameters. Multiply the four numbers and then return the result.

function gun (num1, num2, num3, num4){
    const result = (num1 * num2 * num3 * num4);
    return result;
}
let output = gun(2, 3, 4, 5);
console.log(output);



// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function oddOrEven (number){
    let result = '';
    if(number % 2 ===1){
        result = number*2;
        // console.log(result);
    }
    else{
        result = number/2;
        // console.log(result);
    }
return result;
}
let outCome = oddOrEven(5);
console.log(outCome);

// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function makeAvg(num) {
    let sum = 0;
    let avg = '';
    for(let numbers of num){
        sum = sum + numbers;
        avg = sum / num.length;
    }
    return Math.round(avg);
};
let numbs = [1, 4, 8 ];
const avg = makeAvg(numbs);
console.log(avg);

// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(str){
    let count = [];
    for(let i of str){
        if(i === '0'){
            count.push(i);
        } 
    } 
    return count.length;
}

let binary = '100101';
let count = count_zero(binary);
console.log(count);

// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd.

function odd_even(num){
    if(num % 2 === 0){
        return 'Even';
    }
    else{
        return 'odd';
    }
}
let result = odd_even(22)
console.log(result);

//  Find a max number from a given array.

const numbers = [23, 34, 12, 56]

let max = numbers.sort();
console.log(max);
console.log(max.slice(-1));


// Write a  function which will receive a number parameter and return the cube of the number. also if the input is not number then return a valid error message.

function cubeNumber(number){
    if(typeof number !== 'number'){
        return "Please input a number!"
    }
    else{
        const cube = Math.pow(number, 3);
        return cube;
    } 
}

let result1 = cubeNumber(2)
console.log(result1);


// Write a function matchFinder() with two string parameter and will return the result in true or false boolean data types. If second string matches completely with first one then returns true or else return false. also if the input is not string then return a valid error message.

function matchFinder(str1, str2){
    if(typeof str1 !== 'string' || typeof str2 !== 'string'){
        return 'Please insert a string';
    }
    else if(str1.includes(str2)){
        return 'true';
    }
    else{
        return 'false';
    }
}

let strings = matchFinder('Peter parker', 'pet');
let strings1 = matchFinder('JavaScript', 5);
console.log(strings);
console.log(strings1);

//  Write a function sortMaker() wich will receive an array as input. each array will contain 2 elements. Now return the result as a recending order and if the both element is same return "equal" and if negative returns " Please give valid input".

function sortMaker(array){
    const [a, b]= array;
    if(a < 0 || b < 0){
        return "Invalid input";
    }
    else if(a === b){
        return 'equal';
    } else if(a > b){
        return [a, b];
    } else{
        return [b, a];
    }
}

const array = sortMaker([2, -4]);
console.log(array);


function findAddress(obj){
    let street = obj.street || "__";
    let house = obj.house || "__";
    let society = obj.society || "__";
    let str = street + ',' + house + ',' + society;
    return str;
}

let address = {
    street: '10/A',
    house: 15,
    society: "Earth perfect"
}
console.log(findAddress(address));

// write a function canPay() which will take two parameter. one is array and another is number.

function canPay(arr, price){
    if(arr.length === 0){
        return "Please provide a positive intrgar number";
    }else{
        let sum = 0;
    for(let i of arr){
        sum = sum + i;
    }
    if(sum >= price){
        return 'true';
    }else{
        return 'false';
    } 
    } 
}
console.log(canPay([1, 5, 5 ], 10));



//  Find the max number form an array.

function getMax(heights){
    let max = heights[0];
    for(let i of heights){
        if(i > max){
            max = i;
        }
    }
    return max;
}

let input = [23, 45, 76, 13];
console.log('The maximum height is:', getMax(input));

// Find the min number of an array.
function getMin(heights){
    let min = heights[0];
    for(let i of heights){
        if(i < min){
            min = i;
        }
    }
    return min;
}
console.log('The minimum height is:', getMin(input))

