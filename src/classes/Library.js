import { Book } from "./Book";
class Library {
  books = [];
  addBook(book) {
    if (book instanceof Book) {
      this.books.push(book);
    } else {
      console.log("Ошибка!");
    }
  }
  async deleteBook(id) {
    return this.books.find((item, index) => {
      if (item.id == id) {
        this.books.splice(index, 1);
        return item;
      }
    });
  }
  searchBook(authorOrname) {
    let result = [];
    for (let i = 0; i < this.books.length; i++) {
      if (
        this.books[i].author == authorOrname ||
        this.books[i].name == authorOrname
      ) {
        result.push(this.books[i]);
      }
    }
    return result;
  }
  getBooksByYear(year) {
    let result = [];
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].year == year) {
        result.push(...this.books[i]);
      }
    }
    return result;
  }
  async getBooks() {
    try {
      this.books = [
        {
          id: 1,
          name: "1984",
          author: "George Orwell",
          year: 1949,
          pages: 328,
        },
        {
          id: 2,
          name: "To Kill a Mockingbird",
          author: "Harper Lee",
          year: 1960,
          pages: 281,
        },
        {
          id: 3,
          name: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          year: 1925,
          pages: 180,
        },
        {
          id: 4,
          name: "Moby Dick",
          author: "Herman Melville",
          year: 1851,
          pages: 585,
        },
        {
          id: 5,
          name: "War and Peace",
          author: "Leo Tolstoy",
          year: 1869,
          pages: 1225,
        },
        {
          id: 6,
          name: "Pride and Prejudice",
          author: "Jane Austen",
          year: 1813,
          pages: 279,
        },
        {
          id: 7,
          name: "The Catcher in the Rye",
          author: "J.D. Salinger",
          year: 1951,
          pages: 214,
        },
        {
          id: 8,
          name: "The Hobbit",
          author: "J.R.R. Tolkien",
          year: 1937,
          pages: 310,
        },
        {
          id: 9,
          name: "Fahrenheit 451",
          author: "Ray Bradbury",
          year: 1953,
          pages: 158,
        },
        {
          id: 10,
          name: "Jane Eyre",
          author: "Charlotte Brontë",
          year: 1847,
          pages: 500,
        },
        {
          id: 11,
          name: "The Lord of the Rings",
          author: "J.R.R. Tolkien",
          year: 1954,
          pages: 1178,
        },
        {
          id: 12,
          name: "Brave New World",
          author: "Aldous Huxley",
          year: 1932,
          pages: 268,
        },
        {
          id: 13,
          name: "The Picture of Dorian Gray",
          author: "Oscar Wilde",
          year: 1890,
          pages: 254,
        },
        {
          id: 14,
          name: "Animal Farm",
          author: "George Orwell",
          year: 1945,
          pages: 112,
        },
        {
          id: 15,
          name: "Wuthering Heights",
          author: "Emily Brontë",
          year: 1847,
          pages: 368,
        },
        {
          id: 16,
          name: "The Grapes of Wrath",
          author: "John Steinbeck",
          year: 1939,
          pages: 464,
        },
        {
          id: 17,
          name: "Catch-22",
          author: "Joseph Heller",
          year: 1961,
          pages: 453,
        },
        {
          id: 18,
          name: "The Chronicles of Narnia",
          author: "C.S. Lewis",
          year: 1950,
          pages: 767,
        },
        {
          id: 19,
          name: "Les Misérables",
          author: "Victor Hugo",
          year: 1862,
          pages: 1488,
        },
        {
          id: 20,
          name: "The Count of Monte Cristo",
          author: "Alexandre Dumas",
          year: 1844,
          pages: 1276,
        },
        {
          id: 21,
          name: "The Alchemist",
          author: "Paulo Coelho",
          year: 1988,
          pages: 208,
        },
        {
          id: 22,
          name: "The Da Vinci Code",
          author: "Dan Brown",
          year: 2003,
          pages: 454,
        },
        {
          id: 23,
          name: "Harry Potter and the Philosopher's Stone",
          author: "J.K. Rowling",
          year: 1997,
          pages: 223,
        },
        {
          id: 24,
          name: "The Road",
          author: "Cormac McCarthy",
          year: 2006,
          pages: 287,
        },
        {
          id: 25,
          name: "The Fault in Our Stars",
          author: "John Green",
          year: 2012,
          pages: 313,
        },
      ];
    } catch (err) {
      console.log(err);
    } finally {
      console.log("Запрос закончен!");
    }
  }
}

export const libraryModel = new Library();
