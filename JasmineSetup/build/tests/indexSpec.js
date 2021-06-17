"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
var strings_1 = __importDefault(require("../utilities/strings"));
var numbers_1 = __importDefault(require("../utilities/numbers"));
var arrays_1 = __importDefault(require("../utilities/arrays"));
var numArr = [3, 4, 5, 6];
var wordArr = ['cat', 'dog', 'rabbit', 'bird'];
it('should make a new array containing dog', function () {
    expect(index_1.default(3, wordArr)).toContain('dog');
});
it('make a new array containing 3', function () {
    expect(index_1.default(3, wordArr)).toContain(3);
});
it('should capitalize a string', function () {
    expect(strings_1.default.capitalize('a sentence')).toEqual('A Sentence');
});
it('should allow sentence to remain capitalized', function () {
    expect(strings_1.default.capitalize('A Sentence')).toEqual('A Sentence');
});
it('should be a sum greater than 10', function () {
    expect(numbers_1.default.sum(3, 10)).toBeGreaterThan(10);
});
it('should be a sum less than 10', function () {
    expect(numbers_1.default.sum(-3, 10)).toBeLessThan(10);
});
it('should multiply 3 by 5 and be 15', function () {
    expect(numbers_1.default.multiply(3, 5)).toBe(15);
});
it('should multiply 0 by 5 to be falsy', function () {
    expect(numbers_1.default.multiply(0, 5)).toBeFalsy();
});
it('should add numbers in array and be truthy', function () {
    expect(arrays_1.default.addArr(numArr)).toBeTruthy();
});
it('should add numbers in array and be 19', function () {
    expect(arrays_1.default.addArr(numArr)).toBe(19);
});
it('should concatinate 2 arrays to not equal the first', function () {
    expect(arrays_1.default.concatArr(numArr, wordArr)).not.toEqual(numArr);
});
it('should concatinate 2 arrays to not equal the second', function () {
    expect(arrays_1.default.concatArr(numArr, wordArr)).not.toEqual(wordArr);
});
it('should contain 3 items except rabbit', function () {
    expect(arrays_1.default.cut3(wordArr)).toEqual(['cat', 'dog', 'bird']);
});
it('should not contain the third index rabbit', function () {
    expect(arrays_1.default.cut3(wordArr)).not.toContain('rabbit');
});
it('should have 6 be largest number', function () {
    expect(arrays_1.default.lgNum(numArr)).toEqual(6);
});
it('should not have a large number and be falsy', function () {
    expect(arrays_1.default.lgNum(wordArr)).toBeFalsy();
});
