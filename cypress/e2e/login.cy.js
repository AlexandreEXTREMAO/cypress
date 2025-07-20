describe('login valido',() => {

    it('login com sucesso', () => {
        // Arrange
        cy.visit('https://www.saucedemo.com/v1/index.html')

        // Act
        cy.get('[data-test="username"]').type('standard_user')
            
        cy.get('[data-test="password"]').type('secret_sauce')

        cy.get('#login-button').click()

        // Assert
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
    })

})

describe('login invalido',() => {

    it('login invalidado com sucesso', () => {
        // Arrange
        cy.visit('https://www.saucedemo.com/v1/index.html')
        
        // Act
        cy.get('[data-test="username"]').type('Alexandre')
            
        cy.get('[data-test="password"]').type('123456')

        cy.get('#login-button').click()

        // Assert
        cy.get('[data-test="error"]')
        .should(
            'contain.text',
            'Username and password do not match any user in this service'
        )

        cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html')
    })

})

describe('login bloqueado',() => {

    it('login bloqueado com sucesso', () => {
        // Arrange
        cy.visit('https://www.saucedemo.com/v1/index.html')

        // Act
        cy.get('[data-test="username"]').type('locked_out_user')
            
        cy.get('[data-test="password"]').type('secret_sauce')

        cy.get('#login-button').click()

        // Assert
        cy.get('[data-test="error"]')
            .should(
                'contain.text',
                'Sorry, this user has been locked out.'
            )

        cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html')
    })

})