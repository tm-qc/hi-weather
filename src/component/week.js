import prefix_icons from './icons.js'
import myMixin from '../mixins/main.js'
export default{
  data(){
    return {
      s:this.$store,
      ss:this.$store.state,
    }
  },
  mixins: [myMixin],
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
    mathRound(){
      return (num)=>Math.round(num)
    }
  }
}

// ("0"+d.getDate())