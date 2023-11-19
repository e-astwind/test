Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
describe("Checar se da para acessar todos os itens do estudos", () => {
  it("Entrar na página de estudos", () => {
    cy.visit("https://epi-assure.netlify.app/usuario/home");

    cy.contains("Estudos").click();
    cy.wait(1000);
    cy.get("div.icone:nth-child(2)").click();
    cy.wait(800);

    cy.contains("Capacete").click();
    cy.wait(1500);
    cy.go(-1);
    cy.wait(800);
    cy.contains("Luvas").click();
    cy.wait(1500);
    cy.go(-1);
    cy.wait(800);
    cy.contains("culos de Prote").click();
    cy.wait(1500);
    cy.go(-1);
    cy.wait(800);
    cy.contains("Botas").click();
    cy.wait(1500);
    cy.go(-1);
    cy.wait(800);
    cy.contains("Colete").click();
    cy.wait(1500);
    cy.go(-1);
    cy.wait(800);
    cy.contains("Cones").click();
    cy.wait(1500);
    cy.go(-1);
    cy.wait(800);
    cy.contains("Fita").click();
    cy.wait(1500);
    cy.go(-1);
    cy.wait(800);
    cy.contains("scaras").click();
    cy.wait(1500);
    cy.go(-1);
    cy.wait(800);
  });
});
