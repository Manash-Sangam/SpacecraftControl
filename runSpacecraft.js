//Import
const Spacecraft = require('./src/spaceCraft');
const executeCommands = require('./src/executecommands');

//New Spacecraft
const spacecraft = new Spacecraft(0, 0, 0, 'N');

//List of Commands
executecommandarray=['f', 'r', 'u', 'b', 'l'];

//Store result after executing commands
const result = executeCommands(spacecraft, executecommandarray);

//Result
console.log("After executing commands: ",executecommandarray);
console.log("Spacecraft is at position: ",result.finalPosition);
console.log("Spacecraft is facing direction: ",result.finalDirection);