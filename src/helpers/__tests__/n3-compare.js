// import { mount } from '@vue/test-utils'
import { describe, expect, test } from '@jest/globals'
import { diff } from '@/helpers/n3-compare'

import { DataFactory } from 'n3'
const { triple, namedNode, blankNode } = DataFactory

describe('diff', () => {
  test('compare lists of empty triples', () => {
    const answer = diff([
      triple(namedNode(''), namedNode(''), namedNode(''))
    ], [
      triple(namedNode(''), namedNode(''), namedNode(''))
    ])
    expect(answer.del).toHaveLength(0)
    expect(answer.add).toHaveLength(0)
  })
  test('compare lists of two and one triples', () => {
    const answer = diff([
      triple(namedNode('a'), namedNode('a'), namedNode('a')),
      triple(namedNode('b'), namedNode('b'), namedNode('b'))
    ], [
      triple(namedNode('a'), namedNode('a'), namedNode('a'))
    ])
    expect(answer.del).toHaveLength(1)
    expect(answer.add).toHaveLength(0)
  })
  test('compare lists add to the end', () => {
    const answer = diff([
      triple(namedNode('s'), namedNode('p'), namedNode('a')),
      triple(namedNode('s'), namedNode('p'), namedNode('b'))
    ], [
      triple(namedNode('s'), namedNode('p'), namedNode('a')),
      triple(namedNode('s'), namedNode('p'), namedNode('b')),
      triple(namedNode('s'), namedNode('p'), namedNode('c'))
    ])
    expect(answer.del).toHaveLength(0)
    expect(answer.add).toHaveLength(1)
    expect(answer.add).toEqual([triple(namedNode('s'), namedNode('p'), namedNode('c'))])
  })
  test('compare lists add to the beginning', () => {
    const answer = diff([
      triple(namedNode('s'), namedNode('p'), namedNode('b')),
      triple(namedNode('s'), namedNode('p'), namedNode('c'))
    ], [
      triple(namedNode('s'), namedNode('p'), namedNode('a')),
      triple(namedNode('s'), namedNode('p'), namedNode('b')),
      triple(namedNode('s'), namedNode('p'), namedNode('c'))
    ])
    expect(answer.del).toHaveLength(0)
    expect(answer.add).toHaveLength(1)
    expect(answer.add).toEqual([triple(namedNode('s'), namedNode('p'), namedNode('a'))])
  })
  test('compare lists add to the middle', () => {
    const answer = diff([
      triple(namedNode('s'), namedNode('p'), namedNode('a')),
      triple(namedNode('s'), namedNode('p'), namedNode('c'))
    ], [
      triple(namedNode('s'), namedNode('p'), namedNode('a')),
      triple(namedNode('s'), namedNode('p'), namedNode('b')),
      triple(namedNode('s'), namedNode('p'), namedNode('c'))
    ])
    expect(answer.del).toHaveLength(0)
    expect(answer.add).toHaveLength(1)
    expect(answer.add).toEqual([triple(namedNode('s'), namedNode('p'), namedNode('b'))])
  })
  test('compare lists remove from the end', () => {
    const answer = diff([
      triple(namedNode('s'), namedNode('p'), namedNode('a')),
      triple(namedNode('s'), namedNode('p'), namedNode('b')),
      triple(namedNode('s'), namedNode('p'), namedNode('c'))
    ], [
      triple(namedNode('s'), namedNode('p'), namedNode('a')),
      triple(namedNode('s'), namedNode('p'), namedNode('b'))
    ])
    expect(answer.del).toHaveLength(1)
    expect(answer.add).toHaveLength(0)
    expect(answer.del).toEqual([triple(namedNode('s'), namedNode('p'), namedNode('c'))])
  })
  test('compare lists remove from the beginning', () => {
    const answer = diff([
      triple(namedNode('s'), namedNode('p'), namedNode('a')),
      triple(namedNode('s'), namedNode('p'), namedNode('b')),
      triple(namedNode('s'), namedNode('p'), namedNode('c'))
    ], [
      triple(namedNode('s'), namedNode('p'), namedNode('b')),
      triple(namedNode('s'), namedNode('p'), namedNode('c'))
    ])
    expect(answer.del).toHaveLength(1)
    expect(answer.add).toHaveLength(0)
    expect(answer.del).toEqual([triple(namedNode('s'), namedNode('p'), namedNode('a'))])
  })
  test('compare lists remove from the middle', () => {
    const answer = diff([
      triple(namedNode('s'), namedNode('p'), namedNode('a')),
      triple(namedNode('s'), namedNode('p'), namedNode('b')),
      triple(namedNode('s'), namedNode('p'), namedNode('c'))
    ], [
      triple(namedNode('s'), namedNode('p'), namedNode('a')),
      triple(namedNode('s'), namedNode('p'), namedNode('c'))
    ])
    expect(answer.del).toHaveLength(1)
    expect(answer.add).toHaveLength(0)
    expect(answer.del).toEqual([triple(namedNode('s'), namedNode('p'), namedNode('b'))])
  })
})
