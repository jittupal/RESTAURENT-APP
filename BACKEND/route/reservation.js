import  express  from "express";
import { sendreservation } from "../controller/reserve.js";

const router = express.Router();

router.post("/send", sendreservation);

export default router;