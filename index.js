// exemplo do video da Naroka:
const { rejects } = require("assert");
const fs = require("fs"); // biblioteca do node


function mdLinks(caminhoDoArquivo, opçao) {
  return new Promise(function (resolve, reject) {
    fs.readFile(caminhoDoArquivo, "utf8", (err, data) => {
      if (err) reject(err);
         // ter um rejex pra pegar um padrao de link 
        const padraoLinks = /\[([^\]]+)\]\((https?[^)]+)\)/g; 
        let match;
        const links = []
while ((match = padraoLinks.exec(data)) !== null) {
links.push({
  text: match[1],
  href: match[2],
  file: caminhoDoArquivo
})
}     
        if(opçao.validate === false) {
          resolve(links);
        } else {
          const linksValidados = links.map(link => {
            return fetch(link.href).then( resposta => {
              link.status = resposta.status
              if(resposta.status >= 200 && resposta.status <= 299){
                link.ok = 'OK'
              }else{
                link.falhou = 'falha'
              }
              return link;
            } 

            ).catch(err => {
              link.falhou = 'falha'
              link.status = 'erro no link'
              return link
            })
          })
          resolve(Promise.all(linksValidados))
        }

    })
  })
}


module.exports = { mdLinks };


// quando digito node cli.js exibe o resultado daqui
// ja quando digito node cli.js README.md exibe da pasta cli tbm