<template>
  <div></div>
</template>

<script>
import { ref, onMounted, defineComponent } from 'vue'
import axios from 'axios'
export default defineComponent({
  name: 'HttpTest',
  setup(props, { emit, attrs, slots }) {
    onMounted(() => {
      axios.get('/')
    })
    return {}
  },
})
</script>
