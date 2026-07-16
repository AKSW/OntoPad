<template>
  <div class="card">
    <div class="card-header d-flex justify-content-between align-items-center">
      <div class="row row-cols-lg-auto g-3 align-items-center">
        <div class="col-12">
          <h6 class="mb-0">{{ title }}</h6>
        </div>
        <div class="col-12">
          <div class="input-group mb-3">
            <input type="text" class="form-control" v-if="search" v-model="filter" placeholder="Search …"></input>
            <button type="button" class="btn btn-secondary" v-on:click="updateList" title="Reload" aria-label="Reload">
              <i class="bi bi-arrow-repeat"></i>
            </button>
            <button type="button" class="btn btn-secondary" v-if="add" v-on:click="add" :title="addTitle" :aria-label="addTitle">
              <i class="bi bi-plus-square"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="(resource, index) in resourcesFiltered" :key="index"
        :class="[{'active': resource == activeResource}, itemClass]"
        href="#"
        :for="'form-control' + index"
        :title="resource"
        v-on:click="select(resource)">{{ shortenIri(resource) }}</li>
    </ul>
  </div>
</template>

<script>
import { useRdfStore } from '../stores/rdf'
import { useSelectionStore } from '../stores/selection'
import { usePrefixesStore } from '../stores/prefixes'

export default {
  name: 'QueryResultList',
  setup () {
    const store = useRdfStore();
    const selection = useSelectionStore();
    return { store, selection }
  },
  mounted () {
    this.updateList()
  },
  props: {
    title: String,
    query: String,
    queryQuads: {
      type: Boolean,
      default: false
    },
    search: {
      type: Boolean,
      default: false
    },
    selectVariable: {
      type: String,
      default: 'resourceIri'
    },
    itemClass: String,
    add: Function,
    selectResource: Function,
    addTitle: String,
    activeResource: String
  },
  watch: {
    query (value) {
      this.updateList()
    }
  },
  data () {
    return {
      resources: [],
      filter: ''
    }
  },
  computed: {
    resourcesFiltered () {
      if (this.filter) {
        return this.resources.filter(resource => resource.toLowerCase().includes(this.filter.toLowerCase()))
      }
      return this.resources
    },
  },
  methods: {
    select (resource) {
      if (this.selectResource) {
        this.selectResource(resource)
      }
    },
    async updateList () {
      let _defaultGraph = undefined
      if (this.queryQuads) {
        _defaultGraph = 'quads'
      }
      const result = await this.store.sendQuery({ query: this.query, defaultGraph: _defaultGraph })
      if (result.resultType === 'bindings') {
        const bindingsStream = await result.execute()
        this.resources = await Array.fromAsync(bindingsStream, (bindings, index) => {
          return bindings.get(this.selectVariable).value
        })
      }
    },
    shortenIri (resource) {
      return usePrefixesStore().shortenIri(resource)
    }
  }
}

</script>

<style scoped>
.list-group-item {
  cursor: pointer;
}
</style>
