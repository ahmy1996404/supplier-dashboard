
<template lang="html">

  <section class="error-404 page">
    <div class="row"  style="text-align:right; display: flex; justify-content: flex-end;">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title mb-4">السائقين الشخصيين</h2>
            <div class="table-responsive" data-aos="flip-right" data-aos-delay="250">
              <div class="multiple-action" style=" direction: rtl;">

              <div class="search">

                <div class="input-group">
                  <input  style="border-radius:10px;"type="search" class="form-control" placeholder="البحث بأسم السائق او رقم الهاتف" v-model="search">
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
                    <th class="border-bottom-0">تحليل المخدرات</th>
                    <th class="border-bottom-0">السجل الإجرامي</th>
                    <th class="border-bottom-0"> الرخصة</th>
                    <th class="border-bottom-0">البطاقة الشخصية</th>
                    <th class="border-bottom-0">رقم الهاتف</th>
                    <th class="border-bottom-0" v-on:click.prevent="sortBy(ownDrivers,'status',NameState)">الحالة<i class="fa fa-sort float-right" aria-hidden="true"></i></th>
                    <th class="border-bottom-0" v-on:click.prevent="sortBy(ownDrivers,'name',NameState)">اسم السائق  <i class="fa fa-sort float-right" aria-hidden="true"></i></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="driver in filteredSup">
                    <td><div class="profile-image zoom"> <img v-img style=" border-radius: 100%; width: 100px; height: 100px" :src="website+'/storage/'+driver.drug_test" alt="image"/></div></td>
                    <td><div class="profile-image zoom"> <img v-img style="border-radius: 100%; width: 100px; height: 100px" :src="website+'/storage/'+driver.criminal_record" alt="image"/></div></td>
                    <td><div class="profile-image zoom"> <img v-img style="border-radius: 100%; width: 100px; height: 100px" :src="website+'/storage/'+driver.driving_licence" alt="image"/></div></td>
                    <td><div class="profile-image zoom"> <img v-img style="border-radius: 100%; width: 100px; height: 100px" :src="website+'/storage/'+driver.national_id" alt="image"/></div></td>

                    <td>{{driver.phone_number}}</td>
                    <td>

                      <label v-if="driver.approved==0" class="badge badge-warning">تحت المراجعة</label>
                      <label v-if="driver.approved==1" class="badge badge-teal">تمت الموافقة</label>
                      <label v-if="driver.approved==2" class="badge badge-danger">تم الرفض</label>

                    </td>
                    <td>{{driver.name}}</td>
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
  import test from './test.js';
export default {

  name: 'sup-drivers-requests',
  data(){

    return {
      statueFilters:['all','accept','wait','rejected'],
      searchStatue:'all',
      NameState:true,
      search:'',
      ownDrivers:[],
      website:process.env.WEBSITE_URL
    }
  },
  created(){
    this.getOwnDrivers();


  },
  // return this.ownDrivers.filter((driver)=>{
  //   if(this.searchStatue =='all'){
  //   return driver.name.match(this.search);
  //   }
  //   else if(this.searchStatue =='accept'){
  //   return String(driver.approved).match('1');
  //   }
  //   else if(this.searchStatue =='reject'){
  //   return String(driver.approved).match('2');
  //   }
  //   else if(this.searchStatue =='wait'){
  //   return String(driver.approved).match('0');
  //   }
  // });

  computed: {
    filteredSup:function(){
       if(this.searchStatue =='all'){
      return this.ownDrivers.filter((driver)=>{

        return driver.name.match(this.search)||driver.phone_number.match(this.search);


      //   if(this.selected=='name'){
      //     this.searchTag='البحث بأسم السائق';
      //     return driver.name.match(this.search);
      //   }
      // else if(this.selected=="phone"){
      //   this.searchTag='البحث برقم الهاتف';
      //   return driver.phone_number.match(this.search);
      // }
      });
       }
        else if(this.searchStatue =='accept'){
          return this.ownDrivers.filter((driver)=>{

              return (String(driver.approved).match('1') && driver.name.match(this.search))||(String(driver.approved).match('1') && driver.phone_number.match(this.search)) ;


          });
        }
        else if(this.searchStatue =='rejected'){
          return this.ownDrivers.filter((driver)=>{
            return (String(driver.approved).match('2') && driver.name.match(this.search))||(String(driver.approved).match('2') && driver.phone_number.match(this.search)) ;

          });
        }
        else if(this.searchStatue =='wait'){
          return this.ownDrivers.filter((driver)=>{
            return (String(driver.approved).match('0') && driver.name.match(this.search))||(String(driver.approved).match('0') && driver.phone_number.match(this.search)) ;


          });
        }
    },

  },
  methods:{
    // listView: function () {
    //   if (this.filterByName.length > 0 || this.filterByStatus.length > 0) {
    //     return this.ownDrivers.filter(function(item) {
    //       return this.filterByName.indexOf(item.name) > -1 || this.filterByStatus.indexOf(item.status) > -1;
    //     });
    //   } else {
    //     return this.ownDrivers;
    //   }
    // },
    sortBy(array, param,reverse) {
  			var filterA, filterB;
        this.NameState= !this.NameState;
  			return array.sort(function (a, b) {
  				switch (param) {
  					case 'id':
  						filterA = a.id;
  						filterB = b.id;
  						break;
  					case 'name':
  						filterA = a.name;
  						filterB = b.name;
  						break;

  					case 'status':
  						filterA = a.approved;
  						filterB = b.approved;
  						break;
  				}
  				if (reverse) {
  					return (filterA > filterB) ? 1 : -1;
  				} else {
  					return (filterA < filterB) ? 1 : -1;

  				}
  			});
  		},
    getOwnDrivers(){
      axios.get(process.env.WEBSITE_URL+"/api/drivers/getSupplierOwnDriver",headers()).then(
              response=>{
                this.ownDrivers=response.data;
                console.log(response);
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
</style>
