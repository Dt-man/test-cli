<template>
  <div
    v-if="
      supplierInfo.is_sensitived == '0' &&
        goodInfo.is_deleted == '0' &&
        goodInfo.status == '1'
    "
    class="good-index"
    :class="{ pb223: share }"
  >
    <div class="header-bg" />

    <div class="prl32 pb60">
      <!-- 基本信息 -->
      <div class="basic">
        <div class="basic-express">
          <h4>
            {{ supplierInfo.supplier_name }}
          </h4>
          <div class="basic-box">
            <span>
              <i class="icon iconfont youshuchengli_icon" />
              {{ supplierInfo.nickname }}
              {{
                supplierInfo.company_type_name
                  ? " · " + supplierInfo.company_type_name
                  : ""
              }}
            </span>
            <span v-if="supplierInfo.address" class="ml32">
              <i class="icon iconfont youshudizhi_icon" />
              {{ supplierInfo.address }}
            </span>
          </div>
        </div>
        <div class="basic-avatar">
          <img :src="supplierInfo.portrait_url" alt="">
        </div>
      </div>

      <!-- 基本信息 -->
      <div class="explain">
        <div class="explain-item">
          <span>成立{{ supplierInfo.established_year }}年</span>
          <span>
            <i class="icon iconfont youshuchengli_icon1" />
            成立时间
          </span>
        </div>
        <div class="explain-item">
          <span>{{ supplierInfo.jl_cooperate_type_name || "暂无" }}</span>
          <span>
            <i class="icon iconfont youshuhezuo_icon" />
            合作模式
          </span>
        </div>
        <div class="explain-item">
          <span>{{ supplierInfo.jl_settlement_interval_name || "暂无" }}</span>
          <span>
            <i class="icon iconfont youshufahuozhouqi_icon" />
            结算周期
          </span>
        </div>
        <div class="explain-item">
          <span>{{ supplierInfo.shipping_mode_name || "暂无" }}</span>
          <span>
            <i class="icon iconfont youshufahuo_icon" />
            发货模式
          </span>
        </div>
      </div>

      <!-- 供货能力 -->
      <div class="supply-capacity">
        <div class="common-title">
          供货能力
        </div>

        <div class="recommd-channel">
          <span class="recommd-title c6">优势品类:</span>
          <div class="recommd-box f1" :class="{'aligin-item-end': supplierInfo.supplier_category.length <= 0}">
            <template v-if="supplierInfo.supplier_category.length > 0">
              <span
                v-for="v in supplierInfo.supplier_category"
                :key="v.id"
                class="recommd-item"
              >{{ v.cat_name }}</span>
            </template>
            <template v-else>
              <span>暂无</span>
            </template>
          </div>
        </div>

        <div class="recommd-channel mt16">
          <span class="recommd-title c6">知名品牌:</span>
          <div class="recommd-box f1" :class="{'aligin-item-end': supplierInfo.supplier_famous.length <= 0}">
            <template v-if="supplierInfo.supplier_famous.length > 0">
              <span
                v-for="v in supplierInfo.supplier_famous"
                :key="v"
                class="recommd-item"
              >{{ v }}</span>
            </template>
            <template v-else>
              <span>暂无</span>
            </template>
          </div>
        </div>
      </div>

      <!-- 描述信息 -->
      <div class="express">
        <div class="express-item">
          <i class="icon iconfont youshukedanjia_icon" />
          <div class="express-desc">
            <span>{{ supplierInfo.agency_type_name || "暂无" }}</span>
            <span>代理权限</span>
          </div>
        </div>
        <div class="express-item">
          <i class="icon iconfont youshushangpin_icon" />
          <div class="express-desc">
            <span>{{ supplierInfo.sku_volume_name || "暂无" }}</span>
            <span>SKU量级</span>
          </div>
        </div>
        <div class="express-item">
          <i class="icon iconfont youshusucai_icon" />
          <div class="express-desc">
            <span>{{
              supplierInfo.supporting_service.map((e) => e.value).join(" | ") ||
                "暂无"
            }}</span>
            <span>素材支持</span>
          </div>
        </div>
      </div>

      <!-- 分销期望 -->
      <div class="distribution">
        <div class="common-title">
          分销期望
        </div>
        <div class="distribution-express">
          <div class="distribution-item">
            <span>付费分销</span>
            <span>{{ supplierInfo.accept_pay_type_name || "暂无" }}</span>
          </div>
          <div class="distribution-item">
            <span>分销量级</span>
            <span>{{ supplierInfo.distribution_volume_name || "暂无" }}</span>
          </div>
          <div class="distribution-item">
            <span>用户量级</span>
            <span>{{ supplierInfo.distribution_group_name || "暂无" }}</span>
          </div>
        </div>

        <div v-if="supplierInfo.supplier_channel.length > 0" class="recommd-channel">
          <span class="recommd-title c6">推广渠道:</span>
          <div class="recommd-box f1">
            <span
              v-for="v in supplierInfo.supplier_channel"
              :key="v.id"
              class="recommd-item"
            >{{ v.name }}</span>
          </div>
        </div>
      </div>

      <!-- 商品笔记 -->
      <div class="product-notes">
        <div class="common-title mt48">
          商品笔记
        </div>

        <div class="product-express">
          <div class="product-img">
            <img :src="goodInfo.goods_image_list[0]" alt="">
          </div>
          <div class="product-title">
            {{ goodInfo.goods_name }}
          </div>
          <div class="product-price">
            <span>
              {{ goodInfo.selling_price }}
            </span>
            <span>市场价{{ goodInfo.original_price }}</span>
          </div>
        </div>

        <div class="product-desc">
          <div class="product-item">
            <span>产品品类</span>
            <span>{{ goodInfo.cat_name }}</span>
          </div>
          <div v-if="goodInfo.specification" class="product-item">
            <span>产品规格</span>
            <span>{{ goodInfo.specification }}</span>
          </div>
          <div v-if="goodInfo.material" class="product-item">
            <span>主要材质</span>
            <span>{{ goodInfo.material }}</span>
          </div>
          <div v-if="goodInfo.address" class="product-item">
            <span>生产地址</span>
            <span>{{ goodInfo.address }}</span>
          </div>
          <div v-if="goodInfo.shipping && goodInfo.shipping.postage_name" class="product-item">
            <span>关于发货</span>
            <span>{{ goodInfo.shipping.postage_name }}</span>
          </div>
          <div v-if="goodInfo.shipping && goodInfo.shipping.shipping_express.length > 0" class="product-item">
            <span>默认快递</span>
            <span>{{ goodInfo.shipping && goodInfo.shipping.shipping_express.join(" | ") }}</span>
          </div>
        </div>
        <div class="product-explain">
          <span v-if="goodInfo.authorized_name">
            <!-- <i>1</i> -->
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#youshushangPin_ziZhiShouQuan" />
            </svg>
            {{ goodInfo.authorized_name }}
          </span>
          <span v-if="goodInfo.shipping">
            <!-- <i>1</i> -->
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#youshushangPin_baoZhang" />
            </svg>
            {{ goodInfo.shipping.shipping_time_name }}
          </span>
        </div>
      </div>
      <!-- 商品详情 -->
      <div class="good-desc">
        <div class="good-title">
          <span class="good-line line-right" />
          <span class="title">商品详情</span>
          <span class="good-line line-left" />
        </div>
        <div class="good-html">
          <span v-html="goodInfo.description" />
        </div>
      </div>
      <!--  -->
    </div>

    <div v-if="code" class="share">
      <div id="qrcode" ref="qrcode" class="share-code" />
    </div>

    <div v-if="share" class="btn-fixed-box">
      <div class="btn-fixed" @click="submitFn">
        跟他联系
      </div>
    </div>

    <div v-show="isShowMob" class="mob">
      <img src="https://app.ysxp.net/html/images/45.png">
    </div>
    <!--  -->
  </div>
  <div v-else class="violation">
    <div class="violation-img">
      <img src="@/static/img/xiajia.png" alt="">
    </div>
    <span>{{
      supplierInfo.is_sensitived == "1"
        ? "抱歉，该商品简历违规不可查看~"
        : goodInfo.is_deleted == "1"
          ? "该商品已被删除，不可查看~"
          : "抱歉，该商品已被下架不可查看~"
    }}</span>
  </div>
</template>

<script>
export default {
  async asyncData (ctx) {
    try {
      const params = {
        goods_id: ctx.query.id
      }
      const res = await ctx.$axios.post('/goods/get', params)
      const { data } = await ctx.$axios.post('/supplier/get', {
        supplier_id: res.data.goods_info.supplier_id
      })
      ctx.app.head.title = '有术-商品简历'
      res.data.goods_info.description = res.data.goods_info.description.replace(
        /<img/gi,
        '<img style="display: block;width: 100%;height: 100%;"'
      )
      res.data.goods_info.description = res.data.goods_info.description.replace(/<\/*script>.*/, '')
      // console.log(res)
      // ctx.error({ statusCode: 404, message: 'Post not found' })
      return {
        goodInfo: res.data.goods_info,
        supplierInfo: data,
        code: ctx.query.code,
        share: ctx.query.share
        // url: ctx.$axios.defaults.baseURL
      }
    } catch (e) {
      ctx.error({ statusCode: 404, message: '该商品已被删除，不可查看~', express: 'good' })
    }
  },
  data () {
    return {
      qrcodeObj: {},
      isShowMob: false,
      brand: ''
    }
  },
  mounted () {
    if (!this.$refs.qrcode) {
      return
    }
    // const url = 'https://itunes.apple.com/cn/app/id1543139642?mt=8'
    // if (window.getOsInfo().name === 'Android') {
    //   url = `${this.url}/app/youshu.apk`
    // }
    const url = this.goodInfo.share_url
    const height = this.$refs.qrcode.clientHeight
    const width = this.$refs.qrcode.clientWidth
    this.qrcodeObj = new window.QRCode('qrcode', {
      text: '永远相信美好的事情即将发生',
      width,
      height,
      colorDark: '#000', // 绿色
      colorLight: '#fff',
      // eslint-disable-next-line no-undef
      correctLevel: QRCode.CorrectLevel.H
    })
    this.qrcodeObj.makeCode(url)

    this.brand = window.navigator.userAgent.toLowerCase()
  },
  methods: {
    submitFn () {
      // 判断浏览器
      const u = navigator.userAgent
      if (/MicroMessenger/gi.test(u)) {
        // 引导用户在浏览器中打开
        this.isShowMob = true
        return
      }
      const d = new Date()
      const t0 = d.getTime()
      // console.log(this.brand)
      // alert(this.brand)
      this.brand = window.navigator.userAgent.toLowerCase()
      if (u.includes('Android') || u.includes('Linux')) {
        // Android
        if (this.openApp(`youshu://js.to.android/app?event=goods_detail&&id=${this.goodInfo.id}`)) {
          this.openApp(`youshu://js.to.android/app?event=goods_detail&&id=${this.goodInfo.id}`)
        } else if (this.brand.includes('huawei')) {
          window.location.href =
              'appmarket://details?id=com.xlkj.youshu#Intent;package=com.huawei.appmarket;scheme=appshare;end;'
        } else if (this.brand.includes('vivo')) {
          window.location.href =
              'intent://details?id=com.xlkj.youshu#Intent;package=com.bbk.appstore;scheme=market;end;'
        } else if (this.brand.includes('xiaomi')) {
          window.location.href =
              'mimarket://details?id=com.xlkj.youshu#Intent;package=com.xiaomi.market;scheme=market;end;'
        } else {
          window.location.href = 'https://app.ysxp.net/app/youshu.apk'
        }
      } else if (u.includes('iPhone')) {
        // if (this.openApp('https://app.ysxp.net/good')) {
        //   this.openApp('https://app.ysxp.net/good')
        // } else {
        const delay = setInterval(() => {
          const d = new Date()
          const t1 = d.getTime()
          if (t1 - t0 < 3000 && t1 - t0 > 2000) {
            // window.location.href = `https://app.ysxp.net/html/skip.html?channel_id=${id}`
            window.location.href = `https://app.ysxp.net/html/skip.html?good_id=${this.$route.query.id}`
            // console.log(this.$route.params.id, 'channel_id')
          }
          if (t1 - t0 >= 3000) {
            clearInterval(delay)
          }
        }, 1000)
        // }
      }
    },
    openApp (src) {
      // 通过iframe的方式试图打开APP，如果能正常打开，会直接切换到APP，并自动阻止a标签的默认行为
      // 否则打开a标签的href链接
      const ifr = document.createElement('iframe')
      ifr.src = src
      ifr.style.display = 'none'
      document.body.appendChild(ifr)
      window.setTimeout(function () {
        // document.body.removeChild(ifr)
        window.location = src
      }, 2000)
      // return true
    }
  }
}
</script>

<style lang='less' scoped>
.good-index {
  // font-family: resume;
}

img {
  width: 100%;
  height: 100%;
    object-fit: cover;

}

i {
  font-size: 20px;
  // vertical-align: text-bottom;
}

.header-bg {
  height: 320px;
  // background-color: #5fce86;
  background: url("@/static/img/goodHeaderBg.png") no-repeat;
  background-size: 100%;
}

.basic {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  .basic-avatar {
    position: absolute;
    top: -100%;
    right: 0;
    overflow: hidden;
    width: 148px;
    height: 148px;
    border: 7px solid #e6e6e6;
    border-radius: 50%;
    background-color: #fff;
    transform: translateY(-10%);
  }
  .basic-express {
    h4 {
      font-weight: bold;
      font-size: 36px;
      color: #333;
    }

    .basic-box {
      margin-top: 16px;
      font-size: 24px;
      color: #666;
    }
  }
}

.explain {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  padding: 20px;
  height: 137px;
  background-color: #fbfcfd;
  border-radius: 4px;
  .explain-item {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 20px;
    padding-right: 20px;
    // border-right: 1px solid #e2e2e2;
    &::after {
      position: absolute;
      content: "";
      top: 50%;
      right: 0;
      width: 1px;
      height: 48px;
      background-color: #e2e2e2;
      transform: translateY(-50%);
    }
    &:last-child {
      &::after {
        height: 0;
      }
    }
    span {
      &:first-child {
        font-weight: bold;
        font-size: 26px;
        color: #333;
      }
      &:last-child {
        margin-top: 8px;
        font-size: 20px;
        color: #999;
      }
    }
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      padding: 0;
      border: 0;
    }
  }
}

.common-title {
  position: relative;
  margin-top: 72px;
  padding-bottom: 16px;
  font-size: 32px;
  font-weight: bold;
  color: #333;
  border-bottom: 6px solid #f2f2f2;
  border-radius: 1px;
  &::before {
    content: "";
    position: absolute;
    bottom: -6px;
    width: 80px;
    height: 6px;
    // background-color: #4b78f6;
    border-bottom: 6px solid #5fce86;
  }
}

.recommd-channel {
  display: flex;
  margin-top: 46px;
  font-size: 28px;
  font-weight: 500;
  color: #666;
  .recommd-title {
    margin-right: 16px;
    padding-top: 8px;
  }
  .recommd-box {
    display: flex;
    flex-wrap: wrap;
    .recommd-item {
      margin-right: 16px;
      margin-bottom: 24px;
      padding: 8px 22px;
      min-width: 94px;
      text-align: center;
      font-size: 25px;
      background-color: #f9fafc;
      border-radius: 27px;
      color: #333;
    }
  }
}

.express {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 8px;
  padding: 30px 38px;
  height: 390px;
  background-color: #f9fafc;
  border-radius: 4px;
  .express-item {
    flex: 1;
    display: flex;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(230, 230, 230, 0.4);
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      border: unset;
    }
    i {
      margin-right: 53px;
      width: 48px;
      height: 48px;
      font-size: 48px;
      color: #bbb;
    }
    .express-desc {
      display: flex;
      flex-direction: column;
      span {
        font-size: 28px;
        color: #333;
        &:last-child {
          margin-top: 8px;
          font-size: 24px;
          color: #999;
        }
      }
    }
  }
}

.distribution-express {
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  padding: 32px 24px;
  height: 152px;
  background-color: #f9fafc;
  border-radius: 4px;
  .distribution-item {
    position: relative;
    flex: 0.7;
    display: flex;
    flex-direction: column;
    margin-right: 30px;
    // border-right: 1PX solid #e6e6e6;
    &::after {
      position: absolute;
      content: "";
      top: 50%;
      right: 0;
      width: 1px;
      height: 48px;
      background-color: #e6e6e6;
      transform: translateY(-50%);
    }
    &:last-child {
      margin-right: 0;
      border-right: unset;
      &::after {
        background-color: transparent;
      }
    }
    &:first-child {
      flex: 1;
    }
    span {
      font-size: 28px;
      color: #999;
      &:last-child {
        margin-top: 10px;
        font-size: 26px;
        font-weight: bold;
        color: #333;
      }
    }
  }
}

.product-express {
  overflow: hidden;
  margin-top: 48px;
  // height: 707px;
  padding-bottom: 24px;
  border-radius: 12px;
  background-color: #f9fafc;
  .product-img {
    height: 500px;
    background-color: #000;
    img {
      object-fit: cover;
    }
  }
  .product-title {
    padding: 24px 32px;
    // height: 118px;
    color: #333;
    font-size: 32px;
    font-weight: bold;
  }

  .product-price {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 32px;
    span {
      font-size: 40px;
      font-weight: bold;
      color: #f52f30;
      &:first-child {
        position: relative;
        padding-left: 24px;
        &::before {
          position: absolute;
          left: 0;
          bottom: 6px;
          content: "￥";
          font-size: 24px;
        }
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          right: -80px;
          width: 68px;
          height: 30px;
          background: url("@/static/img/xiangQing_gongHuoJia_icon.png")
            no-repeat;
          background-size: 100%;
          transform: translateY(-50%);
        }
      }
      &:last-child {
        align-items: flex-end;
        text-decoration: line-through;
        font-size: 28px;
        font-weight: 400;
        color: #ccc;
      }
    }
  }
}

.product-desc {
  overflow: hidden;
  margin-top: 24px;
  padding: 24px 32px;
  border-radius: 12px 12px 0 0;
  background-color: #f9fafc;
  .product-item {
    display: flex;
    margin-top: 24px;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      span {
        &:last-child {
          border-bottom: unset;
        }
      }
    }
    span {
      font-size: 28px;
      &:first-child {
        min-width: 112px;
        color: #999;
      }
      &:last-child {
        flex: 1;
        margin-left: 20px;
        padding-bottom: 24px;
        color: #333;
        border-bottom: 1px solid rgba(230, 230, 230, 0.2);
      }
    }
  }
}

.product-explain {
  border-radius: 0 0 12px 12px;
  display: flex;
  padding: 20px 32px;
  background-color: #f4f7fc;
  span {
    font-size: 26px;
    color: #999;
    &:last-child {
      margin-left: 24px;
    }
    svg {
      vertical-align: middle;
    }
  }
}

.good-desc {
  margin-top: 40px;
  .good-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #999;
    text-align: center;
    .good-line {
      display: inline-block;
      width: 80px;
      height: 1px;
      background-color: #e6e6e6;
    }
    .line-right {
      position: relative;
      margin-right: 16px;
      &::after {
        position: absolute;
        top: 50%;
        right: 0;
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #e6e6e6;
        transform: translateY(-50%);
      }
    }
    .line-left {
      position: relative;
      margin-left: 16px;
      &::before {
        position: absolute;
        top: 50%;
        left: 0;
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #e6e6e6;
        transform: translateY(-50%);
      }
    }
  }

  .good-html {
    margin-top: 32px;
  }
}

.share {
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
  padding: 55px;
  height: 260px;
  // background-color: #5fce86;
  background: url("@/static/img/goodFooterBg.png") no-repeat;
  background-size: 100%;
  .share-code {
    box-sizing: content-box;
    width: 114px;
    height: 114px;
    background-color: #fff;
    border: 2px solid #fff;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.violation {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  span {
    display: inline-block;
    margin-top: 15px;
    width: 100%;
    text-align: center;
    font-size: 24px;
    color: #999;
  }
}

.pb223 {
  padding-bottom: 223px;
}

.btn-fixed-box {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 200px;
  border-top: 1px solid #e6e6e6;
  background-color: #fff;

  .btn-fixed {
    margin: 35px 40px;
    width: 670px;
    height: 90px;
    line-height: 90px;
    text-align: center;
    color: #ffffff;
    font-size: 36px;
    background-color: #f5502a;
    border-radius: 12px;
  }
}

.mob {
  position: fixed;
  top: 0 !important;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
}

.mob img {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 20px;
  height: 300px;
  width: 300px;
}
</style>
