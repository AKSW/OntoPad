import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"

// Basic
export { default as OntoPad } from './App.vue'
export { default as OntoPadRouter } from './router'

// Stores
export { useRdfStore } from './stores/rdf.js'
export { useSelectionStore } from './stores/selection.js'
export { usePrefixesStore } from './stores/prefixes.js'

// Helpers
export { register } from './helpers/plugin'
export { diff } from './helpers/n3-compare'

// Components
export { default as TermInput } from './components/TermInput.vue'
