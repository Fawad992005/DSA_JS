let s = "ab##";
let t = "c#d#";

function backspacecompare(s, t) {
  splittedS = s.split("");
  splittedT = t.split("");
  let asnwerS = [];
  let asnwerT = [];
  for (let i = 0; i < splittedS.length; i++) {
    if (splittedS[i] === "#") {
      if (asnwerS.length === 0) {
        continue;
      } else {
        asnwerS.pop();
      }
    } else {
      asnwerS.push(splittedS[i]);
    }
  }
  for (let i = 0; i < splittedT.length; i++) {
    if (splittedT[i] === "#") {
      if (asnwerT.length === 0) {
        continue;
      } else {
        asnwerT.pop();
      }
    } else {
      asnwerT.push(splittedT[i]);
    }
  }
  console.log(asnwerS, asnwerT);
  if (asnwerS.join("") === asnwerT.join("")) {
    return true;
  }
  return false;
}
console.log(backspacecompare(s, t));
