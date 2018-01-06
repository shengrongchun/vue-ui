export default {
    data:[{
    name: 'dark',
    type: 'String',
    default: null,
    desc: '加入dark修饰符会呈现黑色主题'
  },{
    name: 'click',
    type: 'String',
    default: null,
    desc: '点击触发'
  },{
    name: 'outsideClick',
    type: 'String',
    default: null,
    desc: '点击元素之外触发消失'
  },{
    name: 'data',
    type: 'String,Object',
    default: false,
    desc: 'data是指令的表达式部分，如果是字符类型就直接显示此字符。如果是对象，可以设置title、content、arrowWidth、space、customComponent具体可以查看代码部分'
  }]
}