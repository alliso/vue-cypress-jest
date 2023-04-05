import HelloWorld from './HelloWorld.vue'


describe('<HelloWorld />', () => {

  it('Show msg in title', () => {
    cy.mount(HelloWorld, { propsData: {msg: "Hello world"} })
    cy.get("[data-cy=msg]").should("have.text", "Hello world")
  })

})
