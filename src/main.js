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

console.log(app)

app.use(createPinia())
app.use(router)

app.config.globalProperties.$navigation = {
  main: [
    {
      to: "/dashboard",
      title: "Home"
    },
    {
      to: "/instances",
      title: "Instances"
    },
    {
      to: "/voc",
      title: "Vocabulary"
    },
    {
      to: "/edit",
      title: "Edit"
    },
    {
      to: "/form",
      title: "Form"
    },
    {
      to: "/add",
      title: "Add"
    },
    {
      to: "/kanban",
      title: "Kanban"
    },
    {
      to: "/source",
      title: "Source"
    }
  ]
}
app.use(HelloPlugin)


app.mount('#app')
