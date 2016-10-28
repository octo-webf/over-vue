<template>
  <div class="pokemon-list">
    <ul class="pokemons">
      <li class="pokemon" v-for="pokemon in pokemons">
        <h3>{{ pokemon.name }}</h3>
        <img :src="pokemon.imageUrl">
      </li>
    </ul>
  </div>
</template>

<script>
  function getPokedexIdFromItsUrl (pokemon) {
    if (!pokemon.url) {
      return 'N/A'
    }
    const regexp = /http:\/\/pokeapi\.co\/api\/v2\/pokemon\/(\d+)\//
    const matches = regexp.exec(pokemon.url)
    return matches ? matches[1] : 'N/A'
  }

  function convertNumberIntoStringWithLeadingZeros (number, stringLength) {
    const str = number.toString()
    return str.length < stringLength ? convertNumberIntoStringWithLeadingZeros(`0${str}`, stringLength) : str
  }

  export default {
    name: 'pokemon-list',
    data () {
      return {
        pokemons: []
      }
    },
    mounted () {
      return this.$http.get('http://pokeapi.co/api/v2/pokemon/').then(response => {
        const pokemonImageBankUrl = 'http://assets.pokemon.com/assets/cms2/img/pokedex/detail'
        this.pokemons = response.body.results
        this.pokemons = this.pokemons.map(function (pokemon) {
          const pokemonId = convertNumberIntoStringWithLeadingZeros(getPokedexIdFromItsUrl(pokemon), 3)
          pokemon.id = pokemonId
          pokemon.imageUrl = `${pokemonImageBankUrl}/${pokemonId}.png`
          console.log(pokemon)
          return pokemon
        })
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li {
    text-align: left
  }
</style>
