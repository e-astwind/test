describe("Logar e realizar checkins", () => {

    it("Realizar Login", () => {
        cy.visit("https://epi-assure.netlify.app");
        handleUserLogin();
    });

    it("Validar permissão à câmera", () => {
        cy.visit("https://epi-assure.netlify.app/usuario/home");
        cy.wait(1500);

        handleCameraAccess();
    })

    it("Realizar checkin", () => {
        cy.visit("https://epi-assure.netlify.app/usuario/home");
        handleCheckin();
    });

    function handleCameraAccess() {
        let foundAlert = false;
        cy.on('window:alert', (str) => {
            if (str.includes('Não foi possível acessar a câmera')) {
                cy.log('Alerta inesperado: ' + str);
                foundAlert = true;
            }
        });

        expect(foundAlert).to.equal(false);
    }

    function handleUserLogin() {
        cy.contains("Entrar").click();
        cy.wait(500);
        cy.contains("Entrar como Usuário", { timeout: 5000 }).click();
        cy.wait(500);
    }

    function handleCheckin() {
        cy.contains("Capacete").click();
        cy.wait(500);
        cy.contains("Luvas").click();
        cy.wait(500);
        cy.contains("Óculos de Proteção").click();
        cy.wait(500);
        cy.contains("Botas").click();
        cy.wait(500);
        cy.contains("Colete").click();
        cy.wait(500);
        cy.contains("Fita").click();
        cy.wait(500);
        cy.contains("Máscara").click();
        cy.scrollTo(0, 500);
        cy.wait(500);
        cy.contains("Cone").click();
        cy.wait(500);
        cy.contains("Termo de veracidade das informações prestada").click();
        cy.wait(500);
        cy.contains("Confirmar").click();

        cy.on('window:alert', (str) => {
            expect(str).to.include('Dados enviados!');
            return false;
        });
    }
});
