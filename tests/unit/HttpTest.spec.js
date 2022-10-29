/*
 * @Description :
 * @Date        : 2022-10-29 20:16:13 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-29 20:28:38 +0800
 * @LastEditors : JackChou
 */
import { mount } from '@vue/test-utils'
import HttpTest from './HttpTest.vue'

function factory() {
  return mount(HttpTest, {
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
    const wrapper = factory()
    console.log(wrapper.html())
  })

  it('测试 http 请求', () => {
    const wrapper = factory()
    expect(mockGet).toHaveBeenCalled()
    expect(mockGet).toHaveBeenCalledTimes(1)
  })
})
