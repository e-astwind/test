describe("Realizar esqueceu a senha e validar código", () => {

    it("Ir para página esqueceu a senha", () => {
        proccessForgotPassword();
        validateVerificationCode();
    });

    it("Validar código de verificação", () => {
        //
    })

    function proccessForgotPassword() {
        cy.visit("https://epi-assure.netlify.app/mudar-senha/recuperar-senha");
        cy.get("[placeholder='Nome Completo']").type('nometeste');
        cy.get("[placeholder='Email Corporativo']").type('testeemial');

        cy.contains("Enviar").click();

        cy.wait(3000);
    }
    function validateVerificationCode() {
        cy.get("form > input").type('examplecode');
        cy.contains("Enviar").click();

        cy.wait(3000);
        cy.get("#texto > h4").should('contain', 'digo validado!');
    }
});