<template>
  <div>
    <strong>Resource Dashboard</strong>
    <b-row>
      <b-col>
        <PropertyView />
      </b-col>
      <b-col>
        <InstanceList style="height:80vh; overflow-y:scroll;" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PropertyView from '@/components/PropertyView'
import InstanceList from '@/components/InstanceList'

export default {
  name: 'DashboardView',
  components: {
    PropertyView,
    InstanceList
  }
}

</script>
