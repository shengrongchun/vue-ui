<template>
    <div class="code-table">
        <h3>{{title}}</h3>
        <table>
            <thead>
                <tr>
                    <th width="20%">名称</th>
                    <th width="15%">类型</th>
                    <th width="25%">默认值</th>
                    <th width="40%">描述</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item,index in data" :key="item.name+index">
                    <td>{{item.name}}</td>
                    <td>{{item.type}}</td>
                    <td>{{item.default}}</td>
                    <td><mark-down :text="item.desc"></mark-down></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'codeTable',
        props: {
            title: {
                type: String,
                default: 'API'
            },
            data: {
                type: Array,
                default: ()=> {
                    return []
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../../assets/styles/base';
    
    .code-table {
        
        h3 {
            font-size: 22px;
            font-weight: 400;
            margin: 45px 0 15px;
            color: #1f2f3d;
        }

        thead {
            tr {
                color: #42b983;
                
                th {
                    font-size: 18px;
                    font-weight: normal;
                }
            }
            
        }

        tbody {
            tr {
                color: rgba(0, 0, 0, 0.54);
                
                &:hover {
                    background: #F9FAFC;
                }
            }
            
        }
    }

</style>