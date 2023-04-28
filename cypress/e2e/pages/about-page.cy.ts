describe('About page', () => {
  it('should have "About us" heading', () => {
    cy.visit('/about');
    cy.contains(/about page/i).should('be.visible');
  });
});
