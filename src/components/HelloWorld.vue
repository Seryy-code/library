<template>
  <div>
    <input v-model="search" @input="searchBook" />
    <div v-if="getBooks.length > 0">
      <div v-for="book in getBooks" :key="`book_${book.id}`">
        <CardBook :book="book" @deletebook="deleteBookOnLibrary" />
      </div>
    </div>
    <div v-else>Да нихуя здесь нет блятб</div>
  </div>
</template>

<script>
import { libraryModel } from "@/classes/Library.js";
import CardBook from "@/components/CardBook.vue";

export default {
  name: "HelloWorld",
  components: {
    CardBook,
  },
  data() {
    return {
      books: [],
      search: "",
    };
  },
  computed: {
    getBooks() {
      return this.books;
    },
  },
  methods: {
    searchBook() {
      if (this.search != "") {
        let search = this.search.toLowerCase();
        this.books = libraryModel.books.filter((item) => {
          if (
            item.author.toLowerCase().includes(search) ||
            item.name.toLowerCase().includes(search)
          ) {
            return item;
          }
        });
      } else {
        this.books = libraryModel.books;
      }
    },
    async deleteBookOnLibrary(id) {
      libraryModel.deleteBook(id).then(() => {
        this.books = [...libraryModel.books];
      });
    },
  },
  async created() {
    libraryModel.getBooks().then(() => {
      this.books = libraryModel.books;
    });
  },
};
</script>
