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
      _bindings: [],
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
    resources () {
      const list = []
      for (const key in this._bindings) {
        list.push(this._bindings[key].get(this.selectVariable).value)
      }
      return list
    }
  },
  methods: {
    select (resource) {
      if (this.selectResource) {
        this.selectResource(resource)
      } else {
        this.selection.changeResourceIri(resource)
      }
    },
    async updateList () {
      const result = await this.store.sendQuery({ query: this.query })
      if (result.resultType === 'bindings') {
        const bindingsStream = await result.execute()
        this._bindings = await bindingsStream.toArray()
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
