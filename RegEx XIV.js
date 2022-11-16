/**
 * @link-problem-solving https://edabit.com/challenge/7KbZc8QvzqrJPaE6Q
 */



const REGEXP1 = /blue flag|red flag/;
let string1 = "pink flag red flag black flag blue flag green flag red flag ",
    string2 = "yellow flag red flag blue flag green flag",
    string3 = "red flag blue flag",
    string4 = "blue flag red flag red flag blue flag green flag red flag";

function regEx(string, REGEXP){
    let match = 0, result = [], index = 0 ;
    while(match !== null){
        string = string.slice(index);   
        match =  string.match(REGEXP);
        if (match === null ) break;
        result.push(match[0]);
        index = match['index']+1;
    }
    return result;
}

console.log(regEx(string1, REGEXP1)); // ['red flag', 'blue flag', 'red flag']
console.log(regEx(string2, REGEXP1)); // ['red flag', 'blue flag']
console.log(regEx(string3, REGEXP1)); // ['red flag', 'blue flag']
console.log(regEx(string4, REGEXP1)); // ['red flag', 'blue flag']
