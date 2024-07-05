<template>
  <div>
    <dl>
      <dt>IRI</dt>
      <dd>{{ resource_iri }}</dd>
      <dt>Type</dt>
      <dd><Term v-model:term="res_type" @click="selectResource"/></dd>
    </dl>
  </div>
  <div>
    <strong>Shape of {{ resource_iri }}</strong>
    (<a v-on:click="getShape">refresh</a>)
    <form>
      <div class="form-group">
        <label for="sourceInput" class="">Turtle</label>
        <textarea id="sourceInput" class="form-control" v-model="this.shapeTurtle" rows="15"></textarea>
      </div>
      <button type="button" class="btn btn-outline-primary mb-0" @click="updateResource()">Submit</button>
    </form>
  </div>
  <div>
    <!--
      SHACL shapes can be defined on the attribute 'data-shapes'
      or can be loaded by setting attribute 'data-shapes-url'
    -->
    <!-- <shacl-form data-shapes="
              @prefix sh: <http://www.w3.org/ns/shacl#> .
              @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
              @prefix rdfs:    <http://www.w3.org/2000/01/rdf-schema#> .
              @prefix ex: <http://example.org#> .

              ex:DefaultShape
                a sh:NodeShape, rdfs:Class ;
                sh:property [
                  sh:name 'class' ;
                  sh:path rdf:type ;
                  sh:minCount 1 ;
                  sh:maxCount 1 ;
                ] ;
                sh:property [
                  sh:name 'label' ;
                  sh:path rdfs:label ;  
                  sh:maxCount 1 ;
                ] .

    "></shacl-form> -->
    <!-- <shacl-form data-shapes="{{ this.shapeTurtle }}"></shacl-form> -->
  </div>
</template>

<script>
import Term from '../components/Term.vue'
import { Readable } from 'readable-stream'
import { mapState } from 'pinia'
import { useRdfStore } from '../stores/rdf'
import { Store, StreamParser, Parser, Writer } from 'n3'
import { registerPlugin } from '@ulb-darmstadt/shacl-form'
import { getShapeQuery4Target, getShapeQuery4Instance } from '../helpers/queries'
// import { LeafletPlugin } from '@ulb-darmstadt/shacl-form/plugins/leaflet.js'
// import * as jsonld from 'jsonld'
import rdf from '@rdfjs/data-model'

export default {
  name: 'FormDemo',
  setup () {
    const store = useRdfStore();
    return { store }
  },
  components: {
    Term
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
      dataModel: {},
      shapeTurtle: '',
      subject: rdf.namedNode(''),
    }
  },
  computed: {
    ...mapState(useRdfStore, ['graph_iri', 'resource_iri']),
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
    getResource () {
      this.subject = rdf.namedNode(this.resource_iri)
      console.log('get resource: ' + this.resource_iri)
      this.store.getResource(this.resource_iri)
        .then(result => {
          const streamParser = new StreamParser()
          Readable.from([result.data]).pipe(streamParser)

          const n3_store = new Store()
          n3_store.import(streamParser).on('end', () => {
            this.dataModel = n3_store
          })
        })
    },
    async getShape () {
      console.log('Get shape for target class')
      var shapeRDF = await this.store.sendQuery({query: getShapeQuery4Target(this.resource_iri), data: true}) // if class

      if (shapeRDF.data.length == 0) {
        console.log('Get shape for class of current resource')
        var shapeRDF = await this.store.sendQuery({query: getShapeQuery4Instance(this.resource_iri), data: true}) // try for instance
      }

      if (shapeRDF.data.length == 0) {
        console.log('Use default shape')
        this.shapeTurtle = `
          @prefix sh: <http://www.w3.org/ns/shacl#> .
          @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
          @prefix rdfs:    <http://www.w3.org/2000/01/rdf-schema#> .
          @prefix ex: <http://example.org#> .

          ex:DefaultShape
            a sh:NodeShape, rdfs:Class ;
            sh:property [
              sh:name 'class' ;
              sh:path rdf:type ;
              sh:minCount 1 ;
              sh:maxCount 1 ;
            ] ;
            sh:property [
              sh:name 'label' ;
              sh:path rdfs:label ;  
              sh:maxCount 1 ;
            ] .`
      } else {
        console.log('Use found shape')
        var shapeData = await this.parse(shapeRDF.data, { format: 'application/n-triples' })
        this.shapeTurtle = await this.serialize(shapeData, { format: 'text/turtle', prefixes: this.prefixes })
      }
    },
    selectResource (resourceIri) {
      this.store.changeResourceIri(resourceIri)
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
