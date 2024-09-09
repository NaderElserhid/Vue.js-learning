const app = Vue.createApp({
  data(){
    return {
        showBook: true,
        title : 'clean code',
        lastName  : 'Elserhid',
        age : 26,
  }
},
methods: {
    toggleShowBooks(){
       this.showBook = !this.showBook
    }
  }
})

app.mount("#app") 