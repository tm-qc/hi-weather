import prefix_main from '../component/main.js'
// import pageA from '../component/pagaA.js'

//Routerのパス設定
const routes = [
  {
    path: '/',
    component: prefix_main
  },
  // {
  //   path: '/A',
  //   component: pageA
  // },
]

//Routerのインスタンス
export default new VueRouter({
  routes // `routes: routes` の短縮表記
})