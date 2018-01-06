<template>
    <div :class="['sc-badge',{'no-slot':!$slots.default}]">
        <slot/>
        <div :class="['badge-main',{'is-dot':!value}]">
            {{value}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'scBadge',
        props: {
            value: {}
        }

    }
</script>