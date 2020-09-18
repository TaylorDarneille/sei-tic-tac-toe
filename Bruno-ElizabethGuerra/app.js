let counter = 0;
const makeGrid = () => {
    const topLeft = document.querySelector('#top-left')
    const topMid = document.querySelector('#top-mid')
    const topRight = document.querySelector('#top-right')
    const centLeft = document.querySelector('#cent-left')
    const centMid = document.querySelector('#cent-mid')
    const centRight = document.querySelector('#cent-right')
    const botLeft = document.querySelector('#bot-left')
    const botMid = document.querySelector('#bot-mid')
    const botRight = document.querySelector('#bot-right')
    // console.log(topLeft)
    // console.log(topMid)
    // console.log(topRight)
    // console.log(centLeft)
    // console.log(centMid)
    // console.log(centRight)
    // console.log(botLeft)
    // console.log(botMid)
    // console.log(botRight)

    const grid = {
    topRow: [topLeft,topMid,topRight],
    centRow: [centLeft,centMid,centRight],
    botRow: [botLeft,botMid,botRight],
    leftCol: [topLeft,centLeft,botLeft],
    midCol: [topMid,centMid,botMid],
    rightCol: [topRight,centRight,botRight],
    rightDiag: [botRight,centMid,topLeft],
    leftDiag: [botLeft,centMid,topRight]
    }

    // const grid = [
    //   topRow= [topLeft,topMid,topRight],
    //   centRow= [centLeft,centMid,centRight],
    //   botRow= [botLeft,botMid,botRight],
    //   leftCol= [topLeft,centLeft,botLeft],
    //   midCol= [topMid,centMid,botMid],
    //   rightCol= [topRight,centRight,botRight],
    //   rightDiag= [botRight,centMid,topLeft],
    //   leftDiag= [botLeft,centMid,topRight]
    // ]
}

const winCond = () => {
    const topLeft = document.querySelector('#top-left')
    const topMid = document.querySelector('#top-mid')
    const topRight = document.querySelector('#top-right')
    const centLeft = document.querySelector('#cent-left')
    const centMid = document.querySelector('#cent-mid')
    const centRight = document.querySelector('#cent-right')
    const botLeft = document.querySelector('#bot-left')
    const botMid = document.querySelector('#bot-mid')
    const botRight = document.querySelector('#bot-right')

    const grid = {
        topRow: [topLeft,topMid,topRight],
        centRow: [centLeft,centMid,centRight],
        botRow: [botLeft,botMid,botRight],
        leftCol: [topLeft,centLeft,botLeft],
        midCol: [topMid,centMid,botMid],
        rightCol: [topRight,centRight,botRight],
        rightDiag: [botRight,centMid,topLeft],
        leftDiag: [botLeft,centMid,topRight]
        }

  if (grid.topRow.every(square => square.classList.contains('x'))) console.log('x wins!') 
  else if (grid.centRow.every(square => square.classList.contains('x'))) console.log('x wins!')
  else if (grid.botRow.every(square => square.classList.contains('x'))) console.log('x wins!')
  else if (grid.leftCol.every(square => square.classList.contains('x'))) console.log('x wins!')
  else if (grid.midCol.every(square => square.classList.contains('x'))) console.log('x wins!')
  else if (grid.rightCol.every(square => square.classList.contains('x'))) console.log('x wins!')
  else if (grid.rightDiag.every(square => square.classList.contains('x'))) console.log('x wins!')
  else if (grid.leftDiag.every(square => square.classList.contains('x'))) console.log('x wins!')
  else if (grid.topRow.every(square => square.classList.contains('o'))) console.log('o wins!') 
  else if (grid.centRow.every(square => square.classList.contains('o'))) console.log('o wins!')
  else if (grid.botRow.every(square => square.classList.contains('o'))) console.log('o wins!')
  else if (grid.leftCol.every(square => square.classList.contains('o'))) console.log('o wins!')
  else if (grid.midCol.every(square => square.classList.contains('o'))) console.log('o wins!')
  else if (grid.rightCol.every(square => square.classList.contains('o'))) console.log('o wins!')
  else if (grid.rightDiag.every(square => square.classList.contains('o'))) console.log('o wins!')
  else if (grid.leftDiag.every(square => square.classList.contains('o'))) console.log('o wins!')
  //works but this is ridiculous
  
  // if (grid.forEach(arr => arr.every(square => square.classList.contains('x')))) console.log('x wins!')
  
  else if (counter === 9) console.log('It\'s a tie!')
}

// const xTurn = (e) => e.target.innerText ='x' 
// const oTurn = (e) => e.target.innerText = 'o'
const xTurn = (e) => e.target.classList.add('x')
const oTurn = (e) => e.target.classList.add('o')

const play = (e) => {
if (counter % 2 === 0) {
      xTurn(e)
      counter++
      console.log(counter)
      winCond()
  } else {
    oTurn(e)
    counter++
    console.log(counter)
    winCond()
  }
}

const ticTacToe = () => {
    let squares = document.querySelectorAll('.square')
    for (var i = 0; i<squares.length;i++){
      squares[i].addEventListener('click',play)
    }   
    const reset = document.querySelector('#reset')
    reset.addEventListener('click', () => {
      squares.forEach(square => {
        //square.innerText = ''
        square.setAttribute('class','square')
      })
      counter = 0
    })
}


document.addEventListener('DOMContentLoaded', ()=>{
  ticTacToe()
})