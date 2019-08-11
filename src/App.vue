<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">用户管理系统</a>
        <ul class="nav navbar-nav">
          <li @click="addActive($event)" class="active">
            <router-link to="/home">主页</router-link>
          </li>
          <li @click="addActive($event)">
            <router-link to="/about">关于我们</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li @click="addActive($event)">
            <router-link to="adduser">添加用户</router-link>
          </li>
        </ul>
      </div> 
    </nav>
    <router-view class="content-wrapper"></router-view>   
  </div>
</template>
<script>
  export default {
    name: 'app',
    data () {
      return {}
    },
    methods: {
      addActive(e) {
        var lis = document.querySelectorAll('.container ul li');
        for (var i=0; i < lis.length; i++) {
          lis[i].classList.remove('active');
        }
        e.target.parentElement.classList.add('active');
      }
    }
  }
</script>

<style lang="less">
#app{
  
}
</style>
