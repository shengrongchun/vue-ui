import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/pages/Index'

import Layout from '@/components/pages/Layout'
import Icon from '@/components/pages/Icon'
import Button from '@/components/pages/Button'
import Radio from '@/components/pages/Radio'
import CheckBox from '@/components/pages/CheckBox'
import Input from '@/components/pages/Input'
import Select from '@/components/pages/Select'
import AutoComplete from '@/components/pages/AutoComplete'
import Tooltip from '@/components/pages/Tooltip'
import Switch from '@/components/pages/Switch'
import Slider from '@/components/pages/Slider'
import Upload from '@/components/pages/Upload'
import Rate from '@/components/pages/Rate'
import Transfer from '@/components/pages/Transfer'
import Modal from '@/components/pages/Modal'
import Alert from '@/components/pages/Alert'
import Notification from '@/components/pages/Notification'
import Loading from '@/components/pages/Loading'
import Breadcrumb from '@/components/pages/Breadcrumb'
import Steps from '@/components/pages/Steps'
import Tabs from '@/components/pages/Tabs'
import Collapse from '@/components/pages/Collapse'
import Carousel from '@/components/pages/Carousel'
import Navigation from '@/components/pages/Navigation'
import Badge from '@/components/pages/Badge'
import Progress from '@/components/pages/Progress'
import Pagination from '@/components/pages/Pagination'
import Dropdown from '@/components/pages/Dropdown'
import Table from '@/components/pages/Table'
import Form from '@/components/pages/Form'
import TimePicker from '@/components/pages/TimePicker'
import DatePicker from '@/components/pages/DatePicker'
  
Vue.use(Router)
  
export default new Router({    
    mode: 'history',
    base: __dirname,   
    routes: [
        {
            path: '*', 
            redirect: '/index'  
        },
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/layout',
          name: 'layout',
          component: Layout
        },
        {
          path: '/icon',
          name: 'icon',
          component: Icon
        },
        {
          path: '/button',
          name: 'button',
          component: Button 
        },
        {
          path: '/radio',
          name: 'radio',
          component: Radio
        },
        {
          path: '/checkbox',
          name: 'checkbox',
          component: CheckBox
        },
        {  
          path: '/input',
          name: 'input',
          component: Input
        },
        {
          path: '/select',
          name: 'select',
          component: Select
        },
        {
          path: '/autocomplete',
          name: 'autocomplete',
          component: AutoComplete
        },
        {
          path: '/tooltip',
          name: 'tooltip',
          component: Tooltip
        },
        {
          path: '/switch',
          name: 'switch',
          component: Switch
        },
        {
          path: '/slider',
          name: 'slider',
          component: Slider
        },
        {
          path: '/upload',
          name: 'upload',
          component: Upload
        },
        {
          path: '/rate',
          name: 'rate',
          component: Rate
        },
        {
          path: '/transfer',
          name: 'transfer',
          component: Transfer
        },
        {
          path: '/modal',
          name: 'modal',
          component: Modal
        },
        {
          path: '/alert',
          name: 'alert',
          component: Alert
        },
        {
          path: '/notification',
          name: 'notification',
          component: Notification
        },
        {
          path: '/loading',
          name: 'loading',
          component: Loading
        },
        {
          path: '/breadcrumb',
          name: 'breadcrumb',
          component: Breadcrumb
        },
        {
          path: '/steps',
          name: 'steps',
          component: Steps
        },
        {  
          path: '/tabs',
          name: 'tabs',
          component: Tabs
        },
        {
          path: '/collapse',
          name: 'collapse',
          component: Collapse
        },
        {
          path: '/carousel',
          name: 'carousel',
          component: Carousel
        },
        {
          path: '/navigation',
          name: 'navigation',
          component: Navigation
        },
        {   
          path: '/badge',
          name: 'badge',
          component: Badge
        }, 
        {  
          path: '/progress',
          name: 'progress',
          component: Progress
        }, 
        {  
          path: '/pagination',
          name: 'pagination',
          component: Pagination
        }, 
        {  
          path: '/dropdown',
          name: 'dropdown',
          component: Dropdown
        }, 
        {  
          path: '/table', 
          name: 'table',
          component: Table
        }, 
        {  
          path: '/form', 
          name: 'form',
          component: Form
        }, 
        {  
          path: '/timePicker', 
          name: 'timePicker',
          component: TimePicker
        }, 
        {  
          path: '/datePicker', 
          name: 'datePicker',
          component: DatePicker
        }
    ]
})
