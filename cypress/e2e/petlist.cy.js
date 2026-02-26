describe('Pet List Page - Veterinaria App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pets')
  })

  it('should display page title', () => {
    cy.contains('h1', 'Mis Mascotas ')
  })

  it('should show at least 2 pet cards', () => {

    cy.get('div').filter((index, element) => {
      return element.innerText.includes('Especie:') || 
             element.innerText.includes('Raza:')
    }).should('have.length.at.least', 2)
  })

  it('should display first pet (Roco) information', () => {
    cy.contains('Roco')
    cy.contains('Especie: Perro')
    cy.contains('Raza: Labrador')
    cy.contains('Edad: 5 años')
  })

  it('should display second pet (Mishi) information', () => {
    cy.contains('Mishi')
    cy.contains('Especie: Gato')
    cy.contains('Raza: Siamés')
    cy.contains('Edad: 3 años')
  })

  it('should navigate to pet profile when clicking pet details link', () => {

    cy.contains('Ver perfil').first().click()
    cy.url().should('match', /\/pet\/\d+$/)
    cy.contains('Volver a Mis Mascotas')
  })
})