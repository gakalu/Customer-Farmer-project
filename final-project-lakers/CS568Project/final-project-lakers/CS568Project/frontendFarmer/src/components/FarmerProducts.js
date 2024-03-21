import React from "react";
import axios from "axios";
import FarmerProduct from "./FarmerProduct";
// import AddProduct from "./AddProduct";
// import UpdateProduct from "./UpdateProduct";
// import Signup from "./Signup";

export default class FarmerProducts extends React.Component {
    state = {
        products: [],
        updatedProduct: {
            title:'newTitle1', src: '', content: '', price: '', clolors: '', count: 0
    },
        isAdded: false
    }
    
    componentDidMount() {
        axios.get('/books').then((resposne)=>{
            console.log(resposne.data)
            let copy = {...this.state}
            copy.products = resposne.data;
            
            this.setState(copy)
        })
        
    }
    
    updateButton = (id)=>{
        console.log(this.state.updatedProduct)
        this.props.history.push({pathname:'/update-product/'+id, state:{products: this.state.products, updatedProduct: this.state.updatedProduct}}) 
console.log(this.props)
    }

    addButton = (id)=>{
        console.log(this.props)
        this.props.history.push('/add-product/'+id) 
    }
    
    deleteButtonHandler = (id)=>{
        axios.delete('/books/'+id).then((response)=>{
            
           alert('Do you want to remove this product?')
            
        })
        axios.get('/books').then((response)=>{
            let copy = {...this.state}
            copy.products = response.data
        this.setState(copy);
        
        })
        
    }
    // propertyOnchange = (event)=>{
    //     let copy = {...this.state.updatedProduct}
    //     copy[event.target.value] = event.target.value
    //     this.setState({updatedProduct: copy})
        
    // }
    // updateButtonClicked = (id)=>{
    //     this.setState({isAdded: true})
    //     let result = this.state.products.find((item) => {
    //         return item.id === id
    //       })
    //       console.log(result)
    //       let copy = { ...this.state.updatedProduct }
    //       copy = result;
    //       this.setState({ updatedProduct: copy })
    // }
    
    render(){
        return (
            <div>
           
                {this.state.products.map((item)=>{
                    return (
                        <body className='div2'>
                        <div ><FarmerProduct
                        key = {item.id}
                        title = {item.title}
                        src = {
                            <img src = {item.src} alt= '' width='100'></img>}
                        content = {item.content}
                        price = {item.price}
                        colors = {item.colors}
                        count = {item.count}
                        addButton = {()=>{this.addButton(item._id)}}
                        deleteButton = {()=>{this.deleteButtonHandler(item._id)}}
                        updateButton = {()=>{this.updateButton(item._id)}}
                        ></FarmerProduct>
                        </div>
                        </body> 
                    )
                }
                   )}
                   <div><input className='add' type = 'button' size='50px'
                       value = 'Add Produt'
                       onClick ={this.addButton}
                       /></div>
                {/* {this.state.isAdded?<UpdateProduct></UpdateProduct> : null } */}
            </div>
        )
    }
}
