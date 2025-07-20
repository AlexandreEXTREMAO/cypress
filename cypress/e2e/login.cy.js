describe('login valido',() => {

    it('login com sucesso', () => {
        cy.loginUserPadrão('standard_user', 'secret_sauce')
    })

})

describe('login invalido', () => {

    it('login invalidado com sucesso', () => {
        cy.loginInvalido('Alexandre', '123456')
    })

})

describe('login bloqueado',() => {

    it('login bloqueado com sucesso', () => {
        cy.loginUsuarioBloqueado('locked_out_user', 'secret_sauce')
    })

})