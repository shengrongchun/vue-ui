```html
<sc-row justify="space-between">
    <sc-col :span="7">
        <sc-date-picker :date="date"></sc-date-picker>
    </sc-col>
    <sc-col :span="7">
        <sc-date-picker :date="date" disabled></sc-date-picker>
    </sc-col>
    <sc-col :span="7">
        <sc-date-picker :date="date1" languageForEn outsideClickNone></sc-date-picker>
    </sc-col>
</sc-row>
```