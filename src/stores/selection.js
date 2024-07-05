import { defineStore } from 'pinia'
import config from '@/config'

export const useSelectionStore = defineStore('selection', {
  state: () => ({
      graph_iri: config.graph_iri,
      resource_iri: config.resource_iri,
  }),
  actions: {
    changeGraphIri (graphIri) {
      console.log('Change graph Iri to ' + graphIri)
      this.graph_iri = graphIri
    },
    changeResourceIri (resourceIri) {
      console.log('Change resource Iri to ' + resourceIri)
      this.resource_iri = resourceIri
    }
  },
})
