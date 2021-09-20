
class PrintEditionItem {

  constructor (name, releaseData, pagesCount) {
    this.name = name;
    this.releaseDate = releaseData;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix () {
      this.state = this.state * 1.5;
      if(this.state > 100) {
        return this.state = 100;
      }else
        return this.state;
  }

     set state(number)
    {
      if (number < 0) {
        this.state = 0;
      } else if (number > 100) {
        this.state = 100;
      }
      this._state = number;
    }

    get state()
    {
      return this._state;
    }
  }


class Magazine extends PrintEditionItem {

     constructor (name, releaseData, pagesCount) {
       super(name, releaseData, pagesCount);
       this.type = 'magazine';
     }
}

class Book extends PrintEditionItem {
      constructor (author, name, releaseData, pagesCount) {
        super(name, releaseData, pagesCount);
        this.author = author;
        this.type = 'book';
      }
}

class NovelBook extends Book {
      constructor (author, name, releaseData, pagesCount) {
        super(author, name, releaseData, pagesCount);
        this.type = 'novel';
      }
}



class FantasticBook extends Book {
      constructor (author, name, releaseData, pagesCount) {
        super(author, name, releaseData, pagesCount);
        this.type = 'fantastic';
      }
}


class DetectiveBook extends Book {
      constructor (author, name, releaseData, pagesCount) {
        super(author, name, releaseData, pagesCount);
        this.type = 'detective';
      }
}

class Library {
  constructor (name, books) {
    this.name = name;
    this.books = [];
  }

  addBook (book) {
    this.books.push(book)
    return this.books;
  }

  findBookBy (type, value) {
  for (let i = 0; i < this.books.length; i++) {
    if (this.books[i][type] === value) {
      return this.books[i];
    }
  }
  return null

}
  }

  const library = new Library('Библиотека имени Ленина')
  library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008))
  library.addBook(new FantasticBook('Аркадий и Борис Стругацкие', 'Пикник на обочине', 1972, 168, state = 30));
  library.findBookBy('releaseDate', 1900)
console.log(library.findBookBy())
