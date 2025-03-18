export default {
	data(){
		return {
			showBack: false,
			title: '',
			
		}
	},
    methods: {
		// 节流
		throttle(fn, interval) {
		    let lastTime = 0
		    return function (...args) {
		        const nowTime = +new Date()
		        const remainTime = nowTime - lastTime
		        if (remainTime >= interval) {
		            fn.apply(this, args)
		            lastTime = nowTime
		        }
		    }
		},
		convertString(str) {
		      if (/^[+-]?\d+$/.test(str)) {
		        return parseFloat(str).toFixed(2);
		      } else {
		        return str;
		      }
		},
		// 获取近一周的时间
		getWeek(type) { 
		    const now = new Date();
		    const year = now.getFullYear();
		    const month = now.getMonth() + 1;
		    const day = now.getDate();
		    let dateRange = {};
		    let startDate;
		    let endDate;
		    const oneDayMs = 24 * 60 * 60 * 1000; 
		    if (type === '上一周') {
		        // 计算上一周的日期
		        const sevenDaysAgo = now.getTime() - 7 * oneDayMs;
		        startDate = new Date(sevenDaysAgo);
		        endDate = new Date(now.getTime());
		    } else if (type === '下一周') {
		        // 计算下一周的日期
		        startDate = new Date(now.getTime());
		        endDate = new Date(now.getTime() + 7 * oneDayMs);
		    }
		    const startYear = startDate.getFullYear();
		    const startMonth = startDate.getMonth() + 1;
		    const startDay = startDate.getDate();
		    dateRange.startDate = `${startYear}-${this.padDate(startMonth)}-${this.padDate(startDay)}`;
		    const endYear = endDate.getFullYear();
		    const endMonth = endDate.getMonth() + 1;
		    const endDay = endDate.getDate();
		    dateRange.endDate = `${endYear}-${this.padDate(endMonth)}-${this.padDate(endDay)}`;
		    return dateRange;
		},
		padDate(value) {
		    return value < 10 ? '0' + value : value
		},
        pixelateNumber(value) {
            if (value) {
                // 判断括号
                if (value.length > 6) {
                    return `${value[0]}${value[1]}${value[2]}***${value[value.length - 3]}${value[value.length - 2]}${value[value.length - 1]}`
                }
            } else {
                return value
            }
        },
        pixelate(value) {
            if (value) {
                // 判断括号
                let bracket = ''
                if (value.search(/\( | （/)) {
                    let result = /[(,（].*[),）]/.exec(value)
                    if (result) bracket = result[0]
                    value = value.replace(/[(,（].*[),）]/, '')
                }
                if (value.length === 2) {
                    return `${value[0]}*${bracket}`
                }
                if (value.length > 2) {
                    return `${value[0]}*${value[value.length - 1]} ${bracket}`
                }
            } else {
                return value
            }
        },
    },
	onShow() {
	        // 根据当前页面路由动态设置导航栏信息
	        const pages = getCurrentPages();
	        const currentPage = pages[pages.length - 1];
	        const route = currentPage.route;
	        if (route === 'pages/medicine/index') {
	            this.showBack = false;
	            this.title = '智慧中药';
	        } else if (route === 'pages/mine/index') {
	            this.showBack = false;
	            this.title = '我的';
	        }
	    },
}
