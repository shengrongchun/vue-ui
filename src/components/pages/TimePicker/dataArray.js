export default {
    data:[{
    name: 'placeholder',
    type: 'String',
    default: null,
    desc: '设置placeholder属性设置提示信息'
  },{
    name: 'size',
    type: 'String,Number',
    default: 'md',
    desc: '设置选择框的大小，详见`sc-input`组件'
  },{
    name: 'disabled',
    type: 'Boolean',
    default: false,
    desc: '禁用组件'
  },{
    name: 'showTime',
    type: 'Boolean',
    default: false,
    desc: '直接设置是否一开始就显示时间选择界面'
  },{
    name: 'outsideClickNone',
    type: 'Boolean',
    default: false,
    desc: '点击组件之外是否消失时间选择界面'
  },{
    name: 'change',
    type: '事件',
    default: null,
    desc: 'v-model发生变化的回调函数'
  },{
    name: 'v-model',
    type: null,
    default: null,
    desc: 'v-model是指定选中的时间值，此值只支持(12/12/12或者23:23:23或者部分)格式'
  },{
    name: 'showFormat',
    type: 'String',
    default: 'HH,MM,SS',
    desc: '此属性指定时间选择界面以时(HH)、分(MM)、秒(SS)任何排序显示，此值不分大小写。如(H,M,ss、h,s、s,MM等)格式'
  }]
}