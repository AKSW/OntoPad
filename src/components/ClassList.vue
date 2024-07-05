<script setup>
import QueryResultList from './QueryResultList.vue'
import { mapState } from 'pinia'
import { useSelectionStore } from '../stores/selection'
</script>

<template>
  <QueryResultList title="Class List" search query="select distinct ?class { {?s a ?class} union {?class a <http://www.w3.org/2000/01/rdf-schema#Class>} union {?class a <http://www.w3.org/2002/07/owl#Class>} } order by ?class" select-variable="class" ref="classList" :activeResource="resource_iri" />
</template>

<script>

export default {
  name: 'ClassList',
  components: {
    QueryResultList
  },
  watch: {
    graph_iri (value) {
      console.log('graph_iri changed' + value)
      this.$refs.classList.updateList()
    }
  },
  computed: {
    ...mapState(useSelectionStore, ['graph_iri', 'resource_iri'])
  }
}

</script>
