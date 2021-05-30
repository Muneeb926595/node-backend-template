exports.get404 = (req, res, next) => {
  return res.status(404).send("Page not found");
};
