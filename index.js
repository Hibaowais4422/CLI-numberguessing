#! /usr/bin/env node
import inquirer from "inquirer";
const Number = Math.floor(Math.random() * 9 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: " Guess a Number between  1 to 9",
    },
]);
if (answer.userGuessNumber === Number) {
    console.log("Congratulation You just guessed the correct one!");
}
else {
    console.log("incorrect number : Try Again");
}
;
if (answer.userGuessNumber != Number) {
    console.log(`correct answer was ${Number}`);
}
;
// let again= await inquirer.prompt([
//     {
//         message: "Again guessed a number: ",
//         name:"userAgain" ,
//         type:  "list",
//         choices:["yes","No"],
//     },
// ]);
// if( again.again==="Yes"){
//     console.log(answer.userGuessNumber===Number);
// }
// else{
//     console.log("Good bye!");
// }
