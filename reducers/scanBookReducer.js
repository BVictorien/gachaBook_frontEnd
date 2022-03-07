export default function (bookDetails = [], action) {
  if (action.type == "BookDetail") {
    var newBookDetails = [...bookDetails];
    newBookDetails = [
      {
        title: action.title,
        author: action.author,
        language: action.language,
        pageCount: action.pageCount,
        barcode: action.barcode,
        editor: action.editor,
        imageLink: action.imageLink,
      },
    ];
    return newBookDetails;
  } else {
    return bookDetails;
  }
}
