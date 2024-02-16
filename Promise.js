// let complete = false;
function createPromise(complete) {
  return (promise = new Promise(function (resolve, reject) {
    console.log("fetching data plase wait");
    setTimeout(() => {
      if (complete) {
        resolve("I am successfull");
      } else {
        reject("I am failed");
      }
    }, 1000);
  }));
}
// console.log(promise(true));
let onFulfilment = (result) => {
  console.log(result);
};

let onRejection = (error) => {
  console.log(error);
};
createPromise(true).then(onFulfilment).catch(onRejection);
