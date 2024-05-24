import axios from 'axios';
import { afterEach, describe, expect, it, vi } from 'vitest'
import { QuitStore } from '../quitstore.js';

vi.mock('axios', async() => {
  const actual = await vi.importActual('axios');
  return { ...actual, get: vi.fn(), post: vi.fn() }
});

describe('quit store', () => {

  afterEach (() => {
      vi.restoreAllMocks()
  })

  it('construct', () => {
    let store = new QuitStore("http://localhost:5000")
    expect(store.type).toBe("quit")
    expect(store.quitUrl).toBe("http://localhost:5000")
    expect(store.queryUrl).toBe("http://localhost:5000/sparql")
  });
});
