const validPin = 1234

// add money code
document.getElementById("addManeyBtn").addEventListener
    ("click", function (e) {
        e.preventDefault()
        const bank = document.getElementById("bank").value
        const bankNum = document.getElementById("bank-num").value
        const amount = parseInt(document.getElementById("amount").value)
        const pin = parseInt(document.getElementById("pin").value)
        const balance = parseInt(document.getElementById("Available-Balance").innerText)

        if (bankNum.length < 11) {
            alert("please boss valid account number")
            return;
        }

        if (pin != validPin) {
            alert("please boss valid pin number")
            return;
        }

        const totalBalance = amount + balance
        document.getElementById("Available-Balance").innerText = totalBalance
    })

// cash out money code
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const amount = parseInt(document.getElementById("withdraw-amount").value)
    const balance = parseInt(document.getElementById("Available-Balance").innerText)
    
    const totalBalance = amount - balance
    document.getElementById("Available-Balance").innerText = totalBalance
})


// togoling futers
document.getElementById("add-btn").addEventListener("click", function () {
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})

document.getElementById("cash-out-btn").addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
})