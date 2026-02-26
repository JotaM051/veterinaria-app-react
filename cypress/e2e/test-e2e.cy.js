describe('Veterinaria App', () => {
  beforeEach(() => {
    cy.visit('/');  
  });

  it('debe mostrar el header', () => {
    cy.get('header').should('be.visible');
    cy.contains('Veterinaria Web').should('be.visible');
  });
});