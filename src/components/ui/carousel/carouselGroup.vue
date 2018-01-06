<template>
    <div class="sc-carouselgroup">
        <span class="carouselBtnLeft" @click="preClick">
            <sc-icon value=":fa fa-chevron-circle-left"></sc-icon>
        </span>
        <span class="carouselBtnRight" @click="nextClick">
            <sc-icon value=":fa fa-chevron-circle-right"></sc-icon>
        </span>

        <slot/>
        <div class="carouselBtnCircle">
            <span :key="index" :class="{'is-checked':index == activeIndex}" 
                    @click="btnCircleClick(index)"
                v-for="(item,index) in itemList"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'scCarouselGroup',
        data() {
            return {
                timeout:null,
                itemList: [],
                activeIndex: 0,
                oldActiveIndex: 0
            }
        },
        props: {
            interval: Number,
            card: {
                type:Boolean,
                default: false
            }
        },
        methods: {
            callback() {
                this.$emit('itemClick',this.itemList[this.activeIndex])
            },
            preClick() {
                this.oldActiveIndex = this.activeIndex
                //
                if(this.activeIndex == 0) {
                    this.activeIndex = this.itemList.length-1
                }else {
                    this.activeIndex--
                }
                //
                this.callback()
            },
            nextClick() {
                this.oldActiveIndex = this.activeIndex
                //
                if(this.activeIndex == this.itemList.length-1) {
                    this.activeIndex = 0
                }else {
                    this.activeIndex++
                }
                //
                this.callback()
            },
            btnCircleClick(index) {
                this.oldActiveIndex = this.activeIndex
                //
                this.activeIndex = index
                //
                this.callback()
            }
        },
        mounted() {
            if(this.interval) {
                this.timeout = setInterval(this.nextClick,this.interval)
            }
        },
        destory() {
            clearInterval(this.timeout)
        }
    }
</script>