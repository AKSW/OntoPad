<template>
  <div>
    <dl>
      <dt>IRI</dt>
      <dd>{{ resource_iri }}</dd>
      <dt>Label</dt>
      <dd><Term v-model:term="label" @click="selectResource"/></dd>
      <dt>Description</dt>
      <dd><Term v-model:term="description" @click="selectResource"/></dd>
    </dl>
    <table width="100%" v-if="dataModel.getQuads !== undefined">
      <tr>
        <th scope="col" width="45%">Predicate</th>
        <th scope="col" width="auto">Object</th>
      </tr>
      <tr v-for="(triple, index) in dataModel.getQuads(null, null, null)" :key="index">
        <td><Term v-model:term="triple.predicate" @click="selectResource"/></td>
        <td><Term v-model:term="triple.object" @click="selectResource"/></td>
      </tr>
    </table>
  </div>
</template>

<script>
import Term from '../components/Term.vue'
import { Readable } from 'readable-stream'
import { mapState } from 'pinia'
import { useRdfStore } from '../stores/rdf'
import { useSelectionStore } from '../stores/selection'
import { streamToStore } from 'rdf-dereference-store';
import rdf from '@rdfjs/data-model'

export default {
  name: 'PropertyView',
  setup () {
    const store = useRdfStore();
    const selection = useSelectionStore();
    return { store, selection }
  },
  components: {
    Term
  },
  data () {
    return {
      dataModel: {},
      subject: rdf.namedNode('')
    }
  },
  computed: {
    ...mapState(useSelectionStore, ['resource_iri']),
    label () {
      if (this.dataModel.getQuads !== undefined) {
        const label = this.dataModel.getQuads(rdf.namedNode(this.resource_iri), rdf.namedNode('http://www.w3.org/2000/01/rdf-schema#label'), null)[0]
        if (label) {
          return label.object
        }
      }
      return ''
    },
    description () {
      if (this.dataModel.getQuads !== undefined) {
        const description = this.dataModel.getQuads(rdf.namedNode(this.resource_iri), rdf.namedNode('http://www.w3.org/2000/01/rdf-schema#comment'), null)[0]
        if (description) {
          return description.object
        }
      }
      return ''
    }
  },
  mounted () {
    this.getResource()
  },
  watch: {
    resource_iri (value) {
      this.getResource()
    }
  },
  methods: {
    async getResource () {
      this.subject = rdf.namedNode(this.resource_iri)
      console.log('get resource: ' + this.resource_iri)
      const resourceData = await this.store.getResource(this.resource_iri)
      this.dataModel = (await streamToStore(resourceData)).store
    },
    selectResource (resourceIri) {
      this.selection.changeResourceIri(resourceIri)
    }
  }
}

</script>
