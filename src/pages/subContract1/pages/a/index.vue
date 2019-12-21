<template>
<div @click="handleback">
  <h1>这是分包页面</h1>
  <p @click="handleNav">回到tab1</p>
</div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      testdata: 990,
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    card
  },
  onShow () {
    // console.log('this.$root.$mp.appOptions', this.$root.$mp.appOptions)
  },
  onLoad (option) {
    // console.log('onLoad-option', option)
  },
  methods: {
    handleback () {
      console.log('this.$getQuery()-', this.$getQuery('id'))
      this.$nav()
    },
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>

</style>
