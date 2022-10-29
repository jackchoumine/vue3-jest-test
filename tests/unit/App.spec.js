/*
 * @Description :
 * @Date        : 2022-10-29 19:03:34 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-29 19:23:22 +0800
 * @LastEditors : JackChou
 */
import { mount } from '@vue/test-utils'
const App = {
  props: {
    count: Number,
  },
  /*html*/
  template: `
  <div v-if="count % 2 === 0">count:{{count}}. count is even.</div>
  <div v-else>count:{{count}}. count is odd.</div>
  `,
}

function factory(props) {
  return mount(App, { props })
}
describe('App', () => {
  it('should render with odd', () => {
    const odd = 3
    const wrapper = factory({ count: odd })
    expect(wrapper.html()).toContain(`count:${odd}. count is odd`)
  })
  it('should render with even', () => {
    const evenNumber = 4
    const wrapper = factory({ count: evenNumber })
    expect(wrapper.html()).toContain(`count:${evenNumber}. count is even`)
  })
})

// test('mount', () => {
//   const wrapper = mount(App, {
//     props: {
//       count: 2,
//     },
//   })
//   // console.log(wrapper.html())
//   // expect(wrapper.html()).toBe('<div>hello</div>')
//   expect(wrapper.html()).toContain('count:2. count is even')
// })
