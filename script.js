import { existsSync, mkdirSync, writeFileSync } from "fs";
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const defaultAnswer = "D3 Practice";
rl.question(
  `Let me set up a starter folder.\nDo you have a name in mind? (default: "${defaultAnswer}") `,
  (answer) => {
    const output = answer || defaultAnswer;

    if (existsSync(output)) {
      console.log(`\n"${output}" folder already exits.`);
      rl.question(`Override the contents of "${output}"? (y/n) `, (answer) => {
        if (answer.toUpperCase() === "Y") {
          setupStarterFolder({ folder: output });
        } else {
          console.log(
            `\nEnd of starter project.\n"${output}" is not replaced with a new folder.`
          );
        }
        rl.close();
      });
    } else {
      setupStarterFolder({ folder: output });
      rl.close();
    }
  }
);

const html = ({ title }) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="icon" href="../icon.png" />
  </head>
  <body>
    <script src="https://unpkg.com/d3@7.6.1/dist/d3.min.js"></script>
    <script src="script.js"></script>
  </body>
</html>
`;

const css = () => `* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background: hsl(0, 0%, 97%);
  color: hsl(0, 0%, 7%);
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui,
    helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
}
`;

const js = ({ title }) => `const div = d3.select("body").append("div");
div.append("h1").text("${title}");
`;

const md = ({ title }) => `# ${title}

data_viz_goal

## data_viz_notes
`;

const setupStarterFolder = ({ folder }) => {
  if (!existsSync(folder)) {
    mkdirSync(folder);
  }

  for (const [file, fn] of [
    ["index.html", html],
    ["style.css", css],
    ["script.js", js],
    ["README.md", md],
  ]) {
    writeFileSync(`${folder}/${file}`, fn({ title: folder }), {
      encoding: "utf-8",
    });
  }

  console.log(`\nEnd of starter project.\n"${folder}" is all set up.`);
};
