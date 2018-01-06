<template>
    <div class="ac-autooptions" :class="['option-'+position,size ? 'sc-size-'+size : '',show ? '' : 'sc-height-none']">
        <ul v-if="dataLoading" class="loading">
            <sc-icon :size="20" value=":fa fa-circle-o-notch fa-spin fa-3x fa-fw"></sc-icon>
        </ul>
        <ul v-else>
            <template v-if="modelFilter.length > 0" v-for="(item, index) in modelFilter">
                <li v-if="!parent.customItem" :key="index" @click="select(item)">
                    {{item[$parent.keyName]}}
                </li>
                <component v-else :is="parent.customItem" :item="item" :key="index" @click="select(item)">
                </component>
            </template>
            <li v-if="modelFilter.length == 0" class="no-pointer">
                未查询到相关数据！！！
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'scAutoOtions',
        data() {
            return {
                parent: this.$parent
            }
        },
        props: {
            size: String,
            value: String,
            items: Array,
            dataLoading: Boolean,
            show: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'bottom'
            }
        },
        computed: {
            modelFilter() {
                if(!this.value) {
                    return this.items;
                }else {
                    var copyItmes = [];
                    this.items.forEach((item)=> {
                        if(item.key.indexOf(this.value) > -1) {
                            copyItmes.push(item);
                        }
                    });
                    return copyItmes;
                }    
            }
        },
        methods: {
            select(item) {
                this.$emit('input',item);
            }
        }
    }
</script>
