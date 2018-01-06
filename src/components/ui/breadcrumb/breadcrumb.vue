<template>
    <div class="sc-breadcrumb" :icon="icon">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'scBreadcrumb',
        componentName: 'scBreadcrumb',
        props: {
            icon: {
                type: String,
                default: ''
            }
        }
    }
</script>