var markOptions = ["X","O"];
var player1 = 
    {   name: "Krystle",
        mark: markOptions[0], //null,
        choices: [],
        score: 0,
        gameWinner: null
    };
var player2 = 
    {   name: "Player 2",
        mark: markOptions[1], // null,
        choices: [],
        score: 0,
        gameWinner: null,
        isComputer: false
    };
var filledSpots = [];
var availableSpots = [0,1,2,3,4,5,6,7,8];
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];



const createGameboard = () => {
    const randomColorRGB = ()=>{
        const red = Math.floor(Math.random()*256)
        const green = Math.floor(Math.random()*256)
        const blue = Math.floor(Math.random()*256)
       return `rgb(${red},${green},${blue})`
    };
    const gameboard = document.querySelector("main .gameboard");
    gameboard.style.justifyContent= "center";
    gameboard.style.flexWrap= "wrap";
    gameboard.style.flexDirection= "row";
    gameboard.style.backgroundColor = randomColorRGB();

    while (gameboard.firstChild) {
        gameboard.removeChild(gameboard.firstChild)
    };

    for (let i=0; i<9; i++) {
        const makeSquares = document.createElement("div");
        makeSquares.setAttribute("class","spot");
        makeSquares.id = i;
        document.querySelector(".gameboard").appendChild(makeSquares);
        makeSquares.addEventListener("click",addMark)
        };

    startNewGame.innerText = "Reset Board";
    resetBoard();

};

const switchTurn = () => {
    if (filledSpots.length %2 === 0) {
        document.querySelector(".player1#turn").style.opacity = 0;
        document.querySelector(".player2#turn").style.opacity = 1;
        return player1
    } else if (filledSpots.length %2 === 1 ) {
        document.querySelector(".player1#turn").style.opacity = 1;
        document.querySelector(".player2#turn").style.opacity = 0;
        return player2
        
    }
};

const addMark = (event) => {
    var currentPlayer = switchTurn();
    
        event.target.innerText = currentPlayer.mark;
        currentPlayer.choices.push(parseInt(event.target.id));
        filledSpots.push(parseInt(event.target.id));
        
        var used = parseInt(event.target.id);
        var removeUsedSpot = availableSpots.splice(availableSpots.indexOf(used),1);
        
        console.log("Available: "+availableSpots,"\nFilled: "+filledSpots,"\np1: "+player1.choices,"\np2: "+player2.choices);

        document.getElementById(event.target.id).removeEventListener("click",addMark);
        undo.addEventListener("click",undoButton);
    

    if (currentPlayer.choices.length>2) {
        checkWin(currentPlayer)
    };
    checkDraw();
};


const computerTurn =() => {
    if (filledSpots.length %2 === 1 && availableSpots.length>0 &&player2.isComputer === true && player1.gameWinner !== true) {
    let randomChoice = Math.floor(Math.random()*(availableSpots.length));
    let compChoice = availableSpots[randomChoice];        player2.choices.push(compChoice);
    filledSpots.push(compChoice);
    let compSpot = document.getElementById(compChoice) 
    compSpot.innerText = player2.mark;
    availableSpots.splice(availableSpots.indexOf(compChoice),1);
    compSpot.removeEventListener("click",addMark);
    document.querySelector(".player1#turn").style.opacity = 1;
    document.querySelector(".player2#turn").style.opacity = 0;
    if (player2.choices.length>2 && player1.gameWinner!== true) {
        checkWin(player2)
    };
    checkDraw();
    
    }
};

const undoButton = () => {
    let lastEntry =filledSpots[filledSpots.length-1];
    document.getElementById(lastEntry).innerText = "";
    document.getElementById(lastEntry).addEventListener("click",addMark);
    availableSpots.push(parseInt(lastEntry));
    filledSpots.pop();
    if (player1.choices.includes(parseInt(lastEntry))) {
        player1.choices.pop();
        document.querySelector(".player1#turn").style.opacity = 1;
        document.querySelector(".player2#turn").style.opacity = 0;
    } else if (player2.choices.includes(parseInt(lastEntry))) {
        player2.choices.pop();
        document.querySelector(".player1#turn").style.opacity = 0;
        document.querySelector(".player2#turn").style.opacity = 1;
    };




console.log("Available: "+availableSpots,"\nFilled: "+filledSpots,"\np1: "+player1.choices,"\np2: "+player2.choices)
};

    
const checkWin = (currentPlayer) => {
    winningCombos.forEach((combo,index) => {
    let hits=[];
    playerChoices = currentPlayer.choices
    playerChoices.forEach((value,index)=> {
        if (combo.includes(value)) {
            hits.push(1);
        } else {
            hits.push(0)
        }
    });
    tallyHits = hits.reduce((hit1,hit2) => {
      return hit1+hit2
    });
    if (tallyHits >= 3){
        currentPlayer.gameWinner = true;
        currentPlayer.score += 1;
        if (player1.gameWinner===true) {
            let winnerTag = document.querySelector(".player1#turn");
            winnerTag.innerText="WINNER!";
            winnerTag.style.backgroundColor= "rgb(255, 218, 7)";
            winnerTag.style.opacity = 1;
            document.querySelector(".player2#turn").style.opacity=0;
        } else if (player2.gameWinner===true) {
            let winnerTag = document.querySelector(".player2#turn");
            winnerTag.innerText="WINNER!";
            winnerTag.style.backgroundColor= "rgb(255, 218, 7)";
            winnerTag.style.opacity = 1;
            document.querySelector(".player1#turn").style.opacity=0;
        }
        highlightWin(combo);
        unclickable();

    } else {
        return
    }
    })
};

const checkDraw = ()=> {
    if (availableSpots.length<1 && player1.gameWinner !== true && player2.gameWinner!==true) {
        alert("Draw! There is no winner for this round. Reset the board to start again.")
    }
}
  
const highlightWin = (winningArray) => {
    winningArray.forEach(
        (spot,index) => {
            winningSpot= document.getElementById(spot);
            winningSpot.classList.add("winner")
        }
    )
};

const unclickable = () => {
    availableSpots.forEach(
        (value,index) => {
            document.getElementById(value).removeEventListener("click",addMark)
        }
    )
};

const resetBoard = () => {
while (filledSpots.length>0) {
    let i=0;
    
    spotStrToInt = parseInt(filledSpots[0])
    availableSpots.push(spotStrToInt);
    filledSpots.splice(0,1);
    i++
    };
        
    resetP1();
    

    document.querySelector(".player1#score").innerText = player1.score;
    document.querySelector(".player2#score").innerText = player2.score;
};
    

const resetP1 = () => {
    while (player1.choices.length>0) {
        let j=0;
        player1.choices.splice(0,1);
        j++
    }
    player1.gameWinner=null;
    document.querySelector(".player1#turn").innerText = "Your Turn!";
    document.querySelector(".player1#turn").style.backgroundColor="rgb(79, 177, 120)";
    resetP2()
};

const resetP2 = () => {
    while (player2.choices.length>0) {
        let k=0;
        player2.choices.splice(0,1);
        k++
    }
    player2.gameWinner = null;
    document.querySelector(".player2#turn").innerText = "Your Turn!";
    document.querySelector(".player2#turn").style.backgroundColor="rgb(79, 177, 120)";
};
    


const startScreen = (event) => {
    event.preventDefault;
    const gameboard = document.querySelector("main .gameboard");
// PLAYER 1 FORM
    let enterInfo_p1 = document.createElement("section");
    enterInfo_p1.classList.add("enterInfo");
    let infoHeader_p1= document.createElement("H2");
    infoHeader_p1.innerText= "Enter Player 1 Info:";
    gameboard.appendChild(enterInfo_p1);
    enterInfo_p1.appendChild(infoHeader_p1);
    let infoForm_p1= document.createElement("form");
    enterInfo_p1.appendChild(infoForm_p1);
    //PLAYER 1 NAME FEILD
    let namePart=document.createElement("div");
    namePart.classList.add("namePart");
    infoForm_p1.appendChild(namePart);
    let nameInputLabel_p1 = document.createElement("label");
    nameInputLabel_p1.setAttribute("for","nameInput_p1");
    nameInputLabel_p1.innerText = "Name: ";
    namePart.appendChild(nameInputLabel_p1);
    let name_p1= document.createElement("input");
    name_p1.setAttribute("type","text");
    name_p1.setAttribute("placeholder","Player 1");
    name_p1.id = "nameInput_p1";
    namePart.appendChild(name_p1);
    //PLAYER 1 MARK OPTIONS
    let optionsList = document.createElement("div");
    optionsList.classList.add("optionsList");
    infoForm_p1.appendChild(optionsList);
    let chooseX_p1 = document.createElement("input");
    chooseX_p1.setAttribute("name","chooseMark");
    chooseX_p1.setAttribute("type","radio");
    chooseX_p1.setAttribute("value","X");
    chooseX_p1.setAttribute("checked","checked");
    chooseX_p1.setAttribute("class","radio");
    chooseX_p1.id= "X_input";
    optionsList.appendChild(chooseX_p1);
    let chooseXLabel_p1 = document.createElement("label");
    chooseXLabel_p1.setAttribute("for","X_input");
    chooseXLabel_p1.innerHTML = "Choose X <br>";
    optionsList.appendChild(chooseXLabel_p1);
    let chooseO_p1 = document.createElement("input");
    chooseO_p1.setAttribute("name","chooseMark");
    chooseO_p1.setAttribute("type","radio");
    chooseO_p1.setAttribute("value","O");
    chooseO_p1.setAttribute("class","radio");
    chooseO_p1.id= "O_input";
    optionsList.appendChild(chooseO_p1);
    let chooseOLabel_p1 = document.createElement("label");
    chooseOLabel_p1.setAttribute("for","O_input");
    chooseOLabel_p1.innerText = "Choose O";
    optionsList.appendChild(chooseOLabel_p1);

//PLAYER 2 FORM    
    let enterInfo_p2 = document.createElement("section");
    enterInfo_p2.classList.add("enterInfo");
    let infoHeader_p2= document.createElement("H2");
    infoHeader_p2.innerText= "Enter Player 2 Info:";
    gameboard.appendChild(enterInfo_p2);
    enterInfo_p2.appendChild(infoHeader_p2);
    let infoForm_p2= document.createElement("form");
    enterInfo_p2.appendChild(infoForm_p2);
    //PLAYER 2 NAME FEILD
    let namePart2=document.createElement("div");
    namePart2.classList.add("namePart");
    infoForm_p2.appendChild(namePart2);
    let nameInputLabel_p2 = document.createElement("label");
    nameInputLabel_p2.setAttribute("for","nameInput_p2");
    nameInputLabel_p2.innerText = "Name: ";
    namePart2.appendChild(nameInputLabel_p2);
    let formInput_p2= document.createElement("input");
    formInput_p2.setAttribute("type","text");
    formInput_p2.setAttribute("placeholder","Computer");
    formInput_p2.id = "nameInput_p2";
    namePart2.appendChild(formInput_p2);
    //PLAYER 2 OR COMPUTER OPTIONS
    let optionsList2 = document.createElement("div");
    optionsList2.classList.add("optionsList");
    infoForm_p2.appendChild(optionsList2);
    let choose2nd_p2 = document.createElement("input");
    choose2nd_p2.setAttribute("name","choose2ndPlayer");
    choose2nd_p2.setAttribute("type","radio");
    choose2nd_p2.setAttribute("value","2ndPlayer");
    choose2nd_p2.setAttribute("class","radio");
    choose2nd_p2.id= "Player2_input";
    optionsList2.appendChild(choose2nd_p2);
    let choose2ndLabel_p2 = document.createElement("label");
    choose2ndLabel_p2.setAttribute("for","Player2_input");
    choose2ndLabel_p2.innerHTML = "Play against 2nd Player <br>";
    optionsList2.appendChild(choose2ndLabel_p2);
    let chooseComp_p2 = document.createElement("input");
    chooseComp_p2.setAttribute("name","choose2ndPlayer");
    chooseComp_p2.setAttribute("type","radio");
    chooseComp_p2.setAttribute("value","computer");
    chooseComp_p2.setAttribute("checked","checked");
    chooseComp_p2.setAttribute("class","radio");
    chooseComp_p2.id= "Comp_input";
    optionsList2.appendChild(chooseComp_p2);
    let chooseCompLabel_p2 = document.createElement("label");
    chooseCompLabel_p2.setAttribute("for","Comp_input");
    chooseCompLabel_p2.innerText = "Play against Computer";
    optionsList2.appendChild(chooseCompLabel_p2);

    startNewGame.addEventListener("click", createGameboard);
    
}

const createPlayerPanels =() => {
    // console.log(nameInput_p1.value,X_input.checked,O_input.checked,nameInput_p2.value,Comp_input.checked,Player2_input.checked);

    if (nameInput_p1.value === "") {
        player1.name = "Player 1"
    } else {
        player1.name = nameInput_p1.value
    };
    if (X_input.checked ===true) {
        player1.mark = markOptions[0];
        player2.mark = markOptions[1];
    } else if (O_input.checked=== true) {
        player1.mark = markOptions[1];
        player2.mark = markOptions[0]
    };

    document.querySelector(".player1#name").innerText = player1.name;
    document.querySelector(".player1#mark").innerText = player1.mark;
    document.querySelector(".player1#score").innerText = player1.score;

    if (Comp_input.checked === false && nameInput_p2.value === "" ) {
        player2.name = "Player 2"
    } else if (Comp_input.checked === false && nameInput_p2.value !== "" ) {
        player2.name = nameInput_p2.value
    } else if (Comp_input.checked === true) {
        player2.name = "Computer";
        player2.isComputer = true;
        document.addEventListener("click",computerTurn)
    };
    document.querySelector(".player2#name").innerText = player2.name;
    document.querySelector(".player2#mark").innerText = player2.mark;
    document.querySelector(".player2#score").innerText = player2.score;


    startNewGame.removeEventListener("click", createPlayerPanels)
} 




document.addEventListener("DOMContentLoaded", startScreen);
startNewGame.addEventListener("click", createPlayerPanels);