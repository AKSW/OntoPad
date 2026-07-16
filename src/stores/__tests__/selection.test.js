// stores/counter.spec.ts
import { describe, it, vi, expect, assert, beforeEach, afterEach } from 'vitest'

import rdf from '@rdfjs/data-model'

import { setActivePinia, createPinia } from 'pinia'
import { useSelectionStore } from '../selection'

describe('Selection Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  afterEach (() => {
    vi.restoreAllMocks()
  })

  it('init', () => {
    const store = useSelectionStore()
    expect(store.graph_iri).toBe("http://example.org/")
    expect(store.resource_iri).toBe("http://example.org/Resource")
  })

  it('changes graph', () => {
    const store = useSelectionStore()
    store.changeGraphIri("http://graph.example.org/")
    expect(store.graph_iri).toBe("http://graph.example.org/")
    expect(store.resource_iri).toBe("http://example.org/Resource")
  })

  it('changes resource', () => {
    const store = useSelectionStore()
    store.changeResourceIri("http://example.org/Res")
    expect(store.graph_iri).toBe("http://example.org/")
    expect(store.resource_iri).toBe("http://example.org/Res")
  })

})
