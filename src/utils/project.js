// 模块列表
const _modulList = [ 'tab1' ]

// vuex 仓库
let _store = {}
_modulList.map(modularName => {
  _store[modularName] = require(`./../pages/${modularName}/store`).default
})

// 非页面自定义store引入
_store['common'] = require(`./../pages/common/store`).default

export const modulList = _modulList
export const store = _store
