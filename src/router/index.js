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
		beforeEnter(to, from, next) {
			console.log("router-beforeEnter", to, from);
			var isLogin = localStorage.getItem("isLogin")
			if (isLogin) {
				next({
					name: 'Home'
				});
			} else {
				next();
			}
		}
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
	console.log("router-beforeEach", to, from)
	var isLogin = localStorage.getItem("isLogin")
	if (isLogin || to.name === "Login" || to.name == "Register") {
		next();
	} else {
		next({
			name: 'Login'
		});
	}
});

export default router
