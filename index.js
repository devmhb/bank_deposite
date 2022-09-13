const loginContainer  = document.querySelector(".login_container");
const loginBtn = document.querySelector('.login_btn');
const mainPage = document.querySelector(".main_page")

// loginBtn.addEventListener("click", () => {
//         let userName = document.querySelector(".username").value;
//         let passWord = document.querySelector(".password").value;
//     if(userName === "") {
//         alert("Please Enter Username")
//     }   

//     else if (passWord === "") {
//         alert("Please Enter your password")
//     }

//     else{
//         loginContainer.style.display = "none"
//         mainPage.style.display = "block"
//     }
// })


const depositBtn = document.querySelector(".deposit_btn");
const withdrawValue = document.querySelector(".withdraw_value");

depositBtn.addEventListener("click", () => {
    let dipositValue = document.querySelector(".deposite_value").value;
    console.log(dipositValue);

})