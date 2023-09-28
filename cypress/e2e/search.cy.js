describe('TC_0003 Search Product on Myntra Home Furnishings Page', () => {
    it('Verify the Search Icon', () => {
      cy.visit('https://www.myntra.com/home-furnishing?src=bc', {
        headers: { "Accept-Encoding": "gzip, deflate" }
      });
      cy.get('.desktop-searchBar').type('bedsheets');
      cy.get('.desktop-submit').click();
    });
  });
  