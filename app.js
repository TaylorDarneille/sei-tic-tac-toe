let turn = true
let xWinCount = 0
let oWinCount = 0
//sets so X is ready to take first turn
document.querySelector("#ohh").style.opacity = 0.3
document.querySelector("#ohh").setAttribute('draggable', false)
//function to turn square yellow when hovering with piece
const highlight = (e) => {
    if(e.target.innerText === "") {
        e.target.style.backgroundColor = 'yellow'
    }
}
//function to turn square back to white once no longer dragging piece over
const unlight = (e) => {
    e.target.style.backgroundColor = ''
}
//carries info about node being dragged
const drag = (e) => {
    e.dataTransfer.setData("text", e.target.id)
}
//function to place a piece if dropped in an appropriate place
const move = (e) => {
    e.preventDefault()
    
    let data = e.dataTransfer.getData("text");
    if(e.target.innerText === "X" || e.target.innerText === "O"){
        e.target.style.backgroundColor = ''
        return
    }
    if(turn){
        e.target.innerText = "X"
        addPiece(e)
    } else {
        e.target.innerText = "O"
        addPiece(e)
    }
    e.target.style.backgroundColor = ''
    
    switchTurn()
}
let xCheck = []
let oCheck = []
//function to add moves to tracker to be checked for wins
const addPiece = (e) => {
    if(turn){
        xCheck[e.target.id] = true
        check(e, xCheck, oCheck)
    } else {
        oCheck[e.target.id] = true
        check(e, oCheck, xCheck)
    }
}
//function to check if there is a win after each move
const check = (e, arr, arr2) => {
    let winner = false
    if(arr[1] && arr[2] && arr[3]){
        document.getElementById('1').style.color = 'red'
        document.getElementById('2').style.color = 'red'
        document.getElementById('3').style.color = 'red'
        winner = true
    }else if(arr[4] && arr[5] && arr[6]){
        document.getElementById('4').style.color = 'red'
        document.getElementById('5').style.color = 'red'
        document.getElementById('6').style.color = 'red'
        winner = true
    }else if(arr[7] && arr[8] && arr[9]){
        document.getElementById('7').style.color = 'red'
        document.getElementById('8').style.color = 'red'
        document.getElementById('9').style.color = 'red'
        winner = true
    }else if(arr[1] && arr[4] && arr[7]){
        document.getElementById('1').style.color = 'red'
        document.getElementById('4').style.color = 'red'
        document.getElementById('7').style.color = 'red'
        winner = true
    }else if(arr[2] && arr[5] && arr[8]){
        document.getElementById('2').style.color = 'red'
        document.getElementById('5').style.color = 'red'
        document.getElementById('8').style.color = 'red'
        winner = true
    }else if(arr[3] && arr[6] && arr[9]){
        document.getElementById('3').style.color = 'red'
        document.getElementById('6').style.color = 'red'
        document.getElementById('9').style.color = 'red'
        winner = true
    }else if(arr[1] && arr[5] && arr[9]){
        document.getElementById('1').style.color = 'red'
        document.getElementById('5').style.color = 'red'
        document.getElementById('9').style.color = 'red'
        winner = true
    }else if(arr[3] && arr[5] && arr[7]){
        document.getElementById('3').style.color = 'red'
        document.getElementById('5').style.color = 'red'
        document.getElementById('7').style.color = 'red'
        winner = true
    } else {
        let counter = 0
        for(let i = 1; i < 10; i++){
            if(arr[i] || arr2[i]){
                counter++
            }
        }
        if(counter === 9){
            document.querySelector('#reset').classList.toggle('hidden')
        }
    }
    if(winner && turn){
        xWinCount++
        document.querySelector('#xWins').innerText = xWinCount
        document.querySelector('#reset').classList.toggle('hidden')
    } else if(winner){
        oWinCount++
        document.querySelector('#oWins').innerText = oWinCount
        document.querySelector('#reset').classList.toggle('hidden')
    } 
}
//changes to next player after valid move is made
const switchTurn = () => {
    turn = !turn
    if(turn){
        document.querySelector("#ohh").style.opacity = 0.3
        document.querySelector("#exe").style.opacity = 1
        document.querySelector("#ohh").setAttribute('draggable', false)
        document.querySelector("#exe").setAttribute('draggable', true)
    } else {
        document.querySelector("#exe").style.opacity = 0.3
        document.querySelector("#ohh").style.opacity = 1
        document.querySelector("#ohh").setAttribute('draggable', true)
        document.querySelector("#exe").setAttribute('draggable', false)
    }
}
//resets game board for next game once button is clicked following a win or draw
const resetGame = () => {
    let board = document.querySelectorAll('.square')
    let boardArr = Array.from(board)
    console.log(boardArr)
    for(let i = 1; i < 10; i++){
        xCheck[i] = false
        oCheck[i] = false
        boardArr[i - 1].innerText = ""
        boardArr[i - 1].style.color = 'black'
    }
    turn = true
    document.querySelector('#reset').classList.toggle('hidden')
    document.querySelector("#exe").style.opacity = 1
    document.querySelector("#ohh").style.opacity = 0.3
    document.querySelector("#ohh").setAttribute('draggable', false)
    document.querySelector("#exe").setAttribute('draggable', true)
}
document.addEventListener('DOMContentLoaded', ()=>{
    const squares = document.querySelectorAll('.square')
    for(square of squares){
        square.addEventListener('dragenter', highlight)
        square.addEventListener('dragover', function(e) {
            e.preventDefault()
        })
        square.addEventListener('dragleave', unlight)
        square.addEventListener('drop', move)
    }
    document.querySelector('#exe').addEventListener('dragstart', drag)
    document.querySelector('#reset').addEventListener('click', resetGame)
    
})