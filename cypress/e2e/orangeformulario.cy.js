describe('login',() => {

    it('Realizando login com credenciais válidas', () => {
        
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

        //Preenchendo as minhas informações
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().click().type('Alexandre');
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().click().type('Matheus');
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().click().type('Brito');
        cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().click().type('01');
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().click().type('001');
        cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().click().type('123456789');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().click().type('1997-05-18');
        cy.get('label').contains('Nationality').parent().parent().find('.oxd-select-text').click();
        cy.contains('.oxd-select-dropdown .oxd-select-option', 'Portuguese').scrollIntoView().click();
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().click().type('1990-05-18');
        cy.contains('label', 'Blood Type').scrollIntoView().parent().parent().find('.oxd-select-text').click();
        cy.contains('.oxd-select-dropdown .oxd-select-option', 'O+').scrollIntoView().click();
        cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().click().type('185');
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click();
        
    })

})