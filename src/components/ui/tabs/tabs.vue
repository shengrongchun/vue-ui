<template>
    <div :class="[type,'sc-tabs']">
        <ul>
            <li
                :class="[{'is-active': value == tab.name,
                            'is-disabled':tab.disabled}]"
                v-for="(tab, index) in tabList"
                :key="index"
                @click="select(index)">
                {{tab.title}}
            </li>
        </ul>
        <div class="sc-tabs-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'scTabs',
    data() {
        return {
            tabList: [],
        }
    },
    props: {
        value: {},
        type: {}
    },
    methods: {
        select(index) {
            if(this.tabList[index].disabled) {return}
            this.$emit('input',this.tabList[index].name)
            this.$emit('tabClick',this.tabList[index])
        },
      
    }
  }
</script>