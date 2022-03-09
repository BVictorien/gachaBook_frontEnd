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
        description: action.description,
        year: action.year,
        id: action.id,
        price: action.price,
        sellerID: action.sellerID,
      },
    ];
    return newBookDetails;
  } else {
    return bookDetails;
  }
}
