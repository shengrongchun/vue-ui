export default {
    data:[{
    name: 'v-model',
    type: 'String',
    default: null,
    desc: '指定第几页'
  },{
    name: 'total',
    type: 'Number',
    default: null,
    desc: '总计多少项'
  },{
    name: 'perNum',
    type: 'Number',
    default: '10',
    desc: '每页多少项'
  },{
    name: 'totalPage',
    type: 'Boolean',
    default: false,
    desc: '增加总计多少条选项'
  },{
    name: 'goPage',
    type: 'Boolean',
    default: false,
    desc: '增加前往多少页选项'
  }]
}