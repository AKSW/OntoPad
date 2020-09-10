<template>
  <div>
    <QueryResultList title="Graph List" query="select distinct ?graph { graph ?graph {?s ?p ?o}} order by ?graph" query-quads select-variable="graph" ref="classList" :add="() => {$bvModal.show('add_graph')}" :selectResource="(graphIri) => {select(graphIri)}" :activeResource="graph_iri"/>
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
import QueryResultList from '@/components/QueryResultList'
import TermInput from '@/components/TermInput'
import { DataFactory } from 'n3'
const { triple, namedNode } = DataFactory

export default {
  name: 'GraphList',
  components: {
    TermInput,
    QueryResultList
  },
  data () {
    return {
      graphs: [],
      new_graph_iri: namedNode('')
    }
  },
  computed: mapState(['graph_iri']),
  methods: {
    select (graph) {
      this.$store.commit('changeGraphIri', graph)
      this.$store.commit('changeResourceIri', graph)
    },
    async add_graph () {
      const newGraphData = [triple(this.new_graph_iri, namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'), namedNode('http://www.w3.org/2000/01/rdf-schema#Graph'))]
      console.log(this.new_graph_iri)
      try {
        await this.$store.commit('insertDeleteData', { insertArray: newGraphData, graphIri: this.new_graph_iri.id })
      } catch (e) {
        console.error(e)
      }
    }
  }
}

</script>
