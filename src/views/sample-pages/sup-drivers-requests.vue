<template lang="html">
  <section class="error-404 page">
    <div class="row"  style="text-align:right; display: flex; justify-content: flex-end;">
      <div class="col-12 grid-margin">
        <div v-for="message in successMessagesAlerts" class="alert alert-success text-center" role="alert">
            <strong class="">{{message}}</strong>
        </div>
        <div v-for="error in errorsMessagesAlerts" class="alert alert-danger text-center" role="alert">
            <strong> {{error}} </strong> 
        </div>
        <div class="card">
          <div class="card-body">
            <h2 class="card-title mb-4">طلبات اضافه سائقين</h2>
            <div class="table-responsive" data-aos="flip-right" data-aos-delay="250">
              <div v-if="driverApproveStatus" class="alert alert-primary text-center"> {{driverApproveStatus}} </div>
              <table  class="table center-aligned-table ">
                <thead>
                  <tr>
                    <th class="border-bottom-0"> رفض الطلب </th>
                    <th class="border-bottom-0"> موافقة على الطلب </th>
                    <th class="border-bottom-0">المنطقه</th>
                    <th class="border-bottom-0">رقم الهاتف</th>
                    <th class="border-bottom-0">اسم السائق</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="request in driversRequests" :key="">
                    <td><a href="#" @click='rejectDriver(request)' class="btn btn-outline-danger btn-sm"> رفض </a></td>
                    <td><a href="#" @click='acceptDriver(request)' class="btn btn-outline-success btn-sm">تأكيد الطلب</a></td>
                    <td>{{request.user.city}}</td>
                    <td>{{request.user.phone}}</td>
                    <td>{{request.user.name}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="js">
import axios from "axios"
import  headers  from '../../functions/header'

export default {
  
  name: 'sup-drivers-requests',
  data() {
    return {
      driversRequests: [],
      driverApproveStatus: null,
      errorsMessagesAlerts: [],
      successMessagesAlerts: []
    }
  },
  created () {
    axios.get(process.env.WEBSITE_URL+"/api/suppliers/requestDrivers",headers())
    .then(
      response=>{
          this.driversRequests = response.data.data;
      }
    ).catch(
      err=>{
        console.log(err);
      }
    );
    this.driversRequests = null
  },
  methods: {
    acceptDriver(row) {
      axios.post(process.env.WEBSITE_URL+"/api/suppliers/acceptDriver",{
        driver_id: row.id,
        status: 1
      },headers() )
      .then( () => this.successMessagesAlerts.push(" تم قبول طلب السائق ") )
      .catch( () => this.errorsMessagesAlerts.push(" حدثث مشكلة أثناء قبول طلب السائق ") ) 
    },
    rejectDriver(row){
      axios.post(process.env.WEBSITE_URL+"/api/suppliers/acceptDriver",{
        driver_id: row.id,
        status: 0
      }, headers())
      .then( () => this.successMessagesAlerts.push(" تم رفض طلب السائق ")  )
      .catch( () => this.errorsMessagesAlerts.push(" حدثث مشكلة أثناء قبول طلب السائق ") )
    }
  },
}
</script>
<style scoped lang="scss">
.error-404 {
}
</style>
