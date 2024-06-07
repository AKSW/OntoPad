<template>
  <div>
    <strong>Resource Dashboard</strong>
    <div class="row">
      <div class="col">
        <PropertyView />
      </div>
      <div class="col">
        <InstanceList style="height:80vh; overflow-y:scroll;" />
      </div>
    </div>
  </div>
</template>

<script>
import PropertyView from './PropertyView.vue'
import InstanceList from '../components/InstanceList.vue'

export default {
  name: 'DashboardView',
  components: {
    PropertyView,
    InstanceList
  }
}

</script>
