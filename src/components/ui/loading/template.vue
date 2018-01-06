<template>
    <div :class="['sc-loading',{'is-visible':visible}]" @click="bgClickClose">
        <div v-if="type == 'circular'" :class="['loading-wrap','loading-wrap-'+size]">
            <svg class="loading-circular" viewBox="25 25 50 50">
                <circle class="loading-circular-path" cx="50" cy="50" r="20" :stroke="colorObj">
                </circle>
            </svg>
        </div>

        <div v-if="type == 'circular-wider'" :class="['loading-wrap','loading-wrap-'+size]">
            <svg class="loading-circular-wider" viewBox="25 25 50 50">
                <circle class="loading-circular-path" cx="50" cy="50" r="20" :stroke="colorObj">
                </circle>
            </svg>
        </div>

        <div v-if="type == 'circular2'" :class="['loading-wrap','loading-wrap-'+size]">
            <svg class="loading-circular2" viewBox="25 25 50 50">
                <circle class="loading-circular2-path" :stroke="colorObj" cx="50" cy="50" r="20"></circle>
                <circle class="loading-circular2-path2" :stroke="colorObj" cx="50" cy="50" r="20"></circle>
            </svg>
        </div>

        <div v-if="type == 'ball-pulse'" :class="['loading-wrap','loading-wrap-'+size]">
            <svg class="loading-ball-pulse" viewBox="0 0 90 20">
                <circle class="loading-ball-pulse-path" :fill="colorObj" cx="10" cy="10" r="10"></circle>
                <circle class="loading-ball-pulse-path" :fill="colorObj" cx="40" cy="10" r="10"></circle>
                <circle class="loading-ball-pulse-path" :fill="colorObj" cx="70" cy="10" r="10"></circle>
            </svg>
        </div>

        <div v-if="type == 'line-scale'" :class="['loading-wrap','loading-wrap-'+size]">
            <svg class="loading-line-scale" viewBox="0 0 72 30">
                <rect class="loading-line-scale-path" :fill="colorObj" x="0"></rect>
                <rect class="loading-line-scale-path" :fill="colorObj" x="16"></rect>
                <rect class="loading-line-scale-path" :fill="colorObj" x="32"></rect>
                <rect class="loading-line-scale-path" :fill="colorObj" x="48"></rect>
                <rect class="loading-line-scale-path" :fill="colorObj" x="64"></rect>
            </svg>
        </div>

        <div v-if="type == 'default'" :class="['loading-wrap','loading-wrap-'+size]">
            <svg class="loading-spin" viewBox="0 0 50 50">
                <circle class="loading-spin-path" :fill="colorObj" cx="4" cy="25" r="4"></circle>
                <circle class="loading-spin-path" :fill="colorObj" cx="10.2" cy="10.2" r="4"></circle>
                <circle class="loading-spin-path" :fill="colorObj" cx="25" cy="4" r="4"></circle>
                <circle class="loading-spin-path" :fill="colorObj" cx="39.6" cy="10.2" r="4"></circle>
                <circle class="loading-spin-path" :fill="colorObj" cx="46" cy="25" r="4"></circle>
                <circle class="loading-spin-path" :fill="colorObj" cx="39.6" cy="39.6" r="4"></circle>
                <circle class="loading-spin-path" :fill="colorObj" cx="25" cy="46" r="4"></circle>
                <circle class="loading-spin-path" :fill="colorObj" cx="10.2" cy="39.6" r="4"></circle>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: {
            size: String,
            visible: {
                type: Boolean,
                default: true
            },
            clickClose: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: 'default'
            },
            color: {
                type: String,
                default: '#20a0ff'
            }
        },
        computed: {
            colorObj() {
                if(this.color == 'primary') {
                    return '#20a0ff'
                }else if(this.color == 'success') {
                    return '#13ce66'
                }else if(this.color == 'danger') {
                    return '#ff4949'
                }else if(this.color == 'warning') {
                    return '#f7ba2a'
                }else if(this.color == 'info') {
                    return '#60c6df'
                }
                //
                return this.color
            }
        },
        methods: {
            bgClickClose() {
                if(this.clickClose) {
                    this.loadingClose()
                }
            },
            removeParentNode () {
                if (this.$el.parentNode) {
                    this.$el.parentNode.removeChild(this.$el)
                }
            },
            destroy () {
                this.removeParentNode()
                this.$destroy()
            }
        }
    }
</script>