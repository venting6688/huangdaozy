<template>
	<view class="webView">
		<web-view :src="link"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				link: ''
			};
		},
		onLoad(options) {
			this.link = JSON.parse(decodeURIComponent(options.url));
		}
	};
</script>

<style lang="less" scoped>
	.webView {
		width: 100vw;
		height: 100%; 
		display: flex;
		flex-direction: column;
	}
</style>