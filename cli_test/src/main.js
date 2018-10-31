// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { routes } from './routes';

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	mode:'history'
})

//全局守卫
// router.beforeEach((to,from,next) =>{
// 	// to 进入到哪个路由里面
// 	// from 从哪个路由离开
// 	// next 是对应的方法
	

// 	if(to.path == '/login' || to.path == '/register') {
// 		next();
// 	} else {
// 		alert("还没有登录，请先登录");
// 		next('/login');
// 	}

// })

//全局后置钩子
// router.afterEach((to,from) =>{

// })
 


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
