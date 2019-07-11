<template>
  <div id="app">
    <vheader></vheader>
    <router-view class="router-view"/>
    <vfooter></vfooter>
  </div>
</template>
<script>
import vheader from './components/header/vheader'
import vfooter from './components/footer/vfooter'
export default {
  components: {
    vheader,
    vfooter
  }
  
}
</script>


<style lang="scss">
  @import './assets/css/common.scss';

  #app{
    height: 100%;
  }
  .router-view{
    padding-top: 66px;
  }

</style>
