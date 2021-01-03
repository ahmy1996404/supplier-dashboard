<template lang="html">
  <b-navbar class="navbar" toggleable="md" type="dark" variant="info" style="width: 80%;">

    <button @click="SignOut" class="btn btn-light ml-4"> تسجيل الخروج </button>
    <!--
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="header-links">
        <b-nav-item href="#"><i class="mdi mdi-image-filter"></i>Gallery</b-nav-item>
        <b-nav-item href="#" active><i class="mdi mdi-email-outline"></i>Inbox</b-nav-item>
        <b-nav-item href="#"><i class="mdi mdi-calendar"></i>Calendar</b-nav-item>
      </b-navbar-nav> -->
      <!-- Right aligned nav items
      <b-navbar-nav class="">
          <b-dropdown id="dropdown-left" text="Left align" variant="primary" class="m-2">
          <template slot="button-content">
            <img class="img-xs profile-image rounded-circle zoom" :src="supImg" alt="profile image">
          </template>
          <b-dropdown-item @click="SignOut">Signout</b-dropdown-item>
        </b-dropdown>
      </b-navbar-nav>
    </b-collapse>
     <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
      <a class="navbar-brand  brand-logo" href="/"><img  style="width: 35px;
    height: auto;"   src="../../assets/images/Logo2.png" alt="logo"/></a>
      <a class="navbar-brand brand-logo-mini" href="/"><img src="../../assets/images/logo-mini.svg" alt="logo"/></a>
    </div> -->
  </b-navbar>
</template>

<script lang="js">
const TOKEN='token';

export default {
  name: 'app-header',
  data(){
    return{
      supImg:process.env.WEBSITE_URL+'/storage/'+this.$store.state.currentUser.image
    }

  },
  created(){
    console.log(this.$store.state.currentUser)
  },
methods:{
  SignOut(){
    this.$store.commit("logout");
    this.$router.push('/login');
    this.showLogOff();
  },
  showLogOff(){

    console.log("showed");
      this.$snotify.error('تم تسجيل الخروج', {
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
.app-header {
}
.rotate {
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  -ms-transition: all 0.5s ease-out;
  -o-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}
.rotate:hover {
  -webkit-transform: rotate(145deg);
  -moz-transform: rotate(145deg);
  -ms-transform: rotate(145deg);
  -o-transform: rotate(145deg);
  transform: rotate(145deg);
}
.zoom:hover {
  -webkit-transition: transform 0.1s ease-in-out;

  transform: scale(
    1.2
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
.profile-image {
  border: 1px solid #fff;
  padding: 0;
}

.navbar{
  height: 64px;
}
</style>
