import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"

import { parse } from 'yaml'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import HelloPlugin from './plugins/HelloPlugin'

const app = createApp(App,
{
  title: "OntoPad next ⏩",
  config: parse(document.querySelector('#ontopad_configuration').text)
})

app.use(createPinia())
app.use(router)
app.use(HelloPlugin)

app.mount('#app')
