function reverseArray(arr) {
  let n = arr.length;
  let i = 0;
  let j = n - 1;

  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}

function reverseWords(str) {
  //split the string into an array of word
  // let words = str.split(" ");
  let arr = str.split(" ");

  //reverse the order of words in an array
  // words.reverse();
  reverseArray(arr);
  //join the array back into the string
  return arr.join(" ");
}
let result = reverseWords("My name is Tausif");
console.log(result);
