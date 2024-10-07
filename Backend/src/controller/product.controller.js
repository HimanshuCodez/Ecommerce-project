import { createProduct , deleteProduct, updateProduct,findProductById,getAllProduct,createMultipleProduct} from "../services/product.service.js"

const createProducts =async(req,res)=>{

    try {
        const product = await createProduct(req.body);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}
const deleteProducts =async(req,res)=>{
const productId= req.params.id;
    try {
        const product = await deleteProduct(productId);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}
const updateProducts =async(req,res)=>{
const productId= req.params.id;
    try {
        const product = await  updateProduct(productId,req.body);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}


const findProductByIds =async(req,res)=>{
const productId= req.params.id;
    try {
        const product = await  findProductById(productId);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}
const getAllProducts =async(req,res)=>{
const productId= req.params.id;
    try {
        const products = await  getAllProducts(req.query);
        return res.status(201).send(products);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}
const createMultipleProducts =async(req,res)=>{
const productId= req.params.id;
    try {
        const products = await  createMultipleProduct(req.body);
        return res.status(201).send("products created succesfully");
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

export{
    createProducts,deleteProducts,updateProducts,findProductByIds,getAllProducts,createMultipleProducts
}
