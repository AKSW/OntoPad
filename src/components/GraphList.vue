<template>
  <div>
    <QueryResultList title="Graph List" search query="select distinct ?graph { graph ?graph {?s ?p ?o}} order by ?graph" query-quads select-variable="graph" ref="classList" :add="() => {add_graph_modal.show()}" :selectResource="selectGraph" :activeResource="graph_iri" />
    <div class="modal fade" ref="add_graph" tabindex="-1" aria-hidden="true" data-bs-backdrop="static" size="lg">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Create New Graph</h5>
            <button type="button" class="btn-close" @click="add_graph_modal.hide()" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="new_graph_iri">IRI</label>
                <div>
                  <TermInput type="iri" id="new_graph_iri" v-model:term="new_graph_iri" />
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="add_graph_modal.hide()">Close</button>
            <button type="button" class="btn btn-primary" @click="add_graph()">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useRdfStore } from '../stores/rdf'
import { Modal } from 'bootstrap'
import rdf from '@rdfjs/data-model'

import QueryResultList from './QueryResultList.vue'
import TermInput from './TermInput.vue'

export default {
  name: 'GraphList',
  setup () {
    const store = useRdfStore();
    return { store }
  },
  components: {
    TermInput,
    QueryResultList
  },
  props: {
    graph_iri: String,
    selectGraph: Function
  },
  data () {
    return {
      graphs: [],
      new_graph_iri: rdf.namedNode(''),
      add_graph_modal: null
    }
  },
  mounted() {
    this.add_graph_modal = new Modal(this.$refs.add_graph)
  },
  methods: {
    async add_graph () {
      const newGraphData = [rdf.quad(this.new_graph_iri, rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'), rdf.namedNode('http://www.w3.org/2000/01/rdf-schema#Graph'))]
      console.log(this.new_graph_iri)
      try {
        await this.store.deleteInsertData({ insertArray: newGraphData, graphIri: this.new_graph_iri.value })
        this.add_graph_modal.hide()
      } catch (e) {
        console.error(e)
      }
    }
  }
}

</script>
