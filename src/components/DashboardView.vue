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
import { mapState } from 'vuex'
import { DataFactory, Parser, Store } from 'n3'
const { namedNode } = DataFactory

export default {
  name: 'DashboardView',
  components: {
    Term
  },
  data () {
    return {
      label: '',
      description: '',
      dataModel: {}
    }
  },
  computed: mapState(['resource_iri']),
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
      this.$store.dispatch('getResource', this.resource_iri)
        .then(result => {
          const parser = new Parser()
          this.originalDataModel = []
          this.dataModel = new Store()
          parser.parse(result.data, (error, quad, prefixes) => {
            if (error) {
              console.log(error)
            } else if (quad) {
              if (quad.subject.id === this.subject.id) {
                this.dataModel.addQuad(quad)
              } else {
                console.log('skip')
                console.log(quad.subject.id)
                console.log(this.subject.id)
              }
            } else {
              console.log('done')
              this.updateLabelAndDescription()
            }
          })
        })
    },
    updateLabelAndDescription () {
      const label = this.dataModel.getQuads(namedNode(this.resource_iri), namedNode('http://www.w3.org/2000/01/rdf-schema#label'), null)[0]
      const description = this.dataModel.getQuads(namedNode(this.resource_iri), namedNode('http://www.w3.org/2000/01/rdf-schema#comment'), null)[0]
      if (label) {
        this.label = label.object
      }
      if (description) {
        this.description = description.object
      }
    },
    selectResource (resourceIri) {
      this.$store.commit('changeResourceIri', resourceIri)
    }
  }
}

</script>
