'use strict'

import { quadToStringQuad } from 'rdf-string'
import { cloneDeep } from 'lodash';

export function diff_n3 (oldData, newData) {
  return _diff(oldData.getQuads(), newData.getQuads())
}

export function diff (oldData, newData) {
  // Copy the incomming data
  return _diff(cloneDeep(oldData), cloneDeep(newData))
}

function _diff (_oldArray, _newArray) {
  // Sort the data arrays to make the comparison easier
  _newArray.sort(sortFunction)
  _oldArray.sort(sortFunction)

  // Get iterators for the arrays
  const newIterator = _newArray[Symbol.iterator]()
  const origIterator = _oldArray[Symbol.iterator]()

  // get first values from the data models
  let nextNew = newIterator.next()
  let nextOrig = origIterator.next()

  // initialize the resulting arrays
  const insertArray = []
  const deleteArray = []

  while (!nextNew.done || !nextOrig.done) {
    if (nextNew.done && !nextOrig.done) {
      // add rest to delete
      while (!nextOrig.done) {
        deleteArray.push(nextOrig.value)
        nextOrig = origIterator.next()
      }
    } else if (nextOrig.done && !nextNew.done) {
      // add rest to add
      while (!nextNew.done) {
        insertArray.push(nextNew.value)
        nextNew = newIterator.next()
      }
    } else if (nextNew.value.equals(nextOrig.value)) {
      nextNew = newIterator.next()
      nextOrig = origIterator.next()
    } else {
      const equality = sortFunction(nextNew.value, nextOrig.value)
      if (equality < 0) {
        insertArray.push(nextNew.value)
        nextNew = newIterator.next()
      } else if (equality > 0) {
        deleteArray.push(nextOrig.value)
        nextOrig = origIterator.next()
      }
    }
  }
  return { add: insertArray, del: deleteArray }
}

export function sortFunction (a, b) {
  const x = JSON.stringify(quadToStringQuad(a))
  const y = JSON.stringify(quadToStringQuad(b))
  return x < y ? -1 : x > y ? 1 : 0
}
