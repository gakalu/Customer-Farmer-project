function CreateProduct(props) {
  return (
    <div>
      Name:
      <input type="text"  onChange= {props.nameChange} />
      Price:
      <input type="text" onChange= {props.priceChange}/>
      <input type = 'button' value = 'Add' onClick={props.addToList}

      />
    </div>
  );
}
export default CreateProduct;
