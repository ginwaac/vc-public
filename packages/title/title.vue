<template>
  <div class="vc-title">
    title组件：{{ title }}
  </div>
</template>

<script>
export default {
  name: 'vc-title', // 需要声明组件名称
  props: {
    title: {
      type: String,
      required: true,
      default: 'title'
    }
  }
}
</script>

<style lang="less" scpoed>
</style>
