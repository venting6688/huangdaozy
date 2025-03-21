import { cjRequest } from '@/utils/service.js'
const patient = {
	//获取手机验证码
	async sendVerificationCode(phoneNum) {
		const res = await cjRequest({
			url: "sendVerificationCode",
			method: "get",
			data:{
					phoneNum:phoneNum,
			}
	 
		})
		return res
	},
	//建档
	async Filing(filingDTO) {
		const res = await cjRequest({
			url: "Filing",
			method: "post",
			data:filingDTO,
			
	
		})
		return res
	},
	//获取家庭成员列表
	async getFamilyList(phone) {
		const res = await cjRequest({
			url: "refreshUserInfo?phoneNum="+phone,
			method: "get",
		})
		return res
	},
	// add family
	async queueFilingInfo(filingDTO) {
		const res = await cjRequest({
			url: "queueFilingInfo",
			method: "post",
			data:filingDTO,
		})
		return res
	},
	// update family
	async updateFamilyInfo(detail) {
		const res = await cjRequest({
			url: "diagnose/archives/edit",
			method: "PUT",
			data: detail,
		})
		return res
	},
	//delete family
	async deleteFamilyInfo(card, phone) {
		const res = await cjRequest({
			url: "diagnose/archives/remove?patientCard="+card+"&accountPhoneNumber="+phone,
			method: "delete",
		})	
		return res
	},
}
 
export default patient