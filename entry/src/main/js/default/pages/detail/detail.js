import router from '@system.router';
export default {
    data: {
        name: '测试视频'
    },
    onInit(){
        this.title = this.name
        this.videoUrl = this.videoUrl
    },
    goback(){
        router.back()
    },
    /**
     * 操作
    **/
    stop(){
        this.$element("video").pause()
    },
    start(){
        this.$element("video").start()
    },
    setCur(){
        this.$element("video").setCurrentTime({
            currenttime: 20
        })
    },
    /**
     * 视频自身事件
     * **/
    timeupdate(e){
        console.log(e.currenttime)
    },
    seeking(e){
        console.log(e.currenttime)
    }
}
