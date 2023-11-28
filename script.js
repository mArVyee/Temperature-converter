/*Now our js is start to convert celsius to fahrenheit and kelvin*/

let CelsiusInput = document.querySelector('#Celsius > input')
let fahrenheitInput =document.querySelector('#fahrenheit > input')
let KelvinInput =document.querySelector('#Kelvin > input')
let btn = document.querySelector('.button')

function roundNumber(number){
    return Math.round(number*100)/100
}

/*if we trying to convert Celsius to Fahrenheit and kelvin*/
CelsiusInput.addEventListener('input', function(){
    let CTemp = parseFloat(CelsiusInput.value)
    let fTemp = (CTemp*(9/5)) + 32
    let kTemp = CTemp + 273.15

    fahrenheitInput.value =roundNumber(fTemp)
    KelvinInput.value =roundNumber(kTemp)
})

/*if we try converting fahrenheit to celsis and kelvin*/
fahrenheitInput.addEventListener('input', function(){
    let fTemp =parseFloat(fahrenheitInput.value)
    let cTemp =(fTemp-32) * (5/9)
    let kTemp =(fTemp - 32) * (5/9) + 273.15

    CelsiusInput.value =roundNumber(cTemp)
    KelvinInput.value =roundNumber(kTemp)
})

/*if we try converting kelvin to celsius and fahrenheit*/
KelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp -273.15) * (9/5) + 32

    CelsiusInput.value =roundNumber(cTemp)
    fahrenheitInput.value =roundNumber(fTemp)
})

btn.addEventListener('click',()=>{
   CelsiusInput.value =""
   fahrenheitInput.value = "" 
   KelvinInput.value =""
})