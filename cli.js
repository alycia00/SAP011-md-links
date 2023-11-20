//aqui vai ficar toda manipulaçao de console =>

const { mdLinks } = require("./index.js");
const chalk = require("chalk"); // "css"

const caminho = process.argv[2];

mdLinks(caminho)
  .then((links) => {
    links.forEach((link) => {
      console.log(
        chalk.bgBlue(link.text) +
          chalk.bgBlue('url:') +
          chalk.blue(link.url) +
          chalk.yellow('status')
      );
    });
  })
  .catch((err) => {
    console.error(chalk.red('Erro', err));
  });
