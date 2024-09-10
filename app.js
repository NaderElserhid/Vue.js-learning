const app = Vue.createApp({
  data(){
    return {
        showBook: true,
        x:0,
        y:0,
     books:[
        {title : 'clean code', author  : 'nader' , date : 2020 ,img: 'assets/1.jpg' , isFav : true},
        {title : 'moon ', author  : 'elserhid', date : 2022, img: 'assets/2.jpg', isFav : false} ,
        {title : 'one way ', author  : 'maher' , date : 2000 , img: 'assets/3.jpg', isFav : true},
     ]
  }
},
methods: {
    toggleShowBooks(){
       this.showBook = !this.showBook
    },
    handelEvent(e){
        console.log(e ,e.type);
        if(data){
            console.log(data);
            
        }
    },
    handlemove(e){
     this.x = e.offsetX
     this.y = e.offsetY
    },
    showFav(data){
      data.isFav =!data.isFav 
    }
  },
  computed:{
filteredBooks(){
  return this.books.filter((book) => book.isFav)
}
  }
})

app.mount("#app") 