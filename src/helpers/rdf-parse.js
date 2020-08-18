'use strict'

import { Parser } from 'n3'

// parse to objects
// rdfString: the rdf string to parse
// subject: the resource to take from the rdf string
// returns [resultDataModel, prefixes]
async function parseRDFtoRDFJS (rdfString, subject = undefined) {
  return await new Promise((resolve, reject) => {
    let resultDataModel = []
    const parser = new Parser()
    parser.parse(rdfString, (error, quad, prefixes) => {
      if (error) {
        console.log(error)
        reject(error)
      } else if (quad) {
        if (subject == undefined || quad.subject.id === subject.id) {
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

export { parseRDFtoRDFJS }
