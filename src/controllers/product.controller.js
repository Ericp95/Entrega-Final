// controller
import productService from "../service/product.service.js";
const getProducts = async (req, res) => {
  try {
    const products = await productService.getAll();
    res.status(200).json({ message: "Lista de productos", payload: products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};
const getOneProducts = async (req, res) => {
  try {
    const{id}=req.params
    const products = await productService.getOne(id);
    res.status(200).json({ message: "Producto Id seleccionado", payload: products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};



const createProduct = async (req, res) => {
  try {
    const { nombre, precio, disponible } = req.body;
    // validar campos
    const newProduct = {
      nombre,
      precio: +precio,
      disponible: disponible || false,
    };

     await productService.createProduct(newProduct);
    res.status(200).json({ message: "Lista de productos", payload: newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};

const deleteProducts = async (req, res) => {
  try {
    
    const{id}=req.params
    const products = await productService.deleteProduct(id);
    res.status(200).json({ message: "Producto, ha sido eliminado con exito", payload: products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};



export default { getProducts,getOneProducts, createProduct, deleteProducts };