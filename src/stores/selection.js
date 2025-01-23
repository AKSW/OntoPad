import { defineStore } from 'pinia'

export const useSelectionStore = defineStore('selection', {
  state: () => ({
      graph_iri: "",
      resource_iri: "",
      is_class: true,
  }),
  actions: {
    changeGraphIri (graphIri) {
      console.log('Change graph Iri to ' + graphIri)
      this.graph_iri = graphIri
    },
    changeResourceIri (resourceIri, isClass=true) {
      console.log('Change resource Iri to ' + resourceIri)
      this.resource_iri = resourceIri
      if (isClass == true) {
        this.is_class = true
      } else {
        this.is_class = false
      }
    },
    initConfig (config) {
      this.graph_iri = config.graph_iri
      this.resource_iri = config.resource_iri
    }
  },
})
