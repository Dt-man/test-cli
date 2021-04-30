<template>
  <div class="error-index">
    <div class="violation-img">
      <img
        v-if="error.express === 'good'"
        src="@/static/img/xiajia.png"
        alt=""
      >
      <img
        v-if="error.express === 'channel'"
        src="@/static/img/weigui.png"
        alt=""
      >
    </div>
    <span>{{ error.message }}</span>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: [Object, Array],
      default: () => {}
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.error-index {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  .violation-img {
    width: 371px;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  span {
    display: inline-block;
    margin-top: 15px;
    width: 100%;
    text-align: center;
    font-size: 24px;
    color: #999;
  }
}
</style>
