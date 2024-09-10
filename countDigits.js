function countDigits(n) {
  let count = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    count++;
    n = Math.floor(n / 10);
  }

  return count;
}

console.log(countDigits(2312312312));
