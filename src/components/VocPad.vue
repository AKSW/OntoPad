<template>
  <div class="row">
    <div class="col-3" style="height:80vh; overflow-y:scroll;">
      (<a v-on:click="getLists">refresh</a>)<br/>
      <b-card no-body>
        <template v-slot:header>
          <div class="d-flex justify-content-between align-items-center">
            <h6 class="mb-0">Class List</h6>
            <b-button v-b-modal.add_class>Add Class</b-button>
          </div>
        </template>
        <b-list-group flush v-for="(rdfClass, index) in classes" :key="'class-' + index">
          <b-list-group-item
            class="list-group-item py-2"
            :for="'class-' + index"
            style="cursor: move"
            draggable @dragstart='startDrag($event, rdfClass)'
            v-on:click="select(rdfClass.iri)">{{ shortenIri(rdfClass.iri) }}</b-list-group-item>
        </b-list-group>
      </b-card>
      <b-card no-body>
        <template v-slot:header>
          <div class="d-flex justify-content-between align-items-center">
            <h6 class="mb-0">Property List</h6>
            <b-button v-b-modal.add_property>Add Property</b-button>
          </div>
        </template>
        <b-list-group flush v-for="(rdfProperty, index) in properties" :key="'property-' + index">
          <b-list-group-item
            class="list-group-item py-2"
            :for="'property-' + index"
            style="cursor: move"
            draggable @dragstart='startDrag($event, rdfProperty)'
            v-on:click="select(rdfProperty.iri)">{{ shortenIri(rdfProperty.iri) }}</b-list-group-item>
        </b-list-group>
      </b-card>
      <b-modal id="add_class" title="Add Class" :no-close-on-backdrop="true" @ok="add_term('class')" size="lg">
        <form>
          <div class="form-group">
            <label for="class_iri">Class IRI</label>
            <div>
              <TermInput type="iri" id="class_iri" v-model="class_iri" />
            </div>
          </div>
          <div class="form-group">
            <label for="class_label">Label (rdfs:label)</label>
            <div>
              <TermInput type="literal" id="class_label" v-model="class_label" />
            </div>
          </div>
          <div class="form-group">
            <label for="class_comment">Comment (rdfs:comment)</label>
            <div>
              <TermInput type="literal" id="class_comment" v-model="class_comment" />
            </div>
          </div>
        </form>
      </b-modal>
      <b-modal id="add_property" title="Add Property" :no-close-on-backdrop="true" @ok="add_term('property')" size="lg">
        <form>
          <div class="form-group">
            <label for="property_iri">Property IRI</label>
            <div>
              <TermInput type="iri" id="property_iri" v-model="property_iri" />
            </div>
          </div>
          <div class="form-group">
            <label for="property_label">Label (rdfs:label)</label>
            <div>
              <TermInput type="literal" id="property_label" v-model="property_label" />
            </div>
          </div>
          <div class="form-group">
            <label for="property_comment">Comment (rdfs:comment)</label>
            <div>
              <TermInput type="literal" id="property_comment" v-model="property_comment" />
            </div>
          </div>
        </form>
      </b-modal>
      <b-modal id="configure_property" title="Configure Property Shape" :no-close-on-backdrop="true" @ok="editProp()" size="lg">
        <form>
          <div class="form-group">
            <label for="property_iri">Type</label>
            <div>
              <TermInput type="iri" id="property_iri" v-model="property_iri" />
            </div>
          </div>
          <div class="form-group">
            <label for="property_iri">Datatype</label>
            <div>
              <TermInput type="iri" id="property_iri" v-model="property_iri" />
            </div>
          </div>
          <div class="form-group">
            <label for="property_label">Class</label>
            <div>
              <TermInput type="literal" id="property_label" v-model="property_label" />
            </div>
          </div>
          <div class="form-group">
            <label for="property_comment">Cardinality</label>
            <div>
              <TermInput type="literal" id="property_comment" v-model="property_comment" />
            </div>
          </div>
        </form>
      </b-modal>
    </div>
    <div class="col-9">
      (<a v-on:click="getShapes">refresh</a>)<br/>
      <diagram :model="model" width="100%" height="600" @drop='onDrop($event)' @dropNode='onDropNode' @configurePort='configureProperty'></diagram>
      <button class="btn btn-primary" @click="saveShapes()">Save Schema/Shapes</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Diagram } from 'vue-diagrams'
import { v4 as uuidv4 } from 'uuid'
import TermInput from '@/components/TermInput'
import { diff } from '@/helpers/n3-compare'
import { DataFactory, Parser } from 'n3'
const { triple, namedNode, literal } = DataFactory

export default {
  name: 'VocPad',
  components: {
    TermInput,
    Diagram
  },
  data () {
    return {
      classes: [],
      properties: [],
      class_iri: namedNode('http://example.org/classes#'),
      class_label: literal(''),
      class_comment: literal(''),
      property_iri: namedNode('http://example.org/properties#'),
      property_label: literal(''),
      property_comment: literal(''),
      nodes: [],
      portIds: [],
      model: new Diagram.Model(),
      originalDataModel: [],
      // dataModel: [],
      prefixes: {
        "http://example.org/" : "ex:",
        "http://example.org/classes#" : "exc:",
        "http://example.org/properties#" : "exp:",
        "http://www.w3.org/1999/02/22-rdf-syntax-ns#" : "rdf:",
        "http://www.w3.org/2000/01/rdf-schema#" : "rdfs:",
        "http://www.w3.org/2001/XMLSchema#" : "xsd:",
        "http://xmlns.com/foaf/0.1/" : "foaf:",
        "http://www.w3.org/ns/shacl#" : "sh:",
      },
      next_x: null,
      next_y: null,
    }
  },
  computed: mapState(['graph_iri']),
  mounted () {
    this.getLists()
    this.getShapes()
  },
  watch: {
    graph_iri (value) {
      console.log('graph_iri changed' + value)
      this.getLists()
      this.getShapes()
    }
  },
  methods: {
    select (rdfClass) {
      console.log(rdfClass)
      this.$store.commit('changeResourceIri', rdfClass)
    },
    getLists () {
      this.$store.dispatch('sendQuery',
        "select distinct ?class ?property { \
          { \
            ?sc a ?class \
          } union { \
            ?class a <http://www.w3.org/2000/01/rdf-schema#Class> \
          } union { \
            ?class a <http://www.w3.org/2002/07/owl#Class> \
          } union { \
            ?sp ?property ?op \
          } union { \
            ?property a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property> \
          } union { \
            ?property a <http://www.w3.org/2002/07/owl#ObjectProperty> \
          } union { \
            ?property a <http://www.w3.org/2002/07/owl#DatatypeProperty> \
          } \
        } order by ?class ?property")
        .then(result => {
          let bindings = result.data.results.bindings
          this.classes = []
          this.properties = []
          for (let key in bindings) {
            if (bindings[key].class) {
              this.classes.push({iri: bindings[key].class.value, termType: "class"})
            }
            if (bindings[key].property) {
              this.properties.push({iri: bindings[key].property.value, termType: "property"})
            }
          }
        })
    },
    async add_term (termType) {
      let newTerm = []
      if (termType == 'class') {
        newTerm = [
          triple(this.class_iri, namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'), namedNode('http://www.w3.org/2000/01/rdf-schema#Class')),
          triple(this.class_iri, namedNode('http://www.w3.org/2000/01/rdf-schema#label'), this.class_label),
          triple(this.class_iri, namedNode('http://www.w3.org/2000/01/rdf-schema#comment'), this.class_comment),
        ]
      } else if (termType == 'property') {
        newTerm = [
          triple(this.property_iri, namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'), namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#Property')),
          triple(this.property_iri, namedNode('http://www.w3.org/2000/01/rdf-schema#label'), this.property_label),
          triple(this.property_iri, namedNode('http://www.w3.org/2000/01/rdf-schema#comment'), this.property_comment),
        ]
      }
      try {
        await this.$store.commit('insertDeleteData', {insertArray: newTerm, graphIri: this.graph_iri})
        this.getLists()
      } catch (e) {
        console.error(e)
      }
    },
    startDrag: (evt, item) => {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('iri', item.iri)
      evt.dataTransfer.setData('termType', item.termType)
      console.log("start dragging " + item)
    },
    onDrop (evt) {
      const iri = evt.dataTransfer.getData('iri')
      const termType = evt.dataTransfer.getData('termType')
      console.log("received " + iri)
      console.log(iri)
      console.log(termType)
      if (termType == "class") {
        this.addNodeShape("urn:nodeshape:" + uuidv4(), iri, evt.layerX, evt.layerY)
      }
    },
    onDropNode (evt, node) {
      const iri = evt.dataTransfer.getData('iri')
      const termType = evt.dataTransfer.getData('termType')
      console.log("received on diagram node " + iri)
      console.log(iri)
      if (termType == "property") {
        this.addPropertyShape(node, "urn:propertyshape:" + uuidv4(), iri)
      }
    },
    configureProperty (node, port) {
      console.log(node)
      console.log(port)
      console.log("configure " + node.object.shapeIri.id + " port" + port.object.shapeIri.id)
    },
    shortenIri (iriIn) {
      let iri = new URL(iriIn)
      let identifier = iri.toString()
      let rest = ""
      if (iri.hash) {
        let hashPos = identifier.lastIndexOf("#")
        rest = identifier.substr(0, hashPos+1)
        identifier = iri.hash.substr(1)
      } else if (iri.pathname) {
        let slashPos = identifier.lastIndexOf("/")
        rest = identifier.substr(0, slashPos+1)
        identifier = identifier.substr(slashPos+1)
      }
      if (this.prefixes[rest] && identifier.indexOf("#") < 0 && identifier.indexOf(":") < 0 && identifier.indexOf("/") < 0) {
        return this.prefixes[rest] + identifier
      }
      return iri.toString()
    },
    getShapeByPortId (portId) {
      return namedNode(this.portIds[portId])
    },
    getPortIdByShape (shapeIri) {
      let portId = this.portIds.indexOf(shapeIri)
      if (portId == -1) {
        return undefined
      }
      return portId
    },
    setShapePortIdMapping (shapeIri, portId) {
      let existingPortId = this.portIds.indexOf(shapeIri)
      if (existingPortId > -1 && existingPortId != portId) {
        console.log("Duplicate shapeIri should not happen")
      }
      this.portIds[portId] = shapeIri
    },
    async saveShapes () {
      let modelSerialization = this.model._model;
      console.log(this.model.serialize())
      let newSchema = []
      for (let nodeIndex in modelSerialization.nodes) {
        let node = modelSerialization.nodes[nodeIndex]
        let shapeIri = node.object.shapeIri
        let targetClass = node.object.targetClass
        for (let portIndex in node.ports) {
          let port = node.ports[portIndex]
          if (port.name === "IRI") {
            this.setShapePortIdMapping(shapeIri.id, port.id)
          } else {
            let propertyShapeIri = port.object.shapeIri
            let path = port.object.path
            this.setShapePortIdMapping(propertyShapeIri.id, port.id)
            newSchema.push(triple(shapeIri, namedNode('http://www.w3.org/ns/shacl#property'), propertyShapeIri))
            newSchema.push(triple(propertyShapeIri, namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'), namedNode('http://www.w3.org/ns/shacl#PropertyShape')))
            newSchema.push(triple(propertyShapeIri, namedNode('http://www.w3.org/ns/shacl#path'), path))
          }
        }
        newSchema.push(triple(shapeIri, namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'), namedNode('http://www.w3.org/ns/shacl#NodeShape')))
        newSchema.push(triple(shapeIri, namedNode('http://www.w3.org/ns/shacl#targetClass'), targetClass))
      }
      for (let linkIndex in modelSerialization.links) {
        let link = modelSerialization.links[linkIndex]
        newSchema.push(triple(this.getShapeByPortId(link.from), namedNode('http://www.w3.org/ns/shacl#node'), this.getShapeByPortId(link.to)))
      }
      let difference = diff(this.originalDataModel, newSchema)
      console.log(difference)
      try {
        await this.$store.commit('insertDeleteData', {insertArray: difference['add'], deleteArray: difference['del'], graphIri: this.graph_iri})
        // this.getShapes()
      } catch (e) {
        console.error(e)
      }
    },
    nextPosition (reset = false) {
      if (reset || this.next_x === null) {
        this.next_x = -1.75
        this.next_y = 0
      } else {
        if (this.next_x < 1) {
          this.next_x += 1
        } else {
          this.next_x = -1.75
          this.next_y += 1
        }
      }
      return {x: this.next_x * 240, y: this.next_y * 180}
    },
    addNodeShape (nodeShapeIri, targetClassIri, x = null, y = null, width = 200) {
      if (this.nodes[nodeShapeIri] !== undefined) {
        return this.nodes[nodeShapeIri]
      } else {
        let nodeObject = {
          title: this.shortenIri(targetClassIri),
          targetClass: namedNode(targetClassIri),
          shapeIri: namedNode(nodeShapeIri),
        }
        if (x === null || y === null) {
          let nextPosition = this.nextPosition()
          x = nextPosition.x
          y = nextPosition.y
        }
        let node = this.model.addNode(nodeObject, x, y, width)
        this.nodes[nodeShapeIri] = node
        this.setShapePortIdMapping(nodeShapeIri, node.addInPort("IRI"))
        return node
      }
    },
    addPropertyShape (node, propertyShapeIri, pathIri) {
      if (this.getPortIdByShape(propertyShapeIri)) {
        return this.getPortIdByShape(propertyShapeIri)
      }
      let portObject = {
        title: this.shortenIri(pathIri),
        path: namedNode(pathIri),
        shapeIri: namedNode(propertyShapeIri)
      }
      let portId = node.addOutPort(portObject)
      this.setShapePortIdMapping(propertyShapeIri, portId)
      return portId
    },
    getShapes () {
      this.$store.dispatch('sendQuery',
        "PREFIX sh: <http://www.w3.org/ns/shacl#> \
        select distinct ?nodeShape ?targetClass ?propertyShape ?path ?nodeShapeRef ?targetClassRef { \
          ?nodeShape a sh:NodeShape ; \
            sh:targetClass ?targetClass . \
          optional { \
            ?nodeShape sh:property ?propertyShape . \
            ?propertyShape sh:path ?path . \
            optional { \
              ?propertyShape sh:node ?nodeShapeRef . \
              ?nodeShapeRef sh:targetClass ?targetClassRef . \
            } \
          } \
        } order by ?nodeShape ?propertyShape")
        .then(result => {
          let bindings = result.data.results.bindings
          for (let key in bindings) {
            let node = this.addNodeShape(bindings[key].nodeShape.value, bindings[key].targetClass.value)
            if (bindings[key].propertyShape && bindings[key].path) {
              let port = this.addPropertyShape(node, bindings[key].propertyShape.value, bindings[key].path.value)
              if (bindings[key].nodeShapeRef && bindings[key].targetClassRef) {
                this.addNodeShape(bindings[key].nodeShapeRef.value, bindings[key].targetClassRef.value)
                this.model.addLink(port, this.getPortIdByShape(bindings[key].nodeShapeRef.value));
              }
            }
          }
          this.nextPosition(true)
        })
        this.$store.dispatch('sendQuery', {
          query: "PREFIX sh: <http://www.w3.org/ns/shacl#> \
          construct { \
            ?nodeShape a sh:NodeShape ; \
              sh:targetClass ?targetClass ; \
              sh:property ?propertyShape . \
            ?propertyShape a ?propertyShapeType ; \
              sh:path ?path ; \
              sh:node ?nodeShapeRef . \
            ?nodeShapeRef sh:targetClass ?targetClassRef . \
          } where { \
            ?nodeShape a sh:NodeShape ; \
              sh:targetClass ?targetClass . \
            optional { \
              ?nodeShape sh:property ?propertyShape . \
              ?propertyShape sh:path ?path . \
              optional { \
                ?propertyShape sh:node ?nodeShapeRef . \
                ?nodeShapeRef sh:targetClass ?targetClassRef . \
              } \
              optional { \
                ?propertyShape a ?propertyShapeType . \
              } \
            } \
          }", data: true}
        )
        .then(result => {
          const parser = new Parser()
          this.originalDataModel = []
          parser.parse(result.data, (error, quad, prefixes) => {
            if (error) {
              console.log(error)
            } else if (quad) {
                this.originalDataModel.push(quad)
            } else {
              console.log('done')
            }
          })
        })
    }
  }
}

</script>
