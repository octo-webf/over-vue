<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid"> <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false"><span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button>
        <a class="navbar-brand" href="#">Brand</a></div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <!--<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
          <li><a href="#">Link</a></li>-->
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'app-header',
    data () {
      return {
        msg: 'application title'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
