/// <reference types="cypress" />

const USER_MOCK = {
  id: 1,
  username: "testing",
  password: "we-love-e2e",
  firstName: "Endtoend",
  lastName: "Testing",
};

describe("Sample Login. Can't access", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("user can access to the app", () => {
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/login");
      expect(location.search).to.eq("?returnUrl=%2F");
    });

    cy.get('input[name="username"]').type(`${USER_MOCK.username}`);
    cy.get('input[name="password"]').type(`${USER_MOCK.password}{enter}`);

    cy.location().should((location) => {
      expect(location.pathname).to.eq("/");
    });

    cy.contains(`${USER_MOCK.firstName} ${USER_MOCK.lastName}`);
  });
});
