<template>
    <div class="sc-date-picker" v-clickoutside="outsideClick">
        <sc-input readonly :placeholder="placeholder" :disabled="disabled"
            :size="size"
            v-model="date.time"
            @onfocus="InputFocusClick" 
            :icon="iconModel" 
            @iconClick="IconClick"
            >
        </sc-input>
        <div :class="['sc-date-option',{'sc-option-hide':!show}]" :style="{'width':width?width:null}">
            <div class="sc-date-monthly">
                <div class="sc-date-previous" @click="nextMonth({'action':'previous'})">
                    <sc-icon value="angle-left" size="30"/>
                </div>
                <div class="sc-date-caption">
                    <span @click="clickYear">{{checked.year}} </span>{{languageForEn?'Year':'年'}}
                    <span @click="clickMonth">{{checked.month}} </span>{{languageForEn?'Month':'月'}}
                </div>
                <div class="sc-date-next" @click="nextMonth({'action':'next'})">
                    <sc-icon value="angle-right" size="30"/>
                </div>
            </div>
            <div class="sc-date-box" v-if="showInfo.date">
                <div class="sc-picker-box">
                    <div class="week">
                        <ul><li v-for="weekie in week">{{weekie}}</li></ul>
                    </div>
                    <div class="day" v-for="day,index in dayList" :key="index"
                        :class="{'checked':day.checked,
                        'unavailable':day.unavailable,
                        'passive-day': !(day.inMonth)}"
                        @click="checkDay(day)"
                    >{{day.value}}</div>
                </div>
            </div>
            <div class="sc-date-box" v-if="showInfo.year">
                <div class="date-list" id="yearList">
                    <div class="date-item" v-for="yearItem,index in year" :key="index" @click="setYear(yearItem)">{{yearItem}}</div>
                </div>
            </div>
            <div class="sc-date-box" v-if="showInfo.month">
                <div class="date-list">
                    <div class="date-item" v-for="monthItem,index in month" :key="index" @click="setMonth(monthItem)">{{monthItem}}</div>
                </div>
            </div>
            <div class="sc-date-footer">
                <sc-button type="text" @click="save">{{languageForEn?'Ok':'确定'}}</sc-button>
                <sc-button type="text" @click="cancel">{{languageForEn?'Cancel':'取消'}}</sc-button>
            </div>
        </div>
    </div>
</template>

<script>
    import clickoutside from '../utils/clickoutside'
    import moment from 'moment'
    export default {
        name: 'scDatePicker',
        data() {
            return {
                oldtime: null,
                iconModel: 'calendar',
                show: false,
                dayList: [],
                selectedDays: [],
                weekCh: this.option.SundayFirst?['日','一','二','三','四','五','六']:['一','二','三','四','五','六','日'],
                monthCh:['一 月','二 月','三 月','四 月','五 月','六 月','七 月','八 月','九 月','十 月','十一 月','十二 月'],
                weekEh: this.option.SundayFirst?['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']:['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                monthEh:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                checked: {
                    currentMoment: null,
                    year: null,
                    month: null,
                    day: null,

                },
                linkMask: this.option.format.indexOf('-')>-1?'-':'/',
                showInfo: {
                    year: false,
                    date: false,
                    month: false
                }
            }
        },
        props: {
            placeholder: {
                type: String,
                default: '请选择日期'
            },
            disabled: Boolean,
            languageForEn: Boolean,
            outsideClickNone: Boolean,
            size: String,
            width: String,
            date: {
                type: Object,
                required: true
            },
            option: {
                type: Object,
                default() {
                    return {
                        format: 'YYYY-MM-DD',
                        SundayFirst: true,
                        limit: []
                    }
                }
            }
        },
        computed: {
            week() {
                return this.languageForEn?this.weekEh:this.weekCh
            },
            month() {
                return this.languageForEn?this.monthEh:this.monthCh
            },
            year() {
                let year = moment(this.checked.currentMoment).year()
                let yearTmp = []
                for (let i = year - 100; i < year + 100; ++i) {
                    yearTmp.push(i)
                }
                //
                return yearTmp
            },
            
        },
        methods: {
            InputFocusClick() {
                this.showDay(this.date.time)
                this.show = true
            },
            IconClick() {
                this.showDay(this.date.time)
                this.show = true
            },
            outsideClick() {
                if(this.outsideClickNone) {
                    this.show = false
                } 
            },
            showDay(time) {
                //
                this.showInfo.date = true
                this.showInfo.year = false
                this.showInfo.month = false
                //
                if (!time || time === undefined || !moment(time, this.option.format)._isValid) {
                    this.checked.currentMoment = moment()
                } else {
                    this.checked.currentMoment = moment(time, this.option.format)
                }
                //
                let days = []
                let currentMoment = this.checked.currentMoment
                this.checked.year = moment(currentMoment).format('YYYY')
                this.checked.month = moment(currentMoment).format('MM')
                this.checked.day = moment(currentMoment).format('DD')
                //firstDay就是月初第一天是周几
                let firstDay = moment(currentMoment).date(1).day()
                let monthDays = moment(currentMoment).daysInMonth()
                //
                let previousMonth = moment(currentMoment)
                let nextMonth = moment(currentMoment)
                    nextMonth.add(1, 'months')
                    previousMonth.subtract(1, 'months')
                //把本月的天全部放入数组中
                for(let i=1;i<=monthDays;i++) {
                    days.push({
                        value: i,
                        inMonth: true,
                        unavailable: false,
                        checked: false,
                        moment: moment(currentMoment).date(i)
                    })
                    //计算选中那天
                    if( i==Math.ceil(moment(currentMoment).format('D')) ) {
                        this.checkDay(days[i-1])
                    }
                    //
                }
                //计算把前一个月的后几天放入数组前面
                if(firstDay == 0) {firstDay = 7}
                for(let i=0;i<firstDay - (this.option.SundayFirst ? 0 : 1);i++) {
                    days.unshift({
                        value: previousMonth.daysInMonth()-i,
                        inMonth: false,
                        unavailable: false,
                        checked: false,
                        action: 'previous',
                        moment: moment(currentMoment).date(1).subtract(i + 1, 'days')
                    })
                }
                //把下一个月的前几天放入数组
                let nextSomeDays = 42 - days.length
                
                for(let i=0;i<nextSomeDays;i++) {
                    days.push({
                        value: i+1,
                        inMonth: false,
                        unavailable: false,
                        checked: false,
                        action: 'next',
                        moment: moment(currentMoment).add(1, 'months').date(i+1)
                    })
                }
                //
                if (this.option.limit.length > 0) {
                    for (let i in this.option.limit) {
                        switch (this.option.limit[i].type) {
                            case 'fromto':
                            days = this.limitFromTo(this.option.limit[i], days)
                            break
                        case 'weekday':
                            days = this.limitWeekDay(this.option.limit[i], days)
                            break
                        }
                    }
                }
                //
                this.dayList = days
            },
            limitWeekDay (limit, days) {
                days.map((day) => {
                    if (limit.available.indexOf(Math.floor(day.moment.format('d'))) === -1) {
                        day.unavailable = true
                    }
                })
                return days
            },
            limitFromTo (limit, days) {
                if (limit.from || limit.to) {
                    days.map((day) => {
                        if (this.getLimitCondition(limit, day)) {
                            day.unavailable = true
                        }
                    })
                }
                return days
            },
            getLimitCondition (limit, day) {
                let tmpMoment = moment(day.moment.year() + '-' + this.pad(day.moment.month()+1) + '-' + this.pad(day.value))
                if (limit.from && !limit.to) {
                    return !tmpMoment.isAfter(limit.from)
                } else if (!limit.from && limit.to) {
                    return !tmpMoment.isBefore(limit.to)
                } else {
                    return !tmpMoment.isBetween(limit.from, limit.to)
                }
            },
            pad (n) {
                n = Math.floor(n)
                return n < 10 ? '0' + n : n
            },
            checkDay (obj) {
                //
                if (obj.unavailable || obj.value === '') {
                    return false
                }
                if (!(obj.inMonth)) {
                    this.nextMonth(obj,'click')
                    return
                }
                //
                this.checked.currentMoment.date(obj.value)
                let day = this.pad(obj.value)
                let ctime = this.checked.year + this.linkMask + this.checked.month + this.linkMask + day
                if(this.selectedDays.length>=1&&!obj.checked) {
                    this.selectedDays[0].value.checked = false
                }
                this.selectedDays = []
                //
                if (obj.checked === true) {
                    obj.checked = false
                } else {
                    this.selectedDays.push({key:ctime,value:obj})
                    obj.checked = true
                }
                //修改值
                this.picked()
            },
            nextMonth (obj,event) {
                if(this.selectedDays.length>=1) {
                    this.selectedDays[0].value.checked = false
                }
                this.selectedDays = []
                //
                let next = null
                obj.action === 'next' ? next = moment(this.checked.currentMoment).add(1, 'M') : next = moment(this.checked.currentMoment).add(-1, 'M')
                if(event == 'click') {next.date(obj.value)}
                this.showDay(next)
            },
            picked () {
                if(this.selectedDays.length == 0) {
                    this.date.time = null
                }else {
                    this.date.time = this.selectedDays[0].key
                }
                //
                this.$emit('change', this.date.time)
            },
            cancel() {
                this.date.time = this.oldtime
                this.selectedDays = []
                this.show = false
            },
            save() {
                this.oldtime = this.date.time
                this.show = false
            },
            setMonth (month) {
                let mo = (this.month.indexOf(month) + 1)
                if (mo < 10) {
                    mo = '0' + '' + mo
                }
                this.showDay(this.checked.year + this.linkMask + mo + this.linkMask + this.checked.day)
            },
            setYear (year) {
                this.showDay(year + this.linkMask + this.checked.month + this.linkMask + this.checked.day)
            },
            clickMonth() {
                this.showInfo.year = false
                this.showInfo.month = true
                this.showInfo.date = false
            },
            clickYear() {
                this.showInfo.year = true
                this.showInfo.month = false
                this.showInfo.date = false
            },
        },
        directives: {
            clickoutside
        },
        mounted() {
            if(this.date.time) {
                this.oldtime = this.date.time
            }
        }

    }
</script>