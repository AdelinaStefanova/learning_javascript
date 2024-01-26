var assert = require('assert'); // var = let
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
        it("check name", function () {
            let arrName = ['Nadya', "Stoyan", "Tsvety", "Stoyan", "Ani", "Milena", "Velko"];
            for (let i = 0; i < arrName.length; i++) {

                if (i == "Stoyan") {
                    continue;
                }
            }
        })
        it("name check", function () {
            let firstName = ["Adi", "Velko", "Nadya", "Stoyan"];
            assert.equal("Velko", firstName[1]);
        });
    });
});


describe("Equal value check", function () {

    it("check value", function () {
        let a = true;
        assert.equal(a, true, "will return false if not equal");
    });

    it("strict equal check", function () {
        let x = 5;
        let y = 5;
        assert.strictEqual(x, y, "will return false if not strict equal  === ");
    });
});

describe("counter check", function () {
    let b = 0;
    it("check if b is 5", function () {
        for (let i = 0; i < 5; i++) {
            b++;
        }
        assert.equal(b, 5, "will return err");

    })


});



