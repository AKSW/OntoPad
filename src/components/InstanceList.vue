<template>
  <QueryResultList title="Instance List" search :query="'select distinct ?instance { ?instance a <' + resource_iri + '> } order by ?instance'" select-variable="instance" itemClass="py-2" ref="instanceList" />
</template>

<script>
import QueryResultList from './QueryResultList.vue'
import { mapState } from 'pinia'
import { useSelectionStore } from '../stores/selection'

export default {
  name: 'InstanceList',
  components: {
    QueryResultList
  },
  computed: {
    ...mapState(useSelectionStore, ['resource_iri'])
  },
}

</script>
