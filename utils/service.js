import login from './login.js'
let requestCount = 0
export const cjRequest = (parmas,state) => {
	return new Promise((resolve, reject) => {
		const baseUrl = "https://www.chinzsoft.com/api/mobile2/"
		if(!state){
			requestCount++;
			uni.showLoading({
				title:'加载中'
			})
		}
		wx.request({
				...parmas,
				url: baseUrl + parmas.url,
				success: (result) => {
		if(!state){
			requestCount--;
			if(!requestCount){
				uni.hideLoading()
			}
		}
						resolve(result)
				},
				fail: (err) => {
						reject(err)
				},
			 
		});
	})
    
}
 