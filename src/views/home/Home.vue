<template>
  <div id="home">
    <div class="container">
      <div class="alert alert-warning" role="alert" v-show="alerShow">{{addname}}信息{{text}}成功！</div>
      <h1>用户管理系统</h1>
      <input type="text" class="form-control search" placeholder="搜索" v-model='searchContent'>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>姓名</th>
            <th>电话</th>
            <th>邮箱</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in search(users, searchContent)" :key="i">
            <td>{{item.uname}}</td>
            <td>{{item.phone}}</td>
            <td>{{item.email}}</td>
            <td>
              <router-link class="btn btn-default" :to="{path: '/detail', query: {user: item, id: item.id}}">详情</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      alerShow: false,
      addname: "",
      text: '',
      users: [],
      searchContent: ''
    }
  },
  methods: {
    getUsers () {
      this.$http.get('http://localhost:3000/users').then(function (result) {
        this.users = result.body;
      })
    },
    search (users, content) {
      if (!content) {
        return users;
      } else {
        return users.filter((user) => {
          return user.uname.indexOf(content) != -1 ? true : false;
        })
      }
    }
  },
  created () {
    this.getUsers();
    if (this.$route.query.alert) {
      this.addname = this.$route.query.alert;
      this.text = this.$route.query.text;
      this.alerShow = true;
      setTimeout(() => {
        this.alerShow = false;
      }, 2000)
    }
  }
    
}
</script>
<style lang="less" scoped>
#home {
  .alert {
    margin-top: 20px;
  }
  .search {
    margin: 20px 0;
  }
}
</style>
