// 'bdd' stands for "browser driven development"
// var mocha = mocha.setup('bdd');
var assert = require("chai").assert;
var expect = require("chai").expect;
// var should = require("should").should();
var query = require("../assets/js/app");

console.log("test directory loaded");

describe("String Test", function() {
	it("should return number of characters in a string", function() {
		expect(query).to.equal(5);
		// assert.equal("query".length, 5);
	});

	it("should return the first character of the string", function() {
		expect(query).charAt(0).to.equal("q");
		// assert.equal("query".charAt(0), 'q');
	});
});


