const pianoKeys = document.querySelectorAll('.piano-keys .key'),
voluemSlider = document.querySelector('.volume-slider input'),
keysCheckbox = document.querySelector('.keys-checkbox input')

let allKeys = []
let audio = new Audio('tunes/a.wav')

const playtune = (key) => {
    audio.src = `tunes/${key}.wav`
    audio.play()

    const clickedKey = document.querySelector(`[data-key="${key}]"`)
    clickedKey.classList.add('active')
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key)
    key.addEventListener('click', () => playtune(key.dataset.key))
})

const handleVolume = (e) => {
    audio.volume = e.target.value
}

const pressedKey = (e) => { 
    playtune(e.key) 
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle('hide'))
}

keysCheckbox.addEventListener('click',showHideKeys)
voluemSlider.addEventListener('input',handleVolume)
document.addEventListener('keydown', pressedKey)