import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Admin from '@/components/Admin'
import About from '@/components/about/About.vue'
import Login from '@/components/Login'
import Register from '@/components/Register'

//二级路由
import History from '@/components/about/History'
import OrderGuide from '@/components/about/OrderGuide'
import Delivery from '@/components/about/Delivery'
import Contact from '@/components/about/Contact'

//三级路由
import Person from '@/components/about/contact/Person'
import Phone from '@/components/about/contact/Phone'

export const routes = [
	{
		path:'/',
		name: 'homeLink',
		component: Home
	},
	{
		path:'/menu',
		name: 'menuLink',
		component: Menu
	},
	{
		path:'/admin',
		name: 'adminLink',
		component: Admin
	},
	{
		path:'/about',
		name: 'aboutLink',
		redirect: '/about/contact',
		component: About,
		children:[
			{
				path:'/about/history',
				name:'historyLink',
				component:History
			},
			{
				path:'/about/orderguide',
				name:'orderguideLink',
				component:OrderGuide
			},
			{
				path:'/about/delivery',
				name:'deliveryLink',
				component:Delivery
			},
			{
				path:'/about/contact',
				name:'contactLink',
				redirect:'/about/contact/person',
				component:Contact,
				children:[
					{
						path:'/about/contact/phone',
						name:'phoneNumber',
						component:Phone
					},
					{
						path:'/about/contact/person',
						name:'personName',
						component:Person
					}
				]
			}
		]
	},
	{
		path:'/login',
		name: 'loginLink',
		component: Login
	},
	{
		path:'/register',
		name: 'registerLink',
		component: Register
	},
	{
		path:'*',
		redirect:'/'
	}
]