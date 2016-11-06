import Vue from 'vue'
import PokemonCard from 'src/components/PokemonCard.vue'

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('PokemonCard', () => {
  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    expect(typeof PokemonCard.data).to.equal('function')
    const defaultData = PokemonCard.data()
    expect(defaultData.pokemon).to.deep.equal({
      id: 1,
      name: 'Bulbizarre',
      imageUrl: 'http://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png'
    })
  })

  it('correctly render the pokemon data', () => {
    const Ctor = Vue.extend(PokemonCard)
    const vm = new Ctor({
      propsData: {
        pokemon: {
          id: 999,
          name: 'voldemort',
          imageUrl: 'http://image.url'
        }
      }
    }).$mount()

    expect(vm.$el.querySelector('.id').textContent).to.equal('#999')
    expect(vm.$el.querySelector('.name').textContent).to.equal('voldemort')
    expect(vm.$el.querySelector('.image').getAttribute('src')).to.equal('http://image.url')
  })



  /* // Inspect the component instance on mount
   it('correctly sets the message when created', () => {
   const vm = new Vue(PokemonCard).$mount()
   expect(vm.message).toBe('bye!')
   })

   // Mount an instance and inspect the render output
   it('renders the correct message', () => {
   const Ctor = Vue.extend(PokemonCard)
   const vm = new Ctor().$mount()
   expect(vm.$el.textContent).toBe('bye!')
   }) */
})
