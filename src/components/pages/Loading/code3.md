```html
<sc-button type="primary" @click="showLoading">点击出现loading,默认全屏</sc-button>
<sc-button class="loadingBtn" type="success" @click="showLoadingArea">点击出现loading,指定target</sc-button>

showLoading() {
    this.$loading({
        size: 'lg',
        type: 'circular',
        color: 'primary',
        clickClose: true,
        //visible: true
    }).then(()=> {
        //alert('关闭')
    })
},
showLoadingArea() {
    this.$loading({
        size: 'sm',
        type: 'circular2',
        color: 'warning',
        clickClose: true,
        target: '.loadingBtn'
        //visible: true
    }).then(()=> {
        //alert('关闭')
    })
}
```