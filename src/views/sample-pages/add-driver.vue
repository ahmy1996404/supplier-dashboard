<template lang="html">

  <section class="register page">
    <div class="wrapper d-flex align-items-center auth register-full-bg">
      <div class="row w-100">
        <div class="col-lg-6 mx-auto">
          <div class="auth-form-light text-right p-5">
            <h2>أضافه سائق</h2>
            <h2 class="font-weight-light"></h2>
            <form class="pt-4">
              <form v-on:submit.prevent="addDriver">
                <div class="form-group">
                  <label for="exampleInputEmail1"> اسم السائق</label>
                  <b-form-input  type="text" class="form-control" id="name" aria-describedby="emailHelp" style="padding-right:0px" v-model="name" @input="nameState" placeholder="الاسم بالكامل" required></b-form-input>
                  <i class="mdi mdi-account"></i>
                </div>
                <b-alert variant="danger" :show='namestate == false' >
                         أدخل الاسم الكامل للسائق  
                </b-alert>
                <div class="form-group">
                  <label for="phone">رقم الهاتف</label>
                  <div style="display:flex;justify-content: flex-end;">
                      <b-form-input id="phone" class="form-control" style="padding-right:0px" placeholder="رقم الهاتف"  v-model="phone_number" @input="phoneState" type="tel" maxlength="11" required></b-form-input>
                  </div>


                  
                  <!-- <input type="password" class="form-control" id="exampleInputPassword1" style="padding-right:0px" placeholder="Password"> -->
                  <i class="mdi  mdi-cellphone-android"></i>
                </div>
                <b-alert variant="danger" :show='phonestate == false' >
                          أدخل رقم هاتف السائق   
                </b-alert>
                <b-alert variant="danger" :show='phonenumberchecking == false' >
                          أدخل رقم هاتف السائق المكون من أرقام فقط   
                </b-alert>
      
                <div class="form-group">
                  <label for="driving_licence">اضف صوره الرخصه</label>
                  <b-form-file style="text-align:left;margin-top: 15px;" id="driving_licence" @change="onDriverLicenseChanged"   placeholder="اختار صورة" accept="image/*" required></b-form-file>
                  </div>
                  <div class="form-group">
                    <label for="national_id">أضف صوره بطاقه الرقم القومى</label>
                    <b-form-file style="text-align:left;margin-top: 15px;" id="national_id"  @change="onNationalIdChanged"   placeholder="اختار صورة" accept="image/*" required></b-form-file>
                    </div>
                <div class="form-group">
                  <label for="criminal_record"> صورة السجل الإجرامي</label>
                  <b-form-file style="text-align:left;margin-top: 15px;" id="criminal_record" @change="onCriminalRecordChanged"   placeholder="اختار صورة" accept="image/*" required></b-form-file>
                </div>
                <div class="form-group">
                  <label for="drug_test">أضف صوره تحليل المخدرات</label>
                  <b-form-file style="text-align:left;margin-top: 15px;" id="drug_test" @change="onDrugTestChanged"  placeholder="اختار صورة" accept="image/*" required></b-form-file>
                </div>
                <div class="mt-5">
                    <button type="submit" class="btn btn-block btn-primary btn-lg font-weight-medium">إضافة</button>

                </div>
              </form>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
  import headers from '../../functions/header'
  import axios from 'axios'
export default {
  name: 'add-driver',
  data(){
    return {
      name:"",
      phone_number:"",
      driving_licence:"",
      national_id:"",
      criminal_record:"",
      drug_test:"",
      namestate: true,
      phonestate:true,
      phonenumberchecking: null 
    }
  },  
  computed: {
    
    },
  methods:{
    nameState () {
          if(this.name.length > 4){
              this.namestate =true;
            }
          else if(this.name==""){
            this.namestate = false
          }else{
            this.namestate =false;
          }
          },
        phoneState () {

          let phonetest = /^\d{11}$/;
          console.log( phonetest.test(this.phone_number))

          if( (phonetest.test(this.phone_number)) == true ){
              phonenumberchecking = false
              console.log('test false')
          }else{
            phonenumberchecking = null
            console.log('test null')
          }

          if(this.phone_number.length > 10){
              this.phonestate =true;
            }
          else if(this.phone_number=="")
            {
              this.phonestate =false;
            }
          else{
            this.phonestate =false;
          }
        
      },
    addDriver(){
       if(this.namestate ==true && this.phonestate == true){
         this.$snotify.async('لاضافه السائق', 'برجاء الانتظار', () => new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('phone_number', this.phone_number);
      formData.append('driving_licence', this.driving_licence);
      formData.append('national_id', this.national_id);
      formData.append('criminal_record', this.criminal_record);
      formData.append('drug_test', this.drug_test);
      axios.post(process.env.WEBSITE_URL+'/api/drivers/addSupplierOwnDriver',formData,headers()).then(response=>{
        console.log(response);
        if (response.data=="success"){
          setTimeout(() => resolve({
                  title: 'تم',
                  body: 'اضافه السائق ينجاح',
                  timeout:500,
                  config: {
                    timeout:500,
                    position: "leftTop",
                    closeOnClick: true
                  }
                }), 500);
          // this.showSuccessPost();
          this.$router.push('/supOwnDriversReq/');
        }
        else {
          setTimeout(() => reject({
          title: 'خطأ',
          body: 'اضافه السائق',
            timeout:2000,
            position: "leftTop",
          config: {
            timeout:2000,
            position: "leftTop",
            closeOnClick: false
          }
        }), 2000);
          // this.showFieldPost();
        }
      }).catch(
              error=>{
                setTimeout(() => reject({
                title: 'خطأ',
                body: 'فى اضافه السائق',
                  timeout:2000,
                  position: "leftTop",

                config: {
                  timeout:2000,
                  position: "leftTop",
                  closeOnClick: false
                }
              }), 2000);
                // this.showFieldPost();

                console.log(error.response);
              }
      );
    }));
    }
    else{
      this.showDataWarning();
    }
  },
    onDriverLicenseChanged(event){
      this.driving_licence=event.target.files[0];
    },
    onNationalIdChanged(event){
      this.national_id=event.target.files[0];
    },
    onCriminalRecordChanged(){
      this.criminal_record=event.target.files[0];
    },
    onDrugTestChanged(){
      this.drug_test=event.target.files[0];
    },
    showDataWarning(){
      this.$snotify.warning('ادخل البيانات بطريقه صحيحه', {
      timeout: 2000,
      showProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
        pauseOnHover:true,
      position: "leftTop"
    });
  },
  showFieldPost(){
    this.$snotify.error('خطاء فى اضافه السائق', {
    timeout: 2000,
    showProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    pauseOnHover:true,
    position: "leftTop"
  });
},
  showSuccessPost(){
    this.$snotify.success(" تم تسجيل بيانات "+this.name+" بنجاح ", {
    timeout: 2000,
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
.auth form .form-group .form-control {
  text-align: right;
}
.register {
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: black;
  opacity: 0.5; /* Firefox */
}
</style>
