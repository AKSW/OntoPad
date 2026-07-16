import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"

export { default as OntoPad } from './App.vue'
export { default as OntoPadRouter } from './router'
export { useRdfStore } from './stores/rdf.js'
export { useSelectionStore } from './stores/selection.js'
export { usePrefixesStore } from './stores/prefixes.js'
export { register } from './helpers/plugin'