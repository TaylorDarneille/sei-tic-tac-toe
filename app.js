//start timer
let time = 10;
let timeOut = 0;
const timeFunction = () => {
  time--;
  document.querySelector('#time').innerHTML = time;
  clearTimeout(timeOut);
  timeOut = setTimeout(timeFunction, 1000);
  
}

const startTimer = () => {
  time = 10;
  timeFunction();
  domLoaded();
}
//end timer

//while(turn === playerOne )
  //call function that uses triangle
  //invoke setTimeout function that counts down and writes countdown into dom;
  //after 10 seconds, invoke function switching to circle 
  //if(time===0) {
    //call switchPlayer function() //switch player function will also reset time 
  //}
  //the switchPlayer function will be called with a 'mouseout' event 
  /*const switch (key) {
    case value:
      
      break;
  
    default:
      break;
  }*/
  let player = prompt('select your shape', 'triangle/circle');
const domLoaded = () => {

};
startTimer('DomContentLoaded', domLoaded)



let turn = document.querySelector('#turn');
turn.innerHTML = player;
  
  
  
const mainFunction = () => {
//let player = prompt('select your shape', //'triangle/circle');
let turn = document.querySelector('#turn');
turn.innerHTML = player;

if (player === 'triangle') {
const changeTriangle = (e) => {
  e.target.classList.add('triangle');
  player === 'circle';
  //e.target.removeAttribute('class', 'triangle');
  //classList.add('')
};
let triangleClick = document.querySelectorAll('.square');
for (let i = 0; i < triangleClick.length; i++) {
  triangleClick[i].addEventListener('click', changeTriangle)
}
} else if (player === 'circle') {
  const changeCircle = (e) => {
  e.target.classList.add('circle');
  player === 'triangle';
  //e.target.removeAttribute('class', 'triangle');
  //classList.add('')
};
let circleClick = document.querySelectorAll('.square');
for (let i = 0; i < circleClick.length; i++) {
  circleClick[i].addEventListener('click', changeCircle)
}
}
};
mainFunction();

  
   const switchPlayer = () => {
    if (player === 'triangle') {
      let turn = document.querySelector('#turn');
      turn.innerHTML = 'circle';
      player = 'circle';
    } else if (player === 'circle') {
      let turn = document.querySelector('#turn');
      turn.innerHTML = 'triangle';
      player = 'triangle';
    }
    
  }
    let getContainer = document.querySelector('#container');
    getContainer.addEventListener('click', switchPlayer);


    
