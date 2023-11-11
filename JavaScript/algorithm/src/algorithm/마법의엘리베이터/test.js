const Hangul = require("hangul-js");

const arr = Array.from(
  new Set(["개나리", "고구마", "고구마", "노가리", "개새뀌"])
)
  .map((value) => Hangul.disassemble(value))
  .filter((value) => "ㄱ" === value[0]);

console.log(arr);
