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

    
})