<template>
  <b-card no-body>
    <template v-slot:header>
      <div class="d-flex justify-content-between align-items-center">
        <h6 class="mb-0">Class List</h6>
        <div>
          <b-button class="mb-0" v-on:click="updateClassList" v-b-tooltip.hover title="Reload" aria-label="Reload">
            <b-icon icon="arrow-repeat"></b-icon>
          </b-button>
        </div>
      </div>
    </template>

    <b-list-group flush v-for="(rdfClass, index) in classes" :key="index">
      <b-list-group-item
        class="list-group-item btn"
        :for="'form-control' + index"
        v-on:click="select(rdfClass)">{{ rdfClass }}</b-list-group-item>
    </b-list-group>
  </b-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ClassList',
  mounted () {
    this.updateClassList()
  },
  watch: {
    graph_iri (value) {
      console.log('graph_iri changed' + value)
      this.updateClassList()
    }
  },
  data () {
    return {
      classes: []
    }
  },
  computed: mapState(['graph_iri']),
  methods: {
    select (rdfClass) {
      console.log(rdfClass)
      this.$store.commit('changeResourceIri', rdfClass)
    },
    updateClassList () {
      this.$store.dispatch('sendQuery',
        'select distinct ?class { {?s a ?class} union {?class a <http://www.w3.org/2000/01/rdf-schema#Class>} union {?class a <http://www.w3.org/2002/07/owl#Class>} } order by ?class')
        .then(result => {
          const bindings = result.data.results.bindings
          this.classes = []
          for (const key in bindings) {
            this.classes.push(bindings[key].class.value)
          }
        })
    }
  }
}

</script>
