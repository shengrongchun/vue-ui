<template>
    <div v-clickoutside="OutSideClick" class="sc-select">
        <sc-input :value="inputValue" readonly :placeholder="placeholder" :disabled="disabled"    :size="size"

            @onfocus="InputFocusClick" 
            :icon="iconModel" 
            @iconClick="IconClick"

            ></sc-input>



        <auto-options v-model="itemModel" :dataLoading="loading" :items="dataTemp" :show="showOptions" :position="position" :size="size">
        </auto-options>
    </div>
</template>

<script>
import clickoutside from '../utils/clickoutside'
import autoOptions from '../autoComplete/autooptions'
    export default {
        name: 'scSelect',
        data() {
            return {
                showOptions: false,
                loading: false,
                iconModel: ':fa fa-caret-up',
                tempModel: null,
                dataTemp: []
            }
        },
        props: {
            placeholder: String,
            size: String,
            iconClear: Boolean,
            customItem: String,
            disabled: Boolean,
            outputValue: Boolean,
            dataLoading: Boolean,
            value: [Object,String,Boolean],
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
            inputValue() {
                return this.store()
            },
            itemModel: {
                get() {
                    return null
                },
                set(val) {
                    this.showOptions = false
                    this.iconModel = ':fa fa-caret-up'
                    this.$emit('input',this.outputValue?val.value:val)
                    //
                    if(this.iconClear) {
                        this.iconModel = ":fa fa-window-close"
                    }
                    this.tempModel = val
                }
            }
        },
        methods: {
            store() {
                if(typeof this.tempModel == 'string') {
                    return this.tempModel
                }else if(typeof this.tempModel == 'object') {
                    return this.tempModel?this.tempModel[this.keyName]:null; 
                }
                return null;
            },
            InputFocusClick(val) {
                this.showOptions = true;
                this.iconModel = ':fa fa-caret-down'
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
                if(this.tempModel&&this.iconClear) {
                    this.iconModel = ':fa fa-window-close'
                }else {
                   this.iconModel = ':fa fa-caret-up' 
                }
                
            },
            IconClick() {
                if(this.iconModel != ':fa fa-window-close') {return;}
                this.tempModel = null;
                this.iconModel = ':fa fa-caret-up'
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
            //
            if(this.dataLoading) {
                if (typeof this.getData !== "function") {
                    console.error('传入的getData必须是个函数格式');
                }
            }else {
                if (Array.isArray(this.data)) {
                    this.dataTemp = this.data;
                } else {
                    console.error('传入的data必须是个数组格式');
                }
            }
        }
    }
</script>