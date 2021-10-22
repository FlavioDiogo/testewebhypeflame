const el = require ('./elements').buscaArtigo
 
class artigos {
    buscarArtigo(){
      cy.get(el.buscaArtigo).click()
      cy.get(el.digitarArtigo).type('agilidade')
      cy.get(el.enviarBusca).click()
    }

}
export default new artigos()