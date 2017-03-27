<template>
    <div>
        <h2>api: {{ api_string }}</h2>
        <el-button type="primary" @click='handleAjax'>提交</el-button>
    </div>
</template>

<script>
import {requestLogin} from '../../api'
export default {
    data() {
        return {
            api_string: ''
        }
    },
    methods: {
        handleAjax(){
            requestLogin().then(data => {
                api_string = data
                console.log(data)
            }, data => {
                api_string = data
                console.log(data)
            })
        }
    }
}
</script>