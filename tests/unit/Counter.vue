<!--
 * @Description : 
 * @Date        : 2022-10-29 20:09:32 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-29 20:26:24 +0800
 * @LastEditors : JackChou
-->
<template>
  <button @click="add">{{ count }}</button>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Counter',
  props: {
    count: Number,
  },
  components: {},
  setup(props, { emit, attrs, slots }) {
    const store = useStore()
    const count = computed(() => {
      return store.state.count
    })
    function add() {
      store.commit('add')
    }
    return { count, add }
  },
})
</script>

<style scoped lang="scss"></style>
