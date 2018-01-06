<template>
    <div class="sc-breadcrumb-item">
        <router-link class="link" :to="to" :class="{'is-active':active}"><slot></slot></router-link>
        <sc-icon v-if="iconObj" :value="iconObj" class="breadcrumb-icon"></sc-icon>
        <span v-else class="breadcrumb-icon">/</span>
    </div>
</template>

<script>
    export default {
        name: 'scBreadcrumbItem',
        props: {
            to: {
                type: String,
                default: ''
            },
            active: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            iconObj() {
                let parent = this.$parent
                return parent.icon
            }
        }
    }
</script>