// 拿到全局应用程序实例
const app = getApp()

const API_URL = 'http://api.pro.mtime.cn/GetDailyTheaterRevenueRanking.api?targetDate=20160925&pageSize=50'

// 创建一个页面对象用于控制页面的逻辑
Page({
  data: {
    title: '加载中...',
    movies: [],
    loading: true,
    day: '',
  },

  onLoad () {
    //调用应用实例的方法获取全局数据
    app.fetchApi(API_URL, (err, data) => {
      //更新数据
      this.setData({ title: '影院票房', cinemas: data.data, loading: false, day: data.dt })
    })
  }
})