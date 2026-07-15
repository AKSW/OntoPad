<template>
  <!-- Layout -->
  <div class="row">
    <div class="col-3" style="height:80vh; overflow-y:scroll;">
      <!-- Class List -->
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h6 class="mb-0">Class List</h6>
          <div>
            <button type="button" class="btn btn-secondary" v-on:click="getLists" title="Reload" aria-label="Reload">
              <i class="bi bi-arrow-repeat"></i>
            </button>
            <button type="button" class="btn btn-secondary" v-on:click="() => {add_class_modal.show()}" title="Create Class" aria-label="Create Class">
              <i class="bi bi-plus-square"></i>
            </button>
          </div>
        </div>
        <div class="list-group list-group-flush">
          <li class="list-group-item py-2"
            v-for="(rdfClass, index) in classes" :key="'class-' + index"
            :for="'class-' + index"
            style="cursor: move"
            draggable="true"
            @dragstart='startDrag($event, rdfClass)'
            :title="rdfClass.iri"
            v-on:click="select(rdfClass.iri)">{{ shortenIri(rdfClass.iri) }}</li>
        </div>
      </div>
      <!-- Property List -->
      <div class="card">
        <div class="card-header">
          <div class="d-flex justify-content-between align-items-center">
            <h6 class="mb-0">Property List</h6>
            <button type="button" class="btn btn-secondary" v-on:click="() => {add_property_modal.show()}" title="Create Property" aria-label="Create Property">
              <i class="bi bi-plus-square"></i>
            </button>
          </div>
        </div>
        <div class="list-group list-group-flush">
          <li class="list-group-item py-2"
            v-for="(rdfProperty, index) in properties" :key="'property-' + index"
            :for="'property-' + index"
            style="cursor: move"
            draggable="true"
            :title="rdfProperty.iri"
            @dragstart='startDrag($event, rdfProperty)'
            v-on:click="select(rdfProperty.iri)">{{ shortenIri(rdfProperty.iri) }}</li>
        </div>
      </div>
    </div>
    <div class="col-9">
      <!-- Shape Composer -->
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h6 class="mb-0">Shape Composer</h6>
          <div>
            <button type="button" class="btn btn-secondary mb-0" v-on:click="getShapes" title="Reload" aria-label="Reload">
              <i class="bi bi-arrow-repeat"></i>
            </button>
            <button type="button" class="btn btn-secondary" v-on:click="saveShapes" title="Save Schema/Shapes" aria-label="Save Schema/Shapes">
              <i class="bi bi-save"></i>
            </button>
          </div>
        </div>
        <div class="card-body">
          <diagram :model="model" width="100%" height="600" @drop='onDrop($event)' @dropNode='onDropNode' @configurePort='configureProperty' @dragover.prevent="() => {}"></diagram>
        </div>
      </div>
    </div>
  </div>
  <!-- End Layout -->

  <!-- Modals -->
  <!-- Add Class Modal -->
  <div class="modal" ref="add_class" data-bs-backdrop="static">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Class</h5>
          <button type="button" class="btn-close" @click="add_class_modal.hide()" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="class_iri">Class IRI</label>
              <div>
                <TermInput type="iri" id="class_iri" v-model:term="class_iri" />
              </div>
            </div>
            <div class="form-group">
              <label for="class_label">Label (rdfs:label)</label>
              <div>
                <TermInput type="literal" id="class_label" v-model:term="class_label" />
              </div>
            </div>
            <div class="form-group">
              <label for="class_comment">Comment (rdfs:comment)</label>
              <div>
                <TermInput type="literal" id="class_comment" v-model:term="class_comment" />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="add_class_modal.hide()">Close</button>
          <button type="button" class="btn btn-primary" @click="add_term('class')">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Add Property Modal -->
  <div class="modal fade" ref="add_property" data-bs-backdrop="static">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Property</h5>
          <button type="button" class="btn-close" @click="add_property_modal.hide()" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="property_iri">Property IRI</label>
              <div>
                <TermInput type="iri" id="property_iri" v-model:term="property_iri" />
              </div>
            </div>
            <div class="form-group">
              <label for="property_label">Label (rdfs:label)</label>
              <div>
                <TermInput type="literal" id="property_label" v-model:term="property_label" />
              </div>
            </div>
            <div class="form-group">
              <label for="property_comment">Comment (rdfs:comment)</label>
              <div>
                <TermInput type="literal" id="property_comment" v-model:term="property_comment" />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="add_property_modal.hide()">Close</button>
          <button type="button" class="btn btn-primary" @click="add_term('property')">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Configure Property Shape Modal -->
  <div class="modal fade" ref="configure_property" data-bs-backdrop="static">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Configure Property Shape</h5>
        <button type="button" class="btn-close" @click="configure_property.hide()" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="property_iri">Type</label>
            <div>
              <TermInput type="iri" id="property_iri" v-model:term="property_iri" />
            </div>
          </div>
          <div class="form-group">
            <label for="property_iri">Datatype</label>
            <div>
              <TermInput type="iri" id="property_iri" v-model:term="property_iri" />
            </div>
          </div>
          <div class="form-group">
            <label for="property_label">Class</label>
            <div>
              <TermInput type="literal" id="property_label" v-model:term="property_label" />
            </div>
          </div>
          <div class="form-group">
            <label for="property_comment">Cardinality</label>
            <div>
              <TermInput type="literal" id="property_cartinality" v-model:term="property_cartinality" />
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="configure_property.hide()">Close</button>
        <button type="button" class="btn btn-primary" @click="editProp()">Save changes</button>
      </div>
    </div>
  </div>
  <!-- End Modals -->
</template>

<script>
import { mapState } from 'pinia'
import { useRdfStore } from '../stores/rdf'
import { useSelectionStore } from '../stores/selection'
import { usePrefixesStore } from '../stores/prefixes'

import { Modal } from 'bootstrap'
import { Diagram } from 'vue-diagrams'
import { v4 as uuidv4 } from 'uuid'
import TermInput from '../components/TermInput.vue'
import { diff } from '../helpers/n3-compare'
import { DataFactory, Parser } from 'n3'
const { triple, namedNode, literal } = DataFactory

export default {
  name: 'VocPad',
  setup () {
    const store = useRdfStore();
    const selection = useSelectionStore();
    return { store, selection }
  },
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
      next_x: null,
      next_y: null,
      hover_note_shown: false,
      add_class_modal: null,
      add_property_modal: null,
    }
  },
  computed: {
    ...mapState(useSelectionStore, ['graph_iri'])
  },
  mounted () {
    this.getLists()
    this.getShapes()
    this.add_class_modal = new Modal(this.$refs.add_class)
    this.add_property_modal = new Modal(this.$refs.add_property)
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
      this.selection.changeResourceIri(rdfClass)
    },
    async getLists () {
      this.getList(
        // eslint-disable-next-line
        `select distinct ?resourceIri { \
          { \
            ?sc a ?resourceIri \
          } union { \
            ?resourceIri a <http://www.w3.org/2000/01/rdf-schema#Class> \
          } union { \
            ?resourceIri a <http://www.w3.org/2002/07/owl#Class> \
          } \
        } order by ?resourceIri`, "class").then(list => { this.classes = list } )

      this.getList(
        // eslint-disable-next-line
        `select distinct ?resourceIri { \
          { \
            ?sp ?resourceIri ?op \
          } union { \
            ?resourceIri a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property> \
          } union { \
            ?resourceIri a <http://www.w3.org/2002/07/owl#ObjectProperty> \
          } union { \
            ?resourceIri a <http://www.w3.org/2002/07/owl#DatatypeProperty> \
          } \
        } order by ?resourceIri`, "property").then(list => { this.properties = list } )
    },
    async getList (query, termType_) {
      const result = await this.store.sendQuery(query)
      if (result.resultType === 'bindings') {
        const list = []
        const bindingsStream = await result.execute()
        for await (const bindings of bindingsStream) {
          if (bindings.has('resourceIri')) {
            list.push({ iri: bindings.get('resourceIri').value, termType: termType_ })
          }
        }
        return list
      }
    },
    async add_term (termType) {
      let newTerm = []
      if (termType === 'class') {
        newTerm = [
          triple(this.class_iri, namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'), namedNode('http://www.w3.org/2000/01/rdf-schema#Class')),
          triple(this.class_iri, namedNode('http://www.w3.org/2000/01/rdf-schema#label'), this.class_label),
          triple(this.class_iri, namedNode('http://www.w3.org/2000/01/rdf-schema#comment'), this.class_comment)
        ]
      } else if (termType === 'property') {
        newTerm = [
          triple(this.property_iri, namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'), namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#Property')),
          triple(this.property_iri, namedNode('http://www.w3.org/2000/01/rdf-schema#label'), this.property_label),
          triple(this.property_iri, namedNode('http://www.w3.org/2000/01/rdf-schema#comment'), this.property_comment)
        ]
      }
      try {
        await this.store.deleteInsertData({ insertArray: newTerm, graphIri: this.graph_iri })
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
      console.log('start dragging ' + item.iri)
    },
    onDrop (evt) {
      const iri = evt.dataTransfer.getData('iri')
      const termType = evt.dataTransfer.getData('termType')
      console.log('received ' + iri)
      console.log(iri)
      console.log(termType)
      if (termType === 'class') {
        this.addNodeShape('urn:nodeshape:' + uuidv4(), iri, evt.layerX, evt.layerY)
      }
    },
    onDropNode (evt, node) {
      const iri = evt.dataTransfer.getData('iri')
      const termType = evt.dataTransfer.getData('termType')
      console.log('received on diagram node ' + iri)
      console.log(iri)
      if (termType === 'property') {
        this.addPropertyShape(node, 'urn:propertyshape:' + uuidv4(), iri)
      }
    },
    configureProperty (node, port) {
      console.log(node)
      console.log(port)
      console.log('configure ' + node.object.shapeIri.id + ' port' + port.object.shapeIri.id)
    },
    shortenIri (resource) {
      return usePrefixesStore().shortenIri(resource)
    },
    getShapeByPortId (portId) {
      return namedNode(this.portIds[portId])
    },
    getPortIdByShape (shapeIri) {
      const portId = this.portIds.indexOf(shapeIri)
      if (portId === -1) {
        return undefined
      }
      return portId
    },
    setShapePortIdMapping (shapeIri, portId) {
      const existingPortId = this.portIds.indexOf(shapeIri)
      if (existingPortId > -1 && existingPortId !== portId) {
        console.log('Duplicate shapeIri should not happen')
      }
      this.portIds[portId] = shapeIri
    },
    async saveShapes () {
      const modelSerialization = this.model._model
      console.log(this.model.serialize())
      const newSchema = []
      for (const nodeIndex in modelSerialization.nodes) {
        const node = modelSerialization.nodes[nodeIndex]
        const shapeIri = node.object.shapeIri
        const targetClass = node.object.targetClass
        for (const portIndex in node.ports) {
          const port = node.ports[portIndex]
          if (port.name === 'IRI') {
            this.setShapePortIdMapping(shapeIri.id, port.id)
          } else {
            const propertyShapeIri = port.object.shapeIri
            const path = port.object.path
            this.setShapePortIdMapping(propertyShapeIri.id, port.id)
            newSchema.push(triple(shapeIri, namedNode('http://www.w3.org/ns/shacl#property'), propertyShapeIri))
            newSchema.push(triple(propertyShapeIri, namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'), namedNode('http://www.w3.org/ns/shacl#PropertyShape')))
            newSchema.push(triple(propertyShapeIri, namedNode('http://www.w3.org/ns/shacl#path'), path))
          }
        }
        newSchema.push(triple(shapeIri, namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'), namedNode('http://www.w3.org/ns/shacl#NodeShape')))
        newSchema.push(triple(shapeIri, namedNode('http://www.w3.org/ns/shacl#targetClass'), targetClass))
      }
      for (const linkIndex in modelSerialization.links) {
        const link = modelSerialization.links[linkIndex]
        newSchema.push(triple(this.getShapeByPortId(link.from), namedNode('http://www.w3.org/ns/shacl#node'), this.getShapeByPortId(link.to)))
      }
      const difference = diff(this.originalDataModel, newSchema)
      console.log(difference)
      try {
        await this.store.deleteInsertData({ insertArray: difference.add, deleteArray: difference.del, graphIri: this.graph_iri })
        this.$bvToast.toast('Shapes where saved to the store', {
          title: 'Save Shapes',
          autoHideDelay: 500
        })
        // this.getShapes()
      } catch (e) {
        this.$bvToast.toast('Storing the Shapes failed', {
          title: 'Save Shapes',
          variant: 'danger',
          autoHideDelay: 5000
        })
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
      return { x: this.next_x * 240, y: this.next_y * 180 }
    },
    addNodeShape (nodeShapeIri, targetClassIri, x = null, y = null, width = 200) {
      if (this.nodes[nodeShapeIri] !== undefined) {
        return this.nodes[nodeShapeIri]
      } else {
        const nodeObject = {
          title: this.shortenIri(targetClassIri),
          targetClass: namedNode(targetClassIri),
          shapeIri: namedNode(nodeShapeIri)
        }
        if (x === null || y === null) {
          const nextPosition = this.nextPosition()
          x = nextPosition.x
          y = nextPosition.y
        }
        const node = this.model.addNode(nodeObject, x, y, width)
        this.nodes[nodeShapeIri] = node
        this.setShapePortIdMapping(nodeShapeIri, node.addInPort('IRI'))
        return node
      }
    },
    addPropertyShape (node, propertyShapeIri, pathIri) {
      if (this.getPortIdByShape(propertyShapeIri)) {
        return this.getPortIdByShape(propertyShapeIri)
      }
      const portObject = {
        title: this.shortenIri(pathIri),
        path: namedNode(pathIri),
        shapeIri: namedNode(propertyShapeIri)
      }
      const portId = node.addOutPort(portObject)
      this.setShapePortIdMapping(propertyShapeIri, portId)
      return portId
    },
    getShapes () {
      this.store.sendQuery(
      // eslint-disable-next-line
        `PREFIX sh: <http://www.w3.org/ns/shacl#>
        select distinct ?nodeShape ?targetClass ?propertyShape ?path ?nodeShapeRef ?targetClassRef {
          ?nodeShape a sh:NodeShape ;
            sh:targetClass ?targetClass .
          optional {
            ?nodeShape sh:property ?propertyShape .
            ?propertyShape sh:path ?path .
            optional {
              ?propertyShape sh:node ?nodeShapeRef .
              ?nodeShapeRef sh:targetClass ?targetClassRef .
            }
          }
        } order by ?nodeShape ?propertyShape`).then(async result => {
        if (result.resultType === 'bindings') {
          const bindingsStream = await result.execute()
          for await (const bindings of bindingsStream) {
            const node = this.addNodeShape(bindings.get('nodeShape').value, bindings.get('targetClass').value)
            if (bindings.has('propertyShape') && bindings.has('path')) {
              const port = this.addPropertyShape(node, bindings.get('propertyShape').value, bindings.get('path').value)
              if (bindings.has('nodeShapeRef') && bindings.has('targetClassRef')) {
                this.addNodeShape(bindings.get('nodeShapeRef').value, bindings.get('targetClassRef').value)
                this.model.addLink(port, this.getPortIdByShape(bindings.get('nodeShapeRef').value))
              }
            }
          }
        }
        this.nextPosition(true)
      })
      this.store.sendQuery(
        // eslint-disable-next-line
        `PREFIX sh: <http://www.w3.org/ns/shacl#>
          construct {
            ?nodeShape a sh:NodeShape ;
              sh:targetClass ?targetClass ;
              sh:property ?propertyShape .
            ?propertyShape a ?propertyShapeType ;
              sh:path ?path ;
              sh:node ?nodeShapeRef .
            ?nodeShapeRef sh:targetClass ?targetClassRef .
          } where {
            ?nodeShape a sh:NodeShape ;
              sh:targetClass ?targetClass .
            optional {
              ?nodeShape sh:property ?propertyShape .
              ?propertyShape sh:path ?path .
              optional {
                ?propertyShape sh:node ?nodeShapeRef .
                ?nodeShapeRef sh:targetClass ?targetClassRef .
              }
              optional {
                ?propertyShape a ?propertyShapeType .
              }
            }
          }`).then(async result => {
        if (result.resultType === 'quads') {
          this.originalDataModel = await (await result.execute()).toArray()
        }
      })
    },
    hoverTerms (isHovered) {
      if (isHovered && !this.hover_note_shown) {
        this.$bvToast.toast('You can drag a class from the left hand side to the canvas to create a NodeShape. In the same way you can drag a property from the left hand side onto a NodeShape to create a PropertyShape.', {
          title: 'Pro Tip!',
          variant: 'info',
          noAutoHide: true
        })
        this.hover_note_shown = true
      } else {
        // Do something else
      }
    }
  }
}

</script>
