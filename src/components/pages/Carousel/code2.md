```html
<sc-carousel-group  :interval="5000" card>
    <sc-carousel v-for="(item,index) in slides" :key="index">
        <img :src="item.image" :style="{height:'100%',width:'100%'}"/>
        <span class="carousel-title">{{item.text}}</span>
    </sc-carousel>
</sc-carousel-group>
```