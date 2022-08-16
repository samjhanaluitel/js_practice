// const items = [
//     { name: "rice", price: 5 },
//     { name: 'book', price: 20 },
//     { name: 'chicken', price: 10 },
//     { name: 'monitor', price: 100 }
// ]

// let totalprice = 0
// items.forEach(item => {
//     totalprice += item.price
// })


// const totalprice = items.reduce((total, item) => {
//     console.log(`total: ${total}`)
//     console.log(`item: ${item.price}`);
//     return total + item.price
// }, 0)


// console.log(totalprice);

// const people = [
//     { name: 'shyam', age: 26 },
//     { name: 'ram', age: 31 },
//     { name: 'hari', age: 42 },
//     { name: 'krishna', age: 42 }
// ]

// const result = people.reduce((groupedPeople, person) => {
//     const age = person.age
//     if (groupedPeople[age] == null) groupedPeople[age] = []
//     groupedPeople[age].push(person)
//     return groupedPeople

// }, {})
// console.log(result);

// const numbers = [13, 2, 5]

// const sum = numbers.reduce((total, number, index, array) => {
//     console.log(array);
//     console.log(index);
//     return total + number
// }, 0)

// console.log(sum);


