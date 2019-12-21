<template>
  <div>
    <div class="text-wrap">
      <p>公共组件：{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang="less">
.text-wrap {
  text-align: center;
}
</style>
