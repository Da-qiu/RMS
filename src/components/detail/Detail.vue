<template>
  <div id="detail">
    <div class="container">
      <button type="button" class="btn btn-default" @click="fanhui">返回</button>
      <div class="title">
        <h1>{{user.uname}}</h1>
        <router-link type="button" class="btn btn-primary float-right" :to="{path: 'adduser', query: {user: user, id:id}}">编辑</router-link>
        <button type="button" class="btn btn-danger float-right" @click='del'>删除</button>
      </div>
      
      <ul class="list-group">
        <li class="list-group-item glyphicon glyphicon-earphone">{{user.phone}}</li>
        <li class="list-group-item glyphicon glyphicon-envelope">{{user.email}}</li>
        <li class="list-group-item glyphicon glyphicon-book">{{user.education}}</li>
        <li class="list-group-item glyphicon glyphicon-asterisk">{{user.graduationschool}}</li>
        <li class="list-group-item glyphicon glyphicon-plus">{{user.profession}}</li>
        <li class="list-group-item glyphicon glyphicon-user">{{user.resume}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data() {
    return {
      id: '',
      user: {}
    }
  },
  created () {
    this.user = this.$route.query.user;
    this.id = this.$route.query.id;
  },
  methods: {
    fanhui () {
      this.$router.push('/home');
    },
    del () {
      this.$http.delete(`http://localhost:3000/users/${this.id}`).then(() => {
        this.$router.push({path: '/home', query: {alert: this.user.uname, text: '删除'}});
      })
    }
  }
}
</script>
<style lang="less" scoped>
#detail {
  .title {
    overflow: hidden;
    h1 {
      float: left;
    }
    .float-right {
      float: right;
      margin-top: 20px;
      margin-left: 10px;
    }
  }
  ul {
    margin-top: 20px;
  }
  .glyphicon-earphone:before,
  .glyphicon-envelope:before,
  .glyphicon-book:before,
  .glyphicon-asterisk:before,
  .glyphicon-plus:before,
  .glyphicon-user:before {
    margin-right: 15px;
  }
}
</style>
