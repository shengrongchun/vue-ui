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
    name: 'languageForEn',
    type: 'Boolean',
    default: false,
    desc: '是否英文显示，默认是中文'
  },{
    name: 'outsideClickNone',
    type: 'Boolean',
    default: false,
    desc: '点击组件之外是否消失时间选择界面'
  },{
    name: 'change',
    type: '事件',
    default: null,
    desc: 'time发生变化的回调函数'
  },{
    name: 'date',
    type: 'Object',
    default: null,
    desc: 'date.time是初始值，此值只支持(2017/12/12或者2017:12:12)格式'
  },{
    name: 'width',
    type: 'String',
    default: '380px',
    desc: '此值可以设置日期界面的宽度，格式为(100%或者100px)'
  },{
    name: 'option',
    type: 'Object',
    default:`{ 
                format: 'YYYY-MM-DD',
                SundayFirst: true,
                limit: []
            }`,
    desc: 'format是设置日期的显示格式(YYYY-MM-DD或者YYYY/MM/DD)，SundayFirst是否周日排在最前面，limit数组是设置哪些天或者周几不能选。如：limit[{type:weekday,available:[1,3,5]},{type: fromto,from:2017/12/10,to:2017/12/30}]。只有周1,3,5有效并且from:2017/12/10,to:2017/12/30才有效'
  }]
}