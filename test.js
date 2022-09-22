const reverseString = require('./reverseString');
const argv = process.argv.slice(2);

function test() {
    for (const arg of argv) {
        console.log('=====================');
        console.log(`Before: ${arg}`);
        console.log(`After : ${reverseString(arg)}`);
    }
}

test();
