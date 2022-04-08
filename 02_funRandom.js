function getRandom(min,max){
    return (Math.random() * (max-min + 1 ) + min)
}

console.log(getRandom(1,10))