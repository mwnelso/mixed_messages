//console.log('Knock Knock...');
//let ans = prompt('Knock Knock...');
/*
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const recursiveReadline = func => {
    readline.question("", func(answer) {
        
    })
}


let answer;

readline.question('Knock Knock... ', (ans) => {
    //console.log(`${ans}!`);
    if (ans == "Who's there?"){
        answer = "A little old lady. ";
        readline.close();
    }
    console.log(answer)
});
*/

var readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const joke1 = ['Knock Knock... ', 'A little old lady. ', 'Hey, you can yodel!'];
const joke2 = ['Knock Knock... ', 'Euripides. ', 'Euripides clothes, you pay for them!'];
const joke3 = ['Knock Knock... ', 'Snow ', 'Snow use. The joke is over. '];

const jokes = [joke1, joke2, joke3];

function recursiveAsyncReadLine(iterate, joke) {
    rl.question(joke[iterate], ans => {
        if (iterate == 2) { //we need some base case, for recursion
            console.log("*Ba dum tss* I'll be here all week!");
            return rl.close(); //closing RL and returning from function.
        }
        
        iterate++;
        recursiveAsyncReadLine(iterate, joke); //Calling this function again to ask new question
  });
};

let count = 0;
recursiveAsyncReadLine(count, jokes[Math.floor(Math.random() * jokes.length)]); //we have to actually start our recursion somehow