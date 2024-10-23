export class Book {
  constructor(id, name, author, year, pages) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.year = year;
    this.pages = pages;
  }
  readBook() {
    console.log(
      "id: " +
        this.id +
        "; name: " +
        this.name +
        "; author: " +
        this.author +
        "; year: " +
        this.year +
        "; pages: " +
        this.pages
    );
  }
}
