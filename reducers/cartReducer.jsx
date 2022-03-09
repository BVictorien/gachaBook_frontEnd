export default function (cart = [], action) {
  if (action.type == "addCart") {
    let newCart = [...cart];
    newCart.push(action.book);
    let total =+ action.book.price;
   
    return newCart;
  } else if (action.type == "deleteFCart") {
    let new2cart = [...cart];
    let new3cart = new2cart.filter((x) => {
      return x.id !== action.bookId;
    });

    // console.log(new2cart);
    return new3cart;
  } else {
    return cart;
  }
}
