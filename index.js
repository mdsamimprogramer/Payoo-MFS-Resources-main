let button = document.getElementById("login");

button.addEventListener("click", function login(e) {
  e.preventDefault();
  let number = parseInt(document.getElementById("MobileNumber").value);
  let pin = parseInt(document.getElementById("4digitpin").value);
  let mainNumber = 123456789;
  let mainPin = 1234;

  if (number === mainNumber && pin === mainPin) {
    window.location.href = "home.html";
  } else {
    alert("Invalid number or pin");
  }
});