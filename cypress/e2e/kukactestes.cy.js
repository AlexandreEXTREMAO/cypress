describe('Carrinho', () => {
    it('Visitando site testes kukac', () =>{

        // Testando em outros dispositivos
        cy.viewport('ipad-2')

        // Visitando site
        cy.visit('https://kanban-dusky-five.vercel.app/')

        // Alterando cor de fundo
        cy.get('.react-switch-bg').click().click();

        // Adicionando quadros
        cy.get('.sc-jqUVSM > .custom-input > p').click();
        cy.get('.sc-gsnTZi').click().type('Test');
        cy.get('.btn').click();
        cy.get('.sc-jqUVSM > .custom-input > p').click();
        cy.get('.sc-gsnTZi').click().type('Teste');
        cy.get('.btn').click();
        cy.get('.sc-jqUVSM > .custom-input > p').click();
        cy.get('.sc-gsnTZi').click().type('Teste1');
        cy.get('.btn').click();

        // Adicionando tarefas
        cy.get('#TestCreateTask > .custom-input > p').click();
        cy.get('.sc-gsnTZi').type('Teste');
        cy.get('.btn').click();

})
    })

//describe('Kanban App - Testes Básicos', () => {
    //beforeEach(() => {
        //cy.visit('https://kanban-dusky-five.vercel.app/')
        //})

    //it('Deve abrir o site e mostrar o botão para adicionar lista', () => {
        //cy.contains('Adicionar outra lista').should('be.visible')
        //})

    //it('Deve criar uma nova lista', () => {
       //cy.contains('Adicionar outra lista').click()
        //cy.get('input').type('Minha Lista{enter}')
        //cy.contains('Minha Lista').should('exist')
  //})
//})



