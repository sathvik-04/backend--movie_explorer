import express from "express";

import { addToWatchlist, removeFromWatchlist, updateWatchlistItem } from "../controllers/watchlistcontroller.js";
import authMiddleware from "../Middleware/authMidlleware.js";
import { validateRequest } from "../Middleware/validateRequest.js";
const router = express.Router();


router.use(authMiddleware);

router.post("/", validateRequest(addToWatchlistSchema), addToWatchlist);

router.delete("/:id",removeFromWatchlist);
router.put("/:id",updateWatchlistItem);


export default router;