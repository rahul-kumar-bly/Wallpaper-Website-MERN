import express from 'express';
import {uploadWallpaper, uploadFileMiddleware, getWallpapers, getWallpaper} from "../controllers/wallpaper.controller.js";

const router = express.Router();

router.get('/test', (req, res) => {
    res.send('Wallpaper route is working');
    console.log('Wallpaper route test endpoint hit');
});

router.post('/upload', uploadFileMiddleware, uploadWallpaper);
router.get('/get', getWallpapers);
router.get('/get/:id', getWallpaper);
export default router;