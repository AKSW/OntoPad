<template>
  <!-- link href="css/datepicker.css" rel="stylesheet" media="screen" -->
  <!-- link href="css/smoothness/jquery-ui.custom.min.css" rel="stylesheet" -->
  <!-- link href="css/bootstrap.min.css" rel="stylesheet" media="screen" -->
  <!-- link href="css/rdform.css" rel="stylesheet" media="screen" -->
  <div>
    <div v-if="!formsForClass.length" class="alert alert-info" role="alert">
      No suitable form template found.
    </div>
    <div v-if="formsForClass.length">
      <select name="form" v-model="shapeIri">
        <option v-for="(option, index) in formsForClass" v-bind:value="option" :key="index">{{ option }}</option>
      </select>
      <rdform v-if="data && formShape.length > 0" :key="getKey(data, shapeIri)" class="form-horizontal rdform" role="form" :template="formShape" :rootShape="shapeIri" :submit="submit" :data="data"></rdform>
      <em>powered by <a href="https://github.com/simeonackermann/RDForm/">RDForm</a></em>
    </div>
  </div>
</template>

<script>
import { extend } from 'jquery'
import { mapState } from 'vuex'
import { DataFactory } from 'n3'
import rdform from '@/components/rdform'
import { diff } from '@/helpers/n3-compare'
import { parseRDFtoRDFJS } from '@/helpers/rdf-parse'

import * as jsonld from 'jsonld'
const { triple, namedNode, blankNode } = DataFactory

export default {
  name: 'RDFormDemo',
  components: {
    rdform
  },
  mounted () {
    this.data = undefined
    this.getResource()
    this.getShapes()
  },
  watch: {
    resource_iri (value) {
      this.data = undefined
      this.getResource()
      this.getShapes()
    },
    shapeIri (value) {
      this.getShape()
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
      ],
      data: undefined,
      shapeIri: '',
      formShape: {},
      formsForClass: [],
      forms_class: {
        'http://xmlns.com/foaf/0.1/Group': [
          'familien.rdform.html'
        ],
        'http://xmlns.com/foaf/0.1/Person': [
          'akswperson.rdform.html',
          'form.rdform.html',
          'gaeste.rdform.html',
          'pfarrerbuchperson.rdform.html'
        ],
        'http://schema.org/Event': [
          'event.rdform.html'
        ]
      }
    }
  },
  computed: {
    ...mapState(['graph_iri', 'resource_iri'])
  },
  methods: {
    async submit (result) {
      console.log('I\'ve been called')
      console.log(result)
      console.log(JSON.stringify(result, null, '\t'))
      const newData = await jsonld.toRDF(result, { format: 'application/n-quads' })
      console.log(newData)
      const [resultDataModel] = await parseRDFtoRDFJS(newData, this.subject)
      this.dataModel = resultDataModel
      this.updateResource()
    },
    async getResource () {
      this.subject = namedNode(this.resource_iri)
      const result = await this.$store.dispatch('getResource', this.resource_iri)

      const [resultDataModel] = await parseRDFtoRDFJS(result.data, this.subject)
      this.originalDataModel = []
      this.dataModel = []
      // we need to iterate over the data to clone the quad objects
      for (const quadIndex in resultDataModel) {
        this.originalDataModel.push(extend(true, {}, resultDataModel[quadIndex]))
        this.dataModel.push(resultDataModel[quadIndex])
      }

      // Parse to JSON-LD
      this.data = await jsonld.fromRDF(result.data, { format: 'application/n-quads' })
      console.log('got data for ' + this.resource_iri)
      console.log(JSON.stringify(this.data, null, '\t'))
    },
    async updateResource () {
      for (const index in this.dataModel) {
        const statement = this.dataModel[index]
        statement.subject = this.subject
      }
      const difference = diff(this.originalDataModel, this.dataModel)
      console.log(JSON.stringify(difference))
      try {
        await this.$store.commit('insertDeleteData', { insertArray: difference.add, deleteArray: difference.del, graphIri: this.graph_iri })
        this.$bvToast.toast('The form data was saved to the store', {
          title: 'Save Form',
          autoHideDelay: 500
        })
        this.getResource()
      } catch (e) {
        this.$bvToast.toast('An error occurred when saving the form data to the store', {
          title: 'Save Form',
          variant: 'danger',
          autoHideDelay: 5000
        })
        console.error(e)
      }
    },
    async getShapes () {
      // const dataModel = new Store(this.dataModel)
      // const classes = dataModel.getObjects(null, namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'), null)
      const forms = []
      const result = await this.$store.dispatch('sendQuery',
        // eslint-disable-next-line
        `PREFIX sh: <http://www.w3.org/ns/shacl#>
        select distinct ?nodeShape ?targetClass {
          ?nodeShape a sh:NodeShape ;
            sh:targetClass ?targetClass .
        } order by ?nodeShape`)
      const bindings = result.data.results.bindings
      for (const key in bindings) {
        forms.push(bindings[key].nodeShape.value)
        // bindings[key].targetClass.value
      }
      // for (const c in classes) {
      // }
      this.formsForClass = forms
    },
    async getShape () {
      const result = await this.$store.dispatch('sendQuery', {
        query: `PREFIX sh: <http://www.w3.org/ns/shacl#>
          PREFIX rdform: <https://github.com/simeonackermann/RDForm/>
          construct {
            <${this.shapeIri}> a sh:NodeShape ;
              sh:targetClass ?targetClass ;
              sh:property ?propertyShape ;
              rdform:resource ?iripattern .
            ?propertyShape a ?propertyShapeType ;
              sh:path ?path ;
              sh:node ?nodeShapeRef .
            ?nodeShapeRef sh:targetClass ?targetClassRef .
          } where {
            <${this.shapeIri}> a sh:NodeShape ;
              sh:targetClass ?targetClass .
            optional {
              <${this.shapeIri}> sh:property ?propertyShape .
              ?propertyShape sh:path ?path .
              optional {
                ?propertyShape sh:node ?nodeShapeRef .
                ?nodeShapeRef sh:targetClass ?targetClassRef .
              }
              optional {
                ?propertyShape a ?propertyShapeType .
              }
            }
            optional {
              <${this.shapeIri}> rdform:resource ?iripattern
            }
          }`,
        data: true
      })
      const formShape = await jsonld.fromRDF(result.data, { format: 'application/n-quads' })
      this.formShape = formShape
    },
    getKey (data, selectedForm) {
      // hack according to https://stackoverflow.com/a/57690135/414075
      let dataKey = 'nothing'
      if (data) {
        dataKey = data.length.toString()
      }
      const key = selectedForm + dataKey
      return key
    }
  }
}

</script>
