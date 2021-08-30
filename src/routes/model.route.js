import express from "express";
import modelController from "../controllers/model";

const router = express.Router();

router.route("/").post(modelController.addModelData);

export default router;