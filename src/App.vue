<template lang="html">
  <div id="app">
    <vue-snotify></vue-snotify>
    <div class="container-scroller">
      <app-header ></app-header>
      <!-- <app-headermain v-if="!get_data()"></app-headermain> -->

      <div class="container-fluid page-body-wrapper">
        <div class="main-panel">

          <div class="content-wrapper" style="height:1205px">

            <transition name = "router-anim">

            <router-view>
            </router-view>

          </transition>
          </div>
          <!-- content wrapper ends -->
        </div>
        <!-- main panel ends -->
        <app-sidebar style=""></app-sidebar>
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </div>

</template>

<script lang="js">
import AppHeader from '../src/components/partials/AppHeader'
import AppHeadermain from '../src/components/partials/AppHeadermain'

import AppSidebar from '../src/components/partials/AppSidebar'
import AppFooter from '../src/components/partials/AppFooter'
export default{
  name: 'main-page',
  components: {
    AppHeader,
  'app-headermain' : AppHeadermain,
    AppSidebar,
    AppFooter
  },
computed: {
  currentUser() {
    return this.$store.getters.currentUser
  }
}
}
</script>

<style>

  @import "../node_modules/mdi/css/materialdesignicons.min.css";
  @import "../node_modules/font-awesome/css/font-awesome.min.css";
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css";

</style>

<style lang="scss">
@import "./assets/scss/style";
.page {
  position: absolute;
  width: inherit;
  padding-right: 350px;

}
@media only screen and (max-width: 1000px) {
  .page {
    position: absolute;
    width: inherit;
    padding-right: 50px;

  }
}
.page-login {
  position: absolute;
  width: inherit;

}
.page-reg {
  position: absolute;
  width: inherit;
  padding: 50px;
}
.router-anim-enter-active{
  animation: coming .5s;
  opacity: 0;
}
.router-anim-leave-active{
  animation: going .5s;
}
@keyframes going {
  from{
    transform: translatex(0);
  }
  to{
    transform: translatex(-50px);
    opacity: 0;

  }
}
@keyframes coming {
  from{
    transform: translatex(-50px);
    opacity: 0;

  }
  to{
    transform: translatex(0px);
    opacity: 1;

  }
}
.container-fluid{
  background: #F6F8FA;
}
.page-body-wrapper{
  background: #F6F8FA;
}



</style>
