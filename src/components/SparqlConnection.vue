<template>
    <div class="Form">
      <form>
      <div class="form-group row">
        <label for="update_url" class="col-sm-3 col-form-label">Update URL</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="update_url" v-model="update_url">
        </div>
      </div>
      <div class="form-group row">
        <label for="select_url" class="col-sm-3 col-form-label">Query URL</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="select_url" v-model="query_url">
        </div>
      </div>
      <div class="form-group row">
        <label for="select_url" class="col-sm-3 col-form-label">Graph IRI</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="graph_iri" v-model="graph_iri">
        </div>
      </div>
      <div class="form-group row">
        <label for="select_url" class="col-sm-3 col-form-label">Resource IRI</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="resource_iri" v-model="resource_iri">
        </div>
      </div>
      <button class="btn btn-primary" @click="push()">Push</button>
      </form>
      <div>
      {{response}}
      </div>
    </div>
</template>

<script>
export default {
  name: 'SparqlConnection',
  data () {
    return {
      response: 'Nothing'
    }
  },
  computed: {
    query_url: {
      get () {
        return this.$store.state.query_url
      },
      set (value) {
        this.$store.commit('changeQueryUrl', value)
      }
    },
    update_url: {
      get () {
        return this.$store.state.update_url
      },
      set (value) {
        this.$store.commit('changeUpdateUrl', value)
      }
    },
    graph_iri: {
      get () {
        return this.$store.state.graph_iri
      },
      set (value) {
        this.$store.commit('changeGraphIri', value)
      }
    },
    resource_iri: {
      get () {
        return this.$store.state.resource_iri
      },
      set (value) {
        this.$store.commit('changeResourceIri', value)
      }
    }
  },
  methods: {
    push () {
      this.$store.commit('push')
    }
  }
}

</script>
