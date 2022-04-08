import "./styles.css"

const CartTotal = ({currentSale, deleteAll}) =>{

    const result = currentSale.reduce((a, {price}) => a + price, 0)
    return (
        <>
          <div className="divTotalMoney">
            <div className="tituloValor">
              <h1 className="titleValue">Total</h1>
            <span className="toralValue">R$ {result.toFixed(2)}</span>
            </div>
          <button onClick={(e) => deleteAll(e.target)} className="buttonRemover">Remover todos</button>
          </div>
        </>
      );

}

export default CartTotal