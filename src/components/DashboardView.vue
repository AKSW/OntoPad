<template>
  <div>
    <strong>Resource Dashboard</strong>
    <b-row>
      <b-col>
        <PropertyView />
      </b-col>
      <b-col>
        <InstanceList />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PropertyView from '@/components/PropertyView'
import InstanceList from '@/components/InstanceList'
import Streamify from 'streamify-string'
import { mapState } from 'vuex'
import { DataFactory, Store, StreamParser } from 'n3'
const { namedNode } = DataFactory

export default {
  name: 'DashboardView',
  components: {
    PropertyView,
    InstanceList
  }
}

</script>
