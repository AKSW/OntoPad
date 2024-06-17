<script setup>
import PropertyView from './PropertyView.vue'
import InstanceList from '../components/InstanceList.vue'

import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
</script>

<template>
  <strong>Resource Dashboard</strong>
  <splitpanes class="default-theme">
    <pane size="70">
      <PropertyView />
    </pane>
    <pane size="30">
      <InstanceList style="height:80vh; overflow-y:scroll;" />
    </pane>
  </splitpanes>
</template>

<style scoped>
.splitpanes, .splitpanes .splitpanes__pane {background-color: inherit;}

</style>
