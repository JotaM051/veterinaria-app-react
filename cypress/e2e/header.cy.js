describe('Header Navigation - Veterinaria App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should display logo and navigation links', () => {
    cy.get('header').should('be.visible')
    cy.get('header').contains('🐾 Veterinaria Web')
    cy.get('header').contains('Home')
    cy.get('header').contains('Mis Mascotas')
    cy.get('header').contains('Mi Perfil')
  })

  it('should navigate to Home when clicking logo', () => {
    cy.get('header a').contains('🐾 Veterinaria Web').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.contains('Bienvenido, Ana Pérez')
  })

  it('should navigate to Pets page from header', () => {
    cy.get('header').contains('Mis Mascotas').click()
    cy.url().should('include', '/pets')
    cy.contains('Mis Mascotas 🐾')
  })

  it('should navigate to Profile page from header', () => {
    cy.get('header').contains('Mi Perfil').click()
    cy.url().should('include', '/profile')
    cy.contains('Mi Perfil 👤')
  })

  it('should be visible on all pages', () => {
    const pages = ['/', '/pets', '/pet/1', '/profile']
    
    pages.forEach(page => {
      cy.visit(`http://localhost:3000${page}`)
      cy.get('header').should('be.visible')
    })
  })
})