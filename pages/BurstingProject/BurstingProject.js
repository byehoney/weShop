// pages/BurstingProject/BurstingProject.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showType:false,//展示类型下拉
    showOrder:false,//展示排序
    typeid:'',//类型id
    orderid:'',//排序id
    typeText:'全部',
    orderText:'排序',
    prolist:[1,2,3],
    loading:false
  },
  onLoad:function(){
  },
  changeType:function(){
    this.setData({
        showType:!this.data.showType,
        showOrder:false
    });
  },
  changeOrder:function () {
      this.setData({
          showOrder: !this.data.showOrder,
          showType:false
      });
  },
  selectType:function(e){
    console.log(e);
    this.setData({
        typeid: e.target.dataset.typeid,
        showType:false,
        typeText: e.target.dataset.typetext
    })
  }, 
  selectOrder: function (e) {
    console.log(e);
    this.setData({
        typeid: e.target.dataset.orderid,
        showOrder: false,
        orderText: e.target.dataset.ordertext
    })
  },
  onReachBottom: function (e) {
    if(this.data.prolist.length>5){
        wx.showLoading({
            title: '到底了',
            icon: 'success',
            duration: 1000
        })
        return;
    }
    if(this.data.loading){
        return;
    }
    this.setData({
        loading:true
    })
    var that =this;
    console.log(e)
    wx.showLoading({
        title: '加载中',
    })
    setTimeout(function () {
        that.data.prolist.push(6);
        that.setData({
            prolist:that.data.prolist,
            loading:false
        });
        console.log(that.data)
        wx.hideLoading();
        
    }, 2000)
    // Do something when page reach bottom.
  },
  jumpToDetail:function(e){
    console.log(e)
    var pid=e.currentTarget.dataset.proid
    wx.navigateTo({
        url: '../../pages/BurstingProjectDetail/BurstingProjectDetail?id=' + pid
    })
  }
})