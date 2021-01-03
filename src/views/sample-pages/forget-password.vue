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
              <h2> استرجاع كلمة السر </h2>
            </div>
            <h4 class="font-weight-light"></h4>
            <form class="pt-5">
              <form v-on:submit.prevent="AuthlogIn">
                <div v-if="step === 1" class="form-group">
                  <label for="exampleInputEmail1"> رقم الهاتف </label>
                  <b-form-input
                  v-model="phone"
                  class="form-control"
                  placeholder="رقم الهاتف"
                  required>
                  </b-form-input>
                  <i class="mdi mdi-account"></i>
                  <b-form-invalid-feedback id="">
                    الرجاء أدخال رقم الهاتف
                  </b-form-invalid-feedback>
                </div>

                 <div v-if="step === 2" class="form-group">
                  <label for="exampleInputEmail1"> أدخل رمز التأكيد </label>
                  <b-form-input
                  v-model="pinCode"
                  class="form-control"
                  placeholder="رمز التأكيد"
                  required>
                  </b-form-input>
                  <i class="mdi mdi-account"></i>
                  <b-form-invalid-feedback id="">
                    الرجاء أدخال رمز التأكيد
                  </b-form-invalid-feedback>
                </div>

                 <div v-if="step === 3" class="form-group">
                  <label for="exampleInputEmail1"> كلمة السر </label>
                  <b-form-input
                  v-model="new_password"
                  type="password"
                  class="form-control"
                  placeholder="كلمة السر"
                  required>
                  </b-form-input>
                  <i class="mdi mdi-account"></i> 
                </div>

                 <div v-if="step === 3" class="form-group">
                  <label for="exampleInputEmail1"> تأكيد كلمة السر </label>
                  <b-form-input
                  v-model="new_password_confirmation"
                  type="password"
                  class="form-control"                  
                  placeholder="تأكيد كلمة السر"
                  required>
                  </b-form-input>
                  <i class="mdi mdi-account"></i>
                </div>
                
                <div class="mt-5">
                  <button v-if="step==1" style="background-color: #0F3B51;" class="btn btn-block btn-primary btn-lg font-weight-medium" @click="sendPin" type ="submit"> إرسال رمز التأكيد </button>
                  <button v-if="step==2" style="background-color: #0F3B51;" class="btn btn-block btn-primary btn-lg font-weight-medium" @click="confirmPin" type ="submit"> تأكيد رمز الدخول </button>
                  <button v-if="step==3" style="background-color: #0F3B51;" class="btn btn-block btn-primary btn-lg font-weight-medium" @click="confirmPasswords" type ="submit"> تغيير كلمة السر </button>
                </div>
                 <div v-if="error" class="mt-3 alert alert-danger text-center">
                    {{error}}
                </div>
                <div class="mt-3 text-center">
                  
                  <br />
                  <router-link class="auth-link text-black" to="/login/"> تسجيل الدخول </router-link>
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
      phone: null,
      step: 1,
      error: null,
      pinCode: null,
      new_password: null,
      new_password_confirmation: null

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
        sendPin(){
            axios
            .post( process.env.WEBSITE_URL + "/api/all-users/forgotPassword", {
                "username": this.phone
            })
            .then(response => {
                this.step = 2
            })
            .catch( error => {
                this.error = " حدثت مشكلة أثناء إرسال رمز التأكيد "
            })
        },
        confirmPin(){
            ///api/all-users/checkToken
            axios
            .post( process.env.WEBSITE_URL + "/api/all-users/checkToken", {
            "username": this.phone,
            "token": this.pinCode,

            })
            .then(response => {
                this.step = 3
            })
            .catch( error => {
                this.error = " حدثت مشكلة أثناء إرسال رمز التأكيد "
            })
        },
        confirmPasswords(){
              axios
            .post( process.env.WEBSITE_URL + "/api/all-users/changePasswordUT", {
            "username": this.phone,
            "token": this.pinCode,
            "new_password":this.new_password,
            "new_password_confirmation":this.new_password_confirmation,
            })
            .then(response => {

                this.$router.push({ path: '/login' })
            })
            .catch( error => {
                this.error = " حدثت مشكلة أثناء إرسال رمز التأكيد "
            })   
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
