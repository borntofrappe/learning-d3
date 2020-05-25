const fs = require('fs');

const input = 'data-viz-starter';
const output = 'data-viz';

if (!fs.existsSync(output)) {
  fs.mkdirSync(output);
  console.log(`Copying the contents of ${input} to ${output}`);
  const files = fs.readdirSync(input);
  for (const file of files) {
    fs.copyFileSync(`${input}/${file}`, `${output}/${file}`);
  }
  console.log(`**All done**.`);
} else {
  console.log(`**${output}** folder already exits.`);
}
