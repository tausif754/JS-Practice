function lowerUpper(ch) {
  let value = ch.charCodeAt(0);
  if (value >= 65 && value <= 90) {
    console.log("Upper case letter");
  } else {
    console.log("Lower case letter");
  }
}
lowerUpper("P");
