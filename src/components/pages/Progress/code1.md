```html
<sc-progress v-model="value" show-percent></sc-progress>
<sc-progress v-model="value1" type="success"></sc-progress>
<sc-progress v-model="value2" type="info"></sc-progress>
<sc-progress v-model="value3" type="danger"></sc-progress>
<sc-progress v-model="value4" type="warning"></sc-progress>
<sc-button @click="random" type="success">随机数</sc-button>
<sc-button @click="bodyTop" type="primary">点击body顶部出现</sc-button>

bodyTop() {
    if(this.promise) {return}
    this.promise = this.$progress({
        value: this.valueTop
    }).then((instance)=> {
        instance.destroy()
        this.promise = null
        this.valueTop = 0
    })
    //
    if(this.setInterval) {clearInterval(setInterval)}
    this.setInterval = setInterval(()=> {
        this.valueTop += 10 
    },500)
}
```