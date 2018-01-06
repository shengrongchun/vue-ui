```html
<sc-row justify="space-between">
    <sc-col :span="8">
        <sc-time-picker placeholder="请选择时间" showFormat="hh,mm"></sc-time-picker>
    </sc-col>
    <sc-col :span="8">
         <sc-time-picker placeholder="请选择时间" showFormat="hh"></sc-time-picker>
    </sc-col>
    <sc-col :span="8">
         <sc-time-picker placeholder="请选择时间" v-model="time2" showTime showFormat="ss,mm,hh"></sc-time-picker>
    </sc-col>
</sc-row>
```