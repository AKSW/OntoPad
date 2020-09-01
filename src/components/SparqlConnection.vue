<template>
    <div class="Form">
      <b-button class="mb-0" v-b-tooltip.hover title="Configure Endpoint" aria-label="Configure Endpoint">
        <b-icon icon="gear"></b-icon>
      </b-button>
      <b-button class="mb-0" v-b-tooltip.hover title="Push To Remote Repository" aria-label="Push To Remote Repository">
        <b-icon icon="cloud-upload"></b-icon>
      </b-button>
      <b-button class="mb-0" v-b-tooltip.hover title="Pull From Remote Repository" aria-label="Pull From Remote Repository">
        <b-icon icon="cloud-download"></b-icon>
      </b-button>
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
    </div>
</template>

<script>
export default {
  name: 'SparqlConnection',
  computed: {
    query_url: {
      get () {
        return this.$store.getters.query_url
      },
      set (value) {
        this.$store.commit('changeQueryUrl', value)
      }
    },
    update_url: {
      get () {
        return this.$store.getters.update_url
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
