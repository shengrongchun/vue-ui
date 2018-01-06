<template>
    <div v-clickoutside="OutSideClick" class="sc-autocomplete">
        <sc-input v-model="model" @onfocus="InputFocusClick" :placeholder="placeholder" :disabled="disabled" :size="size" :icon="iconModel" @iconClick="IconClick"></sc-input>
        <auto-options v-model="model" :dataLoading="loading" :items="dataTemp" :show="showOptions" :position="position" :size="size">
        </auto-options>
    </div>
</template>

<script>
import clickoutside from '../utils/clickoutside'
import autoOptions from './autooptions'
    export default {
        name: 'scAutoComplete',
        data() {
            return {
                showOptions: false,
                loading: false,
                iconModel: null,
                tempModel: null,
                dataTemp: []
            }
        },
        props: {
            placeholder: String,
            size: String,
            iconClear: Boolean,
            icon: String,
            customItem: String,
            disabled: Boolean,
            dataLoading: Boolean,
            value: [Object,String],
            data: Array,
            getData: Function,
            keyName: {
                type: String,
                default: 'key'
            },
            position: {
                type: String,
                default: 'bottom'
            }
        },
        computed: {
            model: {
                get() {
                    return this.store()
                },
                set(val) {
                    this.iconModel = this.icon?this.icon:null
                    if(typeof val == 'object') {//点击条目传来的值
                        this.showOptions = false
                        this.$emit('input',val)
                        //
                        if(this.iconClear) {
                            this.iconModel = ":fa fa-window-close"
                        }
                    }
                    this.tempModel = val
                }
            }
        },
        methods: {
            store() {
                if(typeof this.tempModel == 'string') {
                    return this.tempModel;
                }else if(typeof this.tempModel == 'object') {
                    return this.tempModel?this.tempModel[this.keyName]:null; 
                }
                return null;
            },
            InputFocusClick(val) {
                this.showOptions = true;
                if(this.dataLoading&&this.dataTemp.length==0) {
                    this.loading = true;   
                    this.getData(this.dataTemp,(data)=> {
                        this.loading = false;
                        this.dataTemp = data?data:[];
                    });
                }
            },
            OutSideClick() {
                this.showOptions = false;
            },
            IconClick() {
                if(this.iconModel == this.icon) {return;}
                this.tempModel = null;
                this.iconModel = this.icon?this.icon:null;
                this.$emit('input',null);
            }
        },
        components: {
            autoOptions
        },
        directives: {
            clickoutside
        },
        created() {
            this.tempModel = this.value;
            //图标
            if(this.icon) {
                this.iconModel = this.icon;
            }
            //
            if(this.dataLoading) {
                if (typeof this.getData !== "function") {
                    console.error('autocomplete 传入的getData必须是个函数格式');
                }
            }else {
                if (Array.isArray(this.data)) {
                    this.dataTemp = this.data;
                } else {
                    console.error('autocomplete 传入的data必须是个数组格式');
                }
            }
        }
    }
</script>