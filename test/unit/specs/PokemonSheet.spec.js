import Vue from 'vue';
import PokemonSheet from 'src/components/PokemonSheet';

describe('PokemonSheet.vue', () => {
  it('should render the pokemon detailled data', () => {
    const Ctor = Vue.extend(PokemonSheet);
    const vm = new Ctor({
      propsData: {
        pokemon: {
          weight: 69
        }
      }
    }).$mount();

    expect(vm.$el.querySelector('.weight').textContent).to.equal('69');
  });
});
