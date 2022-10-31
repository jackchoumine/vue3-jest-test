/*
 * @Description :
 * @Date        : 2022-10-29 20:16:13 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-29 20:28:38 +0800
 * @LastEditors : JackChou
 */
import { shallowMount } from '@vue/test-utils'
import HttpTest from './HttpTest.vue'

function factory() {
  return shallowMount(HttpTest, {
    global: {
      stubs: {
        subComponent: {
          template: `<span></span>`,
        },
        HelloWorld: true,
      },
    },
  })
}

let mockGet = '' //jest.fn()

jest.mock('axios', () => {
  return { get: () => mockGet() }
})
describe('HttpTest', () => {
  // 每个 it 都会执行
  beforeEach(() => {
    mockGet = jest.fn()
  })

  it('模拟子组件', () => {
    console.log(HttpTest)
    debugger
    const wrapper = factory()
    console.log(wrapper.html())
  })

  it('测试 http 请求', () => {
    const wrapper = factory()
    expect(mockGet).toHaveBeenCalled()
    expect(mockGet).toHaveBeenCalledTimes(1)
  })

  it('测试自定义事件', () => {
    const wrapper = factory()
    const button = wrapper.find('button')
    button.trigger('click')
    console.log(wrapper.emitted())
    expect(wrapper.emitted()['my-click'][0][0]).toBe('hello')
  })
})
