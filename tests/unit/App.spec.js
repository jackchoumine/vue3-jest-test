/*
 * @Description :
 * @Date        : 2022-10-29 19:03:34 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-29 19:15:03 +0800
 * @LastEditors : JackChou
 */
import { mount } from '@vue/test-utils'
const App = {
  props: {
    count: Number,
  },
  /*html*/
  template: `
  <div>count:{{count}}</div>
  `,
}

test('mount', () => {
  const wrapper = mount(App, {
    props: {
      count: 2,
    },
  })
  // console.log(wrapper.html())
  // expect(wrapper.html()).toBe('<div>hello</div>')
  expect(wrapper.html()).toContain('count:2')
})
