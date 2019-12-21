/**
 * @author ywc
 * @desc 封装路由跳转跳转，传入完整的路径需要设置params.isUrl:true
 * @param { String|Number } [destination] 传入路由的'模块名+页面名称'或完整的路径
 * @param { Object} [_params] 对象,[query]：参数，[isUrl]：是否完整路径，[navType]：跳转方式，switchTabreLaunch、redirectTo、navigateTo、navigateBack
 */
const nav = (destination = '', _params) => {
  return new Promise((resolve, reject) => {
  // 合并参数
    let params = Object.assign({query: {}, isUrl: false, navType: 'navigateTo'}, _params)
    // 触发返回
    if (!destination || destination === 'back' || destination === -1) {
      wx.navigateBack({
        delta: 1,
        success: () => {
          resolve('success')
        },
        fail: () => {
          resolve('fail')
        }
      })
    } else {
    // 跳转方式
      let navType = params.navType
      // 处理url参数
      let querykeys = Object.keys(params.query) // 对象长度
      let query = querykeys.length > 0 ? '?' : ''
      if (querykeys.length > 0) {
        query += querykeys.map((key, index) => {
          return `${key}=${params.query[key]}`
        }).join('&')
      }
      // 传入url或模块名
      let url = destination
      // 传入模块路径
      if (!params.isUrl) {
        let modul = destination.split('.')
        url = `/pages/${modul[0]}/pages/${modul[1]}/main` + query
      }
      // 执行跳转
      mpvue[navType]({
        url: url,
        success: () => {
          resolve('success')
        },
        fail: () => {
          resolve('fail')
        }
      })
      console.log('url', url + query)
    }
  })
}

/**
 * @desc 获取页面参数
 * @param { String } [key] 参数的键名
 * @return 返回参数
 */
const getQuery = function (key) {
  let value = typeof key !== 'undefined' ? this.$root.$mp.query[key] : this.$root.$mp.query
  return value
}

export const JsonToObj = str => {
  return JSON.parse(str)
}

export const ObjToJson = obj => {
  return JSON.stringify(obj)
}

export default {
  install: Vue => {
    Vue.prototype.$nav = nav
    Vue.prototype.$getQuery = getQuery
    Vue.prototype.$JsonToObj = JsonToObj
    Vue.prototype.$ObjToJson = ObjToJson
  },
  nav,
  JsonToObj,
  ObjToJson
}
