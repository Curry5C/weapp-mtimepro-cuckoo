// 拿到全局应用程序实例
const app = getApp()

const API_URL = 'http://api.pro.mtime.cn/GetOneDayMovieRevenues.api?targetDate=20160926'

// 创建一个页面对象用于控制页面的逻辑
Page({
  data: {
    title: '加载中...',
    movies: [],
    loading: true,
    boxoffice: '',
    sumSCnt: '',
    newMovieCnt: '',
  },

  onLoad () {
    //调用应用实例的方法获取全局数据
    app.fetchApi(API_URL, (err, data) => {
      //更新数据
      console.log(data)
      this.setData({ title: '电影票房', movies: data.data, loading: false, boxoffice: data.sumRev, sumSCnt:data.sumSCnt, newMovieCnt: data.newMovieCnt})
    })
  }
})
