import React,{useState} from "react";
function ProductForm(props)
{
    /*let[userInput,updatedUserInput]=useState({
        pName:'',
        pPrice:'',
        pDesc:'',
        pAvail:'', 
        pImage:''
    })*/

    let[pName,UpdateName]=useState('');
    let[pPrice,UpdatePrice]=useState('');
    let[pDesc,UpdateDesc]=useState('');
    let[pAvail,UpdateAvail]=useState('');
    let[pImage,UpdateImage]=useState('');
    


    function nameInputHanler(event)
    {
        /*updatedUserInput({
            ...userInput,
            pName:event.target.value})

        console.log(userInput);*/
       UpdateName(event.target.value)
    }
    function priceInputHanler(event)
    {
        /*updatedUserInput((prevState)=>
        {
          return { ...prevState,
            pPrice:event.target.value}
          })*/
          UpdatePrice(event.target.value)

    }
    function descInputHanler(event)
    {
        UpdateDesc(event.target.value)
        
    }
    function availInputHanler(event)
    {
       UpdateAvail(event.target.value)
    }
    function imageInputHanler(event)
    {
       UpdateImage(event.target.value)
    }
    function createProductEventHandler(event)
    {
        event.preventDefault();
        let product={
            pName:pName,
            desc:pDesc,
            isAvailable:Boolean(pAvail),
            image:pImage,
            price:Number(pPrice)

        }
        props.createProduct(product);
        console.log(product)
        props.onCancel()
        UpdateName('');
        UpdateAvail('');
        UpdateDesc('');
        UpdateImage('');
        UpdatePrice('');
       
    }
    
    return (
        <form className="row g-3" onSubmit={createProductEventHandler}>
        <div className="col-md-6">
            <label for="name">Product Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Product Name" 
                    value={pName}
                    onChange={nameInputHanler}/>
        </div>
        <div className="col-md-6">
            <label for="price">Product Price</label>
            <input type="number" 
                    min="0.01" step="0.01" 
                    className="form-control" 
                    id="price" 
                    placeholder="Product Price"
                    value={pPrice}
                    onChange={priceInputHanler} />
        </div>

        <div className="form-group">
            <label for="description">Product Description</label>
            <input type="text" 
                    className="form-control" 
                    id="description" 
                    placeholder="Product Description" 
                    value={pDesc}
                    onChange={descInputHanler}/>
        </div>

        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="isAvailable"  onChange={availInputHanler} />
            <label class="form-check-label" for="isAvailable">Is product available in stock?</label>
            
        </div>

        <div className="form-group">
            <label for="select-image">Select product image</label>
            <input type="file" className="form-control" id="select-image" value={pImage} onChange={imageInputHanler}/>
        </div>
        

        <button type="submit" className="btn btn-primary">Add Product</button>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        </form>
    
  );
}
export default ProductForm;