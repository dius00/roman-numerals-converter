const { expect } = require("chai");
const RomanConverter = require("../roman-num-converter.js");

describe("roman-num-converter", function () {
  describe("RomanConverter.fromRoman", function () {
  it("Should throw an error if not a string input", () => {
    const validString = 'MMXX';
    const notString = 2;
    expect(() => RomanConverter.fromRoman(notString)).to.throw();
    expect(() => RomanConverter.fromRoman(validString)).to.not.throw();
  });

  it("Should throw an error if an empty string is given", () => {
    const invalidString = '';
    expect(() => RomanConverter.fromRoman(invalidString)).to.throw();
  });

  it("Should throw an error for non standard large numbers", () => {
    const invalidString = 'MMMM';
    expect(() => RomanConverter.fromRoman(invalidString)).to.throw();
  });

  it("Should throw an error if it contains invalid chars", () => {
    const invalidString = 'K';
    expect(() => RomanConverter.fromRoman(invalidString)).to.throw();
  });

  // it("Should throw an error if a sequence is invalid", () => {
  //   const invalidString = 'VX';
  //   expect(() => RomanConverter.fromRoman(invalidString)).to.throw();
  // });
  it("Should return the correct number", () => {
    const testOne = "I";
    const testTwo = "MCMXCIX";
    const testThree = 'MCDLXXV';
    expect(RomanConverter.fromRoman(testOne)).to.equal(1);
    expect(RomanConverter.fromRoman(testTwo)).to.equal(1999);
    expect(RomanConverter.fromRoman(testThree)).to.equal(1475);
  });
});

  describe("RomanConverter.toRoman", function () {
    it("Should throw an error if not a number", () => {
      const validNum = 5;
      const invalidNum = 'throw';
      expect(() => RomanConverter.toRoman(invalidNum)).to.throw();
      expect(() => RomanConverter.toRoman(validNum)).to.not.throw();
    });
  
    it("Should throw an error if number out of range (negative)", () => {
      const invalidNum = -1;
      expect(() => RomanConverter.toRoman(invalidNum)).to.throw();
    });
    it("Should return a custom string if number out of range (positive)", () => {
      const invalidNum = 5000;
      expect(RomanConverter.toRoman(invalidNum)).to.eql("The writing of number above 3999 was never standardized, and it is not a currently supported feature, read more on https://en.wikipedia.org/wiki/Roman_numerals#Large_numbers");
    });
  
    it("Should throw an error for a non integer numer", () => {
      const invalidNumOne = 4.7;
      expect(() => RomanConverter.toRoman(invalidNumOne)).to.throw();    });
  
    it("Should return a cutrom string if 0 is passed", () => {
      const zero = 0;
      const response = RomanConverter.toRoman(zero);
      expect(response).to.eql("Nulla. The romans did not have a letter representation of the number 0 (zero), read more on https://en.wikipedia.org/wiki/Roman_numerals#Zero");
    });
  
    it("Should return the correct number", () => {
      const testOne = 1;
      const testTwo = 1999;
      const testThree = 1475;
      expect(RomanConverter.toRoman(testOne)).to.eql("I");
      expect(RomanConverter.toRoman(testTwo)).to.eql("MCMXCIX");
      expect(RomanConverter.toRoman(testThree)).to.eql("MCDLXXV");
    });
  });
});