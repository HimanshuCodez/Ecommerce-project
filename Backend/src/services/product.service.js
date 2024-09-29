import Category from "../models/category.model.js";
import Product from "../models/product.model.js";

async function createProduct(reqData){
    let topLevel= await Category.findOne({name:reqData.topLevelCategory});

    if (!topLevel) {
        topLevel= new Category({
            name:reqData.topLevelCategory,
            level:1
        })
        
    }
    let secondLevel= await Category.findOne({
        name:reqData.secondLevelCategory,
        parentCategory: topLevel._id,
        
    });

    if (!secondLevel) {
        secondLevel= new Category({
            name:reqData.secondLevelCategory,
            parentCategory:topLevel._id,
            level:2
        })
        
    }
    let thirdLevel= await Category.findOne({name:reqData.thirdLevelCategory,
        parentCategory: secondLevel._id,
        
    });

if (!thirdLevel) {
        thirdLevel= new Category({
            name:reqData.thirdLevelCategory,
            parentCategory:secondLevel._id,
            level:3
        })


}
const product = new Product({
    title=reqData.title,
    color:reqData.color,
    description:reqData.description,
    discountedPercent:reqData.discountedPercent,
    imageUrl:reqData.imageUrl,
    brand:reqData.brand,
    price:reqData.price,
    sizes:reqData.size,
    quantity:reqData.quantity,
    category:thirdLevel._id
})
return await product.save();
}

async function deleteProduct(productId){
    const product =  await findProductById(productId);

    await Product.findByIdAndDelete(productId);
    return "Product deleted successfully";
}
async function updateProduct(productId,reqData){
    return await Product.findByIdAndUpdate(productId,reqData)
}

async function findProductById(id) {
    const product = await Product.findById(id).populate("category").exec();
    if (!product) {
        throw new Error("product not found with id"+id);
         
    }
    return product;
}   


async function getAllProducts (){
    let {category,color,    }
}



