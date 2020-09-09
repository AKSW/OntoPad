<template>
  <QueryResultList title="Class List" query="select distinct ?class { {?s a ?class} union {?class a <http://www.w3.org/2000/01/rdf-schema#Class>} union {?class a <http://www.w3.org/2002/07/owl#Class>} } order by ?class" select-variable="class" ref="classList" />
</template>

<script>
import QueryResultList from '@/components/QueryResultList'
import { mapState } from 'vuex'

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
  computed: mapState(['graph_iri'])
}

</script>
