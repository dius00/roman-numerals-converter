# roman-numerals-converter

# A simple package to convert from Roman Numerals and back

- RomanConverter.toRoman converts an integer to a Roman numeral
- RomanConverter.fromRoman converts a Roman numeral to an integer

```jsx
const RomanConverter = require('roman-num-converter');

// examples
console.log(RomanConverter.toRoman(3105));     // MMMCV
console.log(RomanConverter.fromRoman("MMXX")); // 2020

// edge case
console.log(RomanConverter.toRoman(0)); 
//Nulla. The romans did not have a letter representation of the number 0 (zero),
//read more on https://en.wikipedia.org/wiki/Roman_numerals#Zero

// errors
console.log(RomanConverter.fromRoman("K"));     // invalid string
console.log(RomanConverter.toRoman(4000));      // The writing of number above 3999 was never standardized, and it is not a currently supported feature, read more on https://en.wikipedia.org/wiki/Roman_numerals#Large_numbers

```
