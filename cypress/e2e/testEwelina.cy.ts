describe('test Ewelina', () => {
  it('cy.window() - get the global window object', () => {
    cy.visit("localhost:4200");
    cy.get(".list-group").should('have.length', 1);
  })
})