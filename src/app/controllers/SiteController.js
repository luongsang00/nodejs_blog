class SiteController {
  // [Get] / new
  index(req, res) {
    res.render("home");
  }
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
