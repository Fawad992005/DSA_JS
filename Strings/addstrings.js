function addStrings(num1, num2) {
    // Pad the shorter string with leading zeros
    if (num2.length > num1.length) {
        let zerosToAdd = num2.length - num1.length;
        num1 = '0'.repeat(zerosToAdd) + num1;
    } else if (num1.length > num2.length) {
        let zerosToAdd = num1.length - num2.length;
        num2 = '0'.repeat(zerosToAdd) + num2;
    }

    let result = '';
    let carry = 0;
    let len = num1.length;

    for (let i = len - 1; i >= 0; i--) {
        let sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
        result = (sum % 10) + result; // Add the digit to the result
        carry = Math.floor(sum / 10); // Update carry
    }

    // If there's any carry left, prepend it
    if (carry > 0) {
        result = carry + result;
    }

    return result;
}

let num1 = "11";
let num2 = "123";
console.log(addStrings(num1, num2)); // Output: "134"
