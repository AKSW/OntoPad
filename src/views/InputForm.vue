<template>
    <div class="Form">
      <form>
        <label for="resourceUriInput">Resource IRI (Subject)</label>
        <TermInput v-model:term="subject" type="iri" id="resourceUriInput" />
        <table width="100%">
          <tr>
            <th scope="col" width="45%">Predicate</th>
            <th scope="col" width="auto">Object</th>
            <th scope="col" width="90px"></th>
          </tr>
          <tr v-for="(triple, index) in dataModel" :key="index">
            <td><TermInput :id="'form-pred-' + index" v-model:term="triple.predicate" type="iri" /></td>
            <td><TermInput :id="'form-obj-' + index" v-model:term="triple.object" /></td>
            <td>
              <button type="button" class="btn btn-outline-dark" @click="newTriple(index)">+</button>
              <button type="button" class="btn btn-outline-dark" @click="delTriple(index)">-</button>
            </td>
          </tr>
        </table>
        <button type="button" class="btn btn-outline-dark mb-0" @click="newTriple()" v-if="dataModel.length < 1">+</button>
        <button type="button" class="btn btn-outline-primary mb-0" @click="submit">Submit</button>
      </form>
      <a @click="debug = true" v-if="debug == false">(show debug)</a>
      <div v-if="debug">
      <a @click="debug = false">(hide debug)</a>
      <pre>subject: {{ subject }}
{{dataModel}}
      </pre>
      </div>
    </div>
</template>

<script>
import { mapState } from 'pinia'
import { useRdfStore } from '../stores/rdf'
import { useSelectionStore } from '../stores/selection'
import TermInput from '../components/TermInput.vue'
// import * as jsonld from 'jsonld'
import rdf from '@rdfjs/data-model'

export default {
  name: 'InputForm',
  setup () {
    const store = useRdfStore();
    return { store }
  },
  components: {
    TermInput
  },
  data () {
    return {
      debug: false,
      subject: rdf.namedNode(''),
      dataModel: [
        rdf.quad(rdf.blankNode(''), rdf.namedNode(''), rdf.namedNode(''))
      ]
    }
  },
  computed: {
    ...mapState(useSelectionStore, ['graph_iri']),
  },
  methods: {
    newTriple (index) {
      if (!index) {
        index = 0
      }
      this.dataModel.splice(index + 1, 0, rdf.quad(rdf.blankNode(''), rdf.namedNode(''), rdf.namedNode('')))
    },
    delTriple (index) {
      this.dataModel.splice(index, 1)
    },
    submit () {
      for (const index in this.dataModel) {
        const statement = this.dataModel[index]
        statement.subject = this.subject
      }
      this.store.deleteInsertData({ insertArray: this.dataModel, graphIri: this.graph_iri })
    }
  }
}

</script>
