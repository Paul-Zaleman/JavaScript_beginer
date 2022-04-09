// TODO:1 Function Declarartion
/* function greet(name){
    return console.log(`Привет, ${name}`)
}
*/
//greet('Лёля')


//TODO: 1-1 Function Expression
/* const greet2 = function greet2(name){
    console.log(`Привет2, ${name}`)
} */
//greet2('Maxim')




//TODO:2 АНОНММНЫЕ ФУНКЦИИ
/* let counter=0
const interval = setInterval(function(){
    if (counter===5){
        clearInterval(interval)
    } else {
        console.log(++counter)
    }
    
}, 1000
)
 */

//TODO: 3 СТРЕЛОЧНЫЕ ФУНКЦИИ

/* const arrow = (name) => {
    console.log(`Hi, ${name}`)
}

arrow('Maxim') */


/* console.log(pow(3))
const pow=num => num**2



arrow2('Olga')
const arrow2 = name2 => console.log(`Hi, ${name2}`)
arrow2('Olga') */


//TODO: 4 ПАРАМЕТРЫ ПО УМОЛЧАНИЮ

function sumAll(...all){
    let result = 0
    for(let num of all){
        result+=num
    }
    return result
}

const res=sumAll(1,2,3,4,5)
console.log(res)