import axios from "axios";
import React from "react";
import { withRouter } from "react-router";
 class AddProduct extends React.Component {
    state = {
        products: [],
        newProduct: {
            title:'', src: '', content: '', price: '', clolors: '', count: 0
        },
        isadded:false
    }
    componentDidMount() {
        axios.get('/books').then((response)=>{
            let copy = {...this.state.products}
            copy = response.data;
            this.setState({products: copy})
        })
        
    }
    
    propertyOnchange = (event)=>{
        let copy = {...this.state.newProduct}
        copy[event.target.name] = event.target.value
        this.setState({newProduct: copy})
        
    }

    addButtonClicked = ()=>{
        console.log(this.state.newProduct)
        axios.post('/books', this.state.newProduct).then((response)=>{
            alert("New Product Added Successfully!")
        })
        axios.get('/books').then((response)=>{
            let copy = {...this.state.products}
            copy = response.data;
            this.setState({products: copy})
        })
    }
    
    render(){
        return(
            <div>
                <h4>Add New Product</h4>
                <div size='20px'>Name:</div> <input type = 'text'
                                  placeholder = 'title'
                                  name = 'title'
                                  onChange = {(event)=>this.propertyOnchange(event)}/>
                <div size='20px'>Src:</div> <input type = 'text'
                                  placeholder = 'src'
                                  name = 'src'
                                  onChange = {(event)=>this.propertyOnchange(event)}/>
                <div size='20px'>Content:</div> <input type = 'text'
                                  placeholder = 'content'
                                  name = 'content'
                                  onChange = {(event)=>this.propertyOnchange(event)}/>
                <div size='20px'>Price:</div> <input type = 'text'
                                  placeholder = 'price'
                                  name = 'price'
                                  onChange = {(event)=>this.propertyOnchange(event)}/>
                <div size='20px'>Colors:</div> <input type = 'text'
                                  placeholder = 'colors'
                                  name = 'colors'
                                  onChange = {(event)=>this.propertyOnchange(event)}/>
                <div size='20px'>Count:</div> <input type = 'text'
                                  placeholder = 'count'
                                  name = 'count'
                                  onChange = {(event)=>this.propertyOnchange(event)}/>
                <div><input type = 'button'
                            value = 'Add Product'
                            onClick = {this.addButtonClicked}
                            /></div>
            </div>
        )
    }
}

export default withRouter(AddProduct)
