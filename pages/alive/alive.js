Page({
    onReady(res) {
        this.ctx = wx.createLivePlayerContext('player');
        var socketOpen = false
        var socketMsgQueue = []
        wx.connectSocket({
            url: 'test.php'
        })

        wx.onSocketOpen(function (res) {
            socketOpen = true
            for (var i = 0; i < socketMsgQueue.length; i++) {
                sendSocketMessage(socketMsgQueue[i])
            }
            socketMsgQueue = []
        })

        function sendSocketMessage(msg) {
            if (socketOpen) {
                wx.sendSocketMessage({
                    data: msg
                })
            } else {
                socketMsgQueue.push(msg)
            }
        }
    },
    statechange(e) {
        console.log('live-player code:', e.detail.code)
    },
    error(e) {
        console.error('live-player error:', e.detail.errMsg)
    },
    bindPlay() {
        this.ctx.play({
            success: res => {
                console.log('play success')
            },
            fail: res => {
                console.log('play fail')
            }
        })
    },
    bindPause() {
        this.ctx.pause({
            success: res => {
                console.log('pause success')
            },
            fail: res => {
                console.log('pause fail')
            }
        })
    },
    bindStop() {
        this.ctx.stop({
            success: res => {
                console.log('stop success')
            },
            fail: res => {
                console.log('stop fail')
            }
        })
    },
    bindResume() {
        this.ctx.resume({
            success: res => {
                console.log('resume success')
            },
            fail: res => {
                console.log('resume fail')
            }
        })
    },
    bindMute() {
        this.ctx.mute({
            success: res => {
                console.log('mute success')
            },
            fail: res => {
                console.log('mute fail')
            }
        })
    }
})