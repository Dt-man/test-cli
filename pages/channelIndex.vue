<template>
  <div
    v-if="item.is_sensitive == '0'"
    class="channel-index"
    :class="{ pb223: share }"
  >
    <div class="header">
      <div class="avatar">
        <img :src="item.avatar" alt="">
      </div>
    </div>

    <div class="prl32 pb60">
      <!-- 基本信息 -->
      <div class="basic">
        <h4>{{ item.nickname }}</h4>
        <span class="company"> {{ item.company_name }} </span>
        <div class="basic-express">
          <span>
            <i class="icon iconfont youshuqiye_icon" />
            {{ item.type_name }}
          </span>
          <span v-if="item.address" class="ml36">
            <i class="icon iconfont youshudizhi_icon" />
            {{ item.address }}
          </span>
        </div>
      </div>

      <!-- 渠道基本信息 -->
      <div class="grid">
        <div class="grid-item">
          <span class="title">成立{{ item.company_year }}年</span>
          <span class="grid-desc">
            <i class="icon iconfont youshuchengli_icon1" />
            成立时间
          </span>
        </div>
        <div class="grid-item">
          <span class="title">{{ item.user_num || '暂无' }}</span>
          <span class="grid-desc">
            <i class="icon iconfont youshuyonghuliang_icon" />
            用户量
          </span>
        </div>
        <div class="grid-item">
          <span class="title">{{ item.month_sale_num_name || '暂无' }}</span>
          <span class="grid-desc">
            <i class="icon iconfont youshuyuexiaoliang_icon" />
            月销量
          </span>
        </div>
        <div class="grid-item">
          <span class="title">{{ item.cooperate_type|| '暂无' }}</span>
          <span class="grid-desc">
            <i class="icon iconfont youshuhezuo_icon" />
            合作模式
          </span>
        </div>
        <div class="grid-item">
          <span class="title">{{ item.pay_period|| '暂无' }}</span>
          <span class="grid-desc">
            <i class="icon iconfont youshufahuozhouqi_icon" />
            结算周期
          </span>
        </div>
        <div class="grid-item">
          <span class="title">{{ item.shipping_mode|| '暂无' }}</span>
          <span class="grid-desc">
            <i class="icon iconfont youshufahuo_icon" />
            发货模式
          </span>
        </div>
      </div>

      <!-- 渠道介绍 -->
      <div class="channel-express">
        {{ item.superiority }}
      </div>

      <!-- 推广渠道 -->
      <div class="recommd-channel">
        <span class="recommd-title">推广渠道:</span>
        <div class="recommd-box f1">
          <span
            v-for="v in item.distributor_channel"
            :key="v"
            class="recommd-item"
          >{{ v }}</span>
        </div>
      </div>

      <!-- 选品期望 -->
      <div class="expect">
        <div class="common-title">
          选品期望
        </div>
        <div class="expect-box">
          <div class="expect-item">
            <i class="icon iconfont youshukedanjia_icon" />
            <div class="expect-express">
              <span>{{ item.expected_price || '暂无' }}</span>
              <span>客单价</span>
            </div>
          </div>
          <div class="expect-item">
            <i class="icon iconfont youshulirun_icon1" />
            <div class="expect-express">
              <span>{{ item.min_profit || '暂无' }}</span>
              <span>利 润</span>
            </div>
          </div>
          <div class="expect-item">
            <i class="icon iconfont youshudailiquanxian_icon1" />
            <div class="expect-express">
              <span>{{ item.agent_rights || '暂无' }}</span>
              <span>代理权限</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 选品偏好 -->
      <div class="recommd-channel mt32">
        <span class="recommd-title">选品偏好:</span>
        <div class="recommd-box f1">
          <span v-for="v in item.categorys" :key="v" class="recommd-item c3">
            {{ v }}</span>
        </div>
      </div>

      <!-- 用户群体 -->
      <div class="recommd-channel mt16">
        <span class="recommd-title pt0">用户群体:</span>
        <div class="recommd-box f1">
          <span class="c3 fs28 lh48"> {{ item.user_group|| '暂无' }}</span>
        </div>
      </div>

      <!-- 合作案例 -->
      <div v-if="item.sales_list.length > 0" class="case">
        <div class="common-title">
          合作案例
        </div>

        <div v-for="v in item.sales_list" :key="v.id" class="case-item">
          <!-- <i class="icon iconfont youshugongsi_icon" /> -->
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#youshugongsi_icon" />
            </svg>
          </span>
          <div class="f1">
            <div class="case-header">
              <div class="case-express">
                <span>{{ v.company_name }}</span>
                <div class="case-explain">
                  <span v-if="v.cooperate_type">{{ v.cooperate_type }}</span>

                  <div class="case-time" :class="{ ml32: v.cooperate_type }">
                    {{ v.start_date }} - {{ v.end_date }}
                  </div>
                </div>
              </div>
              <!-- <div class="case-time">
                {{ v.start_date }} - {{ v.end_date }}
              </div> -->
            </div>

            <div class="case-desc">
              <span>{{ v.product_name }}</span>
              <span>总销量{{ v.total_sales }}单</span>
            </div>

            <div class="case-img">
              <div
                v-for="value in v.product_images.concat(v.images)"
                :key="value"
                class="img-box"
              >
                <img :src="value+'?x-oss-process=image/resize,m_fixed,w_200'" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 团队介绍 -->
      <div v-if="item.team_list.length > 0" class="group">
        <div class="common-title">
          团队介绍
        </div>

        <div v-for="v in item.team_list" :key="v.id" class="group-item">
          <div class="group-avatar">
            <img :src="v.avatar+'?x-oss-process=image/resize,m_fixed,w_80'" alt="">
          </div>
          <div class="group-express">
            <span>{{ v.name }} · {{ v.duty }}</span>
            <span>{{ v.intro }}</span>
          </div>
        </div>
      </div>

      <!--  -->
    </div>
    <!--  -->
    <div v-if="code" class="share">
      <div class="share-express">
        <div class="share-avatar">
          <img :src="item.avatar" alt="">
        </div>
        <div class="share-desc">
          <span>{{ item.nickname }} </span>
          <span>{{ item.company_name }}</span>
          <div class="share-btn">
            长按识别二维码
          </div>
        </div>
      </div>
      <div id="qrcode" ref="qrcode" class="code" />
      <!--  -->
    </div>

    <div v-if="share" class="btn-fixed-box">
      <div class="btn-fixed" @click="submitFn">
        跟他联系
      </div>
    </div>

    <div v-show="isShowMob" class="mob">
      <img src="https://app.ysxp.net/html/images/45.png">
    </div>
  </div>

  <div v-else class="violation">
    <div class="violation-img">
      <img src="@/static/img/weigui.png" alt="">
    </div>
    <span>抱歉，该简历违规不可查看~</span>
  </div>
</template>

<script>
// import axios from '@nuxtjs/axios'
export default {
  async asyncData (ctx) {
    try {
      const params = {
        distributor_id: ctx.query.id,
        share: 1
      }
      ctx.app.head.title = '有术-渠道简历'
      const res = await ctx.$axios.post('/distributor/detail', params)
      res.data.avatar = res.data.avatar + '?x-oss-process=image/resize,m_fixed,w_80'

      // console.log(res)
      return {
        item: res.data,
        code: ctx.query.code,
        share: ctx.query.share
        // url: ctx.$axios.defaults.baseURL
      }
    } catch (e) {
      // console.log(e, 'catch e')
      ctx.error({ statusCode: 404, message: '该渠道已不存在~', express: 'channel' })
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
    // let url = 'https://itunes.apple.com/cn/app/id1543139642?mt=8'
    // if (window.getOsInfo().name === 'Android') {
    //   url = `${this.url}/app/youshu.apk`
    // }
    const url = this.item.share_url
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

      this.brand = window.navigator.userAgent.toLowerCase()
      if (u.includes('Android') || u.includes('Linux')) {
        // Android
        // alert(`youshu://js.to.android/app?event=channel_detail&&id=${this.item.id}`)
        if (this.openApp(`youshu://js.to.android/app?event=channel_detail&&id=${this.item.id}`)) {
          this.openApp(`youshu://js.to.android/app?event=channel_detail&&id=${this.item.id}`)
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
        // alert(1)
        // console.log(this.$route.query.id)
        const delay = setInterval(() => {
          const d = new Date()
          const t1 = d.getTime()
          if (t1 - t0 < 3000 && t1 - t0 > 2000) {
            window.location.href = `https://app.ysxp.net/html/skip.html?channel_id=${this.$route.query.id}`
            // window.location.href = `https://app.ysxp.net/html/skip.html?channel_id=${this.$route.params.id}`
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
      // alert(src)
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
.channel-index {
  // font-family: resume;
}
i {
  // margin-bottom: 4px;
  font-size: 20px;
  // vertical-align: text-bottom;
}

svg {
  font-size: 30px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header {
  position: relative;
  width: 750px;
  height: 320px;
  // background: #123;
  background: url("@/static/img/channelHeaderBg.png") no-repeat;
  background-size: 100%;
  .avatar {
    overflow: hidden;
    position: absolute;
    bottom: 0;
    right: 40px;
    width: 148px;
    height: 148px;
    border: 7px solid #e6e6e6;
    background-color: #fff;
    border-radius: 50%;
    transform: translateY(50%);
  }
}

.basic {
  margin-top: 32px;
  h4 {
    font-size: 36px;
    color: #333;
  }
  .company {
    display: inline-block;
    margin-top: 16px;
    font-size: 26px;
    font-weight: 500;
    color: #666;
  }
  .basic-express {
    margin-top: 16px;
    color: #666;
    font-size: 24px;
  }
}

.grid {
  display: flex;
  flex-wrap: wrap;
  margin-top: 64px;
  .grid-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 16px;
    width: 218px;
    height: 105px;
    text-align: center;
    background-color: #f9fafc;
    .title {
      margin-bottom: 8px;
      color: #333;
      font-size: 26px;
      font-weight: bold;
    }
    .grid-desc {
      font-size: 20px;
      color: #999;
    }

    &:nth-child(n + 4) {
      margin-top: 18px;
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
}

.channel-express {
  margin-top: 40px;
  line-height: 48px;
  font-size: 28px;
  color: #666;
  word-break: break-all;
}

.recommd-channel {
  display: flex;
  margin-top: 46px;
  font-size: 28px;
  font-weight: 500;
  color: #333;
  .recommd-title {
    margin-right: 16px;
    padding-top: 8px;
    color: #666;
  }
  .recommd-box {
    display: flex;
    flex-wrap: wrap;
    .recommd-item {
      margin-right: 10px;
      margin-bottom: 24px;
      padding: 8px 22px;
      font-size: 25px;
      background-color: #f9fafc;
      border-radius: 27px;
      color: #666;
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
    border-bottom: 6px solid #4b78f6;
  }
}

.expect-box {
  margin-top: 48px;
  padding: 40px 38px;
  min-height: 387px;
  background-color: #f9fafc;
  border-radius: 4px;

  .expect-item {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(230, 230, 230, 0.4);
    &:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: unset;
    }
    i {
      width: 115px;
      font-size: 48px;
      color: #bbb;
    }
    .expect-express {
      display: flex;
      flex-direction: column;
      span {
        &:first-child {
          font-size: 28px;
          font-weight: bold;
          color: #333;
        }
        &:last-child {
          margin-top: 8px;
          // width: 98px;
          font-size: 24px;
          color: #666;
          // text-align-last: justify;
        }
      }
    }
  }
}

.case-item {
  display: flex;
  margin-top: 48px;
  i,
  svg {
    display: inline-block;
    margin-top: 4px;
    margin-right: 17px;
    font-size: 30px;
    vertical-align: middle;
  }
  .case-header {
    display: flex;
    justify-content: space-between;
    .case-express {
      flex: 1;
      display: flex;
      flex-direction: column;
      .case-explain {
        display: flex;
        align-items: baseline;
        margin-top: 12px;
        span {
          &:first-child {
            // min-width: 159px;
            text-align: center;
            color: #999;
            font-size: 24px;
            font-weight: 400;
          }
        }
        .case-time {
          font-size: 24px;
          color: #999;
        }
      }
      span {
        &:first-child {
          font-weight: bold;
          font-size: 28px;
        }
        // &:last-child {
        //   margin-top: 12px;
        //   padding: 10px 22px;
        //   max-width: 159px;
        //   text-align: center;
        //   background-color: #f9fafc;
        //   color: #999;
        //   border-radius: 27px;
        // }
      }
    }
  }

  .case-desc {
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
    span {
      font-size: 24px;
      color: #666;
      &:last-child {
        color: #ccc;
      }
    }
  }

  .case-img {
    display: flex;
    margin-top: 24px;
    .img-box {
      overflow: hidden;
      width: 150px;
      height: 150px;
      border-radius: 8px;
      background-color: #000;
      &:nth-child(n + 2) {
        margin-left: 16px;
      }
    }
  }
}

.group {
  margin-bottom: 54px;
  .group-item {
    &:nth-child(2) {
      margin-top: 48px;
    }
  }
}

.group-item {
  overflow: hidden;
  display: flex;
  margin-top: 24px;
  padding: 40px 30px;
  height: 200px;
  background-color: #f7f9fc;
  border-radius: 4px;

  .group-avatar {
    overflow: hidden;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #000;
  }

  .group-express {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    flex: 1;
    color: #333;
    font-size: 28px;
    span {
      &:last-child {
        margin-top: 8px;
        font-size: 24px;
        color: #999;
      }
    }
  }
}

.share {
  display: flex;
  justify-content: space-between;
  padding: 0 53px;
  padding-top: 58px;
  height: 260px;
  // background-color: #000;
  background: url("@/static/img/channelFooterBg.png") no-repeat;
  background-size: 100%;
  color: #fff;
  .share-express {
    display: flex;
    .share-avatar {
      overflow: hidden;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background-color: #fff;
    }
    .share-desc {
      display: flex;
      flex-direction: column;
      margin-left: 8px;
      color: #4b78f6;
      font-size: 28px;
      font-weight: bold;
      span {
        &:nth-child(2) {
          margin-top: 4px;
          font-size: 24px;
          font-weight: 400;
          color: #666;
        }
      }
      .share-btn {
        margin-top: 30px;
        padding: 6px 12px;
        min-width: 164px;
        height: 40px;
        line-height: 28px;
        font-size: 20px;
        border-radius: 4px;
        border: 2px solid #4b78f6;
      }
    }
  }
  .code {
    box-sizing: content-box;
    width: 114px;
    height: 114px;
    background-color: #fff;
    border: 2px solid #fff;
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
