// Uppgift 4
document.addEventListener('DOMContentLoaded', function(){
const checkbox = document.getElementById('divStyle');
const textFields = document.querySelectorAll('.textfield');
const button = document.getElementById('button');
const mainDiv = document.getElementById('mainDiv');

// uppgift 5
function handleInputEvent(e) {
    console.log('Event från: ${e.target.name || e.target.id}'); 
    if (e.target.id === 'content') {
      mainDiv.innerHTML = e.target.value; 
    }
  }

//uppgift 6
checkbox.addEventListener('change', ()=> {
const color = document.getElementById('color').value;
mainDiv.style.backgroundColor = color;

});

textFields.forEach(field =>{
field.addEventListener('input', handleInputEvent);

});

button.addEventListener('click', () =>{
    mainDiv.remove();
});
});