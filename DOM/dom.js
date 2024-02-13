
// const green = document.getElementById('make-green')
// function makeGreen() {
//     document.getElementById('make-green').style.backgroundColor = 'green';
// }
function makeGreen() {
    const green = document.getElementById('make-green')
    green.style.backgroundColor = 'green';
}

const pink = document.getElementById('make-pink');
pink.addEventListener('click', function(){
    document.body.style.backgroundColor = 'pink';
    document.body.style.color = 'white';
})

const updateBtn = document.getElementById('update');
updateBtn.addEventListener('click', function (){
    const inputField = document.getElementById('input-field');
    let input = inputField.value;
    const h1 = document.getElementById('welcome');
    h1.innerText = input;

})

const postText = document.getElementById('post');
postText.addEventListener('click', function(){
    const textInput = document.getElementById('text');
    const textBox = textInput.value;
    const about = document.getElementById('about');
    const p =document.createElement('p');
    p.innerText = textBox;
    about.appendChild(p);
    textInput.value = ' ';    
})

const deleteBtn = document.getElementById('deleteBtn');
deleteBtn.addEventListener('click', function (){
    if(deletedText.value === 'delete'){
        const deleteText = docuemnt.getElementById('delete');
        const deleted  = deleteText.value;
    }
})


const inputText = document.getElementById('delete').addEventListener('keyup', function(event){
    const text = event.target.value;
    if( text === 'delete'){
        document.getElementById('deleteBtn').removeAttribute('disabled');
    }
    else{
        document.getElementById('deleteBtn').setAttribute('disabled', true);
    }
    document.getElementById('deleteBtn').addEventListener('click', function(){
       const p = document.getElementById('hide -text');
       p.style.display = 'none';
    })
})

   