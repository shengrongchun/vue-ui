<template>
    <form class="sc-form" @submit.prevent="submit">
        <slot/>
    </form>
</template>

<script>
    export default {
        name: "scForm",
        componentName: 'scForm',
        data() {
            return {
                requiredList: [],
                noGo: false
            }
        },
        props: {
            labelPosition: {
                type: String,
                default: 'left'
            },
            inline: {
                type: Boolean,
                default: false
            },
            labelWidth: String,
        },
        methods: {
            submit() {
                this.noGo = false
                //
                for(let i=0;i<this.requiredList.length;i++) {
                    if(this.requiredList[i]) {
                        this.requiredList[i].required()
                        //
                        if(this.requiredList[i].parent.show) {
                            this.noGo = true
                        }

                    }
                }
                //
                if(this.noGo) {
                    return
                }
                this.$emit('submit')
            }
        }
    }
</script>