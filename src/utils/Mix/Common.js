import { mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  onShow () {
  },
  mounted () {

  },
  computed: {
    ...mapState('common', ['login_status', 'tips'])
  },
  methods: {
    ...mapMutations('Common', ['SaveUserInfo', 'SetLoginStatus'])
  }
}
