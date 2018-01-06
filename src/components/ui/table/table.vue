<template>
    <div :class="['sc-table'
                    ,{'is-border':border}
                    ,{'is-small':small}]"
                    >
        <table>
            <thead :class="{'showScroll':classObj}">
                <tr>
                    <slot/>
                </tr>
            </thead>
            <tbody :style="styleObj" ref="tbody">
                <tr :key="index" v-for="(body,index) in setData"
                    :class="[{'is-stripe':stripe}]">
                    <td  :key="index" 
                        v-for="(value,key,index) in body"
                        >
                        {{value}}
                    </td>
                    <td v-if="compileList.length>0" v-for="(item,index) in compileList" :key="index">
                        <slot :name="compileList[index].slotName" :data="body"/>
                    </td>
                    
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: 'scTable',
        data() {
            return {
                copyData: [],
                compileList: [],
                bodyHeight: null,
                keyValue: null,
                sortKeyUp: false,
                filterKey: null
            }
        },
        props: {
            data: {
                type: Array,
                default: []
            },
            stripe: {
                type: Boolean,
                default: false
            },
            border: {
                type: Boolean,
                default: false
            },
            small: {
                type: Boolean,
                default: false
            },
            height: {}
        },
        computed: {
            setData() {
                if(this.keyValue&&!this.filterKey) {
                   return this.copyData.sort(this.sortMain)
                }else if(this.keyValue&&this.filterKey) {
                    return this.copyData.filter(this.filterMain)
                }
                return this.data
            },
            styleObj() {
                if(this.height) {
                    return {'height': this.height}
                }
                return null
            },
            classObj() {
                if(this.height && parseFloat(this.height)<this.bodyHeight) {
                    return true
                }
                return false
            }
        },
        methods: {
            sortMain(x,y) {
                if(this.sortKeyUp) {
                    return (x[this.keyValue]>y[this.keyValue]?1:-1)
                }
                return (x[this.keyValue]<y[this.keyValue]?1:-1)
            },
            filterMain(item) {
                return item[this.keyValue] == this.filterKey
            },
            upSort(key) {
                this.keyValue = key
                this.sortKeyUp = true
            },
            downSort(key) {
                this.keyValue = key
                this.sortKeyUp = false
            },
            restore(key) {
                this.keyValue = null
                this.filterKey = null
            },
            filter(filterKey,key) {
                this.filterKey = filterKey
                this.keyValue = key
            }

        },
        mounted() {
            if(this.data) {
                this.copyData = Object.assign([],this.data)
            }
        },
        updated() {
            this.bodyHeight = this.$refs.tbody.scrollHeight
        }

    }
</script>