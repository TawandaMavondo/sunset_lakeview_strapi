module.exports = [
  "strapi::errors",
  "strapi::security",
  // 'strapi::cors',
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  "api::room.rooms",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      header: "*",
      origin: ["http://localhost:3000"],
    },
  },
];

// module.exports = ({ env }) => ({
//   settings: {
//     cors: {
//       enabled: true,
//       origin: "*",
//     },
//   },
// });
