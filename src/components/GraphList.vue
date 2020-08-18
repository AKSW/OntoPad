<template>
  <div>
    <strong>Graph List</strong>
    (<a v-on:click="updateGraphList">refresh</a>)
    <ul class="list-group" v-for="(graph, index) in graphs" :key="index">
      <li
        class="list-group-item btn"
        v-bind:class="{'active': graph == graph_iri}"
        :for="'form-control' + index"
        v-on:click="select(graph)">{{ graph }}</li>
    </ul>
    <form>
      <div class="form-group row">
        <label for="new_graph_iri" class="col-sm-3 col-form-label">IRI</label>
        <div class="col-sm-9">
          <TermInput type="iri" id="new_graph_iri" v-model="new_graph_iri" />
        </div>
      </div>
      <button class="btn btn-primary" @click="add_graph()">Add Graph</button>
    </form>
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
