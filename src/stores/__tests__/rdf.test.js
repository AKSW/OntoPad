import { describe, it, vi, expect, assert, beforeEach, afterEach } from 'vitest'

import axios from 'axios';
import { setActivePinia, createPinia } from 'pinia'
import { useRdfStore } from '../rdf'

const mocks = vi.hoisted(() => ({
  get: vi.fn(),
  post: vi.fn(),
}));

vi.mock('axios', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    default: {
      ...actual.default,
      create: vi.fn((args) => ({
        ...actual.default.create(args),
        get: mocks.get,
        post: mocks.post,
      })),
      get: mocks.get,
      post: mocks.post
    }
  }
})

describe('RDF Store', () => {
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
    const store = useRdfStore()
    expect(store.sparqlEndpoint.quitUrl).toBe("http://localhost:5000")
    expect(store.sparqlEndpoint.queryUrl).toBe("http://localhost:5000/sparql")
    expect(store.sparqlEndpoint.updateUrl).toBe("http://localhost:5000/sparql")
  })

  // this one does not work, we need new tests for comunica
  it('send query', async () => {
    // setup
    //${store.sparqlEndpoint.queryUrl}
    const postResponse = {
     "config": {
       "baseURL": "http://localhost:5000/sparql",
       "data": "select * {?s ?p ?o}",
       "headers": {
         "Accept": "application/sparql-results+json",
         "Content-Type": "application/sparql-query",
       },
       "method": "post",
     },
     "data": {
       "head": {
         "vars": [
           "p",
           "s",
           "o",
         ],
       },
       "results": {
         "bindings": [],
       },
     },
     "headers": {
       "content-length": "64",
       "content-type": "application/sparql-results+json",
     },
     "status": 200,
     "statusText": "OK",
    }

    // mocks.post.mockImplementationOnce(() => Promise.resolve(postResponse))
    mocks.post.mockResolvedValue(postResponse)

    // execute
    const store = useRdfStore()
    const sparqlQuery = "select * {?s ?p ?o}"
    let result = await store.sendQuery(sparqlQuery)

    // assert
    assert.deepInclude(result.data, postResponse.data)
    assert.deepInclude(result.headers, postResponse.headers)

    // expect(axios.post).toHaveBeenCalledWith(
    //   "",
    //   sparqlQuery,
    //   {
    //     "headers": {
    //       "Accept": "application/sparql-results+json",
    //       "Content-Type": "application/sparql-query",
    //     },
    //     "params": {},
    //   }
    // );
  })
})
