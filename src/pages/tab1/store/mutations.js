export default {
  // 保存登陆状态
  SetLoginStatus (state, status) {
    state.login_status = status
  },
  // 保存用户信息
  SaveUserInfo (state, info) {
    state.user_info = info
  }
}
