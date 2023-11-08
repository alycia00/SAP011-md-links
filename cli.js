// aqui vai ficar toda manipulaçao de console
const { soma, lerArquivo } = require('./index.js');
const chalk = require('chalk'); // "css"
const resultado = soma(5, 8);

console.log(chalk.bgBlue("o resultado da soma é: "), chalk.blue(resultado));

lerArquivo('./test/files/oneFile.md')
.then((conteudodoArquivo) =>{
    console.log(chalk.bgGray(conteudodoArquivo))  // chamando o arquivo oneFile mas como uma promisse <=
});