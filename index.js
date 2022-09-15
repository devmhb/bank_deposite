const loginContainer = document.querySelector(".login_container");
const loginBtn = document.querySelector(".login_btn");
const mainPage = document.querySelector(".main_page");

loginBtn.addEventListener("click", () => {
  let userName = document.querySelector(".username").value;
  let passWord = document.querySelector(".password").value;
  if (userName === "") {
    alert("Please Enter Username");
  } else if (passWord === "") {
    alert("Please Enter your password");
  } else {
    loginContainer.style.display = "none";
    mainPage.style.display = "block";
  }
});

// Total_Amount
let total_amount = document.getElementById("total_amount").innerHTML;
let total_newAmount = parseFloat(total_amount);

// Deposite
const depositBtn = document.querySelector(".deposit_btn");

depositBtn.addEventListener("click", () => {
  let depositValue = document.querySelector(".deposite_value").value;
  let depositeAmount = document.getElementById("deposite_amount").innerHTML;

  let depositNewValue = parseFloat(depositValue);
  let depositeNewAmount = parseFloat(depositeAmount);

  let total_deposite = depositNewValue + depositeNewAmount;
  console.log(total_deposite);
  document.getElementById("deposite_amount").innerHTML = total_deposite;
  total_newAmount = total_newAmount + depositNewValue;
  document.getElementById("total_amount").innerHTML = total_newAmount;

  document.querySelector(".deposite_value").value = "";
});

// Withdraw
const withdrawBtn = document.querySelector(".withdraw_btn");

withdrawBtn.addEventListener("click", () => {
  let withdraw_amount = document.getElementById("withdraw_amount").innerHTML;
  let withdraw_value = document.querySelector(".withdraw_value").value;

  let withdraw_newAmount = parseFloat(withdraw_amount);
  let withdraw_newValue = parseFloat(withdraw_value);

  let total_withdraw = withdraw_newAmount + withdraw_newValue;
  document.getElementById("withdraw_amount").innerHTML = total_withdraw;
  total_newAmount = total_newAmount - withdraw_newValue;
  document.getElementById("total_amount").innerHTML = total_newAmount;

  document.querySelector(".withdraw_value").value = "";
});


