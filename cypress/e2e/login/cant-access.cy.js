/// <reference types="cypress" />

const FACKE_USER_MOCK = {
  user: "joan",
  password: "deGirona",
};

const ERROR_TEXT = "Username or password is incorrect";

describe("Sample Login. Can't access", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("user can't access to the app and go to Login page", () => {
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/login");
      expect(location.search).to.eq("?returnUrl=%2F");
    });

    cy.get('input[name="username"]');
    cy.get('input[name="password"]');
  });

  it("user can't access to the app with incorrect credentials", () => {
    cy.get('input[name="username"]').type(`${FACKE_USER_MOCK.user}`);
    cy.get('input[name="password"]').type(`${FACKE_USER_MOCK.password}{enter}`);
    cy.contains(ERROR_TEXT);
  });
});
