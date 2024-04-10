let myPromise = new Promise(function(myResolve, myReject) {
    //Producing code
    myResolve(); // when successful
    myReject(); // when error
});

// Consuming Code

myPromise.then(
    function(value) {/*code if successful*/},
    function(error) {/*code if some error */}
);

/* 
A JavaScript Promise object can be:

    Pending
    Fulfilled
    Rejected

The Promise object supports two properties: 
    state
    result

    myPromise.state	    myPromise.result
        "pending"	        undefined
        "fulfilled"	        a result value
        "rejected"	        an error object


You cannot access the Promise properties state and result.
You must use a Promise method to handle promises.


*/