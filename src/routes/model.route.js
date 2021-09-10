import express from "express";
import modelController from "../controllers/model";

const router = express.Router();

router.route("/").post(modelController.addModelData);

router.route("/").get(modelController.getAllModels);

router
  .route("/:id")
  .get(modelController.getModelById)
  .patch(modelController.updateModel)
  .delete(modelController.deleteModel);

export default router;
