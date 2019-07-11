<template>
  <div class="vheader">
    <div class="container">
      <div class="right">
        <div class="nav-list">
          <router-link to="/home">主页</router-link>
          <router-link to="/about">关于</router-link>
          <router-link to="/other">其他事项</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .vheader {
    height: 66px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 999;
    border-bottom: 1px solid #eee;

    .right {
      float: right;

      .nav-list {
        float: left;
        line-height: 28px;
        padding: 19px 20px 19px 0;
        
        a {
          margin: 0 20px;
          font-size: 16px;
          color: #333;

          &.router-link-active:after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            height: 3px;
            width: 100%;
            background: #0084ff;
          }
          &:hover {
            color: #0084ff;
          }
        }        
      }
    }
  }
</style>
