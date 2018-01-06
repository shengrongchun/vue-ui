<template>
    <div class="content-wrapper">
        <code-example title="基本使用">
            <div class="margin25">{{value}}</div>
            <sc-transfer v-model="value" :data="data"></sc-transfer>
        </code-example>
    </div>
</template>
<script>
  export default {
    data() {
        const generateData = ()=> {
            const data = [];
            for (let i = 1; i <= 15; i++) {
                data.push({
                    key: i,
                    label: `备选项 ${ i }`,
                    disabled: false
                })
            }
            return data
        }
        return {
            data: generateData(),
            value: [1,4]
        }
    }
}
</script>