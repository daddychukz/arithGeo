'use strict';

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Arith-Geo", function () {
    describe("Empty array", function () {
        it("should return 0 as aritGeo for []", function () {
            _chai.assert.equal((0, _app2.default)([]), 0);
        });
    });

    describe("Array of length=2", function () {
        it("should return Array length not sufficient as aritGeo for [2,4]", function () {
            _chai.assert.equal((0, _app2.default)([2, 4]), "Array length not sufficient");
        });
    });

    describe("Array string input", function () {
        it("should return False Value as aritGeo for string input ", function () {
            _chai.assert.equal((0, _app2.default)("string"), "False Value");
        });
    });

    describe("Neither arithmetic nor geometric", function () {
        it("should return -1 as aritGeo for [2,3,5,8,10] input ", function () {
            _chai.assert.equal((0, _app2.default)([2, 3, 5, 8, 10]), -1);
        });
    });

    describe("Arithmetic Progression", function () {
        it("should return arithmetic as aritGeo for [1,2,3,4,5]", function () {
            _chai.assert.equal((0, _app2.default)([1, 2, 3, 4]), "Arithmetic");
        });
    });

    describe("Arithmetic Progression", function () {
        it("should return arithmetic as aritGeo for [20,22,24,26,28,30]", function () {
            _chai.assert.equal((0, _app2.default)([20, 22, 24, 26, 28, 30]), "Arithmetic");
        });
    });

    describe("Arithmetic Progression", function () {
        it("should return arithmetic as aritGeo for [1,2,3,4,5,6,7,8,9,10]", function () {
            _chai.assert.equal((0, _app2.default)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), "Arithmetic");
        });
    });

    describe("Arithmetic Progression", function () {
        it("should return arithmetic as aritGeo for [3,4,5,6,7,8,9]", function () {
            _chai.assert.equal((0, _app2.default)([3, 4, 5, 6, 7, 8, 9]), "Arithmetic");
        });
    });

    describe("Geometric Progression", function () {
        it("should return geometric as aritGeo for [1/2, 1/4, 1/8, 1/16]", function () {
            _chai.assert.equal((0, _app2.default)([1 / 2, 1 / 4, 1 / 8, 1 / 16]), "Geometric");
        });
    });

    describe("Geometric Progression", function () {
        it("should return geometric as aritGeo for [10, 30, 90, 270, 810]", function () {
            _chai.assert.equal((0, _app2.default)([10, 30, 90, 270, 810]), "Geometric");
        });
    });
});