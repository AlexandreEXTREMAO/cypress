describe('login',() => {

    it('Realizando o preenchimento das informações de contato', () => {
        
        // Visitando o site
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // Executando login com credenciais válidas
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
            
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

        cy.get('.oxd-button').click()

        cy.title().should('eq', 'OrangeHRM')

        // Verificando se foi redirecionado para a página correta
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click()
        cy.get(':nth-child(1) > .orangehrm-tabs-item').click()

        //Preenchendo as minhas informações de contato
        cy.get(':nth-child(2) > .orangehrm-tabs-item').click();
        cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Rua Almirante Alexandrino');
        cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Rua Almirante Alexandrino 2');
        cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Fortaleza - CE');
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Ceará');
        cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('63100-999');
        cy.get('label').contains('Country').parent().parent().find('.oxd-select-text').click();
        cy.contains('.oxd-select-option', 'Brazil').click();

       
                
    })

})