<template>
    <td class="sc-table-column" @click="restore">
        <slot/>
        <div v-if="sortable" class="sc-table-sort">
            <sc-icon @click.prevent.stop="sortUp" value=":fa fa-caret-left" :class="['sort-icon-up',{'is-active': iconActive=='up'}]"/>
            <sc-icon @click.prevent.stop="sortDown" value=":fa fa-caret-right" :class="['sort-icon-down',{'is-active': iconActive=='down'}]"/>
        </div>
        <sc-dropdown v-if="filter" @itemClick="filterMethod">
            <sc-button type="plain" size="mi" icon=":fa fa-angle-down" :icon-right="true">筛选</sc-button>
            <sc-dropdowm-menu slot="dropdown">
                <sc-dropdowm-item divided v-for="(value,index) in $parent.data" :key="index" :value="value[label]">{{value[label]}}</sc-dropdowm-item>
            </sc-dropdowm-menu>
        </sc-dropdown>
    </td>
</template>

<script>
    export default {
        name: 'scTableColumn',
        data() {
            return {
                iconActive: null
            }
        },
        props: {
            compile: {
                type: Boolean,
                default: false
            },
            slotName: {
                type: String,
                default: null
            },
            sortable: {
                type: Boolean,
                default: false
            },
            filter: {
                type: Boolean,
                default: false
            },
            label: {
                type: String,
                default: null
            },
        },
        methods: {
            sortUp() {
                if(this.iconActive == 'up') {return}
                this.iconActive = 'up'
                if(!this.label) {
                    console.error('表头项未定义label')
                    return
                }
                this.$parent.upSort(this.label)
            },
            sortDown() {
                if(this.iconActive == 'down') {return}
                this.iconActive = 'down'
                if(!this.label) {
                    console.error('表头项未定义label')
                    return
                }
                this.$parent.downSort(this.label)
            },
            restore() {
                if(!this.label) {return}
                if(this.sortable || this.filter) {
                    this.$parent.restore(this.label)
                    this.iconActive = null
                } 
            },
            filterMethod(item) {
                if(!this.label) {return}
                this.$parent.filter(item,this.label)
            }
        },
        mounted() {
            if(this.compile) {
                this.$parent.compileList.push(this)
            } 
        }

    }
</script>