export default function (token = "", action) {
  if (action.type == "addToken") {
    return action.token;
  } else if (action.type == "disconnect1") {
    return (token = "");
  } else {
    return token;
  }
}
