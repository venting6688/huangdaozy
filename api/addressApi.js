import { cjRequest } from '@/utils/service.js'
const address = {
	// get list
	async getAddressList(phone) {
	   	const res = await cjRequest({
	   		url: "dierzhongyiyuan/deliveryAddress/list?accountPhoneNumber="+phone,
	   		method: "get",
	   	})
	   	return res
	},
	//add address
	async addAddresInfo(details) {
		const res = await cjRequest({
			url: "dierzhongyiyuan/deliveryAddress/add",
			method: "post",
			data: details,
		})
		return res
	},
	
	//update address
	async editAddresInfo(details) {
		const res = await cjRequest({
			url: "dierzhongyiyuan/deliveryAddress/edit",
			method: "put",
			data: details,
		})
		return res
	},
	//delete address
	async deleteAddress(id) {
		const res = await cjRequest({
			url: "dierzhongyiyuan/deliveryAddress/"+id,
			method: "delete",
		})
		return res
	},
	
	//物流配送
	async confirmDelivery(details) {
		const res = await cjRequest({
			url: "dierzhongyiyuan/cloudDeliveryLog/confirmDelivery",
			method: "post",
			data: details
		})
		return res
	},
}
 
export default address