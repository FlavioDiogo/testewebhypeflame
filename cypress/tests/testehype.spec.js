/// <reference types="cypress" />

import artigos from '../support/pages/index'

describe('Realizar pesquisa de artigos', () => {
    it('Dado que esteja na home do blog', () => {
      cy.visit('/')
      cy.url().should('contains', 'hypeflame.blog')
    });
    it('Quando ir na busca e pesquisar pelo artigo', () => {
      artigos.buscarArtigo()
    });
  it('Então deverá retornar os artigos referente à categgoria pesquisada', () => {
    cy.url().should('contains', 'agilidade')
  });
})
