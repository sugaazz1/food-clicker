let points = 0 

let counter = document.getElementById('counter')

let cash = " Foodbucks"

let buyWheatLevel = 0
let wLevel = document.getElementById('wLevel')
//let pointCounter = //

function changePoint(amount) {
    points = points + amount
    counter.innerText = points + cash
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