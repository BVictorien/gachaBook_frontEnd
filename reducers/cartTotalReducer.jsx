export default function (total = 0, action) {
  if (action.type == "addTotal") {
    let newTotal = total + parseInt(action.price);
    
    return newTotal;
  } else if (action.type == "subCart") {
    let new2Total = total - parseInt(action.price);
   
    return new2Total;
  } else {
    return total;
  }
}
