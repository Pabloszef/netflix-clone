import express from "express";
import {getTrendingTV, getTvTrailers, getTvDetails, getTVsByCategory, getSimilarTVs} from "../controller/tv.controller.js";


const router = express.Router();

router.get("/trending", getTrendingTV)
router.get("/:id/trailers", getTvTrailers)
router.get("/:id/details", getTvDetails)
router.get("/:id/similar", getSimilarTVs)
router.get("/:category", getTVsByCategory)


export default router
