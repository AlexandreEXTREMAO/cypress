describe('Compra de todos os produtos', () => {
    // it.skip('Adicionar produto ao carrinho com sucesso', () =>{
    //     // Arrange
    //     cy.visit('https://www.saucedemo.com/v1/index.html')

    //     cy.get('[data-test="username"]').type('standard_user')

    //     cy.get('[data-test="password"]').type('secret_sauce')

    //     cy.get('#login-button').click()

    //     // Act
    //     cy.get(':nth-child(1) > .pricebar > .btn_primary').click()

    //     // Assert
    //     cy.get('.shopping_cart_badge')
    //     .should('be.visible')
    //     .and('have.text', '1')

    //     cy.get('#shopping_cart_container').click()

    //     cy.contains('Sauce Labs Backpack').should('be.visible')
    // })

    it('Compra de todos os produtos concluido', () => {

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

        // testando a url de finalização
        cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-complete.html')


    })

})

describe('Compra de um produto aleatório', () => {
    it('Compra um produto aleatório concluido', () => {

        // Logando no site com credencias válidas
        cy.visit('https://www.saucedemo.com/v1/index.html')

        cy.get('[data-test="username"]').type('standard_user')

        cy.get('[data-test="password"]').type('secret_sauce')

        cy.get('#login-button').click()

        const randomNumber = Math.floor(Math.random() * 6) + 1;


        // Colocando os produtos no carrinho
        cy.get(`:nth-child(${randomNumber}) > .pricebar > .btn_primary`).click()

        cy.log(`🔔 === ID do produto adicionado: ${randomNumber}`);

        // Verificando se a quantidade de itens está correta no carrinho
        cy.get('.shopping_cart_badge')
            .should('be.visible')
            .and('have.text', '1')

        cy.get('#shopping_cart_container').click()

        // Preenchendo o formulário do pedido
        cy.get('.btn_action').click()
        cy.get('[data-test="firstName"]').clear().type('Alexandre')
        cy.get('[data-test="lastName"]').clear().type('Matheus')
        cy.get('[data-test="postalCode"]').clear().type('63100-190')
        cy.get('.btn_primary').click()

        // Finalizando a compra
        cy.get('.btn_action').click()

        // testando a url de finalização
        cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-complete.html')

    })

})

describe('Compra de varios produtos aleatórios', () => {
    it('Compra dos produtos aleatórios concluido', () => {

        // Logando no site com credencias válidas
        cy.visit('https://www.saucedemo.com/v1/index.html')

        cy.get('[data-test="username"]').type('standard_user')

        cy.get('[data-test="password"]').type('secret_sauce')

        cy.get('#login-button').click()

        const randomNumber = Math.floor(Math.random() * 5) + 2;
        const addedProducts = [];

        // Adicionando produtos aleatórios ao carrinho
        for (let i = 0; i < randomNumber; i++) {
            const productIndex = Math.floor(Math.random() * 6) + 1;
            // Verifica se o produto já foi adicionado
            if (!addedProducts.includes(productIndex)) {
                // Adiciona o produto ao carrinho
                cy.get(`:nth-child(${productIndex}) > .pricebar > .btn_primary`).click();
                addedProducts.push(productIndex);
            }
        }

        // Verificando se a quantidade de itens está correta no carrinho
        cy.get('.shopping_cart_badge')
            .should('be.visible')
            .and('have.text', addedProducts.length.toString())

        cy.log(`🔔 === IDs dos Produtos adicionados: ${addedProducts.join(', ')}`);

        cy.get('#shopping_cart_container').click()


        // Preenchendo o formulário do pedido
        cy.get('.btn_action').click()
        cy.get('[data-test="firstName"]').clear().type('Alexandre')
        cy.get('[data-test="lastName"]').clear().type('Matheus')
        cy.get('[data-test="postalCode"]').clear().type('63100-190')
        cy.get('.btn_primary').click()

        // Finalizando a compra
        cy.get('.btn_action').click()

        // testando a url de finalização
        cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-complete.html')

    })

})

