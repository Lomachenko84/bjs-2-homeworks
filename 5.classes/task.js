class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null// Ваш код    
    }
    fix = function () {
        this.state = this.state * 1.5
    }
    set state(num) {
        if (num < 0) {
            this._state = 0;
            return
        }
        if (num > 100) {
            this._state = 100;
            return
        }
        this._state = num;
    }
    get state() {
        return this._state;
    }
}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = "magazine"

    }
}
class Book extends PrintEditionItem {
    constructor(author,name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.author = author
        this.type = "book"

    }
}
class NovelBook extends Book {
    constructor(author,name, releaseDate, pagesCount) {
        super(author,name, releaseDate, pagesCount)
        this.type = "novel"
    }
}
class FantasticBook extends Book {
    constructor(author,name, releaseDate, pagesCount) {
        super(author,name, releaseDate, pagesCount)
        this.type = "fantastic"
    }
}
class DetectiveBook extends Book {
    constructor(author,name, releaseDate, pagesCount) {
        super(author,name, releaseDate, pagesCount)
        this.type = "detective"
    }
}

class Library {
    constructor(name) {
        this.name = name
        this.books = []
    }
    addBook = function (book) {
        if (book.state > 30)
            this.books.push(book)
    }
    findBookBy = function (type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value){
                return this.books[i]    
            }
            else {
                continue   
            }
        }        
        return null
    }
    giveBookByName = function (bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i]['name'] === bookName){
                return this.books.splice(i, 1)[0];
            }
            else {
                continue   
            }
        }        
        return null
    }
}
    