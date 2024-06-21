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
            <td><TermInput :id="'form-pred-' + index" :term="triple.predicate" @update:term="newValue => dataModel[index] = updateTriple(triple, 1, newValue)" type="iri" /></td>
            <td><TermInput :id="'form-obj-' + index" :term="triple.object" @update:term="newValue => dataModel[index] = updateTriple(triple, 2, newValue)" /></td>
            <td>
              <button type="button" class="btn btn-outline-dark mb-0" @click="newTriple(index)">+</button>
              <button type="button" class="btn btn-outline-dark mb-0" @click="delTriple(index)">-</button>
            </td>
          </tr>
        </table>
        <button type="button" class="btn btn-outline-dark mb-0" @click="newTriple()" v-if="dataModel.length < 1">+</button>
        <button type="button" class="btn btn-outline-primary mb-0" @click="updateResource">Update Resource</button>
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
import TermInput from '../components/TermInput.vue'
import { DataFactory, Parser } from 'n3'
import { diff } from '../helpers/n3-compare'
import { mapState } from 'pinia'
import { useRdfStore } from '../stores/rdf'
// import * as jsonld from 'jsonld'
const { triple, namedNode, blankNode } = DataFactory

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
      subject: namedNode(''),
      originalDataModel: [
        triple(blankNode(''), namedNode(''), namedNode(''))
      ],
      dataModel: [
        triple(blankNode(''), namedNode(''), namedNode(''))
      ]
    }
  },
  computed: {
    ...mapState(useRdfStore, ['graph_iri', 'resource_iri']),
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
    getResource () {
      this.subject = namedNode(this.resource_iri)
      this.store.getResource(this.resource_iri)
        .then(result => {
          const parser = new Parser()
          this.originalDataModel = []
          this.dataModel = []
          parser.parse(result.data, (error, quad, prefixes) => {
            if (error) {
              console.log(error)
            } else if (quad) {
              if (quad.subject.id === this.subject.id) {
                this.originalDataModel.push(structuredClone(quad)) // clone quad
                this.dataModel.push(quad)
              } else {
                console.log('skip')
                console.log(quad.subject.id)
                console.log(this.subject.id)
              }
            } else {
              console.log('done')
            }
          })
        })
    },
    async updateResource () {
      for (const index in this.dataModel) {
        const statement = this.dataModel[index]
        statement.subject = this.subject
      }
      const difference = diff(this.originalDataModel, this.dataModel)
      try {
        await this.store.insertDeleteData({ insertArray: difference.add, deleteArray: difference.del, graphIri: this.graph_iri })
        this.getResource()
      } catch (e) {
        console.error(e)
      }
    },
    updateTriple(tripleIn, pos, term) {
      if (pos == 0) {
        return triple(term, tripleIn.predicate, tripleIn.object)
      } else if (pos == 1) {
        return triple(tripleIn.subject, term, tripleIn.object)
      } else if (pos == 2) {
        return triple(tripleIn.subject, tripleIn.predicate, term)
      }
      return tripleIn
    }
  }
}

</script>
