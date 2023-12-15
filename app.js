const { createApp, ref } = Vue
createApp({
    setup() {
      const message = ref('Hello vue!')
      return {
        message
      }
    },
    data() {
        return {
            title: "Book's Library",
            books: [
                {
                    title: "book1",
                    author: "iqbal",
                    url: "https://jatismobile.com",
                    img: "book.png",
                    isFav: false,
                },
                {
                    title: "book2",
                    author: "labqi",
                    url: "https://jatismobile.com",
                    img: "book.png",
                    isFav: true,
                },
                {
                    title: "book3",
                    author: "whoever",
                    url: "https://jatismobile.com",
                    img: "book.png",
                    isFav: false,
                }
            ],
        }
    },
    methods: {
        changeTitle(newTitle) {
            this.title = newTitle
        },
        handleEvent(e) {
            console.log(e.type)
        },
        handleEventArgs(e, data) {
            console.log(e.type + "-" + data)
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter(b => b.isFav)
        }
    }
}).mount('#app')