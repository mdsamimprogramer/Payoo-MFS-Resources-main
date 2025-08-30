// slide show and color set
function accessSlide(id) {
  let slide = document.getElementById(id);
  return slide;
}
function accessbuttons(buttonName) {
  let button = document.getElementById(buttonName);
  return button;
}
function hideSlide(slide) {
  slide.style.display = "none";
}
function showSlide(slide) {
  slide.style.display = "block";
}

function slideMainwork() {
  accessbuttons("addmoney").addEventListener("click", function () {
    showSlide(accessSlide("addmoneyslide"));
    hideSlide(accessSlide("cashoutslide"));
    hideSlide(accessSlide("transferslide"));
    hideSlide(accessSlide("transactionslide"));
  });
  accessbuttons("cashout").addEventListener("click", function () {
    showSlide(accessSlide("cashoutslide"));
    hideSlide(accessSlide("addmoneyslide"));
    hideSlide(accessSlide("transferslide"));
    hideSlide(accessSlide("transactionslide"));
  });
  accessbuttons("transfer").addEventListener("click", function () {
    showSlide(accessSlide("transferslide"));
    hideSlide(accessSlide("addmoneyslide"));
    hideSlide(accessSlide("cashoutslide"));
    hideSlide(accessSlide("transactionslide"));
  });

  accessbuttons("transaction").addEventListener("click", function () {
    showSlide(accessSlide("transactionslide"));
    hideSlide(accessSlide("addmoneyslide"));
    hideSlide(accessSlide("cashoutslide"));
    hideSlide(accessSlide("transferslide"));
  });
}

slideMainwork();

function colorSet(select) {
  select.classList.add("bg-blue-300");
  select.classList.add("border-blue-600");
}
function colorRemove(select) {
  select.classList.remove("bg-blue-300");
  select.classList.remove("border-blue-600");
}

function slideColor() {
  accessbuttons("addmoney").addEventListener("click", function () {
    colorSet(accessbuttons("addmoney"));
    colorRemove(accessbuttons("cashout"));
    colorRemove(accessbuttons("transfer"));
    colorRemove(accessbuttons("transaction"));
  });
  accessbuttons("cashout").addEventListener("click", function () {
    colorSet(accessbuttons("cashout"));
    colorRemove(accessbuttons("addmoney"));
    colorRemove(accessbuttons("transfer"));
    colorRemove(accessbuttons("transaction"));
  });
  accessbuttons("transfer").addEventListener("click", function () {
    colorSet(accessbuttons("transfer"));
    colorRemove(accessbuttons("addmoney"));
    colorRemove(accessbuttons("cashout"));
    colorRemove(accessbuttons("transaction"));
  });
  accessbuttons("transaction").addEventListener("click", function () {
    colorSet(accessbuttons("transaction"));
    colorRemove(accessbuttons("addmoney"));
    colorRemove(accessbuttons("cashout"));
    colorRemove(accessbuttons("transfer"));
  });
}
slideColor();

// addMoney

let button = document.getElementById("baton");

function BankAccountNumber(id) {
  let BankAccount = parseInt(document.getElementById(id).value);
  return BankAccount;
}
function Add(id) {
  let AccountToAdd = parseInt(document.getElementById(id).value);
  if(AccountToAdd <=0){
    alert("Please enter a valid amount to add.");}
  return AccountToAdd;
}
function Pin(id) {
  let PinNumber = parseInt(document.getElementById(id).value);
  return PinNumber;
}

button.addEventListener("click", function addMoney(e) {
  e.preventDefault();
  let availableBalance = parseInt(
    document.getElementById("availableBalance").innerText
  );
  let AccountNumber = BankAccountNumber("BankAccountNumber");
  let AddMoney = Add("AccountToAdd");
  let PinNumber = Pin("PinNumber");

  let realBankAccountNumber = 123456789;
  let realPinNumber = 1234;

  if (AccountNumber === realBankAccountNumber && PinNumber === realPinNumber) {
    let presentBalance = availableBalance + AddMoney;
    document.getElementById("availableBalance").innerText = presentBalance;
  } else {
    alert("Invalid Account Number or Pin Number");
  }

  let historyAddMoney = {
    Name: "Add Money",
    Time: new Date().toLocaleTimeString(),
  };
  history.push(historyAddMoney);
});

// cashout
let button2 = document.getElementById("baton2");
function AgentNumber(id) {
  let AgentNumber = parseInt(document.getElementById(id).value);
  return AgentNumber;
}
function AmountToWithdraw(id) {
  let amount = parseInt(document.getElementById(id).value);
  let available = parseInt(document.getElementById("availableBalance").innerText);
  if (amount > available) {
    alert("Please enter an amount less than or equal to your available balance.");
    return 0;
  }
  return amount;
}

function PinNumberWithdraw(id) {
  let PinNumberWithdraw = parseInt(document.getElementById(id).value);
  return PinNumberWithdraw;
}
button2.addEventListener("click", function cashout(e) {
  e.preventDefault();
  let availableBalance = parseInt(
    document.getElementById("availableBalance").innerText
  );
  let Number = AgentNumber("AgentNumber");
  let AmountToWithdrawNow = AmountToWithdraw("AmountToWithdraw");
  let PinNumberWithdrawNow = PinNumberWithdraw("PinNumberWithdraw");
  let realNumberNow = 123456789;
  let realPinNumberWithdrawNow = 1234;
  if (
    Number === realNumberNow &&
    PinNumberWithdrawNow === realPinNumberWithdrawNow
  ) {
    let presentBalance = availableBalance - AmountToWithdrawNow;
    document.getElementById("availableBalance").innerText = presentBalance;
  } else {
    alert("Invalid Agent Number or Pin Number");
  }

  let historyCashout = {
    Name: "Cashout",
    Time: new Date().toLocaleTimeString(),
  };
  history.push(historyCashout);
});

// transfer money

let button3 = document.getElementById("baton3");
function UseAccountNumber(id) {
  let UseAccountNumber = parseInt(document.getElementById(id).value);
  return UseAccountNumber;
}
function TransiferAmmount(id) {
  let TransiferAmmount = parseInt(document.getElementById(id).value);
  let available = parseInt(document.getElementById("availableBalance").innerText);
  if (TransiferAmmount > available) {
    alert("Please enter an amount less than or equal to your available balance.");
  }
  return TransiferAmmount;
}
function PinNumberWithdraw(id) {
  let PinNumberWithdraw = parseInt(document.getElementById(id).value);
  return PinNumberWithdraw;
}
button3.addEventListener("click", function transfer(e) {
  e.preventDefault();
  let availableBalance = parseInt(
    document.getElementById("availableBalance").innerText
  );
  let Number = UseAccountNumber("UseAccountNumber");
  let AmountToWithdrawNow = TransiferAmmount("transifer money");
  let PinNumberWithdrawNow = PinNumberWithdraw("PinNumbertransfer");
  let realNumberNow = 123456789;
  let realPinNumbertransfer = 1234;
  if (
    Number === realNumberNow &&
    PinNumberWithdrawNow === realPinNumbertransfer
  ) {
    let presentBalance = availableBalance - AmountToWithdrawNow;
    document.getElementById("availableBalance").innerText = presentBalance;
  } else {
    alert("Invalid Agent Number or Pin Number");
  }

  let historyTransfer = {
    Name: "Transfer Money",
    Time: new Date().toLocaleTimeString(),
  };
  history.push(historyTransfer);
});

// transaction
let history = [];
function transaction() {
  document.getElementById("transaction").addEventListener("click", function () {
    document.getElementById("bottom").innerText = "";
    for (let val of history) {
      let newElement = document.createElement("section");
      newElement.classList.add("mb-3");

      newElement.innerHTML = `<div id="historises" class="flex items-center [&>*]:pr-3">
                    <div class="img p-1 bg-[#F4F4F4] rounded-full mx-3">
                        <img src="dom-related-project/assets/wallet1.png" alt="">
                    </div>
                    <div id="texts" class="text-black">
                        <h1 class="font-semibold">${val.Name}</h1>
                        <p class=""><span>Today</span> <span>${val.Time}</span></p>
                    </div>
                    <div class="relative flex items-center">
                    <i class="ri-more-2-fill text-black absolute left-[120px]"></i>  
                    </div>
                </div>`;
      document.getElementById("bottom").appendChild(newElement);
    }
  });
}
transaction();

// default slide