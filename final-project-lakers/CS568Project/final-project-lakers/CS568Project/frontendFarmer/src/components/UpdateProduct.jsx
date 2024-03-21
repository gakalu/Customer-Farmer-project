import axios from "axios";
import React from "react";
export default class UpdateProduct extends React.Component {

    state = {
        products: [], updatedProduct: {
                title:'', src: '', content: '', price: '', clolors: '', count: 0
        }
    }
componentDidMount() {
    axios.get('/books').then((response)=>{
        let copy = {...this.state.products}
        copy = response.data
        this.setState({products: copy})
    })
}

    propertyOnchange = (event)=>{
        
        let copy = {...this.state.updatedProduct}
        copy[event.target.value] = event.target.value
        this.setState({updatedProduct: copy})
        console.log(this.state.updatedProduct)
    }

    applyButtonClicked = (id)=>{
        console.log(this.props)
        axios.put('/books'+id, this.state.updatedProduct).then((response)=>{
        })
        // let upd = this.state.products.find((item)=>{
        //     return item.id === id
        // })
        // console.log(upd)
        // let copy1 = {...this.state.updatedProduct}
        // copy1 = upd;
        // this.setState({updatedProduct: copy1})
        // let result = this.state.products.filter((item)=>{
        //     return item.id !== id;
        // })
        // result.concat(this.state.updatedProduct)
        // this.setState({products: result})

        console.log(this.state.updatedProduct)
    }
    // updateButtonClicked = (id)=>{
    //     let result = this.state.products.find((item) => {
    //         return item.id === id
    //       })
    //       console.log(result)
    //       let copy = { ...this.state.updatedProduct }
    //       copy = result;
    //       this.setState({ updatedProduct: copy })
    //               console.log(this.state.updatedProduct)

    // }
    render(){
        return(
            <div>
                <h4>Update Product</h4>
                <div size='20px'>Name:</div> <input type = 'text'
                                  placeholder = 'title'
                                  name = 'title'
                                  onChange = {(event)=>{this.propertyOnchange(event)}}/>
                <div size='20px'>Src:</div> <input type = 'text'
                                  placeholder = 'src'
                                  name = 'src'
                                  onChange = {(event)=>{this.propertyOnchange(event)}}/>
                <div size='20px'>Content:</div> <input type = 'text'
                                  placeholder = 'content'
                                  name = 'content'
                                  onChange = {(event)=>{this.propertyOnchange(event)}}/>
                <div size='20px'>Price:</div> <input type = 'text'
                                  placeholder = 'price'
                                  name = 'price'
                                  onChange = {(event)=>{this.propertyOnchange(event)}}/>
                <div size='20px'>Colors:</div> <input type = 'text'
                                  placeholder = 'colors'
                                  name = 'colors'
                                  onChange = {(event)=>{this.propertyOnchange(event)}}/>
                <div size='20px'>Count:</div> <input type = 'text'
                                  placeholder = 'count'
                                  name = 'count'
                                  onChange = {(event)=>{this.propertyOnchange(event)}}/>
                {/* <div><input type = 'button'
                            value = 'Update'
                            onClick = {this.updateButtonClicked}
                            /></div> */}
                <div><input type = 'button'
                            value = 'Apply'
                            onClick = {()=>{alert("Product updated Successfully!")}}
                           
                            /></div>
            </div>
        )
    }
}
