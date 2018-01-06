<template>
    <div class="code-example" :class="{'title': title}">
        <header v-if="title"><span>{{title}}</span></header>
        <div class="click-area">
            <span @click="toggle('show')" :class="{'active': active=='show'}">效果</span>
            <span @click="toggle('code')" :class="{'active': active=='code'}">代码</span>
        </div>
        <div class="code-example-content clearfix">
            <transition-group :duration="{ enter: 800, leave: 300 }" enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutLeft">
                <div v-if="active == 'code'&&code" key="code">
                    <mark-down :text="code"></mark-down>
                </div>
                <div v-if="active == 'show'" key="show">
                    <mark-down class="description" v-if="description" :text="description"></mark-down>
                    <slot></slot>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'codeExample',
        data() {
            return {
                active: 'show'
            }
        },
        props: {
            title: {
                type: String,
                default: null
            },
            code: {
                type: String,
                default: null
            },
            description: {
                type: String,
                default: null
            }
        },
        methods: {
            toggle(mask) {
                this.active = mask
            }
        }
    }    
</script>

<style lang="scss" scoped>
    $border-color: #E0E6ED;
    $font-color: #42b983;
    $header-bg: #F9FAFC;
    
    .code-example {
        border: 1px solid $border-color;
        border-radius: 4px;
        color: $font-color;
        position: relative;
        margin-bottom: 50px;
        
        
        &:hover {
            box-shadow: 0px 0px 5px $border-color;
        }

        & header {
            background: $header-bg;
            padding: 10px 24px;
            border-bottom: 1px solid $border-color;
            border-radius: 4px 4px 0 0;
            
            span {
                font-size: 18px;
                user-select: none;
                white-space: nowrap;
            }
        }
        
        .click-area {
           position: absolute;
           right: 10px;
           top: 10px;
           
           span {
                border: 1px solid $border-color;
                color: $border-color;
                border-radius: 4px;
                padding: 1px 4px;
                cursor: pointer;
                
                &.active {
                    color: inherit;
                    border: 1px solid $font-color;
                }
           }     
        }

        & .code-example-content {
            color: #000;
            padding: 40px 20px 20px;
            
            .description {
                padding-bottom: 10px;
                color: inherit;
            }
            
        }

        &.title .code-example-content {
            padding: 10px 20px;
        }
    }
</style>