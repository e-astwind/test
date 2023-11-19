describe("Logar e realizar checkins", () => {
  before(() => {
    // Configuração inicial, como definir o tamanho da viewport e visitar a página
    cy.viewport(412, 915);
    cy.visit("https://epi-assure.netlify.app/");
    cy.wait(1500);
  });

  it("Realizar login como usuário e realizar checkin", () => {
    handleUserLogin();
    handleCheckin();
  });

  function handleUserLogin() {
    cy.contains("Entrar").click();
    cy.wait(1500);
    cy.contains("Entrar como Usuário", { timeout: 15000 }).click();
    cy.wait(1500);
  }

  function handleCheckin() {
    cy.contains("Capacete").click();
    cy.wait(1500);
    cy.contains("Luvas").click();
    cy.wait(1500);
    cy.contains("Óculos de Proteção").click();
    cy.wait(1500);
    cy.contains("Botas").click();
    cy.wait(1500);
    cy.contains("Colete").click();
    cy.wait(1500);
    cy.contains("Fita").click();
    cy.wait(1500);
    cy.contains("Máscara").click();
    cy.scrollTo(0, 500);
    cy.wait(1500);
    cy.contains("Cone").click();
    cy.wait(1500);
    cy.contains("Termo de veracidade das informações prestada").click();
    cy.wait(1500);
    cy.contains("Confirmar").click();
  }
});
