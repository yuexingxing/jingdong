import {
	createRouter,
	createWebHashHistory
} from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'
import Register from '../views/register/Register.vue'

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		// beforeEnter(to, from, next) {
		// 	console.log("router-beforeEnter", to, from);
		// 	const {
		// 		isLogin
		// 	} = localStorage;
		// 	(isLogin) ? next({
		// 		name: "Home"
		// 	}): next();
		// }
	},
	{
		path: '/register',
		name: 'Register',
		component: Register
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

router.beforeEach((to, from, next) => {
	console.log("router-beforeEach", to, from);
	next();
	// const {
	// 	isLogin
	// } = localStorage;

	// isLogin = false;
	// console.log("router-isLogin", isLogin);
	// const {
	// 	name
	// } = to;
	// const {
	// 	isLoginOrRegister
	// } = (name === "Login" || name === "Register");
	// (isLogin || isLoginOrRegister) ? next(): next({
	// 	name: "Login"
	// })
});

export default router
