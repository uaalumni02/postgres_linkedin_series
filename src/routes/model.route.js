import express from "express";
import modelController from "../controllers/model";

const router = express.Router();

router.route("/").post(modelController.addModelData);

router.route("/").get(modelController.getAllModels);

export default router;