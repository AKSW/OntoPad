<template>
  <div>
    <strong>Class List</strong>
    (<a v-on:click="updateClassList">refresh</a>)
    <ul class="list-group" v-for="(rdfClass, index) in classes" :key="index">
      <li
        class="list-group-item btn"
        :for="'form-control' + index"
        v-on:click="select(rdfClass)">{{ rdfClass }}</li>
    </ul>
  </div>
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
          let bindings = result.data.results.bindings
          this.classes = []
          for (let key in bindings) {
            this.classes.push(bindings[key].class.value)
          }
        })
    }
  }
}

</script>
