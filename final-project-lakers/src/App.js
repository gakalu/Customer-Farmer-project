//import logo from './logo.svg';
import "./App.css";
// import Product from './Product';
import CreateProduct from './CreateProduct';
//import shopingCart from './shopingCart';
import React from "react";
import Product from "./Product";
import ShopingCart from "./ShopingCart";
import shopingCart from "./ShopingCart";
class App extends React.Component {
  state={
    products:[
  {id:1,name:'Banna',price:20},
  {id:2 ,name:'apple',price:10}
  ],
  shopingCart:[],
  shopedItem:{id:0,name:'',price:0,Qty:0},
  newProduct:{id:3,name:'',price:0}
  }
  deleteItemList=(id)=>{
    let result=this.state.products.filter((item)=>{
     return item.id!==id;
    })
    this.setState({products:result})
  }
  changeName=(event)=>{
    let copy={...this.state.newProduct}
    copy.name=event.target.value;
    this.setState({newProduct:copy})
  }
  changePrice=(event)=>{
    let copy={...this.state.newProduct}
    copy.price=event.target.value;
    this.setState({newProduct:copy})
  }
  addToList=()=>{
    let copy={...this.state.newProduct}
    copy.id=copy.id+1
    this.setState({newProduct:copy})
    this.setState({products:this.state.products.concat(this.state.newProduct)})
  }
  addToCart=(id)=>{
    let p=this.state.products.find((item)=>{
      return id===item.id;
    })
    let copy={...this.state.shopedItem}
    copy.name=p.name;
    copy.price=p.price;
    copy.Qty=this.state.shopedItem.Qty+1;
    this.setState({shopingCart:this.state.shopingCart.concat(p)})
  }
  deleteItem=(id)=>{
    let result=this.state.shopingCart.find((item)=>{ 
    return id===item.id
    })
    if(result.Qty>1){
      let copy={...this.state.shopedItem}
      copy.Qty=result.Qty-1
      this.setState({shopedItem:result})

    }
    this.setState({shopingCart:null})
  }
 render(){
   return(
<div>
{this.state.products.map((item)=>{
  return(

   <Product
     name={item.name}
     price={item.price}
     addToCart={()=>{this.addToCart(item.id)}}
     deleteItemList={()=>{this.deleteItemList(item.id)}}
     >
   </Product>
   
  )
})}
<div>-----------------------------------------------------</div>
<div>ShopingCart</div>
{this.state.shopingCart.map((item)=>{
  return(
    <ShopingCart
    name={item.name}
    price={item.price}
    Qty={()=>{this.removeQty()}}
    deleteItem={()=>{this.deleteItem(item.id)}}
    ></ShopingCart>
  )
})}
<div>------------------------------------------------------</div>
<div>CreateProduct</div>
<CreateProduct
nameChange={(event)=>{this.changeName(event)}}
priceChange={(event)=>{this.changePrice(event)}}
addToList={()=>{this.addToList()}}
> 
</CreateProduct>
</div>
   )
 } 
}
export default App;
