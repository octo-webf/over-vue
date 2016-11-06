<template>
  <div class="pokemon-card">
    <img class="image" :src="pokemonImageUrl">
    <p class="id">#{{ pokemonId }}</p>
    <h3 class="name">{{ pokemon.name }}</h3>
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
    name: 'pokemon-card',
    props: ['pokemon'],
    computed: {
      pokemonId () {
        return convertNumberIntoStringWithLeadingZeros(getPokedexIdFromItsUrl(this.pokemon), 3)
      },
      pokemonImageUrl () {
        return `http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.pokemonId}.png`
      }
    }
  }
</script>

<style scoped>
  .name {
    text-align: center;
    text-transform: capitalize;
  }

  .id {
    color: #999;
  }
</style>
