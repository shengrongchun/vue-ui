<template>
    <div :class="['sc-carousel',{'is-card':card}]" :style="styleObj">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'scCarousel',
        data() {
            return {
                index: 0,
                activeIndex: 0,
                oldActiveIndex: 0,
                opacity: 1,
                left: 0,
                top: 0,
                width: 0,
                height: 0,
                zIndex: -1,
                card: false
            }
        },
        methods: {
            getNewOldIndex() {
                this.oldActiveIndex = this.$parent.oldActiveIndex
            }
        },
        computed: {
            styleObj() {
                this.getNewOldIndex()
                //
                if(!this.card) {
                    if(this.index == this.$parent.activeIndex || this.index == this.oldActiveIndex) {
                        this.opacity = 1
                    }else {
                        this.opacity = 0
                    }
                    //
                    if(this.$parent.activeIndex > this.index) {
                        this.left = '-100%'
                    }else if(this.$parent.activeIndex < this.index) {
                        this.left = '100%'
                    }else {
                        this.left = 0
                    }
                    //
                    return {'left':this.left,'opacity':this.opacity}
                }else {//card
                    if(this.$parent.activeIndex == this.index) {
                        this.left = '10%'
                        this.width = '80%'
                        this.height = '90%'
                        this.top = '5%'
                        this.zIndex = 1
                    }else {
                        if( (this.$parent.activeIndex-this.index) == 1) {
                            this.left = 0
                        }else if( (this.$parent.activeIndex-this.index) == -1) {
                            this.left = '40%'
                        }else if((this.$parent.activeIndex-this.index) >0) {
                            this.left = '-100%'
                        }else if((this.$parent.activeIndex-this.index) <0) {
                            this.left = '100%'
                        }
                        //
                        this.width = '60%'
                        this.height = '80%'
                        this.top = '10%'
                        this.zIndex = 0
                    }

                    //
                    return {
                        'left':this.left, 'top': this.top, 
                        width: this.width,height: this.height,
                        'z-index': this.zIndex
                        }
                }
                
            }
        },
        mounted() {
            this.$parent.itemList.push(this)
            this.index = this.$parent.itemList.indexOf(this)
            this.card = this.$parent.card
            
        }
    }
</script>
<style>
    
</style>