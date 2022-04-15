const cars=['Mazda', 'BMW', 'Ford']
const fib=[1,1,2,3,5]
/* const people =[
    {name: 'Maxim', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Olga', budget: 3800}
] */

/* //console.log(cars)
cars.push('Porshe') // добавить в конец массива
console.log(cars)

cars.unshift('Renault') // добавить в началов массива

cars.shift() // удаляет первый элемент и возвращает, можно задать в переменную
cars.pop() //удаляет последний элемент и возвращает, можно задать в переменную */


//console.log(cars.reverse()) //переворачивает массив в обратном порядке

//задача 1

/* const text = 'Привет, мы изучаем JavaScript'
const revertext = text.split('').reverse().join('') // join метод соединяет элементы массива в строчку
console.log(revertext)
 */


/* let findPerson
for (const person of people){
    //console.log(person)
    if (person.budget===3800){
        findPerson=person
    }
}
console.log(findPerson) */


//со стрелочной функцией - ЛЯМБДА ФУНКЦИЯ
/* const person=people.find((person)=> {
    return person.budget===4200
})
console.log(person) */
//со стрелочной функцией - ЛЯМБДА ФУНКЦИЯ
/* const person=people.find(person=>person.budget===4200)
console.log(person)
 */


//const index = cars.indexOf('BMW')
/* const index = people.findIndex(function(person){
    return person.budget===3800
})
console.log(people[index]) */

//ПРОВЕРКА НАЛИЧИЯ ЭЛЕМЕНТА
/* console.log(cars.includes('Mazda'))

const upperCasCars=cars.map(car=>{
    return car.toUpperCase()
})
const pow2fib=fib.map(num=>num**2)
console.log(pow2fib)
console.log(upperCasCars)
console(cars) */

//
const people =[
    {name: 'Maxim', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Olga', budget: 3800}
]
//people.reduce(function(acc,person){},0)
//преобразование в стрелочную функцию
// ниже запись не верная, но рабочая
/* const allBudget = people.reduce((acc,person)=> {
    if (person.budget>3500){
        acc+=person.budget
    }
    
    return acc
},0)
console.log(allBudget) */

//код писать так - ченинг
const allBudget=people.filter(person => person.budget > 3500).reduce((acc,person) =>{
    acc+=person.budget
    return acc
},0)
console.log(allBudget)