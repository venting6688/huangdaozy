<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			  wx.hideTabBar();
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>


<style lang="scss">
	@import "@/colorui/main.css";
	@import "@/colorui/animation.css";
	@import "@/colorui/icon.css";
	@import "@/static/css/index-app.css";
	@import "uview-ui/index.scss";
	page{ 
		height: 100%;
		// 全局图片
		background:$back-base64;   
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
	}
</style>



