let car = document.getElementById('car')
let blueCar = document.getElementById('blueCar')
let result = document.querySelector('.result');
let speed = 100;
let count = 0;


let gameplay = document.querySelector('.gamePlay')
let gameover = document.querySelector('.gameOver')


let overMusic = new Audio('/music')
let carMusic = new Audio('/sound')
  carMusic.play()

function left() {
  let carLeft = parseInt(window.getComputedStyle(car).getPropertyValue("left"))
  if (carLeft > 13) {
    car.style.left = (carLeft - speed) + 'px'
  }
}

function right() {
  let carRight = parseInt(window.getComputedStyle(car).getPropertyValue("left"))
  if (carRight < 200) {
    car.style.left = (carRight + speed) + 'px'
  }
}


blueCar.addEventListener('animationiteration', () => {
  let r = Math.floor(Math.random() * 3) * speed;
  blueCar.style.left = r + 'px'
  count++;
  
  
  if (count > 20) {
    blueCar.style.animationDuration = '0.5s'
  }
  
})



function gameOver() {

  let blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))
  let blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
  carLeft = parseInt(window.getComputedStyle(car).getPropertyValue("left"));

  let carDown = parseInt(window.getComputedStyle(car).getPropertyValue("bottom"))

  if ((blueCarLeft === carLeft) && (blueCarTop > 290) && (blueCarTop < 380)) {
    overMusic.play()
      carMusic.pause()

    gameplay.style.display = 'none'
    gameover.style.display = 'block'
    result.innerHTML = `Score: ${count}`;
  }


}

setInterval(gameOver, 10)
