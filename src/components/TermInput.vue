<template>
  <div class="input-group">
    <template v-if="type === undefined">
      <button @click="setType('iri')" class="btn btn-outline-secondary" v-bind:class="{'active': nodeType == 'iri'}" type="button">IRI</button>
      <button @click="setType('literal')" class="btn btn-outline-secondary" v-bind:class="{'active': nodeType == 'literal'}" type="button">Lit</button>
    </template>
    <template v-if="nodeType === 'iri'">
      <span class="input-group-text">&lt;</span>
    </template>
    <template v-else-if="nodeType === 'literal'">
      <span class="input-group-text">&quot;</span>
    </template>
    <input :id="'value-' + this.id" v-model="idValue" @input="notify" type="text" class="form-control">
    <template v-if="nodeType === 'iri'" class="input-group-append">
      <span class="input-group-text">&gt;</span>
    </template>
    <template v-else-if="nodeType === 'literal' && literalType === 'language'">
      <span @click="setLiteralType('datatype')" class="input-group-text btn btn-outline-secondary">&quot;@</span>
      <input :id="'language-' + this.id" v-model="language" @input="notify" type="text" class="form-control">
    </template>
    <template v-else-if="nodeType === 'literal' && literalType === 'datatype'">
      <span @click="setLiteralType('language')" class="input-group-text btn btn-outline-secondary">&quot;^^&lt;</span>
      <input :id="'datatype-' + this.id" v-model="datatype" @input="notify" type="text" class="form-control">
      <span class="input-group-text">&gt;</span>
    </template>
  </div>
</template>

<script>
import rdf from '@rdfjs/data-model'

export default {
  name: 'TermInput',
  mounted () {
    this.updateNode()
  },
  watch: {
    term (newValue) {
      this.updateNode()
    }
  },
  data () {
    return {
      dynamicNodetype: 'iri',
      literalType: 'language',
      idValue: '',
      language: 'de',
      datatype: 'http://www.w3.org/2001/XMLSchema#string',
      node: {}
    }
  },
  props: {
    type: String,
    id: String,
    term: Object
  },
  computed: {
    nodeType: {
      get: function () {
        if (this.type) {
          return this.type
        }
        return this.dynamicNodetype
      },
      set: function (newValue) {
        this.dynamicNodetype = newValue
      }
    }
  },
  methods: {
    setType (nodeType) {
      this.nodeType = nodeType
      this.notify()
    },
    setLiteralType (literalType) {
      this.literalType = literalType
      this.notify()
    },
    notify () {
      this.updateTerm()
    },
    updateTerm () {
      if (this.dynamicNodetype === 'iri') {
        this.node = rdf.namedNode(this.idValue)
      } else {
        if (this.literalType === 'language') {
          this.node = rdf.literal(this.idValue, this.language)
        } else {
          this.node = rdf.literal(this.idValue, rdf.namedNode(this.datatype))
        }
        // https://www.w3.org/TR/json-ld11/#typed-values
      }
      this.$emit('update:term', this.node)
    },
    updateNode () {
      if (this.term == undefined) {
        return
      }
      this.node = this.term
      if (this.term.termType === 'NamedNode') {
        this.dynamicNodetype = 'iri'
      } else if (this.term.termType === 'Literal') {
        this.dynamicNodetype = 'literal'
        if (this.term.language) {
          this.language = this.term.language
          this.literalType = 'language'
        } else {
          this.datatype = this.term.datatype.value
          this.literalType = 'datatype'
        }
      }
      this.idValue = this.term.value
    }
  }
}

</script>
