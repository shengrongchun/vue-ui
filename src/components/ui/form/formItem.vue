<template>
    <div :class="['sc-form-item',{'is-inline':$parent.inline}]">
        <label :class="['form-title',$parent.labelPosition]"
                :style="styleTitle"

            ><span class="form-required-icon">{{required?'*':'&nbsp;'}}</span>{{label}}</label>
        <div :class="['form-content']"
            :style="styleContent" 

            ><slot/>
            <div :class="['form-error-tip',{'is-show':show}]">{{showMessage}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "scFormItem",
        componentName: 'scFormItem',
        data() {
            return {
                show: false,
                required: false,
                showMessage: null
            }
        },
        props: {
            label: {
                type: String,
                default: null
            },
        },
        computed: {
            styleTitle() {
                return {width: this.inline&&!this.label?0:(this.$parent.labelWidth?this.$parent.labelWidth:'86px')}
            },
            styleContent() {
                return {'margin-left': this.$parent.labelPosition=='top'?0:(this.$parent.labelWidth?this.$parent.labelWidth:'86px')}
            },
        }
    }
</script>