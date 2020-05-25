const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})


rl.question("What's the name of your project? ", (answer) => {
  const input = 'data-viz-starter';
  const output = answer || 'data-viz';
  
  const files = fs.readdirSync(input);

  if (!fs.existsSync(output)) {
    fs.mkdirSync(output);
    console.log(`Copying the contents of '${input}' to '${output}'`);
    for (const file of files) {
      fs.copyFileSync(`${input}/${file}`, `${output}/${file}`);
    }
    console.log(`\n**All done**`);
    rl.close();
  } else {
    console.log(`'${output}' folder already exits.`);
    rl.question(`Override contents of ${output}? (Y/N) `, (answer) => {
      if(answer.toUpperCase() === "Y") {
        for (const file of files) {
          fs.copyFileSync(`${input}/${file}`, `${output}/${file}`);
        }
        console.log(`\n**All done**`);
      } else {
        console.log("\nOkay, good luck.");
      }
      rl.close();
    });
  }
});

