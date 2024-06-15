<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SparqlConnection from './components/SparqlConnection.vue'
import GraphList from './components/GraphList.vue'
import ClassList from './components/ClassList.vue'
</script>

<template>
  <div id="app" class="container-fluid">
    <div class="row connection">
      <SparqlConnection/>
    </div>
    <div class="row">
    <div class="col-3">
    <GraphList/>
    <ClassList/>
    </div>
    <div class="col-9">
      <ul class="nav nav-tabs">
        <li class="nav-item"><RouterLink class="nav-link" active-class="active" to="/dashboard">Home</RouterLink></li>
        <li class="nav-item"><RouterLink class="nav-link" active-class="active" to="/instances">Instances</RouterLink></li>
        <li class="nav-item"><RouterLink class="nav-link" active-class="active" to="/voc">Vocabulary</RouterLink></li>
        <li class="nav-item"><RouterLink class="nav-link" active-class="active" to="/edit">Edit</RouterLink></li>
        <li class="nav-item"><RouterLink class="nav-link" active-class="active" to="/rdform">Form</RouterLink></li>
        <li class="nav-item"><RouterLink class="nav-link" active-class="active" to="/add">Add</RouterLink></li>
        <li class="nav-item"><RouterLink class="nav-link" active-class="active" to="/source">Source</RouterLink></li>
      </ul>
      <RouterView />
    </div>
    </div>
  </div>
</template>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.row.connection {
  margin: 30px 0;
}
</style>
