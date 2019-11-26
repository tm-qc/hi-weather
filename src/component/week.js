import prefix_icons from './icons.js'
export default{
  data(){
    return {
      s:this.$store,
      ss:this.$store.state,
    }
  },
  template:`
  <div v-if="ss.getComp" >
    <div class="weekCard">
      <template v-for="(day,index) in d.data">
        <div v-if="index!==0" class="weekCard__weekDate">
          <div class="weekCard__timing-week">{{index}}day</div>
          <div class="weekCard__date">{{timeStampCompile(d.data[index].time,"day")}}</div>
          <div class="weekCard__tempMax">{{mathRound(d.data[index].temperatureHigh)}}°</div>
          <div class="weekCard__tempMin">{{mathRound(d.data[index].temperatureLow)}}°</div>
          <div class="weekCard__iconAreaWeek">
            <prefix_icons :weatherInfo=d.data[index].icon></prefix_icons>
          </div>
        </div>
      </template>
      </div>
    </div>
  </div>
  `,
  components:{
    prefix_icons,
  },
  computed:{
    d(){
      return this.ss.daily
    },
    time(){
      return (time,mode)=>timeStampCompile(time,mode)
    },
    mathRound(num){
      return (num)=>Math.round(num)
    }
  },
  methods:{
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
    }
  }
}

// ("0"+d.getDate())