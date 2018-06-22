// pages/super/super.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cIndex:0,
    styleone: 'transform:translate(0, 0px) translateZ(0px) scale(1);position:absolute;width:100%;height:100%;top:0',
    styleTwo: 'transform:translate(100%, 0px) translateZ(0px) scale(1);position:absolute;width:100%;height:100%;top:0',
    styleThree: 'transform:translate(200%, 0px) translateZ(0px) scale(1);position:absolute;width:100%;height:100%;top:0',
    styleFour: 'transform:translate(300%, 0px) translateZ(0px) scale(1);position:absolute;width:100%;height:100%;top:0',
    styleFive: 'transform:translate(400%, 0px) translateZ(0px) scale(1);position:absolute;width:100%;height:100%;top:0',
    nstyleone: 'transform:translate(0, 0px) translateZ(0px) scale(0.9);position:absolute;width:100%;height:100%;top:0',
    nstyleTwo: 'transform:translate(100%, 0px) translateZ(0px) scale(0.9);position:absolute;width:100%;height:100%;top:0',
    nstyleThree: 'transform:translate(200%, 0px) translateZ(0px) scale(0.9);top:0',
    nstyleFour: 'transform:translate(300%, 0px) translateZ(0px) scale(0.9);position:absolute;width:100%;height:100%;top:0',
    nstyleFive: 'transform:translate(400%, 0px) translateZ(0px) scale(0.9);position:absolute;width:100%;height:100%;top:0',
    toView:'con1'
  },
  onShow:function(){
    this.setData({
        cIndex: 0
    })
  },
  finishSwiper:function(e){
    this.setData({
        cIndex: e.detail.current
    })
  },
  tabTap:function(e){
    console.log(e);
    this.setData({
        toView: e.currentTarget.dataset.tabid
    })
  },
  contentChange:function(e){
      console.log(e)
      return false;
  }
})