export default function (total = 0, action) {
  if (action.type == "addTotal") {
    let newTotal = total + parseInt(action.price);
    console.log(newTotal);
    return newTotal;
  } else if (action.type == "subCart") {
    let new2Total = total - parseInt(action.price);
    console.log(new2Total);
    return new2Total;
  } else {
    return total;
  }
}
