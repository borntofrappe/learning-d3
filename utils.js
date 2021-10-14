import { readdirSync, readFileSync, copyFileSync, writeFileSync } from "fs";

export const copyFilesSync = (input, output) => {
  const files = readdirSync(input);
  console.log(`Copying the contents of '${input}' to '${output}'`);
  for (const file of files) {
    copyFileSync(`${input}/${file}`, `${output}/${file}`);
  }
  console.log(`\n**All done**`);
};

export const updateFilesSync = (files, searchValue, replaceValue) => {
  for (const file of files) {
    const content = readFileSync(file, { encoding: "utf-8" });
    writeFileSync(file, content.replace(searchValue, replaceValue), {
      encoding: "utf-8",
    });
  }
};
