const readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var myMap = new Map();

rl.on('line', (line) => {
    if (line === "***") rl.close();
    
    if (myMap[line] == null) {
        myMap[line] = 1;
    } else {
        myMap[line]++;
    }
});

rl.on('close', (foo) => {
    var sortedNames = Object.keys(myMap).sort((a,b) => {return myMap[a] < myMap[b]});;

    if (myMap[sortedNames[0]] == myMap[sortedNames[1]]) {
        console.log("Runoff!");
    } else {
        let winner = sortedNames[0];
        console.log(winner);
    }
});
