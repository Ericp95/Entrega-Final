//router
import { Router } from "express";
import productController from "../controllers/product.controller.js";
//import { authentication } from "../middleware/auth.middleware.js";


const router = Router();

router.get("/",productController.getProducts);
router.get("/:id", productController.getOneProducts);

router.post("/create", productController.createProduct);
router.delete("/:id", productController.deleteProducts);



export default router;