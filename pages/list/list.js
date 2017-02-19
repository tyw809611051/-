

Page({
	data:{
		list:[],
    load:true,
    title:'Loading...',
	},
	onLoad (params) {
	   const apiUrl = 'https://api.douban.com/v2/movie/'+params.type+'?count=6';
     const _this = this;
     wx.request({
        url: apiUrl, 
        data: {},
        header: {
            'content-type': 'json'
        },
        success: function(res) {
          console.log(res.data);
          _this.setData({list:res.data.subjects,title:res.data.title,load:false,})
        }
    });
	},
})