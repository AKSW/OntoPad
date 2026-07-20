<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="/logo.svg" alt="{{ title }}" width="30" height="24">
        {{ title }}
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <div class="row connection">
              <div v-if="store_ready">🟢 Store is ready</div>
              <div v-else>🔄 Loading</div>
              <SparqlConnection/>
            </div>
          </li>
          <li v-if="store_ready" class="nav-item">
            <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item" aria-current="graph"><pre>{{ graph_iri }}</pre></li>
                <li class="breadcrumb-item active" aria-current="resource">{{ resource_iri }}</li>
              </ol>
              <label for="select_url" class="col-1 mr-sm-2">Graph IRI</label>
              <input type="text" class="form-control col-2" id="graph_iri" v-model="graph_iri">
              <label for="select_url" class="col-1 mr-sm-2">Resource IRI</label>
              <input type="text" class="form-control col-6" id="resource_iri" v-model="resource_iri">
            </nav>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
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
        this.rdfStore.changeGraphIri(value)
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
  setup () {
    console.log("OntoPad-next mounted")
    const rdfStore = useRdfStore()
    const selectionStore = useSelectionStore()

    rdfStore.updateEndpointConfiguration(this.config)
    selectionStore.initConfig(this.config)
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
