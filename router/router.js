// router.js
import {RouterMount,createRouter} from 'uni-simple-router';

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,  
	routes: [...ROUTES]
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
	if (to.meta && to.meta.power === "public") { // 公共页面，不需要登录
		
	} else { // 需要登录的页面
             let isLogin = checkLogin(); // 判断是否登录
		if (isLogin) {
			next();
		} else {
			next({
				name: "login"
			})
		}
	}
});

// 全局路由后置守卫
router.afterEach((to, from) => {
    console.log('跳转结束')
})

export {
	router,
	RouterMount
}
