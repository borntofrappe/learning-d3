const fs = require('fs');

const copyFilesSync = (input, output) => {
  const files = fs.readdirSync(input);
  console.log(`Copying the contents of '${input}' to '${output}'`);
  for (const file of files) {
    fs.copyFileSync(`${input}/${file}`, `${output}/${file}`);
  }
  console.log(`\n**All done**`);
};

const updateFilesSync = (files, searchValue, replaceValue) => {
  for (const file of files) {
    const content = fs.readFileSync(file, { encoding: 'utf-8' });
    fs.writeFileSync(file, content.replace(searchValue, replaceValue), {
      encoding: 'utf-8',
    });
  }
};

module.exports = {
  copyFilesSync,
  updateFilesSync,
};
