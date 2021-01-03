<template lang="html">

  <!--
  <section>
    <nav class="sidebar navbar-expand-lg  sidebar-offcanvas" style="position: fixed; top: 0;" id="sidebar">
      <a href class="navbar-toggler" data-toggle="collapse" data-target=".sidebar">
        <span class="navbar-toggler-icon"></span>
        </a>
      <ul class="nav navbar-right sidebar">
        <li class="nav-item" style="text-align: -webkit-center;margin-bottom: 15px;" >
          <a 
            class="navbar-brand  brand-logo" v-on:click="rotateIcon()"
          >
          <img id="image"  style="width: 45px;
            height: auto;" src="../../assets/images/Logo2.png" alt="logo"
          /></a>
        </li>
        <li class="nav-item nav-profile">
          <div class="nav-link">
            <div class="profile-image"> <img class="zoom" :src="supImg" /> <span class="online-status online zoom"></span> </div>
            <div class="profile-name">
              <p class="name">{{supName}}</p>
              <p class="designation">مقاول</p>
              <div class="badge badge-teal mx-auto mt-3 zoom">متصل</div>
            </div>
          </div>
        </li>
        <li style="direction: rtl;" 
        class="nav-item zoom"
        >
        <router-link 
        class="nav-link" 
        to="/">
        <i class="fa fa-home menu-icon" style="color:#0c2f40; opacity:.9;" aria-hidden="true"></i>
        <span 
        class="menu-title">الصفحه الرئيسيه</span></router-link></li>
        <li style="direction: rtl;" class="nav-item item-menu zoom"><router-link class="nav-link" to="/addDriver/" ><i class="fa fa-user-plus menu-icon" style="color:#0c2f40; opacity:.9;" aria-hidden="true"></i><span class="menu-title">أضافه سائق</span></router-link></li>
        <li style="direction: rtl;" class="nav-item item-menu zoom"><router-link class="nav-link" to="/addCar/"><i class="fa fa-truck fa-flip-horizontal menu-icon" style="color:#0c2f40; opacity:.9;" aria-hidden="true"></i><span class="menu-title">اضافه سياره</span></router-link></li>
        <li style="direction: rtl;" class="nav-item item-menu zoom"><router-link class="nav-link" to="/supDriversReq/"><i class="fa fa-bell menu-icon" style="color:#0c2f40; opacity:.9;" aria-hidden="true"></i><span class="menu-title">طلبات اضافه سائق</span>  <b-badge pill variant="success" style="margin:auto">{{dashboardData.requestDrivers}}</b-badge></router-link></li>
        <li style="direction: rtl;" class="nav-item item-menu zoom"><router-link class="nav-link" to="/supOwnDriversReq/"><i class="fa fa-users menu-icon" style="color:#0c2f40; opacity:.9;" aria-hidden="true"></i><span class="menu-title">السائقين الشخصيين</span> </router-link></li>
        <li style="direction: rtl;" class="nav-item item-menu zoom"><router-link class="nav-link" to="/okadrivers/"><i class="fa fa-users menu-icon" style="color:#0c2f40; opacity:.9;" aria-hidden="true"></i><span class="menu-title"> سائقين أوكا </span> </router-link></li>
        <li style="direction: rtl;" class="nav-item item-menu zoom"><router-link class="nav-link" to="/supOwnCars/"><i class="fa fa-table menu-icon" style="color:#0c2f40; opacity:.9;" aria-hidden="true"></i><span class="menu-title">عرض السيارات</span> </router-link></li>
        <li style="direction: rtl;" class="nav-item item-menu zoom"><router-link class="nav-link" to="/wallet/"><i class="fa fa-credit-card-alt" style="color:#0c2f40; opacity:.9;" aria-hidden="true"></i><span class="menu-title" style="margin-right: 15px;"> المحفظة </span> </router-link></li>

      </ul>
    </nav>
  </section>
  -->
<div>
  <div class="s-layout">
    <div class="s-layout__sidebar">

      <a class="s-sidebar__trigger" href="#">
        <i @click="toggleSidebar" class="fa fa-bars"></i>
      </a>

      <nav class="s-sidebar__nav text-center" :style="isSidebarOpen ? 'width: 15em' : 'width:0em'">
        <ul>
          <li>
            <div class="nav-link">
            <div class="profile-image"> 
              <!--  ../../assets/images/Logo2.png -->
              <img class="zoom" style="width: 45px; height: auto;" :src="supImg" /> <span class="online-status online zoom"></span> </div>
            <div class="profile-name">
              <p class="name text-primary pt-4">{{supName}}</p>
              <div class="badge badge-teal mx-auto mt-3 zoom">متصل</div>
            </div>
          </div>
          </li>
          
            <li class="">
              <router-link class="s-sidebar__nav-link" to="/">
                  <i class="fa fa-home"></i><em> الصفحة الرئيسية </em>
              </router-link>
            </li>
            <li>
              <router-link class="s-sidebar__nav-link" to="/addDriver/">
                <i class="fa fa-user-plus"></i><em>أضافه سائق</em>
              </router-link>
            </li>
            <li>
              <router-link class="s-sidebar__nav-link" to="/addCar/">
                  <i class="fa fa-truck fa-flip-horizontal"></i><em>اضافه سياره</em>
              </router-link>
            </li> 
            <li>
              <router-link class="s-sidebar__nav-link" to="/supDriversReq/">
                  <i class="fa fa-bell "></i><em>طلبات اضافه سائق</em>
              </router-link>
            </li>
             <li>
              <router-link class="s-sidebar__nav-link" to="/supOwnDriversReq/">
                  <i class="fa fa-users"></i><em>السائقين الشخصيين</em>
              </router-link>
            </li>
             <li>
              <router-link class="s-sidebar__nav-link" to="/okadrivers/">
                  <i class="fa fa-users"></i><em>سائقين أوكا</em>
              </router-link>
            </li>
             <li>
              <router-link class="s-sidebar__nav-link" to="/supOwnCars/">
                  <i class="fa fa-car"></i><em>عرض السيارات</em>
              </router-link>
            </li>
             <li>
              <router-link class="s-sidebar__nav-link" to="/wallet/">
                  <i class="fa fa-credit-card-alt"></i><em>المحفظة</em>
              </router-link>
            </li>
        </ul>
      </nav>
    </div>
  </div>
</div>
  
</template>

<script lang="js">
import axios from 'axios'
import  headers  from '../../functions/header'

export default {
  name: 'app-sidebar',
  data(){
    return{
      supName:this.$store.state.currentUser.name,
      supImg:process.env.WEBSITE_URL+'/storage/'+this.$store.state.currentUser.image,
      img:"",
      rotation:"",
      dashboardData: [],
      isSidebarOpen: true
    } 
  },
  watch:{
    $route (to, from){
      if ( window.matchMedia("only screen and (max-width: 760px)").matches ) {
        this.isSidebarOpen = false
      }
      else
      {
        this.isSidebarOpen = true
      }
    }
  }, 
  created () {
    if ( window.matchMedia("only screen and (max-width: 760px)").matches ) {
        this.isSidebarOpen = false
    }
    else{
        this.isSidebarOpen = true
    }
    axios.get(process.env.WEBSITE_URL+"/api/suppliers/dashboardSupplier",headers())
    .then ( (response) => {
      this.dashboardData =  response.data.data
      console.log('dash')
    })
    .catch( (error) => console.log(error) )
    

  },
  methods:{
      rotateIcon(){
        this.img= document.querySelector("image" ).click(function() {
	      this.rotation = getRotationDegrees($(this)) + 36;
        console.log(this.rotation);
        $(this).css("transform","rotate("+this.rotation+"deg)");
        });
        // this.img.setAttribute("class", "rotate-center");
      },
      toggleSidebar(){
        this.isSidebarOpen = !this.isSidebarOpen
      }
  }
}
</script>

<style scoped lang="scss">
.rotate-center {
  -webkit-animation: rotate-center 0.6s ease-in-out both;
  animation: rotate-center 0.6s ease-in-out both;
}
@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(300deg);
    transform: rotate(300deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(300deg);
    transform: rotate(300deg);
  }
}

.zoom:hover {
  -webkit-transition: transform 0.1s ease-in-out;

  transform: scale(
    1.1
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
.item-menu .active {
  background-color: #fff;
}

/* Primary Styles */
*, *::before, *::after {
   box-sizing: border-box;
}

h1 {
  font-size: 1.4em;
}

em {
   font-style: normal;
}

a {
   text-decoration: none;
   color: inherit;
} 

/* Layout */
.s-layout {
   display: flex;
   width: 100%;
   min-height: 100vh;
}

.s-layout__content {
   display: flex;
   justify-content: center;
   align-items: center;
   flex: 1;
}

/* Sidebar */
.s-sidebar__trigger {
   z-index: 2;
   position: fixed;
   top: 0;
   right: 0;
   width: 100%;
   height: 64px;
   background: #fff;
}

.s-sidebar__trigger > i {
   display: inline-block;
   margin: 1.5em 0 0 1.5em;
   color: #0F3B51;
}

.s-sidebar__nav:hover,
.s-sidebar__nav:focus,
.s-sidebar__trigger:hover + .s-sidebar__nav,
.s-sidebar__trigger:focus + .s-sidebar__nav {
  width: 15em;
}

.s-sidebar__nav {
   position: fixed;
   top: 0;
   right: -15em;
   overflow: hidden;
   transition: all .3s ease-in;
   width: 15em;
   height: 100%;
   background: #fff;
   color: rgba(255, 255, 255, 0.7);
}

.s-sidebar__nav ul {
   position: absolute;
   top: 4em;
   right: 0;
   margin: 0;
   padding: 0;
   width: 15em;
}

.s-sidebar__nav ul li {
   width: 100%;
}

.s-sidebar__nav-link {
   position: relative;
   display: inline-block;
   width: 100%;
   height: 4em;
   color: #0F3B51;
}

.s-sidebar__nav-link em {
   position: absolute;
   top: 50%;
   right: 5em;
   transform: translateY(-50%);

}

.s-sidebar__nav-link:hover {
   background: #0F3B51;
   color: #fff;
}

.s-sidebar__nav-link > i {
   position: absolute;
   top: 0;
   right: 0;
   display: inline-block;
   width: 5em;
   height: 4em;
   padding-right: 7rem;

}

.s-sidebar__nav-link > i::before {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
}

.s-layout__content {
  margin-right: 4em;
}

/* Sidebar */
.s-sidebar__trigger {
  width: 4em;
}

 .s-sidebar__collapse {
      position: fixed;
      top: 0;
      right: 0;
      width: 4em;
      height: 4em;
   }

.s-sidebar__nav {
  width: 4em;
  right: 0;
}
   
@media only screen and (min-width: 968px) {
  .s-sidebar__nav {
    width: 15em;
  }
}

@media only screen and (max-width: 968px) {
  .s-sidebar__nav{
    width: 0em
  }
  .s-sidebar__trigger {
    height: 64px;
  }
  .s-sidebar__trigger > i {
    display: inline-block;
    margin: 1.5em 0 0 0.8em;
    color: #0F3B51;
  }
}
   


</style>
