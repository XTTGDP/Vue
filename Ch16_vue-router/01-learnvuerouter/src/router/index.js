// 1.配置路由相关的信息
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

const Home = () => import('../components/Home.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const Profile = () => import('../components/Profile.vue')

// 2.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 3.创建VueRouter对象
const routes = [
  {
    // 设置默认页面
    path: '',
    // redirect重定向:
    redirect: '/Home'
  },
  {
    path: '/Home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/About',
    meta: {
      title: '关于'
    },
    component: About,
    // 跳转路由前
    beforeEach: (to, from, next) => {
      console.log('beforeEach');
    }
  },
  {
    path: '/User/:userId',
    meta: {
      title: '用户'
    },
    component: User
  },
  {
    path: '/Profile',
    meta: {
      title: '档案'
    },
    component: Profile
  }
]

// 4.创建路由对象
const router = new VueRouter({
  // 5.配置路由和组件之间的应用关系
  routes,
  // 设置网页的模式 HTML5的history模式
  mode: 'history',
  linkActiveClass: 'acitve'
})

// 全局守卫
// 前置守卫(guard)
router.beforeEach((to, from, next) => {
  // 从form跳转到to 
  document.title = to.matched[0].meta.title
  // console.log(to);
  // console.log('++++');
  next()
})

// 后置钩子(hook)
router.afterEach((to, from) => {
  // console.log('----');
})



// 6.将router对象导出传入到Vue实例
export default router
