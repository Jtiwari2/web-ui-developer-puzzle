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

  it('Then: I should be able to Undo the add from the reading list action', () => {

    // search the book first 
    cy.get('input[type="search"]').type('python');
    cy.get('form').submit().wait(2000);

    // add first book to reading list
    cy.get('[data-testing="tmo-total-count"]').then(($readingListCnt)=>{
      const readingListVal = parseInt($readingListCnt.text()); 
      cy.get('[data-testing="book-want-to-read-button"]').eq(0).then(($btn)=>{
        if($btn.is(':enabled')){
          $btn.click();
        }
      } ) .wait(1000);

      cy.get(".mat-simple-snackbar-action").click().wait(500); // click undo.
      cy.get('[data-testing="tmo-total-count"]').should(($readingListCnt)=>{
        const readingListVal2 = parseInt($readingListCnt.text());
          expect(readingListVal).to.equal(readingListVal2); 
      })  
    })     
  });

  it('Then: I should be able to Undo the remove from the reading list action', () => {

        // search for book first 
        cy.get('input[type="search"]').type('java');
        cy.get('form').submit().wait(2000);

        // add first book to reading list.
        cy.get('[data-testing="book-want-to-read-button"]').eq(0).then(($btn)=>{
          if($btn.is(':enabled')){
            $btn.click();
            cy.wait(1000);
          }
        })

        cy.get('[data-testing="tmo-total-count"]').then(($readingListCnt)=>{
          const readingListVal = parseInt($readingListCnt.text()); 
          cy.get('[data-testing="toggle-reading-list"]').click(); 

          cy.get('[data-testing="reading-list-remove-button"]').eq(0).click().wait(1000); 
          cy.get(".mat-simple-snackbar-action").click().wait(500);// click undo

          cy.get('[data-testing="tmo-total-count"]').should(($readingListCnt)=>{
            const readingListVal2 = parseInt($readingListCnt.text());
              expect(readingListVal2).to.equal(readingListVal); 
          }) 
        })     
      });

});
