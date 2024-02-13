function calculateMoney(ticketSale){
    if(ticketSale < 0){
        return "Invalid Number! Please insert positive number!"
    }
    const perTicket = 120;
    const cost = 500 + (50 * 8);
    const fromTicketIncome = ticketSale * perTicket;
    const profitOrLoss = fromTicketIncome - cost;
    return profitOrLoss;
}


function checkName(name){
    if(typeof name !== 'string'){
        return 'invalid';
    }
    let array = ['a', 'e', 'i', 'o', 'u', 'y', 'w'];
    let letter = name.toLowerCase().charAt(name.length -1);
    if(array.includes(letter)){
        return "Good Name";
    }
    else{
        return "Bad Name";
    }
}


function deleteInvalids(arr){
    if(Array.isArray(arr) !== true){
        return 'Invalid array! Please insert valid array.';
    }else{
        let newArray = [];
        for(let i of arr){
            if(typeof i === 'number'){
                newArray.push(i);
            }
        }
        return newArray.filter(item => !isNaN(item));
    }
}


function password(obj){
    let objValueArray =[];
    for(let prop in obj){
        objValueArray.push(obj[prop]);
    }
    if(objValueArray.length < 3 || objValueArray[1].toString().length !== 4){
        return 'invalid';
    }
    let name = obj.name;
    let birthYear = obj.birthYear;
    let siteName = obj.siteName;
    let str = siteName + '#' +  name + '@' + birthYear;
    return str.charAt(0).toUpperCase()+str.slice(1);  
}


function monthlySavings(incomeArray , livingCost){
    if(Array.isArray(incomeArray) !== true || typeof livingCost !== 'number'){
        return 'invalid input';
    }
    let income = 0;
    for(let salary of incomeArray){
        let taxPaid = 0;
        if(salary >= 3000){
            taxPaid = (salary * 0.2); 
        };
       income = income + salary - taxPaid;
    }
    let savings = income - livingCost;
    if(savings < 0){
        return 'earn more';
    } else{
        return savings;
    }
}
