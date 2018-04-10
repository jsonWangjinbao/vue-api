<style lang='less'>
  @import "../style/nav.less";
</style>

<template>
  <div class="nav-title">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          active-text-color="#303133"
          >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>总览</span>
            </template>
            <el-menu-item-group>
              <router-link to="/Summary">
                <el-menu-item index="1-1" v-bind:class="[(isActive === '/Summary') ? 'nav-active' : '']">
                  <span>实时概况</span>
                </el-menu-item>
              </router-link>
              <router-link to="/ArticleList" >
                <el-menu-item index="1-2" v-bind:class="[(isActive === '/ArticleList') ? 'nav-active' : '']">
                  <span>文章列表</span>
                </el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>发现</span>
            </template>
            <el-menu-item-group>
              <router-link to="/EssenceList">
                <el-menu-item index="2-1" v-bind:class="[(isActive === '/EssenceList') ? 'nav-active' : '']">
                  <span>文章精华列表</span>
                </el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <div class="content-box">
        <router-view></router-view>
      </div>
    </el-row>
  </div>
</template>

<script>
import Summary from './overview/Summary'
import ArticleList from './overview//ArticleList'
import EssenceList from './find/EssenceList'

export default {
  name: 'Nav',
  components: {
    Summary,
    ArticleList,
    EssenceList
  },
  data () {
    return {
      isActive: ''
    }
  },
  created: function () {
    this.isActive = this.$root._route.fullPath
  },
  updated: function () {
    this.isActive = this.$root._route.fullPath
  }
}
</script>
