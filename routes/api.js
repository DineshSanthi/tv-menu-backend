const express = require("express");
const { catchErrors } = require("../handlers/errorHandlers");

const router = express.Router();

const adminController = require("../controllers/adminController");
const categoryController = require("../controllers/categoryController");
const productController = require("../controllers/productController");
const menuController = require("../controllers/menuController");
const todayoffersController = require("../controllers/todayoffersController");

//_______________________________ Admin management_______________________________

router.route("/admin/create").post(catchErrors(adminController.create));
router.route("/admin/read/:id").get(catchErrors(adminController.read));
router.route("/admin/update/:id").patch(catchErrors(adminController.update));
router.route("/admin/delete/:id").delete(catchErrors(adminController.delete));
router.route("/admin/search").get(catchErrors(adminController.search));
router.route("/admin/list").get(catchErrors(adminController.list));

router
  .route("/admin/password-update/:id")
  .patch(catchErrors(adminController.updatePassword));
//list of admins ends here

//_____________________________________ API for FoodCategories ___________________________
router.route("/foodcategories/create").post(catchErrors(categoryController.create));
router.route("/foodcategories/read/:id").get(catchErrors(categoryController.read));
router
  .route("/foodcategories/update/:id")
  .patch(catchErrors(categoryController.update));
router
  .route("/foodcategories/delete/:id")
  .delete(catchErrors(categoryController.delete));
router.route("/foodcategories/search").get(catchErrors(categoryController.search));
router.route("/foodcategories/list").get(catchErrors(categoryController.list));

//_____________________________________ API for FoodItems ___________________________
router.route("/fooditems/create").post(catchErrors(productController.create));
router.route("/fooditems/read/:id").get(catchErrors(productController.read));
router
  .route("/fooditems/update/:id")
  .patch(catchErrors(productController.update));
router
  .route("/fooditems/delete/:id")
  .delete(catchErrors(productController.delete));
router.route("/fooditems/search").get(catchErrors(productController.search));
router.route("/fooditems/list").get(catchErrors(productController.list));

//_____________________________________ API for MenuItems ___________________________
router.route("/menu/create").post(catchErrors(menuController.create));
router.route("/menu/read/:id").get(catchErrors(menuController.read));
router
  .route("/menu/update/:id")
  .patch(catchErrors(menuController.update));
router
  .route("/menu/delete/:id")
  .delete(catchErrors(menuController.delete));
router.route("/menu/search").get(catchErrors(menuController.search));
router.route("/menu/list").get(catchErrors(menuController.list));

//_____________________________________ API for TodayOffers ___________________________
router.route("/todayoffers/create").post(catchErrors(todayoffersController.create));
router.route("/todayoffers/read/:id").get(catchErrors(todayoffersController.read));
router
  .route("/todayoffers/update/:id")
  .patch(catchErrors(todayoffersController.update));
router
  .route("/todayoffers/delete/:id")
  .delete(catchErrors(todayoffersController.delete));
router.route("/todayoffers/search").get(catchErrors(todayoffersController.search));
router.route("/todayoffers/list").get(catchErrors(todayoffersController.list));

module.exports = router;
