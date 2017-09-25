import aritGeo from '../test';
import { assert } from 'chai';

describe("Arith-Geo", function(){
    describe("handle valid input", function(){
        it("should return arithmetic as aritGeo for [1,2,3,4,5]", function(){
            assert.equal(aritGeo([1,2,3,4]), "Arithmetic");
        });
    })

    describe("handle valid input", function(){
        it("should return arithmetic as aritGeo for [20,22,24,26,28,30]", function(){
            assert.equal(aritGeo([20,22,24,26,28,30]), "Arithmetic");
        });
    })

    describe("handle valid input", function(){
        it("should return arithmetic as aritGeo for [1,2,3,4,5,6,7,8,9,10]", function(){
            assert.equal(aritGeo([1,2,3,4,5,6,7,8,9,10]), "Arithmetic");
        });
    })

    describe("handle valid input", function(){
        it("should return arithmetic as aritGeo for [3,4,5,6,7,8,9]", function(){
            assert.equal(aritGeo([3,4,5,6,7,8,9]), "Arithmetic");
        });
    })

    describe("handle valid input", function(){
        it("should return geometric as aritGeo for [1/2, 1/4, 1/8, 1/16]", function(){
            assert.equal(aritGeo([1/2, 1/4, 1/8, 1/16]), "Geometric");
        });
    })

    describe("handle valid input", function(){
        it("should return geometric as aritGeo for [10, 30, 90, 270, 810]", function(){
            assert.equal(aritGeo([10, 30, 90, 270, 810]), "Geometric");
        });
    })

    describe("handle invalid input", function(){
        it("should return 0 as aritGeo for []", function(){
            assert.equal(aritGeo([]), 0);
        });
    })

    describe("handle invalid input", function(){
        it("should return Array length not sufficient as aritGeo for [2,4]", function(){
            assert.equal(aritGeo([2,4]), "Array length not sufficient");
        });
    })


})