<template>
    <div v-clickoutside="OutSideClick" class="sc-time-picker">
        <sc-input readonly :placeholder="placeholder" :disabled="disabled"
            :size="size"
            v-model="displayTime"
            @onfocus="InputFocusClick" 
            :icon="displayTime?'close':iconModel" 
            @iconClick="IconClick"
            >
        </sc-input>
        <div :class="['sc-time-option',{'sc-option-hide':!show}]">
            <ul :class="'time-'+time.key" v-for="(time,index) in showFormatList" :key="index">
                <li class="time-title">{{time.value}}</li>
                <li :class="{'is-active':hours == hour}" v-if="time.key == 'hours'" :key="index" v-for="(hour,index) in hoursList"
                @click="timeItemClick('hours',hour)"
                >{{hour}}</li>
                <li :class="{'is-active':minutes == min}" v-if="time.key == 'minutes'" :key="index" v-for="(min,index) in minutesList"
                @click="timeItemClick('minutes',min)"
                >{{min}}</li>
                <li :class="{'is-active':seconds == sec}" v-if="time.key == 'seconds'" :key="index" v-for="(sec,index) in secondsList"
                @click="timeItemClick('seconds',sec)"
                >{{sec}}</li>
            </ul>
            <div class="time-footer">
                <sc-button type="text" size="mi" @click="save">确定</sc-button>
                <sc-button type="text" size="mi" @click="cancel">取消</sc-button>
            </div>
        </div>
    </div>
</template>

<script>
    import clickoutside from '../utils/clickoutside'
    export default {
        name: "scTimePicker",
        data() {
            return {
                concatMask: ':',
                iconModel: 'clock-o',
                copyValue: null,
                show: false,
                hours: null,
                minutes: null,
                seconds: null,
                hoursList: [],
                minutesList: [],
                secondsList: [],
                showFormatList: []
            }
        },
        props: {
            placeholder: String,
            size: String,
            disabled: Boolean,
            showTime: Boolean,
            showFormat: {
                type: String,
                default: 'HH,MM,SS'
            },
            value: {},
            outsideClickNone: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            displayTime () {
                //
                let formatString = null
                if (this.hours) {
                    formatString = this.hours
                }
                if (this.minutes) {
                    formatString = formatString?(formatString+this.concatMask+this.minutes):this.minutes
                }
                if (this.seconds) {
                    formatString = formatString?(formatString+this.concatMask+this.seconds):this.seconds
                }
                //
                this.$emit('input',formatString)
                this.$emit('change',formatString)
                return formatString
            },
        },
        methods: {
            setValue(value) {
                if(value) {
                    this.copyValue = value
                    if(value.indexOf(':')>-1 || value.indexOf('/')>-1) {
                        this.concatMask = ( value.indexOf(':')>-1 )?':':'/'
                        let array = value.split(this.concatMask)
                        for(let i in this.showFormatList) {
                            if(this.showFormatList[i].key == 'hours') {
                                this.hours = array[i]
                            }else if(this.showFormatList[i].key == 'minutes') {
                                this.minutes = array[i]
                            }else if(this.showFormatList[i].key == 'seconds') {
                                this.seconds = array[i]
                            }
                        }
                    }
                    //
                   
                }
            },
            getTimeData() {
                for(let i=0;i<24;i++) {
                    if(i<10) {
                        i = '0'+i
                    }
                    //
                    this.hoursList.push(i)
                }
                for(let i=0;i<60;i++) {
                    if(i<10) {
                        i = '0'+i
                    }
                    //
                    this.minutesList.push(i)
                    this.secondsList.push(i)
                }
            },
            OutSideClick() {
                if(!this.show) {return}
                if(!this.outsideClickNone) {return}
                this.show = false
            },
            InputFocusClick() {
                this.show = true
            },
            IconClick() {
                this.show = true
                this.hours = this.minutes = this.seconds = null
            },
            timeItemClick(mask,value) {
                this[mask] = value
            },
            save() {
                this.copyValue = this.displayTime
                this.show = false
            },
            cancel() {
                this.hours = this.minutes = this.seconds = null
                this.show = false
                this.setValue(this.copyValue)
            }
        },
        directives: {
            clickoutside
        },
        mounted() {
            //
            this.getTimeData()
            //
            let arry = this.showFormat.split(',')
            for(let i in arry) {
                if(arry[i].toLowerCase().indexOf('h')>-1) {
                    this.showFormatList.push({key:'hours',value:'时'})
                }
                if(arry[i].toLowerCase().indexOf('m')>-1) {
                    this.showFormatList.push({key:'minutes',value:'分'})
                }
                if(arry[i].toLowerCase().indexOf('s')>-1) {
                    this.showFormatList.push({key:'seconds',value:'秒'})
                }
            }
            //
            this.setValue(this.value)
            //
            if(this.showTime) {this.show=true}
        }
    }
</script>