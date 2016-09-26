// 拿到全局应用程序实例
const app = getApp()
let today = new Date()
const API_URL = 'http://api.pro.mtime.cn/GetOneDayMovieRevenues.api?targetDate=20160926';

// 创建一个页面对象用于控制页面的逻辑
Page({
  data: {
    loading: true,
    movie: {}
  },

  onLoad (params) {
    app.fetchApi(API_URL + params.id, (err, data) => {
      this.setData({ movie: data, loading: false })
    })
  },

  onReady () {
    wx.setNavigationBarTitle({ title: this.data.title + ' « 电影 « 豆瓣' })
  }
})
