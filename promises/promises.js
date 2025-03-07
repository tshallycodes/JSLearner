// Promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    "I promise to return a value"

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH 

// 1. Walk the Dog

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogwalked = true;
            if (dogwalked) {
                resolve("You walk the dog");
            }
            else {
                reject("You didn't walk the dog")
            }
        }, 1500)
    })

}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;

            if (kitchenCleaned) {
                resolve("You clean the kitchen");
            }
            else{
                reject("You didn't clean the kitchen")
            }
        }, 500);
    })

};

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const taketrashout = true;
            if (taketrashout){
            resolve("You take out the trash");
            }
            else{
                reject("You didn't take trash out")
            }
        }, 500);
    })

};


walkDog().then(value => { console.log(value); return (cleanKitchen) })
    .then(value => { console.log(value); return takeOutTrash() })
    .then(value => { console.log(value); console.log("You have finished your chores") }).catch(error => console.error(error));



// Callback Hell
// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => {
//             console.log("You finished all chores")
//         });
//     });
// });
