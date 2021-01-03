<template lang="html">
  <section class="login page-login" id="test"  style=" min-height:1000px; margin-top:0px;margin-left: -28px;background:#0F3B51; margin-top: -25px;">
    <div class="wrapper d-flex align-items-center auth login-full-bg" style="  ">
      <div class="row w-100">
        <div class="col-lg-6"style="margin:auto;margin-top:70px;padding:20px;">
          <div class="auth-form-light text-right p-5" style="border-radius: 10px;">
            <div style="text-align:center; margin-bottom: 50px; ">
              <img src="../../assets/images/Hybrid Blue.png" style="width:180px;" alt="img17"/>
            </div>
            <div style="text-align:center">
              <h2>تسجيل الدخول</h2>
              <h4 style="color:#6d6e70">زود دخلك و اتحكم فى وقتك و حياتك</h4>
            </div>
            <h4 class="font-weight-light"></h4>
            <form class="pt-5">
              <form v-on:submit.prevent="AuthlogIn">
                <div class="form-group">
                  <label for="exampleInputEmail1">البريد الالكترونى</label>
                  <b-form-input
                  v-model="username"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="البريد الالكترونى"
                  :state="emailState"
                  required>
                  </b-form-input>
                  <i class="mdi mdi-account"></i>
                  <b-form-invalid-feedback id="">
                    الرجاء أدخال البريد الألكترونى
                  </b-form-invalid-feedback>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">كلمه المرور</label>
                  <b-form-input
                  v-model="password"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="كلمه المرور"
                  :state="paswordState"
                  required>
                  </b-form-input>
                  <i class="mdi mdi-eye"></i>
                  <b-form-invalid-feedback id="">
                  الرجاء ادخال كلمه المرور
                  </b-form-invalid-feedback>
                </div>
                <div class="mt-5">
                  <button style="background-color: #0F3B51;" class="btn btn-block btn-primary btn-lg font-weight-medium"type ="submit">تسجيل الدخول</button>
                </div>
                <div class="mt-3 text-center">
                  <a  class="auth-link text-black">
                    <router-link class="auth-link text-black" to="/forgetpassword/">
                      نسيت كلمه المرور
                    </router-link>
                    </a>
                  <br />
                  أو
                  <br />
                  <router-link class="auth-link text-black" to="/register/">انشاء حساب </router-link>
                </div>
              </form>
            </form>
          </div>
        </div>
      </div>
    </div>
    <footer class="section footer">
      <div class="footer-bottom">
        <div class="container">
          <div class="col-md-12">
            <p>
              <ul class="footer-share">
                <li class="zoom"><a target="_blank" href="https://www.facebook.com/OKATRUCK/" ><i class="fa fa-facebook"></i></a></li>
                <li class="zoom"><a target="_blank" href="https://twitter.com/okatruck"><i class="fa fa-twitter"></i></a></li>
                <li class="zoom"><a target="_blank" href="https://www.linkedin.com/company/oka-truck/"><i class="fa fa-linkedin"></i></a></li>
                <li class="zoom"><a target="_blank" href="https://okatruck.com/contactoka"><i class="fa fa-phone"></i></a></li>
              </ul>
            </p>
            <p>Copyright © 2019 <a href="">Oka</a>. All Rights Reserved. </p>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>
<script lang="js">
  import headers from '../../functions/header'
  import {login,getAuthUserInfo} from '../../functions/auth'
  import axios from 'axios'
export default {
  name: 'login',
  data(){
    return {
      username: "",
      password: "",
      emailstate:false,
      passwordstate:false
    }
  },
  computed:{
    emailState () {
      if((this.username.length > 9)&&(this.username.includes("@"))){
          this.emailstate =true;
          return true
        }
      else{
        if(this.username=="")
        {
        return "dirty"
        }else{
        this.emailstate =false;
        return false
      }
      }
    },
    paswordState () {
      if(this.password.length > 5){
          this.passwordstate =true;
          return true
        }
      else{
        if(this.password=="")
        {
        return "dirty"
        }else{
        this.passwordstate =false;
        return false
      }
      }
    }
  },
    methods:{
      AuthlogIn() {
        if(this.emailstate ==true && this.passwordstate == true) {
          this.$snotify.async('لتسجيل الدخول', 'برجاء الانتظار', () => new Promise((resolve, reject) => {
            this.$store.dispatch('login');
            login(axios, {
              username: this.username,
              password: this.password,
              client_id: process.env.CLIENT_ID,
              client_secret: process.env.CLIENT_SECRET,
              grant_type: process.env.GRANT_TYPE
            }).then(mainResponse=> {
              localStorage.setItem("token", mainResponse.access_token);
              getAuthUserInfo(axios).then(response=> {
                this.$store.commit('loginSuccess', response);
                setTimeout(() => resolve({
                  title: 'تم',
                  body: 'تسجيل الدخول بنجاح',
                  timeout:500,
                  config: {
                  timeout:500,
                  position: "leftTop",
                  closeOnClick: true
                  }
                }), 500);
                this.$router.push({path: '/'});
              }).catch(error=> {
                this.$store.commit("loginFailed", {error});
                setTimeout(() => reject({
                  title: 'خطأ',
                  body: 'فى تسجيل الدخول',
                  timeout:500,
                  position: "leftTop",
                  config: {
                    timeout:500,
                    position: "leftTop",
                    closeOnClick: false
                  }
                }), 500);
              });
            }).catch(error=> {
              this.$store.commit("loginFailed", {error});
              setTimeout(() => reject({
                title: 'خطأ',
                body: 'فى تسجيل الدخول',
                timeout:500,
                position: "leftTop",
                config: {
                timeout:500,
                position: "leftTop",
                closeOnClick: false
                }
              }), 500);
            });
          }));
        }
        else{
          this.showDataWarning()
        }
      }
      ,showDataWarning(){
          this.$snotify.warning('ادخل البيانات بطريقه صحيحه', {
        timeout: 2000,
        showProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
          pauseOnHover:true,
        position: "leftTop"
      });
    },
    showFieldLogin(){
        this.$snotify.error('خطاء فى تسجيل الدخول', {
      timeout: 500,
      showProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
        pauseOnHover:true,
      position: "leftTop"
    });
  },
    showSuccessLogin(){
        this.$snotify.success('تم تسجيل الدخول', {
      timeout: 500,
      showProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
        pauseOnHover:true,
      position: "leftTop"
    });
    }
    }
}
</script>
<style scoped lang="scss">
.container-fluid {
  background: #0f3b51;
}
.page-body-wrappe {
  background: #0f3b51;
}
#test {
  background-image: url("../../assets/images/936857.jpg");
  background-repeat: no-repeat;
  background-size: 1920px 1080px;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: black;
  opacity: 0.5; /* Firefox */
}
.auth form .form-group .form-control {
  text-align: right;
}
.register {
}
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 30px white inset;
}
.app-footer {
}
.footer {
  height: 265px;
  border-radius: 10px;
  text-align: center;
  background-color: #e6e8e6;
  margin-top: 160px;
  padding-top: 100px;
}
.footer .footer-share {
  margin-top: 0;
}
ul,
ol {
  margin: 0;
  padding: 0;
}
.footer .footer-share li {
  border: 1px solid rgba(15, 59, 81, 0.2);
  border-radius: 50%;
  color: #0f3b51;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  padding: 22px 0;
  margin: 0 10px;
  display: inline-block;
  float: none;
}
.footer .footer-share a {
  color: #0f3b51;
}
.footer a {
  font-size: 18px;
  color: #0f3b51;
}
p {
  font-size: 14px;
  line-height: 22.4px;
  color: #6c7279;
}
.content-wrapper {
  height: 1028px;
}
.zoom:hover {
  -webkit-transition: transform 0.1s ease-in-out;
  transform: scale(
    1.119
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>
