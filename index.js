// exemplo do video da Naroka:
  const { rejects } = require("assert");
  const fs = require("fs") // biblioteca do node

  function soma (a, b){
    return a + b
  }
  
  function lerArquivo(caminhoDoArquivo) {
    return new Promise(function(resolve, reject) {  // criando uma promise. <= essa é a estrutura 
    fs.readFile(caminhoDoArquivo, "utf8", (err, data) =>  {  // readFile é uma funçao assincrona
      if(err) reject();
      resolve(data)
    });
  });
}
module.exports = { soma, lerArquivo };
