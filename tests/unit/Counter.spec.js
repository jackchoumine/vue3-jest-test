/*
 * @Description :
 * @Date        : 2022-10-29 20:16:13 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-29 20:28:38 +0800
 * @LastEditors : JackChou
 */
import { mount } from '@vue/test-utils'
import Counter from './Counter.vue'
import { createStore } from 'vuex'

function createLocalStore() {
  const store = createStore({
    state() {
      return { count: 0 }
    },
    mutations: {
      add(state) {
        state.count += 1
      },
    },
  })
  return store
}
function factory() {
  const store = createLocalStore()
  return mount(Counter, {
    global: {
      plugins: [store],
    },
  })
}

describe('Counter', () => {
  it('测试store', async () => {
    const wrapper = factory()
    const button = wrapper.find('button')
    await button.trigger('click')
    await button.trigger('click')
    expect(wrapper.find('button').text()).toBe('2')
  })

  it('测试本地store', async () => {
    const wrapper = factory()
    const button = wrapper.find('button')
    await button.trigger('click')
    await button.trigger('click')
    expect(wrapper.find('button').text()).toBe('2')
  })
})
