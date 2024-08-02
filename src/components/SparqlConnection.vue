<template>
  <form v-if="store_ready" inline class="col-12">
    <div class="btn-group col-1 mb-2 mr-sm-2 mb-sm-0" role="group">
      <button type="button" class="btn btn-outline-secondary mb-0" @click="configure_endpoint_modal.show()" title="Configure Endpoint" aria-label="Configure Endpoint">
        <i class="bi bi-gear"></i>
      </button>
      <button type="button" class="btn btn-outline-secondary mb-0" v-if="store_capability.quit" @click="push()" title="Push To Remote Repository" aria-label="Push To Remote Repository">
        <i class="bi bi-cloud-upload"></i>
      </button>
      <button type="button" class="btn btn-outline-secondary mb-0" v-if="store_capability.quit" @click="pull()" title="Pull From Remote Repository" aria-label="Pull From Remote Repository">
        <i class="bi bi-cloud-download"></i>
      </button>
    </div>
    <label for="select_url" class="col-1 mr-sm-2">Graph IRI</label>
    <input type="text" class="form-control col-2" id="graph_iri" v-model="graph_iri">
    <label for="select_url" class="col-1 mr-sm-2">Resource IRI</label>
    <input type="text" class="form-control col-6" id="resource_iri" v-model="resource_iri">
  </form>
  <div class="modal fade" ref="configure_endpoint" tabindex="-1" aria-hidden="true" data-bs-backdrop="static" size="lg">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Configure Endpoint</h5>
          <button type="button" class="btn-close" @click="configure_endpoint_modal.hide()" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group" label="Endpoint Type">
              <input class="form-check-input" type="radio" name="endpoint_type" v-model="endpoint_type" id="query_only" value="query_only"><label class="form-check-label" for="query_only">Query only</label>
              <input class="form-check-input" type="radio" name="endpoint_type" v-model="endpoint_type" id="query_update" value="query_update"><label class="form-check-label" for="query_update">Query &amp; Update</label>
              <input class="form-check-input" type="radio" name="endpoint_type" v-model="endpoint_type" id="quit" value="quit"><label class="form-check-label" for="quit">Quit Store</label>
            </div>
            <div class="form-group" v-if="endpoint_type == 'quit'">
              <label for="quit_url">Quit URL</label>
              <div>
                <input type="text" class="form-control" id="quit_url" v-model="quit_url" placeholder="http://your.quit.store.org/">
              </div>
            </div>
            <div class="form-group" v-if="endpoint_type == 'query_only' || endpoint_type == 'query_update'">
              <label for="query_url">Query URL</label>
              <div>
                <input type="text" class="form-control" id="query_url" v-model="query_url" placeholder="http://your.sparql.store.org/query">
              </div>
            </div>
            <div class="form-group" v-if="endpoint_type == 'query_update'">
              <label for="update_url">Update URL</label>
              <div>
                <input type="text" class="form-control" id="update_url" v-model="update_url" placeholder="http://your.sparql.store.org/update">
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="configure_endpoint_modal.hide()">Close</button>
          <button type="button" class="btn btn-primary" @click="configure_endpoint(); configure_endpoint_modal.hide()">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useRdfStore } from '../stores/rdf'
import { useSelectionStore } from '../stores/selection'
import { Modal } from 'bootstrap'

export default {
  name: 'SparqlConnection',
  setup () {
    const store = useRdfStore();
    const selection = useSelectionStore();
    return { store, selection }
  },
  data () {
    return {
      configure_endpoint_modal: null,
      endpoint_type: 'quit',
      query_url: '',
      update_url: '',
      quit_url: ''
    }
  },
  mounted() {
    this.configure_endpoint_modal = new Modal(this.$refs.configure_endpoint)
    this.$refs.configure_endpoint.addEventListener('show.bs.modal', event => {
      this.get_endpoint_configuration()
    })
  },
  computed: {
    ...mapState(useRdfStore, {store_ready: store => store.ready}),
    store_capability: {
      get () {
        return this.store.sparqlEndpoint.capability
      }
    },
    graph_iri: {
      get () {
        return this.selection.graph_iri
      },
      set (value) {
        this.store.changeGraphIri(value)
      }
    },
    resource_iri: {
      get () {
        return this.selection.resource_iri
      },
      set (value) {
        this.selection.changeResourceIri(value)
      }
    }
  },
  methods: {
    push () {
      this.store.push()
    },
    pull () {
      this.store.pull()
    },
    get_endpoint_configuration () {
      const ep = this.store.sparqlEndpoint
      // const ep = {
      //   type: "query_only",
      //   queryUrl: ""
      // }
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
      this.store.updateEndpointConfiguration(endpointConfiguration)
    }
  }
}

</script>
