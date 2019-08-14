

console.log('Client side javascript file is loaded!')




const weatherForm = document.querySelector('form')
const searched = document.querySelector('input')
const messageOne = document.querySelector('#one')
const messageTwo = document.querySelector('#two')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = searched.value;
    messageOne.textContent = 'Loading.. ';
    messageTwo.textContent = ' ';

    fetch('/weather?address='+location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error;
        } else {
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
        }
    })
})
    
    
})