describe('Layout', () => {
  it('Layout should contain wrapper and main sections', () => {
    cy.visit('/');
    cy.get('main').should('be.visible');
  });

  it('Header should show correct page name', () => {
    cy.visit('/about');
    cy.contains(/about page/i).should('be.visible');
  });

  // it('Footer should have link with year 2023', () => {
  //   cy.visit('/');
  //   cy.contains('With ❤️ from').should('include.text', '2023');
  // });
});
