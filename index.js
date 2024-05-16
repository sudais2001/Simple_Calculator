#! /usr/bin/env node
import inquirer from "inquirer";
const ans = await inquirer.prompt([{
        type: "number",
        name: "first_number",
        message: "Enter you first number: "
    },
    {
        type: "number",
        name: "second_number",
        message: "Enter you second number: "
    },
    {
        type: "list",
        name: "operator",
        message: "please select opration type: ",
        choices: ["Addition", "Subraction", "Multiplication", "Dvision"]
    }
]);
if (ans.operator === "Addition") {
    console.log(ans.first_number + ans.second_number);
}
else if (ans.operator === "Subraction") {
    console.log(ans.first_number - ans.second_number);
}
else if (ans.operator === "Multiplication") {
    console.log(ans.first_number * ans.second_number);
}
else {
    console.log(ans.first_number / ans.second_number);
}
