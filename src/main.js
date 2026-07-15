import { default as OntoPad } from './App.vue'
import { default as OntoPadRouter } from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"

export { useRdfStore } from './stores/rdf'
export { useSelectionStore } from './stores/selection'
export { usePrefixesStore } from './stores/prefixes'
export { OntoPad, OntoPadRouter }
