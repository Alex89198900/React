describe('renders', () => {
  it('Layout should contain wrapper and main sections', () => {
    cy.visit('/');
    cy.get('main').should('be.visible');
  });

  it('Header should show correct page name', () => {
    cy.visit('/about');
    cy.contains(/about page/i).should('be.visible');
  });
});
