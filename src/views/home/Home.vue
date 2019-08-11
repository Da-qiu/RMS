<template>
  <div id="home">
    <div class="container">
      <h1>用户管理系统</h1>
      <input type="text" class="form-control search" placeholder="搜索">
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
          <tr v-for="(item, i) in this.users" :key="i">
            <td>{{item.name}}</td>
            <td>{{item.phone}}</td>
            <td>{{item.email}}</td>
            <td>
              <router-link class="btn btn-default" to="/detail">详情</router-link>
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
      users: []
    }
  },
  methods: {
    getUsers () {
      this.$http.get('http://localhost:3000/users').then(function (result) {
        this.users = result.body;
      })
    }
  },
  created () {
    this.getUsers();
  }
}
</script>
<style lang="less" scoped>
#home {
  margin-top: 100px;
  .search {
    margin: 20px 0;
  }
}
</style>
