describe('TC_0001 Home Furnishings Page Title', () => {
  it('Verify the title', () => {
    cy.visit('https://www.myntra.com/home-furnishing?src=bc', {
      headers: { "Accept-Encoding": "gzip, deflate" }
    });
    cy.title().should('include', 'Home Furnishing');
  });
});
