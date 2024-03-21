// let complete = false;
function createPromise(a, b) {
  return (promise = new Promise(function (resolve, reject) {
    console.log("fetching data plase wait");
    var c = a / b;
    setTimeout(() => {
      if ((a, b)) {
        resolve(`Your answer: ${c}`);
      } else {
        reject("failed to calculate");
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
createPromise(5, 0)
  .then((result) => {
    console.log(result);
  })
  .catch(() => {
    console.log(error);
  });
