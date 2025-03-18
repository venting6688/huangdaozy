
 
import { cjRequest } from '@/utils/service.js'
 
 
const prescription = {
	// 获取首页处方列表
	async getPrescription() {
	   	const res = await cjRequest({
	   		url: "getPrescription?cardNo=370223195910180429",
	   		method: "get",
	   	})
	   	return res
	}
}
 
export default prescription