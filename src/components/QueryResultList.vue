<template>
  <b-card no-body>
    <template v-slot:header>
      <div class="d-flex justify-content-between align-items-center">
        <h6 class="mb-0">{{ title }}</h6>
        <div class="form-inline">
          <b-input v-if="search" v-model="filter" placeholder="Search …"></b-input>
          <b-button v-on:click="updateList" v-b-tooltip.hover title="Reload" aria-label="Reload">
            <b-icon icon="arrow-repeat"></b-icon>
          </b-button>
          <b-button v-if="add" v-on:click="add" v-b-tooltip.hover :title="addTitle" :aria-label="addTitle">
            <b-icon icon="plus-square"></b-icon>
          </b-button>
        </div>
      </div>
    </template>

    <b-list-group flush v-for="(resource, index) in resourcesFiltered" :key="index">
      <b-list-group-item
        class="list-group-item"
        :class="[{'active': resource == activeResource}, itemClass]"
        href="#"
        :for="'form-control' + index"
        v-on:click="select(resource)">{{ resource }}</b-list-group-item>
    </b-list-group>
  </b-card>
</template>

<script>
export default {
  name: 'QueryResultList',
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
    }
  },
  methods: {
    select (resource) {
      if (this.selectResource) {
        this.selectResource(resource)
      } else {
        this.$store.commit('changeResourceIri', resource)
      }
    },
    updateList () {
      this.$store.dispatch('sendQuery',
        { query: this.query, queryQuads: this.queryQuads })
        .then(result => {
          const bindings = result.data.results.bindings
          this.resources = []
          for (const key in bindings) {
            this.resources.push(bindings[key][this.selectVariable].value)
          }
        })
    }
  }
}

</script>
