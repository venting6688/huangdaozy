 function loginData(state) {
	return new Promise((resolve, reject) => {
		if(state===1 ){
			resolve(true)
			return
		}
		let loginValue = uni.getStorageSync("loginData");
		if (!loginValue) {
			uni.showModal({
				title: '您未登录账户，请您登录后使用。',
				cancelText: '暂不登录',
				confirmText: '立即登录',
				confirmColor: '#576B95',
				success: res => {
					if (res.confirm) { 
						uni.navigateTo({
							url:"/sub_packages/login/index?title=山东第一医科大学第二附属医院"
						})
					} else if (res.cancel) { 
						wx.exitMiniProgram()
					}
				},	
				fail: () => {},
				complete: () => {}
			});
		} else {
			let data = JSON.parse(loginValue)
			if(state===2){
				resolve(true)
				return
			}
			if(!data.defaultArchives){
				uni.showModal({
					title: '未查询到您的建档信息，请建档后使用',
					cancelText: '退出',
					confirmText: '立即绑定',
					confirmColor: '#576B95',
					success: res => {
						if (res.confirm) { 
							uni.navigateTo({
								url:"/sub_packages/filing/identityCard"
							})
						} else if (res.cancel) {
							wx.exitMiniProgram()
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}else{
				resolve(true)
			}
		}
	})
	
}
export default {
	loginData
}