var root = document.getElementById('root');
var input = document.getElementById('input');
input.addEventListener('input',()=>{
    root.style.backgroundColor = input.value
    root.style.borderRadius = input.value
    console.log(input.value.length)
    if(input.value.length > 5 || input.value === 'none'){
         root.style.border = input.value
    }
   
})