const newRouter = require("./news");

function route(app) {
  app.get("/", (req, res) => {
    res.render("home");
  });

  app.use("/news", newRouter);
}

module.exports = route;
