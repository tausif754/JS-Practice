// let complete = false;
function promise(complete) {
  return (promise = new Promise(function (resolve, reject) {
    if (complete) {
      resolve("I am successfull");
    } else {
      reject("I am failed");
    }
  }));
}

console.log(promise(true));
