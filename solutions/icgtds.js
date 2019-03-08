const readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var n = null;
var ln = 0;
var dataIn = [];
var dataOut = [];


rl.on('line', line => {
    // End of test-case
    if (ln == n) {
        if (checkQueue(dataIn, dataOut)) {
            console.log("queue");
        } else if (checkPQueue(dataIn, dataOut)) {
            console.log("priority queue");
        } else if (checkStack(dataIn, dataOut)) {
            console.log("stack");
        }
        
        dataIn = [];
        dataOut = [];
        ln = 0;
        //rl.close();
    }

    if (line.length == 1) {
        n = parseInt(line);
        console.log("h")
    } else {
        var cmd = line.split(' ');
        if (parseInt(cmd[0]) == 1) {

            dataIn.push(parseInt(cmd[1]));

        } else if (parseInt(cmd[0]) == 2) {

            dataOut.push(parseInt(cmd[1]));

        }
    }
    ln++;

    function checkQueue(dataIn, dataOut) {
        var toCompare = dataIn;
        if (dataIn.length > dataOut.length) toCompare = dataOut;

        for (let i = 0; i < toCompare.length; i++) {
            if (dataIn[i] !== dataOut[i]) return false;
        }
        return true;
    }

    function checkPQueue(dataIn, dataOut) {
        var toCompare = dataIn;
        if (dataIn.length > dataOut.length) toCompare = dataOut;
        dataIn.sort((a, b) => {return a < b});

        for (let i = 0; i < toCompare.length; i++) {
            if (dataIn[i] !== dataOut[i]) return false;
        }
        return true;
    }

    function checkStack(dataIn, dataOut) {
        var toCompare = dataIn;
        var reversed = dataIn.reverse();
        var other = dataOut;
        if (dataIn.length > dataOut.length) {
            toCompare = dataOut;
            reversed = dataOut.reverse();
            other = dataIn;
        } 
        
        for (let i = 0; i < toCompare.length; i++) {
            if (reversed[i] !== other[i]) return false;
        }
        return true;
    }
});

rl.on('close', line => {
    console.log(dataIn);
    console.log(dataOut);
});