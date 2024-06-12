import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import QueryResultList from '../QueryResultList.vue'

test('noop', () => {
  expect("Hello Test").toBe('Hello Test')
})


// test('renders a query result list', () => {
//   const wrapper = mount(QueryResultList, { props: { title: 'Hello Test' } })
//
//   const todo = wrapper.get('h6')
//
//   expect(todo.text()).toBe('Hello Test')
// })
//
// test('find entries', async () => {
//   const wrapper = mount(QueryResultList)
//   //expect(
//     wrapper.findAll('.list-group-item')
//   //) //.toHaveLength(1)
//
// })
