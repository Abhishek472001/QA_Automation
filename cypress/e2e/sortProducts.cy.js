describe('TC_0002 Sort Products on Myntra Home Furnishings Page', () => {
    it('Verify Sort Products by Price Range', () => {
      cy.visit('https://www.myntra.com/home-furnishing?src=bc', {
        headers: { "Accept-Encoding": "gzip, deflate" }
      });
      cy.get('.sort-sortBy').click();
      cy.get('.sort-sortBy').should('have.length', 1);
      cy.get('ul.sort-list').invoke('attr', 'style', 'display: block');
      cy.contains('label', 'Price: Low to High').click();
    });
});