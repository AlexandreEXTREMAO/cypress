describe('login',() => {

    it('Realizar login com sucesso', () => {
        // Arrange
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // Act
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
            
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

        cy.get('.oxd-button').click()

        cy.title().should('eq', 'OrangeHRM')

        // Assert
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    })
})