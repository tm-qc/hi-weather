/**
 * Vue Mixin
 */
export default{
  methods:{
    /**
     * Dark Sky Apiの時間(ミリ秒)を各モードで変換して返す
     * @param {number} timestamp 
     * @param {string} mode 
     */
    timeStampCompile(timestamp,mode){
      const d = new Date( timestamp * 1000 );
      const year  = d.getFullYear();
      const month = d.getMonth() + 1;
      const day  = ( d.getDate()   < 10 ) ? '0' + d.getDate()   : d.getDate();
      const hour = ( d.getHours()   < 10 ) ? '0' + d.getHours()   : d.getHours();
      const min  = ( d.getMinutes() < 10 ) ? '0' + d.getMinutes() : d.getMinutes();
      const sec   = ( d.getSeconds() < 10 ) ? '0' + d.getSeconds() : d.getSeconds();
      let timeFmt = ''

      switch(true){
        case mode === 'now':
            timeFmt = year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec ;
          break;
        case mode === 'day':
            timeFmt = month + '-' + day
          break;
        case mode === 'hour':
            timeFmt = d.getHours()
          break;
      }
      return timeFmt
    }
  }
}