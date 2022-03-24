module.exports = {
  routes: [
    {
      method: "POST",
      path: "/create-token",
      handler: "payment.token",
    },
  ],
};
