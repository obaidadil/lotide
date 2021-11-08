const assert = require("chai").assert;
const head = require("../flatten");

describe("#flatten", () => {
    it("returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] for [1, 2, [3, 4], 5, [6], [[7, 8], 9, 10]]", () => {
        assert.deepEqual(head([1, 2, [3, 4], 5, [6], [[7, 8], 9, 10]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});