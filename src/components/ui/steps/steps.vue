<template>
    <div class="sc-steps clearfix">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'scSteps',
        data() {
            return {
                steps: []
            }
        },
        props: {
            width: String,
            success: Boolean,
            active: {
                type: Number,
                default: 1
            }
        }
    }
</script>