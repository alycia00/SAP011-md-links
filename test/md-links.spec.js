const { mdLinks } = require('../index.js');


describe('mdLinks', () => {

  it('é uma função', () => {
    expect(typeof mdLinks).toBe('function');
    
  });

  it('é esperado um array de objetos sem validaçao, com validate falso', () => {
   return mdLinks('./test/files/oneFile.md', {validate: false}).then(links => {
      expect(links).toStrictEqual([{text: 'Path', href:'https://nodejs.org/api/path.html', file: './test/files/oneFile.md'},
      {text: 'Path', href:'https://nodejs.org/api/path.htmlaaa', file: './test/files/oneFile.md'}]);

    })
    
  });
  it('é esperado um array de objetos com validaçao, com validate true', () => {
   return mdLinks('./test/files/oneFile.md', {validate: true}).then(links => {
      expect(links).toStrictEqual([{text: 'Path', href:'https://nodejs.org/api/path.html', file: './test/files/oneFile.md', ok: "OK", status: 200},
      {text: 'Path', href:'https://nodejs.org/api/path.htmlaaa', file: './test/files/oneFile.md', falhou: "falha", status: 404}]);

    })
    
  });

});
