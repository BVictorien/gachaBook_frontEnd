export default function (username = "", action) {
  if (action.type == "addUsername") {
    return action.username;
  } else if (action.type == "disconnect3") {
    return (username = "");
  } else {
    return username;
  }
}
