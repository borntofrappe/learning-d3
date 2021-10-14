const fs = require("fs");
const readline = require("readline");
const { copyFilesSync } = require("./utils");
const { updateFilesSync } = require("./utils");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const defaultAnswer = "D3 Practice";
rl.question(
  `Let me set up a starter folder.\nDo you have a name in mind? (default: "${defaultAnswer}") `,
  (answer) => {
    const input = "data-viz-starter";
    if (answer === input) {
      console.log(`Name matches starter folder ${input}.`);
      console.log("\nFolder not created.");
    } else {
      const output = answer || defaultAnswer;

      if (!fs.existsSync(output)) {
        fs.mkdirSync(output);
        copyFilesSync(input, output);
        updateFilesSync(
          [
            `${output}/index.html`,
            `${output}/README.md`,
            `${output}/script.js`,
          ],
          input,
          output
        );
        rl.close();
      } else {
        console.log(`'${output}' folder already exits.`);
        rl.question(`Override the contents of ${output}? (Y/N) `, (answer) => {
          if (answer.toUpperCase() === "Y") {
            copyFilesSync(input, output);
            updateFilesSync(
              [
                `${output}/index.html`,
                `${output}/README.md`,
                `${output}/script.js`,
              ],
              input,
              output
            );
          } else {
            console.log("\nFolder not created.");
          }
          rl.close();
        });
      }
    }
  }
);
