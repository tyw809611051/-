const app=getApp()

Page({
	data:{
		movies:[],
		loading:true,
	},
	onLoad () {
		const _this=this;
		// 请求豆瓣图片数据
		wx.request({
		  url: 'http://api.douban.com/v2/movie/in_theaters?count=3', //仅为示例，并非真实的接口地址
		  data: {},
		  header: {
		      'content-type': 'json'
		  },
		  success: function(res) {
		    console.log(res.data.subject),
		    _this.setData({movies:res.data.subjects,load:false,})
		  }
		})
	},
	start() {
		wx.redirectTo({url:'../board/board'})
	}

})