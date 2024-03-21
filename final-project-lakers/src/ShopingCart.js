function shopingCart(props){
    return(
        <div>
            <div>Name:{props.name}</div>
            <div>Price:{props.price}</div>
            <div>Qty:{props.Qty}</div>
            <input type='button' value='delete' 
            onClick={props.deleteItem}
            />
        </div>
    )
}
export default shopingCart;