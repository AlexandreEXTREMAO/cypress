describe('Carrinho', () => {
    it.skip('Adicionar produto ao carrinho com sucesso', () =>{
        // Arrange
        cy.visit('https://www.saucedemo.com/v1/index.html')

        cy.get('[data-test="username"]').type('standard_user')
            
        cy.get('[data-test="password"]').type('secret_sauce')

        cy.get('#login-button').click()

        // Act
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()

        // Assert
        cy.get('.shopping_cart_badge')
        .should('be.visible')
        .and('have.text', '1')

        cy.get('#shopping_cart_container').click()

        cy.contains('Sauce Labs Backpack').should('be.visible')
    })

    it('Finalizando pedido no carrinho', () =>{

        // Logando no site com credencias válidas
        cy.visit('https://www.saucedemo.com/v1/index.html')

        cy.get('[data-test="username"]').type('standard_user')
            
        cy.get('[data-test="password"]').type('secret_sauce')

        cy.get('#login-button').click()

        // Colocando os produtos no carrinho
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(4) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(5) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(6) > .pricebar > .btn_primary').click()

        // Verificando se a quantidade de itens está correta no carrinho
        cy.get('.shopping_cart_badge')
        .should('be.visible')
        .and('have.text', '6')

        cy.get('#shopping_cart_container').click()

        cy.contains('Sauce Labs Backpack').should('be.visible')
        
        // Preenchendo o formulário do pedido
        cy.get('.btn_action').click()
        cy.get('[data-test="firstName"]').clear().type('Alexandre')
        cy.get('[data-test="lastName"]').clear().type('Matheus')
        cy.get('[data-test="postalCode"]').clear().type('63100-190')
        cy.get('.btn_primary').click()
        
        // Finalizando a compra
        cy.get('.btn_action').click()


    })

})