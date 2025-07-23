Cypress.Commands.add('loginUserPadrão', (username, password) => {
    cy.visit('https://www.saucedemo.com/v1/index.html')

    cy.get('[data-test="username"]').type(username)

    cy.get('[data-test="password"]').type(password)

    cy.get('#login-button').click()

    // Verifica se o login foi bem-sucedido
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
})

Cypress.Commands.add('loginInvalido', (username, password) => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain.text', 'Username and password do not match any user in this service')
    cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html')
})

Cypress.Commands.add('loginUsuarioBloqueado', (username, password) => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain.text', 'Sorry, this user has been locked out.')
    cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html')
})

Cypress.Commands.add('adicionarTodosProdutosAoCarrinho', (size) => {
    for (let i = 1; i <= size; i++) {
        cy.get(`:nth-child(${i}) > .pricebar > .btn_primary`).click()
    }
    cy.get('#shopping_cart_container').click()
})

Cypress.Commands.add('preencherFormularioPedido', (firstName, lastName, postalCode) => {
    cy.get('.btn_action').click()
    cy.get('[data-test="firstName"]').clear().type(firstName)
    cy.get('[data-test="lastName"]').clear().type(lastName)
    cy.get('[data-test="postalCode"]').clear().type(postalCode)
    cy.get('.btn_primary').click()
})

Cypress.Commands.add('adicionarProdutoAleatorioAoCarrinho', (size) => {
    const randomNumber = Math.floor(Math.random() * size) + 1;

    cy.get(`:nth-child(${randomNumber}) > .pricebar > .btn_primary`).click();

    cy.log(`🔔 === ID do produto adicionado: ${randomNumber}`);

    cy.get('.shopping_cart_badge')
        .should('be.visible')
        .and('have.text', '1');

    cy.get('#shopping_cart_container').click();
});

Cypress.Commands.add('adicionarProdutosAleatoriosAoCarrinho', (size) => {
    const randomNumber = Math.floor(Math.random() * (size - 1)) + 2;
    const addedProducts = [];

    for (let i = 0; i < randomNumber; i++) {
        const productIndex = Math.floor(Math.random() * 6) + 1;
        if (!addedProducts.includes(productIndex)) {
            cy.get(`:nth-child(${productIndex}) > .pricebar > .btn_primary`).click();
            addedProducts.push(productIndex);
        }
    }

    cy.get('.shopping_cart_badge')
        .should('be.visible')
        .and('have.text', addedProducts.length.toString());

    cy.log(`🔔 === IDs dos Produtos adicionados: ${addedProducts.join(', ')}`);

    cy.get('#shopping_cart_container').click();
});