<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-fixed-top" v-if='navShow'>
      <div class="container">
        <a class="navbar-brand" href="#">用户管理系统</a>
        <ul class="nav navbar-nav">
          <li ref='li1' :class='{active: li1}'>
            <router-link to="/home">主页</router-link>
          </li>
          <li ref='li2' :class='{active: li2}'>
            <router-link to="/about">关于我们</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li ref='li3' :class='{active: li3}'>
            <router-link to="/adduser">添加用户</router-link>
          </li>
        </ul>
      </div> 
    </nav>
    <router-view class="content-wrapper"></router-view>   
  </div>
</template>
<script>
import { setTimeout } from 'timers';
  export default {
    name: 'app',
    data () {
      return {
        navShow: true,
        li1: false,
        li2: false,
        li3: false
      }
    },
    watch: {
      $route(to, from) {
        switch (to.path) {
          case '/home':
            if (from.path == '/detail' || from.path == "/adduser"){
              this.navShow = true;
            }
            this.$nextTick(() => {
              var lis = document.querySelectorAll('.container ul li');
              for (var i=0; i < lis.length; i++) {
                lis[i].classList.remove('active');
              }
              this.$refs.li1.classList.add('active');
            })
            break;
          case '/about':
            var lis = document.querySelectorAll('.container ul li');
            for (var i=0; i < lis.length; i++) {
              lis[i].classList.remove('active');
            }
            this.$refs.li2.classList.add('active');
            break;
          case '/adduser':
            if (from.path == '/detail') return;
            var lis = document.querySelectorAll('.container ul li');
            for (var i=0; i < lis.length; i++) {
              lis[i].classList.remove('active');
            }
            this.$refs.li3.classList.add('active');
            break;
          case '/detail':
            this.navShow = false;
            break;
        }
      }
    },
    created() {
      switch(location.pathname){
        case '/home':
          this.li1 = true;
          break;
        case '/about':
          this.li2 = true;
          break;
        case '/adduser':
          this.li3 = true;
          break;
        case '/detail':
          this.navShow = false;
          break;
      }
    }
  }
</script>

<style lang="less">
#app{
  padding-top: 50px;
}
</style>
