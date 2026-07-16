<script setup>
import QueryResultList from './QueryResultList.vue'
import { useSelectionStore } from '../stores/selection'
</script>

<template>
  <QueryResultList title="Property List" search query="select distinct ?property { {?s ?property ?o} union {?property a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property>} union {?property a <http://www.w3.org/2002/07/owl#ObjectProperty>} union {?property a <http://www.w3.org/2002/07/owl#DatatypeProperty>} } order by ?property" select-variable="property" ref="propertyList" :activeResource="property_iri" :selectResource="selectProperty" /></template>

<script>
import rdf from '@rdfjs/data-model'

export default {
  name: 'PropertyList',
  props: {
    property_iri: String,
    selectProperty: Function
  },
  watch: {
    graph_iri (value) {
      console.log('graph_iri changed' + value)
      this.$refs.propertyList.updateList()
    }
  },
}

</script>
