<template>
  <div>
    <CommonTest text="公共组件" />
    <Tab1Test text="模块组件" />
    {{tips}}
    <button @click="$nav('tab1.index',{navType:'switchTab'})">回到首页</button>
  </div>
</template>

<script>
import CommonTest from '@/components/common/test'
import Tab1Test from '@/components/tab1/test'
import { Common } from '@/utils/Mix'
export default {
  mixins: [Common],
  data () {
    return {}
  },
  props: {
  },
  onShow () {
    // 获取页面参数
    console.log('this.$root.$mp.appOptions', this.$root.$mp.appOptions)
  },
  onLoad (option) {
    // 打印参数
    console.log('onLoad-option', option)
    // 获取页面参数
    console.log('this.$getQuery()-', this.$getQuery('id'))
  },
  mounted () {
  },
  methods: {

  },
  computed: {
  },
  components: {
    CommonTest,
    Tab1Test
  }
}
</script>

<style lang="less" scoped>

</style>
