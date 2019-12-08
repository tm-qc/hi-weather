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
    <div class="hourCard">
      <template v-for="(h,index) in h">
        <div>
          <div class="hourCard__iconAreaHour">
            <prefix_icons :weatherInfo=h.icon></prefix_icons>
          </div>
          <div class="hourCard__timing--hour">{{timeStampCompile(h.time,"hour")}}h</div>
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
    h(){
      return this.ss.hourly.data.filter((h,idx)=>{return (idx%2) != 0 && idx <=7})
    }
  }
}