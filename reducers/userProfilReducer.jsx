export default function (user = {}, action) {
  if (action.type == "getUser") {
    user = action;

    return user;
  } else if (action.type == "payer") {
    user.userProfil = {
      count_rating: user.userProfil.count_rating - action.price,
      level: user.userProfil.level,
      points: user.userProfil.points + 15,
    };

    return user;
  } else {
    return user;
  }
}
