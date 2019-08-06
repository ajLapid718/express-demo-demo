const router = require("express").Router();
const campusesRouter = require("./campuses");
// make students router to import;

router.use("/campuses", campusesRouter);
// router.use("/students", studentsRouter);

module.exports = router;