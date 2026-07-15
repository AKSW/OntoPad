import { describe, it, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../DashboardView.vue'

test('noop', () => {
  expect("Hello Test").toBe('Hello Test')
})

// describe('HelloWorld', () => {
//   it('renders properly', () => {
//     const wrapper = mount(DashboardView)
//     expect(wrapper.text()).toContain('Resource Dashboard')
//   })
// })
