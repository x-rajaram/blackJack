let age=67;

if(age<6){
    console.log("child: free ticket");
}else if(age>=6 && age<=17){
    console.log("child 10% discount");
}else if(age>=18 && age<=26){
    console.log("student 15% discount");
}else if(age>=27&& age<=66){
    console.log("full amount");
}else if(age>66){
    console.log("senior citizen 50% discount");
}


let largecountry=["UK","india","USA","Russia","italy","cili"]

largecountry.pop()
console.log(largecountry)
largecountry.push("pakistan")
console.log(largecountry)
largecountry.shift();
console.log(largecountry)
largecountry.unshift("china")
console.log(largecountry)

let hands=["Rock","paper","scissor"]

function randomHands(){
    let random=Math.floor(Math.random()*3);
    console.log(random);
    return hands[random];
}
console.log(randomHands());
console.log(randomHands());
console.log(randomHands());
console.log(randomHands());
console.log(randomHands());
console.log(randomHands());
console.log(randomHands());

console.log(randomHands());
console.log(randomHands());
console.log(randomHands());
console.log(randomHands());
console.log(randomHands());
console.log(randomHands());
console.log(randomHands());










// alert("hi");
let player={
    userName:"Rajaram",
    chips:"$142"
}
let minimumCard=1;
let maximumCard=13;
let cards=[];
let sum =0;
let hasBackJack = false;
let isAlive = false;
let message = "";

// let startGameEl=document.getElementById("game-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEL=document.getElementById("player-el");
// let newCardEl=document.getElementById("newcard-el");
// cardsEl.textContent= "Cards : "+firstCard+" "+secondCard;

function getRandomCard(){
    // console.log(Math.floor(Math.random()*maximumCard-minimumCard+1)+minimumCard);
    let randomcard= Math.floor(Math.random()*maximumCard-minimumCard+1)+minimumCard;
       
    if( randomcard===1){
        return 11;
    }else if(randomcard>10){
        return 10;
    }else{
        return randomcard;
    }
}

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = cards[0] + cards[1];
    renderGame();
}
function renderCards(){
    for (let card = 0; card < cards.length; card++) {
        cardsEl.textContent += cards[card] + " ";
    }
}

function renderGame() {
    cardsEl.textContent= "Cards : ";
    playerEL.textContent="You have won: ";
    renderCards();
    sumEl.textContent = "Sum : " + sum
    if (sum < 21) {
        message = "Do you want to draw a New card?";
        isAlive=true;
    } else if (sum === 21) {
        message = "Wohoo! you have got BlackJack!";
        hasBackJack = true;
    } else {
        message = "You are OUT of the Game!";
        isAlive = false;
    }
    // sumEl.textContent+=sum;
    messageEl.textContent = message;
    playerEL.textContent+=player.userName+" "+player.chips
    // console.log(message);
}

function newcard() {
    if(isAlive && hasBackJack!=true){
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        console.log(cards);
        // console.log("called new card",sum);
        renderGame();
    }
   
}