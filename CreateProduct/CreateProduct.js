import ProductForm from "./ProductForm";
import React,{useState} from "react";
function CreateProduct(props)
{
    let[showfrom,updateshowform]=useState(false)

    function  onCreateProduct(product)
    {
       props.createProduct(product);
    }
    function onCreateNewProduct()
    {
        updateshowform(true);
    }
    function onProductSubmittedOrCancelled()
    {
        updateshowform(false);
    }
    return (
        
            <div  style={{backgroundColor:'white',padding:'10px 20px',borderRadius:5}}>
               {!showfrom && <button onClick={onCreateNewProduct}>create Product</button>}
               {showfrom &&   <ProductForm createProduct={onCreateProduct} onCancel={onProductSubmittedOrCancelled}></ProductForm>}             
            </div>
    )
}
export default CreateProduct;
