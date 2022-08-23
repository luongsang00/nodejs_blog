class NewsController {
  // [Get] / new
  index(req, res) {
    res.render("new");
  }
  show(req, res) {
    res.send("hello");
  }
}
module.exports = new NewsController();
