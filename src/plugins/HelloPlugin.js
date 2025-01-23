import HelloView from '../views/HelloView.vue'

export default {
  install: (app, options) => {
    // Plugin code goes here
    console.log(app.config)
    console.log(app.config.globalProperties.$router)
    console.log(app.config.globalProperties.$navigation)
    app.config.globalProperties.$router.addRoute({
      path: '/hello',
      name: 'hello',
      component: () => import('../views/HelloView.vue')
    })
    app.config.globalProperties.$navigation.main.push(
      {
        to: "/hello",
        title: "Hello"
      }
    )
  }
}
