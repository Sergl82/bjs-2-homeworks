class PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
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
    if (book.state >= 30){
      this.books.push(book)
    }
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

  giveBookByName (bookName) {
    let bookSearch = [];
    for (let key in this.books) {
      if(this.books[key].name === bookName) {
        bookSearch.push(this.books[key])
        this.books.splice(bookSearch, 1)
      }
    }
    return bookSearch;
  }

   }

//задача 3

class Student {
  // ваш код
  constructor (name, journal) {
    this.name = name;
    this.journal = [];

  }

  addMark(mark, subject) {
   if (mark < 6 && mark > 0) {
     this.journal.push({ subject, mark });
     return this.journal;
   }else
     return  "Ошибка, оценка должна быть числом от 1 до 5";
  }

  getAverageBySubject(subject) {
    let sum = [];
    let average;
    this.journal.filter((item) => {
      if (item.subject === subject) {
        sum.push(item.mark)
        average = sum.reduce((a, b) => a + b) / sum.length;
      }
    return 'Несуществующий предмет';
    });
    return average;
  }

  getAverage(){
    let sum = [];
    let average;
    this.journal.filter((item) => sum.push(item.mark))
     return  sum.reduce((a, b) => a + b) / sum.length;
  }

  exclude(){
    delete this.journal.subject;
    return "Исключен за попытку подделать оценки";
  }
}

const student = new Student("Олег Никифоров" );
student.addMark(3, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");
console.log(student.addMark(6,'geometry'));
