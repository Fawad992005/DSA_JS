function uniqueEmails(emails) {
  let mySet = new Set(); // To store unique email addresses

  for (let email of emails) {
    let [local, domain] = email.split("@"); // Split into local and domain
    local = local.split("+")[0]; // Ignore everything after '+'
    local = local.replace(/\./g, ""); // Remove all '.'
    console.log(local);

    let cleanedEmail = local + "@" + domain; // Reassemble the cleaned email
    mySet.add(cleanedEmail); // Add to the set
  }

  return mySet.size; // Return the number of unique emails
}

let emails = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
];

console.log(uniqueEmails(emails)); // Output should be 2
