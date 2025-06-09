let points = 0

let counter = document.getElementById('counter')

let cash = " Foodbucks"

let buyWheatLevel = 0

let buyEggLevel = 0
 
let buyCarrotLevel= 0

let eLevel = document.getElementById('eLevel')
let wLevel = document.getElementById('wLevel')
let cLevel = document.getElementById('cLevel')
//let pointCounter = //

function changePoint(amount) {
    points = points + amount
    counter.innerText = points.toFixed(2)  + cash
    console.log(points)
}



function buyWheat() {
    if (points >= 100) {
        changePoint(-100)
        buyWheatLevel += 1
        wLevel.innerText = 'Level ' + buyWheatLevel
    } else {
        alert("NOT ENOUGH, TRY AGAIN OR NEVER")
    }
}

function buyEgg() {
    if (points >= 300) {
        changePoint(-300)
        buyEggLevel += 1
        eLevel.innerText = 'Level' + buyEggLevel
    } else {
        alert("Keep trying, you'll get there.")
    }
}

function buyCarrot() {
    if (points >= 1000) {
        changePoint(-1000)
        buyCarrotLevel += 1
        buyCarrotLevel.innerText = 'Level' + buyCarrotLevel
    } else {
        alert("Brodie seriously?? Get back to work.")
    }
}






function bigClick() {
    let basePoint = 1 + (buyWheatLevel ** 1.05) + (buyEggLevel ** 300.005) + (buyCarrotLevel ** 500.0005)
    changePoint(basePoint)
}