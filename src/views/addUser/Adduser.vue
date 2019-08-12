<template>
  <div id="addUser">
    <div class="container">
      <h1>{{title}}</h1>
      <div class="alert alert-warning alert-dismissible" role="alert" v-show="isShow">
        <button type="button" class="close"><span @click="toggle">&times;</span></button>
        <strong>请输入必要信息!</strong> 
      </div>
      <form>
        <fieldset>
          <legend>用户信息</legend>
          <div class="form-group">
            <label for="uname">姓名</label>
            <input type="text" class="form-control" id="uname" placeholder="username" v-model="custormer.uname">
          </div>
          <div class="form-group">
            <label for="phone">电话</label>
            <input type="tel" class="form-control" id="phone" placeholder="phone" v-model="custormer.phone">
          </div>
          <div class="form-group">
            <label for="email">邮箱</label>
            <input type="email" class="form-control" id="email" placeholder="email" v-model="custormer.email">
          </div>
          <div class="form-group">
            <label for="education">学历</label>
            <input type="text" class="form-control" id="education" placeholder="education" v-model="custormer.education">
          </div>
          <div class="form-group">
            <label for="graduationschool">毕业学校</label>
            <input type="text" class="form-control" id="graduationschool" placeholder="graduationschool" v-model="custormer.graduationschool">
          </div>
          <div class="form-group">
            <label for="profession">职业</label>
            <input type="text" class="form-control" id="profession" placeholder="profession" v-model="custormer.profession">
          </div>
          <div class="form-group">
            <label for="resume">个人简介</label>
            <textarea class="form-control" rows="4" id="resume" v-model="custormer.resume"></textarea>
          </div>
          <button class="btn btn-primary" @click.prevent="addUser">{{btnValue}}</button>
        </fieldset> 
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addUser',
  data() {
    return {
      title: "添加用户",
      btnValue: '添加',
      id: '',
      isShow: false,
      custormer: {}
    }
  },
  methods: {
    toggle () {
      this.isShow = false;
    },
    addUser () {
      if(!this.custormer.uname || !this.custormer.phone || !this.custormer.email) {
        this.isShow = true;
      } else {
        let newCustormer = {
          uname: this.custormer.uname,
          phone: this.custormer.phone,
          email: this.custormer.email,
          education: this.custormer.education,
          graduationschool: this.custormer.graduationschool,
          profession: this.custormer.profession,
          resume: this.custormer.resume
        }
        if (this.btnValue == '添加') {
          this.$http.post("http://localhost:3000/users", newCustormer).then(function () {
            this.$router.push({path: '/home', query: {alert: this.custormer.uname, text: '添加'}});
          })
        } else {
          this.$http.put(`http://localhost:3000/users/${this.id}`, newCustormer).then(() => {
            this.$router.push({path: '/home', query: {alert: this.custormer.uname, text: '修改'}});
          })
        }
        
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    if(from.path == '/detail'){
      next(vm => {
        vm.title = "编辑用户信息";
        vm.btnValue = '确认';
        vm.custormer = vm.$route.query.user;
        
        vm.id = vm.$route.query.id;
      })
    } else {
      next();
    }
  }
  
}
</script>
<style lang="less" scoped>
#addUser {
    form {
      margin-top: 20px;
      padding: 20px 15px;
      background-color: #E7E7E7;
      border-radius: 5px;
      legend {
        border-bottom: 0;
        margin: 0;
      }
    }
}
</style>
