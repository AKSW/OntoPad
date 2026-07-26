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
export { getResourceQuery } from './helpers/queries'
export { quadStreamToString } from './helpers/rdf-parse'

// Components
export { default as Term } from './components/Term.vue'
export { default as TermInput } from './components/TermInput.vue'
export { default as InstanceList } from './components/InstanceList.vue'
export { default as PropertyList } from './components/PropertyList.vue'
