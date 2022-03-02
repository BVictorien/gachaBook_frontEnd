export default function (bookDetails = [], action) {
  if (action.type == "BookDetail") {
    var newBookDetails = [...bookDetails];
    newBookDetails = [{ title: action.title, author: action.author }];
    return newBookDetails;
  } else {
    return bookDetails;
  }
}
