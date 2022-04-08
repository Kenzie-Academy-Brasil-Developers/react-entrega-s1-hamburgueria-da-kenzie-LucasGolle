import "./styles.css"

const Cart = ({name, category, img}) =>{

    return (
        <>
        <li className="produtosCarrinho">
            <img className="imgCarrinho" src={img} alt=""/>
            <div className="titulosCarrinho">
            <h1 className="tituloCarrinhoAdd">{name}</h1>
            <h3 className="subTituloCarrinho">{category}</h3>
            </div>
        </li>
        </>
    )

}

export default Cart