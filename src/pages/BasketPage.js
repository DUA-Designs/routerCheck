import React from "react";
import {connect} from 'react-redux';
import { removeFromBasket } from "../redux/action";
import { basketItems } from "../data";

const BasketPage=({BasketItems,removeFromBasket})=>{
    const handleRemoveFromBasket=(productId)=>{
        removeFromBasket(productId);
    }

    return (<div>
        <h1>Basket</h1>
        <ul>
            {basketItems.map(product=><li key={product.id}>{product.name}---{product.price}---{product.quantity} <button onClick={()=>handleRemoveFromBasket(product.id)}>Remove</button></li>)}
        </ul>
    </div>)

}

const mapStateToProps=(state)=>{
    return {basketItems:state.basket.basketItems};
}
const mapDispatchToProps=(dispatch)=>{
    return {removeFromBasket:(productId)=>dispatch(removeFromBasket(productId))};
}
export default connect(mapStateToProps,mapDispatchToProps)(BasketPage);