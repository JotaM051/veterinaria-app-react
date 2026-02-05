describe('Client Profile Page - Veterinaria App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/profile')
  })

  it('should display page title', () => {
    cy.contains('h1', 'Mi Perfil 👤')
  })

  it('should show client information', () => {
    cy.get('input[name="name"]').should('have.value', 'Ana Pérez')
    cy.get('input[name="email"]').should('have.value', 'ana@email.com')
    cy.get('input[name="phone"]').should('have.value', '+506 8888-8888')
  })

  it('should enable edit mode when clicking edit button', () => {
    cy.contains('✏️ Editar Perfil').click()
    cy.get('input[name="name"]').should('not.be.disabled')
    cy.get('input[name="email"]').should('not.be.disabled')
    cy.get('input[name="phone"]').should('not.be.disabled')
  })

  it('should save changes successfully', () => {
    cy.contains('✏️ Editar Perfil').click()
    
    cy.get('input[name="name"]').clear().type('Juan Pérez Updated')
    cy.get('input[name="email"]').clear().type('juan@email.com')
    
    cy.contains('💾 Guardar Cambios').click()
    
    cy.contains('¡Cambios guardados exitosamente!', { timeout: 5000 })
    cy.get('input[name="name"]').should('have.value', 'Juan Pérez Updated')
  })

  it('should cancel editing without saving', () => {
    cy.contains('✏️ Editar Perfil').click()
    
    const originalName = 'Ana Pérez'
    cy.get('input[name="name"]').clear().type('Temporary Change')
    
    cy.contains('❌ Cancelar').click()
    
    cy.get('input[name="name"]').should('have.value', originalName)
  })
})