const cookie = require("cookie");

// Set a cookie
const setCookie = (res, cookieValue, cookieName) => {
  const cookieOptions = {
    httpOnly: true, // Cookie is accessible only through HTTP(S) requests, not client-side JavaScript
    maxAge: 7200, // Cookie expires after 2 hour (in seconds)
    sameSite: "strict", // Cookie is not sent on cross-site requests
  };

  const cookieString = cookie.serialize(cookieName, cookieValue, cookieOptions);

  res.setHeader("Set-Cookie", cookieString);
};

// Get a cookie
const getCookie = (req, cookieName) => {
  const cookieHeader = req.headers.cookie;
  if (cookieHeader) {
    const cookies = cookie.parse(cookieHeader);
    const cookieValue = cookies[cookieName];
    return cookieValue;
  }

  return null;
};

module.exports = {
  setCookie,
  getCookie,
};
