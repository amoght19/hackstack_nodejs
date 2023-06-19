const Users = require("../models/user");
const cookie = require("../cookies/cookies");
const RestrauntName = "Restraunt";

const userDataHandler = async (req, res) => {
  const userId = cookie.getCookie(req, "user");
  if (userId) {
    try {
      const userData = await Users.findById(userId);
      const orders = userData.orderDetails;
      res.render("userInfo", {
        username: userData.username,
        email: userData.email,
        orders: userData.orderDetails,
        RestrauntName: RestrauntName,
      });
    } catch (err) {
      res.render("error", { Message: err.message });
    }
  } else {
    res.render("auth", { RestrauntName: RestrauntName });
  }
};

module.exports = {
  userDataHandler,
};
