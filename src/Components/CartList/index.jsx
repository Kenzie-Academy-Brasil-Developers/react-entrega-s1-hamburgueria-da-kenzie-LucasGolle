import Cart from ".././Cart"
import CarrinhoVazio from ".././CarrrinhoVazio"
import { FaTrash } from "react-icons/fa";
import "./styles.css"

const CartList = ({currentSale, moveToTrash}) =>{

        return(
            <>
            <div className="cointeinerCarrinho">
            <ul className="carrinho">
            <h1 className="tituloCarrinho">Carrinho de compras</h1>
            {currentSale.length < 1 ? <CarrinhoVazio/>
            : <> {currentSale.map((item) => (
                <>
                <div className="cardCarrinho">
                <Cart name={item.name} category={item.category} img={item.img}/>
                <FaTrash className="lixeira" onClick={() => moveToTrash(item)}/>
                </div>
                </>
            ))}</>}
            </ul>
            </div>
            </>
        )

}

export default CartList