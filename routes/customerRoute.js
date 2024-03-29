const router = require("express").Router();
const customerController = require("../controllers/customerController");
const auth = require("../middlewares/auth");
const authAdmin = require("../middlewares/authAdmin");
const authOther = require("../middlewares/authOther");
router.post("/add", auth, authAdmin, customerController.register);
router.get("/:id", auth, customerController.getById);
router.get("/search/:query", auth, customerController.search);
router.post("/files", auth, customerController.getFilter);
router.post("/monitoring", auth, customerController.getMonitoring);
router.get("/", auth, customerController.getAll);
router.patch("/update/:id", auth, authAdmin, customerController.update);
router.patch("/enable/:id", auth, authAdmin, customerController.enable);
router.patch(
  "/validation/:id",
  auth,
  authAdmin,
  customerController.auto_validation
);
router.post("/self_validation", auth, authOther, customerController.validation);
router.post("/payement_detail", auth, customerController.readFile);
router.delete(
  "/delete/:id/:username",
  auth,
  authAdmin,
  customerController.delete
);

module.exports = router;
