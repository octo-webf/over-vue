import Vue from 'vue'
import VueResource from 'vue-resource'
import PokemonList from 'src/components/PokemonList'

describe('PokemonList.vue', () => {

  const Ctor = Vue.extend(PokemonList)
  let vm

  before(function() {
    Vue.use(VueResource)
  })
  it('should render a list', () => {
    vm = new Ctor({
      el: document.createElement('div')
    })
    expect(vm.$el.querySelector('ul.pokemons')).to.exist
  })

  it('should render the correct number of pokemons', () => {
    vm = new Ctor({
      el: document.createElement('div'),
      data: {
        pokemons: [
          {
            url: "http://pokeapi.co/api/v2/pokemon/1/",
            name: "bulbasaur"
          },
          {
            url: "http://pokeapi.co/api/v2/pokemon/2/",
            name: "ivysaur"
          }]
      }
    })
    expect(vm.$el.querySelectorAll('li.pokemon').length).to.equal(2)
  })

  it('should call the pokemon api to retrieve the pokemon list', () => {
    const vm = new Ctor({
      el: document.createElement('div')
    });
    expect(vm.$el.querySelectorAll('li.pokemon').length).to.equal(2)
  })
})
