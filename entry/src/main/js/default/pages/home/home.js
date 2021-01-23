import router from '@system.router';
import prompt from '@system.prompt';

export default {
    data: {
        title: '视频中心',
        content:'',
        showTow:false,
        choose:0,
        btnList:[
            {
                id:1,
                txt:'视频中心'
            },
            {
                id:2,
                txt:'图库中心'
            },
            {
                id:3,
                txt:'消息中心'
            },
            {
                id:4,
                txt:'会议'
            },
            {
                id:5,
                txt:'设置'
            },
            {
                id:6,
                txt:'全部菜单'
            },
        ]
    },
    onInit(){
    },
    getvalue(e){
        console.info(e)
    },
    openvideo(index,t){
        this.choose = index
        if(index == 0){
            this.content = t
            this.goNext('pages/index/index',t)
        }else if(index==1){
            router.push({
                uri:'pages/gallerycenter/gallerycenter'
            })
        }else if(index==3){
            router.push({
                uri:'pages/meeting/meeting'
            })
        }else{
            this.content='功能未开发'
            this.showTow = true
        }
    },
    goNext(url,t){
        router.push({
            uri:url,
            params:{
                title:t
            }
        })
    }
}
