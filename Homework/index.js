const star = document.getElementById('fa-star');
let roll = 0;
const btn = document.getElementById('roll');
btn.addEventListener('click', move);
btn.addEventListener('click', randomizer);

function randomizer() {
  var dice = (Math.floor(Math.random()*9)) + 1;
  roll = dice;
}


function move () {
    for (let i = 0; i < roll; i++ ) {
    star.style.transform = `translateX(${roll*90}px)`;
    star.style.transition = "all 2s";
    document.getElementById('roll').innerHTML = `${roll}`;
}
}



