import router from '@system.router';
export default {
    data: {
        title: 'World',
        animationName:''
    },
    onInit(){

    },
    searchTap(){
        const that = this
        this.animationName ='animation-input'
    },
    goback(){
        router.back()
    }

}
