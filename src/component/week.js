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
      <div class="weekDate"　v-for="(day,index) in d.data">
      <template v-if="index!==0">
        <div class="timing-week">{{index}}day</div>
        <div>{{timeStampCompile(d.data[index].time,"day")}}</div>
        <div class="tempMax">{{d.data[index].temperatureHigh}}</div>
        <div class="tempMin">{{d.data[index].temperatureLow}}</div>
        <div class="iconAreaWeek">
          <prefix_icons :weatherInfo=d.data[index].icon></prefix_icons>
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
    }
  },
  methods:{
    timeStampCompile(timestamp,mode){
      const d = new Date( timestamp * 1000 );
      const year  = d.getFullYear();
      const month = d.getMonth() + 1;
      const day  = d.getDate();
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