<template>
	<view class="user">
		<CustomNavBar
		    :showBack="showBack"
		    :title="title"
		/>
		<h1>服务协议及隐私政策</h1>
		<view class="">
			小程序隐私保护指引
					<br/>
					
					<br/>
					<text>1.开发者处理的信息</text>
					<br/>
					根据法律规定，开发者仅处理实现小程序功能所必要的信息。
					为了确保小程序安全和良好得被使用,该信息在授权登录时用。患者姓名、手机号等个人信息尽在挂号、缴费、查询时使用，不做其他用途。，开发者将在获取你的明示同意后，收集你的手机号。
					为了医患视频交流，开发者将在获取你的明示同意后，访问你的麦克风。
					为了让您保存文件资料，开发者将在获取你的明示同意后，使用你的相册(仅写入)权限。
					开发者收集你选中的照片或视频信息，用于上传患者病情描述信息。
					<br/>
					<text>					2.第三方插件信息/SDK信息</text>
					<br/>
					为实现特定功能，开发者可能会接入由第三方提供的插件/SDK。第三方插件/SDK的个人信息处理规则，请以其公示的官方说明为准。小程序接入的第三方插件信息/SDK信息如下:插件名称:电子健康卡
					插件提供方名称:深圳市腾讯计算机系统有限公司
					为了关联您的微信消息和健康卡信息，开发者将在获得你的明示同意后，收集你的微信昵称、头像。
					开发者收集你选中的照片或视频信息，用于展示你微信上绑定的健康卡。
					<br/>
					<text>3.你的权益</text>
					<br/>
					关于访问你的麦克风、使用你的相册(仅写入)权限，你可以通过以下路径:小程序主页右上角“…”一“设置”一点击特定信息一点击“不允许”，撤回对开发者的授权。
			关于收集你的手机号、收集你选中的照片或视频信息，你可以通过以下路径:小程序主页右上角“...”一“设置”一“小程序已获取的信息”一点击特定信息一点击“通知开发者删除”，开发者承诺收到通知后将删除信息。
			关于你的个人信息，你可以通过以下方式与开发者联系，行使查阅、复制、更正、删除等法定权利。
					<br/>
					邮箱:sydefyhlwyy@163.com
					<br/>
					<text>			4.开发者对信息的存储</text>
					<br/>
			开发者承诺，除法律法规另有规定外，开发者对你的信息的保存期限应当为实现处理目的所必要的最短时间。
					<br/>
			        <text>5.信息的使用规则</text>
					<br/>
			开发者将会在本指引所明示的用途内使用收集的信息
			如开发者使用你的信息超出本指引目的或合理范围，开发者必须在变更使用目的或范围前，再次以信息告知确认框方式告知并征得你的明示同意。
					<br/>
			        <text>6.信息对外提供</text>
					<br/>
			开发者承诺，不会主动共享或转让你的信息至任何第三方，如存在确需共享或转让时，开发者应当直接征得或确认第三方征得你的单独同意。
			开发者承诺，不会对外公开披露你的信息，如必须公开披露时，开发者应当向你告知公开披露的目的、披露信息的类型及可能涉及的信息，并征得你的单独同意。
			你认为开发者未遵守上述约定，或有其他的投诉建议、或未成年人个人信息保护相关问题，可通过以下方式与开发者联系;或者向微信进行投诉。邮箱:sydefyhlwyy@163.com
		</view>
		
	</view>
</template>

<script>
	import mixin from '@/mixins/mixin'
	import CustomNavBar from '@/components/CustomNavBar.vue';
	export default {
		components:{
			CustomNavBar,
		},
		mounted() {
			this.showBack = true;
			this.title = '服务协议及隐私政策';
		},
	}
</script>

<style lang="less" scoped>
	.user {
		width: 100vw;
		height: 100%; 
		display: flex;
		flex-direction: column;
		h1 {
			font-size: 35rpx;
			margin: 20rpx 0;
			height: 80rpx;
			font-weight: 700;
			display: flex;
			justify-content: center;
		}
		view {
			overflow: auto;
			flex: auto;
			margin: 0 30rpx;
			text {
				display: inline-block;
				margin: 10rpx 0;
				font-weight: 600;
			}
		}
		
	}
</style>