var handleSearch = function(event) {
  event.preventDefault();
  // Get the search terms from the input field
  var searchTerm = event.target.elements['search'].value;
  // Tokenize the search terms and remove empty spaces
  var tokens = searchTerm
                .toLowerCase()
                .split(' ')
                .filter(function(token){
                  return token.trim() !== '';
                });
 if(tokens.length) {
  //  Create a regular expression of all the search terms
  var searchTermRegex = new RegExp(tokens.join('|'), 'gim');
  var filteredList = books.filter(function(book){
    // Create a string of all object values
    var bookString = '';
    for(var key in book) {
      if(book.hasOwnProperty(key) && book[key] !== '') {
        bookString += book[key].toString().toLowerCase().trim() + ' ';
      }
    }
    // Return book objects where a match with the search regex if found
    return bookString.match(searchTermRegex);
  });
  // Render the search results
  render(filteredList);
 }
};