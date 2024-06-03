#! usr/bin/env node
import inquirer from "inquirer";
console.log("=".repeat(30), "TypeScript Quiz", "=".repeat(30));
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1.What are the three main 'simple types' in TypeScript?",
        choices: ["A. Object,Array,Symbol", "B. Boolean,Number,String", "C. Array,Object,Boolean", "D. Object,String,Number"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2.What type of assignment is this variable, `const fullName: string = 'Areeb Malik';`?",
        choices: ["A. Implict", "B. Explict"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3.True or False: TypeScript can always correctly infer a variables type",
        choices: ["A. True", "B. False"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4.You can disable implicit variable type assignment by enabling the compiler option:",
        choices: ["A. Implict = FALSE", "B. noAutoType", "C. noImplictAny", "D. autoTypeAssigment = FALSE"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5.You can enable 'undefined' and 'null' types to be accounted for by enabling the compiler property:",
        choices: ["A. noFalseyInits", "B. strictNullChecks", "C. noAutoType", "D. strictChequesRequired"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "B. Boolean,Number,String":
        console.log("1. Correct");
        ++score;
        break;
    default:
        console.log("1. Incorrect");
}
switch (quiz.question_2) {
    case "B. Explict":
        console.log("2. Correct");
        ++score;
        break;
    default:
        console.log("2. Incorrect");
}
switch (quiz.question_3) {
    case "B. False":
        console.log("3. Correct");
        ++score;
        break;
    default:
        console.log("3. Incorrect");
}
switch (quiz.question_4) {
    case "C. noImplictAny":
        console.log("4. Correct");
        ++score;
        break;
    default:
        console.log("4. Incorrect");
}
switch (quiz.question_5) {
    case "B. strictNullChecks":
        console.log("5. Correct");
        ++score;
        break;
    default:
        console.log("5. Incorrect");
}
console.log(`Score: ${score}`);
