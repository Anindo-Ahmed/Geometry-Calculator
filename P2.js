//  Find the friend of smallest name.

const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallest(names){
    let small = names[0].length;
    for(let name of names){
        if(name.length < small)
        small = name.length;
    }
    return small;
}
console.log(smallest(names))


// Your task is to calculate the total budget required to buy electronics:
function calculateElectronicsBudget(noOfLaptop, noOfTablet, noOfMobile){
    const perLaptop = 35000;
    const perTablet = 15000;
    const perMobile = 20000;

    const laptopCost = noOfLaptop * perLaptop;
    const tabletCost = noOfTablet * perTablet;
    const mobileCost = noOfMobile * perMobile;
    
    total = laptopCost + tabletCost +mobileCost;
    return total;
}

console.log(calculateElectronicsBudget(1, 1, 2));


// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones){
    let sum = 0;
    let avg = 0;
    for (let phone of phones){
        sum = sum + phone.price;
        avg = sum / phones.length;
        // console.log(avg);
    }
    return avg;
}
console.log(findAveragePhonePrice(phones));

// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalSalary (employee){
    let totalCost = 0;
    for(let i of employee){
        const employeeSalary = (i.increment * i.experience) + i.starting;
        totalCost = totalCost + employeeSalary;
    }
    return totalCost;
}

console.log("Total Salary in a month:", totalSalary(employees));



// Problem-3:
function deleteInvalids(arr){
    if(Array.isArray(arr) !== true){
        return 'Invalid array! Please insert valid array.';
    }
    else{
        let newArray = [];
        for(let i of arr){
            if(typeof i === 'number'){
                newArray.push(i);
                // console.log(newArray);
            }
        }
        return newArray.filter(item => !isNaN(item));;
    }
}
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}))
