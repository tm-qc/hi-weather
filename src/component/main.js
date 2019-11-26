import prefix_header from './header.js'
import prefix_footer from './footer.js'
import prefix_icons from './icons.js'
import prefix_week from './week.js'

export default {
  data(){
    return {
      s:this.$store,
      ss:this.$store.state,
      selectVal:'福岡県'
    }
  },
  components:{
    prefix_header,
    prefix_icons,
    prefix_footer,
    prefix_week,
  },
  template:`
  <div>
  <prefix_header />
  <div v-if="ss.getComp">
    <div class="cp_ipselect cp_sl03">
      <select required  v-model="selectVal" v-html=s.getters.placeOption @change="selected"></select>
    </div>
    <div class="wCard">
      <div class="wCard__date">
        <div class="wCard__timing-now">NOW</div>
        <div>{{timeStampCompile(c.time,"now")}}</div>
      </div>
      <div class="wCard__wMain">
        <div class="wCard__iconArea">
          <prefix_icons :weatherInfo=c.icon></prefix_icons>
        </div>
      </div>
      <div class="wCard__wInfo">
        <span>{{c.summary}}</span>
      </div>
      <div class="subInfo">
        <div class="subInfo__mainTemp">
          <div class="subInfo__mainTemp--temp">{{c.temperature}}</div>
          <prefix_icons weatherInfo="temp"></prefix_icons>
        </div>
        <div class="subInfo__windItem">
          <prefix_icons weatherInfo="wind"></prefix_icons>
          <div class="subInfo__windText">{{c.windSpeed}}<span>m/s</span></div>
        </div>
      </div>
    </div>
    <prefix_week></prefix_week>
    <prefix_footer /> 
  </div>
  </div>
  `,
  beforeMount(){
    this.get(this.ss.initPlace)
  },
  updated(){
    this.$nextTick(function () {
      // ビュー全体がレンダリングされた後にのみ実行されるコードを記載する
    })
  },
  computed:{
    c(){
      return this.ss.currently
    },
    time(){
      return (time,mode)=>timeStampCompile(time,mode)
    },
    // h(){
    //   return this.ss.hourly
    // }
  },
  methods:{
    async get(val){
      try {
        /**
         * そのままオブジェクトでわたすとContent-Typeがapplication/jsonになり、POSTでうけとれないので、
         * file_get_contents('php://input');で受け取る必要がある。
         * 
         * php filter input POSTでうけとるためURLSearchParamsを経由させる
        */
        let params = new URLSearchParams();
        params.append('place', val)
        const result = await axios.post('./src/api/index.php',params)
        if(result.status === 200){
          if(result.data === 'Error Nothing Place'){
            console.log(result.data);
            return false;
          }
          this.$store.dispatch('currently',{result:result.data.currently})
          this.$store.dispatch('daily',{result:result.data.daily})
          this.$store.dispatch('hourly',{result:result.data.hourly})
          this.$store.dispatch('placeName',{list:result.data.placeName})
          this.$store.dispatch('getComp',{flg:true})
        }else{
          throw new Error('HTTPステータス異常'+result.status)
        }
      }catch(error){
        console.log('Api通信失敗：'+error.response.status +' '+ error.response.statusText)
      }
    },
    //本当はweek.jsと共通関数かしたかったけど、グローバルに置くとsafariでエラーになるので後日確認
    timeStampCompile(timestamp,mode){
      const d = new Date( timestamp * 1000 );
      const year  = d.getFullYear();
      const month = ( d.getMonth() + 1  < 10 ) ? '0' + d.getMonth() + 1  : d.getMonth() + 1
      const day  = ( d.getDate()   < 10 ) ? '0' + d.getDate()   : d.getDate();
      const hour = ( d.getHours()   < 10 ) ? '0' + d.getHours()   : d.getHours();
      const min  = ( d.getMinutes() < 10 ) ? '0' + d.getMinutes() : d.getMinutes();
      const sec   = ( d.getSeconds() < 10 ) ? '0' + d.getSeconds() : d.getSeconds();
      let timeFmt = ''
      if(mode === 'now'){
        timeFmt = year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec ;
      }else{
        timeFmt = String(year).slice(-2) + '-' + month + '-' + day
      }
      return timeFmt
    },
    selected(){
      this.get(this.selectVal)
    }
  }
}