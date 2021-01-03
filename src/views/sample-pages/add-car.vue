<template lang="html">
  <section class="register page">
    <div class="wrapper d-flex align-items-center auth register-full-bg">
      <div class="col-lg-6 mx-auto">
        <div class="auth-form-light text-right p-5">
        <div class="card-body">
          <h2 class="card-title">أضافه سياره</h2>
          <!-- <p class="card-description">
            Basic form elements
          </p> -->
          <form v-on:submit.prevent="addCar" class="forms-sample">
            <b-form-group label="رقم لوحه السياره"  label-for="input5">
              <b-form-input type="text" id="car_license" style="padding-right: 0px;" placeholder="اضف ارقام لوحه السياره" v-model.lazy="car_license" :state="plateState" required></b-form-input>
              <b-form-invalid-feedback id="">
                <!-- This will only be shown if the preceeding input has an invalid state -->
                أرقام اللوحة خمس أرقام على الأقل
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group label="رقم السياره"  label-for="input5">
              <b-form-input type="text" id="number" style="padding-right: 0px;" placeholder="اضف رقم السياره" v-model.lazy="number" :state="carNumState" required></b-form-input>
              <b-form-invalid-feedback id="">
                <!-- This will only be shown if the preceeding input has an invalid state -->
                أرقام اللوحة خمس أرقام على الأقل
              </b-form-invalid-feedback>
            </b-form-group>
            <label > نوع السياره</label>
              <b-select v-model="carModels" required @change="updateModels">
                <option  value="" selected>Choose Car Type</option>
                <option v-for="carCategorie in carCategories"  :value="carCategorie.car_model">{{carCategorie.title}}</option>
              </b-select>
              <label >موديل السياره</label>
              <b-select v-model="car_model_id"   id="car_model_id" required >
                <option  value="" selected>Choose Car Model</option>
                <option v-for="carModel in carModels" :value="carModel.id">{{carModel.car_name}}</option>
              </b-select>
            <b-form-group label="صوره رخصه السياره" label-for="input8">
              <b-form-file  @change="carLicenseImageChanged" id="car_license_image" style="text-align:left;" placeholder="Choose a pic..."  accept="image/*" required></b-form-file>
            </b-form-group>
            <button type="submit" class="btn btn-block btn-primary btn-lg font-weight-medium">إضافة</button>
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
  name: 'add-car'
,  data () {
    return{
      car_license:"",
      carModels:[],
      car_model_id:'',
      car_type_id:'',
      carCategories:['نصف نقل','نقل','ربع نقل'],
      car_license_image:'',
      number:'',
      platestate:false,
      carnumState:false
    }
  },
    computed: {
        plateState () {
          if(this.car_license.length > 4){
            this.platestate =true;
            return true
          }
          else{
            if(this.car_license.length=="")
            {
            return "dirty"
            }else{
            this.platestate =false;
            return false
          }
          }
        },
          carNumState () {
            if(this.number.length > 4){
              this.carnumState =true;
              return true
            }
            else{
              if(this.number.length=="")
              {
              return "dirty"
              }else{
              this.carnumState =false;
              return false
            }
            }
            }
      },created(){
                axios.get(process.env.WEBSITE_URL+'/api/cars/getCarsTypesAndModels',headers()).then(response=>{
                  this.carCategories=response.data;
                  this.carModels=this.carCategories[0].car_model;
                }).catch(
                        error=>{}
              );
    axios.get(process.env.WEBSITE_URL+'/api/cars/getSupplierFullCarData',headers()).then(response=>{
     console.log(response.data);
    }).catch(
            error=>{}
    );
      },
      methods:{
        onSubmit:function () {
          this.submitted =true;
          if(this.platestate ==true){
          alert('submitted')
        }
      },
      addCar(){
        this.$snotify.async('لاضافه سياره ', 'برجاء الانتظار', () => new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('car_license', this.car_license);
        formData.append('car_model_id', this.car_model_id);
        formData.append('car_license_image', this.car_license_image);
        formData.append('number', this.number);
        axios.post(process.env.WEBSITE_URL+'/api/cars/addCar',formData,headers()).then(response=>{
        console.log(response.data);
            setTimeout(() => resolve({
                    title: 'تم',
                    body: 'اضافه السياره ينجاح',
                    config: {
                      closeOnClick: true
                    }
                  }), 500);
                  this.$router.push('/supOwnCars/');
        })
        .catch(
                error=>{
                  console.log('erroe 2')
                  setTimeout(() => reject({
                  title: 'خطأ',
                  body: 'فى اضافه السياره',
                    position: "leftTop",
                  config: {
                    timeout:500,
                    position: "leftTop",
                    closeOnClick: false
                  }
                }), 500);
                  console.log(error.response);
                }
        );
          }));
      },
      carLicenseImageChanged(event){
        this.car_license_image=event.target.files[0];
      },
      showDataWarning(){
          this.$snotify.warning('ادخل البيانات بطريقه صحيحه', {
        timeout: 500,
        showProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
          pauseOnHover:true,
        position: "leftTop"
      });
    },
    showFieldPost(){
        this.$snotify.error('خطأ فى اضافه السياره', {
      timeout: 500,
      showProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
        pauseOnHover:true,
      position: "leftTop"
    });
  },
    showSuccessPost(){
        this.$snotify.success("  تم تسجيل بيانات "+this.car_license+" بنجاح ", {
      timeout: 2000,
      showProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
        pauseOnHover:true,
      position: "leftTop"
    });
    },
        updateModels(){
          console.log(this.carModels);
        }
  }
}
</script>
<style scoped lang="scss">
.auth form .form-group .form-control {
  text-align: right;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: black;
  opacity: 0.5; /* Firefox */
}
.register {
}
</style>
