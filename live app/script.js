// function getCalulatedResult (){

// }

// const clickButton = document.getElementById('button').addEventListener('click', function(){
//     const triangleBase = document.getElementById('triangle-base');
//         const base = parseFloat(triangleBase.value);
//     const triangleHeight = document.getElementById('triangle-height');
//         const height = parseFloat(triangleHeight.value);

//         const area = 0.5 * base * height;
        
//         const displayArea = document.getElementById('display-area');
//         displayArea.innerText = area;
// })
const clickButton = document.getElementById('button').addEventListener('click', function(){
    const triangleBase = document.getElementById('triangle-base').addEventListener('keyup', function(event){
        console.log(event.target.value)
    });
        const base = parseFloat(triangleBase.value);
    const triangleHeight = document.getElementById('triangle-height');
        const height = parseFloat(triangleHeight.value);

        const area = 0.5 * base * height;
        
        const displayArea = document.getElementById('display-area');
        displayArea.innerText = area;
})
