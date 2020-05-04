//const wrap = document.querySelector('wrapper');
//console.log(wrap); 
var books = document.querySelectorAll('book-list.title');

Array.from(books).forEach(function(book){
book.textContent = 'test'; 
});

const bookList = documentquerySelector('#book-list');
booklist.innerHTML += '<p>my life<\p>';