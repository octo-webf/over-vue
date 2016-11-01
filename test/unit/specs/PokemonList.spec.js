import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import PokemonList from 'src/components/PokemonList'

describe('PokemonList.vue', () => {
  const Ctor = Vue.extend(PokemonList)
  let vm

  it('should render a list', () => {
    vm = new Ctor().$mount()
    expect(vm.$el.querySelector('ul.pokemons')).to.exist
  })

  it('should render the correct number of pokemons', () => {
    vm = new Ctor({
      data: {
        pokemons: [
          { url: 'http://pokeapi.co/api/v2/pokemon/1/', name: 'bulbasaur' },
          { url: 'http://pokeapi.co/api/v2/pokemon/2/', name: 'ivysaur' }]
      }
    }).$mount()
    expect(vm.$el.querySelectorAll('li.pokemon').length).to.equal(2)
  })

  it('should call the pokemon api to retrieve the pokemon list', () => {
    // before
    let promiseCall = sinon.stub(Vue, 'http').returnsPromise()

    // given
    promiseCall.resolves({
      body: {
        count: 811,
        previous: null,
        results: [
          {
            url: 'http://pokeapi.co/api/v2/pokemon/1/',
            name: 'bulbasaur'
          },
          {
            url: 'http://pokeapi.co/api/v2/pokemon/4/',
            name: 'charmander'
          },
          {
            url: 'http://pokeapi.co/api/v2/pokemon/7/',
            name: 'squirtle'
          }
        ],
        next: 'http://pokeapi.co/api/v2/pokemon/?offset=20'
      }
    })

    // when
    vm = new Ctor().$mount()

    // then
    expect(promiseCall).to.have.been.called
    expect(promiseCall).to.have.been.calledWith({
      method: 'get',
      url: 'http://pokeapi.co/api/v2/pokemon/'
    })
    expect(vm.$el.querySelectorAll('li.pokemon').length).to.equal(3)

    // after
    Vue.http.restore()
  })
})
