<template>
  <div>
    <strong>Instance List</strong>
    (<a v-on:click="refresh">refresh</a>)
    <ul class="list-group" v-for="(instance, index) in instances" :key="index">
      <li
        class="list-group-item"
        :for="'form-control' + index"
        v-on:click="select(instance)">{{ instance }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'InstanceList',
  mounted () {
    this.refresh()
  },
  watch: {
    resource_iri (value) {
      this.refresh()
    }
  },
  computed: mapState(['resource_iri']),
  data () {
    return {
      instances: []
    }
  },
  methods: {
    select (instance) {
      console.log(instance)
      this.$store.commit('changeResourceIri', instance)
    },
    refresh () {
      console.log(this.resource_iri)
      this.$store.dispatch('sendQuery',
        'select distinct ?instance { ?instance a <' + this.resource_iri + '> } order by ?instance')
        .then(result => {
          const bindings = result.data.results.bindings
          this.instances = []
          for (const key in bindings) {
            this.instances.push(bindings[key].instance.value)
          }
        })
    }
  }
}

</script>
