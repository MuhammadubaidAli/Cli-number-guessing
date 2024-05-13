#!usr/bin/env/node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 7 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessnumber",
        type: "number",
        message: "Please guess a number 1 _to_ 6?",
    }
]);
console.log(answers);
if (answers.userguessnumber === randomNumber) {
    console.log("Congratulation`s ,you select right number");
}
else {
    console.log("Eat almond");
}
