describe('forms tests', ()=>{
	beforeEach(()=>{
		cy.visit('/forms');
	});

	it('Test subscribe form', ()=>{
		cy.contains(/testing froms/i);
		cy.getDataTest('subscribe-form').find('input').as('subscribe-input');
		cy.get('@subscribe-input').type('obedNuertey@codecs.com');

		cy.contains(/Successfully subbed: obedNuertey@codecs.com/i).should('not.exst');
		cy.getDataTest('subscribe-button').click();
		cy.contains(/Successfully subbed: obedNuertey!/i).should('exist');
		cy.wait(3000);
		cy.contains(/Successfully subbed: obedNuertey@codecs.com!/i).should('not.exist');

		cy.get('@subscribe-input').type('obedNuertey@codecs.io');
		cy.contains(/invalid email: obedNuertey@codecs.com/i).should('not.exist');
		cy.getDataTest('subscribe-button').click();
		cy.contains(/invalid email: obedNuertey@codecs.io!/i).should('exist');
		cy.wait(3000);
		cy.contains(/invalid email: obedNuertey@codecs.io!/i).should('not.exist');

		cy.contains(/fail!/i).should('not.exist');
		cy.getDatTest('subscribe-button').click();
		cy.contains(/fail!/i).should('exist');
	});
});