module.exports = {
  routes: [
    {
      method: "POST",
      path: "/booking/available",
      handler: "available.index",
      config: {
        auth: false,
      },
    },
  ],
};
