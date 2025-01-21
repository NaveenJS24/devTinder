const adminAuth = (req, res, next) => {
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";

  console.log("admin auth");
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized entry");
  } else {
    next();
  }
};
const userAuth = (req, res, next) => {
  const token = "xyz";
  const isUserAuthorized = token === "xyz";

  console.log("User auth");
  if (!isUserAuthorized) {
    res.status(401).send("Unauthorized entry");
  } else {
    next();
  }
};

module.exports = { adminAuth, userAuth };
