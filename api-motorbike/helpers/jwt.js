const expressJwt = require("express-jwt");

function authJwt() {
  const secret = process.env.secret;
  return expressJwt({
    secret,
    algorithms: ["HS256"],
    isRevoked: isRevoked,
  }).unless({
    path: [
      { url: /\/api\/v1\/products(.*)/, methods: ["GET", "OPTIONS"] },
      { url: /\/api\/v1\/orders\/me(.*)/, methods: ["GET", "POST", "OPTIONS"] },
      { url: /\/api\/v1\/categories(.*)/, methods: ["GET", "OPTIONS"] },
      {
        url: /\/api\/v1\/carts\/me(\/.*)?/,
        methods: ["GET", "POST", "DELETE", "OPTIONS"],
      },
      {
        url: /\/api\/v1\/users\/me(\/.*)?/,
        methods: ["GET", "PUT", "OPTIONS"],
      },
      {
        url: /\/api\/v1\/contacts(\/.*)?/,
        methods: ["POST", "OPTIONS"],
      },
      {
        url: /\/api\/v1\/users\/change-password(\/.*)?/,
        methods: ["POST", "OPTIONS"],
      },
      "/api/v1/users/login",
      "/api/v1/users/register",
      "/api/v1/admin/login",
    ],
  });
}

async function isRevoked(req, payload, done) {
  if (req.originalUrl.startsWith("/api/v1/carts/me")) {
    return done(null, false);
  }
  if (req.originalUrl.startsWith("/api/v1/users/change-password")) {
    return done(null, false);
  }

  if (req.originalUrl.startsWith("/api/v1/orders/me")) {
    return done(null, false);
  }
  if (!payload.isAdmin) {
    return done(null, true);
  }

  return done(null, false);
}

module.exports = authJwt;
