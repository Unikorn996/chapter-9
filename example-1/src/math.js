//
// A trivial example function to demonstrate automated testing with Jest.
//

function square(n, multiply) {
    return multiply(n, n);
}

module.exports = {
    square,
};