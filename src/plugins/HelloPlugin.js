import { register } from '../helpers/plugin'

export default {
  install: (app, options) => {
    register(app, {
      name: 'hello',
      component: () => import('../views/HelloView.vue'),
      path: '/hello',
      title: "Hello"
    })
  }
}
