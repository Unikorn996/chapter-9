//
// A trivial example of automated testing with Jest.
//

const { square } = require("./math");

test("can square two", () => {
    const mockMultiply = (a, b) => {
        return 4;
    };

    const result = square(2, mockMultiply);
    expect(result).toBe(4);
});
