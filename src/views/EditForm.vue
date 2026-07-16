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
            <button type="button" class="btn btn-outline-dark mb-0" @click="newTriple(index)">+</button>
            <button type="button" class="btn btn-outline-dark mb-0" @click="delTriple(index)">-</button>
          </td>
        </tr>
      </table>
      <button type="button" class="btn btn-outline-dark mb-0" @click="newTriple()" v-if="dataModel.length < 1">+</button>
      <button type="button" class="btn btn-outline-primary mb-0" @click="updateResource">Update Resource</button>
    </form>
  </div>
  <a @click="debug = true" v-if="debug == false">(show debug)</a>
  <div v-if="debug">
    <a @click="debug = false">(hide debug)</a>
    <div style="overflow: scroll; height: 400px">
    <div class="container">
      <div class="row">
        <div class="col">
          new
          <pre>subject: {{ subject }}
{{dataModel}}
          </pre>
        </div>
        <div class="col">
          old
          <pre>subject: {{ subject }}
{{originalDataModel}}
          </pre>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import TermInput from '../components/TermInput.vue'
import { cloneDeep } from 'lodash';
import { diff } from '../helpers/n3-compare'
import { mapState } from 'pinia'
import { useRdfStore } from '../stores/rdf'
import { useSelectionStore } from '../stores/selection'
import rdf from '@rdfjs/data-model'

export default {
  name: 'EditForm',
  setup () {
    const store = useRdfStore();
    return { store }
  },
  components: {
    TermInput
  },
  mounted () {
    this.getResource()
  },
  watch: {
    resource_iri (value) {
      this.getResource()
    }
  },
  data () {
    return {
      debug: false,
      subject: rdf.namedNode(''),
      originalDataModel: [],
      dataModel: []
    }
  },
  computed: {
    ...mapState(useSelectionStore, ['graph_iri', 'resource_iri']),
  },
  methods: {
    newTriple (index) {
      if (!index) {
        index = 0
      }
      this.dataModel.splice(index + 1, 0, rdf.quad(this.subject, rdf.namedNode(''), rdf.namedNode(''), rdf.namedNode(this.graph_iri)))
    },
    delTriple (index) {
      this.dataModel.splice(index, 1)
    },
    async getResource () {
      this.subject = rdf.namedNode(this.resource_iri)
      this.originalDataModel = await (await this.store.getResource(this.resource_iri)).toArray()
      this.dataModel = cloneDeep(this.originalDataModel)
    },
    async updateResource () {
      const difference = diff(this.originalDataModel, this.dataModel)
      try {
        await this.store.deleteInsertData({ deleteArray: difference.del, insertArray: difference.add })
        this.getResource()
      } catch (e) {
        console.error(e)
      }
    },
  }
}

</script>
