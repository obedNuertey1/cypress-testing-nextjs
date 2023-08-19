describe('Fundamentals test', ()=>{
	beforeEach(()=>{
		cy.visit('/fundamentals');
	});
	it('Contains correct header text', ()=>{
		cy.getDataId('fundermentals-header').should('contain.text', 'Testing Fundamentals');
		cy.getDataId('fundamentals-header').contains(/Testing Fundamentals/i);
	});

	it('Accordion works correctly', ()=>{
		cy.contains(/Your tests will exists in a describe block/i).should('not.be.visible');
		cy.get(`[data-test='accordion-item-1']`).click();
		cy.contains(/Your tests will exists in a describe block/i).should('be.visible');
		cy.get(`[data-test='accordion-item-1'] div[role="button"]`).click();
	});
});