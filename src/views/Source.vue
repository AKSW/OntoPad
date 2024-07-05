<template>
  <div>
    <strong>Sources of {{ resource_iri }}</strong>
    (<a v-on:click="getResource">refresh</a>)
    <form>
      <div class="form-group">
        <label for="sourceInput" class="">Turtle</label>
        <textarea id="sourceInput" class="form-control" v-model="resourceSource" rows="15"></textarea>
      </div>
      <button type="button" class="btn btn-outline-primary mb-0" @click="updateResource()">Submit</button>
    </form>
    <a @click="debug = true" v-if="debug == false">(show debug)</a>
    <div v-if="debug">
    <a @click="debug = false">(hide debug)</a>
    <pre>{{ originalSource }} </pre>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useRdfStore } from '../stores/rdf'
import { useSelectionStore } from '../stores/selection'
import { usePrefixesStore } from '../stores/prefixes'
import { quadStreamToString, quadStreamToStore, stringToQuadStream } from '../helpers/rdf-parse'
import { diff_n3 } from '../helpers/n3-compare'

export default {
  name: 'Source',
  setup () {
    const store = useRdfStore();
    return { store }
  },
  mounted () {
    this.getResource()
  },
  watch: {
    resource_iri (value) {
      this.getResource()
    }
  },
  computed: {
    ...mapState(useSelectionStore, ['graph_iri', 'resource_iri']),
    ...mapState(usePrefixesStore, ['prefixes_flat']),
  },
  data () {
    return {
      debug: false,
      originalData: {},
      resourceSource: ''
    }
  },
  methods: {
    async getResource () {
      console.log('get resource')
      const resourceData = await this.store.getResource_comunica(this.resource_iri)
      const storeAndPrefix = await quadStreamToStore(resourceData)
      this.originalData = storeAndPrefix.store
      this.resourceSource = await quadStreamToString(this.originalData.match(), { format: 'text/turtle', prefixes: this.prefixes_flat })
    },
    async updateResource () {
      const newDataModel = await stringToQuadStream(this.resourceSource)
      const difference = diff_n3(this.originalData, newDataModel)
      this.store.insertDeleteData({ insertArray: difference.add, deleteArray: difference.del, graphIri: this.graph_iri })
    }
  }
}

</script>
