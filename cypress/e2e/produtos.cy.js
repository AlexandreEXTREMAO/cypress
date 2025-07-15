describe('Testando botões',() => {

    it('Testando botões dos produtos', () => {
        // Visitando o site
        cy.visit('https://www.saucedemo.com/v1/index.html')

        // Fazendo login
        cy.get('[data-test="username"]').type('standard_user')
            
        cy.get('[data-test="password"]').type('secret_sauce')

        cy.get('#login-button').click()

        // Verificando caminho do site
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')

        // Adicionando produtos ao carrinho
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(4) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(5) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(6) > .pricebar > .btn_primary').click()

        // Verificando se estão com a quantidade correta no carrinho
        cy.get('.shopping_cart_badge')
        .should('be.visible')
        .and('have.text', '6')
    })

    it('Testando botões das redes sociais', () => {
        // Visitando o site
        cy.visit('https://www.saucedemo.com/v1/index.html')

        // Fazendo login
        cy.get('[data-test="username"]').type('standard_user')
            
        cy.get('[data-test="password"]').type('secret_sauce')

        cy.get('#login-button').click()

        // Verificando caminho do site
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')

        // Clicando nos botões das redes sociais
        cy.get('.social_twitter').click()
        cy.get('.social_facebook').click()
        cy.get('.social_linkedin').click()

})

})