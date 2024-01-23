describe('When: I use the reading list feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should see my reading list', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );
  });

  it('Then: should mark the book as read', async () => {
    cy.get('[data-testing="reading-list-mark-as-read"]').click();
    cy.get('[data-testing="reading-list-finished"]').should(
      'contain.text',
      'Finished on'
    );
  });

});
