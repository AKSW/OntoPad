import Router from 'vue-router'
import InputForm from '@/components/InputForm'
import VocPad from '@/components/VocPad'
import EditForm from '@/components/EditForm'
import RDFormDemo from '@/components/RDFormDemo'
import DashboardView from '@/components/DashboardView'
import InstanceList from '@/components/InstanceList'
import Source from '@/components/Source'

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'DashboardView',
      component: DashboardView
    },
    {
      path: '/instances',
      name: 'InstanceList',
      component: InstanceList
    },
    {
      path: '/voc',
      name: 'VocPad',
      component: VocPad
    },
    {
      path: '/edit',
      name: 'EditForm',
      component: EditForm
    },
    {
      path: '/rdform',
      name: 'RDFormDemo',
      component: RDFormDemo
    },
    {
      path: '/add',
      name: 'InputForm',
      component: InputForm
    },
    {
      path: '/source',
      name: 'Source',
      component: Source
    }
  ]
})
