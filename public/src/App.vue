<template>
  <div class="app-component">
    <nav-menu></nav-menu>
    <side-menu></side-menu>
    <!-- router 切换主区域 -->
    <div class="view-wrap">
        <router-view></router-view>
    </div>
    <foot-menu></foot-menu>
  </div>
</template>

<script>
import NavMenu from './components/common/navMenu.vue'
import SideMenu from './components/common/sideMenu.vue'
import FootMenu from './components/common/footMenu.vue'

export default {
    name: 'app',
    components: {
        NavMenu, SideMenu, FootMenu
    },
    data(){
        return {
        }
    }
}
</script>

<style lang="less">
    @import "styles/app.less";
    .app-component {
        height: 100%;
    }
    .view-wrap{
        margin-left: 120px;
        padding-top: 60px;
        background-color: #ededed;
    }
</style>