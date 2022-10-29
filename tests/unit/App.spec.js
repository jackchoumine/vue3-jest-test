/*
 * @Description :
 * @Date        : 2022-10-29 19:03:34 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-29 19:47:25 +0800
 * @LastEditors : JackChou
 */
import { mount } from '@vue/test-utils'
const App = {
  props: {
    count: Number,
  },
  data() {
    return { msg: 'hello' }
  },
  /*html*/
  template: `
  <div v-if="count % 2 === 0">count:{{count}}. count is even.</div>
  <div v-else>count:{{count}}. count is odd.</div>
  <h2>{{msg}}</h2>
  `,
}

// NOTE 提取工厂函数
function factory({ props, data }) {
  // const app =  createApp() app.mount()
  return mount(App, {
    props,
    data() {
      return data
    },
  })
}
describe('App', () => {
  it('should render with odd', () => {
    const odd = 3
    const hello = 'hello'
    const wrapper = factory({
      props: { count: odd },
      data: { msg: hello },
    })
    // NOTE 输出一个对象
    // console.log(wrapper.vm)
    expect(wrapper.html()).toContain(`count:${odd}. count is odd`)
    expect(wrapper.find('h2').text()).toBe(hello)
  })
  // NOTE xit 跳过这个测试
  it('should render with even', () => {
    const evenNumber = 4
    const wrapper = factory({ props: { count: evenNumber } })
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
