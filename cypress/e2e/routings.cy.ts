describe('routings', () => {
  it('correctly routes', () => {
    cy.visit('/');
    cy.get('.main').should('have.length', 2);

    cy.get('.about-link').click();
    cy.url().should('include', '/about');
    cy.contains(/about page/i).should('be.visible');

    cy.get('.about-form').click();
    cy.url().should('include', '/form');
    cy.contains('Submit').should('be.visible');
  });

  it('404', () => {
    cy.visit('/ab0ut');
    cy.contains(/ops 404/i).should('be.visible');
  });
});
