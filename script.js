'use strick'
const dino = document.getElementById('dino')
const cactus = document.getElementById('cactus')
const point = document.getElementById('point')
let initvaleu = 0

let jump = () =>{
    dino.classList.add('jump')
    setTimeout(()=>{
        dino.classList.remove('jump')
    },400)
}
document.addEventListener('keydown' ,()=>{
    jump()
    point.innerHTML = ++initvaleu
})

let alive = setInterval(() => {
    let dinoPos = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let cactusPos = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))
    if( dinoPos > 150 && cactusPos < 30){
alert('game over')
initvaleu = 0
    }
}, 10);