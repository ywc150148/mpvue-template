<template>
  <div @click="clickHandle">
    <CommonTest text="公共组件" />

    <a href="/pages/subContract1/pages/a/main">前往A</a>
    <Tab1Test text="模块组件" />
    {{moudleName}} 

    <p @click="handleNav">nav</p>
  </div>
</template>

<script>
import CommonTest from '@/components/common/test'
import Tab1Test from '@/components/tab1/test'

import { Common } from '@/utils/Mix'
export default {
  mixins: [Common],
  data () {
    return {
      testdata: 666,
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },
  onShow () {
    console.log('显示首页', this.testdata)
  },

  components: {
    CommonTest,
    Tab1Test
  },

  methods: {
    handleNav () {
      this.$nav('subContract1.a', {
        query: {
          id: 12342111,
          djad: 1331
        }
      })
    }
  },
  computed: {
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style lang="less" scoped>
.userinfo {
  .userinfo-avatar {
    background: darkblue;
  }
}

.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all {
  width: 7.5rem;
  height: 1rem;
  background-color: blue;
}
.all:after {
  display: block;
  content: "";
  clear: both;
}
.left {
  float: left;
  width: 3rem;
  height: 1rem;
  background-color: red;
}

.right {
  float: left;
  width: 4.5rem;
  height: 1rem;
  background-color: green;
}
</style>
