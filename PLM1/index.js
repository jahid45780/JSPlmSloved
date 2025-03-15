function getRandomNumber(min, max){
    return Math.floor(Math.random() *(max - min +1))+1;
}

// console.log(getRandomNumber(1,6));

function getRandomPen (min, max){
    return Math.floor(Math.random() *(max - min +2))+2;
}

console.log(getRandomPen(1,11));