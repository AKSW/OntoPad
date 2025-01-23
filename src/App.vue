<template>
  <div id="app" class="container-fluid">
    <div class="row connection">
      <h1>{{ title }}</h1>
      <div v-if="store_ready">🟢 Store is ready</div>
      <div v-else>🔄 Loading</div>
      <SparqlConnection/>
    </div>
    <div v-if="store_ready" class="row">
      <splitpanes class="default-theme">
        <pane size="30">
          <splitpanes horizontal style="height: 80vh">
            <pane size="30">
              <GraphList :graph_iri="graph_iri" :selectGraph="(iri) => {useSelectionStore().changeGraphIri(iri); useSelectionStore().changeResourceIri(iri)}" />
            </pane>
            <pane size="70">
              <ClassList :class_iri="resource_iri" :selectClass="(iri) => {useSelectionStore().changeResourceIri(iri)}" />
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
            <li class="nav-item"><RouterLink class="nav-link" active-class="active" to="/kanban">Kanban</RouterLink></li>
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
import SparqlConnection from './components/SparqlConnection.vue'
import GraphList from './components/GraphList.vue'
import ClassList from './components/ClassList.vue'
import { Splitpanes, Pane } from 'splitpanes'
import { RouterLink, RouterView } from 'vue-router'

import 'splitpanes/dist/splitpanes.css'

import { mapState } from 'pinia'
import { useRdfStore } from './stores/rdf'
import { useSelectionStore } from './stores/selection'

export default {
  name: 'App',
  computed: {
    ...mapState(useRdfStore, {store_ready: store => store.ready}),
    ...mapState(useSelectionStore, ['graph_iri', 'resource_iri'])
  },
  components: {
    SparqlConnection,
    GraphList,
    ClassList,
    Splitpanes,
    Pane,
    RouterLink,
    RouterView
  },
  methods: {
    useSelectionStore
  },
  props: {
    title: {
      type: String,
      default: "OntoPad"
    },
    config: {
      type: Object,
      default: {}
    },
  },
  created () {
    const rdfStore = useRdfStore()
    const selectionStore = useSelectionStore()

    rdfStore.updateEndpointConfiguration(this.config)
    selectionStore.initConfig(this.config)
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
