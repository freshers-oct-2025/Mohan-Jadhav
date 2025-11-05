/* let myPromise = new Promise((resolve, reject) => {
  console.log("Promise start");

  setTimeout(() => {
    let success = true; // change to false to see rejection

    if (success) {
      resolve("Data fetched successfully after 2 seconds!");
    } else {
      reject("Failed to fetch data!");
    }
  }, 2000);
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
 */




let p1 = Promise.resolve("p1 resolved immediately");

let p2 = new Promise((resolve) =>
    setTimeout(() => resolve("p2 resolved after 2s"), 2000));

let p3 = new Promise((reject) =>
    setTimeout(() => reject("p3 rejected after 1s"), 1000));


// Promise.all:-Waits for all promises to be fulfilled.
Promise.all([p1, p2])
    .then((res) => console.log("Promise.all →", res))
    .catch((err) => console.log("Promise.all →", err));

// Promise.allSettled :-Waits for all promises (success or fail).
Promise.allSettled([p1, p2, p3])
    .then((res) => console.log("Promise.allSettled →", res));

//Promise.race :-Returns result of first promise that finishes (fulfilled or rejected).
Promise.race([p2, p3])
    .then((res) => console.log("Promise.race →", res))
    .catch((err) => console.log("Promise.race →", err));

//Promise.any:-Returns result of first fulfilled promise
Promise.any([p3, p2])
    .then((res) => console.log("Promise.any →", res))
    .catch((err) => console.log("Promise.any →", err));

