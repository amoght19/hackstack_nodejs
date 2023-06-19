const Users = require("../models/user");
const cookie = require("../cookies/cookies");
const RestrauntName = "Restraunt";

const getUserOrdersHandler = async (req, res) => {
  const userId = cookie.getCookie(req, "user");

  if (userId) {
    try {
      const userData = await Users.findById(userId);
      const orders = userData.orderDetails;
      res.render("userOrders", {
        orders: userData.orderDetails,
      });
    } catch (err) {
      res.render("error", { Message: err.message });
    }
  } else {
    res.render("auth", { RestrauntName: RestrauntName });
  }
};

const orderPlaceHandler = async (req, res) => {
  const orderData = req.body.data;
  const userId = cookie.getCookie(req, "user");
  if (userId) {
    try {
      const userData = await Users.findById(userId);
      userData.orderDetails.push(orderData);
      await userData.save();
      res.redirect("/order/confirmation");
    } catch (err) {
      res.render("error", { Message: err.message });
    }
  } else {
    res.render("auth", { RestrauntName: RestrauntName });
  }
};

const confirmationHandler = (req, res) => {
  const userId = cookie.getCookie(req, "user");
  if (userId) {
    res.render("confirmation");
  } else {
    res.redirect("/");
  }
};

module.exports = {
  orderPlaceHandler,
  getUserOrdersHandler,
  confirmationHandler,
};
