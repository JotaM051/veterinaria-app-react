describe('Home Page - Veterinaria App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should display welcome message with client name', () => {
    cy.contains('Bienvenido, Ana Pérez!')
  })

  it('should show pets summary card', () => {
    cy.contains('Mascotas Registradas')
    cy.contains('2')
  })

  it('should show next appointment card', () => {
    cy.contains('Próxima Cita')
    cy.contains('20 Feb 2025')
    cy.contains('Control anual – Dr. Rodríguez')
  })

  it('should have working navigation buttons', () => {

    cy.contains('Mis Mascotas').click()
    cy.url().should('include', '/pets')
    

    cy.visit('http://localhost:3000')
    

    cy.contains(/Mi Perfil\s*/).click()
    cy.url().should('include', '/profile')
  })

  it('should display header and footer', () => {
    cy.get('header').should('be.visible')
    cy.get('footer').should('be.visible')
    cy.contains('© 2026 Veterinaria Web')
  })
})