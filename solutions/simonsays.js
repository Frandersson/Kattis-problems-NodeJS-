const readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    if (isNaN(line)) {
        if (line.substring(0, 11) == "simon says ") {
            console.log(line.substring(11));
        } else {
            console.log("\n");
        }
    }
})