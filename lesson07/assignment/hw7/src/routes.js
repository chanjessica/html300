import Hello from './components/HelloWorld.vue'
import Home from './components/home.vue'
import HW7 from './components/hw7.vue'
import Contact from './components/contact.vue'
import Menu from './components/menu.vue'
import Blog from './components/blog.vue'

export default [
    // /=home page
    { path:'/hello', component: Hello },
    { path:'/HW7', component: HW7 },
    { path:'/', component: Home },
    { path:'/contact', component: Contact },
    { path:'/menu', component: Menu },
    { path:'/blog', component: Blog}
]