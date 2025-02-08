let str = "fun!!& time";
function longestword(str) {
  let wordlength = 0;
  let longword;
  const regex = /^[a-zA-Z]+$/;
  const onlyLetters = str.split(" ").filter((str) => regex.test(str));
  for (let i = 0; i < onlyLetters.length; i++) {
    if (onlyLetters[i].length > wordlength) {
      wordlength = onlyLetters[i].length;
      longword = onlyLetters[i];
    }
  }
  return longword;
}
console.log(longestword(str));
