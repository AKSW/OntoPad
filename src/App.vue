<template>
  <div id="app" class="container-fluid">
    <div class="row connection">
      <SparqlConnection v-intro="'This is the configuration of the SPARQL Endpoint. Currently a <a href=\'http://github.com/AKSW/QuitStore\'>Quit Store</a> is used.'"/>
    </div>
    <div class="row">
    <div class="col-3">
    <GraphList v-intro="'This is the list of all named graphs in the connected store. With the plus-button a new graph can be created.'"/>
    <ClassList v-intro="'This is the list of all classes in the selected graph.'"/>
    </div>
    <div class="col-9">
      <ul class="nav nav-tabs" v-intro="'This is the navigation list.'">
        <li class="nav-item"><router-link class="nav-link" active-class="active" to="/dashboard">Home</router-link></li>
        <li class="nav-item"><router-link class="nav-link" active-class="active" to="/instances">Instances</router-link></li>
        <li class="nav-item"><router-link class="nav-link" active-class="active" to="/voc">Vocabulary</router-link></li>
        <li class="nav-item"><router-link class="nav-link" active-class="active" to="/edit">Edit</router-link></li>
        <li class="nav-item"><router-link class="nav-link" active-class="active" to="/rdform">RDForm</router-link></li>
        <li class="nav-item"><router-link class="nav-link" active-class="active" to="/add">Add</router-link></li>
        <li class="nav-item"><router-link class="nav-link" active-class="active" to="/source">Source</router-link></li>
      </ul>
      <router-view/>
    </div>
    </div>
  </div>
</template>

<script>
import SparqlConnection from '@/components/SparqlConnection'
import GraphList from '@/components/GraphList'
import ClassList from '@/components/ClassList'

export default {
  name: 'App',
  components: {
    SparqlConnection,
    GraphList,
    ClassList
  },
  mounted () {
    const h = this.$createElement
    // Increment the toast count
    // Create the message
    const vNodesMsg = h(
      'div',
      {},
      [
        h('div', {}, 'Hi! If you want you can get a guided tour through OntoPad.'),
        h('div', { style: { 'text-align': 'right' } }, [h('b-button', { on: { click: this.startTour } }, 'Start Tour')])
      ]
    )
    this.$bvToast.toast([vNodesMsg], {
      title: 'Guided Tour',
      id: 'tourToast',
      variant: 'info',
      solid: true,
      noAutoHide: true
    })
  },
  methods: {
    startTour () {
      this.$bvToast.hide('tourToast')
      this.$intro().start() // start the guide
      this.$intro().showHints() // show hints
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.row.connection {
  margin: 30px 0;
}
</style>
