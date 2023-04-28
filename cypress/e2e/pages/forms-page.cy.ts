describe('Form page', () => {
  beforeEach(() => {
    cy.visit('/form');
  });

  it('should show errors if form inputs contain wrong values', () => {
    cy.contains('Submit').should('be.visible');
    cy.get('.submit').click();
    cy.contains('Please Enter Name').should('be.visible');
    cy.contains('Please Choise Date').should('be.visible');
    cy.contains('Please Choise framework').should('be.visible');
    cy.contains('Please confirm').should('be.visible');
    cy.contains('Choise photo').should('be.visible');
  });
});
