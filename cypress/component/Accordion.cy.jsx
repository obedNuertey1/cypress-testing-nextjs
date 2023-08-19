const { default: ItemsAccordion } = require("@/app/components/Accordion")

const items = [
    {
      summary: 'Overview',
      details: `Cypress also allows you to test individual components of your app via
      component tests`,
      id: '1',
    },
    {
        summary: 'Component Vs E2E',
        details: `Cypress Component Testing uses the same test runner, commands, 
        and API to test components instead of pages. However, the main difference
        is that Cypress Component Testing builds your components using a development 
        server instead of rendering within a complete website, which results in 
        faster tests and fewer dependencies on infrastructure than end-to-end 
        tests covering the same code paths`,
        id: '2',
      },
      {
        summary: 'Additional configuration',
        details: `You may need to add additional configuration to your project to support
        component tests. For example, In Next JS you'll need to add something like: 
        
        const { defineConfig } = require('cypress')

        module.exports = defineConfig({
          component: {
            devServer: {
              framework: 'next',
              bundler: 'webpack',
            },
          },
        })`,
        id: '3'
      }
]


describe('Accordion.cy.jsx', ()=>{
	it('Items accordion', ()=>{
		cy.mount(<ItemsAccordion items={items} />);
		cy.getDataTest('accordion-wrapper').within(()=>{cy.get('[data-test^="accordion-item"').should('have.length', 3)})

		cy.contains('Your tests wil exist in a describe block').should('not.be.visible');
		cy.getDataTest('accordion-item-1').within(()=>{cy.get('[role=button]').click()})
		cy.contains('Your tests will exist in a describe block').should('be.visible');
		cy.getDataTest('accordion-item-1').within(()=>{cy.get('[role=button]').click()})

		cy.contains('Your tests will exist in a describe block').should('not.be.visible')
	});
});
