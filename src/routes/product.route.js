//router
import { Router } from "express";
import productController from "../controllers/product.controller.js";
import { authentication } from "../middleware/authentication.js";
//import { authentication } from "../middleware/auth.middleware.js";


const router = Router();

router.get("/",authentication,productController.getProducts);
router.get("/:id", authentication, productController.getOneProducts);

router.post("/create", authentication, productController.createProduct);
router.delete("/:id",authentication, productController.deleteProducts);



export default router;