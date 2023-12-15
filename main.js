const adviceP = document.querySelector('.quote')
const adviceId = document.querySelector('.advice_id')
const diceBtn = document.querySelector('.dice_btn')
let isPending = false

async function fetchAdvice() {
    isPending = true
    console.log('isPending: ' + isPending)
    await fetch('https://api.adviceslip.com/advice')
    .then(data => data.json())
    .then(obj => {
        adviceP.textContent = '"' + obj.slip.advice + '"'
        adviceId.textContent = obj.slip.id
    })
    .catch(e => {
        console.log(e)
    })
    .finally(isPending = false)
    console.log('isPending: ' + isPending)
}

window.addEventListener('load', e => {
    fetchAdvice()
})

diceBtn.addEventListener('click',  e => {
    fetchAdvice() 
})

