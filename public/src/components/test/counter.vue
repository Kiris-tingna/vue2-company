<template>
    <div>
        Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
        <el-button size="large" type="primary"  @click="increment">+</el-button>
        <el-button size="small" @click="decrement">-</el-button>
        <el-button size="small" @click="incrementIfOdd">Increment if odd</el-button>
        <el-button size="small" @click="incrementAsync">Increment async</el-button>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    methods: mapActions([
            'increment',
            'decrement',
            'incrementIfOdd',
            'incrementAsync'
        ]),
    computed: mapGetters(['evenOrOdd'])
}
</script>