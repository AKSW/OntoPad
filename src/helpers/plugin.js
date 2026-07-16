'use strict'

/**
 * Register a plugin to the OntoPad app
 */
function register (app, plugin) {
  console.log("Register new OntoPad plugin")
  app.config.globalProperties.$router.addRoute({
    path: plugin.path,
    name: plugin.name,
    component: plugin.component
  })
  app.config.globalProperties.$navigation = app.config.globalProperties.$navigation || {}
  app.config.globalProperties.$navigation.main = app.config.globalProperties.$navigation.main || []
  app.config.globalProperties.$navigation.main.push(
    {
      to: plugin.path,
      title: plugin.title
    }
  )
}

export { register }
