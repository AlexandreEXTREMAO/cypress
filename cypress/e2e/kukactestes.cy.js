describe('Carrinho', () => {
    it('Visitando site testes kukac', () =>{
        // Testando em outros dispositivos
        cy.viewport('ipad-2')
        // Visitando site
        cy.visit('https://kanban-dusky-five.vercel.app/')
        // Alterando cor de fundo
        cy.get('.react-switch-bg').click().click();

        cy.get('.sc-jqUVSM > .custom-input > p').click();
        cy.get('.sc-gsnTZi').click().type('Test');
        cy.get('.btn').click();

        cy.get('.sc-jqUVSM > .custom-input > p').click();
        cy.get('.sc-gsnTZi').click().type('Teste');
        cy.get('.btn').click();

        cy.get('.sc-jqUVSM > .custom-input > p').click();
        cy.get('.sc-gsnTZi').click().type('Teste1');
        cy.get('.btn').click();

    })
})