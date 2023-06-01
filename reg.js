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
// const ul = document.querySelector(".items");

// ul.firstElementChild.textContent = 'HELLO';

//-----------Event----------------------------
const y = document.getElementById("reg");
y.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#formSec").style.background = "#ccc";
});
const z = document.getElementById("reg");
z.addEventListener("mouseover", (event) => {
  event.preventDefault();
  document.querySelector("#formSec").style.background = "#cbb";
});
const a = document.getElementById("reg");
a.addEventListener("mouseout", (event) => {
  event.preventDefault();
  document.querySelector("#formSec").style.background = "#acb";
});

const x = document.getElementById("reg");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const errorMessage = document.querySelector("#msg");
const date = document.querySelector("#date");
const time = document.querySelector("time");
const form = document.querySelector("#reg");
const userList = document.querySelector("#user");


window.addEventListener("load", onReload);
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    phoneInput.values === "" ||
    date.value === ""
  ) {
    errorMessage.classList.add("error");
    errorMessage.innerHTML = "*Please enter all fields";
    errorMessage.style.color = "blue";

    setTimeout(() => {
      errorMessage.remove();
    }, 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(
        `${nameInput.value} : ${emailInput.value} : ${phoneInput.value}`
      )
    );

    userList.appendChild(li);

    // localStorage.setItem(phoneInput.value, nameInput.value);

    let store = {
      phone: phoneInput.value,
      name: nameInput.value,
      email: emailInput.value,
    };
    li.id = store.phone;

    axios.post("https://crudcrud.com/api/1949d9a8e0f44104819f84da3b5530f5/bookAcallData", store)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
      })

    // localStorage.setItem(store.phone, JSON.stringify(store));
    // console.log(localStorage.getItem(phoneInput.value))
    console.log(store);
    // add Edit button
    let editBtn = document.createElement("button");
    editBtn.className = "edit btn-light btn-sm float-right edit";
    editBtn.appendChild(document.createTextNode("Edit"));
    li.appendChild(editBtn);
    let space = document.createTextNode(" ");
    // append the space before the edit button
    li.appendChild(space);
    ///add Edit button
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    // Append text node
    deleteBtn.appendChild(document.createTextNode("Delete"));
    //append button to li
    li.appendChild(deleteBtn);
    //-----------------
    // removeItem(event, li, key)

    // Reset the form fields after successful submission
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
  }
  x.reset();
}

// ************delete button functionality************
// userList.addEventListener('click', removeItem);
userList.addEventListener("click", function (event) {
  removeItem(event, phoneInput.value);
});
function removeItem(event, phoneInput) {
  event.preventDefault();
  if (event.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      let phone = event.target.parentElement.id;
      let li2 = event.target.parentElement;

      localStorage.removeItem(phone);
      userList.removeChild(li2);
    }
  }
}


// *********Edit button functionality************
userList.addEventListener("click", function (event) {
  editItem(event, phoneInput.value);
});
function editItem(event) {
    
    event.preventDefault();
    if (event.target.classList.contains("edit")) {
        if (confirm("Are you sure?")) {
            let phone = event.target.parentElement.id;
            let li2 = event.target.parentElement;

            let storeData = JSON.parse(localStorage.getItem(phone));
            console.log(storeData);
            nameInput.value = storeData.name;
            emailInput.value = storeData.email;
            phoneInput.value = storeData.phone;

            localStorage.removeItem(phone);
            userList.removeChild(li2);
            }
        }
}

function onReload() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let storeData = JSON.parse(localStorage.getItem(key));

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${storeData.name} : ${storeData.phone} : ${storeData.email}`));
    userList.appendChild(li);

    li.id = storeData.description;

    // Add edit and delete buttons
    let space = document.createTextNode(" ");
    li.appendChild(space);

    let editBtn = document.createElement("button");
    editBtn.className = "edit btn-light btn-sm float-right edit";
    editBtn.appendChild(document.createTextNode("Edit"));
    li.appendChild(editBtn);

    li.appendChild(space);

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode("Delete"));
    li.appendChild(deleteBtn);
  }
}
  
