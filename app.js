// let inputs = document.querySelectorAll("input");

// inputs.forEach(input => {
// input.addEventListener("input", () => {
// if (input.value == "" || !input. checkValidity() ) {
// input.nextElementSibling.style.display = "block";
// } else {
//     input.nextElementSibling.style.display = "none";

// }

// });
// });

// function sub () {
//     let form = document.querySelector("form")
//     document.querySelector("form").addEventListener("submit", function(event){
//         event.preventDefault()
//       });
//    let obj = {
//     username:document.getElementById("username").value ,
//     userage:document.getElementById("age").value ,
//     userpassword:document.getElementById("password").value ,
//     userfin:document.getElementById("finkod").value ,
//     usermail:document.getElementById("email").value ,
//     userphonenum:document.getElementById("num").value ,
//    }
//   console.log(obj)  
// }
  







// let inputs = document.querySelectorAll("input");
// inputs.forEach(input => {
// input.addEventListener("input", () => {
// if (input.value == "" || !input. checkValidity()  ) {
    
// input.nextElementSibling.classList ="fa-solid fa-xmark" ;
// input.nextElementSibling.style.color="red"
// } else {
//     input.nextElementSibling.classList=    "fa-solid fa-check" ;
// input.nextElementSibling.style.color="blue"
// }

// });
// });
// let arr = [];
// function add() {
//     let a =0 ;
//     document.getElementById("successMessage").style.display = "none";
//     document.getElementById("unsuccess").style.display = "none";
//     let input = document.querySelectorAll("input"); 
// input.forEach(input => {

//     if ( !input.value=="" &&input. checkValidity() ) {
//       a+=1
//     } 

// });
//     if (a==3) {
//         document.getElementById("successMessage").style.display = "block";
    
        
//         let form = document. querySelector("form");
        
//         form.addEventListener("submit", (event)=>{
//         event. preventDefault();
        
//         let obj={
//         email: inputs[0].value,
//         userName: inputs[1].value,
//         userAge: inputs[2].value,
//         userId: arr.length + 1
//         }
//         arr.push(obj);
        
//         console.log(arr);
//         form.reset()
//         })
      
       
//     } else {
//         document.getElementById("unsuccess").style.display = "block";  
//     }

// }
let inputs = document.querySelectorAll("input");
inputs. forEach(element => {
element. addEventListener("input", (event)=>{
if (event.target.value == ""|| !event.target. checkValidity()) {
event.target.nextElementSibling.classList.add("bi-x");
event. target.nextElementSibling.classList.remove("bi-check");
event.target.nextElementSibling.style.color = "red";

} else {
event.target.nextElementSibling.classList.remove("bi-x");
event. target.nextElementSibling.classList.add("bi-check");
event.target.nextElementSibling.style.color = "green";
}
})
});
let arr = [];

let tbody = document.querySelector("tbody")
let form = document.querySelector("form")

form.addEventListener("submit",(ev)=>{
    ev.preventDefault();
    let obj = {

        userName: inputs[0].value,
        userAge: inputs[1].value,
        userId: arr.length + 1
        }
arr.push(obj);
tbody. innerHTML ="";

arr.forEach(element =>{

let tr = document.createElement("tr");
let td1 = document.createElement("td");
td1.innerText = element.userId;

let td2 = document.createElement("td");
td2.innerText = element.userName;
let td3 = document.createElement("td");
td3.innerText = element.userAge;

let td4 = document.createElement("td");

let button = document.createElement("button");
button.innerText= "sil";
button.classList.add("delete")
td4.append(button);
tr.append(td1,td2,td3,td4);
tbody. append(tr)
});
console.log(arr);
})
