'use strict'

import { Store, Parser, StreamWriter, StreamParser } from 'n3'
import { Readable } from 'readable-stream'
import { promisifyEventEmitter } from 'event-emitter-promisify';

// parse to objects
// rdfString: the rdf string to parse
// subject: the resource to take from the rdf string
// returns [resultDataModel, prefixes]
export async function parseRDFtoRDFJS (rdfString, subject = undefined) {
  return await new Promise((resolve, reject) => {
    const resultDataModel = []
    const parser = new Parser()
    parser.parse(rdfString, (error, quad, prefixes) => {
      if (error) {
        console.log(error)
        reject(error)
      } else if (quad) {
        if (subject === undefined || quad.subject.id === subject.id) {
          resultDataModel.push(quad)
        } else {
          console.log('skip')
          console.log(quad.subject.id)
          console.log(subject.id)
        }
      } else {
        console.log('done parsing')
        resolve([resultDataModel, prefixes])
      }
    })
  })
}

// Takes a String and return a stream of quads
export async function stringToStore(string, options) {
  const streamParser = new StreamParser(options)
  Readable.from([string]).pipe(streamParser)

  const store = new Store();
  return promisifyEventEmitter(store.import(streamParser), store);
}

// Takes a Stream of Quads as first argument
export async function quadStreamToString(quadStream, options) {
  const streamWriter = new StreamWriter(options);
  streamWriter.import(quadStream)

  const chunks = [];

  for await (const chunk of streamWriter) {
    chunks.push(Buffer.from(chunk));
  }

  return Buffer.concat(chunks).toString();
}
