<script>
    export default {
        name: 'scRow',
        componentName: 'scRow',
        props: {
            tag: {
                type: String,
                default: 'div'
            },
            space: Number,
            justify: String
        },
        computed: {
            style() {
                return this.space ? -this.space/2 : 0
            },
            setJustify() {
                let array = ['end','center','space-between','space-around'];
                for(let i=0;i<array.length;i++) {
                    if(this.justify === array[i]) {
                        return 'justify-'+this.justify;
                    }
                }

                return 'justify-start';
            }
        },
        render(h) {
            let style = {};
            if(this.style) {
                style.marginLeft = this.style+'px';
                style.marginRight = this.style+'px';
            };
            return h(this.tag,{
                class: ['sc-row clearfix',this.justify?this.setJustify:null],
                style
            },this.$slots.default)
        }
    }
</script>