<template lang="html">
    <section class="error-404 page">
        <div class="row"  style="text-align:right; display: flex; justify-content: flex-end;">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title mb-4">عرض السيارات </h2>
                        <div class="alert alert-success" v-for="assign in driverAssigningMessages"> تم اختيار السائق وإضافته للسيارة </div> 
                        <div class="table-responsive" data-aos="flip-right" data-aos-delay="250">
                            <div class="multiple-action" style=" direction: rtl;">
                                <div class="search">
                                    <div class="input-group">
                                        <input  style="border-radius:10px;"type="search" class="form-control" placeholder="البحث برقم لوحه او رقم السياره" v-model="search">
                                        <!-- <span class="input-group-addon">
                                          <i class="fa fa-search"></i>
                                        </span> -->
                                    </div>
                                </div>
                                <div  style="margin:10px; margin-bottom: 30px;">
                                    </br>
                                    <input type="radio" id="all" value="all" v-model="searchStatue">
                                    <label class="badge badge-info" for="all" style="margin-left:15px;">الكل</label>
                                    <input type="radio" id="accept" value="accept" v-model="searchStatue">
                                    <label class="badge badge-teal" for="accept" style="margin-left:15px;">تمت الموافقة</label>
                                    <input type="radio" id="reject" value="rejected" v-model="searchStatue">
                                    <label class="badge badge-danger" for="reject" style="margin-left:15px;">تم الرفض</label>
                                    <input type="radio" id="wait" value="wait" v-model="searchStatue">
                                    <label class="badge badge-warning" for="wait" style="margin-left:15px;">تحت المراجعة</label>
                                </div>
                            </div>
                            <table id="dtBasicExample" style="text-align:center;" class="table center-aligned-table table-hover">
                                <thead>
                                <tr>
                                    <th class="border-bottom-0"> اضافه السائق</th>
                                    <th class="border-bottom-0">صوره الرخصة</th>
                                    <th class="border-bottom-0">موديل السياره</th>
                                    <th class="border-bottom-0">نوع السياره</th>
                                    <th class="border-bottom-0" >رقم السياره</th>
                                    <th class="border-bottom-0" >الحالة</th>
                                    <th class="border-bottom-0">رقم لوحه السياره</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="car in filteredSup">
                                    <td>
                                        <button type="button" @click="addModal(car)" class="btn btn-warning">اضافه</button>
                                    </td>
                                    <td><div class="profile-image zoom"> <img v-img style="border-radius: 100%; width: 100px; height: 100px" :src="website+'/storage'+car.car_license_image" alt="image"/></div></td>
                                    <td>{{car.car_model.car_type.title}}</td>
                                    <td>{{car.car_model.car_name}}</td>
                                    <td>{{car.number}}</td>
                                    <td>
                                        <label v-if="car.approved==0" class="badge badge-warning">تحت المراجعة</label>
                                        <label v-if="car.approved==1" class="badge badge-teal">تمت الموافقة</label>
                                        <label v-if="car.approved==2" class="badge badge-danger">تم الرفض</label>
                                    </td>
                                    <td>{{car.car_license}}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ///////////////////////////////////// add driver into car modal (popup)///////////////////////////////////////////////////////// -->
        <b-modal ref="addDriverModal"  @ok="submit" id="modallg" style="text-align: right;" tilte="اضافه سائق للسياره" size="md" >
          <div >
            <h2 style="float:right;">اضافه سائقين للسياره</h2>
          </div>
        </br>
          <div >
              <h6 style="margin-top:20px; color:#ced4da;"> رقم لوحه السياره <span>{{modalCarname}}</span></h6>
          </div>
          <div style="margin-top:50px;">
            <h6>برجاء اختيار السائقين لأضافتهم للسياره</h6>
            <div class="table-responsive" data-aos="flip-right" data-aos-delay="250">
              <table id="dtBasicExample" style="text-align:right;" class="table center-aligned-table table-hover">
                <thead>
                  <tr>
                    <th class="border-bottom-0">اسم السائق</th>
                    <th class="border-bottom-0">#</th>
                  </tr>
                </thead>
                <tbody>
                  <tr  v-for="driver in supDrivers"   onMouseOver="this.style.backgroundColor='#E2E5E8'"    onMouseout="this.style.backgroundColor='#F6F8FA'">
                    <td>{{driver.user.name}}</td>
                    <td>
                      <input  type="checkbox" :value="driver.id"   v-if="currentCarDrivers.car!=null&&currentCarDrivers.currentDrivers.includes(driver.id)"  checked="true"  v-model="currentCarDrivers.selectedDrivers" />
                      <input  type="checkbox" :value="driver.id"   v-if="currentCarDrivers.car!=null&&currentCarDrivers.currentDrivers.includes(driver.id)!=true"   v-model="currentCarDrivers.selectedDrivers" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </b-modal>
    </section>
</template>
<script lang="js">
    import axios from "axios"
    import  headers  from '../../functions/header'
    export default {
        name: 'sup-car-requests',
        data(){
            return {
                statueFilters:['all','accept','wait','rejected'],
                searchStatue:'all',
                NameState:true,
                search:'',
                ownCars:[],
                website:process.env.WEBSITE_URL,
                modalCarname:'', // temp for get car license in vue on click at the car
                supDrivers:null,
                selectedDrivers:[], // السائقين اللى اختارهم من checkbox
                currentCarDrivers:{
                    car:null,
                    currentDrivers:[],
                    selectedDrivers:[]
                },
                driverAssigningMessages: []
            }
        },
        created(){
            this.getOwnCars();
        },
         computed: {
        filteredSup:function(){
            if(this.searchStatue =='all'){
                return this.ownCars.filter((car)=>{
                    return car.car_license.match(this.search)||car.number.match(this.search);
                });
            }
            else if(this.searchStatue =='accept'){
                return this.ownCars.filter((car)=>{
                    return (String(car.approved).match('1') && car.car_license.match(this.search))||(String(car.approved).match('1') && car.number.match(this.search)) ;
                });
            }
            else if(this.searchStatue =='rejected'){
                return this.ownCars.filter((car)=>{
                    return (String(car.approved).match('2') && car.car_license.match(this.search))||(String(car.approved).match('2') && car.number.match(this.search)) ;
                });
            }
            else if(this.searchStatue =='wait'){
                return this.ownCars.filter((car)=>{
                    return (String(car.approved).match('0') && car.car_license.match(this.search))||(String(car.approved).match('0') && car.number.match(this.search)) ;
                });
            }
        },
        },
        methods:{
   ////////////////// on click at add driver on table//////////////////////////////////////////////////////////////////////
            addModal:function (car) {
                this.currentCarDrivers.selectedDrivers=[];
                this.modalCarname=car.car_license;
                car.can_drive.forEach(function (driver) {
                    this.currentCarDrivers.selectedDrivers.push(driver.id);
                },this);
                this.currentCarDrivers.car=car;
                this.$refs.addDriverModal.show();
            },
  ////////////////// on click at show driver on table/////////////////////////////////////////////////////////////////////
            showModal:function (car) {
              this.modalCarname=car.car_license;
                this.$refs.showDriverModal.show()
            },
            submit(){
                axios.post(process.env.WEBSITE_URL+"/api/cars/assignCarsToDriver",{cars:this.currentCarDrivers.car.id,drivers:this.currentCarDrivers.selectedDrivers},headers()).then(
                        response=>{
                            this.driverAssigningMessages.push(' تمت إضافة السائق للسيارة ')
                        }
                ).catch(
                        err=>{
                            console.log(err);
                        }
                );
                this.getOwnCars();
            },
            getOwnCars(){
                axios.get(process.env.WEBSITE_URL+"/api/cars/getSupplierFullCarData",headers()).then(
                        response=>{
                            this.ownCars=response.data.cars;
                            this.supDrivers=response.data.drivers;
                            console.log('cars response', response);
                        }
                ).catch(
                        err=>{
                            console.log(err);
                        }
                );
            },
        },
    }
</script>
<style scoped lang="scss">
    .error-404 {
    }
    .zoom:hover {
        -webkit-transition: transform .1s ease-in-out;
        transform: scale(1.119); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    }
    .search {
    // display: inline-block;
        vertical-align: top;
        zoom: 1; /* Fix for IE7 */
        *display: inline; /* Fix for IE7 */
        max-width: 560px;
    }
    .table-hover tbody tr:hover {
    background-color: #F6F8FA;
}
</style>
