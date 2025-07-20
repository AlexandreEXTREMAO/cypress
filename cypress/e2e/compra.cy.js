describe('Compra de todos os produtos', () => {

    it('Compra de todos os produtos concluido', () => {

        cy.loginUserPadrão('standard_user', 'secret_sauce')

        cy.get('.inventory_list .inventory_item').then(($items) => {
            const size = $items.length;
            cy.adicionarTodosProdutosAoCarrinho(size);
        })

        cy.preencherFormularioPedido('Alexandre', 'Matheus', '63100-190')

        // Finalizando a compra
        cy.get('.btn_action').click()

        // testando a url de finalização
        cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-complete.html')

    })

})

describe('Compra de um produto aleatório', () => {
    it('Compra um produto aleatório concluido', () => {

        cy.loginUserPadrão('standard_user', 'secret_sauce')

        // obtendo quantidade total de produtos e sorteando para adicionar ao carrinho
        cy.get('.inventory_list .inventory_item').then(($items) => {
            const size = $items.length;
            cy.adicionarProdutoAleatorioAoCarrinho(size);
        })

        cy.preencherFormularioPedido('Alexandre', 'Matheus', '63100-190')

        // Finalizando a compra
        cy.get('.btn_action').click()

        // testando a url de finalização
        cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-complete.html')

    })

})

describe('Compra de varios produtos aleatórios', () => {
    it('Compra dos produtos aleatórios concluido', () => {

        cy.loginUserPadrão('standard_user', 'secret_sauce')

        // obtendo quantidade total de produtos e sorteando para adicionar ao carrinho
        cy.get('.inventory_list .inventory_item').then(($items) => {
            const size = $items.length;
            cy.adicionarProdutosAleatoriosAoCarrinho(size);
        })

        cy.preencherFormularioPedido('Alexandre', 'Matheus', '63100-190')

        // Finalizando a compra
        cy.get('.btn_action').click()

        // testando a url de finalização
        cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-complete.html')

    })

})

