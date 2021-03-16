const router = require("express").Router();
const taskController = require("../controllers/taskController");

router.get("/", taskController.list);
router.get("/:taskId", taskController.findById);
router.post("/", taskController.insert);
router.patch("/:taskId", taskController.patchById);
router.delete("/:taskId", taskController.removeById);

module.exports = router;