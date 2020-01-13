// Object destructuring

// const person = {
//     name: 'Si',
//     age: 39,
//     location: {
//         city: 'Wellington',
//         temp: '12'
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;
// const { temp: temperature, city } = person.location;

// console.log(`${firstName} is ${age}.`);
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-published' } = book.publisher;

// console.log(publisherName); 


// Array destructuring

// const address = ['29 Branscombe St', 'Wellington', 'WGTN', '6011'];
// const [, city, region = 'WGTN'] = address;
// console.log(`You are in ${city}, ${region}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [product, smallPrice, mediumPrice, largePrice] = item;

console.log(`A medium ${product} costs ${mediumPrice}`);