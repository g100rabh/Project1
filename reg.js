// const x = document.getElementById("reg");
//         x.addEventListener("submit",(event)=>{
//             event.preventDefault();
//             const Name = document.getElementById("name").value;
//             const Email = document.getElementById("email").value;
//             const Phone = document.getElementById("phone").value;
//             const Date = document.getElementById("date").value;
//             const Time = document.getElementById("time").value;
    
            
//             console.log("Name: ",Name);
//             console.log("Email: ",Email)
//             console.log("Phone No.: ",Phone)
//             console.log("Date:",Date, "Time:", Time)
//             x.reset();
//         });
//----------Window object-----------------------------
const ul = document.querySelector(".items");

ul.firstElementChild.textContent = 'HELLO';

//-----------Event----------------------------
const y = document.getElementById("reg");
y.addEventListener('submit',(event)=>{
    event.preventDefault();
    document.querySelector("#formSec").style.background = '#ccc';
});
const z = document.getElementById("reg");
z.addEventListener('mouseover',(event)=>{
    event.preventDefault();
    document.querySelector("#formSec").style.background = '#cbb';
});
const a = document.getElementById("reg");
a.addEventListener('mouseout',(event)=>{
    event.preventDefault();
    document.querySelector("#formSec").style.background = '#acb';
});

const x = document.getElementById("reg");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const errorMessage = document.querySelector("#msg");
const date = document.querySelector("#date");
const time = document.querySelector("time");
const form = document.querySelector('#reg');
const userList = document.querySelector('#user');
form.addEventListener("submit", onSubmit);

function onSubmit(event){
    event.preventDefault();
    if(nameInput.value === '' || emailInput.value === '' || phoneInput.values === '' || date.value === ''){
        errorMessage.classList.add('error');
        errorMessage.innerHTML = "*Please enter all fields";
        errorMessage.style.color = 'blue';

        setTimeout(() =>{ 
            errorMessage.remove() 
        }, 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value} : ${phoneInput.value}`));

        userList.appendChild(li);
        
        localStorage.setItem('userName', nameInput.value);

        // Reset the form fields after successful submission
        
        nameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
    }
    x.reset();
}
