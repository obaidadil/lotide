const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("#countOnly", () => {
    const firstNames = [
        "Karl",
        "Salima",
        "Agouhanna",
        "Fang",
        "Kavith",
        "Jason",
        "Salima",
        "Fang",
        "Joe"
      ];
    //   const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
    it("returns {'Jason': 1} for {'Jason': true}", () => {
        assert.deepEqual(countOnly(firstNames, {"Jason": true}), {"Jason": 1});
    });
    it("returns {} for {'Karima': true}", () => {
        assert.deepEqual(countOnly(firstNames, {"Karima": true}), {});
    });
    it("returns {'Fang': 2} for {'Fang': true}", () => {
        assert.deepEqual(countOnly(firstNames, {"Fang": true}), {"Fang": 2});
    });
});