window.onload = () => {
    const card = document.querySelector('.card');
    const suit = generateRandomSuit();
    const number = generateRandomNumber();
    
    card.classList.add(suit);
    card.querySelector('.suitTop').textContent = suitSymbol(suit);
    card.querySelector('.suitBottom').textContent = suitSymbol(suit);
    card.querySelector('.number').textContent = number;
};

let generateRandomNumber = () => {
    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let indexNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[indexNumbers];
};

let generateRandomSuit = () => {
    let suits = ["diamond", "spades", "hearts", "clubs"];
    let indexSuit = Math.floor(Math.random() * suits.length);
    return suits[indexSuit];
};

let suitSymbol = (suit) => {
    switch (suit) {
        case "diamond":
            return "♦";
        case "spades":
            return "♠";
        case "hearts":
            return "♥";
        case "clubs":
            return "♣";
        default:
            return "";
    }
};
