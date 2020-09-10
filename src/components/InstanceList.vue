<template>
  <QueryResultList title="Instance List" search :query="'select distinct ?instance { ?instance a <' + resource_iri + '> } order by ?instance'" select-variable="instance" itemClass="py-2" ref="instanceList" />
</template>

<script>
import QueryResultList from '@/components/QueryResultList'
import { mapState } from 'vuex'

export default {
  name: 'InstanceList',
  components: {
    QueryResultList
  },
  computed: mapState(['resource_iri'])
}

</script>
