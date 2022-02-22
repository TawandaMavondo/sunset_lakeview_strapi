module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '937054845a1170b947472947cc15934d'),
  },
});
