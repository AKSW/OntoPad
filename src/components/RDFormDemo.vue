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
      <select name="form" v-model="selected_form">
        <option v-for="(option, index) in formsForClass" v-bind:value="option" :key="index">{{ option }}</option>
      </select>
      <rdform v-if="data" :key="getKey(data, selected_form)" class="form-horizontal rdform" role="form" :template="require('@/assets/' + selected_form)" :submit="submit" :data="data"></rdform>
      <em>powered by <a href="https://github.com/simeonackermann/RDForm/">RDForm</a></em>
    </div>
  </div>
</template>

<script>
import { extend } from 'jquery'
import { mapState } from 'vuex'
import { DataFactory, Store } from 'n3'
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
  },
  watch: {
    resource_iri (value) {
      this.data = undefined
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
      ],
      data: undefined,
      selected_form: 'form.rdform.html',
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
    ...mapState(['graph_iri', 'resource_iri']),
    formsForClass () {
      const dataModel = new Store(this.dataModel)
      const classes = dataModel.getObjects(null, namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'), null)
      const forms = []
      for (const c in classes) {
        forms.push(...this.forms_class[classes[c].value])
      }
      if (forms.length) {
        // eslint-disable-next-line
        this.selected_form = forms[0]
      }
      return forms
    }
  },
  methods: {
    submit (result) {
      console.log('I\'ve been called')
      console.log(result)
      console.log(JSON.stringify(result, null, '\t'))
      const jsonldPromise = jsonld.toRDF(result, { format: 'application/n-quads' })
      jsonldPromise.then(async (newData) => {
        const [resultDataModel, prefixes] = await parseRDFtoRDFJS(newData, this.subject)
        this.dataModel = resultDataModel
        this.updateResource()
      })
    },
    async getResource () {
      this.subject = namedNode(this.resource_iri)
      const result = await this.$store.dispatch('getResource', this.resource_iri)

      const [resultDataModel, prefixes] = await parseRDFtoRDFJS(result.data, this.subject)
      this.originalDataModel = []
      this.dataModel = []
      // we need to iterate over the data to clone the quad objects
      for (const quadIndex in resultDataModel) {
        this.originalDataModel.push(extend(true, {}, resultDataModel[quadIndex]))
        this.dataModel.push(resultDataModel[quadIndex])
      }

      // Parse to JSON-LD
      this.data = await jsonld.fromRDF(result.data, { format: 'application/n-quads' })
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
