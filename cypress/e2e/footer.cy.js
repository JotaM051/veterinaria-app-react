describe('Footer - Veterinaria App', () => {
  it('should display footer on Home page', () => {
    cy.visit('http://localhost:3000')
    cy.get('footer').should('be.visible')
    cy.contains('© 2026 Veterinaria Web. Todos los derechos reservados.')
    cy.contains('Facebook')
    cy.contains('Instagram')
    cy.contains('Twitter')
  })

  it('should display footer on Pets page', () => {
    cy.visit('http://localhost:3000/pets')
    cy.get('footer').should('be.visible')
    cy.contains('© 2026 Veterinaria Web')
  })

  it('should display footer on Pet Profile page', () => {
    cy.visit('http://localhost:3000/pet/1')
    cy.get('footer').should('be.visible')
    cy.contains('© 2026 Veterinaria Web')
  })

  it('should display footer on Client Profile page', () => {
    cy.visit('http://localhost:3000/profile')
    cy.get('footer').should('be.visible')
    cy.contains('© 2026 Veterinaria Web')
  })

  it('should have social media links (simulated)', () => {
    cy.visit('http://localhost:3000')
    cy.get('footer a').should('exist').and('have.length.at.least', 3)
  })
})