<template>
  <div>
    <strong>Sources of {{ resource_iri }}</strong>
    (<a v-on:click="getResource">refresh</a>)
    <form>
      <div class="form-group">
        <label for="sourceInput" class="">Turtle</label>
        <textarea id="sourceInput" class="form-control" v-model="resourceSource" rows="15"></textarea>
      </div>
      <b-button variant="primary" @click="updateResource()">Submit</b-button>
    </form>
    <a @click="debug = true" v-if="debug == false">(show debug)</a>
    <div v-if="debug">
    <a @click="debug = false">(hide debug)</a>
    <pre>{{ originalSource }} </pre>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Parser, Writer } from 'n3'
import { diff } from '@/helpers/n3-compare'

export default {
  name: 'Source',
  mounted () {
    this.getResource()
  },
  watch: {
    resource_iri (value) {
      this.getResource()
    }
  },
  computed: mapState(['resource_iri', 'graph_iri']),
  data () {
    return {
      debug: false,
      originalSource: '',
      resourceSource: '',
      prefixes: {
        foaf: 'http://xmlns.com/foaf/0.1/',
        ex: 'http://example.org/'
      }
    }
  },
  methods: {
    async getResource () {
      console.log('get resource')
      const resourceRDF = await this.$store.dispatch('getResource', this.resource_iri)
      console.log('parse resource')
      console.log(resourceRDF)
      const resourceData = await this.parse(resourceRDF.data, { format: 'application/n-triples' })
      console.log('serialize')
      this.originalSource = this.resourceSource = await this.serialize(resourceData, { format: 'text/turtle', prefixes: this.prefixes })
      console.log('serialized')
      console.log(this.originalSource)
      console.log(this.resourceSource)
    },
    async updateResource () {
      const a = this.parse(this.originalSource)
      const b = this.parse(this.resourceSource)

      const [originalDataModel, newDataModel] = await Promise.all([a, b])
      const difference = diff(originalDataModel, newDataModel)
      this.$store.commit('insertDeleteData', { insertArray: difference.add, deleteArray: difference.del, graphIri: this.graph_iri })
    },
    parse (source, parserConfig = {}) {
      const dataModel = []
      return new Promise((resolve, reject) => {
        const resourceParser = new Parser(parserConfig)
        resourceParser.parse(source, (error, quad, prefixes) => {
          if (error) {
            if (error === 'input is null') {
              resolve(dataModel)
            } else {
              reject(error)
            }
          } else if (quad) {
            dataModel.push(quad)
          } else {
            this.prefixes = { ...prefixes, ...this.prefixes }
            resolve(dataModel)
          }
        })
      })
    },
    serialize (data, serializerConfig = {}) {
      return new Promise((resolve, reject) => {
        const rdfWriter = new Writer(serializerConfig)
        data.forEach((quad) => {
          console.log(quad)
          rdfWriter.addQuad(quad)
        })
        rdfWriter.end((error, result) => {
          if (error !== null) {
            reject(error)
          }
          resolve(result)
        })
      })
    }
  }
}

</script>
