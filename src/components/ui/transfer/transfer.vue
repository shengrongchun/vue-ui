<template>
    <div class="sc-transfer">
        <div class="transfer-panel">
            <header class="transfer-header">
                {{title1}}
            </header>
            <sc-input v-model="searchLeft" class="transfer-input" v-if="search" placeholder="请输入文字筛选" size="sm" />
            <div :class="['transfer-content',{'is-search':search}]">
                <p v-if="leftData.length ==0">无数据</p>
                <sc-checkbox-group v-else v-model="leftSelectData" vertical class="transfer-check-group">
                    <sc-checkbox v-for="(item,index) in leftData" :key="index" class="transfer-check" :label="item" :disabled="item.disabled">
                        {{item.label}}
                    </sc-checkbox>
                </sc-checkbox-group>
            </div>
            <header class="transfer-header transfer-bottom">
                <sc-checkbox-all :disabled="leftCheckDisabled" v-model="leftSelectData"></sc-checkbox-all>共 {{leftData.length}} 项
            </header>
        </div>
        <div class="transfer-btn">
            <sc-button type="default" size="sm" :disabled="rightSelectData.length ==0"
                @click="leftClick">
                <sc-icon value="angle-left" size="25"/>
            </sc-button>
            <sc-button type="default" size="sm" :disabled="leftSelectData.length ==0"
                @click="rightClick">
                <sc-icon value="angle-right" size="25"/>
            </sc-button>
        </div>
        <div class="transfer-panel">
            <header class="transfer-header">
                {{title2}}
            </header>
            <sc-input class="transfer-input" v-if="search" placeholder="请输入文字筛选" size="sm"/>
            <div :class="['transfer-content',{'is-search':search}]">
                <p v-if="rightData.length ==0">无数据</p>
                <sc-checkbox-group v-else v-model="rightSelectData" vertical class="transfer-check-group">
                    <sc-checkbox v-for="(item,index) in rightData" :key="index" class="transfer-check" :label="item" :disabled="item.disabled">
                        {{item.label}}
                    </sc-checkbox>
                </sc-checkbox-group>
            </div>
            <header class="transfer-header transfer-bottom">
                <sc-checkbox-all :disabled="rightCheckDisabled" v-model="rightSelectData"></sc-checkbox-all>共 {{rightData.length}} 项
            </header>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'scTransfer',
        data() {
            return {
                copyData: [],
                leftData: [],
                leftSelectData: [],
                rightSelectData: [],
                rightData: [],
                rightCheckDisabled: false,
                leftCheckDisabled: false,
                searchLeft: null,
            }
        },
        props: {
            value: Array,
            data: Array,
            title1: {
                type: String,
                default: '列表一'
            },
            title2: {
                type: String,
                default: '列表二'
            },
            search: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            rightData(newValue) {
                this.$emit('input',newValue)
                for(let i in newValue) {
                    if(!newValue[i].disabled) {
                        this.rightCheckDisabled = false
                        return
                    }
                }
                //
                this.rightCheckDisabled = true
            },
            leftData(newValue) {
               for(let i in newValue) {
                    if(!newValue[i].disabled) {
                        this.leftCheckDisabled = false
                        return
                    }
                }
                //
                this.leftCheckDisabled = true 
            },
            searchLeft(newValue) {
                
                this.leftData = this.leftData.filter((value)=> {
                    if(value.label.indexOf(newValue)>-1) {
                        return true
                    }
                    return false
                })
               
            }
        },
        methods: {
            leftClick() {
                for(let i in this.rightSelectData) {
                    this.rightData.splice( this.rightData.indexOf(this.rightSelectData[i]),1 )
                    this.leftData.push( this.rightSelectData[i] )
                    // this.leftData.sort( (a,b)=> {
                    //     if(a.key>b.key) {
                    //         return 1
                    //     }else if(a.key<b.key) {
                    //         return -1
                    //     }
                    //     return 0
                    // })
                }
                this.rightSelectData = []
            },
            rightClick() {
                for(let i in this.leftSelectData) {
                    this.leftData.splice( this.leftData.indexOf(this.leftSelectData[i]),1 )
                    this.rightData.push( this.leftSelectData[i] )
                    // this.rightData.sort( (a,b)=> {
                    //     if(a.key>b.key) {
                    //         return 1
                    //     }else if(a.key<b.key) {
                    //         return -1
                    //     }
                    //     return 0
                    // })
                }
                this.leftSelectData = []
            },
            getAndDel(item,data) {
                for(let i in data) {
                    if(item.key == data[i].key&&item.label == data[i].label&&item.disabled == data[i].disabled) {
                        data.splice(data.indexOf( data[i] ),1)
                        return true
                    }
                }
                //
                return false
            }
        },
        mounted() {
            if(this.data&&Array.isArray(this.data)) {
                this.leftData = this.data
                this.copyData = this.data.slice(0)
            }
            //
            if(this.value.length>0) {
                for(let i in this.value) {
                    if( this.getAndDel(this.value[i],this.leftData) ) {
                        this.rightData.push(this.value[i])
                    }else {
                        //
                        if(typeof this.value[i] == 'number' && this.value[i]>0) {
                            this.rightData.push( this.copyData[this.value[i]-1] )
                            this.leftData.splice(this.leftData.indexOf( this.copyData[this.value[i]-1] ),1)
                        }
                    }
                }
            }
            //

        }
    }
</script>