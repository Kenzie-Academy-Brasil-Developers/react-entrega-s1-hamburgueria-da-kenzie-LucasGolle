import Products from "../Product"
import "./styles.css"

const ProductList = ({products, handleClick}) =>{

        return(
            <>
            <ul className="carrosselImagem">
            {products.map(({id, name, category, price, img}) => (
                <Products id={id} name={name} category={category} price={price} img={img} handleClick={handleClick}/>
            ))} 
            </ul>
            </>
        )

}

export default ProductList