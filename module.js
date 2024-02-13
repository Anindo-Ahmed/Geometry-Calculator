// Find the cheapest phone price from a object array.

const phones = [
    {model: "samsung", price: 32000, color: "Black", camera: "12MP"},
    {model: "iphone", price: 120000, color: "Black", camera: "12MP"},
    {model: "oppo", price: 20000, color: "white", camera: "16MP"},
    {model: "pixel", price: 45000, color: "Black", camera: "12MP"}
]
function getCheapPrice(phones){
    let min = phones[0];
    for(let phone of phones){
        if(phone.price < min.price){
            min = phone;   
        }
    }
    return min;
}
console.log(getCheapPrice(phones))

// Calculate total cost of the products form an object array.

function getTotalCost (phones){
    let sum = 0;
    for(let phone of phones){
        sum = sum + phone.price;
    }
    return sum;
}
console.log(getTotalCost(phones));


// Calculate the discount pirce. for first 100 person ticket price is 100 tk, next 101-200 person 90 tk, and above 200 person 70 tk.

function getDiscount(quantity){
    const first100Person = 100;
    const second101To200 = 90;
    const above200 = 70;

    if(quantity <= 100){
        total = quantity * 100;
        return total;
    } else if(quantity <= 200){
        total = quantity * 90;
        return total;
    }else{
        total = quantity * 70;
        return total;
    }

}
console.log(getDiscount(201));

// for layered discount calculate the discount price.
function getDiscount(quantity){
    const first100Person = 100;
    const second101To200 = 90;
    const above200 = 70;

    if(quantity <= 100){
        let total = quantity * first100Person;
        return total;
    } else if(quantity <= 200){
        let first100PersonCost = 100 * first100Person;
        let second101To200Cost = (quantity -100) * second101To200;
        total = first100PersonCost + second101To200Cost;
        return total;
    }else{
        let first100PersonCost = first100Person * 100;
        let second101To200Cost = second101To200 * 100;
        let above200Cost = (quantity-200) * 70;
        total = first100PersonCost + second101To200Cost  + above200Cost;
        return total;
    }
}
console.log(getDiscount(250));


// another example of layered discount.
function picnicCost(person){
    const first100Person = 5000;
    const second101To200 = 4000;
    const above200 = 3000;

    if(person <= 100){
        const total = person * first100Person;
        return total;
    }
    else if(person <= 200){
        const first100PersonCost = 100 * first100Person;
        const remianingCost = (person - 100) * second101To200;
        total = first100PersonCost + remianingCost;
        return total;
    }
    else{
        const first100PersonCost = 100 * first100Person;
        const second101To200Cost = 100 * second101To200;
        const remianingCost = (person - 200) * above200;
        total = first100PersonCost + second101To200Cost + remianingCost;
        return total;
    }
}
console.log(picnicCost(102));

//  Calculator making

function add(a, b){
     let sum = a + b;
    return sum;
}

function substract(a, b){
    let subs = a - b;
    return subs;
}

function multiply(a, b){
    let multi = a * b;
    return multi;
}

function divide(a, b){
    let div = a / b;
    return div;
}

function calculator(num1, num2, operation){
    if (operation === 'add'){
        const result = add(num1, num2);
        return result;
    }
    else if(operation === 'substract'){
        const result = substract(num1, num2);
        return result;
    }
    else if(operation === 'multiply'){
        const result = multiply(num1, num2);
        return result;
    }
    else(operation === 'divide'){
        const result = divide(num1, num2);
        return result;
    }
}
console.log(calculator(16, 4, 'divide'));


