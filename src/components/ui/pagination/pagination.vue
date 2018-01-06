<template>
    <div class="sc-pagination">
        <span v-if="totalPage" class="totalClass">总计 {{total}} 条</span>
        <ul class="sc-page-main clearfix">
            <li :class="{'is-disabled':activePage == 1}" @click="preClick"><sc-icon value=":fa fa-angle-left" size="20"/></li>
            <li v-if="pageNum>0" @click="itemClick(1)" :class="['page',{'is-active':1==activePage}]">1</li>
            <li v-if="morePre" class="more more-pre" @click="morePreClick">
                <sc-icon value=":fa fa-angle-double-left" size="20"/>
            </li>

            <li v-if="i>1 && i<pageNum" @click="itemClick(i)" :class="['page',{'is-active':i==activePage}]" v-for="i in pageArray">{{i}}</li>

            <li v-if="moreNext" class="more more-next" @click="moreNextClick">
                <sc-icon value=":fa fa-angle-double-right" size="20"/>
            </li>
            <li v-if="pageNum>0" @click="itemClick(pageNum)" :class="['page',{'is-active':pageNum==activePage}]">{{pageNum}}</li>
            <li :class="{'is-disabled':activePage == pageNum}" @click="nextClick"><sc-icon value=":fa fa-angle-right" size="20"/></li>
        </ul>
        <span v-if="goPage" class="totalClass">前往<sc-input v-model="pageGo"/>页</span>
    </div>
</template>

<script>
    export default {
        name: 'scPagination',
        data() {
            return {
                activePage: 1,
                moreNext: false,
                morePre: false 
            }
        },
        props: {
            total: {
                type: Number,
                required: true,
                default: 1
            },
            perNum: {
                type: Number,
                required: true,
                default: 1
            },
            goPage: {
                type: Boolean,
                default: false
            },
            totalPage: {
                type: Boolean,
                default: false
            },
            value: Number
        },
        computed: {
            pageGo: {
                set(value) {
                    value = parseInt(value)
                    if(value > this.pageNum) {
                        value = this.pageNum
                    }else if(value < 1 || !value) {
                        value = 1
                    }
                    this.activePage = value
                    console.log(this.activePage)
                },
                get() {
                    return this.activePage
                }
            },
            pageNum() {
                return Math.ceil( this.total/this.perNum )
            },
            pageArray() {
                let array = []
                if(this.pageNum<=7) {
                    this.morePre = false
                    this.moreNext = false
                    return this.pageNum
                }
                //
                if(this.activePage-1>2) {
                    this.morePre = true
                    array = [this.activePage-2,this.activePage-1,this.activePage,this.activePage+1,this.activePage+2]
                }else {
                    this.morePre = false
                    array = [2,3,4,5,6]
                }
                if(this.pageNum-this.activePage>2) {
                    this.moreNext = true
                }else {
                    this.moreNext = false
                    array = [this.pageNum-5,this.pageNum-4,this.pageNum-3,this.pageNum-2,this.pageNum-1]
                }
                
                //
                return array
            }
        },
        methods: {
            itemClick(i) {
                this.activePage = i
            },
            preClick() {
                if(this.activePage == 1) {return}
                //
                this.activePage--
            },
            nextClick() {
                if(this.activePage == this.pageNum) {return}
                //
                this.activePage++
            },
            morePreClick() {
                this.activePage = this.activePage-5<1?1:this.activePage-5
            },
            moreNextClick() {
                this.activePage = this.activePage+5>this.pageNum?this.pageNum:(this.activePage+5)
            }
        },
        watch: {
            activePage(value) {
                this.$emit('input',value)
            }
        },
        mounted() {
            this.activePage = this.value?this.value:1
        }
    }
</script>