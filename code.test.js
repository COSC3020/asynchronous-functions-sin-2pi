const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

let tests = [];
let cases = [];
let keys = [];

tests[0] = [0];
cases[0] = 1;
keys[0] = 0;

tests[1] = [1,5,3,2,4];
cases[1] = 1;
keys[1] = 5;

tests[2] = [3,1,4,6,4,3,4,7,3];
cases[2] = 3;
keys[2] = 3;

tests[3] = [4,7,2,5,8,2,4,6,5,2,3,-5];
cases[3] = 1;
keys[3] = -5;

tests[4] = [1,3,2,7,8];
cases[4] = 0;
keys[4] = 5;


async function test() {
    const promises = tests.map((test, index) => findMatches(test, keys[index]));
    return Promise.all(promises);
}

test().then(results => {
        for (let i = 0; i < results.length; i++) {
        assert.equal(results[i], cases[i]);
        }
    }).catch(err => {
    console.error("Error:", err);
});
