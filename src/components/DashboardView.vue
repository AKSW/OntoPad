<template>
  <div>
    <strong>Resource Dashboard</strong>
    <dl>
      <dt>IRI</dt>
      <dd>{{ resource_iri }}</dd>
      <dt>Label</dt>
      <dd><Term v-model="label" @click="selectResource"/></dd>
      <dt>Description</dt>
      <dd><Term v-model="description" @click="selectResource"/></dd>
    </dl>
    <table width="100%" v-if="dataModel.getQuads !== undefined">
      <tr>
        <th scope="col" width="45%">Predicate</th>
        <th scope="col" width="auto">Object</th>
      </tr>
      <tr v-for="(triple, index) in dataModel.getQuads(null, null, null)" :key="index">
        <td><Term v-model="triple.predicate" @click="selectResource"/></td>
        <td><Term v-model="triple.object" @click="selectResource"/></td>
      </tr>
    </table>
  </div>
</template>

<script>
import Term from '@/components/Term'
import Streamify from 'streamify-string'
import { mapState } from 'vuex'
import { DataFactory, Store, StreamParser } from 'n3'
const { namedNode } = DataFactory

export default {
  name: 'DashboardView',
  components: {
    Term
  },
  data () {
    return {
      dataModel: {},
      subject: namedNode('')
    }
  },
  computed: {
    ...mapState(['resource_iri']),
    label () {
      if (this.dataModel.getQuads !== undefined) {
        const label = this.dataModel.getQuads(namedNode(this.resource_iri), namedNode('http://www.w3.org/2000/01/rdf-schema#label'), null)[0]
        if (label) {
          return label.object
        }
      }
      return ''
    },
    description () {
      if (this.dataModel.getQuads !== undefined) {
        const description = this.dataModel.getQuads(namedNode(this.resource_iri), namedNode('http://www.w3.org/2000/01/rdf-schema#comment'), null)[0]
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
    getResource () {
      this.subject = namedNode(this.resource_iri)
      console.log('get resource: ' + this.resource_iri)
      this.$store.dispatch('getResource', this.resource_iri)
        .then(result => {
          const streamParser = new StreamParser()
          Streamify(result.data).pipe(streamParser)
          const store = new Store()
          store.import(streamParser).on('end', () => {
            this.dataModel = store
          })
        })
    },
    selectResource (resourceIri) {
      this.$store.commit('changeResourceIri', resourceIri)
    }
  }
}

</script>
