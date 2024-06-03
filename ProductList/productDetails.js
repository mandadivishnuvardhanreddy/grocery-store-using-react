import React,{useState} from 'react';
import Button from './Button';
let style={
    padding:'8px 14px',
    'font-size':12
  }
function ProductDetails(props)
{
    let badgeClass = 'badge-margin-left-240 badge ';
    badgeClass +=  props.isAvailable ? 'bg-success' : 'bg-danger';
     let [pc,updatecount]=useState(0);
    let incrementCount=function()
    {
        //pc++;
        //console.log(pc);
        updatecount(pc++);

    }
    let decrementCount=function()
    {
        updatecount(pc--);

    }

    return (
    <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2" style={{'margin-right':30}}>$120</h6>
            
            
            <Button eventHandler={decrementCount}children='222' disable={pc==0}>-</Button>
            <span style={style}>{pc}</span>
            <Button eventHandler={incrementCount}>+</Button>
            {console.log(props.isAvailable)}
            <span className={badgeClass}>{props.isAvailable ? 'Available' :'Unavailable'}</span>
            
          </div>
) }
export default ProductDetails;