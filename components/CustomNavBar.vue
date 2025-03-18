<template>
  <view class="head">
    <!-- 返回按钮 -->
    <view v-if="showBack" @click="goBack" class="back" :style="{paddingTop: menuButtonInfo.top + 'px'}">
      <image src="../static/image/back.png" mode="widthFix"></image>
    </view>
    <!-- 标题 -->
    <view class="navTop"  :style="{paddingTop: menuButtonInfo.top + 'px'}">{{title}}</view>
  </view>
</template>

<script>
export default {
  name: 'CustomNavBar',
  props: {
    showBack: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
  },
  data(){
	  return {
		  menuButtonInfo:{},
	  }
  },
  methods: {
    // 返回上一页
    goBack() {
			
      uni.navigateBack();
    },
  },
  mounted(){
  	this.menuButtonInfo = wx.getMenuButtonBoundingClientRect();
  },
};
</script>

<style lang="less" scoped>
	.head {
		width: 100%;
		height: 200rpx;
		.navTop{
			  width: 100%;
			  height: 40px;
			  line-height: 34px;
			  text-align: center;
			  font-weight: 700;
			  font-size: 34rpx;
			  position: fixed;
			  top: 0;
			  left: 0;
		}
		.back{
		  width: 100%;
		  height: 40px;
		  line-height: 34px;
		  font-size: 34rpx;
		  position: fixed;
		  top: 0;
		  left: 0;
		  image {
			  width: 25px;
			  height: 25px;
			  transform: translate(20rpx,10rpx);
		  }
		}
	}

</style>