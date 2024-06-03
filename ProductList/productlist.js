
import Products  from './products'

 function ProductList(props)
 {
    //console.log(props.newProduct)
    
    //let[newProductList,updateProductList]=useState(products)
    //updateProductList([props.newProduct,...Products])

    return props.newProduct.length===0?<h3>no products</h3>:
    (
        
       
        //<CreateProduct createProduct={createProduct}></CreateProduct>
        
         <ul class="list-group shadow">
         
         {
          props.newProduct.map((product)=>
          {
              return (<Products 
              key={product.pID}
              id={product.pID}
              name={product.pName}
              description={product.desc}
              isAvailable={product.isAvailable}
              imageUrl={product.image}
              price={product.price}>
  
              </Products>
              )
          })
         }
        </ul>
       

  
  
  
  )
 }

 export default ProductList;