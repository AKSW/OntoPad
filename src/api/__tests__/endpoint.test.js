import axios from 'axios';
import { afterEach, describe, expect, it } from 'vitest'
import { EndpointFactory } from '../endpoint.js';


describe('endpoint factory', () => {

  it('create quit store', () => {
    let store = EndpointFactory.create({
      "quit_url":"http://localhost:5000"
    })
    expect(store.type).toBe("quit")
    expect(store.quitUrl).toBe("http://localhost:5000")
    expect(store.queryUrl).toBe("http://localhost:5000/sparql")
    expect(store.updateUrl).toBe("http://localhost:5000/sparql")
  });

  it('create read only sparql store', () => {
    let store = EndpointFactory.create({
      "query_url":"http://localhost:5000/sparql"
    })
    expect(store.type).toBe("query_only")
    expect(store.queryUrl).toBe("http://localhost:5000/sparql")
  });

  it('create update sparql store', () => {
    let store = EndpointFactory.create({
      "query_url":"http://localhost:5000/sparql",
      "update_url":"http://localhost:5000/update"
    })
    expect(store.type).toBe("query_update")
    expect(store.queryUrl).toBe("http://localhost:5000/sparql")
    expect(store.updateUrl).toBe("http://localhost:5000/update")
  });
});
