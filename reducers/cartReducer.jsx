export default function (cart = [], action) {
  if (action.type == "addCart") {
    let newCart = [...cart];
    newCart.push(action.book);
    console.log(newCart);
    return newCart;
  } else if (action.type == "deleteFCart") {
    let new2cart = [...cart]
    let new3cart = new2cart.filter((x) => {
      console.log("XXXXXXXX",x);
      return (x.id !== action.bookId);
    });
    console.log("ACCCCTIONNNNNN", action);
    // console.log(new2cart);
    return new3cart;
  } else {
    return cart;
  }
}
