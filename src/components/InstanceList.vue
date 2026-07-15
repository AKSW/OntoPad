<script setup>
import { useSelectionStore } from '../stores/selection'
import QueryResultList from './QueryResultList.vue'
</script>

<template>
  <QueryResultList title="Instance List" search :query="'select distinct ?instance { ?instance a <' + resource_iri + '> } order by ?instance'" select-variable="instance" itemClass="py-2" ref="instanceList" :activeResource="resource_iri" :selectResource="(iri) => {useSelectionStore().changeResourceIri(iri, false)}"  />
</template>

<script>
import { mapState } from 'pinia'

export default {
  name: 'InstanceList',
  computed: {
    ...mapState(useSelectionStore, ['resource_iri'])
  },
}

</script>
