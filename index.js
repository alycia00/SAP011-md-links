// exemplo do video da Naroka:
const { rejects } = require("assert");
const fs = require("fs"); // biblioteca do node
const links = []

function mdLinks(caminhoDoArquivo) {
  return new Promise(function (resolve, reject) {
    fs.readFile(caminhoDoArquivo, "utf8", (err, data) => {
      if (err) {
        reject(err);
        console.error('Erro ao ler o arquivo:', err);
      } else {
         // ter um rejex pra pegar um padrao de link 
        const pattern = /\[([^\]]+)\]\((https?[^)]+)\)/g;      
        // pegar no data tudo que da matchall com o data
        const matches = data.matchAll(pattern);

        for (const match of matches) {
          const text = match[1];
          const url = match[2];
          links.push({ text, url });
        }

        console.log('Conteúdo do arquivo:', data);

        resolve(links);
      }
    });
  });
}

module.exports = { mdLinks };

