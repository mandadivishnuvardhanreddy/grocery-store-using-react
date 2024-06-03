import './FilterProduct.css'
function FilterProduct(props)
{
    function onfilterValueChanged(event)
    {
        //console.log(event.target.value)
         props.FilterProduct(event.target.value) 
    }
    return(
    <div className="filter-area">
     <select name="isAvailable" onChange={onfilterValueChanged}>
         <option value="all">All</option>
         <option value="available">Available</option>
         <option value="unavailable">Unavailable</option>
     </select>
</div>
    )
}
export default FilterProduct;