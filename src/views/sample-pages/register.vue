<template lang="html">
  <section class="register page-reg" style="    background: #0F3B51;
    margin-top: 0px;
    margin-left: -28px;
    margin-top: -25px;" >
    <div class="wrapper d-flex align-items-center auth register-full-bg">
      <div class="row w-100" id="r-100" 
      style="border-radius: 20px;background: #0F3B51;
        background: -webkit-linear-gradient(bottom, #0F3B51, #B31F3A);
        background: -o-linear-gradient(bottom, #0F3B51, #B31F3A);
        background: -moz-linear-gradient(bottom, #0F3B51, #B31F3A);
        background: linear-gradient(bottom, #0F3B51, #B31F3A);">
        <div class="login100-more" ><img src="../../assets/images/truck.jpeg"  
        style="margin: auto; opacity:.5;
        height: 1200px;
        position: absolute;"/></div>
        <div class="col-lg-6 " style="direction: rtl;
    margin-left: auto; padding:inherit;">
          <div class="auth-form-light text-right p-5" style="    border-radius: 6px;">
            <div class="row">
              <div class="col12" >
                <h2>انشاء حساب</h2>
                <h4 class="font-weight-light">انضم لمقاولى اوكا</h4>
              </div>
              <div  class="col6" style="margin: auto;
    margin-left: 0;
    margin-top: 5px;">
                <router-link class="auth-link text-black" to="/login/">تسجيل الدخول</router-link>
              </div>
            </div>
             <form class="pt-4">
              <p> <span> الحقول التي تحتوي علي <i class="fa fa-asterisk" aria-hidden="true" style="color:red; font-size: 10px;"></i></span> مطلوبة  </p>
            <hr/>
              <form v-on:submit.prevent="registerSupplier">
                <!-- add profile photo -->
                <label>  اضف صورتك الشخصية <i class="fa fa-asterisk" aria-hidden="true" style="color:red; font-size: 10px;"></i></label>
                <b-form-file style="text-align:left;margin-top: 15px;" @change="onProfilePictureChanged"  placeholder="أختار صورة..." accept="image/*" required></b-form-file>
                <hr/>
                <!-- add supplier name -->
                <label> ادخل اسمك بالكامل <i class="fa fa-asterisk" aria-hidden="true" style="color:red; font-size: 10px;"></i></label>
                <b-form-input 
                id=""
                type="text"
                placeholder="اسمك بالكامل"
                v-model="name"
                :state="nameState"
                required>
                </b-form-input>
                <b-form-invalid-feedback id="">
                  <!-- This will only be shown if the preceeding input has an invalid state -->
                  الرجاء أدخال الاسم كاملا لا يقل عن 5 أحرف وأن يكون أحرف فقط
                </b-form-invalid-feedback>
                <hr/>
                <!-- add password -->
                <label> ادخل كلمه المرور <i class="fa fa-asterisk" aria-hidden="true" style="color:red; font-size: 10px;"></i></label>
                <b-form-input v-model="password"
                style="margin-bottom: 15px;"
                id=""
                type="password"
                placeholder="انشئ كلمه مرور"
                :state="paswordState"
                required>
                </b-form-input>
                <b-form-invalid-feedback id="">
                  الرجاء ادخال كلمه المرور لا تقل عن 6 احرف
                </b-form-invalid-feedback>
                <label> تأكيد كلمه المرور <i class="fa fa-asterisk" aria-hidden="true" style="color:red; font-size: 10px;"></i></label>
                <b-form-input
                v-model="password_confirmation"
                id=""
                type="password"
                placeholder="تأكيد كلمه مرور"
                :state="paswordConfirmationState"
                required>
                </b-form-input>
                <b-form-invalid-feedback id="">
                  كلمه المرور غير متطابقه
                </b-form-invalid-feedback>
                  <hr/>
                <!-- add email -->
                <label>أدخل بريدك الالكترونى</label>
                <b-form-input
                  v-model="email"
                  id=""
                  type="text"
                  placeholder="البريد الالكترونى"
                  :state="emailState"
                required>
                </b-form-input>
                <b-form-invalid-feedback v-if="!emailState" id="">
                  الرجاء ادخال البريد الالكترونى بطريقه صحيحه
                </b-form-invalid-feedback>
                         <!--If Mail Exist-->
            <div v-if="mailExist" style="color: red;font-size: 12px;margin-top: 5px;padding-right: 3px;">
              تم استخدام هذا البريد الالكتروني مسبقاٌ
              </div>
                  <hr/>
                <!-- add phone number -->
                <label>أدخل رقم هاتفك</label>
                  <b-form-input
                  v-model="phone_number"
                  id=""
                  type="tel"
                  placeholder="رقم الهاتف"
                  maxlength="11"
                  :state="phoneState"
                  required>
                </b-form-input>
                <b-form-invalid-feedback  v-if="!phoneState" id="">
                  Enter at least 11 number
                </b-form-invalid-feedback>
                                  <!--If Phone Exist-->
                <div v-if="phoneExist" style="color: red;font-size: 12px;margin-top: 5px;padding-right: 3px;">
                  تم استخدام هذا الرقم مسبقاٌ
                  </div>
                  <hr/>
          <!-- address -->
                <label>أدخل عنوانك </label>
                <br />
                <div style="display:inline-flex">
                  <!-- govarnment -->
                  <div>
                    <label> المحافظة </label>
                    <b-select @change="governorateChanged" v-model="governorate"
                      placeholder="المحافظه" required>
                      <option v-for="governorate in governorates" :value="governorate.id">  &nbsp; &nbsp; &nbsp; {{governorate.name}}  </option>
                    </b-select>
                  </div>
                  <div class='mr-4'>
                    <label> المركز </label>
                    <b-select 
                      placeholder="المركز" v-model="reigon">
                      <option v-for="reigon in reigons">  &nbsp; &nbsp; &nbsp; {{ reigon.name }}  </option>
                    </b-select>
                  </div>
                </div>
                <br /> <br />
                <!-- address -->
                <diV>
                  <b-form-input v-model="address" id=""
                  type="text"
                  placeholder="العنوان"
                  :state="addressState"
                  required
                  >
                  </b-form-input>
                  <b-form-invalid-feedback id="">
                    Enter at least 10 letters
                  </b-form-invalid-feedback>
                </diV>
                  <hr/>
                <!-- add national id -->
                <label>ادخل ارقام حسابك البنكي <i class="fa fa-asterisk" aria-hidden="true" style="color:red; font-size: 10px;"></i> </label>
                <b-form-input v-model="bank_account_number" id=""
                              type="text"
                              placeholder="رقم الحساب البنكي"
                              :state="bankAccountState"
                              required>
                </b-form-input>
                <b-form-invalid-feedback v-if="!bankAccountState" id="">
                  Enter at least 4 numbers
                </b-form-invalid-feedback>
                <hr/>
              <!-- add national id -->
                <label>ادخل ارقام وصورة بطاقه الرقم القومى </label>
                <b-form-file  style="text-align:left;margin-top: 15px;" @change="onNationalIdChanged"   placeholder="أختار صورة..." accept="image/*" required></b-form-file>
                <b-form-input 
                  v-model="national_id_number" 
                  id=""
                  type="text"
                  placeholder="الرقم القومى"
                  maxlength="14"
                  :state="nIdState"
                required>
                </b-form-input>
                <b-form-invalid-feedback v-if="!nIdState" id="">
                  Enter at least 14 numbers
                </b-form-invalid-feedback>
                 <!-- IF National ID Already Exist -->
              <div v-if="nationalIdNumberExist" style="color:red;">تم استخدام هذا الرقم القومي مسبقاٌ</div>
                  <hr/>
          <!-- el segl al togary -->
                <label>ادخل صوره السجل التجاري </label>
                <!-- el segl photo -->
                <b-form-file style="text-align:left;margin-top: 15px;" @change="onSegelTogaryChanged"  placeholder="أختار صورة..." accept="image/*" required></b-form-file>
                  <hr/>
          <!-- el betakah aldaribyah -->
                <label>أدخل صوره البطاقه الضريبيه </label>
                <!-- el batakah photo -->
                <b-form-file style="text-align:left;margin-top: 15px;"  @change="onBtaqaDarebiaChanged" placeholder="أختار صورة..." accept="image/*" required></b-form-file>
                  <hr/>
                <label>بتسجيلك مع اوكا تكون قد وافقت على شروط وأحكام الشركة </label>
                <br />
            <!-- submit button -->
                <button  type="submit" class="btn btn-primary" style="width:310px; background-color: #0F3B51;">انشاء حساب</button>
              </form>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  name: "register",
  data() {
    return {
      name: "",
      email: "",
      phone_number: "",
      city: "",
      address: "",
      password: "",
      password_confirmation: "",
      profile_picture: "",
      national_id_number: "",
      bank_account_number: "",
      national_id: "",
      sgl_togary: "",
      btaqa_darebia: "",
      mailtaken: "",
      phonetaken: "",
      nationalIdNumberTaken: "",
      namestate: '',
      passwordstate: false,
      passconfirmstate: false,
      emailstate: false,
      phonestate: false,
      addressstate: false,
      bankAccountstate: false,
      nidstate: false,
      mailExist: false,
      phoneExist: false,
      nationalIdNumberExist: false,
      governorates: [],
      governorate: null,
      reigons: [], 
      reigon: '',
      governorateID: null
    };
  },
  computed: {
    nameState() {
      let nameTest = /[a-zA-Zء-ي]{4,}/;
      nameTest = nameTest.test(this.name);
      console.log(nameTest);
      if (this.name.length > 4 && nameTest == true) {
        this.namestate = true;
        return true;
      } else {
        if (this.name == "") {
          return false;
        } else {
          this.namestate = false;
          return false;
        }
      }
    },
    paswordState() {
      if (this.password.length > 5) {
        this.passwordstate = true;
        return true;
      } else {
        if (this.password == "") {
          return "dirty";
        } else {
          this.passwordstate = false;
          return false;
        }
      }
    },
    paswordConfirmationState() {
      if (this.password_confirmation == "") {
        return "dirty";
      } else if (this.password == this.password_confirmation) {
        this.passconfirmstate = true;
        return true;
      } else {
        this.passconfirmstate = false;
        return false;
      }
    },
    emailState() {
      let emailTest = /^[^<>()[\]\\,;:\%#^\s@\"$&!@]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/;
      emailTest = emailTest.test(this.email);
      console.log(emailTest);
      if (this.email.length > 9 && emailTest == true) {
        this.emailstate = true;
        return true;
      } else {
        if (this.email == "") {
          return "dirty";
        } else {
          this.emailstate = false;
          return false;
        }
      }
    },
    phoneState() {
      let phoneTest = /^\d{11}$/; //validatioin
      phoneTest = phoneTest.test(this.phone_number);
      console.log('phoneTest', phoneTest );
      if (this.phone_number.length > 10 && phoneTest == true) {
        this.phonestate = true;
        return true;
      } else {
        if (this.phone_number == "") {
          return "dirty";
        } else {
          this.phonestate = false;
          return false;
        }
      }
    },
    addressState() {
      if (this.address.length > 9) {
        this.addressstate = true;
        return true;
      } else {
        if (this.address == "") {
          return "dirty";
        } else {
          this.addressstate = false;
          return false;
        }
      }
    },
    bankAccountState() {
      if (this.bank_account_number.length > 3) {
        this.bankAccountstate = true;
        return true;
      } else {
        if (this.bank_account_number == "") {
          return "dirty";
        } else {
          this.bankAccountstate = false;
          return false;
        }
      }
    },
    nIdState() {
      if (this.national_id_number.length > 13) {
        this.nidstate = true;
        return true;
      } else {
        if (this.national_id_number == "") {
          return "dirty";
        } else {
          this.nidstate = false;
          return false;
        }
      }
    },
    
  },
  created() {
    axios
      .get(process.env.WEBSITE_URL + "/api/all-users/getCities")
      .then(response => {
        this.governorates = response.data.data;
        console.log(this.governorates);
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    registerSupplier() {
      if ( this.namestate == true && this.passwordstate == true && this.passconfirmstate == true && this.emailstate == true && this.phonestate == true && this.addressstate == true && this.bankAccountstate == true && this.nidstate == true && this.governorate != null) {
        this.$snotify.async(
          "لأنشاء حسابك",
          "برجاء الانتظار",
          () =>
            new Promise((resolve, reject) => {
              const formData = new FormData();
              formData.append("name", this.name);
              formData.append("email", this.email);
              formData.append("phone_number", this.phone_number);
              formData.append("city", this.reigon);
              formData.append("address", this.governorate);
              formData.append("password", this.password);
              formData.append("password_confirmation", this.password_confirmation);
              formData.append("profile_picture", this.profile_picture);
              formData.append("national_id_number", this.national_id_number);
              formData.append("bank_account_number", this.bank_account_number);
              formData.append("national_id", this.national_id);
              formData.append("sgl_togary", this.sgl_togary);
              formData.append("btaqa_darebia", this.btaqa_darebia);
              axios
              .post( process.env.WEBSITE_URL + "/api/suppliers/register", formData)
              .then(response => {
              console.log(response);
              if (response.data == "success") {
                console.log(response.data);
                setTimeout(
                  () =>
                    resolve({
                      title: "تم",
                      body: "أنشاء الحساب بنجاح",
                      timeout: 500,
                      config: {
                        timeout: 500,
                        position: "leftTop",
                        closeOnClick: true
                      }
                    }),
                  500
                );
              this.$router.push({ path: '/succesfulregister' });
              } else {
              if (response.data.email) {
                this.mailtaken = response.data.email[0];
                console.log("Ahmed", this.mailtaken);
                this.mailExist = true;
              }
              if (response.data.phone_number) {
                this.phonetaken = response.data.phone_number[0];
                this.phoneExist = true;
              }
              if (response.data.national_id_number) {
                this.nationalIdNumberTaken =
                  response.data.national_id_number[0];
                this.nationalIdNumberExist = true;
              }
              setTimeout(
                () =>
                  reject({
                    title: "خطأ",
                    body: "فى تسجيل الدخول",
                    timeout: 500,
                    position: "leftTop",
                    config: {
                      timeout: 500,
                      position: "leftTop",
                      closeOnClick: false
                    }
                  }),
                500
              );
            }
          })
          .catch(error => {
                  console.log(error.response);
                });
             })
        );
      } else {
        this.showDataWarning();
      }
    },
    showDataWarning() {
      this.$snotify.warning("ادخل البيانات بطريقه صحيحه", {
        timeout: 500,
        showProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        pauseOnHover: true,
        position: "leftTop"
      });
    },
    onProfilePictureChanged(event) {
      this.profile_picture = event.target.files[0];
    },
    onNationalIdChanged(event) {
      this.national_id = event.target.files[0];
    },
    onSegelTogaryChanged(event) {
      this.sgl_togary = event.target.files[0];
    },
    onBtaqaDarebiaChanged(event) {
      this.btaqa_darebia = event.target.files[0];
    },
    governorateChanged(e) {
      console.log(e)
      this.reigons = []
      this.governorates.map( 
        gov => { 
          if ( (gov.id) == e) {
            console.log( 'districts', gov.districts )
            this.reigons =  gov.districts 
          }
        })
      this.city = this.governorates[e-1].name
      console.log("reigons : ", this.reigons)
    }
  }
};
</script>
<style scoped lang="scss">
.register {
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: black;
  opacity: 0.5; /* Firefox */
}
#r-100 {
  background: #0f3b51;
  background: -webkit-linear-gradient(bottom, #0f3b51, #b31f3a);
  background: -o-linear-gradient(bottom, #0f3b51, #b31f3a);
  background: -moz-linear-gradient(bottom, #0f3b51, #b31f3a);
  background: linear-gradient(bottom, #0f3b51, #b31f3a);
}
</style>
