<script>
    export default {
        name: 'scCol',
        props: {
            span: {
                type: Number,
                default: 24,
            },
            offset: Number,
            xs: [Number, Object],
            sm: [Number, Object],
            md: [Number, Object],
            lg: [Number, Object],
            tag: {
                type: String,
                default: 'div'
            }
        },
        computed: {
            space() {
                let parent = this.$parent;
                while(parent && parent.$options.componentName !== 'scRow') {
                    parent = parent.$parent;
                }

                return parent ? parent.space/2 : 0;
            }
        },
        render(h) {
            let style = {};
            let classList = [];
            if(this.space) {
                style.paddingLeft = this.space+'px';
                style.paddingRight = style.paddingLeft;
            };
            ['span','offset'].forEach(prop => {
                if (this[prop]) {
                    classList.push(
                      prop !== 'span'
                      ? `sc-col-${prop}-${this[prop]}`
                      : `sc-col-${this[prop]}`
                    );
                }
            });
            ['xs', 'sm', 'md', 'lg'].forEach(size => {
              if (typeof this[size] === 'number') {
                classList.push(`sc-col-${size}-${this[size]}`);
              } else if (typeof this[size] === 'object') {
                let props = this[size];
                Object.keys(props).forEach(prop => {
                  classList.push(
                    prop !== 'span'
                    ? `sc-col-${size}-${prop}-${props[prop]}`
                    : `sc-col-${size}-${props[prop]}`
                  );
                });
              }
            });
            return h(this.tag,{
                class: ['sc-col',classList],
                style
            },this.$slots.default)
        }

    }
</script>