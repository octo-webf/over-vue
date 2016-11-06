<template>
  <div class="pokemon-list">
    <ul class="pokemons">
      <li class="pokemon col-md-3" v-for="pokemon in pokemons">
        <pokemon-card :pokemon="pokemon"></pokemon-card>
      </li>
    </ul>
  </div>
</template>

<script>
  import PokemonCard from 'src/components/PokemonCard';

  export default {
    name: 'pokemon-list',
    components: {
      PokemonCard
    },
    data() {
      return {
        pokemons: []
      };
    },
    created() {
      return this.$http.get('http://pokeapi.co/api/v2/pokemon/').then((response) => {
        this.pokemons = response.body.results;
      });
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pokemons {
    list-style-type: none;
    padding: 0;
  }
</style>
