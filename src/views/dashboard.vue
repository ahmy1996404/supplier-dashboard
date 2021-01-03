<template lang="html">
  <section class="dashboard page"  >
    <div class="grid" data-aos="fade-fade-right" data-aos-delay="250">
      <figure class="effect-duke">
        <!--
        <img src="../assets/images/936857.jpg" style="width: 100%;margin-top: -26px" alt="img17"/>
        -->
        <figcaption>
          <h2 style="color:white;font-size: 2.4rem;">OKA <span>TRUCK</span></h2>
          <p style="color:white"> اتحكم بوقتك و يومك وحياتك وكن مسئولا عن عملك  وحقق اهدافك بشروطك مع اوكا</p>
          <a href="#">View more</a>
        </figcaption>
      </figure>
    </div>
    <!-- <div style="direction:rtl;">
      <div class="col-1">
        <div class="profile-image" style="margin-top: -100px;
    margin-right: 20px;" >
          <img  style="width:180px; height:180px; border-radius:100%;" src="../assets/images/faces/face4.jpg" alt="image"/>
          <span class="online-status online"></span>
        </div>
      </div>
    </div> -->
    <div class="row" data-aos="fade-right" data-aos-delay="250">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card  hvr-icon-pop ">
        <div class="card card-statistics  zoom">
          <div class="card-body ">
            <div class="clearfix">
              <div class="float-left">
                <i class="fa fa-users text-info  hvr-icon icon-md"></i>
              </div>
              <div class="float-right ">
                <p class="card-text text-right">أجمالى عدد السائقين</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{dashboardData.driverWithSupplier + dashboardData.numberOfOwnDrivers}}</h3>
                </div>
              </div>
            </div>
            <p class="">
              <!-- <i class="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i> اجمالى عدد السائقين التي يمتلكهم الم -->
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 grid-margin hvr-icon-up stretch-card">
        <div class="card card-statistics zoom">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <i class="fa fa-truck fa-flip-horizontal text-danger hvr-icon icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">أجمالى عدد السيارات</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{dashboardData.carSuppliers}}</h3>
                </div>
              </div>
            </div>
            <p class="text-muted mt-3">
              <!-- <i class="mdi mdi-bookmark-outline mr-1" aria-hidden="true"></i> Product-wise sales -->
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 grid-margin hvr-icon-buzz-out stretch-card">
        <div class="card card-statistics zoom hvr-shutter-out-horizontal">
          <div class="card-body" style="">
            <div class="clearfix">
              <div class="float-left">
                <i class="fa fa-bell text-warning icon-lg hvr-icon"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">طلبات اضافه سائقين  </p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{dashboardData.requestDrivers}}</h3>
                </div>
              </div>
            </div>
            <p class="text-muted mt-3">
              <!-- <i class="mdi mdi-calendar mr-1" aria-hidden="true"></i> Weekly Sales -->
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 grid-margin hvr-icon-drop stretch-card ">
        <div class="card card-statistics zoom hvr-shutter-out-horizontal">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <i class="fa fa-money  text-teal  icon-lg  hvr-icon"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">المحفظه</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{dashboardData.wallet}}</h3>
                </div>
              </div>
            </div>
            <p class="text-muted mt-3">
              <!-- <i class="mdi mdi-reload mr-1" aria-hidden="true"></i> Product-wise sales -->
            </p>
          </div>
        </div>
      </div>
       <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 grid-margin hvr-icon-drop stretch-card ">
        <div class="card card-statistics zoom hvr-shutter-out-horizontal">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <i class="fa fa-money  text-teal  icon-lg  hvr-icon"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right"> عدد السواقين النشطين الان </p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{dashboardData.onlineDrivers}}</h3>
                </div>
              </div>
            </div>
            <p class="text-muted mt-3">
              <!-- <i class="mdi mdi-reload mr-1" aria-hidden="true"></i> Product-wise sales -->
            </p>
          </div>
        </div>
      </div>
       <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 grid-margin hvr-icon-drop stretch-card ">
        <div class="card card-statistics zoom hvr-shutter-out-horizontal">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <i class="fa fa-money  text-teal  icon-lg  hvr-icon"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">عدد الرحلات</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{dashboardData.totalTrips}}</h3>
                </div>
              </div>
            </div>
            <p class="text-muted mt-3">
              <!-- <i class="mdi mdi-reload mr-1" aria-hidden="true"></i> Product-wise sales -->
            </p>
          </div>
        </div>
      </div>
    </div>
    		<figure class="effect-apollo" data-aos="fade-right" data-aos-delay="250">
    <div class="row zoom" style="text-align:right;">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body " style="margin-top: 75px;
    margin-bottom: 150px;">
            <h5 class="card-title mb-4">معلوماتى الشخصية</h5>
            <div class="row" style=" float: right;">
              <div class="col-9" style="margin-top:20px;margin: auto">
                <div class="profile-name">
                  <h5 class="name">{{user.name}}</h5>
                  <hr style="display:none" />
                </div>
                <div div class="d-flex" style="padding-right: 0px;float: right; margin-top:40px;     direction: rtl;">
                  <p class="font-weight-medium mr-1 mb-0" style="min-width:55px">رقم الهاتف</p>
                  <p style="color: #0F3B51;margin-left: 40px;" class="font-weight-bold mr-2 mb-0 no-wrap">{{user.phone_number}}</p>
                </div>
                <div div class="d-flex" style="padding-right: 0px;float: right; margin-top:40px;     direction: rtl;">
                  <p class="font-weight-medium mr-1 mb-0" style="min-width:100px"> البريد الالكترونى</p>
                  <p  style="margin-left:40px; color: #0F3B51" class="font-weight-bold mr-2 mb-0 no-wrap">{{user.email}}</p>
                  <br />
                </div>
                <div div class="d-flex" style="padding-right: 0px;float: right; margin-top:40px; direction: rtl;">
                  <p class="font-weight-medium mr-1 mb-0" style="">العنوان </p>
                  <p  style="margin-left:40px; color: #0F3B51" class="font-weight-bold mr-2 mb-0 no-wrap"> {{user.address}} - {{user.addressUser}} - {{user.city}}</p>
                  <br />
                </div>
              </div>
              <div class="col-1" style="margin: auto;padding-right: 117px;">
                <div class="profile-image" style="margin: auto;">
                      <img  style="width:150px; height:150px; border-radius:100%;" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="image"/>
                  <span class="online-status online"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </figure>
    <!--
    <GChart
      type="ColumnChart"
      :data="chartData"
      :options="chartOptions"
    />
    -->
  </section>
</template>
<script lang="js">
import { GChart } from 'vue-google-charts'
import axios from "axios"
import  headers  from '../functions/header'

export default {
  name: 'dashboard',
  data(){
    return{
      user:{
        'name':'asd',
        'phone_number':'01151511515',
        'email':'adadsad@adsa',
        'address':'sa',
        'addressUser':'asdad',
        'city':'asdad'



      },
       chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      },
      dashboardData: {
        'driverWithSupplier':1,
        'numberOfOwnDrivers':1,
        'carSuppliers':1,
        'requestDrivers':2,
        'wallet':500,
        'onlineDrivers':1,
        'totalTrips':2





      }
  }
  },
  // created() {
  //
  //   axios.get(process.env.WEBSITE_URL+"/api/suppliers/dashboardSupplier",headers())
  //   .then ( (response) => {
  //     this.dashboardData =  response.data.data
  //   })
  //   .catch( (error) => console.log(error) )
  //
  //   axios.get(process.env.WEBSITE_URL+'/api/suppliers/getUserInfo',headers())
  //               .then(response=>{
  //                   this.user = response.data;
  //               })
  //               .catch(error=>{
  //                       console.log('error')
  //               });
  //   console.log('hj')
  //   },
  // computed:{
  //     image(){
  //       return process.env.WEBSITE_URL+'/storage/'+this.user.image;
  //   },
  //   components: {
  //     GChart
  //   }
  // }
}
</script>
// <style scoped lang="scss">
// .container-fluid {
//   background: #F6F8FA;
//
// }
// .page-body-wrapper{
//   background: #F6F8FA;
// }
//
</style>
