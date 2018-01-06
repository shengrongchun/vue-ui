import './styles/base.scss'

import {retina} from './utils'
import icon from './icon'
import row from './row'
import col from './col'
import {button,buttonGroup} from './button'
import {radio,radioGroup,radioButton} from './radio'
import {checkbox,checkboxAll,checkboxGroup} from './checkbox'
import input from './input'
import autoComplete from './autoComplete'
import select from './select'  
import tooltip from './tooltip'
import switchs from './switchs'    
import slider from './slider'
import upload from './upload'
import rate from './rate' 
import transfer from './transfer'   
import modal from './modal'
import alert from './alert'
import notification from './notification'
import loading from './loading' 
import {breadcrumb,breadcrumbItem} from './breadcrumb'
import {steps,step} from './steps'
import {tabs,tab} from './tabs' 
import {collapseGroup,collapse} from './collapse' 
import {carouselGroup,carousel} from './carousel'
import {menu,menuItem,menuItemGroup} from './navigation'
import badge from './badge'
import progress from './progress'  
import pagination from './pagination'      
import {dropdownItem,dropdown,dropdownMenu} from './dropdown'  
import {table,tableColumn} from './table'
import {form,formItem,validate} from './form' 
import timePicker from './timePicker' 
import datePicker from './datePicker'         
  
const components = {               
    icon,  
    row,         
    col,
    button,
    buttonGroup,
    radio,
    radioGroup,
    radioButton,
    checkbox,
    checkboxAll,
    checkboxGroup,
    input,
    select,
    autoComplete,
    tooltip,
    switchs,
    slider,    
    upload,                    
    rate,
    transfer,
    breadcrumb,  
    breadcrumbItem,
    steps,
    step,
    tabs,
    tab,
    collapseGroup,
    collapse,
    carouselGroup,
    carousel,
    menu,
    menuItem,
    menuItemGroup,
    badge,
    pagination,     
    dropdown,
    dropdownItem,
    dropdownMenu,
    table,
    tableColumn,
    form,
    formItem,
    timePicker,
    datePicker,    
}
const derectives = {  
  tooltip,
  validate
}
const objects = {      
    modal,  
    alert,  
    notification,  
    loading,
    progress     
}

const install = function (Vue) {
  Object.keys(components).forEach((key) => {  
    Vue.component(components[key].name, components[key])
  })    
  //       
  Object.keys(derectives).forEach((key) => {
    Vue.directive(derectives[key].name, derectives[key])
  })              
  //                        
  Object.keys(objects).forEach((key) => {
    objects[key](Vue)   
  })
  //               
  retina()   
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)
export default {
  install
}
export {
  install
}
