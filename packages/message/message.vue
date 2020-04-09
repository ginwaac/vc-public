<template>
  <div class="vc-message">
    message组件：{{ message }}
  </div>
</template>

<script>
export default {
  name: 'vc-message', // 需要声明组件名称
  props: {
    message: {
      type: String,
      required: true,
      default: 'message'
    }
  }
}
</script>

<style lang="less" scpoed>
</style>
