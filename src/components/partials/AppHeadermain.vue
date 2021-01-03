<template lang="html">
  <b-navbar class="" toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="">
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</template>

<script lang="js">
const TOKEN='token';

export default {
  name: 'app-header',
methods:{
  SignOut(){
    localStorage.setItem(TOKEN,null);
    this.$router.push('/login');
    this.showLogOff();
    console.log("sign out");
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
</style>
