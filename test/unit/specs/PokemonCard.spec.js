import Vue from 'vue';
import PokemonCard from 'src/components/PokemonCard';

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('PokemonCard.vue', () => {
  it('should render the pokemon data', () => {
    const Ctor = Vue.extend(PokemonCard);
    const vm = new Ctor({
      propsData: {
        pokemon: {
          name: 'voldemort',
          url: 'http://pokeapi.co/api/v2/pokemon/999/'
        }
      }
    }).$mount();

    expect(vm.$el.querySelector('.id').textContent).to.equal('#999');
    expect(vm.$el.querySelector('.name').textContent).to.equal('voldemort');
    expect(vm.$el.querySelector('.image').getAttribute('src')).to.equal('http://assets.pokemon.com/assets/cms2/img/pokedex/detail/999.png');
  });
});
