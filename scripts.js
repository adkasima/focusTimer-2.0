const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')

const buttonForestSound = document.querySelector('.forest')
const buttonRainSound = document.querySelector('.rain')
const buttonShopSound = document.querySelector('.shop')
const buttonFireSound = document.querySelector('.fire')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const forestSound = new Audio ("./sounds/forest.wav")
const rainSound = new Audio ("./sounds/rain.wav")
const fireSound = new Audio ("./sounds/fire.wav")
const shopSound = new Audio ("./sounds/shop.wav")

let minutes
let timerTimeOut
const time = 5

function resetSounds() {
    buttonRainSound.classList.remove('playing')
    buttonForestSound.classList.remove('playing')
    buttonShopSound.classList.remove('playing')
    buttonFireSound.classList.remove('playing')

    forestSound.pause()
    rainSound.pause()
    fireSound.pause()
    shopSound.pause()
}

function playRainSound() {
    buttonRainSound.classList.add('playing')
    rainSound.play()
}

function playForestSound() {
    buttonForestSound.classList.add('playing')
    forestSound.play()
}

function playShopSound() {
    buttonShopSound.classList.add('playing')
    shopSound.play()
}

function playFireSound() {
    buttonFireSound.classList.add('playing')
    fireSound.play()

}

function countdown() {
    timerTimeOut = setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)


        secondsDisplay.textContent = "00"

        if(minutes <= 0){
            buttonPlay.classList.remove('hide')
            buttonPause.classList.add('hide')
            return
        }
    

        if(seconds <= 0 ){
            seconds = 60

            minutesDisplay.textContent = String(minutes -1).padStart(2, "0")
        }
        secondsDisplay.textContent = String(seconds -1).padStart(2,"0")

        countdown()
    }, 1000)
}


buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    countdown()

})

buttonPause.addEventListener('click', function() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function() {
    minutesDisplay.textContent = "00"
    secondsDisplay.textContent = "00"
})


buttonIncrease.addEventListener('click', function() {
    minutesDisplay.textContent = String(parseInt(minutesDisplay.textContent) + 5).padStart(2, '0');
})

buttonDecrease.addEventListener('click', function() {
    if(minutesDisplay.textContent - time <= 0){
        minutesDisplay.textContent = "00"
    }
    else {
        minutesDisplay.textContent = minutesDisplay.textContent - String(5).padStart(2, "0")

    }
})

