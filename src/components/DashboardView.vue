<template>
  <div>
    <strong>Resource Dashboard</strong>
    <dl>
      <dt>IRI</dt>
      <dd>{{ resource_iri }}</dd>
    </dl>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DashboardView',
  computed: mapState(['resource_iri'])
}

</script>
