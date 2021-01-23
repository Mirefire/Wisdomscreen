import router from '@system.router'
import prompt from '@system.prompt'

export default {
    data: {
        title: 'World',
        conentx:'',
        globalX:[],
        globalY:[],
        globalZ:[],
        chossindex:0,
        candraw:false,
        showico:0,
        topval:'150px',
        iconpath:'/common/icon/right.png',
        list:[
            {
                id:1,
                txt:'返回'
            },
            {
                id:2,
                txt:'画画'
              },
            {
                id:3,
                txt:'签字'
            },
            {
                id:4,
                txt:'会议'
            }
        ]
    },
    onInit(){

    },
    showIcon(){
        if (this.showico != 1 || this.showico==2) {
            this.showico = 1
            this.iconpath = '/common/icon/left.png'
            this.topval = '0px'
            return
        }
        if (this.showico == 1) {
            this.showico = 2
            this.iconpath = '/common/icon/right.png'
            this.topval = '150px'
            return
        }
    },
    goback(){
        router.back()
    },
    drwa(index){
        this.chossindex= index
        if (index==1 || index == 2 ) {
            const el = this.$refs.canvas;
            this.conentx = el.getContext('2d')
            this.conentx.fillStyle = '#0f0'
            this.conentx.beginPath()
            this.conentx.stroke()
        }
        if (index == 0) {
            this.goback()
            this.conentx = ''
        }
        if (index == 3) {
            this.conentx = ''
        }
    },
    clear(){
        this.conentx.clearRect(0,0,600,400)
    },
    restore(){
        this.conentx.restore()
    },
    save(){
        if (this.globalZ.length == 0) {
            prompt.showToast({
                message: '签名不能空'
            })
            return false
        }
        if (this.globalZ.length<10) {
            prompt.showToast({
                message: '重新签名'
            })
            return false
        }
        this.conentx.save()
    },
    // 偏移很多
    touchstart(e){

        this.candraw = true
        const touches = e.touches[0]
        this.globalX.push(touches.localX)
        this.globalY.push(touches.localY)
        this.globalZ.push(0)
    },
    touchmove(e){

        if (this.candraw) {

            const gx =this.globalX
            const gY =this.globalY
            const touches = e.touches[0]
            this.globalZ.push(1)

            this.conentx.fillStyle = '#0f0'
            this.conentx.lineWidth = '4'
            this.conentx.beginPath()
            this.conentx.moveTo(gx[gx.length-1],gY[gx.length-1])
            this.conentx.lineTo(touches.localX,touches.localY)
            this.conentx.stroke()
            this.globalX.push(touches.localX)
            this.globalY.push(touches.localY)

        }
    },
    touchcancel(e){
        const touches = e.touches[0]
        this.globalX.push(touches.localX)
        this.globalY.push(touches.localY)
    },
    touchend(e){
        this.globalX=[]
        this.globalY = []
        this.globalZ = []
        this.candraw = false
    }
}
