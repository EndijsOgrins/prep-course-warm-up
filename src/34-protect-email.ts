export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */

const protectEmail = (email: string) => {
  const atIndex = email.indexOf("@");
  const username = email.substring(0, atIndex);
  const domain = email.substring(atIndex);

  let protectedUsername = "";

  if (username.length <= 3) {
    protectedUsername = "...";
  } else if (username.length === 4) {
    protectedUsername = username[0] + "...";
  } else {
    protectedUsername = username.substring(0, 3) + "...";
  }

  return protectedUsername + domain;
};

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail("12345@example.com")); // Expected result: 12...@example.com
console.log(protectEmail("12@example.com")); // Expected result: ...@example.com
