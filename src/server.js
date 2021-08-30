import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const { log, error } = console;

const router = express.Router();

const port = process.env.PORT || 3000;


import modelRoutes from "./routes/model.route";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.use("/model", modelRoutes);

app.use("/api", router);

app.listen(port, () => log("server is running"));
export default app;