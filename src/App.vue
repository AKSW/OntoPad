<template>
  <div id="app" class="container-fluid">
    <div class="row">
    <div class="col-3">
    <div v-intro="'The content of tooltip'">
      <SparqlConnection/>
    </div>
    <GraphList/>
    <ClassList/>
    </div>
    <div class="col-9">
      <ul class="nav nav-tabs">
        <li class="nav-item"><router-link class="nav-link" active-class="active" to="/dashboard">Home</router-link></li>
        <li class="nav-item"><router-link class="nav-link" active-class="active" to="/instances">Instances</router-link></li>
        <li class="nav-item"><router-link class="nav-link" active-class="active" to="/voc">Vocabulary</router-link></li>
        <li class="nav-item"><router-link class="nav-link" active-class="active" to="/edit">Edit</router-link></li>
        <li class="nav-item"><router-link class="nav-link" active-class="active" to="/rdform">RDForm</router-link></li>
        <li class="nav-item"><router-link class="nav-link" active-class="active" to="/add">Add</router-link></li>
        <li class="nav-item"><router-link class="nav-link" active-class="active" to="/source">Source</router-link></li>
      </ul>
      <router-view/>
    </div>
    </div>
  </div>
</template>

<script>
import SparqlConnection from '@/components/SparqlConnection'
import GraphList from '@/components/GraphList'
import ClassList from '@/components/ClassList'

export default {
  name: 'App',
  components: {
    SparqlConnection,
    GraphList,
    ClassList
  },
  mounted () {
    this.$intro().start() // start the guide
    this.$intro().showHints() // show hints
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
