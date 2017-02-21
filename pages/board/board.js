Page({
	data:{
		imgUrls:[]
	},
	onLoad (params) {
	   const apiUrl = 'https://api.douban.com/v2/movie/coming_soon?count=5';
     	const _this = this;
	     wx.request({
	        url: apiUrl, 
	        data: {},
	        header: {
	            'content-type': 'json'
	        },
	        success: function(res) {
	          console.log(res.data.subjects);
	          _this.setData({imgUrls:res.data.subjects})
	        }
	    });
	},
})