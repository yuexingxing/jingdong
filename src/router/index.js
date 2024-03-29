import {
	createRouter,
	createWebHashHistory
} from 'vue-router'
import HomePage from '../views/homepage/HomePage.vue'
import Login from '../views/login/Login.vue'
import Register from '../views/register/Register.vue'
import AnchorFragment from '../views/homepage/AnchorFragment.vue'
import Main from '../views/main/Main.vue'
import Video from '../views/video/Video.vue'
import Person from '../views/person/Person.vue'
import Upload from '../views/upload/Upload.vue'

const routes = [{
		path: '/',
		name: 'HomePage',
		component: HomePage
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
	},
	{
		path: '/homepage',
		name: 'AnchorFragment',
		component: AnchorFragment
	},
	{
		path: '/main',
		name: 'Main',
		component: Main
	},
	{
		path: '/video',
		name: 'Video',
		component: Video
	},
	{
		path: '/person',
		name: 'Person',
		component: Person
	},
	{
		path: '/upload',
		name: 'Upload',
		component: Upload
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
