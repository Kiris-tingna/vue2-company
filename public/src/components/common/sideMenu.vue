<template>
    <div class="side-menu">
    <el-row>
        <el-col :span="24">
            <el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
                <el-menu-item class="el-menu-item-demo" index="/introduction">公司简介</el-menu-item>
                <el-menu-item class="el-menu-item-demo" index="/counter">counter测试</el-menu-item>
                <el-menu-item class="el-menu-item-demo" index="/request">api测试</el-menu-item>
                <el-menu-item class="el-menu-item-demo" index="/connection">联系我们</el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
    </div>
</template>

<style lang="less">
.side-menu{
    position: fixed;
    top: 60px;
    height: 100%;
    float: left;
    font-weight: bold;
    width: 120px;
    background: #fff;
    box-shadow: 0 2px 3px hsla(0,0%,7%,.1),0 0 0 1px hsla(0,0%,7%,.1);
    overflow-y: auto;
    overflow-x: hidden;
}

.el-menu-vertical-demo {
    background-color: #fff;
}
.el-menu-item-demo{
    padding-left: 35px;
    
    &.is-active{
        color: #da0000;
        background-color: #ededed;
    }
}
</style>