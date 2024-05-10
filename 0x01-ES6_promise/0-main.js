import getResponseFromAPI from "./0-promise.js";

const repsonse = getResponseFromAPI();
console.log(response instanceof Promise);
