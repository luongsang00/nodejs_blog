const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongooes");

class CourseController {
  // [Get] / course/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        // res.send(res.json(course));
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }
  // [Get] / course/create
  create(req, res, next) {
    res.render("courses/create");
  }
  //[Post] / course/store
  store(req, res, next) {
    // res.json(req.body);
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(req.body);
    course.save();
    res
      .send("Cours create")
      .then(() => {
        res.redirect("/");
      })
      .catch((error) => {});
  }
}
module.exports = new CourseController();
