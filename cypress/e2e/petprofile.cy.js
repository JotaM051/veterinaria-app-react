describe('Pet Profile Page - Veterinaria App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pet/1')
  })

  it('should display pet name and species', () => {
    cy.contains('Roco')
    cy.contains('Perro')
  })

  it('should show summary tab by default', () => {
    cy.contains('Resumen')
    cy.contains('Nombre:')
    cy.contains('Especie: Perro')
    cy.contains('Raza: Labrador')
    cy.contains('Edad: 5 años')
  })

  it('should switch to Vaccines tab', () => {
    cy.contains('Vacunas').click()
    cy.contains('Historial de Vacunas')
    cy.contains('Rabia')
    cy.contains('Parvovirus')
  })

  it('should switch to Appointments tab', () => {
    cy.contains('Consultas').click()
    cy.contains('Historial de Consultas')
    cy.contains('Control anual')
    cy.contains('Dr. Rodríguez')
  })

  it('should have back link to pets list', () => {
    cy.contains('← Volver a Mis Mascotas').click()
    cy.url().should('include', '/pets')
    cy.contains('Mis Mascotas 🐾')
  })
})