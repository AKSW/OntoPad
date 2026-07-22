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
              <input class="form-check-input" type="radio" name="endpoint_type" v-model="endpoint_type" id="in_memory" value="in_memory"><label class="form-check-label" for="in_memory">In Memory</label>
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
                <div class="input-group mb-3">
                  <input type="text" class="form-control" id="query_url" v-model="query_url" placeholder="http://your.sparql.store.org/query">
                  <button class="btn btn-outline-secondary" type="button" @click="query_auth_enabled = !query_auth_enabled" :title="query_auth_enabled ? 'Disable Query Authentication' : 'Enable Query Authentication'">
                    <i class="bi" :class="query_auth_enabled ? 'bi-lock-fill' : 'bi-unlock'"></i>
                  </button>
                </div>
              </div>
              <div v-if="query_auth_enabled" class="mt-2">
                <div class="card card-body mt-2">
                  <h6 class="card-title">Authentication for Query URL</h6>
                  <div class="form-group">
                    <label for="query_username">Username</label>
                    <input type="text" class="form-control" id="query_username" v-model="query_username" placeholder="Username">
                  </div>
                  <div class="form-group">
                    <label for="query_password">Password</label>
                    <input type="password" class="form-control" id="query_password" v-model="query_password" placeholder="Password">
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group" v-if="endpoint_type == 'query_update'">
              <label for="update_url">Update URL</label>
              <div>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" id="update_url" v-model="update_url" placeholder="http://your.sparql.store.org/update">
                  <button class="btn btn-outline-secondary" type="button" @click="update_auth_enabled = !update_auth_enabled" :title="update_auth_enabled ? 'Disable Update Authentication' : 'Enable Update Authentication'">
                    <i class="bi" :class="update_auth_enabled ? 'bi-lock-fill' : 'bi-unlock'"></i>
                  </button>
                </div>
              </div>
              <div v-if="update_auth_enabled" class="mt-2">
                <div class="card card-body mt-2">
                  <h6 class="card-title">Authentication for Update URL</h6>
                  <div class="form-group">
                    <label for="update_username">Username</label>
                    <input type="text" class="form-control" id="update_username" v-model="update_username" placeholder="Username">
                  </div>
                  <div class="form-group">
                    <label for="update_password">Password</label>
                    <input type="password" class="form-control" id="update_password" v-model="update_password" placeholder="Password">
                  </div>
                </div>
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
import { Modal } from 'bootstrap'

export default {
  name: 'SparqlConnection',
  setup () {
    const store = useRdfStore();
    return { store }
  },
  data () {
    return {
      configure_endpoint_modal: null,
      endpoint_type: 'quit',
      query_url: '',
      update_url: '',
      quit_url: '',
      // Authentication for query URL
      query_auth_enabled: false,
      query_username: '',
      query_password: '',
      // Authentication for update URL
      update_auth_enabled: false,
      update_username: '',
      update_password: ''
    }
  },
  mounted() {
    this.configure_endpoint_modal = new Modal(this.$refs.configure_endpoint)
    this.$refs.configure_endpoint.addEventListener('show.bs.modal', () => {
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
      this.query_auth_enabled = false
      this.query_username = ''
      this.query_password = ''
      this.update_auth_enabled = false
      this.update_username = ''
      this.update_password = ''
      this.endpoint_type = ep.type

      if (ep.type === 'quit') {
        this.quit_url = ep.quitUrl
      } else if (ep.type === 'query_only' || ep.type === 'query_update') {
        // Set query URL
        this.query_url = ep.queryUrl

        // Set query authentication if available
        const query_auth = ep.getAuthForUrl ? ep.getAuthForUrl(this.query_url) : undefined
        if (query_auth) {
          this.query_auth_enabled = true
          this.query_username = query_auth.username || ''
          this.query_password = query_auth.password || ''
        }

        // Set update URL if query_update type
        if (ep.type === 'query_update') {
          this.update_url = ep.updateUrl

          // Set update authentication if available
          const update_auth = ep.getAuthForUrl ? ep.getAuthForUrl(this.update_url) : undefined
          if (update_auth) {
            this.update_auth_enabled = true
            this.update_username = update_auth.username || ''
            this.update_password = update_auth.password || ''
          }
        }
      }
    },
    configure_endpoint () {
      const endpointConfiguration = {}
      if (this.endpoint_type === 'quit' && this.quit_url) {
        endpointConfiguration.quit_url = this.quit_url
      } else {
        if (!this.query_url) {
          console.error('Not even a query_url is given. Not changing the endpoint configuration.')
          return
        }

        // Handle query URL with optional authentication
        if (this.query_auth_enabled && (this.query_username || this.query_password)) {
          endpointConfiguration.query_url = {
            value: this.query_url,
            auth: {
              username: this.query_username,
              password: this.query_password
            }
          }
        } else {
          endpointConfiguration.query_url = this.query_url
        }

        // Handle update URL if present
        if (this.update_url) {
          if (this.update_auth_enabled && (this.update_username || this.update_password)) {
            endpointConfiguration.update_url = {
              value: this.update_url,
              auth: {
                username: this.update_username,
                password: this.update_password
              }
            }
          } else {
            endpointConfiguration.update_url = this.update_url
          }
        }
      }
      this.store.updateEndpointConfiguration({ sources: [endpointConfiguration] })
    },
  },
}

</script>
