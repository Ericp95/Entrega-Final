// services
import { getAllProducts,getProducts, saveProduct,deleteProducts } from "../models/product.model.js";

const getAll = async () => {
  return await getAllProducts();
};

const getOne = async (id) => {
  return await getProducts(id);
};



const createProduct = async (product) => {
  return await saveProduct(product);
};

const deleteProduct = async (id) => {
  return await deleteProducts(id);
};




export default { getAll,getOne, createProduct, deleteProduct };