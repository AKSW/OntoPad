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
        <button class="btn btn-primary" @click="updateResource">Update Resource</button>
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
import { extend } from 'jquery'
import { mapState } from 'vuex'
import TermInput from '@/components/TermInput'
import { DataFactory, Parser } from 'n3'
import { diff } from '@/helpers/n3-compare'
// import * as jsonld from 'jsonld'
const { triple, namedNode, blankNode } = DataFactory

export default {
  name: 'EditForm',
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
  computed: mapState(['graph_iri', 'resource_iri']),
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
      this.$store.dispatch('getResource', this.resource_iri)
        .then(result => {
          const parser = new Parser()
          this.originalDataModel = []
          this.dataModel = []
          parser.parse(result.data, (error, quad, prefixes) => {
            if (error) {
              console.log(error)
            } else if (quad) {
              if (quad.subject.id === this.subject.id) {
                this.originalDataModel.push(extend(true, {}, quad)) // clone quad
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
      for (let index in this.dataModel) {
        let statement = this.dataModel[index]
        statement.subject = this.subject
      }
      let difference = diff(this.originalDataModel, this.dataModel)
      try {
        await this.$store.commit('insertDeleteData', {insertArray: difference['add'], deleteArray: difference['del'], graphIri: this.graph_iri})
        this.getResource()
      } catch (e) {
        console.error(e)
      }
    }
  }
}

</script>
