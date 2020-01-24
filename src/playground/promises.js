const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Andrew',
        //     age: 41
        // });
        reject('Something went wrong');
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log('1',data.name);
}).catch((error) => {
    console.log('error: ', error)
});


console.log('after');