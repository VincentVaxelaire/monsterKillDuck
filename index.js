let bullet = 7
let lives = 3
let score = 0
let checkScore = document.querySelector('.score')

const clickable = document.querySelectorAll('.clickable')
const unclickable = document.querySelectorAll('.unclickable')

const needBullet = () => {
    if (bullet === 0) {
        window.addEventListener('keydown', (event) => {
            if (event.key === 'r' || event.key === 'R') {
                bullet = 7
            }
        })
        alert('Il faut recharger appuyant sur r')
    }
}

const showScore = () => {
    checkScore.innerHTML = score
}

const muteDeadDuck = () => {
    clickable.forEach((element) => {
        setTimeout(function () {
            element.classList.add('clickable')
            element.classList.remove('isNotVisible')
        }, 2000)
    })
}

const gameOver = () => {
    if (lives === 0 || bullet === -1) {
        alert('Game Over')
        score = 0
        lives = 3
        bullet = 7
        showScore()
    }
}

clickable.forEach(element => {
    element.addEventListener('click', () => {
        if (element.classList.contains('clickable')) {
            bullet--
            score++
            element.classList.add('isNotVisible')
            element.classList.remove('clickable')
            muteDeadDuck()
            showScore()
            needBullet()
            gameOver()
        }
    })
})

unclickable.forEach(element => {
    element.addEventListener('click', () => {
        if (element.classList.contains('unclickable')) {
            bullet--
            score--
            lives--
            showScore()
            needBullet()
            gameOver()
        }
    })
})