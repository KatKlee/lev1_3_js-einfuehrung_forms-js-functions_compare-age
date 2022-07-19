let calcDif

let inputAge1 = document.getElementById('age1')
let inputAge2 = document.getElementById('age2')
let result = document.getElementById('result')

function calculate() {
    let age1 = Number(inputAge1.value)
    let age2 = Number(inputAge2.value)

    if (age1 > age2) {
        calcDif = (age1 - age2)
    }
    else if (age1 < age2) {
        calcDif = age2 - age1
    }
    result.innerHTML = calcDif
}