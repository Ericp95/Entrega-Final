// model
import { db } from "../config/db.js";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  collectionGroup,
} from "firebase/firestore";

const productCollection = collection(db, "productos");
const userCollection= collection(db,"usuarios");

export const getAllProducts = async () => {
  try {
    const productList = await getDocs(productCollection);
    const products = [];
    productList.forEach((doc) => products.push({ id: doc.id, ...doc.data() }));

    return products;
  } catch (error) {
    throw new Error("Error", error.message);
    
  }
};

//_________________
export const getProducts = async (id) => {
  try {
    //const productList = await getDoc(productCollection,id);
    const products = doc(db, "productos", id);
    
    const products1= await getDoc(products)
    

    return products1.data();
  } catch (error) {
    throw new Error("Error", error.message);
  }
  
};

//__________________

export const saveProduct = async (product) => {
  try {
    const newProduct = await addDoc(productCollection, product);
    return newProduct
  } catch (error) {
    throw new Error("Error", error.message);
  }
};


//_________________
export const deleteProducts = async (id) => {
  try {
    //const productList = await getDoc(productCollection,id);
    const products = doc(db, "productos", id);
    
    const products1= await deleteDoc(products)
    

    return products1;
    
  } catch (error) {
    throw new Error("Error", error.message);
  }
  
};

//__________________

//creando el token