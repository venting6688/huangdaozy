<template>
	<view class="information">
		<CustomNavBar
		    :showBack="showBack"
		    :title="title"
		/>
		<form>
			<view class="cu-form-group">
				<view class="title">姓名</view>
				<input v-model="informationObj.patientName" name="input" />
			</view>
			<view class="cu-form-group">
				<view class="title">性别</view>
				<input v-model="informationObj.sex" name="input" />
			</view>
			<view class="cu-form-group">
				<view class="title">民族</view>
				<input v-model="informationObj.nationality" name="input" />
			</view>
			<view class="cu-form-group">
				<view class="title">出生日期</view>
				<picker mode="date" :value="informationObj.dob" :start="startDate" :end="endDate" fields="day" @change="bindDateChange">
				    <text class="picker birth">{{informationObj.dob}}</text>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">家庭住址</view>
				<input v-model="informationObj.address" name="input" />
			</view>
			<view class="cu-form-group">
				<view class="title">身份证号</view>
				<input v-model="informationObj.idNum" type="idcard" name="input" />
			</view>

			<view class="cu-form-group">
				<view class="title">手机号</view>
				<input v-model="informationObj.phoneNum" type="number" name="input" />
			</view>
			<view class="cu-form-group">
				<view class="title">与本人关系</view>
				<input v-model="informationObj.relation"  type="number" name="input" />
			</view>
		</form>
		<view class="confirm">
			<view  @click="updateFamilyInfo()" >确认修改</view>
			<view  @click="deleteFamily(informationObj.patientCard)">删除家庭成员</view>
		</view>
	</view>
</template>
<script>
	import filingApi from '@/api/filingApi.js'
	import CustomNavBar from '@/components/CustomNavBar.vue';
	import mixin from '@/mixins/mixin'
	export default {
		mixins: [mixin],
		components:{
			CustomNavBar,
		},
		data(){
			return {
				informationObj:{
					relation:'',
					patientName:'',
					sex:'',
					nationality:'',
					dob:'',
					address:'',
					patientCard:'',
					phoneNum:'',
				},
			}
		},
		computed:{
			startDate() { return this.getDate('start') },
			endDate() { return this.getDate('end') }
		},
		onLoad(e) {
			this.informationObj = JSON.parse(decodeURIComponent(e.informationObj));
			console.log(JSON.stringify(this.informationObj));
		},
		mounted() {
			this.showBack = true;
			this.title = '修改信息';
		},
		methods: {
			bindDateChange: function(e) { //选择日期
			    this.informationObj.dob = e.detail.value
			},
			getDate(type) { //年月日
			    const date = new Date();
			    let year = date.getFullYear();
			    let month = date.getMonth() + 1;
			    let day = date.getDate();
			    			
			    if (type === 'start') {
			        year = year - 100;
			    } else if (type === 'end') {
			        year = year;
			    }
			    month = month > 9 ? month : '0' + month;
			    day = day > 9 ? day : '0' + day;
			    return `${year}-${month}-${day}`;
			},
			relationBtn(i){
				this.informationObj.relation = i
			},
			//修改家庭成员信息
			updateFamilyInfo() {
				filingApi.updateFamilyInfo(this.informationObj).then(res => {
					if(res.data.code===200){
						uni.showToast({ title: '修改成功', duration: 2000 });
						setTimeout(()=>{
							uni.navigateBack({
								delta: 3
							});
						},2000)
					}
				})
				.catch(err => {
					console.log('2：', err);
				})	
			},
			//删除
			deleteFamily(card) {
				uni.showModal({
					title: "提示",
					content: "确定删除该成员吗？",
					success: (res) => {
						if (res.confirm) {
							try {
								let loginValue = uni.getStorageSync("loginData");
								let loginData = JSON.parse(loginValue)
								filingApi.deleteFamilyInfo(card, loginData.phoneNum).then(res => {
									if(res.data.code === 200){
										uni.showToast({ title: "删除成功", duration: 2000 });
										setTimeout(()=>{
											uni.navigateBack({
												delta: 3
											});
										},2000)
									}else {
										this.list = []
									}
								})
							} catch (error) {
								console.log(error)
								//TODO handle the exception
							}
						}
					},
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	
	.information {
		width: 100vw;
		height: 100%; 
		display: flex;
		flex-direction: column;
		
		form {
			margin:30rpx 0 30rpx 20rpx;
			overflow: auto;
			
			.cu-form-group {
				min-height: 86rpx;
				.title {
					width: 180rpx;
				}
				input {
					color: #999999;
				}
				.birth{
					height: 86rpx;
					display: inline-block;
					text-align: left;
					width: 420rpx;
					color: #999999;
				}
				.img {
					margin-left: 20rpx;
					width: 26.72rpx;
					height: 25.27rpx;
				}
			}
		}
		
		.confirm {
			
			view{
				width: 534.35rpx;
				height: 87.79rpx;
				border-radius: 43.89rpx;
				margin:60rpx auto;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 30.53rpx;
				font-family: PingFang SC, PingFang SC-600;
				font-weight: 600;
				color: #ffffff;
				line-height: 30.53rpx;
				&:first-child{
					background: #4286ff;
				}
				&:last-child{
					background: #ffffff;
					border: 1.91rpx solid #ff4848;
					color: #FF4848;
				}
			}
			
			
		}
	}
</style>