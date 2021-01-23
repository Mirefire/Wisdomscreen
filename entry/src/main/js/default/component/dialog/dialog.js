export default{
    props:['content','showtow'],
    data() {
        return {
            diashow: this.showtow,
        };
    },
    onInit() {
        this.$watch('showtow', 'onPropertyChange');
    },
    onPropertyChange(newV, oldV){
        this.diashow = newV
    },
    open(){
        this.showTow = true
    },
    cancelSchedule(){
       this.showtow = false
        this.$emit('callback',{
            value:'取消'
        })
    },
    setSchedule(){
        this.showtow = false
        this.$emit('callback',{
            value:'确定'
        })
    },
}