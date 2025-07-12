import express from "express";
import { join, __dirname } from "./utils/index.js";
import productRoutes from "./routes/product.route.js";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.routes.js";



//settings
const app = express();
app.set("PORT", 5000);

// middlewares
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.use(bodyParser.json());
 

//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});
 app.use("/api/products", productRoutes);
 app.use("/api/products/create",productRoutes)

 app.use("/auth", authRoutes);

 app.post("generaterToken",(req,res)=>{
  const{username,password}=req.body
 })

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});