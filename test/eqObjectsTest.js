const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
    const ab = { a: "1", b: "2" }; [["a", "1"], ["b", "2"]]
    const ba = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    it("returns true for eqObjects(ab, ba)", () => {
        assert.isTrue(eqObjects(ab, ba));
    });
    it("returns false for eqObjects(ab, abc)", () => {
        assert.isFalse(eqObjects(ab, abc));
    });
    it("returns true for eqObjects(cd, dc)", () => {
        assert.isTrue(eqObjects(cd, dc));
    });
    it("returns false for eqObjects(cd, cd2)", () => {
        assert.isFalse(eqObjects(cd, cd2));
    });
});