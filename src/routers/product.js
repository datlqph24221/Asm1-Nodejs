import express from "express";
import { create, get, getById, remove, update } from "../controllers/product";

const productRouter = express.Router()

productRouter.get('/products', get)
productRouter.get('/products/:id', getById)
productRouter.post('/products-add', create)
productRouter.put('/products/:id', update)
productRouter.delete('/products/:id', remove)

export default productRouter