describe('Main page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('h1', () => {
    cy.get('h1').should('have.text', 'Main');
  });

  it('Not found', () => {
    cy.get('input').type('some nonexistent data{enter}');
    cy.get('h1').should('include.text', 'MainNot found');
  });
  it('find and render cards', () => {
    cy.get('input').type('iphone{enter}');
    cy.contains('iPhone 9').should('be.visible');
    cy.contains('iPhone X').should('be.visible');
  });
});
