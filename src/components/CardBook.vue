<template>
  <div>
    <p>
      <b>{{ book.name }}</b>
    </p>
    <p>{{ book.author }}</p>
    <p>{{ book.year }}</p>
    <button @click="deleteBook()">Delete</button>
  </div>
</template>
<script>
export default {
  name: "CardBook",
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteBook() {
      this.$emit("deletebook", this.book.id);
    },
  },
};
</script>
