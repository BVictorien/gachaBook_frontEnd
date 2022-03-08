export default function (cart = [], action) {
  if (action.type == "addCart") {
    return cart;
  } else if (action.type == "deleteCart") {
    return cart;
  } else {
    return cart;
  }
}
