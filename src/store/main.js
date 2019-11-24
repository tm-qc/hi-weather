export default new Vuex.Store({
  state: {
    currently:[],
    daily:[],
    hourly:[],
    placeName:[],
    initPlace:'福岡県',//初期値
    getComp:false,
  },
  mutations: {
    currently (state,result) {
      state.currently = result
    },
    daily (state,result) {
      state.daily = result
    },
    hourly (state,result) {
      state.hourly = result
    },
    placeName (state,list) {
      state.placeName = list
    },
    getComp(state,flg) {
      state.getComp = flg
    }
  },
  actions:{
    currently({commit},payload){
      commit('currently',payload.result)
    },
    daily({commit},payload){
      commit('daily',payload.result)
    },
    hourly({commit},payload){
      commit('hourly',payload.result)
    },
    placeName({commit},payload){
      commit('placeName',payload.list)
    },
    getComp({commit},payload){
      commit('getComp',payload.flg)
    },
  },
  getters:{
    placeOption:state=>{
      return state.placeName.reduce((option,name,idx)=>{
        if(state.initPlace === name){
          option+='<option value="'+name+'" selected>'+name+'</option>'
        }else{
          option+='<option value="'+name+'">'+name+'</option>'
        }
        return option
      },'')
      }
  }
})