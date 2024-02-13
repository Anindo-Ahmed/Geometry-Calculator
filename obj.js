const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    goldenRod: '#daa520'
};
console.log(colors['goldenRod']);

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car['passenger capacity'] = 5;
console.log(Object.values(car));

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
// console.log(student['physics']);
// console.log(student.physics);

for(let key in student){
    console.log(student[key]);
}

let student1 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let count = 0;
for (let i in student1){
    count++
};
console.log(count);

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};
for(let prop in myObject){
    console.log('key :', prop, '|', 'type :',typeof(myObject[prop]));
}

// PRBLEM-4:
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

console.log(password({ name: 'toky' , birthYear: 2002, siteName: 'Facebook'}));
