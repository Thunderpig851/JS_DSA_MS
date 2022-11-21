class Book:
    # Constructor Method
    def __init__(self, author, title):
        self.author = author
        self.title = title

    # Getter Methods
    def getAuthor(self):
        return self.author

    def getTitle(self):
        return self.title

    # Setter Methods
    def setTitle(self, title):
        self.title = title

    def setAuthor(self, author):
        self.author = author

    def getBookAndAuthor(self):
        return self.author + " " + self.title


book1 = Book('Dickens', 'A Christmas Carol')
print(book1.getAuthor())
print(book1.getTitle())

book2 = Book('Palhnuik', 'Fight Club')
print(book2.getAuthor())
print(book2.getTitle())
print(book2.getBookAndAuthor())


