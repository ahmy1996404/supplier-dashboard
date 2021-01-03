<template>
    
 <section class="error-404 page">
    <div class="row"  style="text-align:right; display: flex; justify-content: flex-end;">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title mb-4"> سائقين أوكا </h2>
            <div class="table-responsive" data-aos="flip-right" data-aos-delay="250">
              <div class="multiple-action" style=" direction: rtl;">

              </div>

              <table id="dtBasicExample" style="text-align:center;" class="table center-aligned-table table-hover">
                <thead>
                  <tr>
                    <th class="border-bottom-0">تحليل المخدرات</th>
                    <th class="border-bottom-0">السجل الإجرامي</th>
                    <th class="border-bottom-0"> الرخصة</th>
                    <th class="border-bottom-0">البطاقة الشخصية</th>
                    <th class="border-bottom-0">رقم الهاتف</th>
                    <th class="border-bottom-0" v-on:click.prevent="sortBy(ownDrivers,'name',NameState)">اسم السائق  <i class="fa fa-sort float-right" aria-hidden="true"></i></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="driver in okaDrivers">
                    <td><div class="profile-image zoom"> <img v-img style=" border-radius: 100%; width: 100px; height: 100px" :src="website+'/'+driver.drug_test" alt="image"/></div></td>
                    <td><div class="profile-image zoom"> <img v-img style="border-radius: 100%; width: 100px; height: 100px" :src="website+'/'+driver.criminal_record" alt="image"/></div></td>
                    <td><div class="profile-image zoom"> <img v-img style="border-radius: 100%; width: 100px; height: 100px" :src="website+'/'+driver.driving_licence" alt="image"/></div></td>
                    <td><div class="profile-image zoom"> <img v-img style="border-radius: 100%; width: 100px; height: 100px" :src="website+'/'+driver.national_id" alt="image"/></div></td>

                    <td>{{driver.user.phone_number}}</td>
                    <td>{{driver.user.name}}</td>
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

<script>
    import axios from 'axios'
import  headers  from '../../functions/header'

    export default {
        data() {
            return {
                okaDrivers: null,
                website:process.env.WEBSITE_URL
            }
        },
        created () {
             axios.get(process.env.WEBSITE_URL+'/api/suppliers/getDriverOka',headers())
            .then ( response => this.okaDrivers = response.data.data   )
            .catch ( error => console.log(error) )

            console.log('oka drivers', this.okaDrivers)
        },
    }
</script>

<style lang="scss" scoped>

</style>