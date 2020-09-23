//------------------------EVENT LISTENERS---------------//
document.addEventListener('DOMContentLoaded', ()=>{
    const div1 = document.querySelector('#One')
    div1.addEventListener('click', boxOne)
    const div2 =document.querySelector('#Two')
    div2.addEventListener('click', boxTwo)
    const div3 =document.querySelector('#Three')
    div3.addEventListener('click', boxThree)
    const div4 =document.querySelector('#Four')
    div4.addEventListener('click', boxFour)
    const div5 =document.querySelector('#Five')
    div5.addEventListener('click', boxFive)
    const div6 =document.querySelector('#Six')
    div6.addEventListener('click', boxSix)
    const div7 =document.querySelector('#Seven')
    div7.addEventListener('click', boxSeven)
    const div8 =document.querySelector('#Eight')
    div8.addEventListener('click', boxEight)
    const div9 =document.querySelector('#Nine')
    div9.addEventListener('click', boxNine)
    // const containerContents =document.querySelector("#container")
    // containerContents.addEventListener('click', checkDraw())

}  )  



//-----------------VARIABLES-----------------//

// I 
let player1="X"
let player2="O"
let count=0
// let ids = []





//---------------FUNCTIONS----------------//
// const makeBoxArray = () => {
//     // grab all the divs with the top, middle, bottom, class, 
//     // inside the element with the container id
//     var divs = document.querySelectorAll("#container div.top");
//     // loop through the results
//     for(var i = 0; i<divs.length;  i++){
//      let array = divs[i];
//     // should I push the divs into an array and compare index
//     // modify the elements or extract data from them here
// }
// }

// I was trying to make an array of my divs. 

// var children = document.getElementById("container").children; 
// //get container element children.
// for (var i = 0, len = children.length ; i < len; i++) {
//     children[i].className = 'new-class';//change child class name.
//     ids.push(children[i].id); //get child id.
// }
// console.log(ids);

// I was trying to compare the classes, but I for some reason
//could not get the innerText of a class. 

// const makeMark = () => {
// const choices = ['X','O]
// var x
// for (x of container) {
//   top.innerText = choices[count%2]
//   count ++
// }

// const resetButton =



const boxOne= () => {
    const choices = ["X","O"] 
    One.innerText = choices[count%2]//alternate between 0 and 1
    count++
    console.log(One.innerText)
    checkWinner() 
}

const boxTwo= () => {
    const choices = ["X","O"] 
    // document.querySelectorAll('#One')
    Two.innerText = choices[count%2]//alternate between 0 and 1
    count++
    console.log(Two.innerText)
    checkWinner()
}

const boxThree= () => {
    const choices = ["X","O"] 
    Three.innerText = choices[count%2]//alternate between 0 and 1
    count++
    console.log(Three.innerText)
    checkWinner()
}

const boxFour= () => {
    const choices = ["X","O"] 
    Four.innerText = choices[count%2]//alternate between 0 and 1
    count++
    console.log(Four.innerText)
    checkWinner()
}

const boxFive= () => {
    const choices = ["X","O"] 
    Five.innerText = choices[count%2]//alternate between 0 and 1
    count++
    console.log(Five.innerText)
    checkWinner()
}

const boxSix= () => {
    const choices = ["X","O"] 
    Six.innerText = choices[count%2]//alternate between 0 and 1
    count++
    console.log(Six.innerText)
    checkWinner()
}

const boxSeven= () => {
    const choices = ["X","O"] 
    Seven.innerText = choices[count%2]//alternate between 0 and 1
    count++
    console.log(Seven.innerText)
    checkWinner()
}

const boxEight= () => {
    const choices = ["X","O"] 
    Eight.innerText = choices[count%2]//alternate between 0 and 1
    count++
    console.log(Eight.innerText)
    checkWinner()
}

const boxNine= () => {
    const choices = ["X","O"] 
    Nine.innerText = choices[count%2]//alternate between 0 and 1
    count++
    console.log(Nine.innerText)
    checkWinner()
}

checkWinner= () => {
    console.log( One.innerText, Two.innerText, Three.innerText)
         if(One.innerText === "O" &&
            Two.innerText === "O" && 
            Three.innerText === "O")   
                {return alert("Winner")}
    else if(One.innerText === "X" &&
            Two.innerText === "X" &&
            Three.innerText === "X")
                {return alert("Winner")} 
    else if(One.innerText === "O"  &&
            Four.innerText === "O" &&
            Seven.innerText === "O")
                {return alert("Winner")}
    else if(One.innerText === "X"  &&
            Four.innerText === "X" &&
            Seven.innerText === "X")
                {return alert("Winner")}
    else if(Three.innerText === "X"  &&
            Six.innerText === "X" &&
            Nine.innerText === "X")
                {return alert("Winner")}
    else if(Three.innerText === "O"  &&
            Six.innerText === "O" &&
            Nine.innerText === "O")
                {return alert("Winner")}
    else if(Four.innerText === "O"  &&
            Five.innerText === "O" &&
            Six.innerText === "O")
                {return alert("Winner")}
    else if(Four.innerText === "X"  &&
            Five.innerText === "X" &&
            Six.innerText === "X")
                {return alert("Winner")}
    else if(Seven.innerText === "O"  &&
            Eight.innerText === "O" &&
            Nine.innerText === "O")
                {return alert("Winner")}
    else if(Seven.innerText === "X"  &&
            Eight.innerText === "X" &&
            Nine.innerText === "X")
                {return alert("Winner")}
    else if(One.innerText === "O"  &&
            Five.innerText === "O" &&
            Nine.innerText === "O")
                {return alert("Winner")}
    else if(One.innerText === "X"  &&
            Five.innerText === "X" &&
            Nine.innerText === "X")
                {return alert("Winner")}
    else if(Three.innerText === "O"  &&
            Five.innerText === "O" &&
            Seven.innerText === "O")
                {return alert("Winner")}
    else if(Three.innerText === "X"  &&
            Five.innerText === "X" &&
            Seven.innerText === "X")
                {return alert("Winner")}
    else if(Two.innerText === "X"  &&
            Five.innerText === "X" &&
            Eight.innerText === "X")
                {return alert("Winner")}
    else if(Two.innerText === "O"  &&
            Five.innerText === "O" &&
            Eight.innerText === "O")
                {return alert("Winner")}
    
            
            
                
        
}




//  let topRow = document.querySelectorAll('.top').innerText
//     console.log(topRow)



//I've been try to select the divs by class to compare those, that is not working. 
// document.querySelectorAll('.top').innerText
//     console.log(container.top.innerText)
        
        // Here I tried to use this function, and it gave me a draw every
        // time I clicked on a box. I get why it did that but I don't know how to fix it.  
        // checkDraw= () => {
        //     // (One.innerText === "X" || "O" &&
        //     //  Two.innerText === "X" || "O" &&
        //     //  Three.innerText === "X" || "O" &&
        //     //  Four.innerText === "X" || "O" &&
        //     //  Five.innerText === "X" || "O" && 
        //     //  Six.innerText === "X" || "O" &&
        //     //  Seven.innerText === "X" || "O" &&
        //     //  Eight.innerText === "X" || "O" &&
        //     //  Nine.innerText === "X" || "O")
        //     //  {return alert("Draw")}
        // }


    


    // for(let i = 0; i< container.length; i++)
    // if(container.length.innerText === "X" && "O")
    // {alert("Tie")}











