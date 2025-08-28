document.getElementById("loginbtn")
    .addEventListener('click', function (e) {
        e.preventDefault()

        const mobilNum = 123456
        const pinNum = 1234

        const mobilNumValue = document.getElementById("mobile-num").value
        const mobilNumValueConvert = parseInt(mobilNumValue)
        const pinNumValue = document.getElementById("pin-num").value
        const pinNumValueConvert = parseInt(pinNumValue)

        if (mobilNumValueConvert === mobilNum && pinNumValueConvert === pinNum) {
            window.location.href = "./home.html"
        }
        else {
            alert("Invalid Md Samim Boss 😎 💕")
        }
    })