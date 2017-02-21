Page({
	data:{
		imgUrls:[
			"http://img3.doubanio.com/img/celebrity/large/53186.jpg",
		]
	},
	onLoad (params) {
		const apiUrl = 'https://api.douban.com/v2/movie/subject/'+params.id;
     	const _this = this;
	     wx.request({
	        url: apiUrl, 
	        data: {},
	        header: {
	            'content-type': 'json'
	        },
	        success: function(res) {
	          console.log(res.data);
	          _this.setData({
	          	imgUrls:res.data.images,
	          	title:res.data.title,
	          	year:res.data.year,
	          	content:res.data.summary,
	          	rating:res.data.rating,
	          	directors:res.data.directors,
	          	casts:res.data.casts,
	          })
	        }
	    });
	},
		
})