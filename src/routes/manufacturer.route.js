import express from "express";
import manufacturerController from "../controllers/manufacturer";

const router = express.Router();

router.route("/").post(manufacturerController.addManufacturerData);

export default router;
