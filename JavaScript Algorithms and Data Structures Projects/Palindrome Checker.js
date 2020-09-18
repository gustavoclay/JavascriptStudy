function palindrome(str) {
  return (
    str.replace(/[\W_]/g, "").toLowerCase() ===
    str
      .replace(/[\W_]/g, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  );
}

console.log(palindrome("eye"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("five|\_/|four"));
