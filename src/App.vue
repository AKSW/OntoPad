<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/logo.svg" alt="{{ title }}" width="30" height="24">
        {{ title }}
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <span class="nav-link" v-if="store_ready">🟢 Store is ready</span>
            <span class="nav-link" v-else>🔄 Loading</span>
          </li>
          <li class="nav-item">
            <SparqlConnection/>
          </li>
        </ul>
        <form v-if="store_ready" class="d-flex" role="graph-navigation">
          <div class="form-floating mb-3">
            <input type="text" class="form-control col-2" id="graph_iri" aria-label="Graph IRI" v-model="graph_iri" placeholder="Graph IRI">
            <label for="graph_iri">Graph IRI</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control col-2" id="resource_iri" aria-label="Resource IRI" v-model="resource_iri" placeholder="Resource IRI">
            <label for="resource_iri">Resource IRI</label>
          </div>
        </form>
      </div>
    </div>
  </nav>
  <div class="container-fluid">
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
            <li v-for="(link, index) in $navigation['main']" :key="index" class="nav-item"><RouterLink class="nav-link" active-class="active" :to="link.to">{{link.title}}</RouterLink></li>
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
    // ...mapState(useSelectionStore, ['graph_iri', 'resource_iri']),
    graph_iri: {
      get () {
        return this.selectionStore.graph_iri
      },
      set (value) {
        this.selectionStore.changeGraphIri(value)
      }
    },
    resource_iri: {
      get () {
        return this.selectionStore.resource_iri
      },
      set (value) {
        this.selectionStore.changeResourceIri(value)
      }
    }
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
    useSelectionStore,
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
    console.log("OntoPad-next created")
    this.$navigation = this.$navigation || {}
    this.$navigation.main = this.$navigation.main || []
    this.$navigation.main = [
        {
          to: "/dashboard",
          title: "Home"
        },
        {
          to: "/instances",
          title: "Instances"
        },
        {
          to: "/voc",
          title: "Vocabulary"
        },
        {
          to: "/edit",
          title: "Edit"
        },
        {
          to: "/form",
          title: "Form"
        },
        {
          to: "/add",
          title: "Add"
        },
        {
          to: "/kanban",
          title: "Kanban"
        },
        {
          to: "/source",
          title: "Source"
        }
      ].concat(this.$navigation.main)
  },
  setup(props) {
    console.log("OntoPad-next mounted")
    const rdfStore = useRdfStore()
    const selectionStore = useSelectionStore()

    rdfStore.updateEndpointConfiguration(props.config)
    selectionStore.initConfig(props.config)
    return { rdfStore, selectionStore }
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
