// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueUi from 'vue-ui'
import router from './router'
import App from './App'
import FastClick from 'fastclick'
import VueResource from 'vue-resource'

/*引入fontawesome字体*/
import './assets/font-awesome/css/font-awesome.min.css'


/*demo 组件*/
import markDown from './components/pageComponents/markDown'
import codeExample from './components/pageComponents/codeExample'
import codeTable from './components/pageComponents/codeTable'

/*animate.css 动画引入*/
import './assets/styles/animate.css'

const components = {
    markDown,
    codeExample,
    codeTable
}

Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
})

Vue.config.productionTip = false
Vue.use(VueUi)
Vue.use(VueResource)

/*fastclick,消除点击延时提高程序的运行效率*/
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
