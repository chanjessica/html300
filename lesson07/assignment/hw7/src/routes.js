import Home from './components/home.vue'
import Contact from './components/contact.vue'
import Menu from './components/menu.vue'
import Blog from './components/blog.vue'

export default [
    // /=home page
    { path:'/', component: Home },
    { path:'/contact', component: Contact },
    { path:'/menu', component: Menu },
    { path:'/blog', component: Blog}
]