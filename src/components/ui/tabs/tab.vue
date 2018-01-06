<template>
    <div v-if="show">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'scTab',
    props: {
        title: {
            type: String,
            required: true
        },
        name: String,
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
        
        }
    },
    created() {
        this.$parent.tabList.push(this);
    },
    computed: {
        show() {
            return this.$parent.value == this.name
        }
    }
  }
</script>