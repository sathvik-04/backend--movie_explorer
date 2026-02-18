import express from "express";

import { addToWatchlist, removeFromWatchlist, updateWatchlistItem } from "../controllers/watchlistcontroller.js";
import authMiddleware from "../Middleware/authMidlleware.js";
const router = express.Router();


router.use(authMiddleware);

router.post("/", addToWatchlist);

router.delete("/:id",removeFromWatchlist);
router.put("/:id",updateWatchlistItem);


export default router;