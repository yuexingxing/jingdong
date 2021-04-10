<template>
	
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" />
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入手机号" type="number" />
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入密码" type="password" />
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请再次输入密码" type="password" />
    </div>
    <div class="wrapper__register-button" @click="handleRegisterClick">注册</div>
    <div class="wrapper__register-link" @click="handleToLoginClick">已有帐号去登录</div>
	<Toast />
  </div>
<div>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</div>
</template>

<script>

  import {
    useRouter
  } from 'vue-router'
  import { reactive } from 'vue'
  import Toast from '../../components/Toast.vue'
  
  export default {
    name: 'Register',
	data() {
	    return {
	      radio: "1"
	    };
	  },
    setup() {
      const router = useRouter();
      const handleToLoginClick = () => {
        router.push({
          name: "Login"
        });
      }
	  const handleRegisterClick = () => {
		  localStorage.setItem("isLogin", true)
		  router.push({name: 'HomePage'});
	  }
      return{
        handleToLoginClick, handleRegisterClick
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    position: absolute;
    margin-top: 30%;
    left: 0;
    right: 0;

    &__img {
      width: .66rem;
      height: .66rem;
      display: block;
      margin: 0 auto .4rem auto;
    }

    &__input {
      height: .48rem;
      background: #f9f9f9;
      margin: 0 .4rem .16rem .4rem;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 6px;

      &__content {
        background: none;
        width: 90%;
        height: 100%;
        border: none;
        outline: none;
        margin-left: .16rem;
        margin-right: .16rem;
        font-size: .16rem;
      }
    }

    &__register-button {
      line-height: .48rem;
      font-size: .16rem;
      background: #0091ff;
      box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, 0.32);
      border-radius: .04rem;
      color: white;
      text-align: center;
      margin: .32rem .4rem 0 .4rem;
    }

    &__register-link {
      text-align: center;
      font-size: .16rem;
      color: #777777;
      margin-top: .16rem;
    }
  }
</style>
