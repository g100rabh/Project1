const x = document.getElementById("reg");
        x.addEventListener("submit",(event)=>{
            event.preventDefault();
            const Name = document.getElementById("name").value;
            const Email = document.getElementById("email").value;
            const Phone = document.getElementById("phone").value;
            const Date = document.getElementById("date").value;
            const Time = document.getElementById("time").value;
            
            console.log("Name: ",Name);
            console.log("Email: ",Email)
            console.log("Phone No.: ",Phone)
            console.log("Date:",Date, "Time:", Time)
            x.reset();
        });
        // function simple(event) {
        //     event.preventDefault();
        // }
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



