<template>
    <div class="Form">
      <form>
        <label for="resourceUriInput">Resource IRI (Subject)</label>
        <TermInput v-model="subject" type="iri" id="resourceUriInput" />
        <table width="100%">
          <tr>
            <th scope="col" width="45%">Predicate</th>
            <th scope="col" width="auto">Object</th>
            <th scope="col" width="90px"></th>
          </tr>
          <tr v-for="(triple, index) in dataModel" :key="index">
            <td><TermInput :id="'form-pred-' + index" v-model="triple.predicate" type="iri" /></td>
            <td><TermInput :id="'form-obj-' + index" v-model="triple.object" /></td>
            <td>
              <button @click="newTriple(index)" class="btn btn-outline-dark">+</button>
              <button @click="delTriple(index)" class="btn btn-outline-dark">-</button>
            </td>
          </tr>
        </table>
        <button @click="newTriple()" v-if="dataModel.length < 1" class="btn btn-outline-dark">+</button>
        <button class="btn btn-primary" @click="submit">Submit</button>
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
import TermInput from '@/components/TermInput'
import { DataFactory } from 'n3'
// import * as jsonld from 'jsonld'
const { triple, namedNode, blankNode } = DataFactory

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
      subject: namedNode(''),
      dataModel: [
        triple(blankNode(''), namedNode(''), namedNode(''))
      ]
    }
  },
  computed: {
    ...mapState(useRdfStore, ['graph_iri']),
  },
  methods: {
    newTriple (index) {
      if (!index) {
        index = 0
      }
      this.dataModel.splice(index + 1, 0, triple(blankNode(''), namedNode(''), namedNode('')))
    },
    delTriple (index) {
      this.dataModel.splice(index, 1)
    },
    submit () {
      for (const index in this.dataModel) {
        const statement = this.dataModel[index]
        statement.subject = this.subject
      }
      this.store.insertDeleteData({ insertArray: this.dataModel, graphIri: this.graph_iri })
    }
  }
}

</script>
