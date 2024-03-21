import { withRouter } from "react-router"

 function FarmerProduct(props){
    return(
        <body>
        <div>
            <div>Image: {props.src}</div>
            <div>Name: { props.title}</div>
            <div>content:{props.content}</div>
            <div>Price: {props.price}</div>
            <div>Colors: {props.colors}</div>
            <div>Quantity: {props.count}</div>
            {/* <input className='add' type = 'button'
                       value = 'Add Produt'
                       onClick ={props.addButton}
                       /> */}
            <div>
                <input className='update' type = 'button'
                       value = 'Update'
                       onClick = {props.updateButton}
                       />
                <input className='delete' type = 'button'
                       value = 'Delete'
                       onClick = {props.deleteButton}
                       />
             
            </div>
        </div>
        </body>
    )
}
export default withRouter(FarmerProduct)
