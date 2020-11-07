// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

/* 路由 */
import router from './router'

/*语言 */
import en from './lang/en'
import zh from './lang/zh'

Vue.prototype.en = en;
Vue.prototype.zh = zh;

/*echarts */
import echarts from 'echarts'
Vue.use(echarts)
Vue.prototype.$echarts = echarts

/* axios */
import axios from './api'
import api from './api/api'
Vue.prototype.axios = axios;
Vue.prototype.api = api;
/* swiper */
import 'swiper/dist/css/swiper.min.css';

/* 重置样式 */
import './assets/css/reset.min.css'

/* jquery */
import 'jquery'

/* bootstarp */
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'

/* animate.css */
import 'animate.css'

/*
弹窗
 */
import Toast from './components/toast'
Vue.use(Toast)


/*加密 */
import Secret from './components/secret'
Vue.use(Secret)

/*pdf*/
import htmlToPdf from '@/components/utils/htmlToPdf'
// 使用Vue.use()方法就会调用工具方法中的install方法
Vue.use(htmlToPdf)

/* 头部组件 */
import Header from './components/Header'
Vue.component(Header.name,Header)


/* 尾部组件 */
import Footer from './components/Footer'
Vue.component(Footer.name,Footer)

/* 回到顶部 */
import GoTop from './components/GoTop'
Vue.component(GoTop.name,GoTop)

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
    if(to.meta.title){
        document.title = to.meta.title
    }
    next();
});


new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
