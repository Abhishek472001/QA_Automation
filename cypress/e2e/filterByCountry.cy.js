describe('TC_0004 Filter products by Country on Myntra Home Furnishings Page', () => {
  it('Verify filter Products by Country', () => {
    cy.visit('https://www.myntra.com/home-furnishing?src=bc', {
      headers: { "Accept-Encoding": "gzip, deflate" }
    });
    cy.get(':nth-child(2) > label > .atsa-title').click();
    cy.get('label.common-customCheckbox:contains("India")').click({ multiple: true });
    cy.get('input[value="India"]').should('be.checked');
  });
});
