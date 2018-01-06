<template>
    <button @click.stop="handelClick" :disabled="disabled" :type="nativeType" class="sc-button"
        :class="[type?'sc-button-'+type:'',
                size?'sc-button-'+size:'',{
                'is-disabled': disabled
            }]">
        <sc-icon @click="handleInnerClick" v-if="icon&&!iconRight" :value="icon" :size="iconSize"></sc-icon>
        <span @click="handleInnerClick" v-if="$slots.default"><slot></slot></span>
        <sc-icon @click="handleInnerClick" v-if="icon&&iconRight" :value="icon" :size="iconSize"></sc-icon>
    </button>
</template>

<script>
    export default {
        name: 'scButton',
        props: {
            type: String,
            disabled: Boolean,
            icon: String,
            size: String,
            iconSize: [String,Number],
            iconRight: {
                type: Boolean,
                default: false
            },
            nativeType: {
                type: String,
                default: 'button'
            },
            href: String
        },
        methods: {
            handelClick(ev) {
                if(this.href) {
                    window.location.href = this.href
                    return
                }
                this.$emit('click',ev);
            },
            handleInnerClick(evt) {
                if (this.disabled) {
                    evt.stopPropagation();
                }
            }
        }
    }
</script>