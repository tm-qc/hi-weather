//main.jsとweek.jsの共通グローバル関数として使いたいが、ios、safariでエラーになるので、一旦各コンポーネント内で定義し呼び出し...
//後日調査
const _timeStampCompile = (timestamp,mode)=>{
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