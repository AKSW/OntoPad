<template>
  <div>
    <b-card no-body>
      <template v-slot:header>
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="mb-0">Graph List</h6>
          <div>
            <b-button class="mb-0" v-on:click="updateGraphList" v-b-tooltip.hover title="Reload" aria-label="Reload">
              <b-icon icon="arrow-repeat"></b-icon>
            </b-button>
            <b-button v-b-modal.add_graph v-b-tooltip.hover title="Create Graph" aria-label="Create Graph">
              <b-icon icon="plus-square"></b-icon>
            </b-button>
          </div>
        </div>
      </template>
      <b-list-group flush v-for="(graph, index) in graphs" :key="index">
        <b-list-group-item
          class="btn"
          v-bind:class="{'active': graph == graph_iri}"
          :for="'form-control' + index"
          v-on:click="select(graph)">{{ graph }}</b-list-group-item>
      </b-list-group>
    </b-card>
    <b-modal id="add_graph" title="Create New Graph" :no-close-on-backdrop="true" @ok="add_graph()" size="lg">
      <form>
        <div class="form-group">
          <label for="new_graph_iri">IRI</label>
          <div>
            <TermInput type="iri" id="new_graph_iri" v-model="new_graph_iri" />
          </div>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TermInput from '@/components/TermInput'
import { DataFactory } from 'n3'
const { triple, namedNode } = DataFactory

export default {
  name: 'GraphList',
  components: {
    TermInput,
  },
  mounted () {
    this.updateGraphList()
  },
  data () {
    return {
      graphs: [],
      new_graph_iri: namedNode(''),
    }
  },
  computed: mapState(['graph_iri']),
  methods: {
    select (graph) {
      this.$store.commit('changeGraphIri', graph)
      this.$store.commit('changeResourceIri', graph)
    },
    updateGraphList () {
      this.$store.dispatch('sendQuery', {query: 'select distinct ?graph { graph ?graph {?s ?p ?o}} order by ?graph', queryQuads: true})
        .then(result => {
          let bindings = result.data.results.bindings
          this.graphs = []
          for (let key in bindings) {
            this.graphs.push(bindings[key].graph.value)
          }
        })
    },
    async add_graph () {
      let newGraphData = [triple(this.new_graph_iri, namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'), namedNode('http://www.w3.org/2000/01/rdf-schema#Graph'))]
      console.log(this.new_graph_iri)
      try {
        await this.$store.commit('insertDeleteData', {insertArray: newGraphData, graphIri: this.new_graph_iri.id})
      } catch (e) {
        console.error(e)
      }
    }
  }
}

</script>
