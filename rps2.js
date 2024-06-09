
let counter = document.getElementById("counting");
let newGameBtn = document.getElementById("newBtn");

let bActionRock = document.getElementById("bRock");
let bActionPaper = document.getElementById("bPaper");
let bActionScissors = document.getElementById("bScissors");

counter.style.display = "none";
console.log("Do Not try to manipulate the data, this panel is only for development and testing purpose, tempering here will not make you win. Make changes on you own resposibility.");

let uActionRock = document.getElementById("uRock");
let uActionPaper = document.getElementById("uPaper");
let uActionScissors = document.getElementById("uScissors");

let count = 3;
let bAction = 0;
let userSelectedOption = 0;

function botAction(){
    let result = Math.random() * 3 + 1;
    bAction = Math.floor(result);
    if(bAction === 1){
        bActionRock.classList.add("bSelected");
        bActionPaper.classList.remove("bSelected");
        bActionScissors.classList.remove("bSelected");
        bDisabler();
    }
    else if(bAction === 2){
        bActionRock.classList.remove("bSelected");
        bActionPaper.classList.add("bSelected");
        bActionScissors.classList.remove("bSelected");
        bDisabler();
    }
    else{
        bActionRock.classList.remove("bSelected");
        bActionPaper.classList.remove("bSelected");
        bActionScissors.classList.add("bSelected");
        bDisabler();
    }
    return ;
}

function uSelectedActionRock(){
    userSelectedOption = 1;
    uActionRock.classList.add("uSelected");
    uActionPaper.classList.remove("uSelected");
    uActionScissors.classList.remove("uSelected");
    setTimeout(uDisabler, 1500);

}
function uSelectedActionPaper(){
    userSelectedOption = 2;
    uActionRock.classList.remove("uSelected");
    uActionPaper.classList.add("uSelected");
    uActionScissors.classList.remove("uSelected");
    setTimeout(uDisabler, 1500);
}
function uSelectedActionScissors(){
    userSelectedOption = 3;
    uActionRock.classList.remove("uSelected");
    uActionPaper.classList.remove("uSelected");
    uActionScissors.classList.add("uSelected");
    setTimeout(uDisabler, 1500);
}
function userAction(){
    uActionRock.addEventListener("click", uSelectedActionRock);
    uActionPaper.addEventListener("click", uSelectedActionPaper);
    uActionScissors.addEventListener("click", uSelectedActionScissors);
    setTimeout(uDisabler, 1500);
    setTimeout(result, 1700);
}
function uDisabler(){
    uActionRock.disabled = true;
    uActionPaper.disabled = true;
    uActionScissors.disabled = true;
    return ;

}
function uEnabler (){
    uActionRock.disabled = false;
    uActionPaper.disabled = false;
    uActionScissors.disabled = false;
    return ;
}

function bDisabler(){
    bActionRock.disabled = true;
    bActionPaper.disabled = true;
    bActionScissors.disabled = true;
    return ;

}
function bEnabler (){
    bActionRock.disabled = false;
    bActionPaper.disabled = false;
    bActionScissors.disabled = false;
    return ;
}
function refresher(){
    uActionRock.classList.remove("uSelected");
    uActionPaper.classList.remove("uSelected");
    uActionScissors.classList.remove("uSelected");
    bActionRock.classList.remove("bSelected");
    bActionPaper.classList.remove("bSelected");
    bActionScissors.classList.remove("bSelected");
    return ;

}

function countingStart(){
    userSelectedOption = 0;
    refresher();
    uEnabler();
    bEnabler();
    counter.classList.remove("draw");
    counter.classList.remove("noOption");
    counter.classList.add("counting");
    counter.style.display = "block";
    counter.innerText = count;
    
    if(count == 0){
        clearTimeout(countingStart);
        count = 3;
        counter.style.display = "none";
        userAction();
        setTimeout(botAction, 1500);
        return;
    }
    count--;
    setTimeout(countingStart, 1000);
    return ;
}
newGameBtn.addEventListener("click", countingStart);
function result(){
    if(userSelectedOption===0){
        counter.classList.remove("counting");
        counter.classList.add("noOption");
        counter.classList.remove("draw");
        counter.style.display = "block";
        counter.innerText = "Start New!";
    }
    else
    if(userSelectedOption === 1 && bAction === 1){
        counter.classList.remove("counting");
        counter.classList.remove("noOption");
        counter.classList.add("draw");
        counter.style.display = "block";
        counter.innerText = "Draw !";
        

    }
    else
    if(userSelectedOption === 1 && bAction === 2){
        console.log("Himanshu won");
        
    }
    else
    if(userSelectedOption === 1 && bAction === 3){
        console.log("You won");
        
    }
    else
    if(userSelectedOption === 2 && bAction === 1){
        console.log("you won");
        
    }
    else
    if(userSelectedOption === 2 && bAction === 2){
        counter.classList.remove("counting");
        counter.classList.remove("noOption");
        counter.classList.add("draw");
        counter.style.display = "block";
        counter.innerText = "Draw !";
        
    }
    else
    if(userSelectedOption === 2 && bAction === 3){
        console.log("Himanshu won");
        
    }
    else
    if(userSelectedOption === 3 && bAction === 1){
        console.log("you won");
        
    }
    else
    if(userSelectedOption === 3 && bAction === 2){
        console.log("Himanshu won");
        
    }
    else
    if(userSelectedOption === 3 && bAction === 3){
        counter.classList.remove("counting");
        counter.classList.remove("noOption");
        counter.classList.add("draw");
        counter.style.display = "block";
        counter.innerText = "Draw !";
        
    }
}