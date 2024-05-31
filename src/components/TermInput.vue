<template>
  <div class="input-group">
    <div v-if="type === undefined" class="input-group-prepend" id="nodetype-selection">
      <button @click="setType('iri')" class="btn btn-outline-secondary" v-bind:class="{'active': nodeType == 'iri'}" type="button">IRI</button>
      <button @click="setType('literal')" class="btn btn-outline-secondary" v-bind:class="{'active': nodeType == 'literal'}" type="button">Lit</button>
    </div>
    <div v-if="nodeType === 'iri'" class="input-group-prepend">
      <span class="input-group-text">&lt;</span>
    </div>
    <div v-else-if="nodeType === 'literal'" class="input-group-prepend">
      <span class="input-group-text">&quot;</span>
    </div>
    <input :id="'value-' + this.id" v-model="idValue" @input="notify" type="text" class="form-control">
    <div v-if="nodeType === 'iri'" class="input-group-append">
      <span class="input-group-text">&gt;</span>
    </div>
    <div v-else-if="nodeType === 'literal' && literalType === 'language'" class="input-group-append">
      <span @click="setLiteralType('datatype')" class="input-group-text btn">&quot;@</span>
      <input :id="'language-' + this.id" v-model="language" @input="notify" type="text" class="form-control">
    </div>
    <div v-else-if="nodeType === 'literal' && literalType === 'datatype'" class="input-group-append">
      <span @click="setLiteralType('language')" class="input-group-text btn">&quot;^^&lt;</span>
      <input :id="'datatype-' + this.id" v-model="datatype" @input="notify" type="text" class="form-control">
      <span class="input-group-text">&gt;</span>
    </div>
  </div>
</template>

<script>
import { DataFactory } from 'n3'

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
  props: ['type', 'id', 'term'],
  model: {
    prop: 'term',
    event: 'change'
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
        this.node = DataFactory.namedNode(this.idValue)
      } else {
        if (this.literalType === 'language') {
          this.node = DataFactory.literal(this.idValue, this.language)
        } else {
          this.node = DataFactory.literal(this.idValue, DataFactory.namedNode(this.datatype))
        }
        // https://www.w3.org/TR/json-ld11/#typed-values
      }
      this.$emit('change', this.node)
    },
    updateNode () {
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
