describe('TC_0005 Category section on Myntra Home Furnishings Page', () => {
    it('Verify Categories section', () => {
      cy.visit('https://www.myntra.com/home-furnishing?src=bc', {
        headers: { "Accept-Encoding": "gzip, deflate" }
      });
      it('to verify search category and check box icon', () => {
        cy.get('.categories-container > .filter-search-filterSearchBox > .myntraweb-sprite').type('clock');
        cy.get('.categories-list > li > .common-customCheckbox > .common-checkboxIndicator').click();
      });
    });
});