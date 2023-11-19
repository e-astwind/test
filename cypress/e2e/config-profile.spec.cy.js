describe("Valida alterações no perfil", () => {

    it("Testa validacao de dados vazios", () => {
        editProfileFormWithoutData();
    });

    it("Testa validacao alterando apenas um dado", () => {
        editProfileOneField();
    });

    it("Testa validacao alterando todos os dados", () => {
        editProfileAllFields();
    });

    function editProfileFormWithoutData() {
        cy.visit("https://epi-assure.netlify.app/perfil/info-perfil");

        cy.get("button[type='submit']").click();
        cy.wait(1000);

        cy.on('window:alert', (str) => {
            expect(str).to.include('Por favor, preencha todos os campos.');
        });
    }

    function editProfileOneField() {
        cy.visit("https://epi-assure.netlify.app/perfil/info-perfil");

        cy.get("input[placeholder='Nome Completo ou Social']").type("Teste Alterando Nome");
        cy.get("button[type='submit']").click();
        cy.wait(1000);

        cy.on('window:alert', (str) => {
            let errorAlert = str.includes("Por favor, preencha todos os campos.");
            expect(errorAlert).to.equal(false);
        });
    }

    function editProfileAllFields() {
        cy.visit("https://epi-assure.netlify.app/perfil/info-perfil");

        cy.get("input[placeholder='Nome Completo ou Social']").type("Teste Alterando Nome");
        cy.get("input[placeholder^='Email de Contato do']").type("Teste Alterando Email");

        cy.get("button[type='submit']").click();
        cy.wait(1000);

        cy.on('window:alert', (str) => {
            let validMessage = str.includes("Em breve o nome do usu") && str.includes("redefinido!");
            expect(validMessage).to.equal(true);
        });
    }
});