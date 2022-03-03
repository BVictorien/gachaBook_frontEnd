export default function (userId = "", action) {
  if (action.type == "getUserId") {
      console.log(action)
    return action.userId;
  } else {
    return userId;
  }
}
