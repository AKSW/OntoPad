import axios from 'axios'
import querystring from 'querystring'

export const QuitStore = {
  create (storeUrl) {
    let HTTPQuery = axios.create({ baseURL: storeUrl + '/sparql' })
    let HTTPUpdate = axios.create({ baseURL: storeUrl + '/sparql' })
    let HTTPGit = axios.create({ baseURL: storeUrl })

    return {
      push () {
        return HTTPGit.post('/push', querystring.stringify({
          dst: 'master',
          refspec: 'master:master',
          remote: 'origin',
          src: 'master'
        }),
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            Accept: 'application/sparql-results+json'
          }
        })
      },
    }
  }
}
