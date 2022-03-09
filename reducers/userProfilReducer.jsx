export default function (user = {}, action) {
  if (action.type == "getUser") {
    user = action;
    console.log("ACTIONNN", user);
    return user;
  } else if (action.type == "payer") {
    user.userProfil = {
      count_rating: user.userProfil.count_rating,
      level: user.userProfil.level,
      points: user.userProfil.points + 15,
    };

    console.log(user);

    return user;
  } else {
    return user;
  }
}
