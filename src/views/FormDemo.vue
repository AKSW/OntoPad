<template>
  <splitpanes class="default-theme">
    <pane size="70">
      <div>
        <dl>
          <dt>IRI</dt>
          <dd>{{ resource_iri }}</dd>
          <dt>Type</dt>
          <dd><Term v-model:term="res_type" @click="selectResource"/></dd>
        </dl>
      </div>
      <div>
        <!--
          SHACL shapes can be defined on the attribute 'data-shapes'
          or can be loaded by setting attribute 'data-shapes-url'
        -->
        <shacl-form @change="getFormTurtle" ref="myform" data-submit-button data-generate-node-shape-reference data-show-node-ids v-bind:data-values="dataTurtle" v-bind:data-shapes="shapeTurtle" v-bind:data-values-subject="dataSubject"></shacl-form>
      </div>
    </pane>
    <pane size="30">
      <InstanceList style="height:80vh; overflow-y:scroll;" />
    </pane>
  </splitpanes>
</template>

<script>
import Term from '../components/Term.vue'
import { Readable } from 'readable-stream'
import { mapState } from 'pinia'
import { useRdfStore } from '../stores/rdf'
import { useSelectionStore } from '../stores/selection'
import { Store, StreamParser, Parser, Writer } from 'n3'
import { registerPlugin } from '@ulb-darmstadt/shacl-form'
import { getShapeQuery4Target, getShapeQuery4Instance, getResourceQuery } from '../helpers/queries'
import { defaultShape, defaultData } from '../helpers/rdf-data'
import { quadStreamToString } from '../helpers/rdf-parse'
import { streamToStore } from 'rdf-dereference-store';
import { Splitpanes, Pane } from 'splitpanes'
// import { LeafletPlugin } from '@ulb-darmstadt/shacl-form/plugins/leaflet.js'
// import * as jsonld from 'jsonld'
import rdf from '@rdfjs/data-model'
import InstanceList from '@/components/InstanceList.vue'

export default {
  name: 'FormDemo',
  setup () {
    const store = useRdfStore();
    const selection = useSelectionStore();
    return { store, selection }
  },
  components: {
    Term,
    InstanceList,
    Splitpanes,
    Pane
  },
  mounted () {
    this.getFormData();
  },
  watch: {
    resource_iri (value) {
      this.getResource()
    },
    resource_iri (value) {
      this.getFormData()
    }
  },
  data () {
    return {
      dataModel: {},
      dataTurtle: defaultData,
      dataSubject: "",
      shapeTurtle: defaultShape,
      subject: rdf.namedNode(''),
    }
  },
  computed: {
    ...mapState(useSelectionStore, ['graph_iri', 'resource_iri', 'is_class']),
    res_type () {
      if (this.dataModel.getQuads !== undefined) {
        const res_type = this.dataModel.getQuads(rdf.namedNode(this.resource_iri), rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'), null)[0]
        if (res_type) {
          return res_type.object
        }
      }
      return ''
    }
  },
  methods: {
    getFormTurtle (event) {
      const form = this.$refs.myform
      if (event.detail?.valid) {
        const triples = form.serialize()
        console.log('entered form data', triples)
      }
    },
    async getResource () {
      this.subject = rdf.namedNode(this.resource_iri)
      const resourceData = await this.store.getResource(this.resource_iri)
      const originalData = (await quadStreamToStore(resourceData)).store
      return await quadStreamToString(originalData.match(), { format: 'application/n-triples', prefixes: this.prefixes_flat })
    },
    async getInstance () {
      var result = await this.store.sendQuery({query: await getResourceQuery(this.resource_iri)})
      if (result.resultType === 'quads') {
        const quadStream = await result.execute()
        var instanceData = await quadStream.toArray()
      }
      var instance_string = await this.serialize(instanceData, { format: 'application/n-triples', prefixes: this.prefixes })
      return instance_string.replaceAll("\"", "'")
    },
    async getFormData () {
      console.log('Form: Get form data')
      let shapeData = []
      let result = ""
      let dataSubject = ""

      if (this.is_class) {
        result = await this.store.sendQuery({query: await getShapeQuery4Target(this.resource_iri)})
      } else {
        result = await this.store.sendQuery({query: await getShapeQuery4Instance(this.resource_iri)})
        dataSubject = this.resource_iri
      }

      if (result.resultType === 'quads') {
        const quadStream = await result.execute()
        shapeData = await quadStream.toArray()
      }
      let shapeTurtle = "" 
      let dataTurtle = ""

      if (shapeData.length < 1) {
        console.log('Form: Use default shape')
        shapeTurtle = defaultShape
      } else {
        console.log('Form: Use found shape')
        let data_string = ""

        if (this.is_class == false) {
          let instance_data = await this.getInstance()
          dataTurtle = instance_data.replaceAll("\"", "'")
        }

        let shape_string = await this.serialize(shapeData, { format: 'application/n-triples', prefixes: this.prefixes })
        shapeTurtle = shape_string.replaceAll("\"", "'")
      }
      // debug output TODO: remove when working
      console.log('Form: Shape as n-triples')
      console.log(shapeTurtle)
      console.log('Form: Instance as n-triples')
      console.log(dataTurtle)
      console.log('Form: dataSubject')
      console.log(dataSubject)
      this.shapeTurtle = shapeTurtle
      this.dataSubject = dataSubject
      this.dataTurtle = dataTurtle
    },
    selectResource (resourceIri) {
      this.selection.changeResourceIri(resourceIri)
    },
    serialize (data, serializerConfig = {}) {
      return new Promise((resolve, reject) => {
        const rdfWriter = new Writer(serializerConfig)
        data.forEach((quad) => {
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