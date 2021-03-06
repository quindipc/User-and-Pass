const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


// Event Listeners
myForm. addEventListener('submit', onSubmit);



// Functions
function onSubmit(e) {
    e.preventDefault();


    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = "Please enter all fields";

       setTimeout(() => msg.remove(), 3000);
    } else {
       const li = document.createElement('li');
       li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

       userList.appendChild(li);

       //Clearing fields 
       nameInput.value = '';
       emailInput.value = '';
    }
}

// This only saves on the UI, this doesn't save to a database since there isn't a database yet. 