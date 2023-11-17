// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    const success = false; // Simulate success or failure
  
    setTimeout(() => {
      if (success) {
        const data = "Promise resolved!";
        resolve(data); // Resolve the promise with data
      } else {
        const error = "Promise rejected!";
        reject(error); // Reject the promise with an error
      }
    }, 10000);
  });
  
  // Consuming the Promise using .then() and .catch()
  myPromise
    .then((result) => {
      console.log("Promise resolved with:", result);
    })
    .catch((error) => {
      console.error("Promise rejected with:", error);
      
    });