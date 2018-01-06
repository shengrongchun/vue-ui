<template>
    <div :class="[type == 'textarea' ? 'sc-textarea' : 'sc-input',
                    size ? 'sc-size-'+size : '',
                    {'is-disabled': disabled,
                    'sc-input-group-after': $slots.after,
                    'sc-input-group-before': $slots.before,
                    'sc-input-group': $slots.before || $slots.after}]">
        <span v-if="type == 'textarea'">
            <textarea class="sc-textarea_inner" :placeholder="placeholder" v-model="model" 
                :disabled="disabled"
                :required="required"
                :style="styleObj" 
                >
            </textarea>
        </span>


        <template v-else>
            <span v-if="$slots.before" class="sc-input-group_before">
                <span><slot name="before"></slot></span>
            </span>
            <div class="sc-input-single">
                <input class="sc-input_inner" :placeholder="placeholder" v-model="model" :disabled="disabled" :type="type" :readonly="readonly" @focus="onfocus" @blur="onblur" :required="required"/>
                <sc-icon v-if="icon" :value="icon" class="icon" @click="search"></sc-icon>
            </div>
            <span v-if="$slots.after" class="sc-input-group_after">
                <span><slot name="after"></slot></span>
            </span>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'scInput',
        props: {
            placeholder: String,
            disabled: Boolean,
            required: Boolean,
            readonly: Boolean,
            autoSize: Boolean,
            value: {},
            size: String,
            icon: String,
            height: String,
            width: String,
            type: {
                type: String,
                default: 'input'
            }
        },
        methods: {
            search() {
                if(this.disabled) {return}
                this.$emit('iconClick',this.model);
            },
            onfocus() {
                if(this.disabled) {return}
                this.$emit('onfocus',this.model);
            },
            onblur() {
                if(this.disabled) {return}
                this.$emit('onblur',this.model);
            }
        },
        computed: {
            model: {
                get() {
                    return this.value;
                },
                set(val) {
                    this.$emit('input',val);
                }
            },
            styleObj() {
                return {
                    resize: this.autoSize?'both':'none',
                    height: this.height?this.height:null,
                    width: this.width?this.width:null
                }
            }
        }
    }
</script>