import "./reset.css";
import "./App.css";
import CartList from './Components/CartList'
import Header from './Components/Header'
import { useState, useEffect } from "react";
import CartTotal from './Components/CartTotal'
import ProductList from "./Components/ProductsList";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  
  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() =>{
    setFilteredProducts(products)
  }, [products])

  const showProducts = (input) =>{
    const result = products.filter(({name}) => name.toLowerCase().includes(input.toLowerCase()))
    input.length > 0 ?
    setFilteredProducts(result)
    : setFilteredProducts(products)
  }

  const deleteAll = (list) =>{
    const result = currentSale.filter(({id}) => id === list)
    setCurrentSale(result)
  }

  const handleClick = (productId) => {
    const validation = currentSale.some(({id}) => id === productId)
    const result = products.find(({ id }) => id === productId)
    !validation && setCurrentSale([...currentSale, result])
  };

  const moveToTrash = (item) => {
    const result = currentSale.filter((element) => element !== item);
    setCurrentSale(result);
  }

  return (
    <>
      <Header showProducts={showProducts}/>
      <div className="main">
      <ProductList products={filteredProducts} handleClick={handleClick} />
      <div>
      <CartList currentSale={currentSale} moveToTrash={moveToTrash}/>
      {currentSale.length > 0 && <CartTotal currentSale={currentSale} deleteAll={deleteAll}/>}
      </div>
      </div>
      </>
  );
}

export default App;
