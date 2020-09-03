<template>
  <b-form inline class="col-12">
    <b-button-group class="col-1 mb-2 mr-sm-2 mb-sm-0">
      <b-button class="mb-0" v-b-modal.configure_endpoint v-b-tooltip.hover title="Configure Endpoint" aria-label="Configure Endpoint">
        <b-icon icon="gear"></b-icon>
      </b-button>
      <b-button class="mb-0" v-if="store_capability.quit" @click="push()" v-b-tooltip.hover title="Push To Remote Repository" aria-label="Push To Remote Repository">
        <b-icon icon="cloud-upload"></b-icon>
      </b-button>
      <b-button class="mb-0" v-if="store_capability.quit" @click="pull()" v-b-tooltip.hover title="Pull From Remote Repository" aria-label="Pull From Remote Repository">
        <b-icon icon="cloud-download"></b-icon>
      </b-button>
    </b-button-group>
    <label for="select_url" class="col-1 mr-sm-2">Graph IRI</label>
    <input type="text" class="form-control col-2" id="graph_iri" v-model="graph_iri">
    <label for="select_url" class="col-1 mr-sm-2">Resource IRI</label>
    <input type="text" class="form-control col-6" id="resource_iri" v-model="resource_iri">
    <b-modal id="configure_endpoint" title="Configure Endpoint" :no-close-on-backdrop="true" @ok="configure_endpoint()" @show="get_endpoint_configuration()" size="lg">
      <form>
        <b-form-group label="Endpoint Type">
          <b-form-radio-group
            id="btn-radios-1"
            v-model="endpoint_type"
            buttons
            name="radios-btn-default"
          >
            <b-form-radio value="query_only">Query only</b-form-radio>
            <b-form-radio value="query_update">Query &amp; Update</b-form-radio>
            <b-form-radio value="quit">Quit Store</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <div class="form-group">
          <label for="quit_url">Quit URL</label>
          <div>
            <input type="text" class="form-control" id="quit_url" v-model="quit_url">
          </div>
        </div>
        <div class="form-group">
          <label for="query_url">Query URL</label>
          <div>
            <input type="text" class="form-control" id="query_url" v-model="query_url">
          </div>
        </div>
        <div class="form-group">
          <label for="update_url">Update URL</label>
          <div>
            <input type="text" class="form-control" id="update_url" v-model="update_url">
          </div>
        </div>
      </form>
    </b-modal>
  </b-form>
</template>

<script>
export default {
  name: 'SparqlConnection',
  data () {
    return {
      endpoint_type: 'quit',
      query_url: '',
      update_url: '',
      quit_url: ''
    }
  },
  computed: {
    store_capability: {
      get () {
        return this.$store.state.sparqlEndpoint.capability
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
    },
    pull () {
      this.$store.commit('pull')
    },
    get_endpoint_configuration () {
      const ep = this.$store.state.sparqlEndpoint
      this.quit_url = ''
      this.query_url = ''
      this.update_url = ''
      this.endpoint_type = ep.type
      if (ep.type === 'quit') {
        this.quit_url = ep.quitUrl
      } else if (ep.type === 'query_only') {
        this.query_url = ep.queryUrl
      } else if (ep.type === 'query_update') {
        this.query_url = ep.queryUrl
        this.update_url = ep.updateUrl
      }
    },
    configure_endpoint () {
      const endpointConfiguration = {}
      if (this.endpoint_type === 'quit' && this.quit_url) {
        endpointConfiguration.quit_url = this.quit_url
      } else {
        if (!this.query_url) {
          console.error('Not even a query_url is given. Not chaning the endpoint configuration.')
          return
        }
        endpointConfiguration.query_url = this.query_url
        if (this.update_url) {
          endpointConfiguration.update_url = this.update_url
        }
      }
      this.$store.commit('updateEndpointConfiguration', endpointConfiguration)
    }
  }
}

</script>
