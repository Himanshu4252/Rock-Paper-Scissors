
let counter = document.getElementById("counting");
let newGameBtn = document.getElementById("newBtn");

let bActionRock = document.getElementById("bRock");
let bActionPaper = document.getElementById("bPaper");
let bActionScissors = document.getElementById("bScissors");

counter.style.display = "none";

let uActionRock = document.getElementById("uRock");
let uActionPaper = document.getElementById("uPaper");
let uActionScissors = document.getElementById("uScissors");

let count = 3;
let bAction = 0;

function botAction(){
    let result = Math.random() * 3 + 1;
    bAction = Math.floor(result);
    console.log(bAction);
    if(bAction === 1){
        console.log("rock");
        bActionRock.classList.add("bSelected");
        bActionPaper.classList.remove("bSelected");
        bActionScissors.classList.remove("bSelected");
    }
    else if(bAction === 2){
        console.log("Paper");
        bActionRock.classList.remove("bSelected");
        bActionPaper.classList.add("bSelected");
        bActionScissors.classList.remove("bSelected");
    }
    else{
        console.log("Scissors");
        bActionRock.classList.remove("bSelected");
        bActionPaper.classList.remove("bSelected");
        bActionScissors.classList.add("bSelected");
    }
    return ;
}

function uSelectedActionRock(){
    uActionRock.classList.add("uSelected");
    uActionPaper.classList.remove("uSelected");
    uActionScissors.classList.remove("uSelected");

}
function uSelectedActionPaper(){
    uActionRock.classList.remove("uSelected");
    uActionPaper.classList.add("uSelected");
    uActionScissors.classList.remove("uSelected");
}
function uSelectedActionScissors(){
    uActionRock.classList.remove("uSelected");
    uActionPaper.classList.remove("uSelected");
    uActionScissors.classList.add("uSelected");
}

function countingStart(){
    counter.style.display = "block";
    console.log("function called");
    counter.innerText = count;
    
    if(count == 0){
        clearTimeout(countingStart);
        count = 3;
        counter.style.display = "none";
        uActionRock.addEventListener("click", uSelectedActionRock);
        uActionPaper.addEventListener("click", uSelectedActionPaper);
        uActionRock.addEventListener("click", uSelectedActionScissors);
        setTimeout(botAction, 1000);
        return;
    }
    count--;
    setTimeout(countingStart, 1000);
}
function selected(){
    

}
newGameBtn.addEventListener("click", countingStart);
uActionPaper.addEventListener("click", selected);