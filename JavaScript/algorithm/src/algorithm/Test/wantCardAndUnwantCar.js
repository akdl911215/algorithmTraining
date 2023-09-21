function factorial(x) {
  let result = 1;
  for (let i = 1; i <= x; i++) {
    result *= i;
  }

  return result;
}

const C72ver1 = factorial(7);
const C72ver2 = factorial(2) * factorial(5);
const C72 = C72ver1 / C72ver2;

const C211ver1 = factorial(21);
const C211ver2 = factorial(1) * factorial(20);
const C211 = C211ver1 / C211ver2;

const C283ver1 = factorial(28);
const C283ver2 = factorial(3) * factorial(25);
const C283 = C283ver1 / C283ver2;

const wantCard = (C72 * C211) / C283;

const C70ver1 = factorial(7);
const C70ver2 = factorial(0) * factorial(7);
const C70 = C70ver1 / C70ver2;

const C213ver1 = factorial(21);
const C213ver2 = factorial(3) * factorial(18);
const C213 = C213ver1 / C213ver2;

const unwantCard = (C70 * C213) / C283;

const result = wantCard * wantCard * unwantCard;
console.log(result * 100);
