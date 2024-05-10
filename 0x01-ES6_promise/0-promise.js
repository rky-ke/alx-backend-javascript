function getResponseFromAPI() {
    const myPromise = new Promise((resolve, reject) => {
        // Perform an asynchronous operation, such as fetching data from a server
        // If the operation is successful, call the resolve function with the result
        // If there's an error, call the reject function with an error object
      
        // Example of a successful operation:
        // Simulating a successful operation after a timeout
        setTimeout(() => {
          resolve('Operation successful'); // Resolving with a success message
        }, 2000); // Resolving after 2 seconds (2000 milliseconds)
      
        // Example of an operation that fails:
        // Simulating an error after a timeout
        // setTimeout(() => {
        //   reject(new Error('Operation failed')); // Rejecting with an error object
        // }, 2000); // Rejecting after 2 seconds (2000 milliseconds)
      });
      
      // Consuming the Promise using the then and catch methods
      myPromise
        .then((result) => {
          // The success handler function, executed if the Promise is resolved successfully
          console.log('Success:', result);
        })
        .catch((error) => {
          // The error handler function, executed if the Promise is rejected
          console.error('Error:', error);
        });
      
}