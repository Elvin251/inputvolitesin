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
  







let inputs = document.querySelectorAll("input");
inputs.forEach(input => {
input.addEventListener("input", () => {
if (input.value == "" || !input. checkValidity()  ) {
    
input.nextElementSibling.classList ="fa-solid fa-xmark" ;
input.nextElementSibling.style.color="red"
} else {
    input.nextElementSibling.classList=    "fa-solid fa-check" ;
input.nextElementSibling.style.color="blue"
}

});
});
let arr = [];
function add() {
    let a =0 ;
    document.getElementById("successMessage").style.display = "none";
    document.getElementById("unsuccess").style.display = "none";
    let input = document.querySelectorAll("input"); 
input.forEach(input => {

    if ( !input.value=="" &&input. checkValidity() ) {
      a+=1
    } 

});
    if (a==3) {
        document.getElementById("successMessage").style.display = "block";
    
        
        let form = document. querySelector("form");
        
        form.addEventListener("submit", (event)=>{
        event. preventDefault();
        
        let obj={
        email: inputs[0].value,
        userName: inputs[1].value,
        userAge: inputs[2].value,
        userId: arr.length + 1
        }
        arr.push(obj);
        
        console.log(arr);
        form.reset()
        })
      
       
    } else {
        document.getElementById("unsuccess").style.display = "block";  
    }

}
