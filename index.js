const quoteContainer = document.getElementById('quotes');
const quoteBtn = document.getElementsByClassName('quoteBtn')[0];

const getRandomQuote = () => {
    let randNum = Math.floor(Math.random() * 10);

    if(randNum == 1) {
        quoteContainer.innerHTML = "I am complete as I am, others simply support me!";
    }
    else if(randNum == 2){
        quoteContainer.innerHTML = "Changing my mind is a strength, not a weakness!";
    }
    else if(randNum == 3){
        quoteContainer.innerHTML = "I am growing and I am going at my own pace!";
    }
    else if(randNum == 4){
        quoteContainer.innerHTML = "Letting go creates space for opportunities to come!";
    }
    else if(randNum == 5){
        quoteContainer.innerHTML = "My life is not a race or competition!";
    }
    else if(randNum == 6){
        quoteContainer.innerHTML = "Sometimes the work is resting!";
    }
    else if(randNum == 7){
        quoteContainer.innerHTML = "There is strength in quiet, there is vulnerability in being loud!";
    }
    else if(randNum == 8){
        quoteContainer.innerHTML = "When I talk to myself as I would a friend, I see all my best qualities and I allow myself to shine!";
    }
    else if(randNum == 9){
        quoteContainer.innerHTML = "I am in charge of how I feel and I choose to feel happy!";
    }
};

quoteBtn.addEventListener('click', getRandomQuote());
