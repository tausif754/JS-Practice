function autori(str) {
  let n = str.length;
  let answer = "";
  for (let i = 0; i < n; i++) {
    let value = str.charCodeAt(i);
    if (value >= 65 && value <= 90) {
      answer = answer + str[i];
    }
  }
  return answer;
}
let result = autori("Tausif Ahmad");
console.log(result);
