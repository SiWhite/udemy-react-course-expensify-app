import * as firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyBtqx5_kn5s5gpT_qx9YM0zVHU9yHwYSIY",
    authDomain: "expensify-7a288.firebaseapp.com",
    databaseURL: "https://expensify-7a288.firebaseio.com",
    projectId: "expensify-7a288",
    storageBucket: "expensify-7a288.appspot.com",
    messagingSenderId: "1095147451842",
    appId: "1:1095147451842:web:95127588dbaece5ccbd25b",
    measurementId: "G-QS1LYSRPH5"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//child_changed 
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});


// const onExpenseChange = database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//      expenses.push({
//          id: childSnapshot.key,
//          ...childSnapshot.val()
//      })
//     })
//     console.log(expenses);
// }, (e) => {
//     console.log('Error with data fetching: ', e);
// });


// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//        const expenses = [];
//        snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//        })

//        console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'My first expense',
//     note: 'My first expense note',
//     amount: 1000,
//     createdAt: 476467567565
// });


// database.ref('notes/-LzJS6ajQQnv5odSTbNR').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'react native, etc, etc'
// });

// const onNameChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//     console.log('Error with data fetching: ', e);
// });


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching: ', e);
// });

// setTimeout(() => {
//     database.ref('age').set(44);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(45);
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching data', e)
//     })

// database.ref().set({
//     name: 'Simon White',
//     age: 41,
//     stressLevel: 6,
//     job: {
//         title: 'Developer',
//         company: 'Capiche'
//     },
//     location: {
//         city: 'Wellington',
//         country: 'New Zealand'
//     }
// }).then(() => {
//     console.log('data is saved!');
// }).catch((e) => {
//     console.log('This failed. ', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Brisbane'
// })

// database.ref().update({
//     job: 'Manager',
//     'location/city': 'Auckland'
// });

// database.ref().remove()
//   .then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message)
//   });