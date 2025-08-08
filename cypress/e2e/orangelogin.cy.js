describe('login',() => {

    it('Realizando login com credenciais válidas', () => {
        
        // Testando a responsividade usando smartphones
        cy.viewport("iphone-x")
        // Visitando o site
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // Executando login com credenciais válidas
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
            
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

        cy.get('.oxd-button').click()

        cy.title().should('eq', 'OrangeHRM')

        // Verificando se foi redirecionado para a página correta
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    })

    it('Realizando login com credenciais inválidas', () => {
        
        // Visitando o site
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // Executando login com credenciais válidas
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Alexandre')
            
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

        cy.get('.oxd-button').click()

        cy.title().should('eq', 'OrangeHRM')

        cy.get('.oxd-alert-content > .oxd-text').should('contain.text','Invalid credentials')

    })

})