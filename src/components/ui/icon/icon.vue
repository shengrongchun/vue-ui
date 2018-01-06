<script>
    export default {
        name: 'scIcon',
        props: {
            value: {
                type: String,
            },
            size: {
                type: [Number, String]
            },
            color: {
                type: String,
                default: ''
            },
            className: {
                type: String,
                default: ''
            }
        },
        methods: {
            handleClick(e) {
                this.$emit('click',e)
            }
        },
        computed: {
            iconStyle() {
                return {
                    'font-size': this.size+'px',
                    'color': this.color,
                    //'width': this.size+'px',
                    //'height': this.size+'px' 
                }
            }
        },
        render(h) {
            let {value, iconStyle, className } = this
            if(!value) return
            //这里这样写是为了扩展使用其他字体':'这个之后增加其他字体类
            const isMeterial = value.indexOf(':') !== 0
           
            return h('i',{
                class: ['sc-icon',isMeterial ? 'fa fa-'+value : value.replace(':',''),className],
                style: iconStyle,
                on: {
                    click: this.handleClick
                }
            },null)
        }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/base';
    
    .sc-icon {
        font-size: $iconSize;
        cursor: inherit;
    }
</style>