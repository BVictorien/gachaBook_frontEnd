export default function (userId = "", action) {
  if (action.type == "getUserId") {
      console.log(action)
    return action.userId;
  }else if (action.type == "disconnect2") {
    return userId="";
  } 
  else {
    return userId;
  }
}
