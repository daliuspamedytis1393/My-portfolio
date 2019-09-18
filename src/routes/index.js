
import Projects from '@/views/Projects.vue'
import Skills from '@/views/Skills.vue'
import Contacts from '@/views/Contacts.vue'
import Home from '@/views/Home.vue'

export default [
	{
		name: 'Home',
		path: '/',
		component: Home,
		meta: {
			displayName: 'Home',
			displayPageTitle: ' '
		}
	},
	{
		name: 'Skills',
		path: '/skills',
		component: Skills,
		meta: {
			displayName: 'Skills',
			displayPageTitle: ''
		}
	},
	{
		name: 'Projects',
		path: '/projects',
		component: Projects,
		meta: {
			displayName: 'Projects',
			displayPageTitle: ''
		}
	},
	{
		name: 'Contacts',
		path: '/contacts',
		component: Contacts,
		meta: {
			displayName: 'Contacts',
			displayPageTitle: ''
		}
	}
]
