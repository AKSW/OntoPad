<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SparqlConnection from './components/SparqlConnection.vue'
import GraphList from './components/GraphList.vue'
import ClassList from './components/ClassList.vue'

import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
</script>

<template>
  <div id="app" class="container-fluid">
    <div class="row connection">
      <div v-if="store_ready">🟢 Store is ready</div>
      <div v-else>🔄 Loading</div>
      <SparqlConnection/>
    </div>
    <div v-if="store_ready" class="row">
      <splitpanes class="default-theme">
        <pane size="30">
          <splitpanes horizontal style="height: 80vh">
            <pane size="30">
              <GraphList/>
            </pane>
            <pane size="70">
              <ClassList/>
            </pane>
          </splitpanes>
        </pane>
        <pane size="90">
          <ul class="nav nav-tabs">
            <li class="nav-item"><RouterLink class="nav-link" active-class="active" to="/dashboard">Home</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link" active-class="active" to="/instances">Instances</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link" active-class="active" to="/voc">Vocabulary</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link" active-class="active" to="/edit">Edit</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link" active-class="active" to="/form">Form</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link" active-class="active" to="/add">Add</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link" active-class="active" to="/source">Source</RouterLink></li>

          </ul>
          <RouterView />
        </pane>
      </splitpanes>
    </div>
    <div v-else>
      Waiting for Store to be configured …
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useRdfStore } from './stores/rdf'

export default {
  name: 'App',
  setup () {
    const store = useRdfStore();
    return { store }
  },
  computed: {
    ...mapState(useRdfStore, {store_ready: store => store.ready}),
  }
}

</script>

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
.splitpanes, .splitpanes .splitpanes__pane {background-color: inherit;}

.splitpanes--horizontal .splitpanes__pane {
  overflow-y: scroll;
  /* max-height: 400px; */
}
</style>
