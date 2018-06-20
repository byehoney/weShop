// pages/BurstingProjectDetail/BurstingProjectDetail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    name:'',
    phone:'',
    note:''
  },
  nameBlur:function(e){
    this.setData({
        name:e.detail.value
    })
  },
  phoneBlur:function(e){
    this.setData({
        phone: e.detail.value
    })
  },
  noteBlur: function (e) {
      this.setData({
          note: e.detail.value
      })
  },
  infoChange:function(e){
    console.log(e)
    this.setData({
        num:e.detail.value.length
    })
  },
  formSubmit:function(e){
    console.log(e);
    wx.showToast({
        title: '成功',
        icon: 'none',
        duration: 2000
    })
  },
  makeCall:function(){
    wx.makePhoneCall({
        phoneNumber: '13333333333' //仅为示例，并非真实的电话号码
    })
  }
})